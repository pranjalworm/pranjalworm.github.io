(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4550:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return t(3502)}])},7824:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(3855),i=t(5313),a=t(1178),o=t.n(a);function l(e){var n=e.dateString,t=(0,s.Z)(n);return(0,r.jsx)("time",{dateTime:n,className:o().dateWrapper,children:(0,i.Z)(t,"LLLL d, yyyy")})}},9491:function(e,n,t){"use strict";t.d(n,{Z:function(){return N},y:function(){return L}});var r=t(5893),s=t(9008),i=t(2692),a=t.n(i),o=t(4920),l=t.n(o),u=t(1664),c=t(7294),d=t(1163),_=t(6071),m=t.n(_),f=function(e){var n=e.show,t=(0,d.useRouter)().pathname,s=function(e){return t===e?m().menuItem+" "+m().linkDisabled:m().menuItem};return n?(0,r.jsxs)("nav",{className:m().navLinks,children:[(0,r.jsx)(u.default,{href:"/",passHref:!0,children:(0,r.jsx)("div",{className:s("/"),children:"Blog"})}),(0,r.jsx)(u.default,{href:"/about",passHref:!0,children:(0,r.jsx)("div",{className:s("/about"),children:"About"})})]}):null},p=function(){var e=(0,c.useState)(!1),n=e[0],t=e[1],s=(0,c.useRef)(null),i=function(e){e?document.body.classList.add("disableScroll"):document.body.classList.remove("disableScroll")};return(0,c.useEffect)((function(){var e=null===s||void 0===s?void 0:s.current;n?(e.classList.add(l().menuOpen),i(!0)):(e.classList.remove(l().menuOpen),i(!1))}),[n]),(0,r.jsxs)("header",{className:l().headerWrapper,children:[(0,r.jsxs)("div",{className:l().header,children:[(0,r.jsx)(u.default,{href:"/",passHref:!0,children:(0,r.jsx)("div",{className:l().siteHeading,children:"Pranjal Dubey"})}),(0,r.jsxs)("div",{id:l().mobileMenuButton,onClick:function(){t(!n)},ref:s,children:[(0,r.jsx)("div",{id:l().menuLine1,className:l().menuLine}),(0,r.jsx)("div",{id:l().menuLine2,className:l().menuLine})]})]}),(0,r.jsx)(f,{show:n})]})},h=t(6350),v=t.n(h),x=t(4147),j=t.n(x),g=t(5675),b=t(4003),w=[{id:"twitter-link",link:"https://twitter.com/pranjaldy",alt:"Twitter",src:"twitter.svg"},{id:"instagram-link",link:"http://instagram.com/pranjalworm/",alt:"Instagram",src:"instagram.svg"},{id:"email-link",link:"mailto:hi@pranjaldubey.com",alt:"Email",src:"email.svg"},{id:"linkedin-link",link:"https://www.linkedin.com/in/pranjal-dubey/",alt:"LinkedIn",src:"linkedin.svg"},{id:"goodreads-link",link:"https://www.goodreads.com/user/show/26285683-pranjal-dubey",alt:"Goodreads",src:"goodreads.svg"},{id:"github-link",link:"https://github.com/pranjalworm",alt:"Github",src:"github.svg"}],y=function(){var e=(0,d.useRouter)();return(0,r.jsx)("div",{className:j().socialMediaIconsWrapper,onClick:function(n){var t=function(e){var n=!0,t=!1,r=void 0;try{for(var s,i=w[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var a=s.value;if(a.id===e)return a.link}}catch(o){t=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(t)throw r}}}(n.target.id);e.push(t)},children:w.map((function(e){return(0,r.jsx)(g.default,{src:e.src,id:e.id,alt:e.alt,layout:"fixed",width:"24",height:"24",loader:b.R},e.id)}))})},k=function(){return(0,r.jsxs)("footer",{className:v().footer,children:[(0,r.jsx)("div",{children:"\xa9 Pranjal Dubey"}),(0,r.jsx)(y,{})]})},L="Pranjal Dubey";function N(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Pranjal Dubey's personal blogging website"}),(0,r.jsx)("meta",{name:"og:title",content:L}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsx)(p,{}),(0,r.jsx)("main",{children:n})]}),(0,r.jsx)(k,{})]})}},3502:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x},default:function(){return j}});var r=t(5893),s=(t(7294),t(9491)),i=t(9008),a=t(7824),o=t(9877),l=t.n(o),u=t(9545),c=t.n(u),d=t(1664),_=t(5675),m=t(4003);function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,s=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){s=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e,n){var t,s,i,a;return e?(s="arrow-back.svg",t="Arrow Back",i=c().postLinkPrevious,a="/posts/".concat(n.id)):(s="arrow-forward.svg",t="Arrow Forward",i=c().postLinkNext,a="/posts/".concat(n.id)),(0,r.jsx)(d.default,{href:a,passHref:!0,children:(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("div",{className:c().arrowWrapper,children:(0,r.jsx)(_.default,{src:s,alt:t,layout:"fixed",width:"24",height:"24",loader:m.R})}),(0,r.jsx)("div",{className:c().postTitle,children:n.title})]})})},h=function(e){var n=f(e.posts,2),t=n[0],s=n[1];return(0,r.jsxs)("div",{className:c().suggestedPosts,children:[t?p(!0,t):(0,r.jsx)("div",{}),s?p(!1,s):(0,r.jsx)("div",{})]})};function v(e){var n=e.postContent,t=e.suggestedPosts,o="".concat(n.title," - ").concat(n.titleSuffix);return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:o})}),(0,r.jsxs)("article",{className:"".concat(l().post," textContent"),children:[(0,r.jsx)("h1",{className:l().title,children:n.title}),(0,r.jsx)("div",{className:l().date,children:(0,r.jsx)(a.Z,{dateString:n.date})}),(0,r.jsx)("div",{className:l().content,dangerouslySetInnerHTML:{__html:n.contentHtml}})]}),(0,r.jsx)(h,{posts:t})]})}var x=!0;function j(e){var n=e.postContent,t=e.suggestedPosts;return n.titleSuffix="Pranjal Dubey",(0,r.jsx)(v,{postContent:n,suggestedPosts:t})}},4003:function(e,n,t){"use strict";t.d(n,{R:function(){return s},X:function(){return r}});var r=function(e){var n=e.src;e.width,e.quality;return"".concat(i(),"/images/").concat(n)},s=function(e){var n=e.src;e.width,e.quality;return"".concat(i(),"/icons/").concat(n)},i=function(){return"".concat("https://pranjaldubey.com","/")}},6350:function(e){e.exports={footer:"app-footer_footer__1meys"}},4920:function(e){e.exports={header:"app-header_header__54_B9",siteHeading:"app-header_siteHeading__yemaI",mobileMenuButton:"app-header_mobileMenuButton__0O_f_",menuLine:"app-header_menuLine__9SJoO",menuLine1:"app-header_menuLine1__L6lqX",menuOpen:"app-header_menuOpen__Qq2tn",menuLine2:"app-header_menuLine2__5CuIW"}},1178:function(e){e.exports={dateWrapper:"date_dateWrapper__GCqer"}},2692:function(e){e.exports={container:"layout_container__ithU7",header:"layout_header__WIdrS",footer:"layout_footer__FuAbq",footerHeading:"layout_footerHeading__3_Q4s"}},6071:function(e){e.exports={navLinks:"mobile-menu_navLinks__37DJu",fadeIn:"mobile-menu_fadeIn__Cm7vl",menuItem:"mobile-menu_menuItem__1rXP8",moveUp:"mobile-menu_moveUp__N3Txt",linkDisabled:"mobile-menu_linkDisabled__wz22o",menuClose:"mobile-menu_menuClose__H9_nO",fadeOut:"mobile-menu_fadeOut__S7Yj_",moveDown:"mobile-menu_moveDown__4ojne"}},9877:function(e){e.exports={post:"post_post__E27WW",title:"post_title__bBr2z",date:"post_date__3rqeH"}},4147:function(e){e.exports={socialMediaIconsWrapper:"social-media-links_socialMediaIconsWrapper__5t5_6"}},9545:function(e){e.exports={suggestedPosts:"suggested-posts_suggestedPosts__wSWZX",postLinkPrevious:"suggested-posts_postLinkPrevious___6g9t",postLinkNext:"suggested-posts_postLinkNext__owHF5",postTitle:"suggested-posts_postTitle__G3kA_"}}},function(e){e.O(0,[675,934,774,888,179],(function(){return n=4550,e(e.s=n);var n}));var n=e.O();_N_E=n}]);