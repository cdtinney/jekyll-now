(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u});var i=t(0),r=t.n(i),n=t(1),s=t.n(n),d=t(190),p=t(198),l=t(170),c=t.n(l);function o(e){var a=e.excerpt,t=e.path,i=e.date,n=e.title;return r.a.createElement("div",{className:c.a.preview},r.a.createElement("h1",{className:c.a.previewTitle},r.a.createElement(d.a,{href:t},n)),r.a.createElement("p",{className:c.a.previewDate},i),r.a.createElement("p",{className:c.a.previewExcerpt},a))}function u(e){var a=e.data,t=void 0===a?{}:a,i=t.allMarkdownRemark,n=(i=void 0===i?{}:i).edges,s=void 0===n?[]:n,d=t.site,l=(d=void 0===d?{}:d).siteMetadata,c=(l=void 0===l?{}:l).title+" - blog",u=s.filter(function(e){return e.node.frontmatter.title.length>0});return r.a.createElement(p.a,{pageTitle:c,pageDescription:"A personal blog"},r.a.createElement("div",null,u.map(function(e){var a=e.node,t=a.id,i=a.excerpt,n=a.frontmatter,s=n.path,d=n.date,p=n.title;return r.a.createElement(o,{key:t,excerpt:i,path:s,date:d,title:p})})))}o.propTypes={path:s.a.string.isRequired,title:s.a.string.isRequired,date:s.a.string.isRequired,excerpt:s.a.string.isRequired},u.propTypes={data:s.a.shape({allMarkdownRemark:s.a.shape({edges:s.a.arrayOf(s.a.shape({node:s.a.shape({id:s.a.string.isRequired,frontmatter:s.a.shape({path:s.a.string.isRequired,title:s.a.string.isRequired,date:s.a.string.isRequired}).isRequired}).isRequired})).isRequired}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired}},198:function(e,a,t){"use strict";var i=t(0),r=t.n(i),n=t(1),s=t.n(n),d=t(193),p=t(165),l=t.n(p);function c(e){var a=e.pageTitle,t=e.pageDescription,i=e.children;return r.a.createElement(d.a,{pageTitle:a,pageDescription:t,title:"blog",titleHref:"/blog"},r.a.createElement("main",{className:l.a.container},i))}c.propTypes={children:s.a.node.isRequired,pageTitle:s.a.string.isRequired,pageDescription:s.a.string.isRequired};var o=c;a.a=o}}]);
//# sourceMappingURL=component---src-pages-blog-blog-js-857b25312a3f2511be34.js.map