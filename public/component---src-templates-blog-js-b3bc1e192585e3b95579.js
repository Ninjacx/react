webpackJsonp([36733297554888],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/yubolun/Desktop/react/node_modules/babel-preset-react/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-preset-es2015/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-preset-stage-1/lib/index.js",["/Users/yubolun/Desktop/react/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/yubolun/Desktop/react/node_modules/babel-preset-stage-0/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/yubolun/Desktop/react/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/yubolun/Desktop/react/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/yubolun/Desktop/react/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"cacheDirectory":true}!./src/templates/blog.js':function(e,s,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}s.__esModule=!0,s.pageQuery=void 0;var r=t("./node_modules/prop-types/index.js"),a=o(r),l=t("./node_modules/react/index.js"),n=(o(l),t("./src/components/MarkdownPage/index.js")),d=o(n),u=t("./src/utils/createLink.js"),i=function(e){return[{title:"Recent Posts",items:e.edges.map(function(e){var s=e.node;return{id:s.fields.slug,title:s.frontmatter.title}}).concat({id:"/blog/all.html",title:"All posts ..."})}]},b=function(s){var t=s.data,o=s.location;return e.createElement(d.default,{authors:t.markdownRemark.frontmatter.author,createLink:u.createLinkBlog,date:t.markdownRemark.fields.date,location:o,ogDescription:t.markdownRemark.excerpt,markdownRemark:t.markdownRemark,sectionList:i(t.allMarkdownRemark),titlePostfix:" - React Blog"})};b.propTypes={data:a.default.object.isRequired};s.pageQuery="** extracted graphql fragment **";s.default=b}).call(s,t("./node_modules/glamor/react.js"))}});
//# sourceMappingURL=component---src-templates-blog-js-b3bc1e192585e3b95579.js.map