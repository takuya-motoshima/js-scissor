# js-scissor

This module is to convert large images in common formats to smaller, web-friendly JPEG, PNG and WebP images of varying dimensions.

## Installation

```sh
npm install js-scissor;
```

## Usage

### The original images

The original image of 1200x533.

<img src="https://raw.githubusercontent.com/takuya-motoshima/js-scissor/master/screencap/input.jpg">

### Specify width

Resize to a width of 300px while keeping the aspect ratio.

<img src="https://raw.githubusercontent.com/takuya-motoshima/js-scissor/master/screencap/width.png">

```js
import scissor from 'js-scissor';

// Return base64 for resized image
scissor(input)
  .resize(300)
  .toBase64();

// Returns a resized image
scissor(input)
  .resize(300)
  .toImage();

// Returns the resized image as a Blob
scissor(input)
  .resize(300)
  .toBlob();
````

### Specify height

Resize to 200px high while keeping the aspect ratio.

<img src="https://raw.githubusercontent.com/takuya-motoshima/js-scissor/master/screencap/height.png">

```js
import scissor from 'js-scissor';

// Return base64 for resized image
scissor(input)
  .resize(null, 200)
  .toBase64();

// Returns a resized image
scissor(input)
  .resize(null, 200)
  .toImage();

// Returns the resized image as a Blob
scissor(input)
  .resize(null, 200)
  .toBlob();
````

### Resize by specifying width and height (cover)

Resize to a width of 300px and a height of 200px so that the center is cut out while maintaining the aspect ratio.

<img src="https://raw.githubusercontent.com/takuya-motoshima/js-scissor/master/screencap/cover.png">

```js
import scissor from 'js-scissor';

// Return base64 for resized image
scissor(input)
  .resize(300, 200, { fit: 'cover' })
  .toBase64();

// Returns a resized image
scissor(input)
  .resize(300, 200, { fit: 'cover' })
  .toImage();

// Returns the resized image as a Blob
scissor(input)
  .resize(300, 200, { fit: 'cover' })
  .toBlob();
````

### Resize by specifying width and height (contain)

Resize it to a width of 512px and a height of 200px to fit the specified size while maintaining the aspect ratio.  
Blank areas are filled with the background color (default black).

<img src="https://raw.githubusercontent.com/takuya-motoshima/js-scissor/master/screencap/contain.png">

```js
import scissor from 'js-scissor';

// Return base64 for resized image
scissor(input)
  .resize(300, 200, { fit: 'contain' })
  .toBase64();

// Returns a resized image
scissor(input)
  .resize(300, 200, { fit: 'contain' })
  .toImage();

// Returns the resized image as a Blob
scissor(input)
  .resize(300, 200, { fit: 'contain' })
  .toBlob();
````

### Resize by specifying width and height (fill)

Resize to the specified size without keeping the aspect ratio.

<img src="https://raw.githubusercontent.com/takuya-motoshima/js-scissor/master/screencap/fill.png">

```js
import scissor from 'js-scissor';

// Return base64 for resized image
scissor(input)
  .resize(300, 200)
  .toBase64();

// Returns a resized image
scissor(input)
  .resize(300, 200)
  .toImage();

// Returns the resized image as a Blob
scissor(input)
  .resize(300, 200)
  .toBlob();
````

## API

### Class: Edge

#### Constructor

Constructor factory to create an instance of scissor, to which further methods are chained.  
Image data can be converted from this object.

Parameters:

|Name|Type|Description|
|-|-|-|
|input|HTMLImageElement\|HTMLCanvasElement|Image or canvas element to convert|

Returns a Edge object.

#### resize()

Resize image to width, height or width x height.

Parameters:

|Name|Type|Description|
|-|-|-|
|width|number|pixels wide the resultant image should be. Use null or undefined to auto-scale the width to match the height.|
|height|number|pixels high the resultant image should be. Use null or undefined to auto-scale the height to match the width.|
|option|Object|<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr><thead><tbody><tr><td>fit</td><td>'fill'\|'cover'\|'contain'</td><td>how the image should be resized to fit both provided dimensions, one of cover, contain, fill. (optional, default 'fill')</td></tr><tr><td>background</td><td>string</td><td>background colour when using a fit of contain, parsed by the color  module, defaults to black without transparency. (optional, default #000)</td></tr><tr><td>format</td><td>'image/webp'\|'image/png'\|'image/jpeg'</td><td>Output image format</td></tr></tbody></table>|

Returns an Output object.

### Class: Output

#### Constructor

Output converted images in various formats.

Parameters:

|Name|Type|Description|
|-|-|-|
|input|HTMLCanvasElement|Converted image|

Returns a Output object.

#### toBase64()

Returns the converted image in Base64.

#### toImage()

Returns the transformed image element.

#### toBlob()

Returns the converted image as a Blob.

## Examples

There are some examples in "./examples" in this package.Here is the first one to get you started.

## License

[MIT licensed](./LICENSE.txt)
