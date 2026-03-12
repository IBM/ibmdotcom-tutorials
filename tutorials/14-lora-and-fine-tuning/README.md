# LoRA and Fine-tuning Tutorials

This directory contains tutorials on fine-tuning large language models using LoRA (Low-Rank Adaptation) and other parameter-efficient techniques.

## Prerequisites

Each tutorial in this directory includes its own setup and installation instructions. Please refer to the individual tutorial files for specific requirements.

**Common requirements:**
- Python 3.10 - 3.13
- IBM watsonx.ai account
- GPU recommended for training (optional)

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/14-lora-and-fine-tuning
   ```
3. Open and run your first tutorial

## Key Concepts

### What is Fine-tuning?
Adapting a pre-trained model to a specific task or domain by training on task-specific data.

**Benefits:**
- Better performance on specific tasks
- Domain adaptation (medical, legal, technical)
- Reduced need for complex prompts

### What is LoRA?
Low-Rank Adaptation - a parameter-efficient fine-tuning technique that:
- Freezes original model weights
- Adds small trainable matrices (adapters)
- Reduces memory and storage requirements
- Maintains model quality

**Advantages:**
- 💾 Memory efficient (train with less GPU memory)
- 💰 Cost effective (cheaper than full fine-tuning)
- 🚀 Fast training (fewer parameters to update)
- 📦 Small adapters (only a few MB)

### Fine-tuning Methods

1. **Full Fine-tuning**: Update all model parameters (high memory, best performance)
2. **LoRA**: Add small trainable matrices (memory efficient, fast)
3. **QLoRA**: LoRA + 4-bit quantization (extremely memory efficient)
4. **Prefix Tuning**: Add trainable prefix tokens (very parameter efficient)
5. **Adapter Layers**: Insert small trainable modules (modular)

## Common Use Cases

- **Instruction Following**: Train models to follow specific formats
- **Domain Adaptation**: Specialize for medical, legal, or technical domains
- **Style Transfer**: Match specific writing styles or tones
- **Task Specialization**: Optimize for summarization, translation, Q&A
- **Multilingual Adaptation**: Improve performance on specific languages

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [PEFT Documentation](https://huggingface.co/docs/peft)
- [LoRA Paper](https://arxiv.org/abs/2106.09685)
- [QLoRA Paper](https://arxiv.org/abs/2305.14314)

## Contributing

Found an issue or want to add a new fine-tuning tutorial? See our [Contributing Guide](../../CONTRIBUTING.md).

## License

See the [LICENSE](../../LICENSE) file in the repository root.