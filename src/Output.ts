export default class {

   private canvas: HTMLCanvasElement;
   private format: 'image/webp'|'image/png'|'image/jpeg';

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {'image/webp'|'image/png'|'image/jpeg'} format
   */
  constructor(canvas: HTMLCanvasElement, format: 'image/webp'|'image/png'|'image/jpeg') {
    this.canvas = canvas;
    this.format = format;
  }

  /**
   * Return Base64
   * 
   * @return {HTMLImageElement}
   */
  public toBase64(): string {
    return this.canvas.toDataURL(this.format, 1.);
  }

  /**
   * Return image element
   * 
   * @return {HTMLImageElement}
   */
  public toImage(): HTMLImageElement {
    var image = new Image();
    image.src = this.toBase64();
    return image;
  }

  /**
   * Return Blob
   * 
   * @return {Blob}
   */
  public toBlob(): Blob {
    const base64 = this.toBase64();
    const byteCharacters = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(byteCharacters.length);
    for (let i=0; i<byteCharacters.length; i++) buffer[i] = byteCharacters.charCodeAt(i);
    return new Blob([ buffer.buffer ], { type: this.format });
  }
}