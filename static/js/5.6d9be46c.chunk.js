(this.webpackJsonpvsmitniku=this.webpackJsonpvsmitniku||[]).push([[5],{191:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));var n=a(2),c=(a(0),a(18)),r=a(3),s=a(1),o=function(e){return Object(c.b)((function(e){return{userId:e.auth.id}}))((function(t){return t.userId?Object(s.jsx)(e,Object(n.a)({},t)):Object(s.jsx)(r.a,{replace:!0,to:"/../login"})}))},i=function(e){return Object(c.b)((function(e){return{userId:e.auth.id}}))((function(t){return t.userId?Object(s.jsx)(r.a,{replace:!0,to:"/../profile/me"}):Object(s.jsx)(e,Object(n.a)({},t))}))}},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),c=a(193),r=(a(0),a(195)),s=a.n(r),o=a(1),i=["input","meta"],l=function(e){var t=e.input,a=e.meta,r=Object(c.a)(e,i),l=a.error&&a.touched;return Object(o.jsxs)("div",{className:"".concat(s.a.textareaWrapper," ").concat(l&&s.a.error),children:[t.type?Object(o.jsx)(d,Object(n.a)(Object(n.a)({},t),r)):Object(o.jsx)(j,Object(n.a)(Object(n.a)({},t),r)),Object(o.jsx)("div",{children:l&&Object(o.jsx)("span",{children:a.error})})]})},j=function(e){return Object(o.jsx)("textarea",Object(n.a)(Object(n.a)({},e),{},{className:s.a.textarea}))},d=function(e){return Object(o.jsx)("input",Object(n.a)(Object(n.a)({},e),{},{className:s.a.input}))}},194:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var n=function(e){return e?void 0:"Field is required"},c=function(e){return function(t){if(t)return t.length<=e?void 0:"Max lenhgth is ".concat(e)}}},195:function(e,t,a){e.exports={error:"CustomForms_error__1i_LA",textarea:"CustomForms_textarea__24t2G",input:"CustomForms_input__2n7gA"}},263:function(e,t,a){},264:function(e,t,a){e.exports={item:"Post_item__1d730",avatar:"Post_avatar__3qiak"}},265:function(e,t,a){e.exports={content:"Profile_content__2wLDD",decorationImg:"Profile_decorationImg__2jX0x",avatarImg:"Profile_avatarImg__1wNG4"}},266:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",avatarBlockWrapper:"ProfileInfo_avatarBlockWrapper__1ffNm",avatarBlock:"ProfileInfo_avatarBlock__VhcZj",avatarSettingBlock:"ProfileInfo_avatarSettingBlock__1r6mm",profileInfoTextWrapper:"ProfileInfo_profileInfoTextWrapper__1DGdr",profileInfoText:"ProfileInfo_profileInfoText__1Nkz7",avatarImg:"ProfileInfo_avatarImg__2izmI"}},267:function(e,t,a){e.exports={wrapper:"ProfileStatus_wrapper__2PEqT"}},268:function(e,t,a){e.exports={contactsBlock:"ProfileInfoForm_contactsBlock__2-rt5",fieldWrapper:"ProfileInfoForm_fieldWrapper__pr-qO",closeButtonWrapper:"ProfileInfoForm_closeButtonWrapper__gVXvX"}},269:function(e,t,a){e.exports={profileInfoTextWrapper:"ProfileInfoText_profileInfoTextWrapper__1JJaZ",linksWrapper:"ProfileInfoText_linksWrapper__1Rit-",editButton:"ProfileInfoText_editButton__1Syij",contactsBlock:"ProfileInfoText_contactsBlock__14jeB"}},270:function(e,t,a){e.exports={avatarBlock:"AvatarBlock_avatarBlock__3iCcj",avatarSettingBlock:"AvatarBlock_avatarSettingBlock__tCN-4",avatarSettingBlockHeader:"AvatarBlock_avatarSettingBlockHeader__3L9W4",newAvatarInput:"AvatarBlock_newAvatarInput__Y5-Aq",newAvatarSendButton:"AvatarBlock_newAvatarSendButton__3vzph",closeButton:"AvatarBlock_closeButton__1shqs",avatarImg:"AvatarBlock_avatarImg__36bhv"}},277:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(18),s=a(50),o=a(263),i=a.n(o),l=a(264),j=a.n(l),d=a(1),b=function(e){var t=e.message,a=e.likesCount;return Object(d.jsxs)("div",{className:j.a.item,children:[Object(d.jsx)("img",{src:"https://n1s2.hsmedia.ru/cd/53/e9/cd53e9c22b9ff0987a1d2727f3a3ee0d/728x485_1_f4e30c6a4f34e0d9b151f62a59f4cc9b@3504x2336_0xac120003_19816963821625299214.jpg",alt:"avatar",className:j.a.avatar}),Object(d.jsx)("p",{className:j.a.postMessage,children:t}),Object(d.jsxs)("div",{children:["Likes: ",a]})]})},u=a(278),f=a(276),p=a(194),O=a(192),x=Object(p.a)(2e3),h=Object(f.a)({form:"post"})((function(e){var t=e.handleSubmit;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)(u.a,{name:"post",component:O.a,placeholder:"New post",validate:[x]}),Object(d.jsx)("button",{children:"Add post"})]})})),m=function(e){var t=e.addPost,a=e.posts;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{onSubmit:function(e){t(e.post),e.post=""}}),"My posts",Object(d.jsxs)("div",{className:i.a.posts,children:[Object(d.jsx)("h3",{children:"Posts"}),a.map((function(e){return Object(d.jsx)(b,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}))]})]})},v=Object(r.b)((function(e){return{posts:e.profilePage.postsArr,newpost:e.profilePage.currentPostArea}}),(function(e){return{changePost:function(t){e(Object(s.b)(t))},addPost:function(t){e(Object(s.a)(t)),e(Object(s.b)(""))}}}))(m),_=a(265),g=a.n(_),k=a(14),I=a(193),P=a(266),N=a.n(P),w=a(267),B=a.n(w),S=function(e){var t=e.status,a=e.updateStatus,n=e.isOwner,r=Object(c.useState)(!1),s=Object(k.a)(r,2),o=s[0],i=s[1],l=Object(c.useState)(t),j=Object(k.a)(l,2),b=j[0],u=j[1];Object(c.useEffect)((function(){u(t)}),[t]);return Object(d.jsx)("div",{className:B.a.wrapper,children:o?Object(d.jsx)("div",{children:Object(d.jsx)("input",{autoFocus:!0,type:"text",value:b,onBlur:function(){i(!1),a(b)},onChange:function(e){u(e.target.value)}})}):Object(d.jsx)("div",{children:Object(d.jsx)("span",{onDoubleClick:function(){n&&i(!0)},children:t||(n?"Set your status":"This guy hasn't status now")})})})},W=a(268),A=a.n(W),y=a(217),C=function(e){var t=e.size,a=void 0===t?"40px":t,n=e.color,c=void 0===n?"#fff":n;return Object(d.jsx)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:a,height:a,viewBox:"0 0 512 512",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("polygon",{fill:c,points:"335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812"}),Object(d.jsx)("path",{fill:c,d:"M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256 C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"})]})})},F=function(e){var t=e.profileInfo,a=e.updateProfileInfo,c=e.disableEditMode,r=function(){c()};return t?Object(d.jsx)("div",{className:A.a.profileInfoForm,children:Object(d.jsx)(y.b,{onSubmit:function(e){a(e).then((function(){c()}))},initialValues:Object(n.a)({},t.data),render:function(e){var t=e.handleSubmit,a=e.form,n=e.submitting,c=e.pristine;e.values;return Object(d.jsxs)("form",{onSubmit:t,className:A.a.form,children:[Object(d.jsx)("div",{onClick:r,className:A.a.closeButtonWrapper,children:Object(d.jsx)(C,{})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Full Name"}),Object(d.jsx)(y.a,{name:"fullName",component:O.a,type:"text",placeholder:"Full Name",validate:p.b})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"About me:"}),Object(d.jsx)(y.a,{name:"aboutMe",component:O.a,placeholder:"About me"})]})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Looking for a job"}),Object(d.jsx)(y.a,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Skills:"}),Object(d.jsx)(y.a,{name:"lookingForAJobDescription",component:O.a,placeholder:"Skills"})]}),Object(d.jsxs)("div",{className:A.a.contactsBlock,children:[Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Facebook"}),Object(d.jsx)(y.a,{name:"contacts.facebook",component:O.a,type:"text",placeholder:"Facebook"})]}),Object(d.jsxs)("div",{div:!0,className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Website"}),Object(d.jsx)(y.a,{name:"contacts.website",component:O.a,type:"text",placeholder:"Website"})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Twitter"}),Object(d.jsx)(y.a,{name:"contacts.twitter",component:O.a,type:"text",placeholder:"Twitter"})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Instagram"}),Object(d.jsx)(y.a,{name:"contacts.instagram",component:O.a,type:"text",placeholder:"Instagram"})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Youtube"}),Object(d.jsx)(y.a,{name:"contacts.youtube",component:O.a,type:"text",placeholder:"Youtube"})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Github"}),Object(d.jsx)(y.a,{name:"contacts.github",component:O.a,type:"text",placeholder:"Github"})]}),Object(d.jsxs)("div",{className:A.a.fieldWrapper,children:[Object(d.jsx)("p",{children:"Main link"}),Object(d.jsx)(y.a,{name:"contacts.mainLink",component:O.a,type:"text",placeholder:"Main link"})]})]}),Object(d.jsxs)("div",{className:A.a.buttons,children:[Object(d.jsx)("button",{type:"submit",disabled:n||c,children:"Submit"}),Object(d.jsx)("button",{type:"button",onClick:a.reset,disabled:n||c,children:"Reset"})]}),Object(d.jsx)("pre",{})]})}})}):Object(d.jsx)("div",{children:" Loading... "})},T=a(269),M=a.n(T),z=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"30px",height:"30px",viewBox:"0 0 1276.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",children:[Object(d.jsx)("metadata",{children:"Created by potrace 1.15, written by Peter Selinger 2001-2017"}),Object(d.jsx)("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",fill:"rgba(0,0,0,0.5)",stroke:"none",children:Object(d.jsx)("path",{d:"M11145 12790 c-302 -78 -364 -99 -510 -172 -120 -60 -213 -119 -320 -203 -44 -35 -2232 -2216 -4861 -4847 l-4782 -4783 -107 -405 c-60 -223 -116 -434 -126 -470 -26 -100 -219 -818 -236 -880 -32 -123 -44 -167 -122 -457 l-81 -302 0 -135 0 -136 136 0 135 0 302 81 c166 45 325 87 352 94 28 8 86 23 130 35 44 12 231 62 415 111 184 50 358 96 385 104 28 7 221 59 430 115 l380 101 4871 4872 c4810 4811 4872 4873 4947 4987 75 114 170 299 202 395 163 480 55 946 -313 1360 -200 225 -440 389 -687 468 -107 34 -157 44 -307 62 -136 16 -186 17 -233 5z m-230 -667 c69 -198 215 -426 398 -621 37 -40 67 -77 65 -82 -2 -4 -363 -362 -803 -795 -440 -433 -939 -926 -1110 -1094 -170 -169 -614 -606 -985 -971 -371 -365 -821 -809 -1000 -985 -179 -177 -806 -796 -1395 -1375 -1928 -1899 -2435 -2399 -2825 -2785 -1279 -1266 -1278 -1265 -1327 -1286 -71 -31 -189 -59 -247 -59 -75 0 -113 24 -170 105 -130 187 -151 289 -97 465 18 55 37 138 43 183 l11 82 4546 4548 c2500 2502 4572 4569 4604 4594 64 50 234 153 253 153 6 0 24 -35 39 -77z m774 -942 c156 -100 296 -155 438 -175 l83 -11 -30 -64 c-17 -35 -55 -102 -86 -150 -50 -77 -563 -593 -4719 -4750 l-4663 -4664 -83 -18 c-104 -23 -238 -24 -308 -3 -103 30 -168 124 -198 287 -13 76 -12 281 2 295 2 3 10 0 17 -6 10 -8 176 151 698 666 377 371 984 970 1350 1331 366 360 832 820 1035 1021 204 201 681 671 1060 1045 672 662 965 950 1695 1671 195 192 796 784 1335 1315 539 530 1274 1255 1635 1611 360 356 657 647 659 648 2 0 38 -22 80 -49z m-10547 -8670 c-10 -151 61 -332 210 -528 43 -56 123 -117 178 -134 84 -26 260 -28 323 -4 15 7 17 -2 17 -98 0 -300 120 -528 325 -617 28 -12 91 -29 142 -39 l91 -16 -666 -178 c-367 -98 -671 -177 -677 -177 -5 1 -62 62 -125 137 -63 74 -141 166 -174 204 l-58 69 187 702 c135 505 193 709 208 726 11 12 21 22 22 22 1 0 0 -31 -3 -69z"})})]})})},L=a(49),D=function(e){var t=e.profileInfo,a=e.isOwner,n=e.enebleEditMode,c=t.data,r=c.fullName,s=c.aboutMe,o=c.contacts,i=c.lookingForAJob,l=c.lookingForAJobDescription;return Object(d.jsxs)("div",{className:M.a.profileInfoText,children:[a&&Object(d.jsx)("div",{className:M.a.editButton,onClick:n,children:Object(d.jsx)(z,{})}),Object(d.jsx)("h1",{children:r}),Object(d.jsxs)("p",{children:["About me: ",s]}),Object(d.jsxs)("div",{children:["Looking for a job: ",i?Object(d.jsx)("span",{children:"Yes"}):Object(d.jsx)("span",{children:"No"})]}),i&&Object(d.jsxs)("div",{children:["Profession skills:",l," "]}),Object(d.jsxs)("div",{className:M.a.linksWrapper,children:[Object(d.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(d.jsx)("a",{href:o.github,children:"Github"}),Object(d.jsx)("a",{href:o.facebook,children:"Facebook"}),Object(d.jsx)("a",{href:o.instagram,children:"Instagram"}),Object(d.jsx)("a",{href:o.twitter,children:"Twitter"}),Object(d.jsx)("a",{href:o.website,children:"website"}),Object(d.jsx)("a",{href:o.youtube,children:"Youtube"}),Object(d.jsx)("a",{href:o.mainLink,children:"MainLink"})]})]})},J=a(270),E=a.n(J),G=a.p+"static/media/racoon_ava.164871b9.jpeg",q=a(11),Y=["isOwner","avatarSrc","sendProfilePhoto","profileInfo","startNewDialogFromUsersPage"],R=function(e){var t=e.isOwner,a=e.avatarSrc,n=e.sendProfilePhoto,r=e.profileInfo,s=e.startNewDialogFromUsersPage,o=Object(I.a)(e,Y),i=Object(c.useState)(!1),l=Object(k.a)(i,2),j=l[0],b=l[1],u=Object(c.useState)(null),f=Object(k.a)(u,2),p=f[0],O=f[1];return Object(d.jsxs)("div",{className:E.a.avatarBlock,children:[Object(d.jsx)(S,{status:o.status,updateStatus:o.updateStatus,isOwner:t}),Object(d.jsx)("img",{className:E.a.avatarImg,src:a||G,alt:"ava"}),t?Object(d.jsx)("div",{className:E.a.avatarSettingBlock,children:j?Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&O(e.target.files[0])},className:E.a.newAvatarInput}),Object(d.jsx)("button",{onClick:function(){n(p),O(null),b(!1)},className:E.a.newAvatarSendButton,disabled:!p,children:"Set new photo"}),Object(d.jsx)("div",{className:E.a.closeButton,onClick:function(){O(null),b(!1)},children:Object(d.jsx)(C,{size:"30px"})})]}):Object(d.jsx)("div",{className:E.a.avatarSettingBlockHeader,onClick:function(){b(!0)},children:"Set new photo"})}):Object(d.jsx)(q.b,{to:"../../dialogs/",className:E.a.avatarSettingBlock,onClick:function(){s(r.data.userId)},children:" START DIALOG "})]})},H=["isOwner","profileInfo","updateProfileInfo","sendProfilePhoto"],U=function(e){var t=e.isOwner,a=e.profileInfo,r=e.updateProfileInfo,s=e.sendProfilePhoto,o=Object(I.a)(e,H),i=Object(c.useState)(!1),l=Object(k.a)(i,2),j=l[0],b=l[1];return Object(d.jsxs)("div",{className:N.a.profileInfo,children:[Object(d.jsx)("div",{className:N.a.avatarBlockWrapper,children:a.isFetching?Object(d.jsx)(L.a,{}):Object(d.jsx)(R,Object(n.a)({avatarSrc:a.data.photos.large,sendProfilePhoto:s,isOwner:t,profileInfo:a},o))}),Object(d.jsx)("div",{className:N.a.profileInfoTextWrapper,children:a.isFetching?Object(d.jsx)(L.a,{}):j?Object(d.jsx)(F,Object(n.a)(Object(n.a)({},o),{},{profileInfo:a,updateProfileInfo:r,disableEditMode:function(){b(!1)}})):Object(d.jsx)("div",{className:N.a.profileInfoText,children:Object(d.jsx)(D,Object(n.a)(Object(n.a)({},o),{},{isOwner:t,profileInfo:a,enebleEditMode:function(){b(!0)}}))})})]})},V=function(e){return Object(d.jsxs)("main",{className:g.a.content,children:[Object(d.jsx)(U,Object(n.a)({},e)),Object(d.jsx)(v,{})]})},X=a(3),Z=a(191),K=a(24),Q=function(e){return e.profilePage.profileInfo},$=function(e){return e.profilePage.status},ee=a(47);t.default=Object(K.d)((function(e){return function(t){var a=Object(X.h)();return Object(d.jsx)(e,Object(n.a)(Object(n.a)({},t),{},{params:a}))}}),Z.a,Object(r.b)((function(e){return{profileInfo:Q(e),status:$(e)}}),{setProfile:s.f,getStatus:s.d,updateStatus:s.h,sendProfilePhoto:s.e,updateProfileInfo:s.g,startNewDialogFromUsersPage:ee.f}))((function(e){var t=!e.params.userId;return Object(c.useEffect)((function(){var t=e.params.userId;e.setProfile(t),e.getStatus(t)}),[e.params.userId]),e.profileInfo.data?Object(d.jsx)(V,Object(n.a)(Object(n.a)({},e),{},{isOwner:t})):Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"90vh"},children:Object(d.jsx)(L.a,{})})}))}}]);
//# sourceMappingURL=5.6d9be46c.chunk.js.map