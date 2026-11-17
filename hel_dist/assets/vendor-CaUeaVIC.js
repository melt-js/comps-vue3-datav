var _s=Math.pow;var ro=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())});var vs=Pu();Du();var Lu=Uu();function La(){return window||global}function Pu(){var i=La(),e=i.__HEL_LOAD_ASSETS_FLAG__,t=i.__HEL_ISO_FLAG__,n=i.__MASTER_APP_LOADED__;return{isLoadAssetsCalled:e===1,isFirstMod:t===void 0,isBeforeCore:n===void 0}}function Du(){var i=La();i.__HEL_ISO_FLAG__===void 0&&(i.__HEL_ISO_FLAG__=1)}function Iu(){var i="";try{throw new Error("codeHost")}catch(r){var e=r.stack.split(`
`);i=e[e.length-1]||""}var t=i.split("//")[1]||"",n=t.split("/")[0];return n}function Uu(){var i=La(),e=i.location,t=i.__HEL_MICRO_SHARED__,n=vs.isFirstMod,r=vs.isBeforeCore,s=vs.isLoadAssetsCalled;if(s||!n)return!1;if(r)return!0;var o=Iu();if(e&&e.host===o)return!0;if(t){var a=t.cacheRoot,l=a.appGroupName2platform,c=a.appName2platform,u=l||c||{};if(!Object.keys(u).length)return!0}return!1}function Nu(){return Lu}var M0=Nu;function Ou(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Yi={exports:{}};function oa(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function Fu(i){if(Array.isArray(i))return i}function Bu(i){if(Array.isArray(i))return oa(i)}function zu(i,e){var t=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=Pa(i))||e){t&&(i=t);var n=0,r=function(){};return{s:r,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,o=!0,a=!1;return{s:function(){t=t.call(i)},n:function(){var l=t.next();return o=l.done,l},e:function(l){a=!0,s=l},f:function(){try{o||t.return==null||t.return()}finally{if(a)throw s}}}}function la(i,e,t){return(e=Xu(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Gu(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Hu(i,e){var t=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=s.call(t)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function Vu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ku(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function so(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function er(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?so(Object(t),!0).forEach(function(n){la(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):so(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Yr(i,e){return Fu(i)||Hu(i,e)||Pa(i,e)||Vu()}function xs(i){return Bu(i)||Gu(i)||Pa(i)||ku()}function Wu(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Xu(i){var e=Wu(i,"string");return typeof e=="symbol"?e:e+""}function Pi(i){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pi(i)}function Pa(i,e){if(i){if(typeof i=="string")return oa(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?oa(i,e):void 0}}var tn=null;function Yu(){if(typeof window!="undefined"){tn=window;return}if(typeof global!="undefined"){tn=global;return}throw new Error("unable to locate global object")}function Bt(){return tn||Yu(),tn}function qu(i){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=null;(e=tn)!==null&&e!==void 0&&e.__HEL_MICRO_SHARED__&&(n=tn.__HEL_MICRO_SHARED__),t?tn=er(er({},tn),i):tn=i,n&&(tn.__HEL_MICRO_SHARED__=n)}function jr(){return Bt()}function uc(){var i=Bt();return i.MutationObserver||i.WebKitMutationObserver||i.MozMutationObserver}function ao(i,e){for(var t=null,n=i.length,r=0;r<n;r++){var s=i[r];if(s.tagName===e){t=s;break}}return t}function hc(i){return Object.keys(i)}function ju(){var i=function(r){var s=r||{},o=s.search||"";if(!o){var a=s.hash||"",l=a.split("?")[1]||"";l&&(o="?".concat(l))}return o};try{var e;return i((e=Bt())===null||e===void 0||(e=e.top)===null||e===void 0?void 0:e.location)}catch(n){var t;return i((t=Bt())===null||t===void 0?void 0:t.location)}}function oo(i){var e,t=(e=Bt())===null||e===void 0?void 0:e.localStorage;return t==null?void 0:t.getItem(i)}function lo(i,e){var t,n=(t=Bt())===null||t===void 0?void 0:t.localStorage;return n==null?void 0:n.setItem(i,e)}function Ku(){var i=ju(),e={};if(i!=null&&i.startsWith("?")){var t=i.substring(1),n=t.split("&");n.forEach(function(r){var s=r.split("="),o=Yr(s,2),a=o[0],l=o[1];e[a]=l})}return e}function fc(){var i="";try{throw new Error("getJsRunLocation")}catch(n){var e=n.stack.split(`
`),t=e.length;i=e[t-1]||e[t-2]||""}return i}function Jt(i,e,t,n){var r=tt(i,e);r[t]=n}function tt(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=i[e];return n||(n=t,i[e]=n),n}function dc(i,e){Object.keys(e).forEach(function(t){var n=e[t];[null,void 0,""].includes(n)||(i[t]=n)})}function ca(i,e){i.includes(e)||i.push(e)}function pc(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.nullValues,n=t===void 0?[null,void 0,""]:t,r=e.emptyObjIsNull,s=r===void 0?!0:r,o=e.emptyArrIsNull,a=o===void 0?!0:o,l=n.includes(i);if(l)return!0;if(Array.isArray(i))return a?i.length===0:!1;if(Pi(i)==="object"){var c=hc(i),u=c.length;return s?u===0:!1}return!1}function mc(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return e}function $u(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Zu(){var i=Bt();return i.process&&i.global&&!i.document}function Ju(i,e,t){if(i&&typeof i!="string")return i;try{var n=JSON.parse(i);return n||e}catch(r){if(e!==void 0)return e;throw t?new Error(t):r}}var gc=pc,ua=ca,_c=hc;function Qu(i,e){var t=[];return i.forEach(function(n){return ua(t,n)}),e.forEach(function(n){return ua(t,n)}),t}function vc(i,e){var t=e||function(r){return!gc(r)},n={};return _c(i).forEach(function(r){t(i[r])&&(n[r]=i[r])}),n}function eh(i,e,t){var n=t,r=zu(i),s;try{for(r.s();!(s=r.n()).done;){var o=s.value,a=o[e];if(![null,void 0,""].includes(a)){n=a;break}}}catch(l){r.e(l)}finally{r.f()}return n}function xc(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"MULTI",t=i.split(`
`),n=t.length-1,r=t.map(function(s,o){var a;if(!s&&(o===0||o===n))return"";var l=function(h,f){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",g=h;return h.endsWith("<br/>")?(g=h.substring(0,g.length-5),"".concat(g).concat(f)):"".concat(g).concat(m)},c=((a=s.trimStart)===null||a===void 0?void 0:a.call(s))||s;return e==="MULTI"?"".concat(l(c,""),`
`):(c=l(c,`
`," "),c)}).join("");return r}function Sc(i){return xc(i,"ONE")}function th(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,t=Bt(),n=Sc(i),r=t.alert||mc;if(e){var s;!((s=t.location)===null||s===void 0)&&s.port&&r(n);return}r(n)}function gn(i,e,t){i.dataset?i.dataset[e]=t:i.setAttribute("data-".concat(e),t)}function Kr(i){gn(i,"heldisabled","1"),i.disabled=!0}var nh=Object.freeze({__proto__:null,noop:mc,hasProp:$u,isServer:Zu,safeParse:Ju,isNull:gc,noDupPush:ua,okeys:_c,merge2List:Qu,purify:vc,getObjsVal:eh,pfstr:xc,nbstr:Sc,nbalert:th,setDataset:gn,disableNode:Kr});function ih(i,e){var t=this,n=e.fn,r=e.fnName,s=e.arg1PlatObjFnKeys,o=s.includes(r);return function(){for(var a=function(g){return er({platform:i},vc(g||{}))},l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];var h=c[0],f=c[1];return o?c[0]=a(h):c[1]=a(f),n.apply(t,c)}}function Mc(i,e,t){var n=t||{},r=n.ignoreKeys,s=r===void 0?[]:r,o=n.arg1PlatObjFnKeys,a=o===void 0?[]:o,l={};return Object.keys(e).forEach(function(c){var u=e[c];if(s.includes(c)){l[c]=u;return}var h=Pi(u);if(h&&h==="object"){l[c]=Mc(i,u,t);return}if(h==="function"){l[c]=ih(i,{arg1PlatObjFnKeys:a,fn:u,fnName:c});return}l[c]=u}),l}var rh="hel",yc="unpkg",Da={NONE:0,LOG:1,TRACE:2},st="__default_online_ver__",Ec=yc,ut={CORE_VER:"4.13.1",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:st,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:Ec,LS_LOG_MODE:"HelConfig.logMode",LS_LOG_FILTER:"HelConfig.logFilter",PLAT_HEL:rh,PLAT_UNPKG:yc,KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},lr={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},cr={NOT_LOAD:0,LOADING:1,LOADED:2},Tc=ut.LS_LOG_FILTER,bc=ut.LS_LOG_MODE,ur=Da.NONE,Ac=Da.LOG,sh=Da.TRACE,In={isIncludeFilter:function(e,t){if(!t.includes(","))return e.includes(t);var n=t.split(",");return n.some(function(r){return e.includes(r)})},getLogFilter:function(){return jn().logFilter},setLogFilter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;jn().logFilter=e,t&&lo(Tc,e)},setLogMode:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=parseInt(e,10);[ur,Ac,sh].includes(n)&&(jn().logMode=n,t&&lo(bc,n))},getLogMode:function(){return jn().logMode}},Cn={};function ah(){if(!jn().isInit){jn().isInit=!0;var i=Ku(),e=i.hellog,t=i.hellogf,n=e||oo(bc)||ur;In.setLogMode(n,!1);var r=t||oo(Tc)||"";In.setLogFilter(r,!1)}}function oh(){return{logMode:ur,logFilter:"",isInit:!1}}function lh(){if(Cn=jr().__HEL_MICRO_DEBUG__,!pc(Cn)){Cn.logMode===void 0&&(Cn.logMode=ur,Cn.logFilter="");return}Cn=oh(),jr().__HEL_MICRO_DEBUG__=Cn;try{ah()}catch(i){}}function ns(){return In.getLogMode()!==ur}function jn(){return Cn}var co="  %c--> HEL LOG:",uo="color:#ad4e00;font-weight:600";function Ut(){if(ns()){for(var i=In.getLogMode()===Ac?console.log:console.trace||console.log,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],s=t.slice(1);if(typeof r!="string")return i.apply(void 0,[co,uo].concat(t));var o=In.getLogFilter(),a=["".concat(co," ").concat(r),uo].concat(xs(s));if(o){In.isIncludeFilter(r,o)&&i.apply(void 0,xs(a));return}i.apply(void 0,xs(a))}}var tr={};function ch(i){!ns()||tr[i]||(tr[i]=Date.now())}function Ia(i,e,t){if(!(!ns()||!tr[i])){var n=tr[i];Ut("[[ PerfCheck ]] (".concat(i,"/").concat(e,") costs ").concat(Date.now()-n," ms")),t&&wc(i)}}function wc(i){tr[i]=0}var uh=ut.DEFAULT_API_URL,hh=ut.DEFAULT_USER_LS_KEY,Ss=ut.PLAT_HEL,ho=ut.PLAT_UNPKG,fh=ut.DEFAULT_API_PREFIX,dh=ut.CORE_VER,ph=ut.KEY_CSS_LINK_TAG_ADDED,mh=ut.KEY_STYLE_TAG_ADDED,fo=ut.KEY_IGNORE_CSS_PREFIX_LIST,gh=ut.KEY_IGNORE_STYLE_TAG_KEY,_h=ut.KEY_IGNORE_CSS_PREFIX_2_KEYS;function ha(i){var e=i||{},t=e.apiPrefix;return{apiMode:"get",apiPrefix:t,apiSuffix:"",apiPathOfApp:uh,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,customMetaUrl:"",customMetaJsonpUrl:"",getMeta:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:hh,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function fa(i){var e=er(er({isConfigOverwrite:!1,platform:i,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},ha()),{},{origin:ha({apiPrefix:fh})});return e}function da(){var i={};return{on:function(t,n){var r=i[t];if(!r){var s=[];i[t]=s,r=s}r.push(n)},emit:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];var o=i[t];if(o){var a=o.slice();a.forEach(function(l){return l.apply(void 0,r)})}},off:function(t,n){var r=i[t];if(r)for(var s=0,o=r.length;s<o;s++){var a=r[s];if(a===n){r.splice(s,1);break}}}}}function vh(){var i=fa(ho),e=fa(Ss),t={platform:Ss,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:la(la({},ho,i),Ss,e),common:{}},n=da(),r=da();return{ver:dh,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,patchedHeadAppend:null,patchedBodyAppend:null,createFeature:fc(),eventBus:n,userEventBus:r,cacheRoot:t,unpkgCache:i,helCache:e,dev:{setLogMode:In.setLogMode,setLogFilter:In.setLogFilter}}}function po(i){var e=[ph,mh,fo,gh,_h],t=function(r){return r===fo?[]:{}};e.forEach(function(n){return tt(i,n,t(n))})}function xh(){var i=ri();if(i){var e=i.cacheRoot;tt(e,"appGroupName2platform"),tt(e,"common");var t=e.caches;Object.keys(t).forEach(function(n){var r=t[n];tt(r,"appGroupName2firstVer"),tt(r,"appName2isLibAssigned"),tt(r,"appName2verExtraCssList"),tt(r,"appName2verCustomData"),tt(r,"hook"),tt(r,"origin",ha()),tt(r.origin,"hook")}),po(e.common),i.userEventBus||(i.userEventBus=da());return}i=vh(),po(i.cacheRoot.common),jr().__HEL_MICRO_SHARED__=i}function ri(){var i=jr().__HEL_MICRO_SHARED__;return i}function is(){return Ec}function at(i){var e=i||is(),t=si(),n=t.caches[e];if(!n){var r=Pi(i);if(r!=="string")throw console.error("invalid plaform:",i),new Error("fatal error: platform only can be a string, now it is ".concat(r));var s=fa(i);t.caches[e]=s,n=s}return n}function si(){return ri().cacheRoot}var yn={getCustomData:function(e,t,n){var r=n.versionId,s=n.platform,o=at(s),a=o.appName2verCustomData,l=tt(a,e),c=tt(l,t);return c[r||st]},getAppMeta:function(e,t){var n=at(t),r=n.appName2app;return r[e]},setVerLoadStatus:function(e,t,n,r){var s=r||{},o=s.versionId,a=s.platform,l=at(a)[n],c=o||st;Jt(l,e,c,t)},getVerLoadStatus:function(e,t,n){var r,s=n||{},o=s.versionId,a=s.platform,l=at(a)[t],c=o||st;return((r=l[e])===null||r===void 0?void 0:r[c])||cr.NOT_LOAD},ensureOnlineModule:function(e,t,n){if(!e[st]){var r=yn.getAppMeta(t,n),s=e[r==null?void 0:r.online_version];s&&(e[st]=s)}}};function Sh(i,e){var t,n=e||{},r=n.versionId,s=n.platform,o=at(s),a=o.appName2verEmitApp,l=o.appName2Comp,c=o.strictMatchVer,u=o.appName2EmitApp,h=(t=n.strictMatchVer)!==null&&t!==void 0?t:c,f=tt(a,i);yn.ensureOnlineModule(f,i,s);var m=r||st,g=f[m],S=l[i],d=S?{Comp:S}:null,p=h?null:u[i]||d,b=g||p||null;return Ut("[[ core:getVerApp ]] appName,options,result:",i,n,b),b}function Rc(i,e){Ut("[[ core:setEmitApp ]] appName,emitApp:",i,e);var t=e.versionId,n=e.platform,r=at(n),s=r.appName2verEmitApp,o=r.appName2Comp,a=r.appName2EmitApp,l=tt(s,i);l[st]||(o[i]=e.Comp,a[i]=e,Jt(s,i,st,e)),t&&Jt(s,i,t,e)}var mo=ut.KEY_CSS_LINK_TAG_ADDED,Ms=ut.KEY_STYLE_TAG_ADDED,go=ut.KEY_IGNORE_CSS_PREFIX_LIST,Mh=ut.KEY_IGNORE_STYLE_TAG_KEY,ys=ut.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Cc(i){var e=si(),t=e.common,n=tt(t,i);return n}function mr(i){var e=si(),t=e.common;return t[i]}function ji(i,e){var t=Cc(i),n=t[e];return n!==void 0?n:null}function qi(i,e,t){var n=Cc(i);n[e]=t}var Vt={setIgnoreCssPrefix:function(e){var t=mr(go);ca(t,e)},setIgnoreStyleTagKey:function(e){var t=Vt.getIgnoreStyleTagMap();t[e]=1},getIgnoreStyleTagMap:function(){var e=mr(Mh);return e},setIgnoreCssPrefixKey:function(e,t){var n=ji(ys,e);n||(n=[],qi(ys,e,n)),ca(n,t)},getIgnoreCssPrefixKeys:function(e){var t=mr(ys);return t[e]||[]},getMatchedIgnoreCssPrefix:function(e){for(var t=mr(go),n="",r=0;r<t.length;r++){var s=t[r];if(e.startsWith(s)){n=s;break}}return n},getIgnoreCssPrefixCssUrlList:function(e){var t=ji(mo,e);return t||(t=[],qi(mo,e,t)),t},setIgnoreCssPrefixCssUrl:function(e,t){var n=Vt.getIgnoreCssPrefixCssUrlList(e);n.push(t)},getStyleTagText:function(e){var t=ji(Ms,e)||"";return t},clearStyleTagText:function(e){qi(Ms,e,"")},appendStyleTagText:function(e,t){var n=Vt.getStyleTagText(e);qi(Ms,e,"".concat(n," ").concat(t))}};function Ua(i,e){var t=i.apiMode,n=i.apiPrefix,r=i.apiSuffix,s=i.apiPathOfApp,o=i.apiPathOfAppVersion,a=i.getSubAppAndItsVersionFn,l=i.onFetchMetaFailed,c=i.strictMatchVer,u=i.getUserName,h=i.userLsKey,f=i.shouldUseGray,m=i.getApiPrefix,g=i.trustAppNames,S=i.platform,d=i.origin,p=i.hook,b=i.customMetaUrl,_=i.customMetaJsonpUrl,A=i.getMeta,I={apiMode:t,apiPrefix:n,apiSuffix:r,apiPathOfApp:s,apiPathOfAppVersion:o,getSubAppAndItsVersionFn:a,onFetchMetaFailed:l,strictMatchVer:c,getUserName:u,userLsKey:h,shouldUseGray:f,getApiPrefix:m,trustAppNames:g,hook:p,platform:S,customMetaUrl:b,customMetaJsonpUrl:_,getMeta:A};return e&&(I.origin=d),I}function yh(i){var e=at(i);return Ua(e,!0)}function Eh(i){var e=ri(),t=e.nativeHeadAppend,n=e.nativeBodyAppend,r=i.headAppend||null,s=i.bodyAppend||null,o=function(l){return"pass same ".concat(l," handle, hel will ignore it for avlid 'Maximum call stack size exceeded'")};r&&r===t?console.error(o("headAppend")):e.patchedHeadAppend=r,s&&s===n?console.error(o("bodyAppend")):e.patchedBodyAppend=s}function Th(i,e){var t=at(e),n=Ua(i);t.isConfigOverwrite||(t.isConfigOverwrite=!0,dc(t,n))}function bh(i,e){var t=at(i),n="[[ core:originInit ]] invalid call, it can only been called";if(t.isConfigOverwrite){Ut("".concat(n," before init"));return}if(t.isOriginInitCalled){Ut("".concat(n," one time"));return}var r=Ua(e);t.isOriginInitCalled=!0,dc(t.origin,r)}function rs(i){return si().appGroupName2platform[i]||is()}function Ah(i,e,t){var n=si().appGroupName2platform;return(t||!n[i])&&(n[i]=e),rs(i)}function Na(i){return si().appName2platform[i]||is()}function wh(i,e,t){var n=si().appName2platform;return(t||!n[i])&&(n[i]=e),Na(i)}function Lc(i,e){var t=e.customKey,n=e.platform,r=n===void 0?Na(i):n,s=at(r),o=s.appName2verCustomData,a=tt(o,i),l=tt(a,t);return l}function Rh(i,e){var t=Lc(i,e),n=t[e.versionId||st];return n!==void 0?n:null}function Ch(i,e){var t=e.customValue,n=e.versionId,r=Lc(i,e);r[n||st]=t,r[st]||(r[st]=t)}var Lh=lr.STYLE_TAG_ADDED,Ph=lr.CSS_LINK_TAG_ADDED;function Oi(){return ri().eventBus}function Dh(){return ri().userEventBus}var ss={styleTagAdded:function(e){return"".concat(Lh,"/").concat(e)},cssLinkTagAdded:function(e){return"".concat(Ph,"(").concat(e,")")}};function Ih(i,e){var t,n=e||{},r=n.versionId,s=n.platform,o=at(s),a=o.appName2verEmitLib,l=o.appName2Lib,c=o.strictMatchVer,u=o.appName2isLibAssigned,h=(t=n.strictMatchVer)!==null&&t!==void 0?t:c,f=tt(a,i);yn.ensureOnlineModule(f,i);var m=r||st,g=f[m],S=u[i]?l[i]:null,d=h?null:S,p=g||d||null;return Ut("[[ core:getVerLib ]] appName,options,result:",i,n,p),p}function Pc(i,e,t){var n=t||{},r=n.appGroupName,s=e.versionId,o=e.appProperties,a=e.platform||t.platform,l=at(a),c=l.appName2verEmitLib,u=l.appName2Lib,h=l.appName2isLibAssigned,f=yn.getAppMeta(i,a),m=function(d){var p=u[d];p?Pi(p)==="object"&&Object.keys(p).length===0&&Object.assign(p,o):u[d]=o,h[d]=!0};m(i),r?m(r):f&&m(f.app_group_name),Ut("[[ core:setEmitLib ]] appMeta:",f);var g=tt(c,i);g[st]||Jt(c,i,st,o),s&&Jt(c,i,s,o)}function Dc(i,e){var t=at(e),n=t.appName2app;return n[i]}function Uh(i,e){var t=at(e),n=t.appName2app;n[i.name]=i}function Oa(i,e,t){yn.setVerLoadStatus(i,e,"appName2verLoadStatus",t)}function Nh(i,e){return yn.getVerLoadStatus(i,"appName2verLoadStatus",e)}function Oh(i,e,t){yn.setVerLoadStatus(i,e,"appName2verStyleFetched",t)}function Fh(i,e){return yn.getVerLoadStatus(i,"appName2verStyleFetched",e)}function Bh(i,e){var t,n=e||{},r=n.platform,s=n.versionId,o=at(r),a=o.appName2verStyleStr,l=o.appName2styleStr,c=l[i]||"";return s?((t=a[i])===null||t===void 0?void 0:t[s])||c||"":c}function zh(i,e,t){var n=t||{},r=n.platform,s=n.versionId,o=at(r),a=o.appName2verStyleStr,l=o.appName2verStyleFetched,c=o.appName2styleStr;if(!s){c[i]=e;return}Jt(a,i,s,e),Jt(l,i,s,cr.LOADED)}function Gh(i,e,t){var n=t||{},r=n.versionId,s=n.platform,o=at(s),a=o.appName2verExtraCssList;Ut("[[ core:setVerExtraCssList ]] cssList:",e);var l=tt(a,i);l[st]||Jt(a,i,st,e),r&&Jt(a,i,r,e)}function Hh(i,e){var t=e||{},n=t.versionId,r=t.platform,s=at(r),o=s.appName2verExtraCssList,a=tt(o,i),l=a[n]||a[st]||[];return Ut("[[ core:getVerExtraCssList ]] options,cssList:",t,l),l}function Vh(i,e){var t,n=e||{},r=n.platform,s=n.versionId,o=at(r),a=o.appName2verAppVersion,l=o.appName2appVersion,c=l[i]||null;return s&&((t=a[i])===null||t===void 0?void 0:t[s])||c}function kh(i,e,t){var n=t||{},r=n.platform,s=at(r),o=s.appName2verAppVersion,a=s.appGroupName2firstVer,l=s.appName2appVersion,c=e.version_tag||e.sub_app_version;if(c){var u=yn.getAppMeta(i,r),h=tt(o,i);h[st]||(Jt(o,i,st,e),l[i]=e),Jt(o,i,c,e),a[u.app_group_name]=e.sub_app_version}}function Gi(i,e){var t=i.split("@"),n=t.slice(1),r=n.join("@");return r||e||i}function _o(i){return i==="js"||i==="mjs"}function Fa(i,e){var t=fc();Ut("[[ core:tryGetVersion ]] may include ver source > ".concat(t));var n=at(e),r=n.appGroupName2firstVer,s=r[i]||"";if(t.includes("https://")||t.includes("http://")){var o=t.split("//"),a=Yr(o,2),l=a[1],c=l.split("/");if(s){var u=l.includes("/".concat(s,"/"));if(u){var h=s.startsWith("@");if(h){var S=s.split("/")[1]||"";return Gi(S)}else{var f=c.indexOf(s),m=c[f-1],g=m.startsWith("@");if(!g)return Gi(s)}}var d=c[1],p=c[2];if(d==="static"&&_o(p)||_o(d))return Gi(s)}var b=l.indexOf("@");if(b>=0){var _=c.filter(function(P){return P.includes("@")}),A=_.findIndex(function(P){return P.startsWith("@")});if(A>=0){var I=_[A+1]||"";return Gi(I,s)}var D=_[0]||"";return Gi(D,s)}var C=l.split("/".concat(e,"/")),X=Yr(C,2),le=X[1],x=le===void 0?"":le,E=x.split("/"),K=Yr(E,1),ee=K[0];return ee||s}return s}function Ba(i,e){if(i===st)return e||"";if(i.includes("_")){var t=i.substring(0,i.length-15);return t}return e||""}var pa=!1,Es=!1;function Wh(i){if(i&&(pa=!1,Es=!1),!Es){Es=!0;var e=Bt();e.__MASTER_APP_LOADED__===void 0&&(e.__MASTER_APP_LOADED__=!0,pa=!0)}}function Xh(){var i=`WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,
`;return i+="more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat(i),"color:red;"),!pa}function Yh(i,e){var t=e.platform,n=e.groupName,r=e.name,s=e.ver,o=e.elName;gn(i,"el",o),gn(i,"plat",t),gn(i,"gname",n),gn(i,"name",r),gn(i,"ver",s)}var qh=ut.KEY_ASSET_CTX;function Ts(i,e){if(!e||!["LINK","SCRIPT"].includes(e.tagName))return i(e);var t=e.href,n=e.tagName,r=e.src,s=t||r||"",o=n==="LINK",a=ji(qh,s)||{},l=a.platform,c=a.groupName,u=a.name,h=a.ver,f=a.beforeAppend,m=e;if(f){var g=o?"href":"src",S=e.getAttribute(g),d=function(_){return e.setAttribute(g,_)};m=f({el:e,nativeAppend:i,setAssetUrl:d,url:S,tagName:n})||e}var p=o?"HelLink":"HelScript";return l&&Yh(m,{platform:l,groupName:c,name:u,ver:h,elName:p}),i(m)}function jh(){var i=Bt();if(!(i.__POWERED_BY_QIANKUN__||i.__DISABLE_HEL_MONKEY_PATCH__)){var e=ri(),t=i.document,n=e.nativeHeadAppend,r=e.nativeBodyAppend;if(!(n||!t)){var s=t.head,o=t.body;if(n=s.appendChild.bind(s),e.nativeHeadAppend=n,o)r=o.appendChild.bind(o),e.nativeBodyAppend=r;else{var a=uc(),l=new a(function(h){for(var f,m=0;m<h.length;m++){var g=h[m].addedNodes;if(f=ao(g,"BODY"),f)break}f&&(r=f.appendChild.bind(f),e.nativeBodyAppend=r,f.appendChild=function(S){return Ts(u(r,f,"body"),S)},l.disconnect())}),c=ao(t.childNodes,"HTML");c&&l.observe(c,{childList:!0})}var u=function(f,m,g){var S=e.patchedHeadAppend,d=e.patchedBodyAppend,p=g==="head";if(S&&p)return S;if(d&&!p)return d;if(i.__POWERED_BY_WUJIE__)return f;var b=i.Element;return b?b.prototype.appendChild.bind(m):f};s.appendChild=function(h){return Ts(u(n,s,"head"),h)},o&&(o.appendChild=function(h){return Ts(u(r,o,"body"),h)})}}}var Ic="preFetch";function Kh(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.platform||rs(i),r=t.versionId||Fa(i,n),s=t.appName||Ba(r,i);Ut("[[ core:libReady ]] appGroupName ".concat(i,", appName ").concat(s,", versionId ").concat(r));var o=Dc(s,n);o!=null&&o.__fromCust&&(r=t.versionId||o.online_version,s=o.name,Ut("[[ core:libReady ]] fromCust, appGroupName ".concat(i,", appName ").concat(s,", versionId ").concat(r)));var a={platform:n,appName:s,appGroupName:i,versionId:r,appProperties:e,Comp:function(){},lifecycle:{}};Pc(s,a,{appGroupName:i,platform:n}),Oa(s,cr.LOADED,{versionId:r,platform:n});var l=Oi();Ia(Ic,"libReady"),l.emit(lr.SUB_LIB_LOADED,a)}function $h(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.lifecycle,r=t.platform||rs(i),s=t.versionId||Fa(i,r),o=t.appName||Ba(s,i),a={Comp:e,appName:o,appGroupName:i,lifecycle:n,platform:r,versionId:s,isLib:!1};Rc(o,a),Oa(o,cr.LOADED,{versionId:s,platform:r});var l=Oi();Ia(Ic,"appReady"),l.emit(lr.SUB_APP_LOADED,a)}var Uc="/* @helstart ",Zh=" @helend */",Jh=Uc.length;function Qh(i,e){var t=Oi(),n=Vt.getMatchedIgnoreCssPrefix(e);return n&&(Vt.setIgnoreCssPrefixCssUrl(n,e),t.emit(ss.cssLinkTagAdded(n),{nodes:[i]})),n}function ef(i){var e=Bt();if(e){var t=e.document.head.querySelectorAll('style[data-gname="'.concat(i,'"]'));if(t.length){Vt.clearStyleTagText(i),t.forEach(function(r){Kr(r),Vt.appendStyleTagText(i,r.innerText)});var n=Oi();n.emit(ss.styleTagAdded(i),{nodes:t})}}}function tf(i,e){var t=i.tagName,n=i.innerText,r=i.href;if(["STYLE","LINK"].includes(t)){if(t==="STYLE"){if(!n)return;var s=n.indexOf(Uc);if(s<0)return;var o=n.indexOf(Zh);if(o<0)return;var a=n.substring(Jh+s,o);if(a){var l=a.trim(),c="",u=l;if(l.includes("/")){var h=l.split("/");c=h[0],u=h[1]}gn(i,"gname",u),c&&gn(i,"plat",c),e[l]&&Kr(i);var f=Oi();Vt.appendStyleTagText(l,n),f.emit(ss.styleTagAdded(l),{nodes:[i]})}return}var m=Qh(i,r);m&&Kr(i)}}function nf(i,e){var t=i.tagName,n=i.src,r=n===void 0?"":n;if(t!=="SCRIPT"||!r.endsWith(".hot-update.js"))return!1;var s=Vt.getMatchedIgnoreCssPrefix(r);if(!s)return!1;var o=Vt.getIgnoreCssPrefixKeys(s);if(!o.length)return!1;var a=!1;return o.forEach(function(l){e[l]&&(ef(l),a=!0)}),a}function rf(){var i=ri(),e=Bt(),t=i.isStyleObInit,n=e.document;if(!(t||!n)){i.isStyleObInit=!0;var r=Vt.getIgnoreStyleTagMap(),s=uc();if(s){var o=new s(function(a){a.forEach(function(l){for(var c=l.addedNodes,u=l.removedNodes,h=c.length,f=0;f<h;f++)tf(c[f],r);for(var m=u.length,g=0;g<m&&!nf(u[g],r);g++);})});o.observe(document.head,{childList:!0})}}}Nc();Ut("hel-micro-core ver ".concat(ut.CORE_VER));var sf=lr,af=cr,of=ut,lf=Mc,cf=nh,uf=Xh;function Nc(i){i&&Oc(i),Wh(!!i),xh(),lh(),jh(),rf()}var hf=is,ff=at,df=jn,pf=ns,mf=Ut,gf=ch,_f=Ia,vf=wc,xf=Bt,Oc=qu,Sf=Sh,Mf=Rc,yf=Ih,Ef=Pc,Tf=Dc,bf=Uh,Af=Vh,wf=kh,Rf=Rh,Cf=Ch,Lf=ji,Pf=qi,Df=Vt,If=Nh,Uf=Oa,Nf=Fh,Of=Oh,Ff=Bh,Bf=zh,zf=Hh,Gf=Gh,Hf=Fa,Vf=Ba,kf=yh,Wf=rs,Xf=Ah,Yf=wh,qf=Na,jf=Th,Kf=bh,$f=Eh,Zf=Oi,Jf=Dh,Qf=ss,ed=Kh,td=$h;const nd=Object.freeze(Object.defineProperty({__proto__:null,allowLog:pf,appReady:td,clearPerfMark:vf,commonDataUtil:Df,commonUtil:cf,evName:Qf,getAppMeta:Tf,getAppPlatform:Wf,getAppPlatformByAppName:qf,getAppStyleStr:Ff,getCommonData:Lf,getCustomData:Rf,getGlobalThis:xf,getHelDebug:df,getHelEventBus:Zf,getPlatform:hf,getPlatformConfig:kf,getSharedCache:ff,getUserEventBus:Jf,getVerApp:Sf,getVerExtraCssList:zf,getVerLib:yf,getVerLoadStatus:If,getVerStyleStrStatus:Nf,getVersion:Af,helConsts:of,helEvents:sf,helLoadStatus:af,inectPlatToMod:lf,initGlobalConfig:$f,initPlatformConfig:jf,isSubApp:uf,libReady:ed,log:mf,originInit:Kf,perfMark:gf,perfPeek:_f,resetGlobalThis:Nc,setAppMeta:bf,setAppPlatform:Xf,setAppPlatformByAppName:Yf,setAppStyleStr:Bf,setCommonData:Pf,setCustomData:Cf,setEmitApp:Mf,setEmitLib:Ef,setGlobalThis:Oc,setVerExtraCssList:Gf,setVerLoadStatus:Uf,setVerStyleStrStatus:Of,setVersion:wf,tryGetAppName:Vf,tryGetVersion:Hf},Symbol.toStringTag,{value:"Module"})),id=Ou(nd);var rd=Yi.exports,vo;function sd(){return vo||(vo=1,(function(i,e){(function(t,n){n(e,id)})(rd,function(t,n){var r=function(){return r=Object.assign||function(F){for(var O,W=1,Y=arguments.length;W<Y;W++)for(var ue in O=arguments[W])Object.prototype.hasOwnProperty.call(O,ue)&&(F[ue]=O[ue]);return F},r.apply(this,arguments)};function s(F,O){var W=O||(n.getAppPlatform===null||n.getAppPlatform===void 0?void 0:n.getAppPlatform(F)),Y=n.getSharedCache(W).appName2Lib;return Y[F]||(Y[F]={}),Y[F]}var o="4.12.1";n.log("hel-lib-proxy ver ".concat(o));var a=n.getUserEventBus,l=n.helConsts,c=a();function u(F,O){var W=r({},O||{});return W.platform=W.platform||l.DEFAULT_PLAT,n.getVerLib(F,W)}function h(F,O){var W,Y=!0,ue="";O&&(typeof O=="string"?ue=O:(ue=O.platform||"",Y=(W=O.asProxy)===null||W===void 0||W));var Ee=s(F,ue=ue||n.getAppPlatform(F)||l.DEFAULT_PLAT);return typeof Proxy=="function"&&Y&&(Ee=(function(V,Z,de){return new Proxy(Z,{get:function(pe,Me){var _e=String(Me);return n.log("[[getLibProxy]] call lib [".concat(V,"] method [").concat(_e,"]")),Object.keys(pe).length?pe[_e]:s(V,de)[_e]}})})(F,Ee,ue)),n.log("[[ exposeLib ]] libName, libObj",F,Ee),Ee}function f(F,O,W){var Y=(function(ue){var Ee={allowDup:!1,platform:n.helConsts.DEFAULT_PLAT};return r(r({},Ee),ue||{})})(W);n.libReady(F,O,Y)}function m(F,O,W){n.appReady(F,O,W)}function g(F,O){return n.getVerApp(F,O)}var S=n.isSubApp;function d(){return!n.isSubApp()}var p=Object.freeze({__proto__:null,VER:o,eventBus:c,getLib:u,exposeLib:h,libReady:f,appReady:m,exposeApp:g,isSubApp:S,isMasterApp:d}),b=n.commonUtil.purify,_=["isMasterApp","isSubApp","eventBus"],A=["appReady","libReady"];function I(F,O){return O&&typeof O=="object"&&!Array.isArray(O)?r({platform:F},b(O)):{platform:F}}function D(F,O){var W={};return Object.keys(F).forEach(function(Y){var ue=F[Y];if(_.includes(Y))W[Y]=ue;else if(A.includes(Y))W[Y]=(function(V,Z){return function(){for(var de=[],pe=0;pe<arguments.length;pe++)de[pe]=arguments[pe];var Me=de[0],_e=de[1],Pe=de[2];return V(Me,_e,I(Z,Pe===void 0?{}:Pe))}})(ue,O);else{var Ee=Y==="exposeLib";W[Y]=(function(V,Z,de){return function(){for(var pe=[],Me=0;Me<arguments.length;Me++)pe[Me]=arguments[Me];var _e=pe[0],Pe=pe[1];return V(_e,!de||typeof Pe!="string"&&Pe!==void 0?I(Z,Pe):Pe||Z)}})(ue,O,Ee)}}),W}var C=function F(O){var W=D(p,O);return W.createInstance=F,W},X=o,le=f,x=h,E=u,K=S,ee=d,P=c,H=m,B=g,$={VER:X,libReady:le,exposeLib:x,getLib:E,isSubApp:K,isMasterApp:ee,eventBus:P,appReady:H,exposeApp:B,createInstance:C};(function(F){var O=n.getGlobalThis();n.commonUtil.isServer()||O.HelLibProxy||(n.log("auto bind hel-lib-proxy to global.HelLibProxy"),O.HelLibProxy=F)})($),t.VER=X,t.appReady=H,t.createInstance=C,t.default=$,t.eventBus=P,t.exposeApp=B,t.exposeLib=x,t.getLib=E,t.isMasterApp=ee,t.isSubApp=K,t.libReady=le,Object.defineProperty(t,"__esModule",{value:!0})})})(Yi,Yi.exports)),Yi.exports}var y0=sd();const za="161",oi={ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,xo=1,od=2,Fc=1,ld=2,mn=3,Fn=0,It=1,_n=2,Un=0,Ci=1,So=2,Mo=3,yo=4,cd=5,Yn=100,ud=101,hd=102,Eo=103,To=104,fd=200,dd=201,pd=202,md=203,ma=204,ga=205,gd=206,_d=207,vd=208,xd=209,Sd=210,Md=211,yd=212,Ed=213,Td=214,bd=0,Ad=1,wd=2,$r=3,Rd=4,Cd=5,Ld=6,Pd=7,as=0,Dd=1,Id=2,Nn=0,Ud=1,Nd=2,Od=3,Fd=4,Bd=5,zd=6,Bc=300,Di=301,Ii=302,_a=303,va=304,os=306,xa=1e3,jt=1001,Sa=1002,Ct=1003,bo=1004,Hi=1005,Pt=1006,bs=1007,Kn=1008,On=1009,Gd=1010,Hd=1011,Ga=1012,zc=1013,Pn=1014,vn=1015,nr=1016,Gc=1017,Hc=1018,$n=1020,Vd=1021,Kt=1023,kd=1024,Wd=1025,Zn=1026,Ui=1027,Xd=1028,Vc=1029,Yd=1030,kc=1031,Wc=1033,As=33776,ws=33777,Rs=33778,Cs=33779,Ao=35840,wo=35841,Ro=35842,Co=35843,Xc=36196,Lo=37492,Po=37496,Do=37808,Io=37809,Uo=37810,No=37811,Oo=37812,Fo=37813,Bo=37814,zo=37815,Go=37816,Ho=37817,Vo=37818,ko=37819,Wo=37820,Xo=37821,Ls=36492,Yo=36494,qo=36495,qd=36283,jo=36284,Ko=36285,$o=36286,Yc=3e3,Jn=3001,jd=3200,Kd=3201,Ha=0,$d=1,Ht="",Mt="srgb",Sn="srgb-linear",Va="display-p3",ls="display-p3-linear",Zr="linear",Qe="srgb",Jr="rec709",Qr="p3",ci=7680,Zo=519,Zd=512,Jd=513,Qd=514,qc=515,ep=516,tp=517,np=518,ip=519,Ma=35044,Jo="300 es",ya=1035,xn=2e3,es=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const Ki=Math.PI/180,ir=180/Math.PI;function an(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function ka(i,e){return(i%e+e)%e}function rp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function sp(i,e,t){return i!==e?(t-i)/(e-i):0}function $i(i,e,t){return(1-t)*i+t*e}function ap(i,e,t,n){return $i(i,e,1-Math.exp(-t*n))}function op(i,e=1){return e-Math.abs(ka(i,e*2)-e)}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hp(i,e){return i+Math.random()*(e-i)}function fp(i){return i*(.5-Math.random())}function dp(i){i!==void 0&&(Qo=i);let e=Qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(i){return i*Ki}function mp(i){return i*ir}function Ea(i){return(i&i-1)===0&&i!==0}function gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ts(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _p(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jc={DEG2RAD:Ki,RAD2DEG:ir,generateUUID:an,clamp:ft,euclideanModulo:ka,mapLinear:rp,inverseLerp:sp,lerp:$i,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:up,randFloat:hp,randFloatSpread:fp,seededRandom:dp,degToRad:pp,radToDeg:mp,isPowerOfTwo:Ea,ceilPowerOfTwo:gp,floorPowerOfTwo:ts,setQuaternionFromProperEuler:_p,normalize:$e,denormalize:$t};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],S=r[0],d=r[3],p=r[6],b=r[1],_=r[4],A=r[7],I=r[2],D=r[5],C=r[8];return s[0]=o*S+a*b+l*I,s[3]=o*d+a*_+l*D,s[6]=o*p+a*A+l*C,s[1]=c*S+u*b+h*I,s[4]=c*d+u*_+h*D,s[7]=c*p+u*A+h*C,s[2]=f*S+m*b+g*I,s[5]=f*d+m*_+g*D,s[8]=f*p+m*A+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=h*S,e[1]=(r*c-u*n)*S,e[2]=(a*n-r*o)*S,e[3]=f*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ps.makeScale(e,t)),this}rotate(e){return this.premultiply(Ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new We;function Kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){const i=rr("canvas");return i.style.display="block",i}const el={};function Qn(i){i in el||(el[i]=!0,console.warn(i))}const tl=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nl=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Sn]:{transfer:Zr,primaries:Jr,toReference:i=>i,fromReference:i=>i},[Mt]:{transfer:Qe,primaries:Jr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ls]:{transfer:Zr,primaries:Qr,toReference:i=>i.applyMatrix3(nl),fromReference:i=>i.applyMatrix3(tl)},[Va]:{transfer:Qe,primaries:Qr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nl),fromReference:i=>i.applyMatrix3(tl).convertLinearToSRGB()}},xp=new Set([Sn,ls]),Ze={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=gr[e].toReference,r=gr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return gr[i].primaries},getTransfer:function(i){return i===Ht?Zr:gr[i].transfer}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class $c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=rr("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sp=0;class Zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Is(r[o].image)):s.push(Is(r[o]))}else s=Is(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?$c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mp=0;class Lt extends ai{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=jt,r=jt,s=Pt,o=Kn,a=Kt,l=On,c=Lt.DEFAULT_ANISOTROPY,u=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=an(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?Mt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Jn:Yc}set encoding(e){Qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?Mt:Ht}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Bc;Lt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],S=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,A=(m+1)/2,I=(p+1)/2,D=(u+f)/4,C=(h+S)/4,X=(g+d)/4;return _>A&&_>I?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=D/n,s=C/n):A>I?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=D/r,s=X/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=C/s,r=X/s),this.set(n,r,s,t),this}let b=Math.sqrt((d-g)*(d-g)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(h-S)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yp extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Mt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ep extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=S;return}if(h!==S||l!==f||c!==m||u!==g){let d=1-a;const p=l*f+c*m+u*g+h*S,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const I=Math.sqrt(_),D=Math.atan2(I,p*b);d=Math.sin(d*D)/I,a=Math.sin(a*D)/I}const A=a*b;if(l=l*d+f*A,c=c*d+m*A,u=u*d+g*A,h=h*d+S*A,d===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-_s(e,2));return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new L,il=new ni;class Bn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(s,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),vr.subVectors(this.max,Vi),hi.subVectors(e.a,Vi),fi.subVectors(e.b,Vi),di.subVectors(e.c,Vi),En.subVectors(fi,hi),Tn.subVectors(di,fi),Hn.subVectors(hi,di);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Hn.z,Hn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Hn.z,0,-Hn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Hn.y,Hn.x,0];return!Ns(t,hi,fi,di,vr)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,hi,fi,di,vr))?!1:(xr.crossVectors(En,Tn),t=[xr.x,xr.y,xr.z],Ns(t,hi,fi,di,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new L,new L,new L,new L,new L,new L,new L,new L],Wt=new L,_r=new Bn,hi=new L,fi=new L,di=new L,En=new L,Tn=new L,Hn=new L,Vi=new L,vr=new L,xr=new L,Vn=new L;function Ns(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Vn.fromArray(i,s);const a=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tp=new Bn,ki=new L,Os=new L;class hr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Os)),this.expandByPoint(ki.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new L,Fs=new L,Sr=new L,bn=new L,Bs=new L,Mr=new L,zs=new L;class Wa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fs.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=bn.dot(this.direction),l=-bn.dot(Sr),c=bn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const S=1/u;h*=S,f*=S,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fs).addScaledVector(Sr,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,s){Bs.subVectors(t,e),Mr.subVectors(n,e),zs.crossVectors(Bs,Mr);let o=this.direction.dot(zs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const l=a*this.direction.dot(Mr.crossVectors(bn,Mr));if(l<0)return null;const c=a*this.direction.dot(Bs.cross(bn));if(c<0||l+c>o)return null;const u=-a*bn.dot(zs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,o,a,l,c,u,h,f,m,g,S,d){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,m,g,S,d)}set(e,t,n,r,s,o,a,l,c,u,h,f,m,g,S,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=S,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),o=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,S=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-S*c,t[9]=-a*l,t[2]=S-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,S=c*h;t[0]=f+S*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=S+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,S=c*h;t[0]=f-S*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=S-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,S=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+S,t[1]=l*h,t[5]=S*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-S*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+S,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,Ap)}lookAt(e,t,n){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),An.crossVectors(n,Ot),An.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),An.crossVectors(n,Ot)),An.normalize(),yr.crossVectors(Ot,An),r[0]=An.x,r[4]=yr.x,r[8]=Ot.x,r[1]=An.y,r[5]=yr.y,r[9]=Ot.y,r[2]=An.z,r[6]=yr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],S=n[6],d=n[10],p=n[14],b=n[3],_=n[7],A=n[11],I=n[15],D=r[0],C=r[4],X=r[8],le=r[12],x=r[1],E=r[5],K=r[9],ee=r[13],P=r[2],H=r[6],B=r[10],$=r[14],F=r[3],O=r[7],W=r[11],Y=r[15];return s[0]=o*D+a*x+l*P+c*F,s[4]=o*C+a*E+l*H+c*O,s[8]=o*X+a*K+l*B+c*W,s[12]=o*le+a*ee+l*$+c*Y,s[1]=u*D+h*x+f*P+m*F,s[5]=u*C+h*E+f*H+m*O,s[9]=u*X+h*K+f*B+m*W,s[13]=u*le+h*ee+f*$+m*Y,s[2]=g*D+S*x+d*P+p*F,s[6]=g*C+S*E+d*H+p*O,s[10]=g*X+S*K+d*B+p*W,s[14]=g*le+S*ee+d*$+p*Y,s[3]=b*D+_*x+A*P+I*F,s[7]=b*C+_*E+A*H+I*O,s[11]=b*X+_*K+A*B+I*W,s[15]=b*le+_*ee+A*$+I*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],S=e[7],d=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*m-n*l*m)+S*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+d*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],S=e[13],d=e[14],p=e[15],b=h*d*c-S*f*c+S*l*m-a*d*m-h*l*p+a*f*p,_=g*f*c-u*d*c-g*l*m+o*d*m+u*l*p-o*f*p,A=u*S*c-g*h*c+g*a*m-o*S*m-u*a*p+o*h*p,I=g*h*l-u*S*l-g*a*f+o*S*f+u*a*d-o*h*d,D=t*b+n*_+r*A+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=b*C,e[1]=(S*f*s-h*d*s-S*r*m+n*d*m+h*r*p-n*f*p)*C,e[2]=(a*d*s-S*l*s+S*r*c-n*d*c-a*r*p+n*l*p)*C,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*m-n*l*m)*C,e[4]=_*C,e[5]=(u*d*s-g*f*s+g*r*m-t*d*m-u*r*p+t*f*p)*C,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*p-t*l*p)*C,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*C,e[8]=A*C,e[9]=(g*h*s-u*S*s-g*n*m+t*S*m+u*n*p-t*h*p)*C,e[10]=(o*S*s-g*a*s+g*n*c-t*S*c-o*n*p+t*a*p)*C,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*C,e[12]=I*C,e[13]=(u*S*r-g*h*r+g*n*f-t*S*f-u*n*d+t*h*d)*C,e[14]=(g*a*r-o*S*r-g*n*l+t*S*l+o*n*d-t*a*d)*C,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,S=o*u,d=o*h,p=a*h,b=l*c,_=l*u,A=l*h,I=n.x,D=n.y,C=n.z;return r[0]=(1-(S+p))*I,r[1]=(m+A)*I,r[2]=(g-_)*I,r[3]=0,r[4]=(m-A)*D,r[5]=(1-(f+p))*D,r[6]=(d+b)*D,r[7]=0,r[8]=(g+_)*C,r[9]=(d-b)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const o=pi.set(r[4],r[5],r[6]).length(),a=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/o,h=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=h,Xt.elements[9]*=h,Xt.elements[10]*=h,t.setFromRotationMatrix(Xt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=xn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(a===xn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===es)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=xn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,m=(n+r)*u;let g,S;if(a===xn)g=(o+s)*h,S=-2*h;else if(a===es)g=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new L,Xt=new it,bp=new L(0,0,0),Ap=new L(1,1,1),An=new L,yr=new L,Ot=new L,rl=new it,sl=new ni;class cs{constructor(e=0,t=0,n=0,r=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wp=0;const al=new L,mi=new ni,fn=new it,Er=new L,Wi=new L,Rp=new L,Cp=new ni,ol=new L(1,0,0),ll=new L(0,1,0),cl=new L(0,0,1),Lp={type:"added"},Pp={type:"removed"};class yt extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new L,t=new cs,n=new ni,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new We}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Wi,Er,this.up):fn.lookAt(Er,Wi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(fn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new L,dn=new L,Gs=new L,pn=new L,gi=new L,_i=new L,ul=new L,Hs=new L,Vs=new L,ks=new L;class nn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),dn.subVectors(n,t),Gs.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(dn),l=Yt.dot(Gs),c=dn.dot(dn),u=dn.dot(Gs),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),dn.subVectors(e,t),Yt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Yt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;gi.subVectors(r,n),_i.subVectors(s,n),Hs.subVectors(e,n);const l=gi.dot(Hs),c=_i.dot(Hs);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,r);const u=gi.dot(Vs),h=_i.dot(Vs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(gi,o);ks.subVectors(e,s);const m=gi.dot(ks),g=_i.dot(ks);if(g>=0&&m<=g)return t.copy(s);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_i,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return ul.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(ul,a);const p=1/(d+S+f);return o=S*p,a=f*p,t.copy(n).addScaledVector(gi,o).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Ws(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=ka(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ws(o,s,e+1/3),this.g=Ws(o,s,e),this.b=Ws(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ze.fromWorkingColorSpace(bt.copy(this),e),Math.round(ft(bt.r*255,0,255))*65536+Math.round(ft(bt.g*255,0,255))*256+Math.round(ft(bt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Mt){Ze.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Tr);const n=$i(wn.h,Tr.h,t),r=$i(wn.s,Tr.s,t),s=$i(wn.l,Tr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new qe;qe.NAMES=Qc;let Dp=0;class Fi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Ci,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eu extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=as,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,br=new oe;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),e}}class tu extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nu extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ip=0;const Gt=new it,Xs=new yt,vi=new L,Ft=new Bn,Xi=new Bn,gt=new L;class on extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kc(e)?nu:tu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ft.min,Xi.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,Xi.max),Ft.expandByPoint(gt)):(Ft.expandByPoint(Xi.min),Ft.expandByPoint(Xi.max))}Ft.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(vi.fromBufferAttribute(e,c),gt.add(vi)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<a;x++)c[x]=new L,u[x]=new L;const h=new L,f=new L,m=new L,g=new oe,S=new oe,d=new oe,p=new L,b=new L;function _(x,E,K){h.fromArray(r,x*3),f.fromArray(r,E*3),m.fromArray(r,K*3),g.fromArray(o,x*2),S.fromArray(o,E*2),d.fromArray(o,K*2),f.sub(h),m.sub(h),S.sub(g),d.sub(g);const ee=1/(S.x*d.y-d.x*S.y);isFinite(ee)&&(p.copy(f).multiplyScalar(d.y).addScaledVector(m,-S.y).multiplyScalar(ee),b.copy(m).multiplyScalar(S.x).addScaledVector(f,-d.x).multiplyScalar(ee),c[x].add(p),c[E].add(p),c[K].add(p),u[x].add(b),u[E].add(b),u[K].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let x=0,E=A.length;x<E;++x){const K=A[x],ee=K.start,P=K.count;for(let H=ee,B=ee+P;H<B;H+=3)_(n[H+0],n[H+1],n[H+2])}const I=new L,D=new L,C=new L,X=new L;function le(x){C.fromArray(s,x*3),X.copy(C);const E=c[x];I.copy(E),I.sub(C.multiplyScalar(C.dot(E))).normalize(),D.crossVectors(X,E);const ee=D.dot(u[x])<0?-1:1;l[x*4]=I.x,l[x*4+1]=I.y,l[x*4+2]=I.z,l[x*4+3]=ee}for(let x=0,E=A.length;x<E;++x){const K=A[x],ee=K.start,P=K.count;for(let H=ee,B=ee+P;H<B;H+=3)le(n[H+0]),le(n[H+1]),le(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),S=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let S=0,d=l.length;S<d;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new Zt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new it,kn=new Wa,Ar=new hr,fl=new L,xi=new L,Si=new L,Mi=new L,Ys=new L,wr=new L,Rr=new oe,Cr=new oe,Lr=new oe,dl=new L,pl=new L,ml=new L,Pr=new L,Dr=new L;class sn extends yt{constructor(e=new on,t=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ys.fromBufferAttribute(h,e),o?wr.addScaledVector(Ys,u):wr.addScaledVector(Ys.sub(t),u))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(Ar.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Ar,fl)===null||kn.origin.distanceToSquared(fl)>_s(e.far-e.near,2)))&&(hl.copy(s).invert(),kn.copy(e.ray).applyMatrix4(hl),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const d=f[g],p=o[d.materialIndex],b=Math.max(d.start,m.start),_=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let A=b,I=_;A<I;A+=3){const D=a.getX(A),C=a.getX(A+1),X=a.getX(A+2);r=Ir(this,p,e,n,c,u,h,D,C,X),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let d=g,p=S;d<p;d+=3){const b=a.getX(d),_=a.getX(d+1),A=a.getX(d+2);r=Ir(this,o,e,n,c,u,h,b,_,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const d=f[g],p=o[d.materialIndex],b=Math.max(d.start,m.start),_=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let A=b,I=_;A<I;A+=3){const D=A,C=A+1,X=A+2;r=Ir(this,p,e,n,c,u,h,D,C,X),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let d=g,p=S;d<p;d+=3){const b=d,_=d+1,A=d+2;r=Ir(this,o,e,n,c,u,h,b,_,A),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Up(i,e,t,n,r,s,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Fn,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Ir(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,xi),i.getVertexPosition(l,Si),i.getVertexPosition(c,Mi);const u=Up(i,e,t,n,xi,Si,Mi,Pr);if(u){r&&(Rr.fromBufferAttribute(r,a),Cr.fromBufferAttribute(r,l),Lr.fromBufferAttribute(r,c),u.uv=nn.getInterpolation(Pr,xi,Si,Mi,Rr,Cr,Lr,new oe)),s&&(Rr.fromBufferAttribute(s,a),Cr.fromBufferAttribute(s,l),Lr.fromBufferAttribute(s,c),u.uv1=nn.getInterpolation(Pr,xi,Si,Mi,Rr,Cr,Lr,new oe),u.uv2=u.uv1),o&&(dl.fromBufferAttribute(o,a),pl.fromBufferAttribute(o,l),ml.fromBufferAttribute(o,c),u.normal=nn.getInterpolation(Pr,xi,Si,Mi,dl,pl,ml,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};nn.getNormal(xi,Si,Mi,h.normal),u.face=h}return u}class fr extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function g(S,d,p,b,_,A,I,D,C,X,le){const x=A/C,E=I/X,K=A/2,ee=I/2,P=D/2,H=C+1,B=X+1;let $=0,F=0;const O=new L;for(let W=0;W<B;W++){const Y=W*E-ee;for(let ue=0;ue<H;ue++){const Ee=ue*x-K;O[S]=Ee*b,O[d]=Y*_,O[p]=P,c.push(O.x,O.y,O.z),O[S]=0,O[d]=0,O[p]=D>0?1:-1,u.push(O.x,O.y,O.z),h.push(ue/C),h.push(1-W/X),$+=1}}for(let W=0;W<X;W++)for(let Y=0;Y<C;Y++){const ue=f+Y+H*W,Ee=f+Y+H*(W+1),V=f+(Y+1)+H*(W+1),Z=f+(Y+1)+H*W;l.push(ue,Ee,Z),l.push(Ee,V,Z),F+=6}a.addGroup(m,F,le),m+=F,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Ni(i[t]);for(const r in n)e[r]=n[r]}return e}function Np(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}const Ya={clone:Ni,merge:Rt};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ru extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new L,gl=new oe,_l=new oe;class qt extends ru{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,gl,_l),t.subVectors(_l,gl)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Ei=1;class Bp extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(yi,Ei,e,t);r.layers=this.layers,this.add(r);const s=new qt(yi,Ei,e,t);s.layers=this.layers,this.add(s);const o=new qt(yi,Ei,e,t);o.layers=this.layers,this.add(o);const a=new qt(yi,Ei,e,t);a.layers=this.layers,this.add(a);const l=new qt(yi,Ei,e,t);l.layers=this.layers,this.add(l);const c=new qt(yi,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class su extends Lt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zp extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?Mt:Ht),this.texture=new su(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Un});s.uniforms.tEquirect.value=t;const o=new sn(r,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Pt),new Bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const qs=new L,Gp=new L,Hp=new We;class Ln{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qs.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hp.getNormalMatrix(e),r=this.coplanarPoint(qs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new hr,Ur=new L;class qa{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],S=r[10],d=r[11],p=r[12],b=r[13],_=r[14],A=r[15];if(n[0].setComponents(l-s,f-c,d-m,A-p).normalize(),n[1].setComponents(l+s,f+c,d+m,A+p).normalize(),n[2].setComponents(l+o,f+u,d+g,A+b).normalize(),n[3].setComponents(l-o,f-u,d-g,A-b).normalize(),n[4].setComponents(l-a,f-h,d-S,A-_).normalize(),t===xn)n[5].setComponents(l+a,f+h,d+S,A+_).normalize();else if(t===es)n[5].setComponents(a,h,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vp(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),c.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let S=0,d=g.length;S<d;S++){const p=g[S];t?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class us extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],S=[],d=[];for(let p=0;p<u;p++){const b=p*f-o;for(let _=0;_<c;_++){const A=_*h-s;g.push(A,-b,0),S.push(0,0,1),d.push(_/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const _=b+c*p,A=b+c*(p+1),I=b+1+c*(p+1),D=b+1+c*p;m.push(_,A,D),m.push(A,I,D)}this.setIndex(m),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(S,3)),this.setAttribute("uv",new kt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`
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
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
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
#endif`,Vm=`struct PhysicalMaterial {
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
}`,km=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wg=`float getShadowMask() {
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,s_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,c_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,h_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,d_=`#define STANDARD
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
}`,p_=`#define TOON
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
}`,m_=`#define TOON
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
}`,g_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,x_=`uniform vec3 color;
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
}`,S_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:kp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:Yp,alphatest_fragment:qp,alphatest_pars_fragment:jp,aomap_fragment:Kp,aomap_pars_fragment:$p,batching_pars_vertex:Zp,batching_vertex:Jp,begin_vertex:Qp,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:rm,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:um,color_vertex:hm,common:fm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:vm,colorspace_fragment:xm,colorspace_pars_fragment:Sm,envmap_fragment:Mm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Om,envmap_vertex:bm,fog_vertex:Am,fog_pars_vertex:wm,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Lm,lightmap_fragment:Pm,lightmap_pars_fragment:Dm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Bm,lights_phong_fragment:zm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Vm,lights_fragment_begin:km,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Km,map_fragment:$m,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:rg,morphtarget_vertex:sg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:ug,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:_g,premultiplied_alpha_fragment:vg,project_vertex:xg,dithering_fragment:Sg,dithering_pars_fragment:Mg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:bg,shadowmap_vertex:Ag,shadowmask_pars_fragment:wg,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Lg,skinnormal_vertex:Pg,specularmap_fragment:Dg,specularmap_pars_fragment:Ig,tonemapping_fragment:Ug,tonemapping_pars_fragment:Ng,transmission_fragment:Og,transmission_pars_fragment:Fg,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:Gg,worldpos_vertex:Hg,background_vert:Vg,background_frag:kg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:Yg,cube_frag:qg,depth_vert:jg,depth_frag:Kg,distanceRGBA_vert:$g,distanceRGBA_frag:Zg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:r_,meshlambert_frag:s_,meshmatcap_vert:a_,meshmatcap_frag:o_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:u_,meshphong_frag:h_,meshphysical_vert:f_,meshphysical_frag:d_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:v_,shadow_frag:x_,sprite_vert:S_,sprite_frag:M_},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Dt={basic:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Rt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Rt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Rt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Rt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Rt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Rt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Rt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Rt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Rt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Rt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Rt([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Dt.physical={uniforms:Rt([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Nr={r:0,b:0,g:0};function y_(i,e,t,n,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(d,p){let b=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?S(a,l):_&&_.isColor&&(S(_,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===os)?(u===void 0&&(u=new sn(new fr(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ni(Dt.backgroundCube.uniforms),vertexShader:Dt.backgroundCube.vertexShader,fragmentShader:Dt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(_.colorSpace)!==Qe,(h!==_||f!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new sn(new us(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ni(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function S(d,p){d.getRGB(Nr,iu(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,S(a,l)},render:g}}function E_(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(P,H,B,$,F){let O=!1;if(o){const W=S($,B,H);c!==W&&(c=W,m(c.object)),O=p(P,$,B,F),O&&b(P,$,B,F)}else{const W=H.wireframe===!0;(c.geometry!==$.id||c.program!==B.id||c.wireframe!==W)&&(c.geometry=$.id,c.program=B.id,c.wireframe=W,O=!0)}F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,X(P,H,B,$),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function S(P,H,B){const $=B.wireframe===!0;let F=a[P.id];F===void 0&&(F={},a[P.id]=F);let O=F[H.id];O===void 0&&(O={},F[H.id]=O);let W=O[$];return W===void 0&&(W=d(f()),O[$]=W),W}function d(P){const H=[],B=[],$=[];for(let F=0;F<r;F++)H[F]=0,B[F]=0,$[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:$,object:P,attributes:{},index:null}}function p(P,H,B,$){const F=c.attributes,O=H.attributes;let W=0;const Y=B.getAttributes();for(const ue in Y)if(Y[ue].location>=0){const V=F[ue];let Z=O[ue];if(Z===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;W++}return c.attributesNum!==W||c.index!==$}function b(P,H,B,$){const F={},O=H.attributes;let W=0;const Y=B.getAttributes();for(const ue in Y)if(Y[ue].location>=0){let V=O[ue];V===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));const Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),F[ue]=Z,W++}c.attributes=F,c.attributesNum=W,c.index=$}function _(){const P=c.newAttributes;for(let H=0,B=P.length;H<B;H++)P[H]=0}function A(P){I(P,0)}function I(P,H){const B=c.newAttributes,$=c.enabledAttributes,F=c.attributeDivisors;B[P]=1,$[P]===0&&(i.enableVertexAttribArray(P),$[P]=1),F[P]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),F[P]=H)}function D(){const P=c.newAttributes,H=c.enabledAttributes;for(let B=0,$=H.length;B<$;B++)H[B]!==P[B]&&(i.disableVertexAttribArray(B),H[B]=0)}function C(P,H,B,$,F,O,W){W===!0?i.vertexAttribIPointer(P,H,B,F,O):i.vertexAttribPointer(P,H,B,$,F,O)}function X(P,H,B,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const F=$.attributes,O=B.getAttributes(),W=H.defaultAttributeValues;for(const Y in O){const ue=O[Y];if(ue.location>=0){let Ee=F[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),Ee!==void 0){const V=Ee.normalized,Z=Ee.itemSize,de=t.get(Ee);if(de===void 0)continue;const pe=de.buffer,Me=de.type,_e=de.bytesPerElement,Pe=n.isWebGL2===!0&&(Me===i.INT||Me===i.UNSIGNED_INT||Ee.gpuType===zc);if(Ee.isInterleavedBufferAttribute){const we=Ee.data,R=we.stride,ce=Ee.offset;if(we.isInstancedInterleavedBuffer){for(let q=0;q<ue.locationSize;q++)I(ue.location+q,we.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let q=0;q<ue.locationSize;q++)A(ue.location+q);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let q=0;q<ue.locationSize;q++)C(ue.location+q,Z/ue.locationSize,Me,V,R*_e,(ce+Z/ue.locationSize*q)*_e,Pe)}else{if(Ee.isInstancedBufferAttribute){for(let we=0;we<ue.locationSize;we++)I(ue.location+we,Ee.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let we=0;we<ue.locationSize;we++)A(ue.location+we);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let we=0;we<ue.locationSize;we++)C(ue.location+we,Z/ue.locationSize,Me,V,Z*_e,Z/ue.locationSize*we*_e,Pe)}}else if(W!==void 0){const V=W[Y];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(ue.location,V);break;case 3:i.vertexAttrib3fv(ue.location,V);break;case 4:i.vertexAttrib4fv(ue.location,V);break;default:i.vertexAttrib1fv(ue.location,V)}}}}D()}function le(){K();for(const P in a){const H=a[P];for(const B in H){const $=H[B];for(const F in $)g($[F].object),delete $[F];delete H[B]}delete a[P]}}function x(P){if(a[P.id]===void 0)return;const H=a[P.id];for(const B in H){const $=H[B];for(const F in $)g($[F].object),delete $[F];delete H[B]}delete a[P.id]}function E(P){for(const H in a){const B=a[H];if(B[P.id]===void 0)continue;const $=B[P.id];for(const F in $)g($[F].object),delete $[F];delete B[P.id]}}function K(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:ee,dispose:le,releaseStatesOfGeometry:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:A,disableUnusedAttributes:D}}function T_(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let S=0;S<f;S++)g+=h[S];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function b_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,A=o||e.has("OES_texture_float"),I=_&&A,D=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:D}}function A_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ln,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,S=h.clipIntersection,d=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const b=s?0:n,_=b*4;let A=p.clippingState||null;l.value=A,A=u(g,f,_,m);for(let I=0;I!==_;++I)A[I]=t[I];p.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const S=h!==null?h.length:0;let d=null;if(S!==0){if(d=l.value,g!==!0||d===null){const p=m+S*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let _=0,A=m;_!==S;++_,A+=4)o.copy(h[_]).applyMatrix4(b,a),o.normal.toArray(d,A),d[A+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,d}}function w_(i){let e=new WeakMap;function t(o,a){return a===_a?o.mapping=Di:a===va&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_a||a===va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ou extends ru{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,vl=[.125,.215,.35,.446,.526,.582],qn=20,js=new ou,xl=new qe;let Ks=null,$s=0,Zs=0;const Xn=(1+Math.sqrt(5))/2,Ti=1/Xn,Sl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Xn,Ti),new L(0,Xn,-Ti),new L(Ti,0,Xn),new L(-Ti,0,Xn),new L(Xn,Ti,0),new L(-Xn,Ti,0)];class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ks=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,$s,Zs),e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:nr,format:Kt,colorSpace:Sn,depthBuffer:!1},r=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(s)),this._blurMaterial=C_(s,e,t)}return r}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,r){const a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xl),u.toneMapping=Nn,u.autoClear=!1;const m=new eu({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new sn(new fr,m);let S=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,S=!0):(m.color.copy(xl),S=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Or(r,b*_,p>2?_:0,_,_),u.setRenderTarget(r),S&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Di||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sl[(r-1)%Sl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qn-1),S=s/g,d=isFinite(s)?1+Math.floor(u*S):qn;d>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${qn}`);const p=[];let b=0;for(let C=0;C<qn;++C){const X=C/S,le=Math.exp(-X*X/2);p.push(le),C===0?b+=le:C<d&&(b+=2*le)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const A=this._sizeLods[r],I=3*A*(r>_-Ai?r-_+Ai:0),D=4*(this._cubeSize-A);Or(t,I,D,3*A,2*A),l.setRenderTarget(t),l.render(h,js)}}function R_(i){const e=[],t=[],n=[];let r=i;const s=i-Ai+1+vl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ai?l=vl[o-i+Ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,S=3,d=2,p=1,b=new Float32Array(S*g*m),_=new Float32Array(d*g*m),A=new Float32Array(p*g*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,X=D>2?0:-1,le=[C,X,0,C+2/3,X,0,C+2/3,X+1,0,C,X,0,C+2/3,X+1,0,C,X+1,0];b.set(le,S*g*D),_.set(f,d*g*D);const x=[D,D,D,D,D,D];A.set(x,p*g*D)}const I=new on;I.setAttribute("position",new Zt(b,S)),I.setAttribute("uv",new Zt(_,d)),I.setAttribute("faceIndex",new Zt(A,p)),e.push(I),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yl(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function C_(i,e,t){const n=new Float32Array(qn),r=new L(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function El(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Tl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function L_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===_a||l===va,u=l===Di||l===Ii;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ml(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ml(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function P_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function D_(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const S=f.morphAttributes[g];for(let d=0,p=S.length;d<p;d++)e.remove(S[d])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const S=m[g];for(let d=0,p=S.length;d<p;d++)e.update(S[d],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let S=0;if(m!==null){const b=m.array;S=m.version;for(let _=0,A=b.length;_<A;_+=3){const I=b[_+0],D=b[_+1],C=b[_+2];f.push(I,D,D,C,C,I)}}else if(g!==void 0){const b=g.array;S=g.version;for(let _=0,A=b.length/3-1;_<A;_+=3){const I=_+0,D=_+1,C=_+2;f.push(I,D,D,C,C,I)}}else return;const d=new(Kc(f)?nu:tu)(f,1);d.version=S;const p=s.get(h);p&&e.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function I_(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(s,g,a,m*l),t.update(g,s,1)}function h(m,g,S){if(S===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,g,a,m*l,S),t.update(g,s,S)}function f(m,g,S){if(S===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<S;p++)this.render(m[p]/l,g[p]);else{d.multiDrawElementsWEBGL(s,g,0,a,m,0,S);let p=0;for(let b=0;b<S;b++)p+=g[b];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function U_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function N_(i,e){return i[0]-e[0]}function O_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function F_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let S=s.get(u);if(S===void 0||S.count!==g){let P=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",P)};S!==void 0&&S.texture.dispose();const b=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let X=0;b===!0&&(X=1),_===!0&&(X=2),A===!0&&(X=3);let le=u.attributes.position.count*X,x=1;le>e.maxTextureSize&&(x=Math.ceil(le/e.maxTextureSize),le=e.maxTextureSize);const E=new Float32Array(le*x*4*g),K=new Jc(E,le,x,g);K.type=vn,K.needsUpdate=!0;const ee=X*4;for(let H=0;H<g;H++){const B=I[H],$=D[H],F=C[H],O=le*x*4*H;for(let W=0;W<B.count;W++){const Y=W*ee;b===!0&&(o.fromBufferAttribute(B,W),E[O+Y+0]=o.x,E[O+Y+1]=o.y,E[O+Y+2]=o.z,E[O+Y+3]=0),_===!0&&(o.fromBufferAttribute($,W),E[O+Y+4]=o.x,E[O+Y+5]=o.y,E[O+Y+6]=o.z,E[O+Y+7]=0),A===!0&&(o.fromBufferAttribute(F,W),E[O+Y+8]=o.x,E[O+Y+9]=o.y,E[O+Y+10]=o.z,E[O+Y+11]=F.itemSize===4?o.w:1)}}S={count:g,texture:K,size:new oe(le,x)},s.set(u,S),u.addEventListener("dispose",P)}let d=0;for(let b=0;b<f.length;b++)d+=f[b];const p=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{const m=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<m;_++){const A=g[_];A[0]=_,A[1]=f[_]}g.sort(O_);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(N_);const S=u.morphAttributes.position,d=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const A=a[_],I=A[0],D=A[1];I!==Number.MAX_SAFE_INTEGER&&D?(S&&u.getAttribute("morphTarget"+_)!==S[I]&&u.setAttribute("morphTarget"+_,S[I]),d&&u.getAttribute("morphNormal"+_)!==d[I]&&u.setAttribute("morphNormal"+_,d[I]),r[_]=D,p+=D):(S&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),d&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const b=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function B_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class lu extends Lt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=Pn),n===void 0&&u===Ui&&(n=$n),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cu=new Lt,uu=new lu(1,1);uu.compareFunction=qc;const hu=new Jc,fu=new Ep,du=new su,bl=[],Al=[],wl=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bl[r];if(s===void 0&&(s=new Float32Array(r),bl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hs(i,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function k_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Cl.set(n),i.uniformMatrix2fv(this.addr,!1,Cl),pt(t,n)}}function W_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Rl.set(n),i.uniformMatrix3fv(this.addr,!1,Rl),pt(t,n)}}function X_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),pt(t,n)}}function Y_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function ev(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?uu:cu;t.setTexture2D(e||s,r)}function tv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fu,r)}function nv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||du,r)}function iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hu,r)}function rv(i){switch(i){case 5126:return z_;case 35664:return G_;case 35665:return H_;case 35666:return V_;case 35674:return k_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return q_;case 35668:case 35672:return j_;case 35669:case 35673:return K_;case 5125:return $_;case 36294:return Z_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function sv(i,e){i.uniform1fv(this.addr,e)}function av(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function ov(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function lv(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function cv(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uv(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hv(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fv(i,e){i.uniform1iv(this.addr,e)}function dv(i,e){i.uniform2iv(this.addr,e)}function pv(i,e){i.uniform3iv(this.addr,e)}function mv(i,e){i.uniform4iv(this.addr,e)}function gv(i,e){i.uniform1uiv(this.addr,e)}function _v(i,e){i.uniform2uiv(this.addr,e)}function vv(i,e){i.uniform3uiv(this.addr,e)}function xv(i,e){i.uniform4uiv(this.addr,e)}function Sv(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cu,s[o])}function Mv(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fu,s[o])}function yv(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||du,s[o])}function Ev(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hu,s[o])}function Tv(i){switch(i){case 5126:return sv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return fv;case 35667:case 35671:return dv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return _v;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Ev}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rv(t.type)}}class Av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tv(t.type)}}class wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function Rv(i,e,t){const n=i.name,r=n.length;for(Js.lastIndex=0;;){const s=Js.exec(n),o=Js.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ll(t,c===void 0?new bv(a,i,e):new Av(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new wv(a),Ll(t,h)),t=h}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rv(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cv=37297;let Lv=0;function Pv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Dv(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Qr&&t===Jr?n="LinearDisplayP3ToLinearSRGB":e===Jr&&t===Qr&&(n="LinearSRGBToLinearDisplayP3"),i){case Sn:case ls:return[n,"LinearTransferOETF"];case Mt:case Va:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Pv(i.getShaderSource(e),o)}else return r}function Iv(i,e){const t=Dv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Uv(i,e){let t;switch(e){case Ud:t="Linear";break;case Nd:t="Reinhard";break;case Od:t="OptimizedCineon";break;case Fd:t="ACESFilmic";break;case zd:t="AgX";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Fv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wi(i){return i!==""}function Il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(zv,Hv)}const Gv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hv(i,e){let t=Ge[e];if(t===void 0){const n=Gv.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(Vv,kv)}function kv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ol(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ii:e="ENVMAP_TYPE_CUBE";break;case os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case as:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function jv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wv(t),c=Xv(t),u=Yv(t),h=qv(t),f=jv(t),m=t.isWebGL2?"":Nv(t),g=Ov(t),S=Fv(s),d=r.createProgram();let p,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(wi).join(`
`),p.length>0&&(p+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(wi).join(`
`),b.length>0&&(b+=`
`)):(p=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),b=[m,Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=Ta(o),o=Il(o,t),o=Ul(o,t),a=Ta(a),a=Il(a,t),a=Ul(a,t),o=Nl(o),a=Nl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=_+p+o,I=_+b+a,D=Pl(r,r.VERTEX_SHADER,A),C=Pl(r,r.FRAGMENT_SHADER,I);r.attachShader(d,D),r.attachShader(d,C),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function X(K){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(d).trim(),P=r.getShaderInfoLog(D).trim(),H=r.getShaderInfoLog(C).trim();let B=!0,$=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,D,C);else{const F=Dl(r,D,"vertex"),O=Dl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+ee+`
`+F+`
`+O)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(P===""||H==="")&&($=!1);$&&(K.diagnostics={runnable:B,programLog:ee,vertexShader:{log:P,prefix:p},fragmentShader:{log:H,prefix:b}})}r.deleteShader(D),r.deleteShader(C),le=new qr(r,d),x=Bv(r,d)}let le;this.getUniforms=function(){return le===void 0&&X(this),le};let x;this.getAttributes=function(){return x===void 0&&X(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(d,Cv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=D,this.fragmentShader=C,this}let $v=0;class Zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jv(e),t.set(e,n)),n}}class Jv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function Qv(i,e,t,n,r,s,o){const a=new Xa,l=new Zv,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,K,ee,P){const H=ee.fog,B=P.geometry,$=x.isMeshStandardMaterial?ee.environment:null,F=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),O=F&&F.mapping===os?F.image.height:null,W=S[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=Y!==void 0?Y.length:0;let Ee=0;B.morphAttributes.position!==void 0&&(Ee=1),B.morphAttributes.normal!==void 0&&(Ee=2),B.morphAttributes.color!==void 0&&(Ee=3);let V,Z,de,pe;if(W){const Xe=Dt[W];V=Xe.vertexShader,Z=Xe.fragmentShader}else V=x.vertexShader,Z=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const Me=i.getRenderTarget(),_e=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,we=!!x.map,R=!!x.matcap,ce=!!F,q=!!x.aoMap,se=!!x.lightMap,j=!!x.bumpMap,be=!!x.normalMap,ge=!!x.displacementMap,M=!!x.emissiveMap,v=!!x.metalnessMap,U=!!x.roughnessMap,ne=x.anisotropy>0,Q=x.clearcoat>0,J=x.iridescence>0,ye=x.sheen>0,fe=x.transmission>0,xe=ne&&!!x.anisotropyMap,Le=Q&&!!x.clearcoatMap,Oe=Q&&!!x.clearcoatNormalMap,te=Q&&!!x.clearcoatRoughnessMap,Ye=J&&!!x.iridescenceMap,He=J&&!!x.iridescenceThicknessMap,Ue=ye&&!!x.sheenColorMap,Re=ye&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Be=!!x.specularColorMap,w=!!x.specularIntensityMap,ae=fe&&!!x.transmissionMap,me=fe&&!!x.thicknessMap,Ce=!!x.gradientMap,T=!!x.alphaMap,re=x.alphaTest>0,ie=!!x.alphaHash,Te=!!x.extensions;let De=Nn;x.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(De=i.toneMapping);const je={isWebGL2:h,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Z,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Pe,instancing:_e,instancingColor:_e&&P.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Sn,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:R,envMap:ce,envMapMode:ce&&F.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:se,bumpMap:j,normalMap:be,displacementMap:m&&ge,emissiveMap:M,normalMapObjectSpace:be&&x.normalMapType===$d,normalMapTangentSpace:be&&x.normalMapType===Ha,metalnessMap:v,roughnessMap:U,anisotropy:ne,anisotropyMap:xe,clearcoat:Q,clearcoatMap:Le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:te,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:He,sheen:ye,sheenColorMap:Ue,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:Be,specularIntensityMap:w,transmission:fe,transmissionMap:ae,thicknessMap:me,gradientMap:Ce,opaque:x.transparent===!1&&x.blending===Ci&&x.alphaToCoverage===!1,alphaMap:T,alphaTest:re,alphaHash:ie,combine:x.combine,mapUv:we&&d(x.map.channel),aoMapUv:q&&d(x.aoMap.channel),lightMapUv:se&&d(x.lightMap.channel),bumpMapUv:j&&d(x.bumpMap.channel),normalMapUv:be&&d(x.normalMap.channel),displacementMapUv:ge&&d(x.displacementMap.channel),emissiveMapUv:M&&d(x.emissiveMap.channel),metalnessMapUv:v&&d(x.metalnessMap.channel),roughnessMapUv:U&&d(x.roughnessMap.channel),anisotropyMapUv:xe&&d(x.anisotropyMap.channel),clearcoatMapUv:Le&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:He&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&d(x.sheenRoughnessMap.channel),specularMapUv:ve&&d(x.specularMap.channel),specularColorMapUv:Be&&d(x.specularColorMap.channel),specularIntensityMapUv:w&&d(x.specularIntensityMap.channel),transmissionMapUv:ae&&d(x.transmissionMap.channel),thicknessMapUv:me&&d(x.thicknessMap.channel),alphaMapUv:T&&d(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||ne),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(we||T),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Te&&x.extensions.derivatives===!0,extensionFragDepth:Te&&x.extensions.fragDepth===!0,extensionDrawBuffers:Te&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Te&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function b(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)E.push(K),E.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(_(E,x),A(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function A(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function I(x){const E=S[x.type];let K;if(E){const ee=Dt[E];K=Ya.clone(ee.uniforms)}else K=x.uniforms;return K}function D(x,E){let K;for(let ee=0,P=u.length;ee<P;ee++){const H=u[ee];if(H.cacheKey===E){K=H,++K.usedTimes;break}}return K===void 0&&(K=new Kv(i,E,x,s),u.push(K)),K}function C(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function X(x){l.remove(x)}function le(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:I,acquireProgram:D,releaseProgram:C,releaseShaderCache:X,programs:u,dispose:le}}function ex(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,g,S,d){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:S,group:d},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=S,p.group=d),e++,p}function a(h,f,m,g,S,d){const p=o(h,f,m,g,S,d);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,f,m,g,S,d){const p=o(h,f,m,g,S,d);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||tx),n.length>1&&n.sort(f||Fl),r.length>1&&r.sort(f||Fl)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function nx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Bl,i.set(n,[o])):r>=s.length?(o=new Bl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sx=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i,e){const t=new ix,n=rx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new it,a=new it;function l(u,h){let f=0,m=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let S=0,d=0,p=0,b=0,_=0,A=0,I=0,D=0,C=0,X=0,le=0;u.sort(ax);const x=h===!0?Math.PI:1;for(let K=0,ee=u.length;K<ee;K++){const P=u[K],H=P.color,B=P.intensity,$=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=H.r*B*x,m+=H.g*B*x,g+=H.b*B*x;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],B);le++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=F,r.directionalShadowMatrix[S]=P.shadow.matrix,A++}r.directional[S]=O,S++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(H).multiplyScalar(B*x),O.distance=$,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[p]=O;const W=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,W.updateMatrices(P),P.castShadow&&X++),r.spotLightMatrix[p]=W.matrix,P.castShadow){const Y=n.get(P);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[p]=Y,r.spotShadowMap[p]=F,D++}p++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(H).multiplyScalar(B),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[b]=O,b++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity*x),O.distance=P.distance,O.decay=P.decay,P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[d]=Y,r.pointShadowMap[d]=F,r.pointShadowMatrix[d]=P.shadow.matrix,I++}r.point[d]=O,d++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(B*x),O.groundColor.copy(P.groundColor).multiplyScalar(B*x),r.hemi[_]=O,_++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==S||E.pointLength!==d||E.spotLength!==p||E.rectAreaLength!==b||E.hemiLength!==_||E.numDirectionalShadows!==A||E.numPointShadows!==I||E.numSpotShadows!==D||E.numSpotMaps!==C||E.numLightProbes!==le)&&(r.directional.length=S,r.spot.length=p,r.rectArea.length=b,r.point.length=d,r.hemi.length=_,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=D+C-X,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=le,E.directionalLength=S,E.pointLength=d,E.spotLength=p,E.rectAreaLength=b,E.hemiLength=_,E.numDirectionalShadows=A,E.numPointShadows=I,E.numSpotShadows=D,E.numSpotMaps=C,E.numLightProbes=le,r.version=sx++)}function c(u,h){let f=0,m=0,g=0,S=0,d=0;const p=h.matrixWorldInverse;for(let b=0,_=u.length;b<_;b++){const A=u[b];if(A.isDirectionalLight){const I=r.directional[f];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),f++}else if(A.isSpotLight){const I=r.spot[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(p),g++}else if(A.isRectAreaLight){const I=r.rectArea[S];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(A.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),S++}else if(A.isPointLight){const I=r.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const I=r.hemi[d];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:r}}function zl(i,e){const t=new ox(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lx(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new zl(i,e),t.set(s,[l])):o>=a.length?(l=new zl(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class cx extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ux extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function dx(i,e,t){let n=new qa;const r=new oe,s=new oe,o=new ot,a=new cx({depthPacking:Kd}),l=new ux,c={},u=t.maxTextureSize,h={[Fn]:It,[It]:Fn,[_n]:_n},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:hx,fragmentShader:fx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new sn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let p=this.type;this.render=function(D,C,X){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||D.length===0)return;const le=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Un),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=p!==mn&&this.type===mn,P=p===mn&&this.type!==mn;for(let H=0,B=D.length;H<B;H++){const $=D[H],F=$.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const O=F.getFrameExtents();if(r.multiply(O),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,F.mapSize.y=s.y)),F.map===null||ee===!0||P===!0){const Y=this.type!==mn?{minFilter:Ct,magFilter:Ct}:{};F.map!==null&&F.map.dispose(),F.map=new ti(r.x,r.y,Y),F.map.texture.name=$.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const W=F.getViewportCount();for(let Y=0;Y<W;Y++){const ue=F.getViewport(Y);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),K.viewport(o),F.updateMatrices($,Y),n=F.getFrustum(),A(C,X,F.camera,$,this.type)}F.isPointLightShadow!==!0&&this.type===mn&&b(F,X),F.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(le,x,E)};function b(D,C){const X=e.update(S);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(C,null,X,f,S,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(C,null,X,m,S,null)}function _(D,C,X,le){let x=null;const E=X.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(E!==void 0)x=E;else if(x=X.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const K=x.uuid,ee=C.uuid;let P=c[K];P===void 0&&(P={},c[K]=P);let H=P[ee];H===void 0&&(H=x.clone(),P[ee]=H,C.addEventListener("dispose",I)),x=H}if(x.visible=C.visible,x.wireframe=C.wireframe,le===mn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,X.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const K=i.properties.get(x);K.light=X}return x}function A(D,C,X,le,x){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===mn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld);const ee=e.update(D),P=D.material;if(Array.isArray(P)){const H=ee.groups;for(let B=0,$=H.length;B<$;B++){const F=H[B],O=P[F.materialIndex];if(O&&O.visible){const W=_(D,O,le,x);D.onBeforeShadow(i,D,C,X,ee,W,F),i.renderBufferDirect(X,null,ee,W,D,F),D.onAfterShadow(i,D,C,X,ee,W,F)}}}else if(P.visible){const H=_(D,P,le,x);D.onBeforeShadow(i,D,C,X,ee,H,null),i.renderBufferDirect(X,null,ee,H,D,null),D.onAfterShadow(i,D,C,X,ee,H,null)}}const K=D.children;for(let ee=0,P=K.length;ee<P;ee++)A(K[ee],C,X,le,x)}function I(D){D.target.removeEventListener("dispose",I);for(const X in c){const le=c[X],x=D.target.uuid;x in le&&(le[x].dispose(),delete le[x])}}}function px(i,e,t){const n=t.isWebGL2;function r(){let T=!1;const re=new ot;let ie=null;const Te=new ot(0,0,0,0);return{setMask:function(De){ie!==De&&!T&&(i.colorMask(De,De,De,De),ie=De)},setLocked:function(De){T=De},setClear:function(De,je,Xe,Je,_t){_t===!0&&(De*=Je,je*=Je,Xe*=Je),re.set(De,je,Xe,Je),Te.equals(re)===!1&&(i.clearColor(De,je,Xe,Je),Te.copy(re))},reset:function(){T=!1,ie=null,Te.set(-1,0,0,0)}}}function s(){let T=!1,re=null,ie=null,Te=null;return{setTest:function(De){De?_e(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(De){re!==De&&!T&&(i.depthMask(De),re=De)},setFunc:function(De){if(ie!==De){switch(De){case bd:i.depthFunc(i.NEVER);break;case Ad:i.depthFunc(i.ALWAYS);break;case wd:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case Rd:i.depthFunc(i.EQUAL);break;case Cd:i.depthFunc(i.GEQUAL);break;case Ld:i.depthFunc(i.GREATER);break;case Pd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=De}},setLocked:function(De){T=De},setClear:function(De){Te!==De&&(i.clearDepth(De),Te=De)},reset:function(){T=!1,re=null,ie=null,Te=null}}}function o(){let T=!1,re=null,ie=null,Te=null,De=null,je=null,Xe=null,Je=null,_t=null;return{setTest:function(Ke){T||(Ke?_e(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Ke){re!==Ke&&!T&&(i.stencilMask(Ke),re=Ke)},setFunc:function(Ke,lt,At){(ie!==Ke||Te!==lt||De!==At)&&(i.stencilFunc(Ke,lt,At),ie=Ke,Te=lt,De=At)},setOp:function(Ke,lt,At){(je!==Ke||Xe!==lt||Je!==At)&&(i.stencilOp(Ke,lt,At),je=Ke,Xe=lt,Je=At)},setLocked:function(Ke){T=Ke},setClear:function(Ke){_t!==Ke&&(i.clearStencil(Ke),_t=Ke)},reset:function(){T=!1,re=null,ie=null,Te=null,De=null,je=null,Xe=null,Je=null,_t=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,S=[],d=null,p=!1,b=null,_=null,A=null,I=null,D=null,C=null,X=null,le=new qe(0,0,0),x=0,E=!1,K=null,ee=null,P=null,H=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,O=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=O>=2);let Y=null,ue={};const Ee=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),Z=new ot().fromArray(Ee),de=new ot().fromArray(V);function pe(T,re,ie,Te){const De=new Uint8Array(4),je=i.createTexture();i.bindTexture(T,je),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<ie;Xe++)n&&(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(re+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return je}const Me={};Me[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(i.DEPTH_TEST),l.setFunc($r),ge(!1),M(xo),_e(i.CULL_FACE),j(Un);function _e(T){f[T]!==!0&&(i.enable(T),f[T]=!0)}function Pe(T){f[T]!==!1&&(i.disable(T),f[T]=!1)}function we(T,re){return m[T]!==re?(i.bindFramebuffer(T,re),m[T]=re,n&&(T===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),T===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function R(T,re){let ie=S,Te=!1;if(T)if(ie=g.get(re),ie===void 0&&(ie=[],g.set(re,ie)),T.isWebGLMultipleRenderTargets){const De=T.texture;if(ie.length!==De.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Xe=De.length;je<Xe;je++)ie[je]=i.COLOR_ATTACHMENT0+je;ie.length=De.length,Te=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,Te=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ce(T){return d!==T?(i.useProgram(T),d=T,!0):!1}const q={[Yn]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};if(n)q[Eo]=i.MIN,q[To]=i.MAX;else{const T=e.get("EXT_blend_minmax");T!==null&&(q[Eo]=T.MIN_EXT,q[To]=T.MAX_EXT)}const se={[fd]:i.ZERO,[dd]:i.ONE,[pd]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function j(T,re,ie,Te,De,je,Xe,Je,_t,Ke){if(T===Un){p===!0&&(Pe(i.BLEND),p=!1);return}if(p===!1&&(_e(i.BLEND),p=!0),T!==cd){if(T!==b||Ke!==E){if((_!==Yn||D!==Yn)&&(i.blendEquation(i.FUNC_ADD),_=Yn,D=Yn),Ke)switch(T){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}A=null,I=null,C=null,X=null,le.set(0,0,0),x=0,b=T,E=Ke}return}De=De||re,je=je||ie,Xe=Xe||Te,(re!==_||De!==D)&&(i.blendEquationSeparate(q[re],q[De]),_=re,D=De),(ie!==A||Te!==I||je!==C||Xe!==X)&&(i.blendFuncSeparate(se[ie],se[Te],se[je],se[Xe]),A=ie,I=Te,C=je,X=Xe),(Je.equals(le)===!1||_t!==x)&&(i.blendColor(Je.r,Je.g,Je.b,_t),le.copy(Je),x=_t),b=T,E=!1}function be(T,re){T.side===_n?Pe(i.CULL_FACE):_e(i.CULL_FACE);let ie=T.side===It;re&&(ie=!ie),ge(ie),T.blending===Ci&&T.transparent===!1?j(Un):j(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const Te=T.stencilWrite;c.setTest(Te),Te&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),U(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(T){K!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),K=T)}function M(T){T!==ad?(_e(i.CULL_FACE),T!==ee&&(T===xo?i.cullFace(i.BACK):T===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),ee=T}function v(T){T!==P&&(F&&i.lineWidth(T),P=T)}function U(T,re,ie){T?(_e(i.POLYGON_OFFSET_FILL),(H!==re||B!==ie)&&(i.polygonOffset(re,ie),H=re,B=ie)):Pe(i.POLYGON_OFFSET_FILL)}function ne(T){T?_e(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Q(T){T===void 0&&(T=i.TEXTURE0+$-1),Y!==T&&(i.activeTexture(T),Y=T)}function J(T,re,ie){ie===void 0&&(Y===null?ie=i.TEXTURE0+$-1:ie=Y);let Te=ue[ie];Te===void 0&&(Te={type:void 0,texture:void 0},ue[ie]=Te),(Te.type!==T||Te.texture!==re)&&(Y!==ie&&(i.activeTexture(ie),Y=ie),i.bindTexture(T,re||Me[T]),Te.type=T,Te.texture=re)}function ye(){const T=ue[Y];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Be(T){Z.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Z.copy(T))}function w(T){de.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),de.copy(T))}function ae(T,re){let ie=h.get(re);ie===void 0&&(ie=new WeakMap,h.set(re,ie));let Te=ie.get(T);Te===void 0&&(Te=i.getUniformBlockIndex(re,T.name),ie.set(T,Te))}function me(T,re){const Te=h.get(re).get(T);u.get(re)!==Te&&(i.uniformBlockBinding(re,Te,T.__bindingPointIndex),u.set(re,Te))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Y=null,ue={},m={},g=new WeakMap,S=[],d=null,p=!1,b=null,_=null,A=null,I=null,D=null,C=null,X=null,le=new qe(0,0,0),x=0,E=!1,K=null,ee=null,P=null,H=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_e,disable:Pe,bindFramebuffer:we,drawBuffers:R,useProgram:ce,setBlending:j,setMaterial:be,setFlipSided:ge,setCullFace:M,setLineWidth:v,setPolygonOffset:U,setScissorTest:ne,activeTexture:Q,bindTexture:J,unbindTexture:ye,compressedTexImage2D:fe,compressedTexImage3D:xe,texImage2D:Re,texImage3D:ve,updateUBOMapping:ae,uniformBlockBinding:me,texStorage2D:He,texStorage3D:Ue,texSubImage2D:Le,texSubImage3D:Oe,compressedTexSubImage2D:te,compressedTexSubImage3D:Ye,scissor:Be,viewport:w,reset:Ce}}function mx(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function g(M,v){return m?new OffscreenCanvas(M,v):rr("canvas")}function S(M,v,U,ne){let Q=1;if((M.width>ne||M.height>ne)&&(Q=ne/Math.max(M.width,M.height)),Q<1||v===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const J=v?ts:Math.floor,ye=J(Q*M.width),fe=J(Q*M.height);h===void 0&&(h=g(ye,fe));const xe=U?g(ye,fe):h;return xe.width=ye,xe.height=fe,xe.getContext("2d").drawImage(M,0,0,ye,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ye+"x"+fe+")."),xe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function d(M){return Ea(M.width)&&Ea(M.height)}function p(M){return a?!1:M.wrapS!==jt||M.wrapT!==jt||M.minFilter!==Ct&&M.minFilter!==Pt}function b(M,v){return M.generateMipmaps&&v&&M.minFilter!==Ct&&M.minFilter!==Pt}function _(M){i.generateMipmap(M)}function A(M,v,U,ne,Q=!1){if(a===!1)return v;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=v;if(v===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),v===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RGBA){const ye=Q?Zr:Ze.getTransfer(ne);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=ye===Qe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function I(M,v,U){return b(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Ct&&M.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function D(M){return M===Ct||M===bo||M===Hi?i.NEAREST:i.LINEAR}function C(M){const v=M.target;v.removeEventListener("dispose",C),le(v),v.isVideoTexture&&u.delete(v)}function X(M){const v=M.target;v.removeEventListener("dispose",X),E(v)}function le(M){const v=n.get(M);if(v.__webglInit===void 0)return;const U=M.source,ne=f.get(U);if(ne){const Q=ne[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(M),Object.keys(ne).length===0&&f.delete(U)}n.remove(M)}function x(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const U=M.source,ne=f.get(U);delete ne[v.__cacheKey],o.memory.textures--}function E(M){const v=M.texture,U=n.get(M),ne=n.get(v);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let J=0;J<U.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(U.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)i.deleteFramebuffer(U.__webglFramebuffer[Q]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,J=v.length;Q<J;Q++){const ye=n.get(v[Q]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(M)}let K=0;function ee(){K=0}function P(){const M=K;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),K+=1,M}function H(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function B(M,v){const U=n.get(M);if(M.isVideoTexture&&be(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const ne=M.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,M,v);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function $(M,v){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Z(U,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function F(M,v){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Z(U,M,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function O(M,v){const U=n.get(M);if(M.version>0&&U.__version!==M.version){de(U,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const W={[xa]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},Y={[Ct]:i.NEAREST,[bo]:i.NEAREST_MIPMAP_NEAREST,[Hi]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[bs]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},ue={[Zd]:i.NEVER,[ip]:i.ALWAYS,[Jd]:i.LESS,[qc]:i.LEQUAL,[Qd]:i.EQUAL,[np]:i.GEQUAL,[ep]:i.GREATER,[tp]:i.NOTEQUAL};function Ee(M,v,U){if(v.type===vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===bs||v.magFilter===Hi||v.magFilter===Kn||v.minFilter===Pt||v.minFilter===bs||v.minFilter===Hi||v.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(i.texParameteri(M,i.TEXTURE_WRAP_S,W[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,W[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,W[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,Y[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,Y[v.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==jt||v.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,D(v.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,D(v.minFilter)),v.minFilter!==Ct&&v.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ct||v.minFilter!==Hi&&v.minFilter!==Kn||v.type===vn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(M,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function V(M,v){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",C));const ne=v.source;let Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));const J=H(v);if(J!==M.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[J].usedTimes++;const ye=Q[M.__cacheKey];ye!==void 0&&(Q[M.__cacheKey].usedTimes--,ye.usedTimes===0&&x(v)),M.__cacheKey=J,M.__webglTexture=Q[J].texture}return U}function Z(M,v,U){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const Q=V(M,v),J=v.source;t.bindTexture(ne,M.__webglTexture,i.TEXTURE0+U);const ye=n.get(J);if(J.version!==ye.__version||Q===!0){t.activeTexture(i.TEXTURE0+U);const fe=Ze.getPrimaries(Ze.workingColorSpace),xe=v.colorSpace===Ht?null:Ze.getPrimaries(v.colorSpace),Le=v.colorSpace===Ht||fe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Oe=p(v)&&d(v.image)===!1;let te=S(v.image,Oe,!1,r.maxTextureSize);te=ge(v,te);const Ye=d(te)||a,He=s.convert(v.format,v.colorSpace);let Ue=s.convert(v.type),Re=A(v.internalFormat,He,Ue,v.colorSpace,v.isVideoTexture);Ee(ne,v,Ye);let ve;const Be=v.mipmaps,w=a&&v.isVideoTexture!==!0&&Re!==Xc,ae=ye.__version===void 0||Q===!0,me=J.dataReady,Ce=I(v,te,Ye);if(v.isDepthTexture)Re=i.DEPTH_COMPONENT,a?v.type===vn?Re=i.DEPTH_COMPONENT32F:v.type===Pn?Re=i.DEPTH_COMPONENT24:v.type===$n?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:v.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Zn&&Re===i.DEPTH_COMPONENT&&v.type!==Ga&&v.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Pn,Ue=s.convert(v.type)),v.format===Ui&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,v.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=$n,Ue=s.convert(v.type))),ae&&(w?t.texStorage2D(i.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Re,te.width,te.height,0,He,Ue,null));else if(v.isDataTexture)if(Be.length>0&&Ye){w&&ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,Be[0].width,Be[0].height);for(let T=0,re=Be.length;T<re;T++)ve=Be[T],w?me&&t.texSubImage2D(i.TEXTURE_2D,T,0,0,ve.width,ve.height,He,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,T,Re,ve.width,ve.height,0,He,Ue,ve.data);v.generateMipmaps=!1}else w?(ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,te.width,te.height),me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,He,Ue,te.data)):t.texImage2D(i.TEXTURE_2D,0,Re,te.width,te.height,0,He,Ue,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){w&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Re,Be[0].width,Be[0].height,te.depth);for(let T=0,re=Be.length;T<re;T++)ve=Be[T],v.format!==Kt?He!==null?w?me&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ve.width,ve.height,te.depth,He,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,T,Re,ve.width,ve.height,te.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ve.width,ve.height,te.depth,He,Ue,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,T,Re,ve.width,ve.height,te.depth,0,He,Ue,ve.data)}else{w&&ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,Be[0].width,Be[0].height);for(let T=0,re=Be.length;T<re;T++)ve=Be[T],v.format!==Kt?He!==null?w?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,T,0,0,ve.width,ve.height,He,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,T,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?me&&t.texSubImage2D(i.TEXTURE_2D,T,0,0,ve.width,ve.height,He,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,T,Re,ve.width,ve.height,0,He,Ue,ve.data)}else if(v.isDataArrayTexture)w?(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Re,te.width,te.height,te.depth),me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,He,Ue,te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,He,Ue,te.data);else if(v.isData3DTexture)w?(ae&&t.texStorage3D(i.TEXTURE_3D,Ce,Re,te.width,te.height,te.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,He,Ue,te.data)):t.texImage3D(i.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,He,Ue,te.data);else if(v.isFramebufferTexture){if(ae)if(w)t.texStorage2D(i.TEXTURE_2D,Ce,Re,te.width,te.height);else{let T=te.width,re=te.height;for(let ie=0;ie<Ce;ie++)t.texImage2D(i.TEXTURE_2D,ie,Re,T,re,0,He,Ue,null),T>>=1,re>>=1}}else if(Be.length>0&&Ye){w&&ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,Be[0].width,Be[0].height);for(let T=0,re=Be.length;T<re;T++)ve=Be[T],w?me&&t.texSubImage2D(i.TEXTURE_2D,T,0,0,He,Ue,ve):t.texImage2D(i.TEXTURE_2D,T,Re,He,Ue,ve);v.generateMipmaps=!1}else w?(ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,te.width,te.height),me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Ue,te)):t.texImage2D(i.TEXTURE_2D,0,Re,He,Ue,te);b(v,Ye)&&_(ne),ye.__version=J.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function de(M,v,U){if(v.image.length!==6)return;const ne=V(M,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);const J=n.get(Q);if(Q.version!==J.__version||ne===!0){t.activeTexture(i.TEXTURE0+U);const ye=Ze.getPrimaries(Ze.workingColorSpace),fe=v.colorSpace===Ht?null:Ze.getPrimaries(v.colorSpace),xe=v.colorSpace===Ht||ye===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Le=v.isCompressedTexture||v.image[0].isCompressedTexture,Oe=v.image[0]&&v.image[0].isDataTexture,te=[];for(let T=0;T<6;T++)!Le&&!Oe?te[T]=S(v.image[T],!1,!0,r.maxCubemapSize):te[T]=Oe?v.image[T].image:v.image[T],te[T]=ge(v,te[T]);const Ye=te[0],He=d(Ye)||a,Ue=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),ve=A(v.internalFormat,Ue,Re,v.colorSpace),Be=a&&v.isVideoTexture!==!0,w=J.__version===void 0||ne===!0,ae=Q.dataReady;let me=I(v,Ye,He);Ee(i.TEXTURE_CUBE_MAP,v,He);let Ce;if(Le){Be&&w&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ve,Ye.width,Ye.height);for(let T=0;T<6;T++){Ce=te[T].mipmaps;for(let re=0;re<Ce.length;re++){const ie=Ce[re];v.format!==Kt?Ue!==null?Be?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re,0,0,ie.width,ie.height,Ue,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re,ve,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re,0,0,ie.width,ie.height,Ue,Re,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re,ve,ie.width,ie.height,0,Ue,Re,ie.data)}}}else{Ce=v.mipmaps,Be&&w&&(Ce.length>0&&me++,t.texStorage2D(i.TEXTURE_CUBE_MAP,me,ve,te[0].width,te[0].height));for(let T=0;T<6;T++)if(Oe){Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,te[T].width,te[T].height,Ue,Re,te[T].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ve,te[T].width,te[T].height,0,Ue,Re,te[T].data);for(let re=0;re<Ce.length;re++){const Te=Ce[re].image[T].image;Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re+1,0,0,Te.width,Te.height,Ue,Re,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re+1,ve,Te.width,Te.height,0,Ue,Re,Te.data)}}else{Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Ue,Re,te[T]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ve,Ue,Re,te[T]);for(let re=0;re<Ce.length;re++){const ie=Ce[re];Be?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re+1,0,0,Ue,Re,ie.image[T]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,re+1,ve,Ue,Re,ie.image[T])}}}b(v,He)&&_(i.TEXTURE_CUBE_MAP),J.__version=Q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function pe(M,v,U,ne,Q,J){const ye=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),xe=A(U.internalFormat,ye,fe,U.colorSpace);if(!n.get(v).__hasExternalTextures){const Oe=Math.max(1,v.width>>J),te=Math.max(1,v.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,xe,Oe,te,v.depth,0,ye,fe,null):t.texImage2D(Q,J,xe,Oe,te,0,ye,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),j(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,n.get(U).__webglTexture,0,se(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,n.get(U).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(M,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||j(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===vn?ne=i.DEPTH_COMPONENT32F:Q.type===Pn&&(ne=i.DEPTH_COMPONENT24));const J=se(v);j(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,ne,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,ne,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const ne=se(v);U&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):j(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<ne.length;Q++){const J=ne[Q],ye=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),xe=A(J.internalFormat,ye,fe,J.colorSpace),Le=se(v);U&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,xe,v.width,v.height):j(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,xe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);const ne=n.get(v.depthTexture).__webglTexture,Q=se(v);if(v.depthTexture.format===Zn)j(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Ui)j(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Pe(M){const v=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_e(v.__webglFramebuffer,M)}else if(U){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=i.createRenderbuffer(),Me(v.__webglDepthbuffer[ne],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Me(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(M,v,U){const ne=n.get(M);v!==void 0&&pe(ne.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Pe(M)}function R(M){const v=M.texture,U=n.get(M),ne=n.get(v);M.addEventListener("dispose",X),M.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,o.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,J=M.isWebGLMultipleRenderTargets===!0,ye=d(M)||a;if(Q){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let xe=0;xe<v.mipmaps.length;xe++)U.__webglFramebuffer[fe][xe]=i.createFramebuffer()}else U.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)U.__webglFramebuffer[fe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(J)if(r.drawBuffers){const fe=M.texture;for(let xe=0,Le=fe.length;xe<Le;xe++){const Oe=n.get(fe[xe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&j(M)===!1){const fe=J?v:[v];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){const Le=fe[xe];U.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[xe]);const Oe=s.convert(Le.format,Le.colorSpace),te=s.convert(Le.type),Ye=A(Le.internalFormat,Oe,te,Le.colorSpace,M.isXRRenderTarget===!0),He=se(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ye,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,U.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,v,ye);for(let fe=0;fe<6;fe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(U.__webglFramebuffer[fe][xe],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else pe(U.__webglFramebuffer[fe],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);b(v,ye)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const fe=M.texture;for(let xe=0,Le=fe.length;xe<Le;xe++){const Oe=fe[xe],te=n.get(Oe);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ee(i.TEXTURE_2D,Oe,ye),pe(U.__webglFramebuffer,M,Oe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),b(Oe,ye)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?fe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),Ee(fe,v,ye),a&&v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(U.__webglFramebuffer[xe],M,v,i.COLOR_ATTACHMENT0,fe,xe);else pe(U.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,fe,0);b(v,ye)&&_(fe),t.unbindTexture()}M.depthBuffer&&Pe(M)}function ce(M){const v=d(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0,Q=U.length;ne<Q;ne++){const J=U[ne];if(b(J,v)){const ye=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(J).__webglTexture;t.bindTexture(ye,fe),_(ye),t.unbindTexture()}}}function q(M){if(a&&M.samples>0&&j(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,ne=M.height;let Q=i.COLOR_BUFFER_BIT;const J=[],ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(M),xe=M.isWebGLMultipleRenderTargets===!0;if(xe)for(let Le=0;Le<v.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){J.push(i.COLOR_ATTACHMENT0+Le),M.depthBuffer&&J.push(ye);const Oe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Oe===!1&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),xe){const te=n.get(v[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,U,ne,0,0,U,ne,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Le=0;Le<v.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]);const Oe=n.get(v[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function se(M){return Math.min(r.maxSamples,M.samples)}function j(M){const v=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function ge(M,v){const U=M.colorSpace,ne=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ya||U!==Sn&&U!==Ht&&(Ze.getTransfer(U)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ne===Kt?(M.format=ya,M.minFilter=Pt,M.generateMipmaps=!1):v=$c.sRGBToLinear(v):(ne!==Kt||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=F,this.setTextureCube=O,this.rebindTextures=we,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=j}function gx(i,e,t){const n=t.isWebGL2;function r(s,o=Ht){let a;const l=Ze.getTransfer(o);if(s===On)return i.UNSIGNED_BYTE;if(s===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Gd)return i.BYTE;if(s===Hd)return i.SHORT;if(s===Ga)return i.UNSIGNED_SHORT;if(s===zc)return i.INT;if(s===Pn)return i.UNSIGNED_INT;if(s===vn)return i.FLOAT;if(s===nr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vd)return i.ALPHA;if(s===Kt)return i.RGBA;if(s===kd)return i.LUMINANCE;if(s===Wd)return i.LUMINANCE_ALPHA;if(s===Zn)return i.DEPTH_COMPONENT;if(s===Ui)return i.DEPTH_STENCIL;if(s===ya)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xd)return i.RED;if(s===Vc)return i.RED_INTEGER;if(s===Yd)return i.RG;if(s===kc)return i.RG_INTEGER;if(s===Wc)return i.RGBA_INTEGER;if(s===As||s===ws||s===Rs||s===Cs)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===As)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===As)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ao||s===wo||s===Ro||s===Co)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ro)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lo||s===Po)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Lo)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Po)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Do||s===Io||s===Uo||s===No||s===Oo||s===Fo||s===Bo||s===zo||s===Go||s===Ho||s===Vo||s===ko||s===Wo||s===Xo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Do)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Io)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===No)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Go)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ho)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ko)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ls||s===Yo||s===qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ls)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qd||s===jo||s===Ko||s===$o)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ko)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$o)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$n?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class _x extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const d=t.getJointPose(S,n),p=this._getHandJoint(c,S);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class Mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Mn({extensions:{fragDepth:!0},vertexShader:xx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sn(new us(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class yx extends ai{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const S=new Mx,d=t.getContextAttributes();let p=null,b=null;const _=[],A=[],I=new oe;let D=null;const C=new qt;C.layers.enable(1),C.viewport=new ot;const X=new qt;X.layers.enable(2),X.viewport=new ot;const le=[C,X],x=new _x;x.layers.enable(1),x.layers.enable(2);let E=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=_[V];return Z===void 0&&(Z=new Qs,_[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=_[V];return Z===void 0&&(Z=new Qs,_[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=_[V];return Z===void 0&&(Z=new Qs,_[V]=Z),Z.getHandSpace()};function ee(V){const Z=A.indexOf(V.inputSource);if(Z===-1)return;const de=_[Z];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function P(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",H);for(let V=0;V<_.length;V++){const Z=A[V];Z!==null&&(A[V]=null,_[V].disconnect(Z))}E=null,K=null,S.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,b=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(V){return ro(this,null,function*(){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",P),r.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ti(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:On,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,de=null,pe=null;d.depth&&(pe=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=d.stencil?Ui:Zn,de=d.stencil?$n:Pn);const Me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ti(f.textureWidth,f.textureHeight,{format:Kt,type:On,depthTexture:new lu(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const _e=e.properties.get(b);_e.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(V){for(let Z=0;Z<V.removed.length;Z++){const de=V.removed[Z],pe=A.indexOf(de);pe>=0&&(A[pe]=null,_[pe].disconnect(de))}for(let Z=0;Z<V.added.length;Z++){const de=V.added[Z];let pe=A.indexOf(de);if(pe===-1){for(let _e=0;_e<_.length;_e++)if(_e>=A.length){A.push(de),pe=_e;break}else if(A[_e]===null){A[_e]=de,pe=_e;break}if(pe===-1)break}const Me=_[pe];Me&&Me.connect(de)}}const B=new L,$=new L;function F(V,Z,de){B.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const pe=B.distanceTo($),Me=Z.projectionMatrix.elements,_e=de.projectionMatrix.elements,Pe=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),R=(Me[9]+1)/Me[5],ce=(Me[9]-1)/Me[5],q=(Me[8]-1)/Me[0],se=(_e[8]+1)/_e[0],j=Pe*q,be=Pe*se,ge=pe/(-q+se),M=ge*-q;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(M),V.translateZ(ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const v=Pe+ge,U=we+ge,ne=j-M,Q=be+(pe-M),J=R*we/U*v,ye=ce*we/U*v;V.projectionMatrix.makePerspective(ne,Q,J,ye,v,U),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function O(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.texture!==null&&(V.near=S.depthNear,V.far=S.depthFar),x.near=X.near=C.near=V.near,x.far=X.far=C.far=V.far,(E!==x.near||K!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,K=x.far,C.near=E,C.far=K,X.near=E,X.far=K,C.updateProjectionMatrix(),X.updateProjectionMatrix(),V.updateProjectionMatrix());const Z=V.parent,de=x.cameras;O(x,Z);for(let pe=0;pe<de.length;pe++)O(de[pe],Z);de.length===2?F(x,C,X):x.projectionMatrix.copy(C.projectionMatrix),W(V,x,Z)};function W(V,Z,de){de===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ir*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return S.texture!==null};let Y=null;function ue(V,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let pe=!1;de.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let _e=0;_e<de.length;_e++){const Pe=de[_e];let we=null;if(m!==null)we=m.getViewport(Pe);else{const ce=h.getViewSubImage(f,Pe);we=ce.viewport,_e===0&&(e.setRenderTargetTextures(b,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(b))}let R=le[_e];R===void 0&&(R=new qt,R.layers.enable(_e),R.viewport=new ot,le[_e]=R),R.matrix.fromArray(Pe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Pe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(x.matrix.copy(R.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(R)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const _e=h.getDepthInformation(de[0]);_e&&_e.isValid&&_e.texture&&S.init(e,_e,r.renderState)}}for(let de=0;de<_.length;de++){const pe=A[de],Me=_[de];pe!==null&&Me!==void 0&&Me.update(pe,Z,c||o)}S.render(e,x),Y&&Y(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ee=new au;Ee.setAnimationLoop(ue),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function Ex(i,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,iu(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,b,_,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,A)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),S(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,b,_):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===It&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===It&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p).envMap;if(b&&(d.envMap.value=b,d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=_*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function S(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tx(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){const A=_.program;n.uniformBlockBinding(b,A)}function c(b,_){let A=r[b.id];A===void 0&&(g(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",d));const I=_.program;n.updateUBOMapping(b,I);const D=e.render.frame;s[b.id]!==D&&(f(b),s[b.id]=D)}function u(b){const _=h();b.__bindingPointIndex=_;const A=i.createBuffer(),I=b.__size,D=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,A),A}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=r[b.id],A=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let D=0,C=A.length;D<C;D++){const X=Array.isArray(A[D])?A[D]:[A[D]];for(let le=0,x=X.length;le<x;le++){const E=X[le];if(m(E,D,le,I)===!0){const K=E.__offset,ee=Array.isArray(E.value)?E.value:[E.value];let P=0;for(let H=0;H<ee.length;H++){const B=ee[H],$=S(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,K+P,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,A,I){const D=b.value,C=_+"_"+A;if(I[C]===void 0)return typeof D=="number"||typeof D=="boolean"?I[C]=D:I[C]=D.clone(),!0;{const X=I[C];if(typeof D=="number"||typeof D=="boolean"){if(X!==D)return I[C]=D,!0}else if(X.equals(D)===!1)return X.copy(D),!0}return!1}function g(b){const _=b.uniforms;let A=0;const I=16;for(let C=0,X=_.length;C<X;C++){const le=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,E=le.length;x<E;x++){const K=le[x],ee=Array.isArray(K.value)?K.value:[K.value];for(let P=0,H=ee.length;P<H;P++){const B=ee[P],$=S(B),F=A%I;F!==0&&I-F<$.boundary&&(A+=I-F),K.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=$.storage}}}const D=A%I;return D>0&&(A+=I-D),b.__size=A,b.__cache={},this}function S(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function d(b){const _=b.target;_.removeEventListener("dispose",d);const A=o.indexOf(_.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class bx{constructor(e={}){const{canvas:t=vp(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let S=null,d=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const _=this;let A=!1,I=0,D=0,C=null,X=-1,le=null;const x=new ot,E=new ot;let K=null;const ee=new qe(0);let P=0,H=t.width,B=t.height,$=1,F=null,O=null;const W=new ot(0,0,H,B),Y=new ot(0,0,H,B);let ue=!1;const Ee=new qa;let V=!1,Z=!1,de=null;const pe=new it,Me=new oe,_e=new L,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return C===null?$:1}let R=n;function ce(y,N){for(let G=0;G<y.length;G++){const k=y[G],z=t.getContext(k,N);if(z!==null)return z}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",T,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),R=ce(N,y),R===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let q,se,j,be,ge,M,v,U,ne,Q,J,ye,fe,xe,Le,Oe,te,Ye,He,Ue,Re,ve,Be,w;function ae(){q=new P_(R),se=new b_(R,q,e),q.init(se),ve=new gx(R,q,se),j=new px(R,q,se),be=new U_(R),ge=new ex,M=new mx(R,q,j,ge,se,ve,be),v=new w_(_),U=new L_(_),ne=new Vp(R,se),Be=new E_(R,q,ne,se),Q=new D_(R,ne,be,Be),J=new B_(R,Q,ne,be),He=new F_(R,se,M),Oe=new A_(ge),ye=new Qv(_,v,U,q,se,Be,Oe),fe=new Ex(_,ge),xe=new nx,Le=new lx(q,se),Ye=new y_(_,v,U,j,J,f,l),te=new dx(_,J,se),w=new Tx(R,be,se,j),Ue=new T_(R,q,be,se),Re=new I_(R,q,be,se),be.programs=ye.programs,_.capabilities=se,_.extensions=q,_.properties=ge,_.renderLists=xe,_.shadowMap=te,_.state=j,_.info=be}ae();const me=new yx(_,R);this.xr=me,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=q.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=q.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(H,B,!1))},this.getSize=function(y){return y.set(H,B)},this.setSize=function(y,N,G=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,B=N,t.width=Math.floor(y*$),t.height=Math.floor(N*$),G===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(H*$,B*$).floor()},this.setDrawingBufferSize=function(y,N,G){H=y,B=N,$=G,t.width=Math.floor(y*G),t.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(x)},this.getViewport=function(y){return y.copy(W)},this.setViewport=function(y,N,G,k){y.isVector4?W.set(y.x,y.y,y.z,y.w):W.set(y,N,G,k),j.viewport(x.copy(W).multiplyScalar($).floor())},this.getScissor=function(y){return y.copy(Y)},this.setScissor=function(y,N,G,k){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,G,k),j.scissor(E.copy(Y).multiplyScalar($).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){j.setScissorTest(ue=y)},this.setOpaqueSort=function(y){F=y},this.setTransparentSort=function(y){O=y},this.getClearColor=function(y){return y.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(y=!0,N=!0,G=!0){let k=0;if(y){let z=!1;if(C!==null){const Se=C.texture.format;z=Se===Wc||Se===kc||Se===Vc}if(z){const Se=C.texture.type,Ae=Se===On||Se===Pn||Se===Ga||Se===$n||Se===Gc||Se===Hc,Ie=Ye.getClearColor(),Ne=Ye.getClearAlpha(),Ve=Ie.r,Fe=Ie.g,ze=Ie.b;Ae?(m[0]=Ve,m[1]=Fe,m[2]=ze,m[3]=Ne,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Ve,g[1]=Fe,g[2]=ze,g[3]=Ne,R.clearBufferiv(R.COLOR,0,g))}else k|=R.COLOR_BUFFER_BIT}N&&(k|=R.DEPTH_BUFFER_BIT),G&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",T,!1),t.removeEventListener("webglcontextcreationerror",re,!1),xe.dispose(),Le.dispose(),ge.dispose(),v.dispose(),U.dispose(),J.dispose(),Be.dispose(),w.dispose(),ye.dispose(),me.dispose(),me.removeEventListener("sessionstart",_t),me.removeEventListener("sessionend",Ke),de&&(de.dispose(),de=null),lt.stop()};function Ce(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=be.autoReset,N=te.enabled,G=te.autoUpdate,k=te.needsUpdate,z=te.type;ae(),be.autoReset=y,te.enabled=N,te.autoUpdate=G,te.needsUpdate=k,te.type=z}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ie(y){const N=y.target;N.removeEventListener("dispose",ie),Te(N)}function Te(y){De(y),ge.remove(y)}function De(y){const N=ge.get(y).programs;N!==void 0&&(N.forEach(function(G){ye.releaseProgram(G)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,k,z,Se){N===null&&(N=Pe);const Ae=z.isMesh&&z.matrixWorld.determinant()<0,Ie=Au(y,N,G,k,z);j.setMaterial(k,Ae);let Ne=G.index,Ve=1;if(k.wireframe===!0){if(Ne=Q.getWireframeAttribute(G),Ne===void 0)return;Ve=2}const Fe=G.drawRange,ze=G.attributes.position;let ct=Fe.start*Ve,Nt=(Fe.start+Fe.count)*Ve;Se!==null&&(ct=Math.max(ct,Se.start*Ve),Nt=Math.min(Nt,(Se.start+Se.count)*Ve)),Ne!==null?(ct=Math.max(ct,0),Nt=Math.min(Nt,Ne.count)):ze!=null&&(ct=Math.max(ct,0),Nt=Math.min(Nt,ze.count));const mt=Nt-ct;if(mt<0||mt===1/0)return;Be.setup(z,k,Ie,G,Ne);let cn,et=Ue;if(Ne!==null&&(cn=ne.get(Ne),et=Re,et.setIndex(cn)),z.isMesh)k.wireframe===!0?(j.setLineWidth(k.wireframeLinewidth*we()),et.setMode(R.LINES)):et.setMode(R.TRIANGLES);else if(z.isLine){let ke=k.linewidth;ke===void 0&&(ke=1),j.setLineWidth(ke*we()),z.isLineSegments?et.setMode(R.LINES):z.isLineLoop?et.setMode(R.LINE_LOOP):et.setMode(R.LINE_STRIP)}else z.isPoints?et.setMode(R.POINTS):z.isSprite&&et.setMode(R.TRIANGLES);if(z.isBatchedMesh)et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)et.renderInstances(ct,mt,z.count);else if(G.isInstancedBufferGeometry){const ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ds=Math.min(G.instanceCount,ke);et.renderInstances(ct,mt,ds)}else et.render(ct,mt)};function je(y,N,G){y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,pr(y,N,G),y.side=Fn,y.needsUpdate=!0,pr(y,N,G),y.side=_n):pr(y,N,G)}this.compile=function(y,N,G=null){G===null&&(G=y),d=Le.get(G),d.init(),b.push(d),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(_._useLegacyLights);const k=new Set;return y.traverse(function(z){const Se=z.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const Ie=Se[Ae];je(Ie,G,z),k.add(Ie)}else je(Se,G,z),k.add(Se)}),b.pop(),d=null,k},this.compileAsync=function(y,N,G=null){const k=this.compile(y,N,G);return new Promise(z=>{function Se(){if(k.forEach(function(Ae){ge.get(Ae).currentProgram.isReady()&&k.delete(Ae)}),k.size===0){z(y);return}setTimeout(Se,10)}q.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Xe=null;function Je(y){Xe&&Xe(y)}function _t(){lt.stop()}function Ke(){lt.start()}const lt=new au;lt.setAnimationLoop(Je),typeof self!="undefined"&&lt.setContext(self),this.setAnimationLoop=function(y){Xe=y,me.setAnimationLoop(y),y===null?lt.stop():lt.start()},me.addEventListener("sessionstart",_t),me.addEventListener("sessionend",Ke),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,N,C),d=Le.get(y,b.length),d.init(),b.push(d),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ee.setFromProjectionMatrix(pe),Z=this.localClippingEnabled,V=Oe.init(this.clippingPlanes,Z),S=xe.get(y,p.length),S.init(),p.push(S),At(y,N,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(F,O),this.info.render.frame++,V===!0&&Oe.beginShadows();const G=d.state.shadowsArray;if(te.render(G,y,N),V===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1)&&Ye.render(S,y),d.setupLights(_._useLegacyLights),N.isArrayCamera){const k=N.cameras;for(let z=0,Se=k.length;z<Se;z++){const Ae=k[z];Ja(S,y,Ae,Ae.viewport)}}else Ja(S,y,N);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(_,y,N),Be.resetDefaultState(),X=-1,le=null,b.pop(),b.length>0?d=b[b.length-1]:d=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function At(y,N,G,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ee.intersectsSprite(y)){k&&_e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(pe);const Ae=J.update(y),Ie=y.material;Ie.visible&&S.push(y,Ae,Ie,G,_e.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ee.intersectsObject(y))){const Ae=J.update(y),Ie=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_e.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),_e.copy(Ae.boundingSphere.center)),_e.applyMatrix4(y.matrixWorld).applyMatrix4(pe)),Array.isArray(Ie)){const Ne=Ae.groups;for(let Ve=0,Fe=Ne.length;Ve<Fe;Ve++){const ze=Ne[Ve],ct=Ie[ze.materialIndex];ct&&ct.visible&&S.push(y,Ae,ct,G,_e.z,ze)}}else Ie.visible&&S.push(y,Ae,Ie,G,_e.z,null)}}const Se=y.children;for(let Ae=0,Ie=Se.length;Ae<Ie;Ae++)At(Se[Ae],N,G,k)}function Ja(y,N,G,k){const z=y.opaque,Se=y.transmissive,Ae=y.transparent;d.setupLightsView(G),V===!0&&Oe.setGlobalState(_.clippingPlanes,G),Se.length>0&&bu(z,Se,N,G),k&&j.viewport(x.copy(k)),z.length>0&&dr(z,N,G),Se.length>0&&dr(Se,N,G),Ae.length>0&&dr(Ae,N,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function bu(y,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Se=se.isWebGL2;de===null&&(de=new ti(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?nr:On,minFilter:Kn,samples:Se?4:0})),_.getDrawingBufferSize(Me),Se?de.setSize(Me.x,Me.y):de.setSize(ts(Me.x),ts(Me.y));const Ae=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(ee),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=Nn,dr(y,G,k),M.updateMultisampleRenderTarget(de),M.updateRenderTargetMipmap(de);let Ne=!1;for(let Ve=0,Fe=N.length;Ve<Fe;Ve++){const ze=N[Ve],ct=ze.object,Nt=ze.geometry,mt=ze.material,cn=ze.group;if(mt.side===_n&&ct.layers.test(k.layers)){const et=mt.side;mt.side=It,mt.needsUpdate=!0,Qa(ct,G,k,Nt,mt,cn),mt.side=et,mt.needsUpdate=!0,Ne=!0}}Ne===!0&&(M.updateMultisampleRenderTarget(de),M.updateRenderTargetMipmap(de)),_.setRenderTarget(Ae),_.setClearColor(ee,P),_.toneMapping=Ie}function dr(y,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let z=0,Se=y.length;z<Se;z++){const Ae=y[z],Ie=Ae.object,Ne=Ae.geometry,Ve=k===null?Ae.material:k,Fe=Ae.group;Ie.layers.test(G.layers)&&Qa(Ie,N,G,Ne,Ve,Fe)}}function Qa(y,N,G,k,z,Se){y.onBeforeRender(_,N,G,k,z,Se),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(_,N,G,k,y,Se),z.transparent===!0&&z.side===_n&&z.forceSinglePass===!1?(z.side=It,z.needsUpdate=!0,_.renderBufferDirect(G,N,k,z,y,Se),z.side=Fn,z.needsUpdate=!0,_.renderBufferDirect(G,N,k,z,y,Se),z.side=_n):_.renderBufferDirect(G,N,k,z,y,Se),y.onAfterRender(_,N,G,k,z,Se)}function pr(y,N,G){N.isScene!==!0&&(N=Pe);const k=ge.get(y),z=d.state.lights,Se=d.state.shadowsArray,Ae=z.state.version,Ie=ye.getParameters(y,z.state,Se,N,G),Ne=ye.getProgramCacheKey(Ie);let Ve=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?U:v).get(y.envMap||k.environment),Ve===void 0&&(y.addEventListener("dispose",ie),Ve=new Map,k.programs=Ve);let Fe=Ve.get(Ne);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===Ae)return to(y,Ie),Fe}else Ie.uniforms=ye.getUniforms(y),y.onBuild(G,Ie,_),y.onBeforeCompile(Ie,_),Fe=ye.acquireProgram(Ie,Ne),Ve.set(Ne,Fe),k.uniforms=Ie.uniforms;const ze=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=Oe.uniform),to(y,Ie),k.needsLights=Ru(y),k.lightsStateVersion=Ae,k.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function eo(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=qr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function to(y,N){const G=ge.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Au(y,N,G,k,z){N.isScene!==!0&&(N=Pe),M.resetTextureUnits();const Se=N.fog,Ae=k.isMeshStandardMaterial?N.environment:null,Ie=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Sn,Ne=(k.isMeshStandardMaterial?U:v).get(k.envMap||Ae),Ve=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ze=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,Nt=!!G.morphAttributes.color;let mt=Nn;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=_.toneMapping);const cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=cn!==void 0?cn.length:0,ke=ge.get(k),ds=d.state.lights;if(V===!0&&(Z===!0||y!==le)){const zt=y===le&&k.id===X;Oe.setState(k,y,zt)}let rt=!1;k.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ds.state.version||ke.outputColorSpace!==Ie||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||ke.envMap!==Ne||k.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Oe.numPlanes||ke.numIntersection!==Oe.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Fe||ke.morphTargets!==ze||ke.morphNormals!==ct||ke.morphColors!==Nt||ke.toneMapping!==mt||se.isWebGL2===!0&&ke.morphTargetsCount!==et)&&(rt=!0):(rt=!0,ke.__version=k.version);let zn=ke.currentProgram;rt===!0&&(zn=pr(k,N,z));let no=!1,zi=!1,ps=!1;const Et=zn.getUniforms(),Gn=ke.uniforms;if(j.useProgram(zn.program)&&(no=!0,zi=!0,ps=!0),k.id!==X&&(X=k.id,zi=!0),no||le!==y){Et.setValue(R,"projectionMatrix",y.projectionMatrix),Et.setValue(R,"viewMatrix",y.matrixWorldInverse);const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(R,_e.setFromMatrixPosition(y.matrixWorld)),se.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),le!==y&&(le=y,zi=!0,ps=!0)}if(z.isSkinnedMesh){Et.setOptional(R,z,"bindMatrix"),Et.setOptional(R,z,"bindMatrixInverse");const zt=z.skeleton;zt&&(se.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Et.setValue(R,"boneTexture",zt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Et.setOptional(R,z,"batchingTexture"),Et.setValue(R,"batchingTexture",z._matricesTexture,M));const ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&se.isWebGL2===!0)&&He.update(z,G,zn),(zi||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,Et.setValue(R,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gn.envMap.value=Ne,Gn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),zi&&(Et.setValue(R,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&wu(Gn,ps),Se&&k.fog===!0&&fe.refreshFogUniforms(Gn,Se),fe.refreshMaterialUniforms(Gn,k,$,B,de),qr.upload(R,eo(ke),Gn,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qr.upload(R,eo(ke),Gn,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(R,"center",z.center),Et.setValue(R,"modelViewMatrix",z.modelViewMatrix),Et.setValue(R,"normalMatrix",z.normalMatrix),Et.setValue(R,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const zt=k.uniformsGroups;for(let gs=0,Cu=zt.length;gs<Cu;gs++)if(se.isWebGL2){const io=zt[gs];w.update(io,zn),w.bind(io,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function wu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ru(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,N,G){ge.get(y.texture).__webglTexture=N,ge.get(y.depthTexture).__webglTexture=G;const k=ge.get(y);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,N){const G=ge.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,G=0){C=y,I=N,D=G;let k=!0,z=null,Se=!1,Ae=!1;if(y){const Ne=ge.get(y);Ne.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(R.FRAMEBUFFER,null),k=!1):Ne.__webglFramebuffer===void 0?M.setupRenderTarget(y):Ne.__hasExternalTextures&&M.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Fe=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?z=Fe[N][G]:z=Fe[N],Se=!0):se.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?z=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[G]:z=Fe,x.copy(y.viewport),E.copy(y.scissor),K=y.scissorTest}else x.copy(W).multiplyScalar($).floor(),E.copy(Y).multiplyScalar($).floor(),K=ue;if(j.bindFramebuffer(R.FRAMEBUFFER,z)&&se.drawBuffers&&k&&j.drawBuffers(y,z),j.viewport(x),j.scissor(E),j.setScissorTest(K),Se){const Ne=ge.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,G)}else if(Ae){const Ne=ge.get(y.texture),Ve=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,Ve)}X=-1},this.readRenderTargetPixels=function(y,N,G,k,z,Se,Ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){j.bindFramebuffer(R.FRAMEBUFFER,Ie);try{const Ne=y.texture,Ve=Ne.format,Fe=Ne.type;if(Ve!==Kt&&ve.convert(Ve)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===nr&&(q.has("EXT_color_buffer_half_float")||se.isWebGL2&&q.has("EXT_color_buffer_float"));if(Fe!==On&&ve.convert(Fe)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===vn&&(se.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&G>=0&&G<=y.height-z&&R.readPixels(N,G,k,z,ve.convert(Ve),ve.convert(Fe),Se)}finally{const Ne=C!==null?ge.get(C).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(y,N,G=0){const k=Math.pow(2,-G),z=Math.floor(N.image.width*k),Se=Math.floor(N.image.height*k);M.setTexture2D(N,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,y.x,y.y,z,Se),j.unbindTexture()},this.copyTextureToTexture=function(y,N,G,k=0){const z=N.image.width,Se=N.image.height,Ae=ve.convert(G.format),Ie=ve.convert(G.type);M.setTexture2D(G,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,y.x,y.y,z,Se,Ae,Ie,N.image.data):N.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,y.x,y.y,N.mipmaps[0].width,N.mipmaps[0].height,Ae,N.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,k,y.x,y.y,Ae,Ie,N.image),k===0&&G.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(y,N,G,k,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=y.max.x-y.min.x+1,Ae=y.max.y-y.min.y+1,Ie=y.max.z-y.min.z+1,Ne=ve.convert(k.format),Ve=ve.convert(k.type);let Fe;if(k.isData3DTexture)M.setTexture3D(k,0),Fe=R.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)M.setTexture2DArray(k,0),Fe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const ze=R.getParameter(R.UNPACK_ROW_LENGTH),ct=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Nt=R.getParameter(R.UNPACK_SKIP_PIXELS),mt=R.getParameter(R.UNPACK_SKIP_ROWS),cn=R.getParameter(R.UNPACK_SKIP_IMAGES),et=G.isCompressedTexture?G.mipmaps[z]:G.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,et.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,et.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,y.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,y.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,y.min.z),G.isDataTexture||G.isData3DTexture?R.texSubImage3D(Fe,z,N.x,N.y,N.z,Se,Ae,Ie,Ne,Ve,et.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Fe,z,N.x,N.y,N.z,Se,Ae,Ie,Ne,et.data)):R.texSubImage3D(Fe,z,N.x,N.y,N.z,Se,Ae,Ie,Ne,Ve,et),R.pixelStorei(R.UNPACK_ROW_LENGTH,ze),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,mt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,cn),z===0&&k.generateMipmaps&&R.generateMipmap(Fe),j.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),j.unbindTexture()},this.resetState=function(){I=0,D=0,C=null,j.reset(),Be.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Va?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===ls?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Jn:Yc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?Mt:Sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ax extends bx{}Ax.prototype.isWebGL1Renderer=!0;class E0 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class wx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new L;class Dn{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],o=[],a=new L,l=new it;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ft(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(ft(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ka extends ln{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new oe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rx extends Ka{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Br=new L,ea=new $a,ta=new $a,na=new $a;class Cx extends ln{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Br.subVectors(r[0],r[1]).add(r[0]),c=Br);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Br.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),S=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);S<1e-4&&(S=1),g<1e-4&&(g=S),d<1e-4&&(d=S),ea.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,S,d),ta.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,S,d),na.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,S,d)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ta.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),na.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ea.calc(l),ta.calc(l),na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gl(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Lx(i,e){const t=1-i;return t*t*e}function Px(i,e){return 2*(1-i)*i*e}function Dx(i,e){return i*i*e}function Zi(i,e,t,n){return Lx(i,e)+Px(i,t)+Dx(i,n)}function Ix(i,e){const t=1-i;return t*t*t*e}function Ux(i,e){const t=1-i;return 3*t*t*i*e}function Nx(i,e){return 3*(1-i)*i*i*e}function Ox(i,e){return i*i*i*e}function Ji(i,e,t,n,r){return Ix(i,e)+Ux(i,t)+Nx(i,n)+Ox(i,r)}class pu extends ln{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(e,r.x,s.x,o.x,a.x),Ji(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fx extends ln{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(e,r.x,s.x,o.x,a.x),Ji(e,r.y,s.y,o.y,a.y),Ji(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mu extends ln{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bx extends ln{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends ln{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zi(e,r.x,s.x,o.x),Zi(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zx extends ln{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zi(e,r.x,s.x,o.x),Zi(e,r.y,s.y,o.y),Zi(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Gl(a,l.x,c.x,u.x,h.x),Gl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new oe().fromArray(r))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:Rx,CatmullRomCurve3:Cx,CubicBezierCurve:pu,CubicBezierCurve3:Fx,EllipseCurve:Ka,LineCurve:mu,LineCurve3:Bx,QuadraticBezierCurve:gu,QuadraticBezierCurve3:zx,SplineCurve:_u});class Gx extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ba[r.type]().fromJSON(r))}return this}}class Hl extends Gx{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new mu(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new gu(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new pu(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _u(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Ka(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hx extends Hl{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Hl().fromJSON(r))}return this}}const Vx={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=vu(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(n&&(s=qx(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return sr(s,o,t,a,l,m,0),o}};function vu(i,e,t,n,r){let s,o;if(r===r0(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Vl(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Vl(s,i[s],i[s+1],o);return o&&fs(o,o.next)&&(or(o),o=o.next),o}function ii(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fs(t,t.next)||nt(t.prev,t,t.next)===0)){if(or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Jx(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Wx(i,n,r,s):kx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),or(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xx(ii(i),e,t),sr(i,e,t,n,r,s,2)):o===2&&Yx(i,e,t,n,r,s):sr(ii(i),e,t,n,r,s,1);break}}}function kx(i){const e=i.prev,t=i,n=i.next;if(nt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&Ri(r,a,s,l,o,c,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wx(i,e,t,n){const r=i.prev,s=i,o=i.next;if(nt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,S=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,p=Aa(m,g,e,t,n),b=Aa(S,d,e,t,n);let _=i.prevZ,A=i.nextZ;for(;_&&_.z>=p&&A&&A.z<=b;){if(_.x>=m&&_.x<=S&&_.y>=g&&_.y<=d&&_!==r&&_!==o&&Ri(a,u,l,h,c,f,_.x,_.y)&&nt(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=m&&A.x<=S&&A.y>=g&&A.y<=d&&A!==r&&A!==o&&Ri(a,u,l,h,c,f,A.x,A.y)&&nt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=S&&_.y>=g&&_.y<=d&&_!==r&&_!==o&&Ri(a,u,l,h,c,f,_.x,_.y)&&nt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=b;){if(A.x>=m&&A.x<=S&&A.y>=g&&A.y<=d&&A!==r&&A!==o&&Ri(a,u,l,h,c,f,A.x,A.y)&&nt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Xx(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!fs(r,s)&&xu(r,n,n.next,s)&&ar(r,s)&&ar(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),or(n),or(n.next),n=i=s),n=n.next}while(n!==i);return ii(n)}function Yx(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let l=Su(o,a);o=ii(o,o.next),l=ii(l,l.next),sr(o,e,t,n,r,s,0),sr(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function qx(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=vu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(e0(c));for(r.sort(jx),s=0;s<r.length;s++)t=Kx(r[s],t);return t}function jx(i,e){return i.x-e.x}function Kx(i,e){const t=$x(i,e);if(!t)return e;const n=Su(t,i);return ii(n,n.next),ii(t,t.next)}function $x(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ri(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),ar(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Zx(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function Zx(i,e){return nt(i.prev,i,e.prev)<0&&nt(e.next,i,i.next)<0}function Jx(i,e,t,n){let r=i;do r.z===0&&(r.z=Aa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Qx(r)}function Qx(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Aa(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function e0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ri(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function t0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!n0(i,e)&&(ar(i,e)&&ar(e,i)&&i0(i,e)&&(nt(i.prev,i,e.prev)||nt(i,e.prev,e))||fs(i,e)&&nt(i.prev,i,i.next)>0&&nt(e.prev,e,e.next)>0)}function nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fs(i,e){return i.x===e.x&&i.y===e.y}function xu(i,e,t,n){const r=Gr(nt(i,e,t)),s=Gr(nt(i,e,n)),o=Gr(nt(t,n,i)),a=Gr(nt(t,n,e));return!!(r!==s&&o!==a||r===0&&zr(i,t,e)||s===0&&zr(i,n,e)||o===0&&zr(t,i,n)||a===0&&zr(t,e,n))}function zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Gr(i){return i>0?1:i<0?-1:0}function n0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ar(i,e){return nt(i.prev,i,i.next)<0?nt(i,e,i.next)>=0&&nt(i,i.prev,e)>=0:nt(i,e,i.prev)<0||nt(i,i.next,e)<0}function i0(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Su(i,e){const t=new wa(i.i,i.x,i.y),n=new wa(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vl(i,e,t,n){const r=new wa(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wa(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r0(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Qi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Qi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];kl(e),Wl(n,e);let o=e.length;t.forEach(kl);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Wl(n,t[l]);const a=Vx.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function kl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Mu extends on{constructor(e=new Hx([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new kt(r,3)),this.setAttribute("uv",new kt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:s0;let _,A=!1,I,D,C,X;p&&(_=p.getSpacedPoints(u),A=!0,f=!1,I=p.computeFrenetFrames(u,!1),D=new L,C=new L,X=new L),f||(d=0,m=0,g=0,S=0);const le=a.extractPoints(c);let x=le.shape;const E=le.holes;if(!Qi.isClockWise(x)){x=x.reverse();for(let R=0,ce=E.length;R<ce;R++){const q=E[R];Qi.isClockWise(q)&&(E[R]=q.reverse())}}const ee=Qi.triangulateShape(x,E),P=x;for(let R=0,ce=E.length;R<ce;R++){const q=E[R];x=x.concat(q)}function H(R,ce,q){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ce,q)}const B=x.length,$=ee.length;function F(R,ce,q){let se,j,be;const ge=R.x-ce.x,M=R.y-ce.y,v=q.x-R.x,U=q.y-R.y,ne=ge*ge+M*M,Q=ge*U-M*v;if(Math.abs(Q)>Number.EPSILON){const J=Math.sqrt(ne),ye=Math.sqrt(v*v+U*U),fe=ce.x-M/J,xe=ce.y+ge/J,Le=q.x-U/ye,Oe=q.y+v/ye,te=((Le-fe)*U-(Oe-xe)*v)/(ge*U-M*v);se=fe+ge*te-R.x,j=xe+M*te-R.y;const Ye=se*se+j*j;if(Ye<=2)return new oe(se,j);be=Math.sqrt(Ye/2)}else{let J=!1;ge>Number.EPSILON?v>Number.EPSILON&&(J=!0):ge<-Number.EPSILON?v<-Number.EPSILON&&(J=!0):Math.sign(M)===Math.sign(U)&&(J=!0),J?(se=-M,j=ge,be=Math.sqrt(ne)):(se=ge,j=M,be=Math.sqrt(ne/2))}return new oe(se/be,j/be)}const O=[];for(let R=0,ce=P.length,q=ce-1,se=R+1;R<ce;R++,q++,se++)q===ce&&(q=0),se===ce&&(se=0),O[R]=F(P[R],P[q],P[se]);const W=[];let Y,ue=O.concat();for(let R=0,ce=E.length;R<ce;R++){const q=E[R];Y=[];for(let se=0,j=q.length,be=j-1,ge=se+1;se<j;se++,be++,ge++)be===j&&(be=0),ge===j&&(ge=0),Y[se]=F(q[se],q[be],q[ge]);W.push(Y),ue=ue.concat(Y)}for(let R=0;R<d;R++){const ce=R/d,q=m*Math.cos(ce*Math.PI/2),se=g*Math.sin(ce*Math.PI/2)+S;for(let j=0,be=P.length;j<be;j++){const ge=H(P[j],O[j],se);pe(ge.x,ge.y,-q)}for(let j=0,be=E.length;j<be;j++){const ge=E[j];Y=W[j];for(let M=0,v=ge.length;M<v;M++){const U=H(ge[M],Y[M],se);pe(U.x,U.y,-q)}}}const Ee=g+S;for(let R=0;R<B;R++){const ce=f?H(x[R],ue[R],Ee):x[R];A?(C.copy(I.normals[0]).multiplyScalar(ce.x),D.copy(I.binormals[0]).multiplyScalar(ce.y),X.copy(_[0]).add(C).add(D),pe(X.x,X.y,X.z)):pe(ce.x,ce.y,0)}for(let R=1;R<=u;R++)for(let ce=0;ce<B;ce++){const q=f?H(x[ce],ue[ce],Ee):x[ce];A?(C.copy(I.normals[R]).multiplyScalar(q.x),D.copy(I.binormals[R]).multiplyScalar(q.y),X.copy(_[R]).add(C).add(D),pe(X.x,X.y,X.z)):pe(q.x,q.y,h/u*R)}for(let R=d-1;R>=0;R--){const ce=R/d,q=m*Math.cos(ce*Math.PI/2),se=g*Math.sin(ce*Math.PI/2)+S;for(let j=0,be=P.length;j<be;j++){const ge=H(P[j],O[j],se);pe(ge.x,ge.y,h+q)}for(let j=0,be=E.length;j<be;j++){const ge=E[j];Y=W[j];for(let M=0,v=ge.length;M<v;M++){const U=H(ge[M],Y[M],se);A?pe(U.x,U.y+_[u-1].y,_[u-1].x+q):pe(U.x,U.y,h+q)}}}V(),Z();function V(){const R=r.length/3;if(f){let ce=0,q=B*ce;for(let se=0;se<$;se++){const j=ee[se];Me(j[2]+q,j[1]+q,j[0]+q)}ce=u+d*2,q=B*ce;for(let se=0;se<$;se++){const j=ee[se];Me(j[0]+q,j[1]+q,j[2]+q)}}else{for(let ce=0;ce<$;ce++){const q=ee[ce];Me(q[2],q[1],q[0])}for(let ce=0;ce<$;ce++){const q=ee[ce];Me(q[0]+B*u,q[1]+B*u,q[2]+B*u)}}n.addGroup(R,r.length/3-R,0)}function Z(){const R=r.length/3;let ce=0;de(P,ce),ce+=P.length;for(let q=0,se=E.length;q<se;q++){const j=E[q];de(j,ce),ce+=j.length}n.addGroup(R,r.length/3-R,1)}function de(R,ce){let q=R.length;for(;--q>=0;){const se=q;let j=q-1;j<0&&(j=R.length-1);for(let be=0,ge=u+d*2;be<ge;be++){const M=B*be,v=B*(be+1),U=ce+se+M,ne=ce+j+M,Q=ce+j+v,J=ce+se+v;_e(U,ne,Q,J)}}}function pe(R,ce,q){l.push(R),l.push(ce),l.push(q)}function Me(R,ce,q){Pe(R),Pe(ce),Pe(q);const se=r.length/3,j=b.generateTopUV(n,r,se-3,se-2,se-1);we(j[0]),we(j[1]),we(j[2])}function _e(R,ce,q,se){Pe(R),Pe(ce),Pe(se),Pe(ce),Pe(q),Pe(se);const j=r.length/3,be=b.generateSideWallUV(n,r,j-6,j-3,j-2,j-1);we(be[0]),we(be[1]),we(be[3]),we(be[1]),we(be[2]),we(be[3])}function Pe(R){r.push(l[R*3+0]),r.push(l[R*3+1]),r.push(l[R*3+2])}function we(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ba[r.type]().fromJSON(r)),new Mu(n,e.options)}}const s0={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new oe(s,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],m=e[r*3+1],g=e[r*3+2],S=e[s*3],d=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-h),new oe(f,1-g),new oe(S,1-p)]:[new oe(a,1-l),new oe(u,1-h),new oe(m,1-g),new oe(d,1-p)]}};function a0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class o0 extends on{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new L,s=new L;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,m=h.count;for(let g=f,S=f+m;g<S;g+=3)for(let d=0;d<3;d++){const p=a.getX(g+d),b=a.getX(g+(d+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,b),Xl(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Xl(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Xl(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class T0 extends Fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=as,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b0 extends Fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=as,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Yl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class l0{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const c0=new l0;class Za{constructor(e){this.manager=e!==void 0?e:c0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Za.DEFAULT_MATERIAL_NAME="__DEFAULT";class u0 extends Za{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=rr("img");function l(){u(),Yl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class A0 extends Za{constructor(e){super(e)}load(e,t,n,r){const s=new Lt,o=new u0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class yu extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ia=new it,ql=new L,jl=new L;class h0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f0 extends h0{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w0 extends yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class R0 extends yu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class d0 extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ra extends wx{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class C0{constructor(e,t,n=0,r=1/0){this.ray=new Wa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ca(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ca(e[r],this,n,t);return n.sort(Kl),n}}function Kl(i,e){return i.distance-e.distance}function Ca(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Ca(r[s],e,t,!0)}}class $l{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zl=new L,Hr=new L;class p0{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Zl.subVectors(e,this.start),Hr.subVectors(this.end,this.start);const n=Hr.dot(Hr);let s=Hr.dot(Zl)/n;return t&&(s=ft(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);const Jl=new Bn,Vr=new L;class Eu extends d0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new kt(e,3)),this.setAttribute("uv",new kt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ra(t,6,1);return this.setAttribute("instanceStart",new Dn(n,3,0)),this.setAttribute("instanceEnd",new Dn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ra(t,6,1);return this.setAttribute("instanceColorStart",new Dn(n,3,0)),this.setAttribute("instanceColorEnd",new Dn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new o0(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Jl.setFromBufferAttribute(t),this.boundingBox.union(Jl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Vr.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Vr)),Vr.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Vr));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Dt.line={uniforms:Ya.merge([he.common,he.fog,he.line]),vertexShader:`
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
		`};class Tu extends Mn{constructor(e){super({type:"LineMaterial",uniforms:Ya.clone(Dt.line.uniforms),vertexShader:Dt.line.vertexShader,fragmentShader:Dt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Ql=new L,ec=new L,vt=new ot,xt=new ot,Qt=new ot,ra=new L,sa=new it,St=new p0,tc=new L,kr=new Bn,Wr=new hr,en=new ot;let rn,ei;function nc(i,e,t){return en.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),en.multiplyScalar(1/en.w),en.x=ei/t.width,en.y=ei/t.height,en.applyMatrix4(i.projectionMatrixInverse),en.multiplyScalar(1/en.w),Math.abs(Math.max(en.x,en.y))}function m0(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,l=o;a<l;a++){St.start.fromBufferAttribute(r,a),St.end.fromBufferAttribute(s,a),St.applyMatrix4(t);const c=new L,u=new L;rn.distanceSqToSegment(St.start,St.end,u,c),u.distanceTo(c)<ei*.5&&e.push({point:u,pointOnLine:c,distance:rn.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function g0(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;rn.at(1,Qt),Qt.w=1,Qt.applyMatrix4(e.matrixWorldInverse),Qt.applyMatrix4(n),Qt.multiplyScalar(1/Qt.w),Qt.x*=s.x/2,Qt.y*=s.y/2,Qt.z=0,ra.copy(Qt),sa.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,m=u;f<m;f++){if(vt.fromBufferAttribute(l,f),xt.fromBufferAttribute(c,f),vt.w=1,xt.w=1,vt.applyMatrix4(sa),xt.applyMatrix4(sa),vt.z>h&&xt.z>h)continue;if(vt.z>h){const _=vt.z-xt.z,A=(vt.z-h)/_;vt.lerp(xt,A)}else if(xt.z>h){const _=xt.z-vt.z,A=(xt.z-h)/_;xt.lerp(vt,A)}vt.applyMatrix4(n),xt.applyMatrix4(n),vt.multiplyScalar(1/vt.w),xt.multiplyScalar(1/xt.w),vt.x*=s.x/2,vt.y*=s.y/2,xt.x*=s.x/2,xt.y*=s.y/2,St.start.copy(vt),St.start.z=0,St.end.copy(xt),St.end.z=0;const S=St.closestPointToPointParameter(ra,!0);St.at(S,tc);const d=jc.lerp(vt.z,xt.z,S),p=d>=-1&&d<=1,b=ra.distanceTo(tc)<ei*.5;if(p&&b){St.start.fromBufferAttribute(l,f),St.end.fromBufferAttribute(c,f),St.start.applyMatrix4(o),St.end.applyMatrix4(o);const _=new L,A=new L;rn.distanceSqToSegment(St.start,St.end,A,_),t.push({point:A,pointOnLine:_,distance:rn.origin.distanceTo(A),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class _0 extends sn{constructor(e=new Eu,t=new Tu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Ql.fromBufferAttribute(t,o),ec.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Ql.distanceTo(ec);const s=new Ra(r,2,1);return e.setAttribute("instanceDistanceStart",new Dn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Dn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;rn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ei=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Wr.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=ei*.5;else{const h=Math.max(r.near,Wr.distanceToPoint(rn.origin));c=nc(r,h,l.resolution)}if(Wr.radius+=c,rn.intersectsSphere(Wr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),kr.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=ei*.5;else{const h=Math.max(r.near,kr.distanceToPoint(rn.origin));u=nc(r,h,l.resolution)}kr.expandByScalar(u),rn.intersectsBox(kr)!==!1&&(n?m0(this,t):g0(this,r,t))}}class v0 extends Eu{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class L0 extends _0{constructor(e=new v0,t=new Tu({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class P0 extends yt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new oe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const bi=new L,ic=new it,rc=new it,sc=new L,ac=new L;class D0{constructor(e={}){const t=this;let n,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),ic.copy(g.matrixWorldInverse),rc.multiplyMatrices(g.projectionMatrix,ic),c(m,m,g),f(m)},this.setSize=function(m,g){n=m,r=g,s=n/2,o=r/2,l.style.width=m+"px",l.style.height=g+"px"};function c(m,g,S){if(m.isCSS2DObject){bi.setFromMatrixPosition(m.matrixWorld),bi.applyMatrix4(rc);const d=m.visible===!0&&bi.z>=-1&&bi.z<=1&&m.layers.test(S.layers)===!0;if(m.element.style.display=d===!0?"":"none",d===!0){m.onBeforeRender(t,g,S);const b=m.element;b.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(bi.x*s+s)+"px,"+(-bi.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),m.onAfterRender(t,g,S)}const p={distanceToCameraSquared:u(S,m)};a.objects.set(m,p)}for(let d=0,p=m.children.length;d<p;d++)c(m.children[d],g,S)}function u(m,g){return sc.setFromMatrixPosition(m.matrixWorld),ac.setFromMatrixPosition(g.matrixWorld),sc.distanceToSquared(ac)}function h(m){const g=[];return m.traverse(function(S){S.isCSS2DObject&&g.push(S)}),g}function f(m){const g=h(m).sort(function(d,p){if(d.renderOrder!==p.renderOrder)return p.renderOrder-d.renderOrder;const b=a.objects.get(d).distanceToCameraSquared,_=a.objects.get(p).distanceToCameraSquared;return b-_}),S=g.length;for(let d=0,p=g.length;d<p;d++)g[d].element.style.zIndex=S-d}}}const oc={type:"change"},aa={type:"start"},lc={type:"end"},Xr=new Wa,cc=new Ln,x0=Math.cos(70*jc.DEG2RAD);class I0 extends ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",Le),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oc),n.update(),s=r.NONE},this.update=(function(){const w=new L,ae=new ni().setFromUnitVectors(e.up,new L(0,1,0)),me=ae.clone().invert(),Ce=new L,T=new ni,re=new L,ie=2*Math.PI;return function(De=null){const je=n.object.position;w.copy(je).sub(n.target),w.applyQuaternion(ae),a.setFromVector3(w),n.autoRotate&&s===r.NONE&&K(x(De)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Xe=n.minAzimuthAngle,Je=n.maxAzimuthAngle;isFinite(Xe)&&isFinite(Je)&&(Xe<-Math.PI?Xe+=ie:Xe>Math.PI&&(Xe-=ie),Je<-Math.PI?Je+=ie:Je>Math.PI&&(Je-=ie),Xe<=Je?a.theta=Math.max(Xe,Math.min(Je,a.theta)):a.theta=a.theta>(Xe+Je)/2?Math.max(Xe,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),w.setFromSpherical(a),w.applyQuaternion(me),je.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let _t=!1;if(n.zoomToCursor&&D){let Ke=null;if(n.object.isPerspectiveCamera){const lt=w.length();Ke=W(lt*c);const At=lt-Ke;n.object.position.addScaledVector(A,At),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const lt=new L(I.x,I.y,0);lt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),_t=!0;const At=new L(I.x,I.y,0);At.unproject(n.object),n.object.position.sub(At).add(lt),n.object.updateMatrixWorld(),Ke=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position):(Xr.origin.copy(n.object.position),Xr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xr.direction))<x0?e.lookAt(n.target):(cc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xr.intersectPlane(cc,n.target))))}else n.object.isOrthographicCamera&&(_t=c!==1,_t&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,D=!1,_t||Ce.distanceToSquared(n.object.position)>o||8*(1-T.dot(n.object.quaternion))>o||re.distanceToSquared(n.target)>0?(n.dispatchEvent(oc),Ce.copy(n.object.position),T.copy(n.object.quaternion),re.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ye),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Le),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new $l,l=new $l;let c=1;const u=new L,h=new oe,f=new oe,m=new oe,g=new oe,S=new oe,d=new oe,p=new oe,b=new oe,_=new oe,A=new L,I=new oe;let D=!1;const C=[],X={};let le=!1;function x(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function E(w){const ae=Math.abs(w*.01);return Math.pow(.95,n.zoomSpeed*ae)}function K(w){l.theta-=w}function ee(w){l.phi-=w}const P=(function(){const w=new L;return function(me,Ce){w.setFromMatrixColumn(Ce,0),w.multiplyScalar(-me),u.add(w)}})(),H=(function(){const w=new L;return function(me,Ce){n.screenSpacePanning===!0?w.setFromMatrixColumn(Ce,1):(w.setFromMatrixColumn(Ce,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(me),u.add(w)}})(),B=(function(){const w=new L;return function(me,Ce){const T=n.domElement;if(n.object.isPerspectiveCamera){const re=n.object.position;w.copy(re).sub(n.target);let ie=w.length();ie*=Math.tan(n.object.fov/2*Math.PI/180),P(2*me*ie/T.clientHeight,n.object.matrix),H(2*Ce*ie/T.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(me*(n.object.right-n.object.left)/n.object.zoom/T.clientWidth,n.object.matrix),H(Ce*(n.object.top-n.object.bottom)/n.object.zoom/T.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function $(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(w,ae){if(!n.zoomToCursor)return;D=!0;const me=n.domElement.getBoundingClientRect(),Ce=w-me.left,T=ae-me.top,re=me.width,ie=me.height;I.x=Ce/re*2-1,I.y=-(T/ie)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function Y(w){h.set(w.clientX,w.clientY)}function ue(w){O(w.clientX,w.clientX),p.set(w.clientX,w.clientY)}function Ee(w){g.set(w.clientX,w.clientY)}function V(w){f.set(w.clientX,w.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ae=n.domElement;K(2*Math.PI*m.x/ae.clientHeight),ee(2*Math.PI*m.y/ae.clientHeight),h.copy(f),n.update()}function Z(w){b.set(w.clientX,w.clientY),_.subVectors(b,p),_.y>0?$(E(_.y)):_.y<0&&F(E(_.y)),p.copy(b),n.update()}function de(w){S.set(w.clientX,w.clientY),d.subVectors(S,g).multiplyScalar(n.panSpeed),B(d.x,d.y),g.copy(S),n.update()}function pe(w){O(w.clientX,w.clientY),w.deltaY<0?F(E(w.deltaY)):w.deltaY>0&&$(E(w.deltaY)),n.update()}function Me(w){let ae=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?ee(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?ee(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ae=!0;break}ae&&(w.preventDefault(),n.update())}function _e(w){if(C.length===1)h.set(w.pageX,w.pageY);else{const ae=ve(w),me=.5*(w.pageX+ae.x),Ce=.5*(w.pageY+ae.y);h.set(me,Ce)}}function Pe(w){if(C.length===1)g.set(w.pageX,w.pageY);else{const ae=ve(w),me=.5*(w.pageX+ae.x),Ce=.5*(w.pageY+ae.y);g.set(me,Ce)}}function we(w){const ae=ve(w),me=w.pageX-ae.x,Ce=w.pageY-ae.y,T=Math.sqrt(me*me+Ce*Ce);p.set(0,T)}function R(w){n.enableZoom&&we(w),n.enablePan&&Pe(w)}function ce(w){n.enableZoom&&we(w),n.enableRotate&&_e(w)}function q(w){if(C.length==1)f.set(w.pageX,w.pageY);else{const me=ve(w),Ce=.5*(w.pageX+me.x),T=.5*(w.pageY+me.y);f.set(Ce,T)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ae=n.domElement;K(2*Math.PI*m.x/ae.clientHeight),ee(2*Math.PI*m.y/ae.clientHeight),h.copy(f)}function se(w){if(C.length===1)S.set(w.pageX,w.pageY);else{const ae=ve(w),me=.5*(w.pageX+ae.x),Ce=.5*(w.pageY+ae.y);S.set(me,Ce)}d.subVectors(S,g).multiplyScalar(n.panSpeed),B(d.x,d.y),g.copy(S)}function j(w){const ae=ve(w),me=w.pageX-ae.x,Ce=w.pageY-ae.y,T=Math.sqrt(me*me+Ce*Ce);b.set(0,T),_.set(0,Math.pow(b.y/p.y,n.zoomSpeed)),$(_.y),p.copy(b);const re=(w.pageX+ae.x)*.5,ie=(w.pageY+ae.y)*.5;O(re,ie)}function be(w){n.enableZoom&&j(w),n.enablePan&&se(w)}function ge(w){n.enableZoom&&j(w),n.enableRotate&&q(w)}function M(w){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",U)),He(w),w.pointerType==="touch"?Oe(w):ne(w))}function v(w){n.enabled!==!1&&(w.pointerType==="touch"?te(w):Q(w))}function U(w){switch(Ue(w),C.length){case 0:n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",U),n.dispatchEvent(lc),s=r.NONE;break;case 1:const ae=C[0],me=X[ae];Oe({pointerId:ae,pageX:me.x,pageY:me.y});break}}function ne(w){let ae;switch(w.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case oi.DOLLY:if(n.enableZoom===!1)return;ue(w),s=r.DOLLY;break;case oi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;Ee(w),s=r.PAN}else{if(n.enableRotate===!1)return;Y(w),s=r.ROTATE}break;case oi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;Y(w),s=r.ROTATE}else{if(n.enablePan===!1)return;Ee(w),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(aa)}function Q(w){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;V(w);break;case r.DOLLY:if(n.enableZoom===!1)return;Z(w);break;case r.PAN:if(n.enablePan===!1)return;de(w);break}}function J(w){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(w.preventDefault(),n.dispatchEvent(aa),pe(ye(w)),n.dispatchEvent(lc))}function ye(w){const ae=w.deltaMode,me={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(ae){case 1:me.deltaY*=16;break;case 2:me.deltaY*=100;break}return w.ctrlKey&&!le&&(me.deltaY*=10),me}function fe(w){w.key==="Control"&&(le=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(w){w.key==="Control"&&(le=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Le(w){n.enabled===!1||n.enablePan===!1||Me(w)}function Oe(w){switch(Re(w),C.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;_e(w),s=r.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;Pe(w),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(w),s=r.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(w),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(aa)}function te(w){switch(Re(w),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;q(w),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;se(w),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(w),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(w),n.update();break;default:s=r.NONE}}function Ye(w){n.enabled!==!1&&w.preventDefault()}function He(w){C.push(w.pointerId)}function Ue(w){delete X[w.pointerId];for(let ae=0;ae<C.length;ae++)if(C[ae]==w.pointerId){C.splice(ae,1);return}}function Re(w){let ae=X[w.pointerId];ae===void 0&&(ae=new oe,X[w.pointerId]=ae),ae.set(w.pageX,w.pageY)}function ve(w){const ae=w.pointerId===C[0]?C[1]:C[0];return X[ae]}n.domElement.addEventListener("contextmenu",Ye),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",J,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}export{R0 as A,D0 as C,w0 as D,Mu as E,Fr as G,v0 as L,jc as M,I0 as O,qt as P,C0 as R,E0 as S,A0 as T,oe as V,bx as W,Mt as a,L as b,T0 as c,as as d,b0 as e,sn as f,P0 as g,us as h,eu as i,Hx as j,Hl as k,Tu as l,L0 as m,xa as n,y0 as o,M0 as p};
