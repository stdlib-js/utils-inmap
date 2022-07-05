// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e,n,o){var i,l,d;if(!t(e))throw new TypeError(s("0kLBO",e));if(!r(n))throw new TypeError(s("0kL2S",n));for(i=e.length,d=0;d<i;d++)l=n.call(o,e[d],d,e),i!==e.length&&(i=e.length),d<i&&(e[d]=l);return e}export{e as default};
//# sourceMappingURL=index.mjs.map
