/**
 * Wait for the image to load.
 */
export default function(img: HTMLImageElement): Promise<void> {
  return new Promise<void>(resolve => {
    if (img.complete) {
      // console.log(`${img.src} is already loaded`);
      return void resolve();
    }
    img.addEventListener('load', () => {
      // console.log(`Loaded ${img.src}`);
      resolve();
    });
  });
}