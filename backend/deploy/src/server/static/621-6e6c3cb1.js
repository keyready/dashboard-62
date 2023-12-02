"use strict";(self.webpackChunkntti_2023_client=self.webpackChunkntti_2023_client||[]).push([[621],{5500:(e,n,t)=>{t.d(n,{Jp:()=>s,ln:()=>M,L6:()=>a,Cb:()=>i,jx:()=>l});var r=t(4268),a=(0,r.hg)("Folder/createFolder",(function(e,n){return t=void 0,r=void 0,o=function(){var t,r,a,o;return function(e,n){var t,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(s){switch(s.label){case 0:t=n.extra,r=n.rejectWithValue,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,t.api.post("/api/folder/create",e)];case 2:if(!(a=s.sent()).data)throw new Error;return[2,a.data];case 3:return o=s.sent(),console.log(o),[2,r("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function i(e){try{l(o.throw(e))}catch(e){n(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,i)}l((o=o.apply(t,r||[])).next())}));var t,r,a,o})),o=(0,r.oM)({name:"FolderSlice",initialState:{data:void 0,isLoading:!1,error:void 0},reducers:{},extraReducers:function(e){e.addCase(a.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(a.fulfilled,(function(e){e.isLoading=!1})).addCase(a.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),s=(o.actions,o.reducer),i=function(e){var n;return null===(n=e.folder)||void 0===n?void 0:n.isLoading},l=t(8608).p.injectEndpoints({endpoints:function(e){return{fetchFolders:e.query({query:function(){return{url:"/api/folder/fetch_all"}}})}}}).useFetchFoldersQuery,c=t(5893),d=t(4807),u=t(7294),f=t(7543),p=t(7828),h=t(2469),x=t(3855),v=t(9250),b=t(7820),g=t(3379),m=t.n(g),j=t(7795),y=t.n(j),w=t(569),k=t.n(w),Z=t(3565),C=t.n(Z),F=t(9216),N=t.n(F),A=t(4589),L=t.n(A),O=t(568),S={};S.styleTagTransform=L(),S.setAttributes=C(),S.insert=k().bind(null,"head"),S.domAPI=y(),S.insertStyleElement=N(),m()(O.Z,S);const P=O.Z&&O.Z.locals?O.Z.locals:void 0;var E=function(){return E=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},E.apply(this,arguments)},T=(0,u.memo)((function(e){var n=e.className,t=e.folder,r=e.isFirst,a=(0,u.useState)(25),o=a[0],s=a[1],i=(0,u.useState)((0,c.jsx)(h.yr4,{})),l=i[0],g=i[1],m=(0,v.s0)(),j=(0,u.useCallback)((function(){25===o?(s(175),g((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{children:"Распределения"}),(0,c.jsx)(h.LZ3,{})]}))):(s(25),g((0,c.jsx)(h.yr4,{})))}),[o]),y=(0,u.useCallback)((function(){m("".concat(x.h3.allocation,"?folder=").concat(null==t?void 0:t.title))}),[t,m]),w=(0,u.useCallback)((function(){m(x.h3.creategroup)}),[m]);return r?(0,c.jsx)("div",E({className:(0,d.A)(P.wrapper,{},[n])},{children:(0,c.jsxs)(f.g,E({maxW:!0,justify:"between",className:P.FolderCard},{children:[(0,c.jsx)(p.xv,{title:"Создать новую группу"}),(0,c.jsx)(b.z,E({variant:"clear",onClick:w},{children:(0,c.jsx)(h.SPS,{className:P.addIcon})}))]}))})):(0,c.jsx)("div",E({className:(0,d.A)(P.wrapper,{},[n])},{children:(0,c.jsxs)(f.g,E({maxW:!0,justify:"between",className:P.FolderCard},{children:[(0,c.jsx)(p.xv,{title:null==t?void 0:t.title}),(0,c.jsxs)(f.g,E({maxW:!0},{children:[(0,c.jsxs)(f.g,E({maxW:!0},{children:[(0,c.jsx)(p.xv,{size:"extrasmall",text:"Критерий группировки",align:"left",className:P.text}),(0,c.jsx)(p.xv,{size:"extrasmall",text:null==t?void 0:t.groupingRule})]})),(0,c.jsx)(f.U,E({gap:"8",justify:"center",onMouseEnter:j,onMouseLeave:j,onClick:y,style:{width:"".concat(o,"px")},className:P.expand},{children:l}))]}))]}))}))})),I=t(3877),W={};W.styleTagTransform=L(),W.setAttributes=C(),W.insert=k().bind(null,"head"),W.domAPI=y(),W.insertStyleElement=N(),m()(I.Z,W);const _=I.Z&&I.Z.locals?I.Z.locals:void 0;var z=function(){return z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},z.apply(this,arguments)},M=(0,u.memo)((function(e){var n=e.className,t=e.folders;return(0,c.jsxs)(f.U,z({gap:"32",className:(0,d.A)(_.FoldersList,{},[n])},{children:[(0,c.jsx)(T,{isFirst:!0}),(null==t?void 0:t.length)?t.map((function(e){return(0,c.jsx)(T,{folder:e},e.id)})):(0,c.jsx)(p.xv,{title:"Пока групп нет",text:"Но Вы можете их создать!"})]}))}))},6621:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(5893),a=t(4807),o=t(2594),s=t(7294),i=t(9704),l=t(5500),c=t(3379),d=t.n(c),u=t(7795),f=t.n(u),p=t(569),h=t.n(p),x=t(3565),v=t.n(x),b=t(9216),g=t.n(b),m=t(4589),j=t.n(m),y=t(5859),w={};w.styleTagTransform=j(),w.setAttributes=v(),w.insert=h().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=g(),d()(y.Z,w);const k=y.Z&&y.Z.locals?y.Z.locals:void 0;var Z=function(){return Z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},Z.apply(this,arguments)};const C=(0,s.memo)((function(e){var n=e.className;(0,s.useEffect)((function(){document.title="Группировка кандидатов"}),[]);var t=(0,l.jx)(0,{refetchOnMountOrArgChange:!0}),c=t.data,d=t.isLoading,u=t.error;return(0,r.jsxs)(o.T,Z({className:(0,a.A)(k.GroupingPage,{},[n])},{children:[(0,r.jsx)(i.V,{title:"Группировка кандидатов"}),d&&(0,r.jsx)("div",{children:"Загрузка..."}),u&&!d&&(0,r.jsx)("div",{children:"Ошибка при загрузке"}),!d&&!u&&(0,r.jsx)(l.ln,{folders:c})]}))}))},568:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),a=t.n(r),o=t(3645),s=t.n(o)()(a());s.push([e.id,".d20c1{width:390px;height:500px;flex-shrink:0}.b5684{height:100%;padding:30px;border-radius:16px;flex-grow:1;outline:4px solid #b6f09c}.bb134 p{font-weight:bold}.e0efd{cursor:pointer;height:36px;padding:2px;border-radius:8px;background:gray;font-size:16px;transition:200ms;overflow:hidden;white-space:nowrap}.e0efd:hover{color:#000;background:#b6f09c;transform:scale(1.05)}.ea01b{width:75px;height:75px;color:#b6f09c;transition:200ms}.ea01b:hover{transform:scale(1.05)}",""]),s.locals={wrapper:"d20c1",FolderCard:"b5684",text:"bb134",expand:"e0efd",addIcon:"ea01b"};const i=s},3877:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),a=t.n(r),o=t(3645),s=t.n(o)()(a());s.push([e.id,".fcfdd{padding:10px;overflow-x:auto}",""]),s.locals={FoldersList:"fcfdd"};const i=s},5859:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),a=t.n(r),o=t(3645),s=t.n(o)()(a());s.push([e.id,"",""]),s.locals={};const i=s}}]);