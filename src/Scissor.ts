import {Graphics} from 'js-shared';
import Output from '~/Output';
import {waitForLoad} from '~/utils';
// import {isUrl, isDataUrl, waitForLoad} from '~/utils';

export default class {
  /**
   * @type {HTMLImageElement|HTMLCanvasElement|string} Image data of the conversion source.
   */
  private target: HTMLImageElement|HTMLCanvasElement|string;

  /**
   * @param {HTMLImageElement|HTMLCanvasElement|string} target HTMLImageElement, HTMLCanvasElement, image URL, image in DataURL format.
   */
  constructor(target: HTMLImageElement|HTMLCanvasElement|string) {
    // // If the image is a string, it returns an error if it is not in URL or DataURL format.
    // if (typeof target === 'string' && (!isUrl(target) && !isDataUrl(target)))
    //   throw new TypeError('The parameters must be HTMLImageElement, HTMLCanvasElement, URL string, DataURL string');
    this.target = target;
  }

  /**
   * Resize image to `width`, `height` or `width x height`.
   * 
   * @param {number|null|undefined} width
   * @param {number|null|undefined} height
   * @param {{fit:'fill'|'cover'|'contain',background:string,format:'image/webp'|'image/png'|'image/jpeg'}} opts
   * @param {Promise<Output>}
   */
  public async resize(
    width: number|null,
    height?: number|null,
    opts?: {
      fit?: 'fill'|'cover'|'contain',
      background?: string,
      format?: 'image/webp'|'image/png'|'image/jpeg'
    }
  ): Promise<Output> {
    // Width or height required.
    if (!width && !height)
      throw new Error('Width or height required');

    // Initialize options.
    opts = Object.assign({
      fit: 'fill',
      background: '#000',
      format: 'image/png'
    }, opts||{});

    // If the image is a URL string, convert the URL to an Img element.
    let target = this.target;
    if (typeof target === 'string') {
    // if (typeof target === 'string' && (isUrl(target) || isDataUrl(target))) {
      const img = new Image();
      img.src = target as string;
      await waitForLoad(img);
      target = img;
    } else if (target instanceof HTMLImageElement)
      await waitForLoad(target);

    // Raw image dimensions
    const dim = Graphics.getMediaDimensions(target);
    const sr = dim.height / dim.width;

    // Calculate resize value if no resize value is set.
    if (!width)
      width = dim.width * height! / dim.height;
    if (!height)
      height = dim.height * width / dim.width;
    const dr = height / width;

    // Canvas drawing image dimensions.
    let sx = 0;
    let sy = 0;
    let sw = width;
    let sh = height;
    if (opts.fit === 'contain') {
      if (sr < dr) {
        sh = width * sr;
        sy = (height - sh) / 2;
      } else if (sr > dr) {
        sw = width * dr / sr;
        sx = (width - sw) / 2;
      }
    } else if (opts.fit === 'cover') {
      if (sr > dr) {
        sh = width * sr;
        sy = (height - sh) / 2;
      } else if (sr < dr) {
        sw = width * dr / sr;
        sx = (width - sw) / 2;
      }
    }
    const cvs = document.createElement('canvas');
    cvs.setAttribute('width', width.toString());
    cvs.setAttribute('height', height.toString());
    const ctx = cvs.getContext('2d')!;
    if (opts.background) {
      ctx.fillStyle = opts.background;
      ctx.fillRect(0, 0, width, height);
    }
    ctx.drawImage(target as HTMLImageElement|HTMLCanvasElement, sx, sy, sw, sh);
    return new Output(cvs, opts.format!);
  }
}