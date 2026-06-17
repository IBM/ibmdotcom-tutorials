#!/usr/bin/env node
/**
 * index.ts — CLI entry point for the tutorial-formatter-agent.
 *
 * Usage:
 *   npx tsx src/index.ts [input.md] [--template path/to/TUTORIAL_TEMPLATE.mdx] \
 *                        [--keywords path/to/keywords.txt]
 *   node build/index.js  [input.md] [--template path/to/TUTORIAL_TEMPLATE.mdx] \
 *                        [--keywords path/to/keywords.txt]
 *
 * All arguments are optional — the CLI prompts for anything not supplied.
 *
 * Keywords are loaded automatically from keywords.txt (auto-detected in the
 * workspace root or parent directories). Override with --keywords <path>.
 *
 * Keywords file format:
 *   One keyword or phrase per line. Blank lines and lines starting with #
 *   are ignored. Numbered-list and bullet prefixes are stripped automatically:
 *     # my keywords
 *     1. watsonx.ai
 *     2. IBM Granite
 *     - retrieval-augmented generation
 *
 * Steps performed:
 *   1. Resolve the input tutorial path (arg or interactive prompt).
 *   2. Resolve the template path (arg or auto-detect sibling TUTORIAL_TEMPLATE.mdx).
 *   3. Load keywords from keywords.txt (auto-detected) or --keywords override.
 *   4. Stream the formatted MDX from the agent while showing a spinner.
 *   5. Write the output .mdx file and report the result.
 */

import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import chalk from "chalk";
import ora from "ora";
import { formatTutorial } from "./agent.js";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Prompt the user for a single line of input. */
function prompt(question: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/** Ensure a file path is absolute, resolving relative to cwd. */
function resolvePath(p: string): string {
  return path.isAbsolute(p) ? p : path.resolve(process.cwd(), p);
}

/** Walk up from the agent src/ directory to find TUTORIAL_TEMPLATE.mdx. */
async function findTemplate(): Promise<string | null> {
  // Check the directory one level above the agent package
  const candidates = [
    path.resolve(__dirname, "../../TUTORIAL_TEMPLATE.mdx"),  // build/  → src/ → agent/ → workspace
    path.resolve(__dirname, "../../../TUTORIAL_TEMPLATE.mdx"),
    path.resolve(process.cwd(), "TUTORIAL_TEMPLATE.mdx"),
    path.resolve(process.cwd(), "../TUTORIAL_TEMPLATE.mdx"),
  ];
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // not found at this path, try next
    }
  }
  return null;
}

/** Walk up from cwd to find keywords.txt. */
async function findKeywordsFile(): Promise<string | null> {
  const candidates = [
    path.resolve(process.cwd(), "keywords.txt"),
    path.resolve(process.cwd(), "../keywords.txt"),
    path.resolve(__dirname, "../../keywords.txt"),   // build/ → agent/ → workspace
    path.resolve(__dirname, "../../../keywords.txt"),
  ];
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // not found at this path, try next
    }
  }
  return null;
}

/**
 * Load keywords from a plain-text file.
 *
 * Supported formats (can be mixed in the same file):
 *   - Plain:        watsonx.ai
 *   - Numbered dot: 1. watsonx.ai
 *   - Numbered paren: 1) watsonx.ai
 *   - Dash/bullet:  - watsonx.ai  or  * watsonx.ai
 *
 * Blank lines and lines starting with # are ignored.
 *
 * @throws if the file cannot be read (caller handles the error)
 */
async function loadKeywordsFile(filePath: string): Promise<string[]> {
  const raw = await fs.readFile(filePath, "utf-8");
  return raw
    .split("\n")
    .map((line) => line.trim())
    // Strip numbered-list prefixes (e.g. "1. ", "2) ") and bullet prefixes ("- ", "* ")
    .map((line) => line.replace(/^(\d+[.)]\s+|[-*]\s+)/, "").trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}

/** Parse --flag value pairs from argv. */
function parseArgs(argv: string[]): {
  positional: string[];
  flags: Record<string, string>;
} {
  const positional: string[] = [];
  const flags: Record<string, string> = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith("--") && i + 1 < argv.length) {
      flags[argv[i].slice(2)] = argv[++i];
    } else if (!argv[i].startsWith("--")) {
      positional.push(argv[i]);
    }
  }
  return { positional, flags };
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log(
    chalk.bold.cyan("\n  📄  Tutorial Formatter Agent — IBM Bob style\n")
  );

  // ── 1. Resolve watsonx.ai credentials ────────────────────────────────────
  const apiKey = process.env.WATSONX_API_KEY;
  const projectId = process.env.WATSONX_PROJECT_ID;
  const serviceUrl =
    process.env.WATSONX_URL ?? "https://us-south.ml.cloud.ibm.com";

  const missing = (
    [
      ["WATSONX_API_KEY", apiKey],
      ["WATSONX_PROJECT_ID", projectId],
    ] as const
  )
    .filter(([, v]) => !v)
    .map(([k]) => k);

  if (missing.length > 0) {
    console.error(
      chalk.red(
        `  ✖  Missing required environment variable(s): ${missing.join(", ")}\n` +
          "     Copy tutorial-formatter-agent/.env.example to .env and fill in the values."
      )
    );
    process.exit(1);
  }

  const model =
    process.env.WATSONX_MODEL ?? "openai/gpt-oss-120b";

  // ── 2. Resolve CLI args ───────────────────────────────────────────────────
  const { positional, flags } = parseArgs(process.argv);

  // ── 3. Input tutorial path ────────────────────────────────────────────────
  let inputPath = positional[0]
    ? resolvePath(positional[0])
    : resolvePath(
        await prompt(
          chalk.yellow("  ➜  Path to the raw tutorial Markdown file: ")
        )
      );

  try {
    await fs.access(inputPath);
  } catch {
    console.error(chalk.red(`  ✖  File not found: ${inputPath}`));
    process.exit(1);
  }

  // ── 4. Template path ──────────────────────────────────────────────────────
  let templatePath: string;
  if (flags["template"]) {
    templatePath = resolvePath(flags["template"]);
  } else {
    const autoFound = await findTemplate();
    if (autoFound) {
      console.log(
        chalk.dim(`  ℹ  Using template: ${path.relative(process.cwd(), autoFound)}`)
      );
      templatePath = autoFound;
    } else {
      templatePath = resolvePath(
        await prompt(
          chalk.yellow("  ➜  Path to TUTORIAL_TEMPLATE.mdx: ")
        )
      );
    }
  }

  try {
    await fs.access(templatePath);
  } catch {
    console.error(chalk.red(`  ✖  Template not found: ${templatePath}`));
    process.exit(1);
  }

  // ── 5. Keywords ───────────────────────────────────────────────────────────
  let keywords: string[];

  // Resolve keywords file: explicit flag → auto-detected keywords.txt → none.
  const keywordsFilePath = flags["keywords"]
    ? resolvePath(flags["keywords"])
    : await findKeywordsFile();

  if (keywordsFilePath) {
    try {
      keywords = await loadKeywordsFile(keywordsFilePath);
    } catch {
      console.error(chalk.red(`  ✖  Keywords file not found: ${keywordsFilePath}`));
      process.exit(1);
    }
    console.log(
      chalk.dim(`  ℹ  Loaded ${keywords.length} keyword(s) from: `) +
        chalk.white(path.relative(process.cwd(), keywordsFilePath))
    );
  } else {
    keywords = [];
    console.log(chalk.dim("  ℹ  No keywords.txt found — proceeding without keywords."));
  }

  if (keywords.length > 0) {
    console.log(
      chalk.dim(`  ✓  Preserving ${keywords.length} keyword(s): `) +
        chalk.white(keywords.join(", "))
    );
  }

  // ── 6. Run the agent ──────────────────────────────────────────────────────
  console.log();
  const spinner = ora({
    text: chalk.dim(`  Formatting with ${model}…`),
    color: "cyan",
    prefixText: " ",
  }).start();

  let charCount = 0;
  let result: Awaited<ReturnType<typeof formatTutorial>>;

  try {
    result = await formatTutorial(
      { inputPath, templatePath, keywords, apiKey: apiKey as string, projectId: projectId as string, serviceUrl, model },
      (chunk) => {
        charCount += chunk.length;
        spinner.text = chalk.dim(
          `  Formatting with ${model}… (${charCount.toLocaleString()} chars)`
        );
      }
    );
  } catch (err: unknown) {
    spinner.fail(chalk.red("  LLM call failed."));
    const message = err instanceof Error ? err.message : String(err);
    console.error(chalk.red(`  ✖  ${message}`));
    process.exit(1);
  }

  spinner.succeed(
    chalk.green(`  Formatted — ${charCount.toLocaleString()} characters generated.`)
  );

  // ── 7. Confirm output path ────────────────────────────────────────────────
  console.log(
    chalk.dim(`\n  Suggested output path: `) +
      chalk.white(path.relative(process.cwd(), result.suggestedOutputPath))
  );
  const outputAnswer = await prompt(
    chalk.yellow(
      "  ➜  Output path (press Enter to accept, or type a new path): "
    )
  );
  const outputPath = outputAnswer
    ? resolvePath(outputAnswer)
    : result.suggestedOutputPath;

  // ── 8. Write output ───────────────────────────────────────────────────────
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, result.mdx, "utf-8");

  console.log(
    chalk.bold.green(`\n  ✔  Written to: `) +
      chalk.white(path.relative(process.cwd(), outputPath)) +
      "\n"
  );
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(chalk.red(`\n  Fatal: ${message}\n`));
  process.exit(1);
});
