# Multimodal AI Tutorials

This directory contains tutorials on working with multimodal AI models including vision, speech, and combined modalities using IBM Granite models and other frameworks.

## Installation

Multimodal AI tutorials require **specialized dependencies**. From the **repository root**, run:

```bash
pip install -r requirements-optional.txt
```

This will install:
- Base dependencies (IBM Watsonx, LangChain)
- PyTorch and vision libraries
- Image processing (Pillow)
- Audio processing (soundfile, pytubefix)
- Video processing (moviepy)
- Transformers for multimodal models

**Estimated installation time**: 10-15 minutes  
**Disk space required**: ~2 GB

### Python Version
- **Minimum**: Python 3.10
- **Recommended**: Python 3.11
- **Maximum**: Python 3.12

### GPU Support (Optional)

For faster inference, install PyTorch with CUDA support:

```bash
# After installing requirements-optional.txt

# For CUDA 11.8
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# For CUDA 12.1
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

## Quick Start

1. Install dependencies (see Installation above)
2. Navigate to this directory:
   ```bash
   cd tutorials/05-multimodal-ai
   ```
3. Open notebooks in your IDE (VS Code, PyCharm, etc.) or launch Jupyter:
   ```bash
   jupyter lab  # or jupyter notebook
   ```
4. Open and run your first tutorial: `multimodal-ai.ipynb`

## Tutorials

### 1. **Multimodal AI** (`multimodal-ai.ipynb`)
Introduction to multimodal AI with IBM Watsonx.
- **Topics**: Image understanding, vision-language models, multimodal prompting
- **Prerequisites**: Optional dependencies
- **Estimated time**: 30-40 minutes

### 2. **Granite Vision PPT Analyzer** (`ppt-ai-analyzer-granite-vision.ipynb`)
Analyze PowerPoint presentations using Granite Vision models.
- **Topics**: Document analysis, slide understanding, visual Q&A
- **Prerequisites**: Optional dependencies + python-pptx
- **Estimated time**: 40-50 minutes
- **Additional**: `pip install python-pptx`

### 3. **Granite Speech 3.3-8B** (`granite-speech-3.3-8b.ipynb`)
Speech processing and understanding with Granite Speech models.
- **Topics**: Speech recognition, audio processing, transcription
- **Prerequisites**: Optional dependencies + audio libraries
- **Estimated time**: 40-50 minutes

### 4. **Pixtral Multimodal AI** (`pixtral-multimodal-ai.ipynb`)
Multimodal AI with Pixtral models.
- **Topics**: Vision-language understanding, image analysis
- **Prerequisites**: Optional dependencies
- **Estimated time**: 35-45 minutes

### 5. **AI Personal Trainer with Llama** (`ai-personal-trainer-llama/`)
Build an AI personal trainer using vision models.
- **Topics**: Pose estimation, exercise analysis, feedback generation
- **Prerequisites**: Optional dependencies
- **Estimated time**: 50-60 minutes
- **Type**: Complete application with images

## Key Concepts

### What is Multimodal AI?
AI systems that can process and understand multiple types of data:
- **Vision**: Images, videos, documents
- **Audio**: Speech, music, sounds
- **Text**: Natural language
- **Combined**: Vision + language, audio + text

### Modalities Covered

**1. Vision (Images)**
- Image classification
- Object detection
- Visual question answering
- Image captioning

**2. Speech (Audio)**
- Speech recognition
- Audio transcription
- Speaker identification
- Audio analysis

**3. Vision-Language**
- Image understanding with text
- Visual question answering
- Document analysis
- Slide/presentation analysis

**4. Video**
- Video understanding
- Action recognition
- Video captioning

## IBM Granite Multimodal Models

### Granite Vision
- **Purpose**: Visual understanding and analysis
- **Capabilities**: Image Q&A, document analysis, visual reasoning
- **Use cases**: Document processing, visual inspection, content moderation

### Granite Speech
- **Purpose**: Speech processing and understanding
- **Capabilities**: Transcription, speaker recognition, audio analysis
- **Use cases**: Voice assistants, transcription services, audio analytics

## Common Use Cases

- **Document Analysis**: Extract information from images, PDFs, presentations
- **Visual Q&A**: Answer questions about images
- **Content Moderation**: Analyze images and videos for policy compliance
- **Accessibility**: Generate descriptions for visually impaired users
- **Medical Imaging**: Analyze medical images (with appropriate models)
- **Retail**: Product recognition and analysis
- **Security**: Surveillance and anomaly detection

## Best Practices

### 1. Image Preprocessing
```python
from PIL import Image

# Resize for optimal processing
image = Image.open("photo.jpg")
image = image.resize((512, 512))
```

### 2. Prompt Engineering for Vision
```python
prompt = """
Analyze this image and provide:
1. Main objects visible
2. Scene description
3. Any text present
"""
```

### 3. Batch Processing
Process multiple images efficiently:
```python
for image_path in image_paths:
    result = model.process(image_path)
    results.append(result)
```

### 4. Error Handling
```python
try:
    result = vision_model.analyze(image)
except Exception as e:
    print(f"Error processing image: {e}")
```

## Troubleshooting

### Issue: Out of memory errors
**Solution**:
- Reduce image resolution
- Process images in smaller batches
- Use GPU if available
- Close other applications

### Issue: Slow processing
**Solution**:
- Install GPU-enabled PyTorch (see GPU Support above)
- Reduce image size
- Use batch processing
- Consider model quantization

### Issue: Poor image quality results
**Solution**:
- Ensure images are high quality
- Proper lighting in photos
- Correct image orientation
- Remove noise/artifacts

### Issue: Audio processing errors
**Solution**:
- Check audio format (WAV, MP3 supported)
- Verify sample rate (16kHz recommended)
- Ensure audio is clear and not corrupted
- Install required audio libraries: `pip install soundfile`

### Issue: PyTorch installation fails
**Solution**:
```bash
# Install CPU version first
pip install torch torchvision torchaudio

# Then upgrade to GPU version if needed
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

### Issue: PIL/Pillow errors
**Solution**:
```bash
pip install --upgrade Pillow
```

## Performance Optimization

### GPU Acceleration
```python
import torch

# Check if GPU is available
if torch.cuda.is_available():
    device = "cuda"
    print(f"Using GPU: {torch.cuda.get_device_name(0)}")
else:
    device = "cpu"
    print("Using CPU")

# Move model to GPU
model = model.to(device)
```

### Image Optimization
```python
from PIL import Image

def optimize_image(image_path, max_size=1024):
    """Optimize image for processing."""
    img = Image.open(image_path)
    
    # Resize if too large
    if max(img.size) > max_size:
        img.thumbnail((max_size, max_size))
    
    # Convert to RGB if needed
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    return img
```

### Batch Processing
```python
def process_batch(images, batch_size=4):
    """Process images in batches."""
    results = []
    for i in range(0, len(images), batch_size):
        batch = images[i:i+batch_size]
        batch_results = model.process(batch)
        results.extend(batch_results)
    return results
```

## Model Selection Guide

### For Document Analysis
- **Granite Vision**: Best for business documents, presentations
- **Pixtral**: Good for general document understanding

### For Image Understanding
- **Granite Vision**: Enterprise-grade, reliable
- **Llama Vision**: Good for general purpose
- **Pixtral**: Fast and efficient

### For Speech Processing
- **Granite Speech**: Best for enterprise applications
- **Whisper**: Good alternative for transcription

## Additional Resources

- [Main Repository README](../../README.md)
- [IBM Watsonx Documentation](https://www.ibm.com/docs/en/watsonx)
- [IBM Granite Models](https://www.ibm.com/granite)
- [PyTorch Documentation](https://pytorch.org/docs/)
- [Pillow Documentation](https://pillow.readthedocs.io/)

## Contributing

Found an issue or want to add a new multimodal AI tutorial? See our [Contributing Guide](../../CONTRIBUTING.md) for details.

## License

See the [LICENSE](../../LICENSE) file in the repository root for license information.