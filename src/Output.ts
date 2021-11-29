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
   * @param {HTMLCanvasElement} cvs Source canvas image.
   * @param {'image/webp'|'image/png'|'image/jpeg'} format MIME type of the source canvas image.
   */
  constructor(cvs: HTMLCanvasElement, format: 'image/webp'|'image/png'|'image/jpeg') {
    this.cvs = cvs;
    this.format = format;
  }

  /**
   * Return Base64.
   * 
   * @return {string}
   */
  public toBase64(): string {
    return this.cvs.toDataURL(this.format, 1.);
  }

  /**
   * Return image element.
   * 
   * @return {HTMLImageElement}
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