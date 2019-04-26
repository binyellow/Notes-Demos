define(['quote'], function(quote) {
  'use strict';
  const sayName = (str) => {
    const dom = document.createElement("p");
    dom.innerText = str + quote.TEST;
    document.body.appendChild(dom)
  }
  return { sayName }
});