"use strict";(self.webpackChunkntti_2023_client=self.webpackChunkntti_2023_client||[]).push([[112],{4112:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var a=t(5893),r=t(4807),c=t(2594),o=t(7294),s=t(6088),i=t(6410),l=t(7543),u=function(e){var n=e%10,t=e%100;if(t>=11&&t<=14)return"".concat(e," файлов");switch(n){case 1:return"".concat(e," файл");case 2:case 3:case 4:return"".concat(e," файла");default:return"".concat(e," файлов")}},d=t(3379),p=t.n(d),f=t(7795),h=t.n(f),v=t(569),m=t.n(v),b=t(3565),g=t.n(b),j=t(9216),x=t.n(j),y=t(4589),O=t.n(y),Z=t(9760),T={};T.styleTagTransform=O(),T.setAttributes=g(),T.insert=m().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=x(),p()(Z.Z,T);const A=Z.Z&&Z.Z.locals?Z.Z.locals:void 0;var E=function(){return E=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},E.apply(this,arguments)},k=(0,o.memo)((function(e){e.className;var n=(0,o.useState)(0),t=n[0],c=n[1],s=(0,o.useState)(0),d=s[0],p=s[1],f=(0,o.useCallback)((function(){c(0),p(0)}),[]);return(0,a.jsx)(i.p,{onSelect:function(e){for(var n=0,t=0,a=e.files,r=0;r<a.length;r+=1)n+=a[r].size||0,t+=1;c(n),p(t)},headerTemplate:function(e){var n=e.className,c=e.uploadButton,o=e.cancelButton,s=e.chooseButton;return(0,a.jsxs)("div",E({className:(0,r.A)(A.uploadHeader,{},[n])},{children:[(0,a.jsxs)(l.U,E({gap:"8"},{children:[s,c,o]})),(0,a.jsx)("div",{children:(0,a.jsxs)("h2",{children:["Вы выбрали ",u(d)," файлов на"," ",(t/1e6).toFixed(1)," МБ"]})})]}))},onClear:f,onRemove:function(e){c((function(n){return n-e.file.size})),p((function(e){return e-1}))},chooseLabel:"Выберите файлы",uploadLabel:"Загрузить",cancelLabel:"Отменить",mode:"advanced",name:"archives",url:"http://localhost:5000/api/upload",accept:"application/zip,application/x-rar-compressed,application/x-tar,application/gzip,application/x-bzip2",multiple:!0})})),w=t(9704),N=t(2322),S={};S.styleTagTransform=O(),S.setAttributes=g(),S.insert=m().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=x(),p()(N.Z,S);const z=N.Z&&N.Z.locals?N.Z.locals:void 0;var I=t(5999),P=function(){return P=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},P.apply(this,arguments)},B={filesUpload:I.Oe};const C=(0,o.memo)((function(e){var n=e.className;return(0,o.useEffect)((function(){document.title="Загрузите данные"}),[]),(0,a.jsx)(s.W,P({reducers:B},{children:(0,a.jsxs)(c.T,P({className:(0,r.A)(z.UploadFilesPage,{},[n])},{children:[(0,a.jsx)(w.V,{title:"Загрузка резюме"}),(0,a.jsx)(k,{})]}))}))}))},6088:(e,n,t)=>{t.d(n,{W:()=>o});var a=t(5893),r=t(7294),c=t(3942),o=function(e){var n=(0,c.oR)(),t=(0,c.I0)(),o=e.children,s=e.reducers,i=e.removeAfterUnmount,l=void 0===i||i;return(0,r.useEffect)((function(){var e=n.reducerManager.getMountedReducers;return Object.entries(s).forEach((function(a){var r=a[0],c=a[1];e[r]||(n.reducerManager.add(r,c),t({type:"@INIT ".concat(r," reducer")}))})),function(){l&&Object.entries(s).forEach((function(e){var a=e[0];n.reducerManager.remove(a),t({type:"@DESTROY ".concat(a," reducer")})}))}}),[]),(0,a.jsx)(a.Fragment,{children:o})}},9760:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(8081),r=t.n(a),c=t(3645),o=t.n(c)()(r());o.push([e.id,".a056d{justify-content:space-between}",""]),o.locals={uploadHeader:"a056d"};const s=o},2322:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(8081),r=t.n(a),c=t(3645),o=t.n(c)()(r());o.push([e.id,".fd66f{margin:0 0 40px}.dbd82 h1{margin:0}",""]),o.locals={card:"fd66f",textBlock:"dbd82"};const s=o}}]);