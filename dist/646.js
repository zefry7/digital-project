"use strict";(self.webpackChunkdigital_project=self.webpackChunkdigital_project||[]).push([[646],{646:(e,t,l)=>{l.r(t),l.d(t,{default:()=>h});var a=l(848),n=l(540),i=l(987),o=function(){return o=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const s=(0,n.memo)((function(){var e,t,l,s=null===(t=null===(e=(0,n.useContext)(i.M))||void 0===e?void 0:e.mainPage)||void 0===t?void 0:t.company;return(0,a.jsx)("section",o({className:"mb-[120px] max-tablet:mb-[60px]"},{children:(0,a.jsx)("div",o({className:"padding-content max-tablet:px-0"},{children:(0,a.jsxs)("div",o({className:"bg-whiteBg flex py-[30px] px-[30px] justify-center gap-[30px] max-[620px]:flex-col max-tablet:px-[20px]"},{children:[(0,a.jsx)("div",o({className:"grid grid-cols-2 gap-[30px] max-laptop:grid-cols-1"},{children:null===(l=null==s?void 0:s.img)||void 0===l?void 0:l.map((function(e,t){return(0,a.jsx)("div",o({className:"[&:nth-child(2)]:row-end-3 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:col-start-2 [&:nth-child(2)]:py-[30px] max-laptop:hidden [&:nth-child(1)]:block max-[620px]:mx-auto"},{children:(0,a.jsx)("img",{className:"h-full object-cover",src:null==e?void 0:e.src,alt:null==e?void 0:e.alt,loading:"lazy"})}),t)}))})),(0,a.jsxs)("div",o({className:"w-[400px] max-[620px]:w-full max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center"},{children:[(0,a.jsx)("h2",o({className:"custom-title text-project-name-desktop text-left max-[620px]:mb-[10px]"},{children:null==s?void 0:s.title})),(0,a.jsx)("p",o({className:"text-[16px] font-TTL mb-[20px] max-[620px]:text-center"},{children:null==s?void 0:s.text})),(0,a.jsx)("button",o({className:"custom-button max-tablet:border-greyText max-[620px]:w-full"},{children:null==s?void 0:s.button}))]}))]}))}))}))}));var r=function(){return r=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};const c=(0,n.memo)((function(){var e,t,l,o,s,c,x,d,u,m,p,v,h,f,b,j,g=null===(t=null===(e=(0,n.useContext)(i.M))||void 0===e?void 0:e.mainPage)||void 0===t?void 0:t.feedback,N=(0,n.createRef)(),y=(0,n.createRef)(),w=(0,n.createRef)(),k=(0,n.createRef)(),_=(0,n.useCallback)((function(e,t){""==e.currentTarget.value&&t.current?t.current.style.display="inline":t.current&&(t.current.style.display="none")}),[]),T=(0,n.useCallback)((function(e){var t,l=e.currentTarget.value;(null===(t=l[l.length-1])||void 0===t?void 0:t.match(/[a-zа-я]/i))||(e.currentTarget.value=l.slice(0,l.length-1))}),[]),C=(0,n.useCallback)((function(e){var t=e.currentTarget.value;e.currentTarget.value=t.slice(0,1).toUpperCase()+""+t.slice(1,t.length).toLowerCase()}),[]),O=(0,n.useCallback)((function(e){var t,l=e.currentTarget.value;(null===(t=l[l.length-1])||void 0===t?void 0:t.match(/[0-9+]/))||(e.currentTarget.value=l.slice(0,l.length-1))}),[]),z=(0,n.useCallback)((function(e){var t,l=e.currentTarget.value;(null===(t=l[l.length-1])||void 0===t?void 0:t.match(/[a-z0-9._%+-]/))||(e.currentTarget.value=l.slice(0,l.length-1))}),[]),P=(0,n.useCallback)((function(e){e.preventDefault(),e.currentTarget.reset(),N.current&&(N.current.style.display="inline"),y.current&&(y.current.style.display="inline"),w.current&&(w.current.style.display="inline"),k.current&&(k.current.style.display="block")}),[]),B=(0,n.useCallback)((function(e){k.current&&(k.current.style.display="none")}),[]);return(0,a.jsx)("section",r({className:"mb-[120px] max-tablet:mb-[60px]"},{children:(0,a.jsxs)("div",r({className:"padding-content"},{children:[(0,a.jsx)("h2",r({className:"custom-title mb-[30px]"},{children:null==g?void 0:g.title})),(0,a.jsxs)("div",r({className:"flex gap-[30px] max-laptop:justify-center"},{children:[(0,a.jsxs)("div",r({className:"max-w-[391px] w-full"},{children:[(0,a.jsxs)("form",r({action:"",id:"feedback-form",className:"flex flex-col gap-[10px] mb-[22px] max-w-[391px] w-full",onSubmit:function(e){return P(e)}},{children:[(0,a.jsx)("input",{type:"text",name:"name",placeholder:null===(l=null==g?void 0:g.form)||void 0===l?void 0:l.name,className:"custom-input",maxLength:20,onChange:function(e){return T(e)},onBlur:function(e){return C(e)}}),(0,a.jsxs)("div",r({className:"relative"},{children:[(0,a.jsx)("input",{type:"tel",name:"tel",placeholder:null===(o=null==g?void 0:g.form)||void 0===o?void 0:o.tel,maxLength:12,onInput:function(e){O(e),_(e,N)},className:"custom-input w-full",required:!0}),(0,a.jsx)("span",r({className:"absolute text-red-500 top-[12px] left-[130px]",ref:N},{children:"*"}))]})),(0,a.jsxs)("div",r({className:"relative"},{children:[(0,a.jsx)("input",{type:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:null===(s=null==g?void 0:g.form)||void 0===s?void 0:s.email,onInput:function(e){z(e),_(e,y)},className:"custom-input w-full",required:!0}),(0,a.jsx)("span",r({className:"absolute text-red-500 top-[12px] left-[60px]",ref:y},{children:"*"}))]})),(0,a.jsx)("input",{type:"text",name:"item",placeholder:null===(c=null==g?void 0:g.form)||void 0===c?void 0:c.item,className:"custom-input"}),(0,a.jsxs)("div",r({className:"relative"},{children:[(0,a.jsx)("textarea",{name:"message",placeholder:null===(x=null==g?void 0:g.form)||void 0===x?void 0:x.message,onChange:function(e){return _(e,w)},className:"custom-input h-[145px] w-full",required:!0}),(0,a.jsx)("span",r({className:"absolute text-red-500 top-[12px] left-[98px]",ref:w},{children:"*"}))]}))]})),(0,a.jsx)("p",r({className:"text-[14px] mb-[17px] laptop:pl-[40px] max-laptop:text-center"},{children:null==g?void 0:g.text})),(0,a.jsx)("button",r({type:"submit",form:"feedback-form",className:"custom-button-black max-laptop:mx-auto max-laptop:w-full max-laptop:after:hidden"},{children:null==g?void 0:g.button}))]})),(0,a.jsx)("div",r({className:"max-laptop:hidden"},{children:(0,a.jsx)("img",{className:"min-h-[369px] object-cover",src:null===(d=null==g?void 0:g.img)||void 0===d?void 0:d.src,alt:null===(u=null==g?void 0:g.img)||void 0===u?void 0:u.alt})}))]})),(0,a.jsx)("div",r({className:"fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 hidden",ref:k},{children:(0,a.jsxs)("div",r({className:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[516px] px-[45px] max-big-mobile:px-[20px] h-[421px] w-full bg-white flex flex-col pt-[44px] pb-[22px] items-center border-[1px] border-greyText"},{children:[(0,a.jsx)("div",r({className:"mb-[24px]"},{children:(0,a.jsx)("img",{src:null===(p=null===(m=null==g?void 0:g.sumbit)||void 0===m?void 0:m.img)||void 0===p?void 0:p.src,alt:null===(h=null===(v=null==g?void 0:g.sumbit)||void 0===v?void 0:v.img)||void 0===h?void 0:h.alt,loading:"lazy"})})),(0,a.jsx)("span",r({className:"text-[24px] font-TTB mb-[27px]"},{children:null===(f=null==g?void 0:g.sumbit)||void 0===f?void 0:f.title})),(0,a.jsx)("p",r({className:"text-[14px] font-TTB text-greyText mb-[41px] text-center"},{children:null===(b=null==g?void 0:g.sumbit)||void 0===b?void 0:b.text})),(0,a.jsx)("button",r({className:"custom-button-black after:hidden w-full",onClick:function(e){return B(e)}},{children:null===(j=null==g?void 0:g.sumbit)||void 0===j?void 0:j.button}))]}))}))]}))}))}));var x=function(){return x=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},x.apply(this,arguments)};const d=(0,n.memo)((function(){var e,t,l,o,s,r,c,d,u,m,p,v=null===(e=(0,n.useContext)(i.M))||void 0===e?void 0:e.mainPage;return(0,a.jsx)("section",x({className:"mb-[120px] max-laptop:mb-[100px] max-tablet:mb-[0px]"},{children:(0,a.jsxs)("div",x({className:"tablet:padding-content relative flex items-center gap-[60px] max-tablet:space-x-[0px] max-tablet:flex-col max-laptop:gap-[40px] h-[840px]"},{children:[(0,a.jsxs)("h1",x({className:"intro__title max-laptop:top-[20px]"},{children:[(0,a.jsx)("span",x({className:"font-TTL text-greyLight max-tablet:mr-[6px] max-tablet:text-white max-tablet:font-TTM"},{children:null===(t=null==v?void 0:v.intro)||void 0===t?void 0:t.title[0]})),null===(l=null==v?void 0:v.intro)||void 0===l?void 0:l.title[1]]})),(0,a.jsxs)("div",x({className:"animate-opacity relative min-h-[500px] max-tablet:after:bg-gradient-to-t from-black/60 after:content-[''] after:w-full after:h-full after:inline-block after:absolute after:top-0"},{children:[(0,a.jsx)("img",{className:"object-cover object-left min-h-[500px]",src:null===(s=null===(o=null==v?void 0:v.intro)||void 0===o?void 0:o.img)||void 0===s?void 0:s.src,alt:null===(c=null===(r=null==v?void 0:v.intro)||void 0===r?void 0:r.img)||void 0===c?void 0:c.alt}),(0,a.jsx)("a",x({href:null===(u=null===(d=null==v?void 0:v.intro)||void 0===d?void 0:d.anchor)||void 0===u?void 0:u.href,className:"custom-button intro__anchor z-10"},{children:null===(p=null===(m=null==v?void 0:v.intro)||void 0===m?void 0:m.anchor)||void 0===p?void 0:p.text}))]}))]}))}))}));var u=function(){return u=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},u.apply(this,arguments)};const m=(0,n.memo)((function(){var e,t,l,o,s=null===(t=null===(e=(0,n.useContext)(i.M))||void 0===e?void 0:e.mainPage)||void 0===t?void 0:t.project;return(0,a.jsx)("section",u({className:"mb-[120px] max-tablet:mb-[60px]"},{children:(0,a.jsxs)("div",u({className:"padding-content"},{children:[(0,a.jsx)("h2",u({className:"custom-title"},{children:null==s?void 0:s.title})),(0,a.jsxs)("div",u({className:"mb-[30px] flex flex-col gap-[30px] max-big-mobile:gap-[10px]"},{children:[(0,a.jsx)("div",u({className:"project__block-img "},{children:null===(l=null==s?void 0:s.img)||void 0===l?void 0:l.map((function(e,t){return(0,a.jsxs)("div",u({className:"project__item-img group"},{children:[(0,a.jsx)("img",{className:"w-full max-laptop:h-img-project object-cover",src:null==e?void 0:e.src,alt:null==e?void 0:e.alt,loading:"lazy"}),(0,a.jsxs)("div",u({className:"project__item-wrapper-text"},{children:[(0,a.jsx)("h3",u({className:"project__item-name"},{children:"ДОСУГОВЫЙ ЦЕНТР"})),(0,a.jsx)("button",u({className:"project__item-button"},{children:"ПОДРОБНЕЕ"}))]}))]}),t)}))})),(0,a.jsx)("div",u({className:"project__block-img "},{children:null===(o=null==s?void 0:s.imgBlock2)||void 0===o?void 0:o.map((function(e,t){return(0,a.jsxs)("div",u({className:"project__item-img group"},{children:[(0,a.jsx)("img",{className:"w-full max-laptop:h-img-project object-cover",src:null==e?void 0:e.src,alt:null==e?void 0:e.alt,loading:"lazy"}),(0,a.jsxs)("div",u({className:"project__item-wrapper-text"},{children:[(0,a.jsx)("h3",u({className:"project__item-name"},{children:"ДОСУГОВЫЙ ЦЕНТР"})),(0,a.jsx)("button",u({className:"project__item-button"},{children:"ПОДРОБНЕЕ"}))]}))]}),t)}))}))]})),(0,a.jsx)("button",u({className:"custom-button-black mx-auto max-laptop:max-w-[391px] max-laptop:w-full max-laptop:after:hidden"},{children:null==s?void 0:s.button}))]}))}))}));var p=function(){return p=Object.assign||function(e){for(var t,l=1,a=arguments.length;l<a;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},p.apply(this,arguments)};const v=(0,n.memo)((function(){var e,t,l,o=null===(t=null===(e=(0,n.useContext)(i.M))||void 0===e?void 0:e.mainPage)||void 0===t?void 0:t.task;return(0,a.jsx)("section",p({className:"mb-[84px] max-tablet:mb-[60px]"},{children:(0,a.jsxs)("div",p({className:"padding-content"},{children:[(0,a.jsx)("h2",p({className:"custom-title"},{children:null==o?void 0:o.title})),(0,a.jsx)("div",p({className:"flex justify-between gap-[30px] max-[1240px]:flex-col max-[1240px]:items-center"},{children:null===(l=null==o?void 0:o.text)||void 0===l?void 0:l.map((function(e,t){return(0,a.jsxs)("p",p({className:"flex gap-[30px] text-greyText text-[22px]/[150%] items-center [&:nth-child(2)]:flex-[54%] [&:nth-child(1)]:flex-[35%] max-tablet:text-[18px] max-big-mobile:text-[16px] max-tablet:flex-col max-tablet:text-center max-[1240px]:max-w-[700px] max-tablet:max-w-[500px] "},{children:[(0,a.jsx)("span",p({className:"text-[200px]/[150px] min-w-[116px] text-center font-TTB text-greyEase max-tablet:text-[150px]/[120px] max-tablet:min-w-[70px]"},{children:t+1})),e]}),t)}))}))]}))}))})),h=(0,n.memo)((function(){return(0,a.jsxs)("main",{children:[(0,a.jsx)(d,{}),(0,a.jsx)(s,{}),(0,a.jsx)(v,{}),(0,a.jsx)(m,{}),(0,a.jsx)(c,{})]})}))}}]);