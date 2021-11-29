import scissor from 'js-scissor';
// import scissor from '../../dist/build.esm.js';
import hljs from 'highlight.js';

(async () => {
  // Highlight the code.
  hljs.highlightAll();

  // Resize by specifying only the width.
  let src = document.querySelector('#src1');
  let dest = document.querySelector('#dest1');
  dest.src = (await scissor(src).resize(300)).toBase64();

  // Resize by specifying only the height.
  src = document.querySelector('#src2');
  dest = document.querySelector('#dest2');
  dest.src = (await scissor(src).resize(null, 100)).toBase64();

  // Resize by specifying width and height (cover)
  src = document.querySelector('#src3');
  dest = document.querySelector('#dest3');
  dest.src = (await scissor(src).resize(100, 150, {fit: 'cover'})).toBase64();

  // Resize by specifying width and height (contain)
  src = document.querySelector('#src4');
  dest = document.querySelector('#dest4');
  dest.src = (await scissor(src).resize(100, 150, {fit: 'contain'})).toBase64();

  // Resize by specifying width and height (fill)
  src = document.querySelector('#src5');
  dest = document.querySelector('#dest5');
  dest.src = (await scissor(src).resize(100, 150)).toBase64();

  // Resize the image read from the URL.
  dest = document.querySelector('#dest6');
  dest.src = (await scissor('img/sample2.png').resize(100, 200, {fit: 'cover'})).toBase64();
})();