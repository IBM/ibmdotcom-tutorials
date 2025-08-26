# LLM content moderation with IBM Granite Guardian 

## The hidden world of AI safety

Millions of people around the world are chatting with [artificial intelligence (AI)](https://www.ibm.com/think/topics/artificial-intelligence) assistants, asking questions, seeking help, and receiving responses instantly every day. However, what most people that use [large language models (LLMs)](https://www.ibm.com/think/topics/large-language-models) don't see is that behind many of their interactions there is often another [AI model](https://www.ibm.com/think/topics/ai-model) involved. This secondary LLM is working silently in the background as a digital bodyguard. It scans for potential risks and inappropriate content and when it does its job effectively, unsafe content will not make it to your screen.

What are the inner workings of this content moderation system that the average user might not see and how does it help to enhance their experience? That view is exactly what this web application tutorial reveals. Instead of hiding the safety mechanisms that protect users, this [open-source](https://www.ibm.com/think/topics/open-source) tutorial pulls back the curtain. It shows you how two [machine learning (ML)](https://www.ibm.com/think/topics/machine-learning) models work together to produce quality responses and moderate content, keeping you safe at the same time. Effective human-computer interaction (HCI) in LLM-based ecosystems requires that users understand not just what decisions are being made, but why they are being made. In this tutorial think of yourself as a high-profile celebrity. Your [AI chatbot](https://www.ibm.com/think/topics/chatbots) can be imagined as your personal concierge. What high-profile celebrity doesn’t have a personal bodyguard at hand? This space is where the IBM® [Granite Guardian®](https://www.ibm.com/granite/docs/models/guardian/) model comes into play.

### Meet your team:

“The concierge" (Granite 3-8b-instruct): This model will act as your friendly AI assistant and by using natural language, answer your every question to provide helpful information. Think of this model as your personal problem solver with almost limitless connections and information. It possesses a wide array of knowledge but might not always pause to consider that certain information could be harmful in the wrong context.

“The bodyguard” (Granite Guardian 3.2-3b-a800m): This model is your security expert, your bodyguard and an LLM chaperone. Content moderation tasks are the proverbial bread and butter for this model. Anything your personal concierge wants to pass along to you needs to go through this model first. Like a comic book superhero, the model is trained to spot trouble from a mile away and make split-second decisions about what is safe or what needs to be blocked and flagged. The training data used for Granite Guardian promotes adaptability in detecting a wide variety of toxicity, including:

•	HAP (Hate speech, abuse, and profanity): Detecting harmful language, racial slurs and offensive content.

•	PII (Personally identifiable information): Spotting sensitive personal data that shouldn't be shared.

•	Harm detection: Identifying content that could cause physical, emotional, or psychological harm. This type includes the curation of misinformation and its spread at scale on online platforms.

•	Social bias: Recognizing unfair prejudices or discriminatory language that sometimes go unchecked on social media platforms and online communities.

•	Jailbreak detection: Catching prompt engineering attempts to bypass AI safety measures to produce illicit responses from the model that could potentially slip by traditional human review.

•	Violence: Flagging content that promotes or describes violent acts towards others as well as self-harm. 

•	Profanity: The model is trained in identifying and flagging inappropriate or offensive language.

•	Unethical behavior: Spotting content that promotes harmful or immoral actions.

•	Content safety: Overall assessment of whether content meets safety standards.

The multilayered approach that Granite Guardian implements means it does not only look for obvious problems. The model is trained in moderation practices to spot subtle risks across numerous categories by using sizeable datasets, minimizing the risk of edge cases.

As AI models become more powerful and their usage more widespread, the need for effective safety protocols grows exponentially. AI systems currently process billions of real-world requests daily, far too many for basic algorithms or human moderators to review. Without proper moderation tools in place, inappropriate, harmful or dangerous content could easily be passed along to users around the world.

Many AI safety systems are [black boxes](https://www.ibm.com/think/topics/black-box-ai) meaning that you either get a response, or you don't. This scenario can be troubling because users or developers receive no insight as to why. This lack of transparency makes it difficult to understand, trust or improve these critical safety systems. The following tutorial aims to fix that as well as demonstrate the capabilities offered with Granite Guardian.

### What makes the Granite Guardian model different

Granite Guardian does not simply block unsafe responses and show you a generic "I can't help with that" message. Instead, the model shows you real-time risk detection as it happens, details if a risk is detected or not, and gives the user an accuracy score of the detected risk. The model has undergone [fine-tuning](https://www.ibm.com/think/topics/fine-tuning) to detect both false positives and false negatives generated by the assistant. This demonstration is like having X-ray vision into model safety. The user can see the mechanisms of protection that usually operate invisibly behind the scenes.

### How the application works

The web application follows this workflow:

1. User input: The model first accepts questions through user input in a local web application chatbot format.

2. Assistant response: Granite 3-8b-instruct will then generate a response to answer the user’s question(s).

3. Risk detection: Granite Guardian will then analyze the response. During this process it will apply its moderation rules to declare if the content is safe or unsafe.

4. Display results: The results will then be displayed for the user to see what is going on during their interaction with the model. If the response given by the instruct model is deemed safe, then the user will receive the model’s output(answer) to their question and the moderation details produced by the Guardian model. However, if the response produced by the instruct model is deemed unsafe, content filtering ensures that this response is not displayed to the user. The user will also receive the moderation details produced by the Guardian model as to why this content has been deemed unsafe.


By the end of this tutorial, you will:

- Understand how generative AI content moderation works.

- Learn to set up a secondary AI model as a content moderator.

- See how to implement response filtering for inappropriate content.

- Create a safer AI experience for end users.

## Overview

This tutorial demonstrates a web application chat bot use case. It uses a two-model AI system where “The bodyguard” (Granite-Guardian-3.2-3b-a800m) moderates responses from “The concierge” (Granite-3-8b-instruct). The appropriate risk detection and moderation policies lead to a safer AI interaction experience.


---

## Prerequisites

Familiarity with Python programming and basic understanding of LLMs.

## Steps

Ensure that you are running [Python 3.10, 3.11 or3.12](https://www.python.org/downloads/) in a freshly created virtual environment. Note, you can also access this tutorial on GitHub.

---

## Step 1: Set up your environment

While you can choose from several tools, this tutorial walks you through how to set up an IBM account to use a Jupyter Notebook.

Log in to [watsonx.ai®](https://www.ibm.com/products/watsonx-ai?utm_content=SRCWW&p1=Search&p4=2053649840318&p5=e&p9=151965724954&gclsrc=aw.ds&gad_source=1&gad_campaignid=20116653496&gbraid=0AAAAAD-_QsRiOlJj6yGUEbs9fqFQznBai&gclid=CjwKCAjw7_DEBhAeEiwAWKiCC9QnJHdFucOQC4AYHUOW2s53YlNSZaEkaTG8X1OtV0GvAFlLSYQCVRoC8WcQAvD_BwE)using your [IBM Cloud® account](https://cloud.ibm.com/login).


Create a watsonx.ai project.

Note: We will be running the larger instruct model using watsonx.ai to save memory for lower power machines.

---

## Step 2. Set up a watsonx.ai Runtime instance and API key

Create a watsonx.ai Runtime service instance (select your appropriate region and choose the Lite plan, which is a free instance).

Generate an application programming interface (API) Key.

Associate the watsonx.ai Runtime service instance to the project that you created in watsonx.ai.

---

## Step 3. Clone the repository and activate the virtual environment

### Clone the repository

```bash

git clone <https://github.ibm.com/digital/technical-content.git>


cd Artificial Intelligence/AI_models/granite-guardian/granite-guardian-webapp

```

### Create a virtual environment, activate the environment and install the dependencies:

```bash

python -m venv myenv

source myenv/bin/activate

pip install -r requirements.txt

```

### Launch the application

Run the web app

```bash

python content-moderation-chatbot.py

```

The application will be accessible at http://127.0.0.1:5000

---

## Step 4: Using the web application

### Accessing the interface

1. Open your web browser

2. Navigate to http://127.0.0.1:5000

3. You'll see the Granite chatbot demonstration interface

### Interacting with the system

1. Enter your question: Type your question or prompt in the input field.

2. Submit: Click the submit button or press enter.

3. View results: The page will display:

   -  Guardian's moderation analysis and risk categories identified - blue text block

   - The assistant's response (if deemed safe) - green text block

---

## Step 5: Testing different scenarios

### Understanding the moderation process

The web application provides transparency into how AI moderation works. Think of it like having a window into a security checkpoint. This window allows you to see how decisions are made rather than just getting a "blocked" or "approved" result.

---

## Use cases

Social media moderation: When social media users upload millions of posts daily, a dual-model approach ensures that harmful content gets flagged while legitimate discussions about sensitive topics remain accessible for other users on the platform. A level of transparency helps moderators understand why certain content was flagged, reducing over censorship.

Environmental monitoring: Applications developed to automate the analysis of images for beech leaf disease (BLD) detection, employing [convolutional neural networks (CNNs](https://www.ibm.com/think/topics/convolutional-neural-networks), require the same safety principles. When these AI applications process thousands of leaf images, to identify disease patterns, the moderation layer ensures that false positives don't trigger unnecessary interventions. The transparency aspect helps forest managers understand the confidence levels behind each diagnosis.

AI chatbot safety: Customer service bots and educational assistants need to refuse harmful requests while remaining helpful. This step could include jailbreaking prompts to try to trick these bots into gaining access to sensitive information. An AI ecosystem built on safety catches attempts to manipulate the bot into providing dangerous information, while explaining to users why certain topics cannot be discussed.

## Conclusion

The effectiveness of this layered approach lies not just in its technical aspects, but in how it transforms AI safety from an abstract thought into something actionable. Whether you're protecting social media users from harmful content, ensuring chatbots respond responsibly or assisting environmentalists in making informed decisions, the fundamental principles of safety and transparency apply.

You have now seen how two specialized models working in tandem can catch what solo model systems might miss. You have also learned how real-time moderation scales across applications and why transparency isn't just a nice bonus, it's an essential part of the trust-building process. This shift is not just about adding additional safety features to existing systems, it's about fundamentally rethinking how we build ethical AI systems that promote user well-being. As the adoption and advancements of AI technology grow every day, it is imperative that we are not sacrificing individuals' protection for speed.

## Next steps

- Experiment with different types of potentially malicious questions and prompts.

- Swap the "harm" risk_name for some other categories like: social_bias, violence, jailbreak, profanity, sexual_content and unethical_behavior.

- Swap the assistant model for others of your choosing to see how it impacts the moderations. Modify the tutorial to pull models like Meta’s Llama and OpenAI’s GPT-4 and see how they stack up.

- Explore the code to understand the technical implementation and build something.

- Share your findings and experiences with the artificial intelligence community. For more information on text detection checkout [the docs](https://cloud.ibm.com/apidocs/ai-openscale#textdetection).
