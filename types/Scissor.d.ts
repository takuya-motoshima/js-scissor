import Output from '~/Output';
export default class {
    /**
     * @type {HTMLImageElement|HTMLCanvasElement|string} Image data of the conversion source.
     */
    private target;
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|string} target HTMLImageElement, HTMLCanvasElement, image URL, image in DataURL format.
     */
    constructor(target: HTMLImageElement | HTMLCanvasElement | string);
    /**
     * Resize image to `width`, `height` or `width x height`.
     *
     * @param {number|null|undefined} width
     * @param {number|null|undefined} height
     * @param {{fit:'fill'|'cover'|'contain',background:string,format:'image/webp'|'image/png'|'image/jpeg'}} opts
     * @param {Promise<Output>}
     */
    resize(width: number | null, height?: number | null, opts?: {
        fit?: 'fill' | 'cover' | 'contain';
        background?: string;
        format?: 'image/webp' | 'image/png' | 'image/jpeg';
    }): Promise<Output>;
}
