(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5706:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4178)}])},150:function(e,t,n){"use strict";n.d(t,{Z:function(){return y},y:function(){return k}});var r=n(5893),a=n(9008),i=n(4694),s=n.n(i),l=n(1664),o=n(7294),c=n(1163),d=n(1043),u=function(e){return e.theme},m=n(6393),h=n(2204),f=function(){var e,t,n=(0,d.I0)(),a=(0,d.v9)(u);a?null===(e=document.querySelector("html"))||void 0===e||e.classList.add("dark"):null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("dark");return(0,r.jsx)("div",{children:(0,r.jsx)(h.DarkModeSwitch,{checked:a,onChange:function(e){n(e?(0,m.xB)():(0,m.Ov)())},size:35})})},x=function(e){var t=e.show,n=(0,c.useRouter)().pathname,a="font-light text-2xl mb-8 select-none dark:text-white animate-[moveUp_0.4s_ease-out]",i=function(e){return"".concat(a,n===e?" border-b border-black dark:border-white":" hover:cursor-pointer")};return t?(0,r.jsxs)("nav",{className:"fixed top-28 bottom-0 left-0 right-0 flex flex-col items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur z-10 justify-center animate-[fadeIn_0.2s_ease-in]",children:[(0,r.jsx)(l.default,{href:"/",passHref:!0,children:(0,r.jsx)("div",{className:i("/"),children:"Blog"})}),(0,r.jsx)(l.default,{href:"/about",passHref:!0,children:(0,r.jsx)("div",{className:i("/about"),children:"About"})}),(0,r.jsx)("div",{className:"animate-[moveUp_0.4s_ease-out]",children:(0,r.jsx)(f,{})})]}):null},j=n(5675),p=n(4003),b=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,o.useRef)(null),i="border-t border-black w-full duration-100 dark:border-white",c=function(e){e?(document.body.classList.add("disableScroll"),document.body.style.position="fixed"):(document.body.classList.remove("disableScroll"),document.body.style.position="static")};return(0,o.useEffect)((function(){var e=null===a||void 0===a?void 0:a.current;t?(e.classList.add(s().menuOpen),c(!0)):(e.classList.remove(s().menuOpen),c(!1))}),[t]),(0,r.jsxs)("div",{className:"relative mb-28",children:[(0,r.jsx)("div",{className:"fixed top-0 left-0 right-0 h-28 flex px-4 m-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur z-50 max-w-screen-md",children:(0,r.jsxs)("div",{className:"flex items-center justify-between w-full z-10",children:[(0,r.jsx)(l.default,{href:"/",passHref:!0,children:(0,r.jsxs)("div",{className:"flex items-center hover:cursor-pointer z-50",children:[(0,r.jsx)("div",{className:"mr-4",children:(0,r.jsx)(j.default,{src:"pranjal-profile-pic.webp",className:"rounded-full",alt:"Pranjal Dubey Photograph",layout:"fixed",width:"50",height:"50",loader:p.X})}),(0,r.jsx)("div",{className:"font-title text-4xl",children:"Pranjal Dubey"})]})}),(0,r.jsxs)("div",{className:"flex flex-col align-center justify-center w-9 h-12 z-20 hover:cursor-pointer",onClick:function(){n(!t)},ref:a,children:[(0,r.jsx)("div",{id:s().menuLine1,className:"".concat(i," mb-2 dark:border-white")}),(0,r.jsx)("div",{id:s().menuLine2,className:i})]})]})}),(0,r.jsx)(x,{show:t})]})},v=[{id:"twitter-link",link:"https://twitter.com/pranjaldy",alt:"Twitter",src:"twitter.svg"},{id:"instagram-link",link:"http://instagram.com/pranjalworm/",alt:"Instagram",src:"instagram.svg"},{id:"email-link",link:"mailto:hi@pranjaldubey.com",alt:"Email",src:"email.svg"},{id:"linkedin-link",link:"https://www.linkedin.com/in/pranjal-dubey/",alt:"LinkedIn",src:"linkedin.svg"},{id:"goodreads-link",link:"https://www.goodreads.com/user/show/26285683-pranjal-dubey",alt:"Goodreads",src:"goodreads.svg"},{id:"github-link",link:"https://github.com/pranjalworm",alt:"Github",src:"github.svg"}],g=function(){var e=(0,c.useRouter)();return(0,r.jsx)("div",{onClick:function(t){var n=function(e){var t=!0,n=!1,r=void 0;try{for(var a,i=v[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;if(s.id===e)return s.link}}catch(l){n=!0,r=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}(t.target.id);e.push(n)},className:"flex justify-between items-center m-auto h-16 max-w-screen-md dark:invert",children:v.map((function(e){return(0,r.jsx)(j.default,{src:e.src,className:"hover:cursor-pointer",id:e.id,alt:e.alt,layout:"fixed",width:"24",height:"24",loader:p.R},e.id)}))})},w=function(){return(0,r.jsxs)("footer",{className:"text-gray-500 bg-gray-100 text-center p-8 mt-24 dark:bg-slate-900 dark:text-white",children:[(0,r.jsx)(g,{}),(0,r.jsx)("div",{className:"mt-6",children:"\xa9 Pranjal Dubey"})]})},k="Pranjal Dubey";function y(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"max-w-screen-md px-4 mt-8 mx-auto dark:text-white",children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Pranjal Dubey's personal blogging website"}),(0,r.jsx)("meta",{name:"og:title",content:k}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsx)(b,{}),(0,r.jsx)("main",{children:t})]}),(0,r.jsx)(w,{})]})}},4178:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(150),i=n(9008),s=n(5675),l=n(4003);t.default=function(){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"About - Pranjal Dubey"})}),(0,r.jsx)("div",{className:"relative block my-0 mx-auto md:w-1/2",children:(0,r.jsx)(s.default,{src:"pranjal-about.webp",layout:"responsive",width:"200",height:"300",priority:!0,alt:"Portrait of Pranjal Dubey",loader:l.X})}),(0,r.jsxs)("div",{className:"mt-8 textContent",children:[(0,r.jsx)("p",{className:"mb-4",children:"Pranjal Dubey is a Bangalore based programmer currently working in Freshworks."}),(0,r.jsx)("p",{className:"mb-4",children:"He's also a part time photographer and loves creating silhouettes."}),(0,r.jsx)("p",{className:"mb-4",children:"He has an OCD for reading almost anything interesting he can get his hands on or at least adding them to an ever growing to-read list."}),(0,r.jsx)("p",{className:"mb-4",children:"Pau Bhaji is life for him."})]})]})}},4003:function(e,t,n){"use strict";n.d(t,{R:function(){return a},X:function(){return r}});var r=function(e){var t=e.src;e.width,e.quality;return"".concat(i(),"/images/").concat(t)},a=function(e){var t=e.src;e.width,e.quality;return"".concat(i(),"/icons/").concat(t)},i=function(){return"".concat("https://pranjaldubey.com","/")}},4694:function(e){e.exports={menuOpen:"app-header_menuOpen__Qq2tn",menuLine1:"app-header_menuLine1__L6lqX",menuLine2:"app-header_menuLine2__5CuIW"}}},function(e){e.O(0,[226,774,888,179],(function(){return t=5706,e(e.s=t);var t}));var t=e.O();_N_E=t}]);