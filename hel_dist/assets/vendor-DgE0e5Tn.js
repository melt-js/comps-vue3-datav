var Yd=Object.defineProperty,$d=Object.defineProperties;var Kd=Object.getOwnPropertyDescriptors;var zl=Object.getOwnPropertySymbols;var Zd=Object.prototype.hasOwnProperty,Jd=Object.prototype.propertyIsEnumerable;var io=Math.pow,kl=(n,e,t)=>e in n?Yd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ro=(n,e)=>{for(var t in e||(e={}))Zd.call(e,t)&&kl(n,t,e[t]);if(zl)for(var t of zl(e))Jd.call(e,t)&&kl(n,t,e[t]);return n},Vl=(n,e)=>$d(n,Kd(e));var Hl=(n,e,t)=>new Promise((i,r)=>{var a=l=>{try{o(t.next(l))}catch(u){r(u)}},s=l=>{try{o(t.throw(l))}catch(u){r(u)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(a,s);o((t=t.apply(n,e)).next())});import{b as Qd,a as ep,c as tp,d as Wl,e as np,f as wa,g as ip}from"./shared-runtime-BRdfiJze.js";var ao=ap();op();var rp=lp();function ll(){return window||global}function ap(){var n=ll(),e=n.__HEL_LOAD_ASSETS_FLAG__,t=n.__HEL_ISO_FLAG__,i=n.__MASTER_APP_LOADED__;return{isLoadAssetsCalled:e===1,isFirstMod:t===void 0,isBeforeCore:i===void 0}}function op(){var n=ll();n.__HEL_ISO_FLAG__===void 0&&(n.__HEL_ISO_FLAG__=1)}function sp(){var n="";try{throw new Error("codeHost")}catch(r){var e=r.stack.split(`
`);n=e[e.length-1]||""}var t=n.split("//")[1]||"",i=t.split("/")[0];return i}function lp(){var n=ll(),e=n.location,t=n.__HEL_MICRO_SHARED__,i=ao.isFirstMod,r=ao.isBeforeCore,a=ao.isLoadAssetsCalled;if(a||!i)return!1;if(r)return!0;var s=sp();if(e&&e.host===s)return!0;if(t){var o=t.cacheRoot,l=o.appGroupName2platform,u=o.appName2platform,c=l||u||{};if(!Object.keys(c).length)return!0}return!1}function up(){return rp}var aE=up;function fh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function hh(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var mr={exports:{}};function Gs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function cp(n){if(Array.isArray(n))return n}function fp(n){if(Array.isArray(n))return Gs(n)}function hp(n,e){var t=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=ul(n))||e){t&&(n=t);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,s=!0,o=!1;return{s:function(){t=t.call(n)},n:function(){var l=t.next();return s=l.done,l},e:function(l){o=!0,a=l},f:function(){try{s||t.return==null||t.return()}finally{if(o)throw a}}}}function zs(n,e,t){return(e=_p(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function dp(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function pp(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],l=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function mp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Mr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xl(Object(t),!0).forEach(function(i){zs(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Xl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function La(n,e){return cp(n)||pp(n,e)||ul(n,e)||mp()}function oo(n){return fp(n)||dp(n)||ul(n)||vp()}function gp(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function _p(n){var e=gp(n,"string");return typeof e=="symbol"?e:e+""}function Wi(n){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wi(n)}function ul(n,e){if(n){if(typeof n=="string")return Gs(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Gs(n,e):void 0}}var cn=null;function yp(){if(typeof window!="undefined"){cn=window;return}if(typeof global!="undefined"){cn=global;return}throw new Error("unable to locate global object")}function Wt(){return cn||yp(),cn}function xp(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=null;(e=cn)!==null&&e!==void 0&&e.__HEL_MICRO_SHARED__&&(i=cn.__HEL_MICRO_SHARED__),t?cn=Mr(Mr({},cn),n):cn=n,i&&(cn.__HEL_MICRO_SHARED__=i)}function Da(){return Wt()}function dh(){var n=Wt();return n.MutationObserver||n.WebKitMutationObserver||n.MozMutationObserver}function ql(n,e){for(var t=null,i=n.length,r=0;r<i;r++){var a=n[r];if(a.tagName===e){t=a;break}}return t}function ph(n){return Object.keys(n)}function Sp(){var n=function(r){var a=r||{},s=a.search||"";if(!s){var o=a.hash||"",l=o.split("?")[1]||"";l&&(s="?".concat(l))}return s};try{var e;return n((e=Wt())===null||e===void 0||(e=e.top)===null||e===void 0?void 0:e.location)}catch(i){var t;return n((t=Wt())===null||t===void 0?void 0:t.location)}}function jl(n){var e,t=(e=Wt())===null||e===void 0?void 0:e.localStorage;return t==null?void 0:t.getItem(n)}function Yl(n,e){var t,i=(t=Wt())===null||t===void 0?void 0:t.localStorage;return i==null?void 0:i.setItem(n,e)}function bp(){var n=Sp(),e={};if(n!=null&&n.startsWith("?")){var t=n.substring(1),i=t.split("&");i.forEach(function(r){var a=r.split("="),s=La(a,2),o=s[0],l=s[1];e[o]=l})}return e}function mh(){var n="";try{throw new Error("getJsRunLocation")}catch(i){var e=i.stack.split(`
`),t=e.length;n=e[t-1]||e[t-2]||""}return n}function on(n,e,t,i){var r=nt(n,e);r[t]=i}function nt(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n[e];return i||(i=t,n[e]=i),i}function vh(n,e){Object.keys(e).forEach(function(t){var i=e[t];[null,void 0,""].includes(i)||(n[t]=i)})}function ks(n,e){n.includes(e)||n.push(e)}function gh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.nullValues,i=t===void 0?[null,void 0,""]:t,r=e.emptyObjIsNull,a=r===void 0?!0:r,s=e.emptyArrIsNull,o=s===void 0?!0:s,l=i.includes(n);if(l)return!0;if(Array.isArray(n))return o?n.length===0:!1;if(Wi(n)==="object"){var u=ph(n),c=u.length;return a?c===0:!1}return!1}function _h(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e}function Mp(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ep(){var n=Wt();return n.process&&n.global&&!n.document}function Ap(n,e,t){if(n&&typeof n!="string")return n;try{var i=JSON.parse(n);return i||e}catch(r){if(e!==void 0)return e;throw t?new Error(t):r}}var yh=gh,Vs=ks,xh=ph;function Tp(n,e){var t=[];return n.forEach(function(i){return Vs(t,i)}),e.forEach(function(i){return Vs(t,i)}),t}function Sh(n,e){var t=e||function(r){return!yh(r)},i={};return xh(n).forEach(function(r){t(n[r])&&(i[r]=n[r])}),i}function Cp(n,e,t){var i=t,r=hp(n),a;try{for(r.s();!(a=r.n()).done;){var s=a.value,o=s[e];if(![null,void 0,""].includes(o)){i=o;break}}}catch(l){r.e(l)}finally{r.f()}return i}function bh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"MULTI",t=n.split(`
`),i=t.length-1,r=t.map(function(a,s){var o;if(!a&&(s===0||s===i))return"";var l=function(p,d){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",m=p;return p.endsWith("<br/>")?(m=p.substring(0,m.length-5),"".concat(m).concat(d)):"".concat(m).concat(v)},u=((o=a.trimStart)===null||o===void 0?void 0:o.call(a))||a;return e==="MULTI"?"".concat(l(u,""),`
`):(u=l(u,`
`," "),u)}).join("");return r}function Mh(n){return bh(n,"ONE")}function Pp(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,t=Wt(),i=Mh(n),r=t.alert||_h;if(e){var a;!((a=t.location)===null||a===void 0)&&a.port&&r(i);return}r(i)}function Tn(n,e,t){n.dataset?n.dataset[e]=t:n.setAttribute("data-".concat(e),t)}function Oa(n){Tn(n,"heldisabled","1"),n.disabled=!0}var wp=Object.freeze({__proto__:null,noop:_h,hasProp:Mp,isServer:Ep,safeParse:Ap,isNull:yh,noDupPush:Vs,okeys:xh,merge2List:Tp,purify:Sh,getObjsVal:Cp,pfstr:bh,nbstr:Mh,nbalert:Pp,setDataset:Tn,disableNode:Oa});function Lp(n,e){var t=this,i=e.fn,r=e.fnName,a=e.arg1PlatObjFnKeys,s=a.includes(r);return function(){for(var o=function(m){return Mr({platform:n},Sh(m||{}))},l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var p=u[0],d=u[1];return s?u[0]=o(p):u[1]=o(d),i.apply(t,u)}}function Eh(n,e,t){var i=t||{},r=i.ignoreKeys,a=r===void 0?[]:r,s=i.arg1PlatObjFnKeys,o=s===void 0?[]:s,l={};return Object.keys(e).forEach(function(u){var c=e[u];if(a.includes(u)){l[u]=c;return}var p=Wi(c);if(p&&p==="object"){l[u]=Eh(n,c,t);return}if(p==="function"){l[u]=Lp(n,{arg1PlatObjFnKeys:o,fn:c,fnName:u});return}l[u]=c}),l}var Rp="hel",Ah="unpkg",cl={NONE:0,LOG:1,TRACE:2},ot="__default_online_ver__",Th=Ah,ft={CORE_VER:"4.13.1",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:ot,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:Th,LS_LOG_MODE:"HelConfig.logMode",LS_LOG_FILTER:"HelConfig.logFilter",PLAT_HEL:Rp,PLAT_UNPKG:Ah,KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},Rr={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},Dr={NOT_LOAD:0,LOADING:1,LOADED:2},Ch=ft.LS_LOG_FILTER,Ph=ft.LS_LOG_MODE,Or=cl.NONE,wh=cl.LOG,Dp=cl.TRACE,Hn={isIncludeFilter:function(e,t){if(!t.includes(","))return e.includes(t);var i=t.split(",");return i.some(function(r){return e.includes(r)})},getLogFilter:function(){return ai().logFilter},setLogFilter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;ai().logFilter=e,t&&Yl(Ch,e)},setLogMode:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=parseInt(e,10);[Or,wh,Dp].includes(i)&&(ai().logMode=i,t&&Yl(Ph,i))},getLogMode:function(){return ai().logMode}},Gn={};function Op(){if(!ai().isInit){ai().isInit=!0;var n=bp(),e=n.hellog,t=n.hellogf,i=e||jl(Ph)||Or;Hn.setLogMode(i,!1);var r=t||jl(Ch)||"";Hn.setLogFilter(r,!1)}}function Np(){return{logMode:Or,logFilter:"",isInit:!1}}function Up(){if(Gn=Da().__HEL_MICRO_DEBUG__,!gh(Gn)){Gn.logMode===void 0&&(Gn.logMode=Or,Gn.logFilter="");return}Gn=Np(),Da().__HEL_MICRO_DEBUG__=Gn;try{Op()}catch(n){}}function za(){return Hn.getLogMode()!==Or}function ai(){return Gn}var $l="  %c--> HEL LOG:",Kl="color:#ad4e00;font-weight:600";function Gt(){if(za()){for(var n=Hn.getLogMode()===wh?console.log:console.trace||console.log,e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=t[0],a=t.slice(1);if(typeof r!="string")return n.apply(void 0,[$l,Kl].concat(t));var s=Hn.getLogFilter(),o=["".concat($l," ").concat(r),Kl].concat(oo(a));if(s){Hn.isIncludeFilter(r,s)&&n.apply(void 0,oo(o));return}n.apply(void 0,oo(o))}}var Er={};function Ip(n){!za()||Er[n]||(Er[n]=Date.now())}function fl(n,e,t){if(!(!za()||!Er[n])){var i=Er[n];Gt("[[ PerfCheck ]] (".concat(n,"/").concat(e,") costs ").concat(Date.now()-i," ms")),t&&Lh(n)}}function Lh(n){Er[n]=0}var Fp=ft.DEFAULT_API_URL,Bp=ft.DEFAULT_USER_LS_KEY,so=ft.PLAT_HEL,Zl=ft.PLAT_UNPKG,Gp=ft.DEFAULT_API_PREFIX,zp=ft.CORE_VER,kp=ft.KEY_CSS_LINK_TAG_ADDED,Vp=ft.KEY_STYLE_TAG_ADDED,Jl=ft.KEY_IGNORE_CSS_PREFIX_LIST,Hp=ft.KEY_IGNORE_STYLE_TAG_KEY,Wp=ft.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Hs(n){var e=n||{},t=e.apiPrefix;return{apiMode:"get",apiPrefix:t,apiSuffix:"",apiPathOfApp:Fp,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,customMetaUrl:"",customMetaJsonpUrl:"",getMeta:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:Bp,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function Ws(n){var e=Mr(Mr({isConfigOverwrite:!1,platform:n,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},Hs()),{},{origin:Hs({apiPrefix:Gp})});return e}function Xs(){var n={};return{on:function(t,i){var r=n[t];if(!r){var a=[];n[t]=a,r=a}r.push(i)},emit:function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var s=n[t];if(s){var o=s.slice();o.forEach(function(l){return l.apply(void 0,r)})}},off:function(t,i){var r=n[t];if(r)for(var a=0,s=r.length;a<s;a++){var o=r[a];if(o===i){r.splice(a,1);break}}}}}function Xp(){var n=Ws(Zl),e=Ws(so),t={platform:so,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:zs(zs({},Zl,n),so,e),common:{}},i=Xs(),r=Xs();return{ver:zp,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,patchedHeadAppend:null,patchedBodyAppend:null,createFeature:mh(),eventBus:i,userEventBus:r,cacheRoot:t,unpkgCache:n,helCache:e,dev:{setLogMode:Hn.setLogMode,setLogFilter:Hn.setLogFilter}}}function Ql(n){var e=[kp,Vp,Jl,Hp,Wp],t=function(r){return r===Jl?[]:{}};e.forEach(function(i){return nt(n,i,t(i))})}function qp(){var n=mi();if(n){var e=n.cacheRoot;nt(e,"appGroupName2platform"),nt(e,"common");var t=e.caches;Object.keys(t).forEach(function(i){var r=t[i];nt(r,"appGroupName2firstVer"),nt(r,"appName2isLibAssigned"),nt(r,"appName2verExtraCssList"),nt(r,"appName2verCustomData"),nt(r,"hook"),nt(r,"origin",Hs()),nt(r.origin,"hook")}),Ql(e.common),n.userEventBus||(n.userEventBus=Xs());return}n=Xp(),Ql(n.cacheRoot.common),Da().__HEL_MICRO_SHARED__=n}function mi(){var n=Da().__HEL_MICRO_SHARED__;return n}function ka(){return Th}function st(n){var e=n||ka(),t=vi(),i=t.caches[e];if(!i){var r=Wi(n);if(r!=="string")throw console.error("invalid plaform:",n),new Error("fatal error: platform only can be a string, now it is ".concat(r));var a=Ws(n);t.caches[e]=a,i=a}return i}function vi(){return mi().cacheRoot}var Dn={getCustomData:function(e,t,i){var r=i.versionId,a=i.platform,s=st(a),o=s.appName2verCustomData,l=nt(o,e),u=nt(l,t);return u[r||ot]},getAppMeta:function(e,t){var i=st(t),r=i.appName2app;return r[e]},setVerLoadStatus:function(e,t,i,r){var a=r||{},s=a.versionId,o=a.platform,l=st(o)[i],u=s||ot;on(l,e,u,t)},getVerLoadStatus:function(e,t,i){var r,a=i||{},s=a.versionId,o=a.platform,l=st(o)[t],u=s||ot;return((r=l[e])===null||r===void 0?void 0:r[u])||Dr.NOT_LOAD},ensureOnlineModule:function(e,t,i){if(!e[ot]){var r=Dn.getAppMeta(t,i),a=e[r==null?void 0:r.online_version];a&&(e[ot]=a)}}};function jp(n,e){var t,i=e||{},r=i.versionId,a=i.platform,s=st(a),o=s.appName2verEmitApp,l=s.appName2Comp,u=s.strictMatchVer,c=s.appName2EmitApp,p=(t=i.strictMatchVer)!==null&&t!==void 0?t:u,d=nt(o,n);Dn.ensureOnlineModule(d,n,a);var v=r||ot,m=d[v],x=l[n],f=x?{Comp:x}:null,h=p?null:c[n]||f,E=m||h||null;return Gt("[[ core:getVerApp ]] appName,options,result:",n,i,E),E}function Rh(n,e){Gt("[[ core:setEmitApp ]] appName,emitApp:",n,e);var t=e.versionId,i=e.platform,r=st(i),a=r.appName2verEmitApp,s=r.appName2Comp,o=r.appName2EmitApp,l=nt(a,n);l[ot]||(s[n]=e.Comp,o[n]=e,on(a,n,ot,e)),t&&on(a,n,t,e)}var eu=ft.KEY_CSS_LINK_TAG_ADDED,lo=ft.KEY_STYLE_TAG_ADDED,tu=ft.KEY_IGNORE_CSS_PREFIX_LIST,Yp=ft.KEY_IGNORE_STYLE_TAG_KEY,uo=ft.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Dh(n){var e=vi(),t=e.common,i=nt(t,n);return i}function kr(n){var e=vi(),t=e.common;return t[n]}function gr(n,e){var t=Dh(n),i=t[e];return i!==void 0?i:null}function vr(n,e,t){var i=Dh(n);i[e]=t}var $t={setIgnoreCssPrefix:function(e){var t=kr(tu);ks(t,e)},setIgnoreStyleTagKey:function(e){var t=$t.getIgnoreStyleTagMap();t[e]=1},getIgnoreStyleTagMap:function(){var e=kr(Yp);return e},setIgnoreCssPrefixKey:function(e,t){var i=gr(uo,e);i||(i=[],vr(uo,e,i)),ks(i,t)},getIgnoreCssPrefixKeys:function(e){var t=kr(uo);return t[e]||[]},getMatchedIgnoreCssPrefix:function(e){for(var t=kr(tu),i="",r=0;r<t.length;r++){var a=t[r];if(e.startsWith(a)){i=a;break}}return i},getIgnoreCssPrefixCssUrlList:function(e){var t=gr(eu,e);return t||(t=[],vr(eu,e,t)),t},setIgnoreCssPrefixCssUrl:function(e,t){var i=$t.getIgnoreCssPrefixCssUrlList(e);i.push(t)},getStyleTagText:function(e){var t=gr(lo,e)||"";return t},clearStyleTagText:function(e){vr(lo,e,"")},appendStyleTagText:function(e,t){var i=$t.getStyleTagText(e);vr(lo,e,"".concat(i," ").concat(t))}};function hl(n,e){var t=n.apiMode,i=n.apiPrefix,r=n.apiSuffix,a=n.apiPathOfApp,s=n.apiPathOfAppVersion,o=n.getSubAppAndItsVersionFn,l=n.onFetchMetaFailed,u=n.strictMatchVer,c=n.getUserName,p=n.userLsKey,d=n.shouldUseGray,v=n.getApiPrefix,m=n.trustAppNames,x=n.platform,f=n.origin,h=n.hook,E=n.customMetaUrl,S=n.customMetaJsonpUrl,C=n.getMeta,F={apiMode:t,apiPrefix:i,apiSuffix:r,apiPathOfApp:a,apiPathOfAppVersion:s,getSubAppAndItsVersionFn:o,onFetchMetaFailed:l,strictMatchVer:u,getUserName:c,userLsKey:p,shouldUseGray:d,getApiPrefix:v,trustAppNames:m,hook:h,platform:x,customMetaUrl:E,customMetaJsonpUrl:S,getMeta:C};return e&&(F.origin=f),F}function $p(n){var e=st(n);return hl(e,!0)}function Kp(n){var e=mi(),t=e.nativeHeadAppend,i=e.nativeBodyAppend,r=n.headAppend||null,a=n.bodyAppend||null,s=function(l){return"pass same ".concat(l," handle, hel will ignore it for avlid 'Maximum call stack size exceeded'")};r&&r===t?console.error(s("headAppend")):e.patchedHeadAppend=r,a&&a===i?console.error(s("bodyAppend")):e.patchedBodyAppend=a}function Zp(n,e){var t=st(e),i=hl(n);t.isConfigOverwrite||(t.isConfigOverwrite=!0,vh(t,i))}function Jp(n,e){var t=st(n),i="[[ core:originInit ]] invalid call, it can only been called";if(t.isConfigOverwrite){Gt("".concat(i," before init"));return}if(t.isOriginInitCalled){Gt("".concat(i," one time"));return}var r=hl(e);t.isOriginInitCalled=!0,vh(t.origin,r)}function Va(n){return vi().appGroupName2platform[n]||ka()}function Qp(n,e,t){var i=vi().appGroupName2platform;return(t||!i[n])&&(i[n]=e),Va(n)}function dl(n){return vi().appName2platform[n]||ka()}function em(n,e,t){var i=vi().appName2platform;return(t||!i[n])&&(i[n]=e),dl(n)}function Oh(n,e){var t=e.customKey,i=e.platform,r=i===void 0?dl(n):i,a=st(r),s=a.appName2verCustomData,o=nt(s,n),l=nt(o,t);return l}function tm(n,e){var t=Oh(n,e),i=t[e.versionId||ot];return i!==void 0?i:null}function nm(n,e){var t=e.customValue,i=e.versionId,r=Oh(n,e);r[i||ot]=t,r[ot]||(r[ot]=t)}var im=Rr.STYLE_TAG_ADDED,rm=Rr.CSS_LINK_TAG_ADDED;function $i(){return mi().eventBus}function am(){return mi().userEventBus}var Ha={styleTagAdded:function(e){return"".concat(im,"/").concat(e)},cssLinkTagAdded:function(e){return"".concat(rm,"(").concat(e,")")}};function om(n,e){var t,i=e||{},r=i.versionId,a=i.platform,s=st(a),o=s.appName2verEmitLib,l=s.appName2Lib,u=s.strictMatchVer,c=s.appName2isLibAssigned,p=(t=i.strictMatchVer)!==null&&t!==void 0?t:u,d=nt(o,n);Dn.ensureOnlineModule(d,n);var v=r||ot,m=d[v],x=c[n]?l[n]:null,f=p?null:x,h=m||f||null;return Gt("[[ core:getVerLib ]] appName,options,result:",n,i,h),h}function Nh(n,e,t){var i=t||{},r=i.appGroupName,a=e.versionId,s=e.appProperties,o=e.platform||t.platform,l=st(o),u=l.appName2verEmitLib,c=l.appName2Lib,p=l.appName2isLibAssigned,d=Dn.getAppMeta(n,o),v=function(f){var h=c[f];h?Wi(h)==="object"&&Object.keys(h).length===0&&Object.assign(h,s):c[f]=s,p[f]=!0};v(n),r?v(r):d&&v(d.app_group_name),Gt("[[ core:setEmitLib ]] appMeta:",d);var m=nt(u,n);m[ot]||on(u,n,ot,s),a&&on(u,n,a,s)}function Uh(n,e){var t=st(e),i=t.appName2app;return i[n]}function sm(n,e){var t=st(e),i=t.appName2app;i[n.name]=n}function pl(n,e,t){Dn.setVerLoadStatus(n,e,"appName2verLoadStatus",t)}function lm(n,e){return Dn.getVerLoadStatus(n,"appName2verLoadStatus",e)}function um(n,e,t){Dn.setVerLoadStatus(n,e,"appName2verStyleFetched",t)}function cm(n,e){return Dn.getVerLoadStatus(n,"appName2verStyleFetched",e)}function fm(n,e){var t,i=e||{},r=i.platform,a=i.versionId,s=st(r),o=s.appName2verStyleStr,l=s.appName2styleStr,u=l[n]||"";return a?((t=o[n])===null||t===void 0?void 0:t[a])||u||"":u}function hm(n,e,t){var i=t||{},r=i.platform,a=i.versionId,s=st(r),o=s.appName2verStyleStr,l=s.appName2verStyleFetched,u=s.appName2styleStr;if(!a){u[n]=e;return}on(o,n,a,e),on(l,n,a,Dr.LOADED)}function dm(n,e,t){var i=t||{},r=i.versionId,a=i.platform,s=st(a),o=s.appName2verExtraCssList;Gt("[[ core:setVerExtraCssList ]] cssList:",e);var l=nt(o,n);l[ot]||on(o,n,ot,e),r&&on(o,n,r,e)}function pm(n,e){var t=e||{},i=t.versionId,r=t.platform,a=st(r),s=a.appName2verExtraCssList,o=nt(s,n),l=o[i]||o[ot]||[];return Gt("[[ core:getVerExtraCssList ]] options,cssList:",t,l),l}function mm(n,e){var t,i=e||{},r=i.platform,a=i.versionId,s=st(r),o=s.appName2verAppVersion,l=s.appName2appVersion,u=l[n]||null;return a&&((t=o[n])===null||t===void 0?void 0:t[a])||u}function vm(n,e,t){var i=t||{},r=i.platform,a=st(r),s=a.appName2verAppVersion,o=a.appGroupName2firstVer,l=a.appName2appVersion,u=e.version_tag||e.sub_app_version;if(u){var c=Dn.getAppMeta(n,r),p=nt(s,n);p[ot]||(on(s,n,ot,e),l[n]=e),on(s,n,u,e),o[c.app_group_name]=e.sub_app_version}}function Qi(n,e){var t=n.split("@"),i=t.slice(1),r=i.join("@");return r||e||n}function nu(n){return n==="js"||n==="mjs"}function ml(n,e){var t=mh();Gt("[[ core:tryGetVersion ]] may include ver source > ".concat(t));var i=st(e),r=i.appGroupName2firstVer,a=r[n]||"";if(t.includes("https://")||t.includes("http://")){var s=t.split("//"),o=La(s,2),l=o[1],u=l.split("/");if(a){var c=l.includes("/".concat(a,"/"));if(c){var p=a.startsWith("@");if(p){var x=a.split("/")[1]||"";return Qi(x)}else{var d=u.indexOf(a),v=u[d-1],m=v.startsWith("@");if(!m)return Qi(a)}}var f=u[1],h=u[2];if(f==="static"&&nu(h)||nu(f))return Qi(a)}var E=l.indexOf("@");if(E>=0){var S=u.filter(function(w){return w.includes("@")}),C=S.findIndex(function(w){return w.startsWith("@")});if(C>=0){var F=S[C+1]||"";return Qi(F,a)}var U=S[0]||"";return Qi(U,a)}var P=l.split("/".concat(e,"/")),I=La(P,2),V=I[1],y=V===void 0?"":V,A=y.split("/"),z=La(A,1),R=z[0];return R||a}return a}function vl(n,e){if(n===ot)return e||"";if(n.includes("_")){var t=n.substring(0,n.length-15);return t}return e||""}var qs=!1,co=!1;function gm(n){if(n&&(qs=!1,co=!1),!co){co=!0;var e=Wt();e.__MASTER_APP_LOADED__===void 0&&(e.__MASTER_APP_LOADED__=!0,qs=!0)}}function _m(){var n=`WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,
`;return n+="more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat(n),"color:red;"),!qs}function ym(n,e){var t=e.platform,i=e.groupName,r=e.name,a=e.ver,s=e.elName;Tn(n,"el",s),Tn(n,"plat",t),Tn(n,"gname",i),Tn(n,"name",r),Tn(n,"ver",a)}var xm=ft.KEY_ASSET_CTX;function fo(n,e){if(!e||!["LINK","SCRIPT"].includes(e.tagName))return n(e);var t=e.href,i=e.tagName,r=e.src,a=t||r||"",s=i==="LINK",o=gr(xm,a)||{},l=o.platform,u=o.groupName,c=o.name,p=o.ver,d=o.beforeAppend,v=e;if(d){var m=s?"href":"src",x=e.getAttribute(m),f=function(S){return e.setAttribute(m,S)};v=d({el:e,nativeAppend:n,setAssetUrl:f,url:x,tagName:i})||e}var h=s?"HelLink":"HelScript";return l&&ym(v,{platform:l,groupName:u,name:c,ver:p,elName:h}),n(v)}function Sm(){var n=Wt();if(!(n.__POWERED_BY_QIANKUN__||n.__DISABLE_HEL_MONKEY_PATCH__)){var e=mi(),t=n.document,i=e.nativeHeadAppend,r=e.nativeBodyAppend;if(!(i||!t)){var a=t.head,s=t.body;if(i=a.appendChild.bind(a),e.nativeHeadAppend=i,s)r=s.appendChild.bind(s),e.nativeBodyAppend=r;else{var o=dh(),l=new o(function(p){for(var d,v=0;v<p.length;v++){var m=p[v].addedNodes;if(d=ql(m,"BODY"),d)break}d&&(r=d.appendChild.bind(d),e.nativeBodyAppend=r,d.appendChild=function(x){return fo(c(r,d,"body"),x)},l.disconnect())}),u=ql(t.childNodes,"HTML");u&&l.observe(u,{childList:!0})}var c=function(d,v,m){var x=e.patchedHeadAppend,f=e.patchedBodyAppend,h=m==="head";if(x&&h)return x;if(f&&!h)return f;if(n.__POWERED_BY_WUJIE__)return d;var E=n.Element;return E?E.prototype.appendChild.bind(v):d};a.appendChild=function(p){return fo(c(i,a,"head"),p)},s&&(s.appendChild=function(p){return fo(c(r,s,"body"),p)})}}}var Ih="preFetch";function bm(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.platform||Va(n),r=t.versionId||ml(n,i),a=t.appName||vl(r,n);Gt("[[ core:libReady ]] appGroupName ".concat(n,", appName ").concat(a,", versionId ").concat(r));var s=Uh(a,i);s!=null&&s.__fromCust&&(r=t.versionId||s.online_version,a=s.name,Gt("[[ core:libReady ]] fromCust, appGroupName ".concat(n,", appName ").concat(a,", versionId ").concat(r)));var o={platform:i,appName:a,appGroupName:n,versionId:r,appProperties:e,Comp:function(){},lifecycle:{}};Nh(a,o,{appGroupName:n,platform:i}),pl(a,Dr.LOADED,{versionId:r,platform:i});var l=$i();fl(Ih,"libReady"),l.emit(Rr.SUB_LIB_LOADED,o)}function Mm(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.lifecycle,r=t.platform||Va(n),a=t.versionId||ml(n,r),s=t.appName||vl(a,n),o={Comp:e,appName:s,appGroupName:n,lifecycle:i,platform:r,versionId:a,isLib:!1};Rh(s,o),pl(s,Dr.LOADED,{versionId:a,platform:r});var l=$i();fl(Ih,"appReady"),l.emit(Rr.SUB_APP_LOADED,o)}var Fh="/* @helstart ",Em=" @helend */",Am=Fh.length;function Tm(n,e){var t=$i(),i=$t.getMatchedIgnoreCssPrefix(e);return i&&($t.setIgnoreCssPrefixCssUrl(i,e),t.emit(Ha.cssLinkTagAdded(i),{nodes:[n]})),i}function Cm(n){var e=Wt();if(e){var t=e.document.head.querySelectorAll('style[data-gname="'.concat(n,'"]'));if(t.length){$t.clearStyleTagText(n),t.forEach(function(r){Oa(r),$t.appendStyleTagText(n,r.innerText)});var i=$i();i.emit(Ha.styleTagAdded(n),{nodes:t})}}}function Pm(n,e){var t=n.tagName,i=n.innerText,r=n.href;if(["STYLE","LINK"].includes(t)){if(t==="STYLE"){if(!i)return;var a=i.indexOf(Fh);if(a<0)return;var s=i.indexOf(Em);if(s<0)return;var o=i.substring(Am+a,s);if(o){var l=o.trim(),u="",c=l;if(l.includes("/")){var p=l.split("/");u=p[0],c=p[1]}Tn(n,"gname",c),u&&Tn(n,"plat",u),e[l]&&Oa(n);var d=$i();$t.appendStyleTagText(l,i),d.emit(Ha.styleTagAdded(l),{nodes:[n]})}return}var v=Tm(n,r);v&&Oa(n)}}function wm(n,e){var t=n.tagName,i=n.src,r=i===void 0?"":i;if(t!=="SCRIPT"||!r.endsWith(".hot-update.js"))return!1;var a=$t.getMatchedIgnoreCssPrefix(r);if(!a)return!1;var s=$t.getIgnoreCssPrefixKeys(a);if(!s.length)return!1;var o=!1;return s.forEach(function(l){e[l]&&(Cm(l),o=!0)}),o}function Lm(){var n=mi(),e=Wt(),t=n.isStyleObInit,i=e.document;if(!(t||!i)){n.isStyleObInit=!0;var r=$t.getIgnoreStyleTagMap(),a=dh();if(a){var s=new a(function(o){o.forEach(function(l){for(var u=l.addedNodes,c=l.removedNodes,p=u.length,d=0;d<p;d++)Pm(u[d],r);for(var v=c.length,m=0;m<v&&!wm(c[m],r);m++);})});s.observe(document.head,{childList:!0})}}}Bh();Gt("hel-micro-core ver ".concat(ft.CORE_VER));var Rm=Rr,Dm=Dr,Om=ft,Nm=Eh,Um=wp,Im=_m;function Bh(n){n&&Gh(n),gm(!!n),qp(),Up(),Sm(),Lm()}var Fm=ka,Bm=st,Gm=ai,zm=za,km=Gt,Vm=Ip,Hm=fl,Wm=Lh,Xm=Wt,Gh=xp,qm=jp,jm=Rh,Ym=om,$m=Nh,Km=Uh,Zm=sm,Jm=mm,Qm=vm,ev=tm,tv=nm,nv=gr,iv=vr,rv=$t,av=lm,ov=pl,sv=cm,lv=um,uv=fm,cv=hm,fv=pm,hv=dm,dv=ml,pv=vl,mv=$p,vv=Va,gv=Qp,_v=em,yv=dl,xv=Zp,Sv=Jp,bv=Kp,Mv=$i,Ev=am,Av=Ha,Tv=bm,Cv=Mm;const Pv=Object.freeze(Object.defineProperty({__proto__:null,allowLog:zm,appReady:Cv,clearPerfMark:Wm,commonDataUtil:rv,commonUtil:Um,evName:Av,getAppMeta:Km,getAppPlatform:vv,getAppPlatformByAppName:yv,getAppStyleStr:uv,getCommonData:nv,getCustomData:ev,getGlobalThis:Xm,getHelDebug:Gm,getHelEventBus:Mv,getPlatform:Fm,getPlatformConfig:mv,getSharedCache:Bm,getUserEventBus:Ev,getVerApp:qm,getVerExtraCssList:fv,getVerLib:Ym,getVerLoadStatus:av,getVerStyleStrStatus:sv,getVersion:Jm,helConsts:Om,helEvents:Rm,helLoadStatus:Dm,inectPlatToMod:Nm,initGlobalConfig:bv,initPlatformConfig:xv,isSubApp:Im,libReady:Tv,log:km,originInit:Sv,perfMark:Vm,perfPeek:Hm,resetGlobalThis:Bh,setAppMeta:Zm,setAppPlatform:gv,setAppPlatformByAppName:_v,setAppStyleStr:cv,setCommonData:iv,setCustomData:tv,setEmitApp:jm,setEmitLib:$m,setGlobalThis:Gh,setVerExtraCssList:hv,setVerLoadStatus:ov,setVerStyleStrStatus:lv,setVersion:Qm,tryGetAppName:pv,tryGetVersion:dv},Symbol.toStringTag,{value:"Module"})),wv=hh(Pv);var Lv=mr.exports,iu;function Rv(){return iu||(iu=1,(function(n,e){(function(t,i){i(e,wv)})(Lv,function(t,i){var r=function(){return r=Object.assign||function(D){for(var L,B=1,X=arguments.length;B<X;B++)for(var ie in L=arguments[B])Object.prototype.hasOwnProperty.call(L,ie)&&(D[ie]=L[ie]);return D},r.apply(this,arguments)};function a(D,L){var B=L||(i.getAppPlatform===null||i.getAppPlatform===void 0?void 0:i.getAppPlatform(D)),X=i.getSharedCache(B).appName2Lib;return X[D]||(X[D]={}),X[D]}var s="4.12.1";i.log("hel-lib-proxy ver ".concat(s));var o=i.getUserEventBus,l=i.helConsts,u=o();function c(D,L){var B=r({},L||{});return B.platform=B.platform||l.DEFAULT_PLAT,i.getVerLib(D,B)}function p(D,L){var B,X=!0,ie="";L&&(typeof L=="string"?ie=L:(ie=L.platform||"",X=(B=L.asProxy)===null||B===void 0||B));var ae=a(D,ie=ie||i.getAppPlatform(D)||l.DEFAULT_PLAT);return typeof Proxy=="function"&&X&&(ae=(function(Q,re,de){return new Proxy(re,{get:function(te,se){var ce=String(se);return i.log("[[getLibProxy]] call lib [".concat(Q,"] method [").concat(ce,"]")),Object.keys(te).length?te[ce]:a(Q,de)[ce]}})})(D,ae,ie)),i.log("[[ exposeLib ]] libName, libObj",D,ae),ae}function d(D,L,B){var X=(function(ie){var ae={allowDup:!1,platform:i.helConsts.DEFAULT_PLAT};return r(r({},ae),ie||{})})(B);i.libReady(D,L,X)}function v(D,L,B){i.appReady(D,L,B)}function m(D,L){return i.getVerApp(D,L)}var x=i.isSubApp;function f(){return!i.isSubApp()}var h=Object.freeze({__proto__:null,VER:s,eventBus:u,getLib:c,exposeLib:p,libReady:d,appReady:v,exposeApp:m,isSubApp:x,isMasterApp:f}),E=i.commonUtil.purify,S=["isMasterApp","isSubApp","eventBus"],C=["appReady","libReady"];function F(D,L){return L&&typeof L=="object"&&!Array.isArray(L)?r({platform:D},E(L)):{platform:D}}function U(D,L){var B={};return Object.keys(D).forEach(function(X){var ie=D[X];if(S.includes(X))B[X]=ie;else if(C.includes(X))B[X]=(function(Q,re){return function(){for(var de=[],te=0;te<arguments.length;te++)de[te]=arguments[te];var se=de[0],ce=de[1],pe=de[2];return Q(se,ce,F(re,pe===void 0?{}:pe))}})(ie,L);else{var ae=X==="exposeLib";B[X]=(function(Q,re,de){return function(){for(var te=[],se=0;se<arguments.length;se++)te[se]=arguments[se];var ce=te[0],pe=te[1];return Q(ce,!de||typeof pe!="string"&&pe!==void 0?F(re,pe):pe||re)}})(ie,L,ae)}}),B}var P=function D(L){var B=U(h,L);return B.createInstance=D,B},I=s,V=d,y=p,A=c,z=x,R=f,w=u,H=v,W=m,M={VER:I,libReady:V,exposeLib:y,getLib:A,isSubApp:z,isMasterApp:R,eventBus:w,appReady:H,exposeApp:W,createInstance:P};(function(D){var L=i.getGlobalThis();i.commonUtil.isServer()||L.HelLibProxy||(i.log("auto bind hel-lib-proxy to global.HelLibProxy"),L.HelLibProxy=D)})(M),t.VER=I,t.appReady=H,t.createInstance=P,t.default=M,t.eventBus=w,t.exposeApp=W,t.exposeLib=y,t.getLib=A,t.isMasterApp=R,t.isSubApp=z,t.libReady=V,Object.defineProperty(t,"__esModule",{value:!0})})})(mr,mr.exports)),mr.exports}var oE=Rv();const gl="161",_i={ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dv=0,ru=1,Ov=2,zh=1,Nv=2,An=3,jn=0,Bt=1,Cn=2,Wn=0,Vi=1,au=2,ou=3,su=4,Uv=5,ii=100,Iv=101,Fv=102,lu=103,uu=104,Bv=200,Gv=201,zv=202,kv=203,js=204,Ys=205,Vv=206,Hv=207,Wv=208,Xv=209,qv=210,jv=211,Yv=212,$v=213,Kv=214,Zv=0,Jv=1,Qv=2,Na=3,eg=4,tg=5,ng=6,ig=7,Wa=0,rg=1,ag=2,Xn=0,og=1,sg=2,lg=3,ug=4,cg=5,fg=6,kh=300,Xi=301,qi=302,$s=303,Ks=304,Xa=306,Zs=1e3,tn=1001,Js=1002,Ot=1003,cu=1004,er=1005,It=1006,ho=1007,oi=1008,qn=1009,hg=1010,dg=1011,_l=1012,Vh=1013,kn=1014,Pn=1015,Ar=1016,Hh=1017,Wh=1018,si=1020,pg=1021,nn=1023,mg=1024,vg=1025,li=1026,ji=1027,gg=1028,Xh=1029,_g=1030,qh=1031,jh=1033,po=33776,mo=33777,vo=33778,go=33779,fu=35840,hu=35841,du=35842,pu=35843,Yh=36196,mu=37492,vu=37496,gu=37808,_u=37809,yu=37810,xu=37811,Su=37812,bu=37813,Mu=37814,Eu=37815,Au=37816,Tu=37817,Cu=37818,Pu=37819,wu=37820,Lu=37821,_o=36492,Ru=36494,Du=36495,yg=36283,Ou=36284,Nu=36285,Uu=36286,$h=3e3,ui=3001,xg=3200,Sg=3201,yl=0,bg=1,Yt="",Mt="srgb",Ln="srgb-linear",xl="display-p3",qa="display-p3-linear",Ua="linear",et="srgb",Ia="rec709",Fa="p3",xi=7680,Iu=519,Mg=512,Eg=513,Ag=514,Kh=515,Tg=516,Cg=517,Pg=518,wg=519,Qs=35044,Fu="300 es",el=1035,wn=2e3,Ba=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const _r=Math.PI/180,Tr=180/Math.PI;function pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Sl(n,e){return(n%e+e)%e}function Lg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rg(n,e,t){return n!==e?(t-n)/(e-n):0}function yr(n,e,t){return(1-t)*n+t*e}function Dg(n,e,t,i){return yr(n,e,1-Math.exp(-t*i))}function Og(n,e=1){return e-Math.abs(Sl(n,e*2)-e)}function Ng(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ug(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ig(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fg(n,e){return n+Math.random()*(e-n)}function Bg(n){return n*(.5-Math.random())}function Gg(n){n!==void 0&&(Bu=n);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zg(n){return n*_r}function kg(n){return n*Tr}function tl(n){return(n&n-1)===0&&n!==0}function Vg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hg(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),u=a((e+i)/2),c=s((e+i)/2),p=a((e-i)/2),d=s((e-i)/2),v=a((i-e)/2),m=s((i-e)/2);switch(r){case"XYX":n.set(o*c,l*p,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*p,o*u);break;case"ZXZ":n.set(l*p,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*m,l*v,o*u);break;case"YXY":n.set(l*v,o*c,l*m,o*u);break;case"ZYZ":n.set(l*m,l*v,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ke(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zh={DEG2RAD:_r,RAD2DEG:Tr,generateUUID:pn,clamp:dt,euclideanModulo:Sl,mapLinear:Lg,inverseLerp:Rg,lerp:yr,damp:Dg,pingpong:Og,smoothstep:Ng,smootherstep:Ug,randInt:Ig,randFloat:Fg,randFloatSpread:Bg,seededRandom:Gg,degToRad:zg,radToDeg:kg,isPowerOfTwo:tl,ceilPowerOfTwo:Vg,floorPowerOfTwo:Ga,setQuaternionFromProperEuler:Hg,normalize:Ke,denormalize:rn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,a,s,o,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,u)}set(e,t,i,r,a,s,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=a,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],p=i[7],d=i[2],v=i[5],m=i[8],x=r[0],f=r[3],h=r[6],E=r[1],S=r[4],C=r[7],F=r[2],U=r[5],P=r[8];return a[0]=s*x+o*E+l*F,a[3]=s*f+o*S+l*U,a[6]=s*h+o*C+l*P,a[1]=u*x+c*E+p*F,a[4]=u*f+c*S+p*U,a[7]=u*h+c*C+p*P,a[2]=d*x+v*E+m*F,a[5]=d*f+v*S+m*U,a[8]=d*h+v*C+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*s*c-t*o*u-i*a*c+i*o*l+r*a*u-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=c*s-o*u,d=o*l-c*a,v=u*a-s*l,m=t*p+i*d+r*v;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=p*x,e[1]=(r*u-c*i)*x,e[2]=(o*i-r*s)*x,e[3]=d*x,e[4]=(c*t-r*l)*x,e[5]=(r*a-o*t)*x,e[6]=v*x,e[7]=(i*l-u*t)*x,e[8]=(s*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-r*u,r*l,-r*(-u*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new Xe;function Jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wg(){const n=Cr("canvas");return n.style.display="block",n}const Gu={};function ci(n){n in Gu||(Gu[n]=!0,console.warn(n))}const zu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ku=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[Ln]:{transfer:Ua,primaries:Ia,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:et,primaries:Ia,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qa]:{transfer:Ua,primaries:Fa,toReference:n=>n.applyMatrix3(ku),fromReference:n=>n.applyMatrix3(zu)},[xl]:{transfer:et,primaries:Fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ku),fromReference:n=>n.applyMatrix3(zu).convertLinearToSRGB()}},Xg=new Set([Ln,qa]),Ze={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Xg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Vr[e].toReference,r=Vr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vr[n].primaries},getTransfer:function(n){return n===Yt?Ua:Vr[n].transfer}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class Qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Cr("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Hi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qg=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(So(r[s].image)):a.push(So(r[s]))}else a=So(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Qh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jg=0;class Nt extends gi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=tn,r=tn,a=It,s=oi,o=nn,l=qn,u=Nt.DEFAULT_ANISOTROPY,c=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=pn(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ui?Mt:Yt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?ui:$h}set encoding(e){ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ui?Mt:Yt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=kh;Nt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,u=l[0],c=l[4],p=l[8],d=l[1],v=l[5],m=l[9],x=l[2],f=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(p-x)<.01&&Math.abs(m-f)<.01){if(Math.abs(c+d)<.1&&Math.abs(p+x)<.1&&Math.abs(m+f)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,C=(v+1)/2,F=(h+1)/2,U=(c+d)/4,P=(p+x)/4,I=(m+f)/4;return S>C&&S>F?S<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(S),r=U/i,a=P/i):C>F?C<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),i=U/r,a=I/r):F<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),i=P/a,r=I/a),this.set(i,r,a,t),this}let E=Math.sqrt((f-m)*(f-m)+(p-x)*(p-x)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(f-m)/E,this.y=(p-x)/E,this.z=(d-c)/E,this.w=Math.acos((u+v+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ui?Mt:Yt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Yg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class td extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $g extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],u=i[r+1],c=i[r+2],p=i[r+3];const d=a[s+0],v=a[s+1],m=a[s+2],x=a[s+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=v,e[t+2]=m,e[t+3]=x;return}if(p!==x||l!==d||u!==v||c!==m){let f=1-o;const h=l*d+u*v+c*m+p*x,E=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const F=Math.sqrt(S),U=Math.atan2(F,h*E);f=Math.sin(f*U)/F,o=Math.sin(o*U)/F}const C=o*E;if(l=l*f+d*C,u=u*f+v*C,c=c*f+m*C,p=p*f+x*C,f===1-o){const F=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=F,u*=F,c*=F,p*=F}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],p=a[s],d=a[s+1],v=a[s+2],m=a[s+3];return e[t]=o*m+c*p+l*v-u*d,e[t+1]=l*m+c*d+u*p-o*v,e[t+2]=u*m+c*v+o*d-l*p,e[t+3]=c*m-o*p-l*d-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),p=o(a/2),d=l(i/2),v=l(r/2),m=l(a/2);switch(s){case"XYZ":this._x=d*c*p+u*v*m,this._y=u*v*p-d*c*m,this._z=u*c*m+d*v*p,this._w=u*c*p-d*v*m;break;case"YXZ":this._x=d*c*p+u*v*m,this._y=u*v*p-d*c*m,this._z=u*c*m-d*v*p,this._w=u*c*p+d*v*m;break;case"ZXY":this._x=d*c*p-u*v*m,this._y=u*v*p+d*c*m,this._z=u*c*m+d*v*p,this._w=u*c*p-d*v*m;break;case"ZYX":this._x=d*c*p-u*v*m,this._y=u*v*p+d*c*m,this._z=u*c*m-d*v*p,this._w=u*c*p+d*v*m;break;case"YZX":this._x=d*c*p+u*v*m,this._y=u*v*p+d*c*m,this._z=u*c*m-d*v*p,this._w=u*c*p-d*v*m;break;case"XZY":this._x=d*c*p-u*v*m,this._y=u*v*p-d*c*m,this._z=u*c*m+d*v*p,this._w=u*c*p+d*v*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],u=t[2],c=t[6],p=t[10],d=i+o+p;if(d>0){const v=.5/Math.sqrt(d+1);this._w=.25/v,this._x=(c-l)*v,this._y=(a-u)*v,this._z=(s-r)*v}else if(i>o&&i>p){const v=2*Math.sqrt(1+i-o-p);this._w=(c-l)/v,this._x=.25*v,this._y=(r+s)/v,this._z=(a+u)/v}else if(o>p){const v=2*Math.sqrt(1+o-i-p);this._w=(a-u)/v,this._x=(r+s)/v,this._y=.25*v,this._z=(l+c)/v}else{const v=2*Math.sqrt(1+p-i-o);this._w=(s-r)/v,this._x=(a+u)/v,this._y=(l+c)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+s*o+r*u-a*l,this._y=r*c+s*l+a*o-i*u,this._z=a*c+s*u+i*l-r*o,this._w=s*c-i*o-r*l-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const v=1-t;return this._w=v*s+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),p=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=s*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=a*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,i=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*r-o*i),c=2*(o*t-a*r),p=2*(a*i-s*t);return this.x=t+l*u+s*p-o*c,this.y=i+l*c+o*u-a*p,this.z=r+l*p+a*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-io(e,2));return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new oe,Vu=new di;class Yn{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zt):Zt.fromBufferAttribute(a,s),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Wr.subVectors(this.max,tr),bi.subVectors(e.a,tr),Mi.subVectors(e.b,tr),Ei.subVectors(e.c,tr),On.subVectors(Mi,bi),Nn.subVectors(Ei,Mi),Zn.subVectors(bi,Ei);let t=[0,-On.z,On.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,On.z,0,-On.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-On.y,On.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!Mo(t,bi,Mi,Ei,Wr)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,bi,Mi,Ei,Wr))?!1:(Xr.crossVectors(On,Nn),t=[Xr.x,Xr.y,Xr.z],Mo(t,bi,Mi,Ei,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Zt=new oe,Hr=new Yn,bi=new oe,Mi=new oe,Ei=new oe,On=new oe,Nn=new oe,Zn=new oe,tr=new oe,Wr=new oe,Xr=new oe,Jn=new oe;function Mo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Jn.fromArray(n,a);const o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=e.dot(Jn),u=t.dot(Jn),c=i.dot(Jn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Kg=new Yn,nr=new oe,Eo=new oe;class Nr{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Eo)),this.expandByPoint(nr.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new oe,Ao=new oe,qr=new oe,Un=new oe,To=new oe,jr=new oe,Co=new oe;class bl{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ao.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Ao);const a=e.distanceTo(t)*.5,s=-this.direction.dot(qr),o=Un.dot(this.direction),l=-Un.dot(qr),u=Un.lengthSq(),c=Math.abs(1-s*s);let p,d,v,m;if(c>0)if(p=s*l-o,d=s*o-l,m=a*c,p>=0)if(d>=-m)if(d<=m){const x=1/c;p*=x,d*=x,v=p*(p+s*d+2*o)+d*(s*p+d+2*l)+u}else d=a,p=Math.max(0,-(s*d+o)),v=-p*p+d*(d+2*l)+u;else d=-a,p=Math.max(0,-(s*d+o)),v=-p*p+d*(d+2*l)+u;else d<=-m?(p=Math.max(0,-(-s*a+o)),d=p>0?-a:Math.min(Math.max(-a,-l),a),v=-p*p+d*(d+2*l)+u):d<=m?(p=0,d=Math.min(Math.max(-a,-l),a),v=d*(d+2*l)+u):(p=Math.max(0,-(s*a+o)),d=p>0?a:Math.min(Math.max(-a,-l),a),v=-p*p+d*(d+2*l)+u);else d=s>0?-a:a,p=Math.max(0,-(s*d+o)),v=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ao).addScaledVector(qr,d),v}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(a=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,a){To.subVectors(t,e),jr.subVectors(i,e),Co.crossVectors(To,jr);let s=this.direction.dot(Co),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(Un,jr));if(l<0)return null;const u=o*this.direction.dot(To.cross(Un));if(u<0||l+u>s)return null;const c=-o*Un.dot(Co);return c<0?null:this.at(c/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,a,s,o,l,u,c,p,d,v,m,x,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,u,c,p,d,v,m,x,f)}set(e,t,i,r,a,s,o,l,u,c,p,d,v,m,x,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=p,h[14]=d,h[3]=v,h[7]=m,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),a=1/Ai.setFromMatrixColumn(e,1).length(),s=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const d=s*c,v=s*p,m=o*c,x=o*p;t[0]=l*c,t[4]=-l*p,t[8]=u,t[1]=v+m*u,t[5]=d-x*u,t[9]=-o*l,t[2]=x-d*u,t[6]=m+v*u,t[10]=s*l}else if(e.order==="YXZ"){const d=l*c,v=l*p,m=u*c,x=u*p;t[0]=d+x*o,t[4]=m*o-v,t[8]=s*u,t[1]=s*p,t[5]=s*c,t[9]=-o,t[2]=v*o-m,t[6]=x+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*c,v=l*p,m=u*c,x=u*p;t[0]=d-x*o,t[4]=-s*p,t[8]=m+v*o,t[1]=v+m*o,t[5]=s*c,t[9]=x-d*o,t[2]=-s*u,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*c,v=s*p,m=o*c,x=o*p;t[0]=l*c,t[4]=m*u-v,t[8]=d*u+x,t[1]=l*p,t[5]=x*u+d,t[9]=v*u-m,t[2]=-u,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,v=s*u,m=o*l,x=o*u;t[0]=l*c,t[4]=x-d*p,t[8]=m*p+v,t[1]=p,t[5]=s*c,t[9]=-o*c,t[2]=-u*c,t[6]=v*p+m,t[10]=d-x*p}else if(e.order==="XZY"){const d=s*l,v=s*u,m=o*l,x=o*u;t[0]=l*c,t[4]=-p,t[8]=u*c,t[1]=d*p+x,t[5]=s*c,t[9]=v*p-m,t[2]=m*p-v,t[6]=o*c,t[10]=x*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),In.crossVectors(i,kt),In.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),In.crossVectors(i,kt)),In.normalize(),Yr.crossVectors(kt,In),r[0]=In.x,r[4]=Yr.x,r[8]=kt.x,r[1]=In.y,r[5]=Yr.y,r[9]=kt.y,r[2]=In.z,r[6]=Yr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],p=i[5],d=i[9],v=i[13],m=i[2],x=i[6],f=i[10],h=i[14],E=i[3],S=i[7],C=i[11],F=i[15],U=r[0],P=r[4],I=r[8],V=r[12],y=r[1],A=r[5],z=r[9],R=r[13],w=r[2],H=r[6],W=r[10],M=r[14],D=r[3],L=r[7],B=r[11],X=r[15];return a[0]=s*U+o*y+l*w+u*D,a[4]=s*P+o*A+l*H+u*L,a[8]=s*I+o*z+l*W+u*B,a[12]=s*V+o*R+l*M+u*X,a[1]=c*U+p*y+d*w+v*D,a[5]=c*P+p*A+d*H+v*L,a[9]=c*I+p*z+d*W+v*B,a[13]=c*V+p*R+d*M+v*X,a[2]=m*U+x*y+f*w+h*D,a[6]=m*P+x*A+f*H+h*L,a[10]=m*I+x*z+f*W+h*B,a[14]=m*V+x*R+f*M+h*X,a[3]=E*U+S*y+C*w+F*D,a[7]=E*P+S*A+C*H+F*L,a[11]=E*I+S*z+C*W+F*B,a[15]=E*V+S*R+C*M+F*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],c=e[2],p=e[6],d=e[10],v=e[14],m=e[3],x=e[7],f=e[11],h=e[15];return m*(+a*l*p-r*u*p-a*o*d+i*u*d+r*o*v-i*l*v)+x*(+t*l*v-t*u*d+a*s*d-r*s*v+r*u*c-a*l*c)+f*(+t*u*p-t*o*v-a*s*p+i*s*v+a*o*c-i*u*c)+h*(-r*o*c-t*l*p+t*o*d+r*s*p-i*s*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=e[9],d=e[10],v=e[11],m=e[12],x=e[13],f=e[14],h=e[15],E=p*f*u-x*d*u+x*l*v-o*f*v-p*l*h+o*d*h,S=m*d*u-c*f*u-m*l*v+s*f*v+c*l*h-s*d*h,C=c*x*u-m*p*u+m*o*v-s*x*v-c*o*h+s*p*h,F=m*p*l-c*x*l-m*o*d+s*x*d+c*o*f-s*p*f,U=t*E+i*S+r*C+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/U;return e[0]=E*P,e[1]=(x*d*a-p*f*a-x*r*v+i*f*v+p*r*h-i*d*h)*P,e[2]=(o*f*a-x*l*a+x*r*u-i*f*u-o*r*h+i*l*h)*P,e[3]=(p*l*a-o*d*a-p*r*u+i*d*u+o*r*v-i*l*v)*P,e[4]=S*P,e[5]=(c*f*a-m*d*a+m*r*v-t*f*v-c*r*h+t*d*h)*P,e[6]=(m*l*a-s*f*a-m*r*u+t*f*u+s*r*h-t*l*h)*P,e[7]=(s*d*a-c*l*a+c*r*u-t*d*u-s*r*v+t*l*v)*P,e[8]=C*P,e[9]=(m*p*a-c*x*a-m*i*v+t*x*v+c*i*h-t*p*h)*P,e[10]=(s*x*a-m*o*a+m*i*u-t*x*u-s*i*h+t*o*h)*P,e[11]=(c*o*a-s*p*a-c*i*u+t*p*u+s*i*v-t*o*v)*P,e[12]=F*P,e[13]=(c*x*r-m*p*r+m*i*d-t*x*d-c*i*f+t*p*f)*P,e[14]=(m*o*r-s*x*r-m*i*l+t*x*l+s*i*f-t*o*f)*P,e[15]=(s*p*r-c*o*r+c*i*l-t*p*l-s*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,c=a*o;return this.set(u*s+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*s,0,u*l-r*o,c*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,u=a+a,c=s+s,p=o+o,d=a*u,v=a*c,m=a*p,x=s*c,f=s*p,h=o*p,E=l*u,S=l*c,C=l*p,F=i.x,U=i.y,P=i.z;return r[0]=(1-(x+h))*F,r[1]=(v+C)*F,r[2]=(m-S)*F,r[3]=0,r[4]=(v-C)*U,r[5]=(1-(d+h))*U,r[6]=(f+E)*U,r[7]=0,r[8]=(m+S)*P,r[9]=(f-E)*P,r[10]=(1-(d+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Ai.set(r[0],r[1],r[2]).length();const s=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const u=1/a,c=1/s,p=1/o;return Jt.elements[0]*=u,Jt.elements[1]*=u,Jt.elements[2]*=u,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=p,Jt.elements[9]*=p,Jt.elements[10]*=p,t.setFromRotationMatrix(Jt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=wn){const l=this.elements,u=2*a/(t-e),c=2*a/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let v,m;if(o===wn)v=-(s+a)/(s-a),m=-2*s*a/(s-a);else if(o===Ba)v=-s/(s-a),m=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=wn){const l=this.elements,u=1/(t-e),c=1/(i-r),p=1/(s-a),d=(t+e)*u,v=(i+r)*c;let m,x;if(o===wn)m=(s+a)*p,x=-2*p;else if(o===Ba)m=a*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new oe,Jt=new rt,Zg=new oe(0,0,0),Jg=new oe(1,1,1),In=new oe,Yr=new oe,kt=new oe,Hu=new rt,Wu=new di;class ja{constructor(e=0,t=0,i=0,r=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],u=r[5],c=r[9],p=r[2],d=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,v),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qg=0;const Xu=new oe,Ti=new di,bn=new rt,$r=new oe,ir=new oe,e_=new oe,t_=new di,qu=new oe(1,0,0),ju=new oe(0,1,0),Yu=new oe(0,0,1),n_={type:"added"},i_={type:"removed"};class Et extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new oe,t=new ja,i=new di,r=new oe(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Xe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ir,$r,this.up):bn.lookAt($r,ir,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(bn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(n_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),p=s(e.shapes),d=s(e.skeletons),v=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),v.length>0&&(i.animations=v),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new oe(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new oe,Mn=new oe,Po=new oe,En=new oe,Ci=new oe,Pi=new oe,$u=new oe,wo=new oe,Lo=new oe,Ro=new oe;class fn{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Qt.subVectors(r,t),Mn.subVectors(i,t),Po.subVectors(e,t);const s=Qt.dot(Qt),o=Qt.dot(Mn),l=Qt.dot(Po),u=Mn.dot(Mn),c=Mn.dot(Po),p=s*u-o*o;if(p===0)return a.set(0,0,0),null;const d=1/p,v=(u*l-o*c)*d,m=(s*c-o*l)*d;return a.set(1-v-m,m,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,En.x),l.addScaledVector(s,En.y),l.addScaledVector(o,En.z),l)}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),Mn.subVectors(e,t),Qt.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Qt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Ci.subVectors(r,i),Pi.subVectors(a,i),wo.subVectors(e,i);const l=Ci.dot(wo),u=Pi.dot(wo);if(l<=0&&u<=0)return t.copy(i);Lo.subVectors(e,r);const c=Ci.dot(Lo),p=Pi.dot(Lo);if(c>=0&&p<=c)return t.copy(r);const d=l*p-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),t.copy(i).addScaledVector(Ci,s);Ro.subVectors(e,a);const v=Ci.dot(Ro),m=Pi.dot(Ro);if(m>=0&&v<=m)return t.copy(a);const x=v*u-l*m;if(x<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(i).addScaledVector(Pi,o);const f=c*m-v*p;if(f<=0&&p-c>=0&&v-m>=0)return $u.subVectors(a,r),o=(p-c)/(p-c+(v-m)),t.copy(r).addScaledVector($u,o);const h=1/(f+x+d);return s=x*h,o=d*h,t.copy(i).addScaledVector(Ci,s).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Sl(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Do(s,a,e+1/3),this.g=Do(s,a,e),this.b=Do(s,a,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=nd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ze.fromWorkingColorSpace(Pt.copy(this),e),Math.round(dt(Pt.r*255,0,255))*65536+Math.round(dt(Pt.g*255,0,255))*256+Math.round(dt(Pt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,a=Pt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,u;const c=(o+s)/2;if(o===s)l=0,u=0;else{const p=s-o;switch(u=c<=.5?p/(s+o):p/(2-s-o),s){case i:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-i)/p+2;break;case a:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Mt){Ze.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Kr);const i=yr(Fn.h,Kr.h,t),r=yr(Fn.s,Kr.s,t),a=yr(Fn.l,Kr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new je;je.NAMES=nd;let r_=0;class Ki extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Vi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Ys,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==Ys&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class id extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new oe,Zr=new Ee;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ci("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),r=Ke(r,this.array),a=Ke(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qs&&(e.usage=this.usage),e}}class rd extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ad extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let a_=0;const jt=new rt,Oo=new Et,wi=new oe,Vt=new Yn,rr=new Yn,gt=new oe;class mn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?ad:rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Xe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Vt.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Vt.min,rr.min),Vt.expandByPoint(gt),gt.addVectors(Vt.max,rr.max),Vt.expandByPoint(gt)):(Vt.expandByPoint(rr.min),Vt.expandByPoint(rr.max))}Vt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)gt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)gt.fromBufferAttribute(o,u),l&&(wi.fromBufferAttribute(e,u),gt.add(wi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let y=0;y<o;y++)u[y]=new oe,c[y]=new oe;const p=new oe,d=new oe,v=new oe,m=new Ee,x=new Ee,f=new Ee,h=new oe,E=new oe;function S(y,A,z){p.fromArray(r,y*3),d.fromArray(r,A*3),v.fromArray(r,z*3),m.fromArray(s,y*2),x.fromArray(s,A*2),f.fromArray(s,z*2),d.sub(p),v.sub(p),x.sub(m),f.sub(m);const R=1/(x.x*f.y-f.x*x.y);isFinite(R)&&(h.copy(d).multiplyScalar(f.y).addScaledVector(v,-x.y).multiplyScalar(R),E.copy(v).multiplyScalar(x.x).addScaledVector(d,-f.x).multiplyScalar(R),u[y].add(h),u[A].add(h),u[z].add(h),c[y].add(E),c[A].add(E),c[z].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let y=0,A=C.length;y<A;++y){const z=C[y],R=z.start,w=z.count;for(let H=R,W=R+w;H<W;H+=3)S(i[H+0],i[H+1],i[H+2])}const F=new oe,U=new oe,P=new oe,I=new oe;function V(y){P.fromArray(a,y*3),I.copy(P);const A=u[y];F.copy(A),F.sub(P.multiplyScalar(P.dot(A))).normalize(),U.crossVectors(I,A);const R=U.dot(c[y])<0?-1:1;l[y*4]=F.x,l[y*4+1]=F.y,l[y*4+2]=F.z,l[y*4+3]=R}for(let y=0,A=C.length;y<A;++y){const z=C[y],R=z.start,w=z.count;for(let H=R,W=R+w;H<W;H+=3)V(i[H+0]),V(i[H+1]),V(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,v=i.count;d<v;d++)i.setXYZ(d,0,0,0);const r=new oe,a=new oe,s=new oe,o=new oe,l=new oe,u=new oe,c=new oe,p=new oe;if(e)for(let d=0,v=e.count;d<v;d+=3){const m=e.getX(d+0),x=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,f),c.subVectors(s,a),p.subVectors(r,a),c.cross(p),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,f),o.add(c),l.add(c),u.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let d=0,v=t.count;d<v;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),c.subVectors(s,a),p.subVectors(r,a),c.cross(p),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,p=o.normalized,d=new u.constructor(l.length*c);let v=0,m=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?v=l[x]*o.data.stride+o.offset:v=l[x]*c;for(let h=0;h<c;h++)d[m++]=u[v++]}return new an(d,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let c=0,p=u.length;c<p;c++){const d=u[c],v=e(d,i);l.push(v)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,d=u.length;p<d;p++){const v=u[p];c.push(v.toJSON(e.data))}c.length>0&&(r[l]=c,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const a=e.morphAttributes;for(const u in a){const c=[],p=a[u];for(let d=0,v=p.length;d<v;d++)c.push(p[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new rt,Qn=new bl,Jr=new Nr,Zu=new oe,Li=new oe,Ri=new oe,Di=new oe,No=new oe,Qr=new oe,ea=new Ee,ta=new Ee,na=new Ee,Ju=new oe,Qu=new oe,ec=new oe,ia=new oe,ra=new oe;class dn extends Et{constructor(e=new mn,t=new id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Qr.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=o[l],p=a[l];c!==0&&(No.fromBufferAttribute(p,e),s?Qr.addScaledVector(No,c):Qr.addScaledVector(No.sub(t),c))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(Jr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Jr,Zu)===null||Qn.origin.distanceToSquared(Zu)>io(e.far-e.near,2)))&&(Ku.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,p=a.attributes.normal,d=a.groups,v=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,x=d.length;m<x;m++){const f=d[m],h=s[f.materialIndex],E=Math.max(f.start,v.start),S=Math.min(o.count,Math.min(f.start+f.count,v.start+v.count));for(let C=E,F=S;C<F;C+=3){const U=o.getX(C),P=o.getX(C+1),I=o.getX(C+2);r=aa(this,h,e,i,u,c,p,U,P,I),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const m=Math.max(0,v.start),x=Math.min(o.count,v.start+v.count);for(let f=m,h=x;f<h;f+=3){const E=o.getX(f),S=o.getX(f+1),C=o.getX(f+2);r=aa(this,s,e,i,u,c,p,E,S,C),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,x=d.length;m<x;m++){const f=d[m],h=s[f.materialIndex],E=Math.max(f.start,v.start),S=Math.min(l.count,Math.min(f.start+f.count,v.start+v.count));for(let C=E,F=S;C<F;C+=3){const U=C,P=C+1,I=C+2;r=aa(this,h,e,i,u,c,p,U,P,I),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const m=Math.max(0,v.start),x=Math.min(l.count,v.start+v.count);for(let f=m,h=x;f<h;f+=3){const E=f,S=f+1,C=f+2;r=aa(this,s,e,i,u,c,p,E,S,C),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function o_(n,e,t,i,r,a,s,o){let l;if(e.side===Bt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===jn,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ra);return u<t.near||u>t.far?null:{distance:u,point:ra.clone(),object:n}}function aa(n,e,t,i,r,a,s,o,l,u){n.getVertexPosition(o,Li),n.getVertexPosition(l,Ri),n.getVertexPosition(u,Di);const c=o_(n,e,t,i,Li,Ri,Di,ia);if(c){r&&(ea.fromBufferAttribute(r,o),ta.fromBufferAttribute(r,l),na.fromBufferAttribute(r,u),c.uv=fn.getInterpolation(ia,Li,Ri,Di,ea,ta,na,new Ee)),a&&(ea.fromBufferAttribute(a,o),ta.fromBufferAttribute(a,l),na.fromBufferAttribute(a,u),c.uv1=fn.getInterpolation(ia,Li,Ri,Di,ea,ta,na,new Ee),c.uv2=c.uv1),s&&(Ju.fromBufferAttribute(s,o),Qu.fromBufferAttribute(s,l),ec.fromBufferAttribute(s,u),c.normal=fn.getInterpolation(ia,Li,Ri,Di,Ju,Qu,ec,new oe),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new oe,materialIndex:0};fn.getNormal(Li,Ri,Di,p.normal),c.face=p}return c}class Ur extends mn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],c=[],p=[];let d=0,v=0;m("z","y","x",-1,-1,i,t,e,s,a,0),m("z","y","x",1,-1,i,t,-e,s,a,1),m("x","z","y",1,1,e,i,t,r,s,2),m("x","z","y",1,-1,e,i,-t,r,s,3),m("x","y","z",1,-1,e,t,i,r,a,4),m("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(p,2));function m(x,f,h,E,S,C,F,U,P,I,V){const y=C/P,A=F/I,z=C/2,R=F/2,w=U/2,H=P+1,W=I+1;let M=0,D=0;const L=new oe;for(let B=0;B<W;B++){const X=B*A-R;for(let ie=0;ie<H;ie++){const ae=ie*y-z;L[x]=ae*E,L[f]=X*S,L[h]=w,u.push(L.x,L.y,L.z),L[x]=0,L[f]=0,L[h]=U>0?1:-1,c.push(L.x,L.y,L.z),p.push(ie/P),p.push(1-B/I),M+=1}}for(let B=0;B<I;B++)for(let X=0;X<P;X++){const ie=d+X+H*B,ae=d+X+H*(B+1),Q=d+(X+1)+H*(B+1),re=d+(X+1)+H*B;l.push(ie,ae,re),l.push(ae,Q,re),D+=6}o.addGroup(v,D,V),v+=D,d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const r in i)e[r]=i[r]}return e}function s_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const El={clone:Yi,merge:Dt};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=s_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sd extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new oe,tc=new Ee,nc=new Ee;class en extends sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Ni=1;class c_ extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Oi,Ni,e,t);r.layers=this.layers,this.add(r);const a=new en(Oi,Ni,e,t);a.layers=this.layers,this.add(a);const s=new en(Oi,Ni,e,t);s.layers=this.layers,this.add(s);const o=new en(Oi,Ni,e,t);o.layers=this.layers,this.add(o);const l=new en(Oi,Ni,e,t);l.layers=this.layers,this.add(l);const u=new en(Oi,Ni,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const u of t)this.remove(u);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,c]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(p,d,v),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ld extends Nt{constructor(e,t,i,r,a,s,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,i,r,a,s,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f_ extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ui?Mt:Yt),this.texture=new ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ur(5,5,5),a=new Rn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Wn});a.uniforms.tEquirect.value=t;const s=new dn(r,a),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=It),new c_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Uo=new oe,h_=new oe,d_=new Xe;class zn{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uo.subVectors(i,t).cross(h_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||d_.getNormalMatrix(e),r=this.coplanarPoint(Uo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Nr,oa=new oe;class Al{constructor(e=new zn,t=new zn,i=new zn,r=new zn,a=new zn,s=new zn){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],u=r[4],c=r[5],p=r[6],d=r[7],v=r[8],m=r[9],x=r[10],f=r[11],h=r[12],E=r[13],S=r[14],C=r[15];if(i[0].setComponents(l-a,d-u,f-v,C-h).normalize(),i[1].setComponents(l+a,d+u,f+v,C+h).normalize(),i[2].setComponents(l+s,d+c,f+m,C+E).normalize(),i[3].setComponents(l-s,d-c,f-m,C-E).normalize(),i[4].setComponents(l-o,d-p,f-x,C-S).normalize(),t===wn)i[5].setComponents(l+o,d+p,f+x,C+S).normalize();else if(t===Ba)i[5].setComponents(o,p,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ud(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function p_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const p=u.array,d=u.usage,v=p.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,p,d),u.onUploadCallback();let x;if(p instanceof Float32Array)x=n.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=n.SHORT;else if(p instanceof Uint32Array)x=n.UNSIGNED_INT;else if(p instanceof Int32Array)x=n.INT;else if(p instanceof Int8Array)x=n.BYTE;else if(p instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:v}}function a(u,c,p){const d=c.array,v=c._updateRange,m=c.updateRanges;if(n.bindBuffer(p,u),v.count===-1&&m.length===0&&n.bufferSubData(p,0,d),m.length!==0){for(let x=0,f=m.length;x<f;x++){const h=m[x];t?n.bufferSubData(p,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(p,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}v.count!==-1&&(t?n.bufferSubData(p,v.offset*d.BYTES_PER_ELEMENT,d,v.offset,v.count):n.bufferSubData(p,v.offset*d.BYTES_PER_ELEMENT,d.subarray(v.offset,v.offset+v.count)),v.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);if(p===void 0)i.set(u,r(u,c));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,u,c),p.version=u.version}}return{get:s,remove:o,update:l}}class Ya extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,p=e/o,d=t/l,v=[],m=[],x=[],f=[];for(let h=0;h<c;h++){const E=h*d-s;for(let S=0;S<u;S++){const C=S*p-a;m.push(C,-E,0),x.push(0,0,1),f.push(S/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const S=E+u*h,C=E+u*(h+1),F=E+1+u*(h+1),U=E+1+u*h;v.push(S,C,U),v.push(C,F,U)}this.setIndex(v),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,w_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,B_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,j_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,L0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,My=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Oy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:m_,alphahash_pars_fragment:v_,alphamap_fragment:g_,alphamap_pars_fragment:__,alphatest_fragment:y_,alphatest_pars_fragment:x_,aomap_fragment:S_,aomap_pars_fragment:b_,batching_pars_vertex:M_,batching_vertex:E_,begin_vertex:A_,beginnormal_vertex:T_,bsdfs:C_,iridescence_fragment:P_,bumpmap_pars_fragment:w_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:O_,color_fragment:N_,color_pars_fragment:U_,color_pars_vertex:I_,color_vertex:F_,common:B_,cube_uv_reflection_fragment:G_,defaultnormal_vertex:z_,displacementmap_pars_vertex:k_,displacementmap_vertex:V_,emissivemap_fragment:H_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:q_,envmap_fragment:j_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:$_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:l0,envmap_vertex:Z_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_fragment:i0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:s0,lights_toon_fragment:u0,lights_toon_pars_fragment:c0,lights_phong_fragment:f0,lights_phong_pars_fragment:h0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:v0,lights_fragment_end:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:S0,map_fragment:b0,map_pars_fragment:M0,map_particle_fragment:E0,map_particle_pars_fragment:A0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:C0,morphcolor_vertex:P0,morphnormal_vertex:w0,morphtarget_pars_vertex:L0,morphtarget_vertex:R0,normal_fragment_begin:D0,normal_fragment_maps:O0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:I0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:k0,opaque_fragment:V0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:j0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:ry,specularmap_pars_fragment:ay,tonemapping_fragment:oy,tonemapping_pars_fragment:sy,transmission_fragment:ly,transmission_pars_fragment:uy,uv_pars_fragment:cy,uv_pars_vertex:fy,uv_vertex:hy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:vy,backgroundCube_frag:gy,cube_vert:_y,cube_frag:yy,depth_vert:xy,depth_frag:Sy,distanceRGBA_vert:by,distanceRGBA_frag:My,equirect_vert:Ey,equirect_frag:Ay,linedashed_vert:Ty,linedashed_frag:Cy,meshbasic_vert:Py,meshbasic_frag:wy,meshlambert_vert:Ly,meshlambert_frag:Ry,meshmatcap_vert:Dy,meshmatcap_frag:Oy,meshnormal_vert:Ny,meshnormal_frag:Uy,meshphong_vert:Iy,meshphong_frag:Fy,meshphysical_vert:By,meshphysical_frag:Gy,meshtoon_vert:zy,meshtoon_frag:ky,points_vert:Vy,points_frag:Hy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:jy},Ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ft={basic:{uniforms:Dt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Dt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Dt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Dt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Dt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Dt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Dt([Ae.points,Ae.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Dt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Dt([Ae.common,Ae.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Dt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Dt([Ae.sprite,Ae.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Dt([Ae.common,Ae.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Dt([Ae.lights,Ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ft.physical={uniforms:Dt([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const sa={r:0,b:0,g:0};function Yy(n,e,t,i,r,a,s){const o=new je(0);let l=a===!0?0:1,u,c,p=null,d=0,v=null;function m(f,h){let E=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?x(o,l):S&&S.isColor&&(x(S,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Xa)?(c===void 0&&(c=new dn(new Ur(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Yi(Ft.backgroundCube.uniforms),vertexShader:Ft.backgroundCube.vertexShader,fragmentShader:Ft.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==et,(p!==S||d!==S.version||v!==n.toneMapping)&&(c.material.needsUpdate=!0,p=S,d=S.version,v=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new dn(new Ya(2,2),new Rn({name:"BackgroundMaterial",uniforms:Yi(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||d!==S.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,p=S,d=S.version,v=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function x(f,h){f.getRGB(sa,od(n)),i.buffers.color.setClear(sa.r,sa.g,sa.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(f,h=1){o.set(f),l=h,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(o,l)},render:m}}function $y(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=f(null);let u=l,c=!1;function p(w,H,W,M,D){let L=!1;if(s){const B=x(M,W,H);u!==B&&(u=B,v(u.object)),L=h(w,M,W,D),L&&E(w,M,W,D)}else{const B=H.wireframe===!0;(u.geometry!==M.id||u.program!==W.id||u.wireframe!==B)&&(u.geometry=M.id,u.program=W.id,u.wireframe=B,L=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(L||c)&&(c=!1,I(w,H,W,M),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function v(w){return i.isWebGL2?n.bindVertexArray(w):a.bindVertexArrayOES(w)}function m(w){return i.isWebGL2?n.deleteVertexArray(w):a.deleteVertexArrayOES(w)}function x(w,H,W){const M=W.wireframe===!0;let D=o[w.id];D===void 0&&(D={},o[w.id]=D);let L=D[H.id];L===void 0&&(L={},D[H.id]=L);let B=L[M];return B===void 0&&(B=f(d()),L[M]=B),B}function f(w){const H=[],W=[],M=[];for(let D=0;D<r;D++)H[D]=0,W[D]=0,M[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:M,object:w,attributes:{},index:null}}function h(w,H,W,M){const D=u.attributes,L=H.attributes;let B=0;const X=W.getAttributes();for(const ie in X)if(X[ie].location>=0){const Q=D[ie];let re=L[ie];if(re===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;B++}return u.attributesNum!==B||u.index!==M}function E(w,H,W,M){const D={},L=H.attributes;let B=0;const X=W.getAttributes();for(const ie in X)if(X[ie].location>=0){let Q=L[ie];Q===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),D[ie]=re,B++}u.attributes=D,u.attributesNum=B,u.index=M}function S(){const w=u.newAttributes;for(let H=0,W=w.length;H<W;H++)w[H]=0}function C(w){F(w,0)}function F(w,H){const W=u.newAttributes,M=u.enabledAttributes,D=u.attributeDivisors;W[w]=1,M[w]===0&&(n.enableVertexAttribArray(w),M[w]=1),D[w]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,H),D[w]=H)}function U(){const w=u.newAttributes,H=u.enabledAttributes;for(let W=0,M=H.length;W<M;W++)H[W]!==w[W]&&(n.disableVertexAttribArray(W),H[W]=0)}function P(w,H,W,M,D,L,B){B===!0?n.vertexAttribIPointer(w,H,W,D,L):n.vertexAttribPointer(w,H,W,M,D,L)}function I(w,H,W,M){if(i.isWebGL2===!1&&(w.isInstancedMesh||M.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const D=M.attributes,L=W.getAttributes(),B=H.defaultAttributeValues;for(const X in L){const ie=L[X];if(ie.location>=0){let ae=D[X];if(ae===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ae!==void 0){const Q=ae.normalized,re=ae.itemSize,de=t.get(ae);if(de===void 0)continue;const te=de.buffer,se=de.type,ce=de.bytesPerElement,pe=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||ae.gpuType===Vh);if(ae.isInterleavedBufferAttribute){const Y=ae.data,b=Y.stride,k=ae.offset;if(Y.isInstancedInterleavedBuffer){for(let O=0;O<ie.locationSize;O++)F(ie.location+O,Y.meshPerAttribute);w.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let O=0;O<ie.locationSize;O++)C(ie.location+O);n.bindBuffer(n.ARRAY_BUFFER,te);for(let O=0;O<ie.locationSize;O++)P(ie.location+O,re/ie.locationSize,se,Q,b*ce,(k+re/ie.locationSize*O)*ce,pe)}else{if(ae.isInstancedBufferAttribute){for(let Y=0;Y<ie.locationSize;Y++)F(ie.location+Y,ae.meshPerAttribute);w.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Y=0;Y<ie.locationSize;Y++)C(ie.location+Y);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Y=0;Y<ie.locationSize;Y++)P(ie.location+Y,re/ie.locationSize,se,Q,re*ce,re/ie.locationSize*Y*ce,pe)}}else if(B!==void 0){const Q=B[X];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(ie.location,Q);break;case 3:n.vertexAttrib3fv(ie.location,Q);break;case 4:n.vertexAttrib4fv(ie.location,Q);break;default:n.vertexAttrib1fv(ie.location,Q)}}}}U()}function V(){z();for(const w in o){const H=o[w];for(const W in H){const M=H[W];for(const D in M)m(M[D].object),delete M[D];delete H[W]}delete o[w]}}function y(w){if(o[w.id]===void 0)return;const H=o[w.id];for(const W in H){const M=H[W];for(const D in M)m(M[D].object),delete M[D];delete H[W]}delete o[w.id]}function A(w){for(const H in o){const W=o[H];if(W[w.id]===void 0)continue;const M=W[w.id];for(const D in M)m(M[D].object),delete M[D];delete W[w.id]}}function z(){R(),c=!0,u!==l&&(u=l,v(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:C,disableUnusedAttributes:U}}function Ky(n,e,t,i){const r=i.isWebGL2;let a;function s(c){a=c}function o(c,p){n.drawArrays(a,c,p),t.update(p,a,1)}function l(c,p,d){if(d===0)return;let v,m;if(r)v=n,m="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,c,p,d),t.update(p,a,d)}function u(c,p,d){if(d===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<d;m++)this.render(c[m],p[m]);else{v.multiDrawArraysWEBGL(a,c,0,p,0,d);let m=0;for(let x=0;x<d;x++)m+=p[x];t.update(m,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Zy(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,C=s||e.has("OES_texture_float"),F=S&&C,U=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:C,floatVertexTextures:F,maxSamples:U}}function Jy(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new zn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const v=p.length!==0||d||i!==0||r;return r=d,i=p.length,v},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){t=c(p,d,0)},this.setState=function(p,d,v){const m=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,h=n.get(p);if(!r||m===null||m.length===0||a&&!f)a?c(null):u();else{const E=a?0:i,S=E*4;let C=h.clippingState||null;l.value=C,C=c(m,d,S,v);for(let F=0;F!==S;++F)C[F]=t[F];h.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,d,v,m){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,m!==!0||f===null){const h=v+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<h)&&(f=new Float32Array(h));for(let S=0,C=v;S!==x;++S,C+=4)s.copy(p[S]).applyMatrix4(E,o),s.normal.toArray(f,C),f[C+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Qy(n){let e=new WeakMap;function t(s,o){return o===$s?s.mapping=Xi:o===Ks&&(s.mapping=qi),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===$s||o===Ks)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new f_(l.height);return u.fromEquirectangularTexture(n,s),e.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class cd extends sd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,ic=[.125,.215,.35,.446,.526,.582],ri=20,Io=new cd,rc=new je;let Fo=null,Bo=0,Go=0;const ni=(1+Math.sqrt(5))/2,Ui=1/ni,ac=[new oe(1,1,1),new oe(-1,1,1),new oe(1,1,-1),new oe(-1,1,-1),new oe(0,ni,Ui),new oe(0,ni,-Ui),new oe(Ui,0,ni),new oe(-Ui,0,ni),new oe(ni,Ui,0),new oe(-ni,Ui,0)];class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Bo,Go),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ar,format:nn,colorSpace:Ln,depthBuffer:!1},r=sc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ex(a)),this._blurMaterial=tx(a,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,r){const o=new en(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,d=c.toneMapping;c.getClearColor(rc),c.toneMapping=Xn,c.autoClear=!1;const v=new id({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new dn(new Ur,v);let x=!1;const f=e.background;f?f.isColor&&(v.color.copy(f),e.background=null,x=!0):(v.color.copy(rc),x=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):E===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const S=this._cubeSize;la(r,E*S,h>2?S:0,S,S),c.setRenderTarget(r),x&&c.render(m,o),c.render(e,o)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xi||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new dn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Io)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=ac[(r-1)%ac.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new dn(this._lodPlanes[r],u),d=u.uniforms,v=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*ri-1),x=a/m,f=isFinite(a)?1+Math.floor(c*x):ri;f>ri&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ri}`);const h=[];let E=0;for(let P=0;P<ri;++P){const I=P/x,V=Math.exp(-I*I/2);h.push(V),P===0?E+=V:P<f&&(E+=2*V)}for(let P=0;P<h.length;P++)h[P]=h[P]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-i;const C=this._sizeLods[r],F=3*C*(r>S-Gi?r-S+Gi:0),U=4*(this._cubeSize-C);la(t,F,U,3*C,2*C),l.setRenderTarget(t),l.render(p,Io)}}function ex(n){const e=[],t=[],i=[];let r=n;const a=n-Gi+1+ic.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-Gi?l=ic[s-n+Gi-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,p=1+u,d=[c,c,p,c,p,p,c,c,p,p,c,p],v=6,m=6,x=3,f=2,h=1,E=new Float32Array(x*m*v),S=new Float32Array(f*m*v),C=new Float32Array(h*m*v);for(let U=0;U<v;U++){const P=U%3*2/3-1,I=U>2?0:-1,V=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(V,x*m*U),S.set(d,f*m*U);const y=[U,U,U,U,U,U];C.set(y,h*m*U)}const F=new mn;F.setAttribute("position",new an(E,x)),F.setAttribute("uv",new an(S,f)),F.setAttribute("faceIndex",new an(C,h)),e.push(F),r>Gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sc(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tx(n,e,t){const i=new Float32Array(ri),r=new oe(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function lc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function uc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===$s||l===Ks,c=l===Xi||l===qi;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new oc(n)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||c&&p&&r(p)){t===null&&(t=new oc(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function ix(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rx(n,e,t,i){const r={},a=new WeakMap;function s(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let f=0,h=x.length;f<h;f++)e.remove(x[f])}d.removeEventListener("dispose",s),delete r[d.id];const v=a.get(d);v&&(e.remove(v),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const v=p.morphAttributes;for(const m in v){const x=v[m];for(let f=0,h=x.length;f<h;f++)e.update(x[f],n.ARRAY_BUFFER)}}function u(p){const d=[],v=p.index,m=p.attributes.position;let x=0;if(v!==null){const E=v.array;x=v.version;for(let S=0,C=E.length;S<C;S+=3){const F=E[S+0],U=E[S+1],P=E[S+2];d.push(F,U,U,P,P,F)}}else if(m!==void 0){const E=m.array;x=m.version;for(let S=0,C=E.length/3-1;S<C;S+=3){const F=S+0,U=S+1,P=S+2;d.push(F,U,U,P,P,F)}}else return;const f=new(Jh(d)?ad:rd)(d,1);f.version=x;const h=a.get(p);h&&e.remove(h),a.set(p,f)}function c(p){const d=a.get(p);if(d){const v=p.index;v!==null&&d.version<v.version&&u(p)}else u(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function ax(n,e,t,i){const r=i.isWebGL2;let a;function s(v){a=v}let o,l;function u(v){o=v.type,l=v.bytesPerElement}function c(v,m){n.drawElements(a,m,o,v*l),t.update(m,a,1)}function p(v,m,x){if(x===0)return;let f,h;if(r)f=n,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](a,m,o,v*l,x),t.update(m,a,x)}function d(v,m,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<x;h++)this.render(v[h]/l,m[h]);else{f.multiDrawElementsWEBGL(a,m,0,o,v,0,x);let h=0;for(let E=0;E<x;E++)h+=m[E];t.update(h,a,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=p,this.renderMultiDraw=d}function ox(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sx(n,e){return n[0]-e[0]}function lx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ux(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,s=new lt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,p){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=v!==void 0?v.length:0;let x=a.get(c);if(x===void 0||x.count!==m){let w=function(){z.dispose(),a.delete(c),c.removeEventListener("dispose",w)};x!==void 0&&x.texture.dispose();const E=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,F=c.morphAttributes.position||[],U=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let I=0;E===!0&&(I=1),S===!0&&(I=2),C===!0&&(I=3);let V=c.attributes.position.count*I,y=1;V>e.maxTextureSize&&(y=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const A=new Float32Array(V*y*4*m),z=new td(A,V,y,m);z.type=Pn,z.needsUpdate=!0;const R=I*4;for(let H=0;H<m;H++){const W=F[H],M=U[H],D=P[H],L=V*y*4*H;for(let B=0;B<W.count;B++){const X=B*R;E===!0&&(s.fromBufferAttribute(W,B),A[L+X+0]=s.x,A[L+X+1]=s.y,A[L+X+2]=s.z,A[L+X+3]=0),S===!0&&(s.fromBufferAttribute(M,B),A[L+X+4]=s.x,A[L+X+5]=s.y,A[L+X+6]=s.z,A[L+X+7]=0),C===!0&&(s.fromBufferAttribute(D,B),A[L+X+8]=s.x,A[L+X+9]=s.y,A[L+X+10]=s.z,A[L+X+11]=D.itemSize===4?s.w:1)}}x={count:m,texture:z,size:new Ee(V,y)},a.set(c,x),c.addEventListener("dispose",w)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const h=c.morphTargetsRelative?1:1-f;p.getUniforms().setValue(n,"morphTargetBaseInfluence",h),p.getUniforms().setValue(n,"morphTargetInfluences",d),p.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const v=d===void 0?0:d.length;let m=i[c.id];if(m===void 0||m.length!==v){m=[];for(let S=0;S<v;S++)m[S]=[S,0];i[c.id]=m}for(let S=0;S<v;S++){const C=m[S];C[0]=S,C[1]=d[S]}m.sort(lx);for(let S=0;S<8;S++)S<v&&m[S][1]?(o[S][0]=m[S][0],o[S][1]=m[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(sx);const x=c.morphAttributes.position,f=c.morphAttributes.normal;let h=0;for(let S=0;S<8;S++){const C=o[S],F=C[0],U=C[1];F!==Number.MAX_SAFE_INTEGER&&U?(x&&c.getAttribute("morphTarget"+S)!==x[F]&&c.setAttribute("morphTarget"+S,x[F]),f&&c.getAttribute("morphNormal"+S)!==f[F]&&c.setAttribute("morphNormal"+S,f[F]),r[S]=U,h+=U):(x&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),f&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const E=c.morphTargetsRelative?1:1-h;p.getUniforms().setValue(n,"morphTargetBaseInfluence",E),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function cx(n,e,t,i){let r=new WeakMap;function a(l){const u=i.render.frame,c=l.geometry,p=e.get(l,c);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function s(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}class fd extends Nt{constructor(e,t,i,r,a,s,o,l,u,c){if(c=c!==void 0?c:li,c!==li&&c!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===li&&(i=kn),i===void 0&&c===ji&&(i=si),super(null,r,a,s,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new Nt,dd=new fd(1,1);dd.compareFunction=Kh;const pd=new td,md=new $g,vd=new ld,cc=[],fc=[],hc=new Float32Array(16),dc=new Float32Array(9),pc=new Float32Array(4);function Zi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=cc[r];if(a===void 0&&(a=new Float32Array(r),cc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;pc.set(i),n.uniformMatrix2fv(this.addr,!1,pc),mt(t,i)}}function vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;dc.set(i),n.uniformMatrix3fv(this.addr,!1,dc),mt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;hc.set(i),n.uniformMatrix4fv(this.addr,!1,hc),mt(t,i)}}function _x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?dd:hd;t.setTexture2D(e||a,r)}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||md,r)}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vd,r)}function wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pd,r)}function Lx(n){switch(n){case 5126:return fx;case 35664:return hx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return vx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return xx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return Mx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return wx}}function Rx(n,e){n.uniform1fv(this.addr,e)}function Dx(n,e){const t=Zi(e,this.size,2);n.uniform2fv(this.addr,t)}function Ox(n,e){const t=Zi(e,this.size,3);n.uniform3fv(this.addr,t)}function Nx(n,e){const t=Zi(e,this.size,4);n.uniform4fv(this.addr,t)}function Ux(n,e){const t=Zi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ix(n,e){const t=Zi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fx(n,e){const t=Zi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bx(n,e){n.uniform1iv(this.addr,e)}function Gx(n,e){n.uniform2iv(this.addr,e)}function zx(n,e){n.uniform3iv(this.addr,e)}function kx(n,e){n.uniform4iv(this.addr,e)}function Vx(n,e){n.uniform1uiv(this.addr,e)}function Hx(n,e){n.uniform2uiv(this.addr,e)}function Wx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function qx(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||hd,a[s])}function jx(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||md,a[s])}function Yx(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||vd,a[s])}function $x(n,e,t){const i=this.cache,r=e.length,a=$a(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),mt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||pd,a[s])}function Kx(n){switch(n){case 5126:return Rx;case 35664:return Dx;case 35665:return Ox;case 35666:return Nx;case 35674:return Ux;case 35675:return Ix;case 35676:return Fx;case 5124:case 35670:return Bx;case 35667:case 35671:return Gx;case 35668:case 35672:return zx;case 35669:case 35673:return kx;case 5125:return Vx;case 36294:return Hx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lx(t.type)}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}}class Qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function mc(n,e){n.seq.push(e),n.map[e.id]=e}function eS(n,e,t){const i=n.name,r=i.length;for(zo.lastIndex=0;;){const a=zo.exec(i),s=zo.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===r){mc(t,u===void 0?new Zx(o,n,e):new Jx(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Qx(o),mc(t,p)),t=p}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);eS(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function vc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tS=37297;let nS=0;function iS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function rS(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Fa&&t===Ia?i="LinearDisplayP3ToLinearSRGB":e===Ia&&t===Fa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ln:case qa:return[i,"LinearTransferOETF"];case Mt:case xl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iS(n.getShaderSource(e),s)}else return r}function aS(n,e){const t=rS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oS(n,e){let t;switch(e){case og:t="Linear";break;case sg:t="Reinhard";break;case lg:t="OptimizedCineon";break;case ug:t="ACESFilmic";break;case fg:t="AgX";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function lS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function uS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function zi(n){return n!==""}function _c(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(n){return n.replace(fS,dS)}const hS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dS(n,e){let t=Ve[e];if(t===void 0){const i=hS.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(n){return n.replace(pS,mS)}function mS(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Sc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function gS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case qi:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _S(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function yS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wa:e="ENVMAP_BLENDING_MULTIPLY";break;case rg:e="ENVMAP_BLENDING_MIX";break;case ag:e="ENVMAP_BLENDING_ADD";break}return e}function xS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=vS(t),u=gS(t),c=_S(t),p=yS(t),d=xS(t),v=t.isWebGL2?"":sS(t),m=lS(t),x=uS(a),f=r.createProgram();let h,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zi).join(`
`),h.length>0&&(h+=`
`),E=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zi).join(`
`),E.length>0&&(E+=`
`)):(h=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),E=[v,Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Xn?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,aS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),s=nl(s),s=_c(s,t),s=yc(s,t),o=nl(o),o=_c(o,t),o=yc(o,t),s=xc(s),o=xc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const C=S+h+s,F=S+E+o,U=vc(r,r.VERTEX_SHADER,C),P=vc(r,r.FRAGMENT_SHADER,F);r.attachShader(f,U),r.attachShader(f,P),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function I(z){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(f).trim(),w=r.getShaderInfoLog(U).trim(),H=r.getShaderInfoLog(P).trim();let W=!0,M=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,f,U,P);else{const D=gc(r,U,"vertex"),L=gc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+R+`
`+D+`
`+L)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(w===""||H==="")&&(M=!1);M&&(z.diagnostics={runnable:W,programLog:R,vertexShader:{log:w,prefix:h},fragmentShader:{log:H,prefix:E}})}r.deleteShader(U),r.deleteShader(P),V=new Ra(r,f),y=cS(r,f)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(f,tS)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=U,this.fragmentShader=P,this}let bS=0;class MS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ES(e),t.set(e,i)),i}}class ES{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}}function AS(n,e,t,i,r,a,s){const o=new Ml,l=new MS,u=new Set,c=[],p=r.isWebGL2,d=r.logarithmicDepthBuffer,v=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return u.add(y),y===0?"uv":`uv${y}`}function h(y,A,z,R,w){const H=R.fog,W=w.geometry,M=y.isMeshStandardMaterial?R.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||M),L=D&&D.mapping===Xa?D.image.height:null,B=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const X=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=X!==void 0?X.length:0;let ae=0;W.morphAttributes.position!==void 0&&(ae=1),W.morphAttributes.normal!==void 0&&(ae=2),W.morphAttributes.color!==void 0&&(ae=3);let Q,re,de,te;if(B){const qe=Ft[B];Q=qe.vertexShader,re=qe.fragmentShader}else Q=y.vertexShader,re=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const se=n.getRenderTarget(),ce=w.isInstancedMesh===!0,pe=w.isBatchedMesh===!0,Y=!!y.map,b=!!y.matcap,k=!!D,O=!!y.aoMap,q=!!y.lightMap,Z=!!y.bumpMap,N=!!y.normalMap,j=!!y.displacementMap,g=!!y.emissiveMap,_=!!y.metalnessMap,T=!!y.roughnessMap,G=y.anisotropy>0,K=y.clearcoat>0,J=y.iridescence>0,le=y.sheen>0,ue=y.transmission>0,he=G&&!!y.anisotropyMap,ye=K&&!!y.clearcoatMap,xe=K&&!!y.clearcoatNormalMap,ve=K&&!!y.clearcoatRoughnessMap,De=J&&!!y.iridescenceMap,Ie=J&&!!y.iridescenceThicknessMap,Ne=le&&!!y.sheenColorMap,we=le&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Be=!!y.specularColorMap,ne=!!y.specularIntensityMap,Me=ue&&!!y.transmissionMap,Te=ue&&!!y.thicknessMap,Le=!!y.gradientMap,ee=!!y.alphaMap,be=y.alphaTest>0,Se=!!y.alphaHash,Re=!!y.extensions;let Ue=Xn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const Ye={isWebGL2:p,shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:re,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:pe,instancing:ce,instancingColor:ce&&w.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ln,alphaToCoverage:!!y.alphaToCoverage,map:Y,matcap:b,envMap:k,envMapMode:k&&D.mapping,envMapCubeUVHeight:L,aoMap:O,lightMap:q,bumpMap:Z,normalMap:N,displacementMap:v&&j,emissiveMap:g,normalMapObjectSpace:N&&y.normalMapType===bg,normalMapTangentSpace:N&&y.normalMapType===yl,metalnessMap:_,roughnessMap:T,anisotropy:G,anisotropyMap:he,clearcoat:K,clearcoatMap:ye,clearcoatNormalMap:xe,clearcoatRoughnessMap:ve,iridescence:J,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:le,sheenColorMap:Ne,sheenRoughnessMap:we,specularMap:Ce,specularColorMap:Be,specularIntensityMap:ne,transmission:ue,transmissionMap:Me,thicknessMap:Te,gradientMap:Le,opaque:y.transparent===!1&&y.blending===Vi&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:be,alphaHash:Se,combine:y.combine,mapUv:Y&&f(y.map.channel),aoMapUv:O&&f(y.aoMap.channel),lightMapUv:q&&f(y.lightMap.channel),bumpMapUv:Z&&f(y.bumpMap.channel),normalMapUv:N&&f(y.normalMap.channel),displacementMapUv:j&&f(y.displacementMap.channel),emissiveMapUv:g&&f(y.emissiveMap.channel),metalnessMapUv:_&&f(y.metalnessMap.channel),roughnessMapUv:T&&f(y.roughnessMap.channel),anisotropyMapUv:he&&f(y.anisotropyMap.channel),clearcoatMapUv:ye&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&f(y.sheenRoughnessMap.channel),specularMapUv:Ce&&f(y.specularMap.channel),specularColorMapUv:Be&&f(y.specularColorMap.channel),specularIntensityMapUv:ne&&f(y.specularIntensityMap.channel),transmissionMapUv:Me&&f(y.transmissionMap.channel),thicknessMapUv:Te&&f(y.thicknessMap.channel),alphaMapUv:ee&&f(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(N||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!W.attributes.uv&&(Y||ee),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Y&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Re&&y.extensions.derivatives===!0,extensionFragDepth:Re&&y.extensions.fragDepth===!0,extensionDrawBuffers:Re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Re&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function E(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)A.push(z),A.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(S(A,y),C(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function S(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function C(y,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),y.push(o.mask)}function F(y){const A=x[y.type];let z;if(A){const R=Ft[A];z=El.clone(R.uniforms)}else z=y.uniforms;return z}function U(y,A){let z;for(let R=0,w=c.length;R<w;R++){const H=c[R];if(H.cacheKey===A){z=H,++z.usedTimes;break}}return z===void 0&&(z=new SS(n,A,y,a),c.push(z)),z}function P(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function I(y){l.remove(y)}function V(){l.dispose()}return{getParameters:h,getProgramCacheKey:E,getUniforms:F,acquireProgram:U,releaseProgram:P,releaseShaderCache:I,programs:c,dispose:V}}function TS(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function CS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(p,d,v,m,x,f){let h=n[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:v,groupOrder:m,renderOrder:p.renderOrder,z:x,group:f},n[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=v,h.groupOrder=m,h.renderOrder=p.renderOrder,h.z=x,h.group=f),e++,h}function o(p,d,v,m,x,f){const h=s(p,d,v,m,x,f);v.transmission>0?i.push(h):v.transparent===!0?r.push(h):t.push(h)}function l(p,d,v,m,x,f){const h=s(p,d,v,m,x,f);v.transmission>0?i.unshift(h):v.transparent===!0?r.unshift(h):t.unshift(h)}function u(p,d){t.length>1&&t.sort(p||CS),i.length>1&&i.sort(d||bc),r.length>1&&r.sort(d||bc)}function c(){for(let p=e,d=n.length;p<d;p++){const v=n[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:c,sort:u}}function PS(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Mc,n.set(i,[s])):r>=a.length?(s=new Mc,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function wS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new je};break;case"SpotLight":t={position:new oe,direction:new oe,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return n[e.id]=t,t}}}function LS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OS(n,e){const t=new wS,i=LS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new oe);const a=new oe,s=new rt,o=new rt;function l(c,p){let d=0,v=0,m=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let x=0,f=0,h=0,E=0,S=0,C=0,F=0,U=0,P=0,I=0,V=0;c.sort(DS);const y=p===!0?Math.PI:1;for(let z=0,R=c.length;z<R;z++){const w=c[z],H=w.color,W=w.intensity,M=w.distance,D=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=H.r*W*y,v+=H.g*W*y,m+=H.b*W*y;else if(w.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(w.sh.coefficients[L],W);V++}else if(w.isDirectionalLight){const L=t.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity*y),w.castShadow){const B=w.shadow,X=i.get(w);X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,r.directionalShadow[x]=X,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=w.shadow.matrix,C++}r.directional[x]=L,x++}else if(w.isSpotLight){const L=t.get(w);L.position.setFromMatrixPosition(w.matrixWorld),L.color.copy(H).multiplyScalar(W*y),L.distance=M,L.coneCos=Math.cos(w.angle),L.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),L.decay=w.decay,r.spot[h]=L;const B=w.shadow;if(w.map&&(r.spotLightMap[P]=w.map,P++,B.updateMatrices(w),w.castShadow&&I++),r.spotLightMatrix[h]=B.matrix,w.castShadow){const X=i.get(w);X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,r.spotShadow[h]=X,r.spotShadowMap[h]=D,U++}h++}else if(w.isRectAreaLight){const L=t.get(w);L.color.copy(H).multiplyScalar(W),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),r.rectArea[E]=L,E++}else if(w.isPointLight){const L=t.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity*y),L.distance=w.distance,L.decay=w.decay,w.castShadow){const B=w.shadow,X=i.get(w);X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,r.pointShadow[f]=X,r.pointShadowMap[f]=D,r.pointShadowMatrix[f]=w.shadow.matrix,F++}r.point[f]=L,f++}else if(w.isHemisphereLight){const L=t.get(w);L.skyColor.copy(w.color).multiplyScalar(W*y),L.groundColor.copy(w.groundColor).multiplyScalar(W*y),r.hemi[S]=L,S++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=v,r.ambient[2]=m;const A=r.hash;(A.directionalLength!==x||A.pointLength!==f||A.spotLength!==h||A.rectAreaLength!==E||A.hemiLength!==S||A.numDirectionalShadows!==C||A.numPointShadows!==F||A.numSpotShadows!==U||A.numSpotMaps!==P||A.numLightProbes!==V)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=E,r.point.length=f,r.hemi.length=S,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=U+P-I,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=V,A.directionalLength=x,A.pointLength=f,A.spotLength=h,A.rectAreaLength=E,A.hemiLength=S,A.numDirectionalShadows=C,A.numPointShadows=F,A.numSpotShadows=U,A.numSpotMaps=P,A.numLightProbes=V,r.version=RS++)}function u(c,p){let d=0,v=0,m=0,x=0,f=0;const h=p.matrixWorldInverse;for(let E=0,S=c.length;E<S;E++){const C=c[E];if(C.isDirectionalLight){const F=r.directional[d];F.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(h),d++}else if(C.isSpotLight){const F=r.spot[m];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(h),F.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(h),m++}else if(C.isRectAreaLight){const F=r.rectArea[x];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(h),o.identity(),s.copy(C.matrixWorld),s.premultiply(h),o.extractRotation(s),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){const F=r.point[v];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(h),v++}else if(C.isHemisphereLight){const F=r.hemi[f];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(h),f++}}}return{setup:l,setupView:u,state:r}}function Ec(n,e){const t=new OS(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(p){i.push(p)}function o(p){r.push(p)}function l(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function NS(n,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Ec(n,e),t.set(a,[l])):s>=o.length?(l=new Ec(n,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class US extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IS extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GS(n,e,t){let i=new Al;const r=new Ee,a=new Ee,s=new lt,o=new US({depthPacking:Sg}),l=new IS,u={},c=t.maxTextureSize,p={[jn]:Bt,[Bt]:jn,[Cn]:Cn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:FS,fragmentShader:BS}),v=d.clone();v.defines.HORIZONTAL_PASS=1;const m=new mn;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dn(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let h=this.type;this.render=function(U,P,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||U.length===0)return;const V=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const R=h!==An&&this.type===An,w=h===An&&this.type!==An;for(let H=0,W=U.length;H<W;H++){const M=U[H],D=M.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",M,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const L=D.getFrameExtents();if(r.multiply(L),a.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/L.x),r.x=a.x*L.x,D.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/L.y),r.y=a.y*L.y,D.mapSize.y=a.y)),D.map===null||R===!0||w===!0){const X=this.type!==An?{minFilter:Ot,magFilter:Ot}:{};D.map!==null&&D.map.dispose(),D.map=new hi(r.x,r.y,X),D.map.texture.name=M.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const B=D.getViewportCount();for(let X=0;X<B;X++){const ie=D.getViewport(X);s.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),z.viewport(s),D.updateMatrices(M,X),i=D.getFrustum(),C(P,I,D.camera,M,this.type)}D.isPointLightShadow!==!0&&this.type===An&&E(D,I),D.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(V,y,A)};function E(U,P){const I=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new hi(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(P,null,I,d,x,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(P,null,I,v,x,null)}function S(U,P,I,V){let y=null;const A=I.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(A!==void 0)y=A;else if(y=I.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const z=y.uuid,R=P.uuid;let w=u[z];w===void 0&&(w={},u[z]=w);let H=w[R];H===void 0&&(H=y.clone(),w[R]=H,P.addEventListener("dispose",F)),y=H}if(y.visible=P.visible,y.wireframe=P.wireframe,V===An?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:p[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=I}return y}function C(U,P,I,V,y){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&y===An)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,U.matrixWorld);const R=e.update(U),w=U.material;if(Array.isArray(w)){const H=R.groups;for(let W=0,M=H.length;W<M;W++){const D=H[W],L=w[D.materialIndex];if(L&&L.visible){const B=S(U,L,V,y);U.onBeforeShadow(n,U,P,I,R,B,D),n.renderBufferDirect(I,null,R,B,U,D),U.onAfterShadow(n,U,P,I,R,B,D)}}}else if(w.visible){const H=S(U,w,V,y);U.onBeforeShadow(n,U,P,I,R,H,null),n.renderBufferDirect(I,null,R,H,U,null),U.onAfterShadow(n,U,P,I,R,H,null)}}const z=U.children;for(let R=0,w=z.length;R<w;R++)C(z[R],P,I,V,y)}function F(U){U.target.removeEventListener("dispose",F);for(const I in u){const V=u[I],y=U.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}function zS(n,e,t){const i=t.isWebGL2;function r(){let ee=!1;const be=new lt;let Se=null;const Re=new lt(0,0,0,0);return{setMask:function(Ue){Se!==Ue&&!ee&&(n.colorMask(Ue,Ue,Ue,Ue),Se=Ue)},setLocked:function(Ue){ee=Ue},setClear:function(Ue,Ye,qe,Je,yt){yt===!0&&(Ue*=Je,Ye*=Je,qe*=Je),be.set(Ue,Ye,qe,Je),Re.equals(be)===!1&&(n.clearColor(Ue,Ye,qe,Je),Re.copy(be))},reset:function(){ee=!1,Se=null,Re.set(-1,0,0,0)}}}function a(){let ee=!1,be=null,Se=null,Re=null;return{setTest:function(Ue){Ue?ce(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(Ue){be!==Ue&&!ee&&(n.depthMask(Ue),be=Ue)},setFunc:function(Ue){if(Se!==Ue){switch(Ue){case Zv:n.depthFunc(n.NEVER);break;case Jv:n.depthFunc(n.ALWAYS);break;case Qv:n.depthFunc(n.LESS);break;case Na:n.depthFunc(n.LEQUAL);break;case eg:n.depthFunc(n.EQUAL);break;case tg:n.depthFunc(n.GEQUAL);break;case ng:n.depthFunc(n.GREATER);break;case ig:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Ue}},setLocked:function(Ue){ee=Ue},setClear:function(Ue){Re!==Ue&&(n.clearDepth(Ue),Re=Ue)},reset:function(){ee=!1,be=null,Se=null,Re=null}}}function s(){let ee=!1,be=null,Se=null,Re=null,Ue=null,Ye=null,qe=null,Je=null,yt=null;return{setTest:function($e){ee||($e?ce(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function($e){be!==$e&&!ee&&(n.stencilMask($e),be=$e)},setFunc:function($e,ut,Lt){(Se!==$e||Re!==ut||Ue!==Lt)&&(n.stencilFunc($e,ut,Lt),Se=$e,Re=ut,Ue=Lt)},setOp:function($e,ut,Lt){(Ye!==$e||qe!==ut||Je!==Lt)&&(n.stencilOp($e,ut,Lt),Ye=$e,qe=ut,Je=Lt)},setLocked:function($e){ee=$e},setClear:function($e){yt!==$e&&(n.clearStencil($e),yt=$e)},reset:function(){ee=!1,be=null,Se=null,Re=null,Ue=null,Ye=null,qe=null,Je=null,yt=null}}}const o=new r,l=new a,u=new s,c=new WeakMap,p=new WeakMap;let d={},v={},m=new WeakMap,x=[],f=null,h=!1,E=null,S=null,C=null,F=null,U=null,P=null,I=null,V=new je(0,0,0),y=0,A=!1,z=null,R=null,w=null,H=null,W=null;const M=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,L=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=L>=1):B.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=L>=2);let X=null,ie={};const ae=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),re=new lt().fromArray(ae),de=new lt().fromArray(Q);function te(ee,be,Se,Re){const Ue=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(ee,Ye),n.texParameteri(ee,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ee,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Se;qe++)i&&(ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(be+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Ye}const se={};se[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ce(n.DEPTH_TEST),l.setFunc(Na),j(!1),g(ru),ce(n.CULL_FACE),Z(Wn);function ce(ee){d[ee]!==!0&&(n.enable(ee),d[ee]=!0)}function pe(ee){d[ee]!==!1&&(n.disable(ee),d[ee]=!1)}function Y(ee,be){return v[ee]!==be?(n.bindFramebuffer(ee,be),v[ee]=be,i&&(ee===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=be),ee===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function b(ee,be){let Se=x,Re=!1;if(ee)if(Se=m.get(be),Se===void 0&&(Se=[],m.set(be,Se)),ee.isWebGLMultipleRenderTargets){const Ue=ee.texture;if(Se.length!==Ue.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,qe=Ue.length;Ye<qe;Ye++)Se[Ye]=n.COLOR_ATTACHMENT0+Ye;Se.length=Ue.length,Re=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,Re=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function k(ee){return f!==ee?(n.useProgram(ee),f=ee,!0):!1}const O={[ii]:n.FUNC_ADD,[Iv]:n.FUNC_SUBTRACT,[Fv]:n.FUNC_REVERSE_SUBTRACT};if(i)O[lu]=n.MIN,O[uu]=n.MAX;else{const ee=e.get("EXT_blend_minmax");ee!==null&&(O[lu]=ee.MIN_EXT,O[uu]=ee.MAX_EXT)}const q={[Bv]:n.ZERO,[Gv]:n.ONE,[zv]:n.SRC_COLOR,[js]:n.SRC_ALPHA,[qv]:n.SRC_ALPHA_SATURATE,[Wv]:n.DST_COLOR,[Vv]:n.DST_ALPHA,[kv]:n.ONE_MINUS_SRC_COLOR,[Ys]:n.ONE_MINUS_SRC_ALPHA,[Xv]:n.ONE_MINUS_DST_COLOR,[Hv]:n.ONE_MINUS_DST_ALPHA,[jv]:n.CONSTANT_COLOR,[Yv]:n.ONE_MINUS_CONSTANT_COLOR,[$v]:n.CONSTANT_ALPHA,[Kv]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(ee,be,Se,Re,Ue,Ye,qe,Je,yt,$e){if(ee===Wn){h===!0&&(pe(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),ee!==Uv){if(ee!==E||$e!==A){if((S!==ii||U!==ii)&&(n.blendEquation(n.FUNC_ADD),S=ii,U=ii),$e)switch(ee){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}else switch(ee){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}C=null,F=null,P=null,I=null,V.set(0,0,0),y=0,E=ee,A=$e}return}Ue=Ue||be,Ye=Ye||Se,qe=qe||Re,(be!==S||Ue!==U)&&(n.blendEquationSeparate(O[be],O[Ue]),S=be,U=Ue),(Se!==C||Re!==F||Ye!==P||qe!==I)&&(n.blendFuncSeparate(q[Se],q[Re],q[Ye],q[qe]),C=Se,F=Re,P=Ye,I=qe),(Je.equals(V)===!1||yt!==y)&&(n.blendColor(Je.r,Je.g,Je.b,yt),V.copy(Je),y=yt),E=ee,A=!1}function N(ee,be){ee.side===Cn?pe(n.CULL_FACE):ce(n.CULL_FACE);let Se=ee.side===Bt;be&&(Se=!Se),j(Se),ee.blending===Vi&&ee.transparent===!1?Z(Wn):Z(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),l.setFunc(ee.depthFunc),l.setTest(ee.depthTest),l.setMask(ee.depthWrite),o.setMask(ee.colorWrite);const Re=ee.stencilWrite;u.setTest(Re),Re&&(u.setMask(ee.stencilWriteMask),u.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),u.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),T(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(ee){z!==ee&&(ee?n.frontFace(n.CW):n.frontFace(n.CCW),z=ee)}function g(ee){ee!==Dv?(ce(n.CULL_FACE),ee!==R&&(ee===ru?n.cullFace(n.BACK):ee===Ov?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),R=ee}function _(ee){ee!==w&&(D&&n.lineWidth(ee),w=ee)}function T(ee,be,Se){ee?(ce(n.POLYGON_OFFSET_FILL),(H!==be||W!==Se)&&(n.polygonOffset(be,Se),H=be,W=Se)):pe(n.POLYGON_OFFSET_FILL)}function G(ee){ee?ce(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function K(ee){ee===void 0&&(ee=n.TEXTURE0+M-1),X!==ee&&(n.activeTexture(ee),X=ee)}function J(ee,be,Se){Se===void 0&&(X===null?Se=n.TEXTURE0+M-1:Se=X);let Re=ie[Se];Re===void 0&&(Re={type:void 0,texture:void 0},ie[Se]=Re),(Re.type!==ee||Re.texture!==be)&&(X!==Se&&(n.activeTexture(Se),X=Se),n.bindTexture(ee,be||se[ee]),Re.type=ee,Re.texture=be)}function le(){const ee=ie[X];ee!==void 0&&ee.type!==void 0&&(n.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ye(){try{n.texSubImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Be(ee){re.equals(ee)===!1&&(n.scissor(ee.x,ee.y,ee.z,ee.w),re.copy(ee))}function ne(ee){de.equals(ee)===!1&&(n.viewport(ee.x,ee.y,ee.z,ee.w),de.copy(ee))}function Me(ee,be){let Se=p.get(be);Se===void 0&&(Se=new WeakMap,p.set(be,Se));let Re=Se.get(ee);Re===void 0&&(Re=n.getUniformBlockIndex(be,ee.name),Se.set(ee,Re))}function Te(ee,be){const Re=p.get(be).get(ee);c.get(be)!==Re&&(n.uniformBlockBinding(be,Re,ee.__bindingPointIndex),c.set(be,Re))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},X=null,ie={},v={},m=new WeakMap,x=[],f=null,h=!1,E=null,S=null,C=null,F=null,U=null,P=null,I=null,V=new je(0,0,0),y=0,A=!1,z=null,R=null,w=null,H=null,W=null,re.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ce,disable:pe,bindFramebuffer:Y,drawBuffers:b,useProgram:k,setBlending:Z,setMaterial:N,setFlipSided:j,setCullFace:g,setLineWidth:_,setPolygonOffset:T,setScissorTest:G,activeTexture:K,bindTexture:J,unbindTexture:le,compressedTexImage2D:ue,compressedTexImage3D:he,texImage2D:we,texImage3D:Ce,updateUBOMapping:Me,uniformBlockBinding:Te,texStorage2D:Ie,texStorage3D:Ne,texSubImage2D:ye,texSubImage3D:xe,compressedTexSubImage2D:ve,compressedTexSubImage3D:De,scissor:Be,viewport:ne,reset:Le}}function kS(n,e,t,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(g){}function m(g,_){return v?new OffscreenCanvas(g,_):Cr("canvas")}function x(g,_,T,G){let K=1;if((g.width>G||g.height>G)&&(K=G/Math.max(g.width,g.height)),K<1||_===!0)if(typeof HTMLImageElement!="undefined"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&g instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&g instanceof ImageBitmap){const J=_?Ga:Math.floor,le=J(K*g.width),ue=J(K*g.height);p===void 0&&(p=m(le,ue));const he=T?m(le,ue):p;return he.width=le,he.height=ue,he.getContext("2d").drawImage(g,0,0,le,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+g.width+"x"+g.height+") to ("+le+"x"+ue+")."),he}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+g.width+"x"+g.height+")."),g;return g}function f(g){return tl(g.width)&&tl(g.height)}function h(g){return o?!1:g.wrapS!==tn||g.wrapT!==tn||g.minFilter!==Ot&&g.minFilter!==It}function E(g,_){return g.generateMipmaps&&_&&g.minFilter!==Ot&&g.minFilter!==It}function S(g){n.generateMipmap(g)}function C(g,_,T,G,K=!1){if(o===!1)return _;if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let J=_;if(_===n.RED&&(T===n.FLOAT&&(J=n.R32F),T===n.HALF_FLOAT&&(J=n.R16F),T===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(T===n.UNSIGNED_BYTE&&(J=n.R8UI),T===n.UNSIGNED_SHORT&&(J=n.R16UI),T===n.UNSIGNED_INT&&(J=n.R32UI),T===n.BYTE&&(J=n.R8I),T===n.SHORT&&(J=n.R16I),T===n.INT&&(J=n.R32I)),_===n.RG&&(T===n.FLOAT&&(J=n.RG32F),T===n.HALF_FLOAT&&(J=n.RG16F),T===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RGBA){const le=K?Ua:Ze.getTransfer(G);T===n.FLOAT&&(J=n.RGBA32F),T===n.HALF_FLOAT&&(J=n.RGBA16F),T===n.UNSIGNED_BYTE&&(J=le===et?n.SRGB8_ALPHA8:n.RGBA8),T===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),T===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function F(g,_,T){return E(g,T)===!0||g.isFramebufferTexture&&g.minFilter!==Ot&&g.minFilter!==It?Math.log2(Math.max(_.width,_.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?_.mipmaps.length:1}function U(g){return g===Ot||g===cu||g===er?n.NEAREST:n.LINEAR}function P(g){const _=g.target;_.removeEventListener("dispose",P),V(_),_.isVideoTexture&&c.delete(_)}function I(g){const _=g.target;_.removeEventListener("dispose",I),A(_)}function V(g){const _=i.get(g);if(_.__webglInit===void 0)return;const T=g.source,G=d.get(T);if(G){const K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(g),Object.keys(G).length===0&&d.delete(T)}i.remove(g)}function y(g){const _=i.get(g);n.deleteTexture(_.__webglTexture);const T=g.source,G=d.get(T);delete G[_.__cacheKey],s.memory.textures--}function A(g){const _=g.texture,T=i.get(g),G=i.get(_);if(G.__webglTexture!==void 0&&(n.deleteTexture(G.__webglTexture),s.memory.textures--),g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let J=0;J<T.__webglFramebuffer[K].length;J++)n.deleteFramebuffer(T.__webglFramebuffer[K][J]);else n.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)n.deleteFramebuffer(T.__webglFramebuffer[K]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}if(g.isWebGLMultipleRenderTargets)for(let K=0,J=_.length;K<J;K++){const le=i.get(_[K]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),s.memory.textures--),i.remove(_[K])}i.remove(_),i.remove(g)}let z=0;function R(){z=0}function w(){const g=z;return g>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),z+=1,g}function H(g){const _=[];return _.push(g.wrapS),_.push(g.wrapT),_.push(g.wrapR||0),_.push(g.magFilter),_.push(g.minFilter),_.push(g.anisotropy),_.push(g.internalFormat),_.push(g.format),_.push(g.type),_.push(g.generateMipmaps),_.push(g.premultiplyAlpha),_.push(g.flipY),_.push(g.unpackAlignment),_.push(g.colorSpace),_.join()}function W(g,_){const T=i.get(g);if(g.isVideoTexture&&N(g),g.isRenderTargetTexture===!1&&g.version>0&&T.__version!==g.version){const G=g.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(T,g,_);return}}t.bindTexture(n.TEXTURE_2D,T.__webglTexture,n.TEXTURE0+_)}function M(g,_){const T=i.get(g);if(g.version>0&&T.__version!==g.version){re(T,g,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,T.__webglTexture,n.TEXTURE0+_)}function D(g,_){const T=i.get(g);if(g.version>0&&T.__version!==g.version){re(T,g,_);return}t.bindTexture(n.TEXTURE_3D,T.__webglTexture,n.TEXTURE0+_)}function L(g,_){const T=i.get(g);if(g.version>0&&T.__version!==g.version){de(T,g,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+_)}const B={[Zs]:n.REPEAT,[tn]:n.CLAMP_TO_EDGE,[Js]:n.MIRRORED_REPEAT},X={[Ot]:n.NEAREST,[cu]:n.NEAREST_MIPMAP_NEAREST,[er]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[ho]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},ie={[Mg]:n.NEVER,[wg]:n.ALWAYS,[Eg]:n.LESS,[Kh]:n.LEQUAL,[Ag]:n.EQUAL,[Pg]:n.GEQUAL,[Tg]:n.GREATER,[Cg]:n.NOTEQUAL};function ae(g,_,T){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===It||_.magFilter===ho||_.magFilter===er||_.magFilter===oi||_.minFilter===It||_.minFilter===ho||_.minFilter===er||_.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),T?(n.texParameteri(g,n.TEXTURE_WRAP_S,B[_.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,B[_.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,B[_.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,X[_.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,X[_.minFilter])):(n.texParameteri(g,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(g,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==tn||_.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(g,n.TEXTURE_MAG_FILTER,U(_.magFilter)),n.texParameteri(g,n.TEXTURE_MIN_FILTER,U(_.minFilter)),_.minFilter!==Ot&&_.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ot||_.minFilter!==er&&_.minFilter!==oi||_.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(g,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Q(g,_){let T=!1;g.__webglInit===void 0&&(g.__webglInit=!0,_.addEventListener("dispose",P));const G=_.source;let K=d.get(G);K===void 0&&(K={},d.set(G,K));const J=H(_);if(J!==g.__cacheKey){K[J]===void 0&&(K[J]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,T=!0),K[J].usedTimes++;const le=K[g.__cacheKey];le!==void 0&&(K[g.__cacheKey].usedTimes--,le.usedTimes===0&&y(_)),g.__cacheKey=J,g.__webglTexture=K[J].texture}return T}function re(g,_,T){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const K=Q(g,_),J=_.source;t.bindTexture(G,g.__webglTexture,n.TEXTURE0+T);const le=i.get(J);if(J.version!==le.__version||K===!0){t.activeTexture(n.TEXTURE0+T);const ue=Ze.getPrimaries(Ze.workingColorSpace),he=_.colorSpace===Yt?null:Ze.getPrimaries(_.colorSpace),ye=_.colorSpace===Yt||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const xe=h(_)&&f(_.image)===!1;let ve=x(_.image,xe,!1,r.maxTextureSize);ve=j(_,ve);const De=f(ve)||o,Ie=a.convert(_.format,_.colorSpace);let Ne=a.convert(_.type),we=C(_.internalFormat,Ie,Ne,_.colorSpace,_.isVideoTexture);ae(G,_,De);let Ce;const Be=_.mipmaps,ne=o&&_.isVideoTexture!==!0&&we!==Yh,Me=le.__version===void 0||K===!0,Te=J.dataReady,Le=F(_,ve,De);if(_.isDepthTexture)we=n.DEPTH_COMPONENT,o?_.type===Pn?we=n.DEPTH_COMPONENT32F:_.type===kn?we=n.DEPTH_COMPONENT24:_.type===si?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:_.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===li&&we===n.DEPTH_COMPONENT&&_.type!==_l&&_.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=kn,Ne=a.convert(_.type)),_.format===ji&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,_.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=si,Ne=a.convert(_.type))),Me&&(ne?t.texStorage2D(n.TEXTURE_2D,1,we,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,we,ve.width,ve.height,0,Ie,Ne,null));else if(_.isDataTexture)if(Be.length>0&&De){ne&&Me&&t.texStorage2D(n.TEXTURE_2D,Le,we,Be[0].width,Be[0].height);for(let ee=0,be=Be.length;ee<be;ee++)Ce=Be[ee],ne?Te&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ce.width,Ce.height,Ie,Ne,Ce.data):t.texImage2D(n.TEXTURE_2D,ee,we,Ce.width,Ce.height,0,Ie,Ne,Ce.data);_.generateMipmaps=!1}else ne?(Me&&t.texStorage2D(n.TEXTURE_2D,Le,we,ve.width,ve.height),Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,Ie,Ne,ve.data)):t.texImage2D(n.TEXTURE_2D,0,we,ve.width,ve.height,0,Ie,Ne,ve.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ne&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,we,Be[0].width,Be[0].height,ve.depth);for(let ee=0,be=Be.length;ee<be;ee++)Ce=Be[ee],_.format!==nn?Ie!==null?ne?Te&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ce.width,Ce.height,ve.depth,Ie,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,we,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ce.width,Ce.height,ve.depth,Ie,Ne,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,we,Ce.width,Ce.height,ve.depth,0,Ie,Ne,Ce.data)}else{ne&&Me&&t.texStorage2D(n.TEXTURE_2D,Le,we,Be[0].width,Be[0].height);for(let ee=0,be=Be.length;ee<be;ee++)Ce=Be[ee],_.format!==nn?Ie!==null?ne?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Te&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ce.width,Ce.height,Ie,Ne,Ce.data):t.texImage2D(n.TEXTURE_2D,ee,we,Ce.width,Ce.height,0,Ie,Ne,Ce.data)}else if(_.isDataArrayTexture)ne?(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,we,ve.width,ve.height,ve.depth),Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ie,Ne,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ve.width,ve.height,ve.depth,0,Ie,Ne,ve.data);else if(_.isData3DTexture)ne?(Me&&t.texStorage3D(n.TEXTURE_3D,Le,we,ve.width,ve.height,ve.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ie,Ne,ve.data)):t.texImage3D(n.TEXTURE_3D,0,we,ve.width,ve.height,ve.depth,0,Ie,Ne,ve.data);else if(_.isFramebufferTexture){if(Me)if(ne)t.texStorage2D(n.TEXTURE_2D,Le,we,ve.width,ve.height);else{let ee=ve.width,be=ve.height;for(let Se=0;Se<Le;Se++)t.texImage2D(n.TEXTURE_2D,Se,we,ee,be,0,Ie,Ne,null),ee>>=1,be>>=1}}else if(Be.length>0&&De){ne&&Me&&t.texStorage2D(n.TEXTURE_2D,Le,we,Be[0].width,Be[0].height);for(let ee=0,be=Be.length;ee<be;ee++)Ce=Be[ee],ne?Te&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ie,Ne,Ce):t.texImage2D(n.TEXTURE_2D,ee,we,Ie,Ne,Ce);_.generateMipmaps=!1}else ne?(Me&&t.texStorage2D(n.TEXTURE_2D,Le,we,ve.width,ve.height),Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,Ne,ve)):t.texImage2D(n.TEXTURE_2D,0,we,Ie,Ne,ve);E(_,De)&&S(G),le.__version=J.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function de(g,_,T){if(_.image.length!==6)return;const G=Q(g,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+T);const J=i.get(K);if(K.version!==J.__version||G===!0){t.activeTexture(n.TEXTURE0+T);const le=Ze.getPrimaries(Ze.workingColorSpace),ue=_.colorSpace===Yt?null:Ze.getPrimaries(_.colorSpace),he=_.colorSpace===Yt||le===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ye=_.isCompressedTexture||_.image[0].isCompressedTexture,xe=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!ye&&!xe?ve[ee]=x(_.image[ee],!1,!0,r.maxCubemapSize):ve[ee]=xe?_.image[ee].image:_.image[ee],ve[ee]=j(_,ve[ee]);const De=ve[0],Ie=f(De)||o,Ne=a.convert(_.format,_.colorSpace),we=a.convert(_.type),Ce=C(_.internalFormat,Ne,we,_.colorSpace),Be=o&&_.isVideoTexture!==!0,ne=J.__version===void 0||G===!0,Me=K.dataReady;let Te=F(_,De,Ie);ae(n.TEXTURE_CUBE_MAP,_,Ie);let Le;if(ye){Be&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ce,De.width,De.height);for(let ee=0;ee<6;ee++){Le=ve[ee].mipmaps;for(let be=0;be<Le.length;be++){const Se=Le[be];_.format!==nn?Ne!==null?Be?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,Se.width,Se.height,Ne,we,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Ce,Se.width,Se.height,0,Ne,we,Se.data)}}}else{Le=_.mipmaps,Be&&ne&&(Le.length>0&&Te++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ce,ve[0].width,ve[0].height));for(let ee=0;ee<6;ee++)if(xe){Be?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Ne,we,ve[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ce,ve[ee].width,ve[ee].height,0,Ne,we,ve[ee].data);for(let be=0;be<Le.length;be++){const Re=Le[be].image[ee].image;Be?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Re.width,Re.height,Ne,we,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Ce,Re.width,Re.height,0,Ne,we,Re.data)}}else{Be?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,we,ve[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ce,Ne,we,ve[ee]);for(let be=0;be<Le.length;be++){const Se=Le[be];Be?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Ne,we,Se.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Ce,Ne,we,Se.image[ee])}}}E(_,Ie)&&S(n.TEXTURE_CUBE_MAP),J.__version=K.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function te(g,_,T,G,K,J){const le=a.convert(T.format,T.colorSpace),ue=a.convert(T.type),he=C(T.internalFormat,le,ue,T.colorSpace);if(!i.get(_).__hasExternalTextures){const xe=Math.max(1,_.width>>J),ve=Math.max(1,_.height>>J);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,J,he,xe,ve,_.depth,0,le,ue,null):t.texImage2D(K,J,he,xe,ve,0,le,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,g),Z(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,i.get(T).__webglTexture,0,q(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,i.get(T).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(g,_,T){if(n.bindRenderbuffer(n.RENDERBUFFER,g),_.depthBuffer&&!_.stencilBuffer){let G=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(T||Z(_)){const K=_.depthTexture;K&&K.isDepthTexture&&(K.type===Pn?G=n.DEPTH_COMPONENT32F:K.type===kn&&(G=n.DEPTH_COMPONENT24));const J=q(_);Z(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,G,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,G,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,g)}else if(_.depthBuffer&&_.stencilBuffer){const G=q(_);T&&Z(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,_.width,_.height):Z(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,g)}else{const G=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let K=0;K<G.length;K++){const J=G[K],le=a.convert(J.format,J.colorSpace),ue=a.convert(J.type),he=C(J.internalFormat,le,ue,J.colorSpace),ye=q(_);T&&Z(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,he,_.width,_.height):Z(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,he,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,he,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(g,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,g),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const G=i.get(_.depthTexture).__webglTexture,K=q(_);if(_.depthTexture.format===li)Z(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(_.depthTexture.format===ji)Z(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function pe(g){const _=i.get(g),T=g.isWebGLCubeRenderTarget===!0;if(g.depthTexture&&!_.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");ce(_.__webglFramebuffer,g)}else if(T){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]=n.createRenderbuffer(),se(_.__webglDepthbuffer[G],g,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),se(_.__webglDepthbuffer,g,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(g,_,T){const G=i.get(g);_!==void 0&&te(G.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),T!==void 0&&pe(g)}function b(g){const _=g.texture,T=i.get(g),G=i.get(_);g.addEventListener("dispose",I),g.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,s.memory.textures++);const K=g.isWebGLCubeRenderTarget===!0,J=g.isWebGLMultipleRenderTargets===!0,le=f(g)||o;if(K){T.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&_.mipmaps&&_.mipmaps.length>0){T.__webglFramebuffer[ue]=[];for(let he=0;he<_.mipmaps.length;he++)T.__webglFramebuffer[ue][he]=n.createFramebuffer()}else T.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){T.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)T.__webglFramebuffer[ue]=n.createFramebuffer()}else T.__webglFramebuffer=n.createFramebuffer();if(J)if(r.drawBuffers){const ue=g.texture;for(let he=0,ye=ue.length;he<ye;he++){const xe=i.get(ue[he]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&g.samples>0&&Z(g)===!1){const ue=J?_:[_];T.__webglMultisampledFramebuffer=n.createFramebuffer(),T.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let he=0;he<ue.length;he++){const ye=ue[he];T.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,T.__webglColorRenderbuffer[he]);const xe=a.convert(ye.format,ye.colorSpace),ve=a.convert(ye.type),De=C(ye.internalFormat,xe,ve,ye.colorSpace,g.isXRRenderTarget===!0),Ie=q(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,De,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,T.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(T.__webglDepthRenderbuffer=n.createRenderbuffer(),se(T.__webglDepthRenderbuffer,g,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ae(n.TEXTURE_CUBE_MAP,_,le);for(let ue=0;ue<6;ue++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)te(T.__webglFramebuffer[ue][he],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else te(T.__webglFramebuffer[ue],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);E(_,le)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ue=g.texture;for(let he=0,ye=ue.length;he<ye;he++){const xe=ue[he],ve=i.get(xe);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),ae(n.TEXTURE_2D,xe,le),te(T.__webglFramebuffer,g,xe,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),E(xe,le)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(o?ue=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,G.__webglTexture),ae(ue,_,le),o&&_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)te(T.__webglFramebuffer[he],g,_,n.COLOR_ATTACHMENT0,ue,he);else te(T.__webglFramebuffer,g,_,n.COLOR_ATTACHMENT0,ue,0);E(_,le)&&S(ue),t.unbindTexture()}g.depthBuffer&&pe(g)}function k(g){const _=f(g)||o,T=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let G=0,K=T.length;G<K;G++){const J=T[G];if(E(J,_)){const le=g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(J).__webglTexture;t.bindTexture(le,ue),S(le),t.unbindTexture()}}}function O(g){if(o&&g.samples>0&&Z(g)===!1){const _=g.isWebGLMultipleRenderTargets?g.texture:[g.texture],T=g.width,G=g.height;let K=n.COLOR_BUFFER_BIT;const J=[],le=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(g),he=g.isWebGLMultipleRenderTargets===!0;if(he)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){J.push(n.COLOR_ATTACHMENT0+ye),g.depthBuffer&&J.push(le);const xe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(xe===!1&&(g.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]),xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[le]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[le])),he){const ve=i.get(_[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,T,G,0,0,T,G,K,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]);const xe=i.get(_[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function q(g){return Math.min(r.maxSamples,g.samples)}function Z(g){const _=i.get(g);return o&&g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(g){const _=s.render.frame;c.get(g)!==_&&(c.set(g,_),g.update())}function j(g,_){const T=g.colorSpace,G=g.format,K=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||g.format===el||T!==Ln&&T!==Yt&&(Ze.getTransfer(T)===et?o===!1?e.has("EXT_sRGB")===!0&&G===nn?(g.format=el,g.minFilter=It,g.generateMipmaps=!1):_=Qh.sRGBToLinear(_):(G!==nn||K!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),_}this.allocateTextureUnit=w,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=M,this.setTexture3D=D,this.setTextureCube=L,this.rebindTextures=Y,this.setupRenderTarget=b,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Z}function VS(n,e,t){const i=t.isWebGL2;function r(a,s=Yt){let o;const l=Ze.getTransfer(s);if(a===qn)return n.UNSIGNED_BYTE;if(a===Hh)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(a===hg)return n.BYTE;if(a===dg)return n.SHORT;if(a===_l)return n.UNSIGNED_SHORT;if(a===Vh)return n.INT;if(a===kn)return n.UNSIGNED_INT;if(a===Pn)return n.FLOAT;if(a===Ar)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===pg)return n.ALPHA;if(a===nn)return n.RGBA;if(a===mg)return n.LUMINANCE;if(a===vg)return n.LUMINANCE_ALPHA;if(a===li)return n.DEPTH_COMPONENT;if(a===ji)return n.DEPTH_STENCIL;if(a===el)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===gg)return n.RED;if(a===Xh)return n.RED_INTEGER;if(a===_g)return n.RG;if(a===qh)return n.RG_INTEGER;if(a===jh)return n.RGBA_INTEGER;if(a===po||a===mo||a===vo||a===go)if(l===et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===go)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fu||a===hu||a===du||a===pu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===fu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===hu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===mu||a===vu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===mu)return l===et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===vu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===gu||a===_u||a===yu||a===xu||a===Su||a===bu||a===Mu||a===Eu||a===Au||a===Tu||a===Cu||a===Pu||a===wu||a===Lu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===gu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===_u)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===yu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===xu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Su)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===bu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Mu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Eu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Au)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Tu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Cu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Pu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===wu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lu)return l===et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_o||a===Ru||a===Du)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===_o)return l===et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Du)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===yg||a===Ou||a===Nu||a===Uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===_o)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ou)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Nu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===si?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class HS extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ua extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WS={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,i),h=this._getHandJoint(u,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=c.position.distanceTo(p.position),v=.02,m=.005;u.inputState.pinching&&d>v+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=v-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Rn({extensions:{fragDepth:!0},vertexShader:XS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new dn(new Ya(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class YS extends gi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,u=null,c=null,p=null,d=null,v=null,m=null;const x=new jS,f=t.getContextAttributes();let h=null,E=null;const S=[],C=[],F=new Ee;let U=null;const P=new en;P.layers.enable(1),P.viewport=new lt;const I=new en;I.layers.enable(2),I.viewport=new lt;const V=[P,I],y=new HS;y.layers.enable(1),y.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=S[Q];return re===void 0&&(re=new ko,S[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=S[Q];return re===void 0&&(re=new ko,S[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=S[Q];return re===void 0&&(re=new ko,S[Q]=re),re.getHandSpace()};function R(Q){const re=C.indexOf(Q.inputSource);if(re===-1)return;const de=S[re];de!==void 0&&(de.update(Q.inputSource,Q.frame,u||s),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function w(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",w),r.removeEventListener("inputsourceschange",H);for(let Q=0;Q<S.length;Q++){const re=C[Q];re!==null&&(C[Q]=null,S[Q].disconnect(re))}A=null,z=null,x.reset(),e.setRenderTarget(h),v=null,d=null,p=null,r=null,E=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return d!==null?d:v},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=function(Q){return Hl(this,null,function*(){if(r=Q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",w),r.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&(yield t.makeXRCompatible()),U=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),E=new hi(v.framebufferWidth,v.framebufferHeight,{format:nn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let re=null,de=null,te=null;f.depth&&(te=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=f.stencil?ji:li,de=f.stencil?si:kn);const se={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:a};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new hi(d.textureWidth,d.textureHeight,{format:nn,type:qn,depthTexture:new fd(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const ce=e.properties.get(E);ce.__ignoreDepthValues=d.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=yield r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(Q){for(let re=0;re<Q.removed.length;re++){const de=Q.removed[re],te=C.indexOf(de);te>=0&&(C[te]=null,S[te].disconnect(de))}for(let re=0;re<Q.added.length;re++){const de=Q.added[re];let te=C.indexOf(de);if(te===-1){for(let ce=0;ce<S.length;ce++)if(ce>=C.length){C.push(de),te=ce;break}else if(C[ce]===null){C[ce]=de,te=ce;break}if(te===-1)break}const se=S[te];se&&se.connect(de)}}const W=new oe,M=new oe;function D(Q,re,de){W.setFromMatrixPosition(re.matrixWorld),M.setFromMatrixPosition(de.matrixWorld);const te=W.distanceTo(M),se=re.projectionMatrix.elements,ce=de.projectionMatrix.elements,pe=se[14]/(se[10]-1),Y=se[14]/(se[10]+1),b=(se[9]+1)/se[5],k=(se[9]-1)/se[5],O=(se[8]-1)/se[0],q=(ce[8]+1)/ce[0],Z=pe*O,N=pe*q,j=te/(-O+q),g=j*-O;re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(g),Q.translateZ(j),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const _=pe+j,T=Y+j,G=Z-g,K=N+(te-g),J=b*Y/T*_,le=k*Y/T*_;Q.projectionMatrix.makePerspective(G,K,J,le,_,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function L(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;x.texture!==null&&(Q.near=x.depthNear,Q.far=x.depthFar),y.near=I.near=P.near=Q.near,y.far=I.far=P.far=Q.far,(A!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,z=y.far,P.near=A,P.far=z,I.near=A,I.far=z,P.updateProjectionMatrix(),I.updateProjectionMatrix(),Q.updateProjectionMatrix());const re=Q.parent,de=y.cameras;L(y,re);for(let te=0;te<de.length;te++)L(de[te],re);de.length===2?D(y,P,I):y.projectionMatrix.copy(P.projectionMatrix),B(Q,y,re)};function B(Q,re,de){de===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Tr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&v===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null};let X=null;function ie(Q,re){if(c=re.getViewerPose(u||s),m=re,c!==null){const de=c.views;v!==null&&(e.setRenderTargetFramebuffer(E,v.framebuffer),e.setRenderTarget(E));let te=!1;de.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let ce=0;ce<de.length;ce++){const pe=de[ce];let Y=null;if(v!==null)Y=v.getViewport(pe);else{const k=p.getViewSubImage(d,pe);Y=k.viewport,ce===0&&(e.setRenderTargetTextures(E,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(E))}let b=V[ce];b===void 0&&(b=new en,b.layers.enable(ce),b.viewport=new lt,V[ce]=b),b.matrix.fromArray(pe.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(pe.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(Y.x,Y.y,Y.width,Y.height),ce===0&&(y.matrix.copy(b.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push(b)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const ce=p.getDepthInformation(de[0]);ce&&ce.isValid&&ce.texture&&x.init(e,ce,r.renderState)}}for(let de=0;de<S.length;de++){const te=C[de],se=S[de];te!==null&&se!==void 0&&se.update(te,re,u||s)}x.render(e,y),X&&X(Q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const ae=new ud;ae.setAnimationLoop(ie),this.setAnimationLoop=function(Q){X=Q},this.dispose=function(){}}}function $S(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,od(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,E,S,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(f,h):h.isMeshToonMaterial?(a(f,h),p(f,h)):h.isMeshPhongMaterial?(a(f,h),c(f,h)):h.isMeshStandardMaterial?(a(f,h),d(f,h),h.isMeshPhysicalMaterial&&v(f,h,C)):h.isMeshMatcapMaterial?(a(f,h),m(f,h)):h.isMeshDepthMaterial?a(f,h):h.isMeshDistanceMaterial?(a(f,h),x(f,h)):h.isMeshNormalMaterial?a(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,E,S):h.isSpriteMaterial?u(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Bt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Bt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,E,S){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*E,f.scale.value=S*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function v(f,h,E){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){const E=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KS(n,e,t,i){let r={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,S){const C=S.program;i.uniformBlockBinding(E,C)}function u(E,S){let C=r[E.id];C===void 0&&(m(E),C=c(E),r[E.id]=C,E.addEventListener("dispose",f));const F=S.program;i.updateUBOMapping(E,F);const U=e.render.frame;a[E.id]!==U&&(d(E),a[E.id]=U)}function c(E){const S=p();E.__bindingPointIndex=S;const C=n.createBuffer(),F=E.__size,U=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,F,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,C),C}function p(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],C=E.uniforms,F=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let U=0,P=C.length;U<P;U++){const I=Array.isArray(C[U])?C[U]:[C[U]];for(let V=0,y=I.length;V<y;V++){const A=I[V];if(v(A,U,V,F)===!0){const z=A.__offset,R=Array.isArray(A.value)?A.value:[A.value];let w=0;for(let H=0;H<R.length;H++){const W=R[H],M=x(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+w,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,w),w+=M.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(E,S,C,F){const U=E.value,P=S+"_"+C;if(F[P]===void 0)return typeof U=="number"||typeof U=="boolean"?F[P]=U:F[P]=U.clone(),!0;{const I=F[P];if(typeof U=="number"||typeof U=="boolean"){if(I!==U)return F[P]=U,!0}else if(I.equals(U)===!1)return I.copy(U),!0}return!1}function m(E){const S=E.uniforms;let C=0;const F=16;for(let P=0,I=S.length;P<I;P++){const V=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,A=V.length;y<A;y++){const z=V[y],R=Array.isArray(z.value)?z.value:[z.value];for(let w=0,H=R.length;w<H;w++){const W=R[w],M=x(W),D=C%F;D!==0&&F-D<M.boundary&&(C+=F-D),z.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=C,C+=M.storage}}}const U=C%F;return U>0&&(C+=F-U),E.__size=C,E.__cache={},this}function x(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function f(E){const S=E.target;S.removeEventListener("dispose",f);const C=s.indexOf(S.__bindingPointIndex);s.splice(C,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);s=[],r={},a={}}return{bind:l,update:u,dispose:h}}class ZS{constructor(e={}){const{canvas:t=Wg(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const v=new Uint32Array(4),m=new Int32Array(4);let x=null,f=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const S=this;let C=!1,F=0,U=0,P=null,I=-1,V=null;const y=new lt,A=new lt;let z=null;const R=new je(0);let w=0,H=t.width,W=t.height,M=1,D=null,L=null;const B=new lt(0,0,H,W),X=new lt(0,0,H,W);let ie=!1;const ae=new Al;let Q=!1,re=!1,de=null;const te=new rt,se=new Ee,ce=new oe,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return P===null?M:1}let b=i;function k($,fe){for(let ge=0;ge<$.length;ge++){const _e=$[ge],me=t.getContext(_e,fe);if(me!==null)return me}return null}try{const $={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),b===null){const fe=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&fe.shift(),b=k(fe,$),b===null)throw k(fe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&b instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch($){throw console.error("THREE.WebGLRenderer: "+$.message),$}let O,q,Z,N,j,g,_,T,G,K,J,le,ue,he,ye,xe,ve,De,Ie,Ne,we,Ce,Be,ne;function Me(){O=new ix(b),q=new Zy(b,O,e),O.init(q),Ce=new VS(b,O,q),Z=new zS(b,O,q),N=new ox(b),j=new TS,g=new kS(b,O,Z,j,q,Ce,N),_=new Qy(S),T=new nx(S),G=new p_(b,q),Be=new $y(b,O,G,q),K=new rx(b,G,N,Be),J=new cx(b,K,G,N),Ie=new ux(b,q,g),xe=new Jy(j),le=new AS(S,_,T,O,q,Be,xe),ue=new $S(S,j),he=new PS,ye=new NS(O,q),De=new Yy(S,_,T,Z,J,d,l),ve=new GS(S,J,q),ne=new KS(b,N,q,Z),Ne=new Ky(b,O,N,q),we=new ax(b,O,N,q),N.programs=le.programs,S.capabilities=q,S.extensions=O,S.properties=j,S.renderLists=he,S.shadowMap=ve,S.state=Z,S.info=N}Me();const Te=new YS(S,b);this.xr=Te,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const $=O.get("WEBGL_lose_context");$&&$.loseContext()},this.forceContextRestore=function(){const $=O.get("WEBGL_lose_context");$&&$.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function($){$!==void 0&&(M=$,this.setSize(H,W,!1))},this.getSize=function($){return $.set(H,W)},this.setSize=function($,fe,ge=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=$,W=fe,t.width=Math.floor($*M),t.height=Math.floor(fe*M),ge===!0&&(t.style.width=$+"px",t.style.height=fe+"px"),this.setViewport(0,0,$,fe)},this.getDrawingBufferSize=function($){return $.set(H*M,W*M).floor()},this.setDrawingBufferSize=function($,fe,ge){H=$,W=fe,M=ge,t.width=Math.floor($*ge),t.height=Math.floor(fe*ge),this.setViewport(0,0,$,fe)},this.getCurrentViewport=function($){return $.copy(y)},this.getViewport=function($){return $.copy(B)},this.setViewport=function($,fe,ge,_e){$.isVector4?B.set($.x,$.y,$.z,$.w):B.set($,fe,ge,_e),Z.viewport(y.copy(B).multiplyScalar(M).floor())},this.getScissor=function($){return $.copy(X)},this.setScissor=function($,fe,ge,_e){$.isVector4?X.set($.x,$.y,$.z,$.w):X.set($,fe,ge,_e),Z.scissor(A.copy(X).multiplyScalar(M).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function($){Z.setScissorTest(ie=$)},this.setOpaqueSort=function($){D=$},this.setTransparentSort=function($){L=$},this.getClearColor=function($){return $.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function($=!0,fe=!0,ge=!0){let _e=0;if($){let me=!1;if(P!==null){const Pe=P.texture.format;me=Pe===jh||Pe===qh||Pe===Xh}if(me){const Pe=P.texture.type,Oe=Pe===qn||Pe===kn||Pe===_l||Pe===si||Pe===Hh||Pe===Wh,Fe=De.getClearColor(),Ge=De.getClearAlpha(),He=Fe.r,ze=Fe.g,ke=Fe.b;Oe?(v[0]=He,v[1]=ze,v[2]=ke,v[3]=Ge,b.clearBufferuiv(b.COLOR,0,v)):(m[0]=He,m[1]=ze,m[2]=ke,m[3]=Ge,b.clearBufferiv(b.COLOR,0,m))}else _e|=b.COLOR_BUFFER_BIT}fe&&(_e|=b.DEPTH_BUFFER_BIT),ge&&(_e|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(_e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),he.dispose(),ye.dispose(),j.dispose(),_.dispose(),T.dispose(),J.dispose(),Be.dispose(),ne.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",yt),Te.removeEventListener("sessionend",$e),de&&(de.dispose(),de=null),ut.stop()};function Le($){$.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const $=N.autoReset,fe=ve.enabled,ge=ve.autoUpdate,_e=ve.needsUpdate,me=ve.type;Me(),N.autoReset=$,ve.enabled=fe,ve.autoUpdate=ge,ve.needsUpdate=_e,ve.type=me}function be($){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",$.statusMessage)}function Se($){const fe=$.target;fe.removeEventListener("dispose",Se),Re(fe)}function Re($){Ue($),j.remove($)}function Ue($){const fe=j.get($).programs;fe!==void 0&&(fe.forEach(function(ge){le.releaseProgram(ge)}),$.isShaderMaterial&&le.releaseShaderCache($))}this.renderBufferDirect=function($,fe,ge,_e,me,Pe){fe===null&&(fe=pe);const Oe=me.isMesh&&me.matrixWorld.determinant()<0,Fe=Wd($,fe,ge,_e,me);Z.setMaterial(_e,Oe);let Ge=ge.index,He=1;if(_e.wireframe===!0){if(Ge=K.getWireframeAttribute(ge),Ge===void 0)return;He=2}const ze=ge.drawRange,ke=ge.attributes.position;let ct=ze.start*He,zt=(ze.start+ze.count)*He;Pe!==null&&(ct=Math.max(ct,Pe.start*He),zt=Math.min(zt,(Pe.start+Pe.count)*He)),Ge!==null?(ct=Math.max(ct,0),zt=Math.min(zt,Ge.count)):ke!=null&&(ct=Math.max(ct,0),zt=Math.min(zt,ke.count));const vt=zt-ct;if(vt<0||vt===1/0)return;Be.setup(me,_e,Fe,ge,Ge);let yn,tt=Ne;if(Ge!==null&&(yn=G.get(Ge),tt=we,tt.setIndex(yn)),me.isMesh)_e.wireframe===!0?(Z.setLineWidth(_e.wireframeLinewidth*Y()),tt.setMode(b.LINES)):tt.setMode(b.TRIANGLES);else if(me.isLine){let We=_e.linewidth;We===void 0&&(We=1),Z.setLineWidth(We*Y()),me.isLineSegments?tt.setMode(b.LINES):me.isLineLoop?tt.setMode(b.LINE_LOOP):tt.setMode(b.LINE_STRIP)}else me.isPoints?tt.setMode(b.POINTS):me.isSprite&&tt.setMode(b.TRIANGLES);if(me.isBatchedMesh)tt.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else if(me.isInstancedMesh)tt.renderInstances(ct,vt,me.count);else if(ge.isInstancedBufferGeometry){const We=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Qa=Math.min(ge.instanceCount,We);tt.renderInstances(ct,vt,Qa)}else tt.render(ct,vt)};function Ye($,fe,ge){$.transparent===!0&&$.side===Cn&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,zr($,fe,ge),$.side=jn,$.needsUpdate=!0,zr($,fe,ge),$.side=Cn):zr($,fe,ge)}this.compile=function($,fe,ge=null){ge===null&&(ge=$),f=ye.get(ge),f.init(),E.push(f),ge.traverseVisible(function(me){me.isLight&&me.layers.test(fe.layers)&&(f.pushLight(me),me.castShadow&&f.pushShadow(me))}),$!==ge&&$.traverseVisible(function(me){me.isLight&&me.layers.test(fe.layers)&&(f.pushLight(me),me.castShadow&&f.pushShadow(me))}),f.setupLights(S._useLegacyLights);const _e=new Set;return $.traverse(function(me){const Pe=me.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){const Fe=Pe[Oe];Ye(Fe,ge,me),_e.add(Fe)}else Ye(Pe,ge,me),_e.add(Pe)}),E.pop(),f=null,_e},this.compileAsync=function($,fe,ge=null){const _e=this.compile($,fe,ge);return new Promise(me=>{function Pe(){if(_e.forEach(function(Oe){j.get(Oe).currentProgram.isReady()&&_e.delete(Oe)}),_e.size===0){me($);return}setTimeout(Pe,10)}O.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let qe=null;function Je($){qe&&qe($)}function yt(){ut.stop()}function $e(){ut.start()}const ut=new ud;ut.setAnimationLoop(Je),typeof self!="undefined"&&ut.setContext(self),this.setAnimationLoop=function($){qe=$,Te.setAnimationLoop($),$===null?ut.stop():ut.start()},Te.addEventListener("sessionstart",yt),Te.addEventListener("sessionend",$e),this.render=function($,fe){if(fe!==void 0&&fe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),fe.parent===null&&fe.matrixWorldAutoUpdate===!0&&fe.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(fe),fe=Te.getCamera()),$.isScene===!0&&$.onBeforeRender(S,$,fe,P),f=ye.get($,E.length),f.init(),E.push(f),te.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),ae.setFromProjectionMatrix(te),re=this.localClippingEnabled,Q=xe.init(this.clippingPlanes,re),x=he.get($,h.length),x.init(),h.push(x),Lt($,fe,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(D,L),this.info.render.frame++,Q===!0&&xe.beginShadows();const ge=f.state.shadowsArray;if(ve.render(ge,$,fe),Q===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&De.render(x,$),f.setupLights(S._useLegacyLights),fe.isArrayCamera){const _e=fe.cameras;for(let me=0,Pe=_e.length;me<Pe;me++){const Oe=_e[me];Nl(x,$,Oe,Oe.viewport)}}else Nl(x,$,fe);P!==null&&(g.updateMultisampleRenderTarget(P),g.updateRenderTargetMipmap(P)),$.isScene===!0&&$.onAfterRender(S,$,fe),Be.resetDefaultState(),I=-1,V=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Lt($,fe,ge,_e){if($.visible===!1)return;if($.layers.test(fe.layers)){if($.isGroup)ge=$.renderOrder;else if($.isLOD)$.autoUpdate===!0&&$.update(fe);else if($.isLight)f.pushLight($),$.castShadow&&f.pushShadow($);else if($.isSprite){if(!$.frustumCulled||ae.intersectsSprite($)){_e&&ce.setFromMatrixPosition($.matrixWorld).applyMatrix4(te);const Oe=J.update($),Fe=$.material;Fe.visible&&x.push($,Oe,Fe,ge,ce.z,null)}}else if(($.isMesh||$.isLine||$.isPoints)&&(!$.frustumCulled||ae.intersectsObject($))){const Oe=J.update($),Fe=$.material;if(_e&&($.boundingSphere!==void 0?($.boundingSphere===null&&$.computeBoundingSphere(),ce.copy($.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ce.copy(Oe.boundingSphere.center)),ce.applyMatrix4($.matrixWorld).applyMatrix4(te)),Array.isArray(Fe)){const Ge=Oe.groups;for(let He=0,ze=Ge.length;He<ze;He++){const ke=Ge[He],ct=Fe[ke.materialIndex];ct&&ct.visible&&x.push($,Oe,ct,ge,ce.z,ke)}}else Fe.visible&&x.push($,Oe,Fe,ge,ce.z,null)}}const Pe=$.children;for(let Oe=0,Fe=Pe.length;Oe<Fe;Oe++)Lt(Pe[Oe],fe,ge,_e)}function Nl($,fe,ge,_e){const me=$.opaque,Pe=$.transmissive,Oe=$.transparent;f.setupLightsView(ge),Q===!0&&xe.setGlobalState(S.clippingPlanes,ge),Pe.length>0&&Hd(me,Pe,fe,ge),_e&&Z.viewport(y.copy(_e)),me.length>0&&Gr(me,fe,ge),Pe.length>0&&Gr(Pe,fe,ge),Oe.length>0&&Gr(Oe,fe,ge),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Hd($,fe,ge,_e){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;const Pe=q.isWebGL2;de===null&&(de=new hi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Ar:qn,minFilter:oi,samples:Pe?4:0})),S.getDrawingBufferSize(se),Pe?de.setSize(se.x,se.y):de.setSize(Ga(se.x),Ga(se.y));const Oe=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(R),w=S.getClearAlpha(),w<1&&S.setClearColor(16777215,.5),S.clear();const Fe=S.toneMapping;S.toneMapping=Xn,Gr($,ge,_e),g.updateMultisampleRenderTarget(de),g.updateRenderTargetMipmap(de);let Ge=!1;for(let He=0,ze=fe.length;He<ze;He++){const ke=fe[He],ct=ke.object,zt=ke.geometry,vt=ke.material,yn=ke.group;if(vt.side===Cn&&ct.layers.test(_e.layers)){const tt=vt.side;vt.side=Bt,vt.needsUpdate=!0,Ul(ct,ge,_e,zt,vt,yn),vt.side=tt,vt.needsUpdate=!0,Ge=!0}}Ge===!0&&(g.updateMultisampleRenderTarget(de),g.updateRenderTargetMipmap(de)),S.setRenderTarget(Oe),S.setClearColor(R,w),S.toneMapping=Fe}function Gr($,fe,ge){const _e=fe.isScene===!0?fe.overrideMaterial:null;for(let me=0,Pe=$.length;me<Pe;me++){const Oe=$[me],Fe=Oe.object,Ge=Oe.geometry,He=_e===null?Oe.material:_e,ze=Oe.group;Fe.layers.test(ge.layers)&&Ul(Fe,fe,ge,Ge,He,ze)}}function Ul($,fe,ge,_e,me,Pe){$.onBeforeRender(S,fe,ge,_e,me,Pe),$.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,$.matrixWorld),$.normalMatrix.getNormalMatrix($.modelViewMatrix),me.onBeforeRender(S,fe,ge,_e,$,Pe),me.transparent===!0&&me.side===Cn&&me.forceSinglePass===!1?(me.side=Bt,me.needsUpdate=!0,S.renderBufferDirect(ge,fe,_e,me,$,Pe),me.side=jn,me.needsUpdate=!0,S.renderBufferDirect(ge,fe,_e,me,$,Pe),me.side=Cn):S.renderBufferDirect(ge,fe,_e,me,$,Pe),$.onAfterRender(S,fe,ge,_e,me,Pe)}function zr($,fe,ge){fe.isScene!==!0&&(fe=pe);const _e=j.get($),me=f.state.lights,Pe=f.state.shadowsArray,Oe=me.state.version,Fe=le.getParameters($,me.state,Pe,fe,ge),Ge=le.getProgramCacheKey(Fe);let He=_e.programs;_e.environment=$.isMeshStandardMaterial?fe.environment:null,_e.fog=fe.fog,_e.envMap=($.isMeshStandardMaterial?T:_).get($.envMap||_e.environment),He===void 0&&($.addEventListener("dispose",Se),He=new Map,_e.programs=He);let ze=He.get(Ge);if(ze!==void 0){if(_e.currentProgram===ze&&_e.lightsStateVersion===Oe)return Fl($,Fe),ze}else Fe.uniforms=le.getUniforms($),$.onBuild(ge,Fe,S),$.onBeforeCompile(Fe,S),ze=le.acquireProgram(Fe,Ge),He.set(Ge,ze),_e.uniforms=Fe.uniforms;const ke=_e.uniforms;return(!$.isShaderMaterial&&!$.isRawShaderMaterial||$.clipping===!0)&&(ke.clippingPlanes=xe.uniform),Fl($,Fe),_e.needsLights=qd($),_e.lightsStateVersion=Oe,_e.needsLights&&(ke.ambientLightColor.value=me.state.ambient,ke.lightProbe.value=me.state.probe,ke.directionalLights.value=me.state.directional,ke.directionalLightShadows.value=me.state.directionalShadow,ke.spotLights.value=me.state.spot,ke.spotLightShadows.value=me.state.spotShadow,ke.rectAreaLights.value=me.state.rectArea,ke.ltc_1.value=me.state.rectAreaLTC1,ke.ltc_2.value=me.state.rectAreaLTC2,ke.pointLights.value=me.state.point,ke.pointLightShadows.value=me.state.pointShadow,ke.hemisphereLights.value=me.state.hemi,ke.directionalShadowMap.value=me.state.directionalShadowMap,ke.directionalShadowMatrix.value=me.state.directionalShadowMatrix,ke.spotShadowMap.value=me.state.spotShadowMap,ke.spotLightMatrix.value=me.state.spotLightMatrix,ke.spotLightMap.value=me.state.spotLightMap,ke.pointShadowMap.value=me.state.pointShadowMap,ke.pointShadowMatrix.value=me.state.pointShadowMatrix),_e.currentProgram=ze,_e.uniformsList=null,ze}function Il($){if($.uniformsList===null){const fe=$.currentProgram.getUniforms();$.uniformsList=Ra.seqWithValue(fe.seq,$.uniforms)}return $.uniformsList}function Fl($,fe){const ge=j.get($);ge.outputColorSpace=fe.outputColorSpace,ge.batching=fe.batching,ge.instancing=fe.instancing,ge.instancingColor=fe.instancingColor,ge.skinning=fe.skinning,ge.morphTargets=fe.morphTargets,ge.morphNormals=fe.morphNormals,ge.morphColors=fe.morphColors,ge.morphTargetsCount=fe.morphTargetsCount,ge.numClippingPlanes=fe.numClippingPlanes,ge.numIntersection=fe.numClipIntersection,ge.vertexAlphas=fe.vertexAlphas,ge.vertexTangents=fe.vertexTangents,ge.toneMapping=fe.toneMapping}function Wd($,fe,ge,_e,me){fe.isScene!==!0&&(fe=pe),g.resetTextureUnits();const Pe=fe.fog,Oe=_e.isMeshStandardMaterial?fe.environment:null,Fe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ln,Ge=(_e.isMeshStandardMaterial?T:_).get(_e.envMap||Oe),He=_e.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,ze=!!ge.attributes.tangent&&(!!_e.normalMap||_e.anisotropy>0),ke=!!ge.morphAttributes.position,ct=!!ge.morphAttributes.normal,zt=!!ge.morphAttributes.color;let vt=Xn;_e.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vt=S.toneMapping);const yn=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,tt=yn!==void 0?yn.length:0,We=j.get(_e),Qa=f.state.lights;if(Q===!0&&(re===!0||$!==V)){const qt=$===V&&_e.id===I;xe.setState(_e,$,qt)}let at=!1;_e.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Qa.state.version||We.outputColorSpace!==Fe||me.isBatchedMesh&&We.batching===!1||!me.isBatchedMesh&&We.batching===!0||me.isInstancedMesh&&We.instancing===!1||!me.isInstancedMesh&&We.instancing===!0||me.isSkinnedMesh&&We.skinning===!1||!me.isSkinnedMesh&&We.skinning===!0||me.isInstancedMesh&&We.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&We.instancingColor===!1&&me.instanceColor!==null||We.envMap!==Ge||_e.fog===!0&&We.fog!==Pe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==xe.numPlanes||We.numIntersection!==xe.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==ze||We.morphTargets!==ke||We.morphNormals!==ct||We.morphColors!==zt||We.toneMapping!==vt||q.isWebGL2===!0&&We.morphTargetsCount!==tt)&&(at=!0):(at=!0,We.__version=_e.version);let $n=We.currentProgram;at===!0&&($n=zr(_e,fe,me));let Bl=!1,Ji=!1,eo=!1;const Tt=$n.getUniforms(),Kn=We.uniforms;if(Z.useProgram($n.program)&&(Bl=!0,Ji=!0,eo=!0),_e.id!==I&&(I=_e.id,Ji=!0),Bl||V!==$){Tt.setValue(b,"projectionMatrix",$.projectionMatrix),Tt.setValue(b,"viewMatrix",$.matrixWorldInverse);const qt=Tt.map.cameraPosition;qt!==void 0&&qt.setValue(b,ce.setFromMatrixPosition($.matrixWorld)),q.logarithmicDepthBuffer&&Tt.setValue(b,"logDepthBufFC",2/(Math.log($.far+1)/Math.LN2)),(_e.isMeshPhongMaterial||_e.isMeshToonMaterial||_e.isMeshLambertMaterial||_e.isMeshBasicMaterial||_e.isMeshStandardMaterial||_e.isShaderMaterial)&&Tt.setValue(b,"isOrthographic",$.isOrthographicCamera===!0),V!==$&&(V=$,Ji=!0,eo=!0)}if(me.isSkinnedMesh){Tt.setOptional(b,me,"bindMatrix"),Tt.setOptional(b,me,"bindMatrixInverse");const qt=me.skeleton;qt&&(q.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Tt.setValue(b,"boneTexture",qt.boneTexture,g)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}me.isBatchedMesh&&(Tt.setOptional(b,me,"batchingTexture"),Tt.setValue(b,"batchingTexture",me._matricesTexture,g));const to=ge.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&q.isWebGL2===!0)&&Ie.update(me,ge,$n),(Ji||We.receiveShadow!==me.receiveShadow)&&(We.receiveShadow=me.receiveShadow,Tt.setValue(b,"receiveShadow",me.receiveShadow)),_e.isMeshGouraudMaterial&&_e.envMap!==null&&(Kn.envMap.value=Ge,Kn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Ji&&(Tt.setValue(b,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Xd(Kn,eo),Pe&&_e.fog===!0&&ue.refreshFogUniforms(Kn,Pe),ue.refreshMaterialUniforms(Kn,_e,M,W,de),Ra.upload(b,Il(We),Kn,g)),_e.isShaderMaterial&&_e.uniformsNeedUpdate===!0&&(Ra.upload(b,Il(We),Kn,g),_e.uniformsNeedUpdate=!1),_e.isSpriteMaterial&&Tt.setValue(b,"center",me.center),Tt.setValue(b,"modelViewMatrix",me.modelViewMatrix),Tt.setValue(b,"normalMatrix",me.normalMatrix),Tt.setValue(b,"modelMatrix",me.matrixWorld),_e.isShaderMaterial||_e.isRawShaderMaterial){const qt=_e.uniformsGroups;for(let no=0,jd=qt.length;no<jd;no++)if(q.isWebGL2){const Gl=qt[no];ne.update(Gl,$n),ne.bind(Gl,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Xd($,fe){$.ambientLightColor.needsUpdate=fe,$.lightProbe.needsUpdate=fe,$.directionalLights.needsUpdate=fe,$.directionalLightShadows.needsUpdate=fe,$.pointLights.needsUpdate=fe,$.pointLightShadows.needsUpdate=fe,$.spotLights.needsUpdate=fe,$.spotLightShadows.needsUpdate=fe,$.rectAreaLights.needsUpdate=fe,$.hemisphereLights.needsUpdate=fe}function qd($){return $.isMeshLambertMaterial||$.isMeshToonMaterial||$.isMeshPhongMaterial||$.isMeshStandardMaterial||$.isShadowMaterial||$.isShaderMaterial&&$.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function($,fe,ge){j.get($.texture).__webglTexture=fe,j.get($.depthTexture).__webglTexture=ge;const _e=j.get($);_e.__hasExternalTextures=!0,_e.__hasExternalTextures&&(_e.__autoAllocateDepthBuffer=ge===void 0,_e.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_e.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function($,fe){const ge=j.get($);ge.__webglFramebuffer=fe,ge.__useDefaultFramebuffer=fe===void 0},this.setRenderTarget=function($,fe=0,ge=0){P=$,F=fe,U=ge;let _e=!0,me=null,Pe=!1,Oe=!1;if($){const Ge=j.get($);Ge.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(b.FRAMEBUFFER,null),_e=!1):Ge.__webglFramebuffer===void 0?g.setupRenderTarget($):Ge.__hasExternalTextures&&g.rebindTextures($,j.get($.texture).__webglTexture,j.get($.depthTexture).__webglTexture);const He=$.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Oe=!0);const ze=j.get($).__webglFramebuffer;$.isWebGLCubeRenderTarget?(Array.isArray(ze[fe])?me=ze[fe][ge]:me=ze[fe],Pe=!0):q.isWebGL2&&$.samples>0&&g.useMultisampledRTT($)===!1?me=j.get($).__webglMultisampledFramebuffer:Array.isArray(ze)?me=ze[ge]:me=ze,y.copy($.viewport),A.copy($.scissor),z=$.scissorTest}else y.copy(B).multiplyScalar(M).floor(),A.copy(X).multiplyScalar(M).floor(),z=ie;if(Z.bindFramebuffer(b.FRAMEBUFFER,me)&&q.drawBuffers&&_e&&Z.drawBuffers($,me),Z.viewport(y),Z.scissor(A),Z.setScissorTest(z),Pe){const Ge=j.get($.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge.__webglTexture,ge)}else if(Oe){const Ge=j.get($.texture),He=fe||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ge.__webglTexture,ge||0,He)}I=-1},this.readRenderTargetPixels=function($,fe,ge,_e,me,Pe,Oe){if(!($&&$.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=j.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Oe!==void 0&&(Fe=Fe[Oe]),Fe){Z.bindFramebuffer(b.FRAMEBUFFER,Fe);try{const Ge=$.texture,He=Ge.format,ze=Ge.type;if(He!==nn&&Ce.convert(He)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===Ar&&(O.has("EXT_color_buffer_half_float")||q.isWebGL2&&O.has("EXT_color_buffer_float"));if(ze!==qn&&Ce.convert(ze)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Pn&&(q.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}fe>=0&&fe<=$.width-_e&&ge>=0&&ge<=$.height-me&&b.readPixels(fe,ge,_e,me,Ce.convert(He),Ce.convert(ze),Pe)}finally{const Ge=P!==null?j.get(P).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function($,fe,ge=0){const _e=Math.pow(2,-ge),me=Math.floor(fe.image.width*_e),Pe=Math.floor(fe.image.height*_e);g.setTexture2D(fe,0),b.copyTexSubImage2D(b.TEXTURE_2D,ge,0,0,$.x,$.y,me,Pe),Z.unbindTexture()},this.copyTextureToTexture=function($,fe,ge,_e=0){const me=fe.image.width,Pe=fe.image.height,Oe=Ce.convert(ge.format),Fe=Ce.convert(ge.type);g.setTexture2D(ge,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,ge.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ge.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,ge.unpackAlignment),fe.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,_e,$.x,$.y,me,Pe,Oe,Fe,fe.image.data):fe.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,_e,$.x,$.y,fe.mipmaps[0].width,fe.mipmaps[0].height,Oe,fe.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,_e,$.x,$.y,Oe,Fe,fe.image),_e===0&&ge.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function($,fe,ge,_e,me=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=$.max.x-$.min.x+1,Oe=$.max.y-$.min.y+1,Fe=$.max.z-$.min.z+1,Ge=Ce.convert(_e.format),He=Ce.convert(_e.type);let ze;if(_e.isData3DTexture)g.setTexture3D(_e,0),ze=b.TEXTURE_3D;else if(_e.isDataArrayTexture||_e.isCompressedArrayTexture)g.setTexture2DArray(_e,0),ze=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,_e.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,_e.unpackAlignment);const ke=b.getParameter(b.UNPACK_ROW_LENGTH),ct=b.getParameter(b.UNPACK_IMAGE_HEIGHT),zt=b.getParameter(b.UNPACK_SKIP_PIXELS),vt=b.getParameter(b.UNPACK_SKIP_ROWS),yn=b.getParameter(b.UNPACK_SKIP_IMAGES),tt=ge.isCompressedTexture?ge.mipmaps[me]:ge.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,$.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,$.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,$.min.z),ge.isDataTexture||ge.isData3DTexture?b.texSubImage3D(ze,me,fe.x,fe.y,fe.z,Pe,Oe,Fe,Ge,He,tt.data):ge.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(ze,me,fe.x,fe.y,fe.z,Pe,Oe,Fe,Ge,tt.data)):b.texSubImage3D(ze,me,fe.x,fe.y,fe.z,Pe,Oe,Fe,Ge,He,tt),b.pixelStorei(b.UNPACK_ROW_LENGTH,ke),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ct),b.pixelStorei(b.UNPACK_SKIP_PIXELS,zt),b.pixelStorei(b.UNPACK_SKIP_ROWS,vt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,yn),me===0&&_e.generateMipmaps&&b.generateMipmap(ze),Z.unbindTexture()},this.initTexture=function($){$.isCubeTexture?g.setTextureCube($,0):$.isData3DTexture?g.setTexture3D($,0):$.isDataArrayTexture||$.isCompressedArrayTexture?g.setTexture2DArray($,0):g.setTexture2D($,0),Z.unbindTexture()},this.resetState=function(){F=0,U=0,P=null,Z.reset(),Be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===qa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?ui:$h}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ui?Mt:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JS extends ZS{}JS.prototype.isWebGL1Renderer=!0;class sE extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class QS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ci("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new oe;class Vn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),r=Ke(r,this.array),a=Ke(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=i[r]-s,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const c=i[r],d=i[r+1]-c,v=(s-c)/d;return(r+v)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new Ee:new oe);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new oe,r=[],a=[],s=[],o=new oe,l=new rt;for(let v=0;v<=e;v++){const m=v/e;r[v]=this.getTangentAt(m,new oe)}a[0]=new oe,s[0]=new oe;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),p<=u&&(u=p,i.set(0,1,0)),d<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let v=1;v<=e;v++){if(a[v]=a[v-1].clone(),s[v]=s[v-1].clone(),o.crossVectors(r[v-1],r[v]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(dt(r[v-1].dot(r[v]),-1,1));a[v].applyMatrix4(l.makeRotationAxis(o,m))}s[v].crossVectors(r[v],a[v])}if(t===!0){let v=Math.acos(dt(a[0].dot(a[e]),-1,1));v/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(v=-v);for(let m=1;m<=e;m++)a[m].applyMatrix4(l.makeRotationAxis(r[m],v*m)),s[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cl extends vn{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new Ee,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,v=u-this.aY;l=d*c-v*p+this.aX,u=d*p+v*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class eb extends Cl{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){r(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,c,p){let d=(s-a)/u-(o-a)/(u+c)+(o-s)/c,v=(o-s)/c-(l-s)/(c+p)+(l-o)/p;d*=c,v*=c,r(s,o,d,v)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const ca=new oe,Vo=new Pl,Ho=new Pl,Wo=new Pl;class tb extends vn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new oe){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let u,c;this.closed||o>0?u=r[(o-1)%a]:(ca.subVectors(r[0],r[1]).add(r[0]),u=ca);const p=r[o%a],d=r[(o+1)%a];if(this.closed||o+2<a?c=r[(o+2)%a]:(ca.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=ca),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(p),v),x=Math.pow(p.distanceToSquared(d),v),f=Math.pow(d.distanceToSquared(c),v);x<1e-4&&(x=1),m<1e-4&&(m=x),f<1e-4&&(f=x),Vo.initNonuniformCatmullRom(u.x,p.x,d.x,c.x,m,x,f),Ho.initNonuniformCatmullRom(u.y,p.y,d.y,c.y,m,x,f),Wo.initNonuniformCatmullRom(u.z,p.z,d.z,c.z,m,x,f)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(u.x,p.x,d.x,c.x,this.tension),Ho.initCatmullRom(u.y,p.y,d.y,c.y,this.tension),Wo.initCatmullRom(u.z,p.z,d.z,c.z,this.tension));return i.set(Vo.calc(l),Ho.calc(l),Wo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new oe().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ac(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function nb(n,e){const t=1-n;return t*t*e}function ib(n,e){return 2*(1-n)*n*e}function rb(n,e){return n*n*e}function xr(n,e,t,i){return nb(n,e)+ib(n,t)+rb(n,i)}function ab(n,e){const t=1-n;return t*t*t*e}function ob(n,e){const t=1-n;return 3*t*t*n*e}function sb(n,e){return 3*(1-n)*n*n*e}function lb(n,e){return n*n*n*e}function Sr(n,e,t,i,r){return ab(n,e)+ob(n,t)+sb(n,i)+lb(n,r)}class gd extends vn{constructor(e=new Ee,t=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ee){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Sr(e,r.x,a.x,s.x,o.x),Sr(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ub extends vn{constructor(e=new oe,t=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new oe){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Sr(e,r.x,a.x,s.x,o.x),Sr(e,r.y,a.y,s.y,o.y),Sr(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _d extends vn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cb extends vn{constructor(e=new oe,t=new oe){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new oe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends vn{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(xr(e,r.x,a.x,s.x),xr(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fb extends vn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(xr(e,r.x,a.x,s.x),xr(e,r.y,a.y,s.y),xr(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xd extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],u=r[s],c=r[s>r.length-2?r.length-1:s+1],p=r[s>r.length-3?r.length-1:s+2];return i.set(Ac(o,l.x,u.x,c.x,p.x),Ac(o,l.y,u.y,c.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}}var il=Object.freeze({__proto__:null,ArcCurve:eb,CatmullRomCurve3:tb,CubicBezierCurve:gd,CubicBezierCurve3:ub,EllipseCurve:Cl,LineCurve:_d,LineCurve3:cb,QuadraticBezierCurve:yd,QuadraticBezierCurve3:fb,SplineCurve:xd});class hb extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),u=l===0?0:1-s/l;return o.getPointAt(u,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new il[r.type]().fromJSON(r))}return this}}class Tc extends hb{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _d(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new yd(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new gd(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r),new Ee(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){const u=new Cl(e,t,i,r,a,s,o,l);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class db extends Tc{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Tc().fromJSON(r))}return this}}const pb={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=Sd(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,u,c,p,d,v;if(i&&(a=yb(n,e,a,t)),n.length>80*t){o=u=n[0],l=c=n[1];for(let m=t;m<r;m+=t)p=n[m],d=n[m+1],p<o&&(o=p),d<l&&(l=d),p>u&&(u=p),d>c&&(c=d);v=Math.max(u-o,c-l),v=v!==0?32767/v:0}return Pr(a,s,t,o,l,v,0),s}};function Sd(n,e,t,i,r){let a,s;if(r===Lb(n,e,t,i)>0)for(a=e;a<t;a+=i)s=Cc(a,n[a],n[a+1],s);else for(a=t-i;a>=e;a-=i)s=Cc(a,n[a],n[a+1],s);return s&&Ka(s,s.next)&&(Lr(s),s=s.next),s}function pi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ka(t,t.next)||it(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pr(n,e,t,i,r,a,s){if(!n)return;!s&&a&&Eb(n,i,r,a);let o=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,a?vb(n,i,r,a):mb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),Lr(n),n=u.next,o=u.next;continue}if(n=u,n===o){s?s===1?(n=gb(pi(n),e,t),Pr(n,e,t,i,r,a,2)):s===2&&_b(n,e,t,i,r,a):Pr(pi(n),e,t,i,r,a,1);break}}}function mb(n){const e=n.prev,t=n,i=n.next;if(it(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,u=i.y,c=r<a?r<s?r:s:a<s?a:s,p=o<l?o<u?o:u:l<u?l:u,d=r>a?r>s?r:s:a>s?a:s,v=o>l?o>u?o:u:l>u?l:u;let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=d&&m.y>=p&&m.y<=v&&ki(r,o,a,l,s,u,m.x,m.y)&&it(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vb(n,e,t,i){const r=n.prev,a=n,s=n.next;if(it(r,a,s)>=0)return!1;const o=r.x,l=a.x,u=s.x,c=r.y,p=a.y,d=s.y,v=o<l?o<u?o:u:l<u?l:u,m=c<p?c<d?c:d:p<d?p:d,x=o>l?o>u?o:u:l>u?l:u,f=c>p?c>d?c:d:p>d?p:d,h=rl(v,m,e,t,i),E=rl(x,f,e,t,i);let S=n.prevZ,C=n.nextZ;for(;S&&S.z>=h&&C&&C.z<=E;){if(S.x>=v&&S.x<=x&&S.y>=m&&S.y<=f&&S!==r&&S!==s&&ki(o,c,l,p,u,d,S.x,S.y)&&it(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=v&&C.x<=x&&C.y>=m&&C.y<=f&&C!==r&&C!==s&&ki(o,c,l,p,u,d,C.x,C.y)&&it(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=h;){if(S.x>=v&&S.x<=x&&S.y>=m&&S.y<=f&&S!==r&&S!==s&&ki(o,c,l,p,u,d,S.x,S.y)&&it(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=E;){if(C.x>=v&&C.x<=x&&C.y>=m&&C.y<=f&&C!==r&&C!==s&&ki(o,c,l,p,u,d,C.x,C.y)&&it(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function gb(n,e,t){let i=n;do{const r=i.prev,a=i.next.next;!Ka(r,a)&&bd(r,i,i.next,a)&&wr(r,a)&&wr(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Lr(i),Lr(i.next),i=n=a),i=i.next}while(i!==n);return pi(i)}function _b(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Cb(s,o)){let l=Md(s,o);s=pi(s,s.next),l=pi(l,l.next),Pr(s,e,t,i,r,a,0),Pr(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function yb(n,e,t,i){const r=[];let a,s,o,l,u;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,u=Sd(n,o,l,i,!1),u===u.next&&(u.steiner=!0),r.push(Tb(u));for(r.sort(xb),a=0;a<r.length;a++)t=Sb(r[a],t);return t}function xb(n,e){return n.x-e.x}function Sb(n,e){const t=bb(n,e);if(!t)return e;const i=Md(t,n);return pi(i,i.next),pi(t,t.next)}function bb(n,e){let t=e,i=-1/0,r;const a=n.x,s=n.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=a&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===a))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,u=r.y;let c=1/0,p;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&ki(s<u?a:i,s,l,u,s<u?i:a,s,t.x,t.y)&&(p=Math.abs(s-t.y)/(a-t.x),wr(t,n)&&(p<c||p===c&&(t.x>r.x||t.x===r.x&&Mb(r,t)))&&(r=t,c=p)),t=t.next;while(t!==o);return r}function Mb(n,e){return it(n.prev,n,e.prev)<0&&it(e.next,n,n.next)<0}function Eb(n,e,t,i){let r=n;do r.z===0&&(r.z=rl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ab(r)}function Ab(n){let e,t,i,r,a,s,o,l,u=1;do{for(t=n,n=null,a=null,s=0;t;){for(s++,i=t,o=0,e=0;e<u&&(o++,i=i.nextZ,!!i);e++);for(l=u;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;t=i}a.nextZ=null,u*=2}while(s>1);return n}function rl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Tb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ki(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function Cb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Pb(n,e)&&(wr(n,e)&&wr(e,n)&&wb(n,e)&&(it(n.prev,n,e.prev)||it(n,e.prev,e))||Ka(n,e)&&it(n.prev,n,n.next)>0&&it(e.prev,e,e.next)>0)}function it(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ka(n,e){return n.x===e.x&&n.y===e.y}function bd(n,e,t,i){const r=ha(it(n,e,t)),a=ha(it(n,e,i)),s=ha(it(t,i,n)),o=ha(it(t,i,e));return!!(r!==a&&s!==o||r===0&&fa(n,t,e)||a===0&&fa(n,i,e)||s===0&&fa(t,n,i)||o===0&&fa(t,e,i))}function fa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ha(n){return n>0?1:n<0?-1:0}function Pb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wr(n,e){return it(n.prev,n,n.next)<0?it(n,e,n.next)>=0&&it(n,n.prev,e)>=0:it(n,e,n.prev)<0||it(n,n.next,e)<0}function wb(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Md(n,e){const t=new al(n.i,n.x,n.y),i=new al(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Cc(n,e,t,i){const r=new al(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function al(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lb(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class br{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return br.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];Pc(e),wc(i,e);let s=e.length;t.forEach(Pc);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,wc(i,t[l]);const o=pb.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Pc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function wc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ed extends mn{constructor(e=new db([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s(u)}this.setAttribute("position",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2)),this.computeVertexNormals();function s(o){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,v=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:v-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Rb;let S,C=!1,F,U,P,I;h&&(S=h.getSpacedPoints(c),C=!0,d=!1,F=h.computeFrenetFrames(c,!1),U=new oe,P=new oe,I=new oe),d||(f=0,v=0,m=0,x=0);const V=o.extractPoints(u);let y=V.shape;const A=V.holes;if(!br.isClockWise(y)){y=y.reverse();for(let b=0,k=A.length;b<k;b++){const O=A[b];br.isClockWise(O)&&(A[b]=O.reverse())}}const R=br.triangulateShape(y,A),w=y;for(let b=0,k=A.length;b<k;b++){const O=A[b];y=y.concat(O)}function H(b,k,O){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(k,O)}const W=y.length,M=R.length;function D(b,k,O){let q,Z,N;const j=b.x-k.x,g=b.y-k.y,_=O.x-b.x,T=O.y-b.y,G=j*j+g*g,K=j*T-g*_;if(Math.abs(K)>Number.EPSILON){const J=Math.sqrt(G),le=Math.sqrt(_*_+T*T),ue=k.x-g/J,he=k.y+j/J,ye=O.x-T/le,xe=O.y+_/le,ve=((ye-ue)*T-(xe-he)*_)/(j*T-g*_);q=ue+j*ve-b.x,Z=he+g*ve-b.y;const De=q*q+Z*Z;if(De<=2)return new Ee(q,Z);N=Math.sqrt(De/2)}else{let J=!1;j>Number.EPSILON?_>Number.EPSILON&&(J=!0):j<-Number.EPSILON?_<-Number.EPSILON&&(J=!0):Math.sign(g)===Math.sign(T)&&(J=!0),J?(q=-g,Z=j,N=Math.sqrt(G)):(q=j,Z=g,N=Math.sqrt(G/2))}return new Ee(q/N,Z/N)}const L=[];for(let b=0,k=w.length,O=k-1,q=b+1;b<k;b++,O++,q++)O===k&&(O=0),q===k&&(q=0),L[b]=D(w[b],w[O],w[q]);const B=[];let X,ie=L.concat();for(let b=0,k=A.length;b<k;b++){const O=A[b];X=[];for(let q=0,Z=O.length,N=Z-1,j=q+1;q<Z;q++,N++,j++)N===Z&&(N=0),j===Z&&(j=0),X[q]=D(O[q],O[N],O[j]);B.push(X),ie=ie.concat(X)}for(let b=0;b<f;b++){const k=b/f,O=v*Math.cos(k*Math.PI/2),q=m*Math.sin(k*Math.PI/2)+x;for(let Z=0,N=w.length;Z<N;Z++){const j=H(w[Z],L[Z],q);te(j.x,j.y,-O)}for(let Z=0,N=A.length;Z<N;Z++){const j=A[Z];X=B[Z];for(let g=0,_=j.length;g<_;g++){const T=H(j[g],X[g],q);te(T.x,T.y,-O)}}}const ae=m+x;for(let b=0;b<W;b++){const k=d?H(y[b],ie[b],ae):y[b];C?(P.copy(F.normals[0]).multiplyScalar(k.x),U.copy(F.binormals[0]).multiplyScalar(k.y),I.copy(S[0]).add(P).add(U),te(I.x,I.y,I.z)):te(k.x,k.y,0)}for(let b=1;b<=c;b++)for(let k=0;k<W;k++){const O=d?H(y[k],ie[k],ae):y[k];C?(P.copy(F.normals[b]).multiplyScalar(O.x),U.copy(F.binormals[b]).multiplyScalar(O.y),I.copy(S[b]).add(P).add(U),te(I.x,I.y,I.z)):te(O.x,O.y,p/c*b)}for(let b=f-1;b>=0;b--){const k=b/f,O=v*Math.cos(k*Math.PI/2),q=m*Math.sin(k*Math.PI/2)+x;for(let Z=0,N=w.length;Z<N;Z++){const j=H(w[Z],L[Z],q);te(j.x,j.y,p+O)}for(let Z=0,N=A.length;Z<N;Z++){const j=A[Z];X=B[Z];for(let g=0,_=j.length;g<_;g++){const T=H(j[g],X[g],q);C?te(T.x,T.y+S[c-1].y,S[c-1].x+O):te(T.x,T.y,p+O)}}}Q(),re();function Q(){const b=r.length/3;if(d){let k=0,O=W*k;for(let q=0;q<M;q++){const Z=R[q];se(Z[2]+O,Z[1]+O,Z[0]+O)}k=c+f*2,O=W*k;for(let q=0;q<M;q++){const Z=R[q];se(Z[0]+O,Z[1]+O,Z[2]+O)}}else{for(let k=0;k<M;k++){const O=R[k];se(O[2],O[1],O[0])}for(let k=0;k<M;k++){const O=R[k];se(O[0]+W*c,O[1]+W*c,O[2]+W*c)}}i.addGroup(b,r.length/3-b,0)}function re(){const b=r.length/3;let k=0;de(w,k),k+=w.length;for(let O=0,q=A.length;O<q;O++){const Z=A[O];de(Z,k),k+=Z.length}i.addGroup(b,r.length/3-b,1)}function de(b,k){let O=b.length;for(;--O>=0;){const q=O;let Z=O-1;Z<0&&(Z=b.length-1);for(let N=0,j=c+f*2;N<j;N++){const g=W*N,_=W*(N+1),T=k+q+g,G=k+Z+g,K=k+Z+_,J=k+q+_;ce(T,G,K,J)}}}function te(b,k,O){l.push(b),l.push(k),l.push(O)}function se(b,k,O){pe(b),pe(k),pe(O);const q=r.length/3,Z=E.generateTopUV(i,r,q-3,q-2,q-1);Y(Z[0]),Y(Z[1]),Y(Z[2])}function ce(b,k,O,q){pe(b),pe(k),pe(q),pe(k),pe(O),pe(q);const Z=r.length/3,N=E.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);Y(N[0]),Y(N[1]),Y(N[3]),Y(N[1]),Y(N[2]),Y(N[3])}function pe(b){r.push(l[b*3+0]),r.push(l[b*3+1]),r.push(l[b*3+2])}function Y(b){a.push(b.x),a.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Db(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new il[r.type]().fromJSON(r)),new Ed(i,e.options)}}const Rb={generateTopUV:function(n,e,t,i,r){const a=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new Ee(a,s),new Ee(o,l),new Ee(u,c)]},generateSideWallUV:function(n,e,t,i,r,a){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],p=e[i*3+2],d=e[r*3],v=e[r*3+1],m=e[r*3+2],x=e[a*3],f=e[a*3+1],h=e[a*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new Ee(s,1-l),new Ee(u,1-p),new Ee(d,1-m),new Ee(x,1-h)]:[new Ee(o,1-l),new Ee(c,1-p),new Ee(v,1-m),new Ee(f,1-h)]}};function Db(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ob extends mn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new oe,a=new oe;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const p=l[u],d=p.start,v=p.count;for(let m=d,x=d+v;m<x;m+=3)for(let f=0;f<3;f++){const h=o.getX(m+f),E=o.getX(m+(f+1)%3);r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,E),Lc(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let u=0;u<3;u++){const c=3*o+u,p=3*o+(u+1)%3;r.fromBufferAttribute(s,c),a.fromBufferAttribute(s,p),Lc(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Lc(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class lE extends Ki{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uE extends Ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Rc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Nb{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,a===!1&&r.onStart!==void 0&&r.onStart(c,s,o),a=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,p){return u.push(c,p),this},this.removeHandler=function(c){const p=u.indexOf(c);return p!==-1&&u.splice(p,2),this},this.getHandler=function(c){for(let p=0,d=u.length;p<d;p+=2){const v=u[p],m=u[p+1];if(v.global&&(v.lastIndex=0),v.test(c))return m}return null}}}const Ub=new Nb;class wl{constructor(e){this.manager=e!==void 0?e:Ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ib extends wl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Rc.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Cr("img");function l(){c(),Rc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function u(p){c(),r&&r(p),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class cE extends wl{constructor(e){super(e)}load(e,t,i,r){const a=new Nt,s=new Ib(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class Ad extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xo=new rt,Dc=new oe,Oc=new oe;class Fb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bb extends Fb{constructor(){super(new cd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fE extends Ad{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Bb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hE extends Ad{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gb extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ol extends QS{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class dE{constructor(e,t,i=0,r=1/0){this.ray=new bl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return sl(e,this,i,t),i.sort(Nc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)sl(e[r],this,i,t);return i.sort(Nc),i}}function Nc(n,e){return n.distance-e.distance}function sl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let a=0,s=r.length;a<s;a++)sl(r[a],e,t,!0)}}class Uc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ic=new oe,da=new oe;class zb{constructor(e=new oe,t=new oe){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ic.subVectors(e,this.start),da.subVectors(this.end,this.start);const i=da.dot(da);let a=da.dot(Ic)/i;return t&&(a=dt(a,0,1)),a}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const Fc=new Yn,pa=new oe;class Td extends Gb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Kt(e,3)),this.setAttribute("uv",new Kt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new ol(t,6,1);return this.setAttribute("instanceStart",new Vn(i,3,0)),this.setAttribute("instanceEnd",new Vn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new ol(t,6,1);return this.setAttribute("instanceColorStart",new Vn(i,3,0)),this.setAttribute("instanceColorEnd",new Vn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ob(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Fc.setFromBufferAttribute(t),this.boundingBox.union(Fc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)pa.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(pa)),pa.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(pa));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ft.line={uniforms:El.merge([Ae.common,Ae.fog,Ae.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Cd extends Rn{constructor(e){super({type:"LineMaterial",uniforms:El.clone(Ft.line.uniforms),vertexShader:Ft.line.vertexShader,fragmentShader:Ft.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Bc=new oe,Gc=new oe,xt=new lt,St=new lt,ln=new lt,qo=new oe,jo=new rt,bt=new zb,zc=new oe,ma=new Yn,va=new Nr,un=new lt;let hn,fi;function kc(n,e,t){return un.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),un.multiplyScalar(1/un.w),un.x=fi/t.width,un.y=fi/t.height,un.applyMatrix4(n.projectionMatrixInverse),un.multiplyScalar(1/un.w),Math.abs(Math.max(un.x,un.y))}function kb(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,a=i.attributes.instanceEnd,s=Math.min(i.instanceCount,r.count);for(let o=0,l=s;o<l;o++){bt.start.fromBufferAttribute(r,o),bt.end.fromBufferAttribute(a,o),bt.applyMatrix4(t);const u=new oe,c=new oe;hn.distanceSqToSegment(bt.start,bt.end,c,u),c.distanceTo(u)<fi*.5&&e.push({point:c,pointOnLine:u,distance:hn.origin.distanceTo(c),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function Vb(n,e,t){const i=e.projectionMatrix,a=n.material.resolution,s=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,u=o.attributes.instanceEnd,c=Math.min(o.instanceCount,l.count),p=-e.near;hn.at(1,ln),ln.w=1,ln.applyMatrix4(e.matrixWorldInverse),ln.applyMatrix4(i),ln.multiplyScalar(1/ln.w),ln.x*=a.x/2,ln.y*=a.y/2,ln.z=0,qo.copy(ln),jo.multiplyMatrices(e.matrixWorldInverse,s);for(let d=0,v=c;d<v;d++){if(xt.fromBufferAttribute(l,d),St.fromBufferAttribute(u,d),xt.w=1,St.w=1,xt.applyMatrix4(jo),St.applyMatrix4(jo),xt.z>p&&St.z>p)continue;if(xt.z>p){const S=xt.z-St.z,C=(xt.z-p)/S;xt.lerp(St,C)}else if(St.z>p){const S=St.z-xt.z,C=(St.z-p)/S;St.lerp(xt,C)}xt.applyMatrix4(i),St.applyMatrix4(i),xt.multiplyScalar(1/xt.w),St.multiplyScalar(1/St.w),xt.x*=a.x/2,xt.y*=a.y/2,St.x*=a.x/2,St.y*=a.y/2,bt.start.copy(xt),bt.start.z=0,bt.end.copy(St),bt.end.z=0;const x=bt.closestPointToPointParameter(qo,!0);bt.at(x,zc);const f=Zh.lerp(xt.z,St.z,x),h=f>=-1&&f<=1,E=qo.distanceTo(zc)<fi*.5;if(h&&E){bt.start.fromBufferAttribute(l,d),bt.end.fromBufferAttribute(u,d),bt.start.applyMatrix4(s),bt.end.applyMatrix4(s);const S=new oe,C=new oe;hn.distanceSqToSegment(bt.start,bt.end,C,S),t.push({point:C,pointOnLine:S,distance:hn.origin.distanceTo(C),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class Hb extends dn{constructor(e=new Td,t=new Cd({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let s=0,o=0,l=t.count;s<l;s++,o+=2)Bc.fromBufferAttribute(t,s),Gc.fromBufferAttribute(i,s),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Bc.distanceTo(Gc);const a=new ol(r,2,1);return e.setAttribute("instanceDistanceStart",new Vn(a,1,0)),e.setAttribute("instanceDistanceEnd",new Vn(a,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;hn=e.ray;const s=this.matrixWorld,o=this.geometry,l=this.material;fi=l.linewidth+a,o.boundingSphere===null&&o.computeBoundingSphere(),va.copy(o.boundingSphere).applyMatrix4(s);let u;if(i)u=fi*.5;else{const p=Math.max(r.near,va.distanceToPoint(hn.origin));u=kc(r,p,l.resolution)}if(va.radius+=u,hn.intersectsSphere(va)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ma.copy(o.boundingBox).applyMatrix4(s);let c;if(i)c=fi*.5;else{const p=Math.max(r.near,ma.distanceToPoint(hn.origin));c=kc(r,p,l.resolution)}ma.expandByScalar(c),hn.intersectsBox(ma)!==!1&&(i?kb(this,t):Vb(this,r,t))}}class Wb extends Td{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class pE extends Hb{constructor(e=new Wb,t=new Cd({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class mE extends Et{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ee(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ii=new oe,Vc=new rt,Hc=new rt,Wc=new oe,Xc=new oe;class vE{constructor(e={}){const t=this;let i,r,a,s;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(v,m){v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),Vc.copy(m.matrixWorldInverse),Hc.multiplyMatrices(m.projectionMatrix,Vc),u(v,v,m),d(v)},this.setSize=function(v,m){i=v,r=m,a=i/2,s=r/2,l.style.width=v+"px",l.style.height=m+"px"};function u(v,m,x){if(v.isCSS2DObject){Ii.setFromMatrixPosition(v.matrixWorld),Ii.applyMatrix4(Hc);const f=v.visible===!0&&Ii.z>=-1&&Ii.z<=1&&v.layers.test(x.layers)===!0;if(v.element.style.display=f===!0?"":"none",f===!0){v.onBeforeRender(t,m,x);const E=v.element;E.style.transform="translate("+-100*v.center.x+"%,"+-100*v.center.y+"%)translate("+(Ii.x*a+a)+"px,"+(-Ii.y*s+s)+"px)",E.parentNode!==l&&l.appendChild(E),v.onAfterRender(t,m,x)}const h={distanceToCameraSquared:c(x,v)};o.objects.set(v,h)}for(let f=0,h=v.children.length;f<h;f++)u(v.children[f],m,x)}function c(v,m){return Wc.setFromMatrixPosition(v.matrixWorld),Xc.setFromMatrixPosition(m.matrixWorld),Wc.distanceToSquared(Xc)}function p(v){const m=[];return v.traverse(function(x){x.isCSS2DObject&&m.push(x)}),m}function d(v){const m=p(v).sort(function(f,h){if(f.renderOrder!==h.renderOrder)return h.renderOrder-f.renderOrder;const E=o.objects.get(f).distanceToCameraSquared,S=o.objects.get(h).distanceToCameraSquared;return E-S}),x=m.length;for(let f=0,h=m.length;f<h;f++)m[f].element.style.zIndex=x-f}}}const qc={type:"change"},Yo={type:"start"},jc={type:"end"},ga=new bl,Yc=new zn,Xb=Math.cos(70*Zh.DEG2RAD);class gE extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new oe,this.cursor=new oe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(ne){ne.addEventListener("keydown",ye),this._domElementKeyEvents=ne},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qc),i.update(),a=r.NONE},this.update=(function(){const ne=new oe,Me=new di().setFromUnitVectors(e.up,new oe(0,1,0)),Te=Me.clone().invert(),Le=new oe,ee=new di,be=new oe,Se=2*Math.PI;return function(Ue=null){const Ye=i.object.position;ne.copy(Ye).sub(i.target),ne.applyQuaternion(Me),o.setFromVector3(ne),i.autoRotate&&a===r.NONE&&z(y(Ue)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let qe=i.minAzimuthAngle,Je=i.maxAzimuthAngle;isFinite(qe)&&isFinite(Je)&&(qe<-Math.PI?qe+=Se:qe>Math.PI&&(qe-=Se),Je<-Math.PI?Je+=Se:Je>Math.PI&&(Je-=Se),qe<=Je?o.theta=Math.max(qe,Math.min(Je,o.theta)):o.theta=o.theta>(qe+Je)/2?Math.max(qe,o.theta):Math.min(Je,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&U||i.object.isOrthographicCamera?o.radius=B(o.radius):o.radius=B(o.radius*u),ne.setFromSpherical(o),ne.applyQuaternion(Te),Ye.copy(i.target).add(ne),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let yt=!1;if(i.zoomToCursor&&U){let $e=null;if(i.object.isPerspectiveCamera){const ut=ne.length();$e=B(ut*u);const Lt=ut-$e;i.object.position.addScaledVector(C,Lt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ut=new oe(F.x,F.y,0);ut.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),yt=!0;const Lt=new oe(F.x,F.y,0);Lt.unproject(i.object),i.object.position.sub(Lt).add(ut),i.object.updateMatrixWorld(),$e=ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar($e).add(i.object.position):(ga.origin.copy(i.object.position),ga.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ga.direction))<Xb?e.lookAt(i.target):(Yc.setFromNormalAndCoplanarPoint(i.object.up,i.target),ga.intersectPlane(Yc,i.target))))}else i.object.isOrthographicCamera&&(yt=u!==1,yt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix()));return u=1,U=!1,yt||Le.distanceToSquared(i.object.position)>s||8*(1-ee.dot(i.object.quaternion))>s||be.distanceToSquared(i.target)>0?(i.dispatchEvent(qc),Le.copy(i.object.position),ee.copy(i.object.quaternion),be.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",De),i.domElement.removeEventListener("pointerdown",g),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",_),i.domElement.removeEventListener("pointerup",T),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ye),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new Uc,l=new Uc;let u=1;const c=new oe,p=new Ee,d=new Ee,v=new Ee,m=new Ee,x=new Ee,f=new Ee,h=new Ee,E=new Ee,S=new Ee,C=new oe,F=new Ee;let U=!1;const P=[],I={};let V=!1;function y(ne){return ne!==null?2*Math.PI/60*i.autoRotateSpeed*ne:2*Math.PI/60/60*i.autoRotateSpeed}function A(ne){const Me=Math.abs(ne*.01);return Math.pow(.95,i.zoomSpeed*Me)}function z(ne){l.theta-=ne}function R(ne){l.phi-=ne}const w=(function(){const ne=new oe;return function(Te,Le){ne.setFromMatrixColumn(Le,0),ne.multiplyScalar(-Te),c.add(ne)}})(),H=(function(){const ne=new oe;return function(Te,Le){i.screenSpacePanning===!0?ne.setFromMatrixColumn(Le,1):(ne.setFromMatrixColumn(Le,0),ne.crossVectors(i.object.up,ne)),ne.multiplyScalar(Te),c.add(ne)}})(),W=(function(){const ne=new oe;return function(Te,Le){const ee=i.domElement;if(i.object.isPerspectiveCamera){const be=i.object.position;ne.copy(be).sub(i.target);let Se=ne.length();Se*=Math.tan(i.object.fov/2*Math.PI/180),w(2*Te*Se/ee.clientHeight,i.object.matrix),H(2*Le*Se/ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(w(Te*(i.object.right-i.object.left)/i.object.zoom/ee.clientWidth,i.object.matrix),H(Le*(i.object.top-i.object.bottom)/i.object.zoom/ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function M(ne){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=ne:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(ne){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=ne:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(ne,Me){if(!i.zoomToCursor)return;U=!0;const Te=i.domElement.getBoundingClientRect(),Le=ne-Te.left,ee=Me-Te.top,be=Te.width,Se=Te.height;F.x=Le/be*2-1,F.y=-(ee/Se)*2+1,C.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function B(ne){return Math.max(i.minDistance,Math.min(i.maxDistance,ne))}function X(ne){p.set(ne.clientX,ne.clientY)}function ie(ne){L(ne.clientX,ne.clientX),h.set(ne.clientX,ne.clientY)}function ae(ne){m.set(ne.clientX,ne.clientY)}function Q(ne){d.set(ne.clientX,ne.clientY),v.subVectors(d,p).multiplyScalar(i.rotateSpeed);const Me=i.domElement;z(2*Math.PI*v.x/Me.clientHeight),R(2*Math.PI*v.y/Me.clientHeight),p.copy(d),i.update()}function re(ne){E.set(ne.clientX,ne.clientY),S.subVectors(E,h),S.y>0?M(A(S.y)):S.y<0&&D(A(S.y)),h.copy(E),i.update()}function de(ne){x.set(ne.clientX,ne.clientY),f.subVectors(x,m).multiplyScalar(i.panSpeed),W(f.x,f.y),m.copy(x),i.update()}function te(ne){L(ne.clientX,ne.clientY),ne.deltaY<0?D(A(ne.deltaY)):ne.deltaY>0&&M(A(ne.deltaY)),i.update()}function se(ne){let Me=!1;switch(ne.code){case i.keys.UP:ne.ctrlKey||ne.metaKey||ne.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),Me=!0;break;case i.keys.BOTTOM:ne.ctrlKey||ne.metaKey||ne.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),Me=!0;break;case i.keys.LEFT:ne.ctrlKey||ne.metaKey||ne.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),Me=!0;break;case i.keys.RIGHT:ne.ctrlKey||ne.metaKey||ne.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),Me=!0;break}Me&&(ne.preventDefault(),i.update())}function ce(ne){if(P.length===1)p.set(ne.pageX,ne.pageY);else{const Me=Ce(ne),Te=.5*(ne.pageX+Me.x),Le=.5*(ne.pageY+Me.y);p.set(Te,Le)}}function pe(ne){if(P.length===1)m.set(ne.pageX,ne.pageY);else{const Me=Ce(ne),Te=.5*(ne.pageX+Me.x),Le=.5*(ne.pageY+Me.y);m.set(Te,Le)}}function Y(ne){const Me=Ce(ne),Te=ne.pageX-Me.x,Le=ne.pageY-Me.y,ee=Math.sqrt(Te*Te+Le*Le);h.set(0,ee)}function b(ne){i.enableZoom&&Y(ne),i.enablePan&&pe(ne)}function k(ne){i.enableZoom&&Y(ne),i.enableRotate&&ce(ne)}function O(ne){if(P.length==1)d.set(ne.pageX,ne.pageY);else{const Te=Ce(ne),Le=.5*(ne.pageX+Te.x),ee=.5*(ne.pageY+Te.y);d.set(Le,ee)}v.subVectors(d,p).multiplyScalar(i.rotateSpeed);const Me=i.domElement;z(2*Math.PI*v.x/Me.clientHeight),R(2*Math.PI*v.y/Me.clientHeight),p.copy(d)}function q(ne){if(P.length===1)x.set(ne.pageX,ne.pageY);else{const Me=Ce(ne),Te=.5*(ne.pageX+Me.x),Le=.5*(ne.pageY+Me.y);x.set(Te,Le)}f.subVectors(x,m).multiplyScalar(i.panSpeed),W(f.x,f.y),m.copy(x)}function Z(ne){const Me=Ce(ne),Te=ne.pageX-Me.x,Le=ne.pageY-Me.y,ee=Math.sqrt(Te*Te+Le*Le);E.set(0,ee),S.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),M(S.y),h.copy(E);const be=(ne.pageX+Me.x)*.5,Se=(ne.pageY+Me.y)*.5;L(be,Se)}function N(ne){i.enableZoom&&Z(ne),i.enablePan&&q(ne)}function j(ne){i.enableZoom&&Z(ne),i.enableRotate&&O(ne)}function g(ne){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(ne.pointerId),i.domElement.addEventListener("pointermove",_),i.domElement.addEventListener("pointerup",T)),Ie(ne),ne.pointerType==="touch"?xe(ne):G(ne))}function _(ne){i.enabled!==!1&&(ne.pointerType==="touch"?ve(ne):K(ne))}function T(ne){switch(Ne(ne),P.length){case 0:i.domElement.releasePointerCapture(ne.pointerId),i.domElement.removeEventListener("pointermove",_),i.domElement.removeEventListener("pointerup",T),i.dispatchEvent(jc),a=r.NONE;break;case 1:const Me=P[0],Te=I[Me];xe({pointerId:Me,pageX:Te.x,pageY:Te.y});break}}function G(ne){let Me;switch(ne.button){case 0:Me=i.mouseButtons.LEFT;break;case 1:Me=i.mouseButtons.MIDDLE;break;case 2:Me=i.mouseButtons.RIGHT;break;default:Me=-1}switch(Me){case _i.DOLLY:if(i.enableZoom===!1)return;ie(ne),a=r.DOLLY;break;case _i.ROTATE:if(ne.ctrlKey||ne.metaKey||ne.shiftKey){if(i.enablePan===!1)return;ae(ne),a=r.PAN}else{if(i.enableRotate===!1)return;X(ne),a=r.ROTATE}break;case _i.PAN:if(ne.ctrlKey||ne.metaKey||ne.shiftKey){if(i.enableRotate===!1)return;X(ne),a=r.ROTATE}else{if(i.enablePan===!1)return;ae(ne),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Yo)}function K(ne){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Q(ne);break;case r.DOLLY:if(i.enableZoom===!1)return;re(ne);break;case r.PAN:if(i.enablePan===!1)return;de(ne);break}}function J(ne){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(ne.preventDefault(),i.dispatchEvent(Yo),te(le(ne)),i.dispatchEvent(jc))}function le(ne){const Me=ne.deltaMode,Te={clientX:ne.clientX,clientY:ne.clientY,deltaY:ne.deltaY};switch(Me){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return ne.ctrlKey&&!V&&(Te.deltaY*=10),Te}function ue(ne){ne.key==="Control"&&(V=!0,i.domElement.getRootNode().addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(ne){ne.key==="Control"&&(V=!1,i.domElement.getRootNode().removeEventListener("keyup",he,{passive:!0,capture:!0}))}function ye(ne){i.enabled===!1||i.enablePan===!1||se(ne)}function xe(ne){switch(we(ne),P.length){case 1:switch(i.touches.ONE){case yi.ROTATE:if(i.enableRotate===!1)return;ce(ne),a=r.TOUCH_ROTATE;break;case yi.PAN:if(i.enablePan===!1)return;pe(ne),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case yi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(ne),a=r.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(ne),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Yo)}function ve(ne){switch(we(ne),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;O(ne),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;q(ne),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(ne),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;j(ne),i.update();break;default:a=r.NONE}}function De(ne){i.enabled!==!1&&ne.preventDefault()}function Ie(ne){P.push(ne.pointerId)}function Ne(ne){delete I[ne.pointerId];for(let Me=0;Me<P.length;Me++)if(P[Me]==ne.pointerId){P.splice(Me,1);return}}function we(ne){let Me=I[ne.pointerId];Me===void 0&&(Me=new Ee,I[ne.pointerId]=Me),Me.set(ne.pageX,ne.pageY)}function Ce(ne){const Me=ne.pointerId===P[0]?P[1]:P[0];return I[Me]}i.domElement.addEventListener("contextmenu",De),i.domElement.addEventListener("pointerdown",g),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",J,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}const qb=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const jb=Object.prototype.toString,Yb=n=>jb.call(n)==="[object Object]",Fi=()=>{};function $b(n,e){function t(...i){return new Promise((r,a)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(a)})}return"cancel"in n&&Object.assign(t,{cancel:n.cancel,flush:n.flush,isPending:n.isPending}),t}function Kb(n,e={}){let t,i,r=Fi,a=Fi;const s=Qd(!1),o=c=>{clearTimeout(c),r(),r=Fi};let l;return Object.assign(c=>{const p=Wl(n),d=Wl(e.maxWait);return t&&o(t),p<=0||d!==void 0&&d<=0?(i&&(o(i),i=void 0),s.value=!1,Promise.resolve(c())):(s.value=!0,new Promise((v,m)=>{r=e.rejectOnCancel?m:v,a=v,l=c,d&&!i&&(i=setTimeout(()=>{t&&o(t),i=void 0,s.value=!1,v(l())},d)),t=setTimeout(()=>{i&&o(i),i=void 0,s.value=!1,v(c())},p)}))},{cancel:()=>{t&&(o(t),t=void 0),i&&(o(i),i=void 0),s.value=!1,a=Fi},flush:()=>{if(s.value){t&&(clearTimeout(t),t=void 0),i&&(clearTimeout(i),i=void 0),s.value=!1;const c=a;r=Fi,a=Fi,c(l())}},isPending:ep(s)})}function $o(n){return Array.isArray(n)?n:[n]}function _E(n,e=200,t={}){return $b(Kb(e,t),n)}function Zb(n,e,t){return tp(n,e,Vl(ro({},t),{immediate:!0}))}const Jb=qb?window:void 0;function Qb(n){var e;const t=wa(n);return(e=t==null?void 0:t.$el)!==null&&e!==void 0?e:t}function yE(...n){const e=(i,r,a,s)=>(i.addEventListener(r,a,s),()=>i.removeEventListener(r,a,s)),t=np(()=>{const i=$o(wa(n[0])).filter(r=>r!=null);return i.every(r=>typeof r!="string")?i:void 0});return Zb(()=>{var i,r;return[(i=(r=t.value)===null||r===void 0?void 0:r.map(a=>Qb(a)))!==null&&i!==void 0?i:[Jb].filter(a=>a!=null),$o(wa(t.value?n[1]:n[0])),$o(ip(t.value?n[2]:n[1])),wa(t.value?n[3]:n[2])]},([i,r,a,s],o,l)=>{if(!(i!=null&&i.length)||!(r!=null&&r.length)||!(a!=null&&a.length))return;const u=Yb(s)?ro({},s):s,c=i.flatMap(p=>r.flatMap(d=>a.map(v=>e(p,d,v,u))));l(()=>{c.forEach(p=>p())})},{flush:"post"})}var Ko={},Zo={exports:{}},$c;function Qe(){return $c||($c=1,(function(n){function e(t){return t&&t.__esModule?t:{default:t}}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(Zo)),Zo.exports}var Jo={},Qo={exports:{}},es={exports:{}},ts={exports:{}},Kc;function wt(){return Kc||(Kc=1,(function(n){function e(t){"@babel/helpers - typeof";return n.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n.exports.__esModule=!0,n.exports.default=n.exports,e(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(ts)),ts.exports}var ns={exports:{}},Zc;function eM(){return Zc||(Zc=1,(function(n){var e=wt().default;function t(i,r){if(e(i)!="object"||!i)return i;var a;if(typeof Symbol!="undefined"&&(a=i[Symbol.toPrimitive])!==void 0){var s=a.call(i,r||"default");if(e(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(i)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(ns)),ns.exports}var Jc;function tM(){return Jc||(Jc=1,(function(n){var e=wt().default,t=eM();function i(r){var a=t(r,"string");return e(a)=="symbol"?a:a+""}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports})(es)),es.exports}var Qc;function sn(){return Qc||(Qc=1,(function(n){var e=tM();function t(i,r,a){return(r=e(r))in i?Object.defineProperty(i,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[r]=a,i}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(Qo)),Qo.exports}var is={exports:{}},rs={exports:{}},as={exports:{}},ef;function Pd(){return ef||(ef=1,(function(n){function e(t,i){(i==null||i>t.length)&&(i=t.length);for(var r=0,a=Array(i);r<i;r++)a[r]=t[r];return a}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(as)),as.exports}var tf;function nM(){return tf||(tf=1,(function(n){var e=Pd();function t(i){if(Array.isArray(i))return e(i)}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(rs)),rs.exports}var os={exports:{}},nf;function iM(){return nf||(nf=1,(function(n){function e(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(os)),os.exports}var ss={exports:{}},rf;function wd(){return rf||(rf=1,(function(n){var e=Pd();function t(i,r){if(i){if(typeof i=="string")return e(i,r);var a={}.toString.call(i).slice(8,-1);return a==="Object"&&i.constructor&&(a=i.constructor.name),a==="Map"||a==="Set"?Array.from(i):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(i,r):void 0}}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(ss)),ss.exports}var ls={exports:{}},af;function rM(){return af||(af=1,(function(n){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(ls)),ls.exports}var of;function _t(){return of||(of=1,(function(n){var e=nM(),t=iM(),i=wd(),r=rM();function a(s){return e(s)||t(s)||i(s)||r()}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports})(is)),is.exports}var us={exports:{}},sf;function Ir(){return sf||(sf=1,(function(n){function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(us)),us.exports}var Ld=(n=>(n.transparent="rgba(0,0,0,0)",n.black="#000000",n.silver="#C0C0C0",n.gray="#808080",n.white="#FFFFFF",n.maroon="#800000",n.red="#FF0000",n.purple="#800080",n.fuchsia="#FF00FF",n.green="#008000",n.lime="#00FF00",n.olive="#808000",n.yellow="#FFFF00",n.navy="#000080",n.blue="#0000FF",n.teal="#008080",n.aqua="#00FFFF",n.aliceblue="#f0f8ff",n.antiquewhite="#faebd7",n.aquamarine="#7fffd4",n.azure="#f0ffff",n.beige="#f5f5dc",n.bisque="#ffe4c4",n.blanchedalmond="#ffebcd",n.blueviolet="#8a2be2",n.brown="#a52a2a",n.burlywood="#deb887",n.cadetblue="#5f9ea0",n.chartreuse="#7fff00",n.chocolate="#d2691e",n.coral="#ff7f50",n.cornflowerblue="#6495ed",n.cornsilk="#fff8dc",n.crimson="#dc143c",n.cyan="#00ffff",n.darkblue="#00008b",n.darkcyan="#008b8b",n.darkgoldenrod="#b8860b",n.darkgray="#a9a9a9",n.darkgreen="#006400",n.darkgrey="#a9a9a9",n.darkkhaki="#bdb76b",n.darkmagenta="#8b008b",n.darkolivegreen="#556b2f",n.darkorange="#ff8c00",n.darkorchid="#9932cc",n.darkred="#8b0000",n.darksalmon="#e9967a",n.darkseagreen="#8fbc8f",n.darkslateblue="#483d8b",n.darkslategray="#2f4f4f",n.darkslategrey="#2f4f4f",n.darkturquoise="#00ced1",n.darkviolet="#9400d3",n.deeppink="#ff1493",n.deepskyblue="#00bfff",n.dimgray="#696969",n.dimgrey="#696969",n.dodgerblue="#1e90ff",n.firebrick="#b22222",n.floralwhite="#fffaf0",n.forestgreen="#228b22",n.gainsboro="#dcdcdc",n.ghostwhite="#f8f8ff",n.gold="#ffd700",n.goldenrod="#daa520",n.greenyellow="#adff2f",n.grey="#808080",n.honeydew="#f0fff0",n.hotpink="#ff69b4",n.indianred="#cd5c5c",n.indigo="#4b0082",n.ivory="#fffff0",n.khaki="#f0e68c",n.lavender="#e6e6fa",n.lavenderblush="#fff0f5",n.lawngreen="#7cfc00",n.lemonchiffon="#fffacd",n.lightblue="#add8e6",n.lightcoral="#f08080",n.lightcyan="#e0ffff",n.lightgoldenrodyellow="#fafad2",n.lightgray="#d3d3d3",n.lightgreen="#90ee90",n.lightgrey="#d3d3d3",n.lightpink="#ffb6c1",n.lightsalmon="#ffa07a",n.lightseagreen="#20b2aa",n.lightskyblue="#87cefa",n.lightslategray="#778899",n.lightslategrey="#778899",n.lightsteelblue="#b0c4de",n.lightyellow="#ffffe0",n.limegreen="#32cd32",n.linen="#faf0e6",n.magenta="#ff00ff",n.mediumaquamarine="#66cdaa",n.mediumblue="#0000cd",n.mediumorchid="#ba55d3",n.mediumpurple="#9370db",n.mediumseagreen="#3cb371",n.mediumslateblue="#7b68ee",n.mediumspringgreen="#00fa9a",n.mediumturquoise="#48d1cc",n.mediumvioletred="#c71585",n.midnightblue="#191970",n.mintcream="#f5fffa",n.mistyrose="#ffe4e1",n.moccasin="#ffe4b5",n.navajowhite="#ffdead",n.oldlace="#fdf5e6",n.olivedrab="#6b8e23",n.orange="#ffa500",n.orangered="#ff4500",n.orchid="#da70d6",n.palegoldenrod="#eee8aa",n.palegreen="#98fb98",n.paleturquoise="#afeeee",n.palevioletred="#db7093",n.papayawhip="#ffefd5",n.peachpuff="#ffdab9",n.peru="#cd853f",n.pink="#ffc0cb",n.plum="#dda0dd",n.powderblue="#b0e0e6",n.rosybrown="#bc8f8f",n.royalblue="#4169e1",n.saddlebrown="#8b4513",n.salmon="#fa8072",n.sandybrown="#f4a460",n.seagreen="#2e8b57",n.seashell="#fff5ee",n.sienna="#a0522d",n.skyblue="#87ceeb",n.slateblue="#6a5acd",n.slategray="#708090",n.snow="#fffafa",n.springgreen="#00ff7f",n.steelblue="#4682b4",n.tan="#d2b48c",n.thistle="#d8bfd8",n.tomato="#ff6347",n.turquoise="#40e0d0",n.violet="#ee82ee",n.wheat="#f5deb3",n.whitesmoke="#f5f5f5",n.yellowgreen="#9acd32",n))(Ld||{});function Za(n){return typeof n!="string"?!1:(n=n.toLowerCase(),/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n))}function aM(n){return typeof n!="string"?!1:(n=n.toLowerCase(),/^(rgb\(|RGB\()/.test(n))}function Rd(n){return typeof n!="string"?!1:(n=n.toLowerCase(),/^(rgba|RGBA)/.test(n))}function Dd(n){return/^(rgb|rgba|RGB|RGBA)/.test(n)}function oM(n){return Ld[n]}function Od(n){if(Za(n)||Dd(n))return n;const e=oM(n);if(!e)throw new Error(`Color: Invalid Input of ${n}`);return e}function sM(n){n=n.replace("#",""),n.length===3&&(n=Array.from(n).map(t=>t+t).join(""));const e=n.split("");return new Array(3).fill(0).map((t,i)=>parseInt(`0x${e[i*2]}${e[i*2+1]}`))}function lM(n){return n.replace(/rgb\(|rgba\(|\)/g,"").split(",").slice(0,3).map(e=>parseInt(e))}function Fr(n){const e=Od(n).toLowerCase();return Za(e)?sM(e):lM(e)}function Nd(n){const e=Od(n);return Rd(e)?Number(e.toLowerCase().split(",").slice(-1)[0].replace(/[)|\s]/g,"")):1}function Ll(n){const e=Fr(n);return e&&[...e,Nd(n)]}function uM(n,e){const t=Fr(n);return typeof e=="number"?`rgba(${t.join(",")},${e})`:`rgb(${t.join(",")})`}function cM(n){if(Za(n))return n;const e=Fr(n),t=i=>Number(i).toString(16).padStart(2,"0");return`#${e.map(t).join("")}`}function Ja(n){if(!Array.isArray(n))throw new Error(`getColorFromRgbValue: ${n} is not an array`);const{length:e}=n;if(e!==3&&e!==4)throw new Error("getColorFromRgbValue: value length should be 3 or 4");return(e===3?"rgb(":"rgba(")+n.join(",")+")"}function fM(n,e=0){let t=Ll(n);return t=t.map((i,r)=>r===3?i:i-Math.ceil(2.55*e)).map(i=>i<0?0:i),Ja(t)}function hM(n,e=0){let t=Ll(n);return t=t.map((i,r)=>r===3?i:i+Math.ceil(2.55*e)).map(i=>i>255?255:i),Ja(t)}function dM(n,e=100){const t=Fr(n);return Ja([...t,e/100])}const pM=Object.freeze(Object.defineProperty({__proto__:null,darken:fM,fade:dM,getColorFromRgbValue:Ja,getOpacity:Nd,getRgbValue:Fr,getRgbaValue:Ll,isHex:Za,isRgb:aM,isRgbOrRgba:Dd,isRgba:Rd,lighten:hM,toHex:cM,toRgb:uM},Symbol.toStringTag,{value:"Module"})),Br=hh(pM);var cs={},fs={},hs={exports:{}},ds={exports:{}},lf;function mM(){return lf||(lf=1,(function(n){function e(t){if(Array.isArray(t))return t}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(ds)),ds.exports}var ps={exports:{}},uf;function vM(){return uf||(uf=1,(function(n){function e(t,i){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var a,s,o,l,u=[],c=!0,p=!1;try{if(o=(r=r.call(t)).next,i===0){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(u.push(a.value),u.length!==i);c=!0);}catch(d){p=!0,s=d}finally{try{if(!c&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(p)throw s}}return u}}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(ps)),ps.exports}var ms={exports:{}},cf;function gM(){return cf||(cf=1,(function(n){function e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(ms)),ms.exports}var ff;function Ut(){return ff||(ff=1,(function(n){var e=mM(),t=vM(),i=wd(),r=gM();function a(s,o){return e(s)||t(s,o)||i(s,o)||r()}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports})(hs)),hs.exports}var hf;function _M(){return hf||(hf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.bezierCurveToPolyline=h,n.getBezierCurveLength=E,n.default=void 0;var t=e(Ut()),i=e(_t()),r=Math.sqrt,a=Math.pow,s=Math.ceil,o=Math.abs,l=50;function u(C){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,U=C.length-1,P=C[0],I=C[U][2],V=C.slice(1),y=V.map(function(w,H){var W=H===0?P:V[H-1][2];return c.apply(void 0,[W].concat((0,i.default)(w)))}),A=new Array(U).fill(l),z=m(y,A),R=f(z,y,V,F);return R.segmentPoints.push(I),R}function c(C,F,U,P){return function(I){var V=1-I,y=a(V,3),A=a(V,2),z=a(I,3),R=a(I,2);return[C[0]*y+3*F[0]*I*A+3*U[0]*R*V+P[0]*z,C[1]*y+3*F[1]*I*A+3*U[1]*R*V+P[1]*z]}}function p(C,F){var U=(0,t.default)(C,2),P=U[0],I=U[1],V=(0,t.default)(F,2),y=V[0],A=V[1];return r(a(P-y,2)+a(I-A,2))}function d(C){return C.reduce(function(F,U){return F+U},0)}function v(C){return C.map(function(F,U){return new Array(F.length-1).fill(0).map(function(P,I){return p(F[I],F[I+1])})})}function m(C,F){return C.map(function(U,P){var I=1/F[P];return new Array(F[P]).fill("").map(function(V,y){return U(y*I)})})}function x(C,F){return C.map(function(U){return U.map(function(P){return o(P-F)})}).map(function(U){return d(U)}).reduce(function(U,P){return U+P},0)}function f(C,F,U,P){var I=4,V=1,y=function(){var R=C.reduce(function(ae,Q){return ae+Q.length},0);C.forEach(function(ae,Q){return ae.push(U[Q][2])});var w=v(C),H=w.reduce(function(ae,Q){return ae+Q.length},0),W=w.map(function(ae){return d(ae)}),M=d(W),D=M/H,L=x(w,D);if(L<=P)return"break";R=s(D/P*R*1.1);var B=W.map(function(ae){return s(ae/M*R)});C=m(F,B),R=C.reduce(function(ae,Q){return ae+Q.length},0);var X=JSON.parse(JSON.stringify(C));X.forEach(function(ae,Q){return ae.push(U[Q][2])}),w=v(X),H=w.reduce(function(ae,Q){return ae+Q.length},0),W=w.map(function(ae){return d(ae)}),M=d(W),D=M/H;var ie=1/R/10;F.forEach(function(ae,Q){for(var re=B[Q],de=new Array(re).fill("").map(function(b,k){return k/B[Q]}),te=0;te<I;te++)for(var se=v([C[Q]])[0],ce=se.map(function(b){return b-D}),pe=0,Y=0;Y<re;Y++){if(Y===0)return;pe+=ce[Y-1],de[Y]-=ie*pe,de[Y]>1&&(de[Y]=1),de[Y]<0&&(de[Y]=0),C[Q][Y]=ae(de[Y])}}),I*=4,V++};do{var A=y();if(A==="break")break}while(I<=1025);return C=C.reduce(function(z,R){return z.concat(R)},[]),{segmentPoints:C,cycles:V,rounds:I}}function h(C){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;if(!C)return console.error("bezierCurveToPolyline: Missing parameters!"),!1;if(!(C instanceof Array))return console.error("bezierCurveToPolyline: Parameter bezierCurve must be an array!"),!1;if(typeof F!="number")return console.error("bezierCurveToPolyline: Parameter precision must be a number!"),!1;var U=u(C,F),P=U.segmentPoints;return P}function E(C){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;if(!C)return console.error("getBezierCurveLength: Missing parameters!"),!1;if(!(C instanceof Array))return console.error("getBezierCurveLength: Parameter bezierCurve must be an array!"),!1;if(typeof F!="number")return console.error("getBezierCurveLength: Parameter precision must be a number!"),!1;var U=u(C,F),P=U.segmentPoints,I=v([P])[0],V=d(I);return V}var S=h;n.default=S})(fs)),fs}var vs={},df;function yM(){return df||(df=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=e(Ut()),i=e(_t());function r(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.25,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25;if(!(u instanceof Array))return console.error("polylineToBezierCurve: Parameter polyline must be an array!"),!1;if(u.length<=2)return console.error("polylineToBezierCurve: Converting to a curve requires at least 3 points!"),!1;var v=u[0],m=u.length-1,x=new Array(m).fill(0).map(function(f,h){return[].concat((0,i.default)(a(u,h,c,p,d)),[u[h+1]])});return c&&s(x,v),x.unshift(u[0]),x}function a(u,c){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,v=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.25,m=u.length;if(!(m<3||c>=m)){var x=c-1;x<0&&(x=p?m+x:0);var f=c+1;f>=m&&(f=p?f-m:m-1);var h=c+2;h>=m&&(h=p?h-m:m-1);var E=u[x],S=u[c],C=u[f],F=u[h];return[[S[0]+d*(C[0]-E[0]),S[1]+d*(C[1]-E[1])],[C[0]-v*(F[0]-S[0]),C[1]-v*(F[1]-S[1])]]}}function s(u,c){var p=u[0],d=u.slice(-1)[0];return u.push([o(d[1],d[2]),o(p[0],c),c]),u}function o(u,c){var p=(0,t.default)(u,2),d=p[0],v=p[1],m=(0,t.default)(c,2),x=m[0],f=m[1],h=x-d,E=f-v;return[x+h,f+E]}var l=r;n.default=l})(vs)),vs}var pf;function Rl(){return pf||(pf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"bezierCurveToPolyline",{enumerable:!0,get:function(){return t.bezierCurveToPolyline}}),Object.defineProperty(n,"getBezierCurveLength",{enumerable:!0,get:function(){return t.getBezierCurveLength}}),Object.defineProperty(n,"polylineToBezierCurve",{enumerable:!0,get:function(){return i.default}}),n.default=void 0;var t=_M(),i=e(yM()),r={bezierCurveToPolyline:t.bezierCurveToPolyline,getBezierCurveLength:t.getBezierCurveLength,polylineToBezierCurve:i.default};n.default=r})(cs)),cs}var gs={},mf;function At(){return mf||(mf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.deepClone=d,n.eliminateBlur=v,n.checkPointIsInCircle=m,n.getTwoPointDistance=x,n.checkPointIsInPolygon=f,n.checkPointIsInSector=h,n.checkPointIsNearPolyline=S,n.checkPointIsInRect=C,n.getRotatePointPos=F,n.getScalePointPos=U,n.getTranslatePointPos=P,n.getDistanceBetweenPointAndLine=I,n.getCircleRadianPoint=V,n.getRegularPolygonPoints=y,n.default=void 0;var t=e(_t()),i=e(Ut()),r=e(wt()),a=Math.abs,s=Math.sqrt,o=Math.sin,l=Math.cos,u=Math.max,c=Math.min,p=Math.PI;function d(z){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!z)return z;var w=JSON.parse,H=JSON.stringify;if(!R)return w(H(z));var W=z instanceof Array?[]:{};if(z&&(0,r.default)(z)==="object")for(var M in z)z.hasOwnProperty(M)&&(z[M]&&(0,r.default)(z[M])==="object"?W[M]=d(z[M],!0):W[M]=z[M]);return W}function v(z){return z.map(function(R){var w=(0,i.default)(R,2),H=w[0],W=w[1];return[parseInt(H)+.5,parseInt(W)+.5]})}function m(z,R,w,H){return x(z,[R,w])<=H}function x(z,R){var w=(0,i.default)(z,2),H=w[0],W=w[1],M=(0,i.default)(R,2),D=M[0],L=M[1],B=a(H-D),X=a(W-L);return s(B*B+X*X)}function f(z,R){for(var w=0,H=(0,i.default)(z,2),W=H[0],M=H[1],D=R.length,L=1,B=R[0];L<=D;L++){var X=R[L%D];if(W>c(B[0],X[0])&&W<=u(B[0],X[0])&&M<=u(B[1],X[1])&&B[0]!==X[0]){var ie=(W-B[0])*(X[1]-B[1])/(X[0]-B[0])+B[1];(B[1]===X[1]||M<=ie)&&w++}B=X}return w%2===1}function h(z,R,w,H,W,M,D){if(!z||x(z,[R,w])>H)return!1;if(!D){var L=d([M,W]),B=(0,i.default)(L,2);W=B[0],M=B[1]}var X=W>M;if(X){var ie=[M,W];W=ie[0],M=ie[1]}var ae=M-W;if(ae>=p*2)return!0;var Q=(0,i.default)(z,2),re=Q[0],de=Q[1],te=V(R,w,H,W),se=(0,i.default)(te,2),ce=se[0],pe=se[1],Y=V(R,w,H,M),b=(0,i.default)(Y,2),k=b[0],O=b[1],q=[re-R,de-w],Z=[ce-R,pe-w],N=[k-R,O-w],j=ae>p;if(j){var g=d([N,Z]),_=(0,i.default)(g,2);Z=_[0],N=_[1]}var T=E(Z,q)&&!E(N,q);return j&&(T=!T),X&&(T=!T),T}function E(z,R){var w=(0,i.default)(z,2),H=w[0],W=w[1],M=(0,i.default)(R,2),D=M[0],L=M[1];return-W*D+H*L>0}function S(z,R,w){var H=w/2,W=R.map(function(L){var B=(0,i.default)(L,2),X=B[0],ie=B[1];return[X,ie-H]}),M=R.map(function(L){var B=(0,i.default)(L,2),X=B[0],ie=B[1];return[X,ie+H]}),D=[].concat((0,t.default)(W),(0,t.default)(M.reverse()));return f(z,D)}function C(z,R,w,H,W){var M=(0,i.default)(z,2),D=M[0],L=M[1];return!(D<R||L<w||D>R+H||L>w+W)}function F(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,R=arguments.length>1?arguments[1]:void 0,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0];if(!R)return!1;if(z%360===0)return R;var H=(0,i.default)(R,2),W=H[0],M=H[1],D=(0,i.default)(w,2),L=D[0],B=D[1];return z*=p/180,[(W-L)*l(z)-(M-B)*o(z)+L,(W-L)*o(z)+(M-B)*l(z)+B]}function U(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[1,1],R=arguments.length>1?arguments[1]:void 0,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0];if(!R)return!1;if(z===1)return R;var H=(0,i.default)(R,2),W=H[0],M=H[1],D=(0,i.default)(w,2),L=D[0],B=D[1],X=(0,i.default)(z,2),ie=X[0],ae=X[1],Q=W-L,re=M-B;return[Q*ie+L,re*ae+B]}function P(z,R){if(!z||!R)return!1;var w=(0,i.default)(R,2),H=w[0],W=w[1],M=(0,i.default)(z,2),D=M[0],L=M[1];return[H+D,W+L]}function I(z,R,w){if(!z||!R||!w)return!1;var H=(0,i.default)(z,2),W=H[0],M=H[1],D=(0,i.default)(R,2),L=D[0],B=D[1],X=(0,i.default)(w,2),ie=X[0],ae=X[1],Q=ae-B,re=L-ie,de=B*(ie-L)-L*(ae-B),te=a(Q*W+re*M+de),se=s(Q*Q+re*re);return te/se}function V(z,R,w,H){return[z+l(H)*w,R+o(H)*w]}function y(z,R,w,H){var W=arguments.length>4&&arguments[4]!==void 0?arguments[4]:p*-.5,M=p*2/H,D=new Array(H).fill("").map(function(L,B){return B*M+W});return D.map(function(L){return V(z,R,w,L)})}var A={deepClone:d,eliminateBlur:v,checkPointIsInCircle:m,checkPointIsInPolygon:f,checkPointIsInSector:h,checkPointIsNearPolyline:S,getTwoPointDistance:x,getRotatePointPos:F,getScalePointPos:U,getTranslatePointPos:P,getCircleRadianPoint:V,getRegularPolygonPoints:y,getDistanceBetweenPointAndLine:I};n.default=A})(gs)),gs}var _s={},ys={},vf;function xM(){return vf||(vf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.drawPolylinePath=i,n.drawBezierCurvePath=r,n.default=void 0;var t=e(_t());function i(s,o){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!s||o.length<2)return!1;l&&s.beginPath(),o.forEach(function(c,p){return c&&(p===0?s.moveTo.apply(s,(0,t.default)(c)):s.lineTo.apply(s,(0,t.default)(c)))}),u&&s.closePath()}function r(s,o){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!s||!o)return!1;u&&s.beginPath(),l&&s.moveTo.apply(s,(0,t.default)(l)),o.forEach(function(p){return p&&s.bezierCurveTo.apply(s,(0,t.default)(p[0]).concat((0,t.default)(p[1]),(0,t.default)(p[2])))}),c&&s.closePath()}var a={drawPolylinePath:i,drawBezierCurvePath:r};n.default=a})(ys)),ys}var gf;function Dl(){return gf||(gf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.extendNewGraph=U,n.default=n.text=n.bezierCurve=n.smoothline=n.polyline=n.regPolygon=n.sector=n.arc=n.ring=n.rect=n.ellipse=n.circle=void 0;var t=e(_t()),i=e(Ut()),r=e(Rl()),a=At(),s=xM(),o=r.default.polylineToBezierCurve,l=r.default.bezierCurveToPolyline,u={shape:{rx:0,ry:0,r:0},validator:function(I){var V=I.shape,y=V.rx,A=V.ry,z=V.r;return typeof y!="number"||typeof A!="number"||typeof z!="number"?(console.error("Circle shape configuration is abnormal!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape;y.beginPath();var z=A.rx,R=A.ry,w=A.r;y.arc(z,R,w>0?w:.01,0,Math.PI*2),y.fill(),y.stroke(),y.closePath()},hoverCheck:function(I,V){var y=V.shape,A=y.rx,z=y.ry,R=y.r;return(0,a.checkPointIsInCircle)(I,A,z,R)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry;A.graphCenter=[z,R]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape;this.attr("shape",{rx:z.rx+y,ry:z.ry+A})}};n.circle=u;var c={shape:{rx:0,ry:0,hr:0,vr:0},validator:function(I){var V=I.shape,y=V.rx,A=V.ry,z=V.hr,R=V.vr;return typeof y!="number"||typeof A!="number"||typeof z!="number"||typeof R!="number"?(console.error("Ellipse shape configuration is abnormal!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape;y.beginPath();var z=A.rx,R=A.ry,w=A.hr,H=A.vr;y.ellipse(z,R,w>0?w:.01,H>0?H:.01,0,0,Math.PI*2),y.fill(),y.stroke(),y.closePath()},hoverCheck:function(I,V){var y=V.shape,A=y.rx,z=y.ry,R=y.hr,w=y.vr,H=Math.max(R,w),W=Math.min(R,w),M=Math.sqrt(H*H-W*W),D=[A-M,z],L=[A+M,z],B=(0,a.getTwoPointDistance)(I,D)+(0,a.getTwoPointDistance)(I,L);return B<=2*H},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry;A.graphCenter=[z,R]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape;this.attr("shape",{rx:z.rx+y,ry:z.ry+A})}};n.ellipse=c;var p={shape:{x:0,y:0,w:0,h:0},validator:function(I){var V=I.shape,y=V.x,A=V.y,z=V.w,R=V.h;return typeof y!="number"||typeof A!="number"||typeof z!="number"||typeof R!="number"?(console.error("Rect shape configuration is abnormal!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape;y.beginPath();var z=A.x,R=A.y,w=A.w,H=A.h;y.rect(z,R,w,H),y.fill(),y.stroke(),y.closePath()},hoverCheck:function(I,V){var y=V.shape,A=y.x,z=y.y,R=y.w,w=y.h;return(0,a.checkPointIsInRect)(I,A,z,R,w)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.x,R=y.y,w=y.w,H=y.h;A.graphCenter=[z+w/2,R+H/2]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape;this.attr("shape",{x:z.x+y,y:z.y+A})}};n.rect=p;var d={shape:{rx:0,ry:0,r:0},validator:function(I){var V=I.shape,y=V.rx,A=V.ry,z=V.r;return typeof y!="number"||typeof A!="number"||typeof z!="number"?(console.error("Ring shape configuration is abnormal!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape;y.beginPath();var z=A.rx,R=A.ry,w=A.r;y.arc(z,R,w>0?w:.01,0,Math.PI*2),y.stroke(),y.closePath()},hoverCheck:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry,w=y.r,H=A.lineWidth,W=H/2,M=w-W,D=w+W,L=(0,a.getTwoPointDistance)(I,[z,R]);return L>=M&&L<=D},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry;A.graphCenter=[z,R]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape;this.attr("shape",{rx:z.rx+y,ry:z.ry+A})}};n.ring=d;var v={shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(I){var V=I.shape,y=["rx","ry","r","startAngle","endAngle"];return y.find(function(A){return typeof V[A]!="number"})?(console.error("Arc shape configuration is abnormal!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape;y.beginPath();var z=A.rx,R=A.ry,w=A.r,H=A.startAngle,W=A.endAngle,M=A.clockWise;y.arc(z,R,w>0?w:.001,H,W,!M),y.stroke(),y.closePath()},hoverCheck:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry,w=y.r,H=y.startAngle,W=y.endAngle,M=y.clockWise,D=A.lineWidth,L=D/2,B=w-L,X=w+L;return!(0,a.checkPointIsInSector)(I,z,R,B,H,W,M)&&(0,a.checkPointIsInSector)(I,z,R,X,H,W,M)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry;A.graphCenter=[z,R]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape;this.attr("shape",{rx:z.rx+y,ry:z.ry+A})}};n.arc=v;var m={shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(I){var V=I.shape,y=["rx","ry","r","startAngle","endAngle"];return y.find(function(A){return typeof V[A]!="number"})?(console.error("Sector shape configuration is abnormal!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape;y.beginPath();var z=A.rx,R=A.ry,w=A.r,H=A.startAngle,W=A.endAngle,M=A.clockWise;y.arc(z,R,w>0?w:.01,H,W,!M),y.lineTo(z,R),y.closePath(),y.stroke(),y.fill()},hoverCheck:function(I,V){var y=V.shape,A=y.rx,z=y.ry,R=y.r,w=y.startAngle,H=y.endAngle,W=y.clockWise;return(0,a.checkPointIsInSector)(I,A,z,R,w,H,W)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry;A.graphCenter=[z,R]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape,R=z.rx,w=z.ry;this.attr("shape",{rx:R+y,ry:w+A})}};n.sector=m;var x={shape:{rx:0,ry:0,r:0,side:0},validator:function(I){var V=I.shape,y=V.side,A=["rx","ry","r","side"];return A.find(function(z){return typeof V[z]!="number"})?(console.error("RegPolygon shape configuration is abnormal!"),!1):y<3?(console.error("RegPolygon at least trigon!"),!1):!0},draw:function(I,V){var y=I.ctx,A=V.shape,z=V.cache;y.beginPath();var R=A.rx,w=A.ry,H=A.r,W=A.side;if(!z.points||z.rx!==R||z.ry!==w||z.r!==H||z.side!==W){var M=(0,a.getRegularPolygonPoints)(R,w,H,W);Object.assign(z,{points:M,rx:R,ry:w,r:H,side:W})}var D=z.points;(0,s.drawPolylinePath)(y,D),y.closePath(),y.stroke(),y.fill()},hoverCheck:function(I,V){var y=V.cache,A=y.points;return(0,a.checkPointIsInPolygon)(I,A)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.rx,R=y.ry;A.graphCenter=[z,R]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape,R=V.cache,w=z.rx,H=z.ry;R.rx+=y,R.ry+=A,this.attr("shape",{rx:w+y,ry:H+A}),R.points=R.points.map(function(W){var M=(0,i.default)(W,2),D=M[0],L=M[1];return[D+y,L+A]})}};n.regPolygon=x;var f={shape:{points:[],close:!1},validator:function(I){var V=I.shape,y=V.points;return y instanceof Array?!0:(console.error("Polyline points should be an array!"),!1)},draw:function(I,V){var y=I.ctx,A=V.shape,z=V.style.lineWidth;y.beginPath();var R=A.points,w=A.close;z===1&&(R=(0,a.eliminateBlur)(R)),(0,s.drawPolylinePath)(y,R),w&&(y.closePath(),y.fill()),y.stroke()},hoverCheck:function(I,V){var y=V.shape,A=V.style,z=y.points,R=y.close,w=A.lineWidth;return R?(0,a.checkPointIsInPolygon)(I,z):(0,a.checkPointIsNearPolyline)(I,z,w)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.points;A.graphCenter=z[0]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape,R=z.points,w=R.map(function(H){var W=(0,i.default)(H,2),M=W[0],D=W[1];return[M+y,D+A]});this.attr("shape",{points:w})}};n.polyline=f;var h={shape:{points:[],close:!1},validator:function(I){var V=I.shape,y=V.points;return y instanceof Array?!0:(console.error("Smoothline points should be an array!"),!1)},draw:function(I,V){var y=I.ctx,A=V.shape,z=V.cache,R=A.points,w=A.close;if(!z.points||z.points.toString()!==R.toString()){var H=o(R,w),W=l(H);Object.assign(z,{points:(0,a.deepClone)(R,!0),bezierCurve:H,hoverPoints:W})}var M=z.bezierCurve;y.beginPath(),(0,s.drawBezierCurvePath)(y,M.slice(1),M[0]),w&&(y.closePath(),y.fill()),y.stroke()},hoverCheck:function(I,V){var y=V.cache,A=V.shape,z=V.style,R=y.hoverPoints,w=A.close,H=z.lineWidth;return w?(0,a.checkPointIsInPolygon)(I,R):(0,a.checkPointIsNearPolyline)(I,R,H)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.points;A.graphCenter=z[0]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape,R=V.cache,w=z.points,H=w.map(function(B){var X=(0,i.default)(B,2),ie=X[0],ae=X[1];return[ie+y,ae+A]});R.points=H;var W=(0,i.default)(R.bezierCurve[0],2),M=W[0],D=W[1],L=R.bezierCurve.slice(1);R.bezierCurve=[[M+y,D+A]].concat((0,t.default)(L.map(function(B){return B.map(function(X){var ie=(0,i.default)(X,2),ae=ie[0],Q=ie[1];return[ae+y,Q+A]})}))),R.hoverPoints=R.hoverPoints.map(function(B){var X=(0,i.default)(B,2),ie=X[0],ae=X[1];return[ie+y,ae+A]}),this.attr("shape",{points:H})}};n.smoothline=h;var E={shape:{points:[],close:!1},validator:function(I){var V=I.shape,y=V.points;return y instanceof Array?!0:(console.error("BezierCurve points should be an array!"),!1)},draw:function(I,V){var y=I.ctx,A=V.shape,z=V.cache,R=A.points,w=A.close;if(!z.points||z.points.toString()!==R.toString()){var H=l(R,20);Object.assign(z,{points:(0,a.deepClone)(R,!0),hoverPoints:H})}y.beginPath(),(0,s.drawBezierCurvePath)(y,R.slice(1),R[0]),w&&(y.closePath(),y.fill()),y.stroke()},hoverCheck:function(I,V){var y=V.cache,A=V.shape,z=V.style,R=y.hoverPoints,w=A.close,H=z.lineWidth;return w?(0,a.checkPointIsInPolygon)(I,R):(0,a.checkPointIsNearPolyline)(I,R,H)},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.points;A.graphCenter=z[0]},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape,R=V.cache,w=z.points,H=(0,i.default)(w[0],2),W=H[0],M=H[1],D=w.slice(1),L=[[W+y,M+A]].concat((0,t.default)(D.map(function(B){return B.map(function(X){var ie=(0,i.default)(X,2),ae=ie[0],Q=ie[1];return[ae+y,Q+A]})})));R.points=L,R.hoverPoints=R.hoverPoints.map(function(B){var X=(0,i.default)(B,2),ie=X[0],ae=X[1];return[ie+y,ae+A]}),this.attr("shape",{points:L})}};n.bezierCurve=E;var S={shape:{content:"",position:[],maxWidth:void 0,rowGap:0},validator:function(I){var V=I.shape,y=V.content,A=V.position,z=V.rowGap;return typeof y!="string"?(console.error("Text content should be a string!"),!1):A instanceof Array?typeof z!="number"?(console.error("Text rowGap should be a number!"),!1):!0:(console.error("Text position should be an array!"),!1)},draw:function(I,V){var y=I.ctx,A=V.shape,z=A.content,R=A.position,w=A.maxWidth,H=A.rowGap,W=y.textBaseline,M=y.font,D=parseInt(M.replace(/\D/g,"")),L=R,B=(0,i.default)(L,2),X=B[0],ie=B[1];z=z.split(`
`);var ae=z.length,Q=D+H,re=ae*Q-H,de=0;W==="middle"&&(de=re/2,ie+=D/2),W==="bottom"&&(de=re,ie+=D),R=new Array(ae).fill(0).map(function(te,se){return[X,ie+se*Q-de]}),y.beginPath(),z.forEach(function(te,se){y.fillText.apply(y,[te].concat((0,t.default)(R[se]),[w])),y.strokeText.apply(y,[te].concat((0,t.default)(R[se]),[w]))}),y.closePath()},hoverCheck:function(I,V){return V.shape,V.style,!1},setGraphCenter:function(I,V){var y=V.shape,A=V.style,z=y.position;A.graphCenter=(0,t.default)(z)},move:function(I,V){var y=I.movementX,A=I.movementY,z=V.shape,R=(0,i.default)(z.position,2),w=R[0],H=R[1];this.attr("shape",{position:[w+y,H+A]})}};n.text=S;var C=new Map([["circle",u],["ellipse",c],["rect",p],["ring",d],["arc",v],["sector",m],["regPolygon",x],["polyline",f],["smoothline",h],["bezierCurve",E],["text",S]]),F=C;n.default=F;function U(P,I){if(!P||!I){console.error("ExtendNewGraph Missing Parameters!");return}if(!I.shape){console.error("Required attribute of shape to extendNewGraph!");return}if(!I.validator){console.error("Required function of validator to extendNewGraph!");return}if(!I.draw){console.error("Required function of draw to extendNewGraph!");return}C.set(P,I)}})(_s)),_s}var xs={},Ss={exports:{}},bs={exports:{}},_f;function Ud(){return _f||(_f=1,(function(n){function e(t,i){this.v=t,this.k=i}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(bs)),bs.exports}var Ms={exports:{}},Es={exports:{}},yf;function Id(){return yf||(yf=1,(function(n){function e(t,i,r,a){var s=Object.defineProperty;try{s({},"",{})}catch(o){s=0}n.exports=e=function(l,u,c,p){function d(v,m){e(l,v,function(x){return this._invoke(v,m,x)})}u?s?s(l,u,{value:c,enumerable:!p,configurable:!p,writable:!p}):l[u]=c:(d("next",0),d("throw",1),d("return",2))},n.exports.__esModule=!0,n.exports.default=n.exports,e(t,i,r,a)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(Es)),Es.exports}var xf;function Fd(){return xf||(xf=1,(function(n){var e=Id();function t(){var i,r,a=typeof Symbol=="function"?Symbol:{},s=a.iterator||"@@iterator",o=a.toStringTag||"@@toStringTag";function l(f,h,E,S){var C=h&&h.prototype instanceof c?h:c,F=Object.create(C.prototype);return e(F,"_invoke",(function(U,P,I){var V,y,A,z=0,R=I||[],w=!1,H={p:0,n:0,v:i,a:W,f:W.bind(i,4),d:function(D,L){return V=D,y=0,A=i,H.n=L,u}};function W(M,D){for(y=M,A=D,r=0;!w&&z&&!L&&r<R.length;r++){var L,B=R[r],X=H.p,ie=B[2];M>3?(L=ie===D)&&(A=B[(y=B[4])?5:(y=3,3)],B[4]=B[5]=i):B[0]<=X&&((L=M<2&&X<B[1])?(y=0,H.v=D,H.n=B[1]):X<ie&&(L=M<3||B[0]>D||D>ie)&&(B[4]=M,B[5]=D,H.n=ie,y=0))}if(L||M>1)return u;throw w=!0,D}return function(M,D,L){if(z>1)throw TypeError("Generator is already running");for(w&&D===1&&W(D,L),y=D,A=L;(r=y<2?i:A)||!w;){V||(y?(y>1&&(H.n=y<3?-1:A),W(y,A)):H.v=A);try{if(z=2,V){if(y||(M="next"),r=V[M]){if(!(r=r.call(V,A)))throw TypeError("iterator result is not an object");if(!r.done)return r;A=r.value,y<2&&(y=0)}else y===1&&(r=V.return)&&r.call(V),y<2&&(A=TypeError("The iterator does not provide a '"+M+"' method"),y=1);V=i}else if((r=(w=H.n<0)?A:U.call(P,H))!==u)break}catch(B){V=i,y=1,A=B}finally{z=1}}return{value:r,done:w}}})(f,E,S),!0),F}var u={};function c(){}function p(){}function d(){}r=Object.getPrototypeOf;var v=[][s]?r(r([][s]())):(e(r={},s,function(){return this}),r),m=d.prototype=c.prototype=Object.create(v);function x(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,d):(f.__proto__=d,e(f,o,"GeneratorFunction")),f.prototype=Object.create(m),f}return p.prototype=d,e(m,"constructor",d),e(d,"constructor",p),p.displayName="GeneratorFunction",e(d,o,"GeneratorFunction"),e(m),e(m,o,"Generator"),e(m,s,function(){return this}),e(m,"toString",function(){return"[object Generator]"}),(n.exports=t=function(){return{w:l,m:x}},n.exports.__esModule=!0,n.exports.default=n.exports)()}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(Ms)),Ms.exports}var As={exports:{}},Ts={exports:{}},Cs={exports:{}},Sf;function Bd(){return Sf||(Sf=1,(function(n){var e=Ud(),t=Id();function i(r,a){function s(l,u,c,p){try{var d=r[l](u),v=d.value;return v instanceof e?a.resolve(v.v).then(function(m){s("next",m,c,p)},function(m){s("throw",m,c,p)}):a.resolve(v).then(function(m){d.value=m,c(d)},function(m){return s("throw",m,c,p)})}catch(m){p(m)}}var o;this.next||(t(i.prototype),t(i.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),t(this,"_invoke",function(l,u,c){function p(){return new a(function(d,v){s(l,c,d,v)})}return o=o?o.then(p,p):p()},!0)}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports})(Cs)),Cs.exports}var bf;function Gd(){return bf||(bf=1,(function(n){var e=Fd(),t=Bd();function i(r,a,s,o,l){return new t(e().w(r,a,s,o),l||Promise)}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports})(Ts)),Ts.exports}var Mf;function SM(){return Mf||(Mf=1,(function(n){var e=Gd();function t(i,r,a,s,o){var l=e(i,r,a,s,o);return l.next().then(function(u){return u.done?u.value:l.next()})}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(As)),As.exports}var Ps={exports:{}},Ef;function bM(){return Ef||(Ef=1,(function(n){function e(t){var i=Object(t),r=[];for(var a in i)r.unshift(a);return function s(){for(;r.length;)if((a=r.pop())in i)return s.value=a,s.done=!1,s;return s.done=!0,s}}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports})(Ps)),Ps.exports}var ws={exports:{}},Af;function MM(){return Af||(Af=1,(function(n){var e=wt().default;function t(i){if(i!=null){var r=i[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],a=0;if(r)return r.call(i);if(typeof i.next=="function")return i;if(!isNaN(i.length))return{next:function(){return i&&a>=i.length&&(i=void 0),{value:i&&i[a++],done:!i}}}}throw new TypeError(e(i)+" is not iterable")}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(ws)),ws.exports}var Tf;function EM(){return Tf||(Tf=1,(function(n){var e=Ud(),t=Fd(),i=SM(),r=Gd(),a=Bd(),s=bM(),o=MM();function l(){var u=t(),c=u.m(l),p=(Object.getPrototypeOf?Object.getPrototypeOf(c):c.__proto__).constructor;function d(x){var f=typeof x=="function"&&x.constructor;return!!f&&(f===p||(f.displayName||f.name)==="GeneratorFunction")}var v={throw:1,return:2,break:3,continue:3};function m(x){var f,h;return function(E){f||(f={stop:function(){return h(E.a,2)},catch:function(){return E.v},abrupt:function(C,F){return h(E.a,v[C],F)},delegateYield:function(C,F,U){return f.resultName=F,h(E.d,o(C),U)},finish:function(C){return h(E.f,C)}},h=function(C,F,U){E.p=f.prev,E.n=f.next;try{return C(F,U)}finally{f.next=E.n}}),f.resultName&&(f[f.resultName]=E.v,f.resultName=void 0),f.sent=E.v,f.next=E.n;try{return x.call(this,f)}finally{E.p=f.prev,E.n=f.next}}}return(n.exports=l=function(){return{wrap:function(h,E,S,C){return u.w(m(h),E,S,C&&C.reverse())},isGeneratorFunction:d,mark:u.m,awrap:function(h,E){return new e(h,E)},AsyncIterator:a,async:function(h,E,S,C,F){return(d(E)?r:i)(m(h),E,S,C,F)},keys:s,values:o}},n.exports.__esModule=!0,n.exports.default=n.exports)()}n.exports=l,n.exports.__esModule=!0,n.exports.default=n.exports})(Ss)),Ss.exports}var Ls,Cf;function AM(){if(Cf)return Ls;Cf=1;var n=EM()();Ls=n;try{regeneratorRuntime=n}catch(e){typeof globalThis=="object"?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}return Ls}var Rs={exports:{}},Pf;function TM(){return Pf||(Pf=1,(function(n){function e(i,r,a,s,o,l,u){try{var c=i[l](u),p=c.value}catch(d){return void a(d)}c.done?r(p):Promise.resolve(p).then(s,o)}function t(i){return function(){var r=this,a=arguments;return new Promise(function(s,o){var l=i.apply(r,a);function u(p){e(l,s,o,u,c,"next",p)}function c(p){e(l,s,o,u,c,"throw",p)}u(void 0)})}}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports})(Rs)),Rs.exports}var Ds={},wf;function CM(){return wf||(wf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=e(_t()),i=e(Ir()),r=Br,a=At(),s=function v(m){(0,i.default)(this,v),this.colorProcessor(m);var x={fill:[0,0,0,1],stroke:[0,0,0,0],opacity:1,lineCap:null,lineJoin:null,lineDash:null,lineDashOffset:null,shadowBlur:0,shadowColor:[0,0,0,0],shadowOffsetX:0,shadowOffsetY:0,lineWidth:0,graphCenter:null,scale:null,rotate:null,translate:null,hoverCursor:"pointer",fontStyle:"normal",fontVarient:"normal",fontWeight:"normal",fontSize:10,fontFamily:"Arial",textAlign:"center",textBaseline:"middle",gradientColor:null,gradientType:"linear",gradientParams:null,gradientWith:"stroke",gradientStops:"auto",colors:null};Object.assign(this,x,m)};n.default=s,s.prototype.colorProcessor=function(v){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,x=m?r.getColorFromRgbValue:r.getRgbaValue,f=["fill","stroke","shadowColor"],h=Object.keys(v),E=h.filter(function(U){return f.find(function(P){return P===U})});E.forEach(function(U){return v[U]=x(v[U])});var S=v.gradientColor,C=v.colors;if(S&&(v.gradientColor=S.map(function(U){return x(U)})),C){var F=Object.keys(C);F.forEach(function(U){return C[U]=x(C[U])})}},s.prototype.initStyle=function(v){o(v,this),u(v,this),c(v,this)};function o(v,m){v.save();var x=m.graphCenter,f=m.rotate,h=m.scale,E=m.translate;x instanceof Array&&(v.translate.apply(v,(0,t.default)(x)),f&&v.rotate(f*Math.PI/180),h instanceof Array&&v.scale.apply(v,(0,t.default)(h)),E&&v.translate.apply(v,(0,t.default)(E)),v.translate(-x[0],-x[1]))}var l=["lineCap","lineJoin","lineDashOffset","shadowOffsetX","shadowOffsetY","lineWidth","textAlign","textBaseline"];function u(v,m){var x=m.fill,f=m.stroke,h=m.shadowColor,E=m.opacity;l.forEach(function(y){(y||typeof y=="number")&&(v[y]=m[y])}),x=(0,t.default)(x),f=(0,t.default)(f),h=(0,t.default)(h),x[3]*=E,f[3]*=E,h[3]*=E,v.fillStyle=(0,r.getColorFromRgbValue)(x),v.strokeStyle=(0,r.getColorFromRgbValue)(f),v.shadowColor=(0,r.getColorFromRgbValue)(h);var S=m.lineDash,C=m.shadowBlur;S&&(S=S.map(function(y){return y>=0?y:0}),v.setLineDash(S)),typeof C=="number"&&(v.shadowBlur=C>0?C:.001);var F=m.fontStyle,U=m.fontVarient,P=m.fontWeight,I=m.fontSize,V=m.fontFamily;v.font=F+" "+U+" "+P+" "+I+"px "+V}function c(v,m){if(p(m)){var x=m.gradientColor,f=m.gradientParams,h=m.gradientType,E=m.gradientWith,S=m.gradientStops,C=m.opacity;x=x.map(function(U){var P=U[3]*C,I=(0,t.default)(U);return I[3]=P,I}),x=x.map(function(U){return(0,r.getColorFromRgbValue)(U)}),S==="auto"&&(S=d(x));var F=v["create".concat(h.slice(0,1).toUpperCase()+h.slice(1),"Gradient")].apply(v,(0,t.default)(f));S.forEach(function(U,P){return F.addColorStop(U,x[P])}),v["".concat(E,"Style")]=F}}function p(v){var m=v.gradientColor,x=v.gradientParams,f=v.gradientType,h=v.gradientWith,E=v.gradientStops;if(!m||!x)return!1;if(m.length===1)return console.warn("The gradient needs to provide at least two colors"),!1;if(f!=="linear"&&f!=="radial")return console.warn("GradientType only supports linear or radial, current value is "+f),!1;var S=x.length;return f==="linear"&&S!==4||f==="radial"&&S!==6?(console.warn("The expected length of gradientParams is "+(f==="linear"?"4":"6")),!1):h!=="fill"&&h!=="stroke"?(console.warn("GradientWith only supports fill or stroke, current value is "+h),!1):E!=="auto"&&!(E instanceof Array)?(console.warn("gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is "+E),!1):!0}function d(v){var m=1/(v.length-1);return v.map(function(x,f){return m*f})}s.prototype.restoreTransform=function(v){v.restore()},s.prototype.update=function(v){this.colorProcessor(v),Object.assign(this,v)},s.prototype.getStyle=function(){var v=(0,a.deepClone)(this,!0);return this.colorProcessor(v,!0),v}})(Ds)),Ds}var Os={},Ns={},Lf;function PM(){return Lf||(Lf=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.easeInOutBounce=n.easeOutBounce=n.easeInBounce=n.easeInOutElastic=n.easeOutElastic=n.easeInElastic=n.easeInOutBack=n.easeOutBack=n.easeInBack=n.easeInOutQuint=n.easeOutQuint=n.easeInQuint=n.easeInOutQuart=n.easeOutQuart=n.easeInQuart=n.easeInOutCubic=n.easeOutCubic=n.easeInCubic=n.easeInOutQuad=n.easeOutQuad=n.easeInQuad=n.easeInOutSine=n.easeOutSine=n.easeInSine=n.linear=void 0;var e=[[[0,1],"",[.33,.67]],[[1,0],[.67,.33]]];n.linear=e;var t=[[[0,1]],[[.538,.564],[.169,.912],[.88,.196]],[[1,0]]];n.easeInSine=t;var i=[[[0,1]],[[.444,.448],[.169,.736],[.718,.16]],[[1,0]]];n.easeOutSine=i;var r=[[[0,1]],[[.5,.5],[.2,1],[.8,0]],[[1,0]]];n.easeInOutSine=r;var a=[[[0,1]],[[.55,.584],[.231,.904],[.868,.264]],[[1,0]]];n.easeInQuad=a;var s=[[[0,1]],[[.413,.428],[.065,.816],[.76,.04]],[[1,0]]];n.easeOutQuad=s;var o=[[[0,1]],[[.5,.5],[.3,.9],[.7,.1]],[[1,0]]];n.easeInOutQuad=o;var l=[[[0,1]],[[.679,.688],[.366,.992],[.992,.384]],[[1,0]]];n.easeInCubic=l;var u=[[[0,1]],[[.321,.312],[.008,.616],[.634,.008]],[[1,0]]];n.easeOutCubic=u;var c=[[[0,1]],[[.5,.5],[.3,1],[.7,0]],[[1,0]]];n.easeInOutCubic=c;var p=[[[0,1]],[[.812,.74],[.611,.988],[1.013,.492]],[[1,0]]];n.easeInQuart=p;var d=[[[0,1]],[[.152,.244],[.001,.448],[.285,-.02]],[[1,0]]];n.easeOutQuart=d;var v=[[[0,1]],[[.5,.5],[.4,1],[.6,0]],[[1,0]]];n.easeInOutQuart=v;var m=[[[0,1]],[[.857,.856],[.714,1],[1,.712]],[[1,0]]];n.easeInQuint=m;var x=[[[0,1]],[[.108,.2],[.001,.4],[.214,-.012]],[[1,0]]];n.easeOutQuint=x;var f=[[[0,1]],[[.5,.5],[.5,1],[.5,0]],[[1,0]]];n.easeInOutQuint=f;var h=[[[0,1]],[[.667,.896],[.38,1.184],[.955,.616]],[[1,0]]];n.easeInBack=h;var E=[[[0,1]],[[.335,.028],[.061,.22],[.631,-.18]],[[1,0]]];n.easeOutBack=E;var S=[[[0,1]],[[.5,.5],[.4,1.4],[.6,-.4]],[[1,0]]];n.easeInOutBack=S;var C=[[[0,1]],[[.474,.964],[.382,.988],[.557,.952]],[[.619,1.076],[.565,1.088],[.669,1.08]],[[.77,.916],[.712,.924],[.847,.904]],[[.911,1.304],[.872,1.316],[.961,1.34]],[[1,0]]];n.easeInElastic=C;var F=[[[0,1]],[[.073,-.32],[.034,-.328],[.104,-.344]],[[.191,.092],[.11,.06],[.256,.08]],[[.31,-.076],[.26,-.068],[.357,-.076]],[[.432,.032],[.362,.028],[.683,-.004]],[[1,0]]];n.easeOutElastic=F;var U=[[[0,1]],[[.21,.94],[.167,.884],[.252,.98]],[[.299,1.104],[.256,1.092],[.347,1.108]],[[.5,.496],[.451,.672],[.548,.324]],[[.696,-.108],[.652,-.112],[.741,-.124]],[[.805,.064],[.756,.012],[.866,.096]],[[1,0]]];n.easeInOutElastic=U;var P=[[[0,1]],[[.148,1],[.075,.868],[.193,.848]],[[.326,1],[.276,.836],[.405,.712]],[[.6,1],[.511,.708],[.671,.348]],[[1,0]]];n.easeInBounce=P;var I=[[[0,1]],[[.357,.004],[.27,.592],[.376,.252]],[[.604,-.004],[.548,.312],[.669,.184]],[[.82,0],[.749,.184],[.905,.132]],[[1,0]]];n.easeOutBounce=I;var V=[[[0,1]],[[.102,1],[.05,.864],[.117,.86]],[[.216,.996],[.208,.844],[.227,.808]],[[.347,.996],[.343,.8],[.48,.292]],[[.635,.004],[.511,.676],[.656,.208]],[[.787,0],[.76,.2],[.795,.144]],[[.905,-.004],[.899,.164],[.944,.144]],[[1,0]]];n.easeInOutBounce=V;var y=new Map([["linear",e],["easeInSine",t],["easeOutSine",i],["easeInOutSine",r],["easeInQuad",a],["easeOutQuad",s],["easeInOutQuad",o],["easeInCubic",l],["easeOutCubic",u],["easeInOutCubic",c],["easeInQuart",p],["easeOutQuart",d],["easeInOutQuart",v],["easeInQuint",m],["easeOutQuint",x],["easeInOutQuint",f],["easeInBack",h],["easeOutBack",E],["easeInOutBack",S],["easeInElastic",C],["easeOutElastic",F],["easeInOutElastic",U],["easeInBounce",P],["easeOutBounce",I],["easeInOutBounce",V]]);n.default=y})(Ns)),Ns}var Rf;function wM(){return Rf||(Rf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.transition=s,n.injectNewCurve=S,n.default=void 0;var t=e(Ut()),i=e(wt()),r=e(PM()),a="linear";function s(F){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:30,V=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!o.apply(void 0,arguments))return!1;try{var y=l(F),A=u(y,I);return!V||typeof P=="number"?m(U,P,A):E(U,P,A)}catch(z){return console.warn("Transition parameter may be abnormal!"),[P]}}function o(F){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:30;if(!F||U===!1||P===!1||!I)return console.error("transition: Missing Parameters!"),!1;if((0,i.default)(U)!==(0,i.default)(P))return console.error("transition: Inconsistent Status Types!"),!1;var V=(0,i.default)(P);return V==="string"||V==="boolean"||!F.length?(console.error("transition: Unsupported Data Type of State!"),!1):(!r.default.has(F)&&!(F instanceof Array)&&console.warn("transition: Transition curve not found, default curve will be used!"),!0)}function l(F){var U="";return r.default.has(F)?U=r.default.get(F):F instanceof Array?U=F:U=r.default.get(a),U}function u(F,U){var P=1/(U-1),I=new Array(U).fill(0).map(function(y,A){return A*P}),V=I.map(function(y){return c(F,y)});return V}function c(F,U){var P=p(F,U),I=d(P,U);return v(P,I)}function p(F,U){var P=F.length-1,I="",V="";F.findIndex(function(w,H){if(H!==P){I=w,V=F[H+1];var W=I[0][0],M=V[0][0];return U>=W&&U<M}});var y=I[0],A=I[2]||I[0],z=V[1]||V[0],R=V[0];return[y,A,z,R]}function d(F,U){var P=F[0][0],I=F[3][0],V=I-P,y=U-P;return y/V}function v(F,U){var P=(0,t.default)(F,4),I=(0,t.default)(P[0],2),V=I[1],y=(0,t.default)(P[1],2),A=y[1],z=(0,t.default)(P[2],2),R=z[1],w=(0,t.default)(P[3],2),H=w[1],W=Math.pow,M=1-U,D=V*W(M,3),L=3*A*U*W(M,2),B=3*R*W(U,2)*M,X=H*W(U,3);return 1-(D+L+B+X)}function m(F,U,P){var I="object";return typeof F=="number"&&(I="number"),F instanceof Array&&(I="array"),I==="number"?x(F,U,P):I==="array"?f(F,U,P):I==="object"?h(F,U,P):P.map(function(V){return U})}function x(F,U,P){var I=U-F;return P.map(function(V){return F+I*V})}function f(F,U,P){var I=U.map(function(V,y){return typeof V!="number"?!1:V-F[y]});return P.map(function(V){return I.map(function(y,A){return y===!1?U[A]:F[A]+y*V})})}function h(F,U,P){var I=Object.keys(U),V=I.map(function(z){return F[z]}),y=I.map(function(z){return U[z]}),A=f(V,y,P);return A.map(function(z){var R={};return z.forEach(function(w,H){return R[I[H]]=w}),R})}function E(F,U,P){var I=m(F,U,P),V=function(R){var w=F[R],H=U[R];if((0,i.default)(H)!=="object")return"continue";var W=E(w,H,P);I.forEach(function(M,D){return M[R]=W[D]})};for(var y in U)var A=V(y);return I}function S(F,U){if(!F||!U){console.error("InjectNewCurve Missing Parameters!");return}r.default.set(F,U)}var C=s;n.default=C})(Os)),Os}var Df;function LM(){return Df||(Df=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=e(AM()),i=e(TM()),r=e(wt()),a=e(_t()),s=e(Ir()),o=e(CM()),l=e(wM()),u=At(),c=function d(v,m){(0,s.default)(this,d),m=(0,u.deepClone)(m,!0);var x={visible:!0,drag:!1,hover:!1,index:1,animationDelay:0,animationFrame:30,animationCurve:"linear",animationPause:!1,hoverRect:null,mouseEnter:null,mouseOuter:null,click:null},f={status:"static",animationRoot:[],animationKeys:[],animationFrameState:[],cache:{}};m.shape||(m.shape={}),m.style||(m.style={});var h=Object.assign({},v.shape,m.shape);Object.assign(x,m,f),Object.assign(this,v,x),this.shape=h,this.style=new o.default(m.style),this.addedProcessor()};n.default=c,c.prototype.addedProcessor=function(){typeof this.setGraphCenter=="function"&&this.setGraphCenter(null,this),typeof this.added=="function"&&this.added(this)},c.prototype.drawProcessor=function(d,v){var m=d.ctx;v.style.initStyle(m),typeof this.beforeDraw=="function"&&this.beforeDraw(this,d),v.draw(d,v),typeof this.drawed=="function"&&this.drawed(this,d),v.style.restoreTransform(m)},c.prototype.hoverCheckProcessor=function(d,v){var m=v.hoverRect,x=v.style,f=v.hoverCheck,h=x.graphCenter,E=x.rotate,S=x.scale,C=x.translate;return h&&(E&&(d=(0,u.getRotatePointPos)(-E,d,h)),S&&(d=(0,u.getScalePointPos)(S.map(function(F){return 1/F}),d,h)),C&&(d=(0,u.getTranslatePointPos)(C.map(function(F){return F*-1}),d))),m?u.checkPointIsInRect.apply(void 0,[d].concat((0,a.default)(m))):f(d,this)},c.prototype.moveProcessor=function(d){this.move(d,this),typeof this.beforeMove=="function"&&this.beforeMove(d,this),typeof this.setGraphCenter=="function"&&this.setGraphCenter(d,this),typeof this.moved=="function"&&this.moved(d,this)},c.prototype.attr=function(d){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(!d||v===void 0)return!1;var m=(0,r.default)(this[d])==="object";m&&(v=(0,u.deepClone)(v,!0));var x=this.render;d==="style"?this.style.update(v):m?Object.assign(this[d],v):this[d]=v,d==="index"&&x.sortGraphsByIndex(),x.drawAllGraph()},c.prototype.animation=(function(){var d=(0,i.default)(t.default.mark(function v(m,x){var f,h,E,S,C,F,U,P,I,V=arguments;return t.default.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(f=V.length>2&&V[2]!==void 0?V[2]:!1,!(m!=="shape"&&m!=="style")){A.next=4;break}return console.error("Only supported shape and style animation!"),A.abrupt("return");case 4:if(x=(0,u.deepClone)(x,!0),m==="style"&&this.style.colorProcessor(x),h=this[m],E=Object.keys(x),S={},E.forEach(function(z){return S[z]=h[z]}),C=this.animationFrame,F=this.animationCurve,U=this.animationDelay,P=(0,l.default)(F,S,x,C,!0),this.animationRoot.push(h),this.animationKeys.push(E),this.animationFrameState.push(P),!f){A.next=17;break}return A.abrupt("return");case 17:if(!(U>0)){A.next=20;break}return A.next=20,p(U);case 20:return I=this.render,A.abrupt("return",new Promise((function(){var z=(0,i.default)(t.default.mark(function R(w){return t.default.wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,I.launchAnimation();case 2:w();case 3:case"end":return W.stop()}},R)}));return function(R){return z.apply(this,arguments)}})()));case 22:case"end":return A.stop()}},v,this)}));return function(v,m){return d.apply(this,arguments)}})(),c.prototype.turnNextAnimationFrame=function(d){var v=this.animationDelay,m=this.animationRoot,x=this.animationKeys,f=this.animationFrameState,h=this.animationPause;h||Date.now()-d<v||(m.forEach(function(E,S){x[S].forEach(function(C){E[C]=f[S][0][C]})}),f.forEach(function(E,S){E.shift();var C=E.length===0;C&&(m[S]=null),C&&(x[S]=null)}),this.animationFrameState=f.filter(function(E){return E.length}),this.animationRoot=m.filter(function(E){return E}),this.animationKeys=x.filter(function(E){return E}))},c.prototype.animationEnd=function(){var d=this.animationFrameState,v=this.animationKeys,m=this.animationRoot,x=this.render;return m.forEach(function(f,h){var E=v[h],S=d[h].pop();E.forEach(function(C){return f[C]=S[C]})}),this.animationFrameState=[],this.animationKeys=[],this.animationRoot=[],x.drawAllGraph()},c.prototype.pauseAnimation=function(){this.attr("animationPause",!0)},c.prototype.playAnimation=function(){var d=this.render;return this.attr("animationPause",!1),new Promise((function(){var v=(0,i.default)(t.default.mark(function m(x){return t.default.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,d.launchAnimation();case 2:x();case 3:case"end":return h.stop()}},m)}));return function(m){return v.apply(this,arguments)}})())},c.prototype.delProcessor=function(d){var v=this,m=d.graphs,x=m.findIndex(function(f){return f===v});x!==-1&&(typeof this.beforeDelete=="function"&&this.beforeDelete(this),m.splice(x,1,null),typeof this.deleted=="function"&&this.deleted(this))};function p(d){return new Promise(function(v){setTimeout(v,d)})}})(xs)),xs}var Of;function RM(){return Of||(Of=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=e(sn()),i=e(_t()),r=e(Ir()),a=e(Br),s=e(Rl()),o=At(),l=e(Dl()),u=e(LM());function c(E,S){var C=Object.keys(E);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(E);S&&(F=F.filter(function(U){return Object.getOwnPropertyDescriptor(E,U).enumerable})),C.push.apply(C,F)}return C}function p(E){for(var S=1;S<arguments.length;S++){var C=arguments[S]!=null?arguments[S]:{};S%2?c(C,!0).forEach(function(F){(0,t.default)(E,F,C[F])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(C)):c(C).forEach(function(F){Object.defineProperty(E,F,Object.getOwnPropertyDescriptor(C,F))})}return E}var d=function E(S){if((0,r.default)(this,E),!S){console.error("CRender Missing parameters!");return}var C=S.getContext("2d"),F=S.clientWidth,U=S.clientHeight,P=[F,U];S.setAttribute("width",F),S.setAttribute("height",U),this.ctx=C,this.area=P,this.animationStatus=!1,this.graphs=[],this.color=a.default,this.bezierCurve=s.default,S.addEventListener("mousedown",x.bind(this)),S.addEventListener("mousemove",f.bind(this)),S.addEventListener("mouseup",h.bind(this))};n.default=d,d.prototype.clearArea=function(){var E,S=this.area;(E=this.ctx).clearRect.apply(E,[0,0].concat((0,i.default)(S)))},d.prototype.add=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=E.name;if(!S){console.error("add Missing parameters!");return}var C=l.default.get(S);if(!C){console.warn("No corresponding graph configuration found!");return}var F=new u.default(C,E);if(F.validator(F))return F.render=this,this.graphs.push(F),this.sortGraphsByIndex(),this.drawAllGraph(),F},d.prototype.sortGraphsByIndex=function(){var E=this.graphs;E.sort(function(S,C){if(S.index>C.index)return 1;if(S.index===C.index)return 0;if(S.index<C.index)return-1})},d.prototype.delGraph=function(E){typeof E.delProcessor=="function"&&(E.delProcessor(this),this.graphs=this.graphs.filter(function(S){return S}),this.drawAllGraph())},d.prototype.delAllGraph=function(){var E=this;this.graphs.forEach(function(S){return S.delProcessor(E)}),this.graphs=this.graphs.filter(function(S){return S}),this.drawAllGraph()},d.prototype.drawAllGraph=function(){var E=this;this.clearArea(),this.graphs.filter(function(S){return S&&S.visible}).forEach(function(S){return S.drawProcessor(E,S)})},d.prototype.launchAnimation=function(){var E=this,S=this.animationStatus;if(!S)return this.animationStatus=!0,new Promise(function(C){v.call(E,function(){E.animationStatus=!1,C()},Date.now())})};function v(E,S){var C=this.graphs;if(!m(C)){E();return}C.forEach(function(F){return F.turnNextAnimationFrame(S)}),this.drawAllGraph(),requestAnimationFrame(v.bind(this,E,S))}function m(E){return E.find(function(S){return!S.animationPause&&S.animationFrameState.length})}function x(E){var S=this.graphs,C=S.find(function(F){return F.status==="hover"});C&&(C.status="active")}function f(E){var S=E.offsetX,C=E.offsetY,F=[S,C],U=this.graphs,P=U.find(function(R){return R.status==="active"||R.status==="drag"});if(P){if(!P.drag)return;if(typeof P.move!="function"){console.error("No move method is provided, cannot be dragged!");return}P.moveProcessor(E),P.status="drag";return}var I=U.find(function(R){return R.status==="hover"}),V=U.filter(function(R){return R.hover&&(typeof R.hoverCheck=="function"||R.hoverRect)}),y=V.find(function(R){return R.hoverCheckProcessor(F,R)});y?document.body.style.cursor=y.style.hoverCursor:document.body.style.cursor="default";var A=!1,z=!1;if(I&&(A=typeof I.mouseOuter=="function"),y&&(z=typeof y.mouseEnter=="function"),!(!y&&!I)){if(!y&&I){A&&I.mouseOuter(E,I),I.status="static";return}if(!(y&&y===I)){if(y&&!I){z&&y.mouseEnter(E,y),y.status="hover";return}y&&I&&y!==I&&(A&&I.mouseOuter(E,I),I.status="static",z&&y.mouseEnter(E,y),y.status="hover")}}}function h(E){var S=this.graphs,C=S.find(function(U){return U.status==="active"}),F=S.find(function(U){return U.status==="drag"});C&&typeof C.click=="function"&&C.click(E,C),S.forEach(function(U){return U&&(U.status="static")}),C&&(C.status="hover"),F&&(F.status="hover")}d.prototype.clone=function(E){var S=E.style.getStyle(),C=p({},E,{style:S});return delete C.render,C=(0,o.deepClone)(C,!0),this.add(C)}})(Jo)),Jo}var Nf;function Ol(){return Nf||(Nf=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"CRender",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(n,"extendNewGraph",{enumerable:!0,get:function(){return i.extendNewGraph}}),n.default=void 0;var t=e(RM()),i=Dl(),r=t.default;n.default=r})(Ko)),Ko}var DM=Ol();const xE=fh(DM);var Uf={},Ht={},If;function Xt(){if(If)return Ht;If=1;var n=Qe();Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.filterNonNumber=r,Ht.deepMerge=a,Ht.mulAdd=s,Ht.mergeSameStackData=o,Ht.getTwoPointDistance=l,Ht.getLinearGradientColor=u,Ht.getPolylineLength=c,Ht.getPointToLineDistance=p,Ht.initNeedSeries=d,Ht.radianToAngle=v;var e=n(_t()),t=n(wt()),i=At();function r(m){return m.filter(function(x){return typeof x=="number"})}function a(m,x){for(var f in x){if(m[f]&&(0,t.default)(m[f])==="object"){a(m[f],x[f]);continue}if((0,t.default)(x[f])==="object"){m[f]=(0,i.deepClone)(x[f],!0);continue}m[f]=x[f]}return m}function s(m){return m=r(m),m.reduce(function(x,f){return x+f},0)}function o(m,x){var f=m.stack;if(!f)return(0,e.default)(m.data);var h=x.filter(function(F){var U=F.stack;return U===f}),E=h.findIndex(function(F){var U=F.data;return U===m.data}),S=h.splice(0,E+1).map(function(F){var U=F.data;return U}),C=S[0].length;return new Array(C).fill(0).map(function(F,U){return s(S.map(function(P){return P[U]}))})}function l(m,x){var f=Math.abs(m[0]-x[0]),h=Math.abs(m[1]-x[1]);return Math.sqrt(f*f+h*h)}function u(m,x,f,h){if(!(!m||!x||!f||!h.length)){var E=h;typeof E=="string"&&(E=[h,h]);var S=m.createLinearGradient.apply(m,(0,e.default)(x).concat((0,e.default)(f))),C=1/(E.length-1);return E.forEach(function(F,U){return S.addColorStop(C*U,F)}),S}}function c(m){var x=new Array(m.length-1).fill(0).map(function(h,E){return[m[E],m[E+1]]}),f=x.map(function(h){return l.apply(void 0,(0,e.default)(h))});return s(f)}function p(m,x,f){var h=l(m,x),E=l(m,f),S=l(x,f);return .5*Math.sqrt((h+E+S)*(h+E-S)*(h+S-E)*(E+S-h))/S}function d(m,x,f){return m=m.filter(function(h){var E=h.type;return E===f}),m=m.map(function(h){return a((0,i.deepClone)(x,!0),h)}),m.filter(function(h){var E=h.show;return E})}function v(m){return m/Math.PI*180}return Ht}var Ff;function zd(){if(Ff)return Uf;Ff=1;var n=Qe(),e=n(sn()),t=n(_t()),i=Ol(),r=Dl(),a=At(),s=Br,o=Xt();function l(m,x){var f=Object.keys(m);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(m);x&&(h=h.filter(function(E){return Object.getOwnPropertyDescriptor(m,E).enumerable})),f.push.apply(f,h)}return f}function u(m){for(var x=1;x<arguments.length;x++){var f=arguments[x]!=null?arguments[x]:{};x%2?l(Object(f),!0).forEach(function(h){(0,e.default)(m,h,f[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(f)):l(Object(f)).forEach(function(h){Object.defineProperty(m,h,Object.getOwnPropertyDescriptor(f,h))})}return m}var c={shape:{rx:0,ry:0,ir:0,or:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(x){var f=x.shape,h=["rx","ry","ir","or","startAngle","endAngle"];return h.find(function(E){return typeof f[E]!="number"})?(console.error("Pie shape configuration is abnormal!"),!1):!0},draw:function(x,f){var h=x.ctx,E=f.shape;h.beginPath();var S=E.rx,C=E.ry,F=E.ir,U=E.or,P=E.startAngle,I=E.endAngle,V=E.clockWise;S=parseInt(S)+.5,C=parseInt(C)+.5,h.arc(S,C,F>0?F:0,P,I,!V);var y=(0,a.getCircleRadianPoint)(S,C,U,I).map(function(z){return parseInt(z)+.5}),A=(0,a.getCircleRadianPoint)(S,C,F,P).map(function(z){return parseInt(z)+.5});h.lineTo.apply(h,(0,t.default)(y)),h.arc(S,C,U>0?U:0,I,P,V),h.lineTo.apply(h,(0,t.default)(A)),h.closePath(),h.stroke(),h.fill()}},p={shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,gradientStartAngle:null,gradientEndAngle:null},validator:function(x){var f=x.shape,h=["rx","ry","r","startAngle","endAngle"];return h.find(function(E){return typeof f[E]!="number"})?(console.error("AgArc shape configuration is abnormal!"),!1):!0},draw:function(x,f){var h=x.ctx,E=f.shape,S=f.style,C=S.gradient;C=C.map(function(X){return(0,s.getColorFromRgbValue)(X)}),C.length===1&&(C=[C[0],C[0]]);var F=C.length-1,U=E.gradientStartAngle,P=E.gradientEndAngle,I=E.startAngle,V=E.endAngle,y=E.r,A=E.rx,z=E.ry;U===null&&(U=I),P===null&&(P=V);var R=(P-U)/F;R===Math.PI*2&&(R=Math.PI*2-.001);for(var w=0;w<F;w++){h.beginPath();var H=(0,a.getCircleRadianPoint)(A,z,y,I+R*w),W=(0,a.getCircleRadianPoint)(A,z,y,I+R*(w+1)),M=(0,o.getLinearGradientColor)(h,H,W,[C[w],C[w+1]]),D=I+R*w,L=I+R*(w+1),B=!1;if(L>V&&(L=V,B=!0),h.arc(A,z,y,D,L),h.strokeStyle=M,h.stroke(),B)break}}},d={shape:{number:[],content:"",position:[0,0],toFixed:0,rowGap:0,formatter:null},validator:function(x){var f=x.shape,h=f.number,E=f.content,S=f.position;return!(h instanceof Array)||typeof E!="string"||!(S instanceof Array)?(console.error("NumberText shape configuration is abnormal!"),!1):!0},draw:function(x,f){var h=x.ctx,E=f.shape,S=E.number,C=E.content,F=E.toFixed,U=E.rowGap,P=E.formatter,I=C.split("{nt}"),V="";I.forEach(function(y,A){var z=S[A];typeof z!="number"&&(z=""),typeof z=="number"&&(z=z.toFixed(F),typeof P=="function"&&(z=P(z))),V+=y+(z||"")}),r.text.draw({ctx:h},{shape:u(u({},E),{},{content:V,rowGap:U})})}},v={shape:{x:0,y:0,w:0,h:0},validator:function(x){var f=x.shape,h=f.x,E=f.y,S=f.w,C=f.h;return typeof h!="number"||typeof E!="number"||typeof S!="number"||typeof C!="number"?(console.error("lineIcon shape configuration is abnormal!"),!1):!0},draw:function(x,f){var h=x.ctx,E=f.shape;h.beginPath();var S=E.x,C=E.y,F=E.w,U=E.h,P=U/2;h.strokeStyle=h.fillStyle,h.moveTo(S,C+P),h.lineTo(S+F,C+P),h.lineWidth=1,h.stroke(),h.beginPath();var I=P-10;I<=0&&(I=3),h.arc(S+F/2,C+P,I,0,Math.PI*2),h.lineWidth=5,h.stroke(),h.fillStyle="#fff",h.fill()},hoverCheck:function(x,f){var h=f.shape,E=h.x,S=h.y,C=h.w,F=h.h;return(0,a.checkPointIsInRect)(x,E,S,C,F)},setGraphCenter:function(x,f){var h=f.shape,E=f.style,S=h.x,C=h.y,F=h.w,U=h.h;E.graphCenter=[S+F/2,C+U/2]}};return(0,i.extendNewGraph)("pie",c),(0,i.extendNewGraph)("agArc",p),(0,i.extendNewGraph)("numberText",d),(0,i.extendNewGraph)("lineIcon",v),Uf}zd();var Us={},Is={},Fs={},_a={},Bs={},ar={},Bf;function OM(){if(Bf)return ar;Bf=1,Object.defineProperty(ar,"__esModule",{value:!0}),ar.colorConfig=void 0;var n=["#37a2da","#32c5e9","#67e0e3","#9fe6b8","#ffdb5c","#ff9f7f","#fb7293","#e062ae","#e690d1","#e7bcf3","#9d96f5","#8378ea","#96bfff"];return ar.colorConfig=n,ar}var or={},Gf;function NM(){if(Gf)return or;Gf=1,Object.defineProperty(or,"__esModule",{value:!0}),or.gridConfig=void 0;var n={left:"10%",right:"10%",top:60,bottom:60,style:{fill:"rgba(0, 0, 0, 0)"},rLevel:-30,animationCurve:"easeOutCubic",animationFrame:30};return or.gridConfig=n,or}var ti={},zf;function UM(){if(zf)return ti;zf=1,Object.defineProperty(ti,"__esModule",{value:!0}),ti.yAxisConfig=ti.xAxisConfig=void 0;var n={name:"",show:!0,position:"bottom",nameGap:15,nameLocation:"end",nameTextStyle:{fill:"#333",fontSize:10},min:"20%",max:"20%",interval:null,minInterval:null,maxInterval:null,boundaryGap:null,splitNumber:5,axisLine:{show:!0,style:{stroke:"#333",lineWidth:1}},axisTick:{show:!0,style:{stroke:"#333",lineWidth:1}},axisLabel:{show:!0,formatter:null,style:{fill:"#333",fontSize:10,rotate:0}},splitLine:{show:!1,style:{stroke:"#d4d4d4",lineWidth:1}},rLevel:-20,animationCurve:"easeOutCubic",animationFrame:50};ti.xAxisConfig=n;var e={name:"",show:!0,position:"left",nameGap:15,nameLocation:"end",nameTextStyle:{fill:"#333",fontSize:10},min:"20%",max:"20%",interval:null,minInterval:null,maxInterval:null,boundaryGap:null,splitNumber:5,axisLine:{show:!0,style:{stroke:"#333",lineWidth:1}},axisTick:{show:!0,style:{stroke:"#333",lineWidth:1}},axisLabel:{show:!0,formatter:null,style:{fill:"#333",fontSize:10,rotate:0}},splitLine:{show:!0,style:{stroke:"#d4d4d4",lineWidth:1}},rLevel:-20,animationCurve:"easeOutCubic",animationFrame:50};return ti.yAxisConfig=e,ti}var sr={},kf;function IM(){if(kf)return sr;kf=1,Object.defineProperty(sr,"__esModule",{value:!0}),sr.titleConfig=void 0;var n={show:!0,text:"",offset:[0,-20],style:{fill:"#333",fontSize:17,fontWeight:"bold",textAlign:"center",textBaseline:"bottom"},rLevel:20,animationCurve:"easeOutCubic",animationFrame:50};return sr.titleConfig=n,sr}var lr={},Vf;function FM(){if(Vf)return lr;Vf=1,Object.defineProperty(lr,"__esModule",{value:!0}),lr.lineConfig=void 0;var n={show:!0,name:"",stack:"",smooth:!1,xAxisIndex:0,yAxisIndex:0,data:[],lineStyle:{lineWidth:1},linePoint:{show:!0,radius:2,style:{fill:"#fff",lineWidth:1}},lineArea:{show:!1,gradient:[],style:{opacity:.5}},label:{show:!1,position:"top",offset:[0,-10],formatter:null,style:{fontSize:10}},rLevel:10,animationCurve:"easeOutCubic",animationFrame:50};return lr.lineConfig=n,lr}var ur={},Hf;function BM(){if(Hf)return ur;Hf=1,Object.defineProperty(ur,"__esModule",{value:!0}),ur.barConfig=void 0;var n={show:!0,name:"",stack:"",shapeType:"normal",echelonOffset:10,barWidth:"auto",barGap:"30%",barCategoryGap:"20%",xAxisIndex:0,yAxisIndex:0,data:[],backgroundBar:{show:!1,width:"auto",style:{fill:"rgba(200, 200, 200, .4)"}},label:{show:!1,position:"top",offset:[0,-10],formatter:null,style:{fontSize:10}},gradient:{color:[],local:!0},barStyle:{},independentColor:!1,independentColors:[],rLevel:0,animationCurve:"easeOutCubic",animationFrame:50};return ur.barConfig=n,ur}var cr={},Wf;function kd(){if(Wf)return cr;Wf=1,Object.defineProperty(cr,"__esModule",{value:!0}),cr.pieConfig=void 0;var n={show:!0,name:"",radius:"50%",center:["50%","50%"],startAngle:-Math.PI/2,roseType:!1,roseSort:!0,roseIncrement:"auto",data:[],insideLabel:{show:!1,formatter:"{percent}%",style:{fontSize:10,fill:"#fff",textAlign:"center",textBaseline:"middle"}},outsideLabel:{show:!0,formatter:"{name}",style:{fontSize:11},labelLineBendGap:"20%",labelLineEndLength:50,labelLineStyle:{lineWidth:1}},pieStyle:{},percentToFixed:0,rLevel:10,animationDelayGap:60,animationCurve:"easeOutCubic",startAnimationCurve:"easeOutBack",animationFrame:50};return cr.pieConfig=n,cr}var fr={},Xf;function GM(){if(Xf)return fr;Xf=1,Object.defineProperty(fr,"__esModule",{value:!0}),fr.radarAxisConfig=void 0;var n={show:!0,center:["50%","50%"],radius:"65%",startAngle:-Math.PI/2,splitNum:5,polygon:!1,axisLabel:{show:!0,labelGap:15,color:[],style:{fill:"#333"}},axisLine:{show:!0,color:[],style:{stroke:"#999",lineWidth:1}},splitLine:{show:!0,color:[],style:{stroke:"#d4d4d4",lineWidth:1}},splitArea:{show:!1,color:["#f5f5f5","#e6e6e6"],style:{}},rLevel:-10,animationCurve:"easeOutCubic",animationFrane:50};return fr.radarAxisConfig=n,fr}var hr={},qf;function zM(){if(qf)return hr;qf=1,Object.defineProperty(hr,"__esModule",{value:!0}),hr.radarConfig=void 0;var n={show:!0,name:"",data:[],radarStyle:{lineWidth:1},point:{show:!0,radius:2,style:{fill:"#fff"}},label:{show:!0,offset:[0,0],labelGap:5,formatter:null,style:{fontSize:10}},rLevel:10,animationCurve:"easeOutCubic",animationFrane:50};return hr.radarConfig=n,hr}var dr={},jf;function Vd(){if(jf)return dr;jf=1,Object.defineProperty(dr,"__esModule",{value:!0}),dr.gaugeConfig=void 0;var n={show:!0,name:"",radius:"60%",center:["50%","50%"],startAngle:-(Math.PI/4)*5,endAngle:Math.PI/4,min:0,max:100,splitNum:5,arcLineWidth:15,data:[],dataItemStyle:{},axisTick:{show:!0,tickLength:6,style:{stroke:"#999",lineWidth:1}},axisLabel:{show:!0,data:[],formatter:null,labelGap:5,style:{}},pointer:{show:!0,valueIndex:0,style:{scale:[1,1],fill:"#fb7293"}},details:{show:!1,formatter:null,offset:[0,0],valueToFixed:0,position:"center",style:{fontSize:20,fontWeight:"bold",textAlign:"center",textBaseline:"middle"}},backgroundArc:{show:!0,style:{stroke:"#e0e0e0"}},rLevel:10,animationCurve:"easeOutCubic",animationFrame:50};return dr.gaugeConfig=n,dr}var pr={},Yf;function kM(){if(Yf)return pr;Yf=1,Object.defineProperty(pr,"__esModule",{value:!0}),pr.legendConfig=void 0;var n={show:!0,orient:"horizontal",left:"auto",right:"auto",top:"auto",bottom:"auto",itemGap:10,iconWidth:25,iconHeight:10,selectAble:!0,data:[],textStyle:{fontFamily:"Arial",fontSize:13,fill:"#000"},iconStyle:{},textUnselectedStyle:{fontFamily:"Arial",fontSize:13,fill:"#999"},iconUnselectedStyle:{fill:"#999"},rLevel:20,animationCurve:"easeOutCubic",animationFrame:50};return pr.legendConfig=n,pr}var $f;function gn(){return $f||($f=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.changeDefaultConfig=m,Object.defineProperty(n,"colorConfig",{enumerable:!0,get:function(){return e.colorConfig}}),Object.defineProperty(n,"gridConfig",{enumerable:!0,get:function(){return t.gridConfig}}),Object.defineProperty(n,"xAxisConfig",{enumerable:!0,get:function(){return i.xAxisConfig}}),Object.defineProperty(n,"yAxisConfig",{enumerable:!0,get:function(){return i.yAxisConfig}}),Object.defineProperty(n,"titleConfig",{enumerable:!0,get:function(){return r.titleConfig}}),Object.defineProperty(n,"lineConfig",{enumerable:!0,get:function(){return a.lineConfig}}),Object.defineProperty(n,"barConfig",{enumerable:!0,get:function(){return s.barConfig}}),Object.defineProperty(n,"pieConfig",{enumerable:!0,get:function(){return o.pieConfig}}),Object.defineProperty(n,"radarAxisConfig",{enumerable:!0,get:function(){return l.radarAxisConfig}}),Object.defineProperty(n,"radarConfig",{enumerable:!0,get:function(){return u.radarConfig}}),Object.defineProperty(n,"gaugeConfig",{enumerable:!0,get:function(){return c.gaugeConfig}}),Object.defineProperty(n,"legendConfig",{enumerable:!0,get:function(){return p.legendConfig}}),n.keys=void 0;var e=OM(),t=NM(),i=UM(),r=IM(),a=FM(),s=BM(),o=kd(),l=GM(),u=zM(),c=Vd(),p=kM(),d=Xt(),v={colorConfig:e.colorConfig,gridConfig:t.gridConfig,xAxisConfig:i.xAxisConfig,yAxisConfig:i.yAxisConfig,titleConfig:r.titleConfig,lineConfig:a.lineConfig,barConfig:s.barConfig,pieConfig:o.pieConfig,radarAxisConfig:l.radarAxisConfig,radarConfig:u.radarConfig,gaugeConfig:c.gaugeConfig,legendConfig:p.legendConfig};function m(f,h){if(!v["".concat(f,"Config")]){console.warn("Change default config Error - Invalid key!");return}(0,d.deepMerge)(v["".concat(f,"Config")],h)}var x=["color","title","legend","xAxis","yAxis","grid","radarAxis","line","bar","pie","radar","gauge"];n.keys=x})(Bs)),Bs}var Kf;function VM(){if(Kf)return _a;Kf=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.mergeColor=i;var n=gn(),e=At(),t=Xt();function i(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(0,e.deepClone)(n.colorConfig,!0),o=a.color,l=a.series;if(l||(l=[]),o||(o=[]),a.color=o=(0,t.deepMerge)(s,o),!!l.length){var u=o.length;l.forEach(function(v,m){v.color||(v.color=o[m%u])});var c=l.filter(function(v){var m=v.type;return m==="pie"});c.forEach(function(v){return v.data.forEach(function(m,x){return m.color=o[x%u]})});var p=l.filter(function(v){var m=v.type;return m==="gauge"});p.forEach(function(v){return v.data.forEach(function(m,x){return m.color=o[x%u]})});var d=l.filter(function(v){var m=v.type,x=v.independentColor;return m==="bar"&&x});d.forEach(function(v){v.independentColors||(v.independentColors=o)})}}return _a}var ya={},Bi={},Zf;function _n(){if(Zf)return Bi;Zf=1;var n=Qe();Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.doUpdate=c,Bi.Updater=void 0;var e=n(_t()),t=n(wt()),i=n(Ir()),r=function p(d,v){(0,i.default)(this,p);var m=d.chart,x=d.key,f=d.getGraphConfig;if(typeof f!="function"){console.warn("Updater need function getGraphConfig!");return}m[x]||(this.graphs=m[x]=[]),Object.assign(this,d),this.update(v)};Bi.Updater=r,r.prototype.update=function(p){var d=this,v=this.graphs,m=this.beforeUpdate;if(a(this,p),!!p.length){var x=(0,t.default)(m);p.forEach(function(f,h){x==="function"&&m(v,f,h,d);var E=v[h];E?s(E,f,h,d):l(v,f,h,d)})}};function a(p,d){var v=p.graphs,m=p.chart.render,x=v.length,f=d.length;if(x>f){var h=v.splice(f);h.forEach(function(E){return E.forEach(function(S){return m.delGraph(S)})})}}function s(p,d,v,m){var x=m.getGraphConfig,f=m.chart.render,h=m.beforeChange,E=x(d,m);o(p,E,f),p.forEach(function(S,C){var F=E[C];typeof h=="function"&&h(S,F),u(S,F)})}function o(p,d,v){var m=p.length,x=d.length;if(x>m){var f=p.slice(-1)[0],h=x-m,E=new Array(h).fill(0).map(function(C){return v.clone(f)});p.push.apply(p,(0,e.default)(E))}else if(x<m){var S=p.splice(x);S.forEach(function(C){return v.delGraph(C)})}}function l(p,d,v,m){var x=m.getGraphConfig,f=m.getStartGraphConfig,h=m.chart,E=h.render,S=null;typeof f=="function"&&(S=f(d,m));var C=x(d,m);if(C.length){S?(p[v]=S.map(function(U){return E.add(U)}),p[v].forEach(function(U,P){var I=C[P];u(U,I)})):p[v]=C.map(function(U){return E.add(U)});var F=m.afterAddGraph;typeof F=="function"&&F(p[v])}}function u(p,d){var v=Object.keys(d);v.forEach(function(m){m==="shape"||m==="style"?p.animation(m,d[m],!0):p[m]=d[m]})}function c(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=p.chart,v=p.series,m=p.key,x=p.getGraphConfig,f=p.getStartGraphConfig,h=p.beforeChange,E=p.beforeUpdate,S=p.afterAddGraph;d[m]?d[m].update(v):d[m]=new r({chart:d,key:m,getGraphConfig:x,getStartGraphConfig:f,beforeChange:h,beforeUpdate:E,afterAddGraph:S},v)}return Bi}var Jf;function HM(){if(Jf)return ya;Jf=1;var n=Qe();Object.defineProperty(ya,"__esModule",{value:!0}),ya.title=s;var e=n(Ut()),t=_n(),i=At(),r=gn(),a=Xt();function s(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=[];p.title&&(d[0]=(0,a.deepMerge)((0,i.deepClone)(r.titleConfig,!0),p.title)),(0,t.doUpdate)({chart:c,series:d,key:"title",getGraphConfig:o})}function o(c,p){var d=r.titleConfig.animationCurve,v=r.titleConfig.animationFrame,m=r.titleConfig.rLevel,x=l(c,p),f=u(c);return[{name:"text",index:m,visible:c.show,animationCurve:d,animationFrame:v,shape:x,style:f}]}function l(c,p){var d=c.offset,v=c.text,m=p.chart.gridArea,x=m.x,f=m.y,h=m.w,E=(0,e.default)(d,2),S=E[0],C=E[1];return{content:v,position:[x+h/2+S,f+C]}}function u(c){var p=c.style;return p}return ya}var xa={},Qf;function WM(){if(Qf)return xa;Qf=1;var n=Qe();Object.defineProperty(xa,"__esModule",{value:!0}),xa.grid=u;var e=n(Ut()),t=n(sn()),i=_n(),r=At(),a=gn(),s=Xt();function o(m,x){var f=Object.keys(m);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(m);x&&(h=h.filter(function(E){return Object.getOwnPropertyDescriptor(m,E).enumerable})),f.push.apply(f,h)}return f}function l(m){for(var x=1;x<arguments.length;x++){var f=arguments[x]!=null?arguments[x]:{};x%2?o(Object(f),!0).forEach(function(h){(0,t.default)(m,h,f[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(f)):o(Object(f)).forEach(function(h){Object.defineProperty(m,h,Object.getOwnPropertyDescriptor(f,h))})}return m}function u(m){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=x.grid;f=(0,s.deepMerge)((0,r.deepClone)(a.gridConfig,!0),f||{}),(0,i.doUpdate)({chart:m,series:[f],key:"grid",getGraphConfig:c})}function c(m,x){var f=m.animationCurve,h=m.animationFrame,E=m.rLevel,S=p(m,x),C=v(m);return x.chart.gridArea=l({},S),[{name:"rect",index:E,animationCurve:f,animationFrame:h,shape:S,style:C}]}function p(m,x){var f=(0,e.default)(x.chart.render.area,2),h=f[0],E=f[1],S=d(m.left,h),C=d(m.right,h),F=d(m.top,E),U=d(m.bottom,E),P=h-S-C,I=E-F-U;return{x:S,y:F,w:P,h:I}}function d(m,x){return typeof m=="number"?m:typeof m!="string"?0:x*parseInt(m)/100}function v(m){var x=m.style;return x}return xa}var Sa={},eh;function XM(){if(eh)return Sa;eh=1;var n=Qe();Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.axis=m;var e=n(wt()),t=n(Ut()),i=n(sn()),r=n(_t()),a=_n(),s=gn(),o=Xt(),l=At();function u(g,_){var T=Object.keys(g);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(g);_&&(G=G.filter(function(K){return Object.getOwnPropertyDescriptor(g,K).enumerable})),T.push.apply(T,G)}return T}function c(g){for(var _=1;_<arguments.length;_++){var T=arguments[_]!=null?arguments[_]:{};_%2?u(Object(T),!0).forEach(function(G){(0,i.default)(g,G,T[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(T)):u(Object(T)).forEach(function(G){Object.defineProperty(g,G,Object.getOwnPropertyDescriptor(T,G))})}return g}var p={xAxisConfig:s.xAxisConfig,yAxisConfig:s.yAxisConfig},d=Math.abs,v=Math.pow;function m(g){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=_.xAxis,G=_.yAxis,K=_.series,J=[];T&&G&&K&&(J=x(T,G),J=f(J),J=J.filter(function(le){var ue=le.show;return ue}),J=h(J),J=E(J,K),J=H(J),J=W(J,g),J=M(J),J=L(J),J=B(J,g)),(0,a.doUpdate)({chart:g,series:J,key:"axisLine",getGraphConfig:X}),(0,a.doUpdate)({chart:g,series:J,key:"axisTick",getGraphConfig:Q}),(0,a.doUpdate)({chart:g,series:J,key:"axisLabel",getGraphConfig:te}),(0,a.doUpdate)({chart:g,series:J,key:"axisName",getGraphConfig:b}),(0,a.doUpdate)({chart:g,series:J,key:"splitLine",getGraphConfig:Z}),g.axisData=J}function x(g,_){var T=[],G=[];if(g instanceof Array){var K;(K=T).push.apply(K,(0,r.default)(g))}else T.push(g);if(_ instanceof Array){var J;(J=G).push.apply(J,(0,r.default)(_))}else G.push(_);return T.splice(2),G.splice(2),T=T.map(function(le,ue){return c(c({},le),{},{index:ue,axis:"x"})}),G=G.map(function(le,ue){return c(c({},le),{},{index:ue,axis:"y"})}),[].concat((0,r.default)(T),(0,r.default)(G))}function f(g){var _=g.filter(function(G){var K=G.axis;return K==="x"}),T=g.filter(function(G){var K=G.axis;return K==="y"});return _=_.map(function(G){return(0,o.deepMerge)((0,l.deepClone)(s.xAxisConfig),G)}),T=T.map(function(G){return(0,o.deepMerge)((0,l.deepClone)(s.yAxisConfig),G)}),[].concat((0,r.default)(_),(0,r.default)(T))}function h(g){var _=g.filter(function(G){var K=G.data;return K==="value"}),T=g.filter(function(G){var K=G.data;return K!=="value"});return _.forEach(function(G){typeof G.boundaryGap!="boolean"&&(G.boundaryGap=!1)}),T.forEach(function(G){typeof G.boundaryGap!="boolean"&&(G.boundaryGap=!0)}),[].concat((0,r.default)(_),(0,r.default)(T))}function E(g,_){var T=g.filter(function(K){var J=K.data;return J==="value"}),G=g.filter(function(K){var J=K.data;return J instanceof Array});return T=S(T,_),G=R(G),[].concat((0,r.default)(T),(0,r.default)(G))}function S(g,_){return g.map(function(T){var G=C(T,_),K=P(T,G),J=(0,t.default)(K,2),le=J[0],ue=J[1],he=w(le,ue,T),ye=T.axisLabel.formatter,xe=[];return le<0&&ue>0?xe=y(le,ue,he):xe=A(le,ue,he),xe=xe.map(function(ve){return parseFloat(ve.toFixed(2))}),c(c({},T),{},{maxValue:xe.slice(-1)[0],minValue:xe[0],label:z(xe,ye)})})}function C(g,_){if(_=_.filter(function(le){var ue=le.show,he=le.type;return!(ue===!1||he==="pie")}),_.length===0)return[0,0];var T=g.index,G=g.axis;_=U(_);var K=G+"Axis",J=_.filter(function(le){return le[K]===T});return J.length||(J=_),F(J)}function F(g){if(g){var _=Math.min.apply(Math,(0,r.default)(g.map(function(G){var K=G.data;return Math.min.apply(Math,(0,r.default)((0,o.filterNonNumber)(K)))}))),T=Math.max.apply(Math,(0,r.default)(g.map(function(G){var K=G.data;return Math.max.apply(Math,(0,r.default)((0,o.filterNonNumber)(K)))})));return[_,T]}}function U(g){var _=(0,l.deepClone)(g,!0);return g.forEach(function(T,G){var K=(0,o.mergeSameStackData)(T,g);_[G].data=K}),_}function P(g,_){var T=g.min,G=g.max,K=g.axis,J=(0,t.default)(_,2),le=J[0],ue=J[1],he=(0,e.default)(T),ye=(0,e.default)(G);if(V(T)||(T=p[K+"AxisConfig"].min,he="string"),V(G)||(G=p[K+"AxisConfig"].max,ye="string"),he==="string"){T=parseInt(le-d(le*parseFloat(T)/100));var xe=I(T);T=parseFloat((T/xe-.1).toFixed(1))*xe}if(ye==="string"){G=parseInt(ue+d(ue*parseFloat(G)/100));var ve=I(G);G=parseFloat((G/ve+.1).toFixed(1))*ve}return[T,G]}function I(g){var _=d(g).toString(),T=_.length,G=_.replace(/0*$/g,"").indexOf("0"),K=T-1;return G!==-1&&(K-=G),v(10,K)}function V(g){var _=(0,e.default)(g),T=_==="string"&&/^\d+%$/.test(g),G=_==="number";return T||G}function y(g,_,T){var G=[],K=[],J=0,le=0;do G.push(J-=T);while(J>g);do K.push(le+=T);while(le<_);return[].concat((0,r.default)(G.reverse()),[0],(0,r.default)(K))}function A(g,_,T){var G=[g],K=g;do G.push(K+=T);while(K<_);return G}function z(g,_){return _&&(typeof _=="string"&&(g=g.map(function(T){return _.replace("{value}",T)})),typeof _=="function"&&(g=g.map(function(T,G){return _({value:T,index:G})}))),g}function R(g){return g.map(function(_){var T=_.data,G=_.axisLabel.formatter;return c(c({},_),{},{label:z(T,G)})})}function w(g,_,T){var G=T.interval,K=T.minInterval,J=T.maxInterval,le=T.splitNumber,ue=T.axis,he=p[ue+"AxisConfig"];if(typeof G!="number"&&(G=he.interval),typeof K!="number"&&(K=he.minInterval),typeof J!="number"&&(J=he.maxInterval),typeof le!="number"&&(le=he.splitNumber),typeof G=="number")return G;var ye=parseInt((_-g)/(le-1));return ye.toString().length>1&&(ye=parseInt(ye.toString().replace(/\d$/,"0"))),ye===0&&(ye=1),typeof K=="number"&&ye<K?K:typeof J=="number"&&ye>J?J:ye}function H(g){var _=g.filter(function(G){var K=G.axis;return K==="x"}),T=g.filter(function(G){var K=G.axis;return K==="y"});return _[0]&&!_[0].position&&(_[0].position=s.xAxisConfig.position),_[1]&&!_[1].position&&(_[1].position=_[0].position==="bottom"?"top":"bottom"),T[0]&&!T[0].position&&(T[0].position=s.yAxisConfig.position),T[1]&&!T[1].position&&(T[1].position=T[0].position==="left"?"right":"left"),[].concat((0,r.default)(_),(0,r.default)(T))}function W(g,_){var T=_.gridArea,G=T.x,K=T.y,J=T.w,le=T.h;return g=g.map(function(ue){var he=ue.position,ye=[];return he==="left"?ye=[[G,K],[G,K+le]].reverse():he==="right"?ye=[[G+J,K],[G+J,K+le]].reverse():he==="top"?ye=[[G,K],[G+J,K]]:he==="bottom"&&(ye=[[G,K+le],[G+J,K+le]]),c(c({},ue),{},{linePosition:ye})}),g}function M(g,_){return g.map(function(T){var G=T.axis,K=T.linePosition,J=T.position,le=T.label,ue=T.boundaryGap;typeof ue!="boolean"&&(ue=p[G+"AxisConfig"].boundaryGap);var he=le.length,ye=(0,t.default)(K,2),xe=(0,t.default)(ye[0],2),ve=xe[0],De=xe[1],Ie=(0,t.default)(ye[1],2),Ne=Ie[0],we=Ie[1],Ce=G==="x"?Ne-ve:we-De,Be=Ce/(ue?he:he-1),ne=new Array(he).fill(0).map(function(Te,Le){return G==="x"?[ve+Be*(ue?Le+.5:Le),De]:[ve,De+Be*(ue?Le+.5:Le)]}),Me=D(G,ue,J,ne,Be);return c(c({},T),{},{tickPosition:ne,tickLinePosition:Me,tickGap:Be})})}function D(g,_,T,G,K){var J=g==="x"?1:0,le=5;g==="x"&&T==="top"&&(le=-5),g==="y"&&T==="left"&&(le=-5);var ue=G.map(function(he){var ye=(0,l.deepClone)(he);return ye[J]+=le,[(0,l.deepClone)(he),ye]});return _&&(J=g==="x"?0:1,le=K/2,ue.forEach(function(he){var ye=(0,t.default)(he,2),xe=ye[0],ve=ye[1];xe[J]+=le,ve[J]+=le})),ue}function L(g,_){return g.map(function(T){var G=T.nameGap,K=T.nameLocation,J=T.position,le=T.linePosition,ue=(0,t.default)(le,2),he=ue[0],ye=ue[1],xe=(0,r.default)(he);K==="end"&&(xe=(0,r.default)(ye)),K==="center"&&(xe[0]=(he[0]+ye[0])/2,xe[1]=(he[1]+ye[1])/2);var ve=0;J==="top"&&K==="center"&&(ve=1),J==="bottom"&&K==="center"&&(ve=1),J==="left"&&K!=="center"&&(ve=1),J==="right"&&K!=="center"&&(ve=1);var De=G;return J==="top"&&K!=="end"&&(De*=-1),J==="left"&&K!=="start"&&(De*=-1),J==="bottom"&&K==="start"&&(De*=-1),J==="right"&&K==="end"&&(De*=-1),xe[ve]+=De,c(c({},T),{},{namePosition:xe})})}function B(g,_){var T=_.gridArea,G=T.w,K=T.h;return g.map(function(J){var le=J.tickLinePosition,ue=J.position,he=J.boundaryGap,ye=0,xe=G;(ue==="top"||ue==="bottom")&&(ye=1),(ue==="top"||ue==="bottom")&&(xe=K),(ue==="right"||ue==="bottom")&&(xe*=-1);var ve=le.map(function(De){var Ie=(0,t.default)(De,1),Ne=Ie[0],we=(0,r.default)(Ne);return we[ye]+=xe,[(0,r.default)(Ne),we]});return he||ve.shift(),c(c({},J),{},{splitLinePosition:ve})})}function X(g){var _=g.animationCurve,T=g.animationFrame,G=g.rLevel;return[{name:"polyline",index:G,visible:g.axisLine.show,animationCurve:_,animationFrame:T,shape:ie(g),style:ae(g)}]}function ie(g){var _=g.linePosition;return{points:_}}function ae(g){return g.axisLine.style}function Q(g){var _=g.animationCurve,T=g.animationFrame,G=g.rLevel,K=re(g),J=de(g);return K.map(function(le){return{name:"polyline",index:G,visible:g.axisTick.show,animationCurve:_,animationFrame:T,shape:le,style:J}})}function re(g){var _=g.tickLinePosition;return _.map(function(T){return{points:T}})}function de(g){return g.axisTick.style}function te(g){var _=g.animationCurve,T=g.animationFrame,G=g.rLevel,K=se(g),J=pe(g,K);return K.map(function(le,ue){return{name:"text",index:G,visible:g.axisLabel.show,animationCurve:_,animationFrame:T,shape:le,style:J[ue],setGraphCenter:function(){}}})}function se(g){var _=g.label,T=g.tickPosition,G=g.position;return T.map(function(K,J){return{position:ce(K,G),content:_[J].toString()}})}function ce(g,_){var T=0,G=10;return(_==="top"||_==="bottom")&&(T=1),(_==="top"||_==="left")&&(G=-10),g=(0,l.deepClone)(g),g[T]+=G,g}function pe(g,_){var T=g.position,G=g.axisLabel.style,K=Y(T);G=(0,o.deepMerge)(K,G);var J=_.map(function(le){var ue=le.position;return c(c({},G),{},{graphCenter:ue})});return J}function Y(g){if(g==="left")return{textAlign:"right",textBaseline:"middle"};if(g==="right")return{textAlign:"left",textBaseline:"middle"};if(g==="top")return{textAlign:"center",textBaseline:"bottom"};if(g==="bottom")return{textAlign:"center",textBaseline:"top"}}function b(g){var _=g.animationCurve,T=g.animationFrame,G=g.rLevel;return[{name:"text",index:G,animationCurve:_,animationFrame:T,shape:k(g),style:O(g)}]}function k(g){var _=g.name,T=g.namePosition;return{content:_,position:T}}function O(g){var _=g.nameLocation,T=g.position,G=g.nameTextStyle,K=q(T,_);return(0,o.deepMerge)(K,G)}function q(g,_){if(g==="top"&&_==="start"||g==="bottom"&&_==="start"||g==="left"&&_==="center")return{textAlign:"right",textBaseline:"middle"};if(g==="top"&&_==="end"||g==="bottom"&&_==="end"||g==="right"&&_==="center")return{textAlign:"left",textBaseline:"middle"};if(g==="top"&&_==="center"||g==="left"&&_==="end"||g==="right"&&_==="end")return{textAlign:"center",textBaseline:"bottom"};if(g==="bottom"&&_==="center"||g==="left"&&_==="start"||g==="right"&&_==="start")return{textAlign:"center",textBaseline:"top"}}function Z(g){var _=g.animationCurve,T=g.animationFrame,G=g.rLevel,K=N(g),J=j(g);return K.map(function(le){return{name:"polyline",index:G,visible:g.splitLine.show,animationCurve:_,animationFrame:T,shape:le,style:J}})}function N(g){var _=g.splitLinePosition;return _.map(function(T){return{points:T}})}function j(g){return g.splitLine.style}return Sa}var ba={},th;function qM(){if(th)return ba;th=1;var n=Qe();Object.defineProperty(ba,"__esModule",{value:!0}),ba.line=v;var e=n(wt()),t=n(Ut()),i=n(_t()),r=n(sn()),a=_n(),s=gn(),o=n(Rl()),l=Xt();function u(te,se){var ce=Object.keys(te);if(Object.getOwnPropertySymbols){var pe=Object.getOwnPropertySymbols(te);se&&(pe=pe.filter(function(Y){return Object.getOwnPropertyDescriptor(te,Y).enumerable})),ce.push.apply(ce,pe)}return ce}function c(te){for(var se=1;se<arguments.length;se++){var ce=arguments[se]!=null?arguments[se]:{};se%2?u(Object(ce),!0).forEach(function(pe){(0,r.default)(te,pe,ce[pe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(te,Object.getOwnPropertyDescriptors(ce)):u(Object(ce)).forEach(function(pe){Object.defineProperty(te,pe,Object.getOwnPropertyDescriptor(ce,pe))})}return te}var p=o.default.polylineToBezierCurve,d=o.default.getBezierCurveLength;function v(te){var se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ce=se.xAxis,pe=se.yAxis,Y=se.series,b=[];ce&&pe&&Y&&(b=(0,l.initNeedSeries)(Y,s.lineConfig,"line"),b=m(b,te)),(0,a.doUpdate)({chart:te,series:b,key:"lineArea",getGraphConfig:S,getStartGraphConfig:I,beforeUpdate:V,beforeChange:y}),(0,a.doUpdate)({chart:te,series:b,key:"line",getGraphConfig:A,getStartGraphConfig:H,beforeUpdate:V,beforeChange:y}),(0,a.doUpdate)({chart:te,series:b,key:"linePoint",getGraphConfig:W,getStartGraphConfig:L}),(0,a.doUpdate)({chart:te,series:b,key:"lineLabel",getGraphConfig:B})}function m(te,se){var ce=se.axisData;return te.map(function(pe){var Y=(0,l.mergeSameStackData)(pe,te);Y=x(pe,Y);var b=f(pe,ce),k=h(Y,b),O=E(b);return c(c({},pe),{},{linePosition:k.filter(function(q){return q}),lineFillBottomPos:O})})}function x(te,se){var ce=te.data;return se.map(function(pe,Y){return typeof ce[Y]=="number"?pe:null})}function f(te,se){var ce=te.xAxisIndex,pe=te.yAxisIndex,Y=se.find(function(k){var O=k.axis,q=k.index;return O==="x"&&q===ce}),b=se.find(function(k){var O=k.axis,q=k.index;return O==="y"&&q===pe});return[Y,b]}function h(te,se){var ce=se.findIndex(function(J){var le=J.data;return le==="value"}),pe=se[ce],Y=se[1-ce],b=pe.linePosition,k=pe.axis,O=Y.tickPosition,q=O.length,Z=k==="x"?0:1,N=b[0][Z],j=b[1][Z],g=j-N,_=pe.maxValue,T=pe.minValue,G=_-T,K=new Array(q).fill(0).map(function(J,le){var ue=te[le];if(typeof ue!="number")return null;var he=(ue-T)/G;return G===0&&(he=0),he*g+N});return K.map(function(J,le){if(le>=q||typeof J!="number")return null;var ue=[J,O[le][1-Z]];return Z===0||ue.reverse(),ue})}function E(te){var se=te.find(function(j){var g=j.data;return g==="value"}),ce=se.axis,pe=se.linePosition,Y=se.minValue,b=se.maxValue,k=ce==="x"?0:1,O=pe[0][k];if(Y<0&&b>0){var q=b-Y,Z=Math.abs(pe[0][k]-pe[1][k]),N=Math.abs(Y)/q*Z;ce==="y"&&(N*=-1),O+=N}return{changeIndex:k,changeValue:O}}function S(te){var se=te.animationCurve,ce=te.animationFrame,pe=te.lineFillBottomPos,Y=te.rLevel;return[{name:z(te),index:Y,animationCurve:se,animationFrame:ce,visible:te.lineArea.show,lineFillBottomPos:pe,shape:C(te),style:F(te),drawed:P}]}function C(te){var se=te.linePosition;return{points:se}}function F(te){var se=te.lineArea,ce=te.color,pe=se.gradient,Y=se.style,b=[Y.fill||ce],k=(0,l.deepMerge)(b,pe);k.length===1&&k.push(k[0]);var O=U(te);return Y=c(c({},Y),{},{stroke:"rgba(0, 0, 0, 0)"}),(0,l.deepMerge)({gradientColor:k,gradientParams:O,gradientType:"linear",gradientWith:"fill"},Y)}function U(te){var se=te.lineFillBottomPos,ce=te.linePosition,pe=se.changeIndex,Y=se.changeValue,b=ce.map(function(Z){return Z[pe]}),k=Math.max.apply(Math,(0,i.default)(b)),O=Math.min.apply(Math,(0,i.default)(b)),q=k;return pe===1&&(q=O),pe===1?[0,q,0,Y]:[q,0,Y,0]}function P(te,se){var ce=te.lineFillBottomPos,pe=te.shape,Y=se.ctx,b=pe.points,k=ce.changeIndex,O=ce.changeValue,q=(0,i.default)(b[b.length-1]),Z=(0,i.default)(b[0]);q[k]=O,Z[k]=O,Y.lineTo.apply(Y,(0,i.default)(q)),Y.lineTo.apply(Y,(0,i.default)(Z)),Y.closePath(),Y.fill()}function I(te){var se=S(te)[0],ce=c({},se.style);return ce.opacity=0,se.style=ce,[se]}function V(te,se,ce,pe){var Y=te[ce];if(Y){var b=z(se),k=pe.chart.render,O=Y[0].name,q=b!==O;q&&(Y.forEach(function(Z){return k.delGraph(Z)}),te[ce]=null)}}function y(te,se){var ce=se.shape.points,pe=te.shape.points,Y=pe.length,b=ce.length;if(b>Y){var k=pe.slice(-1)[0],O=new Array(b-Y).fill(0).map(function(q){return(0,i.default)(k)});pe.push.apply(pe,(0,i.default)(O))}else b<Y&&pe.splice(b)}function A(te){var se=te.animationCurve,ce=te.animationFrame,pe=te.rLevel;return[{name:z(te),index:pe+1,animationCurve:se,animationFrame:ce,shape:C(te),style:R(te)}]}function z(te){var se=te.smooth;return se?"smoothline":"polyline"}function R(te){var se=te.lineStyle,ce=te.color,pe=te.smooth,Y=te.linePosition,b=w(Y,pe);return(0,l.deepMerge)({stroke:ce,lineDash:[b,0]},se)}function w(te){var se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!se)return(0,l.getPolylineLength)(te);var ce=p(te);return d(ce)}function H(te){var se=te.lineStyle.lineDash,ce=A(te)[0],pe=ce.style.lineDash;return se?pe=[0,0]:pe=(0,i.default)(pe).reverse(),ce.style.lineDash=pe,[ce]}function W(te){var se=te.animationCurve,ce=te.animationFrame,pe=te.rLevel,Y=M(te),b=D(te);return Y.map(function(k){return{name:"circle",index:pe+2,visible:te.linePoint.show,animationCurve:se,animationFrame:ce,shape:k,style:b}})}function M(te){var se=te.linePosition,ce=te.linePoint.radius;return se.map(function(pe){var Y=(0,t.default)(pe,2),b=Y[0],k=Y[1];return{r:ce,rx:b,ry:k}})}function D(te){var se=te.color,ce=te.linePoint.style;return(0,l.deepMerge)({stroke:se},ce)}function L(te){var se=W(te);return se.forEach(function(ce){ce.shape.r=.1}),se}function B(te){var se=te.animationCurve,ce=te.animationFrame,pe=te.rLevel,Y=X(te),b=de(te);return Y.map(function(k,O){return{name:"text",index:pe+3,visible:te.label.show,animationCurve:se,animationFrame:ce,shape:k,style:b}})}function X(te){var se=re(te),ce=ie(te);return se.map(function(pe,Y){return{content:pe,position:ce[Y]}})}function ie(te){var se=te.linePosition,ce=te.lineFillBottomPos,pe=te.label,Y=pe.position,b=pe.offset,k=ce.changeIndex,O=ce.changeValue;return se.map(function(q){if(Y==="bottom"&&(q=(0,i.default)(q),q[k]=O),Y==="center"){var Z=(0,i.default)(q);Z[k]=O,q=Q(q,Z)}return ae(q,b)})}function ae(te,se){var ce=(0,t.default)(te,2),pe=ce[0],Y=ce[1],b=(0,t.default)(se,2),k=b[0],O=b[1];return[pe+k,Y+O]}function Q(te,se){var ce=(0,t.default)(te,2),pe=ce[0],Y=ce[1],b=(0,t.default)(se,2),k=b[0],O=b[1];return[(pe+k)/2,(Y+O)/2]}function re(te){var se=te.data,ce=te.label.formatter;if(se=se.filter(function(Y){return typeof Y=="number"}).map(function(Y){return Y.toString()}),!ce)return se;var pe=(0,e.default)(ce);return pe==="string"?se.map(function(Y){return ce.replace("{value}",Y)}):pe==="function"?se.map(function(Y,b){return ce({value:Y,index:b})}):se}function de(te){var se=te.color,ce=te.label.style;return(0,l.deepMerge)({fill:se},ce)}return ba}var Ma={},nh;function jM(){if(nh)return Ma;nh=1;var n=Qe();Object.defineProperty(Ma,"__esModule",{value:!0}),Ma.bar=p;var e=n(wt()),t=n(sn()),i=n(Ut()),r=n(_t()),a=_n(),s=gn(),o=At(),l=Xt();function u(N,j){var g=Object.keys(N);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(N);j&&(_=_.filter(function(T){return Object.getOwnPropertyDescriptor(N,T).enumerable})),g.push.apply(g,_)}return g}function c(N){for(var j=1;j<arguments.length;j++){var g=arguments[j]!=null?arguments[j]:{};j%2?u(Object(g),!0).forEach(function(_){(0,t.default)(N,_,g[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(g)):u(Object(g)).forEach(function(_){Object.defineProperty(N,_,Object.getOwnPropertyDescriptor(g,_))})}return N}function p(N){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=j.xAxis,_=j.yAxis,T=j.series,G=[];g&&_&&T&&(G=(0,l.initNeedSeries)(T,s.barConfig,"bar"),G=d(G,N),G=v(G),G=P(G)),(0,a.doUpdate)({chart:N,series:G.slice(-1),key:"backgroundBar",getGraphConfig:w}),G.reverse(),(0,a.doUpdate)({chart:N,series:G,key:"bar",getGraphConfig:D,getStartGraphConfig:de,beforeUpdate:pe}),(0,a.doUpdate)({chart:N,series:G,key:"barLabel",getGraphConfig:Y})}function d(N,j){var g=j.axisData;return N.forEach(function(_){var T=_.xAxisIndex,G=_.yAxisIndex;typeof T!="number"&&(T=0),typeof G!="number"&&(G=0);var K=g.find(function(he){var ye=he.axis,xe=he.index;return"".concat(ye).concat(xe)==="x".concat(T)}),J=g.find(function(he){var ye=he.axis,xe=he.index;return"".concat(ye).concat(xe)==="y".concat(G)}),le=[K,J],ue=le.findIndex(function(he){var ye=he.data;return ye==="value"});_.valueAxis=le[ue],_.labelAxis=le[1-ue]}),N}function v(N,j){var g=x(N);return g.forEach(function(_){m(_),h(_),E(_),S(_),U(_)}),N}function m(N){var j=f(N);j=j.map(function(_){return{stack:_,index:-1}});var g=0;N.forEach(function(_){var T=_.stack;if(!T)_.barIndex=g,g++;else{var G=j.find(function(K){var J=K.stack;return J===T});G.index===-1&&(G.index=g,g++),_.barIndex=G.index}})}function x(N){var j=N.map(function(g){var _=g.labelAxis,T=_.axis,G=_.index;return T+G});return j=(0,r.default)(new Set(j)),j.map(function(g){return N.filter(function(_){var T=_.labelAxis,G=T.axis,K=T.index;return G+K===g})})}function f(N){var j=[];return N.forEach(function(g){var _=g.stack;_&&j.push(_)}),(0,r.default)(new Set(j))}function h(N){var j=(0,r.default)(new Set(N.map(function(g){var _=g.barIndex;return _}))).length;N.forEach(function(g){return g.barNum=j})}function E(N){var j=N.slice(-1)[0],g=j.barCategoryGap,_=j.labelAxis.tickGap,T=0;typeof g=="number"?T=g:T=(1-parseInt(g)/100)*_,N.forEach(function(G){return G.barCategoryWidth=T})}function S(N){var j=N.slice(-1)[0],g=j.barCategoryWidth,_=j.barWidth,T=j.barGap,G=j.barNum,K=[];typeof _=="number"||_!=="auto"?K=C(g,_,T):_==="auto"&&(K=F(g,_,T,G));var J=K,le=(0,i.default)(J,2),ue=le[0],he=le[1];N.forEach(function(ye){ye.barWidth=ue,ye.barGap=he})}function C(N,j,g){var _=0,T=0;return typeof j=="number"?_=j:_=parseInt(j)/100*N,typeof g=="number"?T=g:T=parseInt(g)/100*_,[_,T]}function F(N,j,g,_){var T=0,G=0,K=N/_;if(typeof g=="number")G=g,T=K-G;else{var J=10+parseInt(g)/10;J===0?(T=K*2,G=-T):(T=K/J*10,G=K-T)}return[T,G]}function U(N){var j=N.slice(-1)[0],g=j.barGap,_=j.barWidth,T=j.barNum,G=(g+_)*T-g;N.forEach(function(K){return K.barAllWidthAndGap=G})}function P(N,j){return N=V(N),N=I(N),N=A(N),N=z(N),N}function I(N){return N.map(function(j){var g=j.labelAxis,_=j.barAllWidthAndGap,T=j.barGap,G=j.barWidth,K=j.barIndex,J=g.tickGap,le=g.tickPosition,ue=g.axis,he=ue==="x"?0:1,ye=le.map(function(xe,ve){var De=le[ve][he]-J/2,Ie=De+(J-_)/2;return Ie+(K+.5)*G+K*T});return c(c({},j),{},{barLabelAxisPos:ye})})}function V(N){return N.map(function(j){var g=(0,l.mergeSameStackData)(j,N);g=y(j,g);var _=j.valueAxis,T=_.axis,G=_.minValue,K=_.maxValue,J=_.linePosition,le=R(G,K,G<0?0:G,J,T),ue=g.map(function(ye){return R(G,K,ye,J,T)}),he=ue.map(function(ye){return[le,ye]});return c(c({},j),{},{barValueAxisPos:he})})}function y(N,j){var g=N.data;return j.map(function(_,T){return typeof g[T]=="number"?_:null}).filter(function(_){return _!==null})}function A(N){return N.map(function(j){var g=j.barLabelAxisPos,_=j.data;return _.forEach(function(T,G){typeof T!="number"&&(g[G]=null)}),c(c({},j),{},{barLabelAxisPos:g.filter(function(T){return T!==null})})})}function z(N){return N.forEach(function(j){var g=j.data,_=j.barLabelAxisPos,T=j.barValueAxisPos,G=g.filter(function(J){return typeof J=="number"}).length,K=_.length;K>G&&(_.splice(G),T.splice(G))}),N}function R(N,j,g,_,T){if(typeof g!="number")return null;var G=j-N,K=T==="x"?0:1,J=_[1][K]-_[0][K],le=(g-N)/G;G===0&&(le=0);var ue=le*J;return ue+_[0][K]}function w(N){var j=N.animationCurve,g=N.animationFrame,_=N.rLevel,T=H(N),G=M(N);return T.map(function(K){return{name:"rect",index:_,visible:N.backgroundBar.show,animationCurve:j,animationFrame:g,shape:K,style:G}})}function H(N){var j=N.labelAxis,g=N.valueAxis,_=j.tickPosition,T=g.axis,G=g.linePosition,K=W(N),J=K/2,le=T==="x"?0:1,ue=_.map(function(ve){return ve[1-le]}),he=[G[0][le],G[1][le]],ye=he[0],xe=he[1];return ue.map(function(ve){return T==="x"?{x:ye,y:ve-J,w:xe-ye,h:K}:{x:ve-J,y:xe,w:K,h:ye-xe}})}function W(N){var j=N.barAllWidthAndGap,g=N.barCategoryWidth,_=N.backgroundBar,T=_.width;return typeof T=="number"?T:T==="auto"?j:parseInt(T)/100*g}function M(N){return N.backgroundBar.style}function D(N){var j=N.barLabelAxisPos,g=N.animationCurve,_=N.animationFrame,T=N.rLevel,G=L(N);return j.map(function(K,J){return{name:G,index:T,animationCurve:g,animationFrame:_,shape:B(N,J),style:Q(N,J)}})}function L(N){var j=N.shapeType;return j==="leftEchelon"||j==="rightEchelon"?"polyline":"rect"}function B(N,j){var g=N.shapeType;return g==="leftEchelon"?X(N,j):g==="rightEchelon"?ie(N,j):ae(N,j)}function X(N,j){var g=N.barValueAxisPos,_=N.barLabelAxisPos,T=N.barWidth,G=N.echelonOffset,K=(0,i.default)(g[j],2),J=K[0],le=K[1],ue=_[j],he=T/2,ye=N.valueAxis.axis,xe=[];return ye==="x"?(xe[0]=[le,ue-he],xe[1]=[le,ue+he],xe[2]=[J,ue+he],xe[3]=[J+G,ue-he],le-J<G&&xe.splice(3,1)):(xe[0]=[ue-he,le],xe[1]=[ue+he,le],xe[2]=[ue+he,J],xe[3]=[ue-he,J-G],J-le<G&&xe.splice(3,1)),{points:xe,close:!0}}function ie(N,j){var g=N.barValueAxisPos,_=N.barLabelAxisPos,T=N.barWidth,G=N.echelonOffset,K=(0,i.default)(g[j],2),J=K[0],le=K[1],ue=_[j],he=T/2,ye=N.valueAxis.axis,xe=[];return ye==="x"?(xe[0]=[le,ue+he],xe[1]=[le,ue-he],xe[2]=[J,ue-he],xe[3]=[J+G,ue+he],le-J<G&&xe.splice(2,1)):(xe[0]=[ue+he,le],xe[1]=[ue-he,le],xe[2]=[ue-he,J],xe[3]=[ue+he,J-G],J-le<G&&xe.splice(2,1)),{points:xe,close:!0}}function ae(N,j){var g=N.barValueAxisPos,_=N.barLabelAxisPos,T=N.barWidth,G=(0,i.default)(g[j],2),K=G[0],J=G[1],le=_[j],ue=N.valueAxis.axis,he={};return ue==="x"?(he.x=K,he.y=le-T/2,he.w=J-K,he.h=T):(he.x=le-T/2,he.y=J,he.w=T,he.h=K-J),he}function Q(N,j){var g=N.barStyle,_=N.gradient,T=N.color,G=N.independentColor,K=N.independentColors,J=[g.fill||T],le=(0,l.deepMerge)(J,_.color);if(G){var ue=K[j%K.length];le=ue instanceof Array?ue:[ue]}le.length===1&&le.push(le[0]);var he=re(N,j);return(0,l.deepMerge)({gradientColor:le,gradientParams:he,gradientType:"linear",gradientWith:"fill"},g)}function re(N,j){var g=N.barValueAxisPos,_=N.barLabelAxisPos,T=N.data,G=N.valueAxis,K=G.linePosition,J=G.axis,le=(0,i.default)(g[j],2),ue=le[0],he=le[1],ye=_[j],xe=T[j],ve=(0,i.default)(K,2),De=ve[0],Ie=ve[1],Ne=J==="x"?0:1,we=he;return N.gradient.local||(we=xe<0?De[Ne]:Ie[Ne]),J==="y"?[ye,we,ye,ue]:[we,ye,ue,ye]}function de(N){var j=D(N),g=N.shapeType;return j.forEach(function(_){var T=_.shape;g==="leftEchelon"?T=te(T,N):g==="rightEchelon"?T=se(T,N):T=ce(T,N),_.shape=T}),j}function te(N,j){var g=j.valueAxis.axis;N=(0,o.deepClone)(N);var _=N,T=_.points,G=g==="x"?0:1,K=T[2][G];return T.forEach(function(J){return J[G]=K}),N}function se(N,j){var g=j.valueAxis.axis;N=(0,o.deepClone)(N);var _=N,T=_.points,G=g==="x"?0:1,K=T[2][G];return T.forEach(function(J){return J[G]=K}),N}function ce(N,j){var g=j.valueAxis.axis,_=N.x,T=N.y,G=N.w,K=N.h;return g==="x"?G=0:(T=T+K,K=0),{x:_,y:T,w:G,h:K}}function pe(N,j,g,_){var T=_.chart.render,G=L(j);N[g]&&N[g][0].name!==G&&(N[g].forEach(function(K){return T.delGraph(K)}),N[g]=null)}function Y(N){var j=N.animationCurve,g=N.animationFrame,_=N.rLevel,T=b(N),G=Z(N);return T.map(function(K){return{name:"text",index:_,visible:N.label.show,animationCurve:j,animationFrame:g,shape:K,style:G}})}function b(N){var j=k(N),g=O(N);return g.map(function(_,T){return{position:_,content:j[T]}})}function k(N){var j=N.data,g=N.label,_=g.formatter;if(j=j.filter(function(G){return typeof G=="number"}).map(function(G){return G.toString()}),!_)return j;var T=(0,e.default)(_);return T==="string"?j.map(function(G){return _.replace("{value}",G)}):T==="function"?j.map(function(G,K){return _({value:G,index:K})}):j}function O(N){var j=N.label,g=N.barValueAxisPos,_=N.barLabelAxisPos,T=j.position,G=j.offset,K=N.valueAxis.axis;return g.map(function(J,le){var ue=(0,i.default)(J,2),he=ue[0],ye=ue[1],xe=_[le],ve=[ye,xe];return T==="bottom"&&(ve=[he,xe]),T==="center"&&(ve=[(he+ye)/2,xe]),K==="y"&&ve.reverse(),q(ve,G)})}function q(N,j){var g=(0,i.default)(N,2),_=g[0],T=g[1],G=(0,i.default)(j,2),K=G[0],J=G[1];return[_+K,T+J]}function Z(N){var j=N.color,g=N.label.style,_=N.gradient.color;return _.length&&(j=_[0]),g=(0,l.deepMerge)({fill:j},g),g}return Ma}var Ea={},ih;function YM(){if(ih)return Ea;ih=1;var n=Qe();Object.defineProperty(Ea,"__esModule",{value:!0}),Ea.pie=p;var e=n(sn()),t=n(wt()),i=n(Ut()),r=n(_t()),a=_n(),s=kd(),o=At(),l=Xt();function u(b,k){var O=Object.keys(b);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(b);k&&(q=q.filter(function(Z){return Object.getOwnPropertyDescriptor(b,Z).enumerable})),O.push.apply(O,q)}return O}function c(b){for(var k=1;k<arguments.length;k++){var O=arguments[k]!=null?arguments[k]:{};k%2?u(Object(O),!0).forEach(function(q){(0,e.default)(b,q,O[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(O)):u(Object(O)).forEach(function(q){Object.defineProperty(b,q,Object.getOwnPropertyDescriptor(O,q))})}return b}function p(b){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=k.series;O||(O=[]);var q=(0,l.initNeedSeries)(O,s.pieConfig,"pie");q=d(q,b),q=v(q,b),q=x(q),q=E(q),q=F(q),q=P(q),q=V(q),q=y(q),(0,a.doUpdate)({chart:b,series:q,key:"pie",getGraphConfig:W,getStartGraphConfig:M,beforeChange:D}),(0,a.doUpdate)({chart:b,series:q,key:"pieInsideLabel",getGraphConfig:X}),(0,a.doUpdate)({chart:b,series:q,key:"pieOutsideLabelLine",getGraphConfig:Q,getStartGraphConfig:re}),(0,a.doUpdate)({chart:b,series:q,key:"pieOutsideLabel",getGraphConfig:se,getStartGraphConfig:ce})}function d(b,k){var O=k.render.area;return b.forEach(function(q){var Z=q.center;Z=Z.map(function(N,j){return typeof N=="number"?N:parseInt(N)/100*O[j]}),q.center=Z}),b}function v(b,k){var O=Math.min.apply(Math,(0,r.default)(k.render.area))/2;return b.forEach(function(q){var Z=q.radius,N=q.data;Z=m(Z,O),N.forEach(function(j){var g=j.radius;g||(g=Z),g=m(g,O),j.radius=g}),q.radius=Z}),b}function m(b,k){return b instanceof Array||(b=[0,b]),b=b.map(function(O){return typeof O=="number"?O:parseInt(O)/100*k}),b}function x(b,k){var O=b.filter(function(q){var Z=q.roseType;return Z});return O.forEach(function(q){var Z=q.radius,N=q.data,j=q.roseSort,g=h(q),_=(0,r.default)(N);N=f(N),N.forEach(function(T,G){T.radius[1]=Z[1]-g*G}),j?N.reverse():q.data=_,q.roseIncrement=g}),b}function f(b){return b.sort(function(k,O){var q=k.value,Z=O.value;if(q===Z)return 0;if(q>Z)return-1;if(q<Z)return 1})}function h(b){var k=b.radius,O=b.roseIncrement;if(typeof O=="number")return O;if(O==="auto"){var q=b.data,Z=q.reduce(function(g,_){var T=_.radius;return[].concat((0,r.default)(g),(0,r.default)(T))},[]),N=Math.min.apply(Math,(0,r.default)(Z)),j=Math.max.apply(Math,(0,r.default)(Z));return(j-N)*.6/(q.length-1||1)}return parseInt(O)/100*k[1]}function E(b){return b.forEach(function(k){var O=k.data,q=k.percentToFixed,Z=C(O);O.forEach(function(j){var g=j.value;j.percent=g/Z*100,j.percentForLabel=S(g/Z*100,q)});var N=(0,l.mulAdd)(O.slice(0,-1).map(function(j){var g=j.percent;return g}));O.slice(-1)[0].percent=100-N,O.slice(-1)[0].percentForLabel=S(100-N,q)}),b}function S(b){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,O=b.toString(),q=O.split("."),Z=q[1]||"0",N=Z.slice(0,k);return q[1]=N,parseFloat(q.join("."))}function C(b){return(0,l.mulAdd)(b.map(function(k){var O=k.value;return O}))}function F(b){return b.forEach(function(k){var O=k.startAngle,q=k.data;q.forEach(function(Z,N){var j=U(q,N),g=(0,i.default)(j,2),_=g[0],T=g[1];Z.startAngle=O+_,Z.endAngle=O+T})}),b}function U(b,k){var O=Math.PI*2,q=b.slice(0,k+1),Z=(0,l.mulAdd)(q.map(function(g){var _=g.percent;return _})),N=b[k].percent,j=Z-N;return[O*j/100,O*Z/100]}function P(b){return b.forEach(function(k){var O=k.data;O.forEach(function(q){q.insideLabelPos=I(k,q)})}),b}function I(b,k){var O=b.center,q=k.startAngle,Z=k.endAngle,N=(0,i.default)(k.radius,2),j=N[0],g=N[1],_=(j+g)/2,T=(q+Z)/2;return o.getCircleRadianPoint.apply(void 0,(0,r.default)(O).concat([_,T]))}function V(b){return b.forEach(function(k){var O=k.data,q=k.center;O.forEach(function(Z){var N=Z.startAngle,j=Z.endAngle,g=Z.radius,_=(N+j)/2,T=o.getCircleRadianPoint.apply(void 0,(0,r.default)(q).concat([g[1],_]));Z.edgeCenterPos=T})}),b}function y(b){return b.forEach(function(k){var O=R(k),q=R(k,!1);O=w(O),q=w(q),H(O,k),H(q,k,!1)}),b}function A(b){var k=b.outsideLabel.labelLineBendGap,O=z(b);return typeof k!="number"&&(k=parseInt(k)/100*O),k+O}function z(b){var k=b.data,O=k.map(function(q){var Z=(0,i.default)(q.radius,2);Z[0];var N=Z[1];return N});return Math.max.apply(Math,(0,r.default)(O))}function R(b){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,O=b.data,q=b.center,Z=q[0];return O.filter(function(N){var j=N.edgeCenterPos,g=j[0];return k?g<=Z:g>Z})}function w(b){return b.sort(function(k,O){var q=(0,i.default)(k.edgeCenterPos,2);q[0];var Z=q[1],N=(0,i.default)(O.edgeCenterPos,2);N[0];var j=N[1];if(Z>j)return 1;if(Z<j)return-1;if(Z===j)return 0}),b}function H(b,k){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,q=k.center,Z=k.outsideLabel,N=A(k);b.forEach(function(j){var g=j.edgeCenterPos,_=j.startAngle,T=j.endAngle,G=Z.labelLineEndLength,K=(_+T)/2,J=o.getCircleRadianPoint.apply(void 0,(0,r.default)(q).concat([N,K])),le=(0,r.default)(J);le[0]+=G*(O?-1:1),j.labelLine=[g,J,le],j.labelLineLength=(0,l.getPolylineLength)(j.labelLine),j.align={textAlign:"left",textBaseline:"middle"},O&&(j.align.textAlign="right")})}function W(b){var k=b.data,O=b.animationCurve,q=b.animationFrame,Z=b.rLevel;return k.map(function(N,j){return{name:"pie",index:Z,animationCurve:O,animationFrame:q,shape:L(b,j),style:B(b,j)}})}function M(b){var k=b.animationDelayGap,O=b.startAnimationCurve,q=W(b);return q.forEach(function(Z,N){Z.animationCurve=O,Z.animationDelay=N*k,Z.shape.or=Z.shape.ir}),q}function D(b){b.animationDelay=0}function L(b,k){var O=b.center,q=b.data,Z=q[k],N=Z.radius,j=Z.startAngle,g=Z.endAngle;return{startAngle:j,endAngle:g,ir:N[0],or:N[1],rx:O[0],ry:O[1]}}function B(b,k){var O=b.pieStyle,q=b.data,Z=q[k],N=Z.color;return(0,l.deepMerge)({fill:N},O)}function X(b){var k=b.animationCurve,O=b.animationFrame,q=b.data,Z=b.rLevel;return q.map(function(N,j){return{name:"text",index:Z,visible:b.insideLabel.show,animationCurve:k,animationFrame:O,shape:ie(b,j),style:ae(b)}})}function ie(b,k){var O=b.insideLabel,q=b.data,Z=O.formatter,N=q[k],j=(0,t.default)(Z),g="";return j==="string"&&(g=Z.replace("{name}",N.name),g=g.replace("{percent}",N.percentForLabel),g=g.replace("{value}",N.value)),j==="function"&&(g=Z(N)),{content:g,position:N.insideLabelPos}}function ae(b,k){var O=b.insideLabel.style;return O}function Q(b){var k=b.animationCurve,O=b.animationFrame,q=b.data,Z=b.rLevel;return q.map(function(N,j){return{name:"polyline",index:Z,visible:b.outsideLabel.show,animationCurve:k,animationFrame:O,shape:de(b,j),style:te(b,j)}})}function re(b){var k=b.data,O=Q(b);return O.forEach(function(q,Z){q.style.lineDash=[0,k[Z].labelLineLength]}),O}function de(b,k){var O=b.data,q=O[k];return{points:q.labelLine}}function te(b,k){var O=b.outsideLabel,q=b.data,Z=O.labelLineStyle,N=q[k].color;return(0,l.deepMerge)({stroke:N,lineDash:[q[k].labelLineLength,0]},Z)}function se(b){var k=b.animationCurve,O=b.animationFrame,q=b.data,Z=b.rLevel;return q.map(function(N,j){return{name:"text",index:Z,visible:b.outsideLabel.show,animationCurve:k,animationFrame:O,shape:pe(b,j),style:Y(b,j)}})}function ce(b){var k=b.data,O=se(b);return O.forEach(function(q,Z){q.shape.position=k[Z].labelLine[1]}),O}function pe(b,k){var O=b.outsideLabel,q=b.data,Z=O.formatter,N=q[k],j=N.labelLine,g=N.name,_=N.percentForLabel,T=N.value,G=(0,t.default)(Z),K="";return G==="string"&&(K=Z.replace("{name}",g),K=K.replace("{percent}",_),K=K.replace("{value}",T)),G==="function"&&(K=Z(q[k])),{content:K,position:j[2]}}function Y(b,k){var O=b.outsideLabel,q=b.data,Z=q[k],N=Z.color,j=Z.align,g=O.style;return(0,l.deepMerge)(c({fill:N},j),g)}return Ea}var Aa={},rh;function $M(){if(rh)return Aa;rh=1;var n=Qe();Object.defineProperty(Aa,"__esModule",{value:!0}),Aa.radarAxis=c;var e=n(Ut()),t=n(sn()),i=n(_t()),r=_n(),a=gn(),s=At(),o=Xt();function l(M,D){var L=Object.keys(M);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(M);D&&(B=B.filter(function(X){return Object.getOwnPropertyDescriptor(M,X).enumerable})),L.push.apply(L,B)}return L}function u(M){for(var D=1;D<arguments.length;D++){var L=arguments[D]!=null?arguments[D]:{};D%2?l(Object(L),!0).forEach(function(B){(0,t.default)(M,B,L[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(L)):l(Object(L)).forEach(function(B){Object.defineProperty(M,B,Object.getOwnPropertyDescriptor(L,B))})}return M}function c(M){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=D.radar,B=[];L&&(B=p(L),B=d(B,M),B=v(B,M),B=m(B),B=x(B),B=f(B),B=[B]);var X=B;B.length&&!B[0].show&&(X=[]),(0,r.doUpdate)({chart:M,series:X,key:"radarAxisSplitArea",getGraphConfig:h,beforeUpdate:C,beforeChange:F}),(0,r.doUpdate)({chart:M,series:X,key:"radarAxisSplitLine",getGraphConfig:U,beforeUpdate:V,beforeChange:y}),(0,r.doUpdate)({chart:M,series:X,key:"radarAxisLine",getGraphConfig:A}),(0,r.doUpdate)({chart:M,series:X,key:"radarAxisLable",getGraphConfig:w}),M.radarAxis=B[0]}function p(M){return(0,o.deepMerge)((0,s.deepClone)(a.radarAxisConfig),M)}function d(M,D){var L=D.render.area,B=M.center;return M.centerPos=B.map(function(X,ie){return typeof X=="number"?X:parseInt(X)/100*L[ie]}),M}function v(M,D){var L=D.render.area,B=M.splitNum,X=M.radius,ie=Math.min.apply(Math,(0,i.default)(L))/2;typeof X!="number"&&(X=parseInt(X)/100*ie);var ae=X/B;return M.ringRadius=new Array(B).fill(0).map(function(Q,re){return ae*(re+1)}),M.radius=X,M}function m(M){var D=M.indicator,L=M.centerPos,B=M.radius,X=M.startAngle,ie=Math.PI*2,ae=D.length,Q=ie/ae,re=new Array(ae).fill(0).map(function(de,te){return Q*te+X});return M.axisLineAngles=re,M.axisLinePosition=re.map(function(de){return s.getCircleRadianPoint.apply(void 0,(0,i.default)(L).concat([B,de]))}),M}function x(M){var D=M.ringRadius,L=D[0]/2;return M.areaRadius=D.map(function(B){return B-L}),M}function f(M){var D=M.axisLineAngles,L=M.centerPos,B=M.radius,X=M.axisLabel;return B+=X.labelGap,M.axisLabelPosition=D.map(function(ie){return s.getCircleRadianPoint.apply(void 0,(0,i.default)(L).concat([B,ie]))}),M}function h(M){var D=M.areaRadius,L=M.polygon,B=M.animationCurve,X=M.animationFrame,ie=M.rLevel,ae=L?"regPolygon":"ring";return D.map(function(Q,re){return{name:ae,index:ie,visible:M.splitArea.show,animationCurve:B,animationFrame:X,shape:E(M,re),style:S(M,re)}})}function E(M,D){var L=M.polygon,B=M.areaRadius,X=M.indicator,ie=M.centerPos,ae=X.length,Q={rx:ie[0],ry:ie[1],r:B[D]};return L&&(Q.side=ae),Q}function S(M,D){var L=M.splitArea,B=M.ringRadius,X=M.axisLineAngles,ie=M.polygon,ae=M.centerPos,Q=L.color,re=L.style;re=u({fill:"rgba(0, 0, 0, 0)"},re);var de=B[0]-0;if(ie){var te=s.getCircleRadianPoint.apply(void 0,(0,i.default)(ae).concat([B[0],X[0]])),se=s.getCircleRadianPoint.apply(void 0,(0,i.default)(ae).concat([B[0],X[1]]));de=(0,o.getPointToLineDistance)(ae,te,se)}if(re=(0,o.deepMerge)((0,s.deepClone)(re,!0),{lineWidth:de}),!Q.length)return re;var ce=Q.length;return(0,o.deepMerge)(re,{stroke:Q[D%ce]})}function C(M,D,L,B){var X=M[L];if(X){var ie=B.chart.render,ae=D.polygon,Q=X[0].name,re=ae?"regPolygon":"ring",de=re!==Q;de&&(X.forEach(function(te){return ie.delGraph(te)}),M[L]=null)}}function F(M,D){var L=D.shape.side;typeof L=="number"&&(M.shape.side=L)}function U(M){var D=M.ringRadius,L=M.polygon,B=M.animationCurve,X=M.animationFrame,ie=M.rLevel,ae=L?"regPolygon":"ring";return D.map(function(Q,re){return{name:ae,index:ie,animationCurve:B,animationFrame:X,visible:M.splitLine.show,shape:P(M,re),style:I(M,re)}})}function P(M,D){var L=M.ringRadius,B=M.centerPos,X=M.indicator,ie=M.polygon,ae={rx:B[0],ry:B[1],r:L[D]},Q=X.length;return ie&&(ae.side=Q),ae}function I(M,D){var L=M.splitLine,B=L.color,X=L.style;if(X=u({fill:"rgba(0, 0, 0, 0)"},X),!B.length)return X;var ie=B.length;return(0,o.deepMerge)(X,{stroke:B[D%ie]})}function V(M,D,L,B){var X=M[L];if(X){var ie=B.chart.render,ae=D.polygon,Q=X[0].name,re=ae?"regPolygon":"ring",de=re!==Q;de&&(X.forEach(function(te){return ie.delGraph(te)}),M[L]=null)}}function y(M,D){var L=D.shape.side;typeof L=="number"&&(M.shape.side=L)}function A(M){var D=M.axisLinePosition,L=M.animationCurve,B=M.animationFrame,X=M.rLevel;return D.map(function(ie,ae){return{name:"polyline",index:X,visible:M.axisLine.show,animationCurve:L,animationFrame:B,shape:z(M,ae),style:R(M,ae)}})}function z(M,D){var L=M.centerPos,B=M.axisLinePosition,X=[L,B[D]];return{points:X}}function R(M,D){var L=M.axisLine,B=L.color,X=L.style;if(!B.length)return X;var ie=B.length;return(0,o.deepMerge)(X,{stroke:B[D%ie]})}function w(M){var D=M.axisLabelPosition,L=M.animationCurve,B=M.animationFrame,X=M.rLevel;return D.map(function(ie,ae){return{name:"text",index:X,visible:M.axisLabel.show,animationCurve:L,animationFrame:B,shape:H(M,ae),style:W(M,ae)}})}function H(M,D){var L=M.axisLabelPosition,B=M.indicator;return{content:B[D].name,position:L[D]}}function W(M,D){var L=M.axisLabel,B=(0,e.default)(M.centerPos,2),X=B[0],ie=B[1],ae=M.axisLabelPosition,Q=L.color,re=L.style,de=(0,e.default)(ae[D],2),te=de[0],se=de[1],ce=te>X?"left":"right",pe=se>ie?"top":"bottom";if(re=(0,o.deepMerge)({textAlign:ce,textBaseline:pe},re),!Q.length)return re;var Y=Q.length;return(0,o.deepMerge)(re,{fill:Q[D%Y]})}return Aa}var Ta={},ah;function KM(){if(ah)return Ta;ah=1;var n=Qe();Object.defineProperty(Ta,"__esModule",{value:!0}),Ta.radar=d;var e=n(sn()),t=n(wt()),i=n(Ut()),r=n(_t()),a=_n(),s=gn(),o=At(),l=Br,u=Xt();function c(R,w){var H=Object.keys(R);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(R);w&&(W=W.filter(function(M){return Object.getOwnPropertyDescriptor(R,M).enumerable})),H.push.apply(H,W)}return H}function p(R){for(var w=1;w<arguments.length;w++){var H=arguments[w]!=null?arguments[w]:{};w%2?c(Object(H),!0).forEach(function(W){(0,e.default)(R,W,H[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(H)):c(Object(H)).forEach(function(W){Object.defineProperty(R,W,Object.getOwnPropertyDescriptor(H,W))})}return R}function d(R){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},H=w.series;H||(H=[]);var W=(0,u.initNeedSeries)(H,s.radarConfig,"radar");W=v(W,R),W=m(W,R),W=x(W,R),(0,a.doUpdate)({chart:R,series:W,key:"radar",getGraphConfig:f,getStartGraphConfig:h,beforeChange:C}),(0,a.doUpdate)({chart:R,series:W,key:"radarPoint",getGraphConfig:F,getStartGraphConfig:U}),(0,a.doUpdate)({chart:R,series:W,key:"radarLabel",getGraphConfig:V})}function v(R,w){var H=w.radarAxis;if(!H)return[];var W=H.indicator,M=H.axisLineAngles,D=H.radius,L=H.centerPos;return R.forEach(function(B){var X=B.data;B.dataRadius=[],B.radarPosition=W.map(function(ie,ae){var Q=ie.max,re=ie.min,de=X[ae];typeof Q!="number"&&(Q=de),typeof re!="number"&&(re=0),typeof de!="number"&&(de=re);var te=(de-re)/(Q-re)*D;return B.dataRadius[ae]=te,o.getCircleRadianPoint.apply(void 0,(0,r.default)(L).concat([te,M[ae]]))})}),R}function m(R,w){var H=w.radarAxis;if(!H)return[];var W=H.centerPos,M=H.axisLineAngles;return R.forEach(function(D){var L=D.dataRadius,B=D.label,X=B.labelGap;D.labelPosition=L.map(function(ie,ae){return o.getCircleRadianPoint.apply(void 0,(0,r.default)(W).concat([ie+X,M[ae]]))})}),R}function x(R,w){var H=w.radarAxis;if(!H)return[];var W=(0,i.default)(H.centerPos,2),M=W[0],D=W[1];return R.forEach(function(L){var B=L.labelPosition,X=B.map(function(ie){var ae=(0,i.default)(ie,2),Q=ae[0],re=ae[1],de=Q>M?"left":"right",te=re>D?"top":"bottom";return{textAlign:de,textBaseline:te}});L.labelAlign=X}),R}function f(R){var w=R.animationCurve,H=R.animationFrame,W=R.rLevel;return[{name:"polyline",index:W,animationCurve:w,animationFrame:H,shape:E(R),style:S(R)}]}function h(R,w){var H=w.chart.radarAxis.centerPos,W=f(R)[0],M=W.shape.points.length,D=new Array(M).fill(0).map(function(L){return(0,r.default)(H)});return W.shape.points=D,[W]}function E(R){var w=R.radarPosition;return{points:w,close:!0}}function S(R){var w=R.radarStyle,H=R.color,W=(0,l.getRgbaValue)(H);W[3]=.5;var M={stroke:H,fill:(0,l.getColorFromRgbValue)(W)};return(0,u.deepMerge)(M,w)}function C(R,w){var H=w.shape,W=R.shape.points,M=W.length,D=H.points.length;if(D>M){var L=W.slice(-1)[0],B=new Array(D-M).fill(0).map(function(X){return(0,r.default)(L)});W.push.apply(W,(0,r.default)(B))}else D<M&&W.splice(D)}function F(R){var w=R.radarPosition,H=R.animationCurve,W=R.animationFrame,M=R.rLevel;return w.map(function(D,L){return{name:"circle",index:M,animationCurve:H,animationFrame:W,visible:R.point.show,shape:P(R,L),style:I(R)}})}function U(R){var w=F(R);return w.forEach(function(H){return H.shape.r=.01}),w}function P(R,w){var H=R.radarPosition,W=R.point,M=W.radius,D=H[w];return{rx:D[0],ry:D[1],r:M}}function I(R,w){var H=R.point,W=R.color,M=H.style;return(0,u.deepMerge)({stroke:W},M)}function V(R){var w=R.labelPosition,H=R.animationCurve,W=R.animationFrame,M=R.rLevel;return w.map(function(D,L){return{name:"text",index:M,visible:R.label.show,animationCurve:H,animationFrame:W,shape:y(R,L),style:z(R,L)}})}function y(R,w){var H=R.labelPosition,W=R.label,M=R.data,D=W.offset,L=W.formatter,B=A(H[w],D),X=M[w]?M[w].toString():"0",ie=(0,t.default)(L);return ie==="string"&&(X=L.replace("{value}",X)),ie==="function"&&(X=L(X)),{content:X,position:B}}function A(R,w){var H=(0,i.default)(R,2),W=H[0],M=H[1],D=(0,i.default)(w,2),L=D[0],B=D[1];return[W+L,M+B]}function z(R,w){var H=R.label,W=R.color,M=R.labelAlign,D=H.style,L=p({fill:W},M[w]);return(0,u.deepMerge)(L,D)}return Ta}var Ca={},oh;function ZM(){if(oh)return Ca;oh=1;var n=Qe();Object.defineProperty(Ca,"__esModule",{value:!0}),Ca.gauge=d;var e=n(sn()),t=n(wt()),i=n(Ut()),r=n(_t()),a=_n(),s=Vd(),o=At(),l=Xt(),u=Br;function c(Y,b){var k=Object.keys(Y);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(Y);b&&(O=O.filter(function(q){return Object.getOwnPropertyDescriptor(Y,q).enumerable})),k.push.apply(k,O)}return k}function p(Y){for(var b=1;b<arguments.length;b++){var k=arguments[b]!=null?arguments[b]:{};b%2?c(Object(k),!0).forEach(function(O){(0,e.default)(Y,O,k[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(k)):c(Object(k)).forEach(function(O){Object.defineProperty(Y,O,Object.getOwnPropertyDescriptor(k,O))})}return Y}function d(Y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=b.series;k||(k=[]);var O=(0,l.initNeedSeries)(k,s.gaugeConfig,"gauge");O=v(O,Y),O=m(O,Y),O=x(O,Y),O=f(O),O=h(O),O=E(O),O=S(O),O=C(O),O=F(O),O=U(O),(0,a.doUpdate)({chart:Y,series:O,key:"gaugeAxisTick",getGraphConfig:I}),(0,a.doUpdate)({chart:Y,series:O,key:"gaugeAxisLabel",getGraphConfig:A}),(0,a.doUpdate)({chart:Y,series:O,key:"gaugeBackgroundArc",getGraphConfig:w,getStartGraphConfig:M}),(0,a.doUpdate)({chart:Y,series:O,key:"gaugeArc",getGraphConfig:D,getStartGraphConfig:X,beforeChange:ie}),(0,a.doUpdate)({chart:Y,series:O,key:"gaugePointer",getGraphConfig:ae,getStartGraphConfig:te}),(0,a.doUpdate)({chart:Y,series:O,key:"gaugeDetails",getGraphConfig:se})}function v(Y,b){var k=b.render.area;return Y.forEach(function(O){var q=O.center;q=q.map(function(Z,N){return typeof Z=="number"?Z:parseInt(Z)/100*k[N]}),O.center=q}),Y}function m(Y,b){var k=b.render.area,O=Math.min.apply(Math,(0,r.default)(k))/2;return Y.forEach(function(q){var Z=q.radius;typeof Z!="number"&&(Z=parseInt(Z)/100*O),q.radius=Z}),Y}function x(Y,b){var k=b.render.area,O=Math.min.apply(Math,(0,r.default)(k))/2;return Y.forEach(function(q){var Z=q.radius,N=q.data,j=q.arcLineWidth;N.forEach(function(g){var _=g.radius,T=g.lineWidth;_||(_=Z),typeof _!="number"&&(_=parseInt(_)/100*O),g.radius=_,T||(T=j),g.lineWidth=T})}),Y}function f(Y,b){return Y.forEach(function(k){var O=k.startAngle,q=k.endAngle,Z=k.data,N=k.min,j=k.max,g=q-O,_=j-N;Z.forEach(function(T){var G=T.value,K=Math.abs((G-N)/_*g);T.startAngle=O,T.endAngle=O+K})}),Y}function h(Y,b){return Y.forEach(function(k){var O=k.data;O.forEach(function(q){var Z=q.color,N=q.gradient;(!N||!N.length)&&(N=Z),N instanceof Array||(N=[N]),q.gradient=N})}),Y}function E(Y,b){return Y.forEach(function(k){var O=k.startAngle,q=k.endAngle,Z=k.splitNum,N=k.center,j=k.radius,g=k.arcLineWidth,_=k.axisTick,T=_.tickLength,G=_.style.lineWidth,K=q-O,J=j-g/2,le=J-T,ue=K/(Z-1),he=2*Math.PI*j*K/(Math.PI*2),ye=Math.ceil(G/2)/he*K;k.tickAngles=[],k.tickInnerRadius=[],k.tickPosition=new Array(Z).fill(0).map(function(xe,ve){var De=O+ue*ve;return ve===0&&(De+=ye),ve===Z-1&&(De-=ye),k.tickAngles[ve]=De,k.tickInnerRadius[ve]=le,[o.getCircleRadianPoint.apply(void 0,(0,r.default)(N).concat([J,De])),o.getCircleRadianPoint.apply(void 0,(0,r.default)(N).concat([le,De]))]})}),Y}function S(Y,b){return Y.forEach(function(k){var O=k.center,q=k.tickInnerRadius,Z=k.tickAngles,N=k.axisLabel.labelGap,j=Z.map(function(_,T){return o.getCircleRadianPoint.apply(void 0,(0,r.default)(O).concat([q[T]-N,Z[T]]))}),g=j.map(function(_){var T=(0,i.default)(_,2),G=T[0],K=T[1];return{textAlign:G>O[0]?"right":"left",textBaseline:K>O[1]?"bottom":"top"}});k.labelPosition=j,k.labelAlign=g}),Y}function C(Y,b){return Y.forEach(function(k){var O=k.axisLabel,q=k.min,Z=k.max,N=k.splitNum,j=O.data,g=O.formatter,_=(Z-q)/(N-1),T=new Array(N).fill(0).map(function(K,J){return parseInt(q+_*J)}),G=(0,t.default)(g);j=(0,l.deepMerge)(T,j).map(function(K,J){var le=K;return G==="string"&&(le=g.replace("{value}",K)),G==="function"&&(le=g({value:K,index:J})),le}),O.data=j}),Y}function F(Y,b){return Y.forEach(function(k){var O=k.data,q=k.details,Z=k.center,N=q.position,j=q.offset,g=O.map(function(_){var T=_.startAngle,G=_.endAngle,K=_.radius,J=null;return N==="center"?J=Z:N==="start"?J=o.getCircleRadianPoint.apply(void 0,(0,r.default)(Z).concat([K,T])):N==="end"&&(J=o.getCircleRadianPoint.apply(void 0,(0,r.default)(Z).concat([K,G]))),P(J,j)});k.detailsPosition=g}),Y}function U(Y,b){return Y.forEach(function(k){var O=k.data,q=k.details,Z=q.formatter,N=(0,t.default)(Z),j=O.map(function(g){var _=g.value;return N==="string"&&(_=Z.replace("{value}","{nt}"),_=_.replace("{name}",g.name)),N==="function"&&(_=Z(g)),_.toString()});k.detailsContent=j}),Y}function P(Y,b){var k=(0,i.default)(Y,2),O=k[0],q=k[1],Z=(0,i.default)(b,2),N=Z[0],j=Z[1];return[O+N,q+j]}function I(Y){var b=Y.tickPosition,k=Y.animationCurve,O=Y.animationFrame,q=Y.rLevel;return b.map(function(Z,N){return{name:"polyline",index:q,visible:Y.axisTick.show,animationCurve:k,animationFrame:O,shape:V(Y,N),style:y(Y)}})}function V(Y,b){var k=Y.tickPosition;return{points:k[b]}}function y(Y,b){var k=Y.axisTick.style;return k}function A(Y){var b=Y.labelPosition,k=Y.animationCurve,O=Y.animationFrame,q=Y.rLevel;return b.map(function(Z,N){return{name:"text",index:q,visible:Y.axisLabel.show,animationCurve:k,animationFrame:O,shape:z(Y,N),style:R(Y,N)}})}function z(Y,b){var k=Y.labelPosition,O=Y.axisLabel.data;return{content:O[b].toString(),position:k[b]}}function R(Y,b){var k=Y.labelAlign,O=Y.axisLabel,q=O.style;return(0,l.deepMerge)(p({},k[b]),q)}function w(Y){var b=Y.animationCurve,k=Y.animationFrame,O=Y.rLevel;return[{name:"arc",index:O,visible:Y.backgroundArc.show,animationCurve:b,animationFrame:k,shape:H(Y),style:W(Y)}]}function H(Y){var b=Y.startAngle,k=Y.endAngle,O=Y.center,q=Y.radius;return{rx:O[0],ry:O[1],r:q,startAngle:b,endAngle:k}}function W(Y){var b=Y.backgroundArc,k=Y.arcLineWidth,O=b.style;return(0,l.deepMerge)({lineWidth:k},O)}function M(Y){var b=w(Y)[0],k=p({},b.shape);return k.endAngle=b.shape.startAngle,b.shape=k,[b]}function D(Y){var b=Y.data,k=Y.animationCurve,O=Y.animationFrame,q=Y.rLevel;return b.map(function(Z,N){return{name:"agArc",index:q,animationCurve:k,animationFrame:O,shape:L(Y,N),style:B(Y,N)}})}function L(Y,b){var k=Y.data,O=Y.center,q=Y.endAngle,Z=k[b],N=Z.radius,j=Z.startAngle,g=Z.endAngle,_=Z.localGradient;return _&&(q=g),{rx:O[0],ry:O[1],r:N,startAngle:j,endAngle:g,gradientEndAngle:q}}function B(Y,b){var k=Y.data,O=Y.dataItemStyle,q=k[b],Z=q.lineWidth,N=q.gradient;return N=N.map(function(j){return(0,u.getRgbaValue)(j)}),(0,l.deepMerge)({lineWidth:Z,gradient:N},O)}function X(Y){var b=D(Y);return b.map(function(k){var O=p({},k.shape);O.endAngle=k.shape.startAngle,k.shape=O}),b}function ie(Y,b){var k=Y.style.gradient,O=k.length,q=b.style.gradient.length;if(O>q)k.splice(q);else{var Z=k.slice(-1)[0];k.push.apply(k,(0,r.default)(new Array(q-O).fill(0).map(function(N){return(0,r.default)(Z)})))}}function ae(Y){var b=Y.animationCurve,k=Y.animationFrame,O=Y.center,q=Y.rLevel;return[{name:"polyline",index:q,visible:Y.pointer.show,animationCurve:b,animationFrame:k,shape:Q(Y),style:re(Y),setGraphCenter:function(N,j){j.style.graphCenter=O}}]}function Q(Y){var b=Y.center;return{points:de(b),close:!0}}function re(Y){var b=Y.startAngle,k=Y.endAngle,O=Y.min,q=Y.max,Z=Y.data,N=Y.pointer,j=Y.center,g=N.valueIndex,_=N.style,T=Z[g]?Z[g].value:0,G=(T-O)/(q-O)*(k-b)+b+Math.PI/2;return(0,l.deepMerge)({rotate:(0,l.radianToAngle)(G),scale:[1,1],graphCenter:j},_)}function de(Y){var b=(0,i.default)(Y,2),k=b[0],O=b[1],q=[k,O-40],Z=[k+5,O],N=[k,O+10],j=[k-5,O];return[q,Z,N,j]}function te(Y){var b=Y.startAngle,k=ae(Y)[0];return k.style.rotate=(0,l.radianToAngle)(b+Math.PI/2),[k]}function se(Y){var b=Y.detailsPosition,k=Y.animationCurve,O=Y.animationFrame,q=Y.rLevel,Z=Y.details.show;return b.map(function(N,j){return{name:"numberText",index:q,visible:Z,animationCurve:k,animationFrame:O,shape:ce(Y,j),style:pe(Y,j)}})}function ce(Y,b){var k=Y.detailsPosition,O=Y.detailsContent,q=Y.data,Z=Y.details,N=k[b],j=O[b],g=q[b].value,_=Z.valueToFixed;return{number:[g],content:j,position:N,toFixed:_}}function pe(Y,b){var k=Y.details,O=Y.data,q=k.style,Z=O[b].color;return(0,l.deepMerge)({fill:Z},q)}return Ca}var Pa={},sh;function JM(){if(sh)return Pa;sh=1;var n=Qe();Object.defineProperty(Pa,"__esModule",{value:!0}),Pa.legend=l;var e=n(sn()),t=n(Ut()),i=n(wt()),r=_n(),a=At(),s=gn(),o=Xt();function l(M){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=D.legend;L?(L=(0,o.deepMerge)((0,a.deepClone)(s.legendConfig,!0),L),L=u(L),L=c(L,D,M),L=p(L,M),L=m(L,M),L=[L]):L=[],(0,r.doUpdate)({chart:M,series:L,key:"legendIcon",getGraphConfig:V}),(0,r.doUpdate)({chart:M,series:L,key:"legendText",getGraphConfig:z})}function u(M){var D=M.data;return M.data=D.map(function(L){var B=(0,i.default)(L);return B==="string"?{name:L}:B==="object"?L:{name:""}}),M}function c(M,D,L){var B=D.series,X=L.legendStatus,ie=M.data.filter(function(ae){var Q=ae.name,re=B.find(function(de){var te=de.name;return Q===te});return re?(ae.color||(ae.color=re.color),ae.icon||(ae.icon=re.type),ae):!1});return(!X||X.length!==M.data.length)&&(X=new Array(M.data.length).fill(!0)),ie.forEach(function(ae,Q){return ae.status=X[Q]}),M.data=ie,L.legendStatus=X,M}function p(M,D){var L=D.render.ctx,B=M.data,X=M.textStyle,ie=M.textUnselectedStyle;return B.forEach(function(ae){var Q=ae.status,re=ae.name;ae.textWidth=d(L,re,Q?X:ie)}),M}function d(M,D,L){return M.font=v(L),M.measureText(D).width}function v(M){var D=M.fontFamily,L=M.fontSize;return"".concat(L,"px ").concat(D)}function m(M,D){var L=M.orient;return L==="vertical"?F(M,D):x(M,D),M}function x(M,D){var L=M.iconHeight,B=M.itemGap,X=f(M,D),ie=X.map(function(re){return E(re,M,D)}),ae=S(M,D),Q={textAlign:"left",textBaseline:"middle"};X.forEach(function(re,de){return re.forEach(function(te){var se=te.iconPosition,ce=te.textPosition,pe=ie[de],Y=ae+de*(B+L);te.iconPosition=C(se,[pe,Y]),te.textPosition=C(ce,[pe,Y]),te.align=Q})})}function f(M,D){var L=M.data,B=M.iconWidth,X=D.render.area[0],ie=0,ae=[[]];return L.forEach(function(Q,re){var de=h(ie,re,M),te=de+B+5+Q.textWidth;te>=X&&(ie=re,de=h(ie,re,M),ae.push([])),Q.iconPosition=[de,0],Q.textPosition=[de+B+5,0],ae.slice(-1)[0].push(Q)}),ae}function h(M,D,L){var B=L.data,X=L.iconWidth,ie=L.itemGap,ae=B.slice(M,D);return(0,o.mulAdd)(ae.map(function(Q){var re=Q.textWidth;return re}))+(D-M)*(ie+5+X)}function E(M,D,L){var B=D.left,X=D.right,ie=D.iconWidth,ae=D.itemGap,Q=L.render.area[0],re=M.length,de=(0,o.mulAdd)(M.map(function(se){var ce=se.textWidth;return ce}))+re*(5+ie)+(re-1)*ae,te=[B,X].findIndex(function(se){return se!=="auto"});return te===-1?(Q-de)/2:te===0?typeof B=="number"?B:parseInt(B)/100*Q:(typeof X!="number"&&(X=parseInt(X)/100*Q),Q-(de+X))}function S(M,D){var L=M.top,B=M.bottom,X=M.iconHeight,ie=D.render.area[1],ae=[L,B].findIndex(function(se){return se!=="auto"}),Q=X/2;if(ae===-1){var re=D.gridArea,de=re.y,te=re.h;return de+te+45-Q}else return ae===0?typeof L=="number"?L-Q:parseInt(L)/100*ie-Q:(typeof B!="number"&&(B=parseInt(B)/100*ie),ie-B-Q)}function C(M,D){var L=(0,t.default)(M,2),B=L[0],X=L[1],ie=(0,t.default)(D,2),ae=ie[0],Q=ie[1];return[B+ae,X+Q]}function F(M,D){var L=U(M,D),B=(0,t.default)(L,2),X=B[0],ie=B[1],ae=P(M,D);I(M,X);var Q={textAlign:"left",textBaseline:"middle"};M.data.forEach(function(re){var de=re.textPosition,te=re.iconPosition;re.textPosition=C(de,[ie,ae]),re.iconPosition=C(te,[ie,ae]),re.align=Q})}function U(M,D){var L=M.left,B=M.right,X=D.render.area[0],ie=[L,B].findIndex(function(Q){return Q!=="auto"});if(ie===-1)return[!0,X-10];var ae=[L,B][ie];return typeof ae!="number"&&(ae=parseInt(ae)/100*X),[!!ie,ae]}function P(M,D){var L=M.iconHeight,B=M.itemGap,X=M.data,ie=M.top,ae=M.bottom,Q=D.render.area[1],re=X.length,de=re*L+(re-1)*B,te=[ie,ae].findIndex(function(ce){return ce!=="auto"});if(te===-1)return(Q-de)/2;var se=[ie,ae][te];return typeof se!="number"&&(se=parseInt(se)/100*Q),te===1&&(se=Q-se-de),se}function I(M,D){var L=M.data,B=M.iconWidth,X=M.iconHeight,ie=M.itemGap,ae=X/2;L.forEach(function(Q,re){var de=Q.textWidth,te=(X+ie)*re+ae,se=D?0-B:0,ce=D?se-5-de:B+5;Q.iconPosition=[se,te],Q.textPosition=[ce,te]})}function V(M,D){var L=M.data,B=M.selectAble,X=M.animationCurve,ie=M.animationFrame,ae=M.rLevel;return L.map(function(Q,re){return(0,e.default)({name:Q.icon==="line"?"lineIcon":"rect",index:ae,visible:M.show,hover:B,click:B,animationCurve:X,animationFrame:ie,shape:y(M,re),style:A(M,re)},"click",W(M,re,D))})}function y(M,D){var L=M.data,B=M.iconWidth,X=M.iconHeight,ie=(0,t.default)(L[D].iconPosition,2),ae=ie[0],Q=ie[1],re=X/2;return{x:ae,y:Q-re,w:B,h:X}}function A(M,D){var L=M.data,B=M.iconStyle,X=M.iconUnselectedStyle,ie=L[D],ae=ie.status,Q=ie.color,re=ae?B:X;return(0,o.deepMerge)({fill:Q},re)}function z(M,D){var L=M.data,B=M.selectAble,X=M.animationCurve,ie=M.animationFrame,ae=M.rLevel;return L.map(function(Q,re){return{name:"text",index:ae,visible:M.show,hover:B,animationCurve:X,animationFrame:ie,hoverRect:H(M,re),shape:R(M,re),style:w(M,re),click:W(M,re,D)}})}function R(M,D){var L=M.data[D],B=L.textPosition,X=L.name;return{content:X,position:B}}function w(M,D){var L=M.textStyle,B=M.textUnselectedStyle,X=M.data[D],ie=X.status,ae=X.align,Q=ie?L:B;return(0,o.deepMerge)((0,a.deepClone)(Q,!0),ae)}function H(M,D){var L=M.textStyle,B=M.textUnselectedStyle,X=M.data[D],ie=X.status,ae=(0,t.default)(X.textPosition,2),Q=ae[0],re=ae[1],de=X.textWidth,te=ie?L:B,se=te.fontSize;return[Q,re-se/2,de,se]}function W(M,D,L){var B=M.data[D].name;return function(){var X=L.chart,ie=X.legendStatus,ae=X.option,Q=!ie[D],re=ae.series.find(function(de){var te=de.name;return te===B});re.show=Q,ie[D]=Q,L.chart.setOption(ae)}}return Pa}var lh;function QM(){return lh||(lh=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"mergeColor",{enumerable:!0,get:function(){return e.mergeColor}}),Object.defineProperty(n,"title",{enumerable:!0,get:function(){return t.title}}),Object.defineProperty(n,"grid",{enumerable:!0,get:function(){return i.grid}}),Object.defineProperty(n,"axis",{enumerable:!0,get:function(){return r.axis}}),Object.defineProperty(n,"line",{enumerable:!0,get:function(){return a.line}}),Object.defineProperty(n,"bar",{enumerable:!0,get:function(){return s.bar}}),Object.defineProperty(n,"pie",{enumerable:!0,get:function(){return o.pie}}),Object.defineProperty(n,"radarAxis",{enumerable:!0,get:function(){return l.radarAxis}}),Object.defineProperty(n,"radar",{enumerable:!0,get:function(){return u.radar}}),Object.defineProperty(n,"gauge",{enumerable:!0,get:function(){return c.gauge}}),Object.defineProperty(n,"legend",{enumerable:!0,get:function(){return p.legend}});var e=VM(),t=HM(),i=WM(),r=XM(),a=qM(),s=jM(),o=YM(),l=$M(),u=KM(),c=ZM(),p=JM()})(Fs)),Fs}var uh;function eE(){return uh||(uh=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=e(wt()),i=e(Ir());zd();var r=e(Ol()),a=At(),s=QM(),o=function l(u){if((0,i.default)(this,l),!u)return console.error("Charts Missing parameters!"),!1;var c=u.clientWidth,p=u.clientHeight,d=document.createElement("canvas");d.setAttribute("width",c),d.setAttribute("height",p),u.appendChild(d);var v={container:u,canvas:d,render:new r.default(d),option:null};Object.assign(this,v)};n.default=o,o.prototype.setOption=function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!l||(0,t.default)(l)!=="object")return console.error("setOption Missing parameters!"),!1;u&&this.render.graphs.forEach(function(p){return p.animationEnd()});var c=(0,a.deepClone)(l,!0);(0,s.mergeColor)(this,c),(0,s.grid)(this,c),(0,s.axis)(this,c),(0,s.radarAxis)(this,c),(0,s.title)(this,c),(0,s.bar)(this,c),(0,s.line)(this,c),(0,s.pie)(this,c),(0,s.radar)(this,c),(0,s.gauge)(this,c),(0,s.legend)(this,c),this.option=l,this.render.launchAnimation()},o.prototype.resize=function(){var l=this.container,u=this.canvas,c=this.render,p=this.option,d=l.clientWidth,v=l.clientHeight;u.setAttribute("width",d),u.setAttribute("height",v),c.area=[d,v],this.setOption(p)}})(Is)),Is}var ch;function tE(){return ch||(ch=1,(function(n){var e=Qe();Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"changeDefaultConfig",{enumerable:!0,get:function(){return i.changeDefaultConfig}}),n.default=void 0;var t=e(eE()),i=gn(),r=t.default;n.default=r})(Us)),Us}var nE=tE();const SE=fh(nE);export{dM as $,hE as A,vE as C,fE as D,Ed as E,ua as G,Wb as L,Zh as M,gE as O,en as P,dE as R,sE as S,cE as T,Ee as V,ZS as W,Mt as a,oe as b,lE as c,Wa as d,uE as e,dn as f,mE as g,Ya as h,id as i,db as j,Tc as k,Cd as l,pE as m,Zs as n,yE as o,xE as p,SE as q,hM as r,oE as s,aE as t,_E as u};
