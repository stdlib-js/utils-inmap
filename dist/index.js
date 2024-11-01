"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=m(function(w,n){
var g=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,v){var u,i,a;if(!g(r))throw new TypeError(t('1UzAh',r));if(!f(e))throw new TypeError(t('1Uz2H',e));for(u=r.length,a=0;a<u;a++)i=e.call(v,r[a],a,r),u!==r.length&&(u=r.length),a<u&&(r[a]=i);return r}n.exports=h
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
