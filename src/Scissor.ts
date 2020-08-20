import { Graphics } from 'js-shared';
import Output from '~/Output';

export default class {

  private input: HTMLImageElement|HTMLCanvasElement;

  /**
   * @param {HTMLImageElement|HTMLCanvasElement} input
   */
  constructor(input: HTMLImageElement|HTMLCanvasElement) {
    this.input = input;
  }

  /**
   * Resize image to `width`, `height` or `width x height`.
   * 
   * @param {number|null|undefined} width
   * @param {number|null|undefined} height
   * @param {{fit:'fill'|'cover'|'contain',background:string,format:'image/webp'|'image/png'|'image/jpeg'}} option
   * @param {Output}
   */
  public resize(width: number|null, height?: number|null, option?: { fit?: 'fill'|'cover'|'contain', background?: string, format?: 'image/webp'|'image/png'|'image/jpeg' }): Output {

    // Width or height required
    if (!width && !height) throw new Error('Width or height required');

    // Initialize options
    option = Object.assign({
      fit: 'fill',
      background: '#000',
      format: 'image/png'
    }, option||{});

    // Raw image dimensions
    const { width: rawWidth, height: rawHeight } = Graphics.getMediaDimensions(this.input);
    const rawRatio = rawHeight / rawWidth;

    // Calculate resize value if no resize value is set
    if (!width) width = rawWidth * height! / rawHeight;
    if (!height) height = rawHeight * width / rawWidth;
    const ratio = height / width;

    // Canvas drawing image dimensions
    let x = 0;
    let y = 0;
    let swidth = width;
    let sheight = height;
    if (option.fit === 'contain') {
      if (rawRatio < ratio) {
        sheight = width * rawRatio;
        y = (height - sheight) / 2;
      } else if (rawRatio > ratio) {
        swidth = width * ratio / rawRatio;
        x = (width - swidth) / 2;
      }
    } else if (option.fit === 'cover') {
      if (rawRatio > ratio) {
        sheight = width * rawRatio;
        y = (height - sheight) / 2;
      } else if (rawRatio < ratio) {
        swidth = width * ratio / rawRatio;
        x = (width - swidth) / 2;
      }
    }
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', width.toString());
    canvas.setAttribute('height', height.toString());
    const ctx = canvas.getContext('2d')!;
    if (option.background) {
      ctx.fillStyle = option.background;
      ctx.fillRect(0, 0, width, height);
    }
    ctx.drawImage(this.input, x, y, swidth, sheight);
    return new Output(canvas, option.format!);
  }
}