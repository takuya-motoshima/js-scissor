export default class {
    private canvas;
    private format;
    /**
     * @param {HTMLCanvasElement} canvas
     * @param {'image/webp'|'image/png'|'image/jpeg'} format
     */
    constructor(canvas: HTMLCanvasElement, format: 'image/webp' | 'image/png' | 'image/jpeg');
    /**
     * Return Base64
     *
     * @return {HTMLImageElement}
     */
    toBase64(): string;
    /**
     * Return image element
     *
     * @return {HTMLImageElement}
     */
    toImage(): HTMLImageElement;
    /**
     * Return Blob
     *
     * @return {Blob}
     */
    toBlob(): Blob;
}
