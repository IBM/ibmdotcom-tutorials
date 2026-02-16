export const exportAsImage = async (element: HTMLElement): Promise<void> => {
  try {
    // Create a temporary container with a fixed width
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '800px'; // Fixed width
    container.style.backgroundColor = '#ffffff';
    container.style.padding = '40px';
    container.style.zIndex = '-1';
    container.style.boxSizing = 'border-box';
    
    // Clone the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.width = '100%';
    clone.style.margin = '0';
    clone.style.padding = '0';
    
    // Add styles for better readability - using more specific selectors
    const style = document.createElement('style');
    style.textContent = `
      #story-content .story-content {
        font-size: 20px !important;
        line-height: 1.6 !important;
        margin-bottom: 20px !important;
      }
      #story-content .story-image {
        max-width: 80% !important;
        margin: 20px auto !important;
        display: block !important;
        border: 2px solid #ddd !important;
        border-radius: 8px !important;
      }
      #story-content .story-title {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
    `;
    clone.appendChild(style);
    
    container.appendChild(clone);
    document.body.appendChild(container);
    // Use html2canvas if available
    if ((window as any).html2canvas) {
      const canvas = await (window as any).html2canvas(container, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
        width: 800, // Fixed width
        windowWidth: 800 // Fixed width
      });
      
      // Convert to image and trigger download
      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = 'my-story.png';
      link.href = image;
      link.click();
    } else {
      // Fallback to basic canvas rendering
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      // Set canvas size to fixed width
      canvas.width = 800;
      canvas.height = container.offsetHeight;
      
      if (context) {
        // Draw white background
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Create a data URL from the element's content
        const dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${container.offsetHeight}">
            <foreignObject width="100%" height="100%">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, sans-serif; width: 100%;">
                <div id="story-content">
                  ${container.innerHTML}
                </div>
              </div>
            </foreignObject>
          </svg>`
        )))}`;
        
        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = dataUrl;
        });
        
        context.drawImage(img, 0, 0);
        
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = 'my-story.png';
        link.href = image;
        link.click();
      }
    }
    
    // Clean up
    document.body.removeChild(container);
  } catch (error) {
    console.error('Error exporting image:', error);
    throw error;
  }
}; 