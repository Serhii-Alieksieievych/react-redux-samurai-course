(this.webpackJsonpvsmitniku=this.webpackJsonpvsmitniku||[]).push([[6],{196:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(2),r=(a(0),a(18)),o=a(4),c=a(1),i=function(e){return Object(r.b)((function(e){return{userId:e.auth.id}}))((function(t){return t.userId?Object(c.jsx)(e,Object(n.a)({},t)):Object(c.jsx)(o.a,{replace:!0,to:"/../login"})}))},s=function(e){return Object(r.b)((function(e){return{userId:e.auth.id}}))((function(t){return t.userId?Object(c.jsx)(o.a,{replace:!0,to:"/../profile/me"}):Object(c.jsx)(e,Object(n.a)({},t))}))}},197:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(e){var t=e.size,a=void 0===t?"40px":t,r=e.color,o=void 0===r?"#fff":r,c=e.onClick;return Object(n.jsx)("div",{onClick:c,children:Object(n.jsx)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:a,height:a,viewBox:"0 0 512 512",children:Object(n.jsxs)("g",{children:[Object(n.jsx)("polygon",{fill:o,points:"335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812"}),Object(n.jsx)("path",{fill:o,d:"M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256 C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"})]})})})}},273:function(e,t,a){},274:function(e,t,a){e.exports={item:"Post_item__1d730",avatar:"Post_avatar__3qiak"}},275:function(e,t,a){e.exports={error:"CustomForms_error__1i_LA",textarea:"CustomForms_textarea__24t2G",input:"CustomForms_input__2n7gA"}},303:function(e,t,a){e.exports={content:"Profile_content__2wLDD",decorationImg:"Profile_decorationImg__2jX0x",avatarImg:"Profile_avatarImg__1wNG4"}},304:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__2IJgv",avatarBlockWrapper:"ProfileInfo_avatarBlockWrapper__1ffNm",avatarBlock:"ProfileInfo_avatarBlock__VhcZj",avatarSettingBlock:"ProfileInfo_avatarSettingBlock__1r6mm",profileInfoTextWrapper:"ProfileInfo_profileInfoTextWrapper__1DGdr",profileInfoText:"ProfileInfo_profileInfoText__1Nkz7",avatarImg:"ProfileInfo_avatarImg__2izmI"}},305:function(e,t,a){e.exports={wrapper:"ProfileStatus_wrapper__2PEqT"}},306:function(e,t,a){e.exports={profileInfoTextWrapper:"ProfileInfoText_profileInfoTextWrapper__1JJaZ",linksWrapper:"ProfileInfoText_linksWrapper__1Rit-",editButton:"ProfileInfoText_editButton__1Syij",contactsBlock:"ProfileInfoText_contactsBlock__14jeB"}},307:function(e,t,a){e.exports={avatarBlock:"AvatarBlock_avatarBlock__3iCcj",avatarSettingBlock:"AvatarBlock_avatarSettingBlock__tCN-4",avatarSettingBlockHeader:"AvatarBlock_avatarSettingBlockHeader__3L9W4",newAvatarInput:"AvatarBlock_newAvatarInput__Y5-Aq",newAvatarSendButton:"AvatarBlock_newAvatarSendButton__3vzph",closeButton:"AvatarBlock_closeButton__1shqs",avatarImg:"AvatarBlock_avatarImg__36bhv"}},316:function(e,t,a){"use strict";a.r(t);var n,r=a(2),o=a(0),c=a(18),i=a(55),s=a(273),l=a.n(s),b=a(274),j=a.n(b),u=a(1),f=function(e){var t=e.message,a=e.likesCount;return Object(u.jsxs)("div",{className:j.a.item,children:[Object(u.jsx)("img",{src:"https://n1s2.hsmedia.ru/cd/53/e9/cd53e9c22b9ff0987a1d2727f3a3ee0d/728x485_1_f4e30c6a4f34e0d9b151f62a59f4cc9b@3504x2336_0xac120003_19816963821625299214.jpg",alt:"avatar",className:j.a.avatar}),Object(u.jsx)("p",{className:j.a.postMessage,children:t}),Object(u.jsxs)("div",{children:["Likes: ",a]})]})},d=a(317),x=a(315),O=a(211),p=a(275),m=a.n(p),h=["input","meta"],v=function(e){var t=e.input,a=e.meta,n=Object(O.a)(e,h),o=a.error&&a.touched;return Object(u.jsxs)("div",{className:"".concat(m.a.textareaWrapper," ").concat(o&&m.a.error),children:[t.type?Object(u.jsx)(k,Object(r.a)(Object(r.a)({},t),n)):Object(u.jsx)(g,Object(r.a)(Object(r.a)({},t),n)),Object(u.jsx)("div",{children:o&&Object(u.jsx)("span",{children:a.error})})]})},g=function(e){return Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},e),{},{className:m.a.textarea}))},k=function(e){return Object(u.jsx)("input",Object(r.a)(Object(r.a)({},e),{},{className:m.a.input}))},_=(n=2e3,function(e){if(e)return e.length<=n?void 0:"Max lenhgth is ".concat(n)}),I=Object(x.a)({form:"post"})((function(e){var t=e.handleSubmit;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsx)(d.a,{name:"post",component:v,placeholder:"New post",validate:[_]}),Object(u.jsx)("button",{children:"Add post"})]})})),w=function(e){var t=e.addPost,a=e.posts;return Object(u.jsxs)("div",{children:[Object(u.jsx)(I,{onSubmit:function(e){t(e.post),e.post=""}}),"My posts",Object(u.jsxs)("div",{className:l.a.posts,children:[Object(u.jsx)("h3",{children:"Posts"}),a.map((function(e){return Object(u.jsx)(f,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}))]})]})},P=Object(c.b)((function(e){return{posts:e.profilePage.postsArr,newpost:e.profilePage.currentPostArea}}),(function(e){return{changePost:function(t){e(Object(i.b)(t))},addPost:function(t){e(Object(i.a)(t)),e(Object(i.b)(""))}}}))(w),A=a(303),N=a.n(A),F=a(14),S=a(304),B=a.n(S),y=a(305),C=a.n(y),J=function(e){var t=e.status,a=e.updateStatus,n=e.isOwner,r=Object(o.useState)(!1),c=Object(F.a)(r,2),i=c[0],s=c[1],l=Object(o.useState)(t),b=Object(F.a)(l,2),j=b[0],f=b[1];Object(o.useEffect)((function(){f(t)}),[t]);return Object(u.jsx)("div",{className:C.a.wrapper,children:i?Object(u.jsx)("div",{children:Object(u.jsx)("input",{autoFocus:!0,type:"text",value:j,onBlur:function(){s(!1),a(j)},onChange:function(e){f(e.target.value)}})}):Object(u.jsx)("div",{children:Object(u.jsx)("span",{onDoubleClick:function(){n&&s(!0)},children:t||(n?"Set your status":"This guy hasn't status now")})})})},M=a(197),T=a(203),D=a(232),L=function(e){var t=e.currentUserId,a=e.profileInfo,n=e.updateProfileInfo,r=e.disableEditMode,o=e.setProfile,c=a.data,i=c.fullName,s=c.lookingForAJob,l=c.lookingForAJobDescription,b=c.aboutMe,j=c.contacts,f=j.facebook,d=j.website,x=j.vk,O=j.twitter,p=j.instagram,m=j.youtube,h=j.github,v=j.mainLink;return Object(u.jsxs)("div",{children:[Object(u.jsx)(M.a,{size:"20px",color:"black",onClick:function(){r()}}),Object(u.jsx)(T.d,{initialValues:{fullName:i,lookingForAJob:s,lookingForAJobDescription:l,aboutMe:b,facebook:f,website:d,vk:x,twitter:O,instagram:p,youtube:m,github:h,mainLink:v},validationSchema:D.a({fullName:D.b().max(15,"Must be 15 characters or less").required("Required"),lookingForAJobDescription:D.b().required("Required")}),onSubmit:function(e,a){a.setSubmitting;var c={fullName:e.fullName,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,aboutMe:e.aboutMe,contacts:{facebook:e.facebook,website:e.website,vk:e.vk,twitter:e.twitter,instagram:e.instagram,youtube:e.youtube,github:e.github,mainLink:e.mainLink}};n(c).then((function(){r(),o(t)}))},children:Object(u.jsxs)(T.c,{children:[Object(u.jsx)("label",{htmlFor:"fullName",children:"fullName"}),Object(u.jsx)(T.b,{name:"fullName",type:"text"}),Object(u.jsx)(T.a,{name:"fullName"}),Object(u.jsx)("label",{htmlFor:"lookingForAJob",children:"lookingForAJob"}),Object(u.jsx)(T.b,{name:"lookingForAJob",type:"checkbox"}),Object(u.jsx)(T.a,{name:"lookingForAJob"}),Object(u.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"lookingForAJobDescription"}),Object(u.jsx)(T.b,{name:"lookingForAJobDescription",type:"text"}),Object(u.jsx)(T.a,{name:"lookingForAJobDescription"}),Object(u.jsx)("label",{htmlFor:"aboutMe",children:"About me"}),Object(u.jsx)(T.b,{name:"aboutMe",as:"textarea"}),Object(u.jsx)(T.a,{name:"aboutMe"}),Object(u.jsx)("label",{htmlFor:"facebook",children:"Facebook"}),Object(u.jsx)(T.b,{name:"facebook",type:"text"}),Object(u.jsx)(T.a,{name:"facebook"}),Object(u.jsx)("label",{htmlFor:"website",children:"Website"}),Object(u.jsx)(T.b,{name:"website",type:"text"}),Object(u.jsx)(T.a,{name:"website"}),Object(u.jsx)("label",{htmlFor:"twitter",children:"Twitter"}),Object(u.jsx)(T.b,{name:"twitter",type:"text"}),Object(u.jsx)(T.a,{name:"twitter"}),Object(u.jsx)("label",{htmlFor:"vk",children:"VK"}),Object(u.jsx)(T.b,{name:"vk",type:"text"}),Object(u.jsx)(T.a,{name:"vk"}),Object(u.jsx)("label",{htmlFor:"instagram",children:"Instagram"}),Object(u.jsx)(T.b,{name:"instagram",type:"text"}),Object(u.jsx)(T.a,{name:"instagram"}),Object(u.jsx)("label",{htmlFor:"youtube",children:"Youtube"}),Object(u.jsx)(T.b,{name:"youtube",type:"text"}),Object(u.jsx)(T.a,{name:"youtube"}),Object(u.jsx)("label",{htmlFor:"github",children:"Github"}),Object(u.jsx)(T.b,{name:"github",type:"text"}),Object(u.jsx)(T.a,{name:"github"}),Object(u.jsx)("label",{htmlFor:"mainLink",children:"Main link"}),Object(u.jsx)(T.b,{name:"mainLink",type:"text"}),Object(u.jsx)(T.a,{name:"mainLink"}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})]})},U=a(306),W=a.n(U),z=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"30px",height:"30px",viewBox:"0 0 1276.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",children:[Object(u.jsx)("metadata",{children:"Created by potrace 1.15, written by Peter Selinger 2001-2017"}),Object(u.jsx)("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",fill:"rgba(0,0,0,0.5)",stroke:"none",children:Object(u.jsx)("path",{d:"M11145 12790 c-302 -78 -364 -99 -510 -172 -120 -60 -213 -119 -320 -203 -44 -35 -2232 -2216 -4861 -4847 l-4782 -4783 -107 -405 c-60 -223 -116 -434 -126 -470 -26 -100 -219 -818 -236 -880 -32 -123 -44 -167 -122 -457 l-81 -302 0 -135 0 -136 136 0 135 0 302 81 c166 45 325 87 352 94 28 8 86 23 130 35 44 12 231 62 415 111 184 50 358 96 385 104 28 7 221 59 430 115 l380 101 4871 4872 c4810 4811 4872 4873 4947 4987 75 114 170 299 202 395 163 480 55 946 -313 1360 -200 225 -440 389 -687 468 -107 34 -157 44 -307 62 -136 16 -186 17 -233 5z m-230 -667 c69 -198 215 -426 398 -621 37 -40 67 -77 65 -82 -2 -4 -363 -362 -803 -795 -440 -433 -939 -926 -1110 -1094 -170 -169 -614 -606 -985 -971 -371 -365 -821 -809 -1000 -985 -179 -177 -806 -796 -1395 -1375 -1928 -1899 -2435 -2399 -2825 -2785 -1279 -1266 -1278 -1265 -1327 -1286 -71 -31 -189 -59 -247 -59 -75 0 -113 24 -170 105 -130 187 -151 289 -97 465 18 55 37 138 43 183 l11 82 4546 4548 c2500 2502 4572 4569 4604 4594 64 50 234 153 253 153 6 0 24 -35 39 -77z m774 -942 c156 -100 296 -155 438 -175 l83 -11 -30 -64 c-17 -35 -55 -102 -86 -150 -50 -77 -563 -593 -4719 -4750 l-4663 -4664 -83 -18 c-104 -23 -238 -24 -308 -3 -103 30 -168 124 -198 287 -13 76 -12 281 2 295 2 3 10 0 17 -6 10 -8 176 151 698 666 377 371 984 970 1350 1331 366 360 832 820 1035 1021 204 201 681 671 1060 1045 672 662 965 950 1695 1671 195 192 796 784 1335 1315 539 530 1274 1255 1635 1611 360 356 657 647 659 648 2 0 38 -22 80 -49z m-10547 -8670 c-10 -151 61 -332 210 -528 43 -56 123 -117 178 -134 84 -26 260 -28 323 -4 15 7 17 -2 17 -98 0 -300 120 -528 325 -617 28 -12 91 -29 142 -39 l91 -16 -666 -178 c-367 -98 -671 -177 -677 -177 -5 1 -62 62 -125 137 -63 74 -141 166 -174 204 l-58 69 187 702 c135 505 193 709 208 726 11 12 21 22 22 22 1 0 0 -31 -3 -69z"})})]})})},q=a(54),E=function(e){var t=e.profileInfo,a=e.isOwner,n=e.enebleEditMode,r=t.data,o=r.fullName,c=r.aboutMe,i=r.contacts,s=r.lookingForAJob,l=r.lookingForAJobDescription,b=i.github,j=i.facebook,f=i.instagram,d=i.twitter,x=i.website,O=i.youtube,p=i.mainLink;return Object(u.jsxs)("div",{className:W.a.profileInfoText,children:[a&&Object(u.jsx)("div",{className:W.a.editButton,onClick:n,children:Object(u.jsx)(z,{})}),Object(u.jsx)("h1",{children:o}),Object(u.jsxs)("p",{children:["About me: ",c]}),Object(u.jsxs)("div",{children:["Looking for a job: ",s?Object(u.jsx)("span",{children:"Yes"}):Object(u.jsx)("span",{children:"No"})]}),s&&Object(u.jsxs)("div",{children:["Profession skills:",l," "]}),Object(u.jsxs)("div",{className:W.a.linksWrapper,children:[Object(u.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),b&&Object(u.jsx)("a",{href:b,children:"Github"}),j&&Object(u.jsx)("a",{href:j,children:"Facebook"}),f&&Object(u.jsx)("a",{href:f,children:"Instagram"}),d&&Object(u.jsx)("a",{href:d,children:"Twitter"}),x&&Object(u.jsx)("a",{href:x,children:"website"}),O&&Object(u.jsx)("a",{href:O,children:"Youtube"}),p&&Object(u.jsx)("a",{href:p,children:"MainLink"})]})]})},G=a(307),R=a.n(G),Y=a.p+"static/media/big_ava.5e3bcb90.jpg",H=a(11),V=["isOwner","avatarSrc","sendProfilePhoto","profileInfo","startNewDialogFromUsersPage","currentUserId"],Z=function(e){var t=e.isOwner,a=e.avatarSrc,n=e.sendProfilePhoto,r=e.profileInfo,c=e.startNewDialogFromUsersPage,i=e.currentUserId,s=Object(O.a)(e,V),l=Object(o.useState)(!1),b=Object(F.a)(l,2),j=b[0],f=b[1],d=Object(o.useState)(null),x=Object(F.a)(d,2),p=x[0],m=x[1];return Object(u.jsxs)("div",{className:R.a.avatarBlock,children:[Object(u.jsx)(J,{status:s.status,updateStatus:s.updateStatus,isOwner:t}),Object(u.jsx)("img",{className:R.a.avatarImg,src:a||Y,alt:"ava"}),t?Object(u.jsx)("div",{className:R.a.avatarSettingBlock,children:j?Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&m(e.target.files[0])},className:R.a.newAvatarInput}),Object(u.jsx)("button",{onClick:function(){n(p,i),m(null),f(!1)},className:R.a.newAvatarSendButton,disabled:!p,children:"Set new photo"}),Object(u.jsx)("div",{className:R.a.closeButton,onClick:function(){m(null),f(!1)},children:Object(u.jsx)(M.a,{size:"30px"})})]}):Object(u.jsx)("div",{className:R.a.avatarSettingBlockHeader,onClick:function(){f(!0)},children:"Set new photo"})}):Object(u.jsx)(H.b,{to:"../../dialogs/",className:R.a.avatarSettingBlock,onClick:function(){c(r.data.userId)},children:" START DIALOG "})]})},K=["isOwner","currentUserId","profileInfo","setProfile","updateProfileInfo","sendProfilePhoto"],X=function(e){var t=e.isOwner,a=e.currentUserId,n=e.profileInfo,c=e.setProfile,i=e.updateProfileInfo,s=e.sendProfilePhoto,l=Object(O.a)(e,K),b=Object(o.useState)(!1),j=Object(F.a)(b,2),f=j[0],d=j[1];return Object(u.jsxs)("div",{className:B.a.profileInfo,children:[Object(u.jsx)("div",{className:B.a.avatarBlockWrapper,children:n.isFetching?Object(u.jsx)(q.a,{}):Object(u.jsx)(Z,Object(r.a)({avatarSrc:n.data.photos.large,sendProfilePhoto:s,isOwner:t,profileInfo:n,currentUserId:a},l))}),Object(u.jsx)("div",{className:B.a.profileInfoTextWrapper,children:n.isFetching?Object(u.jsx)(q.a,{}):f?Object(u.jsx)(L,Object(r.a)(Object(r.a)({},l),{},{profileInfo:n,updateProfileInfo:i,disableEditMode:function(){d(!1)},setProfile:c,currentUserId:a})):Object(u.jsx)("div",{className:B.a.profileInfoText,children:Object(u.jsx)(E,Object(r.a)(Object(r.a)({},l),{},{isOwner:t,profileInfo:n,enebleEditMode:function(){d(!0)}}))})})]})},Q=function(e){return Object(u.jsxs)("main",{className:N.a.content,children:[Object(u.jsx)(X,Object(r.a)({},e)),Object(u.jsx)(P,{})]})},$=a(4),ee=a(196),te=a(24),ae=function(e){return e.profilePage.profileInfo},ne=function(e){return e.profilePage.status},re=a(52);t.default=Object(te.d)((function(e){return function(t){var a=Object($.h)();return Object(u.jsx)(e,Object(r.a)(Object(r.a)({},t),{},{params:a}))}}),ee.a,Object(c.b)((function(e){return{profileInfo:ae(e),status:ne(e),currentUserId:e.auth.id}}),{setProfile:i.f,getStatus:i.d,updateStatus:i.h,sendProfilePhoto:i.e,updateProfileInfo:i.g,startNewDialogFromUsersPage:re.j}))((function(e){var t=!e.params.userId;return Object(o.useEffect)((function(){var t=e.params.userId;e.currentUserId&&e.setProfile(t||e.currentUserId),e.currentUserId&&e.getStatus(t||e.currentUserId)}),[e.params.userId]),e.profileInfo.data?Object(u.jsx)(Q,Object(r.a)(Object(r.a)({},e),{},{isOwner:t})):Object(u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"90vh"},children:Object(u.jsx)(q.a,{size:"350",color:"red"})})}))}}]);
//# sourceMappingURL=6.5ddf8509.chunk.js.map