"use strict";(self.webpackChunkout_light=self.webpackChunkout_light||[]).push([[858],{2226:function(n,t,r){r.d(t,{p:function(){return g}});var e=r(5861),a=r(3144),c=r(5671),s=r(7757),i=r.n(s),u=r(4569),o=r.n(u),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(t,"/friends"));case 2:return r=n.sent,e=r.data,a=e.data.friends,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e,a,c,s,u,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=7;break}return n.next=3,o().get("".concat(t,"/news"));case 3:return e=n.sent,a=e.data,c=a.data.news,n.abrupt("return",c);case 7:return n.next=9,o().get("/news/search/".concat(r));case 9:return s=n.sent,u=s.data,p=u.data.news,n.abrupt("return",p);case 13:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t,r,e){var a,c,s,u,p,d,f,h,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=9;break}return n.next=3,o().get("".concat(t,"/notices/sell"));case 3:return a=n.sent,c=a.data,s=c.data.notices,n.abrupt("return",s);case 9:if(e){n.next=16;break}return n.next=12,o().get("".concat(t,"/notices/").concat(r));case 12:return u=n.sent,p=u.data,d=p.data.notices,n.abrupt("return",d);case 16:return n.next=18,o()({method:"get",url:"".concat(t,"/notices/find/").concat(r),headers:{authorization:"Bearer ".concat(e)}});case 18:return f=n.sent,h=f.data,l=h.data.pets,n.abrupt("return",l);case 22:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e,a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(t,"/notices/search/").concat(r));case 2:return e=n.sent,a=e.data,c=a.data.news,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t,r,e){var a,c,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()({method:"patch",url:"".concat(t,"/notices/addfavorite/").concat(r),headers:{Authorization:"Bearer ".concat(e)}});case 2:return a=n.sent,c=a.data,s=c.data.notices,n.abrupt("return",s);case 6:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(i().mark((function n(t,r,e){var a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()({method:"patch",url:"".concat(t,"/notices/deletefavorite/").concat(r),headers:{Authorization:"Bearer "+e}});case 2:return a=n.sent,c=a.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}();o().defaults.baseURL="https://team-api-blended2.herokuapp.com";var v=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().post("/pets/add",t,{headers:{Authorization:"Bearer ".concat(r)}});case 2:return e=n.sent,console.log(e),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),m=function(){var n=(0,e.Z)(i().mark((function n(t,r){var e,a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()({method:"get",url:"".concat(t,"/user"),headers:{Authorization:"Bearer ".concat(r)}});case 2:return e=n.sent,a=e.data,c=a.data.user,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),w=(0,a.Z)((function n(){var t=this;(0,c.Z)(this,n),this.getFriends=(0,e.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(t.BASE_URL);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))),this.getNews=function(){var n=(0,e.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(t.BASE_URL,r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),this.getNotices=function(){var n=(0,e.Z)(i().mark((function n(r,e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t.BASE_URL,r,e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),this.addToFavorite=function(){var n=(0,e.Z)(i().mark((function n(r,e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(t.BASE_URL,r,e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),this.removeFromFavorite=function(){var n=(0,e.Z)(i().mark((function n(r,e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(t.BASE_URL,r,e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),this.findNotices=function(){var n=(0,e.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h(t.BASE_URL,r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),this.addPet=function(){var n=(0,e.Z)(i().mark((function n(r,e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v(t.BASE_URL,r,e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),this.getUser=function(){var n=(0,e.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m(t.BASE_URL,r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),this.BASE_URL="https://out-light.herokuapp.com"})),g=new w},1959:function(n,t,r){r.d(t,{Z:function(){return u}});var e,a=r(3834),c=r(168),s=r(6444).ZP.div(e||(e=(0,c.Z)(["\nmargin: 0 auto;\ntext-align: center;\n"]))),i=r(184),u=function(){return(0,i.jsxs)(s,{children:[(0,i.jsx)("img",{src:a,alt:"wait"}),(0,i.jsx)("p",{children:"\u041f\u043e\u0447\u0435\u043a\u0430\u0439\u0442\u0435 2-3 \u0442\u0438\u0436\u043d\u0456. \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 5"})]})}},211:function(n,t,r){var e=r(184);t.Z=function(){return(0,e.jsx)("p",{children:"Something went wrong. Try again"})}},8858:function(n,t,r){r.r(t),r.d(t,{default:function(){return z}});var e,a,c,s,i,u,o,p,d,f,h=r(5861),l=r(885),x=r(7757),v=r.n(x),m=r(2226),w=r(2791),g=r(1959),Z=r(211),b=r(168),j=r(6444),k=j.ZP.div(e||(e=(0,b.Z)(["\npadding: 12px 17px 12px 4px;\nborder-radius: 20px;\nbackground-color: white;\ncolor: black;\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\nborder-radius: 40px;\n"]))),y=j.ZP.div(a||(a=(0,b.Z)(["\nmargin-top: 40px;\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-row-gap: 12px;\nfont-weight: 500;\nfont-size: 12px;\nline-height: calc(16 / 12);\n\n@media screen and (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px;\n}\n\n@media screen and (min-width: 1280px) {\n    grid-template-columns: repeat(3, 1fr);\n}\n"]))),A=j.ZP.div(c||(c=(0,b.Z)(["\ndisplay: flex;\ncolumn-gap: 12px;\nmargin-top: 12px;\nalign-items: flex-start;\n"]))),B=j.ZP.h3(s||(s=(0,b.Z)(['\ntext-align: center;\ncolor: #F59256;\ndisplay: block;\n\n&.time {\n\n    /* &:after {\n        content: "hello";\n        top: 100%;\n        left: 0;\n        width: 100%;\n    } */\n}\n']))),P=j.ZP.div(i||(i=(0,b.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 110px;\n"]))),S=j.ZP.div(u||(u=(0,b.Z)(["\nwidth: 150px;\ncolor: black;\n"]))),U=j.ZP.h2(o||(o=(0,b.Z)(["\ndisplay: block;\nfont-weight: 700;\nfont-size: 24px;\nline-height: calc(33 / 24);\ncolor: black;\nmargin-top: 47px;\ntext-align: center;\n\n@media screen and (min-width: 768px) {\nmargin-top: 94px;\n}\n"]))),_=j.ZP.img(p||(p=(0,b.Z)(["\ndisplay: block;\nwidth: 100%;\n"]))),E=j.ZP.li(d||(d=(0,b.Z)(["\n&:not(:last-child) {\n    margin-bottom: 4px;\n}"]))),L=j.ZP.a(f||(f=(0,b.Z)(["\ncolor: inherit;\ntext-decoration: none;\n"]))),R=r(184),z=function(){var n=m.p.getFriends,t=(0,w.useState)([]),r=(0,l.Z)(t,2),e=r[0],a=r[1],c=(0,w.useState)(null),s=(0,l.Z)(c,2),i=s[0],u=s[1],o=(0,w.useState)(!1),p=(0,l.Z)(o,2),d=p[0],f=p[1],x=function(){var t=(0,h.Z)(v().mark((function t(){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,n();case 4:r=t.sent,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),u(t.t0);case 11:return t.prev=11,f(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return(0,w.useEffect)((function(){x()}),[]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(U,{children:"Our friends"}),d&&(0,R.jsx)(g.Z,{}),e&&(0,R.jsx)(y,{children:e.map((function(n){var t=n._id,r=n.imageUrl,e=n.title,a=n.time,c=n.address,s=n.email,i=n.phone;return(0,R.jsxs)(k,{children:[(0,R.jsx)(B,{children:e}),(0,R.jsxs)(A,{children:[(0,R.jsx)(P,{children:(0,R.jsx)(_,{src:r,alt:"".concat(e," img")})}),(0,R.jsx)(S,{children:(0,R.jsxs)("ul",{children:[(0,R.jsxs)(E,{children:["Time: ",(0,R.jsx)("br",{}),(0,R.jsx)("div",{className:"time",children:a?(0,R.jsx)("span",{children:a}):(0,R.jsx)("span",{children:"----------"})})]}),(0,R.jsxs)(E,{children:["Adress:",(0,R.jsx)("br",{}),c?(0,R.jsx)("span",{children:c}):(0,R.jsx)("span",{children:"----------"})]}),(0,R.jsxs)(E,{children:["Email:",(0,R.jsx)("br",{}),s?(0,R.jsx)(L,{href:"mailto:".concat(s),children:s}):(0,R.jsx)("span",{children:"----------"})]}),(0,R.jsxs)(E,{children:["Phone:",(0,R.jsx)("br",{}),i?(0,R.jsx)(L,{href:"tel:".concat(i),children:i}):(0,R.jsx)("span",{children:"----------"})]})]})})]})]},t)}))}),i&&(0,R.jsx)(Z.Z,{})]})}},3834:function(n,t,r){n.exports=r.p+"static/media/wait.05188df7fdd0425fb7ac.jpg"}}]);
//# sourceMappingURL=858.965ca1f1.chunk.js.map