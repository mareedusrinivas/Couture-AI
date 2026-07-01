function cd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},Sl={},Fs={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),fd=Symbol.for("react.portal"),pd=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),wd=Symbol.for("react.memo"),kd=Symbol.for("react.lazy"),ga=Symbol.iterator;function Sd(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var As={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$s=Object.assign,Bs={};function mn(e,t,n){this.props=e,this.context=t,this.refs=Bs,this.updater=n||As}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vs(){}Vs.prototype=mn.prototype;function go(e,t,n){this.props=e,this.context=t,this.refs=Bs,this.updater=n||As}var vo=go.prototype=new Vs;vo.constructor=go;$s(vo,mn.prototype);vo.isPureReactComponent=!0;var va=Array.isArray,Ws=Object.prototype.hasOwnProperty,yo={current:null},Hs={key:!0,ref:!0,__self:!0,__source:!0};function Qs(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ws.call(t,r)&&!Hs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:fr,type:e,key:i,ref:o,props:l,_owner:yo.current}}function Nd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ya=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jd(""+e.key):t.toString(36)}function br(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fr:case fd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Wl(o,0):r,va(l)?(n="",e!=null&&(n=e.replace(ya,"$&/")+"/"),br(l,t,n,"",function(c){return c})):l!=null&&(xo(l)&&(l=Nd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ya,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",va(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Wl(i,s);o+=br(i,t,n,u,l)}else if(u=Sd(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Wl(i,s++),o+=br(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function xr(e,t,n){if(e==null)return e;var r=[],l=0;return br(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Dr={transition:null},Ed={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:yo};function Ks(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:xr,forEach:function(e,t,n){xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xr(e,function(){t++}),t},toArray:function(e){return xr(e,function(t){return t})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=mn;T.Fragment=pd;T.Profiler=md;T.PureComponent=go;T.StrictMode=hd;T.Suspense=xd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;T.act=Ks;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$s({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=yo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ws.call(t,u)&&!Hs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:fr,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gd,_context:e},e.Consumer=e};T.createElement=Qs;T.createFactory=function(e){var t=Qs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:yd,render:e}};T.isValidElement=xo;T.lazy=function(e){return{$$typeof:kd,_payload:{_status:-1,_result:e},_init:Cd}};T.memo=function(e,t){return{$$typeof:wd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};T.unstable_act=Ks;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Fs.exports=T;var w=Fs.exports;const Gs=dd(w),Pd=cd({__proto__:null,default:Gs},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=w,zd=Symbol.for("react.element"),Ld=Symbol.for("react.fragment"),Rd=Object.prototype.hasOwnProperty,Td=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Id={key:!0,ref:!0,__self:!0,__source:!0};function Ys(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Rd.call(t,r)&&!Id.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zd,type:e,key:i,ref:o,props:l,_owner:Td.current}}Sl.Fragment=Ld;Sl.jsx=Ys;Sl.jsxs=Ys;Us.exports=Sl;var a=Us.exports,vi={},Xs={exports:{}},Se={},Js={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var R=E.length;E.push(L);e:for(;0<R;){var K=R-1>>>1,q=E[K];if(0<l(q,L))E[K]=L,E[R]=q,R=K;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var K=0,q=E.length,vr=q>>>1;K<vr;){var Ct=2*(K+1)-1,Vl=E[Ct],Et=Ct+1,yr=E[Et];if(0>l(Vl,R))Et<q&&0>l(yr,Vl)?(E[K]=yr,E[Et]=R,K=Et):(E[K]=Vl,E[Ct]=R,K=Ct);else if(Et<q&&0>l(yr,R))E[K]=yr,E[Et]=R,K=Et;else break e}}return L}function l(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],m=1,p=null,g=3,x=!1,v=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=E)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function y(E){if(k=!1,h(E),!v)if(n(u)!==null)v=!0,$l(j);else{var L=n(c);L!==null&&Bl(y,L.startTime-E)}}function j(E,L){v=!1,k&&(k=!1,f(z),z=-1),x=!0;var R=g;try{for(h(L),p=n(u);p!==null&&(!(p.expirationTime>L)||E&&!Le());){var K=p.callback;if(typeof K=="function"){p.callback=null,g=p.priorityLevel;var q=K(p.expirationTime<=L);L=e.unstable_now(),typeof q=="function"?p.callback=q:p===n(u)&&r(u),h(L)}else r(u);p=n(u)}if(p!==null)var vr=!0;else{var Ct=n(c);Ct!==null&&Bl(y,Ct.startTime-L),vr=!1}return vr}finally{p=null,g=R,x=!1}}var P=!1,_=null,z=-1,Q=5,I=-1;function Le(){return!(e.unstable_now()-I<Q)}function kn(){if(_!==null){var E=e.unstable_now();I=E;var L=!0;try{L=_(!0,E)}finally{L?Sn():(P=!1,_=null)}}else P=!1}var Sn;if(typeof d=="function")Sn=function(){d(kn)};else if(typeof MessageChannel<"u"){var ma=new MessageChannel,ud=ma.port2;ma.port1.onmessage=kn,Sn=function(){ud.postMessage(null)}}else Sn=function(){N(kn,0)};function $l(E){_=E,P||(P=!0,Sn())}function Bl(E,L){z=N(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,$l(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var R=g;g=L;try{return E()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=g;g=E;try{return L()}finally{g=R}},e.unstable_scheduleCallback=function(E,L,R){var K=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,E={id:m++,callback:L,priorityLevel:E,startTime:R,expirationTime:q,sortIndex:-1},R>K?(E.sortIndex=R,t(c,E),n(u)===null&&E===n(c)&&(k?(f(z),z=-1):k=!0,Bl(y,R-K))):(E.sortIndex=q,t(u,E),v||x||(v=!0,$l(j))),E},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(E){var L=g;return function(){var R=g;g=L;try{return E.apply(this,arguments)}finally{g=R}}}})(Zs);Js.exports=Zs;var Od=Js.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=w,ke=Od;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qs=new Set,Qn={};function Ft(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)qs.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xa={},wa={};function Dd(e){return yi.call(wa,e)?!0:yi.call(xa,e)?!1:bd.test(e)?wa[e]=!0:(xa[e]=!0,!1)}function Ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,t,n,r){if(t===null||typeof t>"u"||Ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wo=/[\-:]([a-z])/g;function ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wo,ko);le[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wo,ko);le[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wo,ko);le[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function So(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fd(t,n,l,r)&&(n=null),r||l===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),No=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),eu=Symbol.for("react.provider"),tu=Symbol.for("react.context"),jo=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),Co=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),nu=Symbol.for("react.offscreen"),ka=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=ka&&e[ka]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Hl;function Rn(e){if(Hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hl=t&&t[1]||""}return`
`+Hl+e}var Ql=!1;function Kl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Ad(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case xi:return"Profiler";case No:return"StrictMode";case wi:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tu:return(e.displayName||"Context")+".Consumer";case eu:return(e._context.displayName||"Context")+".Provider";case jo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Co:return t=e.displayName||null,t!==null?t:Si(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Si(e(t))}catch{}}return null}function $d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(t);case 8:return t===No?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bd(e){var t=ru(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Bd(e))}function lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ru(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ni(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iu(e,t){t=t.checked,t!=null&&So(e,"checked",t,!1)}function ji(e,t){iu(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ci(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ci(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ja(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Tn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function ou(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function au(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?au(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function uu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function cu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=uu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _i(e,t){if(t){if(Wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function zi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,nn=null,rn=null;function Ea(e){if(e=mr(e)){if(typeof Ri!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Pl(t),Ri(e.stateNode,e.type,t))}}function du(e){nn?rn?rn.push(e):rn=[e]:nn=e}function fu(){if(nn){var e=nn,t=rn;if(rn=nn=null,Ea(e),t)for(e=0;e<t.length;e++)Ea(t[e])}}function pu(e,t){return e(t)}function hu(){}var Gl=!1;function mu(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return pu(e,t,n)}finally{Gl=!1,(nn!==null||rn!==null)&&(hu(),fu())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ti=!1;if(Xe)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Ti=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Ti=!1}function Hd(e,t,n,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Un=!1,Yr=null,Xr=!1,Ii=null,Qd={onError:function(e){Un=!0,Yr=e}};function Kd(e,t,n,r,l,i,o,s,u){Un=!1,Yr=null,Hd.apply(Qd,arguments)}function Gd(e,t,n,r,l,i,o,s,u){if(Kd.apply(this,arguments),Un){if(Un){var c=Yr;Un=!1,Yr=null}else throw Error(S(198));Xr||(Xr=!0,Ii=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pa(e){if(At(e)!==e)throw Error(S(188))}function Yd(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Pa(l),e;if(i===r)return Pa(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function vu(e){return e=Yd(e),e!==null?yu(e):null}function yu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yu(e);if(t!==null)return t;e=e.sibling}return null}var xu=ke.unstable_scheduleCallback,_a=ke.unstable_cancelCallback,Xd=ke.unstable_shouldYield,Jd=ke.unstable_requestPaint,G=ke.unstable_now,Zd=ke.unstable_getCurrentPriorityLevel,Po=ke.unstable_ImmediatePriority,wu=ke.unstable_UserBlockingPriority,Jr=ke.unstable_NormalPriority,qd=ke.unstable_LowPriority,ku=ke.unstable_IdlePriority,Nl=null,Ve=null;function ef(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Nl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:rf,tf=Math.log,nf=Math.LN2;function rf(e){return e>>>=0,e===0?32:31-(tf(e)/nf|0)|0}var Nr=64,jr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=In(s):(i&=o,i!==0&&(r=In(i)))}else o=n&~l,o!==0?r=In(o):i!==0&&(r=In(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function of(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=lf(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Su(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function _o(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Nu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,zo,Cu,Eu,Pu,Mi=!1,Cr=[],ut=null,ct=null,dt=null,Yn=new Map,Xn=new Map,lt=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function za(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Cn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=mr(t),t!==null&&zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uf(e,t,n,r,l){switch(t){case"focusin":return ut=Cn(ut,e,t,n,r,l),!0;case"dragenter":return ct=Cn(ct,e,t,n,r,l),!0;case"mouseover":return dt=Cn(dt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Yn.set(i,Cn(Yn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Xn.set(i,Cn(Xn.get(i)||null,e,t,n,r,l)),!0}return!1}function _u(e){var t=zt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=gu(n),t!==null){e.blockedOn=t,Pu(e.priority,function(){Cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Li=r,n.target.dispatchEvent(r),Li=null}else return t=mr(n),t!==null&&zo(t),e.blockedOn=n,!1;t.shift()}return!0}function La(e,t,n){Ur(e)&&n.delete(t)}function cf(){Mi=!1,ut!==null&&Ur(ut)&&(ut=null),ct!==null&&Ur(ct)&&(ct=null),dt!==null&&Ur(dt)&&(dt=null),Yn.forEach(La),Xn.forEach(La)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,cf)))}function Jn(e){function t(l){return En(l,e)}if(0<Cr.length){En(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&En(ut,e),ct!==null&&En(ct,e),dt!==null&&En(dt,e),Yn.forEach(t),Xn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)_u(n),n.blockedOn===null&&lt.shift()}var ln=et.ReactCurrentBatchConfig,qr=!0;function df(e,t,n,r){var l=M,i=ln.transition;ln.transition=null;try{M=1,Lo(e,t,n,r)}finally{M=l,ln.transition=i}}function ff(e,t,n,r){var l=M,i=ln.transition;ln.transition=null;try{M=4,Lo(e,t,n,r)}finally{M=l,ln.transition=i}}function Lo(e,t,n,r){if(qr){var l=bi(e,t,n,r);if(l===null)ii(e,t,r,el,n),za(e,r);else if(uf(l,e,t,n,r))r.stopPropagation();else if(za(e,r),t&4&&-1<sf.indexOf(e)){for(;l!==null;){var i=mr(l);if(i!==null&&ju(i),i=bi(e,t,n,r),i===null&&ii(e,t,r,el,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var el=null;function bi(e,t,n,r){if(el=null,e=Eo(r),e=zt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return el=e,null}function zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case Po:return 1;case wu:return 4;case Jr:case qd:return 16;case ku:return 536870912;default:return 16}default:return 16}}var ot=null,Ro=null,Fr=null;function Lu(){if(Fr)return Fr;var e,t=Ro,n=t.length,r,l="value"in ot?ot.value:ot.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Ra(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Er:Ra,this.isPropagationStopped=Ra,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Ne(gn),hr=W({},gn,{view:0,detail:0}),pf=Ne(hr),Xl,Jl,Pn,jl=W({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Xl=e.screenX-Pn.screenX,Jl=e.screenY-Pn.screenY):Jl=Xl=0,Pn=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),Ta=Ne(jl),hf=W({},jl,{dataTransfer:0}),mf=Ne(hf),gf=W({},hr,{relatedTarget:0}),Zl=Ne(gf),vf=W({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=Ne(vf),xf=W({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=Ne(xf),kf=W({},gn,{data:0}),Ia=Ne(kf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jf[e])?!!t[e]:!1}function Io(){return Cf}var Ef=W({},hr,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pf=Ne(Ef),_f=W({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oa=Ne(_f),zf=W({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),Lf=Ne(zf),Rf=W({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tf=Ne(Rf),If=W({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Of=Ne(If),Mf=[9,13,27,32],Oo=Xe&&"CompositionEvent"in window,Fn=null;Xe&&"documentMode"in document&&(Fn=document.documentMode);var bf=Xe&&"TextEvent"in window&&!Fn,Ru=Xe&&(!Oo||Fn&&8<Fn&&11>=Fn),Ma=" ",ba=!1;function Tu(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Df(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(ba=!0,Ma);case"textInput":return e=t.data,e===Ma&&ba?null:e;default:return null}}function Uf(e,t){if(Ht)return e==="compositionend"||!Oo&&Tu(e,t)?(e=Lu(),Fr=Ro=ot=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ru&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function Ou(e,t,n,r){du(r),t=tl(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Zn=null;function Af(e){Hu(e,0)}function Cl(e){var t=Gt(e);if(lu(t))return e}function $f(e,t){if(e==="change")return t}var Mu=!1;if(Xe){var ql;if(Xe){var ei="oninput"in document;if(!ei){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),ei=typeof Ua.oninput=="function"}ql=ei}else ql=!1;Mu=ql&&(!document.documentMode||9<document.documentMode)}function Fa(){An&&(An.detachEvent("onpropertychange",bu),Zn=An=null)}function bu(e){if(e.propertyName==="value"&&Cl(Zn)){var t=[];Ou(t,Zn,e,Eo(e)),mu(Af,t)}}function Bf(e,t,n){e==="focusin"?(Fa(),An=t,Zn=n,An.attachEvent("onpropertychange",bu)):e==="focusout"&&Fa()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(Zn)}function Wf(e,t){if(e==="click")return Cl(t)}function Hf(e,t){if(e==="input"||e==="change")return Cl(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Qf;function qn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!yi.call(t,l)||!Fe(e[l],t[l]))return!1}return!0}function Aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $a(e,t){var n=Aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aa(n)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kf(e){var t=Uu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Du(n.ownerDocument.documentElement,n)){if(r!==null&&Mo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=$a(n,i);var o=$a(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gf=Xe&&"documentMode"in document&&11>=document.documentMode,Qt=null,Di=null,$n=null,Ui=!1;function Ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||Qt==null||Qt!==Gr(r)||(r=Qt,"selectionStart"in r&&Mo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&qn($n,r)||($n=r,r=tl(Di,"onSelect"),0<r.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},ti={},Fu={};Xe&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function El(e){if(ti[e])return ti[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fu)return ti[e]=t[n];return e}var Au=El("animationend"),$u=El("animationiteration"),Bu=El("animationstart"),Vu=El("transitionend"),Wu=new Map,Va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Wu.set(e,t),Ft(t,[e])}for(var ni=0;ni<Va.length;ni++){var ri=Va[ni],Yf=ri.toLowerCase(),Xf=ri[0].toUpperCase()+ri.slice(1);wt(Yf,"on"+Xf)}wt(Au,"onAnimationEnd");wt($u,"onAnimationIteration");wt(Bu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Vu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gd(r,t,void 0,e),e.currentTarget=null}function Hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Wa(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Wa(l,s,c),i=u}}}if(Xr)throw e=Ii,Xr=!1,Ii=null,e}function U(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+"__bubble";n.has(r)||(Qu(t,e,2,!1),n.add(r))}function li(e,t,n){var r=0;t&&(r|=4),Qu(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[_r]){e[_r]=!0,qs.forEach(function(n){n!=="selectionchange"&&(Jf.has(n)||li(n,!1,e),li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,li("selectionchange",!1,t))}}function Qu(e,t,n,r){switch(zu(t)){case 1:var l=df;break;case 4:l=ff;break;default:l=Lo}n=l.bind(null,t,n,e),l=void 0,!Ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ii(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=zt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}mu(function(){var c=i,m=Eo(n),p=[];e:{var g=Wu.get(e);if(g!==void 0){var x=To,v=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":x=Pf;break;case"focusin":v="focus",x=Zl;break;case"focusout":v="blur",x=Zl;break;case"beforeblur":case"afterblur":x=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Lf;break;case Au:case $u:case Bu:x=yf;break;case Vu:x=Tf;break;case"scroll":x=pf;break;case"wheel":x=Of;break;case"copy":case"cut":case"paste":x=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Oa}var k=(t&4)!==0,N=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var d=c,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=Gn(d,f),y!=null&&k.push(tr(d,y,h)))),N)break;d=d.return}0<k.length&&(g=new x(g,v,null,n,m),p.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Li&&(v=n.relatedTarget||n.fromElement)&&(zt(v)||v[Je]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=c,v=v?zt(v):null,v!==null&&(N=At(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(k=Ta,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Oa,y="onPointerLeave",f="onPointerEnter",d="pointer"),N=x==null?g:Gt(x),h=v==null?g:Gt(v),g=new k(y,d+"leave",x,n,m),g.target=N,g.relatedTarget=h,y=null,zt(m)===c&&(k=new k(f,d+"enter",v,n,m),k.target=h,k.relatedTarget=N,y=k),N=y,x&&v)t:{for(k=x,f=v,d=0,h=k;h;h=$t(h))d++;for(h=0,y=f;y;y=$t(y))h++;for(;0<d-h;)k=$t(k),d--;for(;0<h-d;)f=$t(f),h--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=$t(k),f=$t(f)}k=null}else k=null;x!==null&&Ha(p,g,x,k,!1),v!==null&&N!==null&&Ha(p,N,v,k,!0)}}e:{if(g=c?Gt(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var j=$f;else if(Da(g))if(Mu)j=Hf;else{j=Vf;var P=Bf}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Wf);if(j&&(j=j(e,c))){Ou(p,j,n,m);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Ci(g,"number",g.value)}switch(P=c?Gt(c):window,e){case"focusin":(Da(P)||P.contentEditable==="true")&&(Qt=P,Di=c,$n=null);break;case"focusout":$n=Di=Qt=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,Ba(p,n,m);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":Ba(p,n,m)}var _;if(Oo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ht?Tu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ru&&n.locale!=="ko"&&(Ht||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ht&&(_=Lu()):(ot=m,Ro="value"in ot?ot.value:ot.textContent,Ht=!0)),P=tl(c,z),0<P.length&&(z=new Ia(z,e,null,n,m),p.push({event:z,listeners:P}),_?z.data=_:(_=Iu(n),_!==null&&(z.data=_)))),(_=bf?Df(e,n):Uf(e,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(m=new Ia("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=_))}Hu(p,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Gn(e,n),i!=null&&r.unshift(tr(e,i,l)),i=Gn(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Gn(n,i),u!=null&&o.unshift(tr(n,u,s))):l||(u=Gn(n,i),u!=null&&o.push(tr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(qf,"")}function zr(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(S(425))}function nl(){}var Fi=null,Ai=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bi=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,Ka=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ka<"u"?function(e){return Ka.resolve(null).then(e).catch(np)}:Bi;function np(e){setTimeout(function(){throw e})}function oi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Be="__reactFiber$"+vn,nr="__reactProps$"+vn,Je="__reactContainer$"+vn,Vi="__reactEvents$"+vn,rp="__reactListeners$"+vn,lp="__reactHandles$"+vn;function zt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ga(e);e!==null;){if(n=e[Be])return n;e=Ga(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Be]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Pl(e){return e[nr]||null}var Wi=[],Yt=-1;function kt(e){return{current:e}}function A(e){0>Yt||(e.current=Wi[Yt],Wi[Yt]=null,Yt--)}function D(e,t){Yt++,Wi[Yt]=e.current,e.current=t}var xt={},se=kt(xt),me=kt(!1),Ot=xt;function un(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function rl(){A(me),A(se)}function Ya(e,t,n){if(se.current!==xt)throw Error(S(168));D(se,t),D(me,n)}function Ku(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,$d(e)||"Unknown",l));return W({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Ot=se.current,D(se,e),D(me,me.current),!0}function Xa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ku(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(se),D(se,e)):A(me),D(me,n)}var Qe=null,_l=!1,ai=!1;function Gu(e){Qe===null?Qe=[e]:Qe.push(e)}function ip(e){_l=!0,Gu(e)}function St(){if(!ai&&Qe!==null){ai=!0;var e=0,t=M;try{var n=Qe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,_l=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),xu(Po,St),l}finally{M=t,ai=!1}}return null}var Xt=[],Jt=0,il=null,ol=0,je=[],Ce=0,Mt=null,Ke=1,Ge="";function Pt(e,t){Xt[Jt++]=ol,Xt[Jt++]=il,il=e,ol=t}function Yu(e,t,n){je[Ce++]=Ke,je[Ce++]=Ge,je[Ce++]=Mt,Mt=e;var r=Ke;e=Ge;var l=32-De(r)-1;r&=~(1<<l),n+=1;var i=32-De(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ke=1<<32-De(t)+l|n<<l|r,Ge=i+e}else Ke=1<<i|n<<l|r,Ge=e}function bo(e){e.return!==null&&(Pt(e,1),Yu(e,1,0))}function Do(e){for(;e===il;)il=Xt[--Jt],Xt[Jt]=null,ol=Xt[--Jt],Xt[Jt]=null;for(;e===Mt;)Mt=je[--Ce],je[Ce]=null,Ge=je[--Ce],je[Ce]=null,Ke=je[--Ce],je[Ce]=null}var we=null,xe=null,$=!1,Me=null;function Xu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ke,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,xe=null,!0):!1;default:return!1}}function Hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if($){var t=xe;if(t){var n=t;if(!Ja(e,t)){if(Hi(e))throw Error(S(418));t=ft(n.nextSibling);var r=we;t&&Ja(e,t)?Xu(r,n):(e.flags=e.flags&-4097|2,$=!1,we=e)}}else{if(Hi(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,we=e}}}function Za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Lr(e){if(e!==we)return!1;if(!$)return Za(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=xe)){if(Hi(e))throw Ju(),Error(S(418));for(;t;)Xu(e,t),t=ft(t.nextSibling)}if(Za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?ft(e.stateNode.nextSibling):null;return!0}function Ju(){for(var e=xe;e;)e=ft(e.nextSibling)}function cn(){xe=we=null,$=!1}function Uo(e){Me===null?Me=[e]:Me.push(e)}var op=et.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qa(e){var t=e._init;return t(e._payload)}function Zu(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=gt(f,d),f.index=0,f.sibling=null,f}function i(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,y){return d===null||d.tag!==6?(d=hi(h,f.mode,y),d.return=f,d):(d=l(d,h),d.return=f,d)}function u(f,d,h,y){var j=h.type;return j===Wt?m(f,d,h.props.children,y,h.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===nt&&qa(j)===d.type)?(y=l(d,h.props),y.ref=_n(f,d,h),y.return=f,y):(y=Kr(h.type,h.key,h.props,null,f.mode,y),y.ref=_n(f,d,h),y.return=f,y)}function c(f,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=mi(h,f.mode,y),d.return=f,d):(d=l(d,h.children||[]),d.return=f,d)}function m(f,d,h,y,j){return d===null||d.tag!==7?(d=It(h,f.mode,y,j),d.return=f,d):(d=l(d,h),d.return=f,d)}function p(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hi(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wr:return h=Kr(d.type,d.key,d.props,null,f.mode,h),h.ref=_n(f,null,d),h.return=f,h;case Vt:return d=mi(d,f.mode,h),d.return=f,d;case nt:var y=d._init;return p(f,y(d._payload),h)}if(Tn(d)||Nn(d))return d=It(d,f.mode,h,null),d.return=f,d;Rr(f,d)}return null}function g(f,d,h,y){var j=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:s(f,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wr:return h.key===j?u(f,d,h,y):null;case Vt:return h.key===j?c(f,d,h,y):null;case nt:return j=h._init,g(f,d,j(h._payload),y)}if(Tn(h)||Nn(h))return j!==null?null:m(f,d,h,y,null);Rr(f,h)}return null}function x(f,d,h,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,s(d,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wr:return f=f.get(y.key===null?h:y.key)||null,u(d,f,y,j);case Vt:return f=f.get(y.key===null?h:y.key)||null,c(d,f,y,j);case nt:var P=y._init;return x(f,d,h,P(y._payload),j)}if(Tn(y)||Nn(y))return f=f.get(h)||null,m(d,f,y,j,null);Rr(d,y)}return null}function v(f,d,h,y){for(var j=null,P=null,_=d,z=d=0,Q=null;_!==null&&z<h.length;z++){_.index>z?(Q=_,_=null):Q=_.sibling;var I=g(f,_,h[z],y);if(I===null){_===null&&(_=Q);break}e&&_&&I.alternate===null&&t(f,_),d=i(I,d,z),P===null?j=I:P.sibling=I,P=I,_=Q}if(z===h.length)return n(f,_),$&&Pt(f,z),j;if(_===null){for(;z<h.length;z++)_=p(f,h[z],y),_!==null&&(d=i(_,d,z),P===null?j=_:P.sibling=_,P=_);return $&&Pt(f,z),j}for(_=r(f,_);z<h.length;z++)Q=x(_,f,z,h[z],y),Q!==null&&(e&&Q.alternate!==null&&_.delete(Q.key===null?z:Q.key),d=i(Q,d,z),P===null?j=Q:P.sibling=Q,P=Q);return e&&_.forEach(function(Le){return t(f,Le)}),$&&Pt(f,z),j}function k(f,d,h,y){var j=Nn(h);if(typeof j!="function")throw Error(S(150));if(h=j.call(h),h==null)throw Error(S(151));for(var P=j=null,_=d,z=d=0,Q=null,I=h.next();_!==null&&!I.done;z++,I=h.next()){_.index>z?(Q=_,_=null):Q=_.sibling;var Le=g(f,_,I.value,y);if(Le===null){_===null&&(_=Q);break}e&&_&&Le.alternate===null&&t(f,_),d=i(Le,d,z),P===null?j=Le:P.sibling=Le,P=Le,_=Q}if(I.done)return n(f,_),$&&Pt(f,z),j;if(_===null){for(;!I.done;z++,I=h.next())I=p(f,I.value,y),I!==null&&(d=i(I,d,z),P===null?j=I:P.sibling=I,P=I);return $&&Pt(f,z),j}for(_=r(f,_);!I.done;z++,I=h.next())I=x(_,f,z,I.value,y),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?z:I.key),d=i(I,d,z),P===null?j=I:P.sibling=I,P=I);return e&&_.forEach(function(kn){return t(f,kn)}),$&&Pt(f,z),j}function N(f,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Wt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case wr:e:{for(var j=h.key,P=d;P!==null;){if(P.key===j){if(j=h.type,j===Wt){if(P.tag===7){n(f,P.sibling),d=l(P,h.props.children),d.return=f,f=d;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===nt&&qa(j)===P.type){n(f,P.sibling),d=l(P,h.props),d.ref=_n(f,P,h),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}h.type===Wt?(d=It(h.props.children,f.mode,y,h.key),d.return=f,f=d):(y=Kr(h.type,h.key,h.props,null,f.mode,y),y.ref=_n(f,d,h),y.return=f,f=y)}return o(f);case Vt:e:{for(P=h.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=l(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=mi(h,f.mode,y),d.return=f,f=d}return o(f);case nt:return P=h._init,N(f,d,P(h._payload),y)}if(Tn(h))return v(f,d,h,y);if(Nn(h))return k(f,d,h,y);Rr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,h),d.return=f,f=d):(n(f,d),d=hi(h,f.mode,y),d.return=f,f=d),o(f)):n(f,d)}return N}var dn=Zu(!0),qu=Zu(!1),al=kt(null),sl=null,Zt=null,Fo=null;function Ao(){Fo=Zt=sl=null}function $o(e){var t=al.current;A(al),e._currentValue=t}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){sl=e,Fo=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Fo!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(sl===null)throw Error(S(308));Zt=e,sl.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Lt=null;function Bo(e){Lt===null?Lt=[e]:Lt.push(e)}function ec(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,Bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_o(e,n)}}function es(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ul(e,t,n,r){var l=e.updateQueue;rt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;o=0,m=c=u=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(g=t,x=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){p=v.call(x,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,g=typeof v=="function"?v.call(x,p,g):v,g==null)break e;p=W({},p,g);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=x,u=p):m=m.next=x,o|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(u=p),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Dt|=o,e.lanes=o,e.memoizedState=p}}function ts(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var gr={},We=kt(gr),rr=kt(gr),lr=kt(gr);function Rt(e){if(e===gr)throw Error(S(174));return e}function Wo(e,t){switch(D(lr,t),D(rr,e),D(We,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pi(t,e)}A(We),D(We,t)}function fn(){A(We),A(rr),A(lr)}function nc(e){Rt(lr.current);var t=Rt(We.current),n=Pi(t,e.type);t!==n&&(D(rr,e),D(We,n))}function Ho(e){rr.current===e&&(A(We),A(rr))}var B=kt(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var si=[];function Qo(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var Br=et.ReactCurrentDispatcher,ui=et.ReactCurrentBatchConfig,bt=0,V=null,J=null,ee=null,dl=!1,Bn=!1,ir=0,ap=0;function ie(){throw Error(S(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,l,i){if(bt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?dp:fp,e=n(r,l),Bn){i=0;do{if(Bn=!1,ir=0,25<=i)throw Error(S(301));i+=1,ee=J=null,t.updateQueue=null,Br.current=pp,e=n(r,l)}while(Bn)}if(Br.current=fl,t=J!==null&&J.next!==null,bt=0,ee=J=V=null,dl=!1,t)throw Error(S(300));return e}function Yo(){var e=ir!==0;return ir=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function ze(){if(J===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function or(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var m=c.lane;if((bt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,o=r):u=u.next=p,V.lanes|=m,Dt|=m}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Fe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Dt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function di(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Fe(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function rc(){}function lc(e,t){var n=V,r=ze(),l=t(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Xo(ac.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ar(9,oc.bind(null,n,r,l,t),void 0,null),te===null)throw Error(S(349));bt&30||ic(n,t,l)}return l}function ic(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function oc(e,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&uc(e)}function ac(e,t,n){return n(function(){sc(t)&&uc(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function uc(e){var t=Ze(e,1);t!==null&&Ue(t,e,1,-1)}function ns(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=cp.bind(null,V,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cc(){return ze().memoizedState}function Vr(e,t,n,r){var l=$e();V.flags|=e,l.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&Ko(r,o.deps)){l.memoizedState=ar(t,n,i,r);return}}V.flags|=e,l.memoizedState=ar(1|t,n,i,r)}function rs(e,t){return Vr(8390656,8,e,t)}function Xo(e,t){return zl(2048,8,e,t)}function dc(e,t){return zl(4,2,e,t)}function fc(e,t){return zl(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hc(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,pc.bind(null,t,e),n)}function Jo(){}function mc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vc(e,t,n){return bt&21?(Fe(n,t)||(n=Su(),V.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function sp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),t()}finally{M=n,ui.transition=r}}function yc(){return ze().memoizedState}function up(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xc(e))wc(t,n);else if(n=ec(e,t,n,r),n!==null){var l=ce();Ue(n,e,r,l),kc(n,t,r)}}function cp(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xc(e))wc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Fe(s,o)){var u=t.interleaved;u===null?(l.next=l,Bo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ec(e,t,l,r),n!==null&&(l=ce(),Ue(n,e,r,l),kc(n,t,r))}}function xc(e){var t=e.alternate;return e===V||t!==null&&t===V}function wc(e,t){Bn=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_o(e,n)}}var fl={readContext:_e,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},dp={readContext:_e,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:rs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=up.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:ns,useDebugValue:Jo,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=ns(!1),t=e[0];return e=sp.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=$e();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));bt&30||ic(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,rs(ac.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,oc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$e(),t=te.identifierPrefix;if($){var n=Ge,r=Ke;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:_e,useCallback:mc,useContext:_e,useEffect:Xo,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:gc,useReducer:ci,useRef:cc,useState:function(){return ci(or)},useDebugValue:Jo,useDeferredValue:function(e){var t=ze();return vc(t,J.memoizedState,e)},useTransition:function(){var e=ci(or)[0],t=ze().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:lc,useId:yc,unstable_isNewReconciler:!1},pp={readContext:_e,useCallback:mc,useContext:_e,useEffect:Xo,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:gc,useReducer:di,useRef:cc,useState:function(){return di(or)},useDebugValue:Jo,useDeferredValue:function(e){var t=ze();return J===null?t.memoizedState=e:vc(t,J.memoizedState,e)},useTransition:function(){var e=di(or)[0],t=ze().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:lc,useId:yc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Ue(t,e,l,r),$r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Ue(t,e,l,r),$r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Ue(t,e,r,n),$r(t,e,r))}};function ls(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,i):!0}function Sc(e,t,n){var r=!1,l=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=ge(t)?Ot:se.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function is(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Vo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=ge(t)?Ot:se.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Gi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ll.enqueueReplaceState(l,l.state,null),ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Ad(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function fi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function Nc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,oo=r),Xi(e,t)},n}function jc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Xi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_p.bind(null,e,t,n),t.then(e,e))}function as(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ss(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var mp=et.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?qu(t,null,n,r):dn(t,e.child,n,r)}function us(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=Go(e,t,n,r,i,l),n=Yo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):($&&n&&bo(t),t.flags|=1,ue(e,t,r,l),t.child)}function cs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ia(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Cc(e,t,i,r,l)):(e=Kr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,qe(e,t,l)}return Ji(e,t,n,r,l)}function Ec(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(en,ye),ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(en,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(en,ye),ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(en,ye),ye|=r;return ue(e,t,l,n),t.child}function Pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,l){var i=ge(n)?Ot:se.current;return i=un(t,i),on(t,l),n=Go(e,t,n,r,i,l),r=Yo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):($&&r&&bo(t),t.flags|=1,ue(e,t,n,l),t.child)}function ds(e,t,n,r,l){if(ge(n)){var i=!0;ll(t)}else i=!1;if(on(t,l),t.stateNode===null)Wr(e,t),Sc(t,n,r),Yi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?Ot:se.current,c=un(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&is(t,o,r,c),rt=!1;var g=t.memoizedState;o.state=g,ul(t,r,o,l),u=t.memoizedState,s!==r||g!==u||me.current||rt?(typeof m=="function"&&(Gi(t,n,m,r),u=t.memoizedState),(s=rt||ls(t,n,s,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,tc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ie(t.type,s),o.props=c,p=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?Ot:se.current,u=un(t,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||g!==u)&&is(t,o,r,u),rt=!1,g=t.memoizedState,o.state=g,ul(t,r,o,l);var v=t.memoizedState;s!==p||g!==v||me.current||rt?(typeof x=="function"&&(Gi(t,n,x,r),v=t.memoizedState),(c=rt||ls(t,n,c,r,g,v,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){Pc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Xa(t,n,!1),qe(e,t,i);r=t.stateNode,mp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,s,i)):ue(e,t,s,i),t.memoizedState=r.state,l&&Xa(t,n,!0),t.child}function _c(e){var t=e.stateNode;t.pendingContext?Ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ya(e,t.context,!1),Wo(e,t.containerInfo)}function fs(e,t,n,r,l){return cn(),Uo(l),t.flags|=256,ue(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(B,l&1),e===null)return Qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Il(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eo(n),t.memoizedState=qi,e):Zo(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return gp(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=gt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=gt(s,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=qi,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zo(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Uo(r),dn(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=fi(Error(S(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Il({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=qi,i);if(!(t.mode&1))return Tr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=fi(i,r,void 0),Tr(e,t,o,r)}if(s=(o&e.childLanes)!==0,he||s){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ze(e,l),Ue(r,e,l,-1))}return la(),r=fi(Error(S(421))),Tr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,xe=ft(l.nextSibling),we=t,$=!0,Me=null,e!==null&&(je[Ce++]=Ke,je[Ce++]=Ge,je[Ce++]=Mt,Ke=e.id,Ge=e.overflow,Mt=t),t=Zo(t,r.children),t.flags|=4096,t)}function ps(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function pi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Lc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ps(e,n,t);else if(e.tag===19)ps(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),pi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}pi(t,!0,n,null,i);break;case"together":pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t,n){switch(t.tag){case 3:_c(t),cn();break;case 5:nc(t);break;case 1:ge(t.type)&&ll(t);break;case 4:Wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?zc(e,t,n):(D(B,B.current&1),e=qe(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Ec(e,t,n)}return qe(e,t,n)}var Rc,to,Tc,Ic;Rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};to=function(){};Tc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Rt(We.current);var i=null;switch(n){case"input":l=Ni(e,l),r=Ni(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=Ei(e,l),r=Ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}_i(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&U("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yp(e,t,n){var r=t.pendingProps;switch(Do(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&rl(),oe(t),null;case 3:return r=t.stateNode,fn(),A(me),A(se),Qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(uo(Me),Me=null))),to(e,t),oe(t),null;case 5:Ho(t);var l=Rt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Tc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Rt(We.current),Lr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Be]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)U(On[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Sa(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ja(r,i),U("invalid",r)}_i(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),l=["children",""+s]):Qn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":kr(r),Na(r,i,!0);break;case"textarea":kr(r),Ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=au(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[nr]=r,Rc(e,t,!1,!1),t.stateNode=e;e:{switch(o=zi(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)U(On[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Sa(e,r),l=Ni(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),U("invalid",e);break;case"textarea":ja(e,r),l=Ei(e,r),U("invalid",e);break;default:l=r}_i(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?cu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&su(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&U("scroll",e):u!=null&&So(e,i,u,o))}switch(n){case"input":kr(e),Na(e,r,!1);break;case"textarea":kr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Rt(lr.current),Rt(We.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return oe(t),null;case 13:if(A(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&xe!==null&&t.mode&1&&!(t.flags&128))Ju(),cn(),t.flags|=98560,i=!1;else if(i=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Be]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Me!==null&&(uo(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):la())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return fn(),to(e,t),e===null&&er(t.stateNode.containerInfo),oe(t),null;case 10:return $o(t.type._context),oe(t),null;case 17:return ge(t.type)&&rl(),oe(t),null;case 19:if(A(B),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)zn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=cl(e),o!==null){for(t.flags|=128,zn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>hn&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304)}else{if(!r)if(e=cl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return oe(t),null}else 2*G()-i.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=B.current,D(B,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function xp(e,t){switch(Do(t),t.tag){case 1:return ge(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),A(me),A(se),Qo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ho(t),null;case 13:if(A(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(B),null;case 4:return fn(),null;case 10:return $o(t.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var Ir=!1,ae=!1,wp=typeof WeakSet=="function"?WeakSet:Set,C=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){H(e,t,r)}}var hs=!1;function kp(e,t){if(Fi=qr,e=Uu(),Mo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,m=0,p=e,g=null;t:for(;;){for(var x;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===e)break t;if(g===n&&++c===l&&(s=o),g===i&&++m===r&&(u=o),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ai={focusedElem:e,selectionRange:n},qr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,N=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ie(t.type,k),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=hs,hs=!1,v}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&no(t,n,i)}l=l.next}while(l!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Oc(e){var t=e.alternate;t!==null&&(e.alternate=null,Oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[nr],delete t[Vi],delete t[rp],delete t[lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nl));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var ne=null,Oe=!1;function tt(e,t,n){for(n=n.child;n!==null;)bc(e,t,n),n=n.sibling}function bc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:ae||qt(n,t);case 6:var r=ne,l=Oe;ne=null,tt(e,t,n),ne=r,Oe=l,ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?oi(e.parentNode,n):e.nodeType===1&&oi(e,n),Jn(e)):oi(ne,n.stateNode));break;case 4:r=ne,l=Oe,ne=n.stateNode.containerInfo,Oe=!0,tt(e,t,n),ne=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&no(n,t,o),l=l.next}while(l!==r)}tt(e,t,n);break;case 1:if(!ae&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,tt(e,t,n),ae=r):tt(e,t,n);break;default:tt(e,t,n)}}function gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wp),t.forEach(function(r){var l=Lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Oe=!1;break e;case 3:ne=s.stateNode.containerInfo,Oe=!0;break e;case 4:ne=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ne===null)throw Error(S(160));bc(i,o,l),ne=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dc(t,e),t=t.sibling}function Dc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ae(e),r&4){try{Vn(3,e,e.return),Rl(3,e)}catch(k){H(e,e.return,k)}try{Vn(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:Re(t,e),Ae(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Re(t,e),Ae(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(k){H(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&iu(l,i),zi(s,o);var c=zi(s,i);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?cu(l,p):m==="dangerouslySetInnerHTML"?su(l,p):m==="children"?Kn(l,p):So(l,m,p,c)}switch(s){case"input":ji(l,i);break;case"textarea":ou(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?tn(l,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(k){H(e,e.return,k)}}break;case 6:if(Re(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){H(e,e.return,k)}}break;case 3:if(Re(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:Re(t,e),Ae(e);break;case 13:Re(t,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ta=G())),r&4&&gs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||m,Re(t,e),ae=c):Re(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(g=C,x=g.child,g.tag){case 0:case 11:case 14:case 15:Vn(4,g,g.return);break;case 1:qt(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:qt(g,g.return);break;case 22:if(g.memoizedState!==null){ys(p);continue}}x!==null?(x.return=g,C=x):ys(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=uu("display",o))}catch(k){H(e,e.return,k)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){H(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Re(t,e),Ae(e),r&4&&gs(e);break;case 21:break;default:Re(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var i=ms(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ms(e);lo(e,s,o);break;default:throw Error(S(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){C=e,Uc(e)}function Uc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Ir;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ae;s=Ir;var c=ae;if(Ir=o,(ae=u)&&!c)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?xs(l):u!==null?(u.return=o,C=u):xs(l);for(;i!==null;)C=i,Uc(i),i=i.sibling;C=l,Ir=s,ae=c}vs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):vs(e)}}function vs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ts(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ts(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Jn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&ro(t)}catch(g){H(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ys(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function xs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var i=t.return;try{ro(t)}catch(u){H(t,i,u)}break;case 5:var o=t.return;try{ro(t)}catch(u){H(t,o,u)}}}catch(u){H(t,t.return,u)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Np=Math.ceil,pl=et.ReactCurrentDispatcher,qo=et.ReactCurrentOwner,Pe=et.ReactCurrentBatchConfig,O=0,te=null,X=null,re=0,ye=0,en=kt(0),Z=0,sr=null,Dt=0,Tl=0,ea=0,Wn=null,pe=null,ta=0,hn=1/0,He=null,hl=!1,oo=null,ht=null,Or=!1,at=null,ml=0,Hn=0,ao=null,Hr=-1,Qr=0;function ce(){return O&6?G():Hr!==-1?Hr:Hr=G()}function mt(e){return e.mode&1?O&2&&re!==0?re&-re:op.transition!==null?(Qr===0&&(Qr=Su()),Qr):(e=M,e!==0||(e=window.event,e=e===void 0?16:zu(e.type)),e):1}function Ue(e,t,n,r){if(50<Hn)throw Hn=0,ao=null,Error(S(185));pr(e,n,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Tl|=n),Z===4&&it(e,re)),ve(e,r),n===1&&O===0&&!(t.mode&1)&&(hn=G()+500,_l&&St()))}function ve(e,t){var n=e.callbackNode;of(e,t);var r=Zr(e,e===te?re:0);if(r===0)n!==null&&_a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_a(n),t===1)e.tag===0?ip(ws.bind(null,e)):Gu(ws.bind(null,e)),tp(function(){!(O&6)&&St()}),n=null;else{switch(Nu(r)){case 1:n=Po;break;case 4:n=wu;break;case 16:n=Jr;break;case 536870912:n=ku;break;default:n=Jr}n=Qc(n,Fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fc(e,t){if(Hr=-1,Qr=0,O&6)throw Error(S(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Zr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gl(e,r);else{t=r;var l=O;O|=2;var i=$c();(te!==e||re!==t)&&(He=null,hn=G()+500,Tt(e,t));do try{Ep();break}catch(s){Ac(e,s)}while(!0);Ao(),pl.current=i,O=l,X!==null?t=0:(te=null,re=0,t=Z)}if(t!==0){if(t===2&&(l=Oi(e),l!==0&&(r=l,t=so(e,l))),t===1)throw n=sr,Tt(e,0),it(e,r),ve(e,G()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!jp(l)&&(t=gl(e,r),t===2&&(i=Oi(e),i!==0&&(r=i,t=so(e,i))),t===1))throw n=sr,Tt(e,0),it(e,r),ve(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:_t(e,pe,He);break;case 3:if(it(e,r),(r&130023424)===r&&(t=ta+500-G(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Bi(_t.bind(null,e,pe,He),t);break}_t(e,pe,He);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=Bi(_t.bind(null,e,pe,He),r);break}_t(e,pe,He);break;case 5:_t(e,pe,He);break;default:throw Error(S(329))}}}return ve(e,G()),e.callbackNode===n?Fc.bind(null,e):null}function so(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=gl(e,t),e!==2&&(t=pe,pe=n,t!==null&&uo(t)),e}function uo(e){pe===null?pe=e:pe.push.apply(pe,e)}function jp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~ea,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function ws(e){if(O&6)throw Error(S(327));an();var t=Zr(e,0);if(!(t&1))return ve(e,G()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=Oi(e);r!==0&&(t=r,n=so(e,r))}if(n===1)throw n=sr,Tt(e,0),it(e,t),ve(e,G()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,pe,He),ve(e,G()),null}function na(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(hn=G()+500,_l&&St())}}function Ut(e){at!==null&&at.tag===0&&!(O&6)&&an();var t=O;O|=1;var n=Pe.transition,r=M;try{if(Pe.transition=null,M=1,e)return e()}finally{M=r,Pe.transition=n,O=t,!(O&6)&&St()}}function ra(){ye=en.current,A(en)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Do(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:fn(),A(me),A(se),Qo();break;case 5:Ho(r);break;case 4:fn();break;case 13:A(B);break;case 19:A(B);break;case 10:$o(r.type._context);break;case 22:case 23:ra()}n=n.return}if(te=e,X=e=gt(e.current,null),re=ye=t,Z=0,sr=null,ea=Tl=Dt=0,pe=Wn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Lt=null}return e}function Ac(e,t){do{var n=X;try{if(Ao(),Br.current=fl,dl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(bt=0,ee=J=V=null,Bn=!1,ir=0,qo.current=null,n===null||n.return===null){Z=1,sr=t,X=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=as(o);if(x!==null){x.flags&=-257,ss(x,o,s,i,t),x.mode&1&&os(i,c,t),t=x,u=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(u),t.updateQueue=k}else v.add(u);break e}else{if(!(t&1)){os(i,c,t),la();break e}u=Error(S(426))}}else if($&&s.mode&1){var N=as(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ss(N,o,s,i,t),Uo(pn(u,s));break e}}i=u=pn(u,s),Z!==4&&(Z=2),Wn===null?Wn=[i]:Wn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Nc(i,u,t);es(i,f);break e;case 1:s=u;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ht===null||!ht.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=jc(i,s,t);es(i,y);break e}}i=i.return}while(i!==null)}Vc(n)}catch(j){t=j,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function $c(){var e=pl.current;return pl.current=fl,e===null?fl:e}function la(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Dt&268435455)&&!(Tl&268435455)||it(te,re)}function gl(e,t){var n=O;O|=2;var r=$c();(te!==e||re!==t)&&(He=null,Tt(e,t));do try{Cp();break}catch(l){Ac(e,l)}while(!0);if(Ao(),O=n,pl.current=r,X!==null)throw Error(S(261));return te=null,re=0,Z}function Cp(){for(;X!==null;)Bc(X)}function Ep(){for(;X!==null&&!Xd();)Bc(X)}function Bc(e){var t=Hc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Vc(e):X=t,qo.current=null}function Vc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=yp(n,t,ye),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function _t(e,t,n){var r=M,l=Pe.transition;try{Pe.transition=null,M=1,Pp(e,t,n,r)}finally{Pe.transition=l,M=r}return null}function Pp(e,t,n,r){do an();while(at!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(af(e,i),e===te&&(X=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,Qc(Jr,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=M;M=1;var s=O;O|=4,qo.current=null,kp(e,n),Dc(n,e),Kf(Ai),qr=!!Fi,Ai=Fi=null,e.current=n,Sp(n),Jd(),O=s,M=o,Pe.transition=i}else e.current=n;if(Or&&(Or=!1,at=e,ml=l),i=e.pendingLanes,i===0&&(ht=null),ef(n.stateNode),ve(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=oo,oo=null,e;return ml&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===ao?Hn++:(Hn=0,ao=e):Hn=0,St(),null}function an(){if(at!==null){var e=Nu(ml),t=Pe.transition,n=M;try{if(Pe.transition=null,M=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,ml=0,O&6)throw Error(S(331));var l=O;for(O|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Vn(8,m,i)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var g=m.sibling,x=m.return;if(Oc(m),m===c){C=null;break}if(g!==null){g.return=x,C=g;break}C=x}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,C=f;break e}C=i.return}}var d=e.current;for(C=d;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Rl(9,s)}}catch(j){H(s,s.return,j)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if(O=l,St(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Nl,e)}catch{}r=!0}return r}finally{M=n,Pe.transition=t}}return!1}function ks(e,t,n){t=pn(n,t),t=Nc(e,t,1),e=pt(e,t,1),t=ce(),e!==null&&(pr(e,1,t),ve(e,t))}function H(e,t,n){if(e.tag===3)ks(e,e,n);else for(;t!==null;){if(t.tag===3){ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=pn(n,e),e=jc(t,e,1),t=pt(t,e,1),e=ce(),t!==null&&(pr(t,1,e),ve(t,e));break}}t=t.return}}function _p(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-ta?Tt(e,0):ea|=n),ve(e,t)}function Wc(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=ce();e=Ze(e,t),e!==null&&(pr(e,t,n),ve(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wc(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Wc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,vp(e,t,n);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&Yu(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var l=un(t,se.current);on(t,n),l=Go(null,t,r,e,l,n);var i=Yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,ll(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Vo(t),l.updater=Ll,t.stateNode=l,l._reactInternals=t,Yi(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,$&&i&&bo(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tp(r),e=Ie(r,e),l){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=ds(null,t,r,e,n);break e;case 11:t=us(null,t,r,e,n);break e;case 14:t=cs(null,t,r,Ie(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),ds(e,t,r,l,n);case 3:e:{if(_c(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,tc(e,t),ul(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pn(Error(S(423)),t),t=fs(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(S(424)),t),t=fs(e,t,r,n,l);break e}else for(xe=ft(t.stateNode.containerInfo.firstChild),we=t,$=!0,Me=null,n=qu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=qe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return nc(t),e===null&&Qi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,$i(r,l)?o=null:i!==null&&$i(r,i)&&(t.flags|=32),Pc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Qi(t),null;case 13:return zc(e,t,n);case 4:return Wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),us(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(al,r._currentValue),r._currentValue=o,i!==null)if(Fe(i.value,o)){if(i.children===l.children&&!me.current){t=qe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ki(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ki(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=_e(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),cs(e,t,r,l,n);case 15:return Cc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Wr(e,t),t.tag=1,ge(r)?(e=!0,ll(t)):e=!1,on(t,n),Sc(t,r,l),Yi(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return Lc(e,t,n);case 22:return Ec(e,t,n)}throw Error(S(156,t.tag))};function Qc(e,t){return xu(e,t)}function Rp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Rp(e,t,n,r)}function ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jo)return 11;if(e===Co)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ia(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return It(n.children,l,i,t);case No:o=8,l|=8;break;case xi:return e=Ee(12,n,t,l|2),e.elementType=xi,e.lanes=i,e;case wi:return e=Ee(13,n,t,l),e.elementType=wi,e.lanes=i,e;case ki:return e=Ee(19,n,t,l),e.elementType=ki,e.lanes=i,e;case nu:return Il(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eu:o=10;break e;case tu:o=9;break e;case jo:o=11;break e;case Co:o=14;break e;case nt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Il(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=nu,e.lanes=n,e.stateNode={isHidden:!1},e}function hi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function mi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ip(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,l,i,o,s,u){return e=new Ip(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(i),e}function Op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kc(e){if(!e)return xt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ge(n))return Ku(e,n,t)}return t}function Gc(e,t,n,r,l,i,o,s,u){return e=oa(n,r,!0,e,l,i,o,s,u),e.context=Kc(null),n=e.current,r=ce(),l=mt(n),i=Ye(r,l),i.callback=t??null,pt(n,i,l),e.current.lanes=l,pr(e,l,r),ve(e,r),e}function Ol(e,t,n,r){var l=t.current,i=ce(),o=mt(l);return n=Kc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,o),e!==null&&(Ue(e,l,o,i),$r(e,l,o)),o}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ss(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function aa(e,t){Ss(e,t),(e=e.alternate)&&Ss(e,t)}function Mp(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Ml.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ol(e,t,null,null)};Ml.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Ol(null,e,null,null)}),t[Je]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&_u(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ns(){}function bp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=vl(o);i.call(c)}}var o=Gc(t,r,e,0,null,!1,!1,"",Ns);return e._reactRootContainer=o,e[Je]=o.current,er(e.nodeType===8?e.parentNode:e),Ut(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=vl(u);s.call(c)}}var u=oa(e,0,!1,null,null,!1,!1,"",Ns);return e._reactRootContainer=u,e[Je]=u.current,er(e.nodeType===8?e.parentNode:e),Ut(function(){Ol(t,u,n,r)}),u}function Dl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=vl(o);s.call(u)}}Ol(t,o,e,l)}else o=bp(n,t,e,l,r);return vl(o)}ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(_o(t,n|1),ve(t,G()),!(O&6)&&(hn=G()+500,St()))}break;case 13:Ut(function(){var r=Ze(e,1);if(r!==null){var l=ce();Ue(r,e,1,l)}}),aa(e,1)}};zo=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ce();Ue(t,e,134217728,n)}aa(e,134217728)}};Cu=function(e){if(e.tag===13){var t=mt(e),n=Ze(e,t);if(n!==null){var r=ce();Ue(n,e,t,r)}aa(e,t)}};Eu=function(){return M};Pu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ri=function(e,t,n){switch(t){case"input":if(ji(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Pl(r);if(!l)throw Error(S(90));lu(r),ji(r,l)}}}break;case"textarea":ou(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};pu=na;hu=Ut;var Dp={usingClientEntryPoint:!1,Events:[mr,Gt,Pl,du,fu,na]},Ln={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Up={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Nl=Mr.inject(Up),Ve=Mr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(S(200));return Op(e,t,null,n)};Se.createRoot=function(e,t){if(!ua(e))throw Error(S(299));var n=!1,r="",l=Yc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,er(e.nodeType===8?e.parentNode:e),new sa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=vu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ut(e)};Se.hydrate=function(e,t,n){if(!bl(t))throw Error(S(200));return Dl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Yc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Gc(t,null,e,1,n??null,l,!1,i,o),e[Je]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)};Se.render=function(e,t,n){if(!bl(t))throw Error(S(200));return Dl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!bl(e))throw Error(S(40));return e._reactRootContainer?(Ut(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=na;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Dl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)}catch(e){console.error(e)}}Xc(),Xs.exports=Se;var Fp=Xs.exports,js=Fp;vi.createRoot=js.createRoot,vi.hydrateRoot=js.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(null,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const Cs="popstate";function Ap(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:s}=r.location;return co("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:yl(l)}return Bp(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $p(){return Math.random().toString(36).substr(2,8)}function Es(e,t){return{usr:e.state,key:e.key,idx:t}}function co(e,t,n,r){return n===void 0&&(n=null),ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||$p()})}function yl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=st.Pop,u=null,c=m();c==null&&(c=0,o.replaceState(ur({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function p(){s=st.Pop;let N=m(),f=N==null?null:N-c;c=N,u&&u({action:s,location:k.location,delta:f})}function g(N,f){s=st.Push;let d=co(k.location,N,f);c=m()+1;let h=Es(d,c),y=k.createHref(d);try{o.pushState(h,"",y)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(y)}i&&u&&u({action:s,location:k.location,delta:1})}function x(N,f){s=st.Replace;let d=co(k.location,N,f);c=m();let h=Es(d,c),y=k.createHref(d);o.replaceState(h,"",y),i&&u&&u({action:s,location:k.location,delta:0})}function v(N){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof N=="string"?N:yl(N);return d=d.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return s},get location(){return e(l,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Cs,p),u=N,()=>{l.removeEventListener(Cs,p),u=null}},createHref(N){return t(l,N)},createURL:v,encodeLocation(N){let f=v(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(N){return o.go(N)}};return k}var Ps;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ps||(Ps={}));function Vp(e,t,n){return n===void 0&&(n="/"),Wp(e,t,n)}function Wp(e,t,n,r){let l=typeof t=="string"?yn(t):t,i=da(l.pathname||"/",n);if(i==null)return null;let o=Jc(e);Hp(o);let s=null,u=rh(i);for(let c=0;s==null&&c<o.length;++c)s=eh(o[c],u);return s}function Jc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=vt([r,u.relativePath]),m=n.concat(u);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jc(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Zp(c,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let u of Zc(i.path))l(i,o,u)}),t}function Zc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Zc(r.join("/")),s=[];return s.push(...o.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Hp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qp=/^:[\w-]+$/,Kp=3,Gp=2,Yp=1,Xp=10,Jp=-2,_s=e=>e==="*";function Zp(e,t){let n=e.split("/"),r=n.length;return n.some(_s)&&(r+=Jp),t&&(r+=Gp),n.filter(l=>!_s(l)).reduce((l,i)=>l+(Qp.test(i)?Kp:i===""?Yp:Xp),r)}function qp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function eh(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=th({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),g=u.route;if(!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:vt([i,p.pathname]),pathnameBase:sh(vt([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=vt([i,p.pathnameBase]))}return o}function th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nh(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,m,p)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let k=s[p]||"";o=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const v=s[p];return x&&!v?c[g]=void 0:c[g]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function nh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function rh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function da(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=e=>lh.test(e);function oh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?yn(e):e,i;if(n)if(ih(n))i=n;else{if(n.includes("//")){let o=n;n=qc(n),ca(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=zs(n.substring(1),"/"):i=zs(n,t)}else i=t;return{pathname:i,search:uh(r),hash:ch(l)}}function zs(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function gi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ah(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fa(e,t){let n=ah(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pa(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=yn(e):(l=ur({},e),Y(!l.pathname||!l.pathname.includes("?"),gi("?","pathname","search",l)),Y(!l.pathname||!l.pathname.includes("#"),gi("#","pathname","hash",l)),Y(!l.search||!l.search.includes("#"),gi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}s=p>=0?t[p]:"/"}let u=oh(l,s),c=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const qc=e=>e.replace(/\/\/+/g,"/"),vt=e=>qc(e.join("/")),sh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ch=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ed=["post","put","patch","delete"];new Set(ed);const fh=["get",...ed];new Set(fh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(null,arguments)}const ha=w.createContext(null),ph=w.createContext(null),Nt=w.createContext(null),Ul=w.createContext(null),jt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),td=w.createContext(null);function hh(e,t){let{relative:n}=t===void 0?{}:t;xn()||Y(!1);let{basename:r,navigator:l}=w.useContext(Nt),{hash:i,pathname:o,search:s}=rd(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:vt([r,o])),l.createHref({pathname:u,search:s,hash:i})}function xn(){return w.useContext(Ul)!=null}function wn(){return xn()||Y(!1),w.useContext(Ul).location}function nd(e){w.useContext(Nt).static||w.useLayoutEffect(e)}function Fl(){let{isDataRoute:e}=w.useContext(jt);return e?Ph():mh()}function mh(){xn()||Y(!1);let e=w.useContext(ha),{basename:t,future:n,navigator:r}=w.useContext(Nt),{matches:l}=w.useContext(jt),{pathname:i}=wn(),o=JSON.stringify(fa(l,n.v7_relativeSplatPath)),s=w.useRef(!1);return nd(()=>{s.current=!0}),w.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=pa(c,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vt([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}function rd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Nt),{matches:l}=w.useContext(jt),{pathname:i}=wn(),o=JSON.stringify(fa(l,r.v7_relativeSplatPath));return w.useMemo(()=>pa(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function gh(e,t){return vh(e,t)}function vh(e,t,n,r){xn()||Y(!1);let{navigator:l}=w.useContext(Nt),{matches:i}=w.useContext(jt),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=wn(),m;if(t){var p;let N=typeof t=="string"?yn(t):t;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Y(!1),m=N}else m=c;let g=m.pathname||"/",x=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let v=Vp(e,{pathname:x}),k=Sh(v&&v.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:vt([u,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:vt([u,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return t&&k?w.createElement(Ul.Provider,{value:{location:cr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:st.Pop}},k):k}function yh(){let e=Eh(),t=dh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,null)}const xh=w.createElement(yh,null);class wh extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(jt.Provider,{value:this.props.routeContext},w.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kh(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(ha);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(jt.Provider,{value:t},r)}function Sh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let m=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||Y(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=m),p.route.id){let{loaderData:g,errors:x}=n,v=p.route.loader&&g[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let x,v=!1,k=null,N=null;n&&(x=s&&p.route.id?s[p.route.id]:void 0,k=p.route.errorElement||xh,u&&(c<0&&g===0?(_h("route-fallback"),v=!0,N=null):c===g&&(v=!0,N=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let h;return x?h=k:v?h=N:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,w.createElement(kh,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?w.createElement(wh,{location:n.location,revalidation:n.revalidation,component:k,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var ld=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ld||{}),id=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(id||{});function Nh(e){let t=w.useContext(ha);return t||Y(!1),t}function jh(e){let t=w.useContext(ph);return t||Y(!1),t}function Ch(e){let t=w.useContext(jt);return t||Y(!1),t}function od(e){let t=Ch(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Eh(){var e;let t=w.useContext(td),n=jh(),r=od();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ph(){let{router:e}=Nh(ld.UseNavigateStable),t=od(id.UseNavigateStable),n=w.useRef(!1);return nd(()=>{n.current=!0}),w.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,cr({fromRouteId:t},i)))},[e,t])}const Ls={};function _h(e,t,n){Ls[e]||(Ls[e]=!0)}function zh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Mn(e){let{to:t,replace:n,state:r,relative:l}=e;xn()||Y(!1);let{future:i,static:o}=w.useContext(Nt),{matches:s}=w.useContext(jt),{pathname:u}=wn(),c=Fl(),m=pa(t,fa(s,i.v7_relativeSplatPath),u,l==="path"),p=JSON.stringify(m);return w.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:l}),[c,p,l,n,r]),null}function Te(e){Y(!1)}function Lh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=st.Pop,navigator:i,static:o=!1,future:s}=e;xn()&&Y(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:i,static:o,future:cr({v7_relativeSplatPath:!1},s)}),[u,s,i,o]);typeof r=="string"&&(r=yn(r));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=r,k=w.useMemo(()=>{let N=da(m,u);return N==null?null:{location:{pathname:N,search:p,hash:g,state:x,key:v},navigationType:l}},[u,m,p,g,x,v,l]);return k==null?null:w.createElement(Nt.Provider,{value:c},w.createElement(Ul.Provider,{children:n,value:k}))}function Rh(e){let{children:t,location:n}=e;return gh(fo(t),n)}new Promise(()=>{});function fo(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;let i=[...t,l];if(r.type===w.Fragment){n.push.apply(n,fo(r.props.children,i));return}r.type!==Te&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fo(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(null,arguments)}function Th(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ih(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Oh(e,t){return e.button===0&&(!t||t==="_self")&&!Ih(e)}const Mh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bh="6";try{window.__reactRouterVersion=bh}catch{}const Dh="startTransition",Rs=Pd[Dh];function Uh(e){let{basename:t,children:n,future:r,window:l}=e,i=w.useRef();i.current==null&&(i.current=Ap({window:l,v5Compat:!0}));let o=i.current,[s,u]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},m=w.useCallback(p=>{c&&Rs?Rs(()=>u(p)):u(p)},[u,c]);return w.useLayoutEffect(()=>o.listen(m),[o,m]),w.useEffect(()=>zh(r),[r]),w.createElement(Lh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:u,to:c,preventScrollReset:m,viewTransition:p}=t,g=Th(t,Mh),{basename:x}=w.useContext(Nt),v,k=!1;if(typeof c=="string"&&Ah.test(c)&&(v=c,Fh))try{let h=new URL(window.location.href),y=c.startsWith("//")?new URL(h.protocol+c):new URL(c),j=da(y.pathname,x);y.origin===h.origin&&j!=null?c=j+y.search+y.hash:k=!0}catch{}let N=hh(c,{relative:l}),f=$h(c,{replace:o,state:s,target:u,preventScrollReset:m,relative:l,viewTransition:p});function d(h){r&&r(h),h.defaultPrevented||f(h)}return w.createElement("a",po({},g,{href:v||N,onClick:k||i?r:d,ref:n,target:u}))});var Ts;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ts||(Ts={}));var Is;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Is||(Is={}));function $h(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,u=Fl(),c=wn(),m=rd(e,{relative:o});return w.useCallback(p=>{if(Oh(p,n)){p.preventDefault();let g=r!==void 0?r:yl(c)===yl(m);u(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[c,u,m,r,l,n,e,i,o,s])}/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),b=(e,t)=>{const n=w.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:u,...c},m)=>w.createElement("svg",{ref:m,...Bh,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Vh(e)}`,s].join(" "),...c},[...t.map(([p,g])=>w.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=b("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=b("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=b("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=b("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=b("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=b("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=b("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=b("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=b("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=b("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=b("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=b("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=b("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=b("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=b("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=b("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=b("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=b("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=b("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=b("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=b("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=b("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=b("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=b("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=b("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=b("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=b("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=b("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function lm({user:e,onLogout:t}){const[n,r]=w.useState(!1),[l,i]=w.useState(!1),o=wn(),s=m=>o.pathname===m,u=()=>r(!n),c=m=>`
    nav-link flex items-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300
    ${s(m)?"text-purple-400 bg-purple-500/10 border-b-2 border-purple-500 rounded-b-none":"text-gray-300 hover:text-white hover:bg-white/5"}
  `;return a.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 bg-[#0e0c26]/75 backdrop-blur-md border-b border-purple-500/20 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300",children:[a.jsxs(F,{to:"/",className:"flex items-center gap-2",children:[a.jsx(be,{className:"h-6 w-6 text-[#a855f7] animate-pulse"}),a.jsx("span",{className:"logo-text",children:"COUTURE AI"})]}),e&&a.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[a.jsxs(F,{to:"/dashboard",className:c("/dashboard"),children:[a.jsx(Os,{className:"h-4 w-4"})," Home"]}),a.jsxs(F,{to:"/about",className:c("/about"),children:[a.jsx(ho,{className:"h-4 w-4"})," About"]}),a.jsxs("div",{className:"relative",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[a.jsxs("button",{className:"flex items-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5",children:["Services ",a.jsx(sd,{className:`h-4 w-4 transition-transform duration-300 ${l?"rotate-180":""}`})]}),l&&a.jsxs("div",{className:"absolute top-full left-0 mt-1 w-48 rounded-xl bg-[#0f0c24] border border-purple-500/20 p-2 shadow-2xl animate-scale-in",children:[a.jsxs(F,{to:"/services/generate",className:"flex items-center gap-2 p-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors",onClick:()=>i(!1),children:[a.jsx(be,{className:"h-4 w-4 text-purple-400"})," Cloth Generation"]}),a.jsxs(F,{to:"/services/wardrobe",className:"flex items-center gap-2 p-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors",onClick:()=>i(!1),children:[a.jsx(dr,{className:"h-4 w-4 text-cyan-400"})," Personal Wardrobe"]})]})]}),a.jsxs(F,{to:"/team",className:c("/team"),children:[a.jsx(kl,{className:"h-4 w-4"})," Team"]}),a.jsxs(F,{to:"/feedback",className:c("/feedback"),children:[a.jsx(xl,{className:"h-4 w-4"})," Feedback"]})]}),a.jsx("div",{className:"hidden md:flex items-center gap-4",children:e?a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20",children:[a.jsx(wl,{className:"h-4 w-4 text-[#a855f7]"}),a.jsx("span",{className:"text-sm font-semibold text-purple-300",children:e})]}),a.jsxs("button",{onClick:t,className:"flex items-center gap-1.5 px-4.5 py-2 rounded-full text-sm font-semibold text-white bg-red-600/90 hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 border-none cursor-pointer",children:[a.jsx(Ms,{className:"h-4 w-4"})," Sign Out"]})]}):a.jsx(F,{to:"/login",className:"flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 border-none",children:"Get Started"})}),e&&a.jsx("button",{onClick:u,className:"md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white cursor-pointer",children:n?a.jsx(rm,{className:"h-6 w-6"}):a.jsx(Zh,{className:"h-6 w-6"})}),!e&&a.jsx("div",{className:"md:hidden",children:a.jsx(F,{to:"/login",className:"px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#a855f7]",children:"Get Started"})}),e&&n&&a.jsxs("div",{className:"absolute top-full left-0 w-full bg-[#0e0c24] border-b border-purple-500/20 p-6 flex flex-col gap-4 md:hidden animate-fade-in shadow-2xl",children:[a.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 w-fit",children:[a.jsx(wl,{className:"h-4 w-4 text-[#a855f7]"}),a.jsx("span",{className:"text-sm font-semibold text-purple-300",children:e})]}),a.jsxs(F,{to:"/dashboard",className:"flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5",onClick:()=>r(!1),children:[a.jsx(Os,{className:"h-4 w-4"})," Home"]}),a.jsxs(F,{to:"/about",className:"flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5",onClick:()=>r(!1),children:[a.jsx(ho,{className:"h-4 w-4"})," About"]}),a.jsxs(F,{to:"/services/generate",className:"flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5",onClick:()=>r(!1),children:[a.jsx(be,{className:"h-4 w-4 text-purple-400"})," Cloth Generation"]}),a.jsxs(F,{to:"/services/wardrobe",className:"flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5",onClick:()=>r(!1),children:[a.jsx(dr,{className:"h-4 w-4 text-cyan-400"})," Virtual Wardrobe"]}),a.jsxs(F,{to:"/team",className:"flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5",onClick:()=>r(!1),children:[a.jsx(kl,{className:"h-4 w-4"})," Team"]}),a.jsxs(F,{to:"/feedback",className:"flex items-center gap-2 p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5",onClick:()=>r(!1),children:[a.jsx(xl,{className:"h-4 w-4"})," Feedback"]}),a.jsxs("button",{onClick:()=>{t(),r(!1)},className:"flex items-center justify-center gap-2 p-3 mt-2 rounded-xl text-white bg-red-600/90 hover:bg-red-700 font-semibold cursor-pointer border-none",children:[a.jsx(Ms,{className:"h-4 w-4"})," Sign Out"]})]}),a.jsx("style",{children:`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 80%;
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Flex & tailwind utility fallbacks for compile safety without Tailwind CSS */
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .flex-col { flex-direction: column; }
        .gap-1\\.5 { gap: 6px; }
        .gap-2 { gap: 8px; }
        .gap-4 { gap: 16px; }
        .gap-6 { gap: 24px; }
        .hidden { display: none; }
        .w-fit { width: fit-content; }
        
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
        }
        .p-2 { padding: 8px; }
        .p-2\\.5 { padding: 10px; }
        .p-3 { padding: 12px; }
        .py-2 { padding-top: 8px; padding-bottom: 8px; }
        .px-3 { padding-left: 12px; padding-right: 12px; }
        .px-4\\.5 { padding-left: 18px; padding-right: 18px; }
        .px-5 { padding-left: 20px; padding-right: 20px; }
        .py-2\\.5 { padding-top: 10px; padding-bottom: 10px; }
        .px-3\\.5 { padding-left: 14px; padding-right: 14px; }
        .py-1\\.5 { padding-top: 6px; padding-bottom: 6px; }
        .rounded-lg { border-radius: 8px; }
        .rounded-xl { border-radius: 12px; }
        .rounded-full { border-radius: 9999px; }
        .text-sm { font-size: 14px; }
        .text-xs { font-size: 12px; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .text-gray-300 { color: var(--text-secondary); }
        .text-purple-300 { color: #d8b4fe; }
        .text-purple-400 { color: #c084fc; }
        .bg-purple-500\\/10 { background-color: rgba(168, 85, 247, 0.1); }
        .border-purple-500\\/20 { border: 1px solid rgba(168, 85, 247, 0.2); }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .hover\\:bg-white\\/5:hover { background-color: rgba(255, 255, 255, 0.05); }
        .hover\\:text-white:hover { color: #ffffff; }
      `})]})}function Bt({user:e,children:t}){return e?t:a.jsx(Mn,{to:"/login",replace:!0})}function im(){return a.jsxs("div",{className:"page-container flex flex-col justify-center items-center text-center",children:[a.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12 md:py-24",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold mb-8 animate-fade-in",children:[a.jsx(be,{className:"h-4 w-4 text-purple-400"}),"Introducing CoutureAI V2"]}),a.jsxs("h1",{className:"text-4xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent",children:["Generate Prompt to ",a.jsx("br",{}),a.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent",children:"Clothing Design"})]}),a.jsx("p",{className:"text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12",children:"CoutureAI is an AI-powered fashion design platform that generates realistic clothing images based on user descriptions. Instantly visualize custom creations, perfect for fashion designers, shoppers, and styling enthusiasts."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-20",children:[a.jsxs(F,{to:"/login",className:"btn btn-primary px-8 py-4 text-lg font-bold flex items-center gap-2",children:["Get Started ",a.jsx(bn,{className:"h-5 w-5"})]}),a.jsx(F,{to:"/login",className:"btn btn-secondary px-8 py-4 text-lg font-bold",children:"Explore Gallery"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-left",children:[a.jsxs("div",{className:"glass-panel p-8 flex flex-col gap-4",children:[a.jsx("div",{className:"p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/20",children:a.jsx(be,{className:"h-6 w-6 text-purple-400"})}),a.jsx("h3",{className:"text-xl font-bold text-white",children:"AI Clothes Generation"}),a.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"Describe your dream apparel and let our cutting-edge neural models render high-definition designs instantly."})]}),a.jsxs("div",{className:"glass-panel p-8 flex flex-col gap-4",children:[a.jsx("div",{className:"p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-500/20",children:a.jsx(dr,{className:"h-6 w-6 text-cyan-400"})}),a.jsx("h3",{className:"text-xl font-bold text-white",children:"Virtual Wardrobe"}),a.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"Collect, manage, and download your favorite designs persistently. Keep inspiration organized in your custom virtual closet."})]}),a.jsxs("div",{className:"glass-panel p-8 flex flex-col gap-4",children:[a.jsx("div",{className:"p-3 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/20",children:a.jsx(em,{className:"h-6 w-6 text-emerald-400"})}),a.jsx("h3",{className:"text-xl font-bold text-white",children:"Design Sharing"}),a.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"Share generated outputs directly with custom tailors or boutiques to simplify sizing and bring designs to physical life."})]})]})]}),a.jsx("style",{children:`
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-20 { margin-bottom: 5rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-lg { font-size: 1.125rem; }
        .max-w-2xl { max-width: 42rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .gap-6 { gap: 24px; }
        .p-8 { padding: 2rem; }
        .text-xl { font-size: 1.25rem; }
        
        @media (min-width: 768px) {
          .md\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
          .md\\:text-7xl { font-size: 4.5rem; }
          .md\\:text-xl { font-size: 1.25rem; }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        
        /* Gradients fallbacks */
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; }
        .text-transparent { -webkit-text-fill-color: transparent; text-fill-color: transparent; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-white { --tw-gradient-from: #ffffff; --tw-gradient-to: rgba(255, 255, 255, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-purple-200 { --tw-gradient-to: rgba(233, 213, 255, 0); --tw-gradient-stops: var(--tw-gradient-from), #e9d5ff, var(--tw-gradient-to); }
        .to-purple-400 { --tw-gradient-to: #c084fc; }
        
        .from-purple-400 { --tw-gradient-from: #c084fc; --tw-gradient-to: rgba(192, 132, 252, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-pink-400 { --tw-gradient-to: rgba(244, 114, 182, 0); --tw-gradient-stops: var(--tw-gradient-from), #f472b6, var(--tw-gradient-to); }
        .to-indigo-400 { --tw-gradient-to: #818cf8; }
      `})]})}function om({onLogin:e}){const[t,n]=w.useState(""),[r,l]=w.useState(""),[i,o]=w.useState(""),[s,u]=w.useState(""),c=Fl(),m=p=>{p.preventDefault(),o(""),u("");const g=t.trim(),x=r.trim();if(!g||!x){o("Please fill in all fields.");return}const v=JSON.parse(localStorage.getItem("users"))||{};v[g]&&v[g].password===x?(u("Login successful! Redirecting..."),setTimeout(()=>{e(g),c("/dashboard")},1e3)):o("Invalid username or password. Please try again.")};return a.jsxs("div",{className:"login-wrapper",children:[a.jsxs("div",{className:"glass-panel login-card animate-fade-in",children:[a.jsx("h2",{className:"card-title",children:"Welcome Back"}),a.jsx("p",{className:"card-subtitle",children:"Enter your credentials to login"}),i&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Al,{className:"h-4 w-4 shrink-0"}),a.jsx("span",{children:i})]}),s&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(ad,{className:"h-4 w-4 shrink-0"}),a.jsx("span",{children:s})]}),a.jsxs("form",{onSubmit:m,className:"login-form",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsxs("div",{className:"input-icon-wrapper",children:[a.jsx(wl,{className:"input-icon"}),a.jsx("input",{type:"text",id:"username",placeholder:"Enter username",value:t,onChange:p=>n(p.target.value),required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"input-icon-wrapper",children:[a.jsx(mo,{className:"input-icon"}),a.jsx("input",{type:"password",id:"password",placeholder:"Enter password",value:r,onChange:p=>l(p.target.value),required:!0})]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary w-full submit-btn",children:"Login"})]}),a.jsxs("p",{className:"redirect-text",children:["Don't have an account? ",a.jsx(F,{to:"/register",className:"redirect-link",children:"Register here"})]})]}),a.jsx("style",{children:`
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background: radial-gradient(circle at center, #0f0c24 0%, #06050c 100%);
        }
        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }
        .card-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }
        .card-subtitle {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 24px;
        }
        .login-form {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .input-group label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .input-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          width: 18px;
          height: 18px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-icon-wrapper input {
          padding-left: 44px;
        }
        .w-full {
          width: 100%;
        }
        .submit-btn {
          margin-top: 10px;
          padding: 14px;
        }
        .redirect-text {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 24px;
        }
        .redirect-link {
          color: var(--primary);
          font-weight: 600;
        }
        .redirect-link:hover {
          color: #c084fc;
          text-decoration: underline;
        }
        .shrink-0 {
          flex-shrink: 0;
        }
      `})]})}function am(){const[e,t]=w.useState(""),[n,r]=w.useState(""),[l,i]=w.useState(""),[o,s]=w.useState(""),[u,c]=w.useState(""),[m,p]=w.useState(""),g=Fl(),x=v=>{v.preventDefault(),c(""),p("");const k=e.trim(),N=n.trim(),f=l.trim(),d=o.trim();if(!k||!N||!f||!d){c("Please fill in all fields.");return}if(f!==d){c("Passwords do not match. Please try again.");return}const h=JSON.parse(localStorage.getItem("users"))||{};if(h[k]){c("Username already exists. Please choose another.");return}h[k]={password:f,email:N},localStorage.setItem("users",JSON.stringify(h)),p("Registration successful! Redirecting to login..."),setTimeout(()=>{g("/login")},1500)};return a.jsxs("div",{className:"login-wrapper",children:[a.jsxs("div",{className:"glass-panel login-card animate-fade-in",children:[a.jsx("h2",{className:"card-title",children:"Create Account"}),a.jsx("p",{className:"card-subtitle",children:"Fill in the details below to sign up"}),u&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Al,{className:"h-4 w-4 shrink-0"}),a.jsx("span",{children:u})]}),m&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(ad,{className:"h-4 w-4 shrink-0"}),a.jsx("span",{children:m})]}),a.jsxs("form",{onSubmit:x,className:"login-form",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"username",children:"Username"}),a.jsxs("div",{className:"input-icon-wrapper",children:[a.jsx(wl,{className:"input-icon"}),a.jsx("input",{type:"text",id:"username",placeholder:"Choose username",value:e,onChange:v=>t(v.target.value),required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsxs("div",{className:"input-icon-wrapper",children:[a.jsx(Jh,{className:"input-icon"}),a.jsx("input",{type:"email",id:"email",placeholder:"Enter email",value:n,onChange:v=>r(v.target.value),required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"input-icon-wrapper",children:[a.jsx(mo,{className:"input-icon"}),a.jsx("input",{type:"password",id:"password",placeholder:"Create password",value:l,onChange:v=>i(v.target.value),required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsxs("div",{className:"input-icon-wrapper",children:[a.jsx(mo,{className:"input-icon"}),a.jsx("input",{type:"password",id:"confirmPassword",placeholder:"Confirm password",value:o,onChange:v=>s(v.target.value),required:!0})]})]}),a.jsx("button",{type:"submit",className:"btn btn-primary w-full submit-btn",children:"Register"})]}),a.jsxs("p",{className:"redirect-text",children:["Already have an account? ",a.jsx(F,{to:"/login",className:"redirect-link",children:"Login here"})]})]}),a.jsx("style",{children:`
        .login-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background: radial-gradient(circle at center, #0f0c24 0%, #06050c 100%);
        }
        .login-card {
          width: 100%;
          max-width: 420px;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }
        .card-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }
        .card-subtitle {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 24px;
        }
        .login-form {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .input-group label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .input-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          width: 18px;
          height: 18px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-icon-wrapper input {
          padding-left: 44px;
        }
        .w-full {
          width: 100%;
        }
        .submit-btn {
          margin-top: 10px;
          padding: 14px;
        }
        .redirect-text {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 24px;
        }
        .redirect-link {
          color: var(--primary);
          font-weight: 600;
        }
        .redirect-link:hover {
          color: #c084fc;
          text-decoration: underline;
        }
        .shrink-0 {
          flex-shrink: 0;
        }
      `})]})}function sm(){const e=localStorage.getItem("loggedInUser")||"Fashionista";return a.jsxs("div",{className:"page-container",children:[a.jsxs("div",{className:"welcome-banner glass-panel animate-fade-in",children:[a.jsxs("div",{className:"banner-content",children:[a.jsx("span",{className:"banner-badge",children:"FASHION DASHBOARD"}),a.jsxs("h1",{children:["Welcome, ",e,"!"]}),a.jsx("p",{children:"CoutureAI is your personal AI fashion playground. Describe any apparel or concept to instantly render high-fidelity garment renders, and save them directly in your digital closet."})]}),a.jsx("div",{className:"banner-glow-circle"})]}),a.jsx("h2",{className:"section-title",children:"Explore Services"}),a.jsxs("div",{className:"services-grid",children:[a.jsxs("div",{className:"glass-panel service-card animate-scale-in",style:{animationDelay:"0.1s"},children:[a.jsx("div",{className:"card-header-icon bg-purple-500/10 border-purple-500/20 text-purple-400",children:a.jsx(be,{className:"h-6 w-6"})}),a.jsx("h3",{children:"Cloth Generator"}),a.jsx("p",{children:"Translate clothing ideas into realistic mockups using state-of-the-art AI inference pipelines."}),a.jsxs(F,{to:"/services/generate",className:"card-link text-purple-400 hover:text-purple-300",children:["Generate Now ",a.jsx(bn,{className:"h-4 w-4"})]})]}),a.jsxs("div",{className:"glass-panel service-card animate-scale-in",style:{animationDelay:"0.2s"},children:[a.jsx("div",{className:"card-header-icon bg-cyan-500/10 border-cyan-500/20 text-cyan-400",children:a.jsx(dr,{className:"h-6 w-6"})}),a.jsx("h3",{children:"Virtual Wardrobe"}),a.jsx("p",{children:"Browse saved fashion items, export high-definition PNG files, or clean up your custom collections."}),a.jsxs(F,{to:"/services/wardrobe",className:"card-link text-cyan-400 hover:text-cyan-300",children:["Open Closet ",a.jsx(bn,{className:"h-4 w-4"})]})]}),a.jsxs("div",{className:"glass-panel service-card animate-scale-in",style:{animationDelay:"0.3s"},children:[a.jsx("div",{className:"card-header-icon bg-blue-500/10 border-blue-500/20 text-blue-400",children:a.jsx(kl,{className:"h-6 w-6"})}),a.jsx("h3",{children:"Meet the Team"}),a.jsx("p",{children:"Learn more about CoutureAI's development founders and connect with them on professional networks."}),a.jsxs(F,{to:"/team",className:"card-link text-blue-400 hover:text-blue-300",children:["Meet Creators ",a.jsx(bn,{className:"h-4 w-4"})]})]}),a.jsxs("div",{className:"glass-panel service-card animate-scale-in",style:{animationDelay:"0.4s"},children:[a.jsx("div",{className:"card-header-icon bg-pink-500/10 border-pink-500/20 text-pink-400",children:a.jsx(xl,{className:"h-6 w-6"})}),a.jsx("h3",{children:"Feedback Center"}),a.jsx("p",{children:"Share your platform feedback, submit feature requests, or report design bugs to our team."}),a.jsxs(F,{to:"/feedback",className:"card-link text-pink-400 hover:text-pink-300",children:["Submit Feedback ",a.jsx(bn,{className:"h-4 w-4"})]})]})]}),a.jsx("style",{children:`
        .welcome-banner {
          position: relative;
          padding: 48px;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 40px;
          border-color: rgba(168, 85, 247, 0.3);
        }
        .banner-content {
          position: relative;
          z-index: 2;
          max-width: 640px;
        }
        .banner-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary);
          background: rgba(168, 85, 247, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .welcome-banner h1 {
          font-size: 36px;
          margin-bottom: 12px;
          color: white;
        }
        .welcome-banner p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .banner-glow-circle {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 1;
        }
        .section-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 24px;
          padding-bottom: 60px;
        }
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .service-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          border-radius: 20px;
        }
        .service-card:hover {
          transform: translateY(-4px);
        }
        .card-header-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid;
        }
        .service-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: white;
        }
        .service-card p {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-secondary);
          flex-grow: 1;
        }
        .card-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 8px;
          transition: var(--transition-smooth);
        }
        .card-link svg {
          transition: transform 0.3s ease;
        }
        .card-link:hover svg {
          transform: translateX(4px);
        }
        .bg-blue-500\\/10 { background-color: rgba(59, 130, 246, 0.1); }
        .border-blue-500\\/20 { border: 1px solid rgba(59, 130, 246, 0.2); }
        .text-blue-400 { color: #60a5fa; }
        .bg-pink-500\\/10 { background-color: rgba(236, 72, 153, 0.1); }
        .border-pink-500\\/20 { border: 1px solid rgba(236, 72, 153, 0.2); }
        .text-pink-400 { color: #f472b6; }
        .bg-cyan-500\\/10 { background-color: rgba(6, 182, 212, 0.1); }
        .border-cyan-500\\/20 { border: 1px solid rgba(6, 182, 212, 0.2); }
        .text-cyan-400 { color: #22d3ee; }
      `})]})}function um(){return a.jsxs("div",{className:"page-container",children:[a.jsxs("div",{className:"about-header animate-fade-in",children:[a.jsxs("div",{className:"header-badge",children:[a.jsx(ho,{className:"h-4 w-4"})," ABOUT COUTURE AI"]}),a.jsx("h1",{children:"Our Vision & Solution"}),a.jsx("p",{children:"Bridging the gap between fashion imagination and physical reality."})]}),a.jsxs("div",{className:"about-grid",children:[a.jsxs("div",{className:"glass-panel about-panel animate-scale-in",style:{animationDelay:"0.1s"},children:[a.jsx("div",{className:"panel-icon bg-purple-500/10 text-purple-400",children:a.jsx(Qh,{className:"h-6 w-6"})}),a.jsx("h2",{children:"About CoutureAI"}),a.jsx("div",{className:"divider"}),a.jsx("p",{className:"panel-text",children:"CoutureAI is an innovative platform designed to bridge the gap between fashion imagination and reality. It allows users to generate highly realistic clothing images based on text descriptions, empowering individuals to visualize their unique styles."}),a.jsx("p",{className:"panel-text",children:"By leveraging AI-powered image generation, CoutureAI enhances the shopping experience, making it more interactive and customizable. Users can create, save, and refine their clothing concepts, ensuring a seamless journey from idea to design. Future integrations with AI-driven tools will further expand the platform's capabilities, enabling users to bring their dream outfits to life with greater accuracy and personalization."})]}),a.jsxs("div",{className:"glass-panel about-panel animate-scale-in",style:{animationDelay:"0.2s"},children:[a.jsx("div",{className:"panel-icon bg-cyan-500/10 text-cyan-400",children:a.jsx(nm,{className:"h-6 w-6"})}),a.jsx("h2",{children:"Our Solution"}),a.jsx("div",{className:"divider"}),a.jsx("p",{className:"panel-text",children:"This solution directly addresses the challenge of providing personalized visual representations of clothing for online shoppers. Traditional shopping platforms often lack the ability to generate images based on specific user requests, leading to a gap between imagination and reality."}),a.jsx("p",{className:"panel-text",children:"By enabling customers to visualize their unique clothing ideas, CoutureAI enhances the shopping experience, making it more engaging and satisfying. This personalized experience not only helps users refine their designs but also enables them to confidently share their visions with tailors for custom creations, thereby expanding their shopping possibilities and improving customer satisfaction. Ultimately, CoutureAI helps bridge the gap in fashion design, fulfilling user needs and aligning with the growing demand for customized clothing."})]})]}),a.jsx("style",{children:`
        .about-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary);
          background: rgba(168, 85, 247, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .about-header h1 {
          font-size: 38px;
          color: white;
          margin-bottom: 8px;
        }
        .about-header p {
          color: var(--text-secondary);
          font-size: 16px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding-bottom: 80px;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .about-panel {
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 24px;
        }
        .panel-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-radius: 16px;
          margin-bottom: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .about-panel h2 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }
        .divider {
          width: 60px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin-bottom: 24px;
        }
        .panel-text {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        .panel-text:last-child {
          margin-bottom: 0;
        }
      `})]})}function cm(){const[e,t]=w.useState(""),[n,r]=w.useState(!1),[l,i]=w.useState(""),[o,s]=w.useState(null),[u,c]=w.useState(""),[m,p]=w.useState(""),g=async()=>{const N=e.trim();if(!N){c("Please enter a clothing description.");return}r(!0),c(""),i(""),s(null),p("");const f="http://localhost:5000/generate";try{const d=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:N})});if(!d.ok)throw new Error(`Server returned status: ${d.status}`);const h=await d.blob(),y=URL.createObjectURL(h);s(h),i(y),r(!1)}catch(d){console.error(d),c("Failed to generate image. Please make sure the backend server is running on port 5000 and try again."),r(!1)}},x=()=>{if(!l)return;const N=document.createElement("a");N.href=l,N.download="CoutureAI_Design.png",document.body.appendChild(N),N.click(),document.body.removeChild(N)},v=N=>new Promise(f=>{const d=new FileReader;d.onloadend=()=>f(d.result),d.readAsDataURL(N)}),k=async()=>{if(o)try{let N=JSON.parse(localStorage.getItem("wardrobeImages"))||[];const f=await v(o);N.includes(f)?c("This design is already in your wardrobe."):(N.push(f),localStorage.setItem("wardrobeImages",JSON.stringify(N)),p("Design saved to your wardrobe successfully!"))}catch(N){console.error(N),c("Could not save design to wardrobe.")}};return a.jsxs("div",{className:"page-container generate-container",children:[a.jsxs("div",{className:"generate-layout",children:[a.jsxs("div",{className:"glass-panel sidebar-panel animate-scale-in",children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsx(be,{className:"h-5 w-5 text-purple-400"}),a.jsx("h2",{children:"Fashion Generator"})]}),a.jsx("p",{className:"sidebar-description",children:"Type in a detailed description of the clothing garment you'd like to design. Be descriptive about materials, colors, styles, and fits."}),a.jsx("div",{className:"input-group",children:a.jsx("textarea",{value:e,onChange:N=>{t(N.target.value),u&&c("")},placeholder:"E.g., A futuristic cyberpunk holographic jacket with glowing purple seams, high collar, leather sleeves, runway fashion, photorealistic...",rows:"6",disabled:n})}),u&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Al,{className:"h-4 w-4 shrink-0"}),a.jsx("span",{className:"text-xs",children:u})]}),m&&a.jsxs("div",{className:"alert alert-success",children:[a.jsx(qh,{className:"h-4 w-4 shrink-0 animate-spin",style:{animationDuration:"3s"}}),a.jsx("span",{className:"text-xs",children:m})]}),a.jsx("button",{onClick:g,disabled:n,className:"btn btn-primary w-full generate-btn",children:n?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"spinner-small"})," Generating..."]}):a.jsxs(a.Fragment,{children:[a.jsx(be,{className:"h-5 w-5"})," Generate Design"]})}),l&&a.jsxs("div",{className:"post-generate-actions",children:[a.jsxs("button",{onClick:x,className:"btn btn-secondary w-full",children:[a.jsx(Kh,{className:"h-4 w-4 text-cyan-400"})," Download PNG"]}),a.jsxs("button",{onClick:k,className:"btn btn-secondary w-full",children:[a.jsx(Yh,{className:"h-4 w-4 text-purple-400 fill-purple-400/20"})," Save to Wardrobe"]})]})]}),a.jsx("div",{className:"showcase-panel glass-panel animate-scale-in",style:{animationDelay:"0.1s"},children:n?a.jsxs("div",{className:"showcase-state",children:[a.jsx("div",{className:"pulse-loader",children:a.jsx(be,{className:"h-8 w-8 text-purple-400 animate-spin",style:{animationDuration:"4s"}})}),a.jsx("h3",{children:"Generating Fashion Artwork"}),a.jsx("p",{children:"Our generative engine is creating your custom apparel mockup. This takes about 10-15 seconds..."})]}):l?a.jsxs("div",{className:"showcase-image-wrapper",children:[a.jsx("img",{src:l,alt:"Generated fashion design",className:"showcase-image"}),a.jsxs("div",{className:"showcase-badge",children:[a.jsx(Gh,{className:"h-4 w-4"})," PREVIEW DESIGN"]})]}):a.jsxs("div",{className:"showcase-state",children:[a.jsx("div",{className:"empty-state-icon",children:a.jsx(be,{className:"h-10 w-10 text-purple-500/50"})}),a.jsx("h3",{children:"Showcase Terminal"}),a.jsx("p",{children:"Enter a description and click generate to render your custom apparel concept art here."})]})})]}),a.jsx("style",{children:`
        .generate-container {
          max-width: 1200px;
          padding-bottom: 60px;
        }
        .generate-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (min-width: 800px) {
          .generate-layout {
            grid-template-columns: 350px 1fr;
          }
        }
        .sidebar-panel {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: 20px;
          height: fit-content;
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sidebar-header h2 {
          font-size: 20px;
          color: white;
        }
        .sidebar-description {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
        }
        .generate-btn {
          padding: 14px;
          font-size: 15px;
        }
        .spinner-small {
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-left-color: white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
        }
        .post-generate-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
          animation: fadeIn 0.4s ease-out;
        }
        .showcase-panel {
          border-radius: 24px;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 20px;
        }
        .showcase-state {
          text-align: center;
          max-width: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px;
        }
        .showcase-state h3 {
          font-size: 20px;
          color: white;
          font-weight: 700;
        }
        .showcase-state p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .empty-state-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.05);
          border: 1px dashed rgba(168, 85, 247, 0.2);
          margin-bottom: 8px;
        }
        .pulse-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.1);
          animation: pulse-glow 2s infinite alternate;
          margin-bottom: 8px;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4); transform: scale(1); }
          100% { box-shadow: 0 0 20px 10px rgba(168, 85, 247, 0.1); transform: scale(1.05); }
        }
        .showcase-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          overflow: hidden;
        }
        .showcase-image {
          max-width: 100%;
          max-height: 550px;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.5s ease;
        }
        .showcase-image:hover {
          transform: scale(1.02);
        }
        .showcase-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(14, 12, 26, 0.8);
          border: 1px solid var(--border-color);
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: white;
          backdrop-filter: blur(8px);
        }
      `})]})}function dm(){const[e,t]=w.useState([]),[n,r]=w.useState(null);w.useEffect(()=>{const o=JSON.parse(localStorage.getItem("wardrobeImages"))||[];t(o)},[]);const l=o=>{r(o),setTimeout(()=>{let s=JSON.parse(localStorage.getItem("wardrobeImages"))||[];s.splice(o,1),localStorage.setItem("wardrobeImages",JSON.stringify(s)),t(s),r(null)},300)},i=()=>{window.confirm("Are you sure you want to clear your entire wardrobe? This action cannot be undone.")&&(localStorage.removeItem("wardrobeImages"),t([]))};return a.jsxs("div",{className:"page-container wardrobe-container",children:[a.jsx("div",{className:"wardrobe-header animate-fade-in",children:a.jsxs("div",{className:"flex justify-between items-center w-full flex-wrap gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"My Virtual Wardrobe"}),a.jsx("p",{children:"Collection of your custom AI-generated fashion creations."})]}),e.length>0&&a.jsxs("button",{onClick:i,className:"btn btn-danger flex items-center gap-2",children:[a.jsx(bs,{className:"h-4 w-4"})," Clear Wardrobe"]})]})}),e.length===0?a.jsxs("div",{className:"glass-panel empty-wardrobe animate-scale-in",children:[a.jsx("div",{className:"empty-icon-circle",children:a.jsx(dr,{className:"h-8 w-8 text-purple-400"})}),a.jsx("h2",{children:"Your Wardrobe is Empty"}),a.jsx("p",{children:"You haven't saved any custom designs yet. Head over to the Cloth Generator to render your first styling concept!"}),a.jsxs(F,{to:"/services/generate",className:"btn btn-primary mt-4",children:[a.jsx(be,{className:"h-4 w-4"})," Create New Design"]})]}):a.jsx("div",{className:"wardrobe-grid",children:e.map((o,s)=>a.jsxs("div",{className:`glass-panel wardrobe-card ${n===s?"fade-out-item":"animate-scale-in"}`,style:{animationDelay:`${s*.05}s`},children:[a.jsx("div",{className:"card-image-wrapper",children:a.jsx("img",{src:o,alt:`Saved clothing ${s+1}`,className:"wardrobe-image"})}),a.jsxs("div",{className:"card-footer",children:[a.jsxs("span",{className:"card-index-tag",children:["Design #",s+1]}),a.jsx("button",{onClick:()=>l(s),className:"remove-btn-icon",title:"Remove design",children:a.jsx(bs,{className:"h-4 w-4"})})]})]},s))}),a.jsx("div",{className:"navigation-footer",children:a.jsxs(F,{to:"/services/generate",className:"back-navigation",children:[a.jsx(Wh,{className:"h-4 w-4"})," Back to CoutureAI Generator"]})}),a.jsx("style",{children:`
        .wardrobe-container {
          max-width: 1000px;
          padding-bottom: 80px;
        }
        .wardrobe-header {
          margin-bottom: 36px;
        }
        .wardrobe-header h1 {
          font-size: 32px;
          color: white;
          margin-bottom: 4px;
        }
        .wardrobe-header p {
          color: var(--text-secondary);
          font-size: 15px;
        }
        .empty-wardrobe {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 40px;
          max-width: 550px;
          margin: 40px auto;
          border-radius: 24px;
          gap: 16px;
        }
        .empty-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
        }
        .empty-wardrobe h2 {
          font-size: 22px;
          color: white;
        }
        .empty-wardrobe p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .wardrobe-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 24px;
        }
        @media (min-width: 500px) {
          .wardrobe-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 800px) {
          .wardrobe-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .wardrobe-card {
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 350px;
          transition: var(--transition-bounce);
        }
        .wardrobe-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary);
          box-shadow: 0 10px 24px rgba(168, 85, 247, 0.2);
        }
        .card-image-wrapper {
          flex-grow: 1;
          position: relative;
          background: #080612;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wardrobe-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .wardrobe-card:hover .wardrobe-image {
          transform: scale(1.06);
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: rgba(14, 12, 26, 0.85);
          border-top: 1px solid rgba(168, 85, 247, 0.15);
        }
        .card-index-tag {
          font-size: 13px;
          font-weight: 600;
          color: white;
        }
        .remove-btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .remove-btn-icon:hover {
          background: var(--danger);
          border-color: var(--danger);
          color: white;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
          transform: scale(1.1);
        }
        .fade-out-item {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .navigation-footer {
          margin-top: 48px;
          text-align: center;
        }
        .back-navigation {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
        }
        .back-navigation:hover {
          color: #c084fc;
          text-decoration: underline;
        }
        .mt-4 {
          margin-top: 16px;
        }
      `})]})}const Ds=[{id:"abhiram",name:"Malraju Abhiram",shortName:"Abhiram",role:"Team Leader",linkedin:"https://www.linkedin.com/in/abhiram-malraju/",bio:"Abhiram coordinates project deliverables, handles architecture definition, and oversees overall CoutureAI product design. He ensures frontend design is aligned with modern standards."},{id:"srinivas",name:"Mareedu Srinivas",shortName:"Srinivas",role:"Core Developer",linkedin:"https://www.linkedin.com/in/mareedu-srinivas-8a80872a5/",bio:"Srinivas manages local state integration, API request processing, image loading states, and backend route validation. He is responsible for migrating HTML to React architecture."},{id:"uday",name:"Pabboju Uday Chary",shortName:"Uday Chary",role:"Frontend Architect",linkedin:"https://www.linkedin.com/in/pabboju-uday-23157b286/",bio:"Uday designs custom micro-animations, glassmorphism layouts, and styles global visual systems. He ensures responsiveness on various mobile breakpoints."},{id:"kishor",name:"Koyyala Nagendra Kishor",shortName:"Kishor",role:"System Engineer",linkedin:"https://www.linkedin.com/in/nagendra-kishor-66a0872a5/",bio:"Kishor manages database records, local caches, and the Hugging Face FLUX inference model queries. He resolves response latencies and server bugs."}];function fm(){const[e,t]=w.useState(null),n=r=>{t(e===r?null:r)};return a.jsxs("div",{className:"page-container team-container",children:[a.jsxs("div",{className:"team-header animate-fade-in",children:[a.jsxs("div",{className:"header-badge",children:[a.jsx(kl,{className:"h-4 w-4"})," OUR CREATORS"]}),a.jsx("h1",{children:"Meet Our Team"}),a.jsx("p",{children:"The engineering minds behind the CoutureAI generative workspace."})]}),a.jsx("div",{className:"team-grid",children:Ds.map((r,l)=>{const i=e===r.id;return a.jsxs("div",{className:`glass-panel member-card ${i?"card-active":""} animate-scale-in`,style:{animationDelay:`${l*.1}s`},children:[a.jsx("div",{className:"avatar-placeholder",children:a.jsx("span",{className:"avatar-initials",children:r.shortName[0]})}),a.jsx("h3",{children:r.shortName}),a.jsx("span",{className:"member-role",children:r.role}),a.jsxs("button",{onClick:()=>n(r.id),className:`btn btn-secondary details-toggle-btn ${i?"active":""}`,children:[i?"Hide Info":"Show Info",i?a.jsx(Hh,{className:"h-4 w-4"}):a.jsx(sd,{className:"h-4 w-4"})]})]},r.id)})}),e&&a.jsx("div",{className:"glass-panel details-drawer animate-scale-in",children:(()=>{const r=Ds.find(l=>l.id===e);return a.jsxs("div",{className:"drawer-inner",children:[a.jsxs("div",{className:"drawer-meta",children:[a.jsx("h2",{children:r.name}),a.jsx("span",{className:"drawer-role-badge",children:r.role})]}),a.jsx("p",{className:"drawer-bio",children:r.bio}),a.jsx("div",{className:"drawer-footer",children:a.jsxs("a",{href:r.linkedin,target:"_blank",rel:"noreferrer",className:"linkedin-profile-link",children:[a.jsx(Xh,{className:"h-4 w-4"})," Connect on LinkedIn"]})})]})})()}),a.jsx("style",{children:`
        .team-container {
          max-width: 1000px;
          padding-bottom: 80px;
        }
        .team-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .team-header h1 {
          font-size: 36px;
          color: white;
          margin-bottom: 8px;
        }
        .team-header p {
          color: var(--text-secondary);
          font-size: 16px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        @media (min-width: 500px) {
          .team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .member-card {
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 20px;
          transition: var(--transition-bounce);
        }
        .member-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary);
          box-shadow: 0 10px 24px rgba(168, 85, 247, 0.2);
        }
        .card-active {
          border-color: var(--primary);
          background: rgba(168, 85, 247, 0.05);
          box-shadow: 0 10px 24px rgba(168, 85, 247, 0.15);
        }
        .avatar-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%);
          margin-bottom: 18px;
          box-shadow: 0 8px 16px rgba(168, 85, 247, 0.3);
        }
        .avatar-initials {
          font-size: 24px;
          font-weight: 700;
          color: white;
        }
        .member-card h3 {
          font-size: 18px;
          color: white;
          margin-bottom: 4px;
        }
        .member-role {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .details-toggle-btn {
          width: 100%;
          padding: 8px 16px;
          font-size: 13px;
          border-radius: 20px;
        }
        .details-toggle-btn.active {
          background: rgba(168, 85, 247, 0.2);
          border-color: var(--primary);
          color: white;
        }
        .details-drawer {
          border-radius: 20px;
          padding: 30px;
          margin-top: 24px;
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.1);
        }
        .drawer-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .drawer-meta h2 {
          font-size: 22px;
          color: white;
        }
        .drawer-role-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--primary);
          background: rgba(168, 85, 247, 0.1);
          padding: 4px 10px;
          border-radius: 12px;
          text-transform: uppercase;
        }
        .drawer-bio {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
          max-width: 800px;
        }
        .linkedin-profile-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 20px;
          border: 1px solid #0077b5;
          color: #7dd3fc;
          background: rgba(0, 119, 181, 0.1);
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-smooth);
        }
        .linkedin-profile-link:hover {
          background: #0077b5;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 119, 181, 0.4);
          transform: translateY(-2px);
        }
      `})]})}function pm(){const[e,t]=w.useState(0),[n,r]=w.useState(0),[l,i]=w.useState(""),[o,s]=w.useState(!1),[u,c]=w.useState(""),m=p=>{p.preventDefault(),c("");const g=localStorage.getItem("loggedInUser");if(!g){c("Please sign in first to submit feedback.");return}const x=l.trim();if(!x){c("Feedback comments cannot be empty.");return}if(e===0){c("Please select a star rating.");return}const v={rating:e,comment:x,timestamp:new Date().toISOString()};localStorage.setItem(`feedback_${g}`,JSON.stringify(v)),s(!0)};return a.jsxs("div",{className:"page-container feedback-container",children:[a.jsxs("div",{className:"feedback-header animate-fade-in",children:[a.jsxs("div",{className:"header-badge",children:[a.jsx(xl,{className:"h-4 w-4"})," FEEDBACK CENTER"]}),a.jsx("h1",{children:"We Value Your Feedback"}),a.jsx("p",{children:"Help us improve CoutureAI by sharing your experience or suggesting new features."})]}),o?a.jsxs("div",{className:"glass-panel success-card animate-scale-in",children:[a.jsx("div",{className:"checkmark-circle",children:a.jsxs("svg",{className:"checkmark-svg",viewBox:"0 0 52 52",children:[a.jsx("circle",{className:"checkmark-circle-path",cx:"26",cy:"26",r:"25",fill:"none"}),a.jsx("path",{className:"checkmark-check-path",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})}),a.jsx("h2",{children:"Thank You!"}),a.jsx("p",{children:"Your feedback has been submitted successfully. We appreciate your suggestions and support in improving the platform."}),a.jsx("button",{onClick:()=>{s(!1),t(0),i("")},className:"btn btn-secondary mt-4",children:"Submit Another Feedback"})]}):a.jsx("div",{className:"glass-panel feedback-card animate-scale-in",children:a.jsxs("form",{onSubmit:m,className:"feedback-form",children:[a.jsxs("div",{className:"rating-selector",children:[a.jsx("label",{children:"How would you rate your experience?"}),a.jsx("div",{className:"stars-row",children:[1,2,3,4,5].map(p=>{const g=(n||e)>=p;return a.jsx("button",{type:"button",className:"star-btn",onClick:()=>t(p),onMouseEnter:()=>r(p),onMouseLeave:()=>r(0),children:a.jsx(tm,{className:`h-8 w-8 star-icon ${g?"star-active":""}`})},p)})})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{htmlFor:"comments",children:"Write your comments or suggestions"}),a.jsx("textarea",{id:"comments",value:l,onChange:p=>{i(p.target.value),u&&c("")},placeholder:"Share your thoughts on design quality, UI performance, feature suggestions, or bugs...",rows:"6",required:!0})]}),u&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Al,{className:"h-4 w-4 shrink-0"}),a.jsx("span",{children:u})]}),a.jsx("button",{type:"submit",className:"btn btn-primary submit-btn",children:"Submit Feedback"})]})}),a.jsx("style",{children:`
        .feedback-container {
          max-width: 650px;
          padding-bottom: 80px;
        }
        .feedback-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .feedback-header h1 {
          font-size: 32px;
          color: white;
          margin-bottom: 8px;
        }
        .feedback-header p {
          color: var(--text-secondary);
          font-size: 15px;
        }
        .feedback-card {
          padding: 40px;
          border-radius: 24px;
        }
        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .rating-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
        }
        .rating-selector label {
          font-size: 15px;
          font-weight: 600;
          color: white;
        }
        .stars-row {
          display: flex;
          gap: 8px;
        }
        .star-btn {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .star-btn:hover {
          transform: scale(1.2);
        }
        .star-icon {
          color: rgba(255, 255, 255, 0.15);
          fill: transparent;
          transition: var(--transition-smooth);
        }
        .star-active {
          color: #eab308;
          fill: #eab308;
          filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.5));
        }
        .input-group label {
          font-size: 14px;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
          display: block;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
        }
        
        /* Success Screen checkmark animation */
        .success-card {
          text-align: center;
          padding: 50px 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .success-card h2 {
          font-size: 26px;
          color: white;
        }
        .success-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 400px;
        }
        .checkmark-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: #10b981;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #10b981;
          animation: checkmark-fill .4s ease-in-out .4s forwards, checkmark-scale .3s ease-in-out 0s both;
        }
        .checkmark-svg {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: block;
          stroke-width: 4;
          stroke: #10b981;
          stroke-miterlimit: 10;
        }
        .checkmark-circle-path {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 4;
          stroke-miterlimit: 10;
          stroke: #10b981;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark-check-path {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          stroke: white;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }
        
        @keyframes stroke {
          100% { stroke-dashoffset: 0; }
        }
        @keyframes checkmark-scale {
          0%, 100% { transform: none; }
          50% { transform: scale3d(1.1, 1.1, 1); }
        }
        @keyframes checkmark-fill {
          100% { box-shadow: inset 0px 0px 0px 40px #10b981; }
        }
        .mt-4 {
          margin-top: 16px;
        }
      `})]})}function hm(){const[e,t]=w.useState(null),[n,r]=w.useState(!0);w.useEffect(()=>{const o=localStorage.getItem("loggedInUser");o&&t(o),r(!1)},[]);const l=o=>{localStorage.setItem("loggedInUser",o),t(o)},i=()=>{localStorage.removeItem("loggedInUser"),t(null)};return n?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#06050c"},children:a.jsx("div",{className:"spinner"})}):a.jsxs(Uh,{children:[a.jsx(lm,{user:e,onLogout:i}),a.jsxs(Rh,{children:[a.jsx(Te,{path:"/",element:e?a.jsx(Mn,{to:"/dashboard",replace:!0}):a.jsx(im,{})}),a.jsx(Te,{path:"/login",element:e?a.jsx(Mn,{to:"/dashboard",replace:!0}):a.jsx(om,{onLogin:l})}),a.jsx(Te,{path:"/register",element:e?a.jsx(Mn,{to:"/dashboard",replace:!0}):a.jsx(am,{})}),a.jsx(Te,{path:"/dashboard",element:a.jsx(Bt,{user:e,children:a.jsx(sm,{})})}),a.jsx(Te,{path:"/about",element:a.jsx(Bt,{user:e,children:a.jsx(um,{})})}),a.jsx(Te,{path:"/services/generate",element:a.jsx(Bt,{user:e,children:a.jsx(cm,{})})}),a.jsx(Te,{path:"/services/wardrobe",element:a.jsx(Bt,{user:e,children:a.jsx(dm,{})})}),a.jsx(Te,{path:"/team",element:a.jsx(Bt,{user:e,children:a.jsx(fm,{})})}),a.jsx(Te,{path:"/feedback",element:a.jsx(Bt,{user:e,children:a.jsx(pm,{})})}),a.jsx(Te,{path:"*",element:a.jsx(Mn,{to:"/",replace:!0})})]})]})}vi.createRoot(document.getElementById("root")).render(a.jsx(Gs.StrictMode,{children:a.jsx(hm,{})}));
