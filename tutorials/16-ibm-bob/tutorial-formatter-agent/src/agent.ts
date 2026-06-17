/**
 * agent.ts
 *
 * Core formatting agent. Responsibilities:
 *   1. Load the universal TUTORIAL_TEMPLATE.mdx as the style guide.
 *   2. Accept an input Markdown tutorial and a list of keywords to preserve.
 *   3. Call IBM watsonx.ai (via @ibm-cloud/watsonx-ai SDK) with a structured
 *      system prompt derived from the template's style rules.
 *   4. Stream the formatted MDX back to the caller.
 *
 * The agent is intentionally stateless — each call is independent.
 * Conversation history is NOT maintained between runs; the entire
 * template + input + keywords are passed in a single prompt.
 *
 * Required environment variables (set in .env):
 *   WATSONX_API_KEY     — IBM Cloud API key
 *   WATSONX_PROJECT_ID  — watsonx.ai project ID
 *   WATSONX_URL         — service URL, e.g. https://us-south.ml.cloud.ibm.com
 */

import fs from "node:fs/promises";
import path from "node:path";
import { WatsonXAI } from "@ibm-cloud/watsonx-ai";
import { IamAuthenticator } from "@ibm-cloud/watsonx-ai/authentication";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FormatOptions {
  /** Absolute or relative path to the raw Markdown tutorial to format. */
  inputPath: string;
  /** Absolute or relative path to the TUTORIAL_TEMPLATE.mdx style guide. */
  templatePath: string;
  /** Keywords/terms the agent must preserve verbatim in the output. */
  keywords: string[];
  /** IBM Cloud API key. */
  apiKey: string;
  /** watsonx.ai project ID. */
  projectId: string;
  /** watsonx.ai service URL, e.g. https://us-south.ml.cloud.ibm.com */
  serviceUrl: string;
  /**
   * Model ID override.
   * Defaults to "ibm/granite-3-3-8b-instruct".
   * Other strong options: "meta-llama/llama-3-3-70b-instruct",
   * "mistralai/mistral-large".
   */
  model?: string;
}

export interface FormatResult {
  /** Formatted MDX string. */
  mdx: string;
  /** Suggested output filename derived from the input path. */
  suggestedOutputPath: string;
}

// ─── Prompt builders ─────────────────────────────────────────────────────────

/**
 * Build the system prompt from the template file.
 * Extracts the STYLE RULES comment block so the LLM understands
 * exactly what the template enforces, then appends operational rules.
 */
function buildSystemPrompt(templateContent: string, keywords: string[]): string {
  // Pull the STYLE RULES section out of the template's comment footer
  const styleRulesMatch = templateContent.match(/STYLE RULES.*?(?=\*\/|-->)/s);
  const styleRules = styleRulesMatch
    ? styleRulesMatch[0].trim()
    : "Follow the formatting conventions in the provided template.";

  const keywordList =
    keywords.length > 0
      ? keywords.map((k) => `  - ${k}`).join("\n")
      : "  (none specified)";

  return `\
You are a technical writing agent that reformats IBM Bob tutorials into the \
bob.ibm.com MDX publication style.

═══════════════════════════════════════════════════════════════
STYLE RULES (derived from the universal tutorial template)
═══════════════════════════════════════════════════════════════
${styleRules}

═══════════════════════════════════════════════════════════════
STRUCTURAL REQUIREMENTS
═══════════════════════════════════════════════════════════════
The output MUST follow this exact section order:
1.  YAML frontmatter block (--- title / description ---)
2.  Carbon icon imports from '@carbon/icons-react'
3.  ## Introduction  (1 paragraph + ### Key features you will learn bullet list)
4.  ## Prerequisites  (one sentence + <Cards> component)
5.  ## Set up your workspace  (inside <Steps><Step> … </Step></Steps>)
6.  One or more ## Task sections  (major phases of the tutorial)
7.  ## Next steps  (3–4 bullet links)

Rules for each element:
- YAML frontmatter: title ≤ 60 chars, action-oriented; description 1–2 sentences.
- Carbon imports: import only icons actually used in <Cards>.
- Prose: active voice, second-person ("you"/"your"), present tense. Never "we", "our", "let's".
- Prompts the reader sends to Bob: plain \`\`\`text fenced block.
- Bob's responses the reader should observe: <NoCopy> wrapper around a fenced block.
- File content / generated code: language-tagged fenced block (e.g., \`\`\`json, \`\`\`typescript).
- Terminal commands: \`\`\`bash fenced block.
- Screenshots: standard Markdown image syntax — ![alt text](/images/filename.png). Never <img> tags.
- Numbered procedures: only inside <Steps><Step> … </Step></Steps>.
- Bullet lists: for unordered items (features, requirements, outputs).
- No author bylines, no promotional language, no rhetorical questions.
- Each H2 section must begin with one orienting sentence.
- No paragraph in an instructional section longer than 4 sentences.
- Optional sections: label explicitly with "(Optional)" in the H2 heading.

═══════════════════════════════════════════════════════════════
KEYWORDS TO PRESERVE
═══════════════════════════════════════════════════════════════
The following keywords/terms MUST appear in the formatted output.
Weave them naturally into the prose — do not list them artificially.
${keywordList}

═══════════════════════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════════════════════
- Output ONLY the final formatted MDX. No preamble, no explanation,
  no markdown code fence wrapping the entire output.
- Begin directly with the --- YAML frontmatter block.
- Preserve all original technical accuracy — do not invent steps,
  commands, or code that does not exist in the source material.
- Trim verbose analogies, first-person language, and repetitive
  explanations to make the article more concise.
- Keep all code blocks from the source — do not omit generated code.
`;
}

/**
 * Build the user message containing the template structure + raw tutorial.
 */
function buildUserMessage(
  templateContent: string,
  rawTutorial: string
): string {
  return `\
Below is the universal tutorial template showing the required MDX structure,
followed by the raw tutorial to format. Apply the template's structure and
the style rules from your system prompt to produce the final MDX output.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UNIVERSAL TEMPLATE (structure reference)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${templateContent}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RAW TUTORIAL TO FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${rawTutorial}
`;
}

// ─── Main agent ───────────────────────────────────────────────────────────────

/**
 * Main entry point for the formatting agent.
 * Returns the formatted MDX string and a suggested output file path.
 *
 * @param options  - Configuration for this formatting run.
 * @param onChunk  - Optional streaming callback; called with each text chunk
 *                   as the LLM produces it so the CLI can display progress.
 */
export async function formatTutorial(
  options: FormatOptions,
  onChunk?: (chunk: string) => void
): Promise<FormatResult> {
  const {
    inputPath,
    templatePath,
    keywords,
    apiKey,
    projectId,
    serviceUrl,
    model = "openai/gpt-oss-120b",
  } = options;

  // ── Load source files ────────────────────────────────────────────────────
  const [rawTutorial, templateContent] = await Promise.all([
    fs.readFile(inputPath, "utf-8"),
    fs.readFile(templatePath, "utf-8"),
  ]);

  // ── Build prompts ────────────────────────────────────────────────────────
  const systemPrompt = buildSystemPrompt(templateContent, keywords);
  const userMessage = buildUserMessage(templateContent, rawTutorial);

  // ── Initialise watsonx.ai client ─────────────────────────────────────────
  const watsonxClient = WatsonXAI.newInstance({
    authenticator: new IamAuthenticator({ apikey: apiKey }),
    serviceUrl,
    version: "2024-09-16",
  });

  // ── Stream the chat completion ───────────────────────────────────────────
  // returnObject: true must be inside the params object (discriminated overload).
  // It makes the SDK yield ObjectStreamed<TextChatStreamResponse> instead of
  // raw SSE strings, so we can access the parsed choices array.
  const streamResponse = await watsonxClient.textChatStream({
    modelId: model,
    projectId,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user",   content: userMessage   },
    ],
    temperature: 0.2,    // low temperature for deterministic formatting
    maxTokens: 8192,
    returnObject: true,
  });

  // ── Collect streamed chunks ──────────────────────────────────────────────
  let mdx = "";

  for await (const envelope of streamResponse) {
    // Each envelope is ObjectStreamed<TextChatStreamResponse>:
    //   { id, event, data: TextChatStreamResponse }
    // The generated text lives at data.choices[0].delta.content.
    const content = (envelope as {
      data?: { choices?: Array<{ delta?: { content?: string } }> };
    }).data?.choices?.[0]?.delta?.content ?? "";
    if (content) {
      mdx += content;
      onChunk?.(content);
    }
  }

  // ── Derive output path ───────────────────────────────────────────────────
  // Same directory as input, extension → .mdx, suffix -formatted appended.
  const inputDir = path.dirname(inputPath);
  const inputBase = path.basename(inputPath, path.extname(inputPath));
  const suggestedOutputPath = path.join(
    inputDir,
    `${inputBase.replace(/-formatted$/, "")}-formatted.mdx`
  );

  return { mdx, suggestedOutputPath };
}
