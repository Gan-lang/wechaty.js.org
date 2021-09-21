"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[2976],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?a.createElement(h,p(p({ref:t},c),{},{components:r})):a.createElement(h,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var i=2;i<l;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(67294),n=r(79443);var l=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=r(86010),o="tabItem_1uMI",u="tabItemActive_2DSg";var i=function(e){var t,r=e.lazy,n=e.block,i=e.defaultValue,c=e.values,s=e.groupId,d=e.className,m=a.Children.toArray(e.children),h=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=i?i:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=l(),v=k.tabGroupChoices,y=k.setTabGroupChoices,b=(0,a.useState)(f),g=b[0],w=b[1],P=[];if(null!=s){var N=v[s];null!=N&&N!==g&&h.some((function(e){return e.value===N}))&&w(N)}var O=function(e){var t=e.currentTarget,r=P.indexOf(t),a=h[r].value;w(a),null!=s&&(y(s,a),setTimeout((function(){var e,r,a,n,l,p,o,i;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,l=e.right,p=window,o=p.innerHeight,i=p.innerWidth,r>=0&&l<=i&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.target)+1;r=P[a]||P[0];break;case"ArrowLeft":var n=P.indexOf(e.target)-1;r=P[n]||P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":n},d)},h.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,p.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=r?r:t)}))),r?(0,a.cloneElement)(m.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},58595:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),p=r(55064),o=r(58215),u=["components"],i={title:"Puppet Provider: Lark",sidebar_label:"Lark"},c=void 0,s={unversionedId:"puppet-providers/lark",id:"puppet-providers/lark",isDocsHomePage:!1,title:"Puppet Provider: Lark",description:"Wechaty Puppet Lark",source:"@site/docs/puppet-providers/lark.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/lark",permalink:"/docs/puppet-providers/lark",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/lark.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616040042,formattedLastUpdatedAt:"3/18/2021",frontMatter:{title:"Puppet Provider: Lark",sidebar_label:"Lark"},sidebar:"docs",previous:{title:"Gitter",permalink:"/docs/puppet-providers/gitter"},next:{title:"PadLocal",permalink:"/docs/puppet-providers/padlocal"}},d=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],m={toc:d};function h(e){var t=e.components,r=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"lark"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Lark-blueviolet",alt:"Wechaty Puppet Lark"}))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-lark/HEAD/docs/images/wechaty-puppet-lark.png",alt:"Wechaty Puppet Lark"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-lark"},(0,l.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-lark.svg",alt:"NPM Version"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-lark?activeTab=versions"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-lark/next.svg",alt:"npm (tag)"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Repo: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-lark"},"https://github.com/wechaty/wechaty-puppet-lark")),(0,l.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-lark/issues"},"https://github.com/wechaty/wechaty-puppet-lark/issues"))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Send & receive messages")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(p.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nset WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n")))),(0,l.kt)("h2",{id:"roadmap"},"Roadmap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to be added")),(0,l.kt)("h2",{id:"history"},"History"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/"},"\u57fa\u4e8e\u5f00\u653e API \u5c01\u88c5 Wechaty \u63a5\u53e3\u4e0b\u7684\u98de\u4e66\u804a\u5929\u673a\u5668\u4eba, \u8303\u854a, Sep 30, 2020"))),(0,l.kt)("h2",{id:"maintainers"},"Maintainers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/roxanne718"},"@Roxanne718"))))}h.isMDXComponent=!0}}]);