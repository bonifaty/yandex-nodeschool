!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,a,s=A;for(a=arguments.length;a-- >2;)P.push(arguments[a]);for(t&&null!=t.children&&(P.length||P.push(t.children),delete t.children);P.length;)if((o=P.pop())&&void 0!==o.pop)for(a=o.length;a--;)P.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?s[s.length-1]+=o:s===A?s=[o]:s.push(o),n=i;var l=new r;return l.nodeName=e,l.children=s,l.attributes=null==t?void 0:t,l.key=null==t?void 0:t.key,void 0!==E.vnode&&E.vnode(l),l}function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e){!e._dirty&&(e._dirty=!0)&&1==B.push(e)&&(E.debounceRendering||T)(l)}function l(){var e,t=B;for(B=[];e=t.pop();)e._dirty&&O(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===L.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,v,a):e.removeEventListener(t,v,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)m(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function m(e,t,n){try{e[t]=n}catch(e){}}function v(e){return this._listeners[e.type](E.event&&E.event(e)||e)}function b(){for(var e;e=V.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function y(e,t,n,r,o,i){F++||(q=null!=o&&void 0!==o.ownerSVGElement,z=null!=e&&!("__preactattr_"in e));var a=g(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--F||(z=!1,i||b()),a}function g(e,t,n,r,o){var i=e,a=q;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return U(e,t,n,r);if(q="svg"===s||"foreignObject"!==s&&q,s=String(s),(!e||!c(e,s))&&(i=f(s,q),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0)}var l=i.firstChild,u=i.__preactattr_,p=t.children;if(null==u){u=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)u[d[h].name]=d[h].value}return!z&&p&&1===p.length&&"string"==typeof p[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=p[0]&&(l.nodeValue=p[0]):(p&&p.length||null!=l)&&_(i,p,n,r,z||null!=u.dangerouslySetInnerHTML),C(i,t.attributes,u),q=a,i}function _(e,t,n,r,o){var i,a,s,l,c,p=e.childNodes,f=[],h={},m=0,v=0,b=p.length,y=0,_=t?t.length:0;if(0!==b)for(var w=0;w<b;w++){var C=p[w],S=C.__preactattr_,k=_&&S?C._component?C._component.__key:S.key:null;null!=k?(m++,h[k]=C):(S||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(f[y++]=C)}if(0!==_)for(var w=0;w<_;w++){l=t[w],c=null;var k=l.key;if(null!=k)m&&void 0!==h[k]&&(c=h[k],h[k]=void 0,m--);else if(!c&&v<y)for(i=v;i<y;i++)if(void 0!==f[i]&&u(a=f[i],l,o)){c=a,f[i]=void 0,i===y-1&&y--,i===v&&v++;break}c=g(c,l,n,r),s=p[w],c&&c!==e&&c!==s&&(null==s?e.appendChild(c):c===s.nextSibling?d(s):e.insertBefore(c,s))}if(m)for(var w in h)void 0!==h[w]&&x(h[w],!1);for(;v<=y;)void 0!==(c=f[y--])&&x(c,!1)}function x(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;x(e,!0),e=t}}function C(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,q);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],q)}function S(e){var t=e.constructor.name;(D[t]||(D[t]=[])).push(e)}function k(e,t,n){var r,o=D[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),R.call(r,t,n)):(r=new R(t,n),r.constructor=e,r.render=N),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function N(e,t,n){return this.constructor(e,n)}function M(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?s(e):O(e,1,o)),e.__ref&&e.__ref(e))}function O(e,t,n,r){if(!e._disable){var o,a,s,l=e.props,u=e.state,c=e.context,f=e.prevProps||l,d=e.prevState||u,h=e.prevContext||c,m=e.base,v=e.nextBase,g=m||v,_=e._component,w=!1;if(m&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,u,c)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(l,u,c),e.props=l,e.state=u,e.context=c),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){o=e.render(l,u,c),e.getChildContext&&(c=i(i({},c),e.getChildContext()));var C,S,N=o&&o.nodeName;if("function"==typeof N){var U=p(o);a=_,a&&a.constructor===N&&U.key==a.__key?M(a,U,1,c,!1):(C=a,e._component=a=k(N,U,c),a.nextBase=a.nextBase||v,a._parentComponent=e,M(a,U,0,c,!1),O(a,1,n,!0)),S=a.base}else s=g,C=_,C&&(s=e._component=null),(g||1===t)&&(s&&(s._component=null),S=y(s,o,c,n||!m,g&&g.parentNode,!0));if(g&&S!==g&&a!==_){var R=g.parentNode;R&&S!==R&&(R.replaceChild(S,g),C||(g._component=null,x(g,!1)))}if(C&&j(C),e.base=S,S&&!r){for(var I=e,P=e;P=P._parentComponent;)(I=P).base=S;S._component=I,S._componentConstructor=I.constructor}}if(!m||n?V.unshift(e):w||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),E.afterUpdate&&E.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);F||r||b()}}function U(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,u=p(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(M(o,u,3,n,r),e=o.base):(i&&!s&&(j(i),e=a=null),o=k(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,a=null),M(o,u,1,n,r),e=o.base,a&&e!==a&&(a._component=null,x(a,!1))),e}function j(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?j(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),S(e),w(t)),e.__ref&&e.__ref(null)}function R(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function I(e,t,n){return y(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return o}),n.d(t,"createElement",function(){return o}),n.d(t,"cloneElement",function(){return a}),n.d(t,"Component",function(){return R}),n.d(t,"render",function(){return I}),n.d(t,"rerender",function(){return l}),n.d(t,"options",function(){return E});var E={},P=[],A=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,L=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,B=[],V=[],F=0,q=!1,z=!1,D={};i(R.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),O(this,2)},render:function(){}});var H={h:o,createElement:o,cloneElement:a,Component:R,render:I,rerender:l,options:E};t.default=H},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],u=i[3],c={css:s,media:l,sourceMap:u};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=y++;n=b||(b=s(t)),r=p.bind(null,n,u,!1),o=p.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,y=0,g=[],_=n(9);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){!function(t,n){"use strict";e.exports=n()}(0,function(){function e(t){if(!(this instanceof e))return n(t);t=t||{},this.tailSpace=t.tailSpace||"",this.elementSeparator=t.elementSeparator||"__",this.modSeparator=t.modSeparator||"_",this.modValueSeparator=t.modValueSeparator||"_",this.classSeparator=t.classSeparator||" ",this.isFullModifier=void 0===t.isFullModifier||t.isFullModifier}function t(e,t,n){return this.bind.apply(this,[null].concat(Array.prototype.slice.call(arguments)))}function n(n){var r=new e(n),o=r.stringify.bind(r);return o.with=o.lock=t,o}e.prototype={_stringifyModifier:function(e,t,n){var r="";return!1===n||void 0===n?r:(r+=this.classSeparator+e+this.modSeparator+t,!0!==n&&(r+=this.modValueSeparator+String(n)),r)},_stringifyModifiers:function(e,t){var n="";this.isFullModifier||(e="");for(var r in t)t.hasOwnProperty(r)&&(n+=this._stringifyModifier(e,r,t[r]));return n},stringify:function(e,t,n){var r=String(e);return t&&"object"==typeof t&&void 0===n&&(n=t,t=null),t&&(r+=this.elementSeparator+String(t)),n&&(r+=this._stringifyModifiers(r,n)),r+this.tailSpace}};var r=n();return r.B=e,r})},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";var r=n(1);n(6);var o=n(10),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(3).with("app");n(16),(0,r.render)((0,r.h)("div",{className:a()},(0,r.h)("div",{className:a("form")},(0,r.h)(i.default,null))),document.body)},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(void 0),t.i(n(8),""),t.push([e.i,"html,\nbody,\n.app {\n  height: 100%;\n  background-color: #f0f0f0;\n}\n.app {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.app__form {\n  width: 400px;\n}\n",""])},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1);n(11);var u=n(13),c=function(e){return e&&e.__esModule?e:{default:e}}(u),p=n(3).with("ya-form"),f=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={formTriedSubmit:!1,formIsInProgress:!1,testError:!1,fetchCounter:0,resultMessage:""},e.handleInputUpdate=e.handleInputUpdate.bind(e),e.handleCheckboxChange=e.handleCheckboxChange.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e.sendApiRequest=e.sendApiRequest.bind(e),e.handleApiResponse=e.handleApiResponse.bind(e),e.formFields=[{name:"fio",placeholder:"ФИО",pattern:"^[a-zA-Zа-яА-Я]+\\s[a-zA-Zа-яА-Я]+\\s[a-zA-Zа-яА-Я]+$",suggestion:"Ровно три слова"},{name:"email",type:"email",placeholder:"Email",pattern:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@?(ya.ru|yandex.ru|yandex.ua|yandex.by|yandex.kz|yandex.com)$",suggestion:"Tолько в доменах ya.ru, yandex.ru, yandex.ua, yandex.by, ,yandex.kz, yandex.com"},{name:"phone",type:"phone",placeholder:"Телефон",pattern:"^(\\+7)(\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2})$",maxDigitsSum:"30",suggestion:"Формат: +7(999)999-99-99, сумма цифр не должна превышать 30"}],e}return a(t,e),s(t,[{key:"handleInputUpdate",value:function(e,t,n){this.setState(r({},e,{value:t,isValid:n}))}},{key:"isFormValid",value:function(){var e=this;return 0===this.formFields.map(function(e){return e.name}).filter(function(t){return!e.state[t].isValid}).length}},{key:"getFormData",value:function(){var e=this;return this.formFields.map(function(e){return e.name}).reduce(function(t,n){return t[n]=e.state[n].value,t},{})}},{key:"handleApiResponse",value:function(e){switch(e.status){case"success":this.setState({fetchCounter:0,formIsInProgress:!1,resultMessage:"Success"});break;case"progress":this.setState({fetchCounter:this.state.fetchCounter+1}),setTimeout(this.sendApiRequest,e.timeout);break;case"error":this.setState({fetchCounter:0,formIsInProgress:!1,resultMessage:e.reason})}}},{key:"sendApiRequest",value:function(){var e=this.getFormData(),t="/api/"+(this.state.fetchCounter>2?this.state.testError?"error":"success":"progress")+".json",n=Object.keys(e);n.forEach(function(r,o){t+=(0===o?"?":"")+r+"="+encodeURIComponent(e[r])+(n.length!==o+1?"&":"")}),fetch(t).then(function(e){return e.json()}).then(this.handleApiResponse)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({formTriedSubmit:!0}),this.isFormValid()&&(this.setState({formIsInProgress:!0}),this.sendApiRequest())}},{key:"handleCheckboxChange",value:function(e){this.setState({testError:e.target.checked})}},{key:"render",value:function(e,t){var n=this;return(0,l.h)("div",{className:p()},(0,l.h)("div",{className:p("label")},(0,l.h)("div",{className:p("container")},"Yandex")),(0,l.h)("div",{className:p("container")},(0,l.h)("div",{className:p("content")},(0,l.h)("h1",{className:p("title")},"Школа Node.js"),(0,l.h)("div",{className:p("header")},(0,l.h)("svg",{viewBox:"0 0 200 200",className:p("header-circle"),fill:"#fecd2f"},(0,l.h)("circle",{cx:"100",cy:"100",r:"100"}))),(0,l.h)("form",{id:"myForm",noValidate:!0,onSubmit:this.handleSubmit},this.formFields.map(function(e){return(0,l.h)("div",{className:p("row"),key:e.name},(0,l.h)(c.default,{showValidation:t.formTriedSubmit,name:e.name,type:e.type,placeholder:e.placeholder,pattern:e.pattern,maxDigitsSum:e.maxDigitsSum,suggestion:e.suggestion,onUpdate:n.handleInputUpdate}))}),(0,l.h)("div",{className:p("actions")},(0,l.h)("button",{className:p("button"),id:"submitButton",disabled:t.formIsInProgress},"Поехали!"),(0,l.h)("input",{onChange:this.handleCheckboxChange,checked:t.testError,type:"checkbox"}))),(0,l.h)("div",{id:"resultContainer",className:p("result")},t.resultMessage))))}}]),t}(l.Component);t.default=f},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".ya-form {\n  background-color: #fff;\n}\n.ya-form__container {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.ya-form__label {\n  padding: 10px 0 30px;\n  background-color: #e61400;\n  color: #fff;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n}\n.ya-form__content {\n  padding: 20px 0;\n}\n.ya-form__title {\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1.2;\n  margin-bottom: 10px;\n}\n.ya-form__header {\n  margin-bottom: 20px;\n}\n.ya-form__header-circle {\n  width: 40px;\n  height: 40px;\n}\n.ya-form__row {\n  margin-top: 15px;\n}\n.ya-form__actions {\n  margin-top: 30px;\n}\n.ya-form__button {\n  -webkit-appearance: none;\n  border-width: 0;\n  background-color: #fecd2f;\n  padding: 10px 20px;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1;\n}\n.ya-form__button:hover {\n  background-color: #fed54e;\n  cursor: pointer;\n}\n.ya-form__button:focus {\n  outline: none;\n}\n.ya-form__button:disabled {\n  background-color: #cbcbcb;\n}\n",""])},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(14);var s=n(1),l=n(3).with("text-input"),u=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:"",isValid:!0},e.handleInput=e.handleInput.bind(e),e}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.handleInput()}},{key:"handleInput",value:function(){var e=void 0,t=this._input,n=t.name,r=t.value,o=t.validity,i=this.props,a=i.maxDigitsSum,s=i.onUpdate;if(e=o.valid,a&&r.length>0){var l=r.replace(/[^\d]*/g,"");Array.from(l).reduce(function(e,t){return parseInt(e)+parseInt(t)},0)>a&&(e=!1)}this.setState({value:r,isValid:e}),s(n,r,e)}},{key:"render",value:function(e,t){var n=this;return(0,s.h)("div",{className:l({error:!t.isValid&&e.showValidation,correct:t.isValid})},(0,s.h)("input",{ref:function(e){return n._input=e},className:l("control"),name:e.name,value:t.value,onInput:this.handleInput,required:!0,type:e.type?e.type:"text",placeholder:e.placeholder,pattern:e.pattern}),(0,s.h)("div",{className:l("suggestion")},e.suggestion))}}]),t}(s.Component);t.default=u},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".text-input__control {\n  box-sizing: border-box;\n  padding: 8px 12px;\n  width: 100%;\n  border: 1px solid #ececec;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.4;\n}\n.text-input__control:focus {\n  outline-color: #fecd2f;\n  outline-width: 3px;\n}\n.text-input_correct .text-input__control:focus {\n  outline-color: #9acd32;\n}\n.text-input_error .text-input__control {\n  border: 1px solid #e61400;\n}\n.text-input_error .text-input__control:focus {\n  outline-color: #e61400;\n}\n.text-input__suggestion {\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.2;\n  color: #b7b7b7;\n  padding: 2px 4px;\n  margin-top: 3px;\n}\n",""])},function(e,t,n){e.exports=n.p+"index.html"}]);