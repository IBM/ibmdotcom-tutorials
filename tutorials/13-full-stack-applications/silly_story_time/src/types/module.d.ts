declare module 'html2canvas' {
  const html2canvas: any;
  export default html2canvas;
}

// Add html2canvas to window object
declare global {
  interface Window {
    html2canvas: any;
  }
} 