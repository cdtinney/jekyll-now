(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6,7],{141:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(155),s=n(156),c=n(161),l=n.n(c);function d(e){var t=e.title,n=e.children;return r.a.createElement(u.a,null,r.a.createElement("div",{className:l.a.container},r.a.createElement("header",{className:l.a.header},r.a.createElement("span",null,r.a.createElement(s.a,null)),r.a.createElement("span",{className:l.a.separator},"/"),r.a.createElement("h3",null,t)),n))}d.propTypes={title:i.a.string.isRequired,children:i.a.node.isRequired};var f=d,p=n(162),h=n.n(p);function v(){var e="undefined"!=typeof window&&window,t=e?e.location.pathname.replace("/",""):"";return r.a.createElement(f,{title:"'"+t+"' is not accessible"},r.a.createElement("div",{className:h.a.container},r.a.createElement("span",{title:"Just kidding. This is a 404 page."},"This content is not available in your country.")))}n.d(t,"default",function(){return v})},142:function(e,t,n){"use strict";n.r(t);var a=n(141);t.default=a.default},144:function(e,t,n){"use strict";n.r(t);var a=n(142);t.default=a.default},147:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(159)),o=a(n(160)),i=a(n(7)),u=a(n(52)),s=a(n(53)),c=a(n(4)),l=a(n(0)),d=n(18),f=n(148);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var m=p(n);return l.default.createElement(d.Link,(0,o.default)({to:m,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},v))},t}(l.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var m=l.default.forwardRef(function(e,t){return l.default.createElement(v,(0,o.default)({innerRef:t},e))});t.default=m;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(147),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(149),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},150:function(e,t,n){e.exports={footer:"Footer-module--footer--1AXXX"}},151:function(e,t,n){e.exports={content:"DefaultLayout-module--content--29qSQ"}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"colin tinney",url:"https://colintinney.com"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(51),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,n){e.exports={header:"Brand-module--header--31XTZ",link:"Brand-module--link--1EETb"}},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(150),s=n.n(u);var c=function(){return r.a.createElement("footer",{className:s.a.footer},"This is a footer.")},l=n(151),d=n.n(l);function f(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:d.a.content,"aria-label":"Content"},t),r.a.createElement(c,null))}f.propTypes={children:i.a.node.isRequired};t.a=f},156:function(e,t,n){"use strict";n(157);var a=n(152),r=n(0),o=n.n(r),i=n(148),u=n(154),s=n.n(u);t.a=function(){return o.a.createElement(i.StaticQuery,{query:"2266617940",render:function(e){return o.a.createElement("h1",{className:s.a.header},o.a.createElement("a",{href:e.site.siteMetadata.url,className:s.a.link},e.site.siteMetadata.title))},data:a})}},157:function(e,t,n){"use strict";n(158)("link",function(e){return function(t){return e(this,"a","href",t)}})},158:function(e,t,n){var a=n(11),r=n(16),o=n(17),i=/"/g,u=function(e,t,n,a){var r=String(o(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},159:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},160:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},161:function(e,t,n){e.exports={container:"PageLayout-module--container--1M1M-",header:"PageLayout-module--header--2E1K3",separator:"PageLayout-module--separator--2rEE_"}},162:function(e,t,n){e.exports={container:"PageNotFound-module--container--3TCwI"}}}]);
//# sourceMappingURL=component---src-pages-404-js-0e480636c7b8fd03680d.js.map