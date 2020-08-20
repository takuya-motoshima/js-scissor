import Output from '~/Output';
export default class {
    private input;
    /**
     * @param {HTMLImageElement|HTMLCanvasElement} input
     */
    constructor(input: HTMLImageElement | HTMLCanvasElement);
    /**
     * Resize image to `width`, `height` or `width x height`.
     *
     * @param {number|null|undefined} width
     * @param {number|null|undefined} height
     * @param {{fit:'fill'|'cover'|'contain',background:string,format:'image/webp'|'image/png'|'image/jpeg'}} option
     * @param {Output}
     */
    resize(width: number | null, height?: number | null, option?: {
        fit?: 'fill' | 'cover' | 'contain';
        background?: string;
        format?: 'image/webp' | 'image/png' | 'image/jpeg';
    }): Output;
}
