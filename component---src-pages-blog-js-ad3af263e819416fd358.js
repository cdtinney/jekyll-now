(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f});var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=a(7),c=a.n(s),o=a(175),p=a.n(o),u=a(181),d=a(164),m=a.n(d);function g(e){var t=e.excerpt,a=e.path,n=e.date,i=e.title;return r.a.createElement("div",{className:m.a.preview},r.a.createElement("h1",{className:m.a.previewTitle},r.a.createElement(c.a,{to:a},i)),r.a.createElement("p",{className:m.a.previewDate},n),r.a.createElement("p",{className:m.a.previewExcerpt},t))}function f(e){var t=e.data,a=(void 0===t?{}:t).allMarkdownRemark,n=(a=void 0===a?{}:a).edges,i=(void 0===n?[]:n).filter(function(e){return e.node.frontmatter.title.length>0});return r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement("title",null,"colin tinney - blog"),r.a.createElement("meta",{name:"description",content:"A personal blog"}),r.a.createElement("meta",{property:"og:title",content:"colin tinney - blog"}),r.a.createElement("meta",{property:"og:description",content:"A personal blog"})),r.a.createElement("div",null,i.map(function(e){var t=e.node,a=t.id,n=t.excerpt,i=t.frontmatter,l=i.path,s=i.date,c=i.title;return r.a.createElement(g,{key:a,excerpt:n,path:l,date:s,title:c})})))}g.propTypes={path:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired,excerpt:l.a.string.isRequired},f.propTypes={data:l.a.shape({allMarkdownRemark:l.a.shape({edges:l.a.arrayOf(l.a.shape({node:l.a.shape({id:l.a.string.isRequired,frontmatter:l.a.shape({path:l.a.string.isRequired,title:l.a.string.isRequired,date:l.a.string.isRequired}).isRequired}).isRequired})).isRequired}).isRequired}).isRequired}},163:function(e,t,a){"use strict";a.r(t);var n=a(158);t.default=n.default},172:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return r});var n=a(163);t.default=n.default;var r="3212646526"},176:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney"}}}}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=a(175),c=a.n(s),o=a(154),p=a.n(o);function u(e){var t=e.pageTitle,a=e.pageDescription,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:a})),r.a.createElement("main",{className:p.a.content,"aria-label":"Content"},n))}u.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var d=u;t.a=d},178:function(e,t,a){"use strict";a(180);var n=a(176),r=a(0),i=a.n(r),l=a(1),s=a.n(l),c=a(55),o=a(155),p=a.n(o);function u(e){var t=e.underline;return i.a.createElement(c.StaticQuery,{query:"677712209",render:function(e){return i.a.createElement("h1",{className:p.a.header+" "+(t?p.a.headerUnderline:"")},i.a.createElement("a",{href:"/",className:p.a.link},e.site.siteMetadata.title))},data:n})}u.propTypes={underline:s.a.bool},u.defaultProps={underline:!0};var d=u;t.a=d},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=a(177),c=a(178),o=a(156),p=a.n(o);function u(e){var t=e.pageTitle,a=e.pageDescription,n=e.title,i=e.titleHref,l=e.children;return r.a.createElement(s.a,{pageTitle:t,pageDescription:a},r.a.createElement("div",{className:p.a.container},r.a.createElement("header",{className:p.a.header},r.a.createElement("span",null,r.a.createElement(c.a,{underline:!1})),r.a.createElement("span",{className:p.a.separator},"/"),r.a.createElement("h3",{className:p.a.title},i?r.a.createElement("a",{href:i},n):n)),l))}u.propTypes={pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired,title:l.a.string.isRequired,titleHref:l.a.string,children:l.a.node.isRequired},u.defaultProps={titleHref:null};var d=u;t.a=d},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=a.n(i),s=a(179),c=a(160),o=a.n(c);function p(e){var t=e.pageTitle,a=e.pageDescription,n=e.children;return r.a.createElement(s.a,{pageTitle:t,pageDescription:a,title:"blog",titleHref:"/blog"},r.a.createElement("main",{className:o.a.container},n))}p.propTypes={children:l.a.node.isRequired,pageTitle:l.a.string.isRequired,pageDescription:l.a.string.isRequired};var u=p;t.a=u}}]);
//# sourceMappingURL=component---src-pages-blog-js-ad3af263e819416fd358.js.map