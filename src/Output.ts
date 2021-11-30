/**
 * Convert parameter canvas elements to base64, image elements, blobs.
 */
export default class {
  /**
   * @type {HTMLCanvasElement} Source canvas image.
   */
  private cvs: HTMLCanvasElement;

  /**
   * @type {'image/webp'|'image/png'|'image/jpeg'} MIME type of the source canvas image.
   */
  private format: 'image/webp'|'image/png'|'image/jpeg';

  /**
   * @param {HTMLCanvasElement} cvs Converted image canvas element.
   * @param {'image/webp'|'image/png'|'image/jpeg'} format Image format after resizing.
   */
  constructor(cvs: HTMLCanvasElement, format: 'image/webp'|'image/png'|'image/jpeg') {
    this.cvs = cvs;
    this.format = format;
  }

  /**
   * Returns the resized image in base64 format.
   * 
   * @return {string} Base64 data of the image after resizing, e.g. data:image/png;base64, iVB...
   */
  public toBase64(): string {
    return this.cvs.toDataURL(this.format, 1.);
  }

  /**
   * Returns the resized image as an image element.
   * 
   * @return {HTMLImageElement} The image element of the resized image.
   */
  public toImage(): HTMLImageElement {
    const img = new Image();
    img.src = this.toBase64();
    return img;
  }

  /**
   * Return Blob.
   * 
   * @return {Blob}
   */
  public toBlob(): Blob {
    const base64 = this.toBase64();
    const bin = atob(base64.replace(/^.*,/, ''));
    const buf = new Uint8Array(bin.length);
    for (let i=0; i<bin.length; i++)
      buf[i] = bin.charCodeAt(i);
    return new Blob([buf.buffer], {type: this.format});
  }
}