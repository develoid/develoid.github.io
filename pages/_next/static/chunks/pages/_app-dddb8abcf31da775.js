(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2350:function(){},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3884)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,i=n(7273).Z,s=r(n(7294)),o=n(4532),a=n(3353),c=n(1410),l=n(9064),u=n(370),d=n(9955),f=n(4224),h=n(508),m=n(1516),p=n(4266);let v=new Set;function _(e,t,n,r,i){if(i||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,s=t+"%"+n+"%"+i;if(v.has(s))return;v.add(s)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:c.formatUrl(e)}let b=s.default.forwardRef(function(e,t){let n,r;let{href:c,as:v,children:b,prefetch:g,passHref:x,replace:S,shallow:j,scroll:T,locale:I,onClick:N,onMouseEnter:w,onTouchStart:C,legacyBehavior:R=!1}=e,k=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,R&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));let E=!1!==g,F=s.default.useContext(d.RouterContext),L=s.default.useContext(f.AppRouterContext),z=null!=F?F:L,H=!F,{href:O,as:M}=s.default.useMemo(()=>{if(!F){let e=y(c);return{href:e,as:v?y(v):e}}let[e,t]=o.resolveHref(F,c,!0);return{href:e,as:v?o.resolveHref(F,v):t||e}},[F,c,v]),A=s.default.useRef(O),P=s.default.useRef(M);R&&(r=s.default.Children.only(n));let B=R?r&&"object"==typeof r&&r.ref:t,[G,U,q]=h.useIntersection({rootMargin:"200px"}),D=s.default.useCallback(e=>{(P.current!==M||A.current!==O)&&(q(),P.current=M,A.current=O),G(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[M,B,O,q,G]);s.default.useEffect(()=>{z&&U&&E&&_(z,O,M,{locale:I},H)},[M,O,U,I,E,null==F?void 0:F.locale,z,H]);let K={ref:D,onClick(e){R||"function"!=typeof N||N(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,n,r,i,o,c,l,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!a.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:c}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?s.default.startTransition(m):m()}(e,z,O,M,S,j,T,I,H,E)},onMouseEnter(e){R||"function"!=typeof w||w(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&(E||!H)&&_(z,O,M,{locale:I,priority:!0,bypassPrefetchedCheck:!0},H)},onTouchStart(e){R||"function"!=typeof C||C(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&(E||!H)&&_(z,O,M,{locale:I,priority:!0,bypassPrefetchedCheck:!0},H)}};if(l.isAbsoluteUrl(M))K.href=M;else if(!R||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==I?I:null==F?void 0:F.locale,t=(null==F?void 0:F.isLocaleDomain)&&m.getDomainLocale(M,e,null==F?void 0:F.locales,null==F?void 0:F.domainLocales);K.href=t||p.addBasePath(u.addLocale(M,e,null==F?void 0:F.defaultLocale))}return R?s.default.cloneElement(r,K):s.default.createElement("a",Object.assign({},k,K),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,l=c||!s,[u,d]=r.useState(!1),f=r.useRef(null),h=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(s){if(l||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:s,elements:i},a.push(n),o.set(n,t),t}(n);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=i.requestIdleCallback(()=>d(!0));return()=>i.cancelIdleCallback(e)}},[l,n,t,u,f.current]);let m=r.useCallback(()=>{d(!1)},[]);return[h,u,m]};var r=n(7294),i=n(29);let s="function"==typeof IntersectionObserver,o=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9578:function(e,t,n){var r=n(4155);n(2350);var i=n(7294),s=i&&"object"==typeof i&&"default"in i?i:{default:i};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=void 0!==r&&r.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,s=void 0===i?a:i;u(c(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},f={};function h(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return f[r]||(f[r]="jsx-"+d(e+"-"+n)),f[r]}function m(e,t){var n=e+t;return f[n]||(f[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=s,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=h(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return m(i,e)}):[m(i,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=i.createContext(null);v.displayName="StyleSheetContext";var _=s.default.useInsertionEffect||s.default.useLayoutEffect,y=new p;function b(e){var t=y||i.useContext(v);return t&&_(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}b.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=b},6465:function(e,t,n){"use strict";e.exports=n(9578).style},3884:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(7294);n(9115);var s=n(9008),o=n.n(s),a=n(6465),c=n.n(a),l=n(1163),u=n(1576),d=n.n(u);let f=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)");t(e.matches);let n=e=>{t(e.matches)};return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}},[]),(0,i.useEffect)(()=>{let t=document.documentElement;e||null===e?t.classList.add("dark"):t.classList.remove("dark")},[e]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"Icon ".concat(d().Icon),onClick:function(){t(e=>!e)},children:e?"":""})})};var h=n(1664),m=n.n(h);let p=e=>{let{ServiceLogo:t,Title:n,Goto:s,Icon:o,GotoIcon:a,...u}=e;(0,i.useEffect)(()=>{function e(){let e=document.documentElement.scrollTop,t=document.querySelector(".Header");e>24?null==t||t.classList.add("Fix"):null==t||t.classList.remove("Fix")}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let h=(0,l.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:d().SemiHeader}),(0,r.jsxs)("div",{...u,className:"jsx-5cefeb0e709f9477 "+(u&&null!=u.className&&u.className||"".concat(d().Header," Header")),children:[(0,r.jsxs)("div",{className:"jsx-5cefeb0e709f9477 "+(d().Container||""),children:[(0,r.jsx)("div",{className:"jsx-5cefeb0e709f9477 "+(d().HeaderLeft||""),children:(0,r.jsx)(m(),{href:"/",children:(0,r.jsx)("div",{className:"jsx-5cefeb0e709f9477 "+"Icon ".concat(d().ServiceLogo," ").concat(t)})})}),(0,r.jsx)("div",{className:"jsx-5cefeb0e709f9477 "+(d().HeaderMid||""),children:n.map((e,t)=>(0,r.jsx)(m(),{href:s[t],passHref:!0,children:(0,r.jsx)("div",{className:"jsx-5cefeb0e709f9477 "+"".concat(d().Title," ").concat(h.pathname===s[t]?"active":void 0),children:e})},t))}),(0,r.jsxs)("div",{className:"jsx-5cefeb0e709f9477 "+(d().HeaderRight||""),children:[(0,r.jsx)(f,{}),(0,r.jsx)(m(),{href:"/menu",children:(0,r.jsx)("div",{className:"jsx-5cefeb0e709f9477 "+"Icon ".concat(d().Icon),children:""})})]})]}),(0,r.jsx)(c(),{id:"5cefeb0e709f9477",children:".Fix.jsx-5cefeb0e709f9477{top:0;border-bottom:1px solid var(--border2-color)}.active.jsx-5cefeb0e709f9477{font-weight:600;opacity:1}"})]})]})};var v=n(2653),_=n.n(v),y=n(7443);let b=e=>{let{Sub:t,Icon:n,Title:i,Goto:s,SubIcon:o,SubTitle:a,SubGoto:u,...d}=e,f=(0,l.useRouter)();return(0,r.jsxs)("div",{...d,className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(d&&null!=d.className&&d.className||_().SideBar||""),children:[(0,r.jsxs)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(_().Top||""),children:[(0,r.jsx)(y.Z,{Title:"디벨로이드"}),(0,r.jsxs)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(_().GroupItem||""),children:[n.map((e,t)=>(0,r.jsx)(m(),{href:s[t],passHref:!0,children:(0,r.jsxs)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+"".concat(_().Item," ").concat(f.pathname===s[t]?"active":void 0),children:[(0,r.jsx)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+"Icon ".concat(_().Icon),children:e}),(0,r.jsx)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(_().Title||""),children:i[t]})]})},e)),(0,r.jsx)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(_().SubTitle||""),children:t}),(0,r.jsx)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(_().GroupItem||""),children:o.map((e,t)=>(0,r.jsx)(m(),{href:u[t],passHref:!0,children:(0,r.jsxs)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+"".concat(_().Item," ").concat(f.pathname===u[t]?"active":void 0),children:[(0,r.jsx)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+"Icon ".concat(_().Icon),children:e}),(0,r.jsx)("div",{className:c().dynamic([["961dac3b606a140c",[_().Icon]]])+" "+(_().Title||""),children:a[t]})]})},e))})]})]}),(0,r.jsx)(c(),{id:"961dac3b606a140c",dynamic:[_().Icon],children:'.active.__jsx-style-dynamic-selector{-webkit-font-feature-settings:"ss09"on;-moz-font-feature-settings:"ss09"on;font-feature-settings:"ss09"on;background:var(--item-active-color);opacity:1}.active.__jsx-style-dynamic-selector .'.concat(_().Icon,'.__jsx-style-dynamic-selector{-webkit-font-feature-settings:"ss09"on;-moz-font-feature-settings:"ss09"on;font-feature-settings:"ss09"on}')})]})};var g=n(2938),x=n.n(g);let S=e=>{let{Icon:t,Title:n,Goto:i,...s}=e,o=(0,l.useRouter)();return(0,r.jsxs)("div",{...s,className:c().dynamic([["fa8bbcdb6a7b18d4",[x().Icon]]])+" "+(s&&null!=s.className&&s.className||x().TabBar||""),children:[t.map((e,t)=>(0,r.jsx)("div",{className:c().dynamic([["fa8bbcdb6a7b18d4",[x().Icon]]])+" "+(x().GroupItem||""),children:(0,r.jsx)(m(),{href:i[t],passHref:!0,children:(0,r.jsxs)("div",{className:c().dynamic([["fa8bbcdb6a7b18d4",[x().Icon]]])+" "+"".concat(x().Item," ").concat(o.pathname===i[t]?"active":void 0),children:[(0,r.jsx)("div",{className:c().dynamic([["fa8bbcdb6a7b18d4",[x().Icon]]])+" "+"Icon ".concat(x().Icon),children:e}),(0,r.jsx)("div",{className:c().dynamic([["fa8bbcdb6a7b18d4",[x().Icon]]])+" "+(x().Title||""),children:n[t]})]})})},t)),(0,r.jsx)(c(),{id:"fa8bbcdb6a7b18d4",dynamic:[x().Icon],children:".active.__jsx-style-dynamic-selector{opacity:1}.active.__jsx-style-dynamic-selector .".concat(x().Icon,'.__jsx-style-dynamic-selector{-webkit-font-feature-settings:"ss09"on;-moz-font-feature-settings:"ss09"on;font-feature-settings:"ss09"on}')})]})};function j(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"디벨로이드"}),(0,r.jsx)("meta",{name:"description",content:""}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/favicon_512.png"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(p,{ServiceLogo:"iLogo",Title:["COMMUNITY","GUIDE","EVENT","SUPPORT"],Goto:["https://develoid.net","https://develoid.github.io","https://cafe.naver.com/develoid/menu/604","/support"],Icon:"",GotoIcon:""}),(0,r.jsx)(b,{Sub:"기타",Icon:["","","","",""],Title:["홈","커뮤니티","가이드","이벤트","서포트"],Goto:["/","https://develoid.net","https://develoid.github.io","https://cafe.naver.com/develoid/menu/604","/support"],SubIcon:["","",""],SubTitle:["브랜드 아이덴티티","제휴 맺기","전체"],SubGoto:["/brand","https://docs.google.com/forms/d/e/1FAIpQLSeB6dvSsHVPy69geM4y6rmTGzTqTaM3rmF6UCIocrnvQWLQMw/viewform","/menu"]}),(0,r.jsx)(S,{Icon:["","","","",""],Title:["홈","커뮤니티","가이드","서포트","메뉴"],Goto:["/","https://develoid.net","https://develoid.github.io","/support","/menu"]}),(0,r.jsx)("div",{className:"Parent",children:(0,r.jsx)("div",{className:"System",children:(0,r.jsx)(t,{...n})})})]})]})}},7443:function(e,t,n){"use strict";var r=n(5893),i=n(6465),s=n.n(i);n(7294);let o=e=>{let{Title:t,...n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{...n,className:"jsx-3522af6cbaf6d663 "+(n&&null!=n.className&&n.className||"LargeTitle"),children:t}),(0,r.jsx)(s(),{id:"3522af6cbaf6d663",children:".LargeTitle.jsx-3522af6cbaf6d663{font-size:4.8rem;font-weight:700;letter-spacing:-.5pt;line-height:1.4;margin-bottom:1.5rem;-webkit-transition:var(--transition-bg);-moz-transition:var(--transition-bg);-o-transition:var(--transition-bg);transition:var(--transition-bg)}@media(max-width:1279.98px){.LargeTitle.jsx-3522af6cbaf6d663{margin-bottom:4rem;font-size:3.4rem;line-height:1}}@media(max-width:767.98px){.LargeTitle.jsx-3522af6cbaf6d663{margin-bottom:1rem}}"})]})};t.Z=o},9115:function(){},1576:function(e){e.exports={Header:"Header_Header__uikk_",Container:"Header_Container__XJgKT",ServiceLogo:"Header_ServiceLogo__KfSGI",Icon:"Header_Icon__ltx7v",HeaderLeft:"Header_HeaderLeft__5lk_0",HeaderMid:"Header_HeaderMid__8D8lS",Title:"Header_Title___csX_",HeaderRight:"Header_HeaderRight__OuDbH",SemiHeader:"Header_SemiHeader__6ar6h"}},2653:function(e){e.exports={SideBar:"SideBar_SideBar__0E0n8",Top:"SideBar_Top__mijdk",GroupItem:"SideBar_GroupItem__OO13c",Item:"SideBar_Item__rWz7q",Icon:"SideBar_Icon__lUzT9",Title:"SideBar_Title__FYmsC",SubTitle:"SideBar_SubTitle__5kpNx"}},2938:function(e){e.exports={TabBar:"TabBar_TabBar__oyJHx",GroupItem:"TabBar_GroupItem__t9db6",Item:"TabBar_Item__bMMpA",Icon:"TabBar_Icon__ckYh6",Title:"TabBar_Title__qIdfs"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)},4155:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c=[],l=!1,u=-1;function d(){l&&r&&(l=!1,r.length?c=r.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(r=c,c=[];++u<t;)r&&r[u].run();u=-1,t=c.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);