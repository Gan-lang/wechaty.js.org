"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1662],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(79443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),c="tabItem_1uMI",s="tabItemActive_2DSg";var i=function(e){var t,n=e.lazy,o=e.block,i=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=i?i:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),b=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,a.useState)(y),k=h[0],T=h[1],w=[];if(null!=p){var N=b[p];null!=N&&N!==k&&f.some((function(e){return e.value===N}))&&T(N)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;T(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,o,l,r,c,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,l=e.right,r=window,c=r.innerHeight,i=r.innerWidth,n>=0&&l<=i&&o<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},46433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=n(55064),c=n(58215),s=["components"],i={title:"Managing contacts"},u=void 0,p={unversionedId:"howto/contact",id:"howto/contact",isDocsHomePage:!1,title:"Managing contacts",description:"List all contacts",source:"@site/docs/howto/contact.md",sourceDirName:"howto",slug:"/howto/contact",permalink:"/docs/howto/contact",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/contact.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616596436,formattedLastUpdatedAt:"3/24/2021",frontMatter:{title:"Managing contacts"},sidebar:"docs",previous:{title:"Dealing with message",permalink:"/docs/howto/message"},next:{title:"Managing rooms",permalink:"/docs/howto/room"}},m=[{value:"List all contacts",id:"list-all-contacts",children:[]},{value:"Search in contacts",id:"search-in-contacts",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"list-all-contacts"},"List all contacts"),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n\n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,l.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n    \n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,l.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),(0,l.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,l.kt)("h2",{id:"search-in-contacts"},"Search in contacts"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Contact.find")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Contact.findAll")," supports search by ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"alias"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"weixin"),"."),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,l.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"async function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,l.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),(0,l.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}f.isMDXComponent=!0}}]);