(this["webpackJsonpmal-app"]=this["webpackJsonpmal-app"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":1,"title":"Difference between $scope and $rootscope","author":"Malik","date":"February 4, 2015","content":"\\n## Difference between \\\\$scope and \\\\$rootscope\\n\\nWhenever you declare a controller in angular , you automatically create a `$scope` which is relevant to that controller.\\n\\n### So what does a \\\\$scope mean\\n\\nfrom documentation\\n> `$scope` is an object that refers to the application model. It is an execution context for expressions. `$scopes` are arranged in hierarchical structure which mimic the DOM structure of the application. `$scope` can watch expressions and propagate events.\u201d .\\n\\nIn simpler terms it means that it is a way of tying an object to the DOM . If you consider the MVC model in Angular , the scope acts as a model . It is a template which hosts all the functions and the related data . Okay now that we have gotten some insight into the `$scope`.\\n\\nNow let talk about `$rootscope`.\\n\\n`$rootscope` is the parent (more like a root parent) of all the `$scopes` you create . It is the ultimate boss . It is (almost) like the Object class of Java .It is the top most `$scope` of your app and it contains ng-app directive . There is only one `$rootscope` for each of the Angular application .\\n\\n![ difference ](https://lazydevguy.files.wordpress.com/2015/02/blog.png)"},{"id":2,"title":"How to set Visual Studio Version With NPM","author":"Malik","date":"June 24, 2015","content":"## How to set Visual Studio Version With NPM\\n\\nWhen you install NPM modules in windows environment  , some times you might ran into an error like below.\\n\\n> C:\\\\Program Files (x86)\\\\MSBuild\\\\Microsoft.Cpp\\\\v4.0\\\\V120\\\\Microsoft.Cpp.Platform.targets(64,5): error MSB8020: The build tools for Visual Studio 2010 (Platform Toolset = \u2018v100\u2019) cannot be found. To build using the v100 build tools, please install Visual Studio 2010 build tools. Alternatively, you may upgrade to the current Visual Studio tools by selecting the Project menu or right-click the solution, and then selecting \u201cUpgrade Solution\u2026\u201d. [C:\\\\Users\\\\Documents\\\\FLIS.Client.Tests\\\\node_modules\\\\karma\\\\node_modules\\\\socket.io\\\\node_modules\\\\socket.io-client\\\\node_modules\\\\ws\\\\build\\\\bufferutil.vcxproj]\\n\\nAs you can see the error says that it cannot find the Visual studio 2010 platform toolset. In this case you can externally specify build platform toolset to NPM like this.\\n\\n```\\n\u2013msvs-version=2013 // I am running visual studio 2013 . So\u2026\\n```\\n\\nFor E.g If you want to install protractor with `\u2013msvs-version=2013`\\n\\n```\\nnpm install protractor \u2013msvs-version=2013\\n```"}]')},31:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),o=n(32),c=n.n(o),i=n(10),r=n(39),l=n(13),j=n(4),u=n(6),h=n(14),d=n(11),b=n(12),m=n(0),p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("span",{className:"about-container",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"link-icon",children:Object(m.jsx)("ion-icon",{name:"logo-github"})}),Object(m.jsx)("a",{href:"https://github.com/mal90",children:" Github "})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"link-icon",children:Object(m.jsx)("ion-icon",{name:"logo-linkedin"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/maliksalim/",children:" LinkedIn "})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"link-icon",children:Object(m.jsx)("ion-icon",{name:"logo-instagram"})}),Object(m.jsx)("a",{href:"https://www.instagram.com/madkmalik/",children:" Instagram "})]})]})})}}]),n}(a.a.Component),O=n(22),x=function(e){return Object(m.jsxs)("div",{className:"blog-container",children:[Object(m.jsx)("h3",{className:"main-title",children:"All Posts"}),Object(m.jsx)("ul",{children:O.length&&O.map((function(e,t){return Object(m.jsx)(i.b,{className:"links",to:"/post/".concat(e.id),children:Object(m.jsxs)("li",{className:"post-item",children:[Object(m.jsx)("h4",{children:e.title}),Object(m.jsxs)("small",{children:["Published on ",e.date," by ",e.author]})]},t)})}))})]})},f=(n(31),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("span",{className:"home-container",children:[Object(m.jsx)("h1",{children:" Hello, i am a Frontend developer from Sri Lanka"}),Object(m.jsxs)(i.b,{className:"about",to:"about",children:["\ud83d\udc4b Get to know me",Object(m.jsx)("span",{className:"about-icon",children:Object(m.jsx)("ion-icon",{name:"arrow-forward-outline"})})]})]})}}]),n}(a.a.Component)),g=n(38),v=function(e){var t=parseInt(e.match.params.id);if(t){var n={};return O.forEach((function(e,s){t===e.id&&(n.title=e.title?e.title:"No title given",n.date=e.date?e.date:"No date given",n.author=e.author?e.author:"No author given",n.content=e.content?e.content:"No content given")})),Object(m.jsxs)("div",{className:"post-container",children:[Object(m.jsxs)(i.b,{className:"go-back",to:"/blog",children:[Object(m.jsx)("span",{className:"arrow-back-outline",children:Object(m.jsx)("ion-icon",{name:"arrow-back-outline"})}),"back to all posts"]}),Object(m.jsxs)("small",{children:["Published on ",n.date," by ",n.author]}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"markdown-body",children:Object(m.jsx)(g.a,{children:n.content})})]})}},k=function(){return Object(m.jsx)("span",{className:"landing-page",children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",children:Object(m.jsx)(f,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/about",children:Object(m.jsx)(p,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/blog",children:Object(m.jsx)(x,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/post/:id",render:function(e){return Object(m.jsx)(v,Object(l.a)({},e))}})]})})},N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("li",{className:"menu-item",children:Object(m.jsx)(i.b,{to:this.props.redirect,children:this.props.name})})}}]),n}(a.a.Component),y=(n(57),n.p+"static/media/dp.bdeb0b0e.jpg"),w=function(e){var t=e.toggleMenu,n=e.setToggleMenu;return Object(m.jsxs)("div",{className:"side-menu ".concat(t?"show":"hide"),children:[Object(m.jsx)("img",{src:y,alt:"Logo"}),Object(m.jsxs)("ul",{className:"menu-container",onClick:function(){return function(e){e(!1)}(n)},children:[Object(m.jsx)(N,{redirect:"/",name:"Home"}),Object(m.jsx)(N,{redirect:"/about",name:"About"}),Object(m.jsx)(N,{redirect:"/blog",name:"Blog"})]})]})},M=function(e){return Object(m.jsx)("small",{className:"footer",children:"\xa9 Copyright 2021 Malik"})},I=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("span",{className:"app",children:[Object(m.jsx)("div",{className:"burger-btn",onClick:function(){a(!n)},children:n?Object(m.jsx)("ion-icon",{size:"large",name:"close-outline",className:"close-btn"}):Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"burger-line"}),Object(m.jsx)("span",{className:"burger-line"}),Object(m.jsx)("span",{className:"burger-line"})]})}),Object(m.jsx)(w,{toggleMenu:n,setToggleMenu:a}),Object(m.jsxs)("span",{className:"landing-page-container",children:[Object(m.jsx)(k,{}),Object(m.jsx)(M,{})]})]})};n(58),n(59);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(I,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.e3f27ec4.chunk.js.map