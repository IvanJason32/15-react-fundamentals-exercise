/*! For license information please see 529.49b69566.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_kentcdodds_react_fundamentals=self.webpackChunk_kentcdodds_react_fundamentals||[]).push([[529],{4529:function(e,n,r){r.r(n);var t=r(3433),a=r(9439),i=r(4519),u=r(2556),l=[{id:"apple",value:"\ud83c\udf4e apple"},{id:"orange",value:"\ud83c\udf4a orange"},{id:"grape",value:"\ud83c\udf47 grape"},{id:"pear",value:"\ud83c\udf50 pear"}];n.default=function(){var e=i.useState(l),n=(0,a.Z)(e,2),r=n[0],o=n[1];return(0,u.jsxs)("div",{className:"keys",children:[(0,u.jsx)("button",{disabled:r.length>=l.length,onClick:function(){var e=r.map((function(e){return e.id}));o([].concat((0,t.Z)(r),[l.find((function(n){return!e.includes(n.id)}))]))},children:"add item"}),(0,u.jsx)("ul",{children:r.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("button",{onClick:function(){return function(e){o(r.filter((function(n){return n.id!==e.id})))}(e)},children:"remove"})," ",(0,u.jsx)("label",{htmlFor:"".concat(e.id,"-input"),children:e.value})," ",(0,u.jsx)("input",{id:"".concat(e.id,"-input"),defaultValue:e.value})]},e.id)}))})]})}},3238:function(e,n,r){var t=r(4519),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,i={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)u.call(n,t)&&!o.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},2556:function(e,n,r){e.exports=r(3238)}}]);
//# sourceMappingURL=529.49b69566.chunk.js.map