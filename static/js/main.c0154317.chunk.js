(this["webpackJsonpmal-app"]=this["webpackJsonpmal-app"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"title":"First post","author":"Malik","date":"September 17, 2021","content":"# This is the main blog title\\n\\n```\\nsome content here\\n```"},{"id":2,"title":"2nd post","author":"Malik","date":"September 18, 2021","content":"# This is the 2nd blog\\n\\nsome content here"}]')},40:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),s=n.n(r),i=(n(40),n(14)),o=n(5),j=n(11),l=n(7),b=n(8),h=n(4),u=n(1),d=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("span",{className:"home-container",children:Object(u.jsx)("p",{children:" Hello, I am Malik and i am a front-end developer "})})}}]),n}(a.a.Component),O=n(13),p=n(20),x=function(e){return Object(u.jsxs)("span",{className:"blog-container",children:[Object(u.jsx)("h1",{className:"title",children:"All Posts"}),Object(u.jsx)("ul",{children:p.length&&p.map((function(e,t){return Object(u.jsxs)("li",{className:"post-card",children:[Object(u.jsx)("h2",{children:Object(u.jsx)(O.b,{className:"links",to:"/post/".concat(e.id),children:e.title})}),Object(u.jsxs)("small",{children:["Published on ",e.date," by ",e.author]})]},t)}))})]})},m=(n(50),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("span",{className:"home-container",children:["this is home",Object(u.jsx)(O.b,{className:"about",to:"about",children:"get to know me"})]})}}]),n}(a.a.Component)),f=n(33),v=function(e){var t=parseInt(e.match.params.id);if(t){var n={};return p.forEach((function(e,c){t===e.id&&(n.title=e.title?e.title:"No title given",n.date=e.date?e.date:"No date given",n.author=e.author?e.author:"No author given",n.content=e.content?e.content:"No content given")})),Object(u.jsxs)("div",{className:"post",children:[Object(u.jsx)(O.b,{to:"/blog",children:" Go back to list of posts "}),Object(u.jsx)("h2",{children:n.title}),Object(u.jsxs)("small",{children:["Published on ",n.date," by ",n.author]}),Object(u.jsx)("hr",{}),Object(u.jsx)(f.a,{children:n.content})]})}},g=(n(53),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("span",{className:"landing-page",children:Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{exact:!0,path:"/",children:Object(u.jsx)(m,{})}),Object(u.jsx)(h.a,{exact:!0,path:"/about",children:Object(u.jsx)(d,{})}),Object(u.jsx)(h.a,{exact:!0,path:"/blog",children:Object(u.jsx)(x,{})}),Object(u.jsx)(h.a,{exact:!0,path:"/post/:id",render:function(e){return Object(u.jsx)(v,Object(i.a)({},e))}})]})})}}]),n}(a.a.Component)),N=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("li",{children:Object(u.jsx)(O.b,{to:this.props.redirect,children:this.props.name})})}}]),n}(a.a.Component),k=(n(54),n.p+"static/media/dp.44fe097e.jpeg"),y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("span",{children:[Object(u.jsx)("img",{src:k,alt:"Logo"}),Object(u.jsxs)("ul",{className:"menu-container",children:[Object(u.jsx)(N,{redirect:"/",name:"Home"}),Object(u.jsx)(N,{redirect:"/about",name:"About"}),Object(u.jsx)(N,{redirect:"/blog",name:"Blog"})]})]})}}]),n}(a.a.Component);n(55);var C=function(){return Object(u.jsxs)("span",{className:"app",children:[Object(u.jsx)(y,{}),Object(u.jsx)(g,{})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(C,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.c0154317.chunk.js.map