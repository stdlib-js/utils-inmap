// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function e(e,n,o){var i,l,d;if(!t(e))throw new TypeError(s("1UzAh",e));if(!r(n))throw new TypeError(s("1Uz2H",n));for(i=e.length,d=0;d<i;d++)l=n.call(o,e[d],d,e),i!==e.length&&(i=e.length),d<i&&(e[d]=l);return e}export{e as default};
//# sourceMappingURL=index.mjs.map
