(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function sh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g0={exports:{}},Bi={},y0={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),ch=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),mh=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),xh=Symbol.for("react.memo"),vh=Symbol.for("react.lazy"),xs=Symbol.iterator;function bh(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v0=Object.assign,b0={};function ou(e,n,t){this.props=e,this.context=n,this.refs=b0,this.updater=t||x0}ou.prototype.isReactComponent={};ou.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ou.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k0(){}k0.prototype=ou.prototype;function ta(e,n,t){this.props=e,this.context=n,this.refs=b0,this.updater=t||x0}var ua=ta.prototype=new k0;ua.constructor=ta;v0(ua,ou.prototype);ua.isPureReactComponent=!0;var vs=Array.isArray,w0=Object.prototype.hasOwnProperty,ra={current:null},_0={key:!0,ref:!0,__self:!0,__source:!0};function S0(e,n,t){var u,r={},i=null,o=null;if(n!=null)for(u in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)w0.call(n,u)&&!_0.hasOwnProperty(u)&&(r[u]=n[u]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];r.children=a}if(e&&e.defaultProps)for(u in l=e.defaultProps,l)r[u]===void 0&&(r[u]=l[u]);return{$$typeof:ar,type:e,key:i,ref:o,props:r,_owner:ra.current}}function kh(e,n){return{$$typeof:ar,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function wh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var bs=/\/+/g;function mo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wh(""+e.key):n.toString(36)}function Gr(e,n,t,u,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ar:case ch:o=!0}}if(o)return o=e,r=r(o),e=u===""?"."+mo(o,0):u,vs(r)?(t="",e!=null&&(t=e.replace(bs,"$&/")+"/"),Gr(r,n,t,"",function(s){return s})):r!=null&&(ia(r)&&(r=kh(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bs,"$&/")+"/")+e)),n.push(r)),1;if(o=0,u=u===""?".":u+":",vs(e))for(var l=0;l<e.length;l++){i=e[l];var a=u+mo(i,l);o+=Gr(i,n,t,a,r)}else if(a=bh(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=u+mo(i,l++),o+=Gr(i,n,t,a,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Er(e,n,t){if(e==null)return e;var u=[],r=0;return Gr(e,u,"","",function(i){return n.call(t,i,r++)}),u}function _h(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Vr={transition:null},Sh={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:ra};function C0(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Er,forEach:function(e,n,t){Er(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Er(e,function(){n++}),n},toArray:function(e){return Er(e,function(n){return n})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ou;L.Fragment=dh;L.Profiler=ph;L.PureComponent=ta;L.StrictMode=fh;L.Suspense=yh;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sh;L.act=C0;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=v0({},e.props),r=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=ra.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in n)w0.call(n,a)&&!_0.hasOwnProperty(a)&&(u[a]=n[a]===void 0&&l!==void 0?l[a]:n[a])}var a=arguments.length-2;if(a===1)u.children=t;else if(1<a){l=Array(a);for(var s=0;s<a;s++)l[s]=arguments[s+2];u.children=l}return{$$typeof:ar,type:e.type,key:r,ref:i,props:u,_owner:o}};L.createContext=function(e){return e={$$typeof:mh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hh,_context:e},e.Consumer=e};L.createElement=S0;L.createFactory=function(e){var n=S0.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:gh,render:e}};L.isValidElement=ia;L.lazy=function(e){return{$$typeof:vh,_payload:{_status:-1,_result:e},_init:_h}};L.memo=function(e,n){return{$$typeof:xh,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=n}};L.unstable_act=C0;L.useCallback=function(e,n){return xe.current.useCallback(e,n)};L.useContext=function(e){return xe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};L.useEffect=function(e,n){return xe.current.useEffect(e,n)};L.useId=function(){return xe.current.useId()};L.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return xe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};L.useRef=function(e){return xe.current.useRef(e)};L.useState=function(e){return xe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return xe.current.useTransition()};L.version="18.3.1";y0.exports=L;var w=y0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=w,Eh=Symbol.for("react.element"),Ah=Symbol.for("react.fragment"),Dh=Object.prototype.hasOwnProperty,Fh=Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Th={key:!0,ref:!0,__self:!0,__source:!0};function E0(e,n,t){var u,r={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(u in n)Dh.call(n,u)&&!Th.hasOwnProperty(u)&&(r[u]=n[u]);if(e&&e.defaultProps)for(u in n=e.defaultProps,n)r[u]===void 0&&(r[u]=n[u]);return{$$typeof:Eh,type:e,key:i,ref:o,props:r,_owner:Fh.current}}Bi.Fragment=Ah;Bi.jsx=E0;Bi.jsxs=E0;g0.exports=Bi;var x=g0.exports,A0={exports:{}},Ie={},D0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(F,I){var R=F.length;F.push(I);e:for(;0<R;){var Y=R-1>>>1,te=F[Y];if(0<r(te,I))F[Y]=I,F[R]=te,R=Y;else break e}}function t(F){return F.length===0?null:F[0]}function u(F){if(F.length===0)return null;var I=F[0],R=F.pop();if(R!==I){F[0]=R;e:for(var Y=0,te=F.length,Sr=te>>>1;Y<Sr;){var rt=2*(Y+1)-1,ho=F[rt],it=rt+1,Cr=F[it];if(0>r(ho,R))it<te&&0>r(Cr,ho)?(F[Y]=Cr,F[it]=R,Y=it):(F[Y]=ho,F[rt]=R,Y=rt);else if(it<te&&0>r(Cr,R))F[Y]=Cr,F[it]=R,Y=it;else break e}}return I}function r(F,I){var R=F.sortIndex-I.sortIndex;return R!==0?R:F.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],s=[],d=1,c=null,f=3,h=!1,g=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var I=t(s);I!==null;){if(I.callback===null)u(s);else if(I.startTime<=F)u(s),I.sortIndex=I.expirationTime,n(a,I);else break;I=t(s)}}function v(F){if(b=!1,m(F),!g)if(t(a)!==null)g=!0,mu(_);else{var I=t(s);I!==null&&po(v,I.startTime-F)}}function _(F,I){g=!1,b&&(b=!1,y(A),A=-1),h=!0;var R=f;try{for(m(I),c=t(a);c!==null&&(!(c.expirationTime>I)||F&&!ne());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,f=c.priorityLevel;var te=Y(c.expirationTime<=I);I=e.unstable_now(),typeof te=="function"?c.callback=te:c===t(a)&&u(a),m(I)}else u(a);c=t(a)}if(c!==null)var Sr=!0;else{var rt=t(s);rt!==null&&po(v,rt.startTime-I),Sr=!1}return Sr}finally{c=null,f=R,h=!1}}var S=!1,E=null,A=-1,N=5,P=-1;function ne(){return!(e.unstable_now()-P<N)}function tt(){if(E!==null){var F=e.unstable_now();P=F;var I=!0;try{I=E(!0,F)}finally{I?ut():(S=!1,E=null)}}else S=!1}var ut;if(typeof p=="function")ut=function(){p(tt)};else if(typeof MessageChannel<"u"){var hu=new MessageChannel,An=hu.port2;hu.port1.onmessage=tt,ut=function(){An.postMessage(null)}}else ut=function(){k(tt,0)};function mu(F){E=F,S||(S=!0,ut())}function po(F,I){A=k(function(){F(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,mu(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(F){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var R=f;f=I;try{return F()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,I){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var R=f;f=F;try{return I()}finally{f=R}},e.unstable_scheduleCallback=function(F,I,R){var Y=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,F){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,F={id:d++,callback:I,priorityLevel:F,startTime:R,expirationTime:te,sortIndex:-1},R>Y?(F.sortIndex=R,n(s,F),t(a)===null&&F===t(s)&&(b?(y(A),A=-1):b=!0,po(v,R-Y))):(F.sortIndex=te,n(a,F),g||h||(g=!0,mu(_))),F},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(F){var I=f;return function(){var R=f;f=I;try{return F.apply(this,arguments)}finally{f=R}}}})(F0);D0.exports=F0;var Ph=D0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=w,Pe=Ph;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,ju={};function kt(e,n){Yt(e,n),Yt(e+"Capture",n)}function Yt(e,n){for(ju[e]=n,e=0;e<n.length;e++)T0.add(n[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=Object.prototype.hasOwnProperty,Ih=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ks={},ws={};function Rh(e){return Jo.call(ws,e)?!0:Jo.call(ks,e)?!1:Ih.test(e)?ws[e]=!0:(ks[e]=!0,!1)}function Lh(e,n,t,u){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return u?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oh(e,n,t,u){if(n===null||typeof n>"u"||Lh(e,n,t,u))return!0;if(u)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,u,r,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=u,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function la(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(oa,la);ce[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(oa,la);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(oa,la);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,n,t,u){var r=ce.hasOwnProperty(n)?ce[n]:null;(r!==null?r.type!==0:u||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Oh(n,t,r,u)&&(t=null),u||r===null?Rh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,u=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,u?e.setAttributeNS(u,n,t):e.setAttribute(n,t))))}var Cn=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),At=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),_s=Symbol.iterator;function gu(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,go;function Cu(e){if(go===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);go=n&&n[1]||""}return`
`+go+e}var yo=!1;function xo(e,n){if(!e||yo)return"";yo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var u=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){u=s}e.call(n.prototype)}else{try{throw Error()}catch(s){u=s}e()}}catch(s){if(s&&u&&typeof s.stack=="string"){for(var r=s.stack.split(`
`),i=u.stack.split(`
`),o=r.length-1,l=i.length-1;1<=o&&0<=l&&r[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==i[l]){var a=`
`+r[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{yo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Cu(e):""}function Mh(e){switch(e.tag){case 5:return Cu(e.type);case 16:return Cu("Lazy");case 13:return Cu("Suspense");case 19:return Cu("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case At:return"Portal";case Zo:return"Profiler";case sa:return"StrictMode";case Xo:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case N0:return(e.displayName||"Context")+".Consumer";case P0:return(e._context.displayName||"Context")+".Provider";case ca:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return n=e.displayName||null,n!==null?n:nl(e.type)||"Memo";case Tn:n=e._payload,e=e._init;try{return nl(e(n))}catch{}}return null}function jh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(n);case 8:return n===sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function R0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zh(e){var n=R0(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),u=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){u=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return u},setValue:function(o){u=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dr(e){e._valueTracker||(e._valueTracker=zh(e))}function L0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),u="";return e&&(u=R0(e)?e.checked?"true":"false":e.value),e=u,e!==t?(n.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tl(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ss(e,n){var t=n.defaultValue==null?"":n.defaultValue,u=n.checked!=null?n.checked:n.defaultChecked;t=Kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:u,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function O0(e,n){n=n.checked,n!=null&&aa(e,"checked",n,!1)}function ul(e,n){O0(e,n);var t=Kn(n.value),u=n.type;if(t!=null)u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?rl(e,n.type,t):n.hasOwnProperty("defaultValue")&&rl(e,n.type,Kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Cs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var u=n.type;if(!(u!=="submit"&&u!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function rl(e,n,t){(n!=="number"||ai(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Eu=Array.isArray;function $t(e,n,t,u){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&u&&(e[t].defaultSelected=!0)}else{for(t=""+Kn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,u&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function il(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Eu(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Kn(t)}}function M0(e,n){var t=Kn(n.value),u=Kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),u!=null&&(e.defaultValue=""+u)}function As(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function j0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?j0(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,z0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,u,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,u,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function zu(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Fu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bh=["Webkit","ms","Moz","O"];Object.keys(Fu).forEach(function(e){Bh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Fu[n]=Fu[e]})});function B0(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Fu.hasOwnProperty(e)&&Fu[e]?(""+n).trim():n+"px"}function H0(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var u=t.indexOf("--")===0,r=B0(t,n[t],u);t==="float"&&(t="cssFloat"),u?e.setProperty(t,r):e[t]=r}}var Hh=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,n){if(n){if(Hh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function al(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,Ut=null,qt=null;function Ds(e){if(e=dr(e)){if(typeof cl!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Wi(n),cl(e.stateNode,e.type,n))}}function $0(e){Ut?qt?qt.push(e):qt=[e]:Ut=e}function U0(){if(Ut){var e=Ut,n=qt;if(qt=Ut=null,Ds(e),n)for(e=0;e<n.length;e++)Ds(n[e])}}function q0(e,n){return e(n)}function W0(){}var vo=!1;function G0(e,n,t){if(vo)return e(n,t);vo=!0;try{return q0(e,n,t)}finally{vo=!1,(Ut!==null||qt!==null)&&(W0(),U0())}}function Bu(e,n){var t=e.stateNode;if(t===null)return null;var u=Wi(t);if(u===null)return null;t=u[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var dl=!1;if(kn)try{var yu={};Object.defineProperty(yu,"passive",{get:function(){dl=!0}}),window.addEventListener("test",yu,yu),window.removeEventListener("test",yu,yu)}catch{dl=!1}function $h(e,n,t,u,r,i,o,l,a){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(d){this.onError(d)}}var Tu=!1,si=null,ci=!1,fl=null,Uh={onError:function(e){Tu=!0,si=e}};function qh(e,n,t,u,r,i,o,l,a){Tu=!1,si=null,$h.apply(Uh,arguments)}function Wh(e,n,t,u,r,i,o,l,a){if(qh.apply(this,arguments),Tu){if(Tu){var s=si;Tu=!1,si=null}else throw Error(C(198));ci||(ci=!0,fl=s)}}function wt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function V0(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Fs(e){if(wt(e)!==e)throw Error(C(188))}function Gh(e){var n=e.alternate;if(!n){if(n=wt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,u=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(u=r.return,u!==null){t=u;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Fs(r),e;if(i===u)return Fs(r),n;i=i.sibling}throw Error(C(188))}if(t.return!==u.return)t=r,u=i;else{for(var o=!1,l=r.child;l;){if(l===t){o=!0,t=r,u=i;break}if(l===u){o=!0,u=r,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,u=r;break}if(l===u){o=!0,u=i,t=r;break}l=l.sibling}if(!o)throw Error(C(189))}}if(t.alternate!==u)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function K0(e){return e=Gh(e),e!==null?Y0(e):null}function Y0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Y0(e);if(n!==null)return n;e=e.sibling}return null}var Q0=Pe.unstable_scheduleCallback,Ts=Pe.unstable_cancelCallback,Vh=Pe.unstable_shouldYield,Kh=Pe.unstable_requestPaint,Q=Pe.unstable_now,Yh=Pe.unstable_getCurrentPriorityLevel,pa=Pe.unstable_ImmediatePriority,J0=Pe.unstable_UserBlockingPriority,di=Pe.unstable_NormalPriority,Qh=Pe.unstable_LowPriority,Z0=Pe.unstable_IdlePriority,Hi=null,un=null;function Jh(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:e1,Zh=Math.log,Xh=Math.LN2;function e1(e){return e>>>=0,e===0?32:31-(Zh(e)/Xh|0)|0}var Tr=64,Pr=4194304;function Au(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,n){var t=e.pendingLanes;if(t===0)return 0;var u=0,r=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~r;l!==0?u=Au(l):(i&=o,i!==0&&(u=Au(i)))}else o=t&~r,o!==0?u=Au(o):i!==0&&(u=Au(i));if(u===0)return 0;if(n!==0&&n!==u&&!(n&r)&&(r=u&-u,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(u&4&&(u|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=u;0<n;)t=31-Ve(n),r=1<<t,u|=e[t],n&=~r;return u}function n1(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(e,n){for(var t=e.suspendedLanes,u=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ve(i),l=1<<o,a=r[o];a===-1?(!(l&t)||l&u)&&(r[o]=n1(l,n)):a<=n&&(e.expiredLanes|=l),i&=~l}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function X0(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function bo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function u1(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ve(t),i=1<<r;n[r]=0,u[r]=-1,e[r]=-1,t&=~i}}function ha(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var u=31-Ve(t),r=1<<u;r&n|e[u]&n&&(e[u]|=n),t&=~r}}var M=0;function ed(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,ma,td,ud,rd,hl=!1,Nr=[],zn=null,Bn=null,Hn=null,Hu=new Map,$u=new Map,In=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ps(e,n){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Hu.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$u.delete(n.pointerId)}}function xu(e,n,t,u,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:u,nativeEvent:i,targetContainers:[r]},n!==null&&(n=dr(n),n!==null&&ma(n)),e):(e.eventSystemFlags|=u,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function i1(e,n,t,u,r){switch(n){case"focusin":return zn=xu(zn,e,n,t,u,r),!0;case"dragenter":return Bn=xu(Bn,e,n,t,u,r),!0;case"mouseover":return Hn=xu(Hn,e,n,t,u,r),!0;case"pointerover":var i=r.pointerId;return Hu.set(i,xu(Hu.get(i)||null,e,n,t,u,r)),!0;case"gotpointercapture":return i=r.pointerId,$u.set(i,xu($u.get(i)||null,e,n,t,u,r)),!0}return!1}function id(e){var n=at(e.target);if(n!==null){var t=wt(n);if(t!==null){if(n=t.tag,n===13){if(n=V0(t),n!==null){e.blockedOn=n,rd(e.priority,function(){td(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ml(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var u=new t.constructor(t.type,t);sl=u,t.target.dispatchEvent(u),sl=null}else return n=dr(t),n!==null&&ma(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){Kr(e)&&t.delete(n)}function o1(){hl=!1,zn!==null&&Kr(zn)&&(zn=null),Bn!==null&&Kr(Bn)&&(Bn=null),Hn!==null&&Kr(Hn)&&(Hn=null),Hu.forEach(Ns),$u.forEach(Ns)}function vu(e,n){e.blockedOn===n&&(e.blockedOn=null,hl||(hl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,o1)))}function Uu(e){function n(r){return vu(r,e)}if(0<Nr.length){vu(Nr[0],e);for(var t=1;t<Nr.length;t++){var u=Nr[t];u.blockedOn===e&&(u.blockedOn=null)}}for(zn!==null&&vu(zn,e),Bn!==null&&vu(Bn,e),Hn!==null&&vu(Hn,e),Hu.forEach(n),$u.forEach(n),t=0;t<In.length;t++)u=In[t],u.blockedOn===e&&(u.blockedOn=null);for(;0<In.length&&(t=In[0],t.blockedOn===null);)id(t),t.blockedOn===null&&In.shift()}var Wt=Cn.ReactCurrentBatchConfig,pi=!0;function l1(e,n,t,u){var r=M,i=Wt.transition;Wt.transition=null;try{M=1,ga(e,n,t,u)}finally{M=r,Wt.transition=i}}function a1(e,n,t,u){var r=M,i=Wt.transition;Wt.transition=null;try{M=4,ga(e,n,t,u)}finally{M=r,Wt.transition=i}}function ga(e,n,t,u){if(pi){var r=ml(e,n,t,u);if(r===null)To(e,n,u,hi,t),Ps(e,u);else if(i1(r,e,n,t,u))u.stopPropagation();else if(Ps(e,u),n&4&&-1<r1.indexOf(e)){for(;r!==null;){var i=dr(r);if(i!==null&&nd(i),i=ml(e,n,t,u),i===null&&To(e,n,u,hi,t),i===r)break;r=i}r!==null&&u.stopPropagation()}else To(e,n,u,null,t)}}var hi=null;function ml(e,n,t,u){if(hi=null,e=fa(u),e=at(e),e!==null)if(n=wt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=V0(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return hi=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yh()){case pa:return 1;case J0:return 4;case di:case Qh:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var On=null,ya=null,Yr=null;function ld(){if(Yr)return Yr;var e,n=ya,t=n.length,u,r="value"in On?On.value:On.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(u=1;u<=o&&n[t-u]===r[i-u];u++);return Yr=r.slice(e,1<u?1-u:void 0)}function Qr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Is(){return!1}function Re(e){function n(t,u,r,i,o){this._reactName=t,this._targetInst=r,this.type=u,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ir:Is,this.isPropagationStopped=Is,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),n}var lu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Re(lu),cr=G({},lu,{view:0,detail:0}),s1=Re(cr),ko,wo,bu,$i=G({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bu&&(bu&&e.type==="mousemove"?(ko=e.screenX-bu.screenX,wo=e.screenY-bu.screenY):wo=ko=0,bu=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),Rs=Re($i),c1=G({},$i,{dataTransfer:0}),d1=Re(c1),f1=G({},cr,{relatedTarget:0}),_o=Re(f1),p1=G({},lu,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=Re(p1),m1=G({},lu,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g1=Re(m1),y1=G({},lu,{data:0}),Ls=Re(y1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=b1[e])?!!n[e]:!1}function va(){return k1}var w1=G({},cr,{key:function(e){if(e.key){var n=x1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_1=Re(w1),S1=G({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=Re(S1),C1=G({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),E1=Re(C1),A1=G({},lu,{propertyName:0,elapsedTime:0,pseudoElement:0}),D1=Re(A1),F1=G({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T1=Re(F1),P1=[9,13,27,32],ba=kn&&"CompositionEvent"in window,Pu=null;kn&&"documentMode"in document&&(Pu=document.documentMode);var N1=kn&&"TextEvent"in window&&!Pu,ad=kn&&(!ba||Pu&&8<Pu&&11>=Pu),Ms=" ",js=!1;function sd(e,n){switch(e){case"keyup":return P1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function I1(e,n){switch(e){case"compositionend":return cd(n);case"keypress":return n.which!==32?null:(js=!0,Ms);case"textInput":return e=n.data,e===Ms&&js?null:e;default:return null}}function R1(e,n){if(Ft)return e==="compositionend"||!ba&&sd(e,n)?(e=ld(),Yr=ya=On=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ad&&n.locale!=="ko"?null:n.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!L1[e.type]:n==="textarea"}function dd(e,n,t,u){$0(u),n=mi(n,"onChange"),0<n.length&&(t=new xa("onChange","change",null,t,u),e.push({event:t,listeners:n}))}var Nu=null,qu=null;function O1(e){wd(e,0)}function Ui(e){var n=Nt(e);if(L0(n))return e}function M1(e,n){if(e==="change")return n}var fd=!1;if(kn){var So;if(kn){var Co="oninput"in document;if(!Co){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),Co=typeof Bs.oninput=="function"}So=Co}else So=!1;fd=So&&(!document.documentMode||9<document.documentMode)}function Hs(){Nu&&(Nu.detachEvent("onpropertychange",pd),qu=Nu=null)}function pd(e){if(e.propertyName==="value"&&Ui(qu)){var n=[];dd(n,qu,e,fa(e)),G0(O1,n)}}function j1(e,n,t){e==="focusin"?(Hs(),Nu=n,qu=t,Nu.attachEvent("onpropertychange",pd)):e==="focusout"&&Hs()}function z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(qu)}function B1(e,n){if(e==="click")return Ui(n)}function H1(e,n){if(e==="input"||e==="change")return Ui(n)}function $1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ye=typeof Object.is=="function"?Object.is:$1;function Wu(e,n){if(Ye(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),u=Object.keys(n);if(t.length!==u.length)return!1;for(u=0;u<t.length;u++){var r=t[u];if(!Jo.call(n,r)||!Ye(e[r],n[r]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,n){var t=$s(e);e=0;for(var u;t;){if(t.nodeType===3){if(u=e+t.textContent.length,e<=n&&u>=n)return{node:t,offset:n-e};e=u}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$s(t)}}function hd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function md(){for(var e=window,n=ai();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ai(e.document)}return n}function ka(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function U1(e){var n=md(),t=e.focusedElem,u=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&hd(t.ownerDocument.documentElement,t)){if(u!==null&&ka(t)){if(n=u.start,e=u.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(u.start,r);u=u.end===void 0?i:Math.min(u.end,r),!e.extend&&i>u&&(r=u,u=i,i=r),r=Us(t,i);var o=Us(t,u);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>u?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q1=kn&&"documentMode"in document&&11>=document.documentMode,Tt=null,gl=null,Iu=null,yl=!1;function qs(e,n,t){var u=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yl||Tt==null||Tt!==ai(u)||(u=Tt,"selectionStart"in u&&ka(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Iu&&Wu(Iu,u)||(Iu=u,u=mi(gl,"onSelect"),0<u.length&&(n=new xa("onSelect","select",null,n,t),e.push({event:n,listeners:u}),n.target=Tt)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},Eo={},gd={};kn&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function qi(e){if(Eo[e])return Eo[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in gd)return Eo[e]=n[t];return e}var yd=qi("animationend"),xd=qi("animationiteration"),vd=qi("animationstart"),bd=qi("transitionend"),kd=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,n){kd.set(e,n),kt(n,[e])}for(var Ao=0;Ao<Ws.length;Ao++){var Do=Ws[Ao],W1=Do.toLowerCase(),G1=Do[0].toUpperCase()+Do.slice(1);Xn(W1,"on"+G1)}Xn(yd,"onAnimationEnd");Xn(xd,"onAnimationIteration");Xn(vd,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(bd,"onTransitionEnd");Yt("onMouseEnter",["mouseout","mouseover"]);Yt("onMouseLeave",["mouseout","mouseover"]);Yt("onPointerEnter",["pointerout","pointerover"]);Yt("onPointerLeave",["pointerout","pointerover"]);kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Du));function Gs(e,n,t){var u=e.type||"unknown-event";e.currentTarget=t,Wh(u,n,void 0,e),e.currentTarget=null}function wd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var u=e[t],r=u.event;u=u.listeners;e:{var i=void 0;if(n)for(var o=u.length-1;0<=o;o--){var l=u[o],a=l.instance,s=l.currentTarget;if(l=l.listener,a!==i&&r.isPropagationStopped())break e;Gs(r,l,s),i=a}else for(o=0;o<u.length;o++){if(l=u[o],a=l.instance,s=l.currentTarget,l=l.listener,a!==i&&r.isPropagationStopped())break e;Gs(r,l,s),i=a}}}if(ci)throw e=fl,ci=!1,fl=null,e}function B(e,n){var t=n[wl];t===void 0&&(t=n[wl]=new Set);var u=e+"__bubble";t.has(u)||(_d(n,e,2,!1),t.add(u))}function Fo(e,n,t){var u=0;n&&(u|=4),_d(t,e,u,n)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function Gu(e){if(!e[Lr]){e[Lr]=!0,T0.forEach(function(t){t!=="selectionchange"&&(V1.has(t)||Fo(t,!1,e),Fo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lr]||(n[Lr]=!0,Fo("selectionchange",!1,n))}}function _d(e,n,t,u){switch(od(n)){case 1:var r=l1;break;case 4:r=a1;break;default:r=ga}t=r.bind(null,n,t,e),r=void 0,!dl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),u?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function To(e,n,t,u,r){var i=u;if(!(n&1)&&!(n&2)&&u!==null)e:for(;;){if(u===null)return;var o=u.tag;if(o===3||o===4){var l=u.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=u.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;o=o.return}for(;l!==null;){if(o=at(l),o===null)return;if(a=o.tag,a===5||a===6){u=i=o;continue e}l=l.parentNode}}u=u.return}G0(function(){var s=i,d=fa(t),c=[];e:{var f=kd.get(e);if(f!==void 0){var h=xa,g=e;switch(e){case"keypress":if(Qr(t)===0)break e;case"keydown":case"keyup":h=_1;break;case"focusin":g="focus",h=_o;break;case"focusout":g="blur",h=_o;break;case"beforeblur":case"afterblur":h=_o;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=E1;break;case yd:case xd:case vd:h=h1;break;case bd:h=D1;break;case"scroll":h=s1;break;case"wheel":h=T1;break;case"copy":case"cut":case"paste":h=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Os}var b=(n&4)!==0,k=!b&&e==="scroll",y=b?f!==null?f+"Capture":null:f;b=[];for(var p=s,m;p!==null;){m=p;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,y!==null&&(v=Bu(p,y),v!=null&&b.push(Vu(p,v,m)))),k)break;p=p.return}0<b.length&&(f=new h(f,g,null,t,d),c.push({event:f,listeners:b}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&t!==sl&&(g=t.relatedTarget||t.fromElement)&&(at(g)||g[wn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=s,g=g?at(g):null,g!==null&&(k=wt(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=s),h!==g)){if(b=Rs,v="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Os,v="onPointerLeave",y="onPointerEnter",p="pointer"),k=h==null?f:Nt(h),m=g==null?f:Nt(g),f=new b(v,p+"leave",h,t,d),f.target=k,f.relatedTarget=m,v=null,at(d)===s&&(b=new b(y,p+"enter",g,t,d),b.target=m,b.relatedTarget=k,v=b),k=v,h&&g)n:{for(b=h,y=g,p=0,m=b;m;m=St(m))p++;for(m=0,v=y;v;v=St(v))m++;for(;0<p-m;)b=St(b),p--;for(;0<m-p;)y=St(y),m--;for(;p--;){if(b===y||y!==null&&b===y.alternate)break n;b=St(b),y=St(y)}b=null}else b=null;h!==null&&Vs(c,f,h,b,!1),g!==null&&k!==null&&Vs(c,k,g,b,!0)}}e:{if(f=s?Nt(s):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var _=M1;else if(zs(f))if(fd)_=H1;else{_=z1;var S=j1}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=B1);if(_&&(_=_(e,s))){dd(c,_,t,d);break e}S&&S(e,f,s),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&rl(f,"number",f.value)}switch(S=s?Nt(s):window,e){case"focusin":(zs(S)||S.contentEditable==="true")&&(Tt=S,gl=s,Iu=null);break;case"focusout":Iu=gl=Tt=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,qs(c,t,d);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":qs(c,t,d)}var E;if(ba)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ft?sd(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(ad&&t.locale!=="ko"&&(Ft||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ft&&(E=ld()):(On=d,ya="value"in On?On.value:On.textContent,Ft=!0)),S=mi(s,A),0<S.length&&(A=new Ls(A,e,null,t,d),c.push({event:A,listeners:S}),E?A.data=E:(E=cd(t),E!==null&&(A.data=E)))),(E=N1?I1(e,t):R1(e,t))&&(s=mi(s,"onBeforeInput"),0<s.length&&(d=new Ls("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:s}),d.data=E))}wd(c,n)})}function Vu(e,n,t){return{instance:e,listener:n,currentTarget:t}}function mi(e,n){for(var t=n+"Capture",u=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Bu(e,t),i!=null&&u.unshift(Vu(e,i,r)),i=Bu(e,n),i!=null&&u.push(Vu(e,i,r))),e=e.return}return u}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,n,t,u,r){for(var i=n._reactName,o=[];t!==null&&t!==u;){var l=t,a=l.alternate,s=l.stateNode;if(a!==null&&a===u)break;l.tag===5&&s!==null&&(l=s,r?(a=Bu(t,i),a!=null&&o.unshift(Vu(t,a,l))):r||(a=Bu(t,i),a!=null&&o.push(Vu(t,a,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var K1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(K1,`
`).replace(Y1,"")}function Or(e,n,t){if(n=Ks(n),Ks(e)!==n&&t)throw Error(C(425))}function gi(){}var xl=null,vl=null;function bl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(Z1)}:kl;function Z1(e){setTimeout(function(){throw e})}function Po(e,n){var t=n,u=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(u===0){e.removeChild(r),Uu(n);return}u--}else t!=="$"&&t!=="$?"&&t!=="$!"||u++;t=r}while(t);Uu(n)}function $n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var au=Math.random().toString(36).slice(2),en="__reactFiber$"+au,Ku="__reactProps$"+au,wn="__reactContainer$"+au,wl="__reactEvents$"+au,X1="__reactListeners$"+au,em="__reactHandles$"+au;function at(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[wn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qs(e);e!==null;){if(t=e[en])return t;e=Qs(e)}return n}e=t,t=e.parentNode}return null}function dr(e){return e=e[en]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Wi(e){return e[Ku]||null}var _l=[],It=-1;function et(e){return{current:e}}function H(e){0>It||(e.current=_l[It],_l[It]=null,It--)}function j(e,n){It++,_l[It]=e.current,e.current=n}var Yn={},he=et(Yn),Se=et(!1),mt=Yn;function Qt(e,n){var t=e.type.contextTypes;if(!t)return Yn;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===n)return u.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ce(e){return e=e.childContextTypes,e!=null}function yi(){H(Se),H(he)}function Js(e,n,t){if(he.current!==Yn)throw Error(C(168));j(he,n),j(Se,t)}function Sd(e,n,t){var u=e.stateNode;if(n=n.childContextTypes,typeof u.getChildContext!="function")return t;u=u.getChildContext();for(var r in u)if(!(r in n))throw Error(C(108,jh(e)||"Unknown",r));return G({},t,u)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,mt=he.current,j(he,e),j(Se,Se.current),!0}function Zs(e,n,t){var u=e.stateNode;if(!u)throw Error(C(169));t?(e=Sd(e,n,mt),u.__reactInternalMemoizedMergedChildContext=e,H(Se),H(he),j(he,e)):H(Se),j(Se,t)}var mn=null,Gi=!1,No=!1;function Cd(e){mn===null?mn=[e]:mn.push(e)}function nm(e){Gi=!0,Cd(e)}function nt(){if(!No&&mn!==null){No=!0;var e=0,n=M;try{var t=mn;for(M=1;e<t.length;e++){var u=t[e];do u=u(!0);while(u!==null)}mn=null,Gi=!1}catch(r){throw mn!==null&&(mn=mn.slice(e+1)),Q0(pa,nt),r}finally{M=n,No=!1}}return null}var Rt=[],Lt=0,vi=null,bi=0,Le=[],Oe=0,gt=null,yn=1,xn="";function ot(e,n){Rt[Lt++]=bi,Rt[Lt++]=vi,vi=e,bi=n}function Ed(e,n,t){Le[Oe++]=yn,Le[Oe++]=xn,Le[Oe++]=gt,gt=e;var u=yn;e=xn;var r=32-Ve(u)-1;u&=~(1<<r),t+=1;var i=32-Ve(n)+r;if(30<i){var o=r-r%5;i=(u&(1<<o)-1).toString(32),u>>=o,r-=o,yn=1<<32-Ve(n)+r|t<<r|u,xn=i+e}else yn=1<<i|t<<r|u,xn=e}function wa(e){e.return!==null&&(ot(e,1),Ed(e,1,0))}function _a(e){for(;e===vi;)vi=Rt[--Lt],Rt[Lt]=null,bi=Rt[--Lt],Rt[Lt]=null;for(;e===gt;)gt=Le[--Oe],Le[Oe]=null,xn=Le[--Oe],Le[Oe]=null,yn=Le[--Oe],Le[Oe]=null}var Te=null,Fe=null,$=!1,Ge=null;function Ad(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,Fe=$n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,Fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=gt!==null?{id:yn,overflow:xn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Te=e,Fe=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if($){var n=Fe;if(n){var t=n;if(!Xs(e,n)){if(Sl(e))throw Error(C(418));n=$n(t.nextSibling);var u=Te;n&&Xs(e,n)?Ad(u,t):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(Sl(e))throw Error(C(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Mr(e){if(e!==Te)return!1;if(!$)return ec(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!bl(e.type,e.memoizedProps)),n&&(n=Fe)){if(Sl(e))throw Dd(),Error(C(418));for(;n;)Ad(e,n),n=$n(n.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Fe=$n(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Fe=null}}else Fe=Te?$n(e.stateNode.nextSibling):null;return!0}function Dd(){for(var e=Fe;e;)e=$n(e.nextSibling)}function Jt(){Fe=Te=null,$=!1}function Sa(e){Ge===null?Ge=[e]:Ge.push(e)}var tm=Cn.ReactCurrentBatchConfig;function ku(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var u=t.stateNode}if(!u)throw Error(C(147,e));var r=u,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=r.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function jr(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nc(e){var n=e._init;return n(e._payload)}function Fd(e){function n(y,p){if(e){var m=y.deletions;m===null?(y.deletions=[p],y.flags|=16):m.push(p)}}function t(y,p){if(!e)return null;for(;p!==null;)n(y,p),p=p.sibling;return null}function u(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function r(y,p){return y=Gn(y,p),y.index=0,y.sibling=null,y}function i(y,p,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<p?(y.flags|=2,p):m):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,p,m,v){return p===null||p.tag!==6?(p=zo(m,y.mode,v),p.return=y,p):(p=r(p,m),p.return=y,p)}function a(y,p,m,v){var _=m.type;return _===Dt?d(y,p,m.props.children,v,m.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Tn&&nc(_)===p.type)?(v=r(p,m.props),v.ref=ku(y,p,m),v.return=y,v):(v=ui(m.type,m.key,m.props,null,y.mode,v),v.ref=ku(y,p,m),v.return=y,v)}function s(y,p,m,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Bo(m,y.mode,v),p.return=y,p):(p=r(p,m.children||[]),p.return=y,p)}function d(y,p,m,v,_){return p===null||p.tag!==7?(p=pt(m,y.mode,v,_),p.return=y,p):(p=r(p,m),p.return=y,p)}function c(y,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zo(""+p,y.mode,m),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ar:return m=ui(p.type,p.key,p.props,null,y.mode,m),m.ref=ku(y,null,p),m.return=y,m;case At:return p=Bo(p,y.mode,m),p.return=y,p;case Tn:var v=p._init;return c(y,v(p._payload),m)}if(Eu(p)||gu(p))return p=pt(p,y.mode,m,null),p.return=y,p;jr(y,p)}return null}function f(y,p,m,v){var _=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:l(y,p,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ar:return m.key===_?a(y,p,m,v):null;case At:return m.key===_?s(y,p,m,v):null;case Tn:return _=m._init,f(y,p,_(m._payload),v)}if(Eu(m)||gu(m))return _!==null?null:d(y,p,m,v,null);jr(y,m)}return null}function h(y,p,m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return y=y.get(m)||null,l(p,y,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ar:return y=y.get(v.key===null?m:v.key)||null,a(p,y,v,_);case At:return y=y.get(v.key===null?m:v.key)||null,s(p,y,v,_);case Tn:var S=v._init;return h(y,p,m,S(v._payload),_)}if(Eu(v)||gu(v))return y=y.get(m)||null,d(p,y,v,_,null);jr(p,v)}return null}function g(y,p,m,v){for(var _=null,S=null,E=p,A=p=0,N=null;E!==null&&A<m.length;A++){E.index>A?(N=E,E=null):N=E.sibling;var P=f(y,E,m[A],v);if(P===null){E===null&&(E=N);break}e&&E&&P.alternate===null&&n(y,E),p=i(P,p,A),S===null?_=P:S.sibling=P,S=P,E=N}if(A===m.length)return t(y,E),$&&ot(y,A),_;if(E===null){for(;A<m.length;A++)E=c(y,m[A],v),E!==null&&(p=i(E,p,A),S===null?_=E:S.sibling=E,S=E);return $&&ot(y,A),_}for(E=u(y,E);A<m.length;A++)N=h(E,y,A,m[A],v),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?A:N.key),p=i(N,p,A),S===null?_=N:S.sibling=N,S=N);return e&&E.forEach(function(ne){return n(y,ne)}),$&&ot(y,A),_}function b(y,p,m,v){var _=gu(m);if(typeof _!="function")throw Error(C(150));if(m=_.call(m),m==null)throw Error(C(151));for(var S=_=null,E=p,A=p=0,N=null,P=m.next();E!==null&&!P.done;A++,P=m.next()){E.index>A?(N=E,E=null):N=E.sibling;var ne=f(y,E,P.value,v);if(ne===null){E===null&&(E=N);break}e&&E&&ne.alternate===null&&n(y,E),p=i(ne,p,A),S===null?_=ne:S.sibling=ne,S=ne,E=N}if(P.done)return t(y,E),$&&ot(y,A),_;if(E===null){for(;!P.done;A++,P=m.next())P=c(y,P.value,v),P!==null&&(p=i(P,p,A),S===null?_=P:S.sibling=P,S=P);return $&&ot(y,A),_}for(E=u(y,E);!P.done;A++,P=m.next())P=h(E,y,A,P.value,v),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?A:P.key),p=i(P,p,A),S===null?_=P:S.sibling=P,S=P);return e&&E.forEach(function(tt){return n(y,tt)}),$&&ot(y,A),_}function k(y,p,m,v){if(typeof m=="object"&&m!==null&&m.type===Dt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ar:e:{for(var _=m.key,S=p;S!==null;){if(S.key===_){if(_=m.type,_===Dt){if(S.tag===7){t(y,S.sibling),p=r(S,m.props.children),p.return=y,y=p;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Tn&&nc(_)===S.type){t(y,S.sibling),p=r(S,m.props),p.ref=ku(y,S,m),p.return=y,y=p;break e}t(y,S);break}else n(y,S);S=S.sibling}m.type===Dt?(p=pt(m.props.children,y.mode,v,m.key),p.return=y,y=p):(v=ui(m.type,m.key,m.props,null,y.mode,v),v.ref=ku(y,p,m),v.return=y,y=v)}return o(y);case At:e:{for(S=m.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(y,p.sibling),p=r(p,m.children||[]),p.return=y,y=p;break e}else{t(y,p);break}else n(y,p);p=p.sibling}p=Bo(m,y.mode,v),p.return=y,y=p}return o(y);case Tn:return S=m._init,k(y,p,S(m._payload),v)}if(Eu(m))return g(y,p,m,v);if(gu(m))return b(y,p,m,v);jr(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(y,p.sibling),p=r(p,m),p.return=y,y=p):(t(y,p),p=zo(m,y.mode,v),p.return=y,y=p),o(y)):t(y,p)}return k}var Zt=Fd(!0),Td=Fd(!1),ki=et(null),wi=null,Ot=null,Ca=null;function Ea(){Ca=Ot=wi=null}function Aa(e){var n=ki.current;H(ki),e._currentValue=n}function El(e,n,t){for(;e!==null;){var u=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,u!==null&&(u.childLanes|=n)):u!==null&&(u.childLanes&n)!==n&&(u.childLanes|=n),e===t)break;e=e.return}}function Gt(e,n){wi=e,Ca=Ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:n,next:null},Ot===null){if(wi===null)throw Error(C(308));Ot=e,wi.dependencies={lanes:0,firstContext:e}}else Ot=Ot.next=e;return n}var st=null;function Da(e){st===null?st=[e]:st.push(e)}function Pd(e,n,t,u){var r=n.interleaved;return r===null?(t.next=t,Da(n)):(t.next=r.next,r.next=t),n.interleaved=t,_n(e,u)}function _n(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pn=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,O&2){var r=u.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),u.pending=n,_n(e,t)}return r=u.interleaved,r===null?(n.next=n,Da(u)):(n.next=r.next,r.next=n),u.interleaved=n,_n(e,t)}function Jr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var u=n.lanes;u&=e.pendingLanes,t|=u,n.lanes=t,ha(e,t)}}function tc(e,n){var t=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,t===u)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:u.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:u.shared,effects:u.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function _i(e,n,t,u){var r=e.updateQueue;Pn=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,s=a.next;a.next=null,o===null?i=s:o.next=s,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=s:l.next=s,d.lastBaseUpdate=a))}if(i!==null){var c=r.baseState;o=0,d=s=a=null,l=i;do{var f=l.lane,h=l.eventTime;if((u&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,b=l;switch(f=n,h=t,b.tag){case 1:if(g=b.payload,typeof g=="function"){c=g.call(h,c,f);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,f=typeof g=="function"?g.call(h,c,f):g,f==null)break e;c=G({},c,f);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(s=d=h,a=c):d=d.next=h,o|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(a=c),r.baseState=a,r.firstBaseUpdate=s,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);xt|=o,e.lanes=o,e.memoizedState=c}}function uc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var u=e[n],r=u.callback;if(r!==null){if(u.callback=null,u=t,typeof r!="function")throw Error(C(191,r));r.call(u)}}}var fr={},rn=et(fr),Yu=et(fr),Qu=et(fr);function ct(e){if(e===fr)throw Error(C(174));return e}function Ta(e,n){switch(j(Qu,n),j(Yu,e),j(rn,fr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ol(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ol(n,e)}H(rn),j(rn,n)}function Xt(){H(rn),H(Yu),H(Qu)}function Id(e){ct(Qu.current);var n=ct(rn.current),t=ol(n,e.type);n!==t&&(j(Yu,e),j(rn,t))}function Pa(e){Yu.current===e&&(H(rn),H(Yu))}var U=et(0);function Si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Io=[];function Na(){for(var e=0;e<Io.length;e++)Io[e]._workInProgressVersionPrimary=null;Io.length=0}var Zr=Cn.ReactCurrentDispatcher,Ro=Cn.ReactCurrentBatchConfig,yt=0,q=null,X=null,re=null,Ci=!1,Ru=!1,Ju=0,um=0;function de(){throw Error(C(321))}function Ia(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ye(e[t],n[t]))return!1;return!0}function Ra(e,n,t,u,r,i){if(yt=i,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zr.current=e===null||e.memoizedState===null?lm:am,e=t(u,r),Ru){i=0;do{if(Ru=!1,Ju=0,25<=i)throw Error(C(301));i+=1,re=X=null,n.updateQueue=null,Zr.current=sm,e=t(u,r)}while(Ru)}if(Zr.current=Ei,n=X!==null&&X.next!==null,yt=0,re=X=q=null,Ci=!1,n)throw Error(C(300));return e}function La(){var e=Ju!==0;return Ju=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?q.memoizedState=re=e:re=re.next=e,re}function Be(){if(X===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=re===null?q.memoizedState:re.next;if(n!==null)re=n,X=e;else{if(e===null)throw Error(C(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},re===null?q.memoizedState=re=e:re=re.next=e}return re}function Zu(e,n){return typeof n=="function"?n(e):n}function Lo(e){var n=Be(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var u=X,r=u.baseQueue,i=t.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}u.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,u=u.baseState;var l=o=null,a=null,s=i;do{var d=s.lane;if((yt&d)===d)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),u=s.hasEagerState?s.eagerState:e(u,s.action);else{var c={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(l=a=c,o=u):a=a.next=c,q.lanes|=d,xt|=d}s=s.next}while(s!==null&&s!==i);a===null?o=u:a.next=l,Ye(u,n.memoizedState)||(we=!0),n.memoizedState=u,n.baseState=o,n.baseQueue=a,t.lastRenderedState=u}if(e=t.interleaved,e!==null){r=e;do i=r.lane,q.lanes|=i,xt|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Oo(e){var n=Be(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var u=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);Ye(i,n.memoizedState)||(we=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,u]}function Rd(){}function Ld(e,n){var t=q,u=Be(),r=n(),i=!Ye(u.memoizedState,r);if(i&&(u.memoizedState=r,we=!0),u=u.queue,Oa(jd.bind(null,t,u,e),[e]),u.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Xu(9,Md.bind(null,t,u,r,n),void 0,null),oe===null)throw Error(C(349));yt&30||Od(t,n,r)}return r}function Od(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Md(e,n,t,u){n.value=t,n.getSnapshot=u,zd(n)&&Bd(e)}function jd(e,n,t){return t(function(){zd(n)&&Bd(e)})}function zd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ye(e,t)}catch{return!0}}function Bd(e){var n=_n(e,1);n!==null&&Ke(n,e,1,-1)}function rc(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zu,lastRenderedState:e},n.queue=e,e=e.dispatch=om.bind(null,q,e),[n.memoizedState,e]}function Xu(e,n,t,u){return e={tag:e,create:n,destroy:t,deps:u,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(u=t.next,t.next=e,e.next=u,n.lastEffect=e)),e}function Hd(){return Be().memoizedState}function Xr(e,n,t,u){var r=Xe();q.flags|=e,r.memoizedState=Xu(1|n,t,void 0,u===void 0?null:u)}function Vi(e,n,t,u){var r=Be();u=u===void 0?null:u;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,u!==null&&Ia(u,o.deps)){r.memoizedState=Xu(n,t,i,u);return}}q.flags|=e,r.memoizedState=Xu(1|n,t,i,u)}function ic(e,n){return Xr(8390656,8,e,n)}function Oa(e,n){return Vi(2048,8,e,n)}function $d(e,n){return Vi(4,2,e,n)}function Ud(e,n){return Vi(4,4,e,n)}function qd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wd(e,n,t){return t=t!=null?t.concat([e]):null,Vi(4,4,qd.bind(null,n,e),t)}function Ma(){}function Gd(e,n){var t=Be();n=n===void 0?null:n;var u=t.memoizedState;return u!==null&&n!==null&&Ia(n,u[1])?u[0]:(t.memoizedState=[e,n],e)}function Vd(e,n){var t=Be();n=n===void 0?null:n;var u=t.memoizedState;return u!==null&&n!==null&&Ia(n,u[1])?u[0]:(e=e(),t.memoizedState=[e,n],e)}function Kd(e,n,t){return yt&21?(Ye(t,n)||(t=X0(),q.lanes|=t,xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function rm(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var u=Ro.transition;Ro.transition={};try{e(!1),n()}finally{M=t,Ro.transition=u}}function Yd(){return Be().memoizedState}function im(e,n,t){var u=Wn(e);if(t={lane:u,action:t,hasEagerState:!1,eagerState:null,next:null},Qd(e))Jd(n,t);else if(t=Pd(e,n,t,u),t!==null){var r=ye();Ke(t,e,u,r),Zd(t,n,u)}}function om(e,n,t){var u=Wn(e),r={lane:u,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qd(e))Jd(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(r.hasEagerState=!0,r.eagerState=l,Ye(l,o)){var a=n.interleaved;a===null?(r.next=r,Da(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=Pd(e,n,r,u),t!==null&&(r=ye(),Ke(t,e,u,r),Zd(t,n,u))}}function Qd(e){var n=e.alternate;return e===q||n!==null&&n===q}function Jd(e,n){Ru=Ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zd(e,n,t){if(t&4194240){var u=n.lanes;u&=e.pendingLanes,t|=u,n.lanes=t,ha(e,t)}}var Ei={readContext:ze,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},lm={readContext:ze,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:ic,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Xr(4194308,4,qd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Xr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Xr(4,2,e,n)},useMemo:function(e,n){var t=Xe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var u=Xe();return n=t!==void 0?t(n):n,u.memoizedState=u.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},u.queue=e,e=e.dispatch=im.bind(null,q,e),[u.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:rc,useDebugValue:Ma,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=rc(!1),n=e[0];return e=rm.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var u=q,r=Xe();if($){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),oe===null)throw Error(C(349));yt&30||Od(u,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,ic(jd.bind(null,u,i,e),[e]),u.flags|=2048,Xu(9,Md.bind(null,u,i,t,n),void 0,null),t},useId:function(){var e=Xe(),n=oe.identifierPrefix;if($){var t=xn,u=yn;t=(u&~(1<<32-Ve(u)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ju++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=um++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},am={readContext:ze,useCallback:Gd,useContext:ze,useEffect:Oa,useImperativeHandle:Wd,useInsertionEffect:$d,useLayoutEffect:Ud,useMemo:Vd,useReducer:Lo,useRef:Hd,useState:function(){return Lo(Zu)},useDebugValue:Ma,useDeferredValue:function(e){var n=Be();return Kd(n,X.memoizedState,e)},useTransition:function(){var e=Lo(Zu)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Rd,useSyncExternalStore:Ld,useId:Yd,unstable_isNewReconciler:!1},sm={readContext:ze,useCallback:Gd,useContext:ze,useEffect:Oa,useImperativeHandle:Wd,useInsertionEffect:$d,useLayoutEffect:Ud,useMemo:Vd,useReducer:Oo,useRef:Hd,useState:function(){return Oo(Zu)},useDebugValue:Ma,useDeferredValue:function(e){var n=Be();return X===null?n.memoizedState=e:Kd(n,X.memoizedState,e)},useTransition:function(){var e=Oo(Zu)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Rd,useSyncExternalStore:Ld,useId:Yd,unstable_isNewReconciler:!1};function qe(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Al(e,n,t,u){n=e.memoizedState,t=t(u,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ki={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var u=ye(),r=Wn(e),i=vn(u,r);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,r),n!==null&&(Ke(n,e,r,u),Jr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var u=ye(),r=Wn(e),i=vn(u,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,r),n!==null&&(Ke(n,e,r,u),Jr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),u=Wn(e),r=vn(t,u);r.tag=2,n!=null&&(r.callback=n),n=Un(e,r,u),n!==null&&(Ke(n,e,u,t),Jr(n,e,u))}};function oc(e,n,t,u,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,i,o):n.prototype&&n.prototype.isPureReactComponent?!Wu(t,u)||!Wu(r,i):!0}function Xd(e,n,t){var u=!1,r=Yn,i=n.contextType;return typeof i=="object"&&i!==null?i=ze(i):(r=Ce(n)?mt:he.current,u=n.contextTypes,i=(u=u!=null)?Qt(e,r):Yn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ki,e.stateNode=n,n._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function lc(e,n,t,u){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,u),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,u),n.state!==e&&Ki.enqueueReplaceState(n,n.state,null)}function Dl(e,n,t,u){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Fa(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=ze(i):(i=Ce(n)?mt:he.current,r.context=Qt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Al(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Ki.enqueueReplaceState(r,r.state,null),_i(e,t,r,u),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function eu(e,n){try{var t="",u=n;do t+=Mh(u),u=u.return;while(u);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Mo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Fl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function ef(e,n,t){t=vn(-1,t),t.tag=3,t.payload={element:null};var u=n.value;return t.callback=function(){Di||(Di=!0,zl=u),Fl(e,n)},t}function nf(e,n,t){t=vn(-1,t),t.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var r=n.value;t.payload=function(){return u(r)},t.callback=function(){Fl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Fl(e,n),typeof u!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function ac(e,n,t){var u=e.pingCache;if(u===null){u=e.pingCache=new cm;var r=new Set;u.set(n,r)}else r=u.get(n),r===void 0&&(r=new Set,u.set(n,r));r.has(t)||(r.add(t),e=Sm.bind(null,e,n,t),n.then(e,e))}function sc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cc(e,n,t,u,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=vn(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var dm=Cn.ReactCurrentOwner,we=!1;function ge(e,n,t,u){n.child=e===null?Td(n,null,t,u):Zt(n,e.child,t,u)}function dc(e,n,t,u,r){t=t.render;var i=n.ref;return Gt(n,r),u=Ra(e,n,t,u,i,r),t=La(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Sn(e,n,r)):($&&t&&wa(n),n.flags|=1,ge(e,n,u,r),n.child)}function fc(e,n,t,u,r){if(e===null){var i=t.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,tf(e,n,i,u,r)):(e=ui(t.type,null,u,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Wu,t(o,u)&&e.ref===n.ref)return Sn(e,n,r)}return n.flags|=1,e=Gn(i,u),e.ref=n.ref,e.return=n,n.child=e}function tf(e,n,t,u,r){if(e!==null){var i=e.memoizedProps;if(Wu(i,u)&&e.ref===n.ref)if(we=!1,n.pendingProps=u=i,(e.lanes&r)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,Sn(e,n,r)}return Tl(e,n,t,u,r)}function uf(e,n,t){var u=n.pendingProps,r=u.children,i=e!==null?e.memoizedState:null;if(u.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(jt,De),De|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(jt,De),De|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=i!==null?i.baseLanes:t,j(jt,De),De|=u}else i!==null?(u=i.baseLanes|t,n.memoizedState=null):u=t,j(jt,De),De|=u;return ge(e,n,r,t),n.child}function rf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Tl(e,n,t,u,r){var i=Ce(t)?mt:he.current;return i=Qt(n,i),Gt(n,r),t=Ra(e,n,t,u,i,r),u=La(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Sn(e,n,r)):($&&u&&wa(n),n.flags|=1,ge(e,n,t,r),n.child)}function pc(e,n,t,u,r){if(Ce(t)){var i=!0;xi(n)}else i=!1;if(Gt(n,r),n.stateNode===null)ei(e,n),Xd(n,t,u),Dl(n,t,u,r),u=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var a=o.context,s=t.contextType;typeof s=="object"&&s!==null?s=ze(s):(s=Ce(t)?mt:he.current,s=Qt(n,s));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||a!==s)&&lc(n,o,u,s),Pn=!1;var f=n.memoizedState;o.state=f,_i(n,u,o,r),a=n.memoizedState,l!==u||f!==a||Se.current||Pn?(typeof d=="function"&&(Al(n,t,d,u),a=n.memoizedState),(l=Pn||oc(n,t,l,u,f,a,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=u,n.memoizedState=a),o.props=u,o.state=a,o.context=s,u=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),u=!1)}else{o=n.stateNode,Nd(e,n),l=n.memoizedProps,s=n.type===n.elementType?l:qe(n.type,l),o.props=s,c=n.pendingProps,f=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=ze(a):(a=Ce(t)?mt:he.current,a=Qt(n,a));var h=t.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&lc(n,o,u,a),Pn=!1,f=n.memoizedState,o.state=f,_i(n,u,o,r);var g=n.memoizedState;l!==c||f!==g||Se.current||Pn?(typeof h=="function"&&(Al(n,t,h,u),g=n.memoizedState),(s=Pn||oc(n,t,s,u,f,g,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(u,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(u,g,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=u,n.memoizedState=g),o.props=u,o.state=g,o.context=a,u=s):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),u=!1)}return Pl(e,n,t,u,i,r)}function Pl(e,n,t,u,r,i){rf(e,n);var o=(n.flags&128)!==0;if(!u&&!o)return r&&Zs(n,t,!1),Sn(e,n,i);u=n.stateNode,dm.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:u.render();return n.flags|=1,e!==null&&o?(n.child=Zt(n,e.child,null,i),n.child=Zt(n,null,l,i)):ge(e,n,l,i),n.memoizedState=u.state,r&&Zs(n,t,!0),n.child}function of(e){var n=e.stateNode;n.pendingContext?Js(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Js(e,n.context,!1),Ta(e,n.containerInfo)}function hc(e,n,t,u,r){return Jt(),Sa(r),n.flags|=256,ge(e,n,t,u),n.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,n,t){var u=n.pendingProps,r=U.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),j(U,r&1),e===null)return Cl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=u.children,e=u.fallback,i?(u=n.mode,i=n.child,o={mode:"hidden",children:o},!(u&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ji(o,u,0,null),e=pt(e,u,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Il(t),n.memoizedState=Nl,e):ja(n,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return fm(e,n,o,u,l,r,t);if(i){i=u.fallback,o=n.mode,r=e.child,l=r.sibling;var a={mode:"hidden",children:u.children};return!(o&1)&&n.child!==r?(u=n.child,u.childLanes=0,u.pendingProps=a,n.deletions=null):(u=Gn(r,a),u.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=Gn(l,i):(i=pt(i,o,t,null),i.flags|=2),i.return=n,u.return=n,u.sibling=i,n.child=u,u=i,i=n.child,o=e.child.memoizedState,o=o===null?Il(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Nl,u}return i=e.child,e=i.sibling,u=Gn(i,{mode:"visible",children:u.children}),!(n.mode&1)&&(u.lanes=t),u.return=n,u.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=u,n.memoizedState=null,u}function ja(e,n){return n=Ji({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function zr(e,n,t,u){return u!==null&&Sa(u),Zt(n,e.child,null,t),e=ja(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fm(e,n,t,u,r,i,o){if(t)return n.flags&256?(n.flags&=-257,u=Mo(Error(C(422))),zr(e,n,o,u)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=u.fallback,r=n.mode,u=Ji({mode:"visible",children:u.children},r,0,null),i=pt(i,r,o,null),i.flags|=2,u.return=n,i.return=n,u.sibling=i,n.child=u,n.mode&1&&Zt(n,e.child,null,o),n.child.memoizedState=Il(o),n.memoizedState=Nl,i);if(!(n.mode&1))return zr(e,n,o,null);if(r.data==="$!"){if(u=r.nextSibling&&r.nextSibling.dataset,u)var l=u.dgst;return u=l,i=Error(C(419)),u=Mo(i,u,void 0),zr(e,n,o,u)}if(l=(o&e.childLanes)!==0,we||l){if(u=oe,u!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(u.suspendedLanes|o)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,_n(e,r),Ke(u,e,r,-1))}return qa(),u=Mo(Error(C(421))),zr(e,n,o,u)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Cm.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Fe=$n(r.nextSibling),Te=n,$=!0,Ge=null,e!==null&&(Le[Oe++]=yn,Le[Oe++]=xn,Le[Oe++]=gt,yn=e.id,xn=e.overflow,gt=n),n=ja(n,u.children),n.flags|=4096,n)}function mc(e,n,t){e.lanes|=n;var u=e.alternate;u!==null&&(u.lanes|=n),El(e.return,n,t)}function jo(e,n,t,u,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:u,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=u,i.tail=t,i.tailMode=r)}function af(e,n,t){var u=n.pendingProps,r=u.revealOrder,i=u.tail;if(ge(e,n,u.children,t),u=U.current,u&2)u=u&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,t,n);else if(e.tag===19)mc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(j(U,u),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Si(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),jo(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Si(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}jo(n,!0,t,null,i);break;case"together":jo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ei(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pm(e,n,t){switch(n.tag){case 3:of(n),Jt();break;case 5:Id(n);break;case 1:Ce(n.type)&&xi(n);break;case 4:Ta(n,n.stateNode.containerInfo);break;case 10:var u=n.type._context,r=n.memoizedProps.value;j(ki,u._currentValue),u._currentValue=r;break;case 13:if(u=n.memoizedState,u!==null)return u.dehydrated!==null?(j(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?lf(e,n,t):(j(U,U.current&1),e=Sn(e,n,t),e!==null?e.sibling:null);j(U,U.current&1);break;case 19:if(u=(t&n.childLanes)!==0,e.flags&128){if(u)return af(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),j(U,U.current),u)break;return null;case 22:case 23:return n.lanes=0,uf(e,n,t)}return Sn(e,n,t)}var sf,Rl,cf,df;sf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rl=function(){};cf=function(e,n,t,u){var r=e.memoizedProps;if(r!==u){e=n.stateNode,ct(rn.current);var i=null;switch(t){case"input":r=tl(e,r),u=tl(e,u),i=[];break;case"select":r=G({},r,{value:void 0}),u=G({},u,{value:void 0}),i=[];break;case"textarea":r=il(e,r),u=il(e,u),i=[];break;default:typeof r.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=gi)}ll(t,u);var o;t=null;for(s in r)if(!u.hasOwnProperty(s)&&r.hasOwnProperty(s)&&r[s]!=null)if(s==="style"){var l=r[s];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ju.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in u){var a=u[s];if(l=r!=null?r[s]:void 0,u.hasOwnProperty(s)&&a!==l&&(a!=null||l!=null))if(s==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(s,t)),t=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(ju.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&B("scroll",e),i||l===a||(i=[])):(i=i||[]).push(s,a))}t&&(i=i||[]).push("style",t);var s=i;(n.updateQueue=s)&&(n.flags|=4)}};df=function(e,n,t,u){t!==u&&(n.flags|=4)};function wu(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var u=null;t!==null;)t.alternate!==null&&(u=t),t=t.sibling;u===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,u=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,u|=r.subtreeFlags&14680064,u|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,u|=r.subtreeFlags,u|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=u,e.childLanes=t,n}function hm(e,n,t){var u=n.pendingProps;switch(_a(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Ce(n.type)&&yi(),fe(n),null;case 3:return u=n.stateNode,Xt(),H(Se),H(he),Na(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(Mr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ge!==null&&($l(Ge),Ge=null))),Rl(e,n),fe(n),null;case 5:Pa(n);var r=ct(Qu.current);if(t=n.type,e!==null&&n.stateNode!=null)cf(e,n,t,u,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!u){if(n.stateNode===null)throw Error(C(166));return fe(n),null}if(e=ct(rn.current),Mr(n)){u=n.stateNode,t=n.type;var i=n.memoizedProps;switch(u[en]=n,u[Ku]=i,e=(n.mode&1)!==0,t){case"dialog":B("cancel",u),B("close",u);break;case"iframe":case"object":case"embed":B("load",u);break;case"video":case"audio":for(r=0;r<Du.length;r++)B(Du[r],u);break;case"source":B("error",u);break;case"img":case"image":case"link":B("error",u),B("load",u);break;case"details":B("toggle",u);break;case"input":Ss(u,i),B("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!i.multiple},B("invalid",u);break;case"textarea":Es(u,i),B("invalid",u)}ll(t,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?u.textContent!==l&&(i.suppressHydrationWarning!==!0&&Or(u.textContent,l,e),r=["children",l]):typeof l=="number"&&u.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Or(u.textContent,l,e),r=["children",""+l]):ju.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&B("scroll",u)}switch(t){case"input":Dr(u),Cs(u,i,!0);break;case"textarea":Dr(u),As(u);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(u.onclick=gi)}u=r,n.updateQueue=u,u!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=j0(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=o.createElement(t,{is:u.is}):(e=o.createElement(t),t==="select"&&(o=e,u.multiple?o.multiple=!0:u.size&&(o.size=u.size))):e=o.createElementNS(e,t),e[en]=n,e[Ku]=u,sf(e,n,!1,!1),n.stateNode=e;e:{switch(o=al(t,u),t){case"dialog":B("cancel",e),B("close",e),r=u;break;case"iframe":case"object":case"embed":B("load",e),r=u;break;case"video":case"audio":for(r=0;r<Du.length;r++)B(Du[r],e);r=u;break;case"source":B("error",e),r=u;break;case"img":case"image":case"link":B("error",e),B("load",e),r=u;break;case"details":B("toggle",e),r=u;break;case"input":Ss(e,u),r=tl(e,u),B("invalid",e);break;case"option":r=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},r=G({},u,{value:void 0}),B("invalid",e);break;case"textarea":Es(e,u),r=il(e,u),B("invalid",e);break;default:r=u}ll(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?H0(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&z0(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&zu(e,a):typeof a=="number"&&zu(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ju.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",e):a!=null&&aa(e,i,a,o))}switch(t){case"input":Dr(e),Cs(e,u,!1);break;case"textarea":Dr(e),As(e);break;case"option":u.value!=null&&e.setAttribute("value",""+Kn(u.value));break;case"select":e.multiple=!!u.multiple,i=u.value,i!=null?$t(e,!!u.multiple,i,!1):u.defaultValue!=null&&$t(e,!!u.multiple,u.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=gi)}switch(t){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)df(e,n,e.memoizedProps,u);else{if(typeof u!="string"&&n.stateNode===null)throw Error(C(166));if(t=ct(Qu.current),ct(rn.current),Mr(n)){if(u=n.stateNode,t=n.memoizedProps,u[en]=n,(i=u.nodeValue!==t)&&(e=Te,e!==null))switch(e.tag){case 3:Or(u.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(u.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else u=(t.nodeType===9?t:t.ownerDocument).createTextNode(u),u[en]=n,n.stateNode=u}return fe(n),null;case 13:if(H(U),u=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Fe!==null&&n.mode&1&&!(n.flags&128))Dd(),Jt(),n.flags|=98560,i=!1;else if(i=Mr(n),u!==null&&u.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[en]=n}else Jt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),i=!1}else Ge!==null&&($l(Ge),Ge=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ee===0&&(ee=3):qa())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Xt(),Rl(e,n),e===null&&Gu(n.stateNode.containerInfo),fe(n),null;case 10:return Aa(n.type._context),fe(n),null;case 17:return Ce(n.type)&&yi(),fe(n),null;case 19:if(H(U),i=n.memoizedState,i===null)return fe(n),null;if(u=(n.flags&128)!==0,o=i.rendering,o===null)if(u)wu(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Si(e),o!==null){for(n.flags|=128,wu(i,!1),u=o.updateQueue,u!==null&&(n.updateQueue=u,n.flags|=4),n.subtreeFlags=0,u=t,t=n.child;t!==null;)i=t,e=u,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j(U,U.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>nu&&(n.flags|=128,u=!0,wu(i,!1),n.lanes=4194304)}else{if(!u)if(e=Si(o),e!==null){if(n.flags|=128,u=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wu(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return fe(n),null}else 2*Q()-i.renderingStartTime>nu&&t!==1073741824&&(n.flags|=128,u=!0,wu(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=U.current,j(U,u?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return Ua(),u=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(n.flags|=8192),u&&n.mode&1?De&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function mm(e,n){switch(_a(n),n.tag){case 1:return Ce(n.type)&&yi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xt(),H(Se),H(he),Na(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Pa(n),null;case 13:if(H(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(U),null;case 4:return Xt(),null;case 10:return Aa(n.type._context),null;case 22:case 23:return Ua(),null;case 24:return null;default:return null}}var Br=!1,pe=!1,gm=typeof WeakSet=="function"?WeakSet:Set,D=null;function Mt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(u){V(e,n,u)}else t.current=null}function Ll(e,n,t){try{t()}catch(u){V(e,n,u)}}var gc=!1;function ym(e,n){if(xl=pi,e=md(),ka(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var u=t.getSelection&&t.getSelection();if(u&&u.rangeCount!==0){t=u.anchorNode;var r=u.anchorOffset,i=u.focusNode;u=u.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,a=-1,s=0,d=0,c=e,f=null;n:for(;;){for(var h;c!==t||r!==0&&c.nodeType!==3||(l=o+r),c!==i||u!==0&&c.nodeType!==3||(a=o+u),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break n;if(f===t&&++s===r&&(l=o),f===i&&++d===u&&(a=o),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}t=l===-1||a===-1?null:{start:l,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(vl={focusedElem:e,selectionRange:t},pi=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,k=g.memoizedState,y=n.stateNode,p=y.getSnapshotBeforeUpdate(n.elementType===n.type?b:qe(n.type,b),k);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){V(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return g=gc,gc=!1,g}function Lu(e,n,t){var u=n.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var r=u=u.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Ll(n,t,i)}r=r.next}while(r!==u)}}function Yi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var u=t.create;t.destroy=u()}t=t.next}while(t!==n)}}function Ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ff(e){var n=e.alternate;n!==null&&(e.alternate=null,ff(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Ku],delete n[wl],delete n[X1],delete n[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pf(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,n,t){var u=e.tag;if(u===5||u===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=gi));else if(u!==4&&(e=e.child,e!==null))for(Ml(e,n,t),e=e.sibling;e!==null;)Ml(e,n,t),e=e.sibling}function jl(e,n,t){var u=e.tag;if(u===5||u===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for(jl(e,n,t),e=e.sibling;e!==null;)jl(e,n,t),e=e.sibling}var ae=null,We=!1;function Dn(e,n,t){for(t=t.child;t!==null;)hf(e,n,t),t=t.sibling}function hf(e,n,t){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Hi,t)}catch{}switch(t.tag){case 5:pe||Mt(t,n);case 6:var u=ae,r=We;ae=null,Dn(e,n,t),ae=u,We=r,ae!==null&&(We?(e=ae,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ae.removeChild(t.stateNode));break;case 18:ae!==null&&(We?(e=ae,t=t.stateNode,e.nodeType===8?Po(e.parentNode,t):e.nodeType===1&&Po(e,t),Uu(e)):Po(ae,t.stateNode));break;case 4:u=ae,r=We,ae=t.stateNode.containerInfo,We=!0,Dn(e,n,t),ae=u,We=r;break;case 0:case 11:case 14:case 15:if(!pe&&(u=t.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){r=u=u.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ll(t,n,o),r=r.next}while(r!==u)}Dn(e,n,t);break;case 1:if(!pe&&(Mt(t,n),u=t.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=t.memoizedProps,u.state=t.memoizedState,u.componentWillUnmount()}catch(l){V(t,n,l)}Dn(e,n,t);break;case 21:Dn(e,n,t);break;case 22:t.mode&1?(pe=(u=pe)||t.memoizedState!==null,Dn(e,n,t),pe=u):Dn(e,n,t);break;default:Dn(e,n,t)}}function xc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gm),n.forEach(function(u){var r=Em.bind(null,e,u);t.has(u)||(t.add(u),u.then(r,r))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var u=0;u<t.length;u++){var r=t[u];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,We=!1;break e;case 3:ae=l.stateNode.containerInfo,We=!0;break e;case 4:ae=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(ae===null)throw Error(C(160));hf(i,o,r),ae=null,We=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(s){V(r,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mf(n,e),n=n.sibling}function mf(e,n){var t=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Ze(e),u&4){try{Lu(3,e,e.return),Yi(3,e)}catch(b){V(e,e.return,b)}try{Lu(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:Ue(n,e),Ze(e),u&512&&t!==null&&Mt(t,t.return);break;case 5:if(Ue(n,e),Ze(e),u&512&&t!==null&&Mt(t,t.return),e.flags&32){var r=e.stateNode;try{zu(r,"")}catch(b){V(e,e.return,b)}}if(u&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&O0(r,i),al(l,o);var s=al(l,i);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?H0(r,c):d==="dangerouslySetInnerHTML"?z0(r,c):d==="children"?zu(r,c):aa(r,d,c,s)}switch(l){case"input":ul(r,i);break;case"textarea":M0(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?$t(r,!!i.multiple,h,!1):f!==!!i.multiple&&(i.defaultValue!=null?$t(r,!!i.multiple,i.defaultValue,!0):$t(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ku]=i}catch(b){V(e,e.return,b)}}break;case 6:if(Ue(n,e),Ze(e),u&4){if(e.stateNode===null)throw Error(C(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(b){V(e,e.return,b)}}break;case 3:if(Ue(n,e),Ze(e),u&4&&t!==null&&t.memoizedState.isDehydrated)try{Uu(n.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:Ue(n,e),Ze(e);break;case 13:Ue(n,e),Ze(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Ha=Q())),u&4&&xc(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(s=pe)||d,Ue(n,e),pe=s):Ue(n,e),Ze(e),u&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(c=D=d;D!==null;){switch(f=D,h=f.child,f.tag){case 0:case 11:case 14:case 15:Lu(4,f,f.return);break;case 1:Mt(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){u=f,t=f.return;try{n=u,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(b){V(u,t,b)}}break;case 5:Mt(f,f.return);break;case 22:if(f.memoizedState!==null){bc(c);continue}}h!==null?(h.return=f,D=h):bc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{r=c.stateNode,s?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=B0("display",o))}catch(b){V(e,e.return,b)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(b){V(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ue(n,e),Ze(e),u&4&&xc(e);break;case 21:break;default:Ue(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(pf(t)){var u=t;break e}t=t.return}throw Error(C(160))}switch(u.tag){case 5:var r=u.stateNode;u.flags&32&&(zu(r,""),u.flags&=-33);var i=yc(e);jl(e,i,r);break;case 3:case 4:var o=u.stateNode.containerInfo,l=yc(e);Ml(e,l,o);break;default:throw Error(C(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xm(e,n,t){D=e,gf(e)}function gf(e,n,t){for(var u=(e.mode&1)!==0;D!==null;){var r=D,i=r.child;if(r.tag===22&&u){var o=r.memoizedState!==null||Br;if(!o){var l=r.alternate,a=l!==null&&l.memoizedState!==null||pe;l=Br;var s=pe;if(Br=o,(pe=a)&&!s)for(D=r;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?kc(r):a!==null?(a.return=o,D=a):kc(r);for(;i!==null;)D=i,gf(i),i=i.sibling;D=r,Br=l,pe=s}vc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,D=i):vc(e)}}function vc(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Yi(5,n);break;case 1:var u=n.stateNode;if(n.flags&4&&!pe)if(t===null)u.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps);u.componentDidUpdate(r,t.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&uc(n,i,u);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}uc(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Uu(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}pe||n.flags&512&&Ol(n)}catch(f){V(n,n.return,f)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function bc(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function kc(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Yi(4,n)}catch(a){V(n,t,a)}break;case 1:var u=n.stateNode;if(typeof u.componentDidMount=="function"){var r=n.return;try{u.componentDidMount()}catch(a){V(n,r,a)}}var i=n.return;try{Ol(n)}catch(a){V(n,i,a)}break;case 5:var o=n.return;try{Ol(n)}catch(a){V(n,o,a)}}}catch(a){V(n,n.return,a)}if(n===e){D=null;break}var l=n.sibling;if(l!==null){l.return=n.return,D=l;break}D=n.return}}var vm=Math.ceil,Ai=Cn.ReactCurrentDispatcher,za=Cn.ReactCurrentOwner,je=Cn.ReactCurrentBatchConfig,O=0,oe=null,J=null,se=0,De=0,jt=et(0),ee=0,er=null,xt=0,Qi=0,Ba=0,Ou=null,ke=null,Ha=0,nu=1/0,hn=null,Di=!1,zl=null,qn=null,Hr=!1,Mn=null,Fi=0,Mu=0,Bl=null,ni=-1,ti=0;function ye(){return O&6?Q():ni!==-1?ni:ni=Q()}function Wn(e){return e.mode&1?O&2&&se!==0?se&-se:tm.transition!==null?(ti===0&&(ti=X0()),ti):(e=M,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e):1}function Ke(e,n,t,u){if(50<Mu)throw Mu=0,Bl=null,Error(C(185));sr(e,t,u),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(Qi|=t),ee===4&&Rn(e,se)),Ee(e,u),t===1&&O===0&&!(n.mode&1)&&(nu=Q()+500,Gi&&nt()))}function Ee(e,n){var t=e.callbackNode;t1(e,n);var u=fi(e,e===oe?se:0);if(u===0)t!==null&&Ts(t),e.callbackNode=null,e.callbackPriority=0;else if(n=u&-u,e.callbackPriority!==n){if(t!=null&&Ts(t),n===1)e.tag===0?nm(wc.bind(null,e)):Cd(wc.bind(null,e)),J1(function(){!(O&6)&&nt()}),t=null;else{switch(ed(u)){case 1:t=pa;break;case 4:t=J0;break;case 16:t=di;break;case 536870912:t=Z0;break;default:t=di}t=Sf(t,yf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function yf(e,n){if(ni=-1,ti=0,O&6)throw Error(C(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var u=fi(e,e===oe?se:0);if(u===0)return null;if(u&30||u&e.expiredLanes||n)n=Ti(e,u);else{n=u;var r=O;O|=2;var i=vf();(oe!==e||se!==n)&&(hn=null,nu=Q()+500,ft(e,n));do try{wm();break}catch(l){xf(e,l)}while(!0);Ea(),Ai.current=i,O=r,J!==null?n=0:(oe=null,se=0,n=ee)}if(n!==0){if(n===2&&(r=pl(e),r!==0&&(u=r,n=Hl(e,r))),n===1)throw t=er,ft(e,0),Rn(e,u),Ee(e,Q()),t;if(n===6)Rn(e,u);else{if(r=e.current.alternate,!(u&30)&&!bm(r)&&(n=Ti(e,u),n===2&&(i=pl(e),i!==0&&(u=i,n=Hl(e,i))),n===1))throw t=er,ft(e,0),Rn(e,u),Ee(e,Q()),t;switch(e.finishedWork=r,e.finishedLanes=u,n){case 0:case 1:throw Error(C(345));case 2:lt(e,ke,hn);break;case 3:if(Rn(e,u),(u&130023424)===u&&(n=Ha+500-Q(),10<n)){if(fi(e,0)!==0)break;if(r=e.suspendedLanes,(r&u)!==u){ye(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=kl(lt.bind(null,e,ke,hn),n);break}lt(e,ke,hn);break;case 4:if(Rn(e,u),(u&4194240)===u)break;for(n=e.eventTimes,r=-1;0<u;){var o=31-Ve(u);i=1<<o,o=n[o],o>r&&(r=o),u&=~i}if(u=r,u=Q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*vm(u/1960))-u,10<u){e.timeoutHandle=kl(lt.bind(null,e,ke,hn),u);break}lt(e,ke,hn);break;case 5:lt(e,ke,hn);break;default:throw Error(C(329))}}}return Ee(e,Q()),e.callbackNode===t?yf.bind(null,e):null}function Hl(e,n){var t=Ou;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=Ti(e,n),e!==2&&(n=ke,ke=t,n!==null&&$l(n)),e}function $l(e){ke===null?ke=e:ke.push.apply(ke,e)}function bm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var u=0;u<t.length;u++){var r=t[u],i=r.getSnapshot;r=r.value;try{if(!Ye(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rn(e,n){for(n&=~Ba,n&=~Qi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),u=1<<t;e[t]=-1,n&=~u}}function wc(e){if(O&6)throw Error(C(327));Vt();var n=fi(e,0);if(!(n&1))return Ee(e,Q()),null;var t=Ti(e,n);if(e.tag!==0&&t===2){var u=pl(e);u!==0&&(n=u,t=Hl(e,u))}if(t===1)throw t=er,ft(e,0),Rn(e,n),Ee(e,Q()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,lt(e,ke,hn),Ee(e,Q()),null}function $a(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(nu=Q()+500,Gi&&nt())}}function vt(e){Mn!==null&&Mn.tag===0&&!(O&6)&&Vt();var n=O;O|=1;var t=je.transition,u=M;try{if(je.transition=null,M=1,e)return e()}finally{M=u,je.transition=t,O=n,!(O&6)&&nt()}}function Ua(){De=jt.current,H(jt)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Q1(t)),J!==null)for(t=J.return;t!==null;){var u=t;switch(_a(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&yi();break;case 3:Xt(),H(Se),H(he),Na();break;case 5:Pa(u);break;case 4:Xt();break;case 13:H(U);break;case 19:H(U);break;case 10:Aa(u.type._context);break;case 22:case 23:Ua()}t=t.return}if(oe=e,J=e=Gn(e.current,null),se=De=n,ee=0,er=null,Ba=Qi=xt=0,ke=Ou=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],u=t.interleaved,u!==null){t.interleaved=null;var r=u.next,i=t.pending;if(i!==null){var o=i.next;i.next=r,u.next=o}t.pending=u}st=null}return e}function xf(e,n){do{var t=J;try{if(Ea(),Zr.current=Ei,Ci){for(var u=q.memoizedState;u!==null;){var r=u.queue;r!==null&&(r.pending=null),u=u.next}Ci=!1}if(yt=0,re=X=q=null,Ru=!1,Ju=0,za.current=null,t===null||t.return===null){ee=1,er=n,J=null;break}e:{var i=e,o=t.return,l=t,a=n;if(n=se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=sc(o);if(h!==null){h.flags&=-257,cc(h,o,l,i,n),h.mode&1&&ac(i,s,n),n=h,a=s;var g=n.updateQueue;if(g===null){var b=new Set;b.add(a),n.updateQueue=b}else g.add(a);break e}else{if(!(n&1)){ac(i,s,n),qa();break e}a=Error(C(426))}}else if($&&l.mode&1){var k=sc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),cc(k,o,l,i,n),Sa(eu(a,l));break e}}i=a=eu(a,l),ee!==4&&(ee=2),Ou===null?Ou=[i]:Ou.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var y=ef(i,a,n);tc(i,y);break e;case 1:l=a;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qn===null||!qn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=nf(i,l,n);tc(i,v);break e}}i=i.return}while(i!==null)}kf(t)}catch(_){n=_,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function vf(){var e=Ai.current;return Ai.current=Ei,e===null?Ei:e}function qa(){(ee===0||ee===3||ee===2)&&(ee=4),oe===null||!(xt&268435455)&&!(Qi&268435455)||Rn(oe,se)}function Ti(e,n){var t=O;O|=2;var u=vf();(oe!==e||se!==n)&&(hn=null,ft(e,n));do try{km();break}catch(r){xf(e,r)}while(!0);if(Ea(),O=t,Ai.current=u,J!==null)throw Error(C(261));return oe=null,se=0,ee}function km(){for(;J!==null;)bf(J)}function wm(){for(;J!==null&&!Vh();)bf(J)}function bf(e){var n=_f(e.alternate,e,De);e.memoizedProps=e.pendingProps,n===null?kf(e):J=n,za.current=null}function kf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mm(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(t=hm(t,n,De),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);ee===0&&(ee=5)}function lt(e,n,t){var u=M,r=je.transition;try{je.transition=null,M=1,_m(e,n,t,u)}finally{je.transition=r,M=u}return null}function _m(e,n,t,u){do Vt();while(Mn!==null);if(O&6)throw Error(C(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(u1(e,i),e===oe&&(J=oe=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hr||(Hr=!0,Sf(di,function(){return Vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=M;M=1;var l=O;O|=4,za.current=null,ym(e,t),mf(t,e),U1(vl),pi=!!xl,vl=xl=null,e.current=t,xm(t),Kh(),O=l,M=o,je.transition=i}else e.current=t;if(Hr&&(Hr=!1,Mn=e,Fi=r),i=e.pendingLanes,i===0&&(qn=null),Jh(t.stateNode),Ee(e,Q()),n!==null)for(u=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],u(r.value,{componentStack:r.stack,digest:r.digest});if(Di)throw Di=!1,e=zl,zl=null,e;return Fi&1&&e.tag!==0&&Vt(),i=e.pendingLanes,i&1?e===Bl?Mu++:(Mu=0,Bl=e):Mu=0,nt(),null}function Vt(){if(Mn!==null){var e=ed(Fi),n=je.transition,t=M;try{if(je.transition=null,M=16>e?16:e,Mn===null)var u=!1;else{if(e=Mn,Mn=null,Fi=0,O&6)throw Error(C(331));var r=O;for(O|=4,D=e.current;D!==null;){var i=D,o=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var s=l[a];for(D=s;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Lu(8,d,i)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var f=d.sibling,h=d.return;if(ff(d),d===s){D=null;break}if(f!==null){f.return=h,D=f;break}D=h}}}var g=i.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}D=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,D=o;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lu(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,D=y;break e}D=i.return}}var p=e.current;for(D=p;D!==null;){o=D;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,D=m;else e:for(o=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yi(9,l)}}catch(_){V(l,l.return,_)}if(l===o){D=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,D=v;break e}D=l.return}}if(O=r,nt(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Hi,e)}catch{}u=!0}return u}finally{M=t,je.transition=n}}return!1}function _c(e,n,t){n=eu(t,n),n=ef(e,n,1),e=Un(e,n,1),n=ye(),e!==null&&(sr(e,1,n),Ee(e,n))}function V(e,n,t){if(e.tag===3)_c(e,e,t);else for(;n!==null;){if(n.tag===3){_c(n,e,t);break}else if(n.tag===1){var u=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(qn===null||!qn.has(u))){e=eu(t,e),e=nf(n,e,1),n=Un(n,e,1),e=ye(),n!==null&&(sr(n,1,e),Ee(n,e));break}}n=n.return}}function Sm(e,n,t){var u=e.pingCache;u!==null&&u.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(se&t)===t&&(ee===4||ee===3&&(se&130023424)===se&&500>Q()-Ha?ft(e,0):Ba|=t),Ee(e,n)}function wf(e,n){n===0&&(e.mode&1?(n=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):n=1);var t=ye();e=_n(e,n),e!==null&&(sr(e,n,t),Ee(e,t))}function Cm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),wf(e,t)}function Em(e,n){var t=0;switch(e.tag){case 13:var u=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(C(314))}u!==null&&u.delete(n),wf(e,t)}var _f;_f=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,pm(e,n,t);we=!!(e.flags&131072)}else we=!1,$&&n.flags&1048576&&Ed(n,bi,n.index);switch(n.lanes=0,n.tag){case 2:var u=n.type;ei(e,n),e=n.pendingProps;var r=Qt(n,he.current);Gt(n,t),r=Ra(null,n,u,e,r,t);var i=La();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(u)?(i=!0,xi(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fa(n),r.updater=Ki,n.stateNode=r,r._reactInternals=n,Dl(n,u,e,t),n=Pl(null,n,u,!0,i,t)):(n.tag=0,$&&i&&wa(n),ge(null,n,r,t),n=n.child),n;case 16:u=n.elementType;e:{switch(ei(e,n),e=n.pendingProps,r=u._init,u=r(u._payload),n.type=u,r=n.tag=Dm(u),e=qe(u,e),r){case 0:n=Tl(null,n,u,e,t);break e;case 1:n=pc(null,n,u,e,t);break e;case 11:n=dc(null,n,u,e,t);break e;case 14:n=fc(null,n,u,qe(u.type,e),t);break e}throw Error(C(306,u,""))}return n;case 0:return u=n.type,r=n.pendingProps,r=n.elementType===u?r:qe(u,r),Tl(e,n,u,r,t);case 1:return u=n.type,r=n.pendingProps,r=n.elementType===u?r:qe(u,r),pc(e,n,u,r,t);case 3:e:{if(of(n),e===null)throw Error(C(387));u=n.pendingProps,i=n.memoizedState,r=i.element,Nd(e,n),_i(n,u,null,t);var o=n.memoizedState;if(u=o.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=eu(Error(C(423)),n),n=hc(e,n,u,t,r);break e}else if(u!==r){r=eu(Error(C(424)),n),n=hc(e,n,u,t,r);break e}else for(Fe=$n(n.stateNode.containerInfo.firstChild),Te=n,$=!0,Ge=null,t=Td(n,null,u,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jt(),u===r){n=Sn(e,n,t);break e}ge(e,n,u,t)}n=n.child}return n;case 5:return Id(n),e===null&&Cl(n),u=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,bl(u,r)?o=null:i!==null&&bl(u,i)&&(n.flags|=32),rf(e,n),ge(e,n,o,t),n.child;case 6:return e===null&&Cl(n),null;case 13:return lf(e,n,t);case 4:return Ta(n,n.stateNode.containerInfo),u=n.pendingProps,e===null?n.child=Zt(n,null,u,t):ge(e,n,u,t),n.child;case 11:return u=n.type,r=n.pendingProps,r=n.elementType===u?r:qe(u,r),dc(e,n,u,r,t);case 7:return ge(e,n,n.pendingProps,t),n.child;case 8:return ge(e,n,n.pendingProps.children,t),n.child;case 12:return ge(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(u=n.type._context,r=n.pendingProps,i=n.memoizedProps,o=r.value,j(ki,u._currentValue),u._currentValue=o,i!==null)if(Ye(i.value,o)){if(i.children===r.children&&!Se.current){n=Sn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===u){if(i.tag===1){a=vn(-1,t&-t),a.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?a.next=a:(a.next=d.next,d.next=a),s.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),El(i.return,t,n),l.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),El(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ge(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,u=n.pendingProps.children,Gt(n,t),r=ze(r),u=u(r),n.flags|=1,ge(e,n,u,t),n.child;case 14:return u=n.type,r=qe(u,n.pendingProps),r=qe(u.type,r),fc(e,n,u,r,t);case 15:return tf(e,n,n.type,n.pendingProps,t);case 17:return u=n.type,r=n.pendingProps,r=n.elementType===u?r:qe(u,r),ei(e,n),n.tag=1,Ce(u)?(e=!0,xi(n)):e=!1,Gt(n,t),Xd(n,u,r),Dl(n,u,r,t),Pl(null,n,u,!0,e,t);case 19:return af(e,n,t);case 22:return uf(e,n,t)}throw Error(C(156,n.tag))};function Sf(e,n){return Q0(e,n)}function Am(e,n,t,u){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,u){return new Am(e,n,t,u)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dm(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function Gn(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ui(e,n,t,u,r,i){var o=2;if(u=e,typeof e=="function")Wa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return pt(t.children,r,i,n);case sa:o=8,r|=8;break;case Zo:return e=Me(12,t,n,r|2),e.elementType=Zo,e.lanes=i,e;case Xo:return e=Me(13,t,n,r),e.elementType=Xo,e.lanes=i,e;case el:return e=Me(19,t,n,r),e.elementType=el,e.lanes=i,e;case I0:return Ji(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P0:o=10;break e;case N0:o=9;break e;case ca:o=11;break e;case da:o=14;break e;case Tn:o=16,u=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Me(o,t,n,r),n.elementType=e,n.type=u,n.lanes=i,n}function pt(e,n,t,u){return e=Me(7,e,u,n),e.lanes=t,e}function Ji(e,n,t,u){return e=Me(22,e,u,n),e.elementType=I0,e.lanes=t,e.stateNode={isHidden:!1},e}function zo(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function Bo(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Fm(e,n,t,u,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=u,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ga(e,n,t,u,r,i,o,l,a){return e=new Fm(e,n,t,l,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Me(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:u,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(i),e}function Tm(e,n,t){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:u==null?null:""+u,children:e,containerInfo:n,implementation:t}}function Cf(e){if(!e)return Yn;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Ce(t))return Sd(e,t,n)}return n}function Ef(e,n,t,u,r,i,o,l,a){return e=Ga(t,u,!0,e,r,i,o,l,a),e.context=Cf(null),t=e.current,u=ye(),r=Wn(t),i=vn(u,r),i.callback=n??null,Un(t,i,r),e.current.lanes=r,sr(e,r,u),Ee(e,u),e}function Zi(e,n,t,u){var r=n.current,i=ye(),o=Wn(r);return t=Cf(t),n.context===null?n.context=t:n.pendingContext=t,n=vn(i,o),n.payload={element:e},u=u===void 0?null:u,u!==null&&(n.callback=u),e=Un(r,n,o),e!==null&&(Ke(e,r,o,i),Jr(e,r,o)),o}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Va(e,n){Sc(e,n),(e=e.alternate)&&Sc(e,n)}function Pm(){return null}var Af=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ka(e){this._internalRoot=e}Xi.prototype.render=Ka.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Zi(e,n,null,null)};Xi.prototype.unmount=Ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vt(function(){Zi(null,e,null,null)}),n[wn]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ud();e={blockedOn:null,target:e,priority:n};for(var t=0;t<In.length&&n!==0&&n<In[t].priority;t++);In.splice(t,0,e),t===0&&id(e)}};function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cc(){}function Nm(e,n,t,u,r){if(r){if(typeof u=="function"){var i=u;u=function(){var s=Pi(o);i.call(s)}}var o=Ef(n,u,e,0,null,!1,!1,"",Cc);return e._reactRootContainer=o,e[wn]=o.current,Gu(e.nodeType===8?e.parentNode:e),vt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof u=="function"){var l=u;u=function(){var s=Pi(a);l.call(s)}}var a=Ga(e,0,!1,null,null,!1,!1,"",Cc);return e._reactRootContainer=a,e[wn]=a.current,Gu(e.nodeType===8?e.parentNode:e),vt(function(){Zi(n,a,t,u)}),a}function no(e,n,t,u,r){var i=t._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var l=r;r=function(){var a=Pi(o);l.call(a)}}Zi(n,o,e,r)}else o=Nm(t,n,e,r,u);return Pi(o)}nd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Au(n.pendingLanes);t!==0&&(ha(n,t|1),Ee(n,Q()),!(O&6)&&(nu=Q()+500,nt()))}break;case 13:vt(function(){var u=_n(e,1);if(u!==null){var r=ye();Ke(u,e,1,r)}}),Va(e,1)}};ma=function(e){if(e.tag===13){var n=_n(e,134217728);if(n!==null){var t=ye();Ke(n,e,134217728,t)}Va(e,134217728)}};td=function(e){if(e.tag===13){var n=Wn(e),t=_n(e,n);if(t!==null){var u=ye();Ke(t,e,n,u)}Va(e,n)}};ud=function(){return M};rd=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};cl=function(e,n,t){switch(n){case"input":if(ul(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var u=t[n];if(u!==e&&u.form===e.form){var r=Wi(u);if(!r)throw Error(C(90));L0(u),ul(u,r)}}}break;case"textarea":M0(e,t);break;case"select":n=t.value,n!=null&&$t(e,!!t.multiple,n,!1)}};q0=$a;W0=vt;var Im={usingClientEntryPoint:!1,Events:[dr,Nt,Wi,$0,U0,$a]},_u={findFiberByHostInstance:at,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:_u.bundleType,version:_u.version,rendererPackageName:_u.rendererPackageName,rendererConfig:_u.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=K0(e),e===null?null:e.stateNode},findFiberByHostInstance:_u.findFiberByHostInstance||Pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{Hi=$r.inject(Rm),un=$r}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(n))throw Error(C(200));return Tm(e,n,null,t)};Ie.createRoot=function(e,n){if(!Ya(e))throw Error(C(299));var t=!1,u="",r=Af;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ga(e,1,!1,null,null,t,!1,u,r),e[wn]=n.current,Gu(e.nodeType===8?e.parentNode:e),new Ka(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=K0(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return vt(e)};Ie.hydrate=function(e,n,t){if(!eo(n))throw Error(C(200));return no(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!Ya(e))throw Error(C(405));var u=t!=null&&t.hydratedSources||null,r=!1,i="",o=Af;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Ef(n,null,e,1,t??null,r,!1,i,o),e[wn]=n.current,Gu(e),u)for(e=0;e<u.length;e++)t=u[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Xi(n)};Ie.render=function(e,n,t){if(!eo(n))throw Error(C(200));return no(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!eo(e))throw Error(C(40));return e._reactRootContainer?(vt(function(){no(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Ie.unstable_batchedUpdates=$a;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,u){if(!eo(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return no(e,n,t,!1,u)};Ie.version="18.3.1-next-f1338f8080-20240426";function Df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Df)}catch(e){console.error(e)}}Df(),A0.exports=Ie;var Lm=A0.exports,Ff,Ec=Lm;Ff=Ec.createRoot,Ec.hydrateRoot;var Qa={};Object.defineProperty(Qa,"__esModule",{value:!0});Qa.parse=$m;Qa.serialize=Um;const Om=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Mm=/^[\u0021-\u003A\u003C-\u007E]*$/,jm=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,zm=/^[\u0020-\u003A\u003D-\u007E]*$/,Bm=Object.prototype.toString,Hm=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function $m(e,n){const t=new Hm,u=e.length;if(u<2)return t;const r=(n==null?void 0:n.decode)||qm;let i=0;do{const o=e.indexOf("=",i);if(o===-1)break;const l=e.indexOf(";",i),a=l===-1?u:l;if(o>a){i=e.lastIndexOf(";",o-1)+1;continue}const s=Ac(e,i,o),d=Dc(e,o,s),c=e.slice(s,d);if(t[c]===void 0){let f=Ac(e,o+1,a),h=Dc(e,a,f);const g=r(e.slice(f,h));t[c]=g}i=a+1}while(i<u);return t}function Ac(e,n,t){do{const u=e.charCodeAt(n);if(u!==32&&u!==9)return n}while(++n<t);return t}function Dc(e,n,t){for(;n>t;){const u=e.charCodeAt(--n);if(u!==32&&u!==9)return n+1}return t}function Um(e,n,t){const u=(t==null?void 0:t.encode)||encodeURIComponent;if(!Om.test(e))throw new TypeError(`argument name is invalid: ${e}`);const r=u(n);if(!Mm.test(r))throw new TypeError(`argument val is invalid: ${n}`);let i=e+"="+r;if(!t)return i;if(t.maxAge!==void 0){if(!Number.isInteger(t.maxAge))throw new TypeError(`option maxAge is invalid: ${t.maxAge}`);i+="; Max-Age="+t.maxAge}if(t.domain){if(!jm.test(t.domain))throw new TypeError(`option domain is invalid: ${t.domain}`);i+="; Domain="+t.domain}if(t.path){if(!zm.test(t.path))throw new TypeError(`option path is invalid: ${t.path}`);i+="; Path="+t.path}if(t.expires){if(!Wm(t.expires)||!Number.isFinite(t.expires.valueOf()))throw new TypeError(`option expires is invalid: ${t.expires}`);i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.partitioned&&(i+="; Partitioned"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${t.priority}`)}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${t.sameSite}`)}return i}function qm(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function Wm(e){return Bm.call(e)==="[object Date]"}/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fc="popstate";function Gm(e={}){function n(u,r){let{pathname:i,search:o,hash:l}=u.location;return Ul("",{pathname:i,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(u,r){return typeof r=="string"?r:nr(r)}return Km(n,t,null,e)}function W(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ln(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Vm(){return Math.random().toString(36).substring(2,10)}function Tc(e,n){return{usr:e.state,key:e.key,idx:n}}function Ul(e,n,t=null,u){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?su(n):n,state:t,key:n&&n.key||u||Vm()}}function nr({pathname:e="/",search:n="",hash:t=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function su(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substring(t),e=e.substring(0,t));let u=e.indexOf("?");u>=0&&(n.search=e.substring(u),e=e.substring(0,u)),e&&(n.pathname=e)}return n}function Km(e,n,t,u={}){let{window:r=document.defaultView,v5Compat:i=!1}=u,o=r.history,l="POP",a=null,s=d();s==null&&(s=0,o.replaceState({...o.state,idx:s},""));function d(){return(o.state||{idx:null}).idx}function c(){l="POP";let k=d(),y=k==null?null:k-s;s=k,a&&a({action:l,location:b.location,delta:y})}function f(k,y){l="PUSH";let p=Ul(b.location,k,y);s=d()+1;let m=Tc(p,s),v=b.createHref(p);try{o.pushState(m,"",v)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;r.location.assign(v)}i&&a&&a({action:l,location:b.location,delta:1})}function h(k,y){l="REPLACE";let p=Ul(b.location,k,y);s=d();let m=Tc(p,s),v=b.createHref(p);o.replaceState(m,"",v),i&&a&&a({action:l,location:b.location,delta:0})}function g(k){let y=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof k=="string"?k:nr(k);return p=p.replace(/ $/,"%20"),W(y,`No window.location.(origin|href) available to create URL for href: ${p}`),new URL(p,y)}let b={get action(){return l},get location(){return e(r,o)},listen(k){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(Fc,c),a=k,()=>{r.removeEventListener(Fc,c),a=null}},createHref(k){return n(r,k)},createURL:g,encodeLocation(k){let y=g(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:h,go(k){return o.go(k)}};return b}function Tf(e,n,t="/"){return Ym(e,n,t,!1)}function Ym(e,n,t,u){let r=typeof n=="string"?su(n):n,i=Qn(r.pathname||"/",t);if(i==null)return null;let o=Pf(e);Qm(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let s=l2(i);l=i2(o[a],s,u)}return l}function Pf(e,n=[],t=[],u=""){let r=(i,o,l)=>{let a={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(W(a.relativePath.startsWith(u),`Absolute route path "${a.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(u.length));let s=bn([u,a.relativePath]),d=t.concat(a);i.children&&i.children.length>0&&(W(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),Pf(i.children,n,d,s)),!(i.path==null&&!i.index)&&n.push({path:s,score:u2(s,i.index),routesMeta:d})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,o);else for(let a of Nf(i.path))r(i,o,a)}),n}function Nf(e){let n=e.split("/");if(n.length===0)return[];let[t,...u]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(u.length===0)return r?[i,""]:[i];let o=Nf(u.join("/")),l=[];return l.push(...o.map(a=>a===""?i:[i,a].join("/"))),r&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function Qm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:r2(n.routesMeta.map(u=>u.childrenIndex),t.routesMeta.map(u=>u.childrenIndex)))}var Jm=/^:[\w-]+$/,Zm=3,Xm=2,e2=1,n2=10,t2=-2,Pc=e=>e==="*";function u2(e,n){let t=e.split("/"),u=t.length;return t.some(Pc)&&(u+=t2),n&&(u+=Xm),t.filter(r=>!Pc(r)).reduce((r,i)=>r+(Jm.test(i)?Zm:i===""?e2:n2),u)}function r2(e,n){return e.length===n.length&&e.slice(0,-1).every((u,r)=>u===n[r])?e[e.length-1]-n[n.length-1]:0}function i2(e,n,t=!1){let{routesMeta:u}=e,r={},i="/",o=[];for(let l=0;l<u.length;++l){let a=u[l],s=l===u.length-1,d=i==="/"?n:n.slice(i.length)||"/",c=Ni({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},d),f=a.route;if(!c&&s&&t&&!u[u.length-1].route.index&&(c=Ni({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(r,c.params),o.push({params:r,pathname:bn([i,c.pathname]),pathnameBase:d2(bn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=bn([i,c.pathnameBase]))}return o}function Ni(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,u]=o2(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:u.reduce((s,{paramName:d,isOptional:c},f)=>{if(d==="*"){let g=l[f]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const h=l[f];return c&&!h?s[d]=void 0:s[d]=(h||"").replace(/%2F/g,"/"),s},{}),pathname:i,pathnameBase:o,pattern:e}}function o2(e,n=!1,t=!0){ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let u=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(u.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(u.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),u]}function l2(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ln(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Qn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,u=e.charAt(t);return u&&u!=="/"?null:e.slice(t)||"/"}function a2(e,n="/"){let{pathname:t,search:u="",hash:r=""}=typeof e=="string"?su(e):e;return{pathname:t?t.startsWith("/")?t:s2(t,n):n,search:f2(u),hash:p2(r)}}function s2(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Ho(e,n,t,u){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function c2(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function If(e){let n=c2(e);return n.map((t,u)=>u===n.length-1?t.pathname:t.pathnameBase)}function Rf(e,n,t,u=!1){let r;typeof e=="string"?r=su(e):(r={...e},W(!r.pathname||!r.pathname.includes("?"),Ho("?","pathname","search",r)),W(!r.pathname||!r.pathname.includes("#"),Ho("#","pathname","hash",r)),W(!r.search||!r.search.includes("#"),Ho("#","search","hash",r)));let i=e===""||r.pathname==="",o=i?"/":r.pathname,l;if(o==null)l=t;else{let c=n.length-1;if(!u&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;r.pathname=f.join("/")}l=c>=0?n[c]:"/"}let a=a2(r,l),s=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(s||d)&&(a.pathname+="/"),a}var bn=e=>e.join("/").replace(/\/\/+/g,"/"),d2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),f2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,p2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function h2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Lf=["POST","PUT","PATCH","DELETE"];new Set(Lf);var m2=["GET",...Lf];new Set(m2);var cu=w.createContext(null);cu.displayName="DataRouter";var to=w.createContext(null);to.displayName="DataRouterState";var Of=w.createContext({isTransitioning:!1});Of.displayName="ViewTransition";var g2=w.createContext(new Map);g2.displayName="Fetchers";var y2=w.createContext(null);y2.displayName="Await";var sn=w.createContext(null);sn.displayName="Navigation";var pr=w.createContext(null);pr.displayName="Location";var cn=w.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var Ja=w.createContext(null);Ja.displayName="RouteError";function x2(e,{relative:n}={}){W(hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:u}=w.useContext(sn),{hash:r,pathname:i,search:o}=mr(e,{relative:n}),l=i;return t!=="/"&&(l=i==="/"?t:bn([t,i])),u.createHref({pathname:l,search:o,hash:r})}function hr(){return w.useContext(pr)!=null}function En(){return W(hr(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(pr).location}var Mf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jf(e){w.useContext(sn).static||w.useLayoutEffect(e)}function zf(){let{isDataRoute:e}=w.useContext(cn);return e?N2():v2()}function v2(){W(hr(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(cu),{basename:n,navigator:t}=w.useContext(sn),{matches:u}=w.useContext(cn),{pathname:r}=En(),i=JSON.stringify(If(u)),o=w.useRef(!1);return jf(()=>{o.current=!0}),w.useCallback((a,s={})=>{if(ln(o.current,Mf),!o.current)return;if(typeof a=="number"){t.go(a);return}let d=Rf(a,JSON.parse(i),r,s.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:bn([n,d.pathname])),(s.replace?t.replace:t.push)(d,s.state,s)},[n,t,i,r,e])}w.createContext(null);function b2(){let{matches:e}=w.useContext(cn),n=e[e.length-1];return n?n.params:{}}function mr(e,{relative:n}={}){let{matches:t}=w.useContext(cn),{pathname:u}=En(),r=JSON.stringify(If(t));return w.useMemo(()=>Rf(e,JSON.parse(r),u,n==="path"),[e,r,u,n])}function k2(e,n){return Bf(e,n)}function Bf(e,n,t,u){var p;W(hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r,static:i}=w.useContext(sn),{matches:o}=w.useContext(cn),l=o[o.length-1],a=l?l.params:{},s=l?l.pathname:"/",d=l?l.pathnameBase:"/",c=l&&l.route;{let m=c&&c.path||"";Hf(s,!c||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=En(),h;if(n){let m=typeof n=="string"?su(n):n;W(d==="/"||((p=m.pathname)==null?void 0:p.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=f;let g=h.pathname||"/",b=g;if(d!=="/"){let m=d.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=!i&&t&&t.matches&&t.matches.length>0?t.matches:Tf(e,{pathname:b});ln(c||k!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ln(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=E2(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:bn([d,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?d:bn([d,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,t,u);return n&&y?w.createElement(pr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},y):y}function w2(){let e=P2(),n=h2(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,u="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:u},i={padding:"2px 4px",backgroundColor:u},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:i},"ErrorBoundary")," or"," ",w.createElement("code",{style:i},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:r},t):null,o)}var _2=w.createElement(w2,null),S2=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(cn.Provider,{value:this.props.routeContext},w.createElement(Ja.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function C2({routeContext:e,match:n,children:t}){let u=w.useContext(cu);return u&&u.static&&u.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(cn.Provider,{value:e},t)}function E2(e,n=[],t=null,u=null){if(e==null){if(!t)return null;if(t.errors)e=t.matches;else if(n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let r=e,i=t==null?void 0:t.errors;if(i!=null){let a=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id])!==void 0);W(a>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),r=r.slice(0,Math.min(r.length,a+1))}let o=!1,l=-1;if(t)for(let a=0;a<r.length;a++){let s=r[a];if((s.route.HydrateFallback||s.route.hydrateFallbackElement)&&(l=a),s.route.id){let{loaderData:d,errors:c}=t,f=s.route.loader&&!d.hasOwnProperty(s.route.id)&&(!c||c[s.route.id]===void 0);if(s.route.lazy||f){o=!0,l>=0?r=r.slice(0,l+1):r=[r[0]];break}}}return r.reduceRight((a,s,d)=>{let c,f=!1,h=null,g=null;t&&(c=i&&s.route.id?i[s.route.id]:void 0,h=s.route.errorElement||_2,o&&(l<0&&d===0?(Hf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,g=null):l===d&&(f=!0,g=s.route.hydrateFallbackElement||null)));let b=n.concat(r.slice(0,d+1)),k=()=>{let y;return c?y=h:f?y=g:s.route.Component?y=w.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=a,w.createElement(C2,{match:s,routeContext:{outlet:a,matches:b,isDataRoute:t!=null},children:y})};return t&&(s.route.ErrorBoundary||s.route.errorElement||d===0)?w.createElement(S2,{location:t.location,revalidation:t.revalidation,component:h,error:c,children:k(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):k()},null)}function Za(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A2(e){let n=w.useContext(cu);return W(n,Za(e)),n}function D2(e){let n=w.useContext(to);return W(n,Za(e)),n}function F2(e){let n=w.useContext(cn);return W(n,Za(e)),n}function Xa(e){let n=F2(e),t=n.matches[n.matches.length-1];return W(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function T2(){return Xa("useRouteId")}function P2(){var u;let e=w.useContext(Ja),n=D2("useRouteError"),t=Xa("useRouteError");return e!==void 0?e:(u=n.errors)==null?void 0:u[t]}function N2(){let{router:e}=A2("useNavigate"),n=Xa("useNavigate"),t=w.useRef(!1);return jf(()=>{t.current=!0}),w.useCallback(async(r,i={})=>{ln(t.current,Mf),t.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:n,...i}))},[e,n])}var Nc={};function Hf(e,n,t){!n&&!Nc[e]&&(Nc[e]=!0,ln(!1,t))}w.memo(I2);function I2({routes:e,future:n,state:t}){return Bf(e,void 0,t,n)}function Fn(e){W(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function R2({basename:e="/",children:n=null,location:t,navigationType:u="POP",navigator:r,static:i=!1}){W(!hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:o,navigator:r,static:i,future:{}}),[o,r,i]);typeof t=="string"&&(t=su(t));let{pathname:a="/",search:s="",hash:d="",state:c=null,key:f="default"}=t,h=w.useMemo(()=>{let g=Qn(a,o);return g==null?null:{location:{pathname:g,search:s,hash:d,state:c,key:f},navigationType:u}},[o,a,s,d,c,f,u]);return ln(h!=null,`<Router basename="${o}"> is not able to match the URL "${a}${s}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement(sn.Provider,{value:l},w.createElement(pr.Provider,{children:n,value:h}))}function L2({children:e,location:n}){return k2(ql(e),n)}function ql(e,n=[]){let t=[];return w.Children.forEach(e,(u,r)=>{if(!w.isValidElement(u))return;let i=[...n,r];if(u.type===w.Fragment){t.push.apply(t,ql(u.props.children,i));return}W(u.type===Fn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),W(!u.props.index||!u.props.children,"An index route cannot have child routes.");let o={id:u.props.id||i.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(o.children=ql(u.props.children,i)),t.push(o)}),t}var ri="get",ii="application/x-www-form-urlencoded";function uo(e){return e!=null&&typeof e.tagName=="string"}function O2(e){return uo(e)&&e.tagName.toLowerCase()==="button"}function M2(e){return uo(e)&&e.tagName.toLowerCase()==="form"}function j2(e){return uo(e)&&e.tagName.toLowerCase()==="input"}function z2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function B2(e,n){return e.button===0&&(!n||n==="_self")&&!z2(e)}var Ur=null;function H2(){if(Ur===null)try{new FormData(document.createElement("form"),0),Ur=!1}catch{Ur=!0}return Ur}var $2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $o(e){return e!=null&&!$2.has(e)?(ln(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`),null):e}function U2(e,n){let t,u,r,i,o;if(M2(e)){let l=e.getAttribute("action");u=l?Qn(l,n):null,t=e.getAttribute("method")||ri,r=$o(e.getAttribute("enctype"))||ii,i=new FormData(e)}else if(O2(e)||j2(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let a=e.getAttribute("formaction")||l.getAttribute("action");if(u=a?Qn(a,n):null,t=e.getAttribute("formmethod")||l.getAttribute("method")||ri,r=$o(e.getAttribute("formenctype"))||$o(l.getAttribute("enctype"))||ii,i=new FormData(l,e),!H2()){let{name:s,type:d,value:c}=e;if(d==="image"){let f=s?`${s}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else s&&i.append(s,c)}}else{if(uo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ri,u=null,r=ii,o=e}return i&&r==="text/plain"&&(o=i,i=void 0),{action:u,method:t.toLowerCase(),encType:r,formData:i,body:o}}function es(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function q2(e,n){if(e.id in n)return n[e.id];try{let t=await import(e.module);return n[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function W2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function G2(e,n,t){let u=await Promise.all(e.map(async r=>{let i=n.routes[r.route.id];if(i){let o=await q2(i,t);return o.links?o.links():[]}return[]}));return Q2(u.flat(1).filter(W2).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Ic(e,n,t,u,r,i){let o=(a,s)=>t[s]?a.route.id!==t[s].route.id:!0,l=(a,s)=>{var d;return t[s].pathname!==a.pathname||((d=t[s].route.path)==null?void 0:d.endsWith("*"))&&t[s].params["*"]!==a.params["*"]};return i==="assets"?n.filter((a,s)=>o(a,s)||l(a,s)):i==="data"?n.filter((a,s)=>{var c;let d=u.routes[a.route.id];if(!d||!d.hasLoader)return!1;if(o(a,s)||l(a,s))return!0;if(a.route.shouldRevalidate){let f=a.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((c=t[0])==null?void 0:c.params)||{},nextUrl:new URL(e,window.origin),nextParams:a.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function V2(e,n){return K2(e.map(t=>{let u=n.routes[t.route.id];if(!u)return[];let r=[u.module];return u.imports&&(r=r.concat(u.imports)),r}).flat(1))}function K2(e){return[...new Set(e)]}function Y2(e){let n={},t=Object.keys(e).sort();for(let u of t)n[u]=e[u];return n}function Q2(e,n){let t=new Set;return new Set(n),e.reduce((u,r)=>{let i=JSON.stringify(Y2(r));return t.has(i)||(t.add(i),u.push({key:i,link:r})),u},[])}function J2(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Z2(){let e=w.useContext(cu);return es(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function X2(){let e=w.useContext(to);return es(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ns=w.createContext(void 0);ns.displayName="FrameworkContext";function $f(){let e=w.useContext(ns);return es(e,"You must render this element inside a <HydratedRouter> element"),e}function eg(e,n){let t=w.useContext(ns),[u,r]=w.useState(!1),[i,o]=w.useState(!1),{onFocus:l,onBlur:a,onMouseEnter:s,onMouseLeave:d,onTouchStart:c}=n,f=w.useRef(null);w.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let b=y=>{y.forEach(p=>{o(p.isIntersecting)})},k=new IntersectionObserver(b,{threshold:.5});return f.current&&k.observe(f.current),()=>{k.disconnect()}}},[e]),w.useEffect(()=>{if(u){let b=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(b)}}},[u]);let h=()=>{r(!0)},g=()=>{r(!1),o(!1)};return t?e!=="intent"?[i,f,{}]:[i,f,{onFocus:Su(l,h),onBlur:Su(a,g),onMouseEnter:Su(s,h),onMouseLeave:Su(d,g),onTouchStart:Su(c,h)}]:[!1,f,{}]}function Su(e,n){return t=>{e&&e(t),t.defaultPrevented||n(t)}}function ng({page:e,...n}){let{router:t}=Z2(),u=w.useMemo(()=>Tf(t.routes,e,t.basename),[t.routes,e,t.basename]);return u?w.createElement(ug,{page:e,matches:u,...n}):null}function tg(e){let{manifest:n,routeModules:t}=$f(),[u,r]=w.useState([]);return w.useEffect(()=>{let i=!1;return G2(e,n,t).then(o=>{i||r(o)}),()=>{i=!0}},[e,n,t]),u}function ug({page:e,matches:n,...t}){let u=En(),{manifest:r,routeModules:i}=$f(),{loaderData:o,matches:l}=X2(),a=w.useMemo(()=>Ic(e,n,l,r,u,"data"),[e,n,l,r,u]),s=w.useMemo(()=>Ic(e,n,l,r,u,"assets"),[e,n,l,r,u]),d=w.useMemo(()=>{if(e===u.pathname+u.search+u.hash)return[];let h=new Set,g=!1;if(n.forEach(k=>{var p;let y=r.routes[k.route.id];!y||!y.hasLoader||(!a.some(m=>m.route.id===k.route.id)&&k.route.id in o&&((p=i[k.route.id])!=null&&p.shouldRevalidate)||y.hasClientLoader?g=!0:h.add(k.route.id))}),h.size===0)return[];let b=J2(e);return g&&h.size>0&&b.searchParams.set("_routes",n.filter(k=>h.has(k.route.id)).map(k=>k.route.id).join(",")),[b.pathname+b.search]},[o,u,r,a,n,e,i]),c=w.useMemo(()=>V2(s,r),[s,r]),f=tg(s);return w.createElement(w.Fragment,null,d.map(h=>w.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...t})),c.map(h=>w.createElement("link",{key:h,rel:"modulepreload",href:h,...t})),f.map(({key:h,link:g})=>w.createElement("link",{key:h,...g})))}function rg(...e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}var Uf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uf&&(window.__reactRouterVersion="7.1.5")}catch{}function ig({basename:e,children:n,window:t}){let u=w.useRef();u.current==null&&(u.current=Gm({window:t,v5Compat:!0}));let r=u.current,[i,o]=w.useState({action:r.action,location:r.location}),l=w.useCallback(a=>{w.startTransition(()=>o(a))},[o]);return w.useLayoutEffect(()=>r.listen(l),[r,l]),w.createElement(R2,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:r})}var qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,an=w.forwardRef(function({onClick:n,discover:t="render",prefetch:u="none",relative:r,reloadDocument:i,replace:o,state:l,target:a,to:s,preventScrollReset:d,viewTransition:c,...f},h){let{basename:g}=w.useContext(sn),b=typeof s=="string"&&qf.test(s),k,y=!1;if(typeof s=="string"&&b&&(k=s,Uf))try{let N=new URL(window.location.href),P=s.startsWith("//")?new URL(N.protocol+s):new URL(s),ne=Qn(P.pathname,g);P.origin===N.origin&&ne!=null?s=ne+P.search+P.hash:y=!0}catch{ln(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=x2(s,{relative:r}),[m,v,_]=eg(u,f),S=sg(s,{replace:o,state:l,target:a,preventScrollReset:d,relative:r,viewTransition:c});function E(N){n&&n(N),N.defaultPrevented||S(N)}let A=w.createElement("a",{...f,..._,href:k||p,onClick:y||i?n:E,ref:rg(h,v),target:a,"data-discover":!b&&t==="render"?"true":void 0});return m&&!b?w.createElement(w.Fragment,null,A,w.createElement(ng,{page:p})):A});an.displayName="Link";var og=w.forwardRef(function({"aria-current":n="page",caseSensitive:t=!1,className:u="",end:r=!1,style:i,to:o,viewTransition:l,children:a,...s},d){let c=mr(o,{relative:s.relative}),f=En(),h=w.useContext(to),{navigator:g,basename:b}=w.useContext(sn),k=h!=null&&hg(c)&&l===!0,y=g.encodeLocation?g.encodeLocation(c).pathname:c.pathname,p=f.pathname,m=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;t||(p=p.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase()),m&&b&&(m=Qn(m,b)||m);const v=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let _=p===y||!r&&p.startsWith(y)&&p.charAt(v)==="/",S=m!=null&&(m===y||!r&&m.startsWith(y)&&m.charAt(y.length)==="/"),E={isActive:_,isPending:S,isTransitioning:k},A=_?n:void 0,N;typeof u=="function"?N=u(E):N=[u,_?"active":null,S?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let P=typeof i=="function"?i(E):i;return w.createElement(an,{...s,"aria-current":A,className:N,ref:d,style:P,to:o,viewTransition:l},typeof a=="function"?a(E):a)});og.displayName="NavLink";var lg=w.forwardRef(({discover:e="render",fetcherKey:n,navigate:t,reloadDocument:u,replace:r,state:i,method:o=ri,action:l,onSubmit:a,relative:s,preventScrollReset:d,viewTransition:c,...f},h)=>{let g=fg(),b=pg(l,{relative:s}),k=o.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&qf.test(l),p=m=>{if(a&&a(m),m.defaultPrevented)return;m.preventDefault();let v=m.nativeEvent.submitter,_=(v==null?void 0:v.getAttribute("formmethod"))||o;g(v||m.currentTarget,{fetcherKey:n,method:_,navigate:t,replace:r,state:i,relative:s,preventScrollReset:d,viewTransition:c})};return w.createElement("form",{ref:h,method:k,action:b,onSubmit:u?a:p,...f,"data-discover":!y&&e==="render"?"true":void 0})});lg.displayName="Form";function ag(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wf(e){let n=w.useContext(cu);return W(n,ag(e)),n}function sg(e,{target:n,replace:t,state:u,preventScrollReset:r,relative:i,viewTransition:o}={}){let l=zf(),a=En(),s=mr(e,{relative:i});return w.useCallback(d=>{if(B2(d,n)){d.preventDefault();let c=t!==void 0?t:nr(a)===nr(s);l(e,{replace:c,state:u,preventScrollReset:r,relative:i,viewTransition:o})}},[a,l,s,t,u,n,e,r,i,o])}var cg=0,dg=()=>`__${String(++cg)}__`;function fg(){let{router:e}=Wf("useSubmit"),{basename:n}=w.useContext(sn),t=T2();return w.useCallback(async(u,r={})=>{let{action:i,method:o,encType:l,formData:a,body:s}=U2(u,n);if(r.navigate===!1){let d=r.fetcherKey||dg();await e.fetch(d,t,r.action||i,{preventScrollReset:r.preventScrollReset,formData:a,body:s,formMethod:r.method||o,formEncType:r.encType||l,flushSync:r.flushSync})}else await e.navigate(r.action||i,{preventScrollReset:r.preventScrollReset,formData:a,body:s,formMethod:r.method||o,formEncType:r.encType||l,replace:r.replace,state:r.state,fromRouteId:t,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,n,t])}function pg(e,{relative:n}={}){let{basename:t}=w.useContext(sn),u=w.useContext(cn);W(u,"useFormAction must be used inside a RouteContext");let[r]=u.matches.slice(-1),i={...mr(e||".",{relative:n})},o=En();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),a=l.getAll("index");if(a.some(d=>d==="")){l.delete("index"),a.filter(c=>c).forEach(c=>l.append("index",c));let d=l.toString();i.search=d?`?${d}`:""}}return(!e||e===".")&&r.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(i.pathname=i.pathname==="/"?t:bn([t,i.pathname])),nr(i)}function hg(e,n={}){let t=w.useContext(Of);W(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Wf("useViewTransitionState"),r=mr(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Qn(t.currentLocation.pathname,u)||t.currentLocation.pathname,o=Qn(t.nextLocation.pathname,u)||t.nextLocation.pathname;return Ni(r.pathname,o)!=null||Ni(r.pathname,i)!=null}new TextEncoder;function mg(e,n=""){if(typeof window>"u"||!window.umami)return;const t=`${e}${n}`;window.umami.track(u=>({...u,url:t}))}function gg(){const e=En(),n=w.useRef(!0);return w.useEffect(()=>{if(n.current){n.current=!1;return}mg(e.pathname,e.search)},[e.pathname,e.search]),null}/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gf=(...e)=>e.filter((n,t,u)=>!!n&&n.trim()!==""&&u.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=w.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:u,className:r="",children:i,iconNode:o,...l},a)=>w.createElement("svg",{ref:a,...xg,width:n,height:n,stroke:e,strokeWidth:u?Number(t)*24/Number(n):t,className:Gf("lucide",r),...l},[...o.map(([s,d])=>w.createElement(s,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(e,n)=>{const t=w.forwardRef(({className:u,...r},i)=>w.createElement(vg,{ref:i,iconNode:n,className:Gf(`lucide-${yg(e)}`,u),...r}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],kg=Qe("ArrowLeft",bg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],_g=Qe("Briefcase",wg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],Cg=Qe("Dot",Sg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ag=Qe("ExternalLink",Eg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Fg=Qe("FolderGit2",Dg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Wl=Qe("Github",Tg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Ng=Qe("Moon",Pg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Gl=Qe("Presentation",Ig);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],Lg=Qe("Rss",Rg);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Mg=Qe("Sun",Og);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],zg=Qe("Twitter",jg),Vf=w.createContext(void 0);function Bg({children:e}){const[n,t]=w.useState(()=>localStorage.getItem("theme")||"light");w.useEffect(()=>{localStorage.setItem("theme",n),document.documentElement.classList.toggle("dark",n==="dark")},[n]);const u=()=>{t(r=>r==="light"?"dark":"light")};return x.jsx(Vf.Provider,{value:{theme:n,toggleTheme:u},children:e})}function Hg(){const e=w.useContext(Vf);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e}const $g=[{to:"/",label:"Home",match:e=>e==="/"},{to:"/blog",label:"Blog",match:e=>e==="/blog"||e.startsWith("/blog/")},{to:"/projects",label:"Projects",match:e=>e==="/projects"},{to:"/resume",label:"Resume",match:e=>e==="/resume"},{to:"/talks",label:"Talks",match:e=>e==="/talks"},{to:"/opensource",label:"OSS",match:e=>e==="/opensource"}];function Ug(){const e=En(),{theme:n,toggleTheme:t}=Hg();return x.jsx("nav",{className:"py-8 transition-colors duration-200 dark:bg-[#1a1a1a]",children:x.jsx("div",{className:"max-w-3xl mx-auto px-6",children:x.jsxs("div",{className:"flex justify-between items-center",children:[x.jsxs(an,{to:"/",className:"font-serif text-2xl dark:text-white",children:["kriyanshi"," "]}),x.jsxs("div",{className:"flex items-center gap-5",children:[$g.map(({to:u,label:r,match:i})=>x.jsxs(an,{to:u,className:"text-[13px] font-medium relative group dark:text-gray-300",children:[r,x.jsx("span",{className:`absolute -bottom-1 left-0 w-full h-[1.5px] bg-current transform transition-transform duration-200 ${i(e.pathname)?"scale-x-100":"scale-x-0 group-hover:scale-x-100"}`})]},u)),x.jsx("button",{onClick:t,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors","aria-label":"Toggle theme",children:n==="dark"?x.jsx(Mg,{size:18,className:"text-gray-300"}):x.jsx(Ng,{size:18})})]})]})})})}const dn="https://kriyanshii.github.io",qg="Kriyanshi",Wg="Satellites, Distributed Systems & Interactive Computing",Vl="Kriyanshi",Gg="Portfolio of Kriyanshi. I work at ISRO's Space Applications Centre building satellite data pipelines, JupyterHub platforms, and interactive computing environments for scientific research.",du=`${dn}/og/blog-default.png`;function Kl(e){return e.startsWith("http")?e:`${dn}${e.startsWith("/")?e:`/${e}`}`}function Vg(e){return`${dn}/blog/${e}`}function Kg(e,n){return n?Kl(n):`${dn}/og/${e}.png`}function Yg(e){return`${e} | ${qg}`}function Qg(e){return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,url:e.url,datePublished:e.datePublished,dateModified:e.dateModified??e.datePublished,image:e.image,author:{"@type":"Person",name:Vl,url:Kl("/")},publisher:{"@type":"Person",name:Vl,url:Kl("/")},...e.tag?{articleSection:e.tag}:{},mainEntityOfPage:{"@type":"WebPage","@id":e.url}}}function be(e,n,t=!1){const u=t?`meta[property="${e}"]`:`meta[name="${e}"]`;let r=document.head.querySelector(u),i=!1;return r||(r=document.createElement("meta"),t?r.setAttribute("property",e):r.setAttribute("name",e),document.head.appendChild(r),i=!0),r.setAttribute("content",n),{element:r,created:i}}function Jg(e,n){let t=document.head.querySelector(`link[rel="${e}"]`),u=!1;return t||(t=document.createElement("link"),t.setAttribute("rel",e),document.head.appendChild(t),u=!0),t.setAttribute("href",n),{element:t,created:u}}function Zg(e,n){let t=document.head.querySelector(`script[data-seo-id="${e}"]`);return t||(t=document.createElement("script"),t.type="application/ld+json",t.setAttribute("data-seo-id",e),document.head.appendChild(t)),t.textContent=JSON.stringify(n),t}function Xg(e){const n=document.title;document.title=Yg(e.title);const t=[be("description",e.description),Jg("canonical",e.canonical),be("og:title",e.title,!0),be("og:description",e.description,!0),be("og:url",e.canonical,!0),be("og:type",e.ogType??"website",!0),be("og:locale","en_US",!0),be("twitter:card","summary_large_image"),be("twitter:title",e.title),be("twitter:description",e.description)];e.ogImage&&t.push(be("og:image",e.ogImage,!0),be("twitter:image",e.ogImage)),e.publishedTime&&t.push(be("article:published_time",e.publishedTime,!0)),e.author&&t.push(be("article:author",e.author,!0)),e.tag&&t.push(be("article:section",e.tag,!0));const r=e.ogType==="article"?Zg("page-seo-jsonld",Qg({title:e.title,description:e.description,url:e.canonical,datePublished:e.publishedTime??new Date().toISOString().split("T")[0],image:e.ogImage,tag:e.tag})):null;return()=>{document.title=n,t.forEach(({element:i,created:o})=>{o&&i.remove()}),r==null||r.remove()}}function _t(e){return w.useEffect(()=>Xg(e),[e.title,e.description,e.canonical,e.ogType,e.ogImage,e.publishedTime,e.author,e.tag]),null}const ey="https://drive.google.com/file/d/1cfHx8_s2gi52WUW-W4R3EBNCw-INK_cI/view?usp=sharing",ny=[{type:"job",title:"cloudraft",date:"Jan, 2026",description:"working on migration of n8n workflows from Docker to self-managed Kubernetes, designing namespaces, deployments/statefulsets, services, ingress, configmaps, and secrets.",link:"https://cloudraft.io",isNew:!0},{type:"job",title:"Space Application Center",date:"Sep, 2023",description:"At the Space Applications Centre, ISRO, I've been fortunate to work on projects that bring space data closer to scientists and researchers:",link:"#",isNew:!1,bulletPoints:["Built systems to ingest and manage continuous streams of data from geostationary satellites, ensuring reliable scheduling and availability for downstream applications","Developed JupyterHub-based platforms that empower planetary and meteorological researchers to run experiments, collaborate, and explore massive datasets in an interactive way.","Created scheduling systems for automated satellite data processing workflows","Recently started contributing to the customization of SeaDAS, NASA's toolkit for processing and analyzing Earth observation data"]}],Kf=[{type:"project",title:"VisionBoardIt",date:"Dec 17, 2025",description:"Create beautiful vision boards with photos, notes, and emojis. Bring your dreams to life with Japanese-inspired elegance.",link:"https://visionboardit.art/?ref=producthunt",isNew:!0,tags:["tools"]},{type:"project",title:"dagu",date:"Sep 8, 2025",description:"I actively contribute to Dagu, an open-source workflow engine, where I worked on both core features and usability improvements. My contributions include implementing enqueue logic for batch processing, adding custom exit-code based retry handling, introducing zoom support in DAG visualizations, and building controlled execution configs to lock parameters for reproducible runs. I also fixed frontend build issues, improving the stability of the development workflow.",link:"https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii",tags:["opensource"]},{type:"project",title:"MapReduce",date:"Jan 23, 2025",description:"Implemented the MapReduce paper from MIT's Distributed Systems course (MIT 6.5840) in Go, gaining hands-on experience in parallel data processing, distributed computing, and fault tolerance.",link:"https://github.com/kriyanshii/mit-6.5840",tags:["from scratch"]},{type:"project",title:"Shell",date:"Dec 30, 2024",description:"A minimalist implementation of a Unix shell built from scratch in Go.",link:"https://github.com/kriyanshii/shell-go",tags:["from scratch"]},{type:"project",title:"Grep",date:"Feb 5, 2025",description:"An implementation of the classic grep utility built from scratch in Go.",link:"https://github.com/kriyanshii/grep-go",tags:["from scratch"]},{type:"project",title:"Serene",date:"Feb 2025",description:"A personalized productivity tool to help manage and complete day-to-day tasks. Built with a clean and simple UI.",link:"https://sereneworkspace.netlify.app/",isNew:!0,tags:["tools"]},{type:"project",title:"Rock Paper Scissors",date:"Nov 2024",description:"An implementation of the classic Rock-Paper-Scissors game in TypeScript.",link:"https://github.com/kriyanshii/rock-paper-scissors",tags:["games"]},{type:"project",title:"Bubble Burst",date:"Dec 2024",description:"A fun browser-based game where you pop all the bubbles that appear on the screen.",link:"https://github.com/kriyanshii/bubble-burst",isNew:!0,tags:["games"]},{type:"project",title:"Wordle",date:"Jan 2025",description:"A from-scratch implementation of the popular Wordle game using TypeScript.",link:"https://github.com/kriyanshii/wordle",tags:["games"]}],Yf=[{title:"Interactive Computing Environments for Open Science",description:"Scalable JupyterHub deployments and Mercury integration for scientific research workflows.",year:"2025",tag:"Conference Talk",link:"https://youtu.be/6o_XY5jBchY?si=lZssP4yTXsjFuYQx"}],ty=[{project:"Dagu",summary:"42+ commits across queue management, DAG run controls, search/filter UX, step timeouts, and API design.",links:[{label:"Contributions on GitHub",href:"https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii"},{label:"Write-up on this site",href:"/blog/open-source-contributions"}]},{project:"Ray",summary:"Contributions to Ray core and Ray Data — actor lifecycle fixes, dual-task error handling, datasource test organization, and Grafana observability panels.",links:[{label:"Contributions on GitHub",href:"https://github.com/kriyanshii/ray/commits/master/?author=kriyanshii"}]}];function Yl({items:e,title:n}){return x.jsxs("section",{children:[x.jsx("h2",{className:"text-lg font-medium mb-8 dark:text-white",children:n}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"absolute left-1 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"}),x.jsx("div",{className:"space-y-8",children:e.map((t,u)=>x.jsxs("div",{className:"group relative pl-12",children:[x.jsx("div",{className:"absolute left-0 top-[14px]",children:(()=>{switch(t.type){case"project":return x.jsx("div",{className:"relative z-10 bg-[#fafafa] dark:bg-[#1a1a1a] flex items-center justify-center w-[18px] h-[18px] -ml-[3px] transition-colors group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-blue-400",children:x.jsx(Fg,{size:16,className:"transition-colors"})});case"job":return x.jsx(_g,{size:16,className:"transition-colors"});case"opnesource-contrib":return x.jsx(Wl,{size:16,className:"transition-colors"});case"blog":return x.jsx(Lg,{size:16,className:"transition-colors"});default:return x.jsx(Cg,{size:9,className:"rounded-full bg-gray-400 dark:bg-gray-500 transition-colors group-hover:bg-blue-500 dark:group-hover:bg-blue-400 -ml-[0px]"})}})()}),x.jsxs(an,{to:t.link||"#",className:"block -mt-1.5 p-4 rounded-lg transition-all hover:bg-white dark:hover:bg-[#242424] hover:shadow-sm",children:[x.jsxs("div",{className:"flex items-center justify-between gap-4 mb-1",children:[x.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[t.isNew&&x.jsxs("span",{className:"relative shrink-0 px-2 py-0.5 text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full leading-none overflow-hidden",children:["NEW",x.jsx("div",{className:"absolute inset-0 w-3 h-full bg-white/40 dark:bg-white/10 skew-x-12 animate-shine"})]}),x.jsx("h3",{className:"text-[15px] font-medium truncate transition-colors group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400",children:t.title})]}),x.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t.type==="project"&&t.link&&t.link.includes("github.com")&&x.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",onClick:r=>r.stopPropagation(),className:"text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors",title:"View on GitHub",children:x.jsx(Wl,{size:16})}),t.type==="project"&&t.link&&!t.link.includes("github.com")&&x.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",onClick:r=>r.stopPropagation(),className:"text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors",title:"View Platform",children:x.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),x.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})}),x.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:t.date})]})]}),t.tags&&t.tags.length>0&&x.jsx("div",{className:"flex flex-wrap gap-1 mb-2",children:t.tags.map((r,i)=>x.jsx("span",{className:`px-2 py-0.5 text-[10px] font-medium rounded-full ${r==="from scratch"?"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200":r==="tools"?"bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200":r==="games"?"bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200":r==="opensource"?"bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200":r==="new"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200":"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"}`,children:r},i))}),x.jsx("p",{className:"text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed",children:t.description}),t.bulletPoints&&t.bulletPoints.length>0&&x.jsx("ul",{className:"mt-2 space-y-1",children:t.bulletPoints.map((r,i)=>x.jsxs("li",{className:"text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed flex items-start",children:[x.jsx("span",{className:"text-gray-400 dark:text-gray-500 mr-2 mt-1.5 text-[10px]",children:"•"}),x.jsx("span",{children:r})]},i))})]})]},u))})]})]})}function uy(){return x.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[x.jsx(_t,{title:Wg,description:Gg,canonical:`${dn}/`,ogImage:du}),x.jsxs("header",{className:"mb-10 flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-start",children:[x.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"I work at the intersection of satellites, distributed systems, and the teams who need their data on time. At ISRO’s Space Applications Centre, I build ingestion, scheduling, and processing pipelines for geostationary satellite data and design JupyterHub environments that make planetary and weather research more accessible. I like running production and development setups on air-gapped and on-prem systems end to end—from build to deployment; it’s my guilty pleasure. Lately, I’ve been exploring and customizing SeaDAS to help scientists get more out of Earth observation data. 🌍✨"}),x.jsxs("div",{className:"flex flex-col gap-3 shrink-0",children:[x.jsx("a",{href:"https://github.com/kriyanshii",target:"_blank",rel:"noopener noreferrer",className:"text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:x.jsx(Wl,{size:18})}),x.jsx("a",{href:"https://x.com/kriyanshii",target:"_blank",rel:"noopener noreferrer",className:"text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:x.jsx(zg,{size:18})}),x.jsx(an,{to:"/talks",className:"text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:x.jsx(Gl,{size:18})})]})]}),x.jsx(Yl,{items:ny,title:"work"}),x.jsx(Yl,{items:Kf,title:"projects"}),x.jsxs("section",{className:"mt-16",children:[x.jsxs("div",{className:"flex items-baseline justify-between mb-6",children:[x.jsx("h2",{className:"text-xl font-medium text-gray-900 dark:text-gray-100",children:"talks"}),x.jsx(an,{to:"/talks",className:"text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:"View all"})]}),x.jsx("div",{className:"space-y-4",children:Yf.slice(0,1).map(e=>x.jsx("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow",children:x.jsxs("div",{className:"flex items-start justify-between",children:[x.jsxs("div",{className:"flex-1",children:[x.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.title}),x.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:e.description}),x.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500",children:[x.jsx("span",{className:"px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full",children:e.tag}),x.jsx("span",{children:e.year})]})]}),x.jsxs("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"ml-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:[x.jsx(Gl,{size:16}),"Watch Talk"]})]})},e.link))})]})]})}const Qf=`---
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

`,Zf=`---
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
`,Xf=`---
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
`,ep=`---
title: Open source contributions to Dagu in year 2024-2025
date: 2026-01-26
tag: Tech
description: A Complete Guide
---


# Contribution Summary for kriyanshishah06@gmail.com

**Contributor:** kriyanshi / kriyanshii  
**Total Commits:** 42 authored + 2 co-authored  
**Contribution Period:** February 2025 - December 2025  
**Project:** Dagu - A workflow scheduler and orchestrator

---

## 📊 Overview Statistics

- **Total Commits:** 42 direct contributions
- **Co-authored Commits:** 2 additional contributions
- **Files Changed:** 149 files
- **Lines Inserted:** 13,545 lines
- **Lines Deleted:** 9,424 lines
- **Net Contribution:** +4,121 lines
- **Primary Areas:** Backend (Go), Frontend (TypeScript/React), API Design
- **Most Active Months:** November 2025 (12 commits), August 2025 (8 commits), December 2025 (7 commits)

---

## 🌟 Major Features & Enhancements

### 1. **Queue Management System** (Feb 2025 - Oct 2025)
- **Initial Implementation** (#535): Built comprehensive queue functionality for DAG scheduling
  - Added queue persistence layer (\`internal/persistence/queue/\`)
  - Implemented queue statistics tracking (\`internal/persistence/stats/\`)
  - Modified scheduler to support queuing mechanisms
  - Enhanced agent to handle queued DAG runs
- **Queue Override Feature**: Added CLI flag and API body support for queue overrides
- **Clear Queue Functionality** (#1298): Implemented UI and API endpoints for clearing queues
- **Enhanced Queue UI**: Built comprehensive queue management interface with real-time updates

### 2. **Advanced Search & Filtering** (Aug 2025 - Nov 2025)
- **Status-wise Search**: Implemented comprehensive search functionality with status filtering
  - Created \`StatusSearchTabs\` component for intuitive UI
  - Added backend API support for status-based filtering
  - Integrated pagination with status filters
- **Enhanced DAG Search**: Improved search experience across the DAG list page
- **Real-time Status Updates**: Added live updates for running and queued DAGs with end date tracking

### 3. **DAG Run Management** (Oct 2025 - Dec 2025)
- **Reschedule from History** (#1347): Allow initiating fresh DAG runs with different Run IDs from history
- **Enqueue from Spec** (#1346): New API endpoint for enqueuing DAG runs from specifications
  - Added comprehensive API documentation
  - Built UI integration in DAGActions component
  - Created extensive test coverage
- **Prevent Duplicate Runs**: Implemented deduplication logic to prevent duplicate DAG runs with same name and parameters
  - Added sophisticated parameter hashing and comparison
  - Created 233 lines of tests for edge cases
  - Enhanced both CLI and API endpoints

### 4. **DAG Configuration Enhancements** (Aug 2025)
- **Lock Parameters & Run ID** (#1105): Added DAG configuration to lock parameters and prevent modifications
  - Modified DAG schema with new configuration options
  - Enhanced StartDAGModal UI to respect locked configurations
  - Updated API definitions and transformers

### 5. **Step-level Features** (Nov 2025 - Dec 2025)
- **Step Timeout** (#1026): Added \`timeoutSec\` configuration at the step level
  - Updated API schemas (v1 and v2)
  - Modified spec builder and loader
  - Enhanced runtime scheduler to enforce timeouts
  - Updated JSON schema documentation
- **Disable Step Retry**: Implemented logic to disable step retry while DAG is running
  - Modified \`NodeStatusTableRow\` component

### 6. **Running/Failed Steps List** (#1401, Nov 2025)
- Enhanced DAG runs page to display running and failed steps
- Modified API v2 schema and transformers
- Updated DAGRunTable and DAGRunGroupedView components
- Improved visibility into DAG execution state

### 7. **JQ Executor Enhancement** (#1391, Nov 2025)
- Extended JQ executor with raw output option
- Added comprehensive test coverage (394 lines in jq_test.go)
- Created integration tests (188 lines)

### 8. **Chain Mode Dependency Warning** (#1265, Oct 2025)
- Implemented warning/notice system for explicit dependencies in chain mode DAGs
- Enhanced DAG editor UI with 207 lines of improvements

---

## 🐛 Bug Fixes & Improvements

### UI/Frontend Fixes
- **Fixed Zoom Out DAG Rendering** (#1380): Resolved mermaid diagram rendering issues at different zoom levels
- **Fixed Linting Issues**: Multiple commits addressing code quality and linting errors
- **Queue File Parsing** (#1437): Attempted and reverted changes to parse queue file content for actual DAG names

### Build & Development
- **Updated Makefile** (#901): Enhanced build-ui target for better frontend build process
- **Solved CL Errors**: Fixed command-line errors in various components

---

## 📁 Areas of Contribution

### Backend (Go)
- **API Development**: Extensive work on v1 and v2 API definitions and implementations
- **Command Layer**: Enhanced CLI commands (start, retry, restart, enqueue, dry-run)
- **Persistence Layer**: Built queue and stats persistence systems
- **Core Runtime**: Modified scheduler, agent, and node execution logic
- **Utilities**: Created string utilities for parameter handling and comparison

### Frontend (TypeScript/React)
- **DAG Management**: Enhanced DAG list, search, and execution interfaces
- **Queue Management**: Built comprehensive queue viewing and management UI
- **DAG Runs**: Improved DAG run history, filtering, and action capabilities
- **Components**: Created reusable components for status tabs, queue cards, and action modals

### Documentation & Configuration
- Updated API documentation
- Enhanced CLI documentation
- Modified JSON schemas for DAG definitions
- Updated README and feature documentation

---

## 📈 Timeline of Contributions

**Q1 2025 (Feb - Apr)**
- Initial queue functionality implementation
- Build process improvements

**Q2 2025 (Aug - Sep)**
- Status-wise search implementation
- DAG configuration locking features
- Queue override functionality
- Enhanced search capabilities

**Q3 2025 (Oct - Nov)**
- DAG run enqueuing from spec
- Rescheduling from history
- Queue clearing functionality
- JQ executor enhancements
- Step-level timeout configuration
- Comprehensive test coverage additions

**Q4 2025 (Dec)**
- Duplicate DAG run prevention
- Step retry controls
- Linting and code quality improvements

---

## 🎯 Key Impact Areas

1. **User Experience**: Significantly improved search, filtering, and DAG management workflows
2. **Reliability**: Added deduplication and timeout controls for more robust execution
3. **Flexibility**: Queue management and override capabilities for advanced scheduling
4. **Developer Experience**: Enhanced API design, comprehensive test coverage, and better documentation
5. **Performance**: Optimized frontend components and backend processing

---

## 🤝 Collaboration

- Co-authored 2 commits with YotaHamada (yohamta@gmail.com):
  - feat(ui): allow rescheduling DAG-run (#1381)
  - feat: add \`--from-run-id\` option to start command (#1378)

---

## 📝 Technical Highlights

- **Full-stack Development**: Competent across Go backend, TypeScript/React frontend, and API design
- **Testing**: Consistently added comprehensive test coverage (e.g., 233 tests for params, 394 for JQ)
- **Code Quality**: Regular linting fixes and adherence to project standards
- **Feature Ownership**: Led multiple features from API design through implementation to UI integration
- **Problem Solving**: Tackled complex issues like parameter deduplication, queue management, and real-time updates

---`,np=`---
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
`;var ts={exports:{}},K={},gr={},$e={};function tp(e){return typeof e>"u"||e===null}function ry(e){return typeof e=="object"&&e!==null}function iy(e){return Array.isArray(e)?e:tp(e)?[]:[e]}function oy(e,n){var t,u,r,i;if(n)for(i=Object.keys(n),t=0,u=i.length;t<u;t+=1)r=i[t],e[r]=n[r];return e}function ly(e,n){var t="",u;for(u=0;u<n;u+=1)t+=e;return t}function ay(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}$e.isNothing=tp;$e.isObject=ry;$e.toArray=iy;$e.repeat=ly;$e.isNegativeZero=ay;$e.extend=oy;function tr(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}tr.prototype=Object.create(Error.prototype);tr.prototype.constructor=tr;tr.prototype.toString=function(n){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!n&&this.mark&&(t+=" "+this.mark.toString()),t};var yr=tr,Rc=$e;function us(e,n,t,u,r){this.name=e,this.buffer=n,this.position=t,this.line=u,this.column=r}us.prototype.getSnippet=function(n,t){var u,r,i,o,l;if(!this.buffer)return null;for(n=n||4,t=t||75,u="",r=this.position;r>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(r-1))===-1;)if(r-=1,this.position-r>t/2-1){u=" ... ",r+=5;break}for(i="",o=this.position;o<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o))===-1;)if(o+=1,o-this.position>t/2-1){i=" ... ",o-=5;break}return l=this.buffer.slice(r,o),Rc.repeat(" ",n)+u+l+i+`
`+Rc.repeat(" ",n+this.position-r+u.length)+"^"};us.prototype.toString=function(n){var t,u="";return this.name&&(u+='in "'+this.name+'" '),u+="at line "+(this.line+1)+", column "+(this.column+1),n||(t=this.getSnippet(),t&&(u+=`:
`+t)),u};var sy=us,Lc=yr,cy=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],dy=["scalar","sequence","mapping"];function fy(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(u){n[String(u)]=t})}),n}function py(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(cy.indexOf(t)===-1)throw new Lc('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.defaultStyle=n.defaultStyle||null,this.styleAliases=fy(n.styleAliases||null),dy.indexOf(this.kind)===-1)throw new Lc('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var le=py,Oc=$e,oi=yr,hy=le;function Ql(e,n,t){var u=[];return e.include.forEach(function(r){t=Ql(r,n,t)}),e[n].forEach(function(r){t.forEach(function(i,o){i.tag===r.tag&&i.kind===r.kind&&u.push(o)}),t.push(r)}),t.filter(function(r,i){return u.indexOf(i)===-1})}function my(){var e={scalar:{},sequence:{},mapping:{},fallback:{}},n,t;function u(r){e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(u);return e}function zt(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(n){if(n.loadKind&&n.loadKind!=="scalar")throw new oi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=Ql(this,"implicit",[]),this.compiledExplicit=Ql(this,"explicit",[]),this.compiledTypeMap=my(this.compiledImplicit,this.compiledExplicit)}zt.DEFAULT=null;zt.create=function(){var n,t;switch(arguments.length){case 1:n=zt.DEFAULT,t=arguments[0];break;case 2:n=arguments[0],t=arguments[1];break;default:throw new oi("Wrong number of arguments for Schema.create function")}if(n=Oc.toArray(n),t=Oc.toArray(t),!n.every(function(u){return u instanceof zt}))throw new oi("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(u){return u instanceof hy}))throw new oi("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new zt({include:n,explicit:t})};var fu=zt,gy=le,yy=new gy("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),xy=le,vy=new xy("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),by=le,ky=new by("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),wy=fu,rs=new wy({explicit:[yy,vy,ky]}),_y=le;function Sy(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Cy(){return null}function Ey(e){return e===null}var Ay=new _y("tag:yaml.org,2002:null",{kind:"scalar",resolve:Sy,construct:Cy,predicate:Ey,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),Dy=le;function Fy(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Ty(e){return e==="true"||e==="True"||e==="TRUE"}function Py(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Ny=new Dy("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Fy,construct:Ty,predicate:Py,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"}),Iy=$e,Ry=le;function Ly(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Oy(e){return 48<=e&&e<=55}function My(e){return 48<=e&&e<=57}function jy(e){if(e===null)return!1;var n=e.length,t=0,u=!1,r;if(!n)return!1;if(r=e[t],(r==="-"||r==="+")&&(r=e[++t]),r==="0"){if(t+1===n)return!0;if(r=e[++t],r==="b"){for(t++;t<n;t++)if(r=e[t],r!=="_"){if(r!=="0"&&r!=="1")return!1;u=!0}return u&&r!=="_"}if(r==="x"){for(t++;t<n;t++)if(r=e[t],r!=="_"){if(!Ly(e.charCodeAt(t)))return!1;u=!0}return u&&r!=="_"}for(;t<n;t++)if(r=e[t],r!=="_"){if(!Oy(e.charCodeAt(t)))return!1;u=!0}return u&&r!=="_"}if(r==="_")return!1;for(;t<n;t++)if(r=e[t],r!=="_"){if(r===":")break;if(!My(e.charCodeAt(t)))return!1;u=!0}return!u||r==="_"?!1:r!==":"?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(t))}function zy(e){var n=e,t=1,u,r,i=[];return n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),u=n[0],(u==="-"||u==="+")&&(u==="-"&&(t=-1),n=n.slice(1),u=n[0]),n==="0"?0:u==="0"?n[1]==="b"?t*parseInt(n.slice(2),2):n[1]==="x"?t*parseInt(n,16):t*parseInt(n,8):n.indexOf(":")!==-1?(n.split(":").forEach(function(o){i.unshift(parseInt(o,10))}),n=0,r=1,i.forEach(function(o){n+=o*r,r*=60}),t*n):t*parseInt(n,10)}function By(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Iy.isNegativeZero(e)}var Hy=new Ry("tag:yaml.org,2002:int",{kind:"scalar",resolve:jy,construct:zy,predicate:By,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),up=$e,$y=le,Uy=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function qy(e){return!(e===null||!Uy.test(e)||e[e.length-1]==="_")}function Wy(e){var n,t,u,r;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,r=[],"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:n.indexOf(":")>=0?(n.split(":").forEach(function(i){r.unshift(parseFloat(i,10))}),n=0,u=1,r.forEach(function(i){n+=i*u,u*=60}),t*n):t*parseFloat(n,10)}var Gy=/^[-+]?[0-9]+e/;function Vy(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(up.isNegativeZero(e))return"-0.0";return t=e.toString(10),Gy.test(t)?t.replace("e",".e"):t}function Ky(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||up.isNegativeZero(e))}var Yy=new $y("tag:yaml.org,2002:float",{kind:"scalar",resolve:qy,construct:Wy,predicate:Ky,represent:Vy,defaultStyle:"lowercase"}),Qy=fu,rp=new Qy({include:[rs],implicit:[Ay,Ny,Hy,Yy]}),Jy=fu,ip=new Jy({include:[rp]}),Zy=le,op=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),lp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Xy(e){return e===null?!1:op.exec(e)!==null||lp.exec(e)!==null}function e3(e){var n,t,u,r,i,o,l,a=0,s=null,d,c,f;if(n=op.exec(e),n===null&&(n=lp.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],u=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(t,u,r));if(i=+n[4],o=+n[5],l=+n[6],n[7]){for(a=n[7].slice(0,3);a.length<3;)a+="0";a=+a}return n[9]&&(d=+n[10],c=+(n[11]||0),s=(d*60+c)*6e4,n[9]==="-"&&(s=-s)),f=new Date(Date.UTC(t,u,r,i,o,l,a)),s&&f.setTime(f.getTime()-s),f}function n3(e){return e.toISOString()}var t3=new Zy("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Xy,construct:e3,instanceOf:Date,represent:n3}),u3=le;function r3(e){return e==="<<"||e===null}var i3=new u3("tag:yaml.org,2002:merge",{kind:"scalar",resolve:r3});function ap(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var dt;try{var o3=ap;dt=o3("buffer").Buffer}catch{}var l3=le,is=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a3(e){if(e===null)return!1;var n,t,u=0,r=e.length,i=is;for(t=0;t<r;t++)if(n=i.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;u+=6}return u%8===0}function s3(e){var n,t,u=e.replace(/[\r\n=]/g,""),r=u.length,i=is,o=0,l=[];for(n=0;n<r;n++)n%4===0&&n&&(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)),o=o<<6|i.indexOf(u.charAt(n));return t=r%4*6,t===0?(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)):t===18?(l.push(o>>10&255),l.push(o>>2&255)):t===12&&l.push(o>>4&255),dt?dt.from?dt.from(l):new dt(l):l}function c3(e){var n="",t=0,u,r,i=e.length,o=is;for(u=0;u<i;u++)u%3===0&&u&&(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]),t=(t<<8)+e[u];return r=i%3,r===0?(n+=o[t>>18&63],n+=o[t>>12&63],n+=o[t>>6&63],n+=o[t&63]):r===2?(n+=o[t>>10&63],n+=o[t>>4&63],n+=o[t<<2&63],n+=o[64]):r===1&&(n+=o[t>>2&63],n+=o[t<<4&63],n+=o[64],n+=o[64]),n}function d3(e){return dt&&dt.isBuffer(e)}var f3=new l3("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a3,construct:s3,predicate:d3,represent:c3}),p3=le,h3=Object.prototype.hasOwnProperty,m3=Object.prototype.toString;function g3(e){if(e===null)return!0;var n=[],t,u,r,i,o,l=e;for(t=0,u=l.length;t<u;t+=1){if(r=l[t],o=!1,m3.call(r)!=="[object Object]")return!1;for(i in r)if(h3.call(r,i))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(i)===-1)n.push(i);else return!1}return!0}function y3(e){return e!==null?e:[]}var x3=new p3("tag:yaml.org,2002:omap",{kind:"sequence",resolve:g3,construct:y3}),v3=le,b3=Object.prototype.toString;function k3(e){if(e===null)return!0;var n,t,u,r,i,o=e;for(i=new Array(o.length),n=0,t=o.length;n<t;n+=1){if(u=o[n],b3.call(u)!=="[object Object]"||(r=Object.keys(u),r.length!==1))return!1;i[n]=[r[0],u[r[0]]]}return!0}function w3(e){if(e===null)return[];var n,t,u,r,i,o=e;for(i=new Array(o.length),n=0,t=o.length;n<t;n+=1)u=o[n],r=Object.keys(u),i[n]=[r[0],u[r[0]]];return i}var _3=new v3("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:k3,construct:w3}),S3=le,C3=Object.prototype.hasOwnProperty;function E3(e){if(e===null)return!0;var n,t=e;for(n in t)if(C3.call(t,n)&&t[n]!==null)return!1;return!0}function A3(e){return e!==null?e:{}}var D3=new S3("tag:yaml.org,2002:set",{kind:"mapping",resolve:E3,construct:A3}),F3=fu,xr=new F3({include:[ip],implicit:[t3,i3],explicit:[f3,x3,_3,D3]}),T3=le;function P3(){return!0}function N3(){}function I3(){return""}function R3(e){return typeof e>"u"}var L3=new T3("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:P3,construct:N3,predicate:R3,represent:I3}),O3=le;function M3(e){if(e===null||e.length===0)return!1;var n=e,t=/\/([gim]*)$/.exec(e),u="";return!(n[0]==="/"&&(t&&(u=t[1]),u.length>3||n[n.length-u.length-1]!=="/"))}function j3(e){var n=e,t=/\/([gim]*)$/.exec(e),u="";return n[0]==="/"&&(t&&(u=t[1]),n=n.slice(1,n.length-u.length-1)),new RegExp(n,u)}function z3(e){var n="/"+e.source+"/";return e.global&&(n+="g"),e.multiline&&(n+="m"),e.ignoreCase&&(n+="i"),n}function B3(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var H3=new O3("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:M3,construct:j3,predicate:B3,represent:z3}),Ii;try{var $3=ap;Ii=$3("esprima")}catch{typeof window<"u"&&(Ii=window.esprima)}var U3=le;function q3(e){if(e===null)return!1;try{var n="("+e+")",t=Ii.parse(n,{range:!0});return!(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function W3(e){var n="("+e+")",t=Ii.parse(n,{range:!0}),u=[],r;if(t.type!=="Program"||t.body.length!==1||t.body[0].type!=="ExpressionStatement"||t.body[0].expression.type!=="ArrowFunctionExpression"&&t.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return t.body[0].expression.params.forEach(function(i){u.push(i.name)}),r=t.body[0].expression.body.range,t.body[0].expression.body.type==="BlockStatement"?new Function(u,n.slice(r[0]+1,r[1]-1)):new Function(u,"return "+n.slice(r[0],r[1]))}function G3(e){return e.toString()}function V3(e){return Object.prototype.toString.call(e)==="[object Function]"}var K3=new U3("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:q3,construct:W3,predicate:V3,represent:G3}),Mc=fu,ro=Mc.DEFAULT=new Mc({include:[xr],explicit:[L3,H3,K3]}),gn=$e,sp=yr,Y3=sy,cp=xr,Q3=ro,Jn=Object.prototype.hasOwnProperty,Ri=1,dp=2,fp=3,Li=4,Uo=1,J3=2,jc=3,Z3=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,X3=/[\x85\u2028\u2029]/,ex=/[,\[\]\{\}]/,pp=/^(?:!|!!|![a-z\-]+!)$/i,hp=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function zc(e){return Object.prototype.toString.call(e)}function on(e){return e===10||e===13}function ht(e){return e===9||e===32}function _e(e){return e===9||e===32||e===10||e===13}function Bt(e){return e===44||e===91||e===93||e===123||e===125}function nx(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function tx(e){return e===120?2:e===117?4:e===85?8:0}function ux(e){return 48<=e&&e<=57?e-48:-1}function Bc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function rx(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var mp=new Array(256),gp=new Array(256);for(var Ct=0;Ct<256;Ct++)mp[Ct]=Bc(Ct)?1:0,gp[Ct]=Bc(Ct);function ix(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||Q3,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function yp(e,n){return new sp(n,new Y3(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function T(e,n){throw yp(e,n)}function Oi(e,n){e.onWarning&&e.onWarning.call(null,yp(e,n))}var Hc={YAML:function(n,t,u){var r,i,o;n.version!==null&&T(n,"duplication of %YAML directive"),u.length!==1&&T(n,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(u[0]),r===null&&T(n,"ill-formed argument of the YAML directive"),i=parseInt(r[1],10),o=parseInt(r[2],10),i!==1&&T(n,"unacceptable YAML version of the document"),n.version=u[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Oi(n,"unsupported YAML version of the document")},TAG:function(n,t,u){var r,i;u.length!==2&&T(n,"TAG directive accepts exactly two arguments"),r=u[0],i=u[1],pp.test(r)||T(n,"ill-formed tag handle (first argument) of the TAG directive"),Jn.call(n.tagMap,r)&&T(n,'there is a previously declared suffix for "'+r+'" tag handle'),hp.test(i)||T(n,"ill-formed tag prefix (second argument) of the TAG directive"),n.tagMap[r]=i}};function Vn(e,n,t,u){var r,i,o,l;if(n<t){if(l=e.input.slice(n,t),u)for(r=0,i=l.length;r<i;r+=1)o=l.charCodeAt(r),o===9||32<=o&&o<=1114111||T(e,"expected valid JSON character");else Z3.test(l)&&T(e,"the stream contains non-printable characters");e.result+=l}}function $c(e,n,t,u){var r,i,o,l;for(gn.isObject(t)||T(e,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(t),o=0,l=r.length;o<l;o+=1)i=r[o],Jn.call(n,i)||(n[i]=t[i],u[i]=!0)}function Ht(e,n,t,u,r,i,o,l){var a,s;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),a=0,s=r.length;a<s;a+=1)Array.isArray(r[a])&&T(e,"nested arrays are not supported inside keys"),typeof r=="object"&&zc(r[a])==="[object Object]"&&(r[a]="[object Object]");if(typeof r=="object"&&zc(r)==="[object Object]"&&(r="[object Object]"),r=String(r),n===null&&(n={}),u==="tag:yaml.org,2002:merge")if(Array.isArray(i))for(a=0,s=i.length;a<s;a+=1)$c(e,n,i[a],t);else $c(e,n,i,t);else!e.json&&!Jn.call(t,r)&&Jn.call(n,r)&&(e.line=o||e.line,e.position=l||e.position,T(e,"duplicated mapping key")),n[r]=i,delete t[r];return n}function os(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):T(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function Z(e,n,t){for(var u=0,r=e.input.charCodeAt(e.position);r!==0;){for(;ht(r);)r=e.input.charCodeAt(++e.position);if(n&&r===35)do r=e.input.charCodeAt(++e.position);while(r!==10&&r!==13&&r!==0);if(on(r))for(os(e),r=e.input.charCodeAt(e.position),u++,e.lineIndent=0;r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return t!==-1&&u!==0&&e.lineIndent<t&&Oi(e,"deficient indentation"),u}function io(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||_e(t)))}function ls(e,n){n===1?e.result+=" ":n>1&&(e.result+=gn.repeat(`
`,n-1))}function ox(e,n,t){var u,r,i,o,l,a,s,d,c=e.kind,f=e.result,h;if(h=e.input.charCodeAt(e.position),_e(h)||Bt(h)||h===35||h===38||h===42||h===33||h===124||h===62||h===39||h===34||h===37||h===64||h===96||(h===63||h===45)&&(r=e.input.charCodeAt(e.position+1),_e(r)||t&&Bt(r)))return!1;for(e.kind="scalar",e.result="",i=o=e.position,l=!1;h!==0;){if(h===58){if(r=e.input.charCodeAt(e.position+1),_e(r)||t&&Bt(r))break}else if(h===35){if(u=e.input.charCodeAt(e.position-1),_e(u))break}else{if(e.position===e.lineStart&&io(e)||t&&Bt(h))break;if(on(h))if(a=e.line,s=e.lineStart,d=e.lineIndent,Z(e,!1,-1),e.lineIndent>=n){l=!0,h=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=a,e.lineStart=s,e.lineIndent=d;break}}l&&(Vn(e,i,o,!1),ls(e,e.line-a),i=o=e.position,l=!1),ht(h)||(o=e.position+1),h=e.input.charCodeAt(++e.position)}return Vn(e,i,o,!1),e.result?!0:(e.kind=c,e.result=f,!1)}function lx(e,n){var t,u,r;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,u=r=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Vn(e,u,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)u=e.position,e.position++,r=e.position;else return!0;else on(t)?(Vn(e,u,r,!0),ls(e,Z(e,!1,n)),u=r=e.position):e.position===e.lineStart&&io(e)?T(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);T(e,"unexpected end of the stream within a single quoted scalar")}function ax(e,n){var t,u,r,i,o,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=u=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return Vn(e,t,e.position,!0),e.position++,!0;if(l===92){if(Vn(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),on(l))Z(e,!1,n);else if(l<256&&mp[l])e.result+=gp[l],e.position++;else if((o=tx(l))>0){for(r=o,i=0;r>0;r--)l=e.input.charCodeAt(++e.position),(o=nx(l))>=0?i=(i<<4)+o:T(e,"expected hexadecimal character");e.result+=rx(i),e.position++}else T(e,"unknown escape sequence");t=u=e.position}else on(l)?(Vn(e,t,u,!0),ls(e,Z(e,!1,n)),t=u=e.position):e.position===e.lineStart&&io(e)?T(e,"unexpected end of the document within a double quoted scalar"):(e.position++,u=e.position)}T(e,"unexpected end of the stream within a double quoted scalar")}function sx(e,n){var t=!0,u,r=e.tag,i,o=e.anchor,l,a,s,d,c,f={},h,g,b,k;if(k=e.input.charCodeAt(e.position),k===91)a=93,c=!1,i=[];else if(k===123)a=125,c=!0,i={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),k=e.input.charCodeAt(++e.position);k!==0;){if(Z(e,!0,n),k=e.input.charCodeAt(e.position),k===a)return e.position++,e.tag=r,e.anchor=o,e.kind=c?"mapping":"sequence",e.result=i,!0;t||T(e,"missed comma between flow collection entries"),g=h=b=null,s=d=!1,k===63&&(l=e.input.charCodeAt(e.position+1),_e(l)&&(s=d=!0,e.position++,Z(e,!0,n))),u=e.line,tu(e,n,Ri,!1,!0),g=e.tag,h=e.result,Z(e,!0,n),k=e.input.charCodeAt(e.position),(d||e.line===u)&&k===58&&(s=!0,k=e.input.charCodeAt(++e.position),Z(e,!0,n),tu(e,n,Ri,!1,!0),b=e.result),c?Ht(e,i,f,g,h,b):s?i.push(Ht(e,null,f,g,h,b)):i.push(h),Z(e,!0,n),k=e.input.charCodeAt(e.position),k===44?(t=!0,k=e.input.charCodeAt(++e.position)):t=!1}T(e,"unexpected end of the stream within a flow collection")}function cx(e,n){var t,u,r=Uo,i=!1,o=!1,l=n,a=0,s=!1,d,c;if(c=e.input.charCodeAt(e.position),c===124)u=!1;else if(c===62)u=!0;else return!1;for(e.kind="scalar",e.result="";c!==0;)if(c=e.input.charCodeAt(++e.position),c===43||c===45)Uo===r?r=c===43?jc:J3:T(e,"repeat of a chomping mode identifier");else if((d=ux(c))>=0)d===0?T(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?T(e,"repeat of an indentation width identifier"):(l=n+d-1,o=!0);else break;if(ht(c)){do c=e.input.charCodeAt(++e.position);while(ht(c));if(c===35)do c=e.input.charCodeAt(++e.position);while(!on(c)&&c!==0)}for(;c!==0;){for(os(e),e.lineIndent=0,c=e.input.charCodeAt(e.position);(!o||e.lineIndent<l)&&c===32;)e.lineIndent++,c=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>l&&(l=e.lineIndent),on(c)){a++;continue}if(e.lineIndent<l){r===jc?e.result+=gn.repeat(`
`,i?1+a:a):r===Uo&&i&&(e.result+=`
`);break}for(u?ht(c)?(s=!0,e.result+=gn.repeat(`
`,i?1+a:a)):s?(s=!1,e.result+=gn.repeat(`
`,a+1)):a===0?i&&(e.result+=" "):e.result+=gn.repeat(`
`,a):e.result+=gn.repeat(`
`,i?1+a:a),i=!0,o=!0,a=0,t=e.position;!on(c)&&c!==0;)c=e.input.charCodeAt(++e.position);Vn(e,t,e.position,!1)}return!0}function Uc(e,n){var t,u=e.tag,r=e.anchor,i=[],o,l=!1,a;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),a=e.input.charCodeAt(e.position);a!==0&&!(a!==45||(o=e.input.charCodeAt(e.position+1),!_e(o)));){if(l=!0,e.position++,Z(e,!0,-1)&&e.lineIndent<=n){i.push(null),a=e.input.charCodeAt(e.position);continue}if(t=e.line,tu(e,n,fp,!1,!0),i.push(e.result),Z(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&a!==0)T(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=u,e.anchor=r,e.kind="sequence",e.result=i,!0):!1}function dx(e,n,t){var u,r,i,o,l=e.tag,a=e.anchor,s={},d={},c=null,f=null,h=null,g=!1,b=!1,k;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),k=e.input.charCodeAt(e.position);k!==0;){if(u=e.input.charCodeAt(e.position+1),i=e.line,o=e.position,(k===63||k===58)&&_e(u))k===63?(g&&(Ht(e,s,d,c,f,null),c=f=h=null),b=!0,g=!0,r=!0):g?(g=!1,r=!0):T(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,k=u;else if(tu(e,t,dp,!1,!0))if(e.line===i){for(k=e.input.charCodeAt(e.position);ht(k);)k=e.input.charCodeAt(++e.position);if(k===58)k=e.input.charCodeAt(++e.position),_e(k)||T(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(Ht(e,s,d,c,f,null),c=f=h=null),b=!0,g=!1,r=!1,c=e.tag,f=e.result;else if(b)T(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=l,e.anchor=a,!0}else if(b)T(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=l,e.anchor=a,!0;else break;if((e.line===i||e.lineIndent>n)&&(tu(e,n,Li,!0,r)&&(g?f=e.result:h=e.result),g||(Ht(e,s,d,c,f,h,i,o),c=f=h=null),Z(e,!0,-1),k=e.input.charCodeAt(e.position)),e.lineIndent>n&&k!==0)T(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return g&&Ht(e,s,d,c,f,null),b&&(e.tag=l,e.anchor=a,e.kind="mapping",e.result=s),b}function fx(e){var n,t=!1,u=!1,r,i,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&T(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(t=!0,o=e.input.charCodeAt(++e.position)):o===33?(u=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",n=e.position,t){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(i=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):T(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!_e(o);)o===33&&(u?T(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(n-1,e.position+1),pp.test(r)||T(e,"named tag handle cannot contain such characters"),u=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);i=e.input.slice(n,e.position),ex.test(i)&&T(e,"tag suffix cannot contain flow indicator characters")}return i&&!hp.test(i)&&T(e,"tag name cannot contain such characters: "+i),t?e.tag=i:Jn.call(e.tagMap,r)?e.tag=e.tagMap[r]+i:r==="!"?e.tag="!"+i:r==="!!"?e.tag="tag:yaml.org,2002:"+i:T(e,'undeclared tag handle "'+r+'"'),!0}function px(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&T(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!_e(t)&&!Bt(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&T(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function hx(e){var n,t,u;if(u=e.input.charCodeAt(e.position),u!==42)return!1;for(u=e.input.charCodeAt(++e.position),n=e.position;u!==0&&!_e(u)&&!Bt(u);)u=e.input.charCodeAt(++e.position);return e.position===n&&T(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),Jn.call(e.anchorMap,t)||T(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Z(e,!0,-1),!0}function tu(e,n,t,u,r){var i,o,l,a=1,s=!1,d=!1,c,f,h,g,b;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=o=l=Li===t||fp===t,u&&Z(e,!0,-1)&&(s=!0,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)),a===1)for(;fx(e)||px(e);)Z(e,!0,-1)?(s=!0,l=i,e.lineIndent>n?a=1:e.lineIndent===n?a=0:e.lineIndent<n&&(a=-1)):l=!1;if(l&&(l=s||r),(a===1||Li===t)&&(Ri===t||dp===t?g=n:g=n+1,b=e.position-e.lineStart,a===1?l&&(Uc(e,b)||dx(e,b,g))||sx(e,g)?d=!0:(o&&cx(e,g)||lx(e,g)||ax(e,g)?d=!0:hx(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&T(e,"alias node should not have any properties")):ox(e,g,Ri===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):a===0&&(d=l&&Uc(e,b))),e.tag!==null&&e.tag!=="!")if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&T(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,f=e.implicitTypes.length;c<f;c+=1)if(h=e.implicitTypes[c],h.resolve(e.result)){e.result=h.construct(e.result),e.tag=h.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else Jn.call(e.typeMap[e.kind||"fallback"],e.tag)?(h=e.typeMap[e.kind||"fallback"][e.tag],e.result!==null&&h.kind!==e.kind&&T(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+h.kind+'", not "'+e.kind+'"'),h.resolve(e.result)?(e.result=h.construct(e.result),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):T(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):T(e,"unknown tag !<"+e.tag+">");return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function mx(e){var n=e.position,t,u,r,i=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};(o=e.input.charCodeAt(e.position))!==0&&(Z(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(i=!0,o=e.input.charCodeAt(++e.position),t=e.position;o!==0&&!_e(o);)o=e.input.charCodeAt(++e.position);for(u=e.input.slice(t,e.position),r=[],u.length<1&&T(e,"directive name must not be less than one character in length");o!==0;){for(;ht(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!on(o));break}if(on(o))break;for(t=e.position;o!==0&&!_e(o);)o=e.input.charCodeAt(++e.position);r.push(e.input.slice(t,e.position))}o!==0&&os(e),Jn.call(Hc,u)?Hc[u](e,u,r):Oi(e,'unknown document directive "'+u+'"')}if(Z(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Z(e,!0,-1)):i&&T(e,"directives end mark is expected"),tu(e,e.lineIndent-1,Li,!1,!0),Z(e,!0,-1),e.checkLineBreaks&&X3.test(e.input.slice(n,e.position))&&Oi(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&io(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Z(e,!0,-1));return}if(e.position<e.length-1)T(e,"end of the stream or a document separator is expected");else return}function xp(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new ix(e,n),u=e.indexOf("\0");for(u!==-1&&(t.position=u,T(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)mx(t);return t.documents}function vp(e,n,t){n!==null&&typeof n=="object"&&typeof t>"u"&&(t=n,n=null);var u=xp(e,t);if(typeof n!="function")return u;for(var r=0,i=u.length;r<i;r+=1)n(u[r])}function bp(e,n){var t=xp(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new sp("expected a single document in the stream, but found more")}}function gx(e,n,t){return typeof n=="object"&&n!==null&&typeof t>"u"&&(t=n,n=null),vp(e,n,gn.extend({schema:cp},t))}function yx(e,n){return bp(e,gn.extend({schema:cp},n))}gr.loadAll=vp;gr.load=bp;gr.safeLoadAll=gx;gr.safeLoad=yx;var as={},vr=$e,br=yr,xx=ro,vx=xr,kp=Object.prototype.toString,wp=Object.prototype.hasOwnProperty,bx=9,ur=10,kx=13,wx=32,_x=33,Sx=34,_p=35,Cx=37,Ex=38,Ax=39,Dx=42,Sp=44,Fx=45,Cp=58,Tx=61,Px=62,Nx=63,Ix=64,Ep=91,Ap=93,Rx=96,Dp=123,Lx=124,Fp=125,me={};me[0]="\\0";me[7]="\\a";me[8]="\\b";me[9]="\\t";me[10]="\\n";me[11]="\\v";me[12]="\\f";me[13]="\\r";me[27]="\\e";me[34]='\\"';me[92]="\\\\";me[133]="\\N";me[160]="\\_";me[8232]="\\L";me[8233]="\\P";var Ox=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function Mx(e,n){var t,u,r,i,o,l,a;if(n===null)return{};for(t={},u=Object.keys(n),r=0,i=u.length;r<i;r+=1)o=u[r],l=String(n[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),a=e.compiledTypeMap.fallback[o],a&&wp.call(a.styleAliases,l)&&(l=a.styleAliases[l]),t[o]=l;return t}function qc(e){var n,t,u;if(n=e.toString(16).toUpperCase(),e<=255)t="x",u=2;else if(e<=65535)t="u",u=4;else if(e<=4294967295)t="U",u=8;else throw new br("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+vr.repeat("0",u-n.length)+n}function jx(e){this.schema=e.schema||xx,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=vr.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Mx(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Wc(e,n){for(var t=vr.repeat(" ",n),u=0,r=-1,i="",o,l=e.length;u<l;)r=e.indexOf(`
`,u),r===-1?(o=e.slice(u),u=l):(o=e.slice(u,r+1),u=r+1),o.length&&o!==`
`&&(i+=t),i+=o;return i}function Jl(e,n){return`
`+vr.repeat(" ",e.indent*n)}function zx(e,n){var t,u,r;for(t=0,u=e.implicitTypes.length;t<u;t+=1)if(r=e.implicitTypes[t],r.resolve(n))return!0;return!1}function ss(e){return e===wx||e===bx}function uu(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==65279||65536<=e&&e<=1114111}function Bx(e){return uu(e)&&!ss(e)&&e!==65279&&e!==kx&&e!==ur}function Gc(e,n){return uu(e)&&e!==65279&&e!==Sp&&e!==Ep&&e!==Ap&&e!==Dp&&e!==Fp&&e!==Cp&&(e!==_p||n&&Bx(n))}function Hx(e){return uu(e)&&e!==65279&&!ss(e)&&e!==Fx&&e!==Nx&&e!==Cp&&e!==Sp&&e!==Ep&&e!==Ap&&e!==Dp&&e!==Fp&&e!==_p&&e!==Ex&&e!==Dx&&e!==_x&&e!==Lx&&e!==Tx&&e!==Px&&e!==Ax&&e!==Sx&&e!==Cx&&e!==Ix&&e!==Rx}function Tp(e){var n=/^\n* /;return n.test(e)}var Pp=1,Np=2,Ip=3,Rp=4,li=5;function $x(e,n,t,u,r){var i,o,l,a=!1,s=!1,d=u!==-1,c=-1,f=Hx(e.charCodeAt(0))&&!ss(e.charCodeAt(e.length-1));if(n)for(i=0;i<e.length;i++){if(o=e.charCodeAt(i),!uu(o))return li;l=i>0?e.charCodeAt(i-1):null,f=f&&Gc(o,l)}else{for(i=0;i<e.length;i++){if(o=e.charCodeAt(i),o===ur)a=!0,d&&(s=s||i-c-1>u&&e[c+1]!==" ",c=i);else if(!uu(o))return li;l=i>0?e.charCodeAt(i-1):null,f=f&&Gc(o,l)}s=s||d&&i-c-1>u&&e[c+1]!==" "}return!a&&!s?f&&!r(e)?Pp:Np:t>9&&Tp(e)?li:s?Rp:Ip}function Ux(e,n,t,u){e.dump=function(){if(n.length===0)return"''";if(!e.noCompatMode&&Ox.indexOf(n)!==-1)return"'"+n+"'";var r=e.indent*Math.max(1,t),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-r),o=u||e.flowLevel>-1&&t>=e.flowLevel;function l(a){return zx(e,a)}switch($x(n,o,e.indent,i,l)){case Pp:return n;case Np:return"'"+n.replace(/'/g,"''")+"'";case Ip:return"|"+Vc(n,e.indent)+Kc(Wc(n,r));case Rp:return">"+Vc(n,e.indent)+Kc(Wc(qx(n,i),r));case li:return'"'+Wx(n)+'"';default:throw new br("impossible error: invalid scalar style")}}()}function Vc(e,n){var t=Tp(e)?String(n):"",u=e[e.length-1]===`
`,r=u&&(e[e.length-2]===`
`||e===`
`),i=r?"+":u?"":"-";return t+i+`
`}function Kc(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function qx(e,n){for(var t=/(\n+)([^\n]*)/g,u=function(){var s=e.indexOf(`
`);return s=s!==-1?s:e.length,t.lastIndex=s,Yc(e.slice(0,s),n)}(),r=e[0]===`
`||e[0]===" ",i,o;o=t.exec(e);){var l=o[1],a=o[2];i=a[0]===" ",u+=l+(!r&&!i&&a!==""?`
`:"")+Yc(a,n),r=i}return u}function Yc(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,u,r=0,i,o=0,l=0,a="";u=t.exec(e);)l=u.index,l-r>n&&(i=o>r?o:l,a+=`
`+e.slice(r,i),r=i+1),o=l;return a+=`
`,e.length-r>n&&o>r?a+=e.slice(r,o)+`
`+e.slice(o+1):a+=e.slice(r),a.slice(1)}function Wx(e){for(var n="",t,u,r,i=0;i<e.length;i++){if(t=e.charCodeAt(i),t>=55296&&t<=56319&&(u=e.charCodeAt(i+1),u>=56320&&u<=57343)){n+=qc((t-55296)*1024+u-56320+65536),i++;continue}r=me[t],n+=!r&&uu(t)?e[i]:r||qc(t)}return n}function Gx(e,n,t){var u="",r=e.tag,i,o;for(i=0,o=t.length;i<o;i+=1)bt(e,n,t[i],!1,!1)&&(i!==0&&(u+=","+(e.condenseFlow?"":" ")),u+=e.dump);e.tag=r,e.dump="["+u+"]"}function Vx(e,n,t,u){var r="",i=e.tag,o,l;for(o=0,l=t.length;o<l;o+=1)bt(e,n+1,t[o],!0,!0)&&((!u||o!==0)&&(r+=Jl(e,n)),e.dump&&ur===e.dump.charCodeAt(0)?r+="-":r+="- ",r+=e.dump);e.tag=i,e.dump=r||"[]"}function Kx(e,n,t){var u="",r=e.tag,i=Object.keys(t),o,l,a,s,d;for(o=0,l=i.length;o<l;o+=1)d="",o!==0&&(d+=", "),e.condenseFlow&&(d+='"'),a=i[o],s=t[a],bt(e,n,a,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),bt(e,n,s,!1,!1)&&(d+=e.dump,u+=d));e.tag=r,e.dump="{"+u+"}"}function Yx(e,n,t,u){var r="",i=e.tag,o=Object.keys(t),l,a,s,d,c,f;if(e.sortKeys===!0)o.sort();else if(typeof e.sortKeys=="function")o.sort(e.sortKeys);else if(e.sortKeys)throw new br("sortKeys must be a boolean or a function");for(l=0,a=o.length;l<a;l+=1)f="",(!u||l!==0)&&(f+=Jl(e,n)),s=o[l],d=t[s],bt(e,n+1,s,!0,!0,!0)&&(c=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,c&&(e.dump&&ur===e.dump.charCodeAt(0)?f+="?":f+="? "),f+=e.dump,c&&(f+=Jl(e,n)),bt(e,n+1,d,!0,c)&&(e.dump&&ur===e.dump.charCodeAt(0)?f+=":":f+=": ",f+=e.dump,r+=f));e.tag=i,e.dump=r||"{}"}function Qc(e,n,t){var u,r,i,o,l,a;for(r=t?e.explicitTypes:e.implicitTypes,i=0,o=r.length;i<o;i+=1)if(l=r[i],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(e.tag=t?l.tag:"?",l.represent){if(a=e.styleMap[l.tag]||l.defaultStyle,kp.call(l.represent)==="[object Function]")u=l.represent(n,a);else if(wp.call(l.represent,a))u=l.represent[a](n,a);else throw new br("!<"+l.tag+'> tag resolver accepts not "'+a+'" style');e.dump=u}return!0}return!1}function bt(e,n,t,u,r,i){e.tag=null,e.dump=t,Qc(e,t,!1)||Qc(e,t,!0);var o=kp.call(e.dump);u&&(u=e.flowLevel<0||e.flowLevel>n);var l=o==="[object Object]"||o==="[object Array]",a,s;if(l&&(a=e.duplicates.indexOf(t),s=a!==-1),(e.tag!==null&&e.tag!=="?"||s||e.indent!==2&&n>0)&&(r=!1),s&&e.usedDuplicates[a])e.dump="*ref_"+a;else{if(l&&s&&!e.usedDuplicates[a]&&(e.usedDuplicates[a]=!0),o==="[object Object]")u&&Object.keys(e.dump).length!==0?(Yx(e,n,e.dump,r),s&&(e.dump="&ref_"+a+e.dump)):(Kx(e,n,e.dump),s&&(e.dump="&ref_"+a+" "+e.dump));else if(o==="[object Array]"){var d=e.noArrayIndent&&n>0?n-1:n;u&&e.dump.length!==0?(Vx(e,d,e.dump,r),s&&(e.dump="&ref_"+a+e.dump)):(Gx(e,d,e.dump),s&&(e.dump="&ref_"+a+" "+e.dump))}else if(o==="[object String]")e.tag!=="?"&&Ux(e,e.dump,n,i);else{if(e.skipInvalid)return!1;throw new br("unacceptable kind of an object to dump "+o)}e.tag!==null&&e.tag!=="?"&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function Qx(e,n){var t=[],u=[],r,i;for(Zl(e,t,u),r=0,i=u.length;r<i;r+=1)n.duplicates.push(t[u[r]]);n.usedDuplicates=new Array(i)}function Zl(e,n,t){var u,r,i;if(e!==null&&typeof e=="object")if(r=n.indexOf(e),r!==-1)t.indexOf(r)===-1&&t.push(r);else if(n.push(e),Array.isArray(e))for(r=0,i=e.length;r<i;r+=1)Zl(e[r],n,t);else for(u=Object.keys(e),r=0,i=u.length;r<i;r+=1)Zl(e[u[r]],n,t)}function Lp(e,n){n=n||{};var t=new jx(n);return t.noRefs||Qx(e,t),bt(t,0,e,!0,!0)?t.dump+`
`:""}function Jx(e,n){return Lp(e,vr.extend({schema:vx},n))}as.dump=Lp;as.safeDump=Jx;var oo=gr,Op=as;function lo(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}K.Type=le;K.Schema=fu;K.FAILSAFE_SCHEMA=rs;K.JSON_SCHEMA=rp;K.CORE_SCHEMA=ip;K.DEFAULT_SAFE_SCHEMA=xr;K.DEFAULT_FULL_SCHEMA=ro;K.load=oo.load;K.loadAll=oo.loadAll;K.safeLoad=oo.safeLoad;K.safeLoadAll=oo.safeLoadAll;K.dump=Op.dump;K.safeDump=Op.safeDump;K.YAMLException=yr;K.MINIMAL_SCHEMA=rs;K.SAFE_SCHEMA=xr;K.DEFAULT_SCHEMA=ro;K.scan=lo("scan");K.parse=lo("parse");K.compose=lo("compose");K.addConstructor=lo("addConstructor");var Zx=K,Xx=Zx,Jc=Xx,ev="\\ufeff?",nv=typeof process<"u"?process.platform:"",tv="^("+ev+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(nv==="win32"?"\\r?":"")+"(?:\\n)?)",Mp=new RegExp(tv,"m");ts.exports=uv;ts.exports.test=ov;function uv(e,n){e=e||"";var t={allowUnsafe:!1};n=n instanceof Object?{...t,...n}:t,n.allowUnsafe=!!n.allowUnsafe;var u=e.split(/(\r?\n)/);return u[0]&&/= yaml =|---/.test(u[0])?iv(e,n.allowUnsafe):{attributes:{},body:e,bodyBegin:1}}function rv(e,n){for(var t=1,u=n.indexOf(`
`),r=e.index+e[0].length;u!==-1;){if(u>=r)return t;t++,u=n.indexOf(`
`,u+1)}return t}function iv(e,n){var t=Mp.exec(e);if(!t)return{attributes:{},body:e,bodyBegin:1};var u=n?Jc.load:Jc.safeLoad,r=t[t.length-1].replace(/^\s+|\s+$/g,""),i=u(r)||{},o=e.replace(t[0],""),l=rv(t,e);return{attributes:i,body:o,bodyBegin:l,frontmatter:r}}function ov(e){return e=e||"",Mp.test(e)}var lv=ts.exports;const jp=sh(lv),Zc={};function av(e){let n=Zc[e];if(n)return n;n=Zc[e]=[];for(let t=0;t<128;t++){const u=String.fromCharCode(t);n.push(u)}for(let t=0;t<e.length;t++){const u=e.charCodeAt(t);n[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return n}function ru(e,n){typeof n!="string"&&(n=ru.defaultChars);const t=av(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let r="";for(let i=0,o=u.length;i<o;i+=3){const l=parseInt(u.slice(i+1,i+3),16);if(l<128){r+=t[l];continue}if((l&224)===192&&i+3<o){const a=parseInt(u.slice(i+4,i+6),16);if((a&192)===128){const s=l<<6&1984|a&63;s<128?r+="��":r+=String.fromCharCode(s),i+=3;continue}}if((l&240)===224&&i+6<o){const a=parseInt(u.slice(i+4,i+6),16),s=parseInt(u.slice(i+7,i+9),16);if((a&192)===128&&(s&192)===128){const d=l<<12&61440|a<<6&4032|s&63;d<2048||d>=55296&&d<=57343?r+="���":r+=String.fromCharCode(d),i+=6;continue}}if((l&248)===240&&i+9<o){const a=parseInt(u.slice(i+4,i+6),16),s=parseInt(u.slice(i+7,i+9),16),d=parseInt(u.slice(i+10,i+12),16);if((a&192)===128&&(s&192)===128&&(d&192)===128){let c=l<<18&1835008|a<<12&258048|s<<6&4032|d&63;c<65536||c>1114111?r+="����":(c-=65536,r+=String.fromCharCode(55296+(c>>10),56320+(c&1023))),i+=9;continue}}r+="�"}return r})}ru.defaultChars=";/?:@&=+$,#";ru.componentChars="";const Xc={};function sv(e){let n=Xc[e];if(n)return n;n=Xc[e]=[];for(let t=0;t<128;t++){const u=String.fromCharCode(t);/^[0-9a-z]$/i.test(u)?n.push(u):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function kr(e,n,t){typeof n!="string"&&(t=n,n=kr.defaultChars),typeof t>"u"&&(t=!0);const u=sv(n);let r="";for(let i=0,o=e.length;i<o;i++){const l=e.charCodeAt(i);if(t&&l===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){r+=e.slice(i,i+3),i+=2;continue}if(l<128){r+=u[l];continue}if(l>=55296&&l<=57343){if(l>=55296&&l<=56319&&i+1<o){const a=e.charCodeAt(i+1);if(a>=56320&&a<=57343){r+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[i])}return r}kr.defaultChars=";/?:@&=+$,-_.!~*'()#";kr.componentChars="-_.!~*'()";function cs(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function Mi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const cv=/^([a-z0-9.+-]+:)/i,dv=/:[0-9]*$/,fv=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,pv=["<",">",'"',"`"," ","\r",`
`,"	"],hv=["{","}","|","\\","^","`"].concat(pv),mv=["'"].concat(hv),e0=["%","/","?",";","#"].concat(mv),n0=["/","?","#"],gv=255,t0=/^[+a-z0-9A-Z_-]{0,63}$/,yv=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,u0={javascript:!0,"javascript:":!0},r0={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ds(e,n){if(e&&e instanceof Mi)return e;const t=new Mi;return t.parse(e,n),t}Mi.prototype.parse=function(e,n){let t,u,r,i=e;if(i=i.trim(),!n&&e.split("#").length===1){const s=fv.exec(i);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}let o=cv.exec(i);if(o&&(o=o[0],t=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(n||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=i.substr(0,2)==="//",r&&!(o&&u0[o])&&(i=i.substr(2),this.slashes=!0)),!u0[o]&&(r||o&&!r0[o])){let s=-1;for(let g=0;g<n0.length;g++)u=i.indexOf(n0[g]),u!==-1&&(s===-1||u<s)&&(s=u);let d,c;s===-1?c=i.lastIndexOf("@"):c=i.lastIndexOf("@",s),c!==-1&&(d=i.slice(0,c),i=i.slice(c+1),this.auth=d),s=-1;for(let g=0;g<e0.length;g++)u=i.indexOf(e0[g]),u!==-1&&(s===-1||u<s)&&(s=u);s===-1&&(s=i.length),i[s-1]===":"&&s--;const f=i.slice(0,s);i=i.slice(s),this.parseHost(f),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const g=this.hostname.split(/\./);for(let b=0,k=g.length;b<k;b++){const y=g[b];if(y&&!y.match(t0)){let p="";for(let m=0,v=y.length;m<v;m++)y.charCodeAt(m)>127?p+="x":p+=y[m];if(!p.match(t0)){const m=g.slice(0,b),v=g.slice(b+1),_=y.match(yv);_&&(m.push(_[1]),v.unshift(_[2])),v.length&&(i=v.join(".")+i),this.hostname=m.join(".");break}}}}this.hostname.length>gv&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const l=i.indexOf("#");l!==-1&&(this.hash=i.substr(l),i=i.slice(0,l));const a=i.indexOf("?");return a!==-1&&(this.search=i.substr(a),i=i.slice(0,a)),i&&(this.pathname=i),r0[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Mi.prototype.parseHost=function(e){let n=dv.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const xv=Object.freeze(Object.defineProperty({__proto__:null,decode:ru,encode:kr,format:cs,parse:ds},Symbol.toStringTag,{value:"Module"})),zp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Bp=/[\0-\x1F\x7F-\x9F]/,vv=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,fs=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Hp=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,$p=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,bv=Object.freeze(Object.defineProperty({__proto__:null,Any:zp,Cc:Bp,Cf:vv,P:fs,S:Hp,Z:$p},Symbol.toStringTag,{value:"Module"})),kv=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),wv=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var qo;const _v=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Sv=(qo=String.fromCodePoint)!==null&&qo!==void 0?qo:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function Cv(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=_v.get(e))!==null&&n!==void 0?n:e}var ie;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ie||(ie={}));const Ev=32;var jn;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(jn||(jn={}));function Xl(e){return e>=ie.ZERO&&e<=ie.NINE}function Av(e){return e>=ie.UPPER_A&&e<=ie.UPPER_F||e>=ie.LOWER_A&&e<=ie.LOWER_F}function Dv(e){return e>=ie.UPPER_A&&e<=ie.UPPER_Z||e>=ie.LOWER_A&&e<=ie.LOWER_Z||Xl(e)}function Fv(e){return e===ie.EQUALS||Dv(e)}var ue;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(ue||(ue={}));var Ln;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Ln||(Ln={}));class Tv{constructor(n,t,u){this.decodeTree=n,this.emitCodePoint=t,this.errors=u,this.state=ue.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Ln.Strict}startEntity(n){this.decodeMode=n,this.state=ue.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case ue.EntityStart:return n.charCodeAt(t)===ie.NUM?(this.state=ue.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=ue.NamedEntity,this.stateNamedEntity(n,t));case ue.NumericStart:return this.stateNumericStart(n,t);case ue.NumericDecimal:return this.stateNumericDecimal(n,t);case ue.NumericHex:return this.stateNumericHex(n,t);case ue.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|Ev)===ie.LOWER_X?(this.state=ue.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=ue.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,u,r){if(t!==u){const i=u-t;this.result=this.result*Math.pow(r,i)+parseInt(n.substr(t,i),r),this.consumed+=i}}stateNumericHex(n,t){const u=t;for(;t<n.length;){const r=n.charCodeAt(t);if(Xl(r)||Av(r))t+=1;else return this.addToNumericResult(n,u,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(n,u,t,16),-1}stateNumericDecimal(n,t){const u=t;for(;t<n.length;){const r=n.charCodeAt(t);if(Xl(r))t+=1;else return this.addToNumericResult(n,u,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(n,u,t,10),-1}emitNumericEntity(n,t){var u;if(this.consumed<=t)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===ie.SEMI)this.consumed+=1;else if(this.decodeMode===Ln.Strict)return 0;return this.emitCodePoint(Cv(this.result),this.consumed),this.errors&&(n!==ie.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:u}=this;let r=u[this.treeIndex],i=(r&jn.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const o=n.charCodeAt(t);if(this.treeIndex=Pv(u,r,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===Ln.Attribute&&(i===0||Fv(o))?0:this.emitNotTerminatedNamedEntity();if(r=u[this.treeIndex],i=(r&jn.VALUE_LENGTH)>>14,i!==0){if(o===ie.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Ln.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:u}=this,r=(u[t]&jn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,u){const{decodeTree:r}=this;return this.emitCodePoint(t===1?r[n]&~jn.VALUE_LENGTH:r[n+1],u),t===3&&this.emitCodePoint(r[n+2],u),u}end(){var n;switch(this.state){case ue.NamedEntity:return this.result!==0&&(this.decodeMode!==Ln.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case ue.NumericDecimal:return this.emitNumericEntity(0,2);case ue.NumericHex:return this.emitNumericEntity(0,3);case ue.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case ue.EntityStart:return 0}}}function Up(e){let n="";const t=new Tv(e,u=>n+=Sv(u));return function(r,i){let o=0,l=0;for(;(l=r.indexOf("&",l))>=0;){n+=r.slice(o,l),t.startEntity(i);const s=t.write(r,l+1);if(s<0){o=l+t.end();break}o=l+s,l=s===0?o+1:o}const a=n+r.slice(o);return n="",a}}function Pv(e,n,t,u){const r=(n&jn.BRANCH_LENGTH)>>7,i=n&jn.JUMP_TABLE;if(r===0)return i!==0&&u===i?t:-1;if(i){const a=u-i;return a<0||a>=r?-1:e[t+a]-1}let o=t,l=o+r-1;for(;o<=l;){const a=o+l>>>1,s=e[a];if(s<u)o=a+1;else if(s>u)l=a-1;else return e[a+r]}return-1}const Nv=Up(kv);Up(wv);function qp(e,n=Ln.Legacy){return Nv(e,n)}function Iv(e){return Object.prototype.toString.call(e)}function ps(e){return Iv(e)==="[object String]"}const Rv=Object.prototype.hasOwnProperty;function Lv(e,n){return Rv.call(e,n)}function ao(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(u){e[u]=t[u]})}}),e}function Wp(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function hs(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function ji(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const Gp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ov=/&([a-z#][a-z0-9]{1,31});/gi,Mv=new RegExp(Gp.source+"|"+Ov.source,"gi"),jv=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function zv(e,n){if(n.charCodeAt(0)===35&&jv.test(n)){const u=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return hs(u)?ji(u):e}const t=qp(e);return t!==e?t:e}function Bv(e){return e.indexOf("\\")<0?e:e.replace(Gp,"$1")}function iu(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Mv,function(n,t,u){return t||zv(n,u)})}const Hv=/[&<>"]/,$v=/[&<>"]/g,Uv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function qv(e){return Uv[e]}function Zn(e){return Hv.test(e)?e.replace($v,qv):e}const Wv=/[.?*+^$[\]\\(){}|-]/g;function Gv(e){return e.replace(Wv,"\\$&")}function z(e){switch(e){case 9:case 32:return!0}return!1}function rr(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function ir(e){return fs.test(e)||Hp.test(e)}function or(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function so(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const Vv={mdurl:xv,ucmicro:bv},Kv=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Wp,assign:ao,escapeHtml:Zn,escapeRE:Gv,fromCodePoint:ji,has:Lv,isMdAsciiPunct:or,isPunctChar:ir,isSpace:z,isString:ps,isValidEntityCode:hs,isWhiteSpace:rr,lib:Vv,normalizeReference:so,unescapeAll:iu,unescapeMd:Bv},Symbol.toStringTag,{value:"Module"}));function Yv(e,n,t){let u,r,i,o;const l=e.posMax,a=e.pos;for(e.pos=n+1,u=1;e.pos<l;){if(i=e.src.charCodeAt(e.pos),i===93&&(u--,u===0)){r=!0;break}if(o=e.pos,e.md.inline.skipToken(e),i===91){if(o===e.pos-1)u++;else if(t)return e.pos=a,-1}}let s=-1;return r&&(s=e.pos),e.pos=a,s}function Qv(e,n,t){let u,r=n;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<t;){if(u=e.charCodeAt(r),u===10||u===60)return i;if(u===62)return i.pos=r+1,i.str=iu(e.slice(n+1,r)),i.ok=!0,i;if(u===92&&r+1<t){r+=2;continue}r++}return i}let o=0;for(;r<t&&(u=e.charCodeAt(r),!(u===32||u<32||u===127));){if(u===92&&r+1<t){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(u===40&&(o++,o>32))return i;if(u===41){if(o===0)break;o--}r++}return n===r||o!==0||(i.str=iu(e.slice(n,r)),i.pos=r,i.ok=!0),i}function Jv(e,n,t,u){let r,i=n;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)o.str=u.str,o.marker=u.marker;else{if(i>=t)return o;let l=e.charCodeAt(i);if(l!==34&&l!==39&&l!==40)return o;n++,i++,l===40&&(l=41),o.marker=l}for(;i<t;){if(r=e.charCodeAt(i),r===o.marker)return o.pos=i+1,o.str+=iu(e.slice(n,i)),o.ok=!0,o;if(r===40&&o.marker===41)return o;r===92&&i+1<t&&i++,i++}return o.can_continue=!0,o.str+=iu(e.slice(n,i)),o}const Zv=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Qv,parseLinkLabel:Yv,parseLinkTitle:Jv},Symbol.toStringTag,{value:"Module"})),fn={};fn.code_inline=function(e,n,t,u,r){const i=e[n];return"<code"+r.renderAttrs(i)+">"+Zn(i.content)+"</code>"};fn.code_block=function(e,n,t,u,r){const i=e[n];return"<pre"+r.renderAttrs(i)+"><code>"+Zn(e[n].content)+`</code></pre>
`};fn.fence=function(e,n,t,u,r){const i=e[n],o=i.info?iu(i.info).trim():"";let l="",a="";if(o){const d=o.split(/(\s+)/g);l=d[0],a=d.slice(2).join("")}let s;if(t.highlight?s=t.highlight(i.content,l,a)||Zn(i.content):s=Zn(i.content),s.indexOf("<pre")===0)return s+`
`;if(o){const d=i.attrIndex("class"),c=i.attrs?i.attrs.slice():[];d<0?c.push(["class",t.langPrefix+l]):(c[d]=c[d].slice(),c[d][1]+=" "+t.langPrefix+l);const f={attrs:c};return`<pre><code${r.renderAttrs(f)}>${s}</code></pre>
`}return`<pre><code${r.renderAttrs(i)}>${s}</code></pre>
`};fn.image=function(e,n,t,u,r){const i=e[n];return i.attrs[i.attrIndex("alt")][1]=r.renderInlineAsText(i.children,t,u),r.renderToken(e,n,t)};fn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};fn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};fn.text=function(e,n){return Zn(e[n].content)};fn.html_block=function(e,n){return e[n].content};fn.html_inline=function(e,n){return e[n].content};function pu(){this.rules=ao({},fn)}pu.prototype.renderAttrs=function(n){let t,u,r;if(!n.attrs)return"";for(r="",t=0,u=n.attrs.length;t<u;t++)r+=" "+Zn(n.attrs[t][0])+'="'+Zn(n.attrs[t][1])+'"';return r};pu.prototype.renderToken=function(n,t,u){const r=n[t];let i="";if(r.hidden)return"";r.block&&r.nesting!==-1&&t&&n[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?"</":"<")+r.tag,i+=this.renderAttrs(r),r.nesting===0&&u.xhtmlOut&&(i+=" /");let o=!1;if(r.block&&(o=!0,r.nesting===1&&t+1<n.length)){const l=n[t+1];(l.type==="inline"||l.hidden||l.nesting===-1&&l.tag===r.tag)&&(o=!1)}return i+=o?`>
`:">",i};pu.prototype.renderInline=function(e,n,t){let u="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const l=e[i].type;typeof r[l]<"u"?u+=r[l](e,i,n,t,this):u+=this.renderToken(e,i,n)}return u};pu.prototype.renderInlineAsText=function(e,n,t){let u="";for(let r=0,i=e.length;r<i;r++)switch(e[r].type){case"text":u+=e[r].content;break;case"image":u+=this.renderInlineAsText(e[r].children,n,t);break;case"html_inline":case"html_block":u+=e[r].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};pu.prototype.render=function(e,n,t){let u="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const l=e[i].type;l==="inline"?u+=this.renderInline(e[i].children,n,t):typeof r[l]<"u"?u+=r[l](e,i,n,t,this):u+=this.renderToken(e,i,n,t)}return u};function Ae(){this.__rules__=[],this.__cache__=null}Ae.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};Ae.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(u){n.indexOf(u)<0&&n.push(u)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(u){u.enabled&&(t&&u.alt.indexOf(t)<0||e.__cache__[t].push(u.fn))})})};Ae.prototype.at=function(e,n,t){const u=this.__find__(e),r=t||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=n,this.__rules__[u].alt=r.alt||[],this.__cache__=null};Ae.prototype.before=function(e,n,t,u){const r=this.__find__(e),i=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Ae.prototype.after=function(e,n,t,u){const r=this.__find__(e),i=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:n,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Ae.prototype.push=function(e,n,t){const u=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:u.alt||[]}),this.__cache__=null};Ae.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(n)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!0,t.push(u)},this),this.__cache__=null,t};Ae.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};Ae.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(n)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!1,t.push(u)},this),this.__cache__=null,t};Ae.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Je(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Je.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let u=0,r=t.length;u<r;u++)if(t[u][0]===n)return u;return-1};Je.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Je.prototype.attrSet=function(n,t){const u=this.attrIndex(n),r=[n,t];u<0?this.attrPush(r):this.attrs[u]=r};Je.prototype.attrGet=function(n){const t=this.attrIndex(n);let u=null;return t>=0&&(u=this.attrs[t][1]),u};Je.prototype.attrJoin=function(n,t){const u=this.attrIndex(n);u<0?this.attrPush([n,t]):this.attrs[u][1]=this.attrs[u][1]+" "+t};function Vp(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}Vp.prototype.Token=Je;const Xv=/\r\n?|\n/g,e6=/\0/g;function n6(e){let n;n=e.src.replace(Xv,`
`),n=n.replace(e6,"�"),e.src=n}function t6(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function u6(e){const n=e.tokens;for(let t=0,u=n.length;t<u;t++){const r=n[t];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function r6(e){return/^<a[>\s]/i.test(e)}function i6(e){return/^<\/a\s*>/i.test(e)}function o6(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,u=n.length;t<u;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let r=n[t].children,i=0;for(let o=r.length-1;o>=0;o--){const l=r[o];if(l.type==="link_close"){for(o--;r[o].level!==l.level&&r[o].type!=="link_open";)o--;continue}if(l.type==="html_inline"&&(r6(l.content)&&i>0&&i--,i6(l.content)&&i++),!(i>0)&&l.type==="text"&&e.md.linkify.test(l.content)){const a=l.content;let s=e.md.linkify.match(a);const d=[];let c=l.level,f=0;s.length>0&&s[0].index===0&&o>0&&r[o-1].type==="text_special"&&(s=s.slice(1));for(let h=0;h<s.length;h++){const g=s[h].url,b=e.md.normalizeLink(g);if(!e.md.validateLink(b))continue;let k=s[h].text;s[h].schema?s[h].schema==="mailto:"&&!/^mailto:/i.test(k)?k=e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):k=e.md.normalizeLinkText(k):k=e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,"");const y=s[h].index;if(y>f){const _=new e.Token("text","",0);_.content=a.slice(f,y),_.level=c,d.push(_)}const p=new e.Token("link_open","a",1);p.attrs=[["href",b]],p.level=c++,p.markup="linkify",p.info="auto",d.push(p);const m=new e.Token("text","",0);m.content=k,m.level=c,d.push(m);const v=new e.Token("link_close","a",-1);v.level=--c,v.markup="linkify",v.info="auto",d.push(v),f=s[h].lastIndex}if(f<a.length){const h=new e.Token("text","",0);h.content=a.slice(f),h.level=c,d.push(h)}n[t].children=r=Wp(r,o,d)}}}}const Kp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,l6=/\((c|tm|r)\)/i,a6=/\((c|tm|r)\)/ig,s6={c:"©",r:"®",tm:"™"};function c6(e,n){return s6[n.toLowerCase()]}function d6(e){let n=0;for(let t=e.length-1;t>=0;t--){const u=e[t];u.type==="text"&&!n&&(u.content=u.content.replace(a6,c6)),u.type==="link_open"&&u.info==="auto"&&n--,u.type==="link_close"&&u.info==="auto"&&n++}}function f6(e){let n=0;for(let t=e.length-1;t>=0;t--){const u=e[t];u.type==="text"&&!n&&Kp.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&n--,u.type==="link_close"&&u.info==="auto"&&n++}}function p6(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(l6.test(e.tokens[n].content)&&d6(e.tokens[n].children),Kp.test(e.tokens[n].content)&&f6(e.tokens[n].children))}const h6=/['"]/,i0=/['"]/g,o0="’";function qr(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function m6(e,n){let t;const u=[];for(let r=0;r<e.length;r++){const i=e[r],o=e[r].level;for(t=u.length-1;t>=0&&!(u[t].level<=o);t--);if(u.length=t+1,i.type!=="text")continue;let l=i.content,a=0,s=l.length;e:for(;a<s;){i0.lastIndex=a;const d=i0.exec(l);if(!d)break;let c=!0,f=!0;a=d.index+1;const h=d[0]==="'";let g=32;if(d.index-1>=0)g=l.charCodeAt(d.index-1);else for(t=r-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){g=e[t].content.charCodeAt(e[t].content.length-1);break}let b=32;if(a<s)b=l.charCodeAt(a);else for(t=r+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){b=e[t].content.charCodeAt(0);break}const k=or(g)||ir(String.fromCharCode(g)),y=or(b)||ir(String.fromCharCode(b)),p=rr(g),m=rr(b);if(m?c=!1:y&&(p||k||(c=!1)),p?f=!1:k&&(m||y||(f=!1)),b===34&&d[0]==='"'&&g>=48&&g<=57&&(f=c=!1),c&&f&&(c=k,f=y),!c&&!f){h&&(i.content=qr(i.content,d.index,o0));continue}if(f)for(t=u.length-1;t>=0;t--){let v=u[t];if(u[t].level<o)break;if(v.single===h&&u[t].level===o){v=u[t];let _,S;h?(_=n.md.options.quotes[2],S=n.md.options.quotes[3]):(_=n.md.options.quotes[0],S=n.md.options.quotes[1]),i.content=qr(i.content,d.index,S),e[v.token].content=qr(e[v.token].content,v.pos,_),a+=S.length-1,v.token===r&&(a+=_.length-1),l=i.content,s=l.length,u.length=t;continue e}}c?u.push({token:r,pos:d.index,single:h,level:o}):f&&h&&(i.content=qr(i.content,d.index,o0))}}}function g6(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!h6.test(e.tokens[n].content)||m6(e.tokens[n].children,e)}function y6(e){let n,t;const u=e.tokens,r=u.length;for(let i=0;i<r;i++){if(u[i].type!=="inline")continue;const o=u[i].children,l=o.length;for(n=0;n<l;n++)o[n].type==="text_special"&&(o[n].type="text");for(n=t=0;n<l;n++)o[n].type==="text"&&n+1<l&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==t&&(o[t]=o[n]),t++);n!==t&&(o.length=t)}}const Wo=[["normalize",n6],["block",t6],["inline",u6],["linkify",o6],["replacements",p6],["smartquotes",g6],["text_join",y6]];function ms(){this.ruler=new Ae;for(let e=0;e<Wo.length;e++)this.ruler.push(Wo[e][0],Wo[e][1])}ms.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,u=n.length;t<u;t++)n[t](e)};ms.prototype.State=Vp;function pn(e,n,t,u){this.src=e,this.md=n,this.env=t,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let i=0,o=0,l=0,a=0,s=r.length,d=!1;o<s;o++){const c=r.charCodeAt(o);if(!d)if(z(c)){l++,c===9?a+=4-a%4:a++;continue}else d=!0;(c===10||o===s-1)&&(c!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(l),this.sCount.push(a),this.bsCount.push(0),d=!1,l=0,a=0,i=o+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}pn.prototype.push=function(e,n,t){const u=new Je(e,n,t);return u.block=!0,t<0&&this.level--,u.level=this.level,t>0&&this.level++,this.tokens.push(u),u};pn.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};pn.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};pn.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const u=this.src.charCodeAt(n);if(!z(u))break}return n};pn.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!z(this.src.charCodeAt(--n)))return n+1;return n};pn.prototype.skipChars=function(n,t){for(let u=this.src.length;n<u&&this.src.charCodeAt(n)===t;n++);return n};pn.prototype.skipCharsBack=function(n,t,u){if(n<=u)return n;for(;n>u;)if(t!==this.src.charCodeAt(--n))return n+1;return n};pn.prototype.getLines=function(n,t,u,r){if(n>=t)return"";const i=new Array(t-n);for(let o=0,l=n;l<t;l++,o++){let a=0;const s=this.bMarks[l];let d=s,c;for(l+1<t||r?c=this.eMarks[l]+1:c=this.eMarks[l];d<c&&a<u;){const f=this.src.charCodeAt(d);if(z(f))f===9?a+=4-(a+this.bsCount[l])%4:a++;else if(d-s<this.tShift[l])a++;else break;d++}a>u?i[o]=new Array(a-u+1).join(" ")+this.src.slice(d,c):i[o]=this.src.slice(d,c)}return i.join("")};pn.prototype.Token=Je;const x6=65536;function Go(e,n){const t=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];return e.src.slice(t,u)}function l0(e){const n=[],t=e.length;let u=0,r=e.charCodeAt(u),i=!1,o=0,l="";for(;u<t;)r===124&&(i?(l+=e.substring(o,u-1),o=u):(n.push(l+e.substring(o,u)),l="",o=u+1)),i=r===92,u++,r=e.charCodeAt(u);return n.push(l+e.substring(o)),n}function v6(e,n,t,u){if(n+2>t)return!1;let r=n+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let i=e.bMarks[r]+e.tShift[r];if(i>=e.eMarks[r])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=e.eMarks[r])return!1;const l=e.src.charCodeAt(i++);if(l!==124&&l!==45&&l!==58&&!z(l)||o===45&&z(l))return!1;for(;i<e.eMarks[r];){const v=e.src.charCodeAt(i);if(v!==124&&v!==45&&v!==58&&!z(v))return!1;i++}let a=Go(e,n+1),s=a.split("|");const d=[];for(let v=0;v<s.length;v++){const _=s[v].trim();if(!_){if(v===0||v===s.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;_.charCodeAt(_.length-1)===58?d.push(_.charCodeAt(0)===58?"center":"right"):_.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=Go(e,n).trim(),a.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;s=l0(a),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop();const c=s.length;if(c===0||c!==d.length)return!1;if(u)return!0;const f=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),g=e.push("table_open","table",1),b=[n,0];g.map=b;const k=e.push("thead_open","thead",1);k.map=[n,n+1];const y=e.push("tr_open","tr",1);y.map=[n,n+1];for(let v=0;v<s.length;v++){const _=e.push("th_open","th",1);d[v]&&(_.attrs=[["style","text-align:"+d[v]]]);const S=e.push("inline","",0);S.content=s[v].trim(),S.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let p,m=0;for(r=n+2;r<t&&!(e.sCount[r]<e.blkIndent);r++){let v=!1;for(let S=0,E=h.length;S<E;S++)if(h[S](e,r,t,!0)){v=!0;break}if(v||(a=Go(e,r).trim(),!a)||e.sCount[r]-e.blkIndent>=4||(s=l0(a),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop(),m+=c-s.length,m>x6))break;if(r===n+2){const S=e.push("tbody_open","tbody",1);S.map=p=[n+2,0]}const _=e.push("tr_open","tr",1);_.map=[r,r+1];for(let S=0;S<c;S++){const E=e.push("td_open","td",1);d[S]&&(E.attrs=[["style","text-align:"+d[S]]]);const A=e.push("inline","",0);A.content=s[S]?s[S].trim():"",A.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return p&&(e.push("tbody_close","tbody",-1),p[1]=r),e.push("table_close","table",-1),b[1]=r,e.parentType=f,e.line=r,!0}function b6(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let u=n+1,r=u;for(;u<t;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,r=u;continue}break}e.line=r;const i=e.push("code_block","code",0);return i.content=e.getLines(n,r,4+e.blkIndent,!1)+`
`,i.map=[n,e.line],!0}function k6(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||r+3>i)return!1;const o=e.src.charCodeAt(r);if(o!==126&&o!==96)return!1;let l=r;r=e.skipChars(r,o);let a=r-l;if(a<3)return!1;const s=e.src.slice(l,r),d=e.src.slice(r,i);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(u)return!0;let c=n,f=!1;for(;c++,!(c>=t||(r=l=e.bMarks[c]+e.tShift[c],i=e.eMarks[c],r<i&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(r)===o&&!(e.sCount[c]-e.blkIndent>=4)&&(r=e.skipChars(r,o),!(r-l<a)&&(r=e.skipSpaces(r),!(r<i)))){f=!0;break}a=e.sCount[n],e.line=c+(f?1:0);const h=e.push("fence","code",0);return h.info=d,h.content=e.getLines(n+1,c,a,!0),h.markup=s,h.map=[n,e.line],!0}function w6(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];const o=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(u)return!0;const l=[],a=[],s=[],d=[],c=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let h=!1,g;for(g=n;g<t;g++){const m=e.sCount[g]<e.blkIndent;if(r=e.bMarks[g]+e.tShift[g],i=e.eMarks[g],r>=i)break;if(e.src.charCodeAt(r++)===62&&!m){let _=e.sCount[g]+1,S,E;e.src.charCodeAt(r)===32?(r++,_++,E=!1,S=!0):e.src.charCodeAt(r)===9?(S=!0,(e.bsCount[g]+_)%4===3?(r++,_++,E=!1):E=!0):S=!1;let A=_;for(l.push(e.bMarks[g]),e.bMarks[g]=r;r<i;){const N=e.src.charCodeAt(r);if(z(N))N===9?A+=4-(A+e.bsCount[g]+(E?1:0))%4:A++;else break;r++}h=r>=i,a.push(e.bsCount[g]),e.bsCount[g]=e.sCount[g]+1+(S?1:0),s.push(e.sCount[g]),e.sCount[g]=A-_,d.push(e.tShift[g]),e.tShift[g]=r-e.bMarks[g];continue}if(h)break;let v=!1;for(let _=0,S=c.length;_<S;_++)if(c[_](e,g,t,!0)){v=!0;break}if(v){e.lineMax=g,e.blkIndent!==0&&(l.push(e.bMarks[g]),a.push(e.bsCount[g]),d.push(e.tShift[g]),s.push(e.sCount[g]),e.sCount[g]-=e.blkIndent);break}l.push(e.bMarks[g]),a.push(e.bsCount[g]),d.push(e.tShift[g]),s.push(e.sCount[g]),e.sCount[g]=-1}const b=e.blkIndent;e.blkIndent=0;const k=e.push("blockquote_open","blockquote",1);k.markup=">";const y=[n,0];k.map=y,e.md.block.tokenize(e,n,g);const p=e.push("blockquote_close","blockquote",-1);p.markup=">",e.lineMax=o,e.parentType=f,y[1]=e.line;for(let m=0;m<d.length;m++)e.bMarks[m+n]=l[m],e.tShift[m+n]=d[m],e.sCount[m+n]=s[m],e.bsCount[m+n]=a[m];return e.blkIndent=b,!0}function _6(e,n,t,u){const r=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let i=e.bMarks[n]+e.tShift[n];const o=e.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let l=1;for(;i<r;){const s=e.src.charCodeAt(i++);if(s!==o&&!z(s))return!1;s===o&&l++}if(l<3)return!1;if(u)return!0;e.line=n+1;const a=e.push("hr","hr",0);return a.map=[n,e.line],a.markup=Array(l+1).join(String.fromCharCode(o)),!0}function a0(e,n){const t=e.eMarks[n];let u=e.bMarks[n]+e.tShift[n];const r=e.src.charCodeAt(u++);if(r!==42&&r!==45&&r!==43)return-1;if(u<t){const i=e.src.charCodeAt(u);if(!z(i))return-1}return u}function s0(e,n){const t=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];let r=t;if(r+1>=u)return-1;let i=e.src.charCodeAt(r++);if(i<48||i>57)return-1;for(;;){if(r>=u)return-1;if(i=e.src.charCodeAt(r++),i>=48&&i<=57){if(r-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return r<u&&(i=e.src.charCodeAt(r),!z(i))?-1:r}function S6(e,n){const t=e.level+2;for(let u=n+2,r=e.tokens.length-2;u<r;u++)e.tokens[u].level===t&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function C6(e,n,t,u){let r,i,o,l,a=n,s=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let d=!1;u&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(d=!0);let c,f,h;if((h=s0(e,a))>=0){if(c=!0,o=e.bMarks[a]+e.tShift[a],f=Number(e.src.slice(o,h-1)),d&&f!==1)return!1}else if((h=a0(e,a))>=0)c=!1;else return!1;if(d&&e.skipSpaces(h)>=e.eMarks[a])return!1;if(u)return!0;const g=e.src.charCodeAt(h-1),b=e.tokens.length;c?(l=e.push("ordered_list_open","ol",1),f!==1&&(l.attrs=[["start",f]])):l=e.push("bullet_list_open","ul",1);const k=[a,0];l.map=k,l.markup=String.fromCharCode(g);let y=!1;const p=e.md.block.ruler.getRules("list"),m=e.parentType;for(e.parentType="list";a<t;){i=h,r=e.eMarks[a];const v=e.sCount[a]+h-(e.bMarks[a]+e.tShift[a]);let _=v;for(;i<r;){const An=e.src.charCodeAt(i);if(An===9)_+=4-(_+e.bsCount[a])%4;else if(An===32)_++;else break;i++}const S=i;let E;S>=r?E=1:E=_-v,E>4&&(E=1);const A=v+E;l=e.push("list_item_open","li",1),l.markup=String.fromCharCode(g);const N=[a,0];l.map=N,c&&(l.info=e.src.slice(o,h-1));const P=e.tight,ne=e.tShift[a],tt=e.sCount[a],ut=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=A,e.tight=!0,e.tShift[a]=S-e.bMarks[a],e.sCount[a]=_,S>=r&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,a,t,!0),(!e.tight||y)&&(s=!1),y=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ut,e.tShift[a]=ne,e.sCount[a]=tt,e.tight=P,l=e.push("list_item_close","li",-1),l.markup=String.fromCharCode(g),a=e.line,N[1]=a,a>=t||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let hu=!1;for(let An=0,mu=p.length;An<mu;An++)if(p[An](e,a,t,!0)){hu=!0;break}if(hu)break;if(c){if(h=s0(e,a),h<0)break;o=e.bMarks[a]+e.tShift[a]}else if(h=a0(e,a),h<0)break;if(g!==e.src.charCodeAt(h-1))break}return c?l=e.push("ordered_list_close","ol",-1):l=e.push("bullet_list_close","ul",-1),l.markup=String.fromCharCode(g),k[1]=a,e.line=a,e.parentType=m,s&&S6(e,b),!0}function E6(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n],o=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function l(p){const m=e.lineMax;if(p>=m||e.isEmpty(p))return null;let v=!1;if(e.sCount[p]-e.blkIndent>3&&(v=!0),e.sCount[p]<0&&(v=!0),!v){const E=e.md.block.ruler.getRules("reference"),A=e.parentType;e.parentType="reference";let N=!1;for(let P=0,ne=E.length;P<ne;P++)if(E[P](e,p,m,!0)){N=!0;break}if(e.parentType=A,N)return null}const _=e.bMarks[p]+e.tShift[p],S=e.eMarks[p];return e.src.slice(_,S+1)}let a=e.src.slice(r,i+1);i=a.length;let s=-1;for(r=1;r<i;r++){const p=a.charCodeAt(r);if(p===91)return!1;if(p===93){s=r;break}else if(p===10){const m=l(o);m!==null&&(a+=m,i=a.length,o++)}else if(p===92&&(r++,r<i&&a.charCodeAt(r)===10)){const m=l(o);m!==null&&(a+=m,i=a.length,o++)}}if(s<0||a.charCodeAt(s+1)!==58)return!1;for(r=s+2;r<i;r++){const p=a.charCodeAt(r);if(p===10){const m=l(o);m!==null&&(a+=m,i=a.length,o++)}else if(!z(p))break}const d=e.md.helpers.parseLinkDestination(a,r,i);if(!d.ok)return!1;const c=e.md.normalizeLink(d.str);if(!e.md.validateLink(c))return!1;r=d.pos;const f=r,h=o,g=r;for(;r<i;r++){const p=a.charCodeAt(r);if(p===10){const m=l(o);m!==null&&(a+=m,i=a.length,o++)}else if(!z(p))break}let b=e.md.helpers.parseLinkTitle(a,r,i);for(;b.can_continue;){const p=l(o);if(p===null)break;a+=p,r=i,i=a.length,o++,b=e.md.helpers.parseLinkTitle(a,r,i,b)}let k;for(r<i&&g!==r&&b.ok?(k=b.str,r=b.pos):(k="",r=f,o=h);r<i;){const p=a.charCodeAt(r);if(!z(p))break;r++}if(r<i&&a.charCodeAt(r)!==10&&k)for(k="",r=f,o=h;r<i;){const p=a.charCodeAt(r);if(!z(p))break;r++}if(r<i&&a.charCodeAt(r)!==10)return!1;const y=so(a.slice(1,s));return y?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[y]>"u"&&(e.env.references[y]={title:k,href:c}),e.line=o),!0):!1}const A6=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],D6="[a-zA-Z_:][a-zA-Z0-9:._-]*",F6="[^\"'=<>`\\x00-\\x20]+",T6="'[^']*'",P6='"[^"]*"',N6="(?:"+F6+"|"+T6+"|"+P6+")",I6="(?:\\s+"+D6+"(?:\\s*=\\s*"+N6+")?)",Yp="<[A-Za-z][A-Za-z0-9\\-]*"+I6+"*\\s*\\/?>",Qp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",R6="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",L6="<[?][\\s\\S]*?[?]>",O6="<![A-Za-z][^>]*>",M6="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",j6=new RegExp("^(?:"+Yp+"|"+Qp+"|"+R6+"|"+L6+"|"+O6+"|"+M6+")"),z6=new RegExp("^(?:"+Yp+"|"+Qp+")"),Et=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+A6.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(z6.source+"\\s*$"),/^$/,!1]];function B6(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let o=e.src.slice(r,i),l=0;for(;l<Et.length&&!Et[l][0].test(o);l++);if(l===Et.length)return!1;if(u)return Et[l][2];let a=n+1;if(!Et[l][1].test(o)){for(;a<t&&!(e.sCount[a]<e.blkIndent);a++)if(r=e.bMarks[a]+e.tShift[a],i=e.eMarks[a],o=e.src.slice(r,i),Et[l][1].test(o)){o.length!==0&&a++;break}}e.line=a;const s=e.push("html_block","",0);return s.map=[n,a],s.content=e.getLines(n,a,e.blkIndent,!0),!0}function H6(e,n,t,u){let r=e.bMarks[n]+e.tShift[n],i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(r);if(o!==35||r>=i)return!1;let l=1;for(o=e.src.charCodeAt(++r);o===35&&r<i&&l<=6;)l++,o=e.src.charCodeAt(++r);if(l>6||r<i&&!z(o))return!1;if(u)return!0;i=e.skipSpacesBack(i,r);const a=e.skipCharsBack(i,35,r);a>r&&z(e.src.charCodeAt(a-1))&&(i=a),e.line=n+1;const s=e.push("heading_open","h"+String(l),1);s.markup="########".slice(0,l),s.map=[n,e.line];const d=e.push("inline","",0);d.content=e.src.slice(r,i).trim(),d.map=[n,e.line],d.children=[];const c=e.push("heading_close","h"+String(l),-1);return c.markup="########".slice(0,l),!0}function $6(e,n,t){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let i=0,o,l=n+1;for(;l<t&&!e.isEmpty(l);l++){if(e.sCount[l]-e.blkIndent>3)continue;if(e.sCount[l]>=e.blkIndent){let h=e.bMarks[l]+e.tShift[l];const g=e.eMarks[l];if(h<g&&(o=e.src.charCodeAt(h),(o===45||o===61)&&(h=e.skipChars(h,o),h=e.skipSpaces(h),h>=g))){i=o===61?1:2;break}}if(e.sCount[l]<0)continue;let f=!1;for(let h=0,g=u.length;h<g;h++)if(u[h](e,l,t,!0)){f=!0;break}if(f)break}if(!i)return!1;const a=e.getLines(n,l,e.blkIndent,!1).trim();e.line=l+1;const s=e.push("heading_open","h"+String(i),1);s.markup=String.fromCharCode(o),s.map=[n,e.line];const d=e.push("inline","",0);d.content=a,d.map=[n,e.line-1],d.children=[];const c=e.push("heading_close","h"+String(i),-1);return c.markup=String.fromCharCode(o),e.parentType=r,!0}function U6(e,n,t){const u=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let i=n+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let s=!1;for(let d=0,c=u.length;d<c;d++)if(u[d](e,i,t,!0)){s=!0;break}if(s)break}const o=e.getLines(n,i,e.blkIndent,!1).trim();e.line=i;const l=e.push("paragraph_open","p",1);l.map=[n,e.line];const a=e.push("inline","",0);return a.content=o,a.map=[n,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const Wr=[["table",v6,["paragraph","reference"]],["code",b6],["fence",k6,["paragraph","reference","blockquote","list"]],["blockquote",w6,["paragraph","reference","blockquote","list"]],["hr",_6,["paragraph","reference","blockquote","list"]],["list",C6,["paragraph","reference","blockquote"]],["reference",E6],["html_block",B6,["paragraph","reference","blockquote"]],["heading",H6,["paragraph","reference","blockquote"]],["lheading",$6],["paragraph",U6]];function co(){this.ruler=new Ae;for(let e=0;e<Wr.length;e++)this.ruler.push(Wr[e][0],Wr[e][1],{alt:(Wr[e][2]||[]).slice()})}co.prototype.tokenize=function(e,n,t){const u=this.ruler.getRules(""),r=u.length,i=e.md.options.maxNesting;let o=n,l=!1;for(;o<t&&(e.line=o=e.skipEmptyLines(o),!(o>=t||e.sCount[o]<e.blkIndent));){if(e.level>=i){e.line=t;break}const a=e.line;let s=!1;for(let d=0;d<r;d++)if(s=u[d](e,o,t,!1),s){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!s)throw new Error("none of the block rules matched");e.tight=!l,e.isEmpty(e.line-1)&&(l=!0),o=e.line,o<t&&e.isEmpty(o)&&(l=!0,o++,e.line=o)}};co.prototype.parse=function(e,n,t,u){if(!e)return;const r=new this.State(e,n,t,u);this.tokenize(r,r.line,r.lineMax)};co.prototype.State=pn;function wr(e,n,t,u){this.src=e,this.env=t,this.md=n,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}wr.prototype.pushPending=function(){const e=new Je("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};wr.prototype.push=function(e,n,t){this.pending&&this.pushPending();const u=new Je(e,n,t);let r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(r),u};wr.prototype.scanDelims=function(e,n){const t=this.posMax,u=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===u;)i++;const o=i-e,l=i<t?this.src.charCodeAt(i):32,a=or(r)||ir(String.fromCharCode(r)),s=or(l)||ir(String.fromCharCode(l)),d=rr(r),c=rr(l),f=!c&&(!s||d||a),h=!d&&(!a||c||s);return{can_open:f&&(n||!h||a),can_close:h&&(n||!f||s),length:o}};wr.prototype.Token=Je;function q6(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function W6(e,n){let t=e.pos;for(;t<e.posMax&&!q6(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const G6=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function V6(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,u=e.posMax;if(t+3>u||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const r=e.pending.match(G6);if(!r)return!1;const i=r[1],o=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!o)return!1;let l=o.url;if(l.length<=i.length)return!1;l=l.replace(/\*+$/,"");const a=e.md.normalizeLink(l);if(!e.md.validateLink(a))return!1;if(!n){e.pending=e.pending.slice(0,-i.length);const s=e.push("link_open","a",1);s.attrs=[["href",a]],s.markup="linkify",s.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(l);const c=e.push("link_close","a",-1);c.markup="linkify",c.info="auto"}return e.pos+=l.length-i.length,!0}function K6(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const u=e.pending.length-1,r=e.posMax;if(!n)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let i=u-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<r&&z(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const gs=[];for(let e=0;e<256;e++)gs.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){gs[e.charCodeAt(0)]=1});function Y6(e,n){let t=e.pos;const u=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=u))return!1;let r=e.src.charCodeAt(t);if(r===10){for(n||e.push("hardbreak","br",0),t++;t<u&&(r=e.src.charCodeAt(t),!!z(r));)t++;return e.pos=t,!0}let i=e.src[t];if(r>=55296&&r<=56319&&t+1<u){const l=e.src.charCodeAt(t+1);l>=56320&&l<=57343&&(i+=e.src[t+1],t++)}const o="\\"+i;if(!n){const l=e.push("text_special","",0);r<256&&gs[r]!==0?l.content=i:l.content=o,l.markup=o,l.info="escape"}return e.pos=t+1,!0}function Q6(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const r=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const o=e.src.slice(r,t),l=o.length;if(e.backticksScanned&&(e.backticks[l]||0)<=r)return n||(e.pending+=o),e.pos+=l,!0;let a=t,s;for(;(s=e.src.indexOf("`",a))!==-1;){for(a=s+1;a<i&&e.src.charCodeAt(a)===96;)a++;const d=a-s;if(d===l){if(!n){const c=e.push("code_inline","code",0);c.markup=o,c.content=e.src.slice(t,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[d]=s}return e.backticksScanned=!0,n||(e.pending+=o),e.pos+=l,!0}function J6(e,n){const t=e.pos,u=e.src.charCodeAt(t);if(n||u!==126)return!1;const r=e.scanDelims(e.pos,!0);let i=r.length;const o=String.fromCharCode(u);if(i<2)return!1;let l;i%2&&(l=e.push("text","",0),l.content=o,i--);for(let a=0;a<i;a+=2)l=e.push("text","",0),l.content=o+o,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function c0(e,n){let t;const u=[],r=n.length;for(let i=0;i<r;i++){const o=n[i];if(o.marker!==126||o.end===-1)continue;const l=n[o.end];t=e.tokens[o.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[l.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[l.token-1].type==="text"&&e.tokens[l.token-1].content==="~"&&u.push(l.token-1)}for(;u.length;){const i=u.pop();let o=i+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,i!==o&&(t=e.tokens[o],e.tokens[o]=e.tokens[i],e.tokens[i]=t)}}function Z6(e){const n=e.tokens_meta,t=e.tokens_meta.length;c0(e,e.delimiters);for(let u=0;u<t;u++)n[u]&&n[u].delimiters&&c0(e,n[u].delimiters)}const Jp={tokenize:J6,postProcess:Z6};function X6(e,n){const t=e.pos,u=e.src.charCodeAt(t);if(n||u!==95&&u!==42)return!1;const r=e.scanDelims(e.pos,u===42);for(let i=0;i<r.length;i++){const o=e.push("text","",0);o.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function d0(e,n){const t=n.length;for(let u=t-1;u>=0;u--){const r=n[u];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const i=n[r.end],o=u>0&&n[u-1].end===r.end+1&&n[u-1].marker===r.marker&&n[u-1].token===r.token-1&&n[r.end+1].token===i.token+1,l=String.fromCharCode(r.marker),a=e.tokens[r.token];a.type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?l+l:l,a.content="";const s=e.tokens[i.token];s.type=o?"strong_close":"em_close",s.tag=o?"strong":"em",s.nesting=-1,s.markup=o?l+l:l,s.content="",o&&(e.tokens[n[u-1].token].content="",e.tokens[n[r.end+1].token].content="",u--)}}function eb(e){const n=e.tokens_meta,t=e.tokens_meta.length;d0(e,e.delimiters);for(let u=0;u<t;u++)n[u]&&n[u].delimiters&&d0(e,n[u].delimiters)}const Zp={tokenize:X6,postProcess:eb};function nb(e,n){let t,u,r,i,o="",l="",a=e.pos,s=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,c=e.posMax,f=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let g=h+1;if(g<c&&e.src.charCodeAt(g)===40){for(s=!1,g++;g<c&&(t=e.src.charCodeAt(g),!(!z(t)&&t!==10));g++);if(g>=c)return!1;if(a=g,r=e.md.helpers.parseLinkDestination(e.src,g,e.posMax),r.ok){for(o=e.md.normalizeLink(r.str),e.md.validateLink(o)?g=r.pos:o="",a=g;g<c&&(t=e.src.charCodeAt(g),!(!z(t)&&t!==10));g++);if(r=e.md.helpers.parseLinkTitle(e.src,g,e.posMax),g<c&&a!==g&&r.ok)for(l=r.str,g=r.pos;g<c&&(t=e.src.charCodeAt(g),!(!z(t)&&t!==10));g++);}(g>=c||e.src.charCodeAt(g)!==41)&&(s=!0),g++}if(s){if(typeof e.env.references>"u")return!1;if(g<c&&e.src.charCodeAt(g)===91?(a=g+1,g=e.md.helpers.parseLinkLabel(e,g),g>=0?u=e.src.slice(a,g++):g=h+1):g=h+1,u||(u=e.src.slice(f,h)),i=e.env.references[so(u)],!i)return e.pos=d,!1;o=i.href,l=i.title}if(!n){e.pos=f,e.posMax=h;const b=e.push("link_open","a",1),k=[["href",o]];b.attrs=k,l&&k.push(["title",l]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=g,e.posMax=c,!0}function tb(e,n){let t,u,r,i,o,l,a,s,d="";const c=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,g=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(g<0)return!1;if(i=g+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(t=e.src.charCodeAt(i),!(!z(t)&&t!==10));i++);if(i>=f)return!1;for(s=i,l=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),l.ok&&(d=e.md.normalizeLink(l.str),e.md.validateLink(d)?i=l.pos:d=""),s=i;i<f&&(t=e.src.charCodeAt(i),!(!z(t)&&t!==10));i++);if(l=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&s!==i&&l.ok)for(a=l.str,i=l.pos;i<f&&(t=e.src.charCodeAt(i),!(!z(t)&&t!==10));i++);else a="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=c,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91?(s=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?r=e.src.slice(s,i++):i=g+1):i=g+1,r||(r=e.src.slice(h,g)),o=e.env.references[so(r)],!o)return e.pos=c,!1;d=o.href,a=o.title}if(!n){u=e.src.slice(h,g);const b=[];e.md.inline.parse(u,e.md,e.env,b);const k=e.push("image","img",0),y=[["src",d],["alt",""]];k.attrs=y,k.children=b,k.content=u,a&&y.push(["title",a])}return e.pos=i,e.posMax=f,!0}const ub=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,rb=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function ib(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const u=e.pos,r=e.posMax;for(;;){if(++t>=r)return!1;const o=e.src.charCodeAt(t);if(o===60)return!1;if(o===62)break}const i=e.src.slice(u+1,t);if(rb.test(i)){const o=e.md.normalizeLink(i);if(!e.md.validateLink(o))return!1;if(!n){const l=e.push("link_open","a",1);l.attrs=[["href",o]],l.markup="autolink",l.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(i);const s=e.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return e.pos+=i.length+2,!0}if(ub.test(i)){const o=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(o))return!1;if(!n){const l=e.push("link_open","a",1);l.attrs=[["href",o]],l.markup="autolink",l.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(i);const s=e.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return e.pos+=i.length+2,!0}return!1}function ob(e){return/^<a[>\s]/i.test(e)}function lb(e){return/^<\/a\s*>/i.test(e)}function ab(e){const n=e|32;return n>=97&&n<=122}function sb(e,n){if(!e.md.options.html)return!1;const t=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=t)return!1;const r=e.src.charCodeAt(u+1);if(r!==33&&r!==63&&r!==47&&!ab(r))return!1;const i=e.src.slice(u).match(j6);if(!i)return!1;if(!n){const o=e.push("html_inline","",0);o.content=i[0],ob(o.content)&&e.linkLevel++,lb(o.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const cb=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,db=/^&([a-z][a-z0-9]{1,31});/i;function fb(e,n){const t=e.pos,u=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=u)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(cb);if(i){if(!n){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),l=e.push("text_special","",0);l.content=hs(o)?ji(o):ji(65533),l.markup=i[0],l.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(db);if(i){const o=qp(i[0]);if(o!==i[0]){if(!n){const l=e.push("text_special","",0);l.content=o,l.markup=i[0],l.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function f0(e){const n={},t=e.length;if(!t)return;let u=0,r=-2;const i=[];for(let o=0;o<t;o++){const l=e[o];if(i.push(0),(e[u].marker!==l.marker||r!==l.token-1)&&(u=o),r=l.token,l.length=l.length||0,!l.close)continue;n.hasOwnProperty(l.marker)||(n[l.marker]=[-1,-1,-1,-1,-1,-1]);const a=n[l.marker][(l.open?3:0)+l.length%3];let s=u-i[u]-1,d=s;for(;s>a;s-=i[s]+1){const c=e[s];if(c.marker===l.marker&&c.open&&c.end<0){let f=!1;if((c.close||l.open)&&(c.length+l.length)%3===0&&(c.length%3!==0||l.length%3!==0)&&(f=!0),!f){const h=s>0&&!e[s-1].open?i[s-1]+1:0;i[o]=o-s+h,i[s]=h,l.open=!1,c.end=o,c.close=!1,d=-1,r=-2;break}}}d!==-1&&(n[l.marker][(l.open?3:0)+(l.length||0)%3]=d)}}function pb(e){const n=e.tokens_meta,t=e.tokens_meta.length;f0(e.delimiters);for(let u=0;u<t;u++)n[u]&&n[u].delimiters&&f0(n[u].delimiters)}function hb(e){let n,t,u=0;const r=e.tokens,i=e.tokens.length;for(n=t=0;n<i;n++)r[n].nesting<0&&u--,r[n].level=u,r[n].nesting>0&&u++,r[n].type==="text"&&n+1<i&&r[n+1].type==="text"?r[n+1].content=r[n].content+r[n+1].content:(n!==t&&(r[t]=r[n]),t++);n!==t&&(r.length=t)}const Vo=[["text",W6],["linkify",V6],["newline",K6],["escape",Y6],["backticks",Q6],["strikethrough",Jp.tokenize],["emphasis",Zp.tokenize],["link",nb],["image",tb],["autolink",ib],["html_inline",sb],["entity",fb]],Ko=[["balance_pairs",pb],["strikethrough",Jp.postProcess],["emphasis",Zp.postProcess],["fragments_join",hb]];function _r(){this.ruler=new Ae;for(let e=0;e<Vo.length;e++)this.ruler.push(Vo[e][0],Vo[e][1]);this.ruler2=new Ae;for(let e=0;e<Ko.length;e++)this.ruler2.push(Ko[e][0],Ko[e][1])}_r.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),u=t.length,r=e.md.options.maxNesting,i=e.cache;if(typeof i[n]<"u"){e.pos=i[n];return}let o=!1;if(e.level<r){for(let l=0;l<u;l++)if(e.level++,o=t[l](e,!0),e.level--,o){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,i[n]=e.pos};_r.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,u=e.posMax,r=e.md.options.maxNesting;for(;e.pos<u;){const i=e.pos;let o=!1;if(e.level<r){for(let l=0;l<t;l++)if(o=n[l](e,!1),o){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};_r.prototype.parse=function(e,n,t,u){const r=new this.State(e,n,t,u);this.tokenize(r);const i=this.ruler2.getRules(""),o=i.length;for(let l=0;l<o;l++)i[l](r)};_r.prototype.State=wr;function mb(e){const n={};e=e||{},n.src_Any=zp.source,n.src_Cc=Bp.source,n.src_Z=$p.source,n.src_P=fs.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function ea(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(u){e[u]=t[u]})}),e}function fo(e){return Object.prototype.toString.call(e)}function gb(e){return fo(e)==="[object String]"}function yb(e){return fo(e)==="[object Object]"}function xb(e){return fo(e)==="[object RegExp]"}function p0(e){return fo(e)==="[object Function]"}function vb(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Xp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function bb(e){return Object.keys(e||{}).reduce(function(n,t){return n||Xp.hasOwnProperty(t)},!1)}const kb={"http:":{validate:function(e,n,t){const u=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(u)?u.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const u=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(u)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:u.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const u=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(u)?u.match(t.re.mailto)[0].length:0}}},wb="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",_b="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Sb(e){e.__index__=-1,e.__text_cache__=""}function Cb(e){return function(n,t){const u=n.slice(t);return e.test(u)?u.match(e)[0].length:0}}function h0(){return function(e,n){n.normalize(e)}}function zi(e){const n=e.re=mb(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(wb),t.push(n.src_xn),n.src_tlds=t.join("|");function u(l){return l.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(u(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(u(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(u(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(u(n.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function i(l,a){throw new Error('(LinkifyIt) Invalid schema "'+l+'": '+a)}Object.keys(e.__schemas__).forEach(function(l){const a=e.__schemas__[l];if(a===null)return;const s={validate:null,link:null};if(e.__compiled__[l]=s,yb(a)){xb(a.validate)?s.validate=Cb(a.validate):p0(a.validate)?s.validate=a.validate:i(l,a),p0(a.normalize)?s.normalize=a.normalize:a.normalize?i(l,a):s.normalize=h0();return}if(gb(a)){r.push(l);return}i(l,a)}),r.forEach(function(l){e.__compiled__[e.__schemas__[l]]&&(e.__compiled__[l].validate=e.__compiled__[e.__schemas__[l]].validate,e.__compiled__[l].normalize=e.__compiled__[e.__schemas__[l]].normalize)}),e.__compiled__[""]={validate:null,normalize:h0()};const o=Object.keys(e.__compiled__).filter(function(l){return l.length>0&&e.__compiled__[l]}).map(vb).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Sb(e)}function Eb(e,n){const t=e.__index__,u=e.__last_index__,r=e.__text_cache__.slice(t,u);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=u+n,this.raw=r,this.text=r,this.url=r}function na(e,n){const t=new Eb(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function Ne(e,n){if(!(this instanceof Ne))return new Ne(e,n);n||bb(e)&&(n=e,e={}),this.__opts__=ea({},Xp,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ea({},kb,e),this.__compiled__={},this.__tlds__=_b,this.__tlds_replaced__=!1,this.re={},zi(this)}Ne.prototype.add=function(n,t){return this.__schemas__[n]=t,zi(this),this};Ne.prototype.set=function(n){return this.__opts__=ea(this.__opts__,n),this};Ne.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,u,r,i,o,l,a,s,d;if(this.re.schema_test.test(n)){for(a=this.re.schema_search,a.lastIndex=0;(t=a.exec(n))!==null;)if(i=this.testSchemaAt(n,t[2],a.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(s=n.search(this.re.host_fuzzy_test),s>=0&&(this.__index__<0||s<this.__index__)&&(u=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=u.index+u[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=u.index+u[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=n.indexOf("@"),d>=0&&(r=n.match(this.re.email_fuzzy))!==null&&(o=r.index+r[1].length,l=r.index+r[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&l>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=l))),this.__index__>=0};Ne.prototype.pretest=function(n){return this.re.pretest.test(n)};Ne.prototype.testSchemaAt=function(n,t,u){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,u,this):0};Ne.prototype.match=function(n){const t=[];let u=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(na(this,u)),u=this.__last_index__);let r=u?n.slice(u):n;for(;this.test(r);)t.push(na(this,u)),r=r.slice(this.__last_index__),u+=this.__last_index__;return t.length?t:null};Ne.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const u=this.testSchemaAt(n,t[2],t[0].length);return u?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+u,na(this,0)):null};Ne.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(u,r,i){return u!==i[r-1]}).reverse(),zi(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,zi(this),this)};Ne.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};Ne.prototype.onCompile=function(){};const Kt=2147483647,nn=36,ys=1,lr=26,Ab=38,Db=700,eh=72,nh=128,th="-",Fb=/^xn--/,Tb=/[^\0-\x7F]/,Pb=/[\x2E\u3002\uFF0E\uFF61]/g,Nb={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Yo=nn-ys,tn=Math.floor,Qo=String.fromCharCode;function Nn(e){throw new RangeError(Nb[e])}function Ib(e,n){const t=[];let u=e.length;for(;u--;)t[u]=n(e[u]);return t}function uh(e,n){const t=e.split("@");let u="";t.length>1&&(u=t[0]+"@",e=t[1]),e=e.replace(Pb,".");const r=e.split("."),i=Ib(r,n).join(".");return u+i}function Rb(e){const n=[];let t=0;const u=e.length;for(;t<u;){const r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<u){const i=e.charCodeAt(t++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}const Lb=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:nn},m0=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},rh=function(e,n,t){let u=0;for(e=t?tn(e/Db):e>>1,e+=tn(e/n);e>Yo*lr>>1;u+=nn)e=tn(e/Yo);return tn(u+(Yo+1)*e/(e+Ab))},Ob=function(e){const n=[],t=e.length;let u=0,r=nh,i=eh,o=e.lastIndexOf(th);o<0&&(o=0);for(let l=0;l<o;++l)e.charCodeAt(l)>=128&&Nn("not-basic"),n.push(e.charCodeAt(l));for(let l=o>0?o+1:0;l<t;){const a=u;for(let d=1,c=nn;;c+=nn){l>=t&&Nn("invalid-input");const f=Lb(e.charCodeAt(l++));f>=nn&&Nn("invalid-input"),f>tn((Kt-u)/d)&&Nn("overflow"),u+=f*d;const h=c<=i?ys:c>=i+lr?lr:c-i;if(f<h)break;const g=nn-h;d>tn(Kt/g)&&Nn("overflow"),d*=g}const s=n.length+1;i=rh(u-a,s,a==0),tn(u/s)>Kt-r&&Nn("overflow"),r+=tn(u/s),u%=s,n.splice(u++,0,r)}return String.fromCodePoint(...n)},Mb=function(e){const n=[];e=Rb(e);const t=e.length;let u=nh,r=0,i=eh;for(const a of e)a<128&&n.push(Qo(a));const o=n.length;let l=o;for(o&&n.push(th);l<t;){let a=Kt;for(const d of e)d>=u&&d<a&&(a=d);const s=l+1;a-u>tn((Kt-r)/s)&&Nn("overflow"),r+=(a-u)*s,u=a;for(const d of e)if(d<u&&++r>Kt&&Nn("overflow"),d===u){let c=r;for(let f=nn;;f+=nn){const h=f<=i?ys:f>=i+lr?lr:f-i;if(c<h)break;const g=c-h,b=nn-h;n.push(Qo(m0(h+g%b,0))),c=tn(g/b)}n.push(Qo(m0(c,0))),i=rh(r,s,l===o),r=0,++l}++r,++u}return n.join("")},jb=function(e){return uh(e,function(n){return Fb.test(n)?Ob(n.slice(4).toLowerCase()):n})},zb=function(e){return uh(e,function(n){return Tb.test(n)?"xn--"+Mb(n):n})},ih={toASCII:zb,toUnicode:jb},Bb={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Hb={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},$b={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Ub={default:Bb,zero:Hb,commonmark:$b},qb=/^(vbscript|javascript|file|data):/,Wb=/^data:image\/(gif|png|jpeg|webp);/;function Gb(e){const n=e.trim().toLowerCase();return qb.test(n)?Wb.test(n):!0}const oh=["http:","https:","mailto:"];function Vb(e){const n=ds(e,!0);if(n.hostname&&(!n.protocol||oh.indexOf(n.protocol)>=0))try{n.hostname=ih.toASCII(n.hostname)}catch{}return kr(cs(n))}function Kb(e){const n=ds(e,!0);if(n.hostname&&(!n.protocol||oh.indexOf(n.protocol)>=0))try{n.hostname=ih.toUnicode(n.hostname)}catch{}return ru(cs(n),ru.defaultChars+"%")}function He(e,n){if(!(this instanceof He))return new He(e,n);n||ps(e)||(n=e||{},e="default"),this.inline=new _r,this.block=new co,this.core=new ms,this.renderer=new pu,this.linkify=new Ne,this.validateLink=Gb,this.normalizeLink=Vb,this.normalizeLinkText=Kb,this.utils=Kv,this.helpers=ao({},Zv),this.options={},this.configure(e),n&&this.set(n)}He.prototype.set=function(e){return ao(this.options,e),this};He.prototype.configure=function(e){const n=this;if(ps(e)){const t=e;if(e=Ub[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};He.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(r){return t.indexOf(r)<0});if(u.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};He.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(r){return t.indexOf(r)<0});if(u.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};He.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};He.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};He.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};He.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};He.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};const Yb={"airgapped-supply-chain-trust":["/diagrams/airgapped-supply-chain-trust/0.svg","/diagrams/airgapped-supply-chain-trust/1.svg","/diagrams/airgapped-supply-chain-trust/2.svg","/diagrams/airgapped-supply-chain-trust/3.svg","/diagrams/airgapped-supply-chain-trust/4.svg","/diagrams/airgapped-supply-chain-trust/5.svg","/diagrams/airgapped-supply-chain-trust/6.svg"],"interacitve-computing-environments":["/diagrams/interacitve-computing-environments/0.svg"]};function lh(e){return typeof e=="string"?e.split("T")[0]:e instanceof Date?e.toISOString().split("T")[0]:String(e).split("T")[0]}function Qb(e,n="Diagram"){const t=n.replace(/"/g,"&quot;");return`<figure class="mermaid-figure"><img src="${e}" alt="${t}" class="mermaid-diagram" loading="lazy" /></figure>`}function Jb(e=[]){let n=0;const t=new He({html:!0,breaks:!0,linkify:!0,typographer:!0,highlight:function(r,i){return`<pre class="bg-gray-50 dark:bg-[#2a2a2a] p-4 rounded-lg overflow-x-auto"><code class="language-${i}">${r}</code></pre>`}}),u=t.renderer.rules.fence;return t.renderer.rules.fence=(r,i,o,l,a)=>{const s=r[i];if((s.info||"").trim().toLowerCase()==="mermaid"){const c=e[n++];return c?Qb(c):`<div class="mermaid">
${s.content}
</div>`}return u?u(r,i,o,l,a):a.renderToken(r,i,o)},t}function ah(e,n){const t=Yb[n]??[];return Jb(t).render(e)}async function Zb(){return Object.entries(Object.assign({"../content/blog/airgapped-supply-chain-trust.md":Qf,"../content/blog/blog-ssh-executor.md":Jf,"../content/blog/interacitve-computing-environments.md":Zf,"../content/blog/kriyanshii.md":Xf,"../content/blog/open-source-contributions.md":ep,"../content/blog/partial-success.md":np})).map(([t,u])=>{if(typeof u!="string")return console.error("Unexpected content type for",t),null;const i=(t.split("/").pop()||"").replace(/\.md$/,"");try{const{attributes:o,body:l}=jp(u);return{slug:i,title:o.title,date:lh(o.date),content:ah(l,i),description:o.description||l.slice(0,150)+"...",tag:o.tag,ogImage:o.ogImage,isNew:new Date(o.date)>new Date(Date.now()-7*24*60*60*1e3)}}catch(o){return console.error("Error processing",t,o),null}}).filter(t=>t!==null).sort((t,u)=>new Date(u.date).getTime()-new Date(t.date).getTime())}async function Xb(e){const n=Object.assign({"../content/blog/airgapped-supply-chain-trust.md":Qf,"../content/blog/blog-ssh-executor.md":Jf,"../content/blog/interacitve-computing-environments.md":Zf,"../content/blog/kriyanshii.md":Xf,"../content/blog/open-source-contributions.md":ep,"../content/blog/partial-success.md":np}),t=Object.keys(n).find(r=>r.includes(`${e}.md`));if(!t)return null;const u=n[t];if(typeof u!="string")return null;try{const{attributes:r,body:i}=jp(u);return{slug:e,title:r.title,date:lh(r.date),content:ah(i,e),description:r.description||i.slice(0,150)+"...",tag:r.tag,ogImage:r.ogImage,isNew:new Date(r.date)>new Date(Date.now()-7*24*60*60*1e3)}}catch(r){return console.error("Error processing",t,r),null}}function ek(){const[e,n]=w.useState([]),[t,u]=w.useState(new Set),r=l=>new Date(l).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});w.useEffect(()=>{const l=localStorage.getItem("visitedPosts");l&&u(new Set(JSON.parse(l)))},[]),w.useEffect(()=>{(async()=>{try{const a=await Zb();n(a)}catch(a){console.error("Error loading posts:",a)}})()},[]);const i=l=>{const a=new Set(t).add(l);u(a),localStorage.setItem("visitedPosts",JSON.stringify(Array.from(a)))},o=l=>{switch(l){case"Tech":return"bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";case"Life":return"bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300";case"Other":return"bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"}};return x.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[x.jsx(_t,{title:"Blog",description:"Thoughts and insights on software development, backend engineering, distributed systems, and interactive computing.",canonical:`${dn}/blog`,ogImage:du}),x.jsxs("header",{className:"mb-16",children:[x.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Blog"}),x.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Thoughts and insights on software development and backend engineering."})]}),x.jsx("div",{className:"divide-y divide-gray-100 dark:divide-gray-800",children:e.map(l=>x.jsx("article",{className:`py-6 first:pt-0 last:pb-0 group ${t.has(l.slug)?"opacity-75":""}`,children:x.jsx(an,{to:`/blog/${l.slug}`,onClick:()=>i(l.slug),className:"block group-hover:bg-white dark:group-hover:bg-[#242424] group-hover:shadow-sm rounded-lg transition-all p-4 -m-4",children:x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("span",{className:`inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-medium ${o(l.tag)}`,children:l.tag}),x.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2",children:[x.jsxs("h2",{className:`text-[15px] font-medium transition-colors ${t.has(l.slug)?"text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200":"dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"}`,children:[l.title,l.isNew&&x.jsx("span",{className:"ml-2 inline-block px-2 py-0.5 text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full leading-none",children:"NEW"})]}),x.jsx("time",{className:"text-sm text-gray-500 dark:text-gray-400 shrink-0",children:r(l.date)})]}),x.jsx("p",{className:"text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed",children:l.description})]})})},l.slug))})]})}function nk(){const{slug:e}=b2(),n=zf(),[t,u]=w.useState(null),[r,i]=w.useState(!0),o=l=>new Date(l).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return w.useEffect(()=>{(async()=>{if(!e){n("/blog");return}try{const a=await Xb(e);a?u(a):n("/blog")}catch(a){console.error("Error loading post:",a),n("/blog")}finally{i(!1)}})()},[e,n]),r?x.jsx("div",{className:"max-w-3xl mx-auto px-6 pb-16",children:x.jsx("p",{className:"text-[15px] text-gray-500 dark:text-gray-400",children:"Loading..."})}):t?x.jsxs("div",{className:"max-w-3xl mx-auto px-6 pb-16",children:[x.jsx(_t,{title:t.title,description:t.description,canonical:Vg(t.slug),ogType:"article",ogImage:Kg(t.slug,t.ogImage),publishedTime:t.date,author:Vl,tag:t.tag}),x.jsxs("header",{className:"mb-12 pb-8 border-b border-gray-100 dark:border-gray-800",children:[x.jsx("div",{className:"flex justify-end mb-6",children:x.jsxs(an,{to:"/blog",className:"inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 -mr-2.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-[#242424] hover:shadow-sm transition-all group",children:[x.jsx(kg,{size:14,className:"transition-transform group-hover:-translate-x-0.5"}),"Blog"]})}),x.jsx("h1",{className:"text-2xl font-medium mb-4 text-gray-900 dark:text-gray-100 leading-snug",children:t.title}),x.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 dark:text-gray-400",children:[x.jsx("time",{dateTime:t.date,children:o(t.date)}),x.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",children:t.tag})]})]}),x.jsx("article",{className:"prose max-w-none",children:x.jsx("div",{className:`text-[15px] text-gray-800 dark:text-gray-300 leading-relaxed
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
              [&>p>em]:block [&>p>em]:text-[13px] [&>p>em]:text-gray-500 [&>p>em]:dark:text-gray-400 [&>p>em]:not-italic [&>p>em]:mb-4`,dangerouslySetInnerHTML:{__html:t.content}})})]}):null}function tk(){return x.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[x.jsx(_t,{title:"Projects",description:"Side projects, open-source work, and systems built from scratch — distributed systems, tools, and interactive computing.",canonical:`${dn}/projects`,ogImage:du}),x.jsxs("header",{className:"mb-16",children:[x.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Projects"}),x.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Things I've built or contributed to — from workflow engines and MapReduce implementations to tools and games."})]}),x.jsx(Yl,{items:Kf,title:"projects"})]})}function uk(){return x.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[x.jsx(_t,{title:"Resume",description:"Resume of Kriyanshi — distributed systems, satellite data pipelines, JupyterHub platforms, and open-source contributions.",canonical:`${dn}/resume`,ogImage:du}),x.jsxs("header",{className:"mb-10",children:[x.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Resume"}),x.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Backend and infra engineer working on satellite data systems, interactive computing platforms, and open-source workflow tooling."})]}),x.jsxs("a",{href:ey,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow dark:text-gray-200",children:["View resume (PDF)",x.jsx(Ag,{size:14})]})]})}function rk(){return x.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[x.jsx(_t,{title:"Talks",description:"Conference talks and live sessions on JupyterHub, interactive computing, and backend systems for research teams.",canonical:`${dn}/talks`,ogImage:du}),x.jsxs("header",{className:"mb-16",children:[x.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Talks"}),x.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Presentations on interactive computing environments, open science infrastructure, and backend engineering for research teams."})]}),x.jsx("div",{className:"space-y-4",children:Yf.map(e=>x.jsx("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow",children:x.jsxs("div",{className:"flex items-start justify-between gap-4",children:[x.jsxs("div",{className:"flex-1",children:[x.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.title}),x.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:e.description}),x.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500",children:[x.jsx("span",{className:"px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full",children:e.tag}),x.jsx("span",{children:e.year})]})]}),x.jsxs("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"shrink-0 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors",children:[x.jsx(Gl,{size:16}),"Watch"]})]})},e.link))})]})}function ik(){return x.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[x.jsx(_t,{title:"Open Source",description:"Open-source contributions — Dagu workflow engine, Ray distributed computing, and backend engineering in the OSS ecosystem.",canonical:`${dn}/opensource`,ogImage:du}),x.jsxs("header",{className:"mb-16",children:[x.jsx("h1",{className:"text-2xl font-medium mb-4 dark:text-white",children:"Open Source"}),x.jsx("p",{className:"text-[15px] leading-relaxed text-gray-800 dark:text-gray-300",children:"Contributions to workflow orchestration, backend systems, and the broader OSS ecosystem — including PyData-adjacent infra work and distributed systems tooling."})]}),x.jsx("div",{className:"space-y-6",children:ty.map(e=>x.jsxs("article",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow",children:[x.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100 mb-2",children:e.project}),x.jsx("p",{className:"text-[15px] text-gray-700 dark:text-gray-300 mb-4",children:e.summary}),x.jsx("div",{className:"flex flex-wrap gap-4",children:e.links.map(n=>n.href.startsWith("/")?x.jsx(an,{to:n.href,className:"text-sm text-blue-600 dark:text-blue-400 hover:underline underline-offset-2",children:n.label},n.href):x.jsx("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-blue-600 dark:text-blue-400 hover:underline underline-offset-2",children:n.label},n.href))})]},e.project))})]})}function ok(){return x.jsx(Bg,{children:x.jsxs(ig,{children:[x.jsx(gg,{}),x.jsxs("div",{className:"relative min-h-screen bg-[#fafafa] dark:bg-[#1a1a1a] transition-colors duration-200",children:[x.jsx("div",{className:"fixed inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fafafa] dark:from-[#1a1a1a] to-transparent transform -translate-y-full"}),x.jsx("div",{className:"fixed inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent transform translate-y-full"}),x.jsx(Ug,{}),x.jsxs(L2,{children:[x.jsx(Fn,{path:"/",element:x.jsx(uy,{})}),x.jsx(Fn,{path:"/blog",element:x.jsx(ek,{})}),x.jsx(Fn,{path:"/blog/:slug",element:x.jsx(nk,{})}),x.jsx(Fn,{path:"/projects",element:x.jsx(tk,{})}),x.jsx(Fn,{path:"/resume",element:x.jsx(uk,{})}),x.jsx(Fn,{path:"/talks",element:x.jsx(rk,{})}),x.jsx(Fn,{path:"/opensource",element:x.jsx(ik,{})})]})]})]})})}Ff(document.getElementById("root")).render(x.jsx(w.StrictMode,{children:x.jsx(ok,{})}));
//# sourceMappingURL=index-k8N2Ax_T.js.map
