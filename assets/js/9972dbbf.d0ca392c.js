"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8226],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return f}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(a),f=o,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||r;return a?n.createElement(g,l(l({ref:t},i),{},{components:a})):n.createElement(g,l({ref:t},i))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),o=a(79443);var r=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),s="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,o=e.block,u=e.defaultValue,i=e.values,m=e.groupId,p=e.className,f=n.Children.toArray(e.children),g=null!=i?i:f.map((function(e){return{value:e.props.value,label:e.props.label}})),d=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),y=v.tabGroupChoices,b=v.setTabGroupChoices,h=(0,n.useState)(d),k=h[0],w=h[1],T=[];if(null!=m){var O=y[m];null!=O&&O!==k&&g.some((function(e){return e.value===O}))&&w(O)}var N=function(e){var t=e.currentTarget,a=T.indexOf(t),n=g[a].value;w(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,o,r,l,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,l=window,s=l.innerHeight,u=l.innerWidth,a>=0&&r<=u&&o<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.target)+1;a=T[n]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.target)-1;a=T[o]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},p)},g.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:N,onClick:N},null!=a?a:t)}))),a?(0,n.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},12593:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(55064),s=a(58215),c=["components"],u={title:"Dealing with message"},i=void 0,m={unversionedId:"howto/message",id:"howto/message",isDocsHomePage:!1,title:"Dealing with message",description:"Mention",source:"@site/docs/howto/message.md",sourceDirName:"howto",slug:"/howto/message",permalink:"/docs/howto/message",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/message.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"9/16/2021",frontMatter:{title:"Dealing with message"},sidebar:"docs",previous:{title:"Add events and customise a bot",permalink:"/docs/howto/event"},next:{title:"Managing contacts",permalink:"/docs/howto/contact"}},p=[{value:"Mention",id:"mention",children:[]},{value:"Self message",id:"self-message",children:[]}],f={toc:p};function g(e){var t=e.components,a=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mention"},"Mention"),(0,r.kt)("p",null,"Only a message in the room can mention(@) others."),(0,r.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Message }  from 'wechaty'\n\nasync function onMessage(message) {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,r.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,r.kt)("h2",{id:"self-message"},"Self message"),(0,r.kt)(l.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Message }  from 'wechaty'\n\nasync function onMessage(message) {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,r.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}g.isMDXComponent=!0}}]);