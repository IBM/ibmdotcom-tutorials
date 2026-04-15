declare const getFileEntries: (items: DataTransferItemList, traverseDirectories: boolean | undefined) => Promise<(File | (File | null)[] | null | undefined)[]>;

declare function dataURItoBlob(uri: string): Blob;

declare function isMSEdge(win: Window): win is Window & {
    navigator: {
        msSaveOrOpenBlob: Function;
    };
};
interface DownloadFileOptions {
    /**
     * The name of the file
     */
    name?: string | undefined;
    /**
     * The MIME type of the file
     */
    type: string;
    /**
     * The file contents
     */
    file: File | Blob | string;
    /**
     * The window environment
     */
    win: typeof window;
}
declare function downloadFile(options: DownloadFileOptions): void;

declare function getAcceptAttrString(accept: Record<string, string[]> | string | string[] | undefined): string | undefined;

declare const getFileDataUrl: (file: File | Blob) => Promise<string | undefined>;

declare const getTotalFileSize: (files: File[]) => number;

declare const isFileEqual: (file1: File, file2: File) => boolean;

type AnyString = string & {};
type FileError = "TOO_MANY_FILES" | "FILE_INVALID_TYPE" | "FILE_TOO_LARGE" | "FILE_TOO_SMALL" | "FILE_INVALID" | "FILE_EXISTS" | AnyString;
type ImageFileMimeType = "image/png" | "image/gif" | "image/jpeg" | "image/svg+xml" | "image/webp" | "image/avif" | "image/heic" | "image/bmp";
type ApplicationFileMimeType = "application/pdf" | "application/zip" | "application/json" | "application/xml" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/rtf" | "application/x-rar" | "application/x-7z-compressed" | "application/x-tar" | "application/vnd.microsoft.portable-executable";
type TextFileMimeType = "text/css" | "text/csv" | "text/html" | "text/markdown" | "text/plain";
type FontFileMimeType = "font/ttf" | "font/otf" | "font/woff" | "font/woff2" | "font/eot" | "font/svg";
type VideoFileMimeType = "video/mp4" | "video/webm" | "video/ogg" | "video/quicktime" | "video/x-msvideo";
type AudioFileMimeType = "audio/mpeg" | "audio/ogg" | "audio/wav" | "audio/webm" | "audio/aac" | "audio/flac" | "audio/x-m4a";
type FileMimeTypeGroup = "image/*" | "audio/*" | "video/*" | "text/*" | "application/*" | "font/*";
type FileMimeType = ImageFileMimeType | ApplicationFileMimeType | TextFileMimeType | FontFileMimeType | VideoFileMimeType | AudioFileMimeType | FileMimeTypeGroup | AnyString;

declare function isValidFileSize(file: File, minSize?: number, maxSize?: number): [boolean, FileError | null];

declare function isValidFileType(file: File, accept: string | undefined): [boolean, FileError | null];

export { type ApplicationFileMimeType, type AudioFileMimeType, type DownloadFileOptions, type FileError, type FileMimeType, type FileMimeTypeGroup, type FontFileMimeType, type ImageFileMimeType, type TextFileMimeType, type VideoFileMimeType, dataURItoBlob, downloadFile, getAcceptAttrString, getFileDataUrl, getFileEntries, getTotalFileSize, isFileEqual, isMSEdge, isValidFileSize, isValidFileType };
