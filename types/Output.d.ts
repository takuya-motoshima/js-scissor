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
     * @param {HTMLCanvasElement} cvs Source canvas image.
     * @param {'image/webp'|'image/png'|'image/jpeg'} format MIME type of the source canvas image.
     */
    constructor(cvs: HTMLCanvasElement, format: 'image/webp' | 'image/png' | 'image/jpeg');
    /**
     * Return Base64.
     *
     * @return {string}
     */
    toBase64(): string;
    /**
     * Return image element.
     *
     * @return {HTMLImageElement}
     */
    toImage(): HTMLImageElement;
    /**
     * Return Blob.
     *
     * @return {Blob}
     */
    toBlob(): Blob;
}
