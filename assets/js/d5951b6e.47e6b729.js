"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5531],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),h=n,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n=a(79443);var o=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),p="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(e){var t,a=e.lazy,n=e.block,s=e.defaultValue,u=e.values,c=e.groupId,m=e.className,h=r.Children.toArray(e.children),d=null!=u?u:h.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),y=f.tabGroupChoices,w=f.setTabGroupChoices,b=(0,r.useState)(g),v=b[0],k=b[1],N=[];if(null!=c){var P=y[c];null!=P&&P!==v&&d.some((function(e){return e.value===P}))&&k(P)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),r=d[a].value;k(r),null!=c&&(w(c,r),setTimeout((function(){var e,a,r,n,o,i,p,s;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,o=e.right,i=window,p=i.innerHeight,s=i.innerWidth,a>=0&&o<=s&&n<=p&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case"ArrowLeft":var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",p,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,r.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},47851:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(55064),p=a(58215),l=["components"],s={title:"Puppet Provider: Gitter",sidebar_label:"Gitter"},u=void 0,c={unversionedId:"puppet-providers/gitter",id:"puppet-providers/gitter",isDocsHomePage:!1,title:"Puppet Provider: Gitter",description:"Wechaty Puppet Gitter",source:"@site/docs/puppet-providers/gitter.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/gitter",permalink:"/docs/puppet-providers/gitter",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/gitter.md",tags:[],version:"current",lastUpdatedBy:"Soumi Bardhan",lastUpdatedAt:1627120521,formattedLastUpdatedAt:"7/24/2021",frontMatter:{title:"Puppet Provider: Gitter",sidebar_label:"Gitter"},sidebar:"docs",previous:{title:"Official Account",permalink:"/docs/puppet-providers/official-account"},next:{title:"Lark",permalink:"/docs/puppet-providers/lark"}},m=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Use Case",id:"use-case",children:[]},{value:"Upload Image with Gitter API",id:"upload-image-with-gitter-api",children:[{value:"Raw API Call",id:"raw-api-call",children:[]}]},{value:"Roadmap",id:"roadmap",children:[]},{value:"Important Links",id:"important-links",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],h={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"gitter"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Gitter-blueviolet",alt:"Wechaty Puppet Gitter"}))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/HEAD/docs/images/wechaty-puppet-gitter.png",alt:"Wechaty Puppet Gitter"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-gitter"},(0,o.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-gitter.svg",alt:"NPM Version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-gitter?activeTab=versions"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-gitter/next.svg",alt:"npm (tag)"}))),(0,o.kt)("p",null,"Gitter support for wechaty makes it easy to build a chatbot on Gitter.im, and sync the room between the Gitter.im and WeChat! This will be useful to you if you want to connect your Gitter room to WeChat room and sync messages between them."),(0,o.kt)("p",null,"To support Gitter.im, the core component is the NPM module wechaty-puppet-gitter, which brings the power of Gitter.im to Wechaty."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send & receive messages"),(0,o.kt)("li",{parentName:"ol"},"Message type support: TEXT & IMAGE")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,o.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,o.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nset WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n")))),(0,o.kt)("p",null,"To get to know the details about how it works, please feel free to read the source code of our chatbot, it has been open-sourced ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/friday/"},"here"),", and here are some entries that good to start with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/bots/gitter/bot.ts#L14-L21"},"Create a Wechaty instance with Gitter Puppet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/friday/bot.ts#L23-L26"},"Create a Wechaty instance with Donut Puppet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/cross-puppet.ts#L38-L81"},"Sync Gitter Room and WeChat Room Messages"))),(0,o.kt)("h2",{id:"use-case"},"Use Case"),(0,o.kt)("p",null,"You may have a Gitter room wechaty/wechaty, with a SideCar on the wechaty website wechaty.js.org. At the same time, most of wechaty developers are based on WeChat, so you may want to sync the messages between them. With wechaty-puppet-gitter, you can do so easily. This is what happens :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The gitter room wechaty/wechaty will receive all messages that developers send to WeChat room (There are 10+ WeChat rooms, because WeChat do not permit more than 500 users in one room and there are thousands of developers already), forwarded by the Gitter bot: Mike.BO"),(0,o.kt)("li",{parentName:"ul"},"The rooms on WeChat will receive all the messages that developers send to the Gitter room too, forwarded by the WeChat bot: Friday.BOT."),(0,o.kt)("li",{parentName:"ul"},"In order to sync two rooms, we need to create two Wechaty instances, one is using Gitter Puppet and the other is using Donut Puppet(PC Windows Protocol for WeChat).")),(0,o.kt)("h2",{id:"upload-image-with-gitter-api"},"Upload Image with Gitter API"),(0,o.kt)("p",null,"Lets understand how to send an image to the gitter.im room via API."),(0,o.kt)("h3",{id:"raw-api-call"},"Raw API Call"),(0,o.kt)("p",null,"To send an image message to your Gitter room, three API calls are required:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate signature: Call api.gitter.im and get a key to use with transloadit service."),(0,o.kt)("li",{parentName:"ol"},"Get transloadit server: Call api2.transloadit.com with the key from step 1, then get a host domain name for using with step 3."),(0,o.kt)("li",{parentName:"ol"},"Upload file: Call the server domain name from step 2, and send the image file to it.")),(0,o.kt)("p",null,"Here\u2019s the demo source code for sending an image message to a Gitter room with Wechaty:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { Wechaty, FileBox } from 'wechaty'\n\nconst wechaty = new Wechaty({\n  puppet: 'wechaty-puppet-gitter',\n  puppetOptions: { token: 'your_gitter_token' },\n})\n\nasync function main () {\n  await wechaty.start()\n  const room = wechaty.Room.find({ topic: 'gitter/developers' })\n  if (room) {\n    const image = FileBox.fromUrl('https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/master/docs/images/wechaty-puppet-gitter.png')\n    await room.say(image)\n  }\n}\n\nmain().catch(console.error)\n")),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"roomList")," support"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"roomMembers")," support")),(0,o.kt)("h2",{id:"important-links"},"Important Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter"},"https://github.com/wechaty/wechaty-puppet-gitter")),(0,o.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter/issues"},"https://github.com/wechaty/wechaty-puppet-gitter/issues"))),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/"},"Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020"))),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0}}]);