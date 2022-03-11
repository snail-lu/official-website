import{r as e,c as t,o,p as i,a,b as s,d as l,n,t as c,w as r,e as d,f as p,g,T as m,F as h,h as u,v as A,i as I,j as b,k as v,l as x,m as f,q as M}from"./vendor.90b05ab6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={setup:i=>(i,a)=>{const s=e("router-view");return o(),t(s)}},E={},C=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/official-website/${e}`)in E)return;E[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":"modulepreload",t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var B="/official-website/assets/logo.21f19cfe.png";const y={name:"Header",data:()=>({isShowSubNav:!1,timer:null,showWapNavPop:!1}),computed:{routerPath(){return this.$route.path},language(){return this.$i18n.locale}},methods:{linkTo(e){this.showWapNavPop=!1,this.$router.push(e)},switchLanguage(e){this.$i18n.locale=e,localStorage.setItem("langSet",this.$i18n.locale)},showSubNav(){clearTimeout(this.timer),this.isShowSubNav=!0},hideSubNav(){this.timer=setTimeout((()=>{this.isShowSubNav=!1}),50)}}};i("data-v-4e0e9b77");const S={class:"header-container"},k={class:"nav-box-web flex-box flex-h-between flex-v-center"},R={class:"flex-box flex-v-center"},z={class:"nav-item-txt"},T={class:"nav-list flex-box"},N={class:"nav-item-txt"},j={class:"nav-item-txt"},G={class:"nav-item-txt"},L=["title"],Y={class:"sub-nav-item"},P={class:"sub-nav-item"},Q={class:"nav-box-wap flex-box flex-h-between flex-v-center"},D=["title"],W={class:"flex-box flex-h-end"},J={class:"nav-item-wap"},O={class:"sub-nav"};a(),y.render=function(e,t,i,a,p,g){return o(),s("div",S,[l("div",k,[l("div",R,[l("img",{class:"logo",src:B,title:"首页",onClick:t[0]||(t[0]=e=>g.linkTo("/"))}),l("div",{class:n({"nav-item":!0,"nav-item-active":"/"==g.routerPath}),onClick:t[1]||(t[1]=e=>g.linkTo("/"))},[l("span",z,c(e.$t("header.home")),1)],2),l("div",T,[l("div",{class:n({"nav-item":!0,"nav-item-active":g.routerPath.includes("/collection"),"nav-item-en":"en"==g.language}),onClick:t[2]||(t[2]=e=>g.linkTo("/collection"))},[l("span",N,c(e.$t("header.collection")),1)],2),l("div",{class:n({"nav-item":!0,"nav-item-active":g.routerPath.includes("/explore")}),onClick:t[3]||(t[3]=e=>g.linkTo("/explore"))},[l("span",j,c(e.$t("header.explore")),1)],2),l("div",{class:n({"nav-item":!0,"nav-item-active":g.routerPath.includes("/about")}),onMouseover:t[4]||(t[4]=(...e)=>g.showSubNav&&g.showSubNav(...e)),onMouseout:t[5]||(t[5]=(...e)=>g.hideSubNav&&g.hideSubNav(...e))},[l("span",G,c(e.$t("header.about")),1)],34)])]),l("div",{title:"cn"==g.language?"切换语言":"switch language",class:"change-language-btn flex-box"},[l("span",{class:n(["btn flex-item-1",["cn"==g.language?"selected-btn":""]]),onClick:t[6]||(t[6]=e=>g.switchLanguage("cn"))},"中",2),l("span",{class:n(["btn flex-item-1",["en"==g.language?"selected-btn":""]]),onClick:t[7]||(t[7]=e=>g.switchLanguage("en"))},"EN",2)],8,L)]),l("div",{class:n({"sub-nav-box flex-box-column":!0,"show-sub-nav-box":p.isShowSubNav,"sub-nav-box-cn":"cn"==g.language}),onMouseover:t[10]||(t[10]=(...e)=>g.showSubNav&&g.showSubNav(...e)),onMouseout:t[11]||(t[11]=(...e)=>g.hideSubNav&&g.hideSubNav(...e))},[l("div",Y,[l("span",{class:"sub-nav-item-txt",onClick:t[8]||(t[8]=e=>g.linkTo("/about/siteinfo"))},c(e.$t("header.siteInfo")),1)]),l("div",P,[l("span",{class:"sub-nav-item-txt",onClick:t[9]||(t[9]=e=>g.linkTo("/about/friends"))},c(e.$t("header.friends")),1)])],34),l("div",Q,[l("div",{class:"nav-list-response",onClick:t[12]||(t[12]=e=>p.showWapNavPop=!0)},"☰"),l("img",{class:"logo",src:B,title:"首页",onClick:t[13]||(t[13]=e=>g.linkTo("/"))}),l("div",{title:"cn"==g.language?"切换语言":"switch language",class:"change-language-btn flex-box"},[l("span",{class:n(["btn flex-item-1",["cn"==g.language?"selected-btn":""]]),onClick:t[14]||(t[14]=e=>g.switchLanguage("cn"))},"中",2),l("span",{class:n(["btn flex-item-1",["en"==g.language?"selected-btn":""]]),onClick:t[15]||(t[15]=e=>g.switchLanguage("en"))},"EN",2)],8,D)]),p.showWapNavPop?(o(),s("div",{key:0,class:"nav-box-wap-pop",onTouchmove:t[22]||(t[22]=r((()=>{}),["prevent"]))},[l("div",W,[l("img",{class:"close-icon",src:"data:image/png;base64,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",title:"关闭",onClick:t[16]||(t[16]=e=>p.showWapNavPop=!1)})]),l("div",null,[l("div",{class:"nav-item-wap",onClick:t[17]||(t[17]=e=>g.linkTo("/"))},c(e.$t("header.home")),1),l("div",{class:"nav-item-wap",onClick:t[18]||(t[18]=e=>g.linkTo("/collection"))},c(e.$t("header.collection")),1),l("div",{class:"nav-item-wap",onClick:t[19]||(t[19]=e=>g.linkTo("/explore"))},c(e.$t("header.explore")),1),l("div",J,c(e.$t("header.about")),1),l("div",O,[l("div",{class:"sub-nav-item-wap",onClick:t[20]||(t[20]=e=>g.linkTo("/story/siteinfo"))},"- "+c(e.$t("header.siteInfo")),1),l("div",{class:"sub-nav-item-wap",onClick:t[21]||(t[21]=e=>g.linkTo("/story/friends"))},"- "+c(e.$t("header.friends")),1)])])],32)):d("",!0)])},y.__scopeId="data-v-4e0e9b77";const Z={name:"Footer",data:()=>({isShowPopup:!1,showType:1}),methods:{linkTo(e){this.$router.push(e),window.scrollTo(0,0)},showPopup(e=1){const{isShowPopup:t}=this;this.showType=e,this.isShowPopup=!t}}};i("data-v-2e967c0a");const U={class:"footer-container"},F={class:"flex-box flex-h-between"},X={class:"title"},H={class:"info flex-box"},V={class:"title",style:{"text-align":"right"}},K={class:"flex-box flex-v-center"},q=l("a",{href:"https://weibo.com/login.php",target:"_blank",class:"wb-btn"},null,-1),_=l("div",{class:"flex-box flex-h-center"},[l("img",{class:"footer-logo",src:B})],-1),$={class:"title"},ee=l("div",{class:"code"},null,-1),te=l("div",{class:"copyright flex-box flex-h-center"},[l("a",{class:"copyright-g",href:"http://beian.miit.gov.cn",target:"_blank"},"工信部备案：xxxxx号-x"),l("div",{class:"copyright-c"},"©2013-2022 xxxx有限公司")],-1);a(),Z.render=function(e,t,i,a,n,u){return o(),s(h,null,[l("div",U,[l("div",F,[l("div",null,[l("div",X,c(e.$t("header.about")),1),l("div",H,[l("div",{class:"nav-link",onClick:t[0]||(t[0]=e=>u.linkTo("/about/siteinfo"))},c(e.$t("header.siteInfo")),1),l("div",{class:"nav-link",onClick:t[1]||(t[1]=e=>u.linkTo("/about/friends"))},c(e.$t("header.friends")),1)])]),l("div",null,[l("div",V,c(e.$t("footer.follow")),1),l("div",K,[l("div",{class:"wx-btn",onClick:t[2]||(t[2]=e=>u.showPopup(1))}),q])])]),_,p(m,{name:"fade",mode:"in-out"},{default:g((()=>[n.isShowPopup?(o(),s("div",{key:0,class:"mask",onClick:t[4]||(t[4]=e=>n.isShowPopup=!1),onTouchmove:t[5]||(t[5]=r((()=>{}),["prevent"]))},[l("div",{class:"popup-box flex-box-column flex-h-center flex-v-center",onClick:t[3]||(t[3]=r((()=>{}),["stop"]))},[l("div",$,c(1==n.showType?e.$t("footer.wechat"):e.$t("footer.redbook")),1),ee])],32)):d("",!0)])),_:1})]),te],64)},Z.__scopeId="data-v-2e967c0a";const oe={name:"Main"};i("data-v-04734cbc");const ie={class:"main-container"};a(),oe.render=function(t,i,a,l,n,c){const r=e("router-view");return o(),s("div",ie,[p(r)])},oe.__scopeId="data-v-04734cbc";const ae={name:"BackToTop",data:()=>({show:!1}),created(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){let e=document.documentElement.scrollTop||document.body.scrollTop;this.show=e>800},backToTop(){let e=document.documentElement.scrollTop||document.body.scrollTop;const t=setInterval((()=>{document.body.scrollTop=document.documentElement.scrollTop=e-=400,e<=0&&clearInterval(t)}),10)}}};i("data-v-369a7add");const se=[l("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAOCAMAAAAc7xz/AAAAAXNSR0IArs4c6QAAAMxQTFRFAAAAAAAAQEBAKysrJCQkICAgOTk5MzMzLi4uKysrNzc3MDAwKysrNjY2MzMzLCwsNTU1MzMzLi4uNTU1MzMzLi4uMzMzMjIyNDQ0MjIyMTExMzMzNDQ0MTExMTExMzMzMzMzMzMzMjIyMjIyMjIyNDQ0MzMzMzMzMjIyMzMzNDQ0MzMzMjIyMzMzMjIyNDQ0MzMzMzMzMjIyMzMzMzMzMzMzMjIyMzMzMjIyMzMzMzMzMjIyMzMzMzMzMjIyMzMzMzMzMzMzMjIyMzMzV/Gt+wAAAER0Uk5TAAIEBgcICQoLDA4QEhMUFxgZHB0eISMkJykqLTE5U1pvkaKosbG1ubu9wcPFycrLzM/Q0tPZ2tzf4OLk5efp6uvv8/MSwHSMAAAAd0lEQVQYGbXB1RKCUABAwaNiXTERbLHBbsSu//8nh2EQ8N1dviLddy/Gr2j/1XmM4oRJg2eLxs1IEJQ0702gfh2n8InppYajep6k8WSXtoarcpoJXIXdXsGj2vMMDsXa5vGVDysZUI8LmaCStclBeygIK651/ugDqLIJnZ2DOf8AAAAASUVORK5CYII="},null,-1)];a(),ae.render=function(e,t,i,a,l,n){return u((o(),s("div",{class:"back-to-top flex-box-column flex-h-center flex-v-center",onClick:t[0]||(t[0]=(...e)=>n.backToTop&&n.backToTop(...e))},se,512)),[[A,l.show]])},ae.__scopeId="data-v-369a7add";const le={name:"Layout",components:{Header:y,Footer:Z,Main:oe,BackToTop:ae}};le.render=function(t,i,a,l,n,c){const r=e("Header"),d=e("Main"),g=e("Footer"),m=e("back-to-top");return o(),s(h,null,[p(r),p(d),I(t.$slots,"default"),p(g),p(m)],64)};var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const ce={name:"Home",components:{Layout:le},methods:{linkTo(e){this.$router.push(e)}}};i("data-v-17df5d3d");const re={class:"home-container"},de={class:"block-1"},pe=l("div",{class:"title"},"冰岛",-1),ge={class:"block-2"},me={class:"flex-box flex-h-center"},he={class:"flex-item-1 first-img-box"},ue=l("div",{class:"flex-item-1 flex-box-column flex-h-center flex-v-center"},"上海",-1),Ae={class:"block-2"},Ie={class:"flex-box flex-h-center"},be=l("div",{class:"flex-item-1 flex-box-column flex-h-center flex-v-center"},"西藏",-1),ve={class:"flex-item-1"},xe={class:"block-2"},fe={class:"flex-box flex-h-center"},Me={class:"flex-item-1 first-img-box"},we=l("div",{class:"flex-item-1 flex-box-column flex-h-center flex-v-center"},"澳大利亚",-1),Ee={class:"block-2"},Ce={class:"flex-box flex-h-center"},Be=l("div",{class:"flex-item-1 flex-box-column flex-h-center flex-v-center"},"新疆",-1),ye={class:"flex-item-1"};a(),ce.render=function(i,a,s,n,c,r){const d=e("lazy-load-img"),m=e("layout");return o(),t(m,null,{default:g((()=>[l("div",re,[l("div",de,[p(d,{src:"https://cdn-usa.skypixel.com/uploads/usa_files/story/bg_image/28fc146f-aad3-473b-b1d3-677e41a0711e.jpg@!story-bg",height:"300px",wrapperClass:"cursor-pointer",onClick:a[0]||(a[0]=e=>r.linkTo("/explore/iceland"))}),pe]),l("div",ge,[l("div",me,[l("div",he,[p(d,{wrapperClass:"cursor-pointer",src:"https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/6d3caf67-d498-4d49-a819-d82bac344b9b.jpg@!1920",onClick:a[1]||(a[1]=e=>r.linkTo("/explore/shanghai"))})]),ue])]),l("div",Ae,[l("div",Ie,[be,l("div",ve,[p(d,{wrapperClass:"cursor-pointer",src:"https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/1b32a36b-59bd-4b7d-8ba3-5ce702c3786e.jpg@!1920",onClick:a[2]||(a[2]=e=>r.linkTo("/explore/tibet"))})])])]),l("div",xe,[l("div",fe,[l("div",Me,[p(d,{wrapperClass:"cursor-pointer",src:"https://cdn-hz.skypixel.com/uploads/cn_files/storynode/image/d7b24793-fcb9-4c87-94be-232d78fe0e1b.jpg@!1200",onClick:a[3]||(a[3]=e=>r.linkTo("/explore/australia"))})]),we])]),l("div",Ee,[l("div",Ce,[Be,l("div",ye,[p(d,{wrapperClass:"cursor-pointer",src:"https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/adcb401e-e025-4d79-a361-7c4227fa26cf.jpg@!1920",onClick:a[4]||(a[4]=e=>r.linkTo("/explore/xinjiang"))})])])])])])),_:1})},ce.__scopeId="data-v-17df5d3d";const Se=[{path:"",component:ce},{path:"/",component:()=>C((()=>Promise.resolve().then((function(){return ne}))),void 0),children:[{path:"collection",name:"collection",component:()=>C((()=>import("./index.adfcc9cd.js")),["assets/index.adfcc9cd.js","assets/index.1c121ac2.css","assets/look-next.53522861.js","assets/vendor.90b05ab6.js"])},{path:"/collection/detail",name:"collectionDetail",component:()=>C((()=>import("./detail.4545da00.js")),["assets/detail.4545da00.js","assets/detail.c7d6ee03.css","assets/look-next.53522861.js","assets/vendor.90b05ab6.js"])},{path:"/about/siteinfo",name:"history",component:()=>C((()=>import("./siteInfo.ac5a5b69.js")),["assets/siteInfo.ac5a5b69.js","assets/siteInfo.f654aa29.css","assets/vendor.90b05ab6.js"])},{path:"/about/friends",name:"friends",component:()=>C((()=>import("./Friends.83bece3f.js")),["assets/Friends.83bece3f.js","assets/Friends.96e3afd1.css","assets/vendor.90b05ab6.js"])},{path:"/explore",name:"explore",component:()=>C((()=>import("./index.52898ea1.js")),["assets/index.52898ea1.js","assets/index.976fb7f8.css","assets/vendor.90b05ab6.js"])},{path:"/explore/iceland",name:"iceland",component:()=>C((()=>import("./iceland.868cae02.js")),["assets/iceland.868cae02.js","assets/iceland.d7975db3.css","assets/vendor.90b05ab6.js"])},{path:"/explore/shanghai",name:"shanghai",component:()=>C((()=>import("./shanghai.15c2bac3.js")),["assets/shanghai.15c2bac3.js","assets/shanghai.186347bb.css","assets/vendor.90b05ab6.js"])},{path:"/explore/tibet",name:"tibet",component:()=>C((()=>import("./tibet.1df43100.js")),["assets/tibet.1df43100.js","assets/tibet.242f566b.css","assets/vendor.90b05ab6.js"])},{path:"/explore/xinjiang",name:"xinjiang",component:()=>C((()=>import("./xinjiang.0d0a026d.js")),["assets/xinjiang.0d0a026d.js","assets/xinjiang.602a62e9.css","assets/vendor.90b05ab6.js"])},{path:"/explore/australia",name:"australia",component:()=>C((()=>import("./australia.93ba08a3.js")),["assets/australia.93ba08a3.js","assets/australia.0224d065.css","assets/vendor.90b05ab6.js"])}]}];var ke=b({history:v("/official-website/"),routes:Se,scrollBehavior:(e,t,o)=>"/explore"===e.path&&o?o:{top:0}});let Re=null;const ze={name:"LazyLoadImg",props:{wrapperClass:{type:String,default:""},borderRadius:{type:String,default:"0"},width:{type:String,default:"100%"},height:{type:String,default:"200px"},src:{type:String,default:""},minTimeOut:{type:String||Number,default:"100"},showDistance:{type:Object,default:()=>{}},effect:{type:String,default:"linear"},duration:{type:String||Number,default:"300"},loadSrc:{type:String,default:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZGVmcz4KICA8cGF0aCBpZD0icGF0aCIgZD0iTTUwIDE1QTE1IDM1IDAgMCAxIDUwIDg1QTE1IDM1IDAgMCAxIDUwIDE1IiBmaWxsPSJub25lIj48L3BhdGg+CiAgPHBhdGggaWQ9InBhdGhhIiBkPSJNMCAwQTE1IDM1IDAgMCAxIDAgNzBBMTUgMzUgMCAwIDEgMCAwIiBmaWxsPSJub25lIj48L3BhdGg+CjwvZGVmcz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgwIDUwIDUwKSI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgiIHN0cm9rZT0iI2RmZGZkZiIgc3Ryb2tlLXdpZHRoPSIzIj48L3VzZT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgiIHN0cm9rZT0iI2RmZGZkZiIgc3Ryb2tlLXdpZHRoPSIzIj48L3VzZT4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoIiBzdHJva2U9IiNkZmRmZGYiIHN0cm9rZS13aWR0aD0iMyI+PC91c2U+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgwIDUwIDUwKSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMTUiIHI9IjkiIGZpbGw9IiNlMTViNjQiPgogIDxhbmltYXRlTW90aW9uIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPgogICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNwYXRoYSI+PC9tcGF0aD4KICA8L2FuaW1hdGVNb3Rpb24+CjwvY2lyY2xlPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNjAgNTAgNTApIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSIxNSIgcj0iOSIgZmlsbD0iI2Y4YjI2YSI+CiAgPGFuaW1hdGVNb3Rpb24gZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC4xNjY2NjY2NjY2NjY2NjY2NnMiPgogICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNwYXRoYSI+PC9tcGF0aD4KICA8L2FuaW1hdGVNb3Rpb24+CjwvY2lyY2xlPgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMTUiIHI9IjkiIGZpbGw9IiNhYmJkODEiPgogIDxhbmltYXRlTW90aW9uIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuMzMzMzMzMzMzMzMzMzMzM3MiPgogICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNwYXRoYSI+PC9tcGF0aD4KICA8L2FuaW1hdGVNb3Rpb24+CjwvY2lyY2xlPgo8L2c+CjwhLS0gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"},errorSrc:{type:String,default:"data:image/png;base64,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"}},data:()=>({status:0,isShow:!1}),watch:{src(){this.isShow&&(this.status=0,this.isShow=!1,this.$nextTick((()=>{this.status=1})))}},mounted(){let e=new IntersectionObserver((([{isIntersecting:t}])=>{t&&(this.status=1,Re=(new Date).getTime(),e.unobserve(this.$refs.loadImg))}),{rootMargin:"0px 0px 100px 0px"});e.observe(this.$refs.loadImg)},destroyed(){this.$emit("destroyed")},methods:{load(){if(0==this.minTimeOut)return void(this.isShow=!0);let e=(new Date).getTime()-Re;e<this.minTimeOut?setTimeout((()=>{this.isShow=!0}),this.minTimeOut-e):this.isShow=!0},error(){this.status=2,this.isShow=!0}}};i("data-v-23275308");const Te=["src"],Ne=["src"],je=["src"];a(),ze.render=function(e,t,i,a,c,r){return o(),s("div",{class:n(["lazy-load-wrapper",i.wrapperClass])},[l("img",{src:i.loadSrc,ref:"loadImg",class:"loading-placeholder",style:x({display:c.isShow?"none":"relative",opacity:c.isShow?"0":"1",borderRadius:i.borderRadius,width:i.width,height:i.height,transition:`opacity ${i.duration/1e3}s ${i.effect}`})},null,12,Te),1==c.status?(o(),s("img",{key:0,class:"main-img",onLoad:t[0]||(t[0]=(...e)=>r.load&&r.load(...e)),onError:t[1]||(t[1]=(...e)=>r.error&&r.error(...e)),src:i.src,style:x({opacity:c.isShow?"1":"0",borderRadius:i.borderRadius,width:i.width,transition:`opacity ${i.duration/1e3}s ${i.effect}`})},null,44,Ne)):d("",!0),2==c.status?(o(),s("img",{key:1,class:"loading-placeholder",src:i.errorSrc,style:x({opacity:c.isShow?"1":"0",borderRadius:i.borderRadius,width:i.width,height:i.height,transition:`opacity ${i.duration/1e3}s ${i.effect}`})},null,12,je)):d("",!0)],2)},ze.__scopeId="data-v-23275308";const Ge=f({locale:localStorage.getItem("langSet")||"cn",messages:{cn:{header:{home:"首页",explore:"探索",collection:"系列",about:"关于",siteInfo:"站点信息",siteDesc:"本站点仅用于学习使用，站点中用到的图片资源均来源于网络，若有侵权，请联系我删除。",friends:"友情链接"},footer:{wechat:"官方微信",follow:"关注"},collection:{collection:"系列"},explore:{learnmore:"探索更多",retract:"收起"}},en:{header:{home:"HOME",explore:"EXPLORE",collection:"COLLECTION",about:"ABOUT",siteInfo:"SITE INFO",siteDesc:"This site is only for learning. The picture resources used in the site are all from the Internet. If there is any infringement, please contact me to delete it.",friends:"FRIENDS LINK"},footer:{wechat:"WECHAT",follow:"FOLLOW"},explore:{learnmore:"Load more",retract:"Retract"}}}}),Le=M(w);Le.use(ke),Le.use(Ge),Le.component("LazyLoadImg",ze),Le.mount("#app");
