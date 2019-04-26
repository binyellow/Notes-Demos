define(function(require, exports, module) {
  'use strict';
  const quote = require('./quote');
  const sayName = (str = '金铭旸') => {
    const dom = document.createElement("p");
    dom.innerText = str + quote.TEST;
    document.body.appendChild(dom)
  }
  sayName()
});