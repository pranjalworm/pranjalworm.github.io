(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4550:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return r(3502)}])},7824:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(3855),i=r(5313);function s(e){var t=e.dateString,r=(0,a.Z)(t);return(0,n.jsx)("time",{dateTime:t,className:"text-sm text-gray-400 font-light",children:(0,i.Z)(r,"LLLL d, yyyy")})}},150:function(e,t,r){"use strict";r.d(t,{Z:function(){return k},y:function(){return w}});var n=r(5893),a=r(9008),i=r(4694),s=r.n(i),l=r(1664),o=r(7294),c=r(1163),u=r(1043),d=function(e){return e.theme},f=r(6393),m=r(2204),h=function(){var e,t,r=(0,u.I0)(),a=(0,u.v9)(d);a?null===(e=document.querySelector("html"))||void 0===e||e.classList.add("dark"):null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("dark");return(0,n.jsx)("div",{children:(0,n.jsx)(m.DarkModeSwitch,{checked:a,onChange:function(e){r(e?(0,f.xB)():(0,f.Ov)())},size:35})})},x=function(e){var t=e.show,r=(0,c.useRouter)().pathname,a="font-light text-2xl mb-8 select-none dark:text-white animate-[moveUp_0.4s_ease-out]",i=function(e){return"".concat(a,r===e?" border-b border-black dark:border-white":" hover:cursor-pointer")};return t?(0,n.jsxs)("nav",{className:"fixed top-28 bottom-0 left-0 right-0 flex flex-col items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur z-10 justify-center animate-[fadeIn_0.2s_ease-in]",children:[(0,n.jsx)(l.default,{href:"/",passHref:!0,children:(0,n.jsx)("div",{className:i("/"),children:"Blog"})}),(0,n.jsx)(l.default,{href:"/about",passHref:!0,children:(0,n.jsx)("div",{className:i("/about"),children:"About"})}),(0,n.jsx)("div",{className:"animate-[moveUp_0.4s_ease-out]",children:(0,n.jsx)(h,{})})]}):null},v=r(5675),p=r(4003),j=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1],a=(0,o.useRef)(null),i="border-t border-black w-full duration-100 dark:border-white",c=function(e){e?(document.body.classList.add("disableScroll"),document.body.style.position="fixed"):(document.body.classList.remove("disableScroll"),document.body.style.position="static")};return(0,o.useEffect)((function(){var e=null===a||void 0===a?void 0:a.current;t?(e.classList.add(s().menuOpen),c(!0)):(e.classList.remove(s().menuOpen),c(!1))}),[t]),(0,n.jsxs)("div",{className:"relative mb-28",children:[(0,n.jsx)("div",{className:"fixed top-0 left-0 right-0 h-28 flex px-4 m-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur z-50 max-w-screen-md",children:(0,n.jsxs)("div",{className:"flex items-center justify-between w-full z-10",children:[(0,n.jsx)(l.default,{href:"/",passHref:!0,children:(0,n.jsxs)("div",{className:"flex items-center hover:cursor-pointer z-50",children:[(0,n.jsx)("div",{className:"mr-4",children:(0,n.jsx)(v.default,{src:"pranjal-profile-pic.webp",className:"rounded-full",alt:"Pranjal Dubey Photograph",layout:"fixed",width:"50",height:"50",loader:p.X})}),(0,n.jsx)("div",{className:"font-title text-4xl",children:"Pranjal Dubey"})]})}),(0,n.jsxs)("div",{className:"flex flex-col align-center justify-center w-9 h-12 z-20 hover:cursor-pointer",onClick:function(){r(!t)},ref:a,children:[(0,n.jsx)("div",{id:s().menuLine1,className:"".concat(i," mb-2 dark:border-white")}),(0,n.jsx)("div",{id:s().menuLine2,className:i})]})]})}),(0,n.jsx)(x,{show:t})]})},b=[{id:"twitter-link",link:"https://twitter.com/pranjaldy",alt:"Twitter",src:"twitter.svg"},{id:"instagram-link",link:"http://instagram.com/pranjalworm/",alt:"Instagram",src:"instagram.svg"},{id:"email-link",link:"mailto:hi@pranjaldubey.com",alt:"Email",src:"email.svg"},{id:"linkedin-link",link:"https://www.linkedin.com/in/pranjal-dubey/",alt:"LinkedIn",src:"linkedin.svg"},{id:"goodreads-link",link:"https://www.goodreads.com/user/show/26285683-pranjal-dubey",alt:"Goodreads",src:"goodreads.svg"},{id:"github-link",link:"https://github.com/pranjalworm",alt:"Github",src:"github.svg"}],g=function(){var e=(0,c.useRouter)();return(0,n.jsx)("div",{onClick:function(t){var r=function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=b[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;if(s.id===e)return s.link}}catch(l){r=!0,n=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}(t.target.id);e.push(r)},className:"flex justify-between items-center m-auto h-16 max-w-screen-md dark:invert",children:b.map((function(e){return(0,n.jsx)(v.default,{src:e.src,className:"hover:cursor-pointer",id:e.id,alt:e.alt,layout:"fixed",width:"24",height:"24",loader:p.R},e.id)}))})},y=function(){return(0,n.jsxs)("footer",{className:"text-gray-500 bg-gray-100 text-center p-8 mt-24 dark:bg-gray-900 dark:text-white",children:[(0,n.jsx)(g,{}),(0,n.jsx)("div",{className:"mt-6",children:"\xa9 Pranjal Dubey"})]})},w="Pranjal Dubey";function k(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"max-w-screen-md px-4 mt-8 mx-auto dark:text-white",children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"description",content:"Pranjal Dubey's personal blogging website"}),(0,n.jsx)("meta",{name:"og:title",content:w}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,n.jsx)(j,{}),(0,n.jsx)("main",{children:t})]}),(0,n.jsx)(y,{})]})}},3502:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return j}});var n=r(5893),a=(r(7294),r(150)),i=r(9008),s=r(7824),l=r(7669),o=r.n(l),c=r(1664),u=r(5675),d=r(4003);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(o){l=!0,a=o}finally{try{s||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e,t){var r,a,i,s="";return e?(a="arrow-back.svg",r="Arrow Back"):(a="arrow-forward.svg",r="Arrow Forward",s="flex-row-reverse"),i="/posts/".concat(t.id),(0,n.jsx)(c.default,{href:i,passHref:!0,children:(0,n.jsxs)("div",{className:"flex gap-2 items-center hover:cursor-pointer ".concat(s),children:[(0,n.jsx)("div",{className:"flex items-center dark:invert",children:(0,n.jsx)(u.default,{src:a,alt:r,layout:"fixed",width:"24",height:"24",loader:d.R})}),(0,n.jsx)("div",{className:"font-title",children:t.title})]})})},x=function(e){var t=m(e.posts,2),r=t[0],a=t[1];return(0,n.jsxs)("div",{className:"flex justify-between mt-16",children:[r?h(!0,r):(0,n.jsx)("div",{}),a?h(!1,a):(0,n.jsx)("div",{})]})};function v(e){var t=e.postContent,r=e.suggestedPosts,l="".concat(t.title," - ").concat(t.titleSuffix);return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:l})}),(0,n.jsxs)("article",{className:"".concat(o().post," textContent"),children:[(0,n.jsx)("h1",{className:"font-title text-3xl",children:t.title}),(0,n.jsx)("div",{className:"my-4",children:(0,n.jsx)(s.Z,{dateString:t.date})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})]}),(0,n.jsx)(x,{posts:r})]})}var p=!0;function j(e){var t=e.postContent,r=e.suggestedPosts;return t.titleSuffix="Pranjal Dubey",(0,n.jsx)(v,{postContent:t,suggestedPosts:r})}},4003:function(e,t,r){"use strict";r.d(t,{R:function(){return a},X:function(){return n}});var n=function(e){var t=e.src;e.width,e.quality;return"".concat(i(),"/images/").concat(t)},a=function(e){var t=e.src;e.width,e.quality;return"".concat(i(),"/icons/").concat(t)},i=function(){return"".concat("https://pranjaldubey.com","/")}},4694:function(e){e.exports={menuOpen:"app-header_menuOpen__Qq2tn",menuLine1:"app-header_menuLine1__L6lqX",menuLine2:"app-header_menuLine2__5CuIW"}},7669:function(e){e.exports={post:"post_post__E27WW"}}},function(e){e.O(0,[226,934,774,888,179],(function(){return t=4550,e(e.s=t);var t}));var t=e.O();_N_E=t}]);