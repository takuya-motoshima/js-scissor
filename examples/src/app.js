import Scissor from 'js-scissor';
// import Scissor from '../../dist/build.esm.js';
import hljs from 'highlight.js';

(async () => {
  // Highlight the code.
  hljs.highlightAll();
  
  // Resize width.
  // HTML: <img id="src1" src="img/sample1.jpg">
  //       <img id="dest1">
  let src = document.querySelector('#src1');
  let dest = document.querySelector('#dest1');
  dest.src = (await new Scissor(src).resize(100)).toBase64();

  // Resize height.
  // HTML: <img id="src2" src="img/sample2.png">
  //       <img id="dest2">
  src = document.querySelector('#src2');
  dest = document.querySelector('#dest2');
  dest.src = (await new Scissor(src).resize(null, 100)).toBase64();

  // Resize by specifying width and height (cover)
  // HTML: <img id="src3" src="img/sample1.jpg">
  //       <img id="dest3">
  src = document.querySelector('#src3');
  dest = document.querySelector('#dest3');
  dest.src = (await new Scissor(src).resize(100, 225, {fit: 'cover'})).toBase64();

  // Resize by specifying width and height (contain)
  // HTML: <img id="src4" src="img/sample1.jpg">
  //       <img id="dest4">
  src = document.querySelector('#src4');
  dest = document.querySelector('#dest4');
  dest.src = (await new Scissor(src).resize(100, 225, {fit: 'contain'})).toBase64();

  // Resize by specifying width and height (fill)
  // HTML: <img id="src5" src="img/sample1.jpg">
  //       <img id="dest5">
  src = document.querySelector('#src5');
  dest = document.querySelector('#dest5');
  dest.src = (await new Scissor(src).resize(100, 225)).toBase64();

  // Resize the image read from the URL.
  // HTML: <img src="img/sample2.png">
  //       <img id="dest6">
  dest = document.querySelector('#dest6');
  dest.src = (await new Scissor('img/sample2.png').resize(100, 225, {fit: 'cover'})).toBase64();
})();