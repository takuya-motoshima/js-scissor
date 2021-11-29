import scissor from 'js-scissor';
// import scissor from '../../dist/build.esm.js';
import hljs from 'highlight.js';

(async () => {
  // Highlight the code.
  hljs.highlightAll();

  // Resize by specifying only the width.
  let srcImg = document.querySelector('#srcImg1');
  let destImg = document.querySelector('#destImg1');
  destImg.src = (await scissor(srcImg).resize(300)).toBase64();

  // Resize by specifying only the height.
  srcImg = document.querySelector('#srcImg2');
  destImg = document.querySelector('#destImg2');
  destImg.src = (await scissor(srcImg).resize(null, 100)).toBase64();

  // Resize by specifying width and height (cover)
  srcImg = document.querySelector('#srcImg3');
  destImg = document.querySelector('#destImg3');
  destImg.src = (await scissor(srcImg).resize(100, 150, {fit: 'cover'})).toBase64();

  // Resize by specifying width and height (contain)
  srcImg = document.querySelector('#srcImg4');
  destImg = document.querySelector('#destImg4');
  destImg.src = (await scissor(srcImg).resize(100, 150, {fit: 'contain'})).toBase64();

  // Resize by specifying width and height (fill)
  srcImg = document.querySelector('#srcImg5');
  destImg = document.querySelector('#destImg5');
  destImg.src = (await scissor(srcImg).resize(100, 150)).toBase64();

  // Resize the image read from the URL.
  destImg = document.querySelector('#destImg6');
  destImg.src = (await scissor('img/sample2.png').resize(100, 200, {fit: 'cover'})).toBase64();
})();