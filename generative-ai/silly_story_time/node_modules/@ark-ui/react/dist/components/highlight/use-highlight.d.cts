import { HighlightChunk, HighlightWordProps } from '@zag-js/highlight-word';
export interface UseHighlightProps extends HighlightWordProps {
}
export declare const useHighlight: (props: UseHighlightProps) => HighlightChunk[];
export type { HighlightChunk };
