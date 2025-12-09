(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Sy={exports:{}},Bl={},Ay={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),UE=Symbol.for("react.portal"),jE=Symbol.for("react.fragment"),zE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),$E=Symbol.for("react.provider"),qE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),WE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),KE=Symbol.for("react.lazy"),Fp=Symbol.iterator;function QE(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var Cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ky=Object.assign,Ry={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Ry,this.updater=n||Cy}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Py(){}Py.prototype=Qs.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=Ry,this.updater=n||Cy}var Zh=Jh.prototype=new Py;Zh.constructor=Jh;ky(Zh,Qs.prototype);Zh.isPureReactComponent=!0;var Up=Array.isArray,xy=Object.prototype.hasOwnProperty,ed={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Vy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)xy.call(e,r)&&!Ny.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:xo,type:t,key:i,ref:o,props:s,_owner:ed.current}}function YE(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function XE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jp=/\/+/g;function Wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XE(""+t.key):e.toString(36)}function xa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case UE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Wu(o,0):r,Up(s)?(n="",t!=null&&(n=t.replace(jp,"$&/")+"/"),xa(s,e,n,"",function(h){return h})):s!=null&&(td(s)&&(s=YE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(jp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Up(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Wu(i,l);o+=xa(i,e,n,u,s)}else if(u=QE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Wu(i,l++),o+=xa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var r=[],s=0;return xa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function JE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Na={transition:null},ZE={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Na,ReactCurrentOwner:ed};function Dy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Qs;ee.Fragment=jE;ee.Profiler=BE;ee.PureComponent=Jh;ee.StrictMode=zE;ee.Suspense=WE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;ee.act=Dy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ky({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ed.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)xy.call(e,u)&&!Ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:xo,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:qE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$E,_context:t},t.Consumer=t};ee.createElement=Vy;ee.createFactory=function(t){var e=Vy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:HE,render:t}};ee.isValidElement=td;ee.lazy=function(t){return{$$typeof:KE,_payload:{_status:-1,_result:t},_init:JE}};ee.memo=function(t,e){return{$$typeof:GE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Na.transition;Na.transition={};try{t()}finally{Na.transition=e}};ee.unstable_act=Dy;ee.useCallback=function(t,e){return at.current.useCallback(t,e)};ee.useContext=function(t){return at.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ee.useEffect=function(t,e){return at.current.useEffect(t,e)};ee.useId=function(){return at.current.useId()};ee.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return at.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ee.useRef=function(t){return at.current.useRef(t)};ee.useState=function(t){return at.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return at.current.useTransition()};ee.version="18.3.1";Ay.exports=ee;var oe=Ay.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=oe,t1=Symbol.for("react.element"),n1=Symbol.for("react.fragment"),r1=Object.prototype.hasOwnProperty,s1=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i1={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)r1.call(e,r)&&!i1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:t1,type:t,key:i,ref:o,props:s,_owner:s1.current}}Bl.Fragment=n1;Bl.jsx=by;Bl.jsxs=by;Sy.exports=Bl;var E=Sy.exports,Oy={exports:{}},Tt={},Ly={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,O){var B=$.length;$.push(O);e:for(;0<B;){var Y=B-1>>>1,ue=$[Y];if(0<s(ue,O))$[Y]=O,$[B]=ue,B=Y;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var O=$[0],B=$.pop();if(B!==O){$[0]=B;e:for(var Y=0,ue=$.length,Tr=ue>>>1;Y<Tr;){var St=2*(Y+1)-1,Ir=$[St],Dt=St+1,An=$[Dt];if(0>s(Ir,B))Dt<ue&&0>s(An,Ir)?($[Y]=An,$[Dt]=B,Y=Dt):($[Y]=Ir,$[St]=B,Y=St);else if(Dt<ue&&0>s(An,B))$[Y]=An,$[Dt]=B,Y=Dt;else break e}}return O}function s($,O){var B=$.sortIndex-O.sortIndex;return B!==0?B:$.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,k=!1,x=!1,V=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var O=n(h);O!==null;){if(O.callback===null)r(h);else if(O.startTime<=$)r(h),O.sortIndex=O.expirationTime,e(u,O);else break;O=n(h)}}function b($){if(V=!1,C($),!x)if(n(u)!==null)x=!0,wr(j);else{var O=n(h);O!==null&&Er(b,O.startTime-$)}}function j($,O){x=!1,V&&(V=!1,S(y),y=-1),k=!0;var B=g;try{for(C(O),p=n(u);p!==null&&(!(p.expirationTime>O)||$&&!A());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var ue=Y(p.expirationTime<=O);O=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),C(O)}else r(u);p=n(u)}if(p!==null)var Tr=!0;else{var St=n(h);St!==null&&Er(b,St.startTime-O),Tr=!1}return Tr}finally{p=null,g=B,k=!1}}var U=!1,v=null,y=-1,w=5,I=-1;function A(){return!(t.unstable_now()-I<w)}function R(){if(v!==null){var $=t.unstable_now();I=$;var O=!0;try{O=v(!0,$)}finally{O?T():(U=!1,v=null)}}else U=!1}var T;if(typeof _=="function")T=function(){_(R)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Vt=Ne.port2;Ne.port1.onmessage=R,T=function(){Vt.postMessage(null)}}else T=function(){D(R,0)};function wr($){v=$,U||(U=!0,T())}function Er($,O){y=D(function(){$(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||k||(x=!0,wr(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var B=g;g=O;try{return $()}finally{g=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,O){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var B=g;g=$;try{return O()}finally{g=B}},t.unstable_scheduleCallback=function($,O,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,$){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=B+ue,$={id:f++,callback:O,priorityLevel:$,startTime:B,expirationTime:ue,sortIndex:-1},B>Y?($.sortIndex=B,e(h,$),n(u)===null&&$===n(h)&&(V?(S(y),y=-1):V=!0,Er(b,B-Y))):($.sortIndex=ue,e(u,$),x||k||(x=!0,wr(j))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var O=g;return function(){var B=g;g=O;try{return $.apply(this,arguments)}finally{g=B}}}})(My);Ly.exports=My;var o1=Ly.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=oe,Et=o1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fy=new Set,no={};function Qr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(no[t]=e,t=0;t<e.length;t++)Fy.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=Object.prototype.hasOwnProperty,l1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zp={},Bp={};function u1(t){return Nc.call(Bp,t)?!0:Nc.call(zp,t)?!1:l1.test(t)?Bp[t]=!0:(zp[t]=!0,!1)}function c1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function h1(t,e,n,r){if(e===null||typeof e>"u"||c1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,rd);We[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,rd);We[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,rd);We[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,r){var s=We.hasOwnProperty(e)?We[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h1(e,n,s,r)&&(n=null),r||s===null?u1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),zy=Symbol.for("react.offscreen"),$p=Symbol.iterator;function Ii(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Gu;function Vi(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Ku=!1;function Qu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vi(t):""}function d1(t){switch(t.tag){case 5:return Vi(t.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case Vc:return"Profiler";case id:return"StrictMode";case Dc:return"Suspense";case bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jy:return(t.displayName||"Context")+".Consumer";case Uy:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:Oc(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return Oc(t(e))}catch{}}return null}function f1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oc(e);case 8:return e===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function By(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p1(t){var e=By(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=p1(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=By(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qy(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function Mc(t,e){qy(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Di(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Hy(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,Gy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m1=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){m1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function Ky(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function Qy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ky(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var g1=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(g1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qc=null,Is=null,Ss=null;function Kp(t){if(t=Do(t)){if(typeof qc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Gl(e),qc(t.stateNode,t.type,e))}}function Yy(t){Is?Ss?Ss.push(t):Ss=[t]:Is=t}function Xy(){if(Is){var t=Is,e=Ss;if(Ss=Is=null,Kp(t),e)for(t=0;t<e.length;t++)Kp(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var Yu=!1;function e_(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Jy(t,e,n)}finally{Yu=!1,(Is!==null||Ss!==null)&&(Zy(),Xy())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Hc=!1;if(mn)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Hc=!1}function y1(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Bi=!1,Za=null,el=!1,Wc=null,_1={onError:function(t){Bi=!0,Za=t}};function v1(t,e,n,r,s,i,o,l,u){Bi=!1,Za=null,y1.apply(_1,arguments)}function w1(t,e,n,r,s,i,o,l,u){if(v1.apply(this,arguments),Bi){if(Bi){var h=Za;Bi=!1,Za=null}else throw Error(F(198));el||(el=!0,Wc=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qp(t){if(Yr(t)!==t)throw Error(F(188))}function E1(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Qp(s),t;if(i===r)return Qp(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function n_(t){return t=E1(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var s_=Et.unstable_scheduleCallback,Yp=Et.unstable_cancelCallback,T1=Et.unstable_shouldYield,I1=Et.unstable_requestPaint,Ce=Et.unstable_now,S1=Et.unstable_getCurrentPriorityLevel,ud=Et.unstable_ImmediatePriority,i_=Et.unstable_UserBlockingPriority,tl=Et.unstable_NormalPriority,A1=Et.unstable_LowPriority,o_=Et.unstable_IdlePriority,$l=null,Jt=null;function C1(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:P1,k1=Math.log,R1=Math.LN2;function P1(t){return t>>>=0,t===0?32:31-(k1(t)/R1|0)|0}var ua=64,ca=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=bi(l):(i&=o,i!==0&&(r=bi(i)))}else o=n&~s,o!==0?r=bi(o):i!==0&&(r=bi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),s=1<<n,r|=t[n],e&=~s;return r}function x1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-jt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=x1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function V1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-jt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var le=0;function l_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,hd,c_,h_,d_,Kc=!1,ha=[],Hn=null,Wn=null,Gn=null,io=new Map,oo=new Map,Ln=[],D1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Ai(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Do(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function b1(t,e,n,r,s){switch(e){case"focusin":return Hn=Ai(Hn,t,e,n,r,s),!0;case"dragenter":return Wn=Ai(Wn,t,e,n,r,s),!0;case"mouseover":return Gn=Ai(Gn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return io.set(i,Ai(io.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,oo.set(i,Ai(oo.get(i)||null,t,e,n,r,s)),!0}return!1}function f_(t){var e=Vr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=Do(n),e!==null&&hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Jp(t,e,n){Va(t)&&n.delete(e)}function O1(){Kc=!1,Hn!==null&&Va(Hn)&&(Hn=null),Wn!==null&&Va(Wn)&&(Wn=null),Gn!==null&&Va(Gn)&&(Gn=null),io.forEach(Jp),oo.forEach(Jp)}function Ci(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,O1)))}function ao(t){function e(s){return Ci(s,t)}if(0<ha.length){Ci(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&Ci(Hn,t),Wn!==null&&Ci(Wn,t),Gn!==null&&Ci(Gn,t),io.forEach(e),oo.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&Ln.shift()}var As=In.ReactCurrentBatchConfig,rl=!0;function L1(t,e,n,r){var s=le,i=As.transition;As.transition=null;try{le=1,dd(t,e,n,r)}finally{le=s,As.transition=i}}function M1(t,e,n,r){var s=le,i=As.transition;As.transition=null;try{le=4,dd(t,e,n,r)}finally{le=s,As.transition=i}}function dd(t,e,n,r){if(rl){var s=Qc(t,e,n,r);if(s===null)ac(t,e,r,sl,n),Xp(t,r);else if(b1(s,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<D1.indexOf(t)){for(;s!==null;){var i=Do(s);if(i!==null&&u_(i),i=Qc(t,e,n,r),i===null&&ac(t,e,r,sl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ac(t,e,r,null,n)}}var sl=null;function Qc(t,e,n,r){if(sl=null,t=ld(r),t=Vr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case ud:return 1;case i_:return 4;case tl:case A1:return 16;case o_:return 536870912;default:return 16}default:return 16}}var Bn=null,fd=null,Da=null;function m_(){if(Da)return Da;var t,e=fd,n=e.length,r,s="value"in Bn?Bn.value:Bn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Da=s.slice(t,1<r?1-r:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Zp(){return!1}function It(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?da:Zp,this.isPropagationStopped=Zp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=It(Ys),Vo=Ee({},Ys,{view:0,detail:0}),F1=It(Vo),Ju,Zu,ki,ql=Ee({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(Ju=t.screenX-ki.screenX,Zu=t.screenY-ki.screenY):Zu=Ju=0,ki=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),em=It(ql),U1=Ee({},ql,{dataTransfer:0}),j1=It(U1),z1=Ee({},Vo,{relatedTarget:0}),ec=It(z1),B1=Ee({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=It(B1),q1=Ee({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H1=It(q1),W1=Ee({},Ys,{data:0}),tm=It(W1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q1[t])?!!e[t]:!1}function md(){return Y1}var X1=Ee({},Vo,{key:function(t){if(t.key){var e=G1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J1=It(X1),Z1=Ee({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=It(Z1),eT=Ee({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),tT=It(eT),nT=Ee({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),rT=It(nT),sT=Ee({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iT=It(sT),oT=[9,13,27,32],gd=mn&&"CompositionEvent"in window,$i=null;mn&&"documentMode"in document&&($i=document.documentMode);var aT=mn&&"TextEvent"in window&&!$i,g_=mn&&(!gd||$i&&8<$i&&11>=$i),rm=" ",sm=!1;function y_(t,e){switch(t){case"keyup":return oT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function __(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function lT(t,e){switch(t){case"compositionend":return __(e);case"keypress":return e.which!==32?null:(sm=!0,rm);case"textInput":return t=e.data,t===rm&&sm?null:t;default:return null}}function uT(t,e){if(hs)return t==="compositionend"||!gd&&y_(t,e)?(t=m_(),Da=fd=Bn=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var cT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cT[t.type]:e==="textarea"}function v_(t,e,n,r){Yy(r),e=il(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qi=null,lo=null;function hT(t){x_(t,0)}function Hl(t){var e=ps(t);if($y(e))return t}function dT(t,e){if(t==="change")return e}var w_=!1;if(mn){var tc;if(mn){var nc="oninput"in document;if(!nc){var om=document.createElement("div");om.setAttribute("oninput","return;"),nc=typeof om.oninput=="function"}tc=nc}else tc=!1;w_=tc&&(!document.documentMode||9<document.documentMode)}function am(){qi&&(qi.detachEvent("onpropertychange",E_),lo=qi=null)}function E_(t){if(t.propertyName==="value"&&Hl(lo)){var e=[];v_(e,lo,t,ld(t)),e_(hT,e)}}function fT(t,e,n){t==="focusin"?(am(),qi=e,lo=n,qi.attachEvent("onpropertychange",E_)):t==="focusout"&&am()}function pT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(lo)}function mT(t,e){if(t==="click")return Hl(e)}function gT(t,e){if(t==="input"||t==="change")return Hl(e)}function yT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:yT;function uo(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Nc.call(e,s)||!$t(t[s],e[s]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,e){var n=lm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lm(n)}}function T_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _T(t){var e=I_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T_(n.ownerDocument.documentElement,n)){if(r!==null&&yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=um(n,i);var o=um(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vT=mn&&"documentMode"in document&&11>=document.documentMode,ds=null,Yc=null,Hi=null,Xc=!1;function cm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||ds==null||ds!==Ja(r)||(r=ds,"selectionStart"in r&&yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&uo(Hi,r)||(Hi=r,r=il(Yc,"onSelect"),0<r.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},rc={},S_={};mn&&(S_=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Wl(t){if(rc[t])return rc[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S_)return rc[t]=e[n];return t}var A_=Wl("animationend"),C_=Wl("animationiteration"),k_=Wl("animationstart"),R_=Wl("transitionend"),P_=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){P_.set(t,e),Qr(e,[t])}for(var sc=0;sc<hm.length;sc++){var ic=hm[sc],wT=ic.toLowerCase(),ET=ic[0].toUpperCase()+ic.slice(1);pr(wT,"on"+ET)}pr(A_,"onAnimationEnd");pr(C_,"onAnimationIteration");pr(k_,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(R_,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function dm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,w1(r,e,void 0,t),t.currentTarget=null}function x_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;dm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;dm(s,l,h),i=u}}}if(el)throw t=Wc,el=!1,Wc=null,t}function pe(t,e){var n=e[nh];n===void 0&&(n=e[nh]=new Set);var r=t+"__bubble";n.has(r)||(N_(e,t,2,!1),n.add(r))}function oc(t,e,n){var r=0;e&&(r|=4),N_(n,t,r,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[pa]){t[pa]=!0,Fy.forEach(function(n){n!=="selectionchange"&&(TT.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,oc("selectionchange",!1,e))}}function N_(t,e,n,r){switch(p_(e)){case 1:var s=L1;break;case 4:s=M1;break;default:s=dd}n=s.bind(null,e,n,t),s=void 0,!Hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ac(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}e_(function(){var h=i,f=ld(n),p=[];e:{var g=P_.get(t);if(g!==void 0){var k=pd,x=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":k=J1;break;case"focusin":x="focus",k=ec;break;case"focusout":x="blur",k=ec;break;case"beforeblur":case"afterblur":k=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=j1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=tT;break;case A_:case C_:case k_:k=$1;break;case R_:k=rT;break;case"scroll":k=F1;break;case"wheel":k=iT;break;case"copy":case"cut":case"paste":k=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=nm}var V=(e&4)!==0,D=!V&&t==="scroll",S=V?g!==null?g+"Capture":null:g;V=[];for(var _=h,C;_!==null;){C=_;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,S!==null&&(b=so(_,S),b!=null&&V.push(ho(_,b,C)))),D)break;_=_.return}0<V.length&&(g=new k(g,x,null,n,f),p.push({event:g,listeners:V}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",g&&n!==$c&&(x=n.relatedTarget||n.fromElement)&&(Vr(x)||x[gn]))break e;if((k||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=h,x=x?Vr(x):null,x!==null&&(D=Yr(x),x!==D||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=h),k!==x)){if(V=em,b="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(V=nm,b="onPointerLeave",S="onPointerEnter",_="pointer"),D=k==null?g:ps(k),C=x==null?g:ps(x),g=new V(b,_+"leave",k,n,f),g.target=D,g.relatedTarget=C,b=null,Vr(f)===h&&(V=new V(S,_+"enter",x,n,f),V.target=C,V.relatedTarget=D,b=V),D=b,k&&x)t:{for(V=k,S=x,_=0,C=V;C;C=ss(C))_++;for(C=0,b=S;b;b=ss(b))C++;for(;0<_-C;)V=ss(V),_--;for(;0<C-_;)S=ss(S),C--;for(;_--;){if(V===S||S!==null&&V===S.alternate)break t;V=ss(V),S=ss(S)}V=null}else V=null;k!==null&&fm(p,g,k,V,!1),x!==null&&D!==null&&fm(p,D,x,V,!0)}}e:{if(g=h?ps(h):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var j=dT;else if(im(g))if(w_)j=gT;else{j=pT;var U=fT}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=mT);if(j&&(j=j(t,h))){v_(p,j,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Fc(g,"number",g.value)}switch(U=h?ps(h):window,t){case"focusin":(im(U)||U.contentEditable==="true")&&(ds=U,Yc=h,Hi=null);break;case"focusout":Hi=Yc=ds=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,cm(p,n,f);break;case"selectionchange":if(vT)break;case"keydown":case"keyup":cm(p,n,f)}var v;if(gd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else hs?y_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(g_&&n.locale!=="ko"&&(hs||y!=="onCompositionStart"?y==="onCompositionEnd"&&hs&&(v=m_()):(Bn=f,fd="value"in Bn?Bn.value:Bn.textContent,hs=!0)),U=il(h,y),0<U.length&&(y=new tm(y,t,null,n,f),p.push({event:y,listeners:U}),v?y.data=v:(v=__(n),v!==null&&(y.data=v)))),(v=aT?lT(t,n):uT(t,n))&&(h=il(h,"onBeforeInput"),0<h.length&&(f=new tm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}x_(p,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=so(t,n),i!=null&&r.unshift(ho(t,i,s)),i=so(t,e),i!=null&&r.push(ho(t,i,s))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=so(n,i),u!=null&&o.unshift(ho(n,u,l))):s||(u=so(n,i),u!=null&&o.push(ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function pm(t){return(typeof t=="string"?t:""+t).replace(IT,`
`).replace(ST,"")}function ma(t,e,n){if(e=pm(e),pm(t)!==e&&n)throw Error(F(425))}function ol(){}var Jc=null,Zc=null;function eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,AT=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(t){return mm.resolve(null).then(t).catch(kT)}:th;function kT(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ao(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Xs,fo="__reactProps$"+Xs,gn="__reactContainer$"+Xs,nh="__reactEvents$"+Xs,RT="__reactListeners$"+Xs,PT="__reactHandles$"+Xs;function Vr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gm(t);t!==null;){if(n=t[Xt])return n;t=gm(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[Xt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Gl(t){return t[fo]||null}var rh=[],ms=-1;function mr(t){return{current:t}}function ge(t){0>ms||(t.current=rh[ms],rh[ms]=null,ms--)}function de(t,e){ms++,rh[ms]=t.current,t.current=e}var ar={},tt=mr(ar),ft=mr(!1),Fr=ar;function Os(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function pt(t){return t=t.childContextTypes,t!=null}function al(){ge(ft),ge(tt)}function ym(t,e,n){if(tt.current!==ar)throw Error(F(168));de(tt,e),de(ft,n)}function V_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,f1(t)||"Unknown",s));return Ee({},n,r)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Fr=tt.current,de(tt,t),de(ft,ft.current),!0}function _m(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=V_(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,ge(ft),ge(tt),de(tt,t)):ge(ft),de(ft,n)}var un=null,Kl=!1,uc=!1;function D_(t){un===null?un=[t]:un.push(t)}function xT(t){Kl=!0,D_(t)}function gr(){if(!uc&&un!==null){uc=!0;var t=0,e=le;try{var n=un;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Kl=!1}catch(s){throw un!==null&&(un=un.slice(t+1)),s_(ud,gr),s}finally{le=e,uc=!1}}return null}var gs=[],ys=0,ul=null,cl=0,At=[],Ct=0,Ur=null,cn=1,hn="";function Pr(t,e){gs[ys++]=cl,gs[ys++]=ul,ul=t,cl=e}function b_(t,e,n){At[Ct++]=cn,At[Ct++]=hn,At[Ct++]=Ur,Ur=t;var r=cn;t=hn;var s=32-jt(r)-1;r&=~(1<<s),n+=1;var i=32-jt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,cn=1<<32-jt(e)+s|n<<s|r,hn=i+t}else cn=1<<i|n<<s|r,hn=t}function _d(t){t.return!==null&&(Pr(t,1),b_(t,1,0))}function vd(t){for(;t===ul;)ul=gs[--ys],gs[ys]=null,cl=gs[--ys],gs[ys]=null;for(;t===Ur;)Ur=At[--Ct],At[Ct]=null,hn=At[--Ct],At[Ct]=null,cn=At[--Ct],At[Ct]=null}var wt=null,_t=null,ye=!1,Mt=null;function O_(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,_t=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,_t=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(ye){var e=_t;if(e){var n=e;if(!vm(t,e)){if(sh(t))throw Error(F(418));e=Kn(n.nextSibling);var r=wt;e&&vm(t,e)?O_(r,n):(t.flags=t.flags&-4097|2,ye=!1,wt=t)}}else{if(sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ye=!1,wt=t}}}function wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ga(t){if(t!==wt)return!1;if(!ye)return wm(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eh(t.type,t.memoizedProps)),e&&(e=_t)){if(sh(t))throw L_(),Error(F(418));for(;e;)O_(t,e),e=Kn(e.nextSibling)}if(wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=wt?Kn(t.stateNode.nextSibling):null;return!0}function L_(){for(var t=_t;t;)t=Kn(t.nextSibling)}function Ls(){_t=wt=null,ye=!1}function wd(t){Mt===null?Mt=[t]:Mt.push(t)}var NT=In.ReactCurrentBatchConfig;function Ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function M_(t){function e(S,_){if(t){var C=S.deletions;C===null?(S.deletions=[_],S.flags|=16):C.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function s(S,_){return S=Jn(S,_),S.index=0,S.sibling=null,S}function i(S,_,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<_?(S.flags|=2,_):C):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,_,C,b){return _===null||_.tag!==6?(_=gc(C,S.mode,b),_.return=S,_):(_=s(_,C),_.return=S,_)}function u(S,_,C,b){var j=C.type;return j===cs?f(S,_,C.props.children,b,C.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&Em(j)===_.type)?(b=s(_,C.props),b.ref=Ri(S,_,C),b.return=S,b):(b=za(C.type,C.key,C.props,null,S.mode,b),b.ref=Ri(S,_,C),b.return=S,b)}function h(S,_,C,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==C.containerInfo||_.stateNode.implementation!==C.implementation?(_=yc(C,S.mode,b),_.return=S,_):(_=s(_,C.children||[]),_.return=S,_)}function f(S,_,C,b,j){return _===null||_.tag!==7?(_=Mr(C,S.mode,b,j),_.return=S,_):(_=s(_,C),_.return=S,_)}function p(S,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gc(""+_,S.mode,C),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oa:return C=za(_.type,_.key,_.props,null,S.mode,C),C.ref=Ri(S,null,_),C.return=S,C;case us:return _=yc(_,S.mode,C),_.return=S,_;case bn:var b=_._init;return p(S,b(_._payload),C)}if(Di(_)||Ii(_))return _=Mr(_,S.mode,C,null),_.return=S,_;ya(S,_)}return null}function g(S,_,C,b){var j=_!==null?_.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return j!==null?null:l(S,_,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case oa:return C.key===j?u(S,_,C,b):null;case us:return C.key===j?h(S,_,C,b):null;case bn:return j=C._init,g(S,_,j(C._payload),b)}if(Di(C)||Ii(C))return j!==null?null:f(S,_,C,b,null);ya(S,C)}return null}function k(S,_,C,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(C)||null,l(_,S,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oa:return S=S.get(b.key===null?C:b.key)||null,u(_,S,b,j);case us:return S=S.get(b.key===null?C:b.key)||null,h(_,S,b,j);case bn:var U=b._init;return k(S,_,C,U(b._payload),j)}if(Di(b)||Ii(b))return S=S.get(C)||null,f(_,S,b,j,null);ya(_,b)}return null}function x(S,_,C,b){for(var j=null,U=null,v=_,y=_=0,w=null;v!==null&&y<C.length;y++){v.index>y?(w=v,v=null):w=v.sibling;var I=g(S,v,C[y],b);if(I===null){v===null&&(v=w);break}t&&v&&I.alternate===null&&e(S,v),_=i(I,_,y),U===null?j=I:U.sibling=I,U=I,v=w}if(y===C.length)return n(S,v),ye&&Pr(S,y),j;if(v===null){for(;y<C.length;y++)v=p(S,C[y],b),v!==null&&(_=i(v,_,y),U===null?j=v:U.sibling=v,U=v);return ye&&Pr(S,y),j}for(v=r(S,v);y<C.length;y++)w=k(v,S,y,C[y],b),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?y:w.key),_=i(w,_,y),U===null?j=w:U.sibling=w,U=w);return t&&v.forEach(function(A){return e(S,A)}),ye&&Pr(S,y),j}function V(S,_,C,b){var j=Ii(C);if(typeof j!="function")throw Error(F(150));if(C=j.call(C),C==null)throw Error(F(151));for(var U=j=null,v=_,y=_=0,w=null,I=C.next();v!==null&&!I.done;y++,I=C.next()){v.index>y?(w=v,v=null):w=v.sibling;var A=g(S,v,I.value,b);if(A===null){v===null&&(v=w);break}t&&v&&A.alternate===null&&e(S,v),_=i(A,_,y),U===null?j=A:U.sibling=A,U=A,v=w}if(I.done)return n(S,v),ye&&Pr(S,y),j;if(v===null){for(;!I.done;y++,I=C.next())I=p(S,I.value,b),I!==null&&(_=i(I,_,y),U===null?j=I:U.sibling=I,U=I);return ye&&Pr(S,y),j}for(v=r(S,v);!I.done;y++,I=C.next())I=k(v,S,y,I.value,b),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),_=i(I,_,y),U===null?j=I:U.sibling=I,U=I);return t&&v.forEach(function(R){return e(S,R)}),ye&&Pr(S,y),j}function D(S,_,C,b){if(typeof C=="object"&&C!==null&&C.type===cs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case oa:e:{for(var j=C.key,U=_;U!==null;){if(U.key===j){if(j=C.type,j===cs){if(U.tag===7){n(S,U.sibling),_=s(U,C.props.children),_.return=S,S=_;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&Em(j)===U.type){n(S,U.sibling),_=s(U,C.props),_.ref=Ri(S,U,C),_.return=S,S=_;break e}n(S,U);break}else e(S,U);U=U.sibling}C.type===cs?(_=Mr(C.props.children,S.mode,b,C.key),_.return=S,S=_):(b=za(C.type,C.key,C.props,null,S.mode,b),b.ref=Ri(S,_,C),b.return=S,S=b)}return o(S);case us:e:{for(U=C.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===C.containerInfo&&_.stateNode.implementation===C.implementation){n(S,_.sibling),_=s(_,C.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=yc(C,S.mode,b),_.return=S,S=_}return o(S);case bn:return U=C._init,D(S,_,U(C._payload),b)}if(Di(C))return x(S,_,C,b);if(Ii(C))return V(S,_,C,b);ya(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,_!==null&&_.tag===6?(n(S,_.sibling),_=s(_,C),_.return=S,S=_):(n(S,_),_=gc(C,S.mode,b),_.return=S,S=_),o(S)):n(S,_)}return D}var Ms=M_(!0),F_=M_(!1),hl=mr(null),dl=null,_s=null,Ed=null;function Td(){Ed=_s=dl=null}function Id(t){var e=hl.current;ge(hl),t._currentValue=e}function oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){dl=t,Ed=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(dl===null)throw Error(F(308));_s=t,dl.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var Dr=null;function Sd(t){Dr===null?Dr=[t]:Dr.push(t)}function U_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sd(e)):(n.next=s.next,s.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function Ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,yn(t,n)}return s=r.interleaved,s===null?(e.next=e,Sd(r)):(e.next=s.next,s.next=e),r.interleaved=e,yn(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}function Tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,r){var s=t.updateQueue;On=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var g=l.lane,k=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,V=l;switch(g=e,k=n,V.tag){case 1:if(x=V.payload,typeof x=="function"){p=x.call(k,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=V.payload,g=typeof x=="function"?x.call(k,p,g):x,g==null)break e;p=Ee({},p,g);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else k={eventTime:k,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=p):f=f.next=k,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=p}}function Im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var bo={},Zt=mr(bo),po=mr(bo),mo=mr(bo);function br(t){if(t===bo)throw Error(F(174));return t}function Cd(t,e){switch(de(mo,e),de(po,t),de(Zt,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jc(e,t)}ge(Zt),de(Zt,e)}function Fs(){ge(Zt),ge(po),ge(mo)}function z_(t){br(mo.current);var e=br(Zt.current),n=jc(e,t.type);e!==n&&(de(po,t),de(Zt,n))}function kd(t){po.current===t&&(ge(Zt),ge(po))}var ve=mr(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Rd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var La=In.ReactCurrentDispatcher,hc=In.ReactCurrentBatchConfig,jr=0,we=null,De=null,Ue=null,ml=!1,Wi=!1,go=0,VT=0;function Qe(){throw Error(F(321))}function Pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function xd(t,e,n,r,s,i){if(jr=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?LT:MT,t=n(r,s),Wi){i=0;do{if(Wi=!1,go=0,25<=i)throw Error(F(301));i+=1,Ue=De=null,e.updateQueue=null,La.current=FT,t=n(r,s)}while(Wi)}if(La.current=gl,e=De!==null&&De.next!==null,jr=0,Ue=De=we=null,ml=!1,e)throw Error(F(300));return t}function Nd(){var t=go!==0;return go=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?we.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Nt(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?we.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(F(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?we.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function yo(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=De,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((jr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=f,zr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,zr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);$t(i,e.memoizedState)||(dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function B_(){}function $_(t,e){var n=we,r=Nt(),s=e(),i=!$t(r.memoizedState,s);if(i&&(r.memoizedState=s,dt=!0),r=r.queue,Vd(W_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,_o(9,H_.bind(null,n,r,s,e),void 0,null),je===null)throw Error(F(349));jr&30||q_(n,e,s)}return s}function q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&K_(t)}function W_(t,e,n){return n(function(){G_(e)&&K_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function K_(t){var e=yn(t,1);e!==null&&zt(e,t,1,-1)}function Sm(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=OT.bind(null,we,t),[e.memoizedState,t]}function _o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q_(){return Nt().memoizedState}function Ma(t,e,n,r){var s=Qt();we.flags|=t,s.memoizedState=_o(1|e,n,void 0,r===void 0?null:r)}function Ql(t,e,n,r){var s=Nt();r=r===void 0?null:r;var i=void 0;if(De!==null){var o=De.memoizedState;if(i=o.destroy,r!==null&&Pd(r,o.deps)){s.memoizedState=_o(e,n,i,r);return}}we.flags|=t,s.memoizedState=_o(1|e,n,i,r)}function Am(t,e){return Ma(8390656,8,t,e)}function Vd(t,e){return Ql(2048,8,t,e)}function Y_(t,e){return Ql(4,2,t,e)}function X_(t,e){return Ql(4,4,t,e)}function J_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z_(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,J_.bind(null,e,t),n)}function Dd(){}function ev(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return jr&21?($t(n,e)||(n=a_(),we.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function DT(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=hc.transition;hc.transition={};try{t(!1),e()}finally{le=n,hc.transition=r}}function rv(){return Nt().memoizedState}function bT(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sv(t))iv(e,n);else if(n=U_(t,e,n,r),n!==null){var s=ot();zt(n,t,r,s),ov(n,e,r)}}function OT(t,e,n){var r=Xn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sv(t))iv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(s.next=s,Sd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=U_(t,e,s,r),n!==null&&(s=ot(),zt(n,t,r,s),ov(n,e,r))}}function sv(t){var e=t.alternate;return t===we||e!==null&&e===we}function iv(t,e){Wi=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ov(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}var gl={readContext:xt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},LT={readContext:xt,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ma(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ma(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bT.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:Sm,useDebugValue:Dd,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=Sm(!1),e=t[0];return t=DT.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=Qt();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),je===null)throw Error(F(349));jr&30||q_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Am(W_.bind(null,r,i,t),[t]),r.flags|=2048,_o(9,H_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Qt(),e=je.identifierPrefix;if(ye){var n=hn,r=cn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MT={readContext:xt,useCallback:ev,useContext:xt,useEffect:Vd,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:X_,useMemo:tv,useReducer:dc,useRef:Q_,useState:function(){return dc(yo)},useDebugValue:Dd,useDeferredValue:function(t){var e=Nt();return nv(e,De.memoizedState,t)},useTransition:function(){var t=dc(yo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1},FT={readContext:xt,useCallback:ev,useContext:xt,useEffect:Vd,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:X_,useMemo:tv,useReducer:fc,useRef:Q_,useState:function(){return fc(yo)},useDebugValue:Dd,useDeferredValue:function(t){var e=Nt();return De===null?e.memoizedState=t:nv(e,De.memoizedState,t)},useTransition:function(){var t=fc(yo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ah(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),s=Xn(t),i=pn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Qn(t,i,s),e!==null&&(zt(e,t,s,r),Oa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),s=Xn(t),i=pn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Qn(t,i,s),e!==null&&(zt(e,t,s,r),Oa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Xn(t),s=pn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Qn(t,s,r),e!==null&&(zt(e,t,r,n),Oa(e,t,r))}};function Cm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(s,i):!0}function av(t,e,n){var r=!1,s=ar,i=e.contextType;return typeof i=="object"&&i!==null?i=xt(i):(s=pt(e)?Fr:tt.current,r=e.contextTypes,i=(r=r!=null)?Os(t,s):ar),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function lh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ad(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=xt(i):(i=pt(e)?Fr:tt.current,s.context=Os(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ah(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Yl.enqueueReplaceState(s,s.state,null),fl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",r=e;do n+=d1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function lv(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_l||(_l=!0,vh=r),uh(t,e)},n}function uv(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){uh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){uh(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=ZT.bind(null,t,e,n),e.then(t,t))}function Pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var jT=In.ReactCurrentOwner,dt=!1;function it(t,e,n,r){e.child=t===null?F_(e,null,n,r):Ms(e,t.child,n,r)}function Nm(t,e,n,r,s){n=n.render;var i=e.ref;return Cs(e,s),r=xd(t,e,n,r,i,s),n=Nd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_n(t,e,s)):(ye&&n&&_d(e),e.flags|=1,it(t,e,r,s),e.child)}function Vm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!zd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,cv(t,e,i,r,s)):(t=za(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return _n(t,e,s)}return e.flags|=1,t=Jn(i,r),t.ref=e.ref,t.return=e,e.child=t}function cv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(uo(i,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,_n(t,e,s)}return ch(t,e,n,r,s)}function hv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ws,yt),yt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(ws,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(ws,yt),yt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,de(ws,yt),yt|=r;return it(t,e,s,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ch(t,e,n,r,s){var i=pt(n)?Fr:tt.current;return i=Os(e,i),Cs(e,s),n=xd(t,e,n,r,i,s),r=Nd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,_n(t,e,s)):(ye&&r&&_d(e),e.flags|=1,it(t,e,n,s),e.child)}function Dm(t,e,n,r,s){if(pt(n)){var i=!0;ll(e)}else i=!1;if(Cs(e,s),e.stateNode===null)Fa(t,e),av(e,n,r),lh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=pt(n)?Fr:tt.current,h=Os(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&km(e,o,r,h),On=!1;var g=e.memoizedState;o.state=g,fl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||ft.current||On?(typeof f=="function"&&(ah(e,n,f,r),u=e.memoizedState),(l=On||Cm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ot(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=pt(n)?Fr:tt.current,u=Os(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&km(e,o,r,u),On=!1,g=e.memoizedState,o.state=g,fl(e,r,o,s);var x=e.memoizedState;l!==p||g!==x||ft.current||On?(typeof k=="function"&&(ah(e,n,k,r),x=e.memoizedState),(h=On||Cm(e,n,h,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return hh(t,e,n,r,i,s)}function hh(t,e,n,r,s,i){dv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&_m(e,n,!1),_n(t,e,i);r=e.stateNode,jT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,i),e.child=Ms(e,null,l,i)):it(t,e,l,i),e.memoizedState=r.state,s&&_m(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ym(t,e.context,!1),Cd(t,e.containerInfo)}function bm(t,e,n,r,s){return Ls(),wd(s),e.flags|=256,it(t,e,n,r),e.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var r=e.pendingProps,s=ve.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),de(ve,s&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zl(o,r,0,null),t=Mr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=fh(n),e.memoizedState=dh,t):bd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return zT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Jn(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Jn(l,i):(i=Mr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=dh,r}return i=t.child,t=i.sibling,r=Jn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bd(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,r){return r!==null&&wd(r),Ms(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=pc(Error(F(422))),_a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Zl({mode:"visible",children:r.children},s,0,null),i=Mr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=fh(o),e.memoizedState=dh,i);if(!(e.mode&1))return _a(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=pc(i,r,void 0),_a(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,yn(t,s),zt(r,t,s,-1))}return jd(),r=pc(Error(F(421))),_a(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=eI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,_t=Kn(s.nextSibling),wt=e,ye=!0,Mt=null,t!==null&&(At[Ct++]=cn,At[Ct++]=hn,At[Ct++]=Ur,cn=t.id,hn=t.overflow,Ur=e),e=bd(e,r.children),e.flags|=4096,e)}function Om(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),oh(t.return,e,n)}function mc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function mv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(it(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,n,e);else if(t.tag===19)Om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),mc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&pl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}mc(e,!0,n,null,i);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BT(t,e,n){switch(e.tag){case 3:fv(e),Ls();break;case 5:z_(e);break;case 1:pt(e.type)&&ll(e);break;case 4:Cd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;de(hl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?pv(t,e,n):(de(ve,ve.current&1),t=_n(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return _n(t,e,n)}var gv,ph,yv,_v;gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ph=function(){};yv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,br(Zt.current);var i=null;switch(n){case"input":s=Lc(t,s),r=Lc(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=Uc(t,s),r=Uc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ol)}zc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(no.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(no.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};_v=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pi(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $T(t,e,n){var r=e.pendingProps;switch(vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return pt(e.type)&&al(),Ye(e),null;case 3:return r=e.stateNode,Fs(),ge(ft),ge(tt),Rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Th(Mt),Mt=null))),ph(t,e),Ye(e),null;case 5:kd(e);var s=br(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ye(e),null}if(t=br(Zt.current),ga(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Xt]=e,r[fo]=i,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<Oi.length;s++)pe(Oi[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":qp(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Wp(r,i),pe("invalid",r)}zc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),s=["children",""+l]):no.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":aa(r),Hp(r,i,!0);break;case"textarea":aa(r),Gp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ol)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[fo]=r,gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Oi.length;s++)pe(Oi[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":qp(t,r),s=Lc(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Wp(t,r),s=Uc(t,r),pe("invalid",t);break;default:s=r}zc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Qy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ro(t,u):typeof u=="number"&&ro(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(no.hasOwnProperty(i)?u!=null&&i==="onScroll"&&pe("scroll",t):u!=null&&sd(t,i,u,o))}switch(n){case"input":aa(t),Hp(t,r,!1);break;case"textarea":aa(t),Gp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ts(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)_v(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=br(mo.current),br(Zt.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(i=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Ye(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&_t!==null&&e.mode&1&&!(e.flags&128))L_(),Ls(),e.flags|=98560,i=!1;else if(i=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Xt]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),i=!1}else Mt!==null&&(Th(Mt),Mt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?be===0&&(be=3):jd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Fs(),ph(t,e),t===null&&co(e.stateNode.containerInfo),Ye(e),null;case 10:return Id(e.type._context),Ye(e),null;case 17:return pt(e.type)&&al(),Ye(e),null;case 19:if(ge(ve),i=e.memoizedState,i===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Pi(i,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,Pi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>js&&(e.flags|=128,r=!0,Pi(i,!1),e.lanes=4194304)}else{if(!r)if(t=pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ye)return Ye(e),null}else 2*Ce()-i.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,Pi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Ud(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function qT(t,e){switch(vd(e),e.tag){case 1:return pt(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),ge(ft),ge(tt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return Fs(),null;case 10:return Id(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var va=!1,Ze=!1,HT=typeof WeakSet=="function"?WeakSet:Set,W=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function mh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Lm=!1;function WT(t,e){if(Jc=rl,t=I_(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)g=p,p=k;for(;;){if(p===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:t,selectionRange:n},rl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var V=x.memoizedProps,D=x.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?V:Ot(e.type,V),D);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Se(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return x=Lm,Lm=!1,x}function Gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&mh(e,n,i)}s=s.next}while(s!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[fo],delete e[nh],delete e[RT],delete e[PT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function Mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(r!==4&&(t=t.child,t!==null))for(yh(t,e,n),t=t.sibling;t!==null;)yh(t,e,n),t=t.sibling}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}var Be=null,Lt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Ze||vs(n,e);case 6:var r=Be,s=Lt;Be=null,Vn(t,e,n),Be=r,Lt=s,Be!==null&&(Lt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Lt?(t=Be,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),ao(t)):lc(Be,n.stateNode));break;case 4:r=Be,s=Lt,Be=n.stateNode.containerInfo,Lt=!0,Vn(t,e,n),Be=r,Lt=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&mh(n,e,o),s=s.next}while(s!==r)}Vn(t,e,n);break;case 1:if(!Ze&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Vn(t,e,n),Ze=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function Fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HT),e.forEach(function(r){var s=tI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Lt=!1;break e;case 3:Be=l.stateNode.containerInfo,Lt=!0;break e;case 4:Be=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Be===null)throw Error(F(160));Ev(i,o,s),Be=null,Lt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Se(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Kt(t),r&4){try{Gi(3,t,t.return),Xl(3,t)}catch(V){Se(t,t.return,V)}try{Gi(5,t,t.return)}catch(V){Se(t,t.return,V)}}break;case 1:bt(e,t),Kt(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(bt(e,t),Kt(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var s=t.stateNode;try{ro(s,"")}catch(V){Se(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&qy(s,i),Bc(l,o);var h=Bc(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Qy(s,p):f==="dangerouslySetInnerHTML"?Gy(s,p):f==="children"?ro(s,p):sd(s,f,p,h)}switch(l){case"input":Mc(s,i);break;case"textarea":Hy(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ts(s,!!i.multiple,k,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ts(s,!!i.multiple,i.defaultValue,!0):Ts(s,!!i.multiple,i.multiple?[]:"",!1))}s[fo]=i}catch(V){Se(t,t.return,V)}}break;case 6:if(bt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){Se(t,t.return,V)}}break;case 3:if(bt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(V){Se(t,t.return,V)}break;case 4:bt(e,t),Kt(t);break;case 13:bt(e,t),Kt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Md=Ce())),r&4&&Fm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,bt(e,t),Ze=h):bt(e,t),Kt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(g=W,k=g.child,g.tag){case 0:case 11:case 14:case 15:Gi(4,g,g.return);break;case 1:vs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(V){Se(r,n,V)}}break;case 5:vs(g,g.return);break;case 22:if(g.memoizedState!==null){jm(p);continue}}k!==null?(k.return=g,W=k):jm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ky("display",o))}catch(V){Se(t,t.return,V)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){Se(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Kt(t),r&4&&Fm(t);break;case 21:break;default:bt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ro(s,""),r.flags&=-33);var i=Mm(t);_h(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mm(t);yh(t,l,o);break;default:throw Error(F(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GT(t,e,n){W=t,Iv(t)}function Iv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||va;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=va;var h=Ze;if(va=o,(Ze=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?zm(s):u!==null?(u.return=o,W=u):zm(s);for(;i!==null;)W=i,Iv(i),i=i.sibling;W=s,va=l,Ze=h}Um(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Um(t)}}function Um(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Im(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Im(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||e.flags&512&&gh(e)}catch(g){Se(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function jm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function zm(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Se(e,s,u)}}var i=e.return;try{gh(e)}catch(u){Se(e,i,u)}break;case 5:var o=e.return;try{gh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var KT=Math.ceil,yl=In.ReactCurrentDispatcher,Od=In.ReactCurrentOwner,Pt=In.ReactCurrentBatchConfig,ie=0,je=null,Re=null,He=0,yt=0,ws=mr(0),be=0,vo=null,zr=0,Jl=0,Ld=0,Ki=null,ct=null,Md=0,js=1/0,ln=null,_l=!1,vh=null,Yn=null,wa=!1,$n=null,vl=0,Qi=0,wh=null,Ua=-1,ja=0;function ot(){return ie&6?Ce():Ua!==-1?Ua:Ua=Ce()}function Xn(t){return t.mode&1?ie&2&&He!==0?He&-He:NT.transition!==null?(ja===0&&(ja=a_()),ja):(t=le,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t):1}function zt(t,e,n,r){if(50<Qi)throw Qi=0,wh=null,Error(F(185));No(t,n,r),(!(ie&2)||t!==je)&&(t===je&&(!(ie&2)&&(Jl|=n),be===4&&Mn(t,He)),mt(t,r),n===1&&ie===0&&!(e.mode&1)&&(js=Ce()+500,Kl&&gr()))}function mt(t,e){var n=t.callbackNode;N1(t,e);var r=nl(t,t===je?He:0);if(r===0)n!==null&&Yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yp(n),e===1)t.tag===0?xT(Bm.bind(null,t)):D_(Bm.bind(null,t)),CT(function(){!(ie&6)&&gr()}),n=null;else{switch(l_(r)){case 1:n=ud;break;case 4:n=i_;break;case 16:n=tl;break;case 536870912:n=o_;break;default:n=tl}n=Nv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(Ua=-1,ja=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var r=nl(t,t===je?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wl(t,r);else{e=r;var s=ie;ie|=2;var i=Cv();(je!==t||He!==e)&&(ln=null,js=Ce()+500,Lr(t,e));do try{XT();break}catch(l){Av(t,l)}while(!0);Td(),yl.current=i,ie=s,Re!==null?e=0:(je=null,He=0,e=be)}if(e!==0){if(e===2&&(s=Gc(t),s!==0&&(r=s,e=Eh(t,s))),e===1)throw n=vo,Lr(t,0),Mn(t,r),mt(t,Ce()),n;if(e===6)Mn(t,r);else{if(s=t.current.alternate,!(r&30)&&!QT(s)&&(e=wl(t,r),e===2&&(i=Gc(t),i!==0&&(r=i,e=Eh(t,i))),e===1))throw n=vo,Lr(t,0),Mn(t,r),mt(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:xr(t,ct,ln);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=Md+500-Ce(),10<e)){if(nl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=th(xr.bind(null,t,ct,ln),e);break}xr(t,ct,ln);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-jt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KT(r/1960))-r,10<r){t.timeoutHandle=th(xr.bind(null,t,ct,ln),r);break}xr(t,ct,ln);break;case 5:xr(t,ct,ln);break;default:throw Error(F(329))}}}return mt(t,Ce()),t.callbackNode===n?Sv.bind(null,t):null}function Eh(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=ct,ct=n,e!==null&&Th(e)),t}function Th(t){ct===null?ct=t:ct.push.apply(ct,t)}function QT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!$t(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~Ld,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Bm(t){if(ie&6)throw Error(F(327));ks();var e=nl(t,0);if(!(e&1))return mt(t,Ce()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=Eh(t,r))}if(n===1)throw n=vo,Lr(t,0),Mn(t,e),mt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ct,ln),mt(t,Ce()),null}function Fd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(js=Ce()+500,Kl&&gr())}}function Br(t){$n!==null&&$n.tag===0&&!(ie&6)&&ks();var e=ie;ie|=1;var n=Pt.transition,r=le;try{if(Pt.transition=null,le=1,t)return t()}finally{le=r,Pt.transition=n,ie=e,!(ie&6)&&gr()}}function Ud(){yt=ws.current,ge(ws)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AT(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Fs(),ge(ft),ge(tt),Rd();break;case 5:kd(r);break;case 4:Fs();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:Id(r.type._context);break;case 22:case 23:Ud()}n=n.return}if(je=t,Re=t=Jn(t.current,null),He=yt=e,be=0,vo=null,Ld=Jl=zr=0,ct=Ki=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Dr=null}return t}function Av(t,e){do{var n=Re;try{if(Td(),La.current=gl,ml){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ml=!1}if(jr=0,Ue=De=we=null,Wi=!1,go=0,Od.current=null,n===null||n.return===null){be=1,vo=e,Re=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Pm(o);if(k!==null){k.flags&=-257,xm(k,o,l,i,e),k.mode&1&&Rm(i,h,e),e=k,u=h;var x=e.updateQueue;if(x===null){var V=new Set;V.add(u),e.updateQueue=V}else x.add(u);break e}else{if(!(e&1)){Rm(i,h,e),jd();break e}u=Error(F(426))}}else if(ye&&l.mode&1){var D=Pm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),xm(D,o,l,i,e),wd(Us(u,l));break e}}i=u=Us(u,l),be!==4&&(be=2),Ki===null?Ki=[i]:Ki.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=lv(i,u,e);Tm(i,S);break e;case 1:l=u;var _=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Yn===null||!Yn.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=uv(i,l,e);Tm(i,b);break e}}i=i.return}while(i!==null)}Rv(n)}catch(j){e=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Cv(){var t=yl.current;return yl.current=gl,t===null?gl:t}function jd(){(be===0||be===3||be===2)&&(be=4),je===null||!(zr&268435455)&&!(Jl&268435455)||Mn(je,He)}function wl(t,e){var n=ie;ie|=2;var r=Cv();(je!==t||He!==e)&&(ln=null,Lr(t,e));do try{YT();break}catch(s){Av(t,s)}while(!0);if(Td(),ie=n,yl.current=r,Re!==null)throw Error(F(261));return je=null,He=0,be}function YT(){for(;Re!==null;)kv(Re)}function XT(){for(;Re!==null&&!T1();)kv(Re)}function kv(t){var e=xv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?Rv(t):Re=e,Od.current=null}function Rv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qT(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Re=null;return}}else if(n=$T(n,e,yt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);be===0&&(be=5)}function xr(t,e,n){var r=le,s=Pt.transition;try{Pt.transition=null,le=1,JT(t,e,n,r)}finally{Pt.transition=s,le=r}return null}function JT(t,e,n,r){do ks();while($n!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(V1(t,i),t===je&&(Re=je=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,Nv(tl,function(){return ks(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pt.transition,Pt.transition=null;var o=le;le=1;var l=ie;ie|=4,Od.current=null,WT(t,n),Tv(n,t),_T(Zc),rl=!!Jc,Zc=Jc=null,t.current=n,GT(n),I1(),ie=l,le=o,Pt.transition=i}else t.current=n;if(wa&&(wa=!1,$n=t,vl=s),i=t.pendingLanes,i===0&&(Yn=null),C1(n.stateNode),mt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(_l)throw _l=!1,t=vh,vh=null,t;return vl&1&&t.tag!==0&&ks(),i=t.pendingLanes,i&1?t===wh?Qi++:(Qi=0,wh=t):Qi=0,gr(),null}function ks(){if($n!==null){var t=l_(vl),e=Pt.transition,n=le;try{if(Pt.transition=null,le=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,vl=0,ie&6)throw Error(F(331));var s=ie;for(ie|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Gi(8,f,i)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var g=f.sibling,k=f.return;if(vv(f),f===h){W=null;break}if(g!==null){g.return=k,W=g;break}W=k}}}var x=i.alternate;if(x!==null){var V=x.child;if(V!==null){x.child=null;do{var D=V.sibling;V.sibling=null,V=D}while(V!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gi(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,W=S;break e}W=i.return}}var _=t.current;for(W=_;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(j){Se(l,l.return,j)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(ie=s,gr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{le=n,Pt.transition=e}}return!1}function $m(t,e,n){e=Us(n,e),e=lv(t,e,1),t=Qn(t,e,1),e=ot(),t!==null&&(No(t,1,e),mt(t,e))}function Se(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Us(n,t),t=uv(e,t,1),e=Qn(e,t,1),t=ot(),e!==null&&(No(e,1,t),mt(e,t));break}}e=e.return}}function ZT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(He&n)===n&&(be===4||be===3&&(He&130023424)===He&&500>Ce()-Md?Lr(t,0):Ld|=n),mt(t,e)}function Pv(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=ot();t=yn(t,e),t!==null&&(No(t,e,n),mt(t,n))}function eI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pv(t,n)}function tI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Pv(t,n)}var xv;xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,BT(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ye&&e.flags&1048576&&b_(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fa(t,e),t=e.pendingProps;var s=Os(e,tt.current);Cs(e,n),s=xd(null,e,r,t,s,n);var i=Nd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(i=!0,ll(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ad(e),s.updater=Yl,e.stateNode=s,s._reactInternals=e,lh(e,r,t,n),e=hh(null,e,r,!0,i,n)):(e.tag=0,ye&&i&&_d(e),it(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=rI(r),t=Ot(r,t),s){case 0:e=ch(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=Nm(null,e,r,t,n);break e;case 14:e=Vm(null,e,r,Ot(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),ch(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Dm(t,e,r,s,n);case 3:e:{if(fv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,j_(t,e),fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Us(Error(F(423)),e),e=bm(t,e,r,n,s);break e}else if(r!==s){s=Us(Error(F(424)),e),e=bm(t,e,r,n,s);break e}else for(_t=Kn(e.stateNode.containerInfo.firstChild),wt=e,ye=!0,Mt=null,n=F_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===s){e=_n(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&ih(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,eh(r,s)?o=null:i!==null&&eh(r,i)&&(e.flags|=32),dv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&ih(e),null;case 13:return pv(t,e,n);case 4:return Cd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Nm(t,e,r,s,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,de(hl,r._currentValue),r._currentValue=o,i!==null)if($t(i.value,o)){if(i.children===s.children&&!ft.current){e=_n(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=pn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),oh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}it(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Cs(e,n),s=xt(s),r=r(s),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,s=Ot(r,e.pendingProps),s=Ot(r.type,s),Vm(t,e,r,s,n);case 15:return cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Fa(t,e),e.tag=1,pt(r)?(t=!0,ll(e)):t=!1,Cs(e,n),av(e,r,s),lh(e,r,s,n),hh(null,e,r,!0,t,n);case 19:return mv(t,e,n);case 22:return hv(t,e,n)}throw Error(F(156,e.tag))};function Nv(t,e){return s_(t,e)}function nI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new nI(t,e,n,r)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rI(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Mr(n.children,s,i,e);case id:o=8,s|=8;break;case Vc:return t=Rt(12,n,e,s|2),t.elementType=Vc,t.lanes=i,t;case Dc:return t=Rt(13,n,e,s),t.elementType=Dc,t.lanes=i,t;case bc:return t=Rt(19,n,e,s),t.elementType=bc,t.lanes=i,t;case zy:return Zl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uy:o=10;break e;case jy:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case bn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Mr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Zl(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=zy,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bd(t,e,n,r,s,i,o,l,u){return t=new sI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Rt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(i),t}function iI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vv(t){if(!t)return ar;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return V_(t,n,e)}return e}function Dv(t,e,n,r,s,i,o,l,u){return t=Bd(n,r,!0,t,s,i,o,l,u),t.context=Vv(null),n=t.current,r=ot(),s=Xn(n),i=pn(r,s),i.callback=e??null,Qn(n,i,s),t.current.lanes=s,No(t,s,r),mt(t,r),t}function eu(t,e,n,r){var s=e.current,i=ot(),o=Xn(s);return n=Vv(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(s,e,o),t!==null&&(zt(t,s,o,i),Oa(t,s,o)),o}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){qm(t,e),(t=t.alternate)&&qm(t,e)}function oI(){return null}var bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}tu.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));eu(t,e,null,null)};tu.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){eu(null,t,null,null)}),e[gn]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&f_(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function aI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=El(o);i.call(h)}}var o=Dv(e,r,t,0,null,!1,!1,"",Hm);return t._reactRootContainer=o,t[gn]=o.current,co(t.nodeType===8?t.parentNode:t),Br(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=El(u);l.call(h)}}var u=Bd(t,0,!1,null,null,!1,!1,"",Hm);return t._reactRootContainer=u,t[gn]=u.current,co(t.nodeType===8?t.parentNode:t),Br(function(){eu(e,u,n,r)}),u}function ru(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=El(o);l.call(u)}}eu(e,o,t,s)}else o=aI(n,e,t,s,r);return El(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bi(e.pendingLanes);n!==0&&(cd(e,n|1),mt(e,Ce()),!(ie&6)&&(js=Ce()+500,gr()))}break;case 13:Br(function(){var r=yn(t,1);if(r!==null){var s=ot();zt(r,t,1,s)}}),$d(t,1)}};hd=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=ot();zt(e,t,134217728,n)}$d(t,134217728)}};c_=function(t){if(t.tag===13){var e=Xn(t),n=yn(t,e);if(n!==null){var r=ot();zt(n,t,e,r)}$d(t,e)}};h_=function(){return le};d_=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};qc=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Gl(r);if(!s)throw Error(F(90));$y(r),Mc(r,s)}}}break;case"textarea":Hy(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Jy=Fd;Zy=Br;var lI={usingClientEntryPoint:!1,Events:[Do,ps,Gl,Yy,Xy,Fd]},xi={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uI={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance||oI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{$l=Ea.inject(uI),Jt=Ea}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(F(200));return iI(t,e,null,n)};Tt.createRoot=function(t,e){if(!Hd(t))throw Error(F(299));var n=!1,r="",s=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Bd(t,1,!1,null,null,n,!1,r,s),t[gn]=e.current,co(t.nodeType===8?t.parentNode:t),new qd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Br(t)};Tt.hydrate=function(t,e,n){if(!nu(e))throw Error(F(200));return ru(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=bv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dv(e,null,t,1,n??null,s,!1,i,o),t[gn]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tu(e)};Tt.render=function(t,e,n){if(!nu(e))throw Error(F(200));return ru(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!nu(t))throw Error(F(40));return t._reactRootContainer?(Br(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Fd;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ru(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),Oy.exports=Tt;var cI=Oy.exports,Lv,Wm=cI;Lv=Wm.createRoot,Wm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_e=(t,e)=>{const n=oe.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>oe.createElement("svg",{ref:f,...hI,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${dI(t)}`,l].join(" "),...h},[...e.map(([p,g])=>oe.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=_e("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=_e("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=_e("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=_e("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=_e("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=_e("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=_e("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=_e("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=_e("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=_e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=_e("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=_e("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=_e("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=_e("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=_e("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=_e("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=_e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=_e("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AI=_e("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=_e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=_e("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=_e("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=_e("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),xI=()=>{};var Gm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(g=64)),r.push(n[f],n[p],n[g],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new VI;const g=i<<2|l>>4;if(r.push(g),h!==64){const k=l<<4&240|h>>2;if(r.push(k),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DI=function(t){const e=Bv(t);return $v.encodeByteArray(e,!0)},Tl=function(t){return DI(t).replace(/\./g,"")},qv=function(t){try{return $v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=()=>bI().__FIREBASE_DEFAULTS__,LI=()=>{if(typeof process>"u"||typeof Gm>"u")return;const t=Gm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qv(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return xI()||OI()||LI()||MI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hv=t=>{var e,n;return(n=(e=iu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},FI=t=>{const e=Hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wv=()=>{var t;return(t=iu())==null?void 0:t.config},Gv=t=>{var e;return(e=iu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Tl(JSON.stringify(n)),Tl(JSON.stringify(o)),""].join(".")}const Yi={};function zI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Yi))Yi[e]?t.emulator.push(e):t.prod.push(e);return t}function BI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Km=!1;function Qv(t,e){if(typeof window>"u"||typeof document>"u"||!Js(window.location.host)||Yi[t]===e||Yi[t]||Km)return;Yi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=zI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,k){g.setAttribute("width","24"),g.setAttribute("id",k),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Km=!0,o()},g}function f(g,k){g.setAttribute("id",k),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=BI(r),k=n("text"),x=document.getElementById(k)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),S=n("preprendIcon"),_=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const C=g.element;l(C),f(D,V);const b=h();u(_,S),C.append(_,x,D,b),document.body.appendChild(C)}i?(x.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function qI(){var e;const t=(e=iu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KI(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QI(){return!qI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YI(){try{return typeof indexedDB=="object"}catch{return!1}}function XI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JI,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,l,r)}}function ZI(t,e){return t.replace(eS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eS=/\{\$([^}]+)}/g;function tS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qm(i)&&Qm(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nS(t,e){const n=new rS(t,e);return n.subscribe.bind(n)}class rS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_c),s.error===void 0&&(s.error=_c),s.complete===void 0&&(s.complete=_c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aS(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oS(t){return t===Nr?void 0:t}function aS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const uS={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},cS=te.INFO,hS={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},dS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wd{constructor(e){this.name=e,this._logLevel=cS,this._logHandler=dS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const fS=(t,e)=>e.some(n=>t instanceof n);let Ym,Xm;function pS(){return Ym||(Ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mS(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yv=new WeakMap,Sh=new WeakMap,Xv=new WeakMap,vc=new WeakMap,Gd=new WeakMap;function gS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yv.set(n,t)}).catch(()=>{}),Gd.set(e,t),e}function yS(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _S(t){Ah=t(Ah)}function vS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return Xv.set(r,e.sort?e.sort():[e]),Zn(r)}:mS().includes(t)?function(...e){return t.apply(wc(this),e),Zn(Yv.get(this))}:function(...e){return Zn(t.apply(wc(this),e))}}function wS(t){return typeof t=="function"?vS(t):(t instanceof IDBTransaction&&yS(t),fS(t,pS())?new Proxy(t,Ah):t)}function Zn(t){if(t instanceof IDBRequest)return gS(t);if(vc.has(t))return vc.get(t);const e=wS(t);return e!==t&&(vc.set(t,e),Gd.set(e,t)),e}const wc=t=>Gd.get(t);function ES(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Zn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Zn(o.result),u.oldVersion,u.newVersion,Zn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const TS=["get","getKey","getAll","getAllKeys","count"],IS=["put","add","delete","clear"],Ec=new Map;function Jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=IS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Ec.set(e,i),i}_S(t=>({...t,get:(e,n,r)=>Jm(e,n)||t.get(e,n,r),has:(e,n)=>!!Jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ch="@firebase/app",Zm="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Wd("@firebase/app"),CS="@firebase/app-compat",kS="@firebase/analytics-compat",RS="@firebase/analytics",PS="@firebase/app-check-compat",xS="@firebase/app-check",NS="@firebase/auth",VS="@firebase/auth-compat",DS="@firebase/database",bS="@firebase/data-connect",OS="@firebase/database-compat",LS="@firebase/functions",MS="@firebase/functions-compat",FS="@firebase/installations",US="@firebase/installations-compat",jS="@firebase/messaging",zS="@firebase/messaging-compat",BS="@firebase/performance",$S="@firebase/performance-compat",qS="@firebase/remote-config",HS="@firebase/remote-config-compat",WS="@firebase/storage",GS="@firebase/storage-compat",KS="@firebase/firestore",QS="@firebase/ai",YS="@firebase/firestore-compat",XS="firebase",JS="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="[DEFAULT]",ZS={[Ch]:"fire-core",[CS]:"fire-core-compat",[RS]:"fire-analytics",[kS]:"fire-analytics-compat",[xS]:"fire-app-check",[PS]:"fire-app-check-compat",[NS]:"fire-auth",[VS]:"fire-auth-compat",[DS]:"fire-rtdb",[bS]:"fire-data-connect",[OS]:"fire-rtdb-compat",[LS]:"fire-fn",[MS]:"fire-fn-compat",[FS]:"fire-iid",[US]:"fire-iid-compat",[jS]:"fire-fcm",[zS]:"fire-fcm-compat",[BS]:"fire-perf",[$S]:"fire-perf-compat",[qS]:"fire-rc",[HS]:"fire-rc-compat",[WS]:"fire-gcs",[GS]:"fire-gcs-compat",[KS]:"fire-fst",[YS]:"fire-fst-compat",[QS]:"fire-vertex","fire-js":"fire-js",[XS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map,eA=new Map,Rh=new Map;function eg(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(Rh.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Rh.set(e,t);for(const n of Il.values())eg(n,t);for(const n of eA.values())eg(n,t);return!0}function Kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Oo("app","Firebase",tA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=JS;function Jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:kh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(n||(n=Wv()),!n)throw er.create("no-options");const i=Il.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new lS(s);for(const u of Rh.values())o.addComponent(u);const l=new nA(n,r,o);return Il.set(s,l),l}function Zv(t=kh){const e=Il.get(t);if(!e&&t===kh&&Wv())return Jv();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){let r=ZS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(o.join(" "));return}zs(new qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="firebase-heartbeat-database",sA=1,wo="firebase-heartbeat-store";let Tc=null;function e0(){return Tc||(Tc=ES(rA,sA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function iA(t){try{const n=(await e0()).transaction(wo),r=await n.objectStore(wo).get(t0(t));return await n.done,r}catch(e){if(e instanceof Sn)vn.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function tg(t,e){try{const r=(await e0()).transaction(wo,"readwrite");await r.objectStore(wo).put(e,t0(t)),await r.done}catch(n){if(n instanceof Sn)vn.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=1024,aA=30;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ng();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>aA){const o=hA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ng(),{heartbeatsToSend:r,unsentEntries:s}=uA(this._heartbeatsCache.heartbeats),i=Tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vn.warn(n),""}}}function ng(){return new Date().toISOString().substring(0,10)}function uA(t,e=oA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YI()?XI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rg(t){return Tl(JSON.stringify({version:2,heartbeats:t})).length}function hA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){zs(new qr("platform-logger",e=>new SS(e),"PRIVATE")),zs(new qr("heartbeat",e=>new lA(e),"PRIVATE")),tr(Ch,Zm,t),tr(Ch,Zm,"esm2020"),tr("fire-js","")}dA("");var fA="firebase",pA="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(fA,pA,"app");var sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nr,n0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function w(){}w.prototype=y.prototype,v.F=y.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(I,A,R){for(var T=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)T[Ne-2]=arguments[Ne];return y.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,w){w||(w=0);const I=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)I[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;A<16;++A)I[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=v.g[0],w=v.g[1],A=v.g[2];let R=v.g[3],T;T=y+(R^w&(A^R))+I[0]+3614090360&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+I[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+I[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+I[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(A^R&(w^A))+I[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+I[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+I[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+I[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(w^A^R)+I[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+I[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+I[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+I[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(A^(w|~R))+I[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+I[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+I[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+I[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const w=y-this.blockSize,I=this.C;let A=this.h,R=0;for(;R<y;){if(A==0)for(;R<=w;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(I[A++]=v.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<y;)if(I[A++]=v[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)v[y++]=this.g[w]>>>I&255;return v};function i(v,y){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=y(v)}function o(v,y){this.h=y;const w=[];let I=!0;for(let A=v.length-1;A>=0;A--){const R=v[A]|0;I&&R==y||(w[A]=R,I=!1)}this.g=w}var l={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return D(h(-v));const y=[];let w=1;for(let I=0;v>=w;I++)y[I]=v/w|0,w*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return D(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let I=p;for(let R=0;R<v.length;R+=8){var A=Math.min(8,v.length-R);const T=parseInt(v.substring(R,R+A),y);A<8?(A=h(Math.pow(y,A)),I=I.j(A).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var p=u(0),g=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();let v=0,y=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(V(this))return"-"+D(this).toString(v);const y=h(Math.pow(v,6));var w=this;let I="";for(;;){const A=b(w,y).g;w=S(w,A.j(y));let R=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=A,x(w))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function V(v){return v.h==-1}t.l=function(v){return v=S(this,v),V(v)?-1:x(v)?0:1};function D(v){const y=v.g.length,w=[];for(let I=0;I<y;I++)w[I]=~v.g[I];return new o(w,~v.h).add(g)}t.abs=function(){return V(this)?D(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),w=[];let I=0;for(let A=0;A<=y;A++){let R=I+(this.i(A)&65535)+(v.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);I=T>>>16,R&=65535,T&=65535,w[A]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(D(y))}t.j=function(v){if(x(this)||x(v))return p;if(V(this))return V(v)?D(this).j(D(v)):D(D(this).j(v));if(V(v))return D(this.j(D(v)));if(this.l(k)<0&&v.l(k)<0)return h(this.m()*v.m());const y=this.g.length+v.g.length,w=[];for(var I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<v.g.length;A++){const R=this.i(I)>>>16,T=this.i(I)&65535,Ne=v.i(A)>>>16,Vt=v.i(A)&65535;w[2*I+2*A]+=T*Vt,_(w,2*I+2*A),w[2*I+2*A+1]+=R*Vt,_(w,2*I+2*A+1),w[2*I+2*A+1]+=T*Ne,_(w,2*I+2*A+1),w[2*I+2*A+2]+=R*Ne,_(w,2*I+2*A+2)}for(v=0;v<y;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=y;v<2*y;v++)w[v]=0;return new o(w,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function C(v,y){this.g=v,this.h=y}function b(v,y){if(x(y))throw Error("division by zero");if(x(v))return new C(p,p);if(V(v))return y=b(D(v),y),new C(D(y.g),D(y.h));if(V(y))return y=b(v,D(y)),new C(D(y.g),y.h);if(v.g.length>30){if(V(v)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=y;I.l(v)<=0;)w=j(w),I=j(I);var A=U(w,1),R=U(I,1);for(I=U(I,2),w=U(w,2);!x(I);){var T=R.add(I);T.l(v)<=0&&(A=A.add(w),R=T),I=U(I,1),w=U(w,1)}return y=S(v,A.j(y)),new C(A,y)}for(A=p;v.l(y)>=0;){for(w=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(w),T=R.j(y);V(T)||T.l(v)>0;)w-=I,R=h(w),T=R.j(y);x(R)&&(R=g),A=A.add(R),v=S(v,T)}return new C(A,v)}t.B=function(v){return b(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)&v.i(I);return new o(w,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)|v.i(I);return new o(w,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)^v.i(I);return new o(w,this.h^v.h)};function j(v){const y=v.g.length+1,w=[];for(let I=0;I<y;I++)w[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(w,v.h)}function U(v,y){const w=y>>5;y%=32;const I=v.g.length-w,A=[];for(let R=0;R<I;R++)A[R]=y>0?v.i(R+w)>>>y|v.i(R+w+1)<<32-y:v.i(R+w);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,n0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,nr=o}).apply(typeof sg<"u"?sg:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r0,Fi,s0,Ba,Ph,i0,o0,a0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return c.prototype[P].apply(m,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function x(a,c){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let z=0;z<N;z++)a[d+z]=P[z]}else a.push(P)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class _{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new V(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,v=new _,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){D(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Ne(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Ne,A),Ne.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ne.Z.h.call(this)},Ne.prototype.h=function(){Ne.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(Math.random()*1e6|0),wr=0;function Er(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++wr,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function O(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function B(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function Y(a){const c={};for(const d in a)c[d]=a[d];return c}const ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tr(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<ue.length;N++)d=ue[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,c,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const z=Dt(a,c,m,P);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new Er(c,this.src,N,!!m,P),c.fa=d,a.push(c)),c};function Ir(a,c){const d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Dt(a,c,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var An="closure_lm_"+(Math.random()*1e6|0),Au={};function jf(a,c,d,m,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)jf(a,c[N],d,m,P);return null}return d=$f(d),a&&a[Vt]?a.J(c,d,l(m)?!!m.capture:!1,P):cE(a,c,d,!1,m,P)}function cE(a,c,d,m,P,N){if(!c)throw Error("Invalid event type");const z=l(P)?!!P.capture:!!P;let Z=ku(a);if(Z||(a[An]=Z=new St(a)),d=Z.add(c,d,m,z,N),d.proxy)return d;if(m=hE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(Bf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function hE(){function a(d){return c.call(a.src,a.listener,d)}const c=dE;return a}function zf(a,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)zf(a,c[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=$f(d),a&&a[Vt]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=Dt(c,d,m,P),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=ku(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Dt(c,d,m,P)),(d=a>-1?c[a]:null)&&Cu(d))}function Cu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Vt])Ir(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Bf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=ku(c))?(Ir(d,a),d.h==0&&(d.src=null,c[An]=null)):$(a)}}}function Bf(a){return a in Au?Au[a]:Au[a]="on"+a}function dE(a,c){if(a.da)a=!0;else{c=new Ne(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&Cu(a),a=d.call(m,c)}return a}function ku(a){return a=a[An],a instanceof St?a:null}var Ru="__closure_events_fn_"+(Math.random()*1e9>>>0);function $f(a){return typeof a=="function"?a:(a[Ru]||(a[Ru]=function(c){return a.handleEvent(c)}),a[Ru])}function Ke(){I.call(this),this.i=new St(this),this.M=this,this.G=null}p(Ke,I),Ke.prototype[Vt]=!0,Ke.prototype.removeEventListener=function(a,c,d,m){zf(this,a,c,d,m)};function rt(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var P=c;c=new A(m,a),Tr(c,P)}P=!0;let N,z;if(d)for(z=d.length-1;z>=0;z--)N=c.g=d[z],P=Go(N,m,!0,c)&&P;if(N=c.g=a,P=Go(N,m,!0,c)&&P,P=Go(N,m,!1,c)&&P,d)for(z=0;z<d.length;z++)N=c.g=d[z],P=Go(N,m,!1,c)&&P}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)$(d[m]);delete a.g[c],a.h--}}this.G=null},Ke.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Ke.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Go(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const z=c[N];if(z&&!z.da&&z.capture==d){const Z=z.listener,Ve=z.ha||z.src;z.fa&&Ir(a.i,z),P=Z.call(Ve,m)!==!1&&P}}return P&&!m.defaultPrevented}function fE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function qf(a){a.g=fE(()=>{a.g=null,a.i&&(a.i=!1,qf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class pE extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:qf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(a){I.call(this),this.h=a,this.g={}}p(ai,I);var Hf=[];function Wf(a){O(a.g,function(c,d){this.g.hasOwnProperty(d)&&Cu(c)},a),a.g={}}ai.prototype.N=function(){ai.Z.N.call(this),Wf(this)},ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pu=o.JSON.stringify,mE=o.JSON.parse,gE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Gf(){}function Kf(){}var li={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xu(){A.call(this,"d")}p(xu,A);function Nu(){A.call(this,"c")}p(Nu,A);var Sr={},Qf=null;function Ko(){return Qf=Qf||new Ke}Sr.Ia="serverreachability";function Yf(a){A.call(this,Sr.Ia,a)}p(Yf,A);function ui(a){const c=Ko();rt(c,new Yf(c))}Sr.STAT_EVENT="statevent";function Xf(a,c){A.call(this,Sr.STAT_EVENT,a),this.stat=c}p(Xf,A);function st(a){const c=Ko();rt(c,new Xf(c,a))}Sr.Ja="timingevent";function Jf(a,c){A.call(this,Sr.Ja,a),this.size=c}p(Jf,A);function ci(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function hi(){this.g=!0}hi.prototype.ua=function(){this.g=!1};function yE(a,c,d,m,P,N){a.info(function(){if(a.g)if(N){var z="",Z=N.split("&");for(let ce=0;ce<Z.length;ce++){var Ve=Z[ce].split("=");if(Ve.length>1){const Me=Ve[0];Ve=Ve[1];const Gt=Me.split("_");z=Gt.length>=2&&Gt[1]=="type"?z+(Me+"="+Ve+"&"):z+(Me+"=redacted&")}}}else z=null;else z=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function _E(a,c,d,m,P,N,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+z})}function ts(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+wE(a,d)+(m?" "+m:"")})}function vE(a,c){a.info(function(){return"TIMEOUT: "+c})}hi.prototype.info=function(){};function wE(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<m.length;z++)m[z]=""}}}}return Pu(N)}catch{return c}}var Qo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ep;function Vu(){}p(Vu,Gf),Vu.prototype.g=function(){return new XMLHttpRequest},ep=new Vu;function di(a){return encodeURIComponent(String(a))}function EE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Cn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new ai(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tp}function tp(){this.i=null,this.g="",this.h=!1}var np={},Du={};function bu(a,c,d){a.M=1,a.A=Xo(Wt(c)),a.u=d,a.R=!0,rp(a,null)}function rp(a,c){a.F=Date.now(),Yo(a),a.B=Wt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),gp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new tp,a.g=bp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new pE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Hf[0]=P.toString()),P=Hf);for(let N=0;N<P.length;N++){const z=jf(d,P[N],m||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?Y(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),ui(),yE(a.i,a.v,a.B,a.l,a.S,a.u)}Cn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Pn(a)==3?c.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Pn(this.g),Ve=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Ip(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||ce<=0?ui(3):ui(2)),Ou(this);var c=this.g.ca();this.X=c;var d=TE(this);if(this.o=c==200,_E(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var N=m;break t}}N=null}if(a=N)ts(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Lu(this,a);else{this.o=!1,this.m=3,st(12),Ar(this),fi(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=IE(this,d),Me==Du){Z==4&&(this.m=4,st(14),a=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==np){this.m=4,st(15),ts(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ts(this.i,this.l,Me,null),Lu(this,Me);if(sp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)ts(this.i,this.l,d,"[Invalid Chunked Response]"),Ar(this),fi(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),qu(z),z.P=!0,st(11))}}else ts(this.i,this.l,d,null),Lu(this,d);Z==4&&Ar(this),this.o&&!this.K&&(Z==4?xp(this.j,this):(this.o=!1,Yo(this)))}else ME(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Ar(this),fi(this)}}}catch{}finally{}};function TE(a){if(!sp(a))return a.g.la();const c=Ip(a.g);if(c==="")return"";let d="";const m=c.length,P=Pn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ar(a),fi(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function sp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function IE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Du:(d=Number(c.substring(d,m)),isNaN(d)?np:(m+=1,m+d>c.length?Du:(c=c.slice(m,m+d),a.C=m+d,c)))}Cn.prototype.cancel=function(){this.K=!0,Ar(this)};function Yo(a){a.T=Date.now()+a.H,ip(a,a.H)}function ip(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ci(h(a.aa,a),c)}function Ou(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Cn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(vE(this.i,this.B),this.M!=2&&(ui(),st(17)),Ar(this),this.m=2,fi(this)):ip(this,this.T-a)};function fi(a){a.j.I==0||a.K||xp(a.j,a)}function Ar(a){Ou(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Wf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Lu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Mu(d.h,a))){if(!a.L&&Mu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)na(d),ea(d);else break e;$u(d),st(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ci(h(d.Va,d),6e3));lp(d.h)<=1&&d.ta&&(d.ta=void 0)}else kr(d,11)}else if((a.L||d.g==a)&&na(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let ce=P[c];const Me=ce[0];if(!(Me<=d.K))if(d.K=Me,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const Gt=ce[3];Gt!=null&&(d.ka=Gt,d.j.info("VER="+d.ka));const Rr=ce[4];Rr!=null&&(d.za=Rr,d.j.info("SVER="+d.za));const xn=ce[5];xn!=null&&typeof xn=="number"&&xn>0&&(m=1.5*xn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Nn=a.g;if(Nn){const sa=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var N=m.h;N.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Fu(N,N.h),N.h=null))}if(m.G){const Hu=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hu&&(m.wa=Hu,fe(m.J,m.G,Hu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var z=a;if(m.na=Dp(m,m.L?m.ba:null,m.W),z.L){up(m.h,z);var Z=z,Ve=m.O;Ve&&(Z.H=Ve),Z.D&&(Ou(Z),Yo(Z)),m.g=z}else Rp(m);d.i.length>0&&ta(d)}else ce[0]!="stop"&&ce[0]!="close"||kr(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?kr(d,7):Bu(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}ui(4)}catch{}}var SE=class{constructor(a,c){this.g=a,this.map=c}};function op(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ap(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lp(a){return a.h?1:a.g?a.g.size:0}function Mu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Fu(a,c){a.g?a.g.add(c):a.h=c}function up(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}op.prototype.cancel=function(){if(this.i=cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var hp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof kn?(this.l=a.l,pi(this,a.j),this.o=a.o,this.g=a.g,mi(this,a.u),this.h=a.h,Uu(this,yp(a.i)),this.m=a.m):a&&(c=String(a).match(hp))?(this.l=!1,pi(this,c[1]||"",!0),this.o=gi(c[2]||""),this.g=gi(c[3]||"",!0),mi(this,c[4]),this.h=gi(c[5]||"",!0),Uu(this,c[6]||"",!0),this.m=gi(c[7]||"")):(this.l=!1,this.i=new _i(null,this.l))}kn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(yi(c,dp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(yi(c,dp,!0),"@"),a.push(di(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(yi(d,d.charAt(0)=="/"?RE:kE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",yi(d,xE)),a.join("")},kn.prototype.resolve=function(a){const c=Wt(this);let d=!!a.j;d?pi(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)mi(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=c.h.lastIndexOf("/");P!=-1&&(m=c.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let z=0;z<P.length;){const Z=P[z++];Z=="."?m&&z==P.length&&N.push(""):Z==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&z==P.length&&N.push("")):(N.push(Z),m=!0)}m=N.join("/")}else m=P}return d?c.h=m:d=a.i.toString()!=="",d?Uu(c,yp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Wt(a){return new kn(a)}function pi(a,c,d){a.j=d?gi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function mi(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Uu(a,c,d){c instanceof _i?(a.i=c,NE(a.i,a.l)):(d||(c=yi(c,PE)),a.i=new _i(c,a.l))}function fe(a,c,d){a.i.set(c,d)}function Xo(a){return fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function gi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,CE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function CE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dp=/[#\/\?@]/g,kE=/[#\?:]/g,RE=/[#\?]/g,PE=/[#\?@]/g,xE=/#/g;function _i(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&AE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=_i.prototype,t.add=function(a,c){Cr(this),this.i=null,a=ns(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function fp(a,c){Cr(a),c=ns(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function pp(a,c){return Cr(a),c=ns(a,c),a.g.has(c)}t.forEach=function(a,c){Cr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)};function mp(a,c){Cr(a);let d=[];if(typeof c=="string")pp(a,c)&&(d=d.concat(a.g.get(ns(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Cr(this),this.i=null,a=ns(this,a),pp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=mp(this,a),a.length>0?String(a[0]):c):c};function gp(a,c,d){fp(a,c),d.length>0&&(a.i=null,a.g.set(ns(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const P=di(d);d=mp(this,d);for(let N=0;N<d.length;N++){let z=P;d[N]!==""&&(z+="="+di(d[N])),a.push(z)}}return this.i=a.join("&")};function yp(a){const c=new _i;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ns(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function NE(a,c){c&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(fp(this,m),gp(this,P,d))},a)),a.j=c}function VE(a,c){const d=new hi;if(o.Image){const m=new Image;m.onload=f(Rn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Rn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Rn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Rn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function DE(a,c){const d=new hi,m=new AbortController,P=setTimeout(()=>{m.abort(),Rn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Rn(d,"TestPingServer: ok",!0,c):Rn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Rn(d,"TestPingServer: error",!1,c)})}function Rn(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function bE(){this.g=new gE}function ju(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ju,Gf),ju.prototype.g=function(){return new Jo(this.i,this.h)};function Jo(a,c){Ke.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Jo,Ke),t=Jo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,wi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_p(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function _p(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?vi(this):wi(this),this.readyState==3&&_p(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,vi(this))},t.Na=function(a){this.g&&(this.response=a,vi(this))},t.ga=function(){this.g&&vi(this)};function vi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,wi(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vp(a){let c="";return O(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function zu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=vp(d),typeof a=="string"?d!=null&&di(d):fe(a,c,d))}function Ie(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ie,Ke);var OE=/^https?$/i,LE=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ep.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){wp(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(LE,c,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){wp(this,N)}};function wp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Ep(a),Zo(a)}function Ep(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Tp(this):this.Xa())},t.Xa=function(){Tp(this)};function Tp(a){if(a.h&&typeof i<"u"){if(a.v&&Pn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let z=String(a.D).match(hp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),m=!OE.test(z?z.toLowerCase():"")}d=m}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var P=Pn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Ep(a)}}finally{Zo(a)}}}}function Zo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Pn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),mE(c)}};function Ip(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ME(a){const c={};a=(a.g&&Pn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=EE(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}B(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Sp(a){this.za=0,this.i=[],this.j=new hi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ei("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ei("baseRetryDelayMs",5e3,a),this.Za=Ei("retryDelaySeedMs",1e4,a),this.Ta=Ei("forwardChannelMaxRetries",2,a),this.va=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new op(a&&a.concurrentRequestLimit),this.Ba=new bE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Sp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){st(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Dp(this,null,this.W),ta(this)};function Bu(a){if(Ap(a),a.I==3){var c=a.V++,d=Wt(a.J);if(fe(d,"SID",a.M),fe(d,"RID",c),fe(d,"TYPE","terminate"),Ti(a,d),c=new Cn(a,a.j,c),c.M=2,c.A=Xo(Wt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=bp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Yo(c)}Vp(a)}function ea(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function Ap(a){ea(a),a.v&&(o.clearTimeout(a.v),a.v=null),na(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ta(a){if(!ap(a.h)&&!a.m){a.m=!0;var c=a.Ea;j||y(),U||(j(),U=!0),v.add(c,a),a.D=0}}function FE(a,c){return lp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ci(h(a.Ea,a,c),Np(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Cn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Y(N),Tr(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=kp(this,P,c),d=Wt(this.J),fe(d,"RID",a),fe(d,"CVER",22),this.G&&fe(d,"X-HTTP-Session-Id",this.G),Ti(this,d),N&&(this.R?c="headers="+di(vp(N))+"&"+c:this.u&&zu(d,this.u,N)),Fu(this.h,P),this.Ra&&fe(d,"TYPE","init"),this.S?(fe(d,"$req",c),fe(d,"SID","null"),P.U=!0,bu(P,d,null)):bu(P,d,c),this.I=2}}else this.I==3&&(a?Cp(this,a):this.i.length==0||ap(this.h)||Cp(this))};function Cp(a,c){var d;c?d=c.l:d=a.V++;const m=Wt(a.J);fe(m,"SID",a.M),fe(m,"RID",d),fe(m,"AID",a.K),Ti(a,m),a.u&&a.o&&zu(m,a.u,a.o),d=new Cn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=kp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Fu(a.h,d),bu(d,m,c)}function Ti(a,c){a.H&&O(a.H,function(d,m){fe(c,m,d)}),a.l&&O({},function(d,m){fe(c,m,d)})}function kp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let Z=-1;for(;;){const Ve=["count="+d];Z==-1?d>0?(Z=P[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let ce=!0;for(let Me=0;Me<d;Me++){var N=P[Me].g;const Gt=P[Me].map;if(N-=Z,N<0)Z=Math.max(0,P[Me].g-100),ce=!1;else try{N="req"+N+"_"||"";try{var z=Gt instanceof Map?Gt:Object.entries(Gt);for(const[Rr,xn]of z){let Nn=xn;l(xn)&&(Nn=Pu(xn)),Ve.push(N+Rr+"="+encodeURIComponent(Nn))}}catch(Rr){throw Ve.push(N+"type="+encodeURIComponent("_badmap")),Rr}}catch{m&&m(Gt)}}if(ce){z=Ve.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function Rp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;j||y(),U||(j(),U=!0),v.add(c,a),a.A=0}}function $u(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ci(h(a.Da,a),Np(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Pp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ci(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),ea(this),Pp(this))};function qu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Pp(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Wt(a.na);fe(c,"RID","rpc"),fe(c,"SID",a.M),fe(c,"AID",a.K),fe(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&fe(c,"TO",a.ia),fe(c,"TYPE","xmlhttp"),Ti(a,c),a.u&&a.o&&zu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Xo(Wt(c)),d.u=null,d.R=!0,rp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ea(this),$u(this),st(19))};function na(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function xp(a,c){var d=null;if(a.g==c){na(a),qu(a),a.g=null;var m=2}else if(Mu(a.h,c))d=c.G,up(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;m=Ko(),rt(m,new Jf(m,d)),ta(a)}else Rp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(m==1&&FE(a,c)||m==2&&$u(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function Np(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function kr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new kn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||pi(m,"https"),Xo(m),P?VE(m.toString(),d):DE(m.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(c),Vp(a),Ap(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Vp(a){if(a.I=0,a.ja=[],a.l){const c=cp(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Dp(a,c,d){var m=d instanceof kn?Wt(d):new kn(d);if(m.g!="")c&&(m.g=c+"."+m.g),mi(m,m.u);else{var P=o.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new kn(null);m&&pi(N,m),c&&(N.g=c),P&&mi(N,P),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&fe(m,d,c),fe(m,"VER",a.ka),Ti(a,m),m}function bp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ie(new ju({ab:d})):new Ie(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Op(){}t=Op.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ra(){}ra.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){Ke.call(this),this.g=new Sp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new rs(this)}p(gt,Ke),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Bu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Pu(a),a=d);c.i.push(new SE(c.Ya++,a)),c.I==3&&ta(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Bu(this.g),delete this.g,gt.Z.N.call(this)};function Lp(a){xu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Lp,xu);function Mp(){Nu.call(this),this.status=1}p(Mp,Nu);function rs(a){this.g=a}p(rs,Op),rs.prototype.ra=function(){rt(this.g,"a")},rs.prototype.qa=function(a){rt(this.g,new Lp(a))},rs.prototype.pa=function(a){rt(this.g,new Mp)},rs.prototype.oa=function(){rt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,a0=function(){return new ra},o0=function(){return Ko()},i0=Sr,Ph={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,Ba=Qo,Zf.COMPLETE="complete",s0=Zf,Kf.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Fi=Kf,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,r0=Ie}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const ig="@firebase/firestore",og="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Wd("@firebase/firestore");function is(){return Hr.logLevel}function H(t,...e){if(Hr.logLevel<=te.DEBUG){const n=e.map(Qd);Hr.debug(`Firestore (${ei}): ${t}`,...n)}}function wn(t,...e){if(Hr.logLevel<=te.ERROR){const n=e.map(Qd);Hr.error(`Firestore (${ei}): ${t}`,...n)}}function Bs(t,...e){if(Hr.logLevel<=te.WARN){const n=e.map(Qd);Hr.warn(`Firestore (${ei}): ${t}`,...n)}}function Qd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,l0(t,r,n)}function l0(t,e,n){let r=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw wn(r),new Error(r)}function ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||l0(e,s,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class gA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yA{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new u0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class _A{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _A(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ag(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ag(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=EA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function xh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ic(s)===Ic(i)?ne(s,i):Ic(s)?1:-1}return ne(t.length,e.length)}const TA=55296,IA=57343;function Ic(t){const e=t.charCodeAt(0);return e>=TA&&e<=IA}function $s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="__name__";class Yt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ne(e.length,n.length)}static compareSegments(e,n){const r=Yt.isNumericId(e),s=Yt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nr.fromString(e.substring(4,e.length-2))}}class he extends Yt{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const SA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Yt{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return SA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lg}static keyField(){return new qe([lg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(he.fromString(e))}static fromName(e){return new G(he.fromString(e).popFirst(5))}static empty(){return new G(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AA(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ug(t){if(!G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cg(t){if(G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function h0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Mo(t,e){if(!h0(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=-62135596800,dg=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dg);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hg)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mo(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:xe("string",me._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new me(0,0))}static max(){return new X(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=-1;function CA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new lr(s,G.empty(),e)}function kA(t){return new lr(t.readTime,t.key,Eo)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(X.min(),G.empty(),Eo)}static max(){return new lr(X.max(),G.empty(),Eo)}}function RA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==PA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function NA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ni(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}au.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=-1;function lu(t){return t==null}function Sl(t){return t===0&&1/t==-1/0}function VA(t){return typeof t=="number"&&Number.isInteger(t)&&!Sl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="";function DA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fg(e)),e=bA(t.get(n),e);return fg(e)}function bA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case d0:n+="";break;default:n+=i}}return n}function fg(t){return t+d0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Le(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new p0("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const OA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=OA.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="server_timestamp",g0="__type__",y0="__previous_value__",_0="__local_write_time__";function Jd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[g0])==null?void 0:r.stringValue)===m0}function uu(t){const e=t.mapValue.fields[y0];return Jd(e)?uu(e):e}function To(t){const e=ur(t.mapValue.fields[_0].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Al="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||Al}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===Al}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="__type__",MA="__max__",Sa={mapValue:{}},w0="__vector__",Cl="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jd(t)?4:UA(t)?9007199254740991:FA(t)?10:11:Q(28295,{value:t})}function an(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),l=ur(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return cr(s.bytesValue).isEqual(cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ae(s.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ae(s.integerValue)===Ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ae(s.doubleValue),l=Ae(i.doubleValue);return o===l?Sl(o)===Sl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return $s(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(pg(o)!==pg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function So(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ae(i.integerValue||i.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gg(t.timestampValue,e.timestampValue);case 4:return gg(To(t),To(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=cr(i),u=cr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ne(Ae(i.latitude),Ae(o.latitude));return l!==0?l:ne(Ae(i.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,k,x,V;const l=i.fields||{},u=o.fields||{},h=(g=l[Cl])==null?void 0:g.arrayValue,f=(k=u[Cl])==null?void 0:k.arrayValue,p=ne(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:yg(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Sa.mapValue&&o===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=xh(u[p],f[p]);if(g!==0)return g;const k=qs(l[u[p]],h[f[p]]);if(k!==0)return k}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=ur(t),r=ur(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function yg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return ne(n.length,r.length)}function Hs(t){return Nh(t)}function Nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nh(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function $a(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uu(t);return e?16+$a(e):16;case 5:return 2*t.stringValue.length;case 6:return cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+$a(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return yr(r.fields,(i,o)=>{s+=i.length+$a(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function _g(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vh(t){return!!t&&"integerValue"in t}function Zd(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function FA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[v0])==null?void 0:r.stringValue)===w0}function Xi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xi(t.arrayValue.values[n]);return e}return{...t}}function UA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===MA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Xi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(Xi(this.value))}}function E0(t){const e=[];return yr(t.fields,(n,r)=>{const s=new qe([n]);if(qa(r)){const i=E0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,X.min(),X.min(),X.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,X.min(),X.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,X.min(),X.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.position=e,this.inclusive=n}}function Eg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n="asc"){this.field=e,this.dir=n}}function jA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{}class Pe extends T0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BA(e,n,r):n==="array-contains"?new HA(e,r):n==="in"?new WA(e,r):n==="not-in"?new GA(e,r):n==="array-contains-any"?new KA(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $A(e,r):new qA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends T0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new qt(e,n)}matches(e){return I0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function I0(t){return t.op==="and"}function S0(t){return zA(t)&&I0(t)}function zA(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Dh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(S0(t))return t.filters.map(e=>Dh(e)).join(",");{const e=t.filters.map(n=>Dh(n)).join(",");return`${t.op}(${e})`}}function A0(t,e){return t instanceof Pe?function(r,s){return s instanceof Pe&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&A0(o,s.filters[l]),!0):!1}(t,e):void Q(19439)}function C0(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(C0).join(" ,")+"}"}(t):"Filter"}class BA extends Pe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class $A extends Pe{constructor(e,n){super(e,"in",n),this.keys=k0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qA extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=k0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function k0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class HA extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zd(n)&&So(n.arrayValue,this.value)}}class WA extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class GA extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!So(this.value.arrayValue,n)}}class KA extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ig(t,e=null,n=[],r=[],s=null,i=null,o=null){return new QA(t,e,n,r,s,i,o)}function ef(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.Te=n}return e.Te}function tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function bh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function YA(t,e,n,r,s,i,o,l){return new ri(t,e,n,r,s,i,o,l)}function R0(t){return new ri(t)}function Sg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function P0(t){return t.collectionGroup!==null}function Ji(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ao(i,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new Ao(qe.keyField(),r))}return e.Ie}function en(t){const e=J(t);return e.Ee||(e.Ee=XA(e,Ji(t))),e.Ee}function XA(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ao(s.field,i)});const n=t.endAt?new kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kl(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oh(t,e){const n=t.filters.concat([e]);return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lh(t,e,n){return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return tf(en(t),en(e))&&t.limitType===e.limitType}function x0(t){return`${ef(en(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>C0(s)).join(", ")}]`),lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hs(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function hu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ji(r),s)||r.endAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ji(r),s))}(t,e)}function JA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N0(t){return(e,n)=>{let r=!1;for(const s of Ji(t)){const i=ZA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZA(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?qs(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return f0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Te(G.comparator);function En(){return eC}const V0=new Te(G.comparator);function Ui(...t){let e=V0;for(const n of t)e=e.insert(n.key,n);return e}function D0(t){let e=V0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return Zi()}function b0(){return Zi()}function Zi(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tC=new Te(G.comparator),nC=new Le(G.comparator);function re(...t){let e=nC;for(const n of t)e=e.add(n);return e}const rC=new Le(ne);function sC(){return rC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sl(e)?"-0":e}}function O0(t){return{integerValue:""+t}}function iC(t,e){return VA(e)?O0(e):nf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this._=void 0}}function oC(t,e,n){return t instanceof Rl?function(s,i){const o={fields:{[g0]:{stringValue:m0},[_0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jd(i)&&(i=uu(i)),i&&(o.fields[y0]=i),{mapValue:o}}(n,e):t instanceof Co?M0(t,e):t instanceof ko?F0(t,e):function(s,i){const o=L0(s,i),l=Ag(o)+Ag(s.Ae);return Vh(o)&&Vh(s.Ae)?O0(l):nf(s.serializer,l)}(t,e)}function aC(t,e,n){return t instanceof Co?M0(t,e):t instanceof ko?F0(t,e):n}function L0(t,e){return t instanceof Pl?function(r){return Vh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rl extends du{}class Co extends du{constructor(e){super(),this.elements=e}}function M0(t,e){const n=U0(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends du{constructor(e){super(),this.elements=e}}function F0(t,e){let n=U0(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class Pl extends du{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ag(t){return Ae(t.integerValue||t.doubleValue)}function U0(t){return Zd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Co&&s instanceof Co||r instanceof ko&&s instanceof ko?$s(r.elements,s.elements,an):r instanceof Pl&&s instanceof Pl?an(r.Ae,s.Ae):r instanceof Rl&&s instanceof Rl}(t.transform,e.transform)}class uC{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fu{}function j0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rf(t.key,Bt.none()):new Fo(t.key,t.data,Bt.none());{const n=t.data,r=ht.empty();let s=new Le(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(t.key,r,new vt(s.toArray()),Bt.none())}}function cC(t,e,n){t instanceof Fo?function(s,i,o){const l=s.value.clone(),u=kg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(s,i,o){if(!Ha(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=kg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(z0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof Fo?function(i,o,l,u){if(!Ha(i.precondition,o))return l;const h=i.value.clone(),f=Rg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,o,l,u){if(!Ha(i.precondition,o))return l;const h=Rg(i.fieldTransforms,u,o),f=o.data;return f.setAll(z0(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function hC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=L0(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function Cg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$s(r,s,(i,o)=>lC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends fu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends fu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kg(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,aC(o,l,n[s]))}return r}function Rg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oC(i,o,e))}return r}class rf extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dC extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=b0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=j0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,(n,r)=>Cg(n,r))&&$s(this.baseMutations,e.baseMutations,(n,r)=>Cg(n,r))}}class sf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return tC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,se;function gC(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function B0(t){if(t===void 0)return wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case ke.OK:return L.OK;case ke.CANCELLED:return L.CANCELLED;case ke.UNKNOWN:return L.UNKNOWN;case ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ke.INTERNAL:return L.INTERNAL;case ke.UNAVAILABLE:return L.UNAVAILABLE;case ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ke.NOT_FOUND:return L.NOT_FOUND;case ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ke.ABORTED:return L.ABORTED;case ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ke.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new nr([4294967295,4294967295],0);function Pg(t){const e=yC().encode(t),n=new n0;return n.update(e),new Uint8Array(n.digest())}function xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nr([n,r],0),new nr([s,i],0)]}class of{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=nr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(nr.fromNumber(r)));return s.compare(_C)===1&&(s=new nr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Pg(e),[r,s]=xg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new of(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Pg(e),[r,s]=xg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pu(X.min(),s,new Te(ne),En(),re())}}class Uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class $0{constructor(e,n){this.targetId=e,this.Ce=n}}class q0{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ng{constructor(){this.ve=0,this.Fe=Vg(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new Uo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Vg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vC{constructor(e){this.Ge=e,this.ze=new Map,this.je=En(),this.Je=Aa(),this.He=Aa(),this.Ye=new Te(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(bh(i))if(r===0){const o=new G(i.path);this.et(n,o,et.newNoDocument(o,X.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=cr(r).toUint8Array()}catch(u){if(u instanceof p0)return Bs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new of(o,s,i)}catch(u){return Bs(u instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&bh(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=re();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new pu(e,n,this.Ye,this.je,r);return this.je=En(),this.Je=Aa(),this.He=Aa(),this.Ye=new Te(ne),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ng,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Le(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ng),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Aa(){return new Te(G.comparator)}function Vg(){return new Te(G.comparator)}const wC={asc:"ASCENDING",desc:"DESCENDING"},EC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TC={and:"AND",or:"OR"};class IC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||lu(e)?e:{value:e}}function xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SC(t,e){return xl(t,e.toTimestamp())}function tn(t){return ae(!!t,49232),X.fromTimestamp(function(n){const r=ur(n);return new me(r.seconds,r.nanos)}(t))}function af(t,e){return Fh(t,e).canonicalString()}function Fh(t,e){const n=function(s){return new he(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function W0(t){const e=he.fromString(t);return ae(X0(e),10190,{key:e.toString()}),e}function Uh(t,e){return af(t.databaseId,e.path)}function Sc(t,e){const n=W0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(K0(n))}function G0(t,e){return af(t.databaseId,e)}function AC(t){const e=W0(t);return e.length===4?he.emptyPath():K0(e)}function jh(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K0(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dg(t,e,n){return{name:Uh(t,e),fields:n.value.mapValue.fields}}function CC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string",58123),Ge.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ge.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:B0(h.code);return new q(f,h.message||"")}(o);n=new q0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sc(t,r.document.name),i=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):X.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Wa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sc(t,r.document),i=r.readTime?tn(r.readTime):X.min(),o=et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sc(t,r.document),i=r.removedTargetIds||[];n=new Wa([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mC(s,i),l=r.targetId;n=new $0(l,o)}}return n}function kC(t,e){let n;if(e instanceof Fo)n={update:Dg(t,e.key,e.value)};else if(e instanceof rf)n={delete:Uh(t,e.key)};else if(e instanceof _r)n={update:Dg(t,e.key,e.data),updateMask:LC(e.fieldMask)};else{if(!(e instanceof dC))return Q(16599,{Vt:e.type});n={verify:Uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:SC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function RC(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?tn(s.updateTime):tn(i);return o.isEqual(X.min())&&(o=tn(i)),new uC(o,s.transformResults||[])}(n,e))):[]}function PC(t,e){return{documents:[G0(t,e.path)]}}function xC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=G0(t,s);const i=function(h){if(h.length!==0)return Y0(qt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:as(g.field),direction:DC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function NC(t){let e=AC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ae(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Q0(p);return g instanceof qt&&S0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new Ao(ls(x.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,lu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,k=p.values||[];return new kl(k,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,k=p.values||[];return new kl(k,g)}(n.endAt)),YA(e,s,o,i,l,"F",u,h)}function VC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Q0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ls(n.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ls(n.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(ls(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>Q0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function DC(t){return wC[t]}function bC(t){return EC[t]}function OC(t){return TC[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return qe.fromServerFormat(t.fieldPath)}function Y0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(wg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(vg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(vg(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:bC(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(s=>Y0(s));return r.length===1?r[0]:{compositeFilter:{op:OC(n.op),filters:r}}}(t):Q(54877,{filter:t})}function LC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function X0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,s,i=X.min(),o=X.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.yt=e}}function FC(t){const e=NC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.Cn=new jC}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(lr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class jC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},J0=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(J0,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ws(0)}static cr(){return new Ws(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="LruGarbageCollector",zC=1048576;function Lg([t,e],[n,r]){const s=ne(t,n);return s===0?ne(e,r):s}class BC{constructor(e){this.Ir=e,this.buffer=new Le(Lg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $C{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Og,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ni(n)?H(Og,"Ignoring IndexedDB error during garbage collection: ",n):await ti(n)}await this.Vr(3e5)})}}class qC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(au.ce);const r=new BC(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(bg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),is()<=te.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function HC(t,e){return new qC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&eo(r.mutation,s,vt.empty(),me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ui();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=En();const o=Zi(),l=function(){return Zi()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof _r)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),eo(f.mutation,h,f.mutation.getFieldMask(),me.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new GC(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Zi();let s=new Te((o,l)=>o-l),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||re()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=b0();f.forEach(g=>{if(!i.has(g)){const k=j0(n.get(g),r.get(g));k!==null&&p.set(g,k),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):P0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Or());let l=Eo,u=i;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:D0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=Ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ui();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(p,g){return new ri(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Ui();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&eo(f.mutation,h,vt.empty(),me.now()),hu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:FC(s.bundledQuery),readTime:tn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.overlays=new Te(G.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Or(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Te((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Or(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Or(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pC(n,r));let i=this.qr.get(n);i===void 0&&(i=re(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.Qr=new Le(Fe.$r),this.Ur=new Le(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Fe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new he([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new he([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=re();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Le(Fe.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Fe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Xd:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ne);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new G(i),0);let l=new Le(ne);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.ri=e,this.docs=function(){return new Te(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=En();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||RA(kA(f),r)<=0||(s.has(f.key)||hu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ek(this)}getSize(e){return M.resolve(this.size)}}class ek extends WC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.persistence=e,this.si=new Xr(n=>ef(n),tf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new lf,this.targetCount=0,this.ai=Ws.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.ui={},this.overlays={},this.ci=new au(0),this.li=!1,this.li=!0,this.hi=new XC,this.referenceDelegate=e(this),this.Pi=new tk(this),this.indexManager=new UC,this.remoteDocumentCache=function(s){return new ZC(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new MC(n),this.Ii=new QC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new JC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new nk(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class nk extends xA{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Ri=new lf,this.Vi=null}static mi(e){return new uf(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const s=G.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Nl{constructor(e,n){this.persistence=e,this.pi=new Xr(r=>DA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=HC(this,n)}static mi(e,n){return new Nl(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,X.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=$a(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return QI()?8:NA(nt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new rk;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(is()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(is()<=te.DEBUG&&H("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(is()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):M.resolve())}ys(e,n){if(Sg(n))return M.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lh(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Lh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return Sg(n)||s.isEqual(X.min())?M.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(is()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),os(n)),this.vs(e,o,n,CA(s,Eo)).next(l=>l))})}Ds(e,n){let r=new Le(N0(e));return n.forEach((s,i)=>{hu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return is()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",os(n)),this.ps.getDocumentsMatchingQuery(e,n,lr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="LocalStore",ik=3e8;class ok{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Te(ne),this.xs=new Xr(i=>ef(i),tf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function ak(t,e,n,r){return new ok(t,e,n,r)}async function ew(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=re();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function lk(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let k=M.resolve();return g.forEach(x=>{k=k.next(()=>f.getEntry(u,x)).next(V=>{const D=h.docVersions.get(x);ae(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function tw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function uk(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let k=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(Ge.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(V,D,S){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=ik?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,k,f)&&l.push(n.Pi.updateTargetData(i,k))});let u=En(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ck(i,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function ck(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=En();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(hf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function hk(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dk(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function zh(t,e,n){const r=J(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;H(hf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Mg(t,e,n){const r=J(t);let s=X.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=J(u),g=p.xs.get(f);return g!==void 0?M.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,en(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:re())).next(l=>(fk(r,JA(e),l),{documents:l,Qs:i})))}function fk(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Fg{constructor(){this.activeTargetIds=sC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pk{constructor(){this.Mo=new Fg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="ConnectivityMonitor";class jg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Ug,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(Ug,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=null;function Bh(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="RestConnection",gk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Al?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Bh(),l=this.zo(e,n.toUriEncodedString());H(Ac,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=Js(h);return this.Jo(e,l,u,r,f).then(p=>(H(Ac,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Bs(Ac,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=gk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class vk extends yk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Bh();return new Promise((l,u)=>{const h=new r0;h.setWithCredentials(!0),h.listenOnce(s0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ba.NO_ERROR:const p=h.getResponseJson();H(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ba.TIMEOUT:H(Xe,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const g=h.getStatus();if(H(Xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const x=k==null?void 0:k.error;if(x&&x.status&&x.message){const V=function(S){const _=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(x.status);u(new q(V,x.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(Xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(Xe,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Bh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=a0(),l=o0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(Xe,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let g=!1,k=!1;const x=new _k({Yo:D=>{k?H(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(H(Xe,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),H(Xe,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),V=(D,S,_)=>{D.listen(S,C=>{try{_(C)}catch(b){setTimeout(()=>{throw b},0)}})};return V(p,Fi.EventType.OPEN,()=>{k||(H(Xe,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),V(p,Fi.EventType.CLOSE,()=>{k||(k=!0,H(Xe,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(p))}),V(p,Fi.EventType.ERROR,D=>{k||(k=!0,Bs(Xe,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),x.a_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),V(p,Fi.EventType.MESSAGE,D=>{var S;if(!k){const _=D.data[0];ae(!!_,16349);const C=_,b=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(b){H(Xe,`RPC '${e}' stream ${s} received error:`,b);const j=b.status;let U=function(w){const I=ke[w];if(I!==void 0)return B0(I)}(j),v=b.message;U===void 0&&(U=L.INTERNAL,v="Unknown error status: "+j+" with message "+b.message),k=!0,x.a_(new q(U,v)),p.close()}else H(Xe,`RPC '${e}' stream ${s} received:`,_),x.u_(_)}}),V(l,i0.STAT_EVENT,D=>{D.stat===Ph.PROXY?H(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Ph.NOPROXY&&H(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){return new IC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="PersistentStream";class rw{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(zg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(zg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wk extends rw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=CC(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?tn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=jh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=bh(u)?{documents:PC(i,u)}:{query:xC(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=H0(i,o.resumeToken);const h=Mh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=xl(i,o.snapshotVersion.toTimestamp());const h=Mh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=VC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=jh(this.serializer),n.removeTarget=e,this.q_(n)}}class Ek extends rw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=RC(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=jh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{}class Ik extends Tk{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Fh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Fh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Sk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RemoteStore";class Ak{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(H(Gr,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ea.add(4),await jo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await gu(h)}(this))})}),this.Ra=new Sk(r,s)}}async function gu(t){if(Jr(t))for(const e of t.da)await e(!0)}async function jo(t){for(const e of t.da)await e(!1)}function sw(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),mf(n)?pf(n):si(n).O_()&&ff(n,e))}function df(t,e){const n=J(t),r=si(n);n.Ia.delete(e),r.O_()&&iw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Jr(n)&&n.Ra.set("Unknown"))}function ff(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}si(t).Y_(e)}function iw(t,e){t.Va.Ue(e),si(t).Z_(e)}function pf(t){t.Va=new vC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),si(t).start(),t.Ra.ua()}function mf(t){return Jr(t)&&!si(t).x_()&&t.Ia.size>0}function Jr(t){return J(t).Ea.size===0}function ow(t){t.Va=void 0}async function Ck(t){t.Ra.set("Online")}async function kk(t){t.Ia.forEach((e,n)=>{ff(t,e)})}async function Rk(t,e){ow(t),mf(t)?(t.Ra.ha(e),pf(t)):t.Ra.set("Unknown")}async function Pk(t,e,n){if(t.Ra.set("Online"),e instanceof q0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){H(Gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof Wa?t.Va.Ze(e):e instanceof $0?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await tw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),iw(i,u);const p=new qn(f.target,u,h,f.sequenceNumber);ff(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(Gr,"Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!ni(e))throw e;t.Ea.add(1),await jo(t),t.Ra.set("Offline"),n||(n=()=>tw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Gr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await gu(t)})}function aw(t,e){return e().catch(n=>Vl(t,n,e))}async function yu(t){const e=J(t),n=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xd;for(;xk(e);)try{const s=await hk(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Nk(e,s)}catch(s){await Vl(e,s)}lw(e)&&uw(e)}function xk(t){return Jr(t)&&t.Ta.length<10}function Nk(t,e){t.Ta.push(e);const n=dr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function lw(t){return Jr(t)&&!dr(t).x_()&&t.Ta.length>0}function uw(t){dr(t).start()}async function Vk(t){dr(t).ra()}async function Dk(t){const e=dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function bk(t,e,n){const r=t.Ta.shift(),s=sf.from(r,e,n);await aw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yu(t)}async function Ok(t,e){e&&dr(t).X_&&await async function(r,s){if(function(o){return gC(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();dr(r).B_(),await aw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yu(r)}}(t,e),lw(t)&&uw(t)}async function Bg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(Gr,"RemoteStore received new credentials");const r=Jr(n);n.Ea.add(3),await jo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await gu(n)}async function Lk(t,e){const n=J(t);e?(n.Ea.delete(2),await gu(n)):e||(n.Ea.add(2),await jo(n),n.Ra.set("Unknown"))}function si(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new wk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:Ck.bind(null,t),t_:kk.bind(null,t),r_:Rk.bind(null,t),H_:Pk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),mf(t)?pf(t):t.Ra.set("Unknown")):(await t.ma.stop(),ow(t))})),t.ma}function dr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new Ek(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Vk.bind(null,t),r_:Ok.bind(null,t),ta:Dk.bind(null,t),na:bk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await yu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Gr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new gf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(t,e){if(wn("AsyncQueue",`${e}: ${t}`),ni(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static emptySet(e){return new Rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Ui(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.ga=new Te(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gs{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gs(e,n,Rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Fk{constructor(){this.queries=qg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=qg(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function qg(){return new Xr(t=>x0(t),cu)}async function Uk(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Mk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=yf(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_f(n)}async function jk(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zk(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&_f(n)}function Bk(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function _f(t){t.Ca.forEach(e=>{e.next()})}var $h,Hg;(Hg=$h||($h={})).Ma="default",Hg.Cache="cache";class $k{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$h.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class qk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=N0(e),this.tu=new Rs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new $g,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),k=hu(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),V=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let D=!1;g&&k?g.data.isEqual(k.data)?x!==V&&(r.track({type:3,doc:k}),D=!0):this.su(g,k)||(r.track({type:2,doc:k}),D=!0,(u&&this.eu(k,u)>0||h&&this.eu(k,h)<0)&&(l=!0)):!g&&k?(r.track({type:0,doc:k}),D=!0):g&&!k&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(k?(o=o.add(k),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(k,x){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:D})}};return V(k)-V(x)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Gs(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $g,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new hw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new cw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Gs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vf="SyncEngine";class Hk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Wk{constructor(e){this.key=e,this.hu=!1}}class Gk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr(l=>x0(l),cu),this.Iu=new Map,this.Eu=new Set,this.du=new Te(G.comparator),this.Au=new Map,this.Ru=new lf,this.Vu={},this.mu=new Map,this.fu=Ws.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Kk(t,e,n=!0){const r=yw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await dw(r,e,n,!0),s}async function Qk(t,e){const n=yw(t);await dw(n,e,!0,!1)}async function dw(t,e,n,r){const s=await dk(t.localStore,en(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Yk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sw(t.remoteStore,s),l}async function Yk(t,e,n,r,s){t.pu=(p,g,k)=>async function(V,D,S,_){let C=D.view.ru(S);C.Cs&&(C=await Mg(V.localStore,D.query,!1).then(({documents:v})=>D.view.ru(v,C)));const b=_&&_.targetChanges.get(D.targetId),j=_&&_.targetMismatches.get(D.targetId)!=null,U=D.view.applyChanges(C,V.isPrimaryClient,b,j);return Gg(V,D.targetId,U.au),U.snapshot}(t,p,g,k);const i=await Mg(t.localStore,e,!0),o=new qk(e,i.Qs),l=o.ru(i.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Gg(t,n,h.au);const f=new Hk(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Xk(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!cu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&df(r.remoteStore,s.targetId),qh(r,s.targetId)}).catch(ti)):(qh(r,s.targetId),await zh(r.localStore,s.targetId,!0))}async function Jk(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),df(n.remoteStore,r.targetId))}async function Zk(t,e,n){const r=oR(t);try{const s=await function(o,l){const u=J(o),h=me.now(),f=l.reduce((k,x)=>k.add(x.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=En(),V=re();return u.Ns.getEntries(k,f).next(D=>{x=D,x.forEach((S,_)=>{_.isValidDocument()||(V=V.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,x)).next(D=>{p=D;const S=[];for(const _ of l){const C=hC(_,p.get(_.key).overlayedDocument);C!=null&&S.push(new _r(_.key,C,E0(C.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(D=>{g=D;const S=D.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(k,D.batchId,S)})}).then(()=>({batchId:g.batchId,changes:D0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Te(ne)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await zo(r,s.changes),await yu(r.remoteStore)}catch(s){const i=yf(s,"Failed to persist write");n.reject(i)}}async function fw(t,e){const n=J(t);try{const r=await uk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ae(o.hu,14607):s.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))}),await zo(n,r,e)}catch(r){await ti(r)}}function Wg(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&_f(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eR(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Te(G.comparator);o=o.insert(i,et.newNoDocument(i,X.min()));const l=re().add(i),u=new pu(X.min(),new Map,new Te(ne),o,l);await fw(r,u),r.du=r.du.remove(i),r.Au.delete(e),wf(r)}else await zh(r.localStore,e,!1).then(()=>qh(r,e,n)).catch(ti)}async function tR(t,e){const n=J(t),r=e.batch.batchId;try{const s=await lk(n.localStore,e);mw(n,r,null),pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,s)}catch(s){await ti(s)}}async function nR(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ae(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);mw(r,e,n),pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,s)}catch(s){await ti(s)}}function pw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function mw(t,e,n){const r=J(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||gw(t,r)})}function gw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(df(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),wf(t))}function Gg(t,e,n){for(const r of n)r instanceof cw?(t.Ru.addReference(r.key,e),rR(t,r)):r instanceof hw?(H(vf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||gw(t,r.key)):Q(19791,{wu:r})}function rR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(vf,"New document in limbo: "+n),t.Eu.add(r),wf(t))}function wf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(he.fromString(e)),r=t.fu.next();t.Au.set(r,new Wk(n)),t.du=t.du.insert(n,r),sw(t.remoteStore,new qn(en(R0(n.path)),r,"TargetPurposeLimboResolution",au.ce))}}async function zo(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=cf.As(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.Es,k=>f.persistence.referenceDelegate.addReference(p,g.targetId,k)).next(()=>M.forEach(g.ds,k=>f.persistence.referenceDelegate.removeReference(p,g.targetId,k)))))}catch(p){if(!ni(p))throw p;H(hf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const k=f.Ms.get(g),x=k.snapshotVersion,V=k.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(g,V)}}}(r.localStore,i))}async function sR(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(vf,"User change. New user:",e.toKey());const r=await ew(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.Ls)}}function iR(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let s=re();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function yw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eR.bind(null,e),e.Pu.H_=zk.bind(null,e.eventManager),e.Pu.yu=Bk.bind(null,e.eventManager),e}function oR(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nR.bind(null,e),e}class Dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ak(this.persistence,new sk,e.initialUser,this.serializer)}Cu(e){return new Z0(uf.mi,this.serializer)}Du(e){return new pk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dl.provider={build:()=>new Dl};class aR extends Dl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ae(this.persistence.referenceDelegate instanceof Nl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $C(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new Z0(r=>Nl.mi(r,n),this.serializer)}}class Hh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sR.bind(null,this.syncEngine),await Lk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fk}()}createDatastore(e){const n=mu(e.databaseInfo.databaseId),r=function(i){return new vk(i)}(e.databaseInfo);return function(i,o,l,u){return new Ik(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ak(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Wg(this.syncEngine,n,0),function(){return jg.v()?new jg:new mk}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new Gk(s,i,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);H(Gr,"RemoteStore shutting down."),i.Ea.add(5),await jo(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Hh.provider={build:()=>new Hh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="FirestoreClient";class uR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Je.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(t,e){t.asyncQueue.verifyOperationInProgress(),H(fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ew(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cR(t);H(fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bg(e.remoteStore,s)),t._onlineComponents=e}async function cR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(fr,"Using user provided OfflineComponentProvider");try{await kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Bs("Error using user provided cache. Falling back to memory cache: "+n),await kc(t,new Dl)}}else H(fr,"Using default OfflineComponentProvider"),await kc(t,new aR(void 0));return t._offlineComponents}async function _w(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(fr,"Using user provided OnlineComponentProvider"),await Kg(t,t._uninitializedComponentsProvider._online)):(H(fr,"Using default OnlineComponentProvider"),await Kg(t,new Hh))),t._onlineComponents}function hR(t){return _w(t).then(e=>e.syncEngine)}async function dR(t){const e=await _w(t),n=e.eventManager;return n.onListen=Kk.bind(null,e.syncEngine),n.onUnlisten=Xk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Qk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Jk.bind(null,e.syncEngine),n}function fR(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new lR({next:g=>{f.Nu(),o.enqueueAndForget(()=>jk(i,p)),g.fromCache&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new $k(l,f,{includeMetadataChanges:!0,qa:!0});return Uk(i,p)}(await dR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firestore.googleapis.com",Yg=!0;class Xg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ww,this.ssl=Yg}else this.host=e.host,this.ssl=e.ssl??Yg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=J0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zC)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _u{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mA;switch(r.type){case"firstParty":return new vA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qg.get(n);r&&(H("ComponentProvider","Removing Datastore"),Qg.delete(n),r.terminate())}(this),Promise.resolve()}}function pR(t,e,n,r={}){var h;t=Wr(t,_u);const s=Js(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Kv(`https://${l}`),Qv("Firestore",!0)),i.host!==ww&&i.host!==l&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!$r(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Je.MOCK_USER;else{f=jI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(g)}t._authCredentials=new gA(new u0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Mo(n,Oe._jsonSchema))return new Oe(e,r||null,new G(he.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:xe("string",Oe._jsonSchemaVersion),referencePath:xe("string")};class sr extends Zr{constructor(e,n,r){super(e,n,R0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new G(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function Rc(t,e,...n){if(t=ze(t),c0("collection","path",e),t instanceof _u){const r=he.fromString(e,...n);return cg(r),new sr(t,null,r)}{if(!(t instanceof Oe||t instanceof sr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return cg(r),new sr(t.firestore,null,r)}}function Wh(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Yd.newId()),c0("doc","path",e),t instanceof _u){const r=he.fromString(e,...n);return ug(r),new Oe(t,null,new G(r))}{if(!(t instanceof Oe||t instanceof sr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return ug(r),new Oe(t.firestore,t instanceof sr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="AsyncQueue";class Zg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nw(this,"async_queue_retry"),this._c=()=>{const r=Cc();r&&H(Jg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new rr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ni(e))throw e;H(Jg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,wn("INTERNAL UNHANDLED ERROR: ",ey(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=gf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:ey(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ey(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Bo extends _u{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zg(e),this._firestoreClient=void 0,await e}}}function mR(t,e){const n=typeof t=="object"?t:Zv(),r=typeof t=="string"?t:Al,s=Kd(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=FI("firestore");i&&pR(s,...i)}return s}function Ew(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gR(t),t._firestoreClient}function gR(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,f){return new LA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,vw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new uR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Ge.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mo(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:xe("string",kt._jsonSchemaVersion),bytes:xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nn._jsonSchemaVersion}}static fromJSON(e){if(Mo(e,nn._jsonSchema))return new nn(e.latitude,e.longitude)}}nn._jsonSchemaVersion="firestore/geoPoint/1.0",nn._jsonSchema={type:xe("string",nn._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mo(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new rn(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:xe("string",rn._jsonSchemaVersion),vectorValues:xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=/^__.*__$/;class _R{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class Tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class Tf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Tf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Iw(this.Ac)&&yR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class vR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mu(e)}Cc(e,n,r,s=!1){return new Tf({Ac:e,methodName:n,Dc:r,path:qe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function If(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new vR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wR(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Sf("Data must be an object, but it was:",o,r);const l=Sw(r,o);let u,h;if(i.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Gh(e,p,n);if(!o.contains(g))throw new q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Cw(f,g)||f.push(g)}u=new vt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new _R(new ht(l),u,h)}class wu extends Ef{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wu}}function ER(t,e,n,r){const s=t.Cc(1,e,n);Sf("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();yr(r,(u,h)=>{const f=Af(e,u,n);h=ze(h);const p=s.yc(f);if(h instanceof wu)i.push(f);else{const g=$o(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new vt(i);return new Tw(o,l,s.fieldTransforms)}function TR(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[Gh(e,r,n)],u=[s];if(i.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Gh(e,i[g])),u.push(i[g+1]);const h=[],f=ht.empty();for(let g=l.length-1;g>=0;--g)if(!Cw(h,l[g])){const k=l[g];let x=u[g];x=ze(x);const V=o.yc(k);if(x instanceof wu)h.push(k);else{const D=$o(x,V);D!=null&&(h.push(k),f.set(k,D))}}const p=new vt(h);return new Tw(f,p,o.fieldTransforms)}function IR(t,e,n,r=!1){return $o(n,t.Cc(r?4:3,e))}function $o(t,e){if(Aw(t=ze(t)))return Sf("Unsupported field value:",e,t),Sw(t,e);if(t instanceof Ef)return function(r,s){if(!Iw(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=$o(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=me.fromDate(r);return{timestampValue:xl(s.serializer,i)}}if(r instanceof me){const i=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xl(s.serializer,i)}}if(r instanceof nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:H0(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:af(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rn)return function(o,l){return{mapValue:{fields:{[v0]:{stringValue:w0},[Cl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return nf(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ou(r)}`)}(t,e)}function Sw(t,e){const n={};return f0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=$o(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Aw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof nn||t instanceof kt||t instanceof Oe||t instanceof Ef||t instanceof rn)}function Sf(t,e,n){if(!Aw(n)||!h0(n)){const r=ou(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Gh(t,e,n){if((e=ze(e))instanceof vu)return e._internalPath;if(typeof e=="string")return Af(t,e);throw bl("Field path arguments must be of type string or ",t,!1,void 0,n)}const SR=new RegExp("[~\\*/\\[\\]]");function Af(t,e,n){if(e.search(SR)>=0)throw bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vu(...e.split("."))._internalPath}catch{throw bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function Cw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AR extends kw{data(){return super.data()}}function Cf(t,e){return typeof e=="string"?Af(t,e):e instanceof vu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class Rw extends kf{}function kR(t,e,...n){let r=[];e instanceof kf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Pf).length,l=i.filter(u=>u instanceof Rf).length;if(o>1||o>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Rf extends Rw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rf(e,n,r)}_apply(e){const n=this._parse(e);return Pw(e._query,n),new Zr(e.firestore,e.converter,Oh(e._query,n))}_parse(e){const n=If(e.firestore);return function(i,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ny(p,f);const x=[];for(const V of p)x.push(ty(u,i,V));g={arrayValue:{values:x}}}else g=ty(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ny(p,f),g=IR(l,o,p,f==="in"||f==="not-in");return Pe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Pf extends kf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Pw(o,u),o=Oh(o,u)}(e._query,n),new Zr(e.firestore,e.converter,Oh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xf extends Rw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ao(i,o)}(e._query,this._field,this._direction);return new Zr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ri(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function RR(t,e="asc"){const n=e,r=Cf("orderBy",t);return xf._create(r,n)}function ty(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P0(e)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!G.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _g(t,new G(r))}if(n instanceof Oe)return _g(t,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function ny(t,e){if(!Array.isArray(t)||t.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PR{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Cl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ae(o.doubleValue));return new rn(n)}convertGeoPoint(e){return new nn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=ur(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);ae(X0(r),9688,{name:e});const s=new Io(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ka{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends kw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:xe("string",Ps._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class Ga extends Ps{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ka(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new ka(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ka(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ka(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:NR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:xe("string",xs._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class VR extends PR{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function DR(t){t=Wr(t,Zr);const e=Wr(t.firestore,Bo),n=Ew(e),r=new VR(e);return CR(t._query),fR(n,t._query).then(s=>new xs(e,r,t,s))}function bR(t,e,n,...r){t=Wr(t,Oe);const s=Wr(t.firestore,Bo),i=If(s);let o;return o=typeof(e=ze(e))=="string"||e instanceof vu?TR(i,"updateDoc",t._key,e,n,r):ER(i,"updateDoc",t._key,e),Nf(s,[o.toMutation(t._key,Bt.exists(!0))])}function OR(t){return Nf(Wr(t.firestore,Bo),[new rf(t._key,Bt.none())])}function ry(t,e){const n=Wr(t.firestore,Bo),r=Wh(t),s=xR(t.converter,e);return Nf(n,[wR(If(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function Nf(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>Zk(await hR(r),s,i)),i.promise}(Ew(t),e)}(function(e,n=!0){(function(s){ei=s})(Zs),zs(new qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Bo(new yA(r.getProvider("auth-internal")),new wA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),tr(ig,og,e),tr(ig,og,"esm2020")})();function xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LR=xw,Nw=new Oo("auth","Firebase",xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Wd("@firebase/auth");function MR(t,...e){Ol.logLevel<=te.WARN&&Ol.warn(`Auth (${Zs}): ${t}`,...e)}function Ka(t,...e){Ol.logLevel<=te.ERROR&&Ol.error(`Auth (${Zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Vf(t,...e)}function sn(t,...e){return Vf(t,...e)}function Vw(t,e,n){const r={...LR(),[e]:n};return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return Vw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function K(t,e,...n){if(!t)throw Vf(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ka(e),new Error(e)}function Tn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function FR(){return sy()==="http:"||sy()==="https:"}function sy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FR()||WI()||"connection"in navigator)?navigator.onLine:!0}function jR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=$I()||GI()}get(){return UR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$R=new qo(3e4,6e4);function es(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vr(t,e,n,r,s={}){return bw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Lo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return HI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Js(t.emulatorConfig.host)&&(h.credentials="include"),Dw.fetch()(await Ow(t,t.config.apiHost,n,l),h)})}async function bw(t,e,n){t._canInitEmulator=!1;const r={...zR,...e};try{const s=new HR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ra(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Vw(t,f,h);Ht(t,f)}}catch(s){if(s instanceof Sn)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function Eu(t,e,n,r,s={}){const i=await vr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ow(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Df(t.config,s):`${t.config.apiScheme}://${s}`;return BR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function qR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),$R.get())})}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function iy(t){return t!==void 0&&t.enterprise!==void 0}class WR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GR(t,e){return vr(t,"GET","/v2/recaptchaConfig",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function Ll(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QR(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=bf(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:to(Pc(s.auth_time)),issuedAtTime:to(Pc(s.iat)),expirationTime:to(Pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pc(t){return Number(t)*1e3}function bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ka("JWT malformed, contained fewer than 3 sections"),null;try{const s=qv(n);return s?JSON.parse(s):(Ka("Failed to decode base64 JWT payload"),null)}catch(s){return Ka("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oy(t){const e=bf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&YR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ro(t,Ll(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Lw(s.providerUserInfo):[],o=ZR(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function JR(t){const e=ze(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t,e){const n=await bw(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ow(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Js(t.emulatorConfig.host)&&(u.credentials="include"),Dw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function t2(t,e){return vr(t,"POST","/v2/accounts:revokeToken",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=oy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await e2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new XR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QR(this,e)}reload(){return JR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Ro(this,KR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:k,providerData:x,stsTokenManager:V}=n;K(p&&V,e,"internal-error");const D=Ns.fromJSON(this.name,V);K(typeof p=="string",e,"internal-error"),Dn(r,e.name),Dn(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof k=="boolean",e,"internal-error"),Dn(i,e.name),Dn(o,e.name),Dn(l,e.name),Dn(u,e.name),Dn(h,e.name),Dn(f,e.name);const S=new Ut({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(S.providerData=x.map(_=>({..._}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ns;l.updateFromIdToken(r);const u=new Ut({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;function fn(t){Tn(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mw.type="NONE";const ly=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ll(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(fn(ly),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||fn(ly);const o=Qa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Ll(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ut._fromGetAccountInfoResponse(e,g,f)}else p=Ut._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($w(e))return"Blackberry";if(qw(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(Bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fw(t=nt()){return/firefox\//i.test(t)}function Uw(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=nt()){return/crios\//i.test(t)}function zw(t=nt()){return/iemobile/i.test(t)}function Bw(t=nt()){return/android/i.test(t)}function $w(t=nt()){return/blackberry/i.test(t)}function qw(t=nt()){return/webos/i.test(t)}function Of(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function n2(t=nt()){var e;return Of(t)&&!!((e=window.navigator)!=null&&e.standalone)}function r2(){return KI()&&document.documentMode===10}function Hw(t=nt()){return Of(t)||Bw(t)||qw(t)||$w(t)||/windows phone/i.test(t)||zw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=uy(nt());break;case"Worker":n=`${uy(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e={}){return vr(t,"GET","/v2/passwordPolicy",es(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=6;class a2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??o2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cy(this),this.idTokenSubscription=new cy(this),this.beforeStateQueue=new s2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ll(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(ir(this));const n=e?ze(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await i2(this),n=new a2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await t2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&MR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ii(t){return ze(t)}class cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=nS(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u2(t){Tu=t}function Gw(t){return Tu.loadJS(t)}function c2(){return Tu.recaptchaEnterpriseScript}function h2(){return Tu.gapiScript}function d2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class f2{constructor(){this.enterprise=new p2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class p2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const m2="recaptcha-enterprise",Kw="NO_RECAPTCHA";class g2{constructor(e){this.type=m2,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{GR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new WR(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Kw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new f2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&iy(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=c2();u.length!==0&&(u+=l),Gw(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function hy(t,e,n,r=!1,s=!1){const i=new g2(t);let o;if(s)o=Kw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function dy(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await hy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await hy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t,e){const n=Kd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function _2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function v2(t,e,n){const r=ii(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qw(e),{host:o,port:l}=w2(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K($r(h,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Js(o)?(Kv(`${i}//${o}${u}`),Qv("Auth",!0)):E2()}function Qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function w2(t){const e=Qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fy(o)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function E2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function T2(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e){return Eu(t,"POST","/v1/accounts:signInWithPassword",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}async function A2(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Lf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dy(e,n,"signInWithPassword",I2);case"emailLink":return S2(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dy(e,r,"signUpPassword",T2);case"emailLink":return A2(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e){return Eu(t,"POST","/v1/accounts:signInWithIdp",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="http://localhost";class Kr extends Lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:C2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R2(t){const e=Li(Mi(t)).link,n=e?Li(Mi(e)).deep_link_id:null,r=Li(Mi(t)).deep_link_id;return(r?Li(Mi(r)).link:null)||r||n||e||t}class Mf{constructor(e){const n=Li(Mi(e)),r=n.apiKey??null,s=n.oobCode??null,i=k2(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=R2(e);try{return new Mf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return Po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mf.parseLink(n);return K(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ho{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Ho{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ut._fromIdTokenResponse(e,r,s),o=py(r);return new Ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=py(r);return new Ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Sn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fl(e,n,r,s)}}function Xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,i,e,r):i})}async function P2(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(ir(r));const s="reauthenticate";try{const i=await Ro(t,Xw(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=bf(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Ks._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n=!1){if(Ft(t.app))return Promise.reject(ir(t));const r="signIn",s=await Xw(t,r,e),i=await Ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function N2(t,e){return Jw(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function D2(t,e,n){return Ft(t.app)?Promise.reject(ir(t)):N2(ze(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V2(t),r})}function b2(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function O2(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function L2(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function M2(t){return ze(t).signOut()}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1e3,U2=10;class eE extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);r2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,U2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},F2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const j2=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await z2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Ff("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function $2(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function q2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function W2(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebaseLocalStorageDb",G2=1,jl="firebaseLocalStorage",iE="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Su(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function K2(){const t=indexedDB.deleteDatabase(sE);return new Wo(t).toPromise()}function Yh(){const t=indexedDB.open(sE,G2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:iE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await K2(),e(await Yh()))})})}async function my(t,e,n){const r=Su(t,!0).put({[iE]:e,value:n});return new Wo(r).toPromise()}async function Q2(t,e){const n=Su(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=Su(t,!0).delete(e);return new Wo(n).toPromise()}const Y2=800,X2=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>X2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(W2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await q2(),!this.activeServiceWorker)return;this.sender=new B2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await my(e,Ul,"1"),await gy(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Q2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Su(s,!1).getAll();return new Wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const J2=oE;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e){return e?fn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eP(t){return Jw(t.auth,new Uf(t),t.bypassAuthState)}function tP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),x2(n,new Uf(t),t.bypassAuthState)}async function nP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),P2(n,new Uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:Ht(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new qo(2e3,1e4);class Es extends aE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}Es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="pendingRedirect",Ya=new Map;class iP extends aE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(t,e){const n=uP(e),r=lP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aP(t,e){Ya.set(t._key(),e)}function lP(t){return fn(t._redirectPersistence)}function uP(t){return Qa(sP,t.config.apiKey,t.name)}async function cP(t,e,n=!1){if(Ft(t.app))return Promise.reject(ir(t));const r=ii(t),s=Z2(r,e),o=await new iP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=10*60*1e3;class dP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hP&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gP=/^https?/;async function yP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pP(t);for(const n of e)try{if(_P(n))return}catch{}Ht(t,"unauthorized-domain")}function _P(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gP.test(n))return!1;if(mP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new qo(3e4,6e4);function _y(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wP(t){return new Promise((e,n)=>{var s,i,o;function r(){_y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_y(),n(sn(t,"network-request-failed"))},timeout:vP.get()})}if((i=(s=on().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=on().gapi)!=null&&o.load)r();else{const l=d2("iframefcb");return on()[l]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},Gw(`${h2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xa=null,e})}let Xa=null;function EP(t){return Xa=Xa||wP(t),Xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new qo(5e3,15e3),IP="__/auth/iframe",SP="emulator/auth/iframe",AP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,SP):`https://${t.config.authDomain}/${IP}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},s=CP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Lo(r).slice(1)}`}async function RP(t){const e=await EP(t),n=on().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:kP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{i(o)},TP.get());function u(){on().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xP=500,NP=600,VP="_blank",DP="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bP(t,e,n,r=xP,s=NP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...PP,width:r.toString(),height:s.toString(),top:i,left:o},h=nt().toLowerCase();n&&(l=jw(h)?VP:n),Fw(h)&&(e=e||DP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[k,x])=>`${g}${k}=${x},`,"");if(n2(h)&&l!=="_self")return OP(e||"",l),new vy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new vy(p)}function OP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="__/auth/handler",MP="emulator/auth/handler",FP=encodeURIComponent("fac");async function wy(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:s};if(e instanceof Yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ho){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${FP}=${encodeURIComponent(u)}`:"";return`${UP(t)}?${Lo(l).slice(1)}${h}`}function UP({config:t}){return t.emulator?Df(t,MP):`https://${t.authDomain}/${LP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class jP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=cP,this._overrideRedirectResult=aP}async _openPopup(e,n,r,s){var o;Tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await wy(e,n,r,Kh(),s);return bP(e,i,Ff())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wy(e,n,r,Kh(),s);return $2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RP(e),r=new dP(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[xc];i!==void 0&&n(!!i),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hw()||Uw()||Of()}}const zP=jP;var Ey="@firebase/auth",Ty="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qP(t){zs(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},h=new l2(r,s,i,u);return _2(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new qr("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new BP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Ey,Ty,$P(t)),tr(Ey,Ty,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=5*60,WP=Gv("authIdTokenMaxAge")||HP;let Iy=null;const GP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WP)return;const s=n==null?void 0:n.token;Iy!==s&&(Iy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KP(t=Zv()){const e=Kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=y2(t,{popupRedirectResolver:zP,persistence:[J2,j2,nE]}),r=Gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=GP(i.toString());O2(n,o,()=>o(n.currentUser)),b2(n,l=>o(l))}}const s=Hv("auth");return s&&v2(n,`http://${s}`),n}function QP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}u2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qP("Browser");const YP={apiKey:"AIzaSyA1UlY8NVuaAb6ubUfRM-x-y2b2Ssu1sfY",authDomain:"sichuanoutdoor1st.firebaseapp.com",projectId:"sichuanoutdoor1st",storageBucket:"sichuanoutdoor1st.firebasestorage.app",messagingSenderId:"436467530880",appId:"1:436467530880:web:eb56f1c9b5612bd3a47a65",measurementId:"G-3PJ1ED52HD"},uE=Jv(YP),Ni=mR(uE),Xh=KP(uE),zl="[https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80)",Pa={1:{title:"Level 1: 周末拉练 & 城市逃离",tags:["新手友好","成都周边","当天往返"],desc:"适合户外小白的入门级线路。通常在成都周边 2-3 小时车程内，以轻徒步为主，路况较好，风险低。主要目的是周末放松或测试基础体能。",suitable:"全家老小、初次体验户外、体能测试"},2:{title:"Level 2: 视觉盛宴 & 松弛感",tags:["车直达","风景绝美","露营"],desc:"主打“身体在地狱（不存在的），眼睛在天堂”。大部分地点车辆可直达核心景区或露营点，几乎没有硬核徒步，重点在于享受风景和放松。",suitable:"摄影爱好者、露营达人、不想走路只想看景的人"},3:{title:"Level 3: 进阶挑战 & 雪山海子",tags:["高海拔","长距离徒步","极度震撼"],desc:"真正的户外进阶。通常涉及 3500m+ 的高海拔地区，需要较长距离的徒步（10km+）或一定的爬升。能看到更极致的雪山海子，但需要较好的体能储备。",suitable:"有一定经验的驴友、体能较好的运动爱好者"},4:{title:"Level 4: 终极朝圣 & 狂野之路",tags:["虐身虐心","无人区","技术装备"],desc:"户外人的终极梦想。长线穿越（3天+）、高海拔雪山攀登或无人区探险。环境恶劣，气候多变，对体能、意志力和装备都有极高要求。",suitable:"资深老驴、专业登山者、寻找极限挑战的人"}},XP=[{id:"l1-1",level:1,levelName:"周末拉练",name:"赵公山",location:"都江堰",traffic:"自驾1.5h",distanceVal:1.5,hotness:4,keywords:["财神山","户外入学考"],season:"全年",seasonsTag:["spring","summer","autumn","winter"],reason:"体能标尺。2025年第一次拉练首选，测测心肺功能。",image:"[https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80)",imgColor:"from-green-400 to-green-600",guide:{intro:"成都户外圈的'入学考试'。能不歇气登顶赵公山，就算拿到了进入川西高海拔徒步的入场券。山顶有赵公庙，求财很灵。",route:"主要分西线和东线。西线（龙凤村）路程短更陡，是主流拉练路线；东线较长较缓。全程土路为主，雨后极滑。",stats:"徒步距离约 8km | 爬升约 900m | 耗时 4-6h",tips:["雨后务必带登山杖和防滑鞋，泥巴路教做人。","山顶可以吃斋饭，也可以露营（条件简陋）。","无门票，停车费 10-20 元。"],gear:"防滑登山鞋、登山杖（双杖最佳）、冲锋衣（山顶风大）。"}},{id:"l1-2",level:1,levelName:"周末拉练",name:"铁瓦殿",location:"彭州",traffic:"自驾2h",distanceVal:2,hotness:3,keywords:["毕业线路","绝望坡"],season:"春/秋",seasonsTag:["spring","autumn"],reason:"周边最虐。能重装走完它，您就有能力去川西任何地方。",image:"[https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80)",imgColor:"from-green-500 to-emerald-700",guide:{intro:"成都周边徒步的'天花板'，号称'绝望坡'。坡度极陡，对心肺和腿部力量要求极高，是进阶驴友的试金石。",route:"通常从大宝村出发，一路拔高。前半程穿林子，后半程走山脊。路况复杂，有乱石坡和密林。",stats:"徒步距离约 12km | 爬升约 1400m+ | 耗时 7-9h",tips:["小白慎入！小白慎入！","水源缺乏，需背足量的水（建议2L+）。","下山极其伤膝盖，护膝必带。"],gear:"重装徒步鞋、护膝、头灯（以防走夜路）、高热量路餐。"}},{id:"l1-3",level:1,levelName:"周末拉练",name:"中坝森林",location:"彭州",traffic:"自驾1.5h",distanceVal:1.5,hotness:5,keywords:["暮光之城","孤独感"],season:"全年",seasonsTag:["spring","summer","autumn","winter"],reason:"雨天神图。阴雨天去拍情绪大片，非常出片。",image:"[https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80)",imgColor:"from-green-300 to-teal-500",guide:{intro:"一条非常轻松的休闲栈道，也是摄影师的私藏地。这里的树木笔直高耸，阴天或雾天来，像极了《暮光之城》的电影场景。",route:"全程木栈道，几乎无难度，适合全家老小。",stats:"徒步距离约 3-4km | 爬升 < 200m | 耗时 1-2h",tips:["不要晴天来！晴天光比太大，拍不出那种阴郁的高级感。","建议穿亮色（红/黄/白）衣服，在深绿森林里很跳。","注意防蚊虫。"],gear:"舒适跑鞋即可，带上好相机/手机。"}},{id:"l2-1",level:2,levelName:"视觉盛宴",name:"大瓦山",location:"乐山",traffic:"自驾4h",distanceVal:4,hotness:3,keywords:["桌状山","诺亚方舟"],season:"夏/秋",seasonsTag:["summer","autumn"],reason:"地质奇观。比瓦屋山更险，像被刀切开的平顶山。",image:"[https://images.unsplash.com/photo-1541336032412-2048a618a2b8?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1541336032412-2048a618a2b8?auto=format&fit=crop&w=800&q=80)",imgColor:"from-blue-400 to-blue-600",guide:{intro:"世界第二大桌状山，远看像一艘巨大的诺亚方舟悬浮在云端。相比瓦屋山，这里更野、更险峻。",route:"导航至'大瓦山湿地公园'或'五池村'。车可以直接开到观景台附近，也可以选择徒步登顶（路况较险，需拉绳索）。",stats:"车达观景 | 若徒步登顶需 5h+",tips:["去五池村的路弯多路窄，新手司机注意。","山顶常年有云海，运气好能看到佛光。","周边有五个连着的高山湖泊，非常适合露营钓鱼。"],gear:"露营装备（如果要过夜）、防蚊喷雾、广角镜头。"}},{id:"l2-2",level:2,levelName:"视觉盛宴",name:"华西雨屏",location:"洪雅",traffic:"自驾3h",distanceVal:3,hotness:2,keywords:["迷雾森林","绿野仙踪"],season:"4-10月",seasonsTag:["spring","summer","autumn"],reason:"神秘森林。主打极致的绿色和雾气，避暑首选。",image:"[https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80)",imgColor:"from-cyan-400 to-blue-500",guide:{intro:"位于瓦屋山腹地，因为常年多雨雾，被称为'华西雨屏'。这里的植被覆盖率极高，空气里都能拧出水来。",route:"导航至洪雅雅女湖或槽渔滩周边。这是一条自驾穿越线，沿途都是风景。",stats:"自驾游览 | 随停随玩",tips:["这里是四川降雨量最大的地方之一，必带雨具。","路边有很多农家乐，雅鱼是必点菜。","适合带天幕，找个溪边喝茶发呆。"],gear:"雨伞/雨衣（透明伞拍照好看）、露营椅、驱蚊水。"}},{id:"l2-3",level:2,levelName:"视觉盛宴",name:"姑弄村",location:"塔公",traffic:"自驾4.5h",distanceVal:4.5,hotness:5,keywords:["溪流露营","日照金山"],season:"夏/秋",seasonsTag:["summer","autumn"],reason:"松弛感天花板。车直达溪边，对着雅拉雪山喝咖啡。",image:"[https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&q=80)",imgColor:"from-sky-400 to-indigo-500",guide:{intro:"离塔公草原很近的一个宝藏村落。这里最大的卖点是小溪正对着雅拉雪山，且车子能直接开到小溪边，实现'搬家式露营'。",route:"导航'姑弄村'，沿着路边开，看到很多帐篷的地方就是。路况很好，轿车无压力。",stats:"0徒步 | 纯享受",tips:["最佳机位是小溪转弯处，雪山倒影绝美。","海拔约3700m，动作不要太剧烈，注意高反。","晚上风大，如果过夜要带抗风的帐篷。"],gear:"卡式炉、手冲咖啡套装、天幕、保暖羽绒服（早晚温差大）。"}},{id:"l2-4",level:2,levelName:"视觉盛宴",name:"勒维沟",location:"理县",traffic:"自驾4h",distanceVal:4,hotness:3,keywords:["川西冰岛","黑色沙滩"],season:"5-11月",seasonsTag:["summer","autumn"],reason:"暗黑风格。目前最火的“异域星球”风，黑色地貌配雪山。",image:"[https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800&q=80)",imgColor:"from-slate-400 to-slate-600",guide:{intro:"一个未被开发的原始沟壑。因为特殊的黑色页岩地貌，配合远处的雪山，拍出来的照片极具'冰岛感'或'外星感'。",route:"导航至理县，再问当地人去勒维沟的路。进沟有十几公里的土路，底盘低的车要小心。",stats:"自驾+轻徒步",tips:["穿全黑或全白的衣服最出片。","是一个野沟，没有任何商业设施，自备干粮和水。","信号不好，建议提前下载离线地图。"],gear:"墨镜（装酷必备）、SUV车辆、垃圾袋（必须带走垃圾）。"}},{id:"l2-5",level:2,levelName:"视觉盛宴",name:"王岗坪",location:"雅安",traffic:"自驾3.5h",distanceVal:3.5,hotness:4,keywords:["看贡嘎","怪树林"],season:"10-5月",seasonsTag:["autumn","winter","spring"],reason:"上帝视角。坐索道直达，正对贡嘎群峰，轻松出大片。",image:"[https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=800&q=80)",imgColor:"from-blue-300 to-indigo-400",guide:{intro:"距离成都最近的直面贡嘎雪山的观景平台之一。景区开发成熟，不用辛苦爬山就能看到日照金山。",route:"自驾到石棉县王岗坪景区游客中心，乘坐索道上山，再换乘观光车。",stats:"索道直达 | 轻松游",tips:["一定要早起看日照金山，景区酒店就在山顶，很方便。","怪树林在雪后非常美，像魔幻世界。","查好天气预报，阴天可能什么都看不见。"],gear:"厚羽绒服（山顶冷）、长焦镜头（拍雪山特写）。"}},{id:"l2-6",level:2,levelName:"视觉盛宴",name:"月亮湖",location:"康定",traffic:"自驾5.5h",distanceVal:5.5,hotness:5,keywords:["奶绿湖水","阿勒泰平替"],season:"6-10月",seasonsTag:["summer","autumn"],reason:"治愈系。露营环境极好，湖水颜色非常温柔。",image:"[https://images.unsplash.com/photo-1550939810-cb345b2f4d1c?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1550939810-cb345b2f4d1c?auto=format&fit=crop&w=800&q=80)",imgColor:"from-teal-300 to-teal-500",guide:{intro:"荷花海国家森林公园的一部分。湖水呈现出一种治愈的奶绿色，湖畔草甸平整，牛马成群，像极了新疆阿勒泰。",route:"导航至'普沙绒乡'方向，进山路有一段碎石路，轿车慢开能过。",stats:"车到湖边 | 环湖徒步约 2h",tips:["这里不能生火，只能用卡式炉。","湖边的温泉可以泡脚，纯天然。","进山费（卫生费）每人20-30元左右。"],gear:"野餐垫、浅色连衣裙（女生拍照）、水果/三明治。"}},{id:"l2-7",level:2,levelName:"视觉盛宴",name:"墨石公园",location:"道孚",traffic:"自驾6h",distanceVal:6,hotness:5,keywords:["异域星球","黑色石林"],season:"全年",seasonsTag:["spring","summer","autumn","winter"],reason:"经典必打卡。虽然人多，但黑色石林确实独一无二。",image:"[https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=800&q=80)",imgColor:"from-gray-600 to-gray-800",guide:{intro:"中国唯一的高原石林景观。岩石是糜棱岩，受地质运动挤压破碎后呈炭黑色，阴天时黑得发亮，视觉冲击力极强。",route:"就在G350国道旁边，自驾必经之地。全程栈道，好走。",stats:"游览时间约 1.5-2h",tips:["一定要穿亮色衣服！大红、明黄、纯白，在黑色背景下绝杀。","不需要门票，但可能要买观光车票。","出口处会有当地人推销骑马，可按需选择。"],gear:"墨镜、酷一点的穿搭、广角镜头。"}},{id:"l3-1",level:3,levelName:"进阶挑战",name:"光雾山",location:"巴中",traffic:"自驾5h",distanceVal:5,hotness:4,keywords:["亚洲红毯","红叶第一山"],season:"10月中",seasonsTag:["autumn"],reason:"色彩巅峰。秋天必去，满山红叶视觉冲击力极强。",image:"[https://images.unsplash.com/photo-1542475583-04983282b047?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1542475583-04983282b047?auto=format&fit=crop&w=800&q=80)",imgColor:"from-orange-400 to-red-600",guide:{intro:"亚洲最大的红叶观赏区。每年深秋，680平方公里的山林被红叶覆盖，真的像铺了红地毯一样震撼。",route:"主要分三个景区：大坝（主看红叶）、十八月潭（看水+红叶）、桃园（看山）。建议安排2-3天。",stats:"景区内栈道+观光车",tips:["红叶期非常短，只有两周左右，出发前务必看官方实况。","十八月潭的'水映红叶'是摄影首选。","住宿非常紧张，旺季需提前一个月订。"],gear:"偏光镜（消除叶片反光）、舒适徒步鞋。"}},{id:"l3-2",level:3,levelName:"进阶挑战",name:"野马海子",location:"康定",traffic:"自驾5h",distanceVal:5,hotness:3,keywords:["蓝冰天花板","气泡冰"],season:"1-3月",seasonsTag:["winter"],reason:"冬日限定。为了看那个蓝色的冰封湖面，值得累一次。",image:"[https://images.unsplash.com/photo-1615729947596-a595d2d9b4f4?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1615729947596-a595d2d9b4f4?auto=format&fit=crop&w=800&q=80)",imgColor:"from-cyan-500 to-blue-700",guide:{intro:"位于折多山背后的小众海子。冬天湖面结冰，呈现出深邃的幽蓝色，而且会有像贝加尔湖一样的气泡冰。",route:"导航'野马苑'，车停路边。开始徒步，全程上坡，海拔从3800m爬升到4200m左右。",stats:"徒步往返 6-8km | 爬升 400m+ | 耗时 4-5h",tips:["海拔较高，不要剧烈运动。","一定要买冰爪！冰面非常滑，没有冰爪根本站不住，更别说拍照了。","风巨大，帽子围巾手套必带。"],gear:"冰爪（必备）、保温杯（热水续命）、防风软壳。"}},{id:"l3-3",level:3,levelName:"进阶挑战",name:"奥太娜",location:"黑水",traffic:"自驾6h",distanceVal:6,hotness:3,keywords:["首座5000米","达古冰川"],season:"10-5月",seasonsTag:["autumn","winter","spring"],reason:"人生里程碑。体能好的小白首选雪山，强制向导，安全。",image:"[https://images.unsplash.com/photo-1545652932-6a3eb7a2b972?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1545652932-6a3eb7a2b972?auto=format&fit=crop&w=800&q=80)",imgColor:"from-slate-200 to-slate-400",guide:{intro:"入门级5000米雪山。虽然是技术型雪山，但常规路线难度适中，是很多人'人生第一座雪山'的选择。",route:"需要联系当地协作队。通常第一天到大本营，第二天凌晨冲顶。技术路段需要穿戴安全带和冰爪。",stats:"海拔 5210m | 需向导协作",tips:["必须请专业向导，不可私自攀登。","体能要求：能连续慢跑5公里。","登顶那一刻的云海和视野会让你觉得一切都值得。"],gear:"专业登山靴、雪套、雪镜、羽绒服、冲锋衣裤（协作队通常提供冰镐冰爪）。"}},{id:"l3-4",level:3,levelName:"进阶挑战",name:"九架海",location:"小金",traffic:"自驾4.5h",distanceVal:4.5,hotness:2,keywords:["翡翠之眼","绿宝石"],season:"5-6月",seasonsTag:["spring","summer"],reason:"秘境海子。奥太娜隔壁，海子颜色像翡翠一样惊艳。",image:"[https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80)",imgColor:"from-emerald-400 to-teal-600",guide:{intro:"共有九个海子依次排列，其中'蓝海子'和'绿海子'最美。这里的湖水颜色非常纯净，周围是高山杜鹃。",route:"需要当地中转车（面包车）拉到徒步起点，然后徒步进入。",stats:"徒步往返 10km+ | 海拔 4000m+",tips:["6月是高山杜鹃盛花期，花海配雪山海子绝美。","路迹不明显，最好有轨迹或向导。","注意防晒，高反紫外线很强。"],gear:"登山杖、防晒霜、遮阳帽。"}},{id:"l3-5",level:3,levelName:"进阶挑战",name:"大二普",location:"小金",traffic:"自驾4.5h",distanceVal:4.5,hotness:2,keywords:["三海子连穿","依央嘉波"],season:"6-10月",seasonsTag:["summer","autumn"],reason:"小众秘境。人少景美，三个高山海子一次看个够。",image:"[https://images.unsplash.com/photo-1627894006066-b45946e963c6?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1627894006066-b45946e963c6?auto=format&fit=crop&w=800&q=80)",imgColor:"from-blue-300 to-indigo-300",guide:{intro:"位于四姑娘山结斯沟内，一条非常冷门但风景极佳的徒步线。可以连续看到三个颜色各异的海子。",route:"车停在向花村附近，徒步上山。路况原始，有涉水路段。",stats:"徒步往返 12km | 爬升 700m",tips:["最好穿防水鞋，因为要过小溪。","这里信号很差，一定要提前告知家人行程。","垃圾一定要带走。"],gear:"防水徒步鞋、备用袜子、雨衣。"}},{id:"l3-6",level:3,levelName:"进阶挑战",name:"甲尔猛措",location:"理县",traffic:"自驾4h",distanceVal:4,hotness:3,keywords:["红石滩","彩林瀑布"],season:"10月",seasonsTag:["autumn"],reason:"丰富景观。集森林、红石、雪山于一体，性价比高。",image:"[https://images.unsplash.com/photo-1546944362-79013d52d929?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1546944362-79013d52d929?auto=format&fit=crop&w=800&q=80)",imgColor:"from-red-300 to-orange-400",guide:{intro:"离成都比较近的红叶+红石观赏地。沟里有大片的红石滩，秋天彩林满山，色彩非常浓郁。",route:"导航孟屯河谷，再往里走。徒步路线比较成熟。",stats:"徒步往返 8km | 难度适中",tips:["秋天去最美，其他季节稍逊。","红石是微生物形成的，不要踩踏或带走。","可以住在孟屯河谷，晚上有篝火晚会。"],gear:"相机、鲜艳的衣服。"}},{id:"l4-1",level:4,levelName:"终极朝圣",name:"冷嘎措",location:"康定",traffic:"自驾6h+",distanceVal:6,hotness:5,keywords:["直面贡嘎","360°观景"],season:"冬/春",seasonsTag:["winter","spring"],reason:"朝圣视角。距离贡嘎主峰极近，压迫感极强。",image:"[https://images.unsplash.com/photo-1517056636735-a3967923707c?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1517056636735-a3967923707c?auto=format&fit=crop&w=800&q=80)",imgColor:"from-purple-600 to-indigo-900",guide:{intro:"拍摄贡嘎雪山倒影的神级机位。湖面海拔4500m，贡嘎主峰就在眼前，仿佛触手可及。夕阳西下时的日照金山是无数人的壁纸。",route:"A线：上木居村坐摩托/骑马；B线：帮木吉德村徒步。目前大部分人选择坐当地人的摩托车上山，然后徒步一小段。",stats:"海拔 4550m | 极其耗费体能",tips:["日落后气温骤降且风巨大，一定要带最厚的羽绒服。","很多人在这里高反，不仅是因为海拔，更是因为冷和风。","拍完日落天全黑，头灯必须带。"],gear:"800蓬羽绒服、抓绒帽、头灯、暖宝宝、氧气瓶。"}},{id:"l4-2",level:4,levelName:"终极朝圣",name:"那玛峰",location:"康定",traffic:"自驾6h+",distanceVal:6,hotness:4,keywords:["冰塔林","贡嘎卫峰"],season:"4-6月 / 10-11月",seasonsTag:["spring","summer","autumn"],reason:"冰川奇观。能近距离看到像千层蛋糕一样的冰川塔林。",image:"[https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?auto=format&fit=crop&w=800&q=80)",imgColor:"from-gray-200 to-gray-400",guide:{intro:"海拔5588m，是一座初级技术型雪山。最大的亮点是攀登途中会经过巨大的冰川和冰塔林，景色极其壮观。",route:"经典路线：草科-巴王海-大本营-C1营地-冲顶。通常需要5-7天的行程。",stats:"技术攀登 | 难度 Level 4+",tips:["必须经过系统训练或有专业向导1:1协作。","C1营地风景绝美，就在贡嘎主峰对面。","对体能要求极高，不要贸然尝试。"],gear:"全套技术攀登装备（高山靴、冰镐、安全带等）。"}},{id:"l4-3",level:4,levelName:"终极朝圣",name:"长穿毕",location:"小金",traffic:"大巴到四姑娘山",distanceVal:4,hotness:5,keywords:["中国经典","长坪沟穿毕棚沟"],season:"9-11月",seasonsTag:["autumn"],reason:"徒步毕业考。40多公里穿越，对体能和意志的双重考验。",image:"[https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80)",imgColor:"from-yellow-600 to-yellow-800",guide:{intro:"中国十大经典徒步线路之一。连接了四姑娘山（长坪沟）和理县（毕棚沟），跨越多种地貌，是户外人的'成人礼'。",route:"D1: 长坪沟-木骡子(露营); D2: 木骡子-叉子沟尾; D3: 翻越垭口(4600m)-毕棚沟。",stats:"全程约 40km | 需重装或马帮轻装 | 3天",tips:["垭口风雪很大，且路陡峭，是全程难点。","需要提前办理户外活动许可证。","建议雇马帮驮包，轻装徒步体验更好。"],gear:"全套露营装备（睡袋温标-15度）、冲锋衣裤、登山杖、防水袜。"}},{id:"l4-4",level:4,levelName:"终极朝圣",name:"格聂C线",location:"理塘",traffic:"飞稻城+租车",distanceVal:10,hotness:5,keywords:["格聂之眼","丁真的世界"],season:"6-8月",seasonsTag:["summer"],reason:"顶级花海。被称为“川西最后的香格里拉”，花海雪山极美。",image:"[https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80)",imgColor:"from-green-500 to-yellow-400",guide:{intro:"围绕格聂神山的C型徒步穿越。这里有著名的'格聂之眼'，夏季满山遍野的野花，加上从不融化的雪山，美得不真实。",route:"理塘-喇嘛垭-格聂之眼-冷古寺-夯达营地-安久村。一般安排5-7天。",stats:"长线穿越 | 平均海拔 4000m+",tips:["夏季雨水多，蚂蝗也多，要注意防护。","格聂之眼看运气，水干了就没那么好看了。","由于路途遥远，建议预留足够的时间。"],gear:"防雨罩、雪套（防泥防虫）、高反药。"}},{id:"l4-5",level:4,levelName:"终极朝圣",name:"贡嘎大环",location:"康定",traffic:"自驾+徒步",distanceVal:7,hotness:5,keywords:["子梅垭口","冷嘎措"],season:"7-10月",seasonsTag:["summer","autumn"],reason:"王者之路。围绕蜀山之王徒步，是每个户外人的梦想。",image:"[https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&q=80)",imgColor:"from-gray-800 to-black",guide:{intro:"户外徒步的终极梦想。全长70-80公里，围绕蜀山之王贡嘎转山，每天都在雪山脚下行走，身体在地狱，眼睛在天堂。",route:"老榆林-日乌且垭口-莫溪沟-贡嘎寺-子梅垭口-上木居。通常需要6-8天。",stats:"高难度重装长线 | 翻越多个4800m+垭口",tips:["对体能、装备、心理素质都是极大考验，小白禁止尝试。","日乌且垭口经常大雪封山，需听从向导安排。","一定要找靠谱的马帮团队。"],gear:"顶级户外装备、卫星电话（领队备）、急救包。"}},{id:"l4-6",level:4,levelName:"终极朝圣",name:"七藏沟",location:"松潘",traffic:"自驾7h",distanceVal:7,hotness:2,keywords:["原始秘境","长海子"],season:"6月/10月",seasonsTag:["summer","autumn"],reason:"荒野求生。没有信号，没有游客，只有最原始的自然。",image:"[https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80)",imgColor:"from-emerald-800 to-teal-900",guide:{intro:"九寨沟的邻居，但完全保留了原始风貌。没有栈道，没有电瓶车，只有马道和沼泽。秋天的红叶和彩林不输九寨。",route:"卡卡沟口-长海子-鱼海子-红星海子-翡翠海。一般行程3-4天。",stats:"中高难度穿越 | 很多涉水路段",tips:["全程无信号，彻底失联。","由于很多沼泽地和过河点，必须穿防水性极好的鞋子。","红星海子海拔高风大，是核心景点。"],gear:"雨胶鞋（必备！）、防水袋、GPS轨迹。"}}],JP=({spot:t,onClose:e,onSave:n,isProcessing:r})=>{var f,p,g,k,x,V;const[s,i]=oe.useState(t||{name:"",location:"",level:1,traffic:"",reason:"",season:"",image:"",hotness:3,distanceVal:2,keywords:""}),o=D=>{const{name:S,value:_}=D.target;i(C=>({...C,[S]:_}))},l=()=>{let D={...s};typeof D.keywords=="string"&&(D.keywords=D.keywords.split(/[,，、]/).filter(S=>S.trim())),D.level=parseInt(D.level),D.hotness=parseInt(D.hotness),D.distanceVal=parseFloat(D.distanceVal),D.guide||(D.guide={intro:"",route:"",stats:"",tips:[],gear:""}),n(D)},u=D=>{const{name:S,value:_}=D.target;i(C=>({...C,guide:{...C.guide,[S]:_}}))},h=D=>{const S=D.target.value.split(`
`).filter(_=>_.trim());i(_=>({..._,guide:{..._.guide,tips:S}}))};return E.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",onClick:e,children:E.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl",onClick:D=>D.stopPropagation(),children:[E.jsxs("div",{className:"p-5 border-b flex justify-between items-center bg-stone-50",children:[E.jsxs("h3",{className:"font-bold text-lg",children:["📝 ",t?"编辑地点":"添加新地点"]}),E.jsx("button",{onClick:e,children:E.jsx(su,{size:20})})]}),E.jsxs("div",{className:"p-6 space-y-4 max-h-[70vh] overflow-y-auto",children:[E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"名称"}),E.jsx("input",{name:"name",value:s.name,onChange:o,className:"w-full border rounded p-2 text-sm"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"位置"}),E.jsx("input",{name:"location",value:s.location,onChange:o,className:"w-full border rounded p-2 text-sm"})]})]}),E.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"等级 (1-4)"}),E.jsx("input",{type:"number",name:"level",value:s.level,onChange:o,className:"w-full border rounded p-2 text-sm"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"热度 (1-5)"}),E.jsx("input",{type:"number",name:"hotness",value:s.hotness,onChange:o,className:"w-full border rounded p-2 text-sm"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"车程 (小时)"}),E.jsx("input",{type:"number",name:"distanceVal",value:s.distanceVal,onChange:o,className:"w-full border rounded p-2 text-sm"})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"推荐理由 (简短)"}),E.jsx("textarea",{name:"reason",value:s.reason,onChange:o,className:"w-full border rounded p-2 text-sm h-16"})]}),E.jsxs("div",{className:"border-t pt-4 mt-4",children:[E.jsx("h4",{className:"font-bold text-sm text-stone-800 mb-3",children:"攻略详情"}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"详细介绍"}),E.jsx("textarea",{name:"intro",value:((f=s.guide)==null?void 0:f.intro)||"",onChange:u,className:"w-full border rounded p-2 text-sm h-20",placeholder:"详细的景点介绍..."})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"线路描述"}),E.jsx("textarea",{name:"route",value:((p=s.guide)==null?void 0:p.route)||"",onChange:u,className:"w-full border rounded p-2 text-sm h-16",placeholder:"怎么玩？路线是啥？"})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"关键数据 (距离/爬升)"}),E.jsx("input",{name:"stats",value:((g=s.guide)==null?void 0:g.stats)||"",onChange:u,className:"w-full border rounded p-2 text-sm",placeholder:"10km | 500m"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"装备建议"}),E.jsx("input",{name:"gear",value:((k=s.guide)==null?void 0:k.gear)||"",onChange:u,className:"w-full border rounded p-2 text-sm",placeholder:"冰爪, 登山杖..."})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"避坑指南 (每行一条)"}),E.jsx("textarea",{name:"tips",value:((V=(x=s.guide)==null?void 0:x.tips)==null?void 0:V.join(`
`))||"",onChange:h,className:"w-full border rounded p-2 text-sm h-20",placeholder:`第一条提示
第二条提示`})]})]})]}),E.jsxs("div",{className:"border-t pt-4 mt-4",children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"图片链接 (URL)"}),E.jsx("input",{name:"image",value:s.image,onChange:o,className:"w-full border rounded p-2 text-sm",placeholder:"https://..."}),s.image&&E.jsx("img",{src:s.image,alt:"preview",className:"mt-2 h-20 w-full object-cover rounded-lg opacity-50",onError:D=>D.target.style.display="none"})]})]}),E.jsxs("div",{className:"p-4 border-t flex justify-end gap-3 bg-stone-50",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 text-sm text-stone-500 hover:bg-stone-200 rounded-lg transition-colors",children:"取消"}),E.jsxs("button",{onClick:l,disabled:r,className:"px-6 py-2 text-sm bg-stone-900 text-white rounded-lg hover:bg-stone-800 flex items-center gap-2 disabled:opacity-50",children:[r?E.jsx(zv,{className:"animate-spin",size:16}):E.jsx(AI,{size:16}),"保存"]})]})]})})},ZP=({onClose:t})=>{const[e,n]=oe.useState(""),[r,s]=oe.useState(""),[i,o]=oe.useState(""),[l,u]=oe.useState(!1),h=async f=>{f.preventDefault(),u(!0),o("");try{await D2(Xh,e,r),t()}catch(p){console.error(p),o("登录失败: 账号或密码错误")}u(!1)};return E.jsx("div",{className:"fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md",onClick:t,children:E.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-sm p-8 shadow-2xl animate-in zoom-in-95",onClick:f=>f.stopPropagation(),children:[E.jsxs("div",{className:"flex justify-between items-center mb-6",children:[E.jsxs("h2",{className:"text-2xl font-black text-stone-900 flex items-center gap-2",children:[E.jsx(vI,{className:"text-orange-500"})," 管理员登录"]}),E.jsx("button",{onClick:t,children:E.jsx(su,{size:20,className:"text-stone-400"})})]}),E.jsxs("form",{onSubmit:h,className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"邮箱"}),E.jsx("input",{type:"email",value:e,onChange:f=>n(f.target.value),className:"w-full border p-2 rounded-lg",required:!0,placeholder:"admin@example.com"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 mb-1",children:"密码"}),E.jsx("input",{type:"password",value:r,onChange:f=>s(f.target.value),className:"w-full border p-2 rounded-lg",required:!0})]}),i&&E.jsx("p",{className:"text-red-500 text-xs bg-red-50 p-2 rounded",children:i}),E.jsx("button",{type:"submit",disabled:l,className:"w-full bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-stone-800 transition-all disabled:opacity-50",children:l?"登录中...":"进入后台"})]})]})})},ex=({onClose:t})=>E.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:t,children:E.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10 duration-200 max-h-[80vh] flex flex-col",onClick:e=>e.stopPropagation(),children:[E.jsxs("div",{className:"p-5 border-b border-stone-100 flex justify-between items-center bg-stone-50",children:[E.jsxs("h3",{className:"text-lg font-black text-stone-900 flex items-center gap-2",children:[E.jsx(Uv,{size:20,className:"text-orange-500"})," 难度等级说明"]}),E.jsx("button",{onClick:t,className:"p-1 hover:bg-stone-200 rounded-full text-stone-400",children:E.jsx(su,{size:20})})]}),E.jsx("div",{className:"p-5 overflow-y-auto space-y-6",children:[1,2,3,4].map(e=>E.jsxs("div",{className:"relative pl-4 border-l-2 border-stone-200",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-stone-300"}),E.jsx("h4",{className:"font-bold text-stone-800 text-sm mb-1",children:Pa[e].title}),E.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:Pa[e].tags.map(n=>E.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-stone-100 text-stone-500 rounded font-medium",children:n},n))}),E.jsx("p",{className:"text-xs text-stone-600 leading-relaxed mb-2",children:Pa[e].desc}),E.jsxs("div",{className:"text-[10px] text-stone-400",children:[E.jsx("span",{className:"font-bold text-stone-500",children:"适合人群："}),Pa[e].suitable]})]},e))})]})}),tx=({spot:t,onClose:e,onSave:n,initialData:r})=>{const[s,i]=oe.useState((r==null?void 0:r.date)||""),[o,l]=oe.useState((r==null?void 0:r.method)||"");return E.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:e,children:E.jsx("div",{className:"bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200",onClick:u=>u.stopPropagation(),children:E.jsxs("div",{className:"p-6",children:[E.jsx("h3",{className:"text-xl font-bold text-stone-900 mb-1",children:'添加到 "想去" 清单'}),E.jsxs("p",{className:"text-sm text-stone-500 mb-6",children:["为 ",E.jsx("span",{className:"font-bold text-orange-600",children:t.name})," 制定一个小计划吧"]}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 uppercase mb-1",children:"计划出发时间"}),E.jsx("input",{type:"month",value:s,onChange:u=>i(u.target.value),className:"w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-xs font-bold text-stone-500 uppercase mb-1",children:"出行方式 (可选)"}),E.jsxs("select",{value:o,onChange:u=>l(u.target.value),className:"w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none",children:[E.jsx("option",{value:"",children:"请选择..."}),E.jsx("option",{value:"自驾",children:"🚗 自驾"}),E.jsx("option",{value:"报团",children:"🚩 报团"}),E.jsx("option",{value:"徒步",children:"🥾 重装徒步"}),E.jsx("option",{value:"独行",children:"👤 独行"}),E.jsx("option",{value:"约伴",children:"👥 约伴/拼车"})]})]})]}),E.jsxs("div",{className:"flex gap-3 mt-8",children:[E.jsx("button",{onClick:e,className:"flex-1 py-2.5 rounded-xl text-stone-500 font-medium hover:bg-stone-50 transition-colors",children:"取消"}),E.jsx("button",{onClick:()=>n({date:s,method:o}),className:"flex-1 bg-orange-600 text-white py-2.5 rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-colors",children:"保存计划"})]})]})})})},nx=({spot:t,onClose:e,onToggleWishlist:n,isWishlisted:r,onToggleVisit:s,isVisited:i})=>{var o,l;return E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:e,children:E.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]",onClick:u=>u.stopPropagation(),children:[E.jsxs("div",{className:"h-48 shrink-0 relative",children:[E.jsx("img",{src:t.image||zl,alt:t.name,className:"w-full h-full object-cover",onError:u=>{u.target.src=zl}}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"}),E.jsx("button",{onClick:e,className:"absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 transition-colors backdrop-blur-md",children:E.jsx(su,{size:20})}),E.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 pb-4",children:[E.jsx("h2",{className:"text-3xl font-black text-white mb-1 drop-shadow-md tracking-tight",children:t.name}),E.jsxs("div",{className:"flex items-center gap-2 text-white/90 text-sm font-medium",children:[E.jsx(jv,{size:14})," ",t.location,E.jsx("span",{className:"mx-1 opacity-50",children:"•"}),E.jsxs("span",{className:"bg-white/20 px-2 py-0.5 rounded text-xs",children:["Level ",t.level]})]})]})]}),E.jsxs("div",{className:"overflow-y-auto p-6 space-y-6",children:[E.jsx("div",{className:"bg-orange-50 p-4 rounded-xl border border-orange-100 text-orange-900/80 text-sm leading-relaxed font-medium shadow-sm",children:((o=t.guide)==null?void 0:o.intro)||t.reason}),E.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[E.jsxs("div",{className:"bg-stone-50 p-3 rounded-xl border border-stone-100",children:[E.jsxs("div",{className:"flex items-center gap-1.5 text-stone-400 text-xs mb-1.5 font-bold uppercase tracking-wider",children:[E.jsx(TI,{size:12})," 交通"]}),E.jsx("div",{className:"text-xs text-stone-700 font-bold leading-snug",children:t.traffic})]}),E.jsxs("div",{className:"bg-stone-50 p-3 rounded-xl border border-stone-100",children:[E.jsxs("div",{className:"flex items-center gap-1.5 text-stone-400 text-xs mb-1.5 font-bold uppercase tracking-wider",children:[E.jsx(Mv,{size:12})," 最佳季节"]}),E.jsx("div",{className:"text-xs text-stone-700 font-bold leading-snug",children:t.season})]})]}),t.guide&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsxs("h3",{className:"flex items-center gap-2 text-base font-bold text-stone-900 mb-3",children:[E.jsx(yI,{className:"text-blue-600",size:18})," 线路与强度"]}),E.jsxs("div",{className:"bg-white border border-stone-100 rounded-xl p-4 shadow-sm",children:[E.jsx("p",{className:"text-sm text-stone-600 mb-3 leading-relaxed font-medium",children:t.guide.route}),E.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono bg-stone-100 text-stone-600 px-3 py-2 rounded-lg font-bold",children:[E.jsx(_I,{size:14})," ",t.guide.stats]})]})]}),E.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[E.jsxs("div",{children:[E.jsxs("h3",{className:"flex items-center gap-2 text-base font-bold text-stone-900 mb-3",children:[E.jsx(fI,{className:"text-yellow-500",size:18})," 避坑 & 提示"]}),E.jsx("ul",{className:"space-y-2",children:t.guide.tips&&t.guide.tips.map((u,h)=>E.jsxs("li",{className:"flex gap-2 text-sm text-stone-600 font-medium",children:[E.jsx("span",{className:"text-yellow-500 mt-0.5",children:"•"}),E.jsx("span",{children:u})]},h))})]}),E.jsxs("div",{children:[E.jsxs("h3",{className:"flex items-center gap-2 text-base font-bold text-stone-900 mb-3",children:[E.jsx(pI,{className:"text-green-600",size:18})," 装备建议"]}),E.jsx("p",{className:"text-sm text-stone-600 bg-green-50/50 p-3 rounded-lg border border-green-100 font-medium",children:t.guide.gear})]})]})]})]}),E.jsxs("div",{className:"p-4 border-t border-stone-100 bg-white shrink-0 flex gap-3 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]",children:[E.jsx("button",{onClick:u=>n(t.id,u),className:`flex items-center justify-center p-3 rounded-xl border transition-colors ${r?"bg-rose-50 border-rose-200 text-rose-500":"bg-white border-stone-200 text-stone-400 hover:text-rose-400"}`,children:E.jsx(Ih,{size:20,className:r?"fill-rose-500":""})}),E.jsxs("a",{href:`https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(t.name+" "+(((l=t.keywords)==null?void 0:l[0])||"")+" 攻略")}`,target:"_blank",rel:"noreferrer",className:"flex-1 flex items-center justify-center gap-2 text-red-600 bg-red-50 border border-red-100 py-3 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors",children:[E.jsx(CI,{size:16})," 更多实况"]}),E.jsxs("button",{onClick:u=>s(t.id,u),className:`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-colors text-white shadow-lg shadow-stone-200 ${i?"bg-stone-400":"bg-stone-900 hover:bg-stone-800"}`,children:[i?"取消打卡":"标记去过",E.jsx(Fv,{size:16})]})]})]})})};function rx(){const[t,e]=oe.useState([]),[n,r]=oe.useState(!0),[s,i]=oe.useState(null),[o,l]=oe.useState(!1),[u,h]=oe.useState(null),[f,p]=oe.useState(null),[g,k]=oe.useState(!1),[x,V]=oe.useState(!1),[D,S]=oe.useState(!1),[_,C]=oe.useState(null),[b,j]=oe.useState("all"),[U,v]=oe.useState([]),[y,w]=oe.useState([]);oe.useEffect(()=>{const O=L2(Xh,B=>{i(B)});return()=>O()},[]),oe.useEffect(()=>{I()},[]),oe.useEffect(()=>{const O=localStorage.getItem("sichuan_bucket_list_wishlist");O&&v(JSON.parse(O));const B=localStorage.getItem("sichuan_bucket_list_visits");B&&w(JSON.parse(B))},[]),oe.useEffect(()=>{localStorage.setItem("sichuan_bucket_list_wishlist",JSON.stringify(U)),localStorage.setItem("sichuan_bucket_list_visits",JSON.stringify(y))},[U,y]);const I=async()=>{r(!0);try{const O=kR(Rc(Ni,"spots"),RR("hotness","desc")),Y=(await DR(O)).docs.map(ue=>({id:ue.id,...ue.data()}));e(Y)}catch(O){console.error("Error fetching documents: ",O)}r(!1)},A=(O,B)=>{B&&B.stopPropagation(),U.find(ue=>ue.id===O)?v(U.filter(ue=>ue.id!==O)):C(O)},R=O=>{if(_){const B=U.findIndex(Y=>Y.id===_);if(B>=0){const Y=[...U];Y[B]={...Y[B],...O},v(Y)}else v([...U,{id:_,...O}]);C(null)}},T=(O,B)=>{B&&B.stopPropagation(),y.includes(O)?w(y.filter(Y=>Y!==O)):w([...y,O])},Ne=async()=>{if(confirm("确定要初始化数据库吗？这会写入默认数据。")){k(!0);try{for(const O of XP){const{id:B,...Y}=O;await ry(Rc(Ni,"spots"),Y)}alert("初始化成功！刷新页面查看。"),I()}catch(O){alert("初始化失败: "+O.message)}k(!1)}},Vt=async O=>{k(!0);try{if(u){const B=Wh(Ni,"spots",u.id);await bR(B,O)}else{const B={...O,levelName:O.level===1?"周末拉练":O.level===2?"视觉盛宴":O.level===3?"进阶挑战":"终极朝圣",imgColor:"from-gray-500 to-gray-700",seasonsTag:["spring","summer","autumn","winter"]};await ry(Rc(Ni,"spots"),B)}V(!1),I()}catch(B){console.error(B),alert("保存失败: "+B.message)}k(!1)},wr=async(O,B)=>{if(B.stopPropagation(),!!confirm("确定要删除这个地点吗？无法恢复。"))try{await OR(Wh(Ni,"spots",O)),I()}catch{alert("删除失败")}},Er=oe.useMemo(()=>b==="Wishlist"?t.filter(O=>U.some(B=>B.id===O.id)):b!=="all"?t.filter(O=>O.level===parseInt(b)):t,[b,U,t]),$=O=>O===1?E.jsx(RI,{className:"w-4 h-4"}):O===2?E.jsx(gI,{className:"w-4 h-4"}):E.jsx(EI,{className:"w-4 h-4"});return E.jsxs("div",{className:"min-h-screen bg-stone-50 text-stone-800 font-sans pb-20",children:[E.jsx("header",{className:"relative bg-stone-900 text-white pb-12 pt-8 px-4",children:E.jsxs("div",{className:"max-w-4xl mx-auto flex justify-between items-start",children:[E.jsxs("div",{children:[E.jsx("h1",{className:"text-2xl font-black tracking-tight mb-2 italic",children:"四川户外 Bucket List 🏔️"}),E.jsx("p",{className:"text-xs text-stone-400",children:"发现四川 1% 的极致风光"})]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsxs("button",{onClick:()=>S(!0),className:"text-[10px] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 text-stone-200 hover:bg-white/20 transition-colors border border-white/10",children:[E.jsx(Uv,{size:12})," 难度说明"]}),s?E.jsxs("div",{className:"flex gap-2 items-center",children:[E.jsx("span",{className:"text-xs text-stone-400 mr-2 hidden md:inline",children:"管理员"}),E.jsxs("button",{onClick:()=>{h(null),V(!0)},className:"bg-orange-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 hover:bg-orange-700 transition-colors",children:[E.jsx(SI,{size:14})," ",E.jsx("span",{className:"hidden md:inline",children:"添加"})]}),E.jsx("button",{onClick:()=>M2(Xh),className:"bg-stone-800 border border-stone-700 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-stone-700 transition-colors",children:"退出"})]}):E.jsx("button",{onClick:()=>l(!0),className:"opacity-50 hover:opacity-100 transition-opacity p-2",children:E.jsx(wI,{size:20})})]})]})}),E.jsx("div",{className:"max-w-4xl mx-auto px-4 -mt-6 mb-6 relative z-10",children:E.jsxs("div",{className:"bg-white/90 backdrop-blur rounded-xl p-2 shadow-lg border border-stone-200 flex gap-2 overflow-x-auto scrollbar-hide",children:[E.jsxs("button",{onClick:()=>j("Wishlist"),className:`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${b==="Wishlist"?"bg-rose-500 text-white":"bg-white text-stone-600 hover:bg-stone-50"}`,children:[E.jsx(Ih,{size:14,className:b==="Wishlist"?"fill-white":""})," 心愿单 (",U.length,")"]}),E.jsx("div",{className:"w-px bg-stone-200 mx-1"}),["all","1","2","3","4"].map(O=>E.jsx("button",{onClick:()=>j(O),className:`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${b===O?"bg-stone-800 text-white":"hover:bg-stone-100 text-stone-600"}`,children:O==="all"?"全部":`Level ${O}`},O))]})}),E.jsxs("main",{className:"max-w-4xl mx-auto px-4",children:[n&&E.jsx("div",{className:"text-center py-20 text-stone-400 animate-pulse",children:"正在从云端加载数据..."}),!n&&t.length===0&&E.jsxs("div",{className:"text-center py-20 border-2 border-dashed border-stone-200 rounded-xl",children:[E.jsx("p",{className:"text-stone-400 mb-4 font-medium",children:"数据库里还没有地点数据"}),s?E.jsxs("button",{onClick:Ne,disabled:g,className:"bg-stone-800 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 mx-auto hover:bg-stone-700 transition-colors",children:[g?E.jsx(zv,{className:"animate-spin",size:16}):E.jsx(PI,{size:16}),"一键导入默认数据"]}):E.jsx("button",{onClick:()=>l(!0),className:"text-orange-600 text-sm font-bold hover:underline",children:"管理员登录后导入数据"})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Er.map(O=>{const B=U.find(Y=>Y.id===O.id);return E.jsxs("div",{onClick:()=>p(O),className:"group relative bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden cursor-pointer hover:shadow-md transition-all",children:[E.jsxs("div",{className:"h-40 relative overflow-hidden bg-stone-200",children:[E.jsx("img",{src:O.image||zl,alt:O.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",onError:Y=>{Y.target.src=zl}}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"}),E.jsxs("div",{className:"absolute bottom-3 left-3 text-white",children:[E.jsx("h3",{className:"font-bold text-xl mb-0.5 drop-shadow-md",children:O.name}),E.jsxs("div",{className:"flex items-center gap-2 text-xs opacity-90 font-medium",children:[E.jsx(jv,{size:12})," ",O.location,E.jsx("span",{children:"•"}),$(O.level)," Level ",O.level]})]}),s&&E.jsxs("div",{className:"absolute top-2 right-2 flex gap-2 z-20",children:[E.jsx("button",{onClick:Y=>{Y.stopPropagation(),h(O),V(!0)},className:"bg-white/90 p-2 rounded-full text-stone-800 hover:bg-white hover:text-blue-600 transition-colors shadow-sm",title:"编辑",children:E.jsx(II,{size:14})}),E.jsx("button",{onClick:Y=>wr(O.id,Y),className:"bg-white/90 p-2 rounded-full text-stone-800 hover:bg-white hover:text-red-600 transition-colors shadow-sm",title:"删除",children:E.jsx(kI,{size:14})})]}),!s&&E.jsxs("div",{className:"absolute top-2 right-2 flex flex-col gap-2 items-end z-20",children:[y.includes(O.id)&&E.jsxs("div",{className:"bg-white/90 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm",children:[E.jsx(Fv,{size:10})," 已去"]}),E.jsx("button",{onClick:Y=>A(O.id,Y),className:`p-2 rounded-full transition-all shadow-sm ${B?"bg-rose-500 text-white":"bg-black/20 backdrop-blur-sm text-white hover:bg-white/40"}`,children:E.jsx(Ih,{size:16,className:B?"fill-white":""})})]})]}),E.jsxs("div",{className:"p-4",children:[B&&(B.date||B.method)&&E.jsxs("div",{className:"mb-2 bg-rose-50 border border-rose-100 rounded p-1.5 flex gap-2 text-[10px] text-rose-700 font-bold",children:[B.date&&E.jsxs("span",{children:["📅 ",B.date]}),B.method&&E.jsxs("span",{children:["🚀 ",B.method]})]}),E.jsx("p",{className:"text-sm text-stone-600 line-clamp-2 h-10 mb-3 leading-relaxed font-medium",children:O.reason}),E.jsxs("div",{className:"flex flex-wrap gap-2 text-[10px] text-stone-500 font-bold",children:[O.season&&E.jsxs("span",{className:"bg-stone-100 px-2 py-1 rounded flex items-center gap-1",children:[E.jsx(Mv,{size:10})," ",O.season]}),O.traffic&&E.jsxs("span",{className:"bg-stone-100 px-2 py-1 rounded flex items-center gap-1",children:[E.jsx(mI,{size:10})," ",O.traffic]})]})]})]},O.id)})})]}),o&&E.jsx(ZP,{onClose:()=>l(!1)}),x&&E.jsx(JP,{spot:u,onClose:()=>V(!1),onSave:Vt,isProcessing:g}),f&&E.jsx(nx,{spot:f,onClose:()=>p(null),onToggleWishlist:A,isWishlisted:U.some(O=>O.id===f.id),onToggleVisit:T,isVisited:y.includes(f.id)}),D&&E.jsx(ex,{onClose:()=>S(!1)}),_&&E.jsx(tx,{spot:t.find(O=>O.id===_),initialData:U.find(O=>O.id===_),onClose:()=>C(null),onSave:R})]})}Lv(document.getElementById("root")).render(E.jsx(oe.StrictMode,{children:E.jsx(rx,{})}));
