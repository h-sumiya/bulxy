import{c as Ir,b as I,t as S}from"../chunks/CVPF5q56.js";import{a8 as Sr,p as or,m as N,n as nr,a9 as Hr,aa as se,w as V,ab as Pr,U as Qe,y as F,s as ve,ac as Ne,B as We,A as Ze,ad as ze,v as W,x as ie,ae as Dr,c as Ur,q as we,F as $r,Q as Lr,f,H as Rr,r as Je,t as ke,K as jr,af as Te,O as dr,h as er,ag as Br,N as Or,ah as Gr,W as qr,ai as Fr,k as Vr,aj as Yr,ak as Kr,al as Xr,I as Qr,j as Wr,am as Zr,an as zr,R as Jr,X as rr,T as ea,a5 as a,a6 as r,a4 as q,a7 as o,ao as ra,a2 as Me}from"../chunks/BMGgzkJ0.js";import{d as aa,s as y}from"../chunks/DadYOdSd.js";import{p as ar,i as re}from"../chunks/DVqXGqto.js";const Ce=0,ae=1,Ee=2;function ta(i,e,t,u,g){N&&nr();var _=i,h=Sr(),b=Ur,c=Qe,l,s,d,v=(h?ve:Ne)(void 0),m=(h?ve:Ne)(void 0),p=!1;function w(n,x){p=!0,x&&(We(k),Ze(k),ze(b));try{n===Ce&&t&&(l?W(l):l=V(()=>t(_))),n===ae&&u&&(s?W(s):s=V(()=>u(_,v))),n===Ee&&g&&(d?W(d):d=V(()=>g(_,m))),n!==Ce&&l&&ie(l,()=>l=null),n!==ae&&s&&ie(s,()=>s=null),n!==Ee&&d&&ie(d,()=>d=null)}finally{x&&(ze(null),Ze(null),We(null),Dr())}}var k=or(()=>{if(c!==(c=e())){if(Hr(c)){var n=c;p=!1,n.then(x=>{n===c&&(se(v,x),w(ae,!0))},x=>{if(n===c&&(se(m,x),w(Ee,!0),!g))throw m.v}),N?l=V(()=>t(_)):Pr(()=>{p||w(Ce,!0)})}else se(v,c),w(ae,!1);return()=>c=Qe}});N&&(_=F)}function tr(i,e){return e}function sa(i,e,t,u){for(var g=[],_=e.length,h=0;h<_;h++)Br(e[h].e,g,!0);var b=_>0&&g.length===0&&t!==null;if(b){var c=t.parentNode;Or(c),c.append(t),u.clear(),H(i,e[0].prev,e[_-1].next)}Gr(g,()=>{for(var l=0;l<_;l++){var s=e[l];b||(u.delete(s.k),H(i,s.prev,s.next)),qr(s.e,!b)}})}function sr(i,e,t,u,g,_=null){var h=i,b={flags:e,items:new Map,first:null};{var c=i;h=N?we($r(c)):c.appendChild(Lr())}N&&nr();var l=null,s=!1,d=Fr(()=>{var v=t();return Vr(v)?v:v==null?[]:dr(v)});or(()=>{var v=f(d),m=v.length;if(s&&m===0)return;s=m===0;let p=!1;if(N){var w=h.data===Rr;w!==(m===0)&&(h=Je(),we(h),ke(!1),p=!0)}if(N){for(var k=null,n,x=0;x<m;x++){if(F.nodeType===8&&F.data===jr){h=F,p=!0,ke(!1);break}var j=v[x],A=u(j,x);n=lr(F,b,k,null,j,A,x,g,e,t),b.items.set(A,n),k=n}m>0&&we(Je())}N||ia(v,b,h,g,e,u,t),_!==null&&(m===0?l?W(l):l=V(()=>_(h)):l!==null&&ie(l,()=>{l=null})),p&&ke(!0),f(d)}),N&&(h=F)}function ia(i,e,t,u,g,_,h){var b=i.length,c=e.items,l=e.first,s=l,d,v=null,m=[],p=[],w,k,n,x;for(x=0;x<b;x+=1){if(w=i[x],k=_(w,x),n=c.get(k),n===void 0){var j=s?s.e.nodes_start:t;v=lr(j,e,v,v===null?e.first:v.next,w,k,x,u,g,h),c.set(k,v),m=[],p=[],s=v.next;continue}if(va(n,w,x),n.e.f&Te&&W(n.e),n!==s){if(d!==void 0&&d.has(n)){if(m.length<p.length){var A=p[0],E;v=A.prev;var Y=m[0],K=m[m.length-1];for(E=0;E<m.length;E+=1)ir(m[E],A,t);for(E=0;E<p.length;E+=1)d.delete(p[E]);H(e,Y.prev,K.next),H(e,v,Y),H(e,K,A),s=A,v=K,x-=1,m=[],p=[]}else d.delete(n),ir(n,s,t),H(e,n.prev,n.next),H(e,n,v===null?e.first:v.next),H(e,v,n),v=n;continue}for(m=[],p=[];s!==null&&s.k!==k;)s.e.f&Te||(d??(d=new Set)).add(s),p.push(s),s=s.next;if(s===null)continue;n=s}m.push(n),v=n,s=n.next}if(s!==null||d!==void 0){for(var P=d===void 0?[]:dr(d);s!==null;)s.e.f&Te||P.push(s),s=s.next;var Z=P.length;if(Z>0){var oe=b===0?t:null;sa(e,P,oe,c)}}er.first=e.first&&e.first.e,er.last=v&&v.e}function va(i,e,t,u){se(i.v,e),i.i=t}function lr(i,e,t,u,g,_,h,b,c,l){var s=(c&Kr)!==0,d=(c&Xr)===0,v=s?d?Ne(g):ve(g):g,m=c&Yr?ve(h):h,p={i:m,v,k:_,a:null,e:null,prev:t,next:u};try{return p.e=V(()=>b(i,v,m,l),N),p.e.prev=t&&t.e,p.e.next=u&&u.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),u!==null&&(u.prev=p,u.e.prev=p.e),p}finally{}}function ir(i,e,t){for(var u=i.next?i.next.e.nodes_start:t,g=e?e.e.nodes_start:t,_=i.e.nodes_start;_!==u;){var h=Qr(_);g.before(_),_=h}}function H(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function te(i,e,t,u){var g=i.__attributes??(i.__attributes={});N&&(g[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||g[e]!==(g[e]=t)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Zr]=t),t==null?i.removeAttribute(e):typeof t!="string"&&oa(i).includes(e)?i[e]=t:i.setAttribute(e,t))}var vr=new Map;function oa(i){var e=vr.get(i.nodeName);if(e)return e;vr.set(i.nodeName,e=[]);for(var t,u=i,g=Element.prototype;g!==u;){t=zr(u);for(var _ in t)t[_].set&&e.push(_);u=Wr(u)}return e}const cr="api/",na=async()=>(await fetch(cr+"config")).json(),da=async()=>(await fetch(cr+"state")).json();var la=S('<p class="mb-4 text-gray-600"> </p>'),ca=S('<p class="mb-4 text-sm text-gray-600"> </p>'),fa=(i,e,t)=>e(t().from.toString()),pa=S('<div class="rounded-lg bg-white p-6 shadow-lg"><div class="mb-4 flex items-center justify-between"><h2 class="text-xl font-semibold text-gray-800"> </h2> <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"> </span></div> <!> <div class="flex justify-between text-sm"><div><p class="text-gray-500">From Port</p> <div class="flex items-center gap-2"><a target="_blank" rel="noopener noreferrer" class="font-mono text-blue-600 hover:text-blue-800"> </a> <button class="rounded p-1 hover:bg-gray-100" title="Copy port number" aria-label="Copy port number"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button></div></div> <div class="text-center"><p class="text-gray-500">↔</p></div> <div><p class="text-gray-500">To Port</p> <p class="font-mono"> </p></div></div></div>'),ua=S('<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>'),_a=(i,e,t)=>e(t().from.toString()),ga=S('<div class="rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-xl font-semibold text-gray-800"> </h2> <div class="space-y-2"><div><p class="text-sm text-gray-500">Port</p> <div class="flex items-center gap-2"><a target="_blank" rel="noopener noreferrer" class="font-mono text-blue-600 hover:text-blue-800"> </a> <button class="rounded p-1 hover:bg-gray-100" title="Copy port number" aria-label="Copy port number"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button></div></div> <div><p class="text-sm text-gray-500">Directory</p> <p class="truncate font-mono text-sm"> </p></div></div></div>'),ma=S('<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>'),ha=S('<div class="min-h-screen bg-gray-100 p-8"><div class="mb-8 rounded-lg bg-white p-6 shadow-lg"><h1 class="mb-4 text-2xl font-bold text-gray-800"> </h1> <!> <div class="grid grid-cols-2 gap-4 md:grid-cols-4"><div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Directory</p> <p class="truncate font-mono text-sm"> </p></div> <div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Dashboard Port</p> <p class="font-semibold"> </p></div> <div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Mode</p> <p class="font-semibold"> </p></div></div></div> <div class="mb-8 rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-xl font-bold text-gray-800">System Information</h2> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"><div class="space-y-4"><div><p class="text-gray-500">CPU Model</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">CPU Cores</p> <p class="font-semibold"> </p></div> <div><div class="mb-1 flex justify-between"><p class="text-gray-500">CPU Usage</p> <span class="text-gray-700"> </span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div class="h-2 rounded-full bg-blue-600"></div></div></div></div> <div class="space-y-4"><div><p class="text-gray-500">Total Memory</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">Used Memory</p> <p class="font-semibold"> </p></div> <div><div class="mb-1 flex justify-between"><p class="text-gray-500">Memory Usage</p> <span class="text-gray-700"> </span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div class="h-2 rounded-full bg-blue-600"></div></div></div></div> <div class="space-y-4"><div><p class="text-gray-500">Go Version</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">Active Goroutines</p> <p class="font-semibold"> </p></div></div></div></div> <!> <!></div> <div class="copied-message fixed bottom-4 right-4 hidden rounded bg-gray-800 px-4 py-2 text-white shadow-lg">Copied to clipboard!</div>',1),xa=S('<div class="flex min-h-screen items-center justify-center"><div class="rounded-lg bg-red-100 p-4 text-red-700"> </div></div>'),ya=S('<div class="flex min-h-screen items-center justify-center"><div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div></div>');function Ma(i,e){Jr(e,!0);let t=ar(na()),u=ar(da()),g;const _=c=>{var l;navigator.clipboard.writeText(c),clearTimeout(g),g=setTimeout(()=>{var s;(s=document.querySelector(".copied-message"))==null||s.classList.add("hidden")},2e3),(l=document.querySelector(".copied-message"))==null||l.classList.remove("hidden")};var h=Ir(),b=rr(h);ta(b,()=>Promise.all([t,u]),c=>{var l=ya();I(c,l)},(c,l)=>{var s=Me(()=>{var[T,M]=f(l);return{config:T,systemState:M}}),d=Me(()=>f(s).config),v=Me(()=>f(s).systemState),m=ha(),p=rr(m),w=a(p),k=a(w),n=a(k,!0);r(k);var x=o(k,2);{var j=T=>{var M=la(),D=a(M,!0);r(M),q(()=>y(D,f(d).description)),I(T,M)};re(x,T=>{f(d).description&&T(j)})}var A=o(x,2),E=a(A),Y=o(a(E),2),K=a(Y,!0);r(Y),r(E);var P=o(E,2),Z=o(a(P),2),oe=a(Z,!0);r(Z),r(P);var Ae=o(P,2),Ie=o(a(Ae),2),fr=a(Ie,!0);r(Ie),r(Ae),r(A),r(w);var ne=o(w,2),Se=o(a(ne),2),de=a(Se),le=a(de),He=o(a(le),2),pr=a(He,!0);r(He),r(le);var ce=o(le,2),Pe=o(a(ce),2),ur=a(Pe,!0);r(Pe),r(ce);var De=o(ce,2),fe=a(De),Ue=o(a(fe),2),_r=a(Ue);r(Ue),r(fe);var $e=o(fe,2),gr=a($e);r($e),r(De),r(de);var pe=o(de,2),ue=a(pe),Le=o(a(ue),2),mr=a(Le);r(Le),r(ue);var _e=o(ue,2),Re=o(a(_e),2),hr=a(Re);r(Re),r(_e);var je=o(_e,2),ge=a(je),Be=o(a(ge),2),xr=a(Be);r(Be),r(ge);var Oe=o(ge,2),yr=a(Oe);r(Oe),r(je),r(pe);var Ge=o(pe,2),me=a(Ge),qe=o(a(me),2),br=a(qe,!0);r(qe),r(me);var Fe=o(me,2),Ve=o(a(Fe),2),wr=a(Ve,!0);r(Ve),r(Fe),r(Ge),r(Se),r(ne);var Ye=o(ne,2);{var kr=T=>{var M=ua();sr(M,21,()=>Object.entries(f(d).proxy),tr,(D,U)=>{let he=()=>f(U)[0],C=()=>f(U)[1];var $=pa(),L=a($),X=a(L),z=a(X,!0);r(X);var B=o(X,2),J=a(B,!0);r(B),r(L);var R=o(L,2);{var xe=ye=>{var be=ca(),Ar=a(be,!0);r(be),q(()=>y(Ar,C().description)),I(ye,be)};re(R,ye=>{C().description&&ye(xe)})}var ee=o(R,2),O=a(ee),Q=o(a(O),2),G=a(Q),Cr=a(G,!0);r(G);var Er=o(G,2);Er.__click=[fa,_,C],r(Q),r(O);var Ke=o(O,4),Xe=o(a(Ke),2),Nr=a(Xe,!0);r(Xe),r(Ke),r(ee),r($),q(()=>{y(z,C().display_name||he()),y(J,C().mode),te(G,"href",`http://${window.location.hostname??""}:${C().from??""}`),y(Cr,C().from),y(Nr,C().to)}),I(D,$)}),r(M),I(T,M)};re(Ye,T=>{f(d).proxy&&T(kr)})}var Tr=o(Ye,2);{var Mr=T=>{var M=ma();sr(M,21,()=>Object.entries(f(d).file),tr,(D,U)=>{let he=()=>f(U)[0],C=()=>f(U)[1];var $=ga(),L=a($),X=a(L,!0);r(L);var z=o(L,2),B=a(z),J=o(a(B),2),R=a(J),xe=a(R,!0);r(R);var ee=o(R,2);ee.__click=[_a,_,C],r(J),r(B);var O=o(B,2),Q=o(a(O),2),G=a(Q,!0);r(Q),r(O),r(z),r($),q(()=>{y(X,C().display_name||he()),te(R,"href",`http://${window.location.hostname??""}:${C().from??""}`),y(xe,C().from),y(G,C().dir)}),I(D,$)}),r(M),I(T,M)};re(Tr,T=>{f(d).file&&T(Mr)})}r(p),ra(2),q((T,M,D,U)=>{y(n,f(d).hostname),y(K,f(d).dir||"Not set"),y(oe,f(d).dashboard||"Not set"),y(fr,f(d).ephemeral?"Ephemeral":"Persistent"),y(pr,f(v).cpu_model),y(ur,f(v).cpu_cores),y(_r,`${T??""}%`),te(gr,"style",`width: ${f(v).cpu_usage_percent??""}%`),y(mr,`${M??""} GB`),y(hr,`${D??""} GB`),y(xr,`${U??""}%`),te(yr,"style",`width: ${f(v).mem_used_percent??""}%`),y(br,f(v).go_version),y(wr,f(v).num_goroutine)},[()=>Math.round(f(v).cpu_usage_percent*10)/10,()=>Math.round(f(v).mem_total/1024/1024/1024*10)/10,()=>Math.round(f(v).mem_used/1024/1024/1024*10)/10,()=>Math.round(f(v).mem_used_percent*10)/10]),I(c,m)},(c,l)=>{var s=xa(),d=a(s),v=a(d);r(d),r(s),q(()=>y(v,`Failed to load configuration: ${f(l).message??""}`)),I(c,s)}),I(i,h),ea()}aa(["click"]);export{Ma as component};
