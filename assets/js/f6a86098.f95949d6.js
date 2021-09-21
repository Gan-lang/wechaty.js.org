"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9591],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=i(n),y=o,d=f["".concat(u,".").concat(y)]||f[y]||l[y]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],p={},u=void 0,i={unversionedId:"puppet-services/transclusions/token-gateway-unix",id:"puppet-services/transclusions/token-gateway-unix",isDocsHomePage:!1,title:"token-gateway-unix",description:"`sh",source:"@site/docs/puppet-services/transclusions/token-gateway-unix.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-unix",permalink:"/docs/puppet-services/transclusions/token-gateway-unix",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-services/transclusions/token-gateway-unix.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"6/18/2021",frontMatter:{}},s=[],l={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}f.isMDXComponent=!0}}]);