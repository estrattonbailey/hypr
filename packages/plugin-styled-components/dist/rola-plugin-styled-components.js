var e,t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e,n=require("styled-components"),r=new Map;module.exports=function(e){return void 0===e&&(e={}),{createDocument:function(e){},createRoot:function(e){var a=e.root,o=e.context,u=new n.ServerStyleSheet;return r.set(o.pathname,u),function(e){return t.createElement(n.StyleSheetManager,{sheet:u.instance},a)}},postRender:function(e){var t=e.context,n=r.get(t.pathname);if(!n)return{};var a=n.getStyleTags();return n.seal(),r.delete(t.pathname),{style:a}}}};
//# sourceMappingURL=rola-plugin-styled-components.js.map
