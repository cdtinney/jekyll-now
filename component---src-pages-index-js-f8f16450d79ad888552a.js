(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{140:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(155),o=t(156),c=t(163),l=t.n(c);var s=function(){return i.a.createElement("header",{className:l.a.header},i.a.createElement(o.a,null),i.a.createElement("p",null,"Hi. I'm a software developer. I do things. I like other things. Click some things if you'd like."))},u=t(164),d=t(4),m=t.n(d),f=t(167),p=t(168),h=t(169),y=t(148),E=t(165),_=t.n(E);function v(e){var a=e.data;return i.a.createElement("div",{className:_.a.container},i.a.createElement("div",{className:_.a.container__social},i.a.createElement("a",{title:a.site.siteMetadata.social.github+" on GitHub",href:"https://github.com/"+a.site.siteMetadata.social.github,"aria-label":"GitHub profile"},i.a.createElement(f.a,{icon:p.b,className:_.a.icon,size:"lg"})),i.a.createElement("a",{title:a.site.siteMetadata.social.linkedin+" on LinkedIn",href:"https://linkedin.com/in/"+a.site.siteMetadata.social.linkedin,"aria-label":"LinkedIn profile"},i.a.createElement(f.a,{icon:p.c,className:_.a.icon,size:"lg"})),i.a.createElement("a",{title:a.site.siteMetadata.social.fiveHundredPx+" on 500px",href:"https://500px.com/"+a.site.siteMetadata.social.fiveHundredPx,"aria-label":"500px profile"},i.a.createElement(f.a,{icon:p.a,className:_.a.icon,size:"lg"}))),i.a.createElement("div",{className:_.a.container__email},i.a.createElement("a",{href:"mailto:"+a.site.siteMetadata.contact.email},i.a.createElement(f.a,{icon:h.a,className:_.a.icon+" "+_.a.email__icon}),a.site.siteMetadata.contact.displayedEmail)),i.a.createElement("div",{className:_.a.container__resume},i.a.createElement("span",null,"hire me -"),i.a.createElement("a",{href:a.site.siteMetadata.contact.resumeUrl,className:_.a.container__resume__link},"Here's my resume")))}v.propTypes={data:m.a.shape.isRequired};var g=function(){return i.a.createElement(y.StaticQuery,{query:"2415355733",render:function(e){return i.a.createElement(v,{data:e})},data:u})},b=t(166),x=t.n(b);function C(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:x.a.container},i.a.createElement(s,null),i.a.createElement(g,null)))}t.d(a,"default",function(){return C})},143:function(e,a,t){"use strict";t.r(a);var n=t(140);a.default=n.default},145:function(e,a,t){"use strict";t.r(a);var n=t(170),i=t(143);n.a.autoAddCss=!1,a.default=i.default},148:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return f});var n=t(0),i=t.n(n),r=t(4),o=t.n(r),c=t(147),l=t.n(c);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var s=t(149),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var d=t(32);t.d(a,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},150:function(e,a,t){e.exports={footer:"Footer-module--footer--1AXXX"}},151:function(e,a,t){e.exports={content:"DefaultLayout-module--content--29qSQ"}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney",url:"https://colintinney.com"}}}}},153:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),i=t.n(n),r=t(4),o=t.n(r),c=t(51),l=t(2),s=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=s},154:function(e,a,t){e.exports={header:"Brand-module--header--31XTZ",link:"Brand-module--link--1EETb"}},155:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(4),o=t.n(r),c=t(150),l=t.n(c);var s=function(){return i.a.createElement("footer",{className:l.a.footer},"This is a footer.")},u=t(151),d=t.n(u);function m(e){var a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",{className:d.a.content,"aria-label":"Content"},a),i.a.createElement(s,null))}m.propTypes={children:o.a.node.isRequired};a.a=m},156:function(e,a,t){"use strict";t(157);var n=t(152),i=t(0),r=t.n(i),o=t(148),c=t(154),l=t.n(c);a.a=function(){return r.a.createElement(o.StaticQuery,{query:"2266617940",render:function(e){return r.a.createElement("h1",{className:l.a.header},r.a.createElement("a",{href:e.site.siteMetadata.url,className:l.a.link},e.site.siteMetadata.title))},data:n})}},163:function(e,a,t){e.exports={header:"AboutHeader-module--header--34coq"}},164:function(e){e.exports={data:{site:{siteMetadata:{contact:{name:"Colin Tinney",email:"colintinney@gmail.com",displayedEmail:"colintinney [at] gmail.com",resumeUrl:"https://drive.google.com/open?id=1l5p9B44vyGf0fjST5Tm-I-zXBwQd2GXtUj_RUunx3MU"},social:{github:"cdtinney",linkedin:"cdtinney",fiveHundredPx:"colintinney"}}}}}},165:function(e,a,t){e.exports={container:"ContactCard-module--container--4YL94",icon:"ContactCard-module--icon--pIjdG",email__icon:"ContactCard-module--email__icon--24Mk1",container__social:"ContactCard-module--container__social--WE9Rx",container__email:"ContactCard-module--container__email--4CQt3",container__resume:"ContactCard-module--container__resume--naRT8",container__resume__link:"ContactCard-module--container__resume__link--3q0-_"}},166:function(e,a,t){e.exports={container:"Home-module--container--34imV"}}}]);
//# sourceMappingURL=component---src-pages-index-js-f8f16450d79ad888552a.js.map