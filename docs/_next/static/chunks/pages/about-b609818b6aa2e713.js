(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5706:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(4178)}])},9491:function(e,n,a){"use strict";a.d(n,{Z:function(){return N},y:function(){return L}});var t=a(5893),i=a(9008),r=a(2692),o=a.n(r),s=a(4920),l=a.n(s),u=a(1664),d=a(7294),c=a(1163),m=a(6071),_=a.n(m),h=function(e){var n=e.show,a=(0,c.useRouter)().pathname,i=function(e){return a===e?_().menuItem+" "+_().linkDisabled:_().menuItem};return n?(0,t.jsxs)("nav",{className:_().navLinks,children:[(0,t.jsx)(u.default,{href:"/",passHref:!0,children:(0,t.jsx)("div",{className:i("/"),children:"Blog"})}),(0,t.jsx)(u.default,{href:"/about",passHref:!0,children:(0,t.jsx)("div",{className:i("/about"),children:"About"})})]}):null},p=function(){var e=(0,d.useState)(!1),n=e[0],a=e[1],i=(0,d.useRef)(null),r=function(e){e?(document.body.classList.add("disableScroll"),document.body.style.position="fixed"):(document.body.classList.remove("disableScroll"),document.body.style.position="static")};return(0,d.useEffect)((function(){var e=null===i||void 0===i?void 0:i.current;n?(e.classList.add(l().menuOpen),r(!0)):(e.classList.remove(l().menuOpen),r(!1))}),[n]),(0,t.jsxs)("header",{className:l().headerWrapper,children:[(0,t.jsxs)("div",{className:l().header,children:[(0,t.jsx)(u.default,{href:"/",passHref:!0,children:(0,t.jsx)("div",{className:l().siteHeading,children:"Pranjal Dubey"})}),(0,t.jsxs)("div",{id:l().mobileMenuButton,onClick:function(){a(!n)},ref:i,children:[(0,t.jsx)("div",{id:l().menuLine1,className:l().menuLine}),(0,t.jsx)("div",{id:l().menuLine2,className:l().menuLine})]})]}),(0,t.jsx)(h,{show:n})]})},f=a(6350),b=a.n(f),j=a(4147),v=a.n(j),x=a(5675),g=a(4003),y=[{id:"twitter-link",link:"https://twitter.com/pranjaldy",alt:"Twitter",src:"twitter.svg"},{id:"instagram-link",link:"http://instagram.com/pranjalworm/",alt:"Instagram",src:"instagram.svg"},{id:"email-link",link:"mailto:hi@pranjaldubey.com",alt:"Email",src:"email.svg"},{id:"linkedin-link",link:"https://www.linkedin.com/in/pranjal-dubey/",alt:"LinkedIn",src:"linkedin.svg"},{id:"goodreads-link",link:"https://www.goodreads.com/user/show/26285683-pranjal-dubey",alt:"Goodreads",src:"goodreads.svg"},{id:"github-link",link:"https://github.com/pranjalworm",alt:"Github",src:"github.svg"}],w=function(){var e=(0,c.useRouter)();return(0,t.jsx)("div",{className:v().socialMediaIconsWrapper,onClick:function(n){var a=function(e){var n=!0,a=!1,t=void 0;try{for(var i,r=y[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var o=i.value;if(o.id===e)return o.link}}catch(s){a=!0,t=s}finally{try{n||null==r.return||r.return()}finally{if(a)throw t}}}(n.target.id);e.push(a)},children:y.map((function(e){return(0,t.jsx)(x.default,{src:e.src,id:e.id,alt:e.alt,layout:"fixed",width:"24",height:"24",loader:g.R},e.id)}))})},k=function(){return(0,t.jsxs)("footer",{className:b().footer,children:[(0,t.jsx)("div",{children:"\xa9 Pranjal Dubey"}),(0,t.jsx)(w,{})]})},L="Pranjal Dubey";function N(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("meta",{name:"description",content:"Pranjal Dubey's personal blogging website"}),(0,t.jsx)("meta",{name:"og:title",content:L}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,t.jsx)(p,{}),(0,t.jsx)("main",{children:n})]}),(0,t.jsx)(k,{})]})}},4178:function(e,n,a){"use strict";a.r(n);var t=a(5893),i=a(9491),r=a(9008),o=a(5675),s=a(1137),l=a.n(s),u=a(4003);n.default=function(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(r.default,{children:(0,t.jsx)("title",{children:"About - Pranjal Dubey"})}),(0,t.jsx)("div",{className:l().aboutImageWrapper,children:(0,t.jsx)(o.default,{src:"pranjal-about.webp",layout:"responsive",width:"200",height:"300",priority:!0,alt:"Portrait of Pranjal Dubey",loader:u.X})}),(0,t.jsxs)("div",{className:"".concat(l().aboutText," textContent"),children:[(0,t.jsx)("p",{children:"Pranjal Dubey is a Bangalore based programmer currently working in Freshworks."}),(0,t.jsx)("p",{children:"He's also a part time photographer and loves creating silhouettes."}),(0,t.jsx)("p",{children:"He has an OCD for reading almost anything interesting he can get his hands on or at least adding them to an ever growing to-read list."}),(0,t.jsx)("p",{children:"Pizza and Pau Bhaji are life for him."})]})]})}},4003:function(e,n,a){"use strict";a.d(n,{R:function(){return i},X:function(){return t}});var t=function(e){var n=e.src;e.width,e.quality;return"".concat(r(),"/images/").concat(n)},i=function(e){var n=e.src;e.width,e.quality;return"".concat(r(),"/icons/").concat(n)},r=function(){return"".concat("https://pranjaldubey.com","/")}},6350:function(e){e.exports={footer:"app-footer_footer__1meys"}},4920:function(e){e.exports={header:"app-header_header__54_B9",siteHeading:"app-header_siteHeading__yemaI",mobileMenuButton:"app-header_mobileMenuButton__0O_f_",menuLine:"app-header_menuLine__9SJoO",menuLine1:"app-header_menuLine1__L6lqX",menuOpen:"app-header_menuOpen__Qq2tn",menuLine2:"app-header_menuLine2__5CuIW"}},2692:function(e){e.exports={container:"layout_container__ithU7",header:"layout_header__WIdrS",footer:"layout_footer__FuAbq",footerHeading:"layout_footerHeading__3_Q4s"}},6071:function(e){e.exports={navLinks:"mobile-menu_navLinks__37DJu",fadeIn:"mobile-menu_fadeIn__Cm7vl",menuItem:"mobile-menu_menuItem__1rXP8",moveUp:"mobile-menu_moveUp__N3Txt",linkDisabled:"mobile-menu_linkDisabled__wz22o",menuClose:"mobile-menu_menuClose__H9_nO",fadeOut:"mobile-menu_fadeOut__S7Yj_",moveDown:"mobile-menu_moveDown__4ojne"}},4147:function(e){e.exports={socialMediaIconsWrapper:"social-media-links_socialMediaIconsWrapper__5t5_6"}},1137:function(e){e.exports={aboutImageWrapper:"about_aboutImageWrapper__tnOq7",aboutText:"about_aboutText__ZgtUS"}}},function(e){e.O(0,[675,774,888,179],(function(){return n=5706,e(e.s=n);var n}));var n=e.O();_N_E=n}]);