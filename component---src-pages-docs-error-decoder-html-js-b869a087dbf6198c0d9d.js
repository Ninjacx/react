webpackJsonp([53338925692345],{"./src/components/ErrorDecoder/ErrorDecoder.js":function(e,t,r){(function(o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var r=0;return e.replace(/%s/g,function(){var e=t[r++];return void 0===e?"[missing argument]":e})}function c(e){for(var t=/(https:\/\/fb\.me\/[a-z\-]+)/g,r=e.split(t),n=0;n<r.length;n++)n%2===1&&(r[n]=o.createElement("a",{key:n,target:"_blank",rel:"noopener",href:r[n]},r[n]));return r}function u(e){var t=e.search.substring(1);if(!t)return null;for(var r="",o=[],n=t.split("&"),s=0;s<n.length;s++){var a=decodeURIComponent(n[s]);0===a.indexOf("invariant=")?r=a.slice(10):0===a.indexOf("args[]=")&&o.push(a.slice(7))}return[r,o]}function d(e){var t=e.code,r=e.msg;return t?o.createElement("div",null,o.createElement("p",null,"The full text of the error you just encountered is:"),o.createElement("code",null,c(r))):o.createElement("p",null,"When you encounter an error, you'll receive a link to this page for that specific error and we'll show you the full error text.")}t.__esModule=!0;var p=r("./node_modules/react/index.js"),m=(n(p),r("./node_modules/prop-types/index.js")),f=n(m),b=function(e){function t(){s(this,t);for(var r=arguments.length,o=Array(r),n=0;n<r;n++)o[n]=arguments[n];var l=a(this,e.call.apply(e,[this].concat(o)));return l.state={code:null,errorMsg:""},l}return l(t,e),t.prototype.componentWillMount=function(){var e=this.props.errorCodesString,t=JSON.parse(e),r=u(this.props.location);if(null!=r){var o=r[0],n=r[1];t[o]&&this.setState({code:o,errorMsg:i(t[o],n)})}},t.prototype.render=function(){return o.createElement(d,{code:this.state.code,msg:this.state.errorMsg})},t}(p.Component);b.propTypes={errorCodesString:f.default.string.isRequired,location:f.default.object.isRequired},t.default=b,e.exports=t.default}).call(t,r("./node_modules/glamor/react.js"))},"./src/components/ErrorDecoder/index.js":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r("./src/components/ErrorDecoder/ErrorDecoder.js"),s=o(n);t.default=s.default,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/yubolun/Desktop/react/node_modules/babel-preset-react/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-preset-es2015/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-preset-stage-1/lib/index.js",["/Users/yubolun/Desktop/react/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/yubolun/Desktop/react/node_modules/babel-preset-stage-0/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/yubolun/Desktop/react/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/yubolun/Desktop/react/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"cacheDirectory":true}!./src/pages/docs/error-decoder.html.js':function(e,t,r){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=r("./src/components/Container/index.js"),s=o(n),a=r("./src/components/ErrorDecoder/index.js"),l=o(a),i=r("./src/components/Flex/index.js"),c=o(i),u=r("./node_modules/hex2rgba/index.js"),d=o(u),p=r("./src/components/MarkdownHeader/index.js"),m=o(p),f=r("./node_modules/react/index.js"),b=(o(f),r("./src/components/StickyResponsiveSidebar/index.js")),g=o(b),h=r("./src/components/TitleAndMetaTags/index.js"),y=o(h),j=r("./src/theme.js"),x=r("./src/utils/createLink.js"),_=r("./src/utils/findSectionForPath.js"),k=o(_),v=r("./src/utils/sectionList.js"),E=function(t){var r=t.data,o=t.location;return e.createElement(c.default,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},e.createElement(s.default,null,e.createElement("div",{css:j.sharedStyles.articleLayout.container},e.createElement(c.default,{type:"article",direction:"column",grow:"1",halign:"stretch",css:{minHeight:"calc(100vh - 40px)"}},e.createElement(m.default,{path:r.markdownRemark.fields.path,title:r.markdownRemark.frontmatter.title}),e.createElement(y.default,{title:"React - "+r.markdownRemark.frontmatter.title}),e.createElement("div",{css:j.sharedStyles.articleLayout.content},e.createElement("div",{css:j.sharedStyles.markdown,dangerouslySetInnerHTML:{__html:r.markdownRemark.html}}),e.createElement("div",{css:[j.sharedStyles.markdown,{marginTop:30,"& code":{display:"block",marginTop:30,padding:"1rem",borderRadius:"0.5rem",backgroundColor:(0,d.default)(j.colors.error,.1),color:j.colors.error}}]},e.createElement(l.default,{errorCodesString:r.errorCodesJson.internal.contentDigest,location:o})))),e.createElement("div",{css:j.sharedStyles.articleLayout.sidebar},e.createElement(g.default,{createLink:x.createLinkDocs,defaultActiveSection:(0,k.default)(o.pathname,v.sectionListDocs),location:o,sectionList:v.sectionListDocs,title:r.markdownRemark.frontmatter.title})))))};t.pageQuery="** extracted graphql fragment **";t.default=E}).call(t,r("./node_modules/glamor/react.js"))}});
//# sourceMappingURL=component---src-pages-docs-error-decoder-html-js-b869a087dbf6198c0d9d.js.map