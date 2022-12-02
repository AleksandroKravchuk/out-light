"use strict";(self.webpackChunkout_light=self.webpackChunkout_light||[]).push([[664],{6664:function(n,e,t){t.r(e);var i=t(5861),r=t(885),o=t(7757),a=t.n(o),p=t(2791),d=t(5822),s=t(9001),x=t(6409),h=t(470),c=t(6731),l=t(9126),f=t(5562),u=t.n(f),m=t(184);e.default=function(){var n=(0,h.TH)(),e=(0,p.useState)(""),t=(0,r.Z)(e,2),o=t[0],f=t[1],g=(0,p.useState)(""),w=(0,r.Z)(g,2),b=w[0],Z=w[1],v=(0,d.OQ)(),k=(0,r.Z)(v,1)[0],y=(0,p.useState)(!1),P=(0,r.Z)(y,2),j=P[0],z=P[1],D=(0,h.s0)(),C=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"email":f(i);break;case"password":Z(i);break;default:return}},I=function(){var n=(0,i.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={email:o,password:b},n.next=3,k(e).then((function(n){if(n.error)return u().Notify.failure("".concat(n.error.data.message));u().Notify.success("You are logged in"),D("/user",{replace:!0})}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(){f(""),Z("")};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(x.Z,{children:(0,m.jsx)(s.$0,{children:(0,m.jsx)(s.mo,{children:(0,m.jsxs)(s.W2,{children:[(0,m.jsx)(s.Dx,{children:"Login"}),(0,m.jsxs)(s.l0,{onSubmit:function(n){return n.preventDefault(),""!==o&&o.includes("@")?""===b||b.includes(" ")?u().Notify.failure("Please, enter a valid password without spaces!"):(I(),void S()):u().Notify.failure("Please, enter a valid email!")},children:[(0,m.jsx)(s.II,{type:"email",placeholder:"Email",name:"email",value:o,onChange:C,required:!0}),(0,m.jsxs)(s.DL,{children:[(0,m.jsx)(s.II,{type:j?"text":"password",value:b,name:"password",placeholder:"Password",onChange:C,required:!0,minlength:"7",maxlength:"32"}),(0,m.jsx)(s.Sk,{onClick:function(){return z((function(n){return!n}))},children:j?(0,m.jsx)(l.rCC,{}):(0,m.jsx)(l.I$m,{})})]}),(0,m.jsx)(s.zx,{type:"submit",children:"Login"}),(0,m.jsxs)(s.P,{children:["Don`t have an account?`",(0,m.jsx)(c.rU,{to:"/register",state:{from:n},children:(0,m.jsx)(s.Dr,{children:" Register"})})]})]})]})})})})})}},9001:function(n,e,t){t.d(e,{$0:function(){return v},DL:function(){return F},Dr:function(){return I},Dx:function(){return P},II:function(){return j},P:function(){return C},Sk:function(){return M},W2:function(){return y},a5:function(){return S},l0:function(){return z},mo:function(){return k},zx:function(){return D}});var i,r,o,a,p,d,s,x,h,c,l,f,u,m=t(168),g=t(6444),w=t(4250),b=t(961),Z=t(4265),v=g.ZP.section(i||(i=(0,m.Z)(["\n  @media screen and (min-width: 768px) {\n    position: relative;\n  }\n"]))),k=g.ZP.div(r||(r=(0,m.Z)(["\nbackground-color: #FDF7F2;\nposition:relative;\n  background-position: bottom;\n  position: absolute;\n  top: 0px;\n  left:-7%;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width:114%;\n  height: 100vh;\n\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    top: 0px;\n    left: -7%;\nwidth:114%;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    top: 0px;\n    left: -65px;\n    width: 120%;\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1280px) {\n    top: 0px;\n    left: -30px;\n     width: 105%;\n    background-image: url(",");\n  }\n"])),b,Z,w),y=g.ZP.div(o||(o=(0,m.Z)(["\n  margin-top: 30px;\nposition:absolute;\nleft:10%\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    width: 480px;\n\n  }\n\n  @media screen and (min-width: 768px) {\n    top: -10px;\n    left: 10%;\n    /* transform:translateX(-50%) */\n    /* position: absolute; */\n    width: 608px;\n    /* height: 517px; */\n    background: #ffffff;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 40px;\n  }\n  @media screen and (min-width: 1280px) {\n    top: 70px;\n    left: 25%;\n    width: 618px;\n    /* height: 449px; */\n  }\n"]))),P=g.ZP.h2(a||(a=(0,m.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: #111111;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    padding-top: 60px;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n  }\n"]))),j=g.ZP.input(p||(p=(0,m.Z)(["\n  width: 280px;\n  height: 40px;\n  background: #fdf7f2;\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  align-items: center;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n  padding-left: 14px;\n  font-weight: 500;\n  margin-bottom: 16px;\n  // &:invalid {\n  //   border: 1px solid red;\n  // }\n  @media screen and (min-width: 768px) {\n    width: 448px;\n    height: 52px;\n    font-size: 18px;\n    line-height: 25px;\n    padding-left: 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 426px;\n    height: 52px;\n  }\n"]))),z=g.ZP.form(d||(d=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),D=g.ZP.button(s||(s=(0,m.Z)(["\n  width: 280px;\n  height: 40px;\n  background: #f59256;\n  border-radius: 40px;\n  border: none;\n  font-family: 'Manrope';\n  font-style: normal;\n  align-items: center;\n  letter-spacing: 0.04em;\n  color: #ffffff;\n  margin-bottom: 20px;\n  margin-top: 24px;\n  background-color: #f59256;\n  font-size: 18px;\n  line-height: 24px;\n\n  @media screen and (min-width: 768px) {\n    line-height: 27px;\n    font-weight: 500;\n    font-size: 20px;\n    width: 448px;\n    height: 44px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n    height: 48px;\n    margin-bottom: 20px;\n  }\n"]))),C=g.ZP.p(x||(x=(0,m.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n  margin-top: 10px;\n  margin-bottom:20px;\n"]))),I=g.ZP.span(h||(h=(0,m.Z)(["\n  color: rgba(48, 145, 235, 1);\n  border-bottom: 1px solid rgba(48, 145, 235, 1);\n  border-width: thin;\n"]))),S=g.ZP.button(c||(c=(0,m.Z)(["\n  margin-bottom: 40px;\n  color: #000000;\n  width: 458px;\n  height: 48px;\n  background: #ffffff;\n  border-radius: 40px;\n  border: 1px solid #f59256;\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 27px;\n  align-items: center;\n  letter-spacing: 0.04em;\n  color: #000000;\n  @media screen and (min-width: 768px) {\n    line-height: 27px;\n    font-weight: 500;\n    font-size: 20px;\n    width: 448px;\n    height: 44px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n    height: 48px;\n    margin-bottom: 20px;\n  }\n"]))),M=g.ZP.span(l||(l=(0,m.Z)(["\n  position: absolute;\n  background: #fdf7f2;\n  cursor: pointer;\n  align-self: center;\n  top: 12px;\n  right: 20px;\n  @media screen and (min-width: 768px) {\n    top: 18px;\n    right: 20px;\n  }\n"]))),F=g.ZP.div(f||(f=(0,m.Z)(["\n  position: relative;\n"])));g.ZP.div(u||(u=(0,m.Z)(["\n  margin-top: 30px;\n\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    margin: 0 auto;\n    width: 480px;\n  }\n  @media screen and (min-width: 768px) {\n    top: -300px;\n    left: 100px;\n    position: absolute;\n    width: 608px;\n    height: 517px;\n    background: #ffffff;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 40px;\n  }\n  /* @media screen and (min-width: 1280px) {\n    top: 20px;\n    left: 450px;\n    width: 618px;\n    height: 541px;\n  } */\n"])))},4250:function(n,e,t){n.exports=t.p+"static/media/Waves.37258932ae831c4f8073.png"},961:function(n,e,t){n.exports=t.p+"static/media/wavesPhone.4113b880676e40779373.png"},4265:function(n,e,t){n.exports=t.p+"static/media/wavesTablet.b2c9c95741743cc440fe.png"}}]);
//# sourceMappingURL=664.4560bbf3.chunk.js.map