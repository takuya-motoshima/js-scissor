/**
 * Convert parameter canvas elements to base64, image elements, blobs.
 */
export default class {
    /**
     * @type {HTMLCanvasElement} Source canvas image.
     */
    private cvs;
    /**
     * @type {'image/webp'|'image/png'|'image/jpeg'} MIME type of the source canvas image.
     */
    private format;
    /**
     * @param {HTMLCanvasElement} cvs Converted image canvas element.
     * @param {'image/webp'|'image/png'|'image/jpeg'} format Image format after resizing.
     */
    constructor(cvs: HTMLCanvasElement, format: 'image/webp' | 'image/png' | 'image/jpeg');
    /**
     * Returns the resized image in base64 format.
     *
     * @return {string} Base64 data of the image after resizing, e.g. data:image/png;base64, iVB...
     */
    toBase64(): string;
    /**
     * Returns the resized image as an image element.
     *
     * @return {HTMLImageElement} The image element of the resized image.
     */
    toImage(): HTMLImageElement;
    /**
     * Return Blob.
     *
     * @return {Blob}
     */
    toBlob(): Blob;
}
