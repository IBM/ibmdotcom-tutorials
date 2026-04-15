declare module 'html2canvas' {
  interface Html2CanvasOptions {
    scale?: number;
    useCORS?: boolean;
    logging?: boolean;
    allowTaint?: boolean;
    backgroundColor?: string;
    scrollY?: number;
    windowWidth?: number;
    windowHeight?: number;
    onclone?: (clonedDoc: Document) => void;
  }

  function html2canvas(element: HTMLElement, options?: Html2CanvasOptions): Promise<HTMLCanvasElement>;
  export default html2canvas;
} 