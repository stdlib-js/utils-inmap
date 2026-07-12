"use strict";var m=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var v=m(function(w,s){
var g=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,i){var u,t,a;if(!g(r))throw new TypeError(n('1UzAh',r));if(!f(e))throw new TypeError(n('1Uz2H',e));for(u=r.length,a=0;a<u;a++)t=e.call(i,r[a],a,r),u!==r.length&&(u=r.length),a<u&&(r[a]=t);return r}s.exports=h
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
