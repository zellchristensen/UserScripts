// ==UserScript==
// @match       https://mail.proton.me/*
// @name        ProtonMail Full Subject Line
// @version     0.1
// @namespace   
// ==/UserScript==

if(window.matchMedia('(hover: none)').matches)
{
  const mystyle = new CSSStyleSheet();
  mystyle.replace(`.text-ellipsis-two-lines {-webkit-line-clamp: inherit;}`);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, mystyle];
}
