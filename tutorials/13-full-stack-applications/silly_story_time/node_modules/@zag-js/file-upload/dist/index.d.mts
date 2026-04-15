import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, LocaleProperties, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';
import { FileMimeType, FileError } from '@zag-js/file-utils';
export { FileError, FileMimeType } from '@zag-js/file-utils';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "dropzone" | "item" | "itemDeleteTrigger" | "itemGroup" | "itemName" | "itemPreview" | "itemPreviewImage" | "itemSizeText" | "label" | "trigger" | "clearTrigger">;

interface FileRejection {
    file: File;
    errors: FileError[];
}
interface FileChangeDetails {
    acceptedFiles: File[];
    rejectedFiles: FileRejection[];
}
interface FileValidateDetails {
    acceptedFiles: File[];
    rejectedFiles: FileRejection[];
}
interface FileAcceptDetails {
    files: File[];
}
interface FileRejectDetails {
    files: FileRejection[];
}

type ElementIds = Partial<{
    root: string;
    dropzone: string;
    hiddenInput: string;
    trigger: string;
    label: string;
    item(id: string): string;
    itemName(id: string): string;
    itemSizeText(id: string): string;
    itemPreview(id: string): string;
}>;
interface IntlTranslations {
    dropzone?: string | undefined;
    itemPreview?(file: File): string;
    deleteFile?(file: File): string;
}
interface FileUploadProps extends LocaleProperties, CommonProperties {
    /**
     * The name of the underlying file input
     */
    name?: string | undefined;
    /**
     * The ids of the elements. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * The localized messages to use.
     */
    translations?: IntlTranslations | undefined;
    /**
     * The accept file types
     */
    accept?: Record<string, string[]> | FileMimeType | FileMimeType[] | undefined;
    /**
     * Whether the file input is disabled
     */
    disabled?: boolean | undefined;
    /**
     * Whether the file input is required
     */
    required?: boolean | undefined;
    /**
     * Whether to allow drag and drop in the dropzone element
     * @default true
     */
    allowDrop?: boolean | undefined;
    /**
     * The maximum file size in bytes
     *
     * @default Infinity
     */
    maxFileSize?: number | undefined;
    /**
     * The minimum file size in bytes
     *
     * @default 0
     */
    minFileSize?: number | undefined;
    /**
     * The maximum number of files
     * @default 1
     */
    maxFiles?: number | undefined;
    /**
     * Whether to prevent the drop event on the document
     * @default true
     */
    preventDocumentDrop?: boolean | undefined;
    /**
     * Function to validate a file
     */
    validate?: ((file: File, details: FileValidateDetails) => FileError[] | null) | undefined;
    /**
     * Function called when the value changes, whether accepted or rejected
     */
    onFileChange?: ((details: FileChangeDetails) => void) | undefined;
    /**
     * Function called when the file is accepted
     */
    onFileAccept?: ((details: FileAcceptDetails) => void) | undefined;
    /**
     * Function called when the file is rejected
     */
    onFileReject?: ((details: FileRejectDetails) => void) | undefined;
    /**
     * The default camera to use when capturing media
     */
    capture?: "user" | "environment" | undefined;
    /**
     * Whether to accept directories, only works in webkit browsers
     */
    directory?: boolean | undefined;
    /**
     * Whether the file input is invalid
     */
    invalid?: boolean | undefined;
}
type PropWithDefault = "minFileSize" | "maxFileSize" | "maxFiles" | "preventDocumentDrop" | "allowDrop" | "translations";
interface Context {
    /**
     * The rejected files
     */
    rejectedFiles: FileRejection[];
    /**
     * The current value of the file input
     */
    acceptedFiles: File[];
}
type Computed = {
    /**
     * The accept attribute as a string
     */
    acceptAttr: string | undefined;
    /**
     * Whether the file can select multiple files
     */
    multiple: boolean;
};
interface FileUploadSchema {
    state: "idle" | "focused" | "dragging";
    props: RequiredBy<FileUploadProps, PropWithDefault>;
    context: Context;
    computed: Computed;
    event: EventObject;
    action: string;
    effect: string;
    guard: string;
}
type FileUploadService = Service<FileUploadSchema>;
type FileUploadMachine = Machine<FileUploadSchema>;
interface ItemProps {
    file: File;
}
interface ItemPreviewImageProps extends ItemProps {
    url: string;
}
interface DropzoneProps {
    /**
     * Whether to disable the click event on the dropzone
     */
    disableClick?: boolean;
}
interface FileUploadApi<T extends PropTypes> {
    /**
     * Whether the user is dragging something over the root element
     */
    dragging: boolean;
    /**
     * Whether the user is focused on the dropzone element
     */
    focused: boolean;
    /**
     * Whether the file input is disabled
     */
    disabled: boolean;
    /**
     * Function to open the file dialog
     */
    openFilePicker(): void;
    /**
     * Function to delete the file from the list
     */
    deleteFile(file: File): void;
    /**
     * The accepted files that have been dropped or selected
     */
    acceptedFiles: File[];
    /**
     * The files that have been rejected
     */
    rejectedFiles: FileRejection[];
    /**
     * Function to set the value
     */
    setFiles(files: File[]): void;
    /**
     * Function to clear the value
     */
    clearFiles(): void;
    /**
     * Function to clear the rejected files
     */
    clearRejectedFiles(): void;
    /**
     * Function to format the file size (e.g. 1.2MB)
     */
    getFileSize(file: File): string;
    /**
     * Function to get the preview url of a file.
     * Returns a function to revoke the url.
     */
    createFileUrl(file: File, cb: (url: string) => void): VoidFunction;
    /**
     * Function to set the clipboard files.
     * Returns `true` if the clipboard data contains files, `false` otherwise.
     */
    setClipboardFiles(dt: DataTransfer | null): boolean;
    getLabelProps(): T["label"];
    getRootProps(): T["element"];
    getDropzoneProps(props?: DropzoneProps): T["element"];
    getTriggerProps(): T["button"];
    getHiddenInputProps(): T["input"];
    getItemGroupProps(): T["element"];
    getItemProps(props: ItemProps): T["element"];
    getItemNameProps(props: ItemProps): T["element"];
    getItemPreviewProps(props: ItemProps): T["element"];
    getItemPreviewImageProps(props: ItemPreviewImageProps): T["img"];
    getItemSizeTextProps(props: ItemProps): T["element"];
    getItemDeleteTriggerProps(props: ItemProps): T["button"];
    getClearTriggerProps(): T["button"];
}

declare function connect<T extends PropTypes>(service: FileUploadService, normalize: NormalizeProps<T>): FileUploadApi<T>;

declare const machine: _zag_js_core.Machine<FileUploadSchema>;

declare const props: (keyof FileUploadProps)[];
declare const splitProps: <Props extends Partial<FileUploadProps>>(props: Props) => [Partial<FileUploadProps>, Omit<Props, keyof FileUploadProps>];
declare const itemProps: "file"[];
declare const splitItemProps: <Props extends ItemProps>(props: Props) => [ItemProps, Omit<Props, "file">];

export { type FileUploadApi as Api, type DropzoneProps, type ElementIds, type FileAcceptDetails, type FileChangeDetails, type FileRejectDetails, type FileRejection, type FileValidateDetails, type IntlTranslations, type ItemPreviewImageProps, type ItemProps, type FileUploadMachine as Machine, type FileUploadProps as Props, type FileUploadService as Service, anatomy, connect, itemProps, machine, props, splitItemProps, splitProps };
