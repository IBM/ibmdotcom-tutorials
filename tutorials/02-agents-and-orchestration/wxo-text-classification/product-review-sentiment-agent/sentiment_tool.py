"""
Sentiment Analysis Tool for Product Reviews
Uses a pre-trained transformer model to classify review sentiment
"""

from typing import Any

import nltk
from ibm_watsonx_orchestrate.agent_builder.tools import tool
from transformers import pipeline

# Download required NLTK data
nltk.download("punkt", quiet=True)
nltk.download("stopwords", quiet=True)

# Initialize the sentiment analysis pipeline
# This uses a pre-trained DistilBERT model fine-tuned for sentiment analysis
classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")


@tool
def analyze_sentiment(review_text: str, product_name: str = "") -> dict[str, Any]:
    """Analyzes the sentiment of a product review and returns classification results.

    This tool uses a pre-trained transformer model to classify the emotional tone
    of product reviews as positive or negative, along with a confidence score and
    key phrases that influenced the classification.

    Args:
        review_text (str): The product review text to analyze
        product_name (str, optional): The name of the product being reviewed. Defaults to "".

    Returns:
        Dict[str, Any]: A dictionary containing sentiment, confidence_score, key_phrases, and product_name
    """

    # Validate input
    if not review_text or len(review_text.strip()) == 0:
        return {
            "error": "Review text cannot be empty",
            "sentiment": None,
            "confidence_score": 0,
            "key_phrases": [],
            "product_name": product_name,
        }

    # Perform sentiment classification
    # Limit to 512 tokens (model's maximum input length)
    result = classifier(review_text[:512])[0]

    # Map model output to our sentiment labels
    sentiment_map = {"POSITIVE": "positive", "NEGATIVE": "negative"}

    sentiment = sentiment_map.get(result["label"], "neutral")
    confidence = result["score"]

    # Extract key phrases from the review
    key_phrases = extract_key_phrases(review_text)

    return {
        "sentiment": sentiment,
        "confidence_score": round(confidence, 3),
        "key_phrases": key_phrases,
        "product_name": product_name if product_name else "Unknown Product",
    }


def extract_key_phrases(text: str) -> list:
    """
    Extracts important words from the review text.

    Args:
        text: The review text to analyze

    Returns:
        List of key words (up to 5) that are meaningful
    """
    # Tokenize the text
    tokens = nltk.word_tokenize(text.lower())

    # Get English stopwords
    stopwords = set(nltk.corpus.stopwords.words("english"))

    # Filter out stopwords, punctuation, and short words
    key_words = [
        word for word in tokens if word.isalnum() and word not in stopwords and len(word) > 3
    ]

    # Return top 5 most relevant words
    return key_words[:5]


# Test the tool locally
if __name__ == "__main__":
    print("Testing Sentiment Analysis Tool\n" + "=" * 60)

    test_reviews = [
        {
            "review_text": "This product exceeded my expectations! The quality is outstanding and it arrived quickly. Highly recommend!",
            "product_name": "Wireless Headphones",
        },
        {
            "review_text": "Terrible experience. The product broke after two days and customer service was unhelpful.",
            "product_name": "Smart Watch",
        },
        {
            "review_text": "It's okay. Does what it's supposed to do, nothing special.",
            "product_name": "USB Cable",
        },
    ]

    for review in test_reviews:
        print(f"\nProduct: {review['product_name']}")
        print(f"Review: {review['review_text'][:60]}...")

        result = analyze_sentiment(
            review_text=review["review_text"], product_name=review["product_name"]
        )

        # Access the content from the ToolResponse object
        content = result.content
        print(f"Sentiment: {content['sentiment']}")
        print(f"Confidence: {content['confidence_score']}")
        print(f"Key phrases: {', '.join(content['key_phrases'])}")
        print("-" * 60)
