// ==UserScript==
// @match       https://mail.proton.me/*
// @name        ProtonMail Full Subject Line
// @version     0.2
// @downloadURL   https://raw.githubusercontent.com/zellchristensen/UserScripts/main/ProtonmailFullSubject.js
// ==/UserScript==

if(window.matchMedia('(hover: none)').matches)
{
  const mystyle = new CSSStyleSheet();
  mystyle.replace(`.text-ellipsis-two-lines {-webkit-line-clamp: inherit;}`);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, mystyle];
}
