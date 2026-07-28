(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();function ch(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var md={exports:{}},zi={},gd={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu=Symbol.for("react.element"),dh=Symbol.for("react.portal"),fh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),hh=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),vh=Symbol.for("react.memo"),bh=Symbol.for("react.lazy"),ys=Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xd=Object.assign,vd={};function or(e,n,t){this.props=e,this.context=n,this.refs=vd,this.updater=t||yd}or.prototype.isReactComponent={};or.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bd(){}bd.prototype=or.prototype;function nl(e,n,t){this.props=e,this.context=n,this.refs=vd,this.updater=t||yd}var tl=nl.prototype=new bd;tl.constructor=nl;xd(tl,or.prototype);tl.isPureReactComponent=!0;var xs=Array.isArray,kd=Object.prototype.hasOwnProperty,rl={current:null},wd={key:!0,ref:!0,__self:!0,__source:!0};function _d(e,n,t){var r,u={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)kd.call(n,r)&&!wd.hasOwnProperty(r)&&(u[r]=n[r]);var a=arguments.length-2;if(a===1)u.children=t;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];u.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)u[r]===void 0&&(u[r]=a[r]);return{$$typeof:lu,type:e,key:i,ref:o,props:u,_owner:rl.current}}function wh(e,n){return{$$typeof:lu,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===lu}function _h(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var vs=/\/+/g;function mo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_h(""+e.key):n.toString(36)}function Gu(e,n,t,r,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case lu:case dh:o=!0}}if(o)return o=e,u=u(o),e=r===""?"."+mo(o,0):r,xs(u)?(t="",e!=null&&(t=e.replace(vs,"$&/")+"/"),Gu(u,n,t,"",function(s){return s})):u!=null&&(ul(u)&&(u=wh(u,t+(!u.key||o&&o.key===u.key?"":(""+u.key).replace(vs,"$&/")+"/")+e)),n.push(u)),1;if(o=0,r=r===""?".":r+":",xs(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+mo(i,a);o+=Gu(i,n,t,l,u)}else if(l=kh(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+mo(i,a++),o+=Gu(i,n,t,l,u);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Eu(e,n,t){if(e==null)return e;var r=[],u=0;return Gu(e,r,"","",function(i){return n.call(t,i,u++)}),r}function Sh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Vu={transition:null},Ch={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:rl};function Sd(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Eu,forEach:function(e,n,t){Eu(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Eu(e,function(){n++}),n},toArray:function(e){return Eu(e,function(n){return n})||[]},only:function(e){if(!ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=or;L.Fragment=fh;L.Profiler=hh;L.PureComponent=nl;L.StrictMode=ph;L.Suspense=xh;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ch;L.act=Sd;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xd({},e.props),u=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=rl.current),n.key!==void 0&&(u=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)kd.call(n,l)&&!wd.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var s=0;s<l;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:lu,type:e.type,key:u,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mh,_context:e},e.Consumer=e};L.createElement=_d;L.createFactory=function(e){var n=_d.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:yh,render:e}};L.isValidElement=ul;L.lazy=function(e){return{$$typeof:bh,_payload:{_status:-1,_result:e},_init:Sh}};L.memo=function(e,n){return{$$typeof:vh,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Vu.transition;Vu.transition={};try{e()}finally{Vu.transition=n}};L.unstable_act=Sd;L.useCallback=function(e,n){return xe.current.useCallback(e,n)};L.useContext=function(e){return xe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};L.useEffect=function(e,n){return xe.current.useEffect(e,n)};L.useId=function(){return xe.current.useId()};L.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return xe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};L.useRef=function(e){return xe.current.useRef(e)};L.useState=function(e){return xe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return xe.current.useTransition()};L.version="18.3.1";gd.exports=L;var w=gd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=w,Ah=Symbol.for("react.element"),Dh=Symbol.for("react.fragment"),Fh=Object.prototype.hasOwnProperty,Th=Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ph={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,n,t){var r,u={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Fh.call(n,r)&&!Ph.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)u[r]===void 0&&(u[r]=n[r]);return{$$typeof:Ah,type:e,key:i,ref:o,props:u,_owner:Th.current}}zi.Fragment=Dh;zi.jsx=Cd;zi.jsxs=Cd;md.exports=zi;var v=md.exports,Ed={exports:{}},Re={},Ad={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(F,R){var N=F.length;F.push(R);e:for(;0<N;){var K=N-1>>>1,te=F[K];if(0<u(te,R))F[K]=R,F[N]=te,N=K;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var R=F[0],N=F.pop();if(N!==R){F[0]=N;e:for(var K=0,te=F.length,Su=te>>>1;K<Su;){var rt=2*(K+1)-1,ho=F[rt],ut=rt+1,Cu=F[ut];if(0>u(ho,N))ut<te&&0>u(Cu,ho)?(F[K]=Cu,F[ut]=N,K=ut):(F[K]=ho,F[rt]=N,K=rt);else if(ut<te&&0>u(Cu,N))F[K]=Cu,F[ut]=N,K=ut;else break e}}return R}function u(F,R){var N=F.sortIndex-R.sortIndex;return N!==0?N:F.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],s=[],d=1,c=null,f=3,h=!1,g=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var R=t(s);R!==null;){if(R.callback===null)r(s);else if(R.startTime<=F)r(s),R.sortIndex=R.expirationTime,n(l,R);else break;R=t(s)}}function x(F){if(b=!1,m(F),!g)if(t(l)!==null)g=!0,mr(_);else{var R=t(s);R!==null&&po(x,R.startTime-F)}}function _(F,R){g=!1,b&&(b=!1,y(A),A=-1),h=!0;var N=f;try{for(m(R),c=t(l);c!==null&&(!(c.expirationTime>R)||F&&!ne());){var K=c.callback;if(typeof K=="function"){c.callback=null,f=c.priorityLevel;var te=K(c.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?c.callback=te:c===t(l)&&r(l),m(R)}else r(l);c=t(l)}if(c!==null)var Su=!0;else{var rt=t(s);rt!==null&&po(x,rt.startTime-R),Su=!1}return Su}finally{c=null,f=N,h=!1}}var S=!1,E=null,A=-1,I=5,P=-1;function ne(){return!(e.unstable_now()-P<I)}function nt(){if(E!==null){var F=e.unstable_now();P=F;var R=!0;try{R=E(!0,F)}finally{R?tt():(S=!1,E=null)}}else S=!1}var tt;if(typeof p=="function")tt=function(){p(nt)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,En=hr.port2;hr.port1.onmessage=nt,tt=function(){En.postMessage(null)}}else tt=function(){k(nt,0)};function mr(F){E=F,S||(S=!0,tt())}function po(F,R){A=k(function(){F(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,mr(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var N=f;f=R;try{return F()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,R){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var N=f;f=F;try{return R()}finally{f=N}},e.unstable_scheduleCallback=function(F,R,N){var K=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,F){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=N+te,F={id:d++,callback:R,priorityLevel:F,startTime:N,expirationTime:te,sortIndex:-1},N>K?(F.sortIndex=N,n(s,F),t(l)===null&&F===t(s)&&(b?(y(A),A=-1):b=!0,po(x,N-K))):(F.sortIndex=te,n(l,F),g||h||(g=!0,mr(_))),F},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(F){var R=f;return function(){var N=f;f=R;try{return F.apply(this,arguments)}finally{f=N}}}})(Dd);Ad.exports=Dd;var Ih=Ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh=w,Pe=Ih;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fd=new Set,jr={};function bt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(jr[e]=n,e=0;e<n.length;e++)Fd.add(n[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,Nh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},ks={};function Lh(e){return Zo.call(ks,e)?!0:Zo.call(bs,e)?!1:Nh.test(e)?ks[e]=!0:(bs[e]=!0,!1)}function Oh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mh(e,n,t,r){if(n===null||typeof n>"u"||Oh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,u,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=u,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(il,ol);ce[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(il,ol);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(il,ol);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function al(e,n,t,r){var u=ce.hasOwnProperty(n)?ce[n]:null;(u!==null?u.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Mh(n,t,u,r)&&(t=null),r||u===null?Lh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):u.mustUseProperty?e[u.propertyName]=t===null?u.type===3?!1:"":t:(n=u.attributeName,r=u.attributeNamespace,t===null?e.removeAttribute(n):(u=u.type,t=u===3||u===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Sn=Rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Au=Symbol.for("react.element"),At=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),ll=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),cl=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),ws=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,go;function Cr(e){if(go===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);go=n&&n[1]||""}return`
`+go+e}var yo=!1;function xo(e,n){if(!e||yo)return"";yo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var u=s.stack.split(`
`),i=r.stack.split(`
`),o=u.length-1,a=i.length-1;1<=o&&0<=a&&u[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(u[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||u[o]!==i[a]){var l=`
`+u[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{yo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Cr(e):""}function jh(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case At:return"Portal";case Xo:return"Profiler";case ll:return"StrictMode";case ea:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pd:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case sl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cl:return n=e.displayName||null,n!==null?n:ta(e.type)||"Memo";case Fn:n=e._payload,e=e._init;try{return ta(e(n))}catch{}}return null}function Bh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(n);case 8:return n===ll?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zh(e){var n=Rd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var u=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Du(e){e._valueTracker||(e._valueTracker=zh(e))}function Nd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Rd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _s(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ld(e,n){n=n.checked,n!=null&&al(e,"checked",n,!1)}function ua(e,n){Ld(e,n);var t=Vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ia(e,n.type,t):n.hasOwnProperty("defaultValue")&&ia(e,n.type,Vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ss(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ia(e,n,t){(n!=="number"||li(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Er=Array.isArray;function Ut(e,n,t,r){if(e=e.options,n){n={};for(var u=0;u<t.length;u++)n["$"+t[u]]=!0;for(t=0;t<e.length;t++)u=n.hasOwnProperty("$"+e[t].value),e[t].selected!==u&&(e[t].selected=u),u&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Vn(t),n=null,u=0;u<e.length;u++){if(e[u].value===t){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function oa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Er(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Vn(t)}}function Od(e,n){var t=Vn(n.value),r=Vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Es(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Md(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fu,jd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,u){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,u)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Fu=Fu||document.createElement("div"),Fu.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Fu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Br(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hh=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Hh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Fr[n]=Fr[e]})});function Bd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+n).trim():n+"px"}function zd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,u=Bd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,u):e[t]=u}}var Uh=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,n){if(n){if(Uh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function sa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,$t=null,qt=null;function As(e){if(e=du(e)){if(typeof da!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Wi(n),da(e.stateNode,e.type,n))}}function Hd(e){$t?qt?qt.push(e):qt=[e]:$t=e}function Ud(){if($t){var e=$t,n=qt;if(qt=$t=null,As(e),n)for(e=0;e<n.length;e++)As(n[e])}}function $d(e,n){return e(n)}function qd(){}var vo=!1;function Wd(e,n,t){if(vo)return e(n,t);vo=!0;try{return $d(e,n,t)}finally{vo=!1,($t!==null||qt!==null)&&(qd(),Ud())}}function zr(e,n){var t=e.stateNode;if(t===null)return null;var r=Wi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var fa=!1;if(vn)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){fa=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{fa=!1}function $h(e,n,t,r,u,i,o,a,l){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(d){this.onError(d)}}var Tr=!1,si=null,ci=!1,pa=null,qh={onError:function(e){Tr=!0,si=e}};function Wh(e,n,t,r,u,i,o,a,l){Tr=!1,si=null,$h.apply(qh,arguments)}function Gh(e,n,t,r,u,i,o,a,l){if(Wh.apply(this,arguments),Tr){if(Tr){var s=si;Tr=!1,si=null}else throw Error(C(198));ci||(ci=!0,pa=s)}}function kt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Gd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ds(e){if(kt(e)!==e)throw Error(C(188))}function Vh(e){var n=e.alternate;if(!n){if(n=kt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var u=t.return;if(u===null)break;var i=u.alternate;if(i===null){if(r=u.return,r!==null){t=r;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===t)return Ds(u),e;if(i===r)return Ds(u),n;i=i.sibling}throw Error(C(188))}if(t.return!==r.return)t=u,r=i;else{for(var o=!1,a=u.child;a;){if(a===t){o=!0,t=u,r=i;break}if(a===r){o=!0,r=u,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=u;break}if(a===r){o=!0,r=i,t=u;break}a=a.sibling}if(!o)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Vd(e){return e=Vh(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Yd(e);if(n!==null)return n;e=e.sibling}return null}var Kd=Pe.unstable_scheduleCallback,Fs=Pe.unstable_cancelCallback,Yh=Pe.unstable_shouldYield,Kh=Pe.unstable_requestPaint,Q=Pe.unstable_now,Qh=Pe.unstable_getCurrentPriorityLevel,fl=Pe.unstable_ImmediatePriority,Qd=Pe.unstable_UserBlockingPriority,di=Pe.unstable_NormalPriority,Jh=Pe.unstable_LowPriority,Jd=Pe.unstable_IdlePriority,Hi=null,tn=null;function Zh(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:nm,Xh=Math.log,em=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(Xh(e)/em|0)|0}var Tu=64,Pu=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,u=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~u;a!==0?r=Ar(a):(i&=o,i!==0&&(r=Ar(i)))}else o=t&~u,o!==0?r=Ar(o):i!==0&&(r=Ar(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&u)&&(u=r&-r,i=n&-n,u>=i||u===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),u=1<<t,r|=e[t],n&=~u;return r}function tm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ve(i),a=1<<o,l=u[o];l===-1?(!(a&t)||a&r)&&(u[o]=tm(a,n)):l<=n&&(e.expiredLanes|=a),i&=~a}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zd(){var e=Tu;return Tu<<=1,!(Tu&4194240)&&(Tu=64),e}function bo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function su(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function um(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var u=31-Ve(t),i=1<<u;n[u]=0,r[u]=-1,e[u]=-1,t&=~i}}function pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),u=1<<r;u&n|e[r]&n&&(e[r]|=n),t&=~u}}var M=0;function Xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var e0,hl,n0,t0,r0,ma=!1,Iu=[],jn=null,Bn=null,zn=null,Hr=new Map,Ur=new Map,In=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,n){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(n.pointerId)}}function xr(e,n,t,r,u,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[u]},n!==null&&(n=du(n),n!==null&&hl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function om(e,n,t,r,u){switch(n){case"focusin":return jn=xr(jn,e,n,t,r,u),!0;case"dragenter":return Bn=xr(Bn,e,n,t,r,u),!0;case"mouseover":return zn=xr(zn,e,n,t,r,u),!0;case"pointerover":var i=u.pointerId;return Hr.set(i,xr(Hr.get(i)||null,e,n,t,r,u)),!0;case"gotpointercapture":return i=u.pointerId,Ur.set(i,xr(Ur.get(i)||null,e,n,t,r,u)),!0}return!1}function u0(e){var n=at(e.target);if(n!==null){var t=kt(n);if(t!==null){if(n=t.tag,n===13){if(n=Gd(t),n!==null){e.blockedOn=n,r0(e.priority,function(){n0(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ga(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ca=r,t.target.dispatchEvent(r),ca=null}else return n=du(t),n!==null&&hl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ps(e,n,t){Yu(e)&&t.delete(n)}function am(){ma=!1,jn!==null&&Yu(jn)&&(jn=null),Bn!==null&&Yu(Bn)&&(Bn=null),zn!==null&&Yu(zn)&&(zn=null),Hr.forEach(Ps),Ur.forEach(Ps)}function vr(e,n){e.blockedOn===n&&(e.blockedOn=null,ma||(ma=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,am)))}function $r(e){function n(u){return vr(u,e)}if(0<Iu.length){vr(Iu[0],e);for(var t=1;t<Iu.length;t++){var r=Iu[t];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&vr(jn,e),Bn!==null&&vr(Bn,e),zn!==null&&vr(zn,e),Hr.forEach(n),Ur.forEach(n),t=0;t<In.length;t++)r=In[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(t=In[0],t.blockedOn===null);)u0(t),t.blockedOn===null&&In.shift()}var Wt=Sn.ReactCurrentBatchConfig,pi=!0;function lm(e,n,t,r){var u=M,i=Wt.transition;Wt.transition=null;try{M=1,ml(e,n,t,r)}finally{M=u,Wt.transition=i}}function sm(e,n,t,r){var u=M,i=Wt.transition;Wt.transition=null;try{M=4,ml(e,n,t,r)}finally{M=u,Wt.transition=i}}function ml(e,n,t,r){if(pi){var u=ga(e,n,t,r);if(u===null)To(e,n,r,hi,t),Ts(e,r);else if(om(u,e,n,t,r))r.stopPropagation();else if(Ts(e,r),n&4&&-1<im.indexOf(e)){for(;u!==null;){var i=du(u);if(i!==null&&e0(i),i=ga(e,n,t,r),i===null&&To(e,n,r,hi,t),i===u)break;u=i}u!==null&&r.stopPropagation()}else To(e,n,r,null,t)}}var hi=null;function ga(e,n,t,r){if(hi=null,e=dl(r),e=at(e),e!==null)if(n=kt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Gd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return hi=e,null}function i0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qh()){case fl:return 1;case Qd:return 4;case di:case Jh:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var Ln=null,gl=null,Ku=null;function o0(){if(Ku)return Ku;var e,n=gl,t=n.length,r,u="value"in Ln?Ln.value:Ln.textContent,i=u.length;for(e=0;e<t&&n[e]===u[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===u[i-r];r++);return Ku=u.slice(e,1<r?1-r:void 0)}function Qu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ru(){return!0}function Is(){return!1}function Ne(e){function n(t,r,u,i,o){this._reactName=t,this._targetInst=u,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ru:Is,this.isPropagationStopped=Is,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ne(ar),cu=G({},ar,{view:0,detail:0}),cm=Ne(cu),ko,wo,br,Ui=G({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(ko=e.screenX-br.screenX,wo=e.screenY-br.screenY):wo=ko=0,br=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),Rs=Ne(Ui),dm=G({},Ui,{dataTransfer:0}),fm=Ne(dm),pm=G({},cu,{relatedTarget:0}),_o=Ne(pm),hm=G({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),mm=Ne(hm),gm=G({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=Ne(gm),xm=G({},ar,{data:0}),Ns=Ne(xm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=km[e])?!!n[e]:!1}function xl(){return wm}var _m=G({},cu,{key:function(e){if(e.key){var n=vm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Qu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sm=Ne(_m),Cm=G({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Ne(Cm),Em=G({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),Am=Ne(Em),Dm=G({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=Ne(Dm),Tm=G({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=Ne(Tm),Im=[9,13,27,32],vl=vn&&"CompositionEvent"in window,Pr=null;vn&&"documentMode"in document&&(Pr=document.documentMode);var Rm=vn&&"TextEvent"in window&&!Pr,a0=vn&&(!vl||Pr&&8<Pr&&11>=Pr),Os=" ",Ms=!1;function l0(e,n){switch(e){case"keyup":return Im.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Nm(e,n){switch(e){case"compositionend":return s0(n);case"keypress":return n.which!==32?null:(Ms=!0,Os);case"textInput":return e=n.data,e===Os&&Ms?null:e;default:return null}}function Lm(e,n){if(Ft)return e==="compositionend"||!vl&&l0(e,n)?(e=o0(),Ku=gl=Ln=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return a0&&n.locale!=="ko"?null:n.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Om[e.type]:n==="textarea"}function c0(e,n,t,r){Hd(r),n=mi(n,"onChange"),0<n.length&&(t=new yl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ir=null,qr=null;function Mm(e){k0(e,0)}function $i(e){var n=It(e);if(Nd(n))return e}function jm(e,n){if(e==="change")return n}var d0=!1;if(vn){var So;if(vn){var Co="oninput"in document;if(!Co){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),Co=typeof Bs.oninput=="function"}So=Co}else So=!1;d0=So&&(!document.documentMode||9<document.documentMode)}function zs(){Ir&&(Ir.detachEvent("onpropertychange",f0),qr=Ir=null)}function f0(e){if(e.propertyName==="value"&&$i(qr)){var n=[];c0(n,qr,e,dl(e)),Wd(Mm,n)}}function Bm(e,n,t){e==="focusin"?(zs(),Ir=n,qr=t,Ir.attachEvent("onpropertychange",f0)):e==="focusout"&&zs()}function zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(qr)}function Hm(e,n){if(e==="click")return $i(n)}function Um(e,n){if(e==="input"||e==="change")return $i(n)}function $m(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:$m;function Wr(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var u=t[r];if(!Zo.call(n,u)||!Ke(e[u],n[u]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,n){var t=Hs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hs(t)}}function p0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?p0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function h0(){for(var e=window,n=li();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=li(e.document)}return n}function bl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function qm(e){var n=h0(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&p0(t.ownerDocument.documentElement,t)){if(r!==null&&bl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=t.textContent.length,i=Math.min(r.start,u);r=r.end===void 0?i:Math.min(r.end,u),!e.extend&&i>r&&(u=r,r=i,i=u),u=Us(t,i);var o=Us(t,r);u&&o&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wm=vn&&"documentMode"in document&&11>=document.documentMode,Tt=null,ya=null,Rr=null,xa=!1;function $s(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xa||Tt==null||Tt!==li(r)||(r=Tt,"selectionStart"in r&&bl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Wr(Rr,r)||(Rr=r,r=mi(ya,"onSelect"),0<r.length&&(n=new yl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tt)))}function Nu(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:Nu("Animation","AnimationEnd"),animationiteration:Nu("Animation","AnimationIteration"),animationstart:Nu("Animation","AnimationStart"),transitionend:Nu("Transition","TransitionEnd")},Eo={},m0={};vn&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function qi(e){if(Eo[e])return Eo[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in m0)return Eo[e]=n[t];return e}var g0=qi("animationend"),y0=qi("animationiteration"),x0=qi("animationstart"),v0=qi("transitionend"),b0=new Map,qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,n){b0.set(e,n),bt(n,[e])}for(var Ao=0;Ao<qs.length;Ao++){var Do=qs[Ao],Gm=Do.toLowerCase(),Vm=Do[0].toUpperCase()+Do.slice(1);Zn(Gm,"on"+Vm)}Zn(g0,"onAnimationEnd");Zn(y0,"onAnimationIteration");Zn(x0,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(v0,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Ws(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Gh(r,n,void 0,e),e.currentTarget=null}function k0(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],u=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,s=a.currentTarget;if(a=a.listener,l!==i&&u.isPropagationStopped())break e;Ws(u,a,s),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,s=a.currentTarget,a=a.listener,l!==i&&u.isPropagationStopped())break e;Ws(u,a,s),i=l}}}if(ci)throw e=pa,ci=!1,pa=null,e}function z(e,n){var t=n[_a];t===void 0&&(t=n[_a]=new Set);var r=e+"__bubble";t.has(r)||(w0(n,e,2,!1),t.add(r))}function Fo(e,n,t){var r=0;n&&(r|=4),w0(t,e,r,n)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Lu]){e[Lu]=!0,Fd.forEach(function(t){t!=="selectionchange"&&(Ym.has(t)||Fo(t,!1,e),Fo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lu]||(n[Lu]=!0,Fo("selectionchange",!1,n))}}function w0(e,n,t,r){switch(i0(n)){case 1:var u=lm;break;case 4:u=sm;break;default:u=ml}t=u.bind(null,n,t,e),u=void 0,!fa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,t,{capture:!0,passive:u}):e.addEventListener(n,t,!0):u!==void 0?e.addEventListener(n,t,{passive:u}):e.addEventListener(n,t,!1)}function To(e,n,t,r,u){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===u||a.nodeType===8&&a.parentNode===u)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===u||l.nodeType===8&&l.parentNode===u))return;o=o.return}for(;a!==null;){if(o=at(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Wd(function(){var s=i,d=dl(t),c=[];e:{var f=b0.get(e);if(f!==void 0){var h=yl,g=e;switch(e){case"keypress":if(Qu(t)===0)break e;case"keydown":case"keyup":h=Sm;break;case"focusin":g="focus",h=_o;break;case"focusout":g="blur",h=_o;break;case"beforeblur":case"afterblur":h=_o;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Am;break;case g0:case y0:case x0:h=mm;break;case v0:h=Fm;break;case"scroll":h=cm;break;case"wheel":h=Pm;break;case"copy":case"cut":case"paste":h=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ls}var b=(n&4)!==0,k=!b&&e==="scroll",y=b?f!==null?f+"Capture":null:f;b=[];for(var p=s,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,y!==null&&(x=zr(p,y),x!=null&&b.push(Vr(p,x,m)))),k)break;p=p.return}0<b.length&&(f=new h(f,g,null,t,d),c.push({event:f,listeners:b}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&t!==ca&&(g=t.relatedTarget||t.fromElement)&&(at(g)||g[bn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=s,g=g?at(g):null,g!==null&&(k=kt(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=s),h!==g)){if(b=Rs,x="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ls,x="onPointerLeave",y="onPointerEnter",p="pointer"),k=h==null?f:It(h),m=g==null?f:It(g),f=new b(x,p+"leave",h,t,d),f.target=k,f.relatedTarget=m,x=null,at(d)===s&&(b=new b(y,p+"enter",g,t,d),b.target=m,b.relatedTarget=k,x=b),k=x,h&&g)n:{for(b=h,y=g,p=0,m=b;m;m=St(m))p++;for(m=0,x=y;x;x=St(x))m++;for(;0<p-m;)b=St(b),p--;for(;0<m-p;)y=St(y),m--;for(;p--;){if(b===y||y!==null&&b===y.alternate)break n;b=St(b),y=St(y)}b=null}else b=null;h!==null&&Gs(c,f,h,b,!1),g!==null&&k!==null&&Gs(c,k,g,b,!0)}}e:{if(f=s?It(s):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var _=jm;else if(js(f))if(d0)_=Um;else{_=zm;var S=Bm}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=Hm);if(_&&(_=_(e,s))){c0(c,_,t,d);break e}S&&S(e,f,s),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&ia(f,"number",f.value)}switch(S=s?It(s):window,e){case"focusin":(js(S)||S.contentEditable==="true")&&(Tt=S,ya=s,Rr=null);break;case"focusout":Rr=ya=Tt=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,$s(c,t,d);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":$s(c,t,d)}var E;if(vl)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ft?l0(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(a0&&t.locale!=="ko"&&(Ft||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ft&&(E=o0()):(Ln=d,gl="value"in Ln?Ln.value:Ln.textContent,Ft=!0)),S=mi(s,A),0<S.length&&(A=new Ns(A,e,null,t,d),c.push({event:A,listeners:S}),E?A.data=E:(E=s0(t),E!==null&&(A.data=E)))),(E=Rm?Nm(e,t):Lm(e,t))&&(s=mi(s,"onBeforeInput"),0<s.length&&(d=new Ns("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:s}),d.data=E))}k0(c,n)})}function Vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function mi(e,n){for(var t=n+"Capture",r=[];e!==null;){var u=e,i=u.stateNode;u.tag===5&&i!==null&&(u=i,i=zr(e,t),i!=null&&r.unshift(Vr(e,i,u)),i=zr(e,n),i!=null&&r.push(Vr(e,i,u))),e=e.return}return r}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,n,t,r,u){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,l=a.alternate,s=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&s!==null&&(a=s,u?(l=zr(t,i),l!=null&&o.unshift(Vr(t,l,a))):u||(l=zr(t,i),l!=null&&o.push(Vr(t,l,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Km=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Qm,"")}function Ou(e,n,t){if(n=Vs(n),Vs(e)!==n&&t)throw Error(C(425))}function gi(){}var va=null,ba=null;function ka(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wa=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,Zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(Xm)}:wa;function Xm(e){setTimeout(function(){throw e})}function Po(e,n){var t=n,r=0;do{var u=t.nextSibling;if(e.removeChild(t),u&&u.nodeType===8)if(t=u.data,t==="/$"){if(r===0){e.removeChild(u),$r(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=u}while(t);$r(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+lr,Yr="__reactProps$"+lr,bn="__reactContainer$"+lr,_a="__reactEvents$"+lr,e1="__reactListeners$"+lr,n1="__reactHandles$"+lr;function at(e){var n=e[Xe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[Xe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ks(e);e!==null;){if(t=e[Xe])return t;e=Ks(e)}return n}e=t,t=e.parentNode}return null}function du(e){return e=e[Xe]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function It(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Wi(e){return e[Yr]||null}var Sa=[],Rt=-1;function Xn(e){return{current:e}}function H(e){0>Rt||(e.current=Sa[Rt],Sa[Rt]=null,Rt--)}function j(e,n){Rt++,Sa[Rt]=e.current,e.current=n}var Yn={},he=Xn(Yn),Se=Xn(!1),ht=Yn;function Qt(e,n){var t=e.type.contextTypes;if(!t)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var u={},i;for(i in t)u[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Ce(e){return e=e.childContextTypes,e!=null}function yi(){H(Se),H(he)}function Qs(e,n,t){if(he.current!==Yn)throw Error(C(168));j(he,n),j(Se,t)}function _0(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var u in r)if(!(u in n))throw Error(C(108,Bh(e)||"Unknown",u));return G({},t,r)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,ht=he.current,j(he,e),j(Se,Se.current),!0}function Js(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=_0(e,n,ht),r.__reactInternalMemoizedMergedChildContext=e,H(Se),H(he),j(he,e)):H(Se),j(Se,t)}var pn=null,Gi=!1,Io=!1;function S0(e){pn===null?pn=[e]:pn.push(e)}function t1(e){Gi=!0,S0(e)}function et(){if(!Io&&pn!==null){Io=!0;var e=0,n=M;try{var t=pn;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}pn=null,Gi=!1}catch(u){throw pn!==null&&(pn=pn.slice(e+1)),Kd(fl,et),u}finally{M=n,Io=!1}}return null}var Nt=[],Lt=0,vi=null,bi=0,Le=[],Oe=0,mt=null,mn=1,gn="";function it(e,n){Nt[Lt++]=bi,Nt[Lt++]=vi,vi=e,bi=n}function C0(e,n,t){Le[Oe++]=mn,Le[Oe++]=gn,Le[Oe++]=mt,mt=e;var r=mn;e=gn;var u=32-Ve(r)-1;r&=~(1<<u),t+=1;var i=32-Ve(n)+u;if(30<i){var o=u-u%5;i=(r&(1<<o)-1).toString(32),r>>=o,u-=o,mn=1<<32-Ve(n)+u|t<<u|r,gn=i+e}else mn=1<<i|t<<u|r,gn=e}function kl(e){e.return!==null&&(it(e,1),C0(e,1,0))}function wl(e){for(;e===vi;)vi=Nt[--Lt],Nt[Lt]=null,bi=Nt[--Lt],Nt[Lt]=null;for(;e===mt;)mt=Le[--Oe],Le[Oe]=null,gn=Le[--Oe],Le[Oe]=null,mn=Le[--Oe],Le[Oe]=null}var Te=null,Fe=null,U=!1,Ge=null;function E0(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,Fe=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,Fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=mt!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Te=e,Fe=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(U){var n=Fe;if(n){var t=n;if(!Zs(e,n)){if(Ca(e))throw Error(C(418));n=Hn(t.nextSibling);var r=Te;n&&Zs(e,n)?E0(r,t):(e.flags=e.flags&-4097|2,U=!1,Te=e)}}else{if(Ca(e))throw Error(C(418));e.flags=e.flags&-4097|2,U=!1,Te=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Mu(e){if(e!==Te)return!1;if(!U)return Xs(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ka(e.type,e.memoizedProps)),n&&(n=Fe)){if(Ca(e))throw A0(),Error(C(418));for(;n;)E0(e,n),n=Hn(n.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Fe=Hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Fe=null}}else Fe=Te?Hn(e.stateNode.nextSibling):null;return!0}function A0(){for(var e=Fe;e;)e=Hn(e.nextSibling)}function Jt(){Fe=Te=null,U=!1}function _l(e){Ge===null?Ge=[e]:Ge.push(e)}var r1=Sn.ReactCurrentBatchConfig;function kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var u=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=u.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function ju(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ec(e){var n=e._init;return n(e._payload)}function D0(e){function n(y,p){if(e){var m=y.deletions;m===null?(y.deletions=[p],y.flags|=16):m.push(p)}}function t(y,p){if(!e)return null;for(;p!==null;)n(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function u(y,p){return y=Wn(y,p),y.index=0,y.sibling=null,y}function i(y,p,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<p?(y.flags|=2,p):m):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,p,m,x){return p===null||p.tag!==6?(p=Bo(m,y.mode,x),p.return=y,p):(p=u(p,m),p.return=y,p)}function l(y,p,m,x){var _=m.type;return _===Dt?d(y,p,m.props.children,x,m.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fn&&ec(_)===p.type)?(x=u(p,m.props),x.ref=kr(y,p,m),x.return=y,x):(x=ri(m.type,m.key,m.props,null,y.mode,x),x.ref=kr(y,p,m),x.return=y,x)}function s(y,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=zo(m,y.mode,x),p.return=y,p):(p=u(p,m.children||[]),p.return=y,p)}function d(y,p,m,x,_){return p===null||p.tag!==7?(p=ft(m,y.mode,x,_),p.return=y,p):(p=u(p,m),p.return=y,p)}function c(y,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bo(""+p,y.mode,m),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Au:return m=ri(p.type,p.key,p.props,null,y.mode,m),m.ref=kr(y,null,p),m.return=y,m;case At:return p=zo(p,y.mode,m),p.return=y,p;case Fn:var x=p._init;return c(y,x(p._payload),m)}if(Er(p)||gr(p))return p=ft(p,y.mode,m,null),p.return=y,p;ju(y,p)}return null}function f(y,p,m,x){var _=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(y,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Au:return m.key===_?l(y,p,m,x):null;case At:return m.key===_?s(y,p,m,x):null;case Fn:return _=m._init,f(y,p,_(m._payload),x)}if(Er(m)||gr(m))return _!==null?null:d(y,p,m,x,null);ju(y,m)}return null}function h(y,p,m,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(m)||null,a(p,y,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Au:return y=y.get(x.key===null?m:x.key)||null,l(p,y,x,_);case At:return y=y.get(x.key===null?m:x.key)||null,s(p,y,x,_);case Fn:var S=x._init;return h(y,p,m,S(x._payload),_)}if(Er(x)||gr(x))return y=y.get(m)||null,d(p,y,x,_,null);ju(p,x)}return null}function g(y,p,m,x){for(var _=null,S=null,E=p,A=p=0,I=null;E!==null&&A<m.length;A++){E.index>A?(I=E,E=null):I=E.sibling;var P=f(y,E,m[A],x);if(P===null){E===null&&(E=I);break}e&&E&&P.alternate===null&&n(y,E),p=i(P,p,A),S===null?_=P:S.sibling=P,S=P,E=I}if(A===m.length)return t(y,E),U&&it(y,A),_;if(E===null){for(;A<m.length;A++)E=c(y,m[A],x),E!==null&&(p=i(E,p,A),S===null?_=E:S.sibling=E,S=E);return U&&it(y,A),_}for(E=r(y,E);A<m.length;A++)I=h(E,y,A,m[A],x),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?A:I.key),p=i(I,p,A),S===null?_=I:S.sibling=I,S=I);return e&&E.forEach(function(ne){return n(y,ne)}),U&&it(y,A),_}function b(y,p,m,x){var _=gr(m);if(typeof _!="function")throw Error(C(150));if(m=_.call(m),m==null)throw Error(C(151));for(var S=_=null,E=p,A=p=0,I=null,P=m.next();E!==null&&!P.done;A++,P=m.next()){E.index>A?(I=E,E=null):I=E.sibling;var ne=f(y,E,P.value,x);if(ne===null){E===null&&(E=I);break}e&&E&&ne.alternate===null&&n(y,E),p=i(ne,p,A),S===null?_=ne:S.sibling=ne,S=ne,E=I}if(P.done)return t(y,E),U&&it(y,A),_;if(E===null){for(;!P.done;A++,P=m.next())P=c(y,P.value,x),P!==null&&(p=i(P,p,A),S===null?_=P:S.sibling=P,S=P);return U&&it(y,A),_}for(E=r(y,E);!P.done;A++,P=m.next())P=h(E,y,A,P.value,x),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?A:P.key),p=i(P,p,A),S===null?_=P:S.sibling=P,S=P);return e&&E.forEach(function(nt){return n(y,nt)}),U&&it(y,A),_}function k(y,p,m,x){if(typeof m=="object"&&m!==null&&m.type===Dt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Au:e:{for(var _=m.key,S=p;S!==null;){if(S.key===_){if(_=m.type,_===Dt){if(S.tag===7){t(y,S.sibling),p=u(S,m.props.children),p.return=y,y=p;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fn&&ec(_)===S.type){t(y,S.sibling),p=u(S,m.props),p.ref=kr(y,S,m),p.return=y,y=p;break e}t(y,S);break}else n(y,S);S=S.sibling}m.type===Dt?(p=ft(m.props.children,y.mode,x,m.key),p.return=y,y=p):(x=ri(m.type,m.key,m.props,null,y.mode,x),x.ref=kr(y,p,m),x.return=y,y=x)}return o(y);case At:e:{for(S=m.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(y,p.sibling),p=u(p,m.children||[]),p.return=y,y=p;break e}else{t(y,p);break}else n(y,p);p=p.sibling}p=zo(m,y.mode,x),p.return=y,y=p}return o(y);case Fn:return S=m._init,k(y,p,S(m._payload),x)}if(Er(m))return g(y,p,m,x);if(gr(m))return b(y,p,m,x);ju(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(y,p.sibling),p=u(p,m),p.return=y,y=p):(t(y,p),p=Bo(m,y.mode,x),p.return=y,y=p),o(y)):t(y,p)}return k}var Zt=D0(!0),F0=D0(!1),ki=Xn(null),wi=null,Ot=null,Sl=null;function Cl(){Sl=Ot=wi=null}function El(e){var n=ki.current;H(ki),e._currentValue=n}function Aa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Gt(e,n){wi=e,Sl=Ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(Sl!==e)if(e={context:e,memoizedValue:n,next:null},Ot===null){if(wi===null)throw Error(C(308));Ot=e,wi.dependencies={lanes:0,firstContext:e}}else Ot=Ot.next=e;return n}var lt=null;function Al(e){lt===null?lt=[e]:lt.push(e)}function T0(e,n,t,r){var u=n.interleaved;return u===null?(t.next=t,Al(n)):(t.next=u.next,u.next=t),n.interleaved=t,kn(e,r)}function kn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tn=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,kn(e,t)}return u=r.interleaved,u===null?(n.next=n,Al(r)):(n.next=u.next,u.next=n),r.interleaved=n,kn(e,t)}function Ju(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pl(e,t)}}function nc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var u=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?u=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?u=i=n:i=i.next=n}else u=i=n;t={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function _i(e,n,t,r){var u=e.updateQueue;Tn=!1;var i=u.firstBaseUpdate,o=u.lastBaseUpdate,a=u.shared.pending;if(a!==null){u.shared.pending=null;var l=a,s=l.next;l.next=null,o===null?i=s:o.next=s,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=s:a.next=s,d.lastBaseUpdate=l))}if(i!==null){var c=u.baseState;o=0,d=s=l=null,a=i;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,b=a;switch(f=n,h=t,b.tag){case 1:if(g=b.payload,typeof g=="function"){c=g.call(h,c,f);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,f=typeof g=="function"?g.call(h,c,f):g,f==null)break e;c=G({},c,f);break e;case 2:Tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=u.effects,f===null?u.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(s=d=h,l=c):d=d.next=h,o|=f;if(a=a.next,a===null){if(a=u.shared.pending,a===null)break;f=a,a=f.next,f.next=null,u.lastBaseUpdate=f,u.shared.pending=null}}while(!0);if(d===null&&(l=c),u.baseState=l,u.firstBaseUpdate=s,u.lastBaseUpdate=d,n=u.shared.interleaved,n!==null){u=n;do o|=u.lane,u=u.next;while(u!==n)}else i===null&&(u.shared.lanes=0);yt|=o,e.lanes=o,e.memoizedState=c}}function tc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],u=r.callback;if(u!==null){if(r.callback=null,r=t,typeof u!="function")throw Error(C(191,u));u.call(r)}}}var fu={},rn=Xn(fu),Kr=Xn(fu),Qr=Xn(fu);function st(e){if(e===fu)throw Error(C(174));return e}function Fl(e,n){switch(j(Qr,n),j(Kr,e),j(rn,fu),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:aa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=aa(n,e)}H(rn),j(rn,n)}function Xt(){H(rn),H(Kr),H(Qr)}function I0(e){st(Qr.current);var n=st(rn.current),t=aa(n,e.type);n!==t&&(j(Kr,e),j(rn,t))}function Tl(e){Kr.current===e&&(H(rn),H(Kr))}var $=Xn(0);function Si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ro=[];function Pl(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var Zu=Sn.ReactCurrentDispatcher,No=Sn.ReactCurrentBatchConfig,gt=0,q=null,X=null,ue=null,Ci=!1,Nr=!1,Jr=0,u1=0;function de(){throw Error(C(321))}function Il(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Rl(e,n,t,r,u,i){if(gt=i,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zu.current=e===null||e.memoizedState===null?l1:s1,e=t(r,u),Nr){i=0;do{if(Nr=!1,Jr=0,25<=i)throw Error(C(301));i+=1,ue=X=null,n.updateQueue=null,Zu.current=c1,e=t(r,u)}while(Nr)}if(Zu.current=Ei,n=X!==null&&X.next!==null,gt=0,ue=X=q=null,Ci=!1,n)throw Error(C(300));return e}function Nl(){var e=Jr!==0;return Jr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=e:ue=ue.next=e,ue}function ze(){if(X===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=ue===null?q.memoizedState:ue.next;if(n!==null)ue=n,X=e;else{if(e===null)throw Error(C(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ue===null?q.memoizedState=ue=e:ue=ue.next=e}return ue}function Zr(e,n){return typeof n=="function"?n(e):n}function Lo(e){var n=ze(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=X,u=r.baseQueue,i=t.pending;if(i!==null){if(u!==null){var o=u.next;u.next=i.next,i.next=o}r.baseQueue=u=i,t.pending=null}if(u!==null){i=u.next,r=r.baseState;var a=o=null,l=null,s=i;do{var d=s.lane;if((gt&d)===d)l!==null&&(l=l.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var c={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,q.lanes|=d,yt|=d}s=s.next}while(s!==null&&s!==i);l===null?o=r:l.next=a,Ke(r,n.memoizedState)||(we=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){u=e;do i=u.lane,q.lanes|=i,yt|=i,u=u.next;while(u!==e)}else u===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Oo(e){var n=ze(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,u=t.pending,i=n.memoizedState;if(u!==null){t.pending=null;var o=u=u.next;do i=e(i,o.action),o=o.next;while(o!==u);Ke(i,n.memoizedState)||(we=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function R0(){}function N0(e,n){var t=q,r=ze(),u=n(),i=!Ke(r.memoizedState,u);if(i&&(r.memoizedState=u,we=!0),r=r.queue,Ll(M0.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,Xr(9,O0.bind(null,t,r,u,n),void 0,null),oe===null)throw Error(C(349));gt&30||L0(t,n,u)}return u}function L0(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function O0(e,n,t,r){n.value=t,n.getSnapshot=r,j0(n)&&B0(e)}function M0(e,n,t){return t(function(){j0(n)&&B0(e)})}function j0(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function B0(e){var n=kn(e,1);n!==null&&Ye(n,e,1,-1)}function rc(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},n.queue=e,e=e.dispatch=a1.bind(null,q,e),[n.memoizedState,e]}function Xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function z0(){return ze().memoizedState}function Xu(e,n,t,r){var u=Ze();q.flags|=e,u.memoizedState=Xr(1|n,t,void 0,r===void 0?null:r)}function Vi(e,n,t,r){var u=ze();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&Il(r,o.deps)){u.memoizedState=Xr(n,t,i,r);return}}q.flags|=e,u.memoizedState=Xr(1|n,t,i,r)}function uc(e,n){return Xu(8390656,8,e,n)}function Ll(e,n){return Vi(2048,8,e,n)}function H0(e,n){return Vi(4,2,e,n)}function U0(e,n){return Vi(4,4,e,n)}function $0(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function q0(e,n,t){return t=t!=null?t.concat([e]):null,Vi(4,4,$0.bind(null,n,e),t)}function Ol(){}function W0(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Il(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function G0(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Il(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function V0(e,n,t){return gt&21?(Ke(t,n)||(t=Zd(),q.lanes|=t,yt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function i1(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=No.transition;No.transition={};try{e(!1),n()}finally{M=t,No.transition=r}}function Y0(){return ze().memoizedState}function o1(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},K0(e))Q0(n,t);else if(t=T0(e,n,t,r),t!==null){var u=ye();Ye(t,e,r,u),J0(t,n,r)}}function a1(e,n,t){var r=qn(e),u={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(K0(e))Q0(n,u);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(u.hasEagerState=!0,u.eagerState=a,Ke(a,o)){var l=n.interleaved;l===null?(u.next=u,Al(n)):(u.next=l.next,l.next=u),n.interleaved=u;return}}catch{}finally{}t=T0(e,n,u,r),t!==null&&(u=ye(),Ye(t,e,r,u),J0(t,n,r))}}function K0(e){var n=e.alternate;return e===q||n!==null&&n===q}function Q0(e,n){Nr=Ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function J0(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pl(e,t)}}var Ei={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},l1={readContext:Be,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:uc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Xu(4194308,4,$0.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Xu(4194308,4,e,n)},useInsertionEffect:function(e,n){return Xu(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=o1.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:rc,useDebugValue:Ol,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=rc(!1),n=e[0];return e=i1.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=q,u=Ze();if(U){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),oe===null)throw Error(C(349));gt&30||L0(r,n,t)}u.memoizedState=t;var i={value:t,getSnapshot:n};return u.queue=i,uc(M0.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,O0.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ze(),n=oe.identifierPrefix;if(U){var t=gn,r=mn;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=u1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},s1={readContext:Be,useCallback:W0,useContext:Be,useEffect:Ll,useImperativeHandle:q0,useInsertionEffect:H0,useLayoutEffect:U0,useMemo:G0,useReducer:Lo,useRef:z0,useState:function(){return Lo(Zr)},useDebugValue:Ol,useDeferredValue:function(e){var n=ze();return V0(n,X.memoizedState,e)},useTransition:function(){var e=Lo(Zr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:R0,useSyncExternalStore:N0,useId:Y0,unstable_isNewReconciler:!1},c1={readContext:Be,useCallback:W0,useContext:Be,useEffect:Ll,useImperativeHandle:q0,useInsertionEffect:H0,useLayoutEffect:U0,useMemo:G0,useReducer:Oo,useRef:z0,useState:function(){return Oo(Zr)},useDebugValue:Ol,useDeferredValue:function(e){var n=ze();return X===null?n.memoizedState=e:V0(n,X.memoizedState,e)},useTransition:function(){var e=Oo(Zr)[0],n=ze().memoizedState;return[e,n]},useMutableSource:R0,useSyncExternalStore:N0,useId:Y0,unstable_isNewReconciler:!1};function qe(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Da(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Yi={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),u=qn(e),i=yn(r,u);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,u),n!==null&&(Ye(n,e,u,r),Ju(n,e,u))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),u=qn(e),i=yn(r,u);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,u),n!==null&&(Ye(n,e,u,r),Ju(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=qn(e),u=yn(t,r);u.tag=2,n!=null&&(u.callback=n),n=Un(e,u,r),n!==null&&(Ye(n,e,r,t),Ju(n,e,r))}};function ic(e,n,t,r,u,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Wr(t,r)||!Wr(u,i):!0}function Z0(e,n,t){var r=!1,u=Yn,i=n.contextType;return typeof i=="object"&&i!==null?i=Be(i):(u=Ce(n)?ht:he.current,r=n.contextTypes,i=(r=r!=null)?Qt(e,u):Yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Yi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=i),n}function oc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Yi.enqueueReplaceState(n,n.state,null)}function Fa(e,n,t,r){var u=e.stateNode;u.props=t,u.state=e.memoizedState,u.refs={},Dl(e);var i=n.contextType;typeof i=="object"&&i!==null?u.context=Be(i):(i=Ce(n)?ht:he.current,u.context=Qt(e,i)),u.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Da(e,n,i,t),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Yi.enqueueReplaceState(u,u.state,null),_i(e,t,u,r),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,n){try{var t="",r=n;do t+=jh(r),r=r.return;while(r);var u=t}catch(i){u=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:u,digest:null}}function Mo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ta(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function X0(e,n,t){t=yn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Di||(Di=!0,za=r),Ta(e,n)},t}function ef(e,n,t){t=yn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var u=n.value;t.payload=function(){return r(u)},t.callback=function(){Ta(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ta(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ac(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new d1;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(t)||(u.add(t),e=C1.bind(null,e,n,t),n.then(e,e))}function lc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sc(e,n,t,r,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=yn(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var f1=Sn.ReactCurrentOwner,we=!1;function ge(e,n,t,r){n.child=e===null?F0(n,null,t,r):Zt(n,e.child,t,r)}function cc(e,n,t,r,u){t=t.render;var i=n.ref;return Gt(n,u),r=Rl(e,n,t,r,i,u),t=Nl(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,wn(e,n,u)):(U&&t&&kl(n),n.flags|=1,ge(e,n,r,u),n.child)}function dc(e,n,t,r,u){if(e===null){var i=t.type;return typeof i=="function"&&!ql(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,nf(e,n,i,r,u)):(e=ri(t.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&u)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Wr,t(o,r)&&e.ref===n.ref)return wn(e,n,u)}return n.flags|=1,e=Wn(i,r),e.ref=n.ref,e.return=n,n.child=e}function nf(e,n,t,r,u){if(e!==null){var i=e.memoizedProps;if(Wr(i,r)&&e.ref===n.ref)if(we=!1,n.pendingProps=r=i,(e.lanes&u)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,wn(e,n,u)}return Pa(e,n,t,r,u)}function tf(e,n,t){var r=n.pendingProps,u=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(jt,De),De|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(jt,De),De|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,j(jt,De),De|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,j(jt,De),De|=r;return ge(e,n,u,t),n.child}function rf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Pa(e,n,t,r,u){var i=Ce(t)?ht:he.current;return i=Qt(n,i),Gt(n,u),t=Rl(e,n,t,r,i,u),r=Nl(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,wn(e,n,u)):(U&&r&&kl(n),n.flags|=1,ge(e,n,t,u),n.child)}function fc(e,n,t,r,u){if(Ce(t)){var i=!0;xi(n)}else i=!1;if(Gt(n,u),n.stateNode===null)ei(e,n),Z0(n,t,r),Fa(n,t,r,u),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var l=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=Be(s):(s=Ce(t)?ht:he.current,s=Qt(n,s));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==s)&&oc(n,o,r,s),Tn=!1;var f=n.memoizedState;o.state=f,_i(n,r,o,u),l=n.memoizedState,a!==r||f!==l||Se.current||Tn?(typeof d=="function"&&(Da(n,t,d,r),l=n.memoizedState),(a=Tn||ic(n,t,a,r,f,l,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),o.props=r,o.state=l,o.context=s,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,P0(e,n),a=n.memoizedProps,s=n.type===n.elementType?a:qe(n.type,a),o.props=s,c=n.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Be(l):(l=Ce(t)?ht:he.current,l=Qt(n,l));var h=t.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&oc(n,o,r,l),Tn=!1,f=n.memoizedState,o.state=f,_i(n,r,o,u);var g=n.memoizedState;a!==c||f!==g||Se.current||Tn?(typeof h=="function"&&(Da(n,t,h,r),g=n.memoizedState),(s=Tn||ic(n,t,s,r,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),o.props=r,o.state=g,o.context=l,r=s):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Ia(e,n,t,r,i,u)}function Ia(e,n,t,r,u,i){rf(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return u&&Js(n,t,!1),wn(e,n,i);r=n.stateNode,f1.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Zt(n,e.child,null,i),n.child=Zt(n,null,a,i)):ge(e,n,a,i),n.memoizedState=r.state,u&&Js(n,t,!0),n.child}function uf(e){var n=e.stateNode;n.pendingContext?Qs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qs(e,n.context,!1),Fl(e,n.containerInfo)}function pc(e,n,t,r,u){return Jt(),_l(u),n.flags|=256,ge(e,n,t,r),n.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function of(e,n,t){var r=n.pendingProps,u=$.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(u&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),j($,u&1),e===null)return Ea(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ji(o,r,0,null),e=ft(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Na(t),n.memoizedState=Ra,e):Ml(n,o));if(u=e.memoizedState,u!==null&&(a=u.dehydrated,a!==null))return p1(e,n,o,r,a,u,t);if(i){i=r.fallback,o=n.mode,u=e.child,a=u.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&n.child!==u?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=Wn(u,l),r.subtreeFlags=u.subtreeFlags&14680064),a!==null?i=Wn(a,i):(i=ft(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Na(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Ra,r}return i=e.child,e=i.sibling,r=Wn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ml(e,n){return n=Ji({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Bu(e,n,t,r){return r!==null&&_l(r),Zt(n,e.child,null,t),e=Ml(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function p1(e,n,t,r,u,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Mo(Error(C(422))),Bu(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,u=n.mode,r=Ji({mode:"visible",children:r.children},u,0,null),i=ft(i,u,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Zt(n,e.child,null,o),n.child.memoizedState=Na(o),n.memoizedState=Ra,i);if(!(n.mode&1))return Bu(e,n,o,null);if(u.data==="$!"){if(r=u.nextSibling&&u.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Mo(i,r,void 0),Bu(e,n,o,r)}if(a=(o&e.childLanes)!==0,we||a){if(r=oe,r!==null){switch(o&-o){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(r.suspendedLanes|o)?0:u,u!==0&&u!==i.retryLane&&(i.retryLane=u,kn(e,u),Ye(r,e,u,-1))}return $l(),r=Mo(Error(C(421))),Bu(e,n,o,r)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=E1.bind(null,e),u._reactRetry=n,null):(e=i.treeContext,Fe=Hn(u.nextSibling),Te=n,U=!0,Ge=null,e!==null&&(Le[Oe++]=mn,Le[Oe++]=gn,Le[Oe++]=mt,mn=e.id,gn=e.overflow,mt=n),n=Ml(n,r.children),n.flags|=4096,n)}function hc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Aa(e.return,n,t)}function jo(e,n,t,r,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:u}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=u)}function af(e,n,t){var r=n.pendingProps,u=r.revealOrder,i=r.tail;if(ge(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,t,n);else if(e.tag===19)hc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j($,r),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(t=n.child,u=null;t!==null;)e=t.alternate,e!==null&&Si(e)===null&&(u=t),t=t.sibling;t=u,t===null?(u=n.child,n.child=null):(u=t.sibling,t.sibling=null),jo(n,!1,u,t,i);break;case"backwards":for(t=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Si(e)===null){n.child=u;break}e=u.sibling,u.sibling=t,t=u,u=e}jo(n,!0,t,null,i);break;case"together":jo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ei(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),yt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function h1(e,n,t){switch(n.tag){case 3:uf(n),Jt();break;case 5:I0(n);break;case 1:Ce(n.type)&&xi(n);break;case 4:Fl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,u=n.memoizedProps.value;j(ki,r._currentValue),r._currentValue=u;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(j($,$.current&1),n.flags|=128,null):t&n.child.childLanes?of(e,n,t):(j($,$.current&1),e=wn(e,n,t),e!==null?e.sibling:null);j($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return af(e,n,t);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),j($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,tf(e,n,t)}return wn(e,n,t)}var lf,La,sf,cf;lf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};La=function(){};sf=function(e,n,t,r){var u=e.memoizedProps;if(u!==r){e=n.stateNode,st(rn.current);var i=null;switch(t){case"input":u=ra(e,u),r=ra(e,r),i=[];break;case"select":u=G({},u,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":u=oa(e,u),r=oa(e,r),i=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gi)}la(t,r);var o;t=null;for(s in u)if(!r.hasOwnProperty(s)&&u.hasOwnProperty(s)&&u[s]!=null)if(s==="style"){var a=u[s];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var l=r[s];if(a=u!=null?u[s]:void 0,r.hasOwnProperty(s)&&l!==a&&(l!=null||a!=null))if(s==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(i||(i=[]),i.push(s,t)),t=l;else s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(s,l)):s==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(s,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(jr.hasOwnProperty(s)?(l!=null&&s==="onScroll"&&z("scroll",e),i||a===l||(i=[])):(i=i||[]).push(s,l))}t&&(i=i||[]).push("style",t);var s=i;(n.updateQueue=s)&&(n.flags|=4)}};cf=function(e,n,t,r){t!==r&&(n.flags|=4)};function wr(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var u=e.child;u!==null;)t|=u.lanes|u.childLanes,r|=u.subtreeFlags&14680064,r|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)t|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function m1(e,n,t){var r=n.pendingProps;switch(wl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Ce(n.type)&&yi(),fe(n),null;case 3:return r=n.stateNode,Xt(),H(Se),H(he),Pl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mu(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ge!==null&&($a(Ge),Ge=null))),La(e,n),fe(n),null;case 5:Tl(n);var u=st(Qr.current);if(t=n.type,e!==null&&n.stateNode!=null)sf(e,n,t,r,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return fe(n),null}if(e=st(rn.current),Mu(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Xe]=n,r[Yr]=i,e=(n.mode&1)!==0,t){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(u=0;u<Dr.length;u++)z(Dr[u],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":_s(r,i),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},z("invalid",r);break;case"textarea":Cs(r,i),z("invalid",r)}la(t,i),u=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ou(r.textContent,a,e),u=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ou(r.textContent,a,e),u=["children",""+a]):jr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(t){case"input":Du(r),Ss(r,i,!0);break;case"textarea":Du(r),Es(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=gi)}r=u,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Md(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Xe]=n,e[Yr]=r,lf(e,n,!1,!1),n.stateNode=e;e:{switch(o=sa(t,r),t){case"dialog":z("cancel",e),z("close",e),u=r;break;case"iframe":case"object":case"embed":z("load",e),u=r;break;case"video":case"audio":for(u=0;u<Dr.length;u++)z(Dr[u],e);u=r;break;case"source":z("error",e),u=r;break;case"img":case"image":case"link":z("error",e),z("load",e),u=r;break;case"details":z("toggle",e),u=r;break;case"input":_s(e,r),u=ra(e,r),z("invalid",e);break;case"option":u=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=G({},r,{value:void 0}),z("invalid",e);break;case"textarea":Cs(e,r),u=oa(e,r),z("invalid",e);break;default:u=r}la(t,u),a=u;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?zd(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jd(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Br(e,l):typeof l=="number"&&Br(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jr.hasOwnProperty(i)?l!=null&&i==="onScroll"&&z("scroll",e):l!=null&&al(e,i,l,o))}switch(t){case"input":Du(e),Ss(e,r,!1);break;case"textarea":Du(e),Es(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ut(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=gi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)cf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=st(Qr.current),st(rn.current),Mu(n)){if(r=n.stateNode,t=n.memoizedProps,r[Xe]=n,(i=r.nodeValue!==t)&&(e=Te,e!==null))switch(e.tag){case 3:Ou(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ou(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Xe]=n,n.stateNode=r}return fe(n),null;case 13:if(H($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Fe!==null&&n.mode&1&&!(n.flags&128))A0(),Jt(),n.flags|=98560,i=!1;else if(i=Mu(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Xe]=n}else Jt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),i=!1}else Ge!==null&&($a(Ge),Ge=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?ee===0&&(ee=3):$l())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Xt(),La(e,n),e===null&&Gr(n.stateNode.containerInfo),fe(n),null;case 10:return El(n.type._context),fe(n),null;case 17:return Ce(n.type)&&yi(),fe(n),null;case 19:if(H($),i=n.memoizedState,i===null)return fe(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)wr(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Si(e),o!==null){for(n.flags|=128,wr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j($,$.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>nr&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304)}else{if(!r)if(e=Si(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return fe(n),null}else 2*Q()-i.renderingStartTime>nr&&t!==1073741824&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=$.current,j($,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return Ul(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?De&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function g1(e,n){switch(wl(n),n.tag){case 1:return Ce(n.type)&&yi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xt(),H(Se),H(he),Pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Tl(n),null;case 13:if(H($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H($),null;case 4:return Xt(),null;case 10:return El(n.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var zu=!1,pe=!1,y1=typeof WeakSet=="function"?WeakSet:Set,D=null;function Mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Oa(e,n,t){try{t()}catch(r){V(e,n,r)}}var mc=!1;function x1(e,n){if(va=pi,e=h0(),bl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var u=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,s=0,d=0,c=e,f=null;n:for(;;){for(var h;c!==t||u!==0&&c.nodeType!==3||(a=o+u),c!==i||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break n;if(f===t&&++s===u&&(a=o),f===i&&++d===r&&(l=o),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ba={focusedElem:e,selectionRange:t},pi=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,k=g.memoizedState,y=n.stateNode,p=y.getSnapshotBeforeUpdate(n.elementType===n.type?b:qe(n.type,b),k);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){V(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return g=mc,mc=!1,g}function Lr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var u=r=r.next;do{if((u.tag&e)===e){var i=u.destroy;u.destroy=void 0,i!==void 0&&Oa(n,t,i)}u=u.next}while(u!==r)}}function Ki(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ma(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function df(e){var n=e.alternate;n!==null&&(e.alternate=null,df(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Xe],delete n[Yr],delete n[_a],delete n[e1],delete n[n1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gi));else if(r!==4&&(e=e.child,e!==null))for(ja(e,n,t),e=e.sibling;e!==null;)ja(e,n,t),e=e.sibling}function Ba(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,n,t),e=e.sibling;e!==null;)Ba(e,n,t),e=e.sibling}var le=null,We=!1;function An(e,n,t){for(t=t.child;t!==null;)pf(e,n,t),t=t.sibling}function pf(e,n,t){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Hi,t)}catch{}switch(t.tag){case 5:pe||Mt(t,n);case 6:var r=le,u=We;le=null,An(e,n,t),le=r,We=u,le!==null&&(We?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(We?(e=le,t=t.stateNode,e.nodeType===8?Po(e.parentNode,t):e.nodeType===1&&Po(e,t),$r(e)):Po(le,t.stateNode));break;case 4:r=le,u=We,le=t.stateNode.containerInfo,We=!0,An(e,n,t),le=r,We=u;break;case 0:case 11:case 14:case 15:if(!pe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){u=r=r.next;do{var i=u,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Oa(t,n,o),u=u.next}while(u!==r)}An(e,n,t);break;case 1:if(!pe&&(Mt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(pe=(r=pe)||t.memoizedState!==null,An(e,n,t),pe=r):An(e,n,t);break;default:An(e,n,t)}}function yc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new y1),n.forEach(function(r){var u=A1.bind(null,e,r);t.has(r)||(t.add(r),r.then(u,u))})}}function $e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var u=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,We=!1;break e;case 3:le=a.stateNode.containerInfo,We=!0;break e;case 4:le=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(le===null)throw Error(C(160));pf(i,o,u),le=null,We=!1;var l=u.alternate;l!==null&&(l.return=null),u.return=null}catch(s){V(u,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)hf(n,e),n=n.sibling}function hf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(n,e),Je(e),r&4){try{Lr(3,e,e.return),Ki(3,e)}catch(b){V(e,e.return,b)}try{Lr(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:$e(n,e),Je(e),r&512&&t!==null&&Mt(t,t.return);break;case 5:if($e(n,e),Je(e),r&512&&t!==null&&Mt(t,t.return),e.flags&32){var u=e.stateNode;try{Br(u,"")}catch(b){V(e,e.return,b)}}if(r&4&&(u=e.stateNode,u!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ld(u,i),sa(a,o);var s=sa(a,i);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?zd(u,c):d==="dangerouslySetInnerHTML"?jd(u,c):d==="children"?Br(u,c):al(u,d,c,s)}switch(a){case"input":ua(u,i);break;case"textarea":Od(u,i);break;case"select":var f=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Ut(u,!!i.multiple,h,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ut(u,!!i.multiple,i.defaultValue,!0):Ut(u,!!i.multiple,i.multiple?[]:"",!1))}u[Yr]=i}catch(b){V(e,e.return,b)}}break;case 6:if($e(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(C(162));u=e.stateNode,i=e.memoizedProps;try{u.nodeValue=i}catch(b){V(e,e.return,b)}}break;case 3:if($e(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$r(n.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:$e(n,e),Je(e);break;case 13:$e(n,e),Je(e),u=e.child,u.flags&8192&&(i=u.memoizedState!==null,u.stateNode.isHidden=i,!i||u.alternate!==null&&u.alternate.memoizedState!==null||(zl=Q())),r&4&&yc(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(s=pe)||d,$e(n,e),pe=s):$e(n,e),Je(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(c=D=d;D!==null;){switch(f=D,h=f.child,f.tag){case 0:case 11:case 14:case 15:Lr(4,f,f.return);break;case 1:Mt(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(b){V(r,t,b)}}break;case 5:Mt(f,f.return);break;case 22:if(f.memoizedState!==null){vc(c);continue}}h!==null?(h.return=f,D=h):vc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{u=c.stateNode,s?(i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bd("display",o))}catch(b){V(e,e.return,b)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(b){V(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:$e(n,e),Je(e),r&4&&yc(e);break;case 21:break;default:$e(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ff(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var u=r.stateNode;r.flags&32&&(Br(u,""),r.flags&=-33);var i=gc(e);Ba(e,i,u);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gc(e);ja(e,a,o);break;default:throw Error(C(161))}}catch(l){V(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function v1(e,n,t){D=e,mf(e)}function mf(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var u=D,i=u.child;if(u.tag===22&&r){var o=u.memoizedState!==null||zu;if(!o){var a=u.alternate,l=a!==null&&a.memoizedState!==null||pe;a=zu;var s=pe;if(zu=o,(pe=l)&&!s)for(D=u;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?bc(u):l!==null?(l.return=o,D=l):bc(u);for(;i!==null;)D=i,mf(i),i=i.sibling;D=u,zu=a,pe=s}xc(e)}else u.subtreeFlags&8772&&i!==null?(i.return=u,D=i):xc(e)}}function xc(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Ki(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!pe)if(t===null)r.componentDidMount();else{var u=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps);r.componentDidUpdate(u,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&tc(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}tc(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&$r(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}pe||n.flags&512&&Ma(n)}catch(f){V(n,n.return,f)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function vc(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function bc(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ki(4,n)}catch(l){V(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var u=n.return;try{r.componentDidMount()}catch(l){V(n,u,l)}}var i=n.return;try{Ma(n)}catch(l){V(n,i,l)}break;case 5:var o=n.return;try{Ma(n)}catch(l){V(n,o,l)}}}catch(l){V(n,n.return,l)}if(n===e){D=null;break}var a=n.sibling;if(a!==null){a.return=n.return,D=a;break}D=n.return}}var b1=Math.ceil,Ai=Sn.ReactCurrentDispatcher,jl=Sn.ReactCurrentOwner,je=Sn.ReactCurrentBatchConfig,O=0,oe=null,J=null,se=0,De=0,jt=Xn(0),ee=0,eu=null,yt=0,Qi=0,Bl=0,Or=null,ke=null,zl=0,nr=1/0,fn=null,Di=!1,za=null,$n=null,Hu=!1,On=null,Fi=0,Mr=0,Ha=null,ni=-1,ti=0;function ye(){return O&6?Q():ni!==-1?ni:ni=Q()}function qn(e){return e.mode&1?O&2&&se!==0?se&-se:r1.transition!==null?(ti===0&&(ti=Zd()),ti):(e=M,e!==0||(e=window.event,e=e===void 0?16:i0(e.type)),e):1}function Ye(e,n,t,r){if(50<Mr)throw Mr=0,Ha=null,Error(C(185));su(e,t,r),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(Qi|=t),ee===4&&Rn(e,se)),Ee(e,r),t===1&&O===0&&!(n.mode&1)&&(nr=Q()+500,Gi&&et()))}function Ee(e,n){var t=e.callbackNode;rm(e,n);var r=fi(e,e===oe?se:0);if(r===0)t!==null&&Fs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Fs(t),n===1)e.tag===0?t1(kc.bind(null,e)):S0(kc.bind(null,e)),Zm(function(){!(O&6)&&et()}),t=null;else{switch(Xd(r)){case 1:t=fl;break;case 4:t=Qd;break;case 16:t=di;break;case 536870912:t=Jd;break;default:t=di}t=_f(t,gf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function gf(e,n){if(ni=-1,ti=0,O&6)throw Error(C(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=fi(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ti(e,r);else{n=r;var u=O;O|=2;var i=xf();(oe!==e||se!==n)&&(fn=null,nr=Q()+500,dt(e,n));do try{_1();break}catch(a){yf(e,a)}while(!0);Cl(),Ai.current=i,O=u,J!==null?n=0:(oe=null,se=0,n=ee)}if(n!==0){if(n===2&&(u=ha(e),u!==0&&(r=u,n=Ua(e,u))),n===1)throw t=eu,dt(e,0),Rn(e,r),Ee(e,Q()),t;if(n===6)Rn(e,r);else{if(u=e.current.alternate,!(r&30)&&!k1(u)&&(n=Ti(e,r),n===2&&(i=ha(e),i!==0&&(r=i,n=Ua(e,i))),n===1))throw t=eu,dt(e,0),Rn(e,r),Ee(e,Q()),t;switch(e.finishedWork=u,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:ot(e,ke,fn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(n=zl+500-Q(),10<n)){if(fi(e,0)!==0)break;if(u=e.suspendedLanes,(u&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=wa(ot.bind(null,e,ke,fn),n);break}ot(e,ke,fn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,u=-1;0<r;){var o=31-Ve(r);i=1<<o,o=n[o],o>u&&(u=o),r&=~i}if(r=u,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b1(r/1960))-r,10<r){e.timeoutHandle=wa(ot.bind(null,e,ke,fn),r);break}ot(e,ke,fn);break;case 5:ot(e,ke,fn);break;default:throw Error(C(329))}}}return Ee(e,Q()),e.callbackNode===t?gf.bind(null,e):null}function Ua(e,n){var t=Or;return e.current.memoizedState.isDehydrated&&(dt(e,n).flags|=256),e=Ti(e,n),e!==2&&(n=ke,ke=t,n!==null&&$a(n)),e}function $a(e){ke===null?ke=e:ke.push.apply(ke,e)}function k1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var u=t[r],i=u.getSnapshot;u=u.value;try{if(!Ke(i(),u))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~Bl,n&=~Qi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function kc(e){if(O&6)throw Error(C(327));Vt();var n=fi(e,0);if(!(n&1))return Ee(e,Q()),null;var t=Ti(e,n);if(e.tag!==0&&t===2){var r=ha(e);r!==0&&(n=r,t=Ua(e,r))}if(t===1)throw t=eu,dt(e,0),Rn(e,n),Ee(e,Q()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ot(e,ke,fn),Ee(e,Q()),null}function Hl(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(nr=Q()+500,Gi&&et())}}function xt(e){On!==null&&On.tag===0&&!(O&6)&&Vt();var n=O;O|=1;var t=je.transition,r=M;try{if(je.transition=null,M=1,e)return e()}finally{M=r,je.transition=t,O=n,!(O&6)&&et()}}function Ul(){De=jt.current,H(jt)}function dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jm(t)),J!==null)for(t=J.return;t!==null;){var r=t;switch(wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yi();break;case 3:Xt(),H(Se),H(he),Pl();break;case 5:Tl(r);break;case 4:Xt();break;case 13:H($);break;case 19:H($);break;case 10:El(r.type._context);break;case 22:case 23:Ul()}t=t.return}if(oe=e,J=e=Wn(e.current,null),se=De=n,ee=0,eu=null,Bl=Qi=yt=0,ke=Or=null,lt!==null){for(n=0;n<lt.length;n++)if(t=lt[n],r=t.interleaved,r!==null){t.interleaved=null;var u=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=u,r.next=o}t.pending=r}lt=null}return e}function yf(e,n){do{var t=J;try{if(Cl(),Zu.current=Ei,Ci){for(var r=q.memoizedState;r!==null;){var u=r.queue;u!==null&&(u.pending=null),r=r.next}Ci=!1}if(gt=0,ue=X=q=null,Nr=!1,Jr=0,jl.current=null,t===null||t.return===null){ee=1,eu=n,J=null;break}e:{var i=e,o=t.return,a=t,l=n;if(n=se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var s=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=lc(o);if(h!==null){h.flags&=-257,sc(h,o,a,i,n),h.mode&1&&ac(i,s,n),n=h,l=s;var g=n.updateQueue;if(g===null){var b=new Set;b.add(l),n.updateQueue=b}else g.add(l);break e}else{if(!(n&1)){ac(i,s,n),$l();break e}l=Error(C(426))}}else if(U&&a.mode&1){var k=lc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),sc(k,o,a,i,n),_l(er(l,a));break e}}i=l=er(l,a),ee!==4&&(ee=2),Or===null?Or=[i]:Or.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var y=X0(i,l,n);nc(i,y);break e;case 1:a=l;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($n===null||!$n.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=ef(i,a,n);nc(i,x);break e}}i=i.return}while(i!==null)}bf(t)}catch(_){n=_,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function xf(){var e=Ai.current;return Ai.current=Ei,e===null?Ei:e}function $l(){(ee===0||ee===3||ee===2)&&(ee=4),oe===null||!(yt&268435455)&&!(Qi&268435455)||Rn(oe,se)}function Ti(e,n){var t=O;O|=2;var r=xf();(oe!==e||se!==n)&&(fn=null,dt(e,n));do try{w1();break}catch(u){yf(e,u)}while(!0);if(Cl(),O=t,Ai.current=r,J!==null)throw Error(C(261));return oe=null,se=0,ee}function w1(){for(;J!==null;)vf(J)}function _1(){for(;J!==null&&!Yh();)vf(J)}function vf(e){var n=wf(e.alternate,e,De);e.memoizedProps=e.pendingProps,n===null?bf(e):J=n,jl.current=null}function bf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=g1(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(t=m1(t,n,De),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);ee===0&&(ee=5)}function ot(e,n,t){var r=M,u=je.transition;try{je.transition=null,M=1,S1(e,n,t,r)}finally{je.transition=u,M=r}return null}function S1(e,n,t,r){do Vt();while(On!==null);if(O&6)throw Error(C(327));t=e.finishedWork;var u=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(um(e,i),e===oe&&(J=oe=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hu||(Hu=!0,_f(di,function(){return Vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=M;M=1;var a=O;O|=4,jl.current=null,x1(e,t),hf(t,e),qm(ba),pi=!!va,ba=va=null,e.current=t,v1(t),Kh(),O=a,M=o,je.transition=i}else e.current=t;if(Hu&&(Hu=!1,On=e,Fi=u),i=e.pendingLanes,i===0&&($n=null),Zh(t.stateNode),Ee(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)u=n[t],r(u.value,{componentStack:u.stack,digest:u.digest});if(Di)throw Di=!1,e=za,za=null,e;return Fi&1&&e.tag!==0&&Vt(),i=e.pendingLanes,i&1?e===Ha?Mr++:(Mr=0,Ha=e):Mr=0,et(),null}function Vt(){if(On!==null){var e=Xd(Fi),n=je.transition,t=M;try{if(je.transition=null,M=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,Fi=0,O&6)throw Error(C(331));var u=O;for(O|=4,D=e.current;D!==null;){var i=D,o=i.child;if(D.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var s=a[l];for(D=s;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Lr(8,d,i)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var f=d.sibling,h=d.return;if(df(d),d===s){D=null;break}if(f!==null){f.return=h,D=f;break}D=h}}}var g=i.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}D=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,D=o;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,D=y;break e}D=i.return}}var p=e.current;for(D=p;D!==null;){o=D;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,D=m;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(9,a)}}catch(_){V(a,a.return,_)}if(a===o){D=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,D=x;break e}D=a.return}}if(O=u,et(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Hi,e)}catch{}r=!0}return r}finally{M=t,je.transition=n}}return!1}function wc(e,n,t){n=er(t,n),n=X0(e,n,1),e=Un(e,n,1),n=ye(),e!==null&&(su(e,1,n),Ee(e,n))}function V(e,n,t){if(e.tag===3)wc(e,e,t);else for(;n!==null;){if(n.tag===3){wc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=er(t,e),e=ef(n,e,1),n=Un(n,e,1),e=ye(),n!==null&&(su(n,1,e),Ee(n,e));break}}n=n.return}}function C1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(se&t)===t&&(ee===4||ee===3&&(se&130023424)===se&&500>Q()-zl?dt(e,0):Bl|=t),Ee(e,n)}function kf(e,n){n===0&&(e.mode&1?(n=Pu,Pu<<=1,!(Pu&130023424)&&(Pu=4194304)):n=1);var t=ye();e=kn(e,n),e!==null&&(su(e,n,t),Ee(e,t))}function E1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),kf(e,t)}function A1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(t=u.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),kf(e,t)}var wf;wf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,h1(e,n,t);we=!!(e.flags&131072)}else we=!1,U&&n.flags&1048576&&C0(n,bi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ei(e,n),e=n.pendingProps;var u=Qt(n,he.current);Gt(n,t),u=Rl(null,n,r,e,u,t);var i=Nl();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(i=!0,xi(n)):i=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Dl(n),u.updater=Yi,n.stateNode=u,u._reactInternals=n,Fa(n,r,e,t),n=Ia(null,n,r,!0,i,t)):(n.tag=0,U&&i&&kl(n),ge(null,n,u,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ei(e,n),e=n.pendingProps,u=r._init,r=u(r._payload),n.type=r,u=n.tag=F1(r),e=qe(r,e),u){case 0:n=Pa(null,n,r,e,t);break e;case 1:n=fc(null,n,r,e,t);break e;case 11:n=cc(null,n,r,e,t);break e;case 14:n=dc(null,n,r,qe(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,u=n.pendingProps,u=n.elementType===r?u:qe(r,u),Pa(e,n,r,u,t);case 1:return r=n.type,u=n.pendingProps,u=n.elementType===r?u:qe(r,u),fc(e,n,r,u,t);case 3:e:{if(uf(n),e===null)throw Error(C(387));r=n.pendingProps,i=n.memoizedState,u=i.element,P0(e,n),_i(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){u=er(Error(C(423)),n),n=pc(e,n,r,t,u);break e}else if(r!==u){u=er(Error(C(424)),n),n=pc(e,n,r,t,u);break e}else for(Fe=Hn(n.stateNode.containerInfo.firstChild),Te=n,U=!0,Ge=null,t=F0(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jt(),r===u){n=wn(e,n,t);break e}ge(e,n,r,t)}n=n.child}return n;case 5:return I0(n),e===null&&Ea(n),r=n.type,u=n.pendingProps,i=e!==null?e.memoizedProps:null,o=u.children,ka(r,u)?o=null:i!==null&&ka(r,i)&&(n.flags|=32),rf(e,n),ge(e,n,o,t),n.child;case 6:return e===null&&Ea(n),null;case 13:return of(e,n,t);case 4:return Fl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zt(n,null,r,t):ge(e,n,r,t),n.child;case 11:return r=n.type,u=n.pendingProps,u=n.elementType===r?u:qe(r,u),cc(e,n,r,u,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,u=n.pendingProps,i=n.memoizedProps,o=u.value,j(ki,r._currentValue),r._currentValue=o,i!==null)if(Ke(i.value,o)){if(i.children===u.children&&!Se.current){n=wn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=yn(-1,t&-t),l.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?l.next=l:(l.next=d.next,d.next=l),s.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Aa(i.return,t,n),a.lanes|=t;break}l=l.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Aa(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ge(e,n,u.children,t),n=n.child}return n;case 9:return u=n.type,r=n.pendingProps.children,Gt(n,t),u=Be(u),r=r(u),n.flags|=1,ge(e,n,r,t),n.child;case 14:return r=n.type,u=qe(r,n.pendingProps),u=qe(r.type,u),dc(e,n,r,u,t);case 15:return nf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,u=n.pendingProps,u=n.elementType===r?u:qe(r,u),ei(e,n),n.tag=1,Ce(r)?(e=!0,xi(n)):e=!1,Gt(n,t),Z0(n,r,u),Fa(n,r,u,t),Ia(null,n,r,!0,e,t);case 19:return af(e,n,t);case 22:return tf(e,n,t)}throw Error(C(156,n.tag))};function _f(e,n){return Kd(e,n)}function D1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new D1(e,n,t,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F1(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sl)return 11;if(e===cl)return 14}return 2}function Wn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ri(e,n,t,r,u,i){var o=2;if(r=e,typeof e=="function")ql(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return ft(t.children,u,i,n);case ll:o=8,u|=8;break;case Xo:return e=Me(12,t,n,u|2),e.elementType=Xo,e.lanes=i,e;case ea:return e=Me(13,t,n,u),e.elementType=ea,e.lanes=i,e;case na:return e=Me(19,t,n,u),e.elementType=na,e.lanes=i,e;case Id:return Ji(t,u,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:o=10;break e;case Pd:o=9;break e;case sl:o=11;break e;case cl:o=14;break e;case Fn:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Me(o,t,n,u),n.elementType=e,n.type=r,n.lanes=i,n}function ft(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function Ji(e,n,t,r){return e=Me(22,e,r,n),e.elementType=Id,e.lanes=t,e.stateNode={isHidden:!1},e}function Bo(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function zo(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function T1(e,n,t,r,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Wl(e,n,t,r,u,i,o,a,l){return e=new T1(e,n,t,a,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Me(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(i),e}function P1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Sf(e){if(!e)return Yn;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Ce(t))return _0(e,t,n)}return n}function Cf(e,n,t,r,u,i,o,a,l){return e=Wl(t,r,!0,e,u,i,o,a,l),e.context=Sf(null),t=e.current,r=ye(),u=qn(t),i=yn(r,u),i.callback=n??null,Un(t,i,u),e.current.lanes=u,su(e,u,r),Ee(e,r),e}function Zi(e,n,t,r){var u=n.current,i=ye(),o=qn(u);return t=Sf(t),n.context===null?n.context=t:n.pendingContext=t,n=yn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(u,n,o),e!==null&&(Ye(e,u,o,i),Ju(e,u,o)),o}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Gl(e,n){_c(e,n),(e=e.alternate)&&_c(e,n)}function I1(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vl(e){this._internalRoot=e}Xi.prototype.render=Vl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Zi(e,n,null,null)};Xi.prototype.unmount=Vl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){Zi(null,e,null,null)}),n[bn]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var n=t0();e={blockedOn:null,target:e,priority:n};for(var t=0;t<In.length&&n!==0&&n<In[t].priority;t++);In.splice(t,0,e),t===0&&u0(e)}};function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sc(){}function R1(e,n,t,r,u){if(u){if(typeof r=="function"){var i=r;r=function(){var s=Pi(o);i.call(s)}}var o=Cf(n,r,e,0,null,!1,!1,"",Sc);return e._reactRootContainer=o,e[bn]=o.current,Gr(e.nodeType===8?e.parentNode:e),xt(),o}for(;u=e.lastChild;)e.removeChild(u);if(typeof r=="function"){var a=r;r=function(){var s=Pi(l);a.call(s)}}var l=Wl(e,0,!1,null,null,!1,!1,"",Sc);return e._reactRootContainer=l,e[bn]=l.current,Gr(e.nodeType===8?e.parentNode:e),xt(function(){Zi(n,l,t,r)}),l}function no(e,n,t,r,u){var i=t._reactRootContainer;if(i){var o=i;if(typeof u=="function"){var a=u;u=function(){var l=Pi(o);a.call(l)}}Zi(n,o,e,u)}else o=R1(t,n,e,u,r);return Pi(o)}e0=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ar(n.pendingLanes);t!==0&&(pl(n,t|1),Ee(n,Q()),!(O&6)&&(nr=Q()+500,et()))}break;case 13:xt(function(){var r=kn(e,1);if(r!==null){var u=ye();Ye(r,e,1,u)}}),Gl(e,1)}};hl=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var t=ye();Ye(n,e,134217728,t)}Gl(e,134217728)}};n0=function(e){if(e.tag===13){var n=qn(e),t=kn(e,n);if(t!==null){var r=ye();Ye(t,e,n,r)}Gl(e,n)}};t0=function(){return M};r0=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};da=function(e,n,t){switch(n){case"input":if(ua(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var u=Wi(r);if(!u)throw Error(C(90));Nd(r),ua(r,u)}}}break;case"textarea":Od(e,t);break;case"select":n=t.value,n!=null&&Ut(e,!!t.multiple,n,!1)}};$d=Hl;qd=xt;var N1={usingClientEntryPoint:!1,Events:[du,It,Wi,Hd,Ud,Hl]},_r={findFiberByHostInstance:at,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L1={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vd(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Hi=Uu.inject(L1),tn=Uu}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yl(n))throw Error(C(200));return P1(e,n,null,t)};Re.createRoot=function(e,n){if(!Yl(e))throw Error(C(299));var t=!1,r="",u=Ef;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Wl(e,1,!1,null,null,t,!1,r,u),e[bn]=n.current,Gr(e.nodeType===8?e.parentNode:e),new Vl(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Vd(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return xt(e)};Re.hydrate=function(e,n,t){if(!eo(n))throw Error(C(200));return no(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!Yl(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,u=!1,i="",o=Ef;if(t!=null&&(t.unstable_strictMode===!0&&(u=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Cf(n,null,e,1,t??null,u,!1,i,o),e[bn]=n.current,Gr(e),r)for(e=0;e<r.length;e++)t=r[e],u=t._getVersion,u=u(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,u]:n.mutableSourceEagerHydrationData.push(t,u);return new Xi(n)};Re.render=function(e,n,t){if(!eo(n))throw Error(C(200));return no(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!eo(e))throw Error(C(40));return e._reactRootContainer?(xt(function(){no(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Re.unstable_batchedUpdates=Hl;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!eo(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return no(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Ed.exports=Re;var O1=Ed.exports,Df,Cc=O1;Df=Cc.createRoot,Cc.hydrateRoot;var Kl={};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.parse=$1;Kl.serialize=q1;const M1=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,j1=/^[\u0021-\u003A\u003C-\u007E]*$/,B1=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,z1=/^[\u0020-\u003A\u003D-\u007E]*$/,H1=Object.prototype.toString,U1=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function $1(e,n){const t=new U1,r=e.length;if(r<2)return t;const u=(n==null?void 0:n.decode)||W1;let i=0;do{const o=e.indexOf("=",i);if(o===-1)break;const a=e.indexOf(";",i),l=a===-1?r:a;if(o>l){i=e.lastIndexOf(";",o-1)+1;continue}const s=Ec(e,i,o),d=Ac(e,o,s),c=e.slice(s,d);if(t[c]===void 0){let f=Ec(e,o+1,l),h=Ac(e,l,f);const g=u(e.slice(f,h));t[c]=g}i=l+1}while(i<r);return t}function Ec(e,n,t){do{const r=e.charCodeAt(n);if(r!==32&&r!==9)return n}while(++n<t);return t}function Ac(e,n,t){for(;n>t;){const r=e.charCodeAt(--n);if(r!==32&&r!==9)return n+1}return t}function q1(e,n,t){const r=(t==null?void 0:t.encode)||encodeURIComponent;if(!M1.test(e))throw new TypeError(`argument name is invalid: ${e}`);const u=r(n);if(!j1.test(u))throw new TypeError(`argument val is invalid: ${n}`);let i=e+"="+u;if(!t)return i;if(t.maxAge!==void 0){if(!Number.isInteger(t.maxAge))throw new TypeError(`option maxAge is invalid: ${t.maxAge}`);i+="; Max-Age="+t.maxAge}if(t.domain){if(!B1.test(t.domain))throw new TypeError(`option domain is invalid: ${t.domain}`);i+="; Domain="+t.domain}if(t.path){if(!z1.test(t.path))throw new TypeError(`option path is invalid: ${t.path}`);i+="; Path="+t.path}if(t.expires){if(!G1(t.expires)||!Number.isFinite(t.expires.valueOf()))throw new TypeError(`option expires is invalid: ${t.expires}`);i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.partitioned&&(i+="; Partitioned"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${t.priority}`)}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${t.sameSite}`)}return i}function W1(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function G1(e){return H1.call(e)==="[object Date]"}/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dc="popstate";function V1(e={}){function n(r,u){let{pathname:i,search:o,hash:a}=r.location;return qa("",{pathname:i,search:o,hash:a},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function t(r,u){return typeof u=="string"?u:nu(u)}return K1(n,t,null,e)}function W(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function on(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Y1(){return Math.random().toString(36).substring(2,10)}function Fc(e,n){return{usr:e.state,key:e.key,idx:n}}function qa(e,n,t=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?sr(n):n,state:t,key:n&&n.key||r||Y1()}}function nu({pathname:e="/",search:n="",hash:t=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function sr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substring(t),e=e.substring(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substring(r),e=e.substring(0,r)),e&&(n.pathname=e)}return n}function K1(e,n,t,r={}){let{window:u=document.defaultView,v5Compat:i=!1}=r,o=u.history,a="POP",l=null,s=d();s==null&&(s=0,o.replaceState({...o.state,idx:s},""));function d(){return(o.state||{idx:null}).idx}function c(){a="POP";let k=d(),y=k==null?null:k-s;s=k,l&&l({action:a,location:b.location,delta:y})}function f(k,y){a="PUSH";let p=qa(b.location,k,y);s=d()+1;let m=Fc(p,s),x=b.createHref(p);try{o.pushState(m,"",x)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;u.location.assign(x)}i&&l&&l({action:a,location:b.location,delta:1})}function h(k,y){a="REPLACE";let p=qa(b.location,k,y);s=d();let m=Fc(p,s),x=b.createHref(p);o.replaceState(m,"",x),i&&l&&l({action:a,location:b.location,delta:0})}function g(k){let y=u.location.origin!=="null"?u.location.origin:u.location.href,p=typeof k=="string"?k:nu(k);return p=p.replace(/ $/,"%20"),W(y,`No window.location.(origin|href) available to create URL for href: ${p}`),new URL(p,y)}let b={get action(){return a},get location(){return e(u,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return u.addEventListener(Dc,c),l=k,()=>{u.removeEventListener(Dc,c),l=null}},createHref(k){return n(u,k)},createURL:g,encodeLocation(k){let y=g(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:h,go(k){return o.go(k)}};return b}function Ff(e,n,t="/"){return Q1(e,n,t,!1)}function Q1(e,n,t,r){let u=typeof n=="string"?sr(n):n,i=Kn(u.pathname||"/",t);if(i==null)return null;let o=Tf(e);J1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let s=lg(i);a=og(o[l],s,r)}return a}function Tf(e,n=[],t=[],r=""){let u=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(W(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=xn([r,l.relativePath]),d=t.concat(l);i.children&&i.children.length>0&&(W(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),Tf(i.children,n,d,s)),!(i.path==null&&!i.index)&&n.push({path:s,score:ug(s,i.index),routesMeta:d})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))u(i,o);else for(let l of Pf(i.path))u(i,o,l)}),n}function Pf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,u=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return u?[i,""]:[i];let o=Pf(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),u&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function J1(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:ig(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Z1=/^:[\w-]+$/,X1=3,eg=2,ng=1,tg=10,rg=-2,Tc=e=>e==="*";function ug(e,n){let t=e.split("/"),r=t.length;return t.some(Tc)&&(r+=rg),n&&(r+=eg),t.filter(u=>!Tc(u)).reduce((u,i)=>u+(Z1.test(i)?X1:i===""?ng:tg),r)}function ig(e,n){return e.length===n.length&&e.slice(0,-1).every((r,u)=>r===n[u])?e[e.length-1]-n[n.length-1]:0}function og(e,n,t=!1){let{routesMeta:r}=e,u={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],s=a===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",c=Ii({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},d),f=l.route;if(!c&&s&&t&&!r[r.length-1].route.index&&(c=Ii({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!c)return null;Object.assign(u,c.params),o.push({params:u,pathname:xn([i,c.pathname]),pathnameBase:fg(xn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=xn([i,c.pathnameBase]))}return o}function Ii(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=ag(e.path,e.caseSensitive,e.end),u=n.match(t);if(!u)return null;let i=u[0],o=i.replace(/(.)\/+$/,"$1"),a=u.slice(1);return{params:r.reduce((s,{paramName:d,isOptional:c},f)=>{if(d==="*"){let g=a[f]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const h=a[f];return c&&!h?s[d]=void 0:s[d]=(h||"").replace(/%2F/g,"/"),s},{}),pathname:i,pathnameBase:o,pattern:e}}function ag(e,n=!1,t=!0){on(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],u="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),u+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?u+="\\/*$":e!==""&&e!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,n?void 0:"i"),r]}function lg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return on(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Kn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function sg(e,n="/"){let{pathname:t,search:r="",hash:u=""}=typeof e=="string"?sr(e):e;return{pathname:t?t.startsWith("/")?t:cg(t,n):n,search:pg(r),hash:hg(u)}}function cg(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(u=>{u===".."?t.length>1&&t.pop():u!=="."&&t.push(u)}),t.length>1?t.join("/"):"/"}function Ho(e,n,t,r){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function If(e){let n=dg(e);return n.map((t,r)=>r===n.length-1?t.pathname:t.pathnameBase)}function Rf(e,n,t,r=!1){let u;typeof e=="string"?u=sr(e):(u={...e},W(!u.pathname||!u.pathname.includes("?"),Ho("?","pathname","search",u)),W(!u.pathname||!u.pathname.includes("#"),Ho("#","pathname","hash",u)),W(!u.search||!u.search.includes("#"),Ho("#","search","hash",u)));let i=e===""||u.pathname==="",o=i?"/":u.pathname,a;if(o==null)a=t;else{let c=n.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;u.pathname=f.join("/")}a=c>=0?n[c]:"/"}let l=sg(u,a),s=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(s||d)&&(l.pathname+="/"),l}var xn=e=>e.join("/").replace(/\/\/+/g,"/"),fg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Nf=["POST","PUT","PATCH","DELETE"];new Set(Nf);var gg=["GET",...Nf];new Set(gg);var cr=w.createContext(null);cr.displayName="DataRouter";var to=w.createContext(null);to.displayName="DataRouterState";var Lf=w.createContext({isTransitioning:!1});Lf.displayName="ViewTransition";var yg=w.createContext(new Map);yg.displayName="Fetchers";var xg=w.createContext(null);xg.displayName="Await";var an=w.createContext(null);an.displayName="Navigation";var pu=w.createContext(null);pu.displayName="Location";var ln=w.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var Ql=w.createContext(null);Ql.displayName="RouteError";function vg(e,{relative:n}={}){W(hu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=w.useContext(an),{hash:u,pathname:i,search:o}=mu(e,{relative:n}),a=i;return t!=="/"&&(a=i==="/"?t:xn([t,i])),r.createHref({pathname:a,search:o,hash:u})}function hu(){return w.useContext(pu)!=null}function Cn(){return W(hu(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(pu).location}var Of="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mf(e){w.useContext(an).static||w.useLayoutEffect(e)}function jf(){let{isDataRoute:e}=w.useContext(ln);return e?Rg():bg()}function bg(){W(hu(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(cr),{basename:n,navigator:t}=w.useContext(an),{matches:r}=w.useContext(ln),{pathname:u}=Cn(),i=JSON.stringify(If(r)),o=w.useRef(!1);return Mf(()=>{o.current=!0}),w.useCallback((l,s={})=>{if(on(o.current,Of),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=Rf(l,JSON.parse(i),u,s.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:xn([n,d.pathname])),(s.replace?t.replace:t.push)(d,s.state,s)},[n,t,i,u,e])}w.createContext(null);function kg(){let{matches:e}=w.useContext(ln),n=e[e.length-1];return n?n.params:{}}function mu(e,{relative:n}={}){let{matches:t}=w.useContext(ln),{pathname:r}=Cn(),u=JSON.stringify(If(t));return w.useMemo(()=>Rf(e,JSON.parse(u),r,n==="path"),[e,u,r,n])}function wg(e,n){return Bf(e,n)}function Bf(e,n,t,r){var p;W(hu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:i}=w.useContext(an),{matches:o}=w.useContext(ln),a=o[o.length-1],l=a?a.params:{},s=a?a.pathname:"/",d=a?a.pathnameBase:"/",c=a&&a.route;{let m=c&&c.path||"";zf(s,!c||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Cn(),h;if(n){let m=typeof n=="string"?sr(n):n;W(d==="/"||((p=m.pathname)==null?void 0:p.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=f;let g=h.pathname||"/",b=g;if(d!=="/"){let m=d.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=!i&&t&&t.matches&&t.matches.length>0?t.matches:Ff(e,{pathname:b});on(c||k!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),on(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Ag(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:xn([d,u.encodeLocation?u.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?d:xn([d,u.encodeLocation?u.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,t,r);return n&&y?w.createElement(pu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},y):y}function _g(){let e=Ig(),n=mg(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:u},t):null,o)}var Sg=w.createElement(_g,null),Cg=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(ln.Provider,{value:this.props.routeContext},w.createElement(Ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eg({routeContext:e,match:n,children:t}){let r=w.useContext(cr);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(ln.Provider,{value:e},t)}function Ag(e,n=[],t=null,r=null){if(e==null){if(!t)return null;if(t.errors)e=t.matches;else if(n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let u=e,i=t==null?void 0:t.errors;if(i!=null){let l=u.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id])!==void 0);W(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),u=u.slice(0,Math.min(u.length,l+1))}let o=!1,a=-1;if(t)for(let l=0;l<u.length;l++){let s=u[l];if((s.route.HydrateFallback||s.route.hydrateFallbackElement)&&(a=l),s.route.id){let{loaderData:d,errors:c}=t,f=s.route.loader&&!d.hasOwnProperty(s.route.id)&&(!c||c[s.route.id]===void 0);if(s.route.lazy||f){o=!0,a>=0?u=u.slice(0,a+1):u=[u[0]];break}}}return u.reduceRight((l,s,d)=>{let c,f=!1,h=null,g=null;t&&(c=i&&s.route.id?i[s.route.id]:void 0,h=s.route.errorElement||Sg,o&&(a<0&&d===0?(zf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,g=null):a===d&&(f=!0,g=s.route.hydrateFallbackElement||null)));let b=n.concat(u.slice(0,d+1)),k=()=>{let y;return c?y=h:f?y=g:s.route.Component?y=w.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=l,w.createElement(Eg,{match:s,routeContext:{outlet:l,matches:b,isDataRoute:t!=null},children:y})};return t&&(s.route.ErrorBoundary||s.route.errorElement||d===0)?w.createElement(Cg,{location:t.location,revalidation:t.revalidation,component:h,error:c,children:k(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):k()},null)}function Jl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dg(e){let n=w.useContext(cr);return W(n,Jl(e)),n}function Fg(e){let n=w.useContext(to);return W(n,Jl(e)),n}function Tg(e){let n=w.useContext(ln);return W(n,Jl(e)),n}function Zl(e){let n=Tg(e),t=n.matches[n.matches.length-1];return W(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function Pg(){return Zl("useRouteId")}function Ig(){var r;let e=w.useContext(Ql),n=Fg("useRouteError"),t=Zl("useRouteError");return e!==void 0?e:(r=n.errors)==null?void 0:r[t]}function Rg(){let{router:e}=Dg("useNavigate"),n=Zl("useNavigate"),t=w.useRef(!1);return Mf(()=>{t.current=!0}),w.useCallback(async(u,i={})=>{on(t.current,Of),t.current&&(typeof u=="number"?e.navigate(u):await e.navigate(u,{fromRouteId:n,...i}))},[e,n])}var Pc={};function zf(e,n,t){!n&&!Pc[e]&&(Pc[e]=!0,on(!1,t))}w.memo(Ng);function Ng({routes:e,future:n,state:t}){return Bf(e,void 0,t,n)}function Dn(e){W(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Lg({basename:e="/",children:n=null,location:t,navigationType:r="POP",navigator:u,static:i=!1}){W(!hu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),a=w.useMemo(()=>({basename:o,navigator:u,static:i,future:{}}),[o,u,i]);typeof t=="string"&&(t=sr(t));let{pathname:l="/",search:s="",hash:d="",state:c=null,key:f="default"}=t,h=w.useMemo(()=>{let g=Kn(l,o);return g==null?null:{location:{pathname:g,search:s,hash:d,state:c,key:f},navigationType:r}},[o,l,s,d,c,f,r]);return on(h!=null,`<Router basename="${o}"> is not able to match the URL "${l}${s}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement(an.Provider,{value:a},w.createElement(pu.Provider,{children:n,value:h}))}function Og({children:e,location:n}){return wg(Wa(e),n)}function Wa(e,n=[]){let t=[];return w.Children.forEach(e,(r,u)=>{if(!w.isValidElement(r))return;let i=[...n,u];if(r.type===w.Fragment){t.push.apply(t,Wa(r.props.children,i));return}W(r.type===Dn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),W(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wa(r.props.children,i)),t.push(o)}),t}var ui="get",ii="application/x-www-form-urlencoded";function ro(e){return e!=null&&typeof e.tagName=="string"}function Mg(e){return ro(e)&&e.tagName.toLowerCase()==="button"}function jg(e){return ro(e)&&e.tagName.toLowerCase()==="form"}function Bg(e){return ro(e)&&e.tagName.toLowerCase()==="input"}function zg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hg(e,n){return e.button===0&&(!n||n==="_self")&&!zg(e)}var $u=null;function Ug(){if($u===null)try{new FormData(document.createElement("form"),0),$u=!1}catch{$u=!0}return $u}var $g=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uo(e){return e!=null&&!$g.has(e)?(on(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`),null):e}function qg(e,n){let t,r,u,i,o;if(jg(e)){let a=e.getAttribute("action");r=a?Kn(a,n):null,t=e.getAttribute("method")||ui,u=Uo(e.getAttribute("enctype"))||ii,i=new FormData(e)}else if(Mg(e)||Bg(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?Kn(l,n):null,t=e.getAttribute("formmethod")||a.getAttribute("method")||ui,u=Uo(e.getAttribute("formenctype"))||Uo(a.getAttribute("enctype"))||ii,i=new FormData(a,e),!Ug()){let{name:s,type:d,value:c}=e;if(d==="image"){let f=s?`${s}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else s&&i.append(s,c)}}else{if(ro(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ui,r=null,u=ii,o=e}return i&&u==="text/plain"&&(o=i,i=void 0),{action:r,method:t.toLowerCase(),encType:u,formData:i,body:o}}function Xl(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function Wg(e,n){if(e.id in n)return n[e.id];try{let t=await import(e.module);return n[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gg(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Vg(e,n,t){let r=await Promise.all(e.map(async u=>{let i=n.routes[u.route.id];if(i){let o=await Wg(i,t);return o.links?o.links():[]}return[]}));return Jg(r.flat(1).filter(Gg).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Ic(e,n,t,r,u,i){let o=(l,s)=>t[s]?l.route.id!==t[s].route.id:!0,a=(l,s)=>{var d;return t[s].pathname!==l.pathname||((d=t[s].route.path)==null?void 0:d.endsWith("*"))&&t[s].params["*"]!==l.params["*"]};return i==="assets"?n.filter((l,s)=>o(l,s)||a(l,s)):i==="data"?n.filter((l,s)=>{var c;let d=r.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,s)||a(l,s))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((c=t[0])==null?void 0:c.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Yg(e,n){return Kg(e.map(t=>{let r=n.routes[t.route.id];if(!r)return[];let u=[r.module];return r.imports&&(u=u.concat(r.imports)),u}).flat(1))}function Kg(e){return[...new Set(e)]}function Qg(e){let n={},t=Object.keys(e).sort();for(let r of t)n[r]=e[r];return n}function Jg(e,n){let t=new Set;return new Set(n),e.reduce((r,u)=>{let i=JSON.stringify(Qg(u));return t.has(i)||(t.add(i),r.push({key:i,link:u})),r},[])}function Zg(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Xg(){let e=w.useContext(cr);return Xl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function e2(){let e=w.useContext(to);return Xl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var es=w.createContext(void 0);es.displayName="FrameworkContext";function Hf(){let e=w.useContext(es);return Xl(e,"You must render this element inside a <HydratedRouter> element"),e}function n2(e,n){let t=w.useContext(es),[r,u]=w.useState(!1),[i,o]=w.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:s,onMouseLeave:d,onTouchStart:c}=n,f=w.useRef(null);w.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let b=y=>{y.forEach(p=>{o(p.isIntersecting)})},k=new IntersectionObserver(b,{threshold:.5});return f.current&&k.observe(f.current),()=>{k.disconnect()}}},[e]),w.useEffect(()=>{if(r){let b=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(b)}}},[r]);let h=()=>{u(!0)},g=()=>{u(!1),o(!1)};return t?e!=="intent"?[i,f,{}]:[i,f,{onFocus:Sr(a,h),onBlur:Sr(l,g),onMouseEnter:Sr(s,h),onMouseLeave:Sr(d,g),onTouchStart:Sr(c,h)}]:[!1,f,{}]}function Sr(e,n){return t=>{e&&e(t),t.defaultPrevented||n(t)}}function t2({page:e,...n}){let{router:t}=Xg(),r=w.useMemo(()=>Ff(t.routes,e,t.basename),[t.routes,e,t.basename]);return r?w.createElement(u2,{page:e,matches:r,...n}):null}function r2(e){let{manifest:n,routeModules:t}=Hf(),[r,u]=w.useState([]);return w.useEffect(()=>{let i=!1;return Vg(e,n,t).then(o=>{i||u(o)}),()=>{i=!0}},[e,n,t]),r}function u2({page:e,matches:n,...t}){let r=Cn(),{manifest:u,routeModules:i}=Hf(),{loaderData:o,matches:a}=e2(),l=w.useMemo(()=>Ic(e,n,a,u,r,"data"),[e,n,a,u,r]),s=w.useMemo(()=>Ic(e,n,a,u,r,"assets"),[e,n,a,u,r]),d=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let h=new Set,g=!1;if(n.forEach(k=>{var p;let y=u.routes[k.route.id];!y||!y.hasLoader||(!l.some(m=>m.route.id===k.route.id)&&k.route.id in o&&((p=i[k.route.id])!=null&&p.shouldRevalidate)||y.hasClientLoader?g=!0:h.add(k.route.id))}),h.size===0)return[];let b=Zg(e);return g&&h.size>0&&b.searchParams.set("_routes",n.filter(k=>h.has(k.route.id)).map(k=>k.route.id).join(",")),[b.pathname+b.search]},[o,r,u,l,n,e,i]),c=w.useMemo(()=>Yg(s,u),[s,u]),f=r2(s);return w.createElement(w.Fragment,null,d.map(h=>w.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...t})),c.map(h=>w.createElement("link",{key:h,rel:"modulepreload",href:h,...t})),f.map(({key:h,link:g})=>w.createElement("link",{key:h,...g})))}function i2(...e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}var Uf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uf&&(window.__reactRouterVersion="7.1.5")}catch{}function o2({basename:e,children:n,window:t}){let r=w.useRef();r.current==null&&(r.current=V1({window:t,v5Compat:!0}));let u=r.current,[i,o]=w.useState({action:u.action,location:u.location}),a=w.useCallback(l=>{w.startTransition(()=>o(l))},[o]);return w.useLayoutEffect(()=>u.listen(a),[u,a]),w.createElement(Lg,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:u})}var $f=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_n=w.forwardRef(function({onClick:n,discover:t="render",prefetch:r="none",relative:u,reloadDocument:i,replace:o,state:a,target:l,to:s,preventScrollReset:d,viewTransition:c,...f},h){let{basename:g}=w.useContext(an),b=typeof s=="string"&&$f.test(s),k,y=!1;if(typeof s=="string"&&b&&(k=s,Uf))try{let I=new URL(window.location.href),P=s.startsWith("//")?new URL(I.protocol+s):new URL(s),ne=Kn(P.pathname,g);P.origin===I.origin&&ne!=null?s=ne+P.search+P.hash:y=!0}catch{on(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=vg(s,{relative:u}),[m,x,_]=n2(r,f),S=c2(s,{replace:o,state:a,target:l,preventScrollReset:d,relative:u,viewTransition:c});function E(I){n&&n(I),I.defaultPrevented||S(I)}let A=w.createElement("a",{...f,..._,href:k||p,onClick:y||i?n:E,ref:i2(h,x),target:l,"data-discover":!b&&t==="render"?"true":void 0});return m&&!b?w.createElement(w.Fragment,null,A,w.createElement(t2,{page:p})):A});_n.displayName="Link";var a2=w.forwardRef(function({"aria-current":n="page",caseSensitive:t=!1,className:r="",end:u=!1,style:i,to:o,viewTransition:a,children:l,...s},d){let c=mu(o,{relative:s.relative}),f=Cn(),h=w.useContext(to),{navigator:g,basename:b}=w.useContext(an),k=h!=null&&m2(c)&&a===!0,y=g.encodeLocation?g.encodeLocation(c).pathname:c.pathname,p=f.pathname,m=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;t||(p=p.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase()),m&&b&&(m=Kn(m,b)||m);const x=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let _=p===y||!u&&p.startsWith(y)&&p.charAt(x)==="/",S=m!=null&&(m===y||!u&&m.startsWith(y)&&m.charAt(y.length)==="/"),E={isActive:_,isPending:S,isTransitioning:k},A=_?n:void 0,I;typeof r=="function"?I=r(E):I=[r,_?"active":null,S?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let P=typeof i=="function"?i(E):i;return w.createElement(_n,{...s,"aria-current":A,className:I,ref:d,style:P,to:o,viewTransition:a},typeof l=="function"?l(E):l)});a2.displayName="NavLink";var l2=w.forwardRef(({discover:e="render",fetcherKey:n,navigate:t,reloadDocument:r,replace:u,state:i,method:o=ui,action:a,onSubmit:l,relative:s,preventScrollReset:d,viewTransition:c,...f},h)=>{let g=p2(),b=h2(a,{relative:s}),k=o.toLowerCase()==="get"?"get":"post",y=typeof a=="string"&&$f.test(a),p=m=>{if(l&&l(m),m.defaultPrevented)return;m.preventDefault();let x=m.nativeEvent.submitter,_=(x==null?void 0:x.getAttribute("formmethod"))||o;g(x||m.currentTarget,{fetcherKey:n,method:_,navigate:t,replace:u,state:i,relative:s,preventScrollReset:d,viewTransition:c})};return w.createElement("form",{ref:h,method:k,action:b,onSubmit:r?l:p,...f,"data-discover":!y&&e==="render"?"true":void 0})});l2.displayName="Form";function s2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qf(e){let n=w.useContext(cr);return W(n,s2(e)),n}function c2(e,{target:n,replace:t,state:r,preventScrollReset:u,relative:i,viewTransition:o}={}){let a=jf(),l=Cn(),s=mu(e,{relative:i});return w.useCallback(d=>{if(Hg(d,n)){d.preventDefault();let c=t!==void 0?t:nu(l)===nu(s);a(e,{replace:c,state:r,preventScrollReset:u,relative:i,viewTransition:o})}},[l,a,s,t,r,n,e,u,i,o])}var d2=0,f2=()=>`__${String(++d2)}__`;function p2(){let{router:e}=qf("useSubmit"),{basename:n}=w.useContext(an),t=Pg();return w.useCallback(async(r,u={})=>{let{action:i,method:o,encType:a,formData:l,body:s}=qg(r,n);if(u.navigate===!1){let d=u.fetcherKey||f2();await e.fetch(d,t,u.action||i,{preventScrollReset:u.preventScrollReset,formData:l,body:s,formMethod:u.method||o,formEncType:u.encType||a,flushSync:u.flushSync})}else await e.navigate(u.action||i,{preventScrollReset:u.preventScrollReset,formData:l,body:s,formMethod:u.method||o,formEncType:u.encType||a,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[e,n,t])}function h2(e,{relative:n}={}){let{basename:t}=w.useContext(an),r=w.useContext(ln);W(r,"useFormAction must be used inside a RouteContext");let[u]=r.matches.slice(-1),i={...mu(e||".",{relative:n})},o=Cn();if(e==null){i.search=o.search;let a=new URLSearchParams(i.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(c=>c).forEach(c=>a.append("index",c));let d=a.toString();i.search=d?`?${d}`:""}}return(!e||e===".")&&u.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:xn([t,i.pathname])),nu(i)}function m2(e,n={}){let t=w.useContext(Lf);W(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qf("useViewTransitionState"),u=mu(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Kn(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Kn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ii(u.pathname,o)!=null||Ii(u.pathname,i)!=null}new TextEncoder;function g2(e,n=""){if(typeof window>"u"||!window.umami)return;const t=`${e}${n}`;window.umami.track(r=>({...r,url:t}))}function y2(){const e=Cn(),n=w.useRef(!0);return w.useEffect(()=>{if(n.current){n.current=!1;return}g2(e.pathname,e.search)},[e.pathname,e.search]),null}/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wf=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=w.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:u="",children:i,iconNode:o,...a},l)=>w.createElement("svg",{ref:l,...v2,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Wf("lucide",u),...a},[...o.map(([s,d])=>w.createElement(s,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(e,n)=>{const t=w.forwardRef(({className:r,...u},i)=>w.createElement(b2,{ref:i,iconNode:n,className:Wf(`lucide-${x2(e)}`,r),...u}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],w2=wt("ArrowLeft",k2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],S2=wt("ExternalLink",_2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],E2=wt("Github",C2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],D2=wt("Moon",A2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Gf=wt("Presentation",F2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],P2=wt("Sun",T2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],R2=wt("Twitter",I2),Vf=w.createContext(void 0);function N2({children:e}){const[n,t]=w.useState(()=>localStorage.getItem("theme")||"light");w.useEffect(()=>{localStorage.setItem("theme",n),document.documentElement.classList.toggle("dark",n==="dark")},[n]);const r=()=>{t(u=>u==="light"?"dark":"light")};return v.jsx(Vf.Provider,{value:{theme:n,toggleTheme:r},children:e})}function L2(){const e=w.useContext(Vf);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e}const O2=[{to:"/",label:"Home",match:e=>e==="/"},{to:"/blog",label:"Blog",match:e=>e==="/blog"||e.startsWith("/blog/")},{to:"/projects",label:"Projects",match:e=>e==="/projects"},{to:"/resume",label:"Resume",match:e=>e==="/resume"},{to:"/talks",label:"Talks",match:e=>e==="/talks"},{to:"/opensource",label:"OSS",match:e=>e==="/opensource"}];function M2(){const e=Cn(),{theme:n,toggleTheme:t}=L2();return v.jsx("nav",{className:"py-10 dark:bg-[#1a1a1a]",children:v.jsx("div",{className:"max-w-2xl mx-auto px-6",children:v.jsxs("div",{className:"flex items-center justify-between gap-4",children:[v.jsx(_n,{to:"/",className:"font-serif text-xl text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"kriyanshi"}),v.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-x-4 gap-y-2",children:[O2.map(({to:r,label:u,match:i})=>v.jsx(_n,{to:r,className:`text-[13px] transition-colors ${i(e.pathname)?"text-gray-900 dark:text-gray-100":"text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200"}`,children:u},r)),v.jsx("button",{onClick:t,className:"p-1 text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-200","aria-label":"Toggle theme",children:n==="dark"?v.jsx(P2,{size:16}):v.jsx(D2,{size:16})})]})]})})})}const sn="https://kriyanshii.github.io",j2="Kriyanshi",B2="Satellites, Distributed Systems & Interactive Computing",Ga="Kriyanshi",z2="Portfolio of Kriyanshi. Backend and systems engineer at Matrix Business — previously at ISRO's Space Applications Centre building satellite data pipelines, JupyterHub platforms, and workflow infrastructure.",dr=`${sn}/og/blog-default.png`;function Va(e){return e.startsWith("http")?e:`${sn}${e.startsWith("/")?e:`/${e}`}`}function H2(e){return`${sn}/blog/${e}`}function U2(e,n){return n?Va(n):`${sn}/og/${e}.png`}function $2(e){return`${e} | ${j2}`}function q2(e){return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,url:e.url,datePublished:e.datePublished,dateModified:e.dateModified??e.datePublished,image:e.image,author:{"@type":"Person",name:Ga,url:Va("/")},publisher:{"@type":"Person",name:Ga,url:Va("/")},...e.tag?{articleSection:e.tag}:{},mainEntityOfPage:{"@type":"WebPage","@id":e.url}}}function be(e,n,t=!1){const r=t?`meta[property="${e}"]`:`meta[name="${e}"]`;let u=document.head.querySelector(r),i=!1;return u||(u=document.createElement("meta"),t?u.setAttribute("property",e):u.setAttribute("name",e),document.head.appendChild(u),i=!0),u.setAttribute("content",n),{element:u,created:i}}function W2(e,n){let t=document.head.querySelector(`link[rel="${e}"]`),r=!1;return t||(t=document.createElement("link"),t.setAttribute("rel",e),document.head.appendChild(t),r=!0),t.setAttribute("href",n),{element:t,created:r}}function G2(e,n){let t=document.head.querySelector(`script[data-seo-id="${e}"]`);return t||(t=document.createElement("script"),t.type="application/ld+json",t.setAttribute("data-seo-id",e),document.head.appendChild(t)),t.textContent=JSON.stringify(n),t}function V2(e){const n=document.title;document.title=$2(e.title);const t=[be("description",e.description),W2("canonical",e.canonical),be("og:title",e.title,!0),be("og:description",e.description,!0),be("og:url",e.canonical,!0),be("og:type",e.ogType??"website",!0),be("og:locale","en_US",!0),be("twitter:card","summary_large_image"),be("twitter:title",e.title),be("twitter:description",e.description)];e.ogImage&&t.push(be("og:image",e.ogImage,!0),be("twitter:image",e.ogImage)),e.publishedTime&&t.push(be("article:published_time",e.publishedTime,!0)),e.author&&t.push(be("article:author",e.author,!0)),e.tag&&t.push(be("article:section",e.tag,!0));const u=e.ogType==="article"?G2("page-seo-jsonld",q2({title:e.title,description:e.description,url:e.canonical,datePublished:e.publishedTime??new Date().toISOString().split("T")[0],image:e.ogImage,tag:e.tag})):null;return()=>{document.title=n,t.forEach(({element:i,created:o})=>{o&&i.remove()}),u==null||u.remove()}}function _t(e){return w.useEffect(()=>V2(e),[e.title,e.description,e.canonical,e.ogType,e.ogImage,e.publishedTime,e.author,e.tag]),null}const Y2="https://drive.google.com/file/d/1cfHx8_s2gi52WUW-W4R3EBNCw-INK_cI/view?usp=sharing",K2=[{type:"job",title:"Matrix Business",role:"Software Engineer",date:"Mar 2026 — Present",description:"Built and deployed a production self-service Background Verification (BGV) platform, owning backend architecture, customer onboarding, verification workflows, and production deployment from design to launch.",isNew:!0,bulletPoints:["Led the engineering of a production self-service BGV platform, from backend architecture and APIs to deployment and production support.","Designed backend services powering authentication, customer onboarding, document verification, reporting, and payment workflows using FastAPI and PostgreSQL.","Designed a Backend-for-Frontend (BFF) layer that simplified communication between the portal, verification services, payment gateway, and storage systems.","Managed production deployments using Docker and Nginx, resolving authentication, routing, and reverse proxy issues in production environments."]},{type:"job",title:"Independent Software Engineer",role:"Products & Open Source",date:"Mar 2026 — Ongoing",description:"Built products and contributed to open-source infrastructure in parallel with full-time work — shipping apps, exploring on-device AI, and deepening distributed systems through production contributions.",link:"/projects",bulletPoints:["Built Recite Online, an educational platform that helps students practise speeches and recitations with progress tracking and self-paced learning.","Developed Serenity Workspace, a productivity application focused on structured planning and personal knowledge management.","Built Android Skill Router, a fine-tuned 3B-model system that turns natural language into reusable Android UI automation skills.","Became one of the leading contributors to Dagu, implementing workflow orchestration features across the Go backend and React frontend.","Contributed to the Ray ecosystem while exploring distributed execution and large-scale compute orchestration."],links:[{label:"Recite Online",href:"https://www.recite.online/"},{label:"Serenity Workspace",href:"https://sereneworkspace.netlify.app/"},{label:"Android Skill Router",href:"/blog/android-skill-router"},{label:"Dagu",href:"https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii"},{label:"Ray",href:"https://github.com/kriyanshii/ray/commits/master/?author=kriyanshii"}]},{type:"job",title:"Cloudraft",role:"Software Engineer",date:"Jan 2026 — Mar 2026",description:"Led the migration of n8n workflows from Docker to self-managed Kubernetes, designing production platform primitives for reliable workflow orchestration at scale.",link:"https://cloudraft.io",bulletPoints:["Led migration of n8n workflows from Docker to self-managed Kubernetes for production reliability and scale.","Designed Kubernetes namespaces, Deployments, StatefulSets, Services, Ingress, ConfigMaps, and Secrets for the platform.","Architected a self-managed cluster layout that separates workloads, configuration, and secrets for safer operations.","Delivered platform engineering improvements that make workflow orchestration easier to deploy, operate, and extend."]},{type:"job",title:"Space Applications Centre (ISRO)",role:"Software Engineer",date:"Sep 2023 — Dec 2025",description:"Delivered mission-critical distributed workflow systems supporting geostationary weather satellite processing.",bulletPoints:["Architected workflow orchestration software using Go and React for satellite data processing pipelines.","Automated scientific processing pipelines for geostationary weather satellite data.","Designed containerized environments for air-gapped deployments.","Integrated geospatial processing tools into production workflow systems.","Improved reliability of production workflow systems supporting continuous satellite data streams."]}],Yf=[{type:"project",title:"Android Skill Router: On-Device UI Automation",date:"Jun 2026 — Present",description:"A lightweight AI system that converts natural language into reusable Android automation skills using a fine-tuned 3B language model and recorded UI trajectories.",link:"https://huggingface.co/spaces/build-small-hackathon/android-skill-router",isNew:!0,bulletPoints:["Fine-tuned Qwen2.5-3B using QLoRA (Unsloth) on Modal, with a synthetic intent dataset for Android automation.","Built an end-to-end inference pipeline from prompt to executable UI trajectory, and deployed a Gradio demo on Hugging Face Spaces."],stack:["Python","Qwen2.5-3B","Unsloth","Modal","Gradio","Kotlin"],links:[{label:"Write-up",href:"/blog/android-skill-router"},{label:"Live demo",href:"https://huggingface.co/spaces/build-small-hackathon/android-skill-router"}]},{type:"project",title:"Recite Online: Guided Recitation Practice",date:"2025 — Present",description:"A web application that helps students practise speeches, poems, and recitations independently with progress tracking.",link:"https://www.recite.online/",isNew:!0,bulletPoints:["Designed and built a full-stack app for self-paced recitation practice across desktop and mobile.","Iterated on the product from user feedback to improve usability, engagement, and progress tracking."],stack:["React","TypeScript","Node.js","Express","MongoDB"]},{type:"project",title:"VisionBoardIt: Visual Goal Boards",date:"Dec 2025",description:"Create beautiful vision boards with photos, notes, and emojis.",link:"https://visionboardit.art/?ref=producthunt",isNew:!0,bulletPoints:["Built a vision board product with photos, notes, and emoji composition for personal goal-setting.","Shipped a polished web experience with Japanese-inspired visual design."],stack:["React","TypeScript"]},{type:"project",title:"dagu: Workflow Orchestration Engine",date:"Sep 2025 — Present",description:"Open-source workflow engine contributions across backend, frontend, and deployment.",link:"https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii",isNew:!0,bulletPoints:["Implemented enqueue logic, exit-code based retries, and controlled execution configs for reproducible runs.","Added DAG visualization zoom support and improved frontend build stability for the development workflow."],stack:["Go","React","TypeScript","Kubernetes"]},{type:"project",title:"Serene: Productivity Workspace",date:"Feb 2025 — Present",description:"A personalized productivity tool for structured planning and day-to-day task management.",link:"https://sereneworkspace.xyz/",isNew:!0,bulletPoints:["Built a productivity workspace focused on structured planning and personal knowledge management.","Continuing to ship UX and feature updates based on day-to-day use."],stack:["React","TypeScript"]},{type:"project",title:"MapReduce: Distributed Systems from Scratch",date:"Jan 2025",description:"Implemented the MapReduce paper from MIT's Distributed Systems course (MIT 6.5840) in Go.",link:"https://github.com/kriyanshii/mit-6.5840",bulletPoints:["Implemented MIT 6.5840 MapReduce in Go — parallel data processing, distributed computing, and fault tolerance."],stack:["Go","Distributed Systems"]},{type:"project",title:"Shell: Unix Shell from Scratch",date:"Dec 2024",description:"A minimalist Unix shell built from scratch in Go.",link:"https://github.com/kriyanshii/shell-go",bulletPoints:["Built a minimalist Unix shell from scratch in Go."],stack:["Go"]},{type:"project",title:"Grep: Pattern Matching from Scratch",date:"Feb 2025",description:"An implementation of the classic grep utility built from scratch in Go.",link:"https://github.com/kriyanshii/grep-go",bulletPoints:["Implemented the classic grep utility from scratch in Go."],stack:["Go"]},{type:"project",title:"Rock Paper Scissors",date:"Nov 2024",description:"A classic Rock-Paper-Scissors game in TypeScript.",link:"https://github.com/kriyanshii/rock-paper-scissors",bulletPoints:["Implemented Rock-Paper-Scissors in TypeScript."],stack:["TypeScript"]},{type:"project",title:"Bubble Burst",date:"Dec 2024",description:"A browser game where you pop bubbles as they appear on screen.",link:"https://github.com/kriyanshii/bubble-burst",bulletPoints:["Built a browser game where bubbles appear on screen and must be popped."],stack:["TypeScript"]},{type:"project",title:"Wordle: From Scratch",date:"Jan 2025",description:"A from-scratch Wordle implementation in TypeScript.",link:"https://github.com/kriyanshii/wordle",bulletPoints:["Implemented Wordle from scratch in TypeScript."],stack:["TypeScript"]}],Kf=[{title:"Interactive Computing Environments for Open Science",description:"Scalable JupyterHub deployments and Mercury integration for scientific research workflows.",year:"2025",tag:"Conference Talk",link:"https://youtu.be/6o_XY5jBchY?si=lZssP4yTXsjFuYQx"}],Q2=[{project:"Dagu",summary:"Co-authored Dagu's queue management system (v1.17.0), 20 merged PRs, and 16 GitHub release credits — queue tooling, Helm/Kubernetes deployment, DAG run controls, and API design.",links:[{label:"Contributions on GitHub",href:"https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii"},{label:"Write-up on this site",href:"/blog/open-source-contributions"}]},{project:"Ray",summary:"Contributions to Ray core and Ray Data — actor lifecycle fixes, dual-task error handling, datasource test organization, and Grafana observability panels.",links:[{label:"Contributions on GitHub",href:"https://github.com/kriyanshii/ray/commits/master/?author=kriyanshii"}]}];function J2(e){return e.startsWith("http")}function $o({href:e,children:n,className:t}){return J2(e)?v.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:t,children:n}):v.jsx("a",{href:e,className:t,children:n})}function Ya({items:e,title:n}){return v.jsxs("section",{className:"mb-12",children:[n&&v.jsx("h2",{className:"mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500",children:n}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"absolute left-[4px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700"}),v.jsx("div",{className:"space-y-8",children:e.map(t=>{var l,s,d;const r=(l=t.stack)!=null&&l.length?t.stack:void 0,u=t.isNew?t.type==="job"?"current":"active":null,i=t.type==="project"&&t.bulletPoints&&t.bulletPoints.length>2?t.bulletPoints.slice(0,2):t.bulletPoints,o=v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"mb-1.5 flex items-start justify-between gap-4",children:[v.jsxs("div",{className:"flex min-w-0 flex-wrap items-center gap-2",children:[u&&v.jsx("span",{className:"shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",children:u}),t.link&&((s=t.links)!=null&&s.length)?v.jsx($o,{href:t.link,className:"text-[15px] font-medium leading-snug text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400",children:t.title}):v.jsx("h3",{className:"text-[15px] font-medium leading-snug text-gray-900 dark:text-gray-100",children:t.title})]}),v.jsx("p",{className:"shrink-0 pt-0.5 text-xs text-gray-500 dark:text-gray-500",children:t.date})]}),t.role&&v.jsx("p",{className:"mb-2 text-[13px] text-gray-600 dark:text-gray-400",children:t.role}),r&&r.length>0&&v.jsx("div",{className:"mb-2.5 flex flex-wrap gap-1.5",children:r.map(c=>v.jsx("span",{className:"rounded px-2 py-0.5 text-[11px] bg-gray-100 text-gray-600 dark:bg-[#252525] dark:text-blue-200/90",children:c},c))}),!(i!=null&&i.length)&&t.description&&v.jsx("p",{className:"text-[13px] leading-relaxed text-gray-600 dark:text-gray-400",children:t.description}),i&&i.length>0&&v.jsx("ul",{className:"space-y-1.5",children:i.map(c=>v.jsxs("li",{className:"flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400",children:[v.jsx("span",{className:"mt-[8px] h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500"}),v.jsx("span",{children:c})]},c))}),t.links&&t.links.length>0&&v.jsx("div",{className:"mt-2.5 flex flex-wrap gap-x-3 gap-y-1",children:t.links.map(c=>v.jsx($o,{href:c.href,className:"text-xs text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400",children:c.label},c.href))})]}),a=!!(t.link&&!((d=t.links)!=null&&d.length));return v.jsxs("article",{className:"group relative pl-7",children:[v.jsx("div",{className:`absolute left-0 top-[8px] h-2 w-2 rounded-full border-2 bg-[#fafafa] dark:bg-[#1a1a1a] ${t.isNew?"border-blue-500 bg-blue-500 dark:bg-blue-500":"border-gray-300 dark:border-gray-600"}`}),a?v.jsx($o,{href:t.link,className:"block transition-colors group-hover:[&_h3]:text-blue-600 dark:group-hover:[&_h3]:text-blue-400",children:o}):o]},`${t.title}-${t.date}`)})})]})]})}function Z2(){return v.jsxs("div",{className:"max-w-2xl mx-auto px-6 pb-20",children:[v.jsx(_t,{title:B2,description:z2,canonical:`${sn}/`,ogImage:dr}),v.jsxs("header",{className:"mb-10",children:[v.jsx("h1",{className:"font-serif text-3xl text-gray-900 dark:text-white mb-2",children:"Kriyanshi"}),v.jsx("p",{className:"text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 mb-4",children:"Backend & systems engineer working on satellite data pipelines, workflow orchestration, and production infrastructure. Currently at Matrix Business."}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("a",{href:"https://github.com/kriyanshii",target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors","aria-label":"GitHub",children:v.jsx(E2,{size:16})}),v.jsx("a",{href:"https://x.com/kriyanshii",target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors","aria-label":"Twitter",children:v.jsx(R2,{size:16})}),v.jsx(_n,{to:"/talks",className:"text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors","aria-label":"Talks",children:v.jsx(Gf,{size:16})})]})]}),v.jsx(Ya,{items:K2,title:"experience"}),v.jsx(Ya,{items:Yf,title:"projects"}),v.jsxs("section",{children:[v.jsxs("div",{className:"mb-6 flex items-baseline justify-between",children:[v.jsx("h2",{className:"text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500",children:"talks"}),v.jsx(_n,{to:"/talks",className:"text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors",children:"View all"})]}),v.jsx("div",{className:"space-y-6",children:Kf.slice(0,1).map(e=>v.jsxs("article",{children:[v.jsxs("div",{className:"mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",children:[v.jsx("h3",{className:"text-[15px] font-medium text-gray-900 dark:text-gray-100",children:e.title}),v.jsx("span",{className:"text-xs text-gray-500",children:e.year})]}),v.jsx("p",{className:"mb-2 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400",children:e.description}),v.jsx("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-gray-500 transition-colors hover:text-blue-600 dark:hover:text-blue-400",children:"Watch talk"})]},e.link))})]})]})}const Qf=`---
title: What Air-Gapped Systems Taught Me About Software Supply-Chain Trust
date: 2026-05-20
tag: Tech
description: Lessons from building secure JupyterHub environments in air-gapped systems at ISRO on software supply-chain trust, source builds, and reproducible scientific computing.
---

## Introduction

A few days ago, I was reading [Chainguard’s article on preventing malware in Chainguard Libraries](https://www.chainguard.dev/unchained/how-does-chainguard-prevent-malware-in-chainguard-libraries). Their emphasis on building binaries directly from source rather than inheriting trust from opaque upstream artifacts felt strangely familiar.

It reminded me of some of the work we did while building secure JupyterHub environments for scientific workloads at SAC, ISRO.

Building JupyterHub in partially air-gapped environments at ISRO taught me that software supply-chain trust is really about visibility, not just security policy.

At the time, I never thought about it in terms like “software supply-chain security” or “artifact provenance.” We were mostly trying to make scientific computing work reliably inside partially air-gapped environments. Looking back now, I realize many of the operational constraints we dealt with naturally pushed us toward questions the industry is now formalizing much more explicitly.

---

## Air-Gapped Workflow

The first thing air-gapped systems change is your relationship with the internet itself.

In most engineering environments today, the network quietly becomes part of the runtime. Dependencies are downloaded dynamically. Container images are pulled from registries without much thought. Package managers resolve transitive dependencies invisibly. Trust is inherited passively because the surrounding ecosystem is designed to feel frictionless.

Inside constrained systems, that abstraction disappears very quickly.

*Figure: Artifacts move from an internet-connected acquisition machine through controlled transfer into the air-gapped build environment, then into custom UBI9 container images and JupyterHub.*

\`\`\`mermaid
flowchart LR

A[Internet Connected Machine] --> B[Download Source Code]
A --> C[Fetch Python Packages]
A --> D[Collect RPM Dependencies]
A --> E[Access Documentation]
A --> F[Retrieve Build Requirements]

B --> G[Controlled Artifact Transfer]
C --> G
D --> G
E --> G
F --> G

G --> H[Air-Gapped Environment]

H --> I[Build Scientific Libraries From Source]
H --> J[Compile Native Dependencies]
H --> K[Configure Python Runtime]
H --> L[Resolve Shared Object Dependencies]

I --> M[Custom UBI9 Container Images]
J --> M
K --> M
L --> M

M --> N[JupyterHub Deployment]

N --> O[Persistent Notebook Environments]
N --> P[Isolated User Workloads]
N --> Q[Notebook Execution]
N --> R[Notebook to Webpage Conversion]
\`\`\`

We primarily worked on isolated systems with a single internet-connected machine acting as the external acquisition point. Source code, Python packages, RPM dependencies, documentation, and build requirements were collected there first and then transferred internally into the air-gapped environment where the actual builds happened.

That workflow changes how you think about software almost immediately.

A simple \`pip install\` no longer feels lightweight. Every dependency introduces questions around compatibility, reproducibility, runtime behavior, and operational trust boundaries. The movement of artifacts itself becomes important because software no longer enters the environment invisibly.

---

## Trust Boundaries

*Figure: External internet sources feed an artifact acquisition machine; only approved artifacts cross the trust boundary into the air-gapped environment for source builds and controlled deployment.*

\`\`\`mermaid
flowchart TD

A[External Internet Sources] --> B[Artifact Acquisition Machine]

B --> C{Trust Boundary}

C -->|Approved Artifacts Only| D[Air-Gapped Environment]

D --> E[Source Builds]
D --> F[Dependency Resolution]
D --> G[Runtime Validation]
D --> H[Container Image Creation]

H --> I[Controlled Deployment]
\`\`\`

Over time, source builds started feeling easier to trust than binaries we did not fully understand.

Not because source builds are automatically safer, but because they exposed more of the system. Compilation steps became visible. Linked libraries became visible. Runtime incompatibilities became visible. Hidden assumptions became visible.

---

## Scientific Python Dependencies

Scientific Python ecosystems amplified this in ways I did not fully appreciate initially.

A large part of the environment depended on libraries like Astropy, Skyfield, and SunPy, along with geospatial tooling around GDAL and several native dependencies sitting underneath the Python layer. Much of this work lives in the same design space as the [interactive computing platform](/blog/interacitve-computing-environments) we built for open science workloads in India.

At first, the environment looked manageable. Most libraries installed normally until geospatial tooling entered the picture.

*Figure: Scientific Python packages depend on C/C++ extensions, Fortran libraries, compiler toolchains, and OS-level dependencies; each layer can introduce build failures in isolated environments.*

\`\`\`mermaid
flowchart LR

A[Python Application Layer] --> B[Scientific Python Packages]

B --> C[C / C++ Extensions]
C --> D[Fortran Dependencies]
D --> E[System Libraries]
E --> F[Compiler Toolchains]
F --> G[OS-Level Dependencies]

G --> H[YUM Repositories]
G --> I[Shared Object Files]
G --> J[Python ABI Compatibility]

J --> K[Build Failures]
I --> K
H --> K

K --> L[Operational Complexity]
\`\`\`

GDAL in particular became a recurring source of operational pain.

Sometimes a build would succeed on one system and fail silently inside another environment with an almost identical dependency graph. Other times the Python environment itself looked healthy while a missing \`.so\` dependency several layers below quietly broke runtime behavior. There were cases where the compiler version was technically compatible, but linked against libraries the isolated runtime environment could not properly resolve later.

A surprising amount of engineering time went into tracing dependency behavior rather than writing application code.

That experience changed how I thought about dependency trees entirely.

In normal internet-connected environments, package managers hide most dependency complexity behind a single command. Inside isolated systems, every dependency becomes visible at once. Native libraries, compiler toolchains, Python ABI compatibility, yum repositories, runtime linkages - everything surfaces eventually.

Dependency drift stopped feeling like maintenance overhead and started feeling more like operational uncertainty.

---

## Source Builds vs Prebuilt Binaries

*Figure: Prebuilt binaries hide build assumptions and linked libraries, reducing trust; source builds expose compilation steps and dependencies, increasing confidence.*

\`\`\`mermaid
flowchart TD

A[Prebuilt Binary] --> B[Hidden Build Assumptions]
A --> C[Unknown Linked Libraries]
A --> D[Opaque Dependency Chains]

E[Source Build] --> F[Visible Compilation Steps]
E --> G[Traceable Dependencies]
E --> H[Better Runtime Visibility]

B --> I[Reduced Trust]
C --> I
D --> I

F --> J[Higher Confidence]
G --> J
H --> J
\`\`\`

One practical decision we made fairly early was locking Python versions and building the environment around a controlled runtime combination. Initially it felt like operational convenience. Over time it became clear it was actually a way of reducing uncertainty inside an already fragile ecosystem.

Scientific stacks are difficult enough without uncontrolled upgrades introducing additional instability.

Keeping runtimes predictable reduced rebuild complexity, minimized subtle incompatibilities, and made debugging far more survivable in constrained environments where iteration cycles were naturally slower. That same instinct, designing for predictable failure modes rather than hoping workflows succeed, shows up in [building resilient workflows](/blog/partial-success) more broadly.

---

## Locked Runtimes and Reproducibility

*Figure: Locking Python versions and controlling the runtime reduces dependency drift, leading to deterministic builds and operational stability.*

\`\`\`mermaid
flowchart LR

A[Uncontrolled Upgrades] --> B[Dependency Drift]
B --> C[Runtime Instability]
C --> D[Difficult Debugging]

E[Locked Python Version] --> F[Controlled Runtime]
F --> G[Deterministic Builds]
G --> H[Reduced Variability]
H --> I[Operational Stability]
\`\`\`

The container layer mattered for similar reasons.

We built our custom images on top of UBI9 largely because it provided a stable and enterprise-grade base to build on. In environments where scientific dependencies were already complicated enough, reducing variability at the operating system layer improved reproducibility and long-term maintainability significantly.

What I find interesting now is how many modern supply-chain-security conversations revolve around operational realities that constrained systems naturally expose.

At the time, we were not implementing SBOM pipelines, signed artifacts, provenance frameworks, or attestation systems explicitly. But many of the underlying concerns were already present. Questions around dependency trust, deterministic environments, artifact control, and reproducibility emerged naturally once internet access stopped being treated as invisible infrastructure.

---

## Platform Engineering Under Constraints

Even developer experience started looking different under those constraints.

The goal was not only to secure infrastructure. Researchers still needed environments that were usable. We spent considerable effort building persistent notebook environments, reproducible Python setups, isolated workloads, and workflows like one-click notebook-to-webpage conversion because security constraints alone are not enough to make a platform useful.

*Figure: Security constraints shaped platform design: persistent notebooks, reproducible environments, isolated workloads, and self-service workflows together produced a usable scientific platform.*

\`\`\`mermaid
flowchart TD

A[Security Constraints] --> B[Developer Platform Design]

B --> C[Persistent Notebook Environments]
B --> D[Reproducible Python Environments]
B --> E[Isolated User Workloads]
B --> F[Self-Service Workflows]
B --> G[Notebook to Webpage Conversion]

C --> H[Usable Scientific Platform]
D --> H
E --> H
F --> H
G --> H
\`\`\`

That experience changed how I think about platform engineering more broadly.

Infrastructure systems are also trust systems. And trust is often shaped less by explicit security policy and more by operational design decisions quietly accumulating underneath developer workflows.

Looking back, I do not think air-gapped systems necessarily made development harder.

They simply made inherited trust assumptions impossible to ignore.

*Figure: Air-gapped constraints force visibility, which leads to understanding, controlled dependencies, deterministic systems, and operational trust.*

\`\`\`mermaid
flowchart LR

A[Visibility] --> B[Understanding]
B --> C[Controlled Dependencies]
C --> D[Deterministic Systems]
D --> E[Operational Trust]

F[Air-Gapped Constraints] --> A
\`\`\`

---

## Further Context

I also had the opportunity to speak publicly about parts of this infrastructure work and the JupyterHub ecosystem we built around constrained scientific workloads. Looking back, many of the operational concerns discussed there now feel closely connected to broader conversations around software trust, reproducibility, and infrastructure design.

[Watch my talk on building JupyterHub for air-gapped scientific workloads](https://www.youtube.com/live/NyQced4oJVM?t=9548s)
`,Jf=`---
title: From "Play My Workout Playlist" to a Real Android Tap Plan
date: 2026-06-16
tag: Tech
description: How a 3B-parameter model turns messy phone requests into replayable UI automation without shipping your life to a cloud API.
---

Built for the [Build Small Hackathon](https://huggingface.co/build-small-hackathon) Backyard AI track, sponsored by Modal. Also published on [Hugging Face](https://huggingface.co/blog/build-small-hackathon/android-skill-router).

## Introduction

How does a 3B-parameter model turn messy phone requests into replayable UI automation without shipping your life to a cloud API?

---

## The Problem with Phone Automation Today

You say: *"text mom on whatsapp i'm on my way."*

A voice assistant might reply with a web search, a generic "I can't do that," or a cloud API call that only works if WhatsApp cooperates. What you actually want is simpler and more direct: open WhatsApp, find Mom, type the message, send it.

That gap between **natural language** and **deterministic UI actions on a real device** is what **Android Skill Router** is built to close.

### Why cloud agents fall short for personal automation

Most phone automation today follows one of two paths:

| Approach | Strength | Weakness |
| --- | --- | --- |
| **Cloud voice assistants** | Understand broad language | Can't tap your apps; privacy concerns; needs network |
| **Macro/script tools** | Deterministic replay | Require exact trigger phrases; no natural language |
| **Vision-based agents** | Flexible | Slow, expensive, hallucinate UI coordinates |

Android Skill Router takes a third path: **a small local classifier that understands messy language, paired with pre-recorded UI trajectories that an accessibility runtime replays exactly.**

The core insight:

> You don't need a 70B frontier model to *do* the tapping. You need a 3B model to understand *what you mean*, then hand off to a fixed replay plan.

\`\`\`
"play my workout playlist"
    → spotify_play_playlist
    → trajectories/spotify_play_playlist.json
    → Pocket Automator replays taps on device
\`\`\`

This is the classifier layer of the **[Pocket Automator](https://github.com/kriyanshii/pocket-automator)** stack: record once on your phone, route forever with a tiny local model.

---

## The Architecture: Classify, Route, Replay

The system has three layers, each deliberately small and composable.

*Figure: Natural language prompts flow through a fine-tuned classifier into skill routing and trajectory replay.*

\`\`\`mermaid
flowchart LR
    A[Natural language prompt] --> B[Fine-tuned Qwen2.5-3B]
    B --> C["Structured intent\\n{skill, parameters}"]
    C --> D[Skill Router]
    D --> E[Trajectory JSON]
    E --> F[Pocket Automator replay]
\`\`\`

### Layer 1: Intent classifier

A fine-tuned **Qwen2.5-3B-Instruct** model receives a user prompt and returns structured JSON:

\`\`\`json
{
  "skill": "whatsapp_send_message",
  "parameters": {
    "contact": "mom",
    "message": "i'm on my way"
  }
}
\`\`\`

The model handles slang, typos, incomplete phrasing, and app disambiguation (WhatsApp vs Gmail vs Slack). It never invents UI steps. It only picks from 15 known skills and extracts parameter slots.

### Layer 2: Skill router

A deterministic lookup table maps skill names to trajectory files:

\`\`\`python
SKILL_TO_TRAJECTORY = {
    "whatsapp_send_message": "trajectories/whatsapp_send_message.json",
    "spotify_play_playlist": "trajectories/spotify_play_playlist.json",
    # ... 15 skills total
}
\`\`\`

If the model returns \`whatsapp_send_message\`, the router loads \`trajectories/whatsapp_send_message.json\`. No guessing, no hallucination. If the skill doesn't exist or the file is missing, the system fails loudly with a clear error.

The router also includes **defensive parsing**: skill aliases (\`send_whatsapp\` → \`whatsapp_send_message\`), JSON extraction from noisy model output, and keyword fallbacks when the model returns an unknown label.

### Layer 3: Trajectory replay

Each trajectory is a JSON file exported from **[Pocket Automator](https://github.com/kriyanshii/pocket-automator)**, an Android accessibility recorder. It contains:

- A **task description** (the original human intent)
- The **target app package** (\`com.whatsapp\`, \`com.spotify.music\`, etc.)
- A sequence of **steps**, each with a full UI tree snapshot and an action

Example step from a WhatsApp trajectory:

\`\`\`json
{
  "timestamp": 4024,
  "screen": { /* full accessibility tree */ },
  "action": {
    "type": "click",
    "resourceId": "com.motorola.launcher3:id/icon",
    "contentDescription": "WhatsApp",
    "path": [0, 0, 0, 0, 2, 0, 0]
  },
  "packageName": "com.motorola.launcher3"
}
\`\`\`

Action types include \`click\`, \`set_text\`, and scroll gestures. Pocket Automator resolves nodes at replay time using resource IDs, content descriptions, and tree paths, so minor UI changes don't break the flow.

### The separation of concerns

| Component | Responsibility | Can fail? |
| --- | --- | --- |
| Language model | Understand intent | Gracefully; fallbacks exist |
| Skill router | Map intent → file | Never; deterministic lookup |
| Trajectory | Store ground-truth UI steps | Never; fixed recording |
| Pocket Automator | Execute on device | Only if UI changed drastically |

This is the design bet: **language understanding is fuzzy; automation must be exact.**

---

## Recording UI Flows on Android

Every skill starts on hardware you own. No synthetic UI trees, no emulated taps, real recordings from a real Motorola device.

### Pocket Automator: the Android recorder

**[Pocket Automator](https://github.com/kriyanshii/pocket-automator)** is an Android accessibility app that:

1. **Records** taps, text input, and scrolls while you use any app
2. **Captures** the full accessibility tree at each step (node IDs, bounds, class names, text)
3. **Exports** recordings as JSON for training pipelines
4. **Replays** saved recordings with smart node resolution

Requirements: Android 10+ (API 29), accessibility service enabled, overlay permission.

### The recording workflow

1. Open Pocket Automator and tap **Record**
2. Name your task (e.g., "message hi to biraj on WhatsApp")
3. Perform the task naturally on your phone
4. Stop recording from the floating overlay
5. Export the JSON to your development machine
6. Place it in \`trajectories/\` and run \`scripts/generate_skill_dataset.py\`

The script reads each trajectory's \`task\` and \`app\` fields, derives a snake_case skill name, and writes \`data/skills.jsonl\`:

\`\`\`json
{"skill": "whatsapp_send_message", "task": "message hi to biraj on WhatsApp"}
{"skill": "spotify_play_playlist", "task": "play liked songs playlist from Spotify"}
{"skill": "create_alarm", "task": "create alarm for 7 am tomorrow"}
\`\`\`

Skill name derivation uses app package and task keywords, WhatsApp tasks become \`whatsapp_send_message\`, Spotify pause tasks become \`spotify_pause\`, and so on.

### The 15 skills

| Skill | App | Example task |
| --- | --- | --- |
| \`create_alarm\` | Clock | Set alarm for 7 am tomorrow |
| \`calendar_create_event\` | Calendar | Create event tomorrow 4 pm |
| \`wifi_enable\` | Settings | Enable Wi-Fi |
| \`bluetooth_enable\` | Settings | Turn on Bluetooth |
| \`whatsapp_send_message\` | WhatsApp | Message a contact |
| \`gmail_send_email\` | Gmail | Send email to recipient |
| \`slack_open_channel\` | Slack | Open a channel |
| \`spotify_play_playlist\` | Spotify | Play a playlist |
| \`spotify_search_play\` | Spotify | Search and play music |
| \`spotify_pause\` | Spotify | Pause playback |
| \`uber_request_ride\` | Uber | Request ride to destination |
| \`youtube_search\` | YouTube | Search for videos |
| \`linkedin_search_person\` | LinkedIn | Search for a person |
| \`contacts_search\` | Contacts | Find a contact |
| \`camera_take_photo\` | Camera | Take a picture |

Each trajectory file is large (often 5,000+ lines) because it includes the full accessibility tree at every step. That's intentional, replay engines need rich node metadata to resolve targets reliably.

### Why real recordings matter

Synthetic UI automation data is brittle. Real recordings capture:

- **Launcher states**: how your home screen looks with your app icons
- **Keyboard transitions**: when the soft keyboard appears during text input
- **Scroll positions**: where list items sit after scrolling
- **Timing**: natural pauses between actions

These details can't be generated. They're the ground truth that makes replay work on your specific device.

---

## Training a Tiny Classifier

The model is **[Qwen2.5-3B-Instruct](https://huggingface.co/Qwen/Qwen2.5-3B-Instruct)**: deliberately under 4B parameters for the Build Small Hackathon's *Tiny Titan* achievement.

### Why 3B is enough

The classification task is narrow:

- **15 skill labels** (not open-ended tool use)
- **Structured JSON output** (not free-form text)
- **Parameter slot-filling** (contact, message, time, not reasoning chains)

A 3B instruct model already understands apps, contacts, times, and natural language phrasing. Fine-tuning teaches it *your* skill taxonomy and output format, not general Android knowledge.

### Training configuration

Training runs on **Modal** GPUs via \`modal_apps/train_modal.py\`:

| Hyperparameter | Value |
| --- | --- |
| Base model | Qwen2.5-3B-Instruct |
| Method | 4-bit QLoRA + SFT (Unsloth) |
| LoRA rank | 32 |
| LoRA alpha | 32 |
| Target modules | q/k/v/o_proj, gate/up/down_proj |
| Epochs | 5 |
| Batch size | 8 |
| Learning rate | 2e-4 |
| Optimizer | AdamW 8-bit |
| Max sequence length | 2048 |
| GPU | Modal A10G |

The training pipeline:

1. Upload \`data/train_intent.jsonl\` to a Modal Volume
2. Load base model in 4-bit quantization
3. Apply QLoRA adapters to attention and MLP layers
4. Format examples with Qwen 2.5 chat template
5. Train with TRL's \`SFTTrainer\`
6. Save LoRA adapter to \`/model/adapter\`
7. Save merged 16-bit model to \`/model/merged\`

\`\`\`bash
python scripts/generate_intent_dataset.py
modal run modal_apps/train_modal.py --dataset train_intent.jsonl
modal volume get android-dataset-model adapter ./trained_model/adapter
\`\`\`

### V1 → V2: from labels to intents

**V1 (skill classification only)** mapped prompts to a skill name:

\`\`\`
"play my workout playlist" → {"skill": "spotify_play_playlist"}
\`\`\`

Training data: ~510 examples in \`data/train.jsonl\` (~30 variations per skill).

**V2 (structured intent extraction)** adds parameter slot-filling:

\`\`\`
"text mom on whatsapp i'm on my way"
→ {"skill": "whatsapp_send_message", "parameters": {"contact": "mom", "message": "i'm on my way"}}
\`\`\`

Training data: ~15,000 examples in \`data/train_intent.jsonl\` (~1,000 per skill).

### Parameter schemas

Each skill declares its parameters in \`data/skill_schemas.json\`:

\`\`\`json
{
  "whatsapp_send_message": {
    "description": "Send a WhatsApp message to a contact",
    "parameters": {
      "contact": {"type": "string", "required": true},
      "message": {"type": "string", "required": true}
    }
  },
  "create_alarm": {
    "description": "Set an alarm at a specific time",
    "parameters": {
      "time": {"type": "string", "required": true},
      "day": {"type": "string", "required": false}
    }
  },
  "wifi_enable": {
    "description": "Enable Wi-Fi on the device",
    "parameters": {}
  }
}
\`\`\`

Skills with no variable inputs (\`wifi_enable\`, \`bluetooth_enable\`, \`spotify_pause\`, \`camera_take_photo\`) return empty parameter objects.

### The system prompt

The model receives a tight, deterministic instruction:

\`\`\`
You extract structured Android automation intents from natural language.
Reply with JSON only: {"skill": "<skill_name>", "parameters": {<extracted_fields>}}.
Pick exactly one skill. Extract all relevant parameters mentioned in the request
(contact names, messages, times, destinations, channel names, search queries, etc.).
Use an empty object for parameters when the skill needs none.
Use the app or action named in the request (contacts, Gmail, Slack, YouTube, etc.)
to pick the correct skill.
\`\`\`

No chain-of-thought. No tool descriptions. No examples in the prompt. Just JSON.

### Training example format

Each row in \`train_intent.jsonl\` is a three-turn chat:

\`\`\`json
{
  "messages": [
    {"role": "system", "content": "You extract structured Android automation intents..."},
    {"role": "user", "content": "whatsapp message Vikram see you tonight"},
    {"role": "assistant", "content": "{\\"skill\\":\\"whatsapp_send_message\\",\\"parameters\\":{\\"contact\\":\\"Vikram\\",\\"message\\":\\"see you tonight\\"}}"}
  ]
}
\`\`\`

The assistant always responds with compact JSON, no markdown fences, no explanation.

---

## Synthetic Data at Scale

Fifteen real trajectories can't train a robust classifier alone. The project generates **~15,000 synthetic SFT examples** locally via \`scripts/generate_intent_dataset.py\`.

### How data generation works

The generator follows a four-step pipeline:

\`\`\`
skill_schemas.json + skills.jsonl
        ↓
   Entity pools (contacts, messages, times, destinations...)
        ↓
   Template variations (24+ templates per skill)
        ↓
   train_intent.jsonl (~1000 examples/skill)
   eval_intent_prompts.json (~6 held-out prompts/skill)
\`\`\`

### Entity pools

Realistic but synthetic entities ensure diversity without privacy concerns:

| Pool | Examples |
| --- | --- |
| **Contacts** | Ri, Biraj, Mom, Parag Shah, grandma, my roommate |
| **Messages** | "see you soon", "running late", "project update attached" |
| **Alarm times** | 5 am, 6:30 am, 7 am, noon, 10 pm |
| **Alarm days** | today, tomorrow, monday, next friday |
| **Destinations** | airport, train station, home, office |
| **Playlists** | workout, liked songs, chill vibes, focus |
| **Channels** | engineering, general, data contributors |
| **Search queries** | pasta recipes, jazz music, ghibli food |

### Template variations

Each skill has 15–30 prompt templates with placeholder slots:

**WhatsApp templates:**
\`\`\`
"message {message} to {contact} on whatsapp"
"text {contact} {message} on whatsapp"
"whatsapp {contact} saying {message}"
"ping {contact} on whatsapp with {message}"
\`\`\`

**Alarm templates:**
\`\`\`
"create alarm for {time} {day}"
"wake me up at {time} {day}"
"set a {time} alarm for {day}"
"{time} alarm {day} please"
\`\`\`

**Uber templates:**
\`\`\`
"get an uber to {destination}"
"uber me to {destination}"
"book a cab to {destination} via uber"
\`\`\`

Templates are crossed with random entity samples to produce unique training pairs. The same intent can appear as:

- "set an alarm for 7 am tomorrow"
- "wake me up at seven tomorrow morning"
- "7am alarm pls"
- "please alarm 7 am tomorrow thanks"

### V1 training data (skill-only)

The earlier \`scripts/generate_training_data.py\` produces ~510 examples for V1 classification:

- 30 variations per skill from \`skills.jsonl\` task descriptions
- Guaranteed inclusion of Gradio demo prompts
- Regex-based parsing of task strings to derive alarm times, contacts, etc.

### Held-out evaluation sets

Two evaluation sets prevent overfitting to templates:

| File | Size | Purpose |
| --- | --- | --- |
| \`data/eval_intent_prompts.json\` | ~90 prompts | Structured eval during training |
| \`data/pocket_benchmark_prompts.json\` | 200 prompts | Real-world messy language benchmark |

The Pocket Automator benchmark is intentionally unlike training data, slang, typos, incomplete phrasing, conversational filler:

\`\`\`
"yo set an alrm for like 5:45 tmrw morning pls"
"need to b up at 6ish on monday ngl"
"hit up zoe on whatsapp say im omw"
"wa msg marcus 'running 20 min late'"
"lowkey need 11:11 pm alarm tonight"
"deadass need alarm sunday noon"
\`\`\`

Each benchmark case is tagged with \`domain\` (alarms, whatsapp, spotify...) and \`styles\` (slang, typo, incomplete, conversational). Prompts are filtered against training data to ensure zero overlap.

---

## Deployment and Demo

### Modal inference API

Training and inference both run on **Modal**: serverless GPU infrastructure with persistent volumes.

\`modal_apps/predict_api.py\` deploys a FastAPI endpoint:

\`\`\`bash
modal deploy modal_apps/predict_api.py
# → https://<workspace>--android-skill-predict-api-skillpredictor-web.modal.run
\`\`\`

Architecture:

- **Container class** \`SkillPredictor\` loads the QLoRA model once via \`@modal.enter()\`
- **4-bit quantized** base model + LoRA adapter from Modal Volume
- **Greedy decoding** (\`do_sample=False\`) for deterministic JSON output
- **128 max new tokens**: enough for any intent JSON
- **5-minute scale-down window**: containers stay warm between requests

Request/response:

\`\`\`bash
curl -X POST https://.../predict \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "text mom on whatsapp i am on my way"}'
\`\`\`

\`\`\`json
{
  "skill": "whatsapp_send_message",
  "parameters": {
    "contact": "mom",
    "message": "i am on my way"
  }
}
\`\`\`

The API applies the same post-processing as local evaluation: JSON extraction, skill normalization, alias resolution, and keyword fallbacks.

### Gradio demo

The **Gradio demo** (\`app.py\`) is the hackathon submission UI, hosted on Hugging Face Spaces.

Flow:

1. User types a natural language prompt (or picks an example)
2. App POSTs to Modal \`/predict\` endpoint
3. Response is parsed: skill label, parameter tiles, confidence display
4. Skill router loads the matching trajectory from \`trajectories/\`
5. UI shows task description, app package, step count, and trajectory preview

Example prompts built into the demo:

- "play my workout playlist"
- "turn bluetooth on"
- "wake me up tomorrow morning"
- "send ri a message on whatsapp"
- "book an uber to the airport"

The Space doesn't ship model weights, inference stays on Modal. Only a \`MODAL_PREDICT_URL\` secret is needed.

### Local development

Three commands to run everything locally:

\`\`\`bash
# 1. Generate training data
python scripts/generate_intent_dataset.py

# 2. Train on Modal GPU
modal run modal_apps/train_modal.py --dataset train_intent.jsonl

# 3. Deploy inference + run demo
modal deploy modal_apps/predict_api.py
export MODAL_PREDICT_URL="https://..."
python app.py
\`\`\`

Evaluation can run locally on CPU/MPS if you download the adapter:

\`\`\`bash
modal volume get android-dataset-model adapter ./trained_model/adapter
python -m src.evaluate_intent
\`\`\`

---

## Evaluation

### Metrics

Three metrics capture different levels of correctness:

| Metric | Definition | What it measures |
| --- | --- | --- |
| **Skill accuracy** | Predicted skill matches expected | App/action disambiguation |
| **Parameter accuracy** | All expected parameters match (normalized) | Slot-filling quality |
| **Exact JSON match** | Skill + all parameters match exactly | End-to-end correctness |

Parameter matching uses normalized lowercase comparison, \`"Mom"\` matches \`"mom"\`, extra whitespace is stripped.

### Pocket Automator benchmark results

Evaluation on **200 held-out prompts** with slang, typos, and conversational phrasing:

| Metric | Score |
| --- | --- |
| **Skill accuracy** | 99.0% |
| **Parameter accuracy** | 86.0% |
| **Exact JSON match** | 85.5% |

The model almost never picks the wrong app or action. Parameter extraction is harder, preserving informal time expressions like \`"6ish"\` vs normalizing to \`"6 am"\`, but 86% is strong for a 3B model with no cloud fallback.

### Where errors happen

Parameter failures tend to cluster around:

- **Informal time expressions**: "6ish on monday" vs \`"time": "6 am", "day": "monday"\`
- **Abbreviated days**: "tmrw" vs "tomorrow morning"
- **Message truncation**: model drops filler words the benchmark expects verbatim
- **Contact nicknames**: "roomie" vs a full name

Skill errors (1%) mostly involve near-miss disambiguation, Spotify search-and-play vs play-playlist when the prompt is ambiguous.

### Evaluation commands

\`\`\`bash
# On Modal GPU
modal run modal_apps/evaluate_intent_modal.py
modal run modal_apps/evaluate_pocket_benchmark_modal.py

# Locally
python -m src.evaluate_intent
python -m src.evaluate_pocket_benchmark
\`\`\`

The pocket benchmark runner produces a confusion matrix, per-domain breakdown, and a failure report saved to \`data/pocket_benchmark_report.txt\`.

---

## Why This Approach Works

### 1. Local-first, privacy-preserving

A 3B model can run on-device (via llama.cpp, MLC, or similar) or on a small GPU. Your "text mom I'm running late" never needs to hit a frontier API. The entire inference stack fits in ~2GB of VRAM with 4-bit quantization.

### 2. Deterministic replay, not hallucinated taps

The model outputs a skill label and parameters. The trajectory is a fixed file recorded on a real device. No invented button coordinates, no drift between runs. If the model says \`whatsapp_send_message\`, you get the exact same tap sequence every time.

This is fundamentally different from vision-based agents that re-locate UI elements on every run and can click the wrong thing.

### 3. Cheap to extend

Adding a new skill is a repeatable pipeline:

1. Record one trajectory with Pocket Automator
2. Add parameter schema to \`data/skill_schemas.json\`
3. Add skill mapping to \`src/skill_router.py\`
4. Regenerate training data: \`python scripts/generate_intent_dataset.py\`
5. Fine-tune: \`modal run modal_apps/train_modal.py --dataset train_intent.jsonl\`

No prompt engineering session. No re-architecting the model. Just more data and another training run.

### 4. Separation of concerns

| Component | Responsibility | Swappable? |
| --- | --- | --- |
| Language model | Understand intent | Yes; any 3B instruct model |
| Skill router | Map intent → file | Yes; add skills without retraining |
| Pocket Automator | Execute UI steps | Yes; any accessibility replay engine |
| Trajectory JSON | Store ground truth | Yes; re-record when UI changes |

Each piece can be improved independently. Better model? Swap the adapter. UI changed? Re-record one trajectory. New app? Add a skill.

### 5. Designed for the "backyard"

This project targets **personal automation on hardware you own**: the Backyard AI track. It's not trying to automate every Android app in existence. It's trying to automate *your* apps, *your* flows, *your* phrasing, with a model small enough to run locally.

---

## What's Next

### The current gap

V2 extracts parameters at inference time:

\`\`\`
"text mom on whatsapp i'm on my way"
→ {"contact": "mom", "message": "i'm on my way"}
\`\`\`

But trajectories are still recorded with **fixed entities**: the WhatsApp trajectory says "message hi to biraj" and the \`set_text\` actions contain \`"hi"\` and \`"biraj"\`. Replay uses those literal values, not the extracted parameters.

### The planned solution

**Slot-filling at replay time**: when the model returns \`{"contact": "mom", "message": "i'm on my way"}\`, the replay engine:

1. Identifies parameterizable steps in the trajectory (text input actions)
2. Substitutes extracted values into \`set_text\` actions
3. Uses smart node resolution to find the contact field, search box, etc.

This closes the loop:

\`\`\`
Natural language → structured intent → parameterized replay on any device
\`\`\`

The trajectory becomes a **template** rather than a fixed recording. Record once with placeholder entities, replay with any contact, message, time, or destination.

### Other future work

- **On-device inference**: run the 3B model locally without Modal
- **More skills**: maps, photos, settings toggles, banking apps
- **Multi-step intents**: "set alarm and text mom I'll be late"
- **Confidence calibration**: know when to ask the user for clarification
- **UI change detection**: alert when a trajectory needs re-recording

---

## Links

### Links

| Resource | URL |
| --- | --- |
| **Blog post** | [Hugging Face Blog; Android Skill Router](https://huggingface.co/blog/build-small-hackathon/android-skill-router) |
| **Live demo** | [android-skill-router on Hugging Face Spaces](https://huggingface.co/spaces/build-small-hackathon/android-skill-router) |
| **Demo video** | [YouTube Short](https://youtube.com/shorts/IQRHf7HfTDA) |
| **Pocket Automator** | [GitHub: Android recorder and replay](https://github.com/kriyanshii/pocket-automator) |
| **Social post** | [Twitter/X](https://x.com/kriyanshii/status/2066587828839141634) |

### Quick start

\`\`\`bash
git clone https://github.com/kriyanshii/android-dataset.git
cd android-dataset

# Generate intent training data
python scripts/generate_intent_dataset.py

# Train on Modal (requires modal setup)
pip install modal && modal setup
modal run modal_apps/train_modal.py --dataset train_intent.jsonl

# Deploy inference API
modal deploy modal_apps/predict_api.py

# Run Gradio demo
pip install -r requirements.txt
export MODAL_PREDICT_URL="https://<your-modal-url>/predict"
python app.py
\`\`\`

### Project layout

\`\`\`
app.py                      # Gradio demo (hackathon submission UI)
data/
  skill_schemas.json        # Parameter definitions per skill
  skills.jsonl              # Canonical skill ↔ task mapping
  train_intent.jsonl        # ~15k SFT examples (generated locally)
  eval_intent_prompts.json  # Held-out intent eval set
  pocket_benchmark_prompts.json  # 200 real-world messy prompts
src/
  skill_router.py           # Skill name → trajectory JSON
  skill_utils.py              # JSON parsing, aliases, fallbacks
  classifier_prompt.py        # System prompts for V1 and V2
  evaluate_intent.py          # Local evaluation
  pocket_benchmark.py         # Benchmark metrics and reports
modal_apps/
  train_modal.py              # QLoRA fine-tuning on Modal GPU
  predict_api.py              # FastAPI inference endpoint
  evaluate_intent_modal.py    # GPU evaluation
  evaluate_pocket_benchmark_modal.py
scripts/
  generate_skill_dataset.py   # trajectories → skills.jsonl
  generate_intent_dataset.py  # schemas → train_intent.jsonl
  generate_pocket_benchmark.py
trajectories/                 # Pocket Automator exports (15 skills)
\`\`\`

---

## Summary

**Android Skill Router** shows that personal phone automation doesn't require a 70B agent in the cloud.

1. **Record** UI flows once on your Android device with Pocket Automator
2. **Fine-tune** a 3B model to understand how you actually talk (slang, typos, and all)
3. **Route** to deterministic trajectories, no hallucinated taps
4. **Replay** through accessibility APIs on real hardware

Classify → route → replay. Small model, real hardware, backyard-scale AI that actually does something useful.

---

*Apache 2.0. Base model weights subject to [Qwen license](https://huggingface.co/Qwen/Qwen2.5-3B-Instruct).*
`,Zf=`---
title: Using SSH Executor in Dagu
date: 2025-11-02
tag: Tech
description: A Complete Guide
---

# Using SSH Executor in Dagu

Dagu is a powerful workflow engine that allows you to execute commands on remote servers using SSH. This capability is essential for tasks like remote deployments, server management, database backups, and distributed computing. In this comprehensive guide, we'll explore how to leverage Dagu's SSH executor to run commands securely on remote hosts.

> **Note**: This guide is based on the current version of Dagu as of the latest release. Features and syntax may have evolved since earlier versions.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Understanding SSH Executor](#understanding-ssh-executor)
3. [Basic SSH Configuration](#basic-ssh-configuration)
4. [DAG-Level vs Step-Level Configuration](#dag-level-vs-step-level-configuration)
5. [Authentication Methods](#authentication-methods)
6. [Real-World Examples](#real-world-examples)
7. [Security Best Practices](#security-best-practices)
8. [Common Patterns](#common-patterns)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

Before diving into SSH execution, ensure you have:

- **Dagu Installed**: If you haven't installed Dagu yet, follow the [official installation guide](https://docs.dagu.cloud/getting-started/installation).
- **SSH Access**: Valid SSH access to remote servers with appropriate credentials.
- **SSH Keys**: A properly configured SSH key pair (recommended) or password authentication.

## Understanding SSH Executor

The SSH executor in Dagu allows you to execute commands on remote machines over SSH connections. It provides a seamless way to integrate remote operations into your workflows without leaving your local Dagu instance.

### How It Works

1. Dagu establishes an SSH connection to the remote host using the provided credentials
2. Commands are executed in a dedicated SSH session
3. Output (stdout/stderr) is captured and streamed back
4. The session is automatically cleaned up after command completion

## Basic SSH Configuration

At its simplest, SSH execution in Dagu requires just two fields: \`user\` and \`host\`. All other settings have sensible defaults.

\`\`\`yaml
ssh:
  user: deploy
  host: server.example.com

steps:
  - echo "Hello from remote server"
\`\`\`

This configuration will:
- Connect to \`server.example.com\` as user \`deploy\`
- Use port 22 (default SSH port)
- Try standard SSH keys from \`~/.ssh/id_rsa\`, \`~/.ssh/id_ecdsa\`, \`~/.ssh/id_ed25519\`, or \`~/.ssh/id_dsa\`

### Complete Configuration Example

Here's a full SSH configuration with all available options:

\`\`\`yaml
ssh:
  user: deploy                    # SSH username (required)
  host: server.example.com        # Hostname or IP (required)
  port: 2222                      # SSH port (default: 22)
  key: ~/.ssh/custom_deploy_key   # Path to private key (optional)
  password: mySecurePass          # Password (optional, not recommended)
  strictHostKey: true             # Host key verification (default: true)
  knownHostFile: ~/.ssh/known_hosts  # Known hosts file (default: ~/.ssh/known_hosts)

steps:
  - echo "Running on remote server"
\`\`\`

### Configuration Options Explained

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| \`user\` | Yes | - | SSH username for authentication |
| \`host\` or \`ip\` | Yes | - | Hostname or IP address of the remote server (both field names are supported) |
| \`port\` | No | \`22\` | SSH port number |
| \`key\` | No | Auto-detect | Path to SSH private key file |
| \`password\` | No | - | SSH password (key-based auth is recommended) |
| \`strictHostKey\` | No | \`true\` | Enable strict host key checking |
| \`knownHostFile\` | No | \`~/.ssh/known_hosts\` | Path to known_hosts file |



## DAG-Level vs Step-Level Configuration

Dagu provides flexibility in configuring SSH settings. You can define SSH configuration at two levels:

### 1. DAG-Level Configuration (Shared)

When you define SSH configuration at the DAG level, all steps inherit the same connection. This is perfect when all steps run on the same server.

\`\`\`yaml
# All steps will execute on the same remote server
ssh:
  user: deploy
  host: production.server.com
  key: ~/.ssh/production_key

steps:
  - name: backup-database
    command: pg_dump mydb > backup.sql
  
  - name: deploy-application
    command: |
      git pull origin main
      sudo systemctl restart myapp
  
  - name: verify-deployment
    command: curl http://localhost:8080/health
\`\`\`

### 2. Step-Level Configuration (Individual)

You can override SSH configuration for specific steps when you need to connect to different servers within the same workflow.

\`\`\`yaml
# Default configuration for most steps
ssh:
  user: deploy
  host: app-server.com
  key: ~/.ssh/app_key

steps:
  # Uses DAG-level configuration
  - name: deploy-app
    command: ./deploy.sh
  
  # Overrides SSH for this specific step
  - name: sync-backup
    command: rsync -av /backup backup-server:/archive/
    executor:
      type: ssh
      config:
        user: backup-admin
        ip: backup-server.com  # 'ip' or 'host' both work
        port: 2222
        key: ~/.ssh/backup_key
  
  # Back to using DAG-level configuration
  - name: send-notification
    command: curl -X POST http://webhook.example.com/notify
\`\`\`

### Inheritance Pattern

The SSH executor follows this priority order:

1. **Step-level executor config** (highest priority)
2. **DAG-level SSH configuration** (fallback)
3. **Error if neither is configured**

\`\`\`yaml
ssh:
  user: common-user
  host: common-host.com
  key: ~/.ssh/common_key

steps:
  - name: step1
    # Uses DAG-level: common-user@common-host.com
    command: echo "Step 1"
  
  - name: step2
    # Uses step-level override: special-user@special-host.com
    executor:
      type: ssh
      config:
        user: special-user
        host: special-host.com
        key: ~/.ssh/special_key
    command: echo "Step 2"
\`\`\`

## Authentication Methods

Dagu supports multiple authentication methods for SSH connections.

### 1. Key-Based Authentication (Recommended)

Key-based authentication is the most secure and recommended method.

\`\`\`yaml
ssh:
  user: deploy
  host: server.example.com
  key: ~/.ssh/id_rsa

steps:
  - command: echo "Authenticated with key"
\`\`\`

#### Auto-Detection

If you don't specify a key, Dagu will automatically try these locations in order:

1. \`~/.ssh/id_rsa\`
2. \`~/.ssh/id_ecdsa\`
3. \`~/.ssh/id_ed25519\`
4. \`~/.ssh/id_dsa\`

\`\`\`yaml
# This will automatically use one of the default keys if available
ssh:
  user: deploy
  host: server.example.com
  # No key specified - uses auto-detection

steps:
  - command: echo "Using auto-detected key"
\`\`\`

### 2. Password Authentication

Password authentication is supported but not recommended for security reasons.

\`\`\`yaml
ssh:
  user: deploy
  host: server.example.com
  password: mySecurePassword

steps:
  - command: echo "Authenticated with password"
\`\`\`

**⚠️ Security Warning**: Passwords in YAML files are visible in plain text. Consider using environment variables for sensitive credentials.

#### Using Environment Variables

\`\`\`yaml
ssh:
  user: deploy
  host: server.example.com
  password: \${SSH_PASSWORD}

steps:
  - command: echo "Using password from environment"
\`\`\`

Then set the environment variable:

\`\`\`bash
export SSH_PASSWORD="your-secure-password"
dagu start my-workflow.yaml
\`\`\`

### 3. Mixed Authentication

You can also use a specific key with an optional passphrase (handled by SSH agent):

\`\`\`yaml
ssh:
  user: deploy
  host: server.example.com
  key: ~/.ssh/encrypted_key

steps:
  - command: echo "Using key with passphrase"
\`\`\`

Make sure your SSH agent is running if using encrypted keys:

\`\`\`bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/encrypted_key
\`\`\`

## Real-World Examples

### Example 1: Database Backup and Archive

Automate database backups with remote storage archival.

\`\`\`yaml
name: Database Backup Workflow
schedule: "0 2 * * *"  # Daily at 2 AM

ssh:
  user: db-admin
  host: db-server.production.com
  key: ~/.ssh/db_key
  strictHostKey: true

steps:
  - name: create-backup
    command: |
      pg_dump -U postgres production_db | gzip > /backups/prod_$(date +%Y%m%d).sql.gz
  
  - name: transfer-to-archive
    command: |
      aws s3 cp /backups/prod_$(date +%Y%m%d).sql.gz \\
        s3://backup-archive/production/
  
  - name: cleanup-old-backups
    command: |
      find /backups -name "prod_*.sql.gz" -mtime +30 -delete
      echo "Old backups cleaned up"
\`\`\`

### Example 2: Multi-Server Deployment

Deploy to multiple servers with verification.

\`\`\`yaml
name: Multi-Stack Deployment

# Primary application server
ssh:
  user: deploy
  host: app.production.com
  key: ~/.ssh/production_key

steps:
  - name: deploy-frontend
    command: |
      cd /var/www/frontend
      git pull origin main
      npm run build
      sudo systemctl restart nginx
  
  - name: deploy-backend
    # Can also use backend.server.com with same credentials
    command: |
      cd /var/www/backend
      git pull origin main
      docker-compose up -d --build
  
  - name: update-database
    # Different server, different configuration
    executor:
      type: ssh
      config:
        user: db-admin
        host: db.production.com
        key: ~/.ssh/db_admin_key
    command: |
      psql -U postgres -d production << EOF
        \\i /opt/migrations/latest.sql
        SELECT 'Migration complete';
      EOF
  
  - name: health-check
    # Back to primary server
    command: |
      curl -f http://localhost:8080/health || exit 1
      echo "All services healthy"
\`\`\`

### Example 3: Parallel Remote Operations

Execute operations in parallel across multiple servers.

\`\`\`yaml
name: Parallel Server Maintenance

steps:
  - name: maintenance-start
    command: echo "Starting maintenance across all servers"
  
  - name: update-app-server-1
    executor:
      type: ssh
      config:
        user: admin
        host: app1.example.com
        key: ~/.ssh/admin_key
    command: |
      sudo apt update && sudo apt upgrade -y
      sudo systemctl restart app
  
  - name: update-app-server-2
    executor:
      type: ssh
      config:
        user: admin
        host: app2.example.com
        key: ~/.ssh/admin_key
    command: |
      sudo apt update && sudo apt upgrade -y
      sudo systemctl restart app
  
  - name: update-app-server-3
    executor:
      type: ssh
      config:
        user: admin
        host: app3.example.com
        key: ~/.ssh/admin_key
    command: |
      sudo apt update && sudo apt upgrade -y
      sudo systemctl restart app
  
  # These three steps run in parallel
  - name: verify-services
    command: echo "All maintenance complete"
    depends:
      - update-app-server-1
      - update-app-server-2
      - update-app-server-3
\`\`\`

### Example 4: CI/CD Integration

Integrate SSH execution into your CI/CD pipeline.

\`\`\`yaml
name: Deploy to Staging

env:
  - APP_VERSION: \${version}

ssh:
  user: \${SSH_USER}
  host: \${SSH_HOST}
  key: \${SSH_KEY_PATH}
  strictHostKey: false  # For dynamic/test environments

steps:
  - name: pull-latest-code
    command: |
      cd /opt/myapp
      git fetch origin
      git checkout \${APP_VERSION}
  
  - name: build-and-deploy
    command: |
      docker-compose down
      docker-compose build
      docker-compose up -d
  
  - name: run-migrations
    command: |
      docker-compose exec -T app npm run migrate
  
  - name: run-tests
    command: |
      docker-compose exec -T app npm test
  
  - name: notify-success
    command: |
      curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \\
        -d '{"text":"Deployment successful!"}'
  
  onExit:
    - name: notify-failure
      if: \${DAGU_ERR}
      command: |
        curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \\
          -d '{"text":"Deployment failed: \${DAGU_ERR}"}'
\`\`\`

### Example 5: Data Processing Pipeline

Move and process data across servers.

\`\`\`yaml
name: Data Processing Pipeline

steps:
  - name: collect-logs
    executor:
      type: ssh
      config:
        user: logger
        host: log-collector.com
        key: ~/.ssh/logger_key
    command: |
      tar -czf /tmp/logs_$(date +%Y%m%d).tar.gz /var/log/app
      mv /tmp/logs_*.tar.gz /shared/logs/
  
  - name: process-logs
    executor:
      type: ssh
      config:
        user: processor
        host: analytics-server.com
        key: ~/.ssh/processor_key
    command: |
      cd /opt/analytics
      ./process_logs.sh /shared/logs/*.tar.gz
      python3 generate_report.py
  
  - name: archive-results
    executor:
      type: ssh
      config:
        user: archiver
        host: storage-server.com
        key: ~/.ssh/storage_key
    command: |
      aws s3 sync /opt/analytics/reports/ \\
        s3://analytics-archive/$(date +%Y)/$(date +%m)/
\`\`\`

## Security Best Practices

### 1. Use Key-Based Authentication

Always prefer SSH keys over passwords:

\`\`\`yaml
# Good ✅
ssh:
  user: deploy
  host: server.example.com
  key: ~/.ssh/id_rsa

# Avoid ❌
ssh:
  user: deploy
  host: server.example.com
  password: plaintext-password
\`\`\`

### 2. Enable Host Key Verification

Keep strict host key checking enabled (it's the default):

\`\`\`yaml
# Good ✅ - Default behavior
ssh:
  user: deploy
  host: server.example.com
  strictHostKey: true  # Explicit for clarity

# Only for development/testing ❌
ssh:
  user: deploy
  host: test-server.local
  strictHostKey: false
\`\`\`

### 3. Use Environment Variables for Secrets

Never hardcode credentials in YAML files:

\`\`\`yaml
# Good ✅
ssh:
  user: \${SSH_USER}
  host: \${SSH_HOST}
  key: \${SSH_KEY_PATH}

# Bad ❌
ssh:
  user: myusername
  host: myserver.com
  password: mypassword123
\`\`\`

### 4. Restrict SSH Key Permissions

Ensure your SSH private keys have correct permissions:

\`\`\`bash
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
\`\`\`

### 5. Use Dedicated Deployment Keys

Create separate SSH keys for deployments:

\`\`\`bash
ssh-keygen -t ed25519 -f ~/.ssh/deploy_key -C "dagu-deployment"
\`\`\`

Then reference them in your workflows:

\`\`\`yaml
ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key
\`\`\`

### 6. Rotate Keys Regularly

Periodically rotate SSH keys and update configurations:

\`\`\`yaml
# Version your keys
ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key_v2
\`\`\`

### 7. Use SSH Config for Consistency

Create an SSH config file for reusable configurations:

\`\`\`bash
# ~/.ssh/config
Host production
  HostName production.example.com
  User deploy
  IdentityFile ~/.ssh/deploy_key
  Port 2222

Host staging
  HostName staging.example.com
  User deploy
  IdentityFile ~/.ssh/deploy_key
\`\`\`

Then reference in Dagu (if your SSH client supports it):

\`\`\`yaml
# Note: Dagu uses direct SSH connections, 
# but you can still reference the host alias
ssh:
  user: deploy
  host: production
  key: ~/.ssh/deploy_key
\`\`\`

## Common Patterns

### Pattern 1: Fail-Safe Remote Operations

Add error handling and rollback capabilities:

\`\`\`yaml
name: Safe Deployment

ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key

steps:
  - name: pre-deployment-check
    command: |
      test -f /opt/app/backup.tar.gz || exit 1
      echo "Pre-deployment check passed"
  
  - name: create-backup
    command: tar -czf /tmp/app_backup_$(date +%s).tar.gz /opt/app/
  
  - name: deployment
    command: |
      cd /opt/app
      git pull origin main
  
  - name: verification
    command: |
      curl -f http://localhost:8080/health || {
        echo "Health check failed, rolling back..."
        exit 1
      }
  
  onExit:
    - name: rollback
      if: \${DAGU_ERR}
      command: |
        LATEST_BACKUP=$(ls -t /tmp/app_backup_*.tar.gz | head -1)
        tar -xzf "$LATEST_BACKUP" -C /
        sudo systemctl restart app
        echo "Rolled back to backup: $LATEST_BACKUP"
\`\`\`

### Pattern 2: Blue-Green Deployment

Implement zero-downtime deployments:

\`\`\`yaml
name: Blue-Green Deployment

ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key

steps:
  - name: deploy-green
    command: |
      cd /opt/app-green
      git pull origin main
      docker-compose up -d --build
  
  - name: health-check-green
    command: |
      for i in {1..10}; do
        curl -f http://green.example.com/health && break
        sleep 5
      done || exit 1
  
  - name: switch-traffic
    command: |
      # Update load balancer to point to green
      kubectl patch service app -p '{"spec":{"selector":{"version":"green"}}}'
  
  - name: health-check-blue
    command: |
      sleep 60  # Wait for connections to drain
      for i in {1..10}; do
        curl -f http://blue.example.com/metrics || exit 0
      done
  
  - name: scale-down-blue
    command: |
      kubectl scale deployment app-blue --replicas=0
\`\`\`

### Pattern 3: Conditional Remote Execution

Use environment detection for different targets:

\`\`\`yaml
name: Environment-Aware Deployment

env:
  - ENVIRONMENT: \${environment:-staging}

ssh:
  user: deploy
  host: \${HOST}
  key: ~/.ssh/deploy_key

steps:
  - name: detect-environment
    command: |
      if [ "\${ENVIRONMENT}" == "production" ]; then
        HOST="prod.example.com"
      elif [ "\${ENVIRONMENT}" == "staging" ]; then
        HOST="staging.example.com"
      else
        HOST="dev.example.com"
      fi
      echo "Deploying to: $HOST"
  
  - name: deploy-to-environment
    command: |
      cd /opt/app
      git checkout \${ENVIRONMENT}
      ./deploy.sh
\`\`\`

### Pattern 4: Batch Operations

Execute the same operation across multiple targets:

\`\`\`yaml
name: Batch Server Update

steps:
  - name: update-server-01
    executor:
      type: ssh
      config:
        user: admin
        host: server-01.cluster.internal
        key: ~/.ssh/cluster_key
    command: sudo apt update && sudo apt upgrade -y
  
  - name: update-server-02
    executor:
      type: ssh
      config:
        user: admin
        host: server-02.cluster.internal
        key: ~/.ssh/cluster_key
    command: sudo apt update && sudo apt upgrade -y
  
  - name: update-server-03
    executor:
      type: ssh
      config:
        user: admin
        host: server-03.cluster.internal
        key: ~/.ssh/cluster_key
    command: sudo apt update && sudo apt upgrade -y
  
  - name: verify-cluster
    command: echo "All servers updated"
    depends:
      - update-server-01
      - update-server-02
      - update-server-03
\`\`\`

## Troubleshooting

### Common Issues and Solutions

#### 1. "SSH configuration is not found"

This error occurs when neither DAG-level nor step-level SSH configuration is provided.

**Solution**: Add SSH configuration either at DAG level or step level:

\`\`\`yaml
# Option 1: DAG level
ssh:
  user: deploy
  host: server.example.com

steps:
  - command: echo "This works now"
\`\`\`

\`\`\`yaml
# Option 2: Step level
steps:
  - command: echo "This works now"
    executor:
      type: ssh
      config:
        user: deploy
        host: server.example.com
\`\`\`

#### 2. "No authentication method available"

This happens when no SSH key or password is provided.

**Solutions**:

- Specify a key explicitly:
  \`\`\`yaml
  ssh:
    user: deploy
    host: server.example.com
    key: ~/.ssh/id_rsa
  \`\`\`

- Ensure default keys exist:
  \`\`\`bash
  ls ~/.ssh/id_rsa ~/.ssh/id_ed25519 ~/.ssh/id_ecdsa
  \`\`\`

- Use password (not recommended):
  \`\`\`yaml
  ssh:
    user: deploy
    host: server.example.com
    password: \${SSH_PASSWORD}
  \`\`\`

#### 3. Host Key Verification Failure

SSH refuses to connect due to host key mismatch.

**Solutions**:

- **Production**: Verify the host key is correct:
  \`\`\`bash
  ssh-keyscan server.example.com >> ~/.ssh/known_hosts
  \`\`\`

- **Development**: Disable strict checking (not recommended for production):
  \`\`\`yaml
  ssh:
    user: deploy
    host: server.example.com
    strictHostKey: false
  \`\`\`

#### 4. Permission Denied

SSH authentication fails.

**Checklist**:

- Verify username is correct
- Ensure SSH key has correct permissions (600)
- Test SSH connection manually:
  \`\`\`bash
  ssh -i ~/.ssh/id_rsa user@server.example.com
  \`\`\`
- Check if the key is added to authorized_keys on remote server

#### 5. Connection Timeout

Cannot establish SSH connection.

**Checklist**:

- Verify host/port is correct
- Check firewall rules allow SSH traffic
- Test network connectivity:
  \`\`\`bash
  telnet server.example.com 22
  \`\`\`
- Verify SSH service is running on remote host:
  \`\`\`bash
  ssh user@server.example.com "sudo systemctl status sshd"
  \`\`\`

#### 6. Command Not Found on Remote Server

Remote commands fail with "command not found".

**Solution**: Use full paths or set environment:

\`\`\`yaml
steps:
  - command: /usr/local/bin/myapp --version
  # OR
  - command: |
      export PATH=/usr/local/bin:$PATH
      myapp --version
\`\`\`

#### 7. Script Field Not Supported

SSH executor doesn't support the \`script\` field.

**Solution**: Use \`command\` with multi-line syntax:

\`\`\`yaml
# Not supported ❌
steps:
  - name: backup
    script: |
      tar -czf backup.tar.gz /data

# Supported ✅
steps:
  - name: backup
    command: |
      tar -czf backup.tar.gz /data
\`\`\`

### Debugging Tips

#### 1. Enable Verbose Output

Test your SSH connection manually with verbose output:

\`\`\`bash
ssh -vvv -i ~/.ssh/id_rsa user@server.example.com
\`\`\`

#### 2. Dry Run Workflow

Use Dagu's dry-run feature to validate configuration:

\`\`\`bash
dagu dry ssh-workflow.yaml
\`\`\`

#### 3. Test Individual Steps

Execute a single step with verbose logging:

\`\`\`yaml
# Add this step first to test connectivity
steps:
  - name: test-connection
    command: echo "SSH connection successful"
\`\`\`

\`\`\`bash
dagu start ssh-workflow.yaml
\`\`\`

#### 4. Check Logs

View detailed execution logs:

\`\`\`bash
dagu status ssh-workflow
dagu logs ssh-workflow
\`\`\`

## Best Practices Summary

✅ **Do:**

- Use key-based authentication for security
- Enable strict host key checking in production
- Use environment variables for sensitive credentials
- Test SSH connections manually before using in workflows
- Create dedicated SSH keys for automation
- Set proper permissions on SSH keys (600)
- Use descriptive step names
- Add error handling and rollback mechanisms
- Document SSH configurations
- Rotate SSH keys periodically

❌ **Don't:**

- Hardcode passwords in YAML files
- Disable strict host key checking in production
- Use the same SSH key for multiple services
- Share SSH keys across team members
- Store SSH keys in version control
- Use script field with SSH executor
- Ignore authentication failures
- Skip security best practices
- Use SSH for high-frequency operations without connection pooling

## Conclusion

Dagu's SSH executor is a powerful feature that enables remote command execution seamlessly integrated into your workflows. By following the patterns and best practices outlined in this guide, you can:

- **Automate remote operations** across multiple servers
- **Maintain security** with key-based authentication and host verification
- **Build resilient workflows** with proper error handling
- **Scale your infrastructure** operations efficiently

Whether you're deploying applications, managing databases, processing logs, or orchestrating distributed systems, the SSH executor provides the flexibility and reliability you need.

For more information, refer to the [official Dagu documentation](https://docs.dagu.cloud/features/executors/ssh).

## Additional Resources

- [Dagu Official Documentation](https://docs.dagu.cloud/)
- [SSH Best Practices](https://wiki.archlinux.org/title/SSH_keys)
- [YAML Specification](https://yaml.org/spec/)
- [Cron Expression Guide](https://crontab.guru/)

Happy automating! 🚀

`,Xf=`---
title: Interactive Computing Environments
date: 2025-09-23
tag: Tech
description: Empowering Open Science with Scalable Interactive Computing Environments in India
---

# Empowering Open Science with Scalable Interactive Computing Environments in India

## Introduction

Open Science is transforming how research is conducted, shared, and reused across the globe.  
In India, where diverse scientific communities work on domains ranging from **planetary science** to **meteorology**, the need for scalable, reproducible, and accessible research platforms is stronger than ever.

To address this, I designed and developed a **cloud-native, Free and Open Source Software (FOSS)-powered platform** that lowers the barriers for scientists to adopt open, reproducible workflows.

This blog post outlines the motivation, architecture, and impact of this project.

---

## Challenges in Scientific Computing

Researchers in India face several challenges when working with scientific data and tools:

- Complex setup of software environments across different domains.  
- Limited access to scalable infrastructure.  
- Difficulty in converting computational notebooks into shareable tools.  
- Fragmentation in adopting FOSS workflows.  

These challenges slow down reproducible science and collaboration.  
Our solution aims to solve these problems using open-source technologies.

---

## The Solution: Scalable Interactive Environments

At the core of the platform is **JupyterHub**, deployed on **Kubernetes**, which provides a scalable environment for interactive computing.  
Each researcher logs into a web-based portal and gets access to a **customized containerized workspace**.

Key features:

- **Custom Docker Images**: Domain-specific environments (e.g., planetary science, meteorology) preloaded with required libraries.  
- **Shared Data Volumes**: Mounted with satellite datasets to allow direct access to scientific data.  
- **Secure & Scalable Pods**: Managed by Kubernetes using **KubeSpawner**, ensuring isolation and resource allocation.  

---

## Enhancing Interactivity with Mercury

While Jupyter Notebooks are powerful, sharing results often requires additional steps.  
To bridge this gap, I integrated **Mercury**, an open-source library, into the JupyterLab environment.

### Custom Mercury Enhancements
- Integrated Mercury inside **multi-user JupyterHub setup**.  
- Added support for **RESTful APIs**.  
- Built **custom JupyterLab extensions** to let users create, update, and delete Mercury web apps through a graphical interface.  

This enables researchers to **convert notebooks into web applications** seamlessly, making their analyses interactive and shareable with peers.

---

## Supporting Tools and Integrations

The platform leverages several open-source components:

- **JupyterHub** – Web interface for multi-user access.  
- **Kubernetes + KubeSpawner** – Scalable orchestration of user pods.  
- **Docker** – Containerization of domain-specific environments.  
- **JupyterLab** – Interactive computing workspace.  
- **Jupyter Server Proxy** – Secure access to additional services within JupyterHub.  
- **Mercury (custom build)** – Notebook-to-webapp conversion, enhanced for multi-user workflows.  
- **JupyterLab Extensions** – Simplified UI for managing Mercury apps.  

---

## User Flow

\`\`\`mermaid
flowchart LR
    A[Researcher Login] --> B[JupyterHub Authentication]
    B --> C[KubeSpawner launches User Pod]
    C --> D[Custom Docker Image Loaded with Domain Libraries]
    D --> E[Shared Satellite Data Volume Mounted]
    E --> F[JupyterLab Interactive Environment]
    F --> G[Jupyter Server Proxy Enables Access to Services]
    G --> H[Mercury Converts Notebook into Web App]
    H --> I[JupyterLab Extensions Manage Web Apps]
    I --> J[Researcher Shares Interactive App with Peers]
\`\`\`
`,ep=`---
title: welcome
date: 2025-02-07
tag: Life
description: welcome to my portfolio
---

## 🌿 About Me

I work at the **Space Applications Center, ISRO**,  
where I contribute to a **Golang-based scheduler** —  
a system with a clean web interface and orchestration logic,  
built as an *alternative to Airflow*.

Alongside this, I work on **interactive computing environments** —  
systems that let researchers explore data, run experiments,  
and turn complex analyses into shareable, reproducible notebooks.

My focus is on **bridging infrastructure and experience** —  
making computation feel *alive*, *collaborative*, and *approachable*.

---

Beyond code, I’m drawn to slower, grounding things:

- 🎶 Playing the flute  
- 🌳 Identifying and planting trees  
- 🍰 Baking cupcakes and cakes on weekends  
- 📚 Reading essays and quiet books  

---

*I like building things that feel thoughtful and precise —*  
*systems that do their job, beautifully.*

**→ Let’s build something lasting.**
`,np=`---
title: Open Source Contributions to Dagu
date: 2026-01-26
tag: Tech
description: A summary of my contributions to Dagu — co-authoring the queue system, 20 merged PRs, 16 GitHub release credits, and production-ready features across Go, React, and Kubernetes.
---

*This post complements my other writing on [Dagu](https://github.com/dagucloud/dagu), including [partial success in DAG systems](/blog/partial-success) and [using the SSH executor](/blog/blog-ssh-executor). Where those posts explain how Dagu works, this one documents what I've contributed upstream.*

## Introduction

I started contributing to [Dagu](https://github.com/dagucloud/dagu) in early 2024. Dagu is a self-contained workflow orchestration engine — DAG-based, YAML-defined, and shipped as a single Go binary with a built-in web UI. It sits in a familiar space: lighter than Airflow, more capable than Cron, and practical for teams that want orchestration without standing up a heavy control plane.

The largest piece of work was **co-authoring Dagu's queue management system**, shipped in [v1.17.0](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18) and credited in the official changelog under *Queue functionality implementation*. Since then I've landed **20 merged pull requests**, with **16 GitHub release credits** across 8 release pages — often co-authored with maintainer Yota Hamada.

This post is a map of that work: what shipped, where it was credited, and what's still in flight.

---

## At a Glance

| Metric | Value |
|--------|------:|
| Merged pull requests | **20** (+ co-authored core queue system) |
| GitHub releases crediting you | **16** across 8 release pages |
| Commits on \`main\` | **21** |
| Lines added | **~4,700** |
| Lines removed | **~1,200** |
| Files touched | **133** |
| Primary stacks | Go, React/TypeScript, OpenAPI, Helm/Kubernetes |

### By area

| Area | PRs | Approx. lines added |
|------|----:|------------------:|
| Runtime & executors | 5 | ~2,200 |
| API & backend services | 5 | ~1,000 |
| UI / frontend | 5 | ~350 |
| Infrastructure & DevOps | 3 | ~730 |
| Core configuration | 2 | ~400 |

Activity was sparse in 2024, then accelerated through 2025 — with a major queue merge in **May 2025**, a busy **November 2025** (API, jq executor, timeouts, DAG runs UI), and **February–May 2026** (Helm chart, scheduler capacity fixes, schema param defaults).

---

## About Dagu

Dagu runs workflows defined as directed acyclic graphs in YAML. A single binary handles scheduling, execution, and the web UI — no external database required. It supports local, queue-based, and distributed execution, with 18+ built-in step executors: shell, Docker, HTTP, SSH, jq, SQL, sub-DAGs, and more.

**Stack:** Go 1.26 · React 19 · TypeScript · Chi (REST) · gRPC · OpenAPI · Helm · Tailwind CSS

If you're new to the project, the [docs](https://docs.dagu.sh) are a good starting point.

---

## Featured Contributions

### Queue Management System — [v1.17.0](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18) · Co-authored [#940](https://github.com/dagucloud/dagu/pull/940)

**Original implementation:** [#690](https://github.com/dagu-org/dagu/pull/690) (issue [#535](https://github.com/dagucloud/dagu/issues/535))  
**Merged to main:** May 24, 2025 · **Released in:** [v1.17.0 (June 18, 2025)](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18)

Co-authored the core queue system that lets Dagu run workflows with controlled concurrency — one of the project's major v1.17.0 features. The official changelog credits **@kriyanshii** under *Queue functionality implementation*.

What it introduced:

- \`dagu enqueue\` / \`dagu dequeue\` CLI commands
- File-based persistent queue with priority and standard queues
- \`Queued\` workflow status and scheduler queue worker
- Queue management UI (enqueue/dequeue from the Web UI)
- Enqueue API for programmatic queueing

Foundational load-control primitive — queues, concurrency limits, and distributed workers all build on it. Original prototype ~847 lines across 21 files; shipped via [#940](https://github.com/dagucloud/dagu/pull/940) with ~5,200 lines across 115 files. Co-authored with Yota Hamada (integration & merge).

---

### Production-Ready Helm Chart for Kubernetes — [#1613](https://github.com/dagucloud/dagu/pull/1613) · [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2)

Complete Helm chart for deploying Dagu on Kubernetes — configurable values, service definitions, and deployment templates. First-class K8s install path: **16 files, ~683 lines added**.

---

### Scheduler Global Queue Capacity on Retry — [#1676](https://github.com/dagucloud/dagu/pull/1676) · [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2)

Retries now respect global queue capacity limits, preventing overflow when failed runs are re-queued. **13 files, ~497 lines.** Co-authored with Yota Hamada.

---

### Enqueue DAGRun from Spec API — [#1375](https://github.com/dagucloud/dagu/pull/1375) · [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0)

REST endpoint to enqueue a DAG run from a YAML spec, without a pre-existing on-disk DAG file. **5 files, ~648 lines.** Co-authored with Yota Hamada.

---

### jq Executor \`raw-output\` Option — [#1392](https://github.com/dagucloud/dagu/pull/1392) · [v1.24.2](https://github.com/dagucloud/dagu/releases/tag/v1.24.2)

\`raw-output\` option for unquoted string output, matching \`jq -r\` behavior. **3 files, ~634 lines** including tests. Co-authored with Yota Hamada.

---

### Step-Level \`timeoutSec\` — [#1412](https://github.com/dagucloud/dagu/pull/1412) · [v1.24.8](https://github.com/dagucloud/dagu/releases/tag/v1.24.8)

Per-step timeout configuration, independent of DAG-level timeouts. **15 files, ~440 lines.** Co-authored with Yota Hamada.

---

### Custom Exit Codes on Retry — [#902](https://github.com/dagucloud/dagu/pull/902) · [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8)

Define which exit codes trigger a step retry — retry on transient failures, not expected ones. **7 files, ~624 lines.**

---

### Lock Parameters and Run ID — [#1176](https://github.com/dagucloud/dagu/pull/1176) · [v1.20.0](https://github.com/dagucloud/dagu/releases/tag/v1.20.0)

DAG-level config to lock parameters and run IDs during re-runs or scheduled executions. **12 files, ~383 lines.** Co-authored with Yota Hamada.

---

### Clear Queue Functionality — [#1299](https://github.com/dagucloud/dagu/pull/1299) · [v1.22.10](https://github.com/dagucloud/dagu/releases/tag/v1.22.10)

REST API plus UI controls on \`/queues\` for draining stuck queue entries. **4 files, ~262 lines.** Co-authored with Yota Hamada.

---

### Running/Failed Steps on DAG Runs Page — [#1420](https://github.com/dagucloud/dagu/pull/1420) · [v1.24.11](https://github.com/dagucloud/dagu/releases/tag/v1.24.11)

Inline running and failed step names on the DAG runs list — faster triage without drilling into details. **4 files, ~177 lines.**

---

### Queue Override on Enqueue — [#1240](https://github.com/dagucloud/dagu/pull/1240) · [v1.22.3](https://github.com/dagucloud/dagu/releases/tag/v1.22.3)

Override the target queue when enqueuing a DAG run, via CLI flag and API request body. **15 files, ~118 lines.**

---

### \`--from-run-id\` CLI Flag — Co-authored [#1378](https://github.com/dagucloud/dagu/pull/1378) · [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0)

\`--from-run-id\` on the \`start\` command — new runs inherit context from a previous DAG run history entry. Co-authored with Yota Hamada.

---

### Disable Step Retry While DAG Is Running — [#1447](https://github.com/dagucloud/dagu/pull/1447) · [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2)

Disabled per-step retry controls in the Web UI during active execution — avoids conflicting retry actions mid-run. **1 file, ~10 lines.**

---

### Fix Dequeue Queue Name in Runtime — [#1481](https://github.com/dagucloud/dagu/pull/1481) · [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4)

Fixed the runtime \`Dequeue\` command builder to pass the queue name as a positional argument. API-initiated dequeue was failing because the CLI expected \`dagu dequeue <queue-name>\` but the name was omitted. **2 files, ~23 lines.**

---

### Fix Empty Schema Params for Eval Defaults — [#2173](https://github.com/dagucloud/dagu/pull/2173) · [v2.7.2](https://github.com/dagucloud/dagu/releases/tag/v2.7.2)

Start/Enqueue modal now omits empty parameter values from the request payload, so eval-backed defaults (e.g. \`\${NOW}\`) resolve correctly instead of being overridden by blank strings. **2 files, ~20 lines.**

---

## All Merged Pull Requests

| # | Title | Date | Release | +Lines | Area |
|--:|-------|------|---------|-------:|------|
| — | **Queue management system** (co-authored [#940](https://github.com/dagucloud/dagu/pull/940)) | 2025-05 | [v1.17.0](https://github.com/dagucloud/dagu/releases/tag/v1.17.0-beta.1) | ~5,200 | Core / Scheduler |
| [558](https://github.com/dagucloud/dagu/pull/558) | Configurable DAG status display | 2024-04 | [v1.13.0](https://github.com/dagucloud/dagu/releases/tag/v1.13.0) | 16 | UI / Core |
| [765](https://github.com/dagucloud/dagu/pull/765) | Improved parameter handling | 2025-01 | — | 14 | Core |
| [805](https://github.com/dagucloud/dagu/pull/805) | Headless mode support | 2025-02 | [v1.16.1](https://github.com/dagucloud/dagu/releases/tag/v1.16.1) | 42 | CLI / Infra |
| [899](https://github.com/dagucloud/dagu/pull/899) | DAG graph zoom in/out | 2025-04 | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | 84 | UI |
| [904](https://github.com/dagucloud/dagu/pull/904) | Makefile \`build-ui\` target | 2025-04 | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | 6 | DevOps |
| [902](https://github.com/dagucloud/dagu/pull/902) | Custom exit codes on retry | 2025-04 | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | 624 | Runtime |
| [1126](https://github.com/dagucloud/dagu/pull/1126) | Remove hardcoded paginator limit | 2025-07 | — | 4 | API |
| [1176](https://github.com/dagucloud/dagu/pull/1176) | Lock parameters and run ID | 2025-08 | [v1.20.0](https://github.com/dagucloud/dagu/releases/tag/v1.20.0) | 383 | Core / API |
| [1240](https://github.com/dagucloud/dagu/pull/1240) | Queue override on enqueue (CLI + API) | 2025-09 | [v1.22.3](https://github.com/dagucloud/dagu/releases/tag/v1.22.3) | 118 | API / CLI |
| [1299](https://github.com/dagucloud/dagu/pull/1299) | Clear queue functionality | 2025-10 | [v1.22.10](https://github.com/dagucloud/dagu/releases/tag/v1.22.10) | 262 | API / UI |
| [1375](https://github.com/dagucloud/dagu/pull/1375) | Enqueue DAGRun from spec API | 2025-11 | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | 648 | API |
| [1378](https://github.com/dagucloud/dagu/pull/1378) | \`--from-run-id\` CLI flag (co-authored) | 2025-11 | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | — | CLI |
| [1383](https://github.com/dagucloud/dagu/pull/1383) | Fix DAG zoom-out rendering | 2025-11 | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | 26 | UI |
| [1392](https://github.com/dagucloud/dagu/pull/1392) | jq executor \`raw-output\` option | 2025-11 | [v1.24.2](https://github.com/dagucloud/dagu/releases/tag/v1.24.2) | 634 | Runtime |
| [1412](https://github.com/dagucloud/dagu/pull/1412) | Step-level \`timeoutSec\` | 2025-11 | [v1.24.8](https://github.com/dagucloud/dagu/releases/tag/v1.24.8) | 440 | Runtime |
| [1420](https://github.com/dagucloud/dagu/pull/1420) | Running/failed steps on DAG runs page | 2025-11 | [v1.24.11](https://github.com/dagucloud/dagu/releases/tag/v1.24.11) | 177 | UI |
| [1447](https://github.com/dagucloud/dagu/pull/1447) | Disable step retry while DAG is running | 2025-12 | [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2) | 10 | UI |
| [1481](https://github.com/dagucloud/dagu/pull/1481) | Fix queue name in dequeue command | 2025-12 | [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4) | 23 | Runtime |
| [1613](https://github.com/dagucloud/dagu/pull/1613) | Production-ready Helm chart | 2026-02 | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) | 683 | Infra |
| [1676](https://github.com/dagucloud/dagu/pull/1676) | Scheduler queue capacity on retry | 2026-02 | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) | 497 | Scheduler |
| [2173](https://github.com/dagucloud/dagu/pull/2173) | Fix empty schema params for eval defaults | 2026-05 | [v2.7.2](https://github.com/dagucloud/dagu/releases/tag/v2.7.2) | 20 | UI |

---

## GitHub Release Credits

Mentions of **@kriyanshii** across [dagucloud/dagu releases](https://github.com/dagucloud/dagu/releases) (16 releases on 8 pages):

| Page | Release | What you're credited for |
|------|---------|--------------------------|
| [1](https://github.com/dagucloud/dagu/releases) | [v2.7.2](https://github.com/dagucloud/dagu/releases/tag/v2.7.2) | Schema params eval-defaults fix ([#2173](https://github.com/dagucloud/dagu/pull/2173)) |
| [6](https://github.com/dagucloud/dagu/releases?page=6) | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) | Helm chart ([#1613](https://github.com/dagucloud/dagu/pull/1613)), queue capacity on retry ([#1676](https://github.com/dagucloud/dagu/pull/1676)), tag-wise search ([#1494](https://github.com/dagucloud/dagu/issues/1494)); special thanks for v2.0.0 feedback |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4) | Dequeue fix ([#1481](https://github.com/dagucloud/dagu/pull/1481)), singleton flag request ([#1460](https://github.com/dagucloud/dagu/issues/1460)) |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2) | Stop step retry UI ([#1447](https://github.com/dagucloud/dagu/pull/1447)), queued DAGs bug report ([#1437](https://github.com/dagucloud/dagu/issues/1437)) |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.24.11](https://github.com/dagucloud/dagu/releases/tag/v1.24.11) | Running/failed steps list ([#1420](https://github.com/dagucloud/dagu/pull/1420)) |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.24.8](https://github.com/dagucloud/dagu/releases/tag/v1.24.8) | Step-level \`timeoutSec\` ([#1412](https://github.com/dagucloud/dagu/pull/1412)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.24.2](https://github.com/dagucloud/dagu/releases/tag/v1.24.2) | jq raw-output ([#1392](https://github.com/dagucloud/dagu/pull/1392)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | \`--from-run-id\` co-author ([#1378](https://github.com/dagucloud/dagu/pull/1378)), inline spec enqueue ([#1375](https://github.com/dagucloud/dagu/pull/1375)), zoom-out fix ([#1380](https://github.com/dagucloud/dagu/issues/1380)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.23.0](https://github.com/dagucloud/dagu/releases/tag/v1.23.0) | Queue override + clear queue ([#1240](https://github.com/dagucloud/dagu/pull/1240), [#1299](https://github.com/dagucloud/dagu/pull/1299)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.22.10](https://github.com/dagucloud/dagu/releases/tag/v1.22.10) | Clear queue UI ([#1299](https://github.com/dagucloud/dagu/pull/1299)) |
| [9](https://github.com/dagucloud/dagu/releases?page=9) | [v1.22.3](https://github.com/dagucloud/dagu/releases/tag/v1.22.3) | Queue override on enqueue ([#1240](https://github.com/dagucloud/dagu/pull/1240)) |
| [9](https://github.com/dagucloud/dagu/releases?page=9) | [v1.20.0](https://github.com/dagucloud/dagu/releases/tag/v1.20.0) | Lock parameters & run ID ([#1176](https://github.com/dagucloud/dagu/pull/1176)) |
| [12](https://github.com/dagucloud/dagu/releases?page=12) | [v1.17.0-beta.1](https://github.com/dagucloud/dagu/releases/tag/v1.17.0-beta.1) | Queue functionality implementation (co-authored [#940](https://github.com/dagucloud/dagu/pull/940)) |
| [13](https://github.com/dagucloud/dagu/releases?page=13) | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | Zoom in/out ([#899](https://github.com/dagucloud/dagu/pull/899)), Makefile ([#904](https://github.com/dagucloud/dagu/pull/904)), custom exit codes ([#902](https://github.com/dagucloud/dagu/pull/902)) |
| [13](https://github.com/dagucloud/dagu/releases?page=13) | [v1.16.1](https://github.com/dagucloud/dagu/releases/tag/v1.16.1) | Headless mode ([#805](https://github.com/dagucloud/dagu/pull/805)) |
| [15](https://github.com/dagucloud/dagu/releases?page=15) | [v1.13.0](https://github.com/dagucloud/dagu/releases/tag/v1.13.0) | Configurable DAG status ([#558](https://github.com/dagucloud/dagu/pull/558)) — first contribution |

> **Note:** [v1.17.0](https://github.com/dagucloud/dagu/releases/tag/v1.17.0) stable credits the queue system in the [docs changelog](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18) but not in the GitHub release body. [#765](https://github.com/dagucloud/dagu/pull/765) and [#1126](https://github.com/dagucloud/dagu/pull/1126) are merged but not called out in any GitHub release notes.

---

## Community & Issue Credits

Credited in release notes without direct code PR authorship:

| Item | Type | Release |
|------|------|---------|
| [#1494](https://github.com/dagucloud/dagu/issues/1494) Tag-wise search for DAG runs | Feature request (shipped in [#1576](https://github.com/dagucloud/dagu/pull/1576)) | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) |
| [#1460](https://github.com/dagucloud/dagu/issues/1460) Singleton enqueue flag | Feature request | [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4) |
| [#1437](https://github.com/dagucloud/dagu/issues/1437) Queued DAGs not starting | Bug report | [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2) |
| v2.0.0 development cycle | Feedback & ideas (special thanks) | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) |

---

## What This Work Touches

- **Backend (Go):** Queue scheduler, REST API design, executor plugins, runtime engine, OpenAPI codegen
- **Frontend (React/TypeScript):** Queue management UI, DAG visualization, run monitoring, form/schema handling
- **DevOps:** Helm charts, Kubernetes manifests, Makefile tooling, headless/CLI modes
- **Testing:** Executor test suites, API integration patterns, race-detection CI compatibility
- **Open source process:** Issue-driven development, PR review cycles, co-authored features with maintainers

---

## Still in Progress

| Issue | Description |
|-------|-------------|
| [#1265](https://github.com/dagucloud/dagu/issues/1265) | Warning for explicit dependencies in chain-mode DAGs |
| [#1347](https://github.com/dagucloud/dagu/issues/1347) | Start fresh DAGRun with a different run ID from history |
| — | Status-wise search enhancements on DAG runs page |

---

## Links

- **GitHub:** [@kriyanshii](https://github.com/kriyanshii)
- **Project:** [dagucloud/dagu](https://github.com/dagucloud/dagu)
- **Documentation:** [docs.dagu.sh](https://docs.dagu.sh)
- **Releases:** [github.com/dagucloud/dagu/releases](https://github.com/dagucloud/dagu/releases)
- **All PRs:** [github.com/kriyanshii?q=dagu](https://github.com/kriyanshii?q=dagu)
`,tp=`---
title: Understanding Partial Success in DAG Systems
date: 2025-09-28
tag: Tech
description: Building Resilient Workflows
---
 
# Understanding Partial Success in DAG Systems

*This is the first post in a series where I explore and explain the powerful features of [Dagu](https://github.com/dagu-org/dagu), a modern workflow orchestration platform. In this series, we'll dive deep into the capabilities that make Dagu an excellent choice for building robust, production-ready data pipelines and automation workflows. From advanced error handling and retry mechanisms to distributed execution and monitoring, each post will provide practical insights and real-world examples to help you master workflow orchestration with Dagu.*

## Introduction

In the world of workflow orchestration, not all failures are created equal. Sometimes, a workflow can achieve its primary objectives even when some non-critical steps fail. This is where **partial success** becomes a powerful concept for building resilient, fault-tolerant systems.

Partial success represents a nuanced execution state where a DAG (Directed Acyclic Graph) completes its primary objectives despite encountering some failures that were explicitly allowed to continue. Unlike traditional binary success/failure states, partial success acknowledges that modern workflows often have optional components, fallback mechanisms, and non-critical operations that shouldn't halt the entire process.

## What is Partial Success?

Partial success is a DAG execution status that indicates:

- **Primary objectives were achieved**: The core business logic completed successfully
- **Some non-critical failures occurred**: Certain steps failed but were configured to continue
- **Workflow completed gracefully**: The DAG reached a terminal state without being aborted

This concept is particularly valuable in scenarios where:

- Optional cleanup tasks fail but don't affect the main process
- Non-critical monitoring or logging steps encounter issues
- Fallback mechanisms are in place for known failure scenarios
- Multi-cloud or multi-region deployments where some regions may be unavailable

## How Partial Success Works in DAG Systems

### The Implementation Logic

Based on the DAG scheduler implementation, partial success is determined through a sophisticated two-pass algorithm:

\`\`\`go
// First pass: Check if any failed node is NOT allowed to continue
for _, node := range g.nodes {
    if node.State().Status == status.NodeError {
        if !node.ShouldContinue(ctx) {
            // Found a failed node that was NOT allowed to continue
            // This disqualifies the DAG from being partial success
            return false
        }
    }
}

// Second pass: Check for partial success conditions
for _, node := range g.nodes {
    switch node.State().Status {
    case status.NodeSuccess:
        hasSuccessfulNodes = true
    case status.NodeError:
        if node.ShouldContinue(ctx) && !node.ShouldMarkSuccess(ctx) {
            hasFailuresWithContinueOn = true
        }
    case status.NodePartialSuccess:
        hasFailuresWithContinueOn = true
        hasSuccessfulNodes = true
    }
}

// Partial success requires:
// 1. At least one failed node with continueOn (some non-critical failures)
// 2. No failed nodes without continueOn (checked in first pass)
return hasSuccessfulNodes && hasFailuresWithContinueOn
\`\`\`

### Key Requirements for Partial Success

For a DAG to achieve partial success status, it must meet these criteria:

1. **At least one successful node**: The workflow must have completed some primary work
2. **At least one failed node with \`continueOn\`**: Some non-critical failures occurred but were allowed to continue
3. **No critical failures**: No failed nodes without \`continueOn\` configuration
4. **Graceful completion**: The DAG reached a terminal state without being aborted

### Status Hierarchy and Event Handlers

Partial success is treated as a success state for event handling purposes:

\`\`\`go
switch sc.Status(ctx, graph) {
case status.Success:
    eventHandlers = append(eventHandlers, digraph.HandlerOnSuccess)

case status.PartialSuccess:
    // PartialSuccess is treated as success since primary work was completed
    // despite some non-critical failures that were allowed to continue
    eventHandlers = append(eventHandlers, digraph.HandlerOnSuccess)

case status.Error:
    eventHandlers = append(eventHandlers, digraph.HandlerOnFailure)
}
\`\`\`

This means that \`onSuccess\` handlers will execute for both full success and partial success, while \`onFailure\` handlers only run for true failures.

## Real-World Use Cases

### 1. Multi-Cloud Deployment Strategy

\`\`\`yaml
steps:
  - name: deploy-aws
    command: aws-deploy.sh
    continueOn:
      failure: true # Continue even if AWS deployment fails

  - name: deploy-gcp
    command: gcp-deploy.sh
    continueOn:
      failure: true # Continue even if GCP deployment fails

  - name: verify-deployment
    command: verify-deployment.sh
    # This step must succeed - no continueOn
\`\`\`

**Scenario**: Deploy to multiple cloud providers for redundancy. If AWS fails but GCP succeeds, the deployment is still considered successful.

**Partial Success Outcome**: The workflow completes with partial success, indicating that at least one cloud deployment succeeded while the other failed but was allowed to continue.

### 2. Data Pipeline with Optional Enhancements

\`\`\`yaml
steps:
  - name: extract-data
    command: extract-from-source.sh

  - name: transform-data
    command: transform-data.sh
    depends: [extract-data]

  - name: load-data
    command: load-to-warehouse.sh
    depends: [transform-data]

  - name: generate-analytics
    command: generate-analytics.sh
    depends: [load-data]
    continueOn:
      failure: true # Analytics are nice-to-have

  - name: send-notifications
    command: send-notifications.sh
    depends: [load-data]
    continueOn:
      failure: true # Notifications are optional
\`\`\`

**Scenario**: A data pipeline where the core ETL process (extract, transform, load) is critical, but analytics generation and notifications are optional enhancements.

**Partial Success Outcome**: If analytics generation fails but the core data pipeline succeeds, the workflow achieves partial success.

### 3. Service Health Monitoring with Fallbacks

\`\`\`yaml
steps:
  - name: check-primary-service
    command: curl -f https://primary.example.com/health
    continueOn:
      exitCode: [0, 22, 7] # 22=HTTP error, 7=connection failed

  - name: check-secondary-service
    command: curl -f https://secondary.example.com/health
    preconditions:
      - condition: "\${CHECK_PRIMARY_SERVICE_EXIT_CODE}"
        expected: "re:[1-9][0-9]*" # Only if primary failed
    continueOn:
      exitCode: [0, 22, 7]

  - name: alert-oncall
    command: alert-oncall.sh
    continueOn:
      failure: true # Alerting failure shouldn't stop monitoring
\`\`\`

**Scenario**: Monitor multiple service instances with fallback mechanisms. If the primary service is down but the secondary is healthy, the monitoring workflow should continue.

**Partial Success Outcome**: The workflow completes with partial success if the secondary service is healthy, even if the primary service check failed.

### 4. Database Migration with Known Warnings

\`\`\`yaml
steps:
  - name: run-migration
    command: migrate-database.sh
    continueOn:
      output:
        - "re:WARNING:.*already exists"
        - "re:NOTICE:.*will be created"
      exitCode: [0, 1] # 1 might indicate warnings

  - name: verify-migration
    command: verify-database.sh
    depends: [run-migration]

  - name: update-schema-version
    command: update-schema-version.sh
    depends: [verify-migration]
\`\`\`

**Scenario**: Database migrations often produce warnings for existing objects or notices for new objects. These are expected and shouldn't fail the migration.

**Partial Success Outcome**: The migration completes successfully even if it produces expected warnings, resulting in partial success status.

### 5. Cleanup and Maintenance Tasks

\`\`\`yaml
steps:
  - name: process-main-task
    command: process-data.sh

  - name: cleanup-temp-files
    command: rm -rf /tmp/processing-*
    continueOn:
      failure: true # Cleanup failure shouldn't affect main task

  - name: archive-logs
    command: archive-logs.sh
    continueOn:
      failure: true # Archiving is optional

  - name: send-completion-notification
    command: send-notification.sh
    continueOn:
      failure: true # Notification failure is non-critical
\`\`\`

**Scenario**: A main processing task followed by optional cleanup and notification steps. The core business logic is the main task, while cleanup and notifications are nice-to-have.

**Partial Success Outcome**: If the main task succeeds but cleanup or notifications fail, the workflow achieves partial success.

## Best Practices for Partial Success

### 1. Clear Intent and Documentation

Always document why certain steps are configured with \`continueOn\`:

\`\`\`yaml
steps:
  - name: optional-cache-warmup
    command: warmup-cache.sh
    continueOn:
      failure: true
    # This step is optional - cache warmup failure doesn't affect core functionality
\`\`\`

### 2. Use \`markSuccess\` Judiciously

The \`markSuccess\` flag should be used carefully as it changes how dependent steps perceive the step's status:

\`\`\`yaml
steps:
  - name: step-a
    command: exit 1
    continueOn:
      failure: true
      markSuccess: false  # Default - dependent steps see it as failed

  - name: step-b
    command: echo "Step A status: failed"
    depends: [step-a]  # Runs because of continueOn

  - name: step-c
    command: exit 1
    continueOn:
      failure: true
      markSuccess: true  # Override status

  - name: step-d
    command: echo "Step C status: success"
    depends: [step-c]  # Sees step-c as successful
\`\`\`

### 3. Combine with Retry Policies

Use retry policies before falling back to \`continueOn\`:

\`\`\`yaml
steps:
  - name: flaky-service
    command: call-service.sh
    retryPolicy:
      limit: 3
      intervalSec: 5
    continueOn:
      exitCode: [503] # Continue if still 503 after retries
\`\`\`

### 4. Monitor Partial Success Rates

Track partial success rates to identify patterns:

\`\`\`yaml
handlerOn:
  success:
    command: |
      if [ "\${DAG_STATUS}" = "partial success" ]; then
        echo "Workflow completed with partial success - some non-critical steps failed"
        # Log to monitoring system
      fi
\`\`\`

### 5. Use Specific Exit Codes and Output Patterns

Be specific about which failures should continue:

\`\`\`yaml
steps:
  - name: security-scan
    command: security-scanner.sh
    continueOn:
      exitCode: [0, 4, 8] # 0=clean, 4=warnings, 8=info
      output:
        - "re:LOW SEVERITY:"
        - "re:INFORMATIONAL:"
\`\`\`

## Benefits of Partial Success

### 1. Improved Resilience

Partial success allows workflows to be more resilient to non-critical failures, reducing the need for manual intervention and retries.

### 2. Better Resource Utilization

Instead of failing entire workflows due to optional step failures, partial success enables better resource utilization by completing the core work.

### 3. Clearer Status Reporting

Partial success provides a more nuanced status that distinguishes between critical failures and non-critical issues, enabling better monitoring and alerting.

### 4. Graceful Degradation

Workflows can degrade gracefully, providing reduced functionality rather than complete failure when some components are unavailable.

### 5. Reduced False Alerts

By distinguishing between critical and non-critical failures, partial success reduces false alerts and improves signal-to-noise ratio in monitoring systems.

## Conclusion

Partial success is a powerful concept that enables the creation of resilient, fault-tolerant workflows. By allowing non-critical steps to fail while still considering the overall workflow successful, DAG systems can better handle the complexities of modern distributed systems.

The key to effective use of partial success lies in:

- **Clear identification** of which steps are critical vs. optional
- **Proper configuration** of \`continueOn\` conditions
- **Thoughtful use** of \`markSuccess\` flags
- **Comprehensive monitoring** of partial success rates
- **Good documentation** of the intended behavior

When implemented correctly, partial success transforms workflows from brittle, all-or-nothing processes into robust, adaptive systems that can handle real-world complexities while still achieving their primary objectives.

This approach is particularly valuable in scenarios involving:

- Multi-cloud deployments
- Data pipelines with optional enhancements
- Service monitoring with fallbacks
- Database operations with expected warnings
- Cleanup and maintenance tasks

By embracing partial success, organizations can build more reliable, maintainable, and resilient workflow systems that better reflect the reality of distributed computing environments.
`;var ns={exports:{}},Y={},gu={},Ue={};function rp(e){return typeof e>"u"||e===null}function X2(e){return typeof e=="object"&&e!==null}function ey(e){return Array.isArray(e)?e:rp(e)?[]:[e]}function ny(e,n){var t,r,u,i;if(n)for(i=Object.keys(n),t=0,r=i.length;t<r;t+=1)u=i[t],e[u]=n[u];return e}function ty(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function ry(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}Ue.isNothing=rp;Ue.isObject=X2;Ue.toArray=ey;Ue.repeat=ty;Ue.isNegativeZero=ry;Ue.extend=ny;function tu(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}tu.prototype=Object.create(Error.prototype);tu.prototype.constructor=tu;tu.prototype.toString=function(n){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!n&&this.mark&&(t+=" "+this.mark.toString()),t};var yu=tu,Rc=Ue;function ts(e,n,t,r,u){this.name=e,this.buffer=n,this.position=t,this.line=r,this.column=u}ts.prototype.getSnippet=function(n,t){var r,u,i,o,a;if(!this.buffer)return null;for(n=n||4,t=t||75,r="",u=this.position;u>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(u-1))===-1;)if(u-=1,this.position-u>t/2-1){r=" ... ",u+=5;break}for(i="",o=this.position;o<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o))===-1;)if(o+=1,o-this.position>t/2-1){i=" ... ",o-=5;break}return a=this.buffer.slice(u,o),Rc.repeat(" ",n)+r+a+i+`
`+Rc.repeat(" ",n+this.position-u+r.length)+"^"};ts.prototype.toString=function(n){var t,r="";return this.name&&(r+='in "'+this.name+'" '),r+="at line "+(this.line+1)+", column "+(this.column+1),n||(t=this.getSnippet(),t&&(r+=`:
`+t)),r};var uy=ts,Nc=yu,iy=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],oy=["scalar","sequence","mapping"];function ay(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function ly(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(iy.indexOf(t)===-1)throw new Nc('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.defaultStyle=n.defaultStyle||null,this.styleAliases=ay(n.styleAliases||null),oy.indexOf(this.kind)===-1)throw new Nc('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ae=ly,Lc=Ue,oi=yu,sy=ae;function Ka(e,n,t){var r=[];return e.include.forEach(function(u){t=Ka(u,n,t)}),e[n].forEach(function(u){t.forEach(function(i,o){i.tag===u.tag&&i.kind===u.kind&&r.push(o)}),t.push(u)}),t.filter(function(u,i){return r.indexOf(i)===-1})}function cy(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},n,t;function r(u){e[u.kind][u.tag]=e.fallback[u.tag]=u}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function Bt(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(n){if(n.loadKind&&n.loadKind!=="scalar")throw new oi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=Ka(this,"implicit",[]),this.compiledExplicit=Ka(this,"explicit",[]),this.compiledTypeMap=cy(this.compiledImplicit,this.compiledExplicit)}Bt.DEFAULT=null;Bt.create=function(){var n,t;switch(arguments.length){case 1:n=Bt.DEFAULT,t=arguments[0];break;case 2:n=arguments[0],t=arguments[1];break;default:throw new oi("Wrong number of arguments for Schema.create function")}if(n=Lc.toArray(n),t=Lc.toArray(t),!n.every(function(r){return r instanceof Bt}))throw new oi("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(r){return r instanceof sy}))throw new oi("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new Bt({include:n,explicit:t})};var fr=Bt,dy=ae,fy=new dy("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),py=ae,hy=new py("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),my=ae,gy=new my("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),yy=fr,rs=new yy({explicit:[fy,hy,gy]}),xy=ae;function vy(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function by(){return null}function ky(e){return e===null}var wy=new xy("tag:yaml.org,2002:null",{kind:"scalar",resolve:vy,construct:by,predicate:ky,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_y=ae;function Sy(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Cy(e){return e==="true"||e==="True"||e==="TRUE"}function Ey(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Ay=new _y("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Sy,construct:Cy,predicate:Ey,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),Dy=Ue,Fy=ae;function Ty(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Py(e){return 48<=e&&e<=55}function Iy(e){return 48<=e&&e<=57}function Ry(e){if(e===null)return!1;var n=e.length,t=0,r=!1,u;if(!n)return!1;if(u=e[t],(u==="-"||u==="+")&&(u=e[++t]),u==="0"){if(t+1===n)return!0;if(u=e[++t],u==="b"){for(t++;t<n;t++)if(u=e[t],u!=="_"){if(u!=="0"&&u!=="1")return!1;r=!0}return r&&u!=="_"}if(u==="x"){for(t++;t<n;t++)if(u=e[t],u!=="_"){if(!Ty(e.charCodeAt(t)))return!1;r=!0}return r&&u!=="_"}for(;t<n;t++)if(u=e[t],u!=="_"){if(!Py(e.charCodeAt(t)))return!1;r=!0}return r&&u!=="_"}if(u==="_")return!1;for(;t<n;t++)if(u=e[t],u!=="_"){if(u===":")break;if(!Iy(e.charCodeAt(t)))return!1;r=!0}return!r||u==="_"?!1:u!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(t))}function Ny(e){var n=e,t=1,r,u,i=[];return n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0"?0:r==="0"?n[1]==="b"?t*parseInt(n.slice(2),2):n[1]==="x"?t*parseInt(n,16):t*parseInt(n,8):n.indexOf(":")!==-1?(n.split(":").forEach(function(o){i.unshift(parseInt(o,10))}),n=0,u=1,i.forEach(function(o){n+=o*u,u*=60}),t*n):t*parseInt(n,10)}function Ly(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Dy.isNegativeZero(e)}var Oy=new Fy("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ry,construct:Ny,predicate:Ly,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),up=Ue,My=ae,jy=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function By(e){return!(e===null||!jy.test(e)||e[e.length-1]==="_")}function zy(e){var n,t,r,u;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,u=[],"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:n.indexOf(":")>=0?(n.split(":").forEach(function(i){u.unshift(parseFloat(i,10))}),n=0,r=1,u.forEach(function(i){n+=i*r,r*=60}),t*n):t*parseFloat(n,10)}var Hy=/^[-+]?[0-9]+e/;function Uy(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(up.isNegativeZero(e))return"-0.0";return t=e.toString(10),Hy.test(t)?t.replace("e",".e"):t}function $y(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||up.isNegativeZero(e))}var qy=new My("tag:yaml.org,2002:float",{kind:"scalar",resolve:By,construct:zy,predicate:$y,represent:Uy,defaultStyle:"lowercase"}),Wy=fr,ip=new Wy({include:[rs],implicit:[wy,Ay,Oy,qy]}),Gy=fr,op=new Gy({include:[ip]}),Vy=ae,ap=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),lp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Yy(e){return e===null?!1:ap.exec(e)!==null||lp.exec(e)!==null}function Ky(e){var n,t,r,u,i,o,a,l=0,s=null,d,c,f;if(n=ap.exec(e),n===null&&(n=lp.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,u=+n[3],!n[4])return new Date(Date.UTC(t,r,u));if(i=+n[4],o=+n[5],a=+n[6],n[7]){for(l=n[7].slice(0,3);l.length<3;)l+="0";l=+l}return n[9]&&(d=+n[10],c=+(n[11]||0),s=(d*60+c)*6e4,n[9]==="-"&&(s=-s)),f=new Date(Date.UTC(t,r,u,i,o,a,l)),s&&f.setTime(f.getTime()-s),f}function Qy(e){return e.toISOString()}var Jy=new Vy("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Yy,construct:Ky,instanceOf:Date,represent:Qy}),Zy=ae;function Xy(e){return e==="<<"||e===null}var e3=new Zy("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Xy});function sp(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ct;try{var n3=sp;ct=n3("buffer").Buffer}catch{}var t3=ae,us=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function r3(e){if(e===null)return!1;var n,t,r=0,u=e.length,i=us;for(t=0;t<u;t++)if(n=i.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function u3(e){var n,t,r=e.replace(/[\r\n=]/g,""),u=r.length,i=us,o=0,a=[];for(n=0;n<u;n++)n%4===0&&n&&(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)),o=o<<6|i.indexOf(r.charAt(n));return t=u%4*6,t===0?(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)):t===18?(a.push(o>>10&255),a.push(o>>2&255)):t===12&&a.push(o>>4&255),ct?ct.from?ct.from(a):new ct(a):a}function i3(e){var n="",t=0,r,u,i=e.length,o=us;for(r=0;r<i;r++)r%3===0&&r&&(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]),t=(t<<8)+e[r];return u=i%3,u===0?(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]):u===2?(n+=o[t>>10&63],n+=o[t>>4&63],n+=o[t<<2&63],n+=o[64]):u===1&&(n+=o[t>>2&63],n+=o[t<<4&63],n+=o[64],n+=o[64]),n}function o3(e){return ct&&ct.isBuffer(e)}var a3=new t3("tag:yaml.org,2002:binary",{kind:"scalar",resolve:r3,construct:u3,predicate:o3,represent:i3}),l3=ae,s3=Object.prototype.hasOwnProperty,c3=Object.prototype.toString;function d3(e){if(e===null)return!0;var n=[],t,r,u,i,o,a=e;for(t=0,r=a.length;t<r;t+=1){if(u=a[t],o=!1,c3.call(u)!=="[object Object]")return!1;for(i in u)if(s3.call(u,i))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(i)===-1)n.push(i);else return!1}return!0}function f3(e){return e!==null?e:[]}var p3=new l3("tag:yaml.org,2002:omap",{kind:"sequence",resolve:d3,construct:f3}),h3=ae,m3=Object.prototype.toString;function g3(e){if(e===null)return!0;var n,t,r,u,i,o=e;for(i=new Array(o.length),n=0,t=o.length;n<t;n+=1){if(r=o[n],m3.call(r)!=="[object Object]"||(u=Object.keys(r),u.length!==1))return!1;i[n]=[u[0],r[u[0]]]}return!0}function y3(e){if(e===null)return[];var n,t,r,u,i,o=e;for(i=new Array(o.length),n=0,t=o.length;n<t;n+=1)r=o[n],u=Object.keys(r),i[n]=[u[0],r[u[0]]];return i}var x3=new h3("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:g3,construct:y3}),v3=ae,b3=Object.prototype.hasOwnProperty;function k3(e){if(e===null)return!0;var n,t=e;for(n in t)if(b3.call(t,n)&&t[n]!==null)return!1;return!0}function w3(e){return e!==null?e:{}}var _3=new v3("tag:yaml.org,2002:set",{kind:"mapping",resolve:k3,construct:w3}),S3=fr,xu=new S3({include:[op],implicit:[Jy,e3],explicit:[a3,p3,x3,_3]}),C3=ae;function E3(){return!0}function A3(){}function D3(){return""}function F3(e){return typeof e>"u"}var T3=new C3("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:E3,construct:A3,predicate:F3,represent:D3}),P3=ae;function I3(e){if(e===null||e.length===0)return!1;var n=e,t=/\/([gim]*)$/.exec(e),r="";return!(n[0]==="/"&&(t&&(r=t[1]),r.length>3||n[n.length-r.length-1]!=="/"))}function R3(e){var n=e,t=/\/([gim]*)$/.exec(e),r="";return n[0]==="/"&&(t&&(r=t[1]),n=n.slice(1,n.length-r.length-1)),new RegExp(n,r)}function N3(e){var n="/"+e.source+"/";return e.global&&(n+="g"),e.multiline&&(n+="m"),e.ignoreCase&&(n+="i"),n}function L3(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var O3=new P3("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:I3,construct:R3,predicate:L3,represent:N3}),Ri;try{var M3=sp;Ri=M3("esprima")}catch{typeof window<"u"&&(Ri=window.esprima)}var j3=ae;function B3(e){if(e===null)return!1;try{var n="("+e+")",t=Ri.parse(n,{range:!0});return!(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function z3(e){var n="("+e+")",t=Ri.parse(n,{range:!0}),r=[],u;if(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return t.body[0].expression.params.forEach(function(i){r.push(i.name)}),u=t.body[0].expression.body.range,t.body[0].expression.body.type==="BlockStatement"?new Function(r,n.slice(u[0]+1,u[1]-1)):new Function(r,"return "+n.slice(u[0],u[1]))}function H3(e){return e.toString()}function U3(e){return Object.prototype.toString.call(e)==="[object Function]"}var $3=new j3("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:B3,construct:z3,predicate:U3,represent:H3}),Oc=fr,uo=Oc.DEFAULT=new Oc({include:[xu],explicit:[T3,O3,$3]}),hn=Ue,cp=yu,q3=uy,dp=xu,W3=uo,Qn=Object.prototype.hasOwnProperty,Ni=1,fp=2,pp=3,Li=4,qo=1,G3=2,Mc=3,V3=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Y3=/[\x85\u2028\u2029]/,K3=/[,\[\]\{\}]/,hp=/^(?:!|!!|![a-z\-]+!)$/i,mp=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function jc(e){return Object.prototype.toString.call(e)}function un(e){return e===10||e===13}function pt(e){return e===9||e===32}function _e(e){return e===9||e===32||e===10||e===13}function zt(e){return e===44||e===91||e===93||e===123||e===125}function Q3(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function J3(e){return e===120?2:e===117?4:e===85?8:0}function Z3(e){return 48<=e&&e<=57?e-48:-1}function Bc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function X3(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var gp=new Array(256),yp=new Array(256);for(var Ct=0;Ct<256;Ct++)gp[Ct]=Bc(Ct)?1:0,yp[Ct]=Bc(Ct);function ex(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||W3,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function xp(e,n){return new cp(n,new q3(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function T(e,n){throw xp(e,n)}function Oi(e,n){e.onWarning&&e.onWarning.call(null,xp(e,n))}var zc={YAML:function(n,t,r){var u,i,o;n.version!==null&&T(n,"duplication of %YAML directive"),r.length!==1&&T(n,"YAML directive accepts exactly one argument"),u=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),u===null&&T(n,"ill-formed argument of the YAML directive"),i=parseInt(u[1],10),o=parseInt(u[2],10),i!==1&&T(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Oi(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var u,i;r.length!==2&&T(n,"TAG directive accepts exactly two arguments"),u=r[0],i=r[1],hp.test(u)||T(n,"ill-formed tag handle (first argument) of the TAG directive"),Qn.call(n.tagMap,u)&&T(n,'there is a previously declared suffix for "'+u+'" tag handle'),mp.test(i)||T(n,"ill-formed tag prefix (second argument) of the TAG directive"),n.tagMap[u]=i}};function Gn(e,n,t,r){var u,i,o,a;if(n<t){if(a=e.input.slice(n,t),r)for(u=0,i=a.length;u<i;u+=1)o=a.charCodeAt(u),o===9||32<=o&&o<=1114111||T(e,"expected valid JSON character");else V3.test(a)&&T(e,"the stream contains non-printable characters");e.result+=a}}function Hc(e,n,t,r){var u,i,o,a;for(hn.isObject(t)||T(e,"cannot merge mappings; the provided source object is unacceptable"),u=Object.keys(t),o=0,a=u.length;o<a;o+=1)i=u[o],Qn.call(n,i)||(n[i]=t[i],r[i]=!0)}function Ht(e,n,t,r,u,i,o,a){var l,s;if(Array.isArray(u))for(u=Array.prototype.slice.call(u),l=0,s=u.length;l<s;l+=1)Array.isArray(u[l])&&T(e,"nested arrays are not supported inside keys"),typeof u=="object"&&jc(u[l])==="[object Object]"&&(u[l]="[object Object]");if(typeof u=="object"&&jc(u)==="[object Object]"&&(u="[object Object]"),u=String(u),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(i))for(l=0,s=i.length;l<s;l+=1)Hc(e,n,i[l],t);else Hc(e,n,i,t);else!e.json&&!Qn.call(t,u)&&Qn.call(n,u)&&(e.line=o||e.line,e.position=a||e.position,T(e,"duplicated mapping key")),n[u]=i,delete t[u];return n}function is(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):T(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function Z(e,n,t){for(var r=0,u=e.input.charCodeAt(e.position);u!==0;){for(;pt(u);)u=e.input.charCodeAt(++e.position);if(n&&u===35)do u=e.input.charCodeAt(++e.position);while(u!==10&&u!==13&&u!==0);if(un(u))for(is(e),u=e.input.charCodeAt(e.position),r++,e.lineIndent=0;u===32;)e.lineIndent++,u=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Oi(e,"deficient indentation"),r}function io(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||_e(t)))}function os(e,n){n===1?e.result+=" ":n>1&&(e.result+=hn.repeat(`
`,n-1))}function nx(e,n,t){var r,u,i,o,a,l,s,d,c=e.kind,f=e.result,h;if(h=e.input.charCodeAt(e.position),_e(h)||zt(h)||h===35||h===38||h===42||h===33||h===124||h===62||h===39||h===34||h===37||h===64||h===96||(h===63||h===45)&&(u=e.input.charCodeAt(e.position+1),_e(u)||t&&zt(u)))return!1;for(e.kind="scalar",e.result="",i=o=e.position,a=!1;h!==0;){if(h===58){if(u=e.input.charCodeAt(e.position+1),_e(u)||t&&zt(u))break}else if(h===35){if(r=e.input.charCodeAt(e.position-1),_e(r))break}else{if(e.position===e.lineStart&&io(e)||t&&zt(h))break;if(un(h))if(l=e.line,s=e.lineStart,d=e.lineIndent,Z(e,!1,-1),e.lineIndent>=n){a=!0,h=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=l,e.lineStart=s,e.lineIndent=d;break}}a&&(Gn(e,i,o,!1),os(e,e.line-l),i=o=e.position,a=!1),pt(h)||(o=e.position+1),h=e.input.charCodeAt(++e.position)}return Gn(e,i,o,!1),e.result?!0:(e.kind=c,e.result=f,!1)}function tx(e,n){var t,r,u;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=u=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Gn(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,u=e.position;else return!0;else un(t)?(Gn(e,r,u,!0),os(e,Z(e,!1,n)),r=u=e.position):e.position===e.lineStart&&io(e)?T(e,"unexpected end of the document within a single quoted scalar"):(e.position++,u=e.position);T(e,"unexpected end of the stream within a single quoted scalar")}function rx(e,n){var t,r,u,i,o,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return Gn(e,t,e.position,!0),e.position++,!0;if(a===92){if(Gn(e,t,e.position,!0),a=e.input.charCodeAt(++e.position),un(a))Z(e,!1,n);else if(a<256&&gp[a])e.result+=yp[a],e.position++;else if((o=J3(a))>0){for(u=o,i=0;u>0;u--)a=e.input.charCodeAt(++e.position),(o=Q3(a))>=0?i=(i<<4)+o:T(e,"expected hexadecimal character");e.result+=X3(i),e.position++}else T(e,"unknown escape sequence");t=r=e.position}else un(a)?(Gn(e,t,r,!0),os(e,Z(e,!1,n)),t=r=e.position):e.position===e.lineStart&&io(e)?T(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}T(e,"unexpected end of the stream within a double quoted scalar")}function ux(e,n){var t=!0,r,u=e.tag,i,o=e.anchor,a,l,s,d,c,f={},h,g,b,k;if(k=e.input.charCodeAt(e.position),k===91)l=93,c=!1,i=[];else if(k===123)l=125,c=!0,i={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),k=e.input.charCodeAt(++e.position);k!==0;){if(Z(e,!0,n),k=e.input.charCodeAt(e.position),k===l)return e.position++,e.tag=u,e.anchor=o,e.kind=c?"mapping":"sequence",e.result=i,!0;t||T(e,"missed comma between flow collection entries"),g=h=b=null,s=d=!1,k===63&&(a=e.input.charCodeAt(e.position+1),_e(a)&&(s=d=!0,e.position++,Z(e,!0,n))),r=e.line,tr(e,n,Ni,!1,!0),g=e.tag,h=e.result,Z(e,!0,n),k=e.input.charCodeAt(e.position),(d||e.line===r)&&k===58&&(s=!0,k=e.input.charCodeAt(++e.position),Z(e,!0,n),tr(e,n,Ni,!1,!0),b=e.result),c?Ht(e,i,f,g,h,b):s?i.push(Ht(e,null,f,g,h,b)):i.push(h),Z(e,!0,n),k=e.input.charCodeAt(e.position),k===44?(t=!0,k=e.input.charCodeAt(++e.position)):t=!1}T(e,"unexpected end of the stream within a flow collection")}function ix(e,n){var t,r,u=qo,i=!1,o=!1,a=n,l=0,s=!1,d,c;if(c=e.input.charCodeAt(e.position),c===124)r=!1;else if(c===62)r=!0;else return!1;for(e.kind="scalar",e.result="";c!==0;)if(c=e.input.charCodeAt(++e.position),c===43||c===45)qo===u?u=c===43?Mc:G3:T(e,"repeat of a chomping mode identifier");else if((d=Z3(c))>=0)d===0?T(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?T(e,"repeat of an indentation width identifier"):(a=n+d-1,o=!0);else break;if(pt(c)){do c=e.input.charCodeAt(++e.position);while(pt(c));if(c===35)do c=e.input.charCodeAt(++e.position);while(!un(c)&&c!==0)}for(;c!==0;){for(is(e),e.lineIndent=0,c=e.input.charCodeAt(e.position);(!o||e.lineIndent<a)&&c===32;)e.lineIndent++,c=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>a&&(a=e.lineIndent),un(c)){l++;continue}if(e.lineIndent<a){u===Mc?e.result+=hn.repeat(`
`,i?1+l:l):u===qo&&i&&(e.result+=`
`);break}for(r?pt(c)?(s=!0,e.result+=hn.repeat(`
`,i?1+l:l)):s?(s=!1,e.result+=hn.repeat(`
`,l+1)):l===0?i&&(e.result+=" "):e.result+=hn.repeat(`
`,l):e.result+=hn.repeat(`
`,i?1+l:l),i=!0,o=!0,l=0,t=e.position;!un(c)&&c!==0;)c=e.input.charCodeAt(++e.position);Gn(e,t,e.position,!1)}return!0}function Uc(e,n){var t,r=e.tag,u=e.anchor,i=[],o,a=!1,l;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),l=e.input.charCodeAt(e.position);l!==0&&!(l!==45||(o=e.input.charCodeAt(e.position+1),!_e(o)));){if(a=!0,e.position++,Z(e,!0,-1)&&e.lineIndent<=n){i.push(null),l=e.input.charCodeAt(e.position);continue}if(t=e.line,tr(e,n,pp,!1,!0),i.push(e.result),Z(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&l!==0)T(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=r,e.anchor=u,e.kind="sequence",e.result=i,!0):!1}function ox(e,n,t){var r,u,i,o,a=e.tag,l=e.anchor,s={},d={},c=null,f=null,h=null,g=!1,b=!1,k;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),k=e.input.charCodeAt(e.position);k!==0;){if(r=e.input.charCodeAt(e.position+1),i=e.line,o=e.position,(k===63||k===58)&&_e(r))k===63?(g&&(Ht(e,s,d,c,f,null),c=f=h=null),b=!0,g=!0,u=!0):g?(g=!1,u=!0):T(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,k=r;else if(tr(e,t,fp,!1,!0))if(e.line===i){for(k=e.input.charCodeAt(e.position);pt(k);)k=e.input.charCodeAt(++e.position);if(k===58)k=e.input.charCodeAt(++e.position),_e(k)||T(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(Ht(e,s,d,c,f,null),c=f=h=null),b=!0,g=!1,u=!1,c=e.tag,f=e.result;else if(b)T(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=a,e.anchor=l,!0}else if(b)T(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=a,e.anchor=l,!0;else break;if((e.line===i||e.lineIndent>n)&&(tr(e,n,Li,!0,u)&&(g?f=e.result:h=e.result),g||(Ht(e,s,d,c,f,h,i,o),c=f=h=null),Z(e,!0,-1),k=e.input.charCodeAt(e.position)),e.lineIndent>n&&k!==0)T(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&Ht(e,s,d,c,f,null),b&&(e.tag=a,e.anchor=l,e.kind="mapping",e.result=s),b}function ax(e){var n,t=!1,r=!1,u,i,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&T(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(t=!0,o=e.input.charCodeAt(++e.position)):o===33?(r=!0,u="!!",o=e.input.charCodeAt(++e.position)):u="!",n=e.position,t){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(i=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):T(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!_e(o);)o===33&&(r?T(e,"tag suffix cannot contain exclamation marks"):(u=e.input.slice(n-1,e.position+1),hp.test(u)||T(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);i=e.input.slice(n,e.position),K3.test(i)&&T(e,"tag suffix cannot contain flow indicator characters")}return i&&!mp.test(i)&&T(e,"tag name cannot contain such characters: "+i),t?e.tag=i:Qn.call(e.tagMap,u)?e.tag=e.tagMap[u]+i:u==="!"?e.tag="!"+i:u==="!!"?e.tag="tag:yaml.org,2002:"+i:T(e,'undeclared tag handle "'+u+'"'),!0}function lx(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&T(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!_e(t)&&!zt(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&T(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function sx(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!_e(r)&&!zt(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&T(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),Qn.call(e.anchorMap,t)||T(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Z(e,!0,-1),!0}function tr(e,n,t,r,u){var i,o,a,l=1,s=!1,d=!1,c,f,h,g,b;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=o=a=Li===t||pp===t,r&&Z(e,!0,-1)&&(s=!0,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)),l===1)for(;ax(e)||lx(e);)Z(e,!0,-1)?(s=!0,a=i,e.lineIndent>n?l=1:e.lineIndent===n?l=0:e.lineIndent<n&&(l=-1)):a=!1;if(a&&(a=s||u),(l===1||Li===t)&&(Ni===t||fp===t?g=n:g=n+1,b=e.position-e.lineStart,l===1?a&&(Uc(e,b)||ox(e,b,g))||ux(e,g)?d=!0:(o&&ix(e,g)||tx(e,g)||rx(e,g)?d=!0:sx(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&T(e,"alias node should not have any properties")):nx(e,g,Ni===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(d=a&&Uc(e,b))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&T(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,f=e.implicitTypes.length;c<f;c+=1)if(h=e.implicitTypes[c],h.resolve(e.result)){e.result=h.construct(e.result),e.tag=h.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else Qn.call(e.typeMap[e.kind||"fallback"],e.tag)?(h=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&h.kind!==e.kind&&T(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+h.kind+'", not "'+e.kind+'"'),h.resolve(e.result)?(e.result=h.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):T(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):T(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function cx(e){var n=e.position,t,r,u,i=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(o=e.input.charCodeAt(e.position))!==0&&(Z(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(i=!0,o=e.input.charCodeAt(++e.position),t=e.position;o!==0&&!_e(o);)o=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),u=[],r.length<1&&T(e,"directive name must not be less than one character in length");o!==0;){for(;pt(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!un(o));break}if(un(o))break;for(t=e.position;o!==0&&!_e(o);)o=e.input.charCodeAt(++e.position);u.push(e.input.slice(t,e.position))}o!==0&&is(e),Qn.call(zc,r)?zc[r](e,r,u):Oi(e,'unknown document directive "'+r+'"')}if(Z(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Z(e,!0,-1)):i&&T(e,"directives end mark is expected"),tr(e,e.lineIndent-1,Li,!1,!0),Z(e,!0,-1),e.checkLineBreaks&&Y3.test(e.input.slice(n,e.position))&&Oi(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&io(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Z(e,!0,-1));return}if(e.position<e.length-1)T(e,"end of the stream or a document separator is expected");else return}function vp(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new ex(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,T(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)cx(t);return t.documents}function bp(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var r=vp(e,t);if(typeof n!="function")return r;for(var u=0,i=r.length;u<i;u+=1)n(r[u])}function kp(e,n){var t=vp(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new cp("expected a single document in the stream, but found more")}}function dx(e,n,t){return typeof n=="object"&&n!==null&&typeof t>"u"&&(t=n,n=null),bp(e,n,hn.extend({schema:dp},t))}function fx(e,n){return kp(e,hn.extend({schema:dp},n))}gu.loadAll=bp;gu.load=kp;gu.safeLoadAll=dx;gu.safeLoad=fx;var as={},vu=Ue,bu=yu,px=uo,hx=xu,wp=Object.prototype.toString,_p=Object.prototype.hasOwnProperty,mx=9,ru=10,gx=13,yx=32,xx=33,vx=34,Sp=35,bx=37,kx=38,wx=39,_x=42,Cp=44,Sx=45,Ep=58,Cx=61,Ex=62,Ax=63,Dx=64,Ap=91,Dp=93,Fx=96,Fp=123,Tx=124,Tp=125,me={};me[0]="\\0";me[7]="\\a";me[8]="\\b";me[9]="\\t";me[10]="\\n";me[11]="\\v";me[12]="\\f";me[13]="\\r";me[27]="\\e";me[34]='\\"';me[92]="\\\\";me[133]="\\N";me[160]="\\_";me[8232]="\\L";me[8233]="\\P";var Px=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Ix(e,n){var t,r,u,i,o,a,l;if(n===null)return{};for(t={},r=Object.keys(n),u=0,i=r.length;u<i;u+=1)o=r[u],a=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),l=e.compiledTypeMap.fallback[o],l&&_p.call(l.styleAliases,a)&&(a=l.styleAliases[a]),t[o]=a;return t}function $c(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new bu("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+vu.repeat("0",r-n.length)+n}function Rx(e){this.schema=e.schema||px,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=vu.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ix(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function qc(e,n){for(var t=vu.repeat(" ",n),r=0,u=-1,i="",o,a=e.length;r<a;)u=e.indexOf(`
`,r),u===-1?(o=e.slice(r),r=a):(o=e.slice(r,u+1),r=u+1),o.length&&o!==`
`&&(i+=t),i+=o;return i}function Qa(e,n){return`
`+vu.repeat(" ",e.indent*n)}function Nx(e,n){var t,r,u;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(u=e.implicitTypes[t],u.resolve(n))return!0;return!1}function ls(e){return e===yx||e===mx}function rr(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function Lx(e){return rr(e)&&!ls(e)&&e!==65279&&e!==gx&&e!==ru}function Wc(e,n){return rr(e)&&e!==65279&&e!==Cp&&e!==Ap&&e!==Dp&&e!==Fp&&e!==Tp&&e!==Ep&&(e!==Sp||n&&Lx(n))}function Ox(e){return rr(e)&&e!==65279&&!ls(e)&&e!==Sx&&e!==Ax&&e!==Ep&&e!==Cp&&e!==Ap&&e!==Dp&&e!==Fp&&e!==Tp&&e!==Sp&&e!==kx&&e!==_x&&e!==xx&&e!==Tx&&e!==Cx&&e!==Ex&&e!==wx&&e!==vx&&e!==bx&&e!==Dx&&e!==Fx}function Pp(e){var n=/^\n* /;return n.test(e)}var Ip=1,Rp=2,Np=3,Lp=4,ai=5;function Mx(e,n,t,r,u){var i,o,a,l=!1,s=!1,d=r!==-1,c=-1,f=Ox(e.charCodeAt(0))&&!ls(e.charCodeAt(e.length-1));if(n)for(i=0;i<e.length;i++){if(o=e.charCodeAt(i),!rr(o))return ai;a=i>0?e.charCodeAt(i-1):null,f=f&&Wc(o,a)}else{for(i=0;i<e.length;i++){if(o=e.charCodeAt(i),o===ru)l=!0,d&&(s=s||i-c-1>r&&e[c+1]!==" ",c=i);else if(!rr(o))return ai;a=i>0?e.charCodeAt(i-1):null,f=f&&Wc(o,a)}s=s||d&&i-c-1>r&&e[c+1]!==" "}return!l&&!s?f&&!u(e)?Ip:Rp:t>9&&Pp(e)?ai:s?Lp:Np}function jx(e,n,t,r){e.dump=function(){if(n.length===0)return"''";if(!e.noCompatMode&&Px.indexOf(n)!==-1)return"'"+n+"'";var u=e.indent*Math.max(1,t),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-u),o=r||e.flowLevel>-1&&t>=e.flowLevel;function a(l){return Nx(e,l)}switch(Mx(n,o,e.indent,i,a)){case Ip:return n;case Rp:return"'"+n.replace(/'/g,"''")+"'";case Np:return"|"+Gc(n,e.indent)+Vc(qc(n,u));case Lp:return">"+Gc(n,e.indent)+Vc(qc(Bx(n,i),u));case ai:return'"'+zx(n)+'"';default:throw new bu("impossible error: invalid scalar style")}}()}function Gc(e,n){var t=Pp(e)?String(n):"",r=e[e.length-1]===`
`,u=r&&(e[e.length-2]===`
`||e===`
`),i=u?"+":r?"":"-";return t+i+`
`}function Vc(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Bx(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var s=e.indexOf(`
`);return s=s!==-1?s:e.length,t.lastIndex=s,Yc(e.slice(0,s),n)}(),u=e[0]===`
`||e[0]===" ",i,o;o=t.exec(e);){var a=o[1],l=o[2];i=l[0]===" ",r+=a+(!u&&!i&&l!==""?`
`:"")+Yc(l,n),u=i}return r}function Yc(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,u=0,i,o=0,a=0,l="";r=t.exec(e);)a=r.index,a-u>n&&(i=o>u?o:a,l+=`
`+e.slice(u,i),u=i+1),o=a;return l+=`
`,e.length-u>n&&o>u?l+=e.slice(u,o)+`
`+e.slice(o+1):l+=e.slice(u),l.slice(1)}function zx(e){for(var n="",t,r,u,i=0;i<e.length;i++){if(t=e.charCodeAt(i),t>=55296&&t<=56319&&(r=e.charCodeAt(i+1),r>=56320&&r<=57343)){n+=$c((t-55296)*1024+r-56320+65536),i++;continue}u=me[t],n+=!u&&rr(t)?e[i]:u||$c(t)}return n}function Hx(e,n,t){var r="",u=e.tag,i,o;for(i=0,o=t.length;i<o;i+=1)vt(e,n,t[i],!1,!1)&&(i!==0&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=u,e.dump="["+r+"]"}function Ux(e,n,t,r){var u="",i=e.tag,o,a;for(o=0,a=t.length;o<a;o+=1)vt(e,n+1,t[o],!0,!0)&&((!r||o!==0)&&(u+=Qa(e,n)),e.dump&&ru===e.dump.charCodeAt(0)?u+="-":u+="- ",u+=e.dump);e.tag=i,e.dump=u||"[]"}function $x(e,n,t){var r="",u=e.tag,i=Object.keys(t),o,a,l,s,d;for(o=0,a=i.length;o<a;o+=1)d="",o!==0&&(d+=", "),e.condenseFlow&&(d+='"'),l=i[o],s=t[l],vt(e,n,l,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),vt(e,n,s,!1,!1)&&(d+=e.dump,r+=d));e.tag=u,e.dump="{"+r+"}"}function qx(e,n,t,r){var u="",i=e.tag,o=Object.keys(t),a,l,s,d,c,f;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new bu("sortKeys must be a boolean or a function");for(a=0,l=o.length;a<l;a+=1)f="",(!r||a!==0)&&(f+=Qa(e,n)),s=o[a],d=t[s],vt(e,n+1,s,!0,!0,!0)&&(c=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,c&&(e.dump&&ru===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,c&&(f+=Qa(e,n)),vt(e,n+1,d,!0,c)&&(e.dump&&ru===e.dump.charCodeAt(0)?f+=":":f+=": ",f+=e.dump,u+=f));e.tag=i,e.dump=u||"{}"}function Kc(e,n,t){var r,u,i,o,a,l;for(u=t?e.explicitTypes:e.implicitTypes,i=0,o=u.length;i<o;i+=1)if(a=u[i],(a.instanceOf||a.predicate)&&(!a.instanceOf||typeof n=="object"&&n instanceof a.instanceOf)&&(!a.predicate||a.predicate(n))){if(e.tag=t?a.tag:"?",a.represent){if(l=e.styleMap[a.tag]||a.defaultStyle,wp.call(a.represent)==="[object Function]")r=a.represent(n,l);else if(_p.call(a.represent,l))r=a.represent[l](n,l);else throw new bu("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');e.dump=r}return!0}return!1}function vt(e,n,t,r,u,i){e.tag=null,e.dump=t,Kc(e,t,!1)||Kc(e,t,!0);var o=wp.call(e.dump);r&&(r=e.flowLevel<0||e.flowLevel>n);var a=o==="[object Object]"||o==="[object Array]",l,s;if(a&&(l=e.duplicates.indexOf(t),s=l!==-1),(e.tag!==null&&e.tag!=="?"||s||e.indent!==2&&n>0)&&(u=!1),s&&e.usedDuplicates[l])e.dump="*ref_"+l;else{if(a&&s&&!e.usedDuplicates[l]&&(e.usedDuplicates[l]=!0),o==="[object Object]")r&&Object.keys(e.dump).length!==0?(qx(e,n,e.dump,u),s&&(e.dump="&ref_"+l+e.dump)):($x(e,n,e.dump),s&&(e.dump="&ref_"+l+" "+e.dump));else if(o==="[object Array]"){var d=e.noArrayIndent&&n>0?n-1:n;r&&e.dump.length!==0?(Ux(e,d,e.dump,u),s&&(e.dump="&ref_"+l+e.dump)):(Hx(e,d,e.dump),s&&(e.dump="&ref_"+l+" "+e.dump))}else if(o==="[object String]")e.tag!=="?"&&jx(e,e.dump,n,i);else{if(e.skipInvalid)return!1;throw new bu("unacceptable kind of an object to dump "+o)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function Wx(e,n){var t=[],r=[],u,i;for(Ja(e,t,r),u=0,i=r.length;u<i;u+=1)n.duplicates.push(t[r[u]]);n.usedDuplicates=new Array(i)}function Ja(e,n,t){var r,u,i;if(e!==null&&typeof e=="object")if(u=n.indexOf(e),u!==-1)t.indexOf(u)===-1&&t.push(u);else if(n.push(e),Array.isArray(e))for(u=0,i=e.length;u<i;u+=1)Ja(e[u],n,t);else for(r=Object.keys(e),u=0,i=r.length;u<i;u+=1)Ja(e[r[u]],n,t)}function Op(e,n){n=n||{};var t=new Rx(n);return t.noRefs||Wx(e,t),vt(t,0,e,!0,!0)?t.dump+`
`:""}function Gx(e,n){return Op(e,vu.extend({schema:hx},n))}as.dump=Op;as.safeDump=Gx;var oo=gu,Mp=as;function ao(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}Y.Type=ae;Y.Schema=fr;Y.FAILSAFE_SCHEMA=rs;Y.JSON_SCHEMA=ip;Y.CORE_SCHEMA=op;Y.DEFAULT_SAFE_SCHEMA=xu;Y.DEFAULT_FULL_SCHEMA=uo;Y.load=oo.load;Y.loadAll=oo.loadAll;Y.safeLoad=oo.safeLoad;Y.safeLoadAll=oo.safeLoadAll;Y.dump=Mp.dump;Y.safeDump=Mp.safeDump;Y.YAMLException=yu;Y.MINIMAL_SCHEMA=rs;Y.SAFE_SCHEMA=xu;Y.DEFAULT_SCHEMA=uo;Y.scan=ao("scan");Y.parse=ao("parse");Y.compose=ao("compose");Y.addConstructor=ao("addConstructor");var Vx=Y,Yx=Vx,Qc=Yx,Kx="\\ufeff?",Qx=typeof process<"u"?process.platform:"",Jx="^("+Kx+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(Qx==="win32"?"\\r?":"")+"(?:\\n)?)",jp=new RegExp(Jx,"m");ns.exports=Zx;ns.exports.test=nv;function Zx(e,n){e=e||"";var t={allowUnsafe:!1};n=n instanceof Object?{...t,...n}:t,n.allowUnsafe=!!n.allowUnsafe;var r=e.split(/(\r?\n)/);return r[0]&&/= yaml =|---/.test(r[0])?ev(e,n.allowUnsafe):{attributes:{},body:e,bodyBegin:1}}function Xx(e,n){for(var t=1,r=n.indexOf(`
`),u=e.index+e[0].length;r!==-1;){if(r>=u)return t;t++,r=n.indexOf(`
`,r+1)}return t}function ev(e,n){var t=jp.exec(e);if(!t)return{attributes:{},body:e,bodyBegin:1};var r=n?Qc.load:Qc.safeLoad,u=t[t.length-1].replace(/^\s+|\s+$/g,""),i=r(u)||{},o=e.replace(t[0],""),a=Xx(t,e);return{attributes:i,body:o,bodyBegin:a,frontmatter:u}}function nv(e){return e=e||"",jp.test(e)}var tv=ns.exports;const Bp=ch(tv),Jc={};function rv(e){let n=Jc[e];if(n)return n;n=Jc[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function ur(e,n){typeof n!="string"&&(n=ur.defaultChars);const t=rv(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let u="";for(let i=0,o=r.length;i<o;i+=3){const a=parseInt(r.slice(i+1,i+3),16);if(a<128){u+=t[a];continue}if((a&224)===192&&i+3<o){const l=parseInt(r.slice(i+4,i+6),16);if((l&192)===128){const s=a<<6&1984|l&63;s<128?u+="��":u+=String.fromCharCode(s),i+=3;continue}}if((a&240)===224&&i+6<o){const l=parseInt(r.slice(i+4,i+6),16),s=parseInt(r.slice(i+7,i+9),16);if((l&192)===128&&(s&192)===128){const d=a<<12&61440|l<<6&4032|s&63;d<2048||d>=55296&&d<=57343?u+="���":u+=String.fromCharCode(d),i+=6;continue}}if((a&248)===240&&i+9<o){const l=parseInt(r.slice(i+4,i+6),16),s=parseInt(r.slice(i+7,i+9),16),d=parseInt(r.slice(i+10,i+12),16);if((l&192)===128&&(s&192)===128&&(d&192)===128){let c=a<<18&1835008|l<<12&258048|s<<6&4032|d&63;c<65536||c>1114111?u+="����":(c-=65536,u+=String.fromCharCode(55296+(c>>10),56320+(c&1023))),i+=9;continue}}u+="�"}return u})}ur.defaultChars=";/?:@&=+$,#";ur.componentChars="";const Zc={};function uv(e){let n=Zc[e];if(n)return n;n=Zc[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function ku(e,n,t){typeof n!="string"&&(t=n,n=ku.defaultChars),typeof t>"u"&&(t=!0);const r=uv(n);let u="";for(let i=0,o=e.length;i<o;i++){const a=e.charCodeAt(i);if(t&&a===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){u+=e.slice(i,i+3),i+=2;continue}if(a<128){u+=r[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&i+1<o){const l=e.charCodeAt(i+1);if(l>=56320&&l<=57343){u+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}u+="%EF%BF%BD";continue}u+=encodeURIComponent(e[i])}return u}ku.defaultChars=";/?:@&=+$,-_.!~*'()#";ku.componentChars="-_.!~*'()";function ss(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function Mi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const iv=/^([a-z0-9.+-]+:)/i,ov=/:[0-9]*$/,av=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,lv=["<",">",'"',"`"," ","\r",`
`,"	"],sv=["{","}","|","\\","^","`"].concat(lv),cv=["'"].concat(sv),Xc=["%","/","?",";","#"].concat(cv),ed=["/","?","#"],dv=255,nd=/^[+a-z0-9A-Z_-]{0,63}$/,fv=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,td={javascript:!0,"javascript:":!0},rd={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function cs(e,n){if(e&&e instanceof Mi)return e;const t=new Mi;return t.parse(e,n),t}Mi.prototype.parse=function(e,n){let t,r,u,i=e;if(i=i.trim(),!n&&e.split("#").length===1){const s=av.exec(i);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}let o=iv.exec(i);if(o&&(o=o[0],t=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(n||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(u=i.substr(0,2)==="//",u&&!(o&&td[o])&&(i=i.substr(2),this.slashes=!0)),!td[o]&&(u||o&&!rd[o])){let s=-1;for(let g=0;g<ed.length;g++)r=i.indexOf(ed[g]),r!==-1&&(s===-1||r<s)&&(s=r);let d,c;s===-1?c=i.lastIndexOf("@"):c=i.lastIndexOf("@",s),c!==-1&&(d=i.slice(0,c),i=i.slice(c+1),this.auth=d),s=-1;for(let g=0;g<Xc.length;g++)r=i.indexOf(Xc[g]),r!==-1&&(s===-1||r<s)&&(s=r);s===-1&&(s=i.length),i[s-1]===":"&&s--;const f=i.slice(0,s);i=i.slice(s),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const g=this.hostname.split(/\./);for(let b=0,k=g.length;b<k;b++){const y=g[b];if(y&&!y.match(nd)){let p="";for(let m=0,x=y.length;m<x;m++)y.charCodeAt(m)>127?p+="x":p+=y[m];if(!p.match(nd)){const m=g.slice(0,b),x=g.slice(b+1),_=y.match(fv);_&&(m.push(_[1]),x.unshift(_[2])),x.length&&(i=x.join(".")+i),this.hostname=m.join(".");break}}}}this.hostname.length>dv&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=i.indexOf("#");a!==-1&&(this.hash=i.substr(a),i=i.slice(0,a));const l=i.indexOf("?");return l!==-1&&(this.search=i.substr(l),i=i.slice(0,l)),i&&(this.pathname=i),rd[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Mi.prototype.parseHost=function(e){let n=ov.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const pv=Object.freeze(Object.defineProperty({__proto__:null,decode:ur,encode:ku,format:ss,parse:cs},Symbol.toStringTag,{value:"Module"})),zp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Hp=/[\0-\x1F\x7F-\x9F]/,hv=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,ds=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Up=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,$p=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,mv=Object.freeze(Object.defineProperty({__proto__:null,Any:zp,Cc:Hp,Cf:hv,P:ds,S:Up,Z:$p},Symbol.toStringTag,{value:"Module"})),gv=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),yv=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Wo;const xv=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),vv=(Wo=String.fromCodePoint)!==null&&Wo!==void 0?Wo:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function bv(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=xv.get(e))!==null&&n!==void 0?n:e}var ie;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ie||(ie={}));const kv=32;var Mn;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Mn||(Mn={}));function Za(e){return e>=ie.ZERO&&e<=ie.NINE}function wv(e){return e>=ie.UPPER_A&&e<=ie.UPPER_F||e>=ie.LOWER_A&&e<=ie.LOWER_F}function _v(e){return e>=ie.UPPER_A&&e<=ie.UPPER_Z||e>=ie.LOWER_A&&e<=ie.LOWER_Z||Za(e)}function Sv(e){return e===ie.EQUALS||_v(e)}var re;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(re||(re={}));var Nn;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Nn||(Nn={}));class Cv{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=re.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Nn.Strict}startEntity(n){this.decodeMode=n,this.state=re.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case re.EntityStart:return n.charCodeAt(t)===ie.NUM?(this.state=re.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=re.NamedEntity,this.stateNamedEntity(n,t));case re.NumericStart:return this.stateNumericStart(n,t);case re.NumericDecimal:return this.stateNumericDecimal(n,t);case re.NumericHex:return this.stateNumericHex(n,t);case re.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|kv)===ie.LOWER_X?(this.state=re.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=re.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,u){if(t!==r){const i=r-t;this.result=this.result*Math.pow(u,i)+parseInt(n.substr(t,i),u),this.consumed+=i}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const u=n.charCodeAt(t);if(Za(u)||wv(u))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(u,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const u=n.charCodeAt(t);if(Za(u))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(u,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===ie.SEMI)this.consumed+=1;else if(this.decodeMode===Nn.Strict)return 0;return this.emitCodePoint(bv(this.result),this.consumed),this.errors&&(n!==ie.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let u=r[this.treeIndex],i=(u&Mn.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const o=n.charCodeAt(t);if(this.treeIndex=Ev(r,u,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===Nn.Attribute&&(i===0||Sv(o))?0:this.emitNotTerminatedNamedEntity();if(u=r[this.treeIndex],i=(u&Mn.VALUE_LENGTH)>>14,i!==0){if(o===ie.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Nn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,u=(r[t]&Mn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,u,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:u}=this;return this.emitCodePoint(t===1?u[n]&~Mn.VALUE_LENGTH:u[n+1],r),t===3&&this.emitCodePoint(u[n+2],r),r}end(){var n;switch(this.state){case re.NamedEntity:return this.result!==0&&(this.decodeMode!==Nn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case re.NumericDecimal:return this.emitNumericEntity(0,2);case re.NumericHex:return this.emitNumericEntity(0,3);case re.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case re.EntityStart:return 0}}}function qp(e){let n="";const t=new Cv(e,r=>n+=vv(r));return function(u,i){let o=0,a=0;for(;(a=u.indexOf("&",a))>=0;){n+=u.slice(o,a),t.startEntity(i);const s=t.write(u,a+1);if(s<0){o=a+t.end();break}o=a+s,a=s===0?o+1:o}const l=n+u.slice(o);return n="",l}}function Ev(e,n,t,r){const u=(n&Mn.BRANCH_LENGTH)>>7,i=n&Mn.JUMP_TABLE;if(u===0)return i!==0&&r===i?t:-1;if(i){const l=r-i;return l<0||l>=u?-1:e[t+l]-1}let o=t,a=o+u-1;for(;o<=a;){const l=o+a>>>1,s=e[l];if(s<r)o=l+1;else if(s>r)a=l-1;else return e[l+u]}return-1}const Av=qp(gv);qp(yv);function Wp(e,n=Nn.Legacy){return Av(e,n)}function Dv(e){return Object.prototype.toString.call(e)}function fs(e){return Dv(e)==="[object String]"}const Fv=Object.prototype.hasOwnProperty;function Tv(e,n){return Fv.call(e,n)}function lo(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function Gp(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function ps(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function ji(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const Vp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Pv=/&([a-z#][a-z0-9]{1,31});/gi,Iv=new RegExp(Vp.source+"|"+Pv.source,"gi"),Rv=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Nv(e,n){if(n.charCodeAt(0)===35&&Rv.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return ps(r)?ji(r):e}const t=Wp(e);return t!==e?t:e}function Lv(e){return e.indexOf("\\")<0?e:e.replace(Vp,"$1")}function ir(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Iv,function(n,t,r){return t||Nv(n,r)})}const Ov=/[&<>"]/,Mv=/[&<>"]/g,jv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Bv(e){return jv[e]}function Jn(e){return Ov.test(e)?e.replace(Mv,Bv):e}const zv=/[.?*+^$[\]\\(){}|-]/g;function Hv(e){return e.replace(zv,"\\$&")}function B(e){switch(e){case 9:case 32:return!0}return!1}function uu(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function iu(e){return ds.test(e)||Up.test(e)}function ou(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function so(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const Uv={mdurl:pv,ucmicro:mv},$v=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Gp,assign:lo,escapeHtml:Jn,escapeRE:Hv,fromCodePoint:ji,has:Tv,isMdAsciiPunct:ou,isPunctChar:iu,isSpace:B,isString:fs,isValidEntityCode:ps,isWhiteSpace:uu,lib:Uv,normalizeReference:so,unescapeAll:ir,unescapeMd:Lv},Symbol.toStringTag,{value:"Module"}));function qv(e,n,t){let r,u,i,o;const a=e.posMax,l=e.pos;for(e.pos=n+1,r=1;e.pos<a;){if(i=e.src.charCodeAt(e.pos),i===93&&(r--,r===0)){u=!0;break}if(o=e.pos,e.md.inline.skipToken(e),i===91){if(o===e.pos-1)r++;else if(t)return e.pos=l,-1}}let s=-1;return u&&(s=e.pos),e.pos=l,s}function Wv(e,n,t){let r,u=n;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(u)===60){for(u++;u<t;){if(r=e.charCodeAt(u),r===10||r===60)return i;if(r===62)return i.pos=u+1,i.str=ir(e.slice(n+1,u)),i.ok=!0,i;if(r===92&&u+1<t){u+=2;continue}u++}return i}let o=0;for(;u<t&&(r=e.charCodeAt(u),!(r===32||r<32||r===127));){if(r===92&&u+1<t){if(e.charCodeAt(u+1)===32)break;u+=2;continue}if(r===40&&(o++,o>32))return i;if(r===41){if(o===0)break;o--}u++}return n===u||o!==0||(i.str=ir(e.slice(n,u)),i.pos=u,i.ok=!0),i}function Gv(e,n,t,r){let u,i=n;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(i>=t)return o;let a=e.charCodeAt(i);if(a!==34&&a!==39&&a!==40)return o;n++,i++,a===40&&(a=41),o.marker=a}for(;i<t;){if(u=e.charCodeAt(i),u===o.marker)return o.pos=i+1,o.str+=ir(e.slice(n,i)),o.ok=!0,o;if(u===40&&o.marker===41)return o;u===92&&i+1<t&&i++,i++}return o.can_continue=!0,o.str+=ir(e.slice(n,i)),o}const Vv=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Wv,parseLinkLabel:qv,parseLinkTitle:Gv},Symbol.toStringTag,{value:"Module"})),cn={};cn.code_inline=function(e,n,t,r,u){const i=e[n];return"<code"+u.renderAttrs(i)+">"+Jn(i.content)+"</code>"};cn.code_block=function(e,n,t,r,u){const i=e[n];return"<pre"+u.renderAttrs(i)+"><code>"+Jn(e[n].content)+`</code></pre>
`};cn.fence=function(e,n,t,r,u){const i=e[n],o=i.info?ir(i.info).trim():"";let a="",l="";if(o){const d=o.split(/(\s+)/g);a=d[0],l=d.slice(2).join("")}let s;if(t.highlight?s=t.highlight(i.content,a,l)||Jn(i.content):s=Jn(i.content),s.indexOf("<pre")===0)return s+`
`;if(o){const d=i.attrIndex("class"),c=i.attrs?i.attrs.slice():[];d<0?c.push(["class",t.langPrefix+a]):(c[d]=c[d].slice(),c[d][1]+=" "+t.langPrefix+a);const f={attrs:c};return`<pre><code${u.renderAttrs(f)}>${s}</code></pre>
`}return`<pre><code${u.renderAttrs(i)}>${s}</code></pre>
`};cn.image=function(e,n,t,r,u){const i=e[n];return i.attrs[i.attrIndex("alt")][1]=u.renderInlineAsText(i.children,t,r),u.renderToken(e,n,t)};cn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};cn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};cn.text=function(e,n){return Jn(e[n].content)};cn.html_block=function(e,n){return e[n].content};cn.html_inline=function(e,n){return e[n].content};function pr(){this.rules=lo({},cn)}pr.prototype.renderAttrs=function(n){let t,r,u;if(!n.attrs)return"";for(u="",t=0,r=n.attrs.length;t<r;t++)u+=" "+Jn(n.attrs[t][0])+'="'+Jn(n.attrs[t][1])+'"';return u};pr.prototype.renderToken=function(n,t,r){const u=n[t];let i="";if(u.hidden)return"";u.block&&u.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(u.nesting===-1?"</":"<")+u.tag,i+=this.renderAttrs(u),u.nesting===0&&r.xhtmlOut&&(i+=" /");let o=!1;if(u.block&&(o=!0,u.nesting===1&&t+1<n.length)){const a=n[t+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===u.tag)&&(o=!1)}return i+=o?`>
`:">",i};pr.prototype.renderInline=function(e,n,t){let r="";const u=this.rules;for(let i=0,o=e.length;i<o;i++){const a=e[i].type;typeof u[a]<"u"?r+=u[a](e,i,n,t,this):r+=this.renderToken(e,i,n)}return r};pr.prototype.renderInlineAsText=function(e,n,t){let r="";for(let u=0,i=e.length;u<i;u++)switch(e[u].type){case"text":r+=e[u].content;break;case"image":r+=this.renderInlineAsText(e[u].children,n,t);break;case"html_inline":case"html_block":r+=e[u].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};pr.prototype.render=function(e,n,t){let r="";const u=this.rules;for(let i=0,o=e.length;i<o;i++){const a=e[i].type;a==="inline"?r+=this.renderInline(e[i].children,n,t):typeof u[a]<"u"?r+=u[a](e,i,n,t,this):r+=this.renderToken(e,i,n,t)}return r};function Ae(){this.__rules__=[],this.__cache__=null}Ae.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Ae.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};Ae.prototype.at=function(e,n,t){const r=this.__find__(e),u=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=u.alt||[],this.__cache__=null};Ae.prototype.before=function(e,n,t,r){const u=this.__find__(e),i=r||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(u,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Ae.prototype.after=function(e,n,t,r){const u=this.__find__(e),i=r||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(u+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Ae.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};Ae.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const u=this.__find__(r);if(u<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[u].enabled=!0,t.push(r)},this),this.__cache__=null,t};Ae.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Ae.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const u=this.__find__(r);if(u<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[u].enabled=!1,t.push(r)},this),this.__cache__=null,t};Ae.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Qe(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Qe.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,u=t.length;r<u;r++)if(t[r][0]===n)return r;return-1};Qe.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Qe.prototype.attrSet=function(n,t){const r=this.attrIndex(n),u=[n,t];r<0?this.attrPush(u):this.attrs[r]=u};Qe.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Qe.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function Yp(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Yp.prototype.Token=Qe;const Yv=/\r\n?|\n/g,Kv=/\0/g;function Qv(e){let n;n=e.src.replace(Yv,`
`),n=n.replace(Kv,"�"),e.src=n}function Jv(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Zv(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const u=n[t];u.type==="inline"&&e.md.inline.parse(u.content,e.md,e.env,u.children)}}function Xv(e){return/^<a[>\s]/i.test(e)}function eb(e){return/^<\/a\s*>/i.test(e)}function nb(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let u=n[t].children,i=0;for(let o=u.length-1;o>=0;o--){const a=u[o];if(a.type==="link_close"){for(o--;u[o].level!==a.level&&u[o].type!=="link_open";)o--;continue}if(a.type==="html_inline"&&(Xv(a.content)&&i>0&&i--,eb(a.content)&&i++),!(i>0)&&a.type==="text"&&e.md.linkify.test(a.content)){const l=a.content;let s=e.md.linkify.match(l);const d=[];let c=a.level,f=0;s.length>0&&s[0].index===0&&o>0&&u[o-1].type==="text_special"&&(s=s.slice(1));for(let h=0;h<s.length;h++){const g=s[h].url,b=e.md.normalizeLink(g);if(!e.md.validateLink(b))continue;let k=s[h].text;s[h].schema?s[h].schema==="mailto:"&&!/^mailto:/i.test(k)?k=e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=e.md.normalizeLinkText(k):k=e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,"");const y=s[h].index;if(y>f){const _=new e.Token("text","",0);_.content=l.slice(f,y),_.level=c,d.push(_)}const p=new e.Token("link_open","a",1);p.attrs=[["href",b]],p.level=c++,p.markup="linkify",p.info="auto",d.push(p);const m=new e.Token("text","",0);m.content=k,m.level=c,d.push(m);const x=new e.Token("link_close","a",-1);x.level=--c,x.markup="linkify",x.info="auto",d.push(x),f=s[h].lastIndex}if(f<l.length){const h=new e.Token("text","",0);h.content=l.slice(f),h.level=c,d.push(h)}n[t].children=u=Gp(u,o,d)}}}}const Kp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,tb=/\((c|tm|r)\)/i,rb=/\((c|tm|r)\)/ig,ub={c:"©",r:"®",tm:"™"};function ib(e,n){return ub[n.toLowerCase()]}function ob(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(rb,ib)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function ab(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&Kp.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function lb(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(tb.test(e.tokens[n].content)&&ob(e.tokens[n].children),Kp.test(e.tokens[n].content)&&ab(e.tokens[n].children))}const sb=/['"]/,ud=/['"]/g,id="’";function qu(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function cb(e,n){let t;const r=[];for(let u=0;u<e.length;u++){const i=e[u],o=e[u].level;for(t=r.length-1;t>=0&&!(r[t].level<=o);t--);if(r.length=t+1,i.type!=="text")continue;let a=i.content,l=0,s=a.length;e:for(;l<s;){ud.lastIndex=l;const d=ud.exec(a);if(!d)break;let c=!0,f=!0;l=d.index+1;const h=d[0]==="'";let g=32;if(d.index-1>=0)g=a.charCodeAt(d.index-1);else for(t=u-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){g=e[t].content.charCodeAt(e[t].content.length-1);break}let b=32;if(l<s)b=a.charCodeAt(l);else for(t=u+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){b=e[t].content.charCodeAt(0);break}const k=ou(g)||iu(String.fromCharCode(g)),y=ou(b)||iu(String.fromCharCode(b)),p=uu(g),m=uu(b);if(m?c=!1:y&&(p||k||(c=!1)),p?f=!1:k&&(m||y||(f=!1)),b===34&&d[0]==='"'&&g>=48&&g<=57&&(f=c=!1),c&&f&&(c=k,f=y),!c&&!f){h&&(i.content=qu(i.content,d.index,id));continue}if(f)for(t=r.length-1;t>=0;t--){let x=r[t];if(r[t].level<o)break;if(x.single===h&&r[t].level===o){x=r[t];let _,S;h?(_=n.md.options.quotes[2],S=n.md.options.quotes[3]):(_=n.md.options.quotes[0],S=n.md.options.quotes[1]),i.content=qu(i.content,d.index,S),e[x.token].content=qu(e[x.token].content,x.pos,_),l+=S.length-1,x.token===u&&(l+=_.length-1),a=i.content,s=a.length,r.length=t;continue e}}c?r.push({token:u,pos:d.index,single:h,level:o}):f&&h&&(i.content=qu(i.content,d.index,id))}}}function db(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!sb.test(e.tokens[n].content)||cb(e.tokens[n].children,e)}function fb(e){let n,t;const r=e.tokens,u=r.length;for(let i=0;i<u;i++){if(r[i].type!=="inline")continue;const o=r[i].children,a=o.length;for(n=0;n<a;n++)o[n].type==="text_special"&&(o[n].type="text");for(n=t=0;n<a;n++)o[n].type==="text"&&n+1<a&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==t&&(o[t]=o[n]),t++);n!==t&&(o.length=t)}}const Go=[["normalize",Qv],["block",Jv],["inline",Zv],["linkify",nb],["replacements",lb],["smartquotes",db],["text_join",fb]];function hs(){this.ruler=new Ae;for(let e=0;e<Go.length;e++)this.ruler.push(Go[e][0],Go[e][1])}hs.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};hs.prototype.State=Yp;function dn(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const u=this.src;for(let i=0,o=0,a=0,l=0,s=u.length,d=!1;o<s;o++){const c=u.charCodeAt(o);if(!d)if(B(c)){a++,c===9?l+=4-l%4:l++;continue}else d=!0;(c===10||o===s-1)&&(c!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(a),this.sCount.push(l),this.bsCount.push(0),d=!1,a=0,l=0,i=o+1)}this.bMarks.push(u.length),this.eMarks.push(u.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}dn.prototype.push=function(e,n,t){const r=new Qe(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};dn.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};dn.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};dn.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!B(r))break}return n};dn.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!B(this.src.charCodeAt(--n)))return n+1;return n};dn.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};dn.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};dn.prototype.getLines=function(n,t,r,u){if(n>=t)return"";const i=new Array(t-n);for(let o=0,a=n;a<t;a++,o++){let l=0;const s=this.bMarks[a];let d=s,c;for(a+1<t||u?c=this.eMarks[a]+1:c=this.eMarks[a];d<c&&l<r;){const f=this.src.charCodeAt(d);if(B(f))f===9?l+=4-(l+this.bsCount[a])%4:l++;else if(d-s<this.tShift[a])l++;else break;d++}l>r?i[o]=new Array(l-r+1).join(" ")+this.src.slice(d,c):i[o]=this.src.slice(d,c)}return i.join("")};dn.prototype.Token=Qe;const pb=65536;function Vo(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function od(e){const n=[],t=e.length;let r=0,u=e.charCodeAt(r),i=!1,o=0,a="";for(;r<t;)u===124&&(i?(a+=e.substring(o,r-1),o=r):(n.push(a+e.substring(o,r)),a="",o=r+1)),i=u===92,r++,u=e.charCodeAt(r);return n.push(a+e.substring(o)),n}function hb(e,n,t,r){if(n+2>t)return!1;let u=n+1;if(e.sCount[u]<e.blkIndent||e.sCount[u]-e.blkIndent>=4)return!1;let i=e.bMarks[u]+e.tShift[u];if(i>=e.eMarks[u])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=e.eMarks[u])return!1;const a=e.src.charCodeAt(i++);if(a!==124&&a!==45&&a!==58&&!B(a)||o===45&&B(a))return!1;for(;i<e.eMarks[u];){const x=e.src.charCodeAt(i);if(x!==124&&x!==45&&x!==58&&!B(x))return!1;i++}let l=Vo(e,n+1),s=l.split("|");const d=[];for(let x=0;x<s.length;x++){const _=s[x].trim();if(!_){if(x===0||x===s.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;_.charCodeAt(_.length-1)===58?d.push(_.charCodeAt(0)===58?"center":"right"):_.charCodeAt(0)===58?d.push("left"):d.push("")}if(l=Vo(e,n).trim(),l.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;s=od(l),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop();const c=s.length;if(c===0||c!==d.length)return!1;if(r)return!0;const f=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),g=e.push("table_open","table",1),b=[n,0];g.map=b;const k=e.push("thead_open","thead",1);k.map=[n,n+1];const y=e.push("tr_open","tr",1);y.map=[n,n+1];for(let x=0;x<s.length;x++){const _=e.push("th_open","th",1);d[x]&&(_.attrs=[["style","text-align:"+d[x]]]);const S=e.push("inline","",0);S.content=s[x].trim(),S.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let p,m=0;for(u=n+2;u<t&&!(e.sCount[u]<e.blkIndent);u++){let x=!1;for(let S=0,E=h.length;S<E;S++)if(h[S](e,u,t,!0)){x=!0;break}if(x||(l=Vo(e,u).trim(),!l)||e.sCount[u]-e.blkIndent>=4||(s=od(l),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop(),m+=c-s.length,m>pb))break;if(u===n+2){const S=e.push("tbody_open","tbody",1);S.map=p=[n+2,0]}const _=e.push("tr_open","tr",1);_.map=[u,u+1];for(let S=0;S<c;S++){const E=e.push("td_open","td",1);d[S]&&(E.attrs=[["style","text-align:"+d[S]]]);const A=e.push("inline","",0);A.content=s[S]?s[S].trim():"",A.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return p&&(e.push("tbody_close","tbody",-1),p[1]=u),e.push("table_close","table",-1),b[1]=u,e.parentType=f,e.line=u,!0}function mb(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,u=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,u=r;continue}break}e.line=u;const i=e.push("code_block","code",0);return i.content=e.getLines(n,u,4+e.blkIndent,!1)+`
`,i.map=[n,e.line],!0}function gb(e,n,t,r){let u=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||u+3>i)return!1;const o=e.src.charCodeAt(u);if(o!==126&&o!==96)return!1;let a=u;u=e.skipChars(u,o);let l=u-a;if(l<3)return!1;const s=e.src.slice(a,u),d=e.src.slice(u,i);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let c=n,f=!1;for(;c++,!(c>=t||(u=a=e.bMarks[c]+e.tShift[c],i=e.eMarks[c],u<i&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(u)===o&&!(e.sCount[c]-e.blkIndent>=4)&&(u=e.skipChars(u,o),!(u-a<l)&&(u=e.skipSpaces(u),!(u<i)))){f=!0;break}l=e.sCount[n],e.line=c+(f?1:0);const h=e.push("fence","code",0);return h.info=d,h.content=e.getLines(n+1,c,l,!0),h.markup=s,h.map=[n,e.line],!0}function yb(e,n,t,r){let u=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];const o=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(u)!==62)return!1;if(r)return!0;const a=[],l=[],s=[],d=[],c=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let h=!1,g;for(g=n;g<t;g++){const m=e.sCount[g]<e.blkIndent;if(u=e.bMarks[g]+e.tShift[g],i=e.eMarks[g],u>=i)break;if(e.src.charCodeAt(u++)===62&&!m){let _=e.sCount[g]+1,S,E;e.src.charCodeAt(u)===32?(u++,_++,E=!1,S=!0):e.src.charCodeAt(u)===9?(S=!0,(e.bsCount[g]+_)%4===3?(u++,_++,E=!1):E=!0):S=!1;let A=_;for(a.push(e.bMarks[g]),e.bMarks[g]=u;u<i;){const I=e.src.charCodeAt(u);if(B(I))I===9?A+=4-(A+e.bsCount[g]+(E?1:0))%4:A++;else break;u++}h=u>=i,l.push(e.bsCount[g]),e.bsCount[g]=e.sCount[g]+1+(S?1:0),s.push(e.sCount[g]),e.sCount[g]=A-_,d.push(e.tShift[g]),e.tShift[g]=u-e.bMarks[g];continue}if(h)break;let x=!1;for(let _=0,S=c.length;_<S;_++)if(c[_](e,g,t,!0)){x=!0;break}if(x){e.lineMax=g,e.blkIndent!==0&&(a.push(e.bMarks[g]),l.push(e.bsCount[g]),d.push(e.tShift[g]),s.push(e.sCount[g]),e.sCount[g]-=e.blkIndent);break}a.push(e.bMarks[g]),l.push(e.bsCount[g]),d.push(e.tShift[g]),s.push(e.sCount[g]),e.sCount[g]=-1}const b=e.blkIndent;e.blkIndent=0;const k=e.push("blockquote_open","blockquote",1);k.markup=">";const y=[n,0];k.map=y,e.md.block.tokenize(e,n,g);const p=e.push("blockquote_close","blockquote",-1);p.markup=">",e.lineMax=o,e.parentType=f,y[1]=e.line;for(let m=0;m<d.length;m++)e.bMarks[m+n]=a[m],e.tShift[m+n]=d[m],e.sCount[m+n]=s[m],e.bsCount[m+n]=l[m];return e.blkIndent=b,!0}function xb(e,n,t,r){const u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let i=e.bMarks[n]+e.tShift[n];const o=e.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let a=1;for(;i<u;){const s=e.src.charCodeAt(i++);if(s!==o&&!B(s))return!1;s===o&&a++}if(a<3)return!1;if(r)return!0;e.line=n+1;const l=e.push("hr","hr",0);return l.map=[n,e.line],l.markup=Array(a+1).join(String.fromCharCode(o)),!0}function ad(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const u=e.src.charCodeAt(r++);if(u!==42&&u!==45&&u!==43)return-1;if(r<t){const i=e.src.charCodeAt(r);if(!B(i))return-1}return r}function ld(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let u=t;if(u+1>=r)return-1;let i=e.src.charCodeAt(u++);if(i<48||i>57)return-1;for(;;){if(u>=r)return-1;if(i=e.src.charCodeAt(u++),i>=48&&i<=57){if(u-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return u<r&&(i=e.src.charCodeAt(u),!B(i))?-1:u}function vb(e,n){const t=e.level+2;for(let r=n+2,u=e.tokens.length-2;r<u;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function bb(e,n,t,r){let u,i,o,a,l=n,s=!0;if(e.sCount[l]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[l]-e.listIndent>=4&&e.sCount[l]<e.blkIndent)return!1;let d=!1;r&&e.parentType==="paragraph"&&e.sCount[l]>=e.blkIndent&&(d=!0);let c,f,h;if((h=ld(e,l))>=0){if(c=!0,o=e.bMarks[l]+e.tShift[l],f=Number(e.src.slice(o,h-1)),d&&f!==1)return!1}else if((h=ad(e,l))>=0)c=!1;else return!1;if(d&&e.skipSpaces(h)>=e.eMarks[l])return!1;if(r)return!0;const g=e.src.charCodeAt(h-1),b=e.tokens.length;c?(a=e.push("ordered_list_open","ol",1),f!==1&&(a.attrs=[["start",f]])):a=e.push("bullet_list_open","ul",1);const k=[l,0];a.map=k,a.markup=String.fromCharCode(g);let y=!1;const p=e.md.block.ruler.getRules("list"),m=e.parentType;for(e.parentType="list";l<t;){i=h,u=e.eMarks[l];const x=e.sCount[l]+h-(e.bMarks[l]+e.tShift[l]);let _=x;for(;i<u;){const En=e.src.charCodeAt(i);if(En===9)_+=4-(_+e.bsCount[l])%4;else if(En===32)_++;else break;i++}const S=i;let E;S>=u?E=1:E=_-x,E>4&&(E=1);const A=x+E;a=e.push("list_item_open","li",1),a.markup=String.fromCharCode(g);const I=[l,0];a.map=I,c&&(a.info=e.src.slice(o,h-1));const P=e.tight,ne=e.tShift[l],nt=e.sCount[l],tt=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=A,e.tight=!0,e.tShift[l]=S-e.bMarks[l],e.sCount[l]=_,S>=u&&e.isEmpty(l+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,l,t,!0),(!e.tight||y)&&(s=!1),y=e.line-l>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=tt,e.tShift[l]=ne,e.sCount[l]=nt,e.tight=P,a=e.push("list_item_close","li",-1),a.markup=String.fromCharCode(g),l=e.line,I[1]=l,l>=t||e.sCount[l]<e.blkIndent||e.sCount[l]-e.blkIndent>=4)break;let hr=!1;for(let En=0,mr=p.length;En<mr;En++)if(p[En](e,l,t,!0)){hr=!0;break}if(hr)break;if(c){if(h=ld(e,l),h<0)break;o=e.bMarks[l]+e.tShift[l]}else if(h=ad(e,l),h<0)break;if(g!==e.src.charCodeAt(h-1))break}return c?a=e.push("ordered_list_close","ol",-1):a=e.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(g),k[1]=l,e.line=l,e.parentType=m,s&&vb(e,b),!0}function kb(e,n,t,r){let u=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],o=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(u)!==91)return!1;function a(p){const m=e.lineMax;if(p>=m||e.isEmpty(p))return null;let x=!1;if(e.sCount[p]-e.blkIndent>3&&(x=!0),e.sCount[p]<0&&(x=!0),!x){const E=e.md.block.ruler.getRules("reference"),A=e.parentType;e.parentType="reference";let I=!1;for(let P=0,ne=E.length;P<ne;P++)if(E[P](e,p,m,!0)){I=!0;break}if(e.parentType=A,I)return null}const _=e.bMarks[p]+e.tShift[p],S=e.eMarks[p];return e.src.slice(_,S+1)}let l=e.src.slice(u,i+1);i=l.length;let s=-1;for(u=1;u<i;u++){const p=l.charCodeAt(u);if(p===91)return!1;if(p===93){s=u;break}else if(p===10){const m=a(o);m!==null&&(l+=m,i=l.length,o++)}else if(p===92&&(u++,u<i&&l.charCodeAt(u)===10)){const m=a(o);m!==null&&(l+=m,i=l.length,o++)}}if(s<0||l.charCodeAt(s+1)!==58)return!1;for(u=s+2;u<i;u++){const p=l.charCodeAt(u);if(p===10){const m=a(o);m!==null&&(l+=m,i=l.length,o++)}else if(!B(p))break}const d=e.md.helpers.parseLinkDestination(l,u,i);if(!d.ok)return!1;const c=e.md.normalizeLink(d.str);if(!e.md.validateLink(c))return!1;u=d.pos;const f=u,h=o,g=u;for(;u<i;u++){const p=l.charCodeAt(u);if(p===10){const m=a(o);m!==null&&(l+=m,i=l.length,o++)}else if(!B(p))break}let b=e.md.helpers.parseLinkTitle(l,u,i);for(;b.can_continue;){const p=a(o);if(p===null)break;l+=p,u=i,i=l.length,o++,b=e.md.helpers.parseLinkTitle(l,u,i,b)}let k;for(u<i&&g!==u&&b.ok?(k=b.str,u=b.pos):(k="",u=f,o=h);u<i;){const p=l.charCodeAt(u);if(!B(p))break;u++}if(u<i&&l.charCodeAt(u)!==10&&k)for(k="",u=f,o=h;u<i;){const p=l.charCodeAt(u);if(!B(p))break;u++}if(u<i&&l.charCodeAt(u)!==10)return!1;const y=so(l.slice(1,s));return y?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[y]>"u"&&(e.env.references[y]={title:k,href:c}),e.line=o),!0):!1}const wb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],_b="[a-zA-Z_:][a-zA-Z0-9:._-]*",Sb="[^\"'=<>`\\x00-\\x20]+",Cb="'[^']*'",Eb='"[^"]*"',Ab="(?:"+Sb+"|"+Cb+"|"+Eb+")",Db="(?:\\s+"+_b+"(?:\\s*=\\s*"+Ab+")?)",Qp="<[A-Za-z][A-Za-z0-9\\-]*"+Db+"*\\s*\\/?>",Jp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Fb="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Tb="<[?][\\s\\S]*?[?]>",Pb="<![A-Za-z][^>]*>",Ib="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Rb=new RegExp("^(?:"+Qp+"|"+Jp+"|"+Fb+"|"+Tb+"|"+Pb+"|"+Ib+")"),Nb=new RegExp("^(?:"+Qp+"|"+Jp+")"),Et=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+wb.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Nb.source+"\\s*$"),/^$/,!1]];function Lb(e,n,t,r){let u=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(u)!==60)return!1;let o=e.src.slice(u,i),a=0;for(;a<Et.length&&!Et[a][0].test(o);a++);if(a===Et.length)return!1;if(r)return Et[a][2];let l=n+1;if(!Et[a][1].test(o)){for(;l<t&&!(e.sCount[l]<e.blkIndent);l++)if(u=e.bMarks[l]+e.tShift[l],i=e.eMarks[l],o=e.src.slice(u,i),Et[a][1].test(o)){o.length!==0&&l++;break}}e.line=l;const s=e.push("html_block","",0);return s.map=[n,l],s.content=e.getLines(n,l,e.blkIndent,!0),!0}function Ob(e,n,t,r){let u=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(u);if(o!==35||u>=i)return!1;let a=1;for(o=e.src.charCodeAt(++u);o===35&&u<i&&a<=6;)a++,o=e.src.charCodeAt(++u);if(a>6||u<i&&!B(o))return!1;if(r)return!0;i=e.skipSpacesBack(i,u);const l=e.skipCharsBack(i,35,u);l>u&&B(e.src.charCodeAt(l-1))&&(i=l),e.line=n+1;const s=e.push("heading_open","h"+String(a),1);s.markup="########".slice(0,a),s.map=[n,e.line];const d=e.push("inline","",0);d.content=e.src.slice(u,i).trim(),d.map=[n,e.line],d.children=[];const c=e.push("heading_close","h"+String(a),-1);return c.markup="########".slice(0,a),!0}function Mb(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const u=e.parentType;e.parentType="paragraph";let i=0,o,a=n+1;for(;a<t&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3)continue;if(e.sCount[a]>=e.blkIndent){let h=e.bMarks[a]+e.tShift[a];const g=e.eMarks[a];if(h<g&&(o=e.src.charCodeAt(h),(o===45||o===61)&&(h=e.skipChars(h,o),h=e.skipSpaces(h),h>=g))){i=o===61?1:2;break}}if(e.sCount[a]<0)continue;let f=!1;for(let h=0,g=r.length;h<g;h++)if(r[h](e,a,t,!0)){f=!0;break}if(f)break}if(!i)return!1;const l=e.getLines(n,a,e.blkIndent,!1).trim();e.line=a+1;const s=e.push("heading_open","h"+String(i),1);s.markup=String.fromCharCode(o),s.map=[n,e.line];const d=e.push("inline","",0);d.content=l,d.map=[n,e.line-1],d.children=[];const c=e.push("heading_close","h"+String(i),-1);return c.markup=String.fromCharCode(o),e.parentType=u,!0}function jb(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),u=e.parentType;let i=n+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let s=!1;for(let d=0,c=r.length;d<c;d++)if(r[d](e,i,t,!0)){s=!0;break}if(s)break}const o=e.getLines(n,i,e.blkIndent,!1).trim();e.line=i;const a=e.push("paragraph_open","p",1);a.map=[n,e.line];const l=e.push("inline","",0);return l.content=o,l.map=[n,e.line],l.children=[],e.push("paragraph_close","p",-1),e.parentType=u,!0}const Wu=[["table",hb,["paragraph","reference"]],["code",mb],["fence",gb,["paragraph","reference","blockquote","list"]],["blockquote",yb,["paragraph","reference","blockquote","list"]],["hr",xb,["paragraph","reference","blockquote","list"]],["list",bb,["paragraph","reference","blockquote"]],["reference",kb],["html_block",Lb,["paragraph","reference","blockquote"]],["heading",Ob,["paragraph","reference","blockquote"]],["lheading",Mb],["paragraph",jb]];function co(){this.ruler=new Ae;for(let e=0;e<Wu.length;e++)this.ruler.push(Wu[e][0],Wu[e][1],{alt:(Wu[e][2]||[]).slice()})}co.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),u=r.length,i=e.md.options.maxNesting;let o=n,a=!1;for(;o<t&&(e.line=o=e.skipEmptyLines(o),!(o>=t||e.sCount[o]<e.blkIndent));){if(e.level>=i){e.line=t;break}const l=e.line;let s=!1;for(let d=0;d<u;d++)if(s=r[d](e,o,t,!1),s){if(l>=e.line)throw new Error("block rule didn't increment state.line");break}if(!s)throw new Error("none of the block rules matched");e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),o=e.line,o<t&&e.isEmpty(o)&&(a=!0,o++,e.line=o)}};co.prototype.parse=function(e,n,t,r){if(!e)return;const u=new this.State(e,n,t,r);this.tokenize(u,u.line,u.lineMax)};co.prototype.State=dn;function wu(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}wu.prototype.pushPending=function(){const e=new Qe("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};wu.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Qe(e,n,t);let u=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],u={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(u),r};wu.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e),u=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===r;)i++;const o=i-e,a=i<t?this.src.charCodeAt(i):32,l=ou(u)||iu(String.fromCharCode(u)),s=ou(a)||iu(String.fromCharCode(a)),d=uu(u),c=uu(a),f=!c&&(!s||d||l),h=!d&&(!l||c||s);return{can_open:f&&(n||!h||l),can_close:h&&(n||!f||s),length:o}};wu.prototype.Token=Qe;function Bb(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function zb(e,n){let t=e.pos;for(;t<e.posMax&&!Bb(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const Hb=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Ub(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const u=e.pending.match(Hb);if(!u)return!1;const i=u[1],o=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!o)return!1;let a=o.url;if(a.length<=i.length)return!1;a=a.replace(/\*+$/,"");const l=e.md.normalizeLink(a);if(!e.md.validateLink(l))return!1;if(!n){e.pending=e.pending.slice(0,-i.length);const s=e.push("link_open","a",1);s.attrs=[["href",l]],s.markup="linkify",s.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(a);const c=e.push("link_close","a",-1);c.markup="linkify",c.info="auto"}return e.pos+=a.length-i.length,!0}function $b(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,u=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let i=r-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<u&&B(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const ms=[];for(let e=0;e<256;e++)ms.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ms[e.charCodeAt(0)]=1});function qb(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let u=e.src.charCodeAt(t);if(u===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(u=e.src.charCodeAt(t),!!B(u));)t++;return e.pos=t,!0}let i=e.src[t];if(u>=55296&&u<=56319&&t+1<r){const a=e.src.charCodeAt(t+1);a>=56320&&a<=57343&&(i+=e.src[t+1],t++)}const o="\\"+i;if(!n){const a=e.push("text_special","",0);u<256&&ms[u]!==0?a.content=i:a.content=o,a.markup=o,a.info="escape"}return e.pos=t+1,!0}function Wb(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const u=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const o=e.src.slice(u,t),a=o.length;if(e.backticksScanned&&(e.backticks[a]||0)<=u)return n||(e.pending+=o),e.pos+=a,!0;let l=t,s;for(;(s=e.src.indexOf("`",l))!==-1;){for(l=s+1;l<i&&e.src.charCodeAt(l)===96;)l++;const d=l-s;if(d===a){if(!n){const c=e.push("code_inline","code",0);c.markup=o,c.content=e.src.slice(t,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=l,!0}e.backticks[d]=s}return e.backticksScanned=!0,n||(e.pending+=o),e.pos+=a,!0}function Gb(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const u=e.scanDelims(e.pos,!0);let i=u.length;const o=String.fromCharCode(r);if(i<2)return!1;let a;i%2&&(a=e.push("text","",0),a.content=o,i--);for(let l=0;l<i;l+=2)a=e.push("text","",0),a.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:u.can_open,close:u.can_close});return e.pos+=u.length,!0}function sd(e,n){let t;const r=[],u=n.length;for(let i=0;i<u;i++){const o=n[i];if(o.marker!==126||o.end===-1)continue;const a=n[o.end];t=e.tokens[o.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[a.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[a.token-1].type==="text"&&e.tokens[a.token-1].content==="~"&&r.push(a.token-1)}for(;r.length;){const i=r.pop();let o=i+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,i!==o&&(t=e.tokens[o],e.tokens[o]=e.tokens[i],e.tokens[i]=t)}}function Vb(e){const n=e.tokens_meta,t=e.tokens_meta.length;sd(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&sd(e,n[r].delimiters)}const Zp={tokenize:Gb,postProcess:Vb};function Yb(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const u=e.scanDelims(e.pos,r===42);for(let i=0;i<u.length;i++){const o=e.push("text","",0);o.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:u.length,token:e.tokens.length-1,end:-1,open:u.can_open,close:u.can_close})}return e.pos+=u.length,!0}function cd(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const u=n[r];if(u.marker!==95&&u.marker!==42||u.end===-1)continue;const i=n[u.end],o=r>0&&n[r-1].end===u.end+1&&n[r-1].marker===u.marker&&n[r-1].token===u.token-1&&n[u.end+1].token===i.token+1,a=String.fromCharCode(u.marker),l=e.tokens[u.token];l.type=o?"strong_open":"em_open",l.tag=o?"strong":"em",l.nesting=1,l.markup=o?a+a:a,l.content="";const s=e.tokens[i.token];s.type=o?"strong_close":"em_close",s.tag=o?"strong":"em",s.nesting=-1,s.markup=o?a+a:a,s.content="",o&&(e.tokens[n[r-1].token].content="",e.tokens[n[u.end+1].token].content="",r--)}}function Kb(e){const n=e.tokens_meta,t=e.tokens_meta.length;cd(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&cd(e,n[r].delimiters)}const Xp={tokenize:Yb,postProcess:Kb};function Qb(e,n){let t,r,u,i,o="",a="",l=e.pos,s=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,c=e.posMax,f=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let g=h+1;if(g<c&&e.src.charCodeAt(g)===40){for(s=!1,g++;g<c&&(t=e.src.charCodeAt(g),!(!B(t)&&t!==10));g++);if(g>=c)return!1;if(l=g,u=e.md.helpers.parseLinkDestination(e.src,g,e.posMax),u.ok){for(o=e.md.normalizeLink(u.str),e.md.validateLink(o)?g=u.pos:o="",l=g;g<c&&(t=e.src.charCodeAt(g),!(!B(t)&&t!==10));g++);if(u=e.md.helpers.parseLinkTitle(e.src,g,e.posMax),g<c&&l!==g&&u.ok)for(a=u.str,g=u.pos;g<c&&(t=e.src.charCodeAt(g),!(!B(t)&&t!==10));g++);}(g>=c||e.src.charCodeAt(g)!==41)&&(s=!0),g++}if(s){if(typeof e.env.references>"u")return!1;if(g<c&&e.src.charCodeAt(g)===91?(l=g+1,g=e.md.helpers.parseLinkLabel(e,g),g>=0?r=e.src.slice(l,g++):g=h+1):g=h+1,r||(r=e.src.slice(f,h)),i=e.env.references[so(r)],!i)return e.pos=d,!1;o=i.href,a=i.title}if(!n){e.pos=f,e.posMax=h;const b=e.push("link_open","a",1),k=[["href",o]];b.attrs=k,a&&k.push(["title",a]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=g,e.posMax=c,!0}function Jb(e,n){let t,r,u,i,o,a,l,s,d="";const c=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,g=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(g<0)return!1;if(i=g+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(t=e.src.charCodeAt(i),!(!B(t)&&t!==10));i++);if(i>=f)return!1;for(s=i,a=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),a.ok&&(d=e.md.normalizeLink(a.str),e.md.validateLink(d)?i=a.pos:d=""),s=i;i<f&&(t=e.src.charCodeAt(i),!(!B(t)&&t!==10));i++);if(a=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&s!==i&&a.ok)for(l=a.str,i=a.pos;i<f&&(t=e.src.charCodeAt(i),!(!B(t)&&t!==10));i++);else l="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=c,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91?(s=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?u=e.src.slice(s,i++):i=g+1):i=g+1,u||(u=e.src.slice(h,g)),o=e.env.references[so(u)],!o)return e.pos=c,!1;d=o.href,l=o.title}if(!n){r=e.src.slice(h,g);const b=[];e.md.inline.parse(r,e.md,e.env,b);const k=e.push("image","img",0),y=[["src",d],["alt",""]];k.attrs=y,k.children=b,k.content=r,l&&y.push(["title",l])}return e.pos=i,e.posMax=f,!0}const Zb=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Xb=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function e6(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,u=e.posMax;for(;;){if(++t>=u)return!1;const o=e.src.charCodeAt(t);if(o===60)return!1;if(o===62)break}const i=e.src.slice(r+1,t);if(Xb.test(i)){const o=e.md.normalizeLink(i);if(!e.md.validateLink(o))return!1;if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",o]],a.markup="autolink",a.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const s=e.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return e.pos+=i.length+2,!0}if(Zb.test(i)){const o=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(o))return!1;if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",o]],a.markup="autolink",a.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(i);const s=e.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return e.pos+=i.length+2,!0}return!1}function n6(e){return/^<a[>\s]/i.test(e)}function t6(e){return/^<\/a\s*>/i.test(e)}function r6(e){const n=e|32;return n>=97&&n<=122}function u6(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const u=e.src.charCodeAt(r+1);if(u!==33&&u!==63&&u!==47&&!r6(u))return!1;const i=e.src.slice(r).match(Rb);if(!i)return!1;if(!n){const o=e.push("html_inline","",0);o.content=i[0],n6(o.content)&&e.linkLevel++,t6(o.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const i6=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,o6=/^&([a-z][a-z0-9]{1,31});/i;function a6(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(i6);if(i){if(!n){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),a=e.push("text_special","",0);a.content=ps(o)?ji(o):ji(65533),a.markup=i[0],a.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(o6);if(i){const o=Wp(i[0]);if(o!==i[0]){if(!n){const a=e.push("text_special","",0);a.content=o,a.markup=i[0],a.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function dd(e){const n={},t=e.length;if(!t)return;let r=0,u=-2;const i=[];for(let o=0;o<t;o++){const a=e[o];if(i.push(0),(e[r].marker!==a.marker||u!==a.token-1)&&(r=o),u=a.token,a.length=a.length||0,!a.close)continue;n.hasOwnProperty(a.marker)||(n[a.marker]=[-1,-1,-1,-1,-1,-1]);const l=n[a.marker][(a.open?3:0)+a.length%3];let s=r-i[r]-1,d=s;for(;s>l;s-=i[s]+1){const c=e[s];if(c.marker===a.marker&&c.open&&c.end<0){let f=!1;if((c.close||a.open)&&(c.length+a.length)%3===0&&(c.length%3!==0||a.length%3!==0)&&(f=!0),!f){const h=s>0&&!e[s-1].open?i[s-1]+1:0;i[o]=o-s+h,i[s]=h,a.open=!1,c.end=o,c.close=!1,d=-1,u=-2;break}}}d!==-1&&(n[a.marker][(a.open?3:0)+(a.length||0)%3]=d)}}function l6(e){const n=e.tokens_meta,t=e.tokens_meta.length;dd(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&dd(n[r].delimiters)}function s6(e){let n,t,r=0;const u=e.tokens,i=e.tokens.length;for(n=t=0;n<i;n++)u[n].nesting<0&&r--,u[n].level=r,u[n].nesting>0&&r++,u[n].type==="text"&&n+1<i&&u[n+1].type==="text"?u[n+1].content=u[n].content+u[n+1].content:(n!==t&&(u[t]=u[n]),t++);n!==t&&(u.length=t)}const Yo=[["text",zb],["linkify",Ub],["newline",$b],["escape",qb],["backticks",Wb],["strikethrough",Zp.tokenize],["emphasis",Xp.tokenize],["link",Qb],["image",Jb],["autolink",e6],["html_inline",u6],["entity",a6]],Ko=[["balance_pairs",l6],["strikethrough",Zp.postProcess],["emphasis",Xp.postProcess],["fragments_join",s6]];function _u(){this.ruler=new Ae;for(let e=0;e<Yo.length;e++)this.ruler.push(Yo[e][0],Yo[e][1]);this.ruler2=new Ae;for(let e=0;e<Ko.length;e++)this.ruler2.push(Ko[e][0],Ko[e][1])}_u.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,u=e.md.options.maxNesting,i=e.cache;if(typeof i[n]<"u"){e.pos=i[n];return}let o=!1;if(e.level<u){for(let a=0;a<r;a++)if(e.level++,o=t[a](e,!0),e.level--,o){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,i[n]=e.pos};_u.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,u=e.md.options.maxNesting;for(;e.pos<r;){const i=e.pos;let o=!1;if(e.level<u){for(let a=0;a<t;a++)if(o=n[a](e,!1),o){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};_u.prototype.parse=function(e,n,t,r){const u=new this.State(e,n,t,r);this.tokenize(u);const i=this.ruler2.getRules(""),o=i.length;for(let a=0;a<o;a++)i[a](u)};_u.prototype.State=wu;function c6(e){const n={};e=e||{},n.src_Any=zp.source,n.src_Cc=Hp.source,n.src_Z=$p.source,n.src_P=ds.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function Xa(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function fo(e){return Object.prototype.toString.call(e)}function d6(e){return fo(e)==="[object String]"}function f6(e){return fo(e)==="[object Object]"}function p6(e){return fo(e)==="[object RegExp]"}function fd(e){return fo(e)==="[object Function]"}function h6(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const eh={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function m6(e){return Object.keys(e||{}).reduce(function(n,t){return n||eh.hasOwnProperty(t)},!1)}const g6={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},y6="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",x6="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function v6(e){e.__index__=-1,e.__text_cache__=""}function b6(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function pd(){return function(e,n){n.normalize(e)}}function Bi(e){const n=e.re=c6(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(y6),t.push(n.src_xn),n.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const u=[];e.__compiled__={};function i(a,l){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+l)}Object.keys(e.__schemas__).forEach(function(a){const l=e.__schemas__[a];if(l===null)return;const s={validate:null,link:null};if(e.__compiled__[a]=s,f6(l)){p6(l.validate)?s.validate=b6(l.validate):fd(l.validate)?s.validate=l.validate:i(a,l),fd(l.normalize)?s.normalize=l.normalize:l.normalize?i(a,l):s.normalize=pd();return}if(d6(l)){u.push(a);return}i(a,l)}),u.forEach(function(a){e.__compiled__[e.__schemas__[a]]&&(e.__compiled__[a].validate=e.__compiled__[e.__schemas__[a]].validate,e.__compiled__[a].normalize=e.__compiled__[e.__schemas__[a]].normalize)}),e.__compiled__[""]={validate:null,normalize:pd()};const o=Object.keys(e.__compiled__).filter(function(a){return a.length>0&&e.__compiled__[a]}).map(h6).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),v6(e)}function k6(e,n){const t=e.__index__,r=e.__last_index__,u=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=u,this.text=u,this.url=u}function el(e,n){const t=new k6(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function Ie(e,n){if(!(this instanceof Ie))return new Ie(e,n);n||m6(e)&&(n=e,e={}),this.__opts__=Xa({},eh,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Xa({},g6,e),this.__compiled__={},this.__tlds__=x6,this.__tlds_replaced__=!1,this.re={},Bi(this)}Ie.prototype.add=function(n,t){return this.__schemas__[n]=t,Bi(this),this};Ie.prototype.set=function(n){return this.__opts__=Xa(this.__opts__,n),this};Ie.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,r,u,i,o,a,l,s,d;if(this.re.schema_test.test(n)){for(l=this.re.schema_search,l.lastIndex=0;(t=l.exec(n))!==null;)if(i=this.testSchemaAt(n,t[2],l.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(s=n.search(this.re.host_fuzzy_test),s>=0&&(this.__index__<0||s<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=n.indexOf("@"),d>=0&&(u=n.match(this.re.email_fuzzy))!==null&&(o=u.index+u[1].length,a=u.index+u[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Ie.prototype.pretest=function(n){return this.re.pretest.test(n)};Ie.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};Ie.prototype.match=function(n){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(el(this,r)),r=this.__last_index__);let u=r?n.slice(r):n;for(;this.test(u);)t.push(el(this,r)),u=u.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};Ie.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,el(this,0)):null};Ie.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,u,i){return r!==i[u-1]}).reverse(),Bi(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,Bi(this),this)};Ie.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};Ie.prototype.onCompile=function(){};const Yt=2147483647,en=36,gs=1,au=26,w6=38,_6=700,nh=72,th=128,rh="-",S6=/^xn--/,C6=/[^\0-\x7F]/,E6=/[\x2E\u3002\uFF0E\uFF61]/g,A6={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Qo=en-gs,nn=Math.floor,Jo=String.fromCharCode;function Pn(e){throw new RangeError(A6[e])}function D6(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function uh(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(E6,".");const u=e.split("."),i=D6(u,n).join(".");return r+i}function F6(e){const n=[];let t=0;const r=e.length;for(;t<r;){const u=e.charCodeAt(t++);if(u>=55296&&u<=56319&&t<r){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((u&1023)<<10)+(i&1023)+65536):(n.push(u),t--)}else n.push(u)}return n}const T6=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:en},hd=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},ih=function(e,n,t){let r=0;for(e=t?nn(e/_6):e>>1,e+=nn(e/n);e>Qo*au>>1;r+=en)e=nn(e/Qo);return nn(r+(Qo+1)*e/(e+w6))},P6=function(e){const n=[],t=e.length;let r=0,u=th,i=nh,o=e.lastIndexOf(rh);o<0&&(o=0);for(let a=0;a<o;++a)e.charCodeAt(a)>=128&&Pn("not-basic"),n.push(e.charCodeAt(a));for(let a=o>0?o+1:0;a<t;){const l=r;for(let d=1,c=en;;c+=en){a>=t&&Pn("invalid-input");const f=T6(e.charCodeAt(a++));f>=en&&Pn("invalid-input"),f>nn((Yt-r)/d)&&Pn("overflow"),r+=f*d;const h=c<=i?gs:c>=i+au?au:c-i;if(f<h)break;const g=en-h;d>nn(Yt/g)&&Pn("overflow"),d*=g}const s=n.length+1;i=ih(r-l,s,l==0),nn(r/s)>Yt-u&&Pn("overflow"),u+=nn(r/s),r%=s,n.splice(r++,0,u)}return String.fromCodePoint(...n)},I6=function(e){const n=[];e=F6(e);const t=e.length;let r=th,u=0,i=nh;for(const l of e)l<128&&n.push(Jo(l));const o=n.length;let a=o;for(o&&n.push(rh);a<t;){let l=Yt;for(const d of e)d>=r&&d<l&&(l=d);const s=a+1;l-r>nn((Yt-u)/s)&&Pn("overflow"),u+=(l-r)*s,r=l;for(const d of e)if(d<r&&++u>Yt&&Pn("overflow"),d===r){let c=u;for(let f=en;;f+=en){const h=f<=i?gs:f>=i+au?au:f-i;if(c<h)break;const g=c-h,b=en-h;n.push(Jo(hd(h+g%b,0))),c=nn(g/b)}n.push(Jo(hd(c,0))),i=ih(u,s,a===o),u=0,++a}++u,++r}return n.join("")},R6=function(e){return uh(e,function(n){return S6.test(n)?P6(n.slice(4).toLowerCase()):n})},N6=function(e){return uh(e,function(n){return C6.test(n)?"xn--"+I6(n):n})},oh={toASCII:N6,toUnicode:R6},L6={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},O6={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},M6={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},j6={default:L6,zero:O6,commonmark:M6},B6=/^(vbscript|javascript|file|data):/,z6=/^data:image\/(gif|png|jpeg|webp);/;function H6(e){const n=e.trim().toLowerCase();return B6.test(n)?z6.test(n):!0}const ah=["http:","https:","mailto:"];function U6(e){const n=cs(e,!0);if(n.hostname&&(!n.protocol||ah.indexOf(n.protocol)>=0))try{n.hostname=oh.toASCII(n.hostname)}catch{}return ku(ss(n))}function $6(e){const n=cs(e,!0);if(n.hostname&&(!n.protocol||ah.indexOf(n.protocol)>=0))try{n.hostname=oh.toUnicode(n.hostname)}catch{}return ur(ss(n),ur.defaultChars+"%")}function He(e,n){if(!(this instanceof He))return new He(e,n);n||fs(e)||(n=e||{},e="default"),this.inline=new _u,this.block=new co,this.core=new hs,this.renderer=new pr,this.linkify=new Ie,this.validateLink=H6,this.normalizeLink=U6,this.normalizeLinkText=$6,this.utils=$v,this.helpers=lo({},Vv),this.options={},this.configure(e),n&&this.set(n)}He.prototype.set=function(e){return lo(this.options,e),this};He.prototype.configure=function(e){const n=this;if(fs(e)){const t=e;if(e=j6[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};He.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(u){t=t.concat(this[u].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(u){return t.indexOf(u)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};He.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(u){t=t.concat(this[u].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(u){return t.indexOf(u)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};He.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};He.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};He.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};He.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};He.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};const q6={"airgapped-supply-chain-trust":["/diagrams/airgapped-supply-chain-trust/0.svg","/diagrams/airgapped-supply-chain-trust/1.svg","/diagrams/airgapped-supply-chain-trust/2.svg","/diagrams/airgapped-supply-chain-trust/3.svg","/diagrams/airgapped-supply-chain-trust/4.svg","/diagrams/airgapped-supply-chain-trust/5.svg","/diagrams/airgapped-supply-chain-trust/6.svg"],"android-skill-router":["/diagrams/android-skill-router/0.svg"],"interacitve-computing-environments":["/diagrams/interacitve-computing-environments/0.svg"]};function lh(e){return typeof e=="string"?e.split("T")[0]:e instanceof Date?e.toISOString().split("T")[0]:String(e).split("T")[0]}function W6(e,n="Diagram"){const t=n.replace(/"/g,"&quot;");return`<figure class="mermaid-figure"><img src="${e}" alt="${t}" class="mermaid-diagram" loading="lazy" /></figure>`}function G6(e=[]){let n=0;const t=new He({html:!0,breaks:!0,linkify:!0,typographer:!0,highlight:function(u,i){return`<pre class="bg-gray-50 dark:bg-[#2a2a2a] p-4 rounded-lg overflow-x-auto"><code class="language-${i}">${u}</code></pre>`}}),r=t.renderer.rules.fence;return t.renderer.rules.fence=(u,i,o,a,l)=>{const s=u[i];if((s.info||"").trim().toLowerCase()==="mermaid"){const c=e[n++];return c?W6(c):`<div class="mermaid">
${s.content}
</div>`}return r?r(u,i,o,a,l):l.renderToken(u,i,o)},t}function sh(e,n){const t=q6[n]??[];return G6(t).render(e)}async function V6(){return Object.entries(Object.assign({"../content/blog/airgapped-supply-chain-trust.md":Qf,"../content/blog/android-skill-router.md":Jf,"../content/blog/blog-ssh-executor.md":Zf,"../content/blog/interacitve-computing-environments.md":Xf,"../content/blog/kriyanshii.md":ep,"../content/blog/open-source-contributions.md":np,"../content/blog/partial-success.md":tp})).map(([t,r])=>{if(typeof r!="string")return console.error("Unexpected content type for",t),null;const i=(t.split("/").pop()||"").replace(/\.md$/,"");try{const{attributes:o,body:a}=Bp(r);return{slug:i,title:o.title,date:lh(o.date),content:sh(a,i),description:o.description||a.slice(0,150)+"...",tag:o.tag,ogImage:o.ogImage,isNew:new Date(o.date)>new Date(Date.now()-7*24*60*60*1e3)}}catch(o){return console.error("Error processing",t,o),null}}).filter(t=>t!==null).sort((t,r)=>new Date(r.date).getTime()-new Date(t.date).getTime())}async function Y6(e){const n=Object.assign({"../content/blog/airgapped-supply-chain-trust.md":Qf,"../content/blog/android-skill-router.md":Jf,"../content/blog/blog-ssh-executor.md":Zf,"../content/blog/interacitve-computing-environments.md":Xf,"../content/blog/kriyanshii.md":ep,"../content/blog/open-source-contributions.md":np,"../content/blog/partial-success.md":tp}),t=Object.keys(n).find(u=>u.includes(`${e}.md`));if(!t)return null;const r=n[t];if(typeof r!="string")return null;try{const{attributes:u,body:i}=Bp(r);return{slug:e,title:u.title,date:lh(u.date),content:sh(i,e),description:u.description||i.slice(0,150)+"...",tag:u.tag,ogImage:u.ogImage,isNew:new Date(u.date)>new Date(Date.now()-7*24*60*60*1e3)}}catch(u){return console.error("Error processing",t,u),null}}function K6(){const[e,n]=w.useState([]),[t,r]=w.useState(new Set),u=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});w.useEffect(()=>{const a=localStorage.getItem("visitedPosts");a&&r(new Set(JSON.parse(a)))},[]),w.useEffect(()=>{(async()=>{try{const l=await V6();n(l)}catch(l){console.error("Error loading posts:",l)}})()},[]);const i=a=>{const l=new Set(t).add(a);r(l),localStorage.setItem("visitedPosts",JSON.stringify(Array.from(l)))},o=a=>{switch(a){case"Tech":return"bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";case"Life":return"bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300";case"Other":return"bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"}};return v.jsxs("div",{className:"max-w-2xl mx-auto px-6",children:[v.jsx(_t,{title:"Blog",description:"Thoughts and insights on software development, backend engineering, distributed systems, and interactive computing.",canonical:`${sn}/blog`,ogImage:dr}),v.jsxs("header",{className:"mb-16",children:[v.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Blog"}),v.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Thoughts and insights on software development and backend engineering."})]}),v.jsx("div",{className:"divide-y divide-gray-100 dark:divide-gray-800",children:e.map(a=>v.jsx("article",{className:`py-6 first:pt-0 last:pb-0 group ${t.has(a.slug)?"opacity-75":""}`,children:v.jsx(_n,{to:`/blog/${a.slug}`,onClick:()=>i(a.slug),className:"block group-hover:bg-white dark:group-hover:bg-[#242424] group-hover:shadow-sm rounded-lg transition-all p-4 -m-4",children:v.jsxs("div",{className:"flex flex-col gap-2",children:[v.jsx("span",{className:`inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium ${o(a.tag)}`,children:a.tag}),v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2",children:[v.jsxs("h2",{className:`text-[15px] font-medium transition-colors ${t.has(a.slug)?"text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200":"dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"}`,children:[a.title,a.isNew&&v.jsx("span",{className:"ml-2 inline-block px-2 py-0.5 text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full leading-none",children:"NEW"})]}),v.jsx("time",{className:"text-sm text-gray-500 dark:text-gray-400 shrink-0",children:u(a.date)})]}),v.jsx("p",{className:"text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed",children:a.description})]})})},a.slug))})]})}function Q6(){const{slug:e}=kg(),n=jf(),[t,r]=w.useState(null),[u,i]=w.useState(!0),o=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return w.useEffect(()=>{(async()=>{if(!e){n("/blog");return}try{const l=await Y6(e);l?r(l):n("/blog")}catch(l){console.error("Error loading post:",l),n("/blog")}finally{i(!1)}})()},[e,n]),u?v.jsx("div",{className:"max-w-2xl mx-auto px-6 pb-16",children:v.jsx("p",{className:"text-[15px] text-gray-500 dark:text-gray-400",children:"Loading..."})}):t?v.jsxs("div",{className:"max-w-2xl mx-auto px-6 pb-16",children:[v.jsx(_t,{title:t.title,description:t.description,canonical:H2(t.slug),ogType:"article",ogImage:U2(t.slug,t.ogImage),publishedTime:t.date,author:Ga,tag:t.tag}),v.jsxs("header",{className:"mb-12 pb-8 border-b border-gray-100 dark:border-gray-800",children:[v.jsx("div",{className:"flex justify-end mb-6",children:v.jsxs(_n,{to:"/blog",className:"inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 -mr-2.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-[#242424] hover:shadow-sm transition-all group",children:[v.jsx(w2,{size:14,className:"transition-transform group-hover:-translate-x-0.5"}),"Blog"]})}),v.jsx("h1",{className:"text-2xl font-medium mb-4 text-gray-900 dark:text-gray-100 leading-snug",children:t.title}),v.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 dark:text-gray-400",children:[v.jsx("time",{dateTime:t.date,children:o(t.date)}),v.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",children:t.tag})]})]}),v.jsx("article",{className:"prose max-w-none",children:v.jsx("div",{className:`text-[15px] text-gray-800 dark:text-gray-300 leading-relaxed
              [&>p]:mb-6
              [&>h2]:text-xl [&>h2]:font-medium [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:text-gray-900 [&>h2]:dark:text-gray-100
              [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-gray-900 [&>h3]:dark:text-gray-100
              [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6
              [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6
              [&>li]:mb-2
              [&>hr]:my-10 [&>hr]:border-gray-100 [&>hr]:dark:border-gray-800
              [&>blockquote]:border-l-4 [&>blockquote]:border-gray-200 [&>blockquote]:dark:border-gray-700 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-6
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-8 [&_img]:shadow-md [&_img]:dark:shadow-gray-800
              [&>p>img]:mx-auto [&>p>img]:block
              [&_.mermaid-figure]:my-8 [&_.mermaid-figure]:mx-auto [&_.mermaid-figure]:max-w-full
              [&>p>em]:block [&>p>em]:text-[13px] [&>p>em]:text-gray-500 [&>p>em]:dark:text-gray-400 [&>p>em]:not-italic [&>p>em]:mb-4`,dangerouslySetInnerHTML:{__html:t.content}})})]}):null}function J6(){return v.jsxs("div",{className:"max-w-2xl mx-auto px-6 pb-20",children:[v.jsx(_t,{title:"Projects",description:"Side projects, open-source work, and systems built from scratch — distributed systems, tools, and interactive computing.",canonical:`${sn}/projects`,ogImage:dr}),v.jsxs("header",{className:"mb-12",children:[v.jsx("h1",{className:"mb-3 text-2xl font-medium dark:text-white",children:"Projects"}),v.jsx("p",{className:"text-[14px] leading-relaxed text-gray-600 dark:text-gray-400",children:"Things I've built or contributed to — from workflow engines and MapReduce implementations to tools and games."})]}),v.jsx(Ya,{items:Yf})]})}function Z6(){return v.jsxs("div",{className:"max-w-2xl mx-auto px-6",children:[v.jsx(_t,{title:"Resume",description:"Resume of Kriyanshi — distributed systems, satellite data pipelines, JupyterHub platforms, and open-source contributions.",canonical:`${sn}/resume`,ogImage:dr}),v.jsxs("header",{className:"mb-10",children:[v.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Resume"}),v.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Backend and infra engineer working on satellite data systems, interactive computing platforms, and open-source workflow tooling."})]}),v.jsxs("a",{href:Y2,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow dark:text-gray-200",children:["View resume (PDF)",v.jsx(S2,{size:14})]})]})}function X6(){return v.jsxs("div",{className:"max-w-2xl mx-auto px-6",children:[v.jsx(_t,{title:"Talks",description:"Conference talks and live sessions on JupyterHub, interactive computing, and backend systems for research teams.",canonical:`${sn}/talks`,ogImage:dr}),v.jsxs("header",{className:"mb-16",children:[v.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Talks"}),v.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Presentations on interactive computing environments, open science infrastructure, and backend engineering for research teams."})]}),v.jsx("div",{className:"space-y-4",children:Kf.map(e=>v.jsx("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow",children:v.jsxs("div",{className:"flex items-start justify-between gap-4",children:[v.jsxs("div",{className:"flex-1",children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.title}),v.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:e.description}),v.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500",children:[v.jsx("span",{className:"px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full",children:e.tag}),v.jsx("span",{children:e.year})]})]}),v.jsxs("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"shrink-0 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:[v.jsx(Gf,{size:16}),"Watch"]})]})},e.link))})]})}function ek(){return v.jsxs("div",{className:"max-w-2xl mx-auto px-6",children:[v.jsx(_t,{title:"Open Source",description:"Open-source contributions — Dagu workflow engine, Ray distributed computing, and backend engineering in the OSS ecosystem.",canonical:`${sn}/opensource`,ogImage:dr}),v.jsxs("header",{className:"mb-16",children:[v.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Open Source"}),v.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Contributions to workflow orchestration, backend systems, and the broader OSS ecosystem — including PyData-adjacent infra work and distributed systems tooling."})]}),v.jsx("div",{className:"space-y-6",children:Q2.map(e=>v.jsxs("article",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow",children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.project}),v.jsx("p",{className:"text-[15px] text-gray-700 dark:text-gray-300 mb-4",children:e.summary}),v.jsx("div",{className:"flex flex-wrap gap-4",children:e.links.map(n=>n.href.startsWith("/")?v.jsx(_n,{to:n.href,className:"text-sm text-blue-600 dark:text-blue-400 hover:underline underline-offset-2",children:n.label},n.href):v.jsx("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-blue-600 dark:text-blue-400 hover:underline underline-offset-2",children:n.label},n.href))})]},e.project))})]})}function nk(){return v.jsx(N2,{children:v.jsxs(o2,{children:[v.jsx(y2,{}),v.jsxs("div",{className:"relative min-h-screen bg-[#fafafa] dark:bg-[#1a1a1a] transition-colors duration-200",children:[v.jsx("div",{className:"fixed inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fafafa] dark:from-[#1a1a1a] to-transparent transform -translate-y-full"}),v.jsx("div",{className:"fixed inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent transform translate-y-full"}),v.jsx(M2,{}),v.jsxs(Og,{children:[v.jsx(Dn,{path:"/",element:v.jsx(Z2,{})}),v.jsx(Dn,{path:"/blog",element:v.jsx(K6,{})}),v.jsx(Dn,{path:"/blog/:slug",element:v.jsx(Q6,{})}),v.jsx(Dn,{path:"/projects",element:v.jsx(J6,{})}),v.jsx(Dn,{path:"/resume",element:v.jsx(Z6,{})}),v.jsx(Dn,{path:"/talks",element:v.jsx(X6,{})}),v.jsx(Dn,{path:"/opensource",element:v.jsx(ek,{})})]})]})]})})}Df(document.getElementById("root")).render(v.jsx(w.StrictMode,{children:v.jsx(nk,{})}));
//# sourceMappingURL=index-D57O5BX8.js.map
