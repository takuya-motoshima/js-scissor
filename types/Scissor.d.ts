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
     * Resizes the image and returns an "Output" object that can retrieve the resized image data in various formats.
     *
     * @param {number|null}                           width  Resize width. If the width is omitted, the height of the parameter is required.
     * @param {number|null}                           height Resize height. If the height is omitted, the parameter width is required.
     * @param {'fill'|'cover'|'contain'}              options.fit Image embedding method in the area after resizing, default is 'fill'.
     * @param {string}                                options.background Background color, default is '#000'.
     * @param {'image/webp'|'image/png'|'image/jpeg'} options.format Image format after resizing, default is 'image/png'.
     * @param {Promise<Output>}                       Returns an "output" object that can retrieve resized image data in various formats.
     */
    resize(width: number | null, height?: number | null, opts?: {
        fit?: 'fill' | 'cover' | 'contain';
        background?: string;
        format?: 'image/webp' | 'image/png' | 'image/jpeg';
    }): Promise<Output>;
}
