(self.webpackChunk_kentcdodds_react_fundamentals=self.webpackChunk_kentcdodds_react_fundamentals||[]).push([[309],{211:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=211,e.exports=t},9309:function(e,t,n){"use strict";n.r(t),n.d(t,{install:function(){return H}});var o=n(3433),r=n(7762),i=n(9439),a=n(899),l=n(4519),u=n(4453),s=n(9402),c=n(8023),d=n(900),f=n(6749),p=function(e){var t=e.children,n=e.type,o=void 0===n?"reach-portal":n,r=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,f.NW)();return(0,f.LI)((function(){if(r.current){var e=r.current.ownerDocument;return i.current=null==e?void 0:e.createElement(o),e.body.appendChild(i.current),a(),function(){i.current&&i.current.ownerDocument&&i.current.ownerDocument.body.removeChild(i.current)}}}),[o,a]),i.current?(0,u.createPortal)(t,i.current):(0,l.createElement)("span",{ref:r})};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v.apply(this,arguments)}var m=(0,l.forwardRef)((function(e,t){var n=e.as,o=void 0===n?"span":n,r=e.style,i=void 0===r?{}:r,a=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["as","style"]);return(0,l.createElement)(o,v({ref:t,style:v({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},i)},a))}));var g,b=["bottom","height","left","right","top","width"],h=new Map,w=function e(){var t=[];h.forEach((function(e,n){var o,r,i=n.getBoundingClientRect();o=i,r=e.rect,void 0===o&&(o={}),void 0===r&&(r={}),b.some((function(e){return o[e]!==r[e]}))&&(e.rect=i,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),g=window.requestAnimationFrame(e)};var y=function(e,t){return{observe:function(){var n=0===h.size;h.has(e)?h.get(e).callbacks.push(t):h.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),n&&w()},unobserve:function(){var n=h.get(e);if(n){var o=n.callbacks.indexOf(t);o>=0&&n.callbacks.splice(o,1),n.callbacks.length||h.delete(e),h.size||cancelAnimationFrame(g)}}}};function E(e,t,n){var o,r,i;(0,f.jn)(t)?o=t:(o=null==(i=null==t?void 0:t.observe)||i,r=null==t?void 0:t.onChange);(0,f.mf)(n)&&(r=n);var a=(0,l.useState)(e.current),u=a[0],s=a[1],c=(0,l.useRef)(!1),d=(0,l.useRef)(!1),p=(0,l.useState)(null),v=p[0],m=p[1],g=(0,l.useRef)(r),b=(0,l.useCallback)((function(e){g.current&&g.current(e)}),[]);return(0,f.LI)((function(){g.current=r,e.current!==u&&s(e.current)})),(0,f.LI)((function(){u&&!c.current&&(c.current=!0,m(u.getBoundingClientRect()))}),[u]),(0,f.LI)((function(){var t,n=u;return d.current||(d.current=!0,n=e.current),n?(t=y(n,(function(e){b(e),m(e)})),o&&t.observe(),r):r;function r(){t&&t.unobserve()}}),[o,u,e,b]),v}var M,Z,x,L,T,S;function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var _,R;!function(e){e.Idle="IDLE",e.Focused="FOCUSED",e.Visible="VISIBLE",e.LeavingVisible="LEAVING_VISIBLE",e.Dismissed="DISMISSED"}(_||(_={})),function(e){e.Blur="BLUR",e.Focus="FOCUS",e.GlobalMouseMove="GLOBAL_MOUSE_MOVE",e.MouseDown="MOUSE_DOWN",e.MouseEnter="MOUSE_ENTER",e.MouseLeave="MOUSE_LEAVE",e.MouseMove="MOUSE_MOVE",e.Rest="REST",e.SelectWithKeyboard="SELECT_WITH_KEYBOARD",e.TimeComplete="TIME_COMPLETE"}(R||(R={}));var C,I,O={initial:_.Idle,states:(S={},S[_.Idle]={enter:P,on:(M={},M[R.MouseEnter]=_.Focused,M[R.Focus]=_.Visible,M)},S[_.Focused]={enter:function(){window.clearTimeout(C),C=window.setTimeout((function(){W({type:R.Rest})}),100)},leave:function(){window.clearTimeout(C)},on:(Z={},Z[R.MouseMove]=_.Focused,Z[R.MouseLeave]=_.Idle,Z[R.MouseDown]=_.Dismissed,Z[R.Blur]=_.Idle,Z[R.Rest]=_.Visible,Z)},S[_.Visible]={on:(x={},x[R.Focus]=_.Focused,x[R.MouseEnter]=_.Focused,x[R.MouseLeave]=_.LeavingVisible,x[R.Blur]=_.LeavingVisible,x[R.MouseDown]=_.Dismissed,x[R.SelectWithKeyboard]=_.Dismissed,x[R.GlobalMouseMove]=_.LeavingVisible,x)},S[_.LeavingVisible]={enter:function(){window.clearTimeout(I),I=window.setTimeout((function(){return W({type:R.TimeComplete})}),500)},leave:function(){window.clearTimeout(I),P()},on:(L={},L[R.MouseEnter]=_.Visible,L[R.Focus]=_.Visible,L[R.TimeComplete]=_.Idle,L)},S[_.Dismissed]={leave:function(){P()},on:(T={},T[R.MouseLeave]=_.Idle,T[R.Blur]=_.Idle,T)},S)},V={value:O.initial,context:{id:null}},F=[];function P(){V.context.id=null}function B(e){var t=void 0===e?{}:e,n=t.id,o=t.onPointerEnter,r=t.onPointerMove,i=t.onPointerLeave,a=t.onPointerDown,u=t.onMouseEnter,s=t.onMouseMove,c=t.onMouseLeave,p=t.onMouseDown,v=t.onFocus,m=t.onBlur,g=t.onKeyDown,b=t.disabled,h=t.ref,w=t.DEBUG_STYLE,y=String((0,d.M)(n)),M=(0,l.useState)(!!w||j(y,!0)),Z=M[0],x=M[1],L=(0,l.useRef)(null),T=(0,f.A7)(h,L),S=E(L,{observe:Z});function D(e,t){return"undefined"!==typeof window&&"PointerEvent"in window?e:(0,f.ag)(e,t)}function k(e){return function(t){"mouse"===t.pointerType&&e(t)}}function C(){W({type:R.MouseEnter,id:y})}function I(){W({type:R.MouseMove,id:y})}function O(){W({type:R.MouseLeave})}function P(){V.context.id===y&&W({type:R.MouseDown})}return(0,l.useEffect)((function(){return e=function(){x(j(y))},F.push(e),function(){F.splice(F.indexOf(e),1)};var e}),[y]),(0,f.kG)("tooltip"),(0,l.useEffect)((function(){var e=(0,f.r3)(L.current);function t(e){"Escape"!==e.key&&"Esc"!==e.key||V.value!==_.Visible||W({type:R.SelectWithKeyboard})}return e.addEventListener("keydown",t),function(){return e.removeEventListener("keydown",t)}}),[]),function(e){var t=e.disabled,n=e.isVisible,o=e.ref;(0,l.useEffect)((function(){if("undefined"!==typeof window&&"PointerEvent"in window&&t&&n){var e=(0,f.r3)(o.current);return e.addEventListener("mousemove",r),function(){e.removeEventListener("mousemove",r)}}function r(e){n&&(e.target instanceof Element&&e.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']")||W({type:R.GlobalMouseMove}))}}),[t,n])}({disabled:b,isVisible:Z,ref:L}),[{"aria-describedby":Z?(0,f.qR)("tooltip",y):void 0,"data-state":Z?"tooltip-visible":"tooltip-hidden","data-reach-tooltip-trigger":"",ref:T,onPointerEnter:(0,f.ag)(o,k(C)),onPointerMove:(0,f.ag)(r,k(I)),onPointerLeave:(0,f.ag)(i,k(O)),onPointerDown:(0,f.ag)(a,k(P)),onMouseEnter:D(u,C),onMouseMove:D(s,I),onMouseLeave:D(c,O),onMouseDown:D(p,P),onFocus:(0,f.ag)(v,(function(){window.__REACH_DISABLE_TOOLTIPS||W({type:R.Focus,id:y})})),onBlur:(0,f.ag)(m,(function(){V.context.id===y&&W({type:R.Blur})})),onKeyDown:(0,f.ag)(g,(function(e){"Enter"!==e.key&&" "!==e.key||W({type:R.SelectWithKeyboard})}))},{id:y,triggerRect:S,isVisible:Z},Z]}var q=(0,f.yV)((function(e,t){var n=e.children,o=e.label,r=e.ariaLabel,i=e.id,a=e.DEBUG_STYLE,u=k(e,["children","label","ariaLabel","id","DEBUG_STYLE"]),s=l.Children.only(n),c=B({id:i,onPointerEnter:s.props.onPointerEnter,onPointerMove:s.props.onPointerMove,onPointerLeave:s.props.onPointerLeave,onPointerDown:s.props.onPointerDown,onMouseEnter:s.props.onMouseEnter,onMouseMove:s.props.onMouseMove,onMouseLeave:s.props.onMouseLeave,onMouseDown:s.props.onMouseDown,onFocus:s.props.onFocus,onBlur:s.props.onBlur,onKeyDown:s.props.onKeyDown,disabled:s.props.disabled,ref:s.ref,DEBUG_STYLE:a}),d=c[0],f=c[1];return(0,l.createElement)(l.Fragment,null,(0,l.cloneElement)(s,d),(0,l.createElement)(N,D({ref:t,label:o,"aria-label":r},f,u)))}));var N=(0,f.yV)((function(e,t){var n=e.label,o=e.ariaLabel,r=e.isVisible,i=e.id,a=k(e,["label","ariaLabel","isVisible","id"]);return r?(0,l.createElement)(p,null,(0,l.createElement)(U,D({ref:t,label:n,"aria-label":o,isVisible:r},a,{id:(0,f.qR)("tooltip",String(i))}))):null}));var U=(0,f.yV)((function(e,t){var n=e.ariaLabel,o=e["aria-label"],r=e.as,i=void 0===r?"div":r,a=e.id,u=e.isVisible,s=e.label,c=e.position,d=void 0===c?G:c,p=e.style,v=e.triggerRect,g=k(e,["ariaLabel","aria-label","as","id","isVisible","label","position","style","triggerRect"]),b=null!=(o||n),h=(0,l.useRef)(null),w=(0,f.A7)(t,h),y=E(h,{observe:u});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i,D({role:b?void 0:"tooltip"},g,{ref:w,"data-reach-tooltip":"",id:b?void 0:a,style:D({},p,A(d,v,y))}),s),b&&(0,l.createElement)(m,{role:"tooltip",id:a},o||n))}));function A(e,t,n){return!n?{visibility:"hidden"}:e(t,n)}var G=function(e,t,n){void 0===n&&(n=8);var o=(0,f.ZY)(),r=o.width,i=o.height;if(!e||!t)return{};var a={top:e.top-t.height<0,right:r<e.left+t.width,bottom:i<e.bottom+t.height+n,left:e.left-t.width<0},l=a.bottom&&!a.top;return{left:a.right&&!a.left?e.right-t.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px",top:l?e.top-n-t.height+window.pageYOffset+"px":e.top+n+e.height+window.pageYOffset+"px"}};function W(e){var t=function(e,t){var n=O.states[e.value],o=n&&n.on&&n.on[t.type];if(!o)return D({},e,{changed:!1});n&&n.leave&&n.leave(e.context,t);t.type;var r=k(t,["type"]),i=D({},V.context,r),a="string"===typeof o?o:o.target,l=O.states[a];l&&l.enter&&l.enter(e.context,t);return{value:a,context:i,changed:!0}}(V,e),n=t.value,o=t.context;t.changed&&(V={value:n,context:o},F.forEach((function(e){return e(V)})))}function j(e,t){return V.context.id===e&&(t?V.value===_.Visible:V.value===_.Visible||V.value===_.LeavingVisible)}var K=n(1787),z="#3f51b5",Y=function(e){return"__react_workshop_app_".concat(e,"__")};function H(){var e=n(211),t=e.keys()[0];function o(){var e=l.useRef(null),t=l.useState(!1),n=(0,i.Z)(t,2),o=n[0],u=n[1],s=re(Y("devtools_persist"),!1),d=(0,i.Z)(s,2),f=d[0],p=d[1],v=re(Y("devtools_tab_index"),0),m=(0,i.Z)(v,2),g=m[0],b=m[1],h=f||o;return l.useEffect((function(){function t(t){var n,o;u(null!=(n=null==(o=e.current)?void 0:o.contains(t.target))&&n)}return document.addEventListener("mousemove",t),function(){document.removeEventListener("mousemove",t)}}),[]),l.useEffect((function(){if(o){for(var e=Array.from(document.querySelectorAll("iframe")),t=0,n=e;t<n.length;t++){n[t].style.pointerEvents="none"}return function(){var t,n=(0,r.Z)(e);try{for(n.s();!(t=n.n()).done;){t.value.style.pointerEvents=""}}catch(o){n.e(o)}finally{n.f()}}}}),[o]),(0,a.tZ)("div",{css:{position:"fixed",zIndex:20,bottom:-15,left:0,right:0,width:h?"100%":0,transition:"all 0.3s",label:{margin:0,color:"rgb(216, 221, 227)"},"input, select":{background:"rgb(20, 36, 55)",border:"2px solid rgb(28, 46, 68)",borderRadius:5,color:"white",fontWeight:600,padding:"5px","::placeholder":{color:"rgba(255,255,255,0.3)"},":focus":{outlineColor:z,borderColor:z,outline:"1px"}},button:{cursor:"pointer"},"button:not([data-reach-tab])":{borderRadius:5,background:z,":hover":{background:"#364495"},border:0,color:"#f1f2f7"},"[data-reach-tab]":{border:0,":focus":{outline:"none"}},"[data-reach-tab][data-selected]":{background:"rgb(11, 21, 33)",borderBottom:"3px solid white",marginBottom:-3}}},(0,a.tZ)("div",{ref:e,css:[{background:"rgb(11, 21, 33)",opacity:"0.6",color:"white",boxSizing:"content-box",height:"60px",width:"68px",transition:"all 0.3s",overflow:"auto"},h?{height:"50vh",width:"100%",opacity:"1"}:null]},(0,a.tZ)(q,{label:"Toggle Persist DevTools"},(0,a.tZ)("button",{css:{display:"flex",alignItems:"center",fontSize:"1.2rem",border:"none",padding:"10px 20px",background:"none",marginTop:h?-40:0,marginLeft:h?20:0,position:"absolute",backgroundColor:"rgb(11,21,33) !important",overflow:"hidden",svg:{width:20,marginRight:8,color:f?"white":"rgba(255,255,255,0.7)"},"::before":{content:'""',position:"absolute",height:4,width:"100%",left:0,top:0,background:f?"#ffc107":"transparent"}},onClick:function(){return p((function(e){return!e}))}},(0,a.tZ)(c.CP_,null),h?"Workshop DevTools":null)),h?(0,a.tZ)(K.mQ,{css:{padding:20},index:g,onChange:function(e){return b(e)}},(0,a.tZ)(K.td,{css:{marginBottom:20}},(0,a.tZ)(K.OK,null,"Controls"),(0,a.tZ)(K.OK,null,"Request Failures")),(0,a.tZ)("div",{css:{border:"1px solid rgb(28,46,68)",margin:"0px -20px 20px -20px"}}),(0,a.tZ)(K.nP,{css:{height:"100%"}},(0,a.tZ)(K.x4,null,(0,a.tZ)(J,null)),(0,a.tZ)(K.x4,null,(0,a.tZ)(ne,null)))):null),h?(0,a.tZ)(a.xB,{styles:{"#root":{marginBottom:"50vh"}}}):null)}t&&e(t),o.displayName="DevTools";var d=document.getElementById("dev-tools");d&&u.unmountComponentAtNode(d),d||((d=document.createElement("div")).id="dev-tools",document.body.appendChild(d)),(0,s.s)(d).render((0,a.tZ)(o,null))}function J(){return(0,a.tZ)("div",{css:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"repeat(auto-fill, minmax(40px, 40px) )",gridGap:"0.5rem",marginRight:"1.5rem"}},(0,a.tZ)($,null),(0,a.tZ)(Q,null),(0,a.tZ)(ee,null),(0,a.tZ)(te,null),(0,a.tZ)(X,null))}function X(){return(0,a.tZ)("button",{onClick:function(){for(var e=[],t=0;t<window.localStorage.length;t++){var n=window.localStorage.key(t);"string"===typeof n&&n.startsWith("__react_workshop_app")&&e.push(n)}for(var o=0,r=e;o<r.length;o++){var i=r[o];window.localStorage.removeItem(i)}window.location.assign(window.location.toString())}},"Purge Database")}function Q(){var e=re(Y("failure_rate"),0),t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,a.tZ)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},(0,a.tZ)("label",{htmlFor:"failureRate"},"Request Failure Percentage: "),(0,a.tZ)("input",{css:{marginLeft:6},value:100*n,type:"number",min:"0",max:"100",step:"10",onChange:function(e){return o(Number(e.currentTarget.value)/100)},id:"failureRate"}))}function $(){var e=re(Y("dev-tools"),!1),t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,a.tZ)("div",{css:{width:"100%",display:"flex",alignItems:"center"}},(0,a.tZ)("input",{css:{marginRight:6},checked:n,type:"checkbox",onChange:function(e){return o(e.currentTarget.checked)},id:"enableDevTools"}),(0,a.tZ)("label",{htmlFor:"enableDevTools"},"Enable DevTools by default"))}function ee(){var e=re(Y("min_request_time"),400),t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,a.tZ)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},(0,a.tZ)("label",{htmlFor:"minTime"},"Request min time (ms): "),(0,a.tZ)("input",{css:{marginLeft:6},value:n,type:"number",step:"100",min:"0",max:6e4,onChange:function(e){return o(Number(e.currentTarget.value))},id:"minTime"}))}function te(){var e=re(Y("variable_request_time"),400),t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,a.tZ)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},(0,a.tZ)("label",{htmlFor:"varTime"},"Request variable time (ms): "),(0,a.tZ)("input",{css:{marginLeft:6},value:n,type:"number",step:"100",min:"0",max:6e4,onChange:function(e){return o(Number(e.currentTarget.value))},id:"varTime"}))}function ne(){var e=re(Y("request_fail_config"),[]),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,a.tZ)("div",{css:{display:"flex",width:"100%"}},(0,a.tZ)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.requestMethod,i=t.urlMatch;r((function(e){return[].concat((0,o.Z)(e),[{requestMethod:n.value,urlMatch:i.value}])})),n.value="",i.value=""},css:{display:"grid",gridTemplateRows:"repeat(auto-fill, minmax(50px, 60px) )",maxWidth:300,width:"100%",marginRight:"1rem",gridGap:10}},(0,a.tZ)("div",{css:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}},(0,a.tZ)("label",{htmlFor:"requestMethod"},"Method:"),(0,a.tZ)("select",{id:"requestMethod",required:!0},(0,a.tZ)("option",{value:""},"Select"),(0,a.tZ)("option",{value:"ALL"},"ALL"),(0,a.tZ)("option",{value:"GET"},"GET"),(0,a.tZ)("option",{value:"POST"},"POST"),(0,a.tZ)("option",{value:"PUT"},"PUT"),(0,a.tZ)("option",{value:"DELETE"},"DELETE"))),(0,a.tZ)("div",{css:{width:"100%"}},(0,a.tZ)("label",{css:{display:"block"},htmlFor:"urlMatch"},"URL Match:"),(0,a.tZ)("input",{autoComplete:"off",css:{width:"100%",marginTop:4},id:"urlMatch",required:!0,placeholder:"/api/list-items/:listItemId"})),(0,a.tZ)("div",null,(0,a.tZ)("button",{css:{padding:"6px 16px"},type:"submit"},"+ Add"))),(0,a.tZ)("ul",{css:{listStyle:"none",margin:0,padding:0,width:"100%",paddingBottom:"2rem"}},n.map((function(e,t){var n=e.requestMethod,i=e.urlMatch;return(0,a.tZ)("li",{key:t,css:{padding:"6px 10px",borderRadius:5,margin:"5px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgb(20,36,55)"}},(0,a.tZ)("div",{css:{display:"flex",flexWrap:"wrap"}},(0,a.tZ)("strong",{css:{minWidth:70}},n,":"),(0,a.tZ)("span",{css:{marginLeft:10,whiteSpace:"pre"}},i)),(0,a.tZ)("button",{css:{opacity:.6,":hover":{opacity:1},fontSize:13,background:"rgb(11, 20, 33) !important"},onClick:function(){return function(e){r((function(t){return[].concat((0,o.Z)(t.slice(0,e)),(0,o.Z)(t.slice(e+1)))}))}(t)}},"Remove"))}))))}J.displayName="ControlsPanel",X.displayName="ClearLocalStorage",Q.displayName="FailureRate",$.displayName="EnableDevTools",ee.displayName="RequestMinTime",te.displayName="RequestVarTime",ne.displayName="RequestFailUI";var oe=function(e){var t=e.key,n=e.state,o=e.serialize;return"".concat(t,": ").concat(o(n))};function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.serialize,r=void 0===o?JSON.stringify:o,a=n.deserialize,u=void 0===a?JSON.parse:a,s=l.useState((function(){var n=window.localStorage.getItem(e);return n?u(n):t instanceof Function?t():t})),c=(0,i.Z)(s,2),d=c[0],f=c[1];l.useDebugValue({key:e,state:d,serialize:r},oe);var p=l.useRef(e);return l.useEffect((function(){var t=p.current;t!==e&&window.localStorage.removeItem(t),p.current=e,window.localStorage.setItem(e,r(d))}),[e,d,r]),[d,f]}}}]);
//# sourceMappingURL=309.1db85397.chunk.js.map