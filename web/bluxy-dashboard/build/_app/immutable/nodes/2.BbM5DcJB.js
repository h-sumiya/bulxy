import{c as Mr,b as M,t as S}from"../chunks/CVPF5q56.js";import{a8 as Sr,p as or,m as A,n as nr,a9 as Hr,aa as se,w as q,ab as Pr,U as Qe,y as G,s as ve,ac as Ae,B as We,A as Ze,ad as ze,v as W,x as ie,ae as Dr,c as Ur,q as we,F as $r,Q as Lr,f,H as Rr,r as Je,t as ke,K as jr,af as Te,O as dr,h as er,ag as Br,N as Or,ah as Fr,W as Gr,ai as qr,k as Vr,aj as Yr,ak as Kr,al as Xr,I as Qr,j as Wr,am as Zr,an as zr,R as Jr,X as rr,T as ea,a5 as a,a6 as r,a4 as F,a7 as o,ao as ra,a2 as Ce}from"../chunks/BMGgzkJ0.js";import{d as aa,s as y}from"../chunks/DadYOdSd.js";import{p as ar,i as re}from"../chunks/DVqXGqto.js";const Ee=0,ae=1,Ne=2;function ta(i,e,t,_,g){A&&nr();var u=i,h=Sr(),b=Ur,c=Qe,l,s,d,v=(h?ve:Ae)(void 0),m=(h?ve:Ae)(void 0),p=!1;function w(n,x){p=!0,x&&(We(k),Ze(k),ze(b));try{n===Ee&&t&&(l?W(l):l=q(()=>t(u))),n===ae&&_&&(s?W(s):s=q(()=>_(u,v))),n===Ne&&g&&(d?W(d):d=q(()=>g(u,m))),n!==Ee&&l&&ie(l,()=>l=null),n!==ae&&s&&ie(s,()=>s=null),n!==Ne&&d&&ie(d,()=>d=null)}finally{x&&(ze(null),Ze(null),We(null),Dr())}}var k=or(()=>{if(c!==(c=e())){if(Hr(c)){var n=c;p=!1,n.then(x=>{n===c&&(se(v,x),w(ae,!0))},x=>{if(n===c&&(se(m,x),w(Ne,!0),!g))throw m.v}),A?l=q(()=>t(u)):Pr(()=>{p||w(Ee,!0)})}else se(v,c),w(ae,!1);return()=>c=Qe}});A&&(u=G)}function tr(i,e){return e}function sa(i,e,t,_){for(var g=[],u=e.length,h=0;h<u;h++)Br(e[h].e,g,!0);var b=u>0&&g.length===0&&t!==null;if(b){var c=t.parentNode;Or(c),c.append(t),_.clear(),H(i,e[0].prev,e[u-1].next)}Fr(g,()=>{for(var l=0;l<u;l++){var s=e[l];b||(_.delete(s.k),H(i,s.prev,s.next)),Gr(s.e,!b)}})}function sr(i,e,t,_,g,u=null){var h=i,b={flags:e,items:new Map,first:null};{var c=i;h=A?we($r(c)):c.appendChild(Lr())}A&&nr();var l=null,s=!1,d=qr(()=>{var v=t();return Vr(v)?v:v==null?[]:dr(v)});or(()=>{var v=f(d),m=v.length;if(s&&m===0)return;s=m===0;let p=!1;if(A){var w=h.data===Rr;w!==(m===0)&&(h=Je(),we(h),ke(!1),p=!0)}if(A){for(var k=null,n,x=0;x<m;x++){if(G.nodeType===8&&G.data===jr){h=G,p=!0,ke(!1);break}var R=v[x],I=_(R,x);n=lr(G,b,k,null,R,I,x,g,e,t),b.items.set(I,n),k=n}m>0&&we(Je())}A||ia(v,b,h,g,e,_,t),u!==null&&(m===0?l?W(l):l=q(()=>u(h)):l!==null&&ie(l,()=>{l=null})),p&&ke(!0),f(d)}),A&&(h=G)}function ia(i,e,t,_,g,u,h){var b=i.length,c=e.items,l=e.first,s=l,d,v=null,m=[],p=[],w,k,n,x;for(x=0;x<b;x+=1){if(w=i[x],k=u(w,x),n=c.get(k),n===void 0){var R=s?s.e.nodes_start:t;v=lr(R,e,v,v===null?e.first:v.next,w,k,x,_,g,h),c.set(k,v),m=[],p=[],s=v.next;continue}if(va(n,w,x),n.e.f&Te&&W(n.e),n!==s){if(d!==void 0&&d.has(n)){if(m.length<p.length){var I=p[0],N;v=I.prev;var V=m[0],Y=m[m.length-1];for(N=0;N<m.length;N+=1)ir(m[N],I,t);for(N=0;N<p.length;N+=1)d.delete(p[N]);H(e,V.prev,Y.next),H(e,v,V),H(e,Y,I),s=I,v=Y,x-=1,m=[],p=[]}else d.delete(n),ir(n,s,t),H(e,n.prev,n.next),H(e,n,v===null?e.first:v.next),H(e,v,n),v=n;continue}for(m=[],p=[];s!==null&&s.k!==k;)s.e.f&Te||(d??(d=new Set)).add(s),p.push(s),s=s.next;if(s===null)continue;n=s}m.push(n),v=n,s=n.next}if(s!==null||d!==void 0){for(var P=d===void 0?[]:dr(d);s!==null;)s.e.f&Te||P.push(s),s=s.next;var Z=P.length;if(Z>0){var oe=b===0?t:null;sa(e,P,oe,c)}}er.first=e.first&&e.first.e,er.last=v&&v.e}function va(i,e,t,_){se(i.v,e),i.i=t}function lr(i,e,t,_,g,u,h,b,c,l){var s=(c&Kr)!==0,d=(c&Xr)===0,v=s?d?Ae(g):ve(g):g,m=c&Yr?ve(h):h,p={i:m,v,k:u,a:null,e:null,prev:t,next:_};try{return p.e=q(()=>b(i,v,m,l),A),p.e.prev=t&&t.e,p.e.next=_&&_.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),_!==null&&(_.prev=p,_.e.prev=p.e),p}finally{}}function ir(i,e,t){for(var _=i.next?i.next.e.nodes_start:t,g=e?e.e.nodes_start:t,u=i.e.nodes_start;u!==_;){var h=Qr(u);g.before(u),u=h}}function H(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function te(i,e,t,_){var g=i.__attributes??(i.__attributes={});A&&(g[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||g[e]!==(g[e]=t)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Zr]=t),t==null?i.removeAttribute(e):typeof t!="string"&&oa(i).includes(e)?i[e]=t:i.setAttribute(e,t))}var vr=new Map;function oa(i){var e=vr.get(i.nodeName);if(e)return e;vr.set(i.nodeName,e=[]);for(var t,_=i,g=Element.prototype;g!==_;){t=zr(_);for(var u in t)t[u].set&&e.push(u);_=Wr(_)}return e}const cr="api/",na=async()=>(await fetch(cr+"config")).json(),da=async()=>(await fetch(cr+"state")).json();var la=S('<p class="mb-4 text-gray-600"> </p>'),ca=S('<p class="mb-4 text-sm text-gray-600"> </p>'),fa=(i,e,t)=>e(t().from.toString()),pa=S('<div class="rounded-lg bg-white p-6 shadow-lg"><div class="mb-4 flex items-center justify-between"><h2 class="text-xl font-semibold text-gray-800"> </h2> <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"> </span></div> <!> <div class="flex justify-between text-sm"><div><p class="text-gray-500">From Port</p> <div class="flex items-center gap-2"><a target="_blank" rel="noopener noreferrer" class="font-mono text-blue-600 hover:text-blue-800"> </a> <button class="rounded p-1 hover:bg-gray-100" title="Copy port number" aria-label="Copy port number"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button></div></div> <div class="text-center"><p class="text-gray-500">↔</p></div> <div><p class="text-gray-500">To Port</p> <p class="font-mono"> </p></div></div></div>'),_a=S('<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>'),ua=(i,e,t)=>e(t().from.toString()),ga=S('<div class="rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-xl font-semibold text-gray-800"> </h2> <div class="space-y-2"><div><p class="text-sm text-gray-500">Port</p> <div class="flex items-center gap-2"><a target="_blank" rel="noopener noreferrer" class="font-mono text-blue-600 hover:text-blue-800"> </a> <button class="rounded p-1 hover:bg-gray-100" title="Copy port number" aria-label="Copy port number"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button></div></div> <div><p class="text-sm text-gray-500">Directory</p> <p class="truncate font-mono text-sm"> </p></div></div></div>'),ma=S('<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>'),ha=S('<div class="min-h-screen bg-gray-100 p-8"><div class="mb-8 rounded-lg bg-white p-6 shadow-lg"><h1 class="mb-4 text-2xl font-bold text-gray-800"> </h1> <!> <div class="grid grid-cols-2 gap-4 md:grid-cols-4"><div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Directory</p> <p class="truncate font-mono text-sm"> </p></div> <div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Dashboard Port</p> <p class="font-semibold"> </p></div> <div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Mode</p> <p class="font-semibold"> </p></div></div></div> <div class="mb-8 rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-xl font-bold text-gray-800">System Information</h2> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"><div class="space-y-4"><div><p class="text-gray-500">CPU Model</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">CPU Cores</p> <p class="font-semibold"> </p></div> <div><div class="mb-1 flex justify-between"><p class="text-gray-500">CPU Usage</p> <span class="text-gray-700"> </span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div class="h-2 rounded-full bg-blue-600"></div></div></div></div> <div class="space-y-4"><div><p class="text-gray-500">Total Memory</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">Used Memory</p> <p class="font-semibold"> </p></div> <div><div class="mb-1 flex justify-between"><p class="text-gray-500">Memory Usage</p> <span class="text-gray-700"> </span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div class="h-2 rounded-full bg-blue-600"></div></div></div></div> <div class="space-y-4"><div><p class="text-gray-500">Go Version</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">Active Goroutines</p> <p class="font-semibold"> </p></div></div></div></div> <!> <!></div> <div class="copied-message fixed bottom-4 right-4 hidden rounded bg-gray-800 px-4 py-2 text-white shadow-lg">Copied to clipboard!</div>',1),xa=S('<div class="flex min-h-screen items-center justify-center"><div class="rounded-lg bg-red-100 p-4 text-red-700"> </div></div>'),ya=S('<div class="flex min-h-screen items-center justify-center"><div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div></div>');function Ca(i,e){Jr(e,!0);let t=ar(na()),_=ar(da()),g;const u=c=>{var l;navigator.clipboard.writeText(c),clearTimeout(g),g=setTimeout(()=>{var s;(s=document.querySelector(".copied-message"))==null||s.classList.add("hidden")},2e3),(l=document.querySelector(".copied-message"))==null||l.classList.remove("hidden")};var h=Mr(),b=rr(h);ta(b,()=>Promise.all([t,_]),c=>{var l=ya();M(c,l)},(c,l)=>{var s=Ce(()=>{var[T,C]=f(l);return{config:T,systemState:C}}),d=Ce(()=>f(s).config),v=Ce(()=>f(s).systemState),m=ha(),p=rr(m),w=a(p),k=a(w),n=a(k,!0);r(k);var x=o(k,2);{var R=T=>{var C=la(),D=a(C,!0);r(C),F(()=>y(D,f(d).description)),M(T,C)};re(x,T=>{f(d).description&&T(R)})}var I=o(x,2),N=a(I),V=o(a(N),2),Y=a(V,!0);r(V),r(N);var P=o(N,2),Z=o(a(P),2),oe=a(Z,!0);r(Z),r(P);var Ie=o(P,2),Me=o(a(Ie),2),fr=a(Me,!0);r(Me),r(Ie),r(I),r(w);var ne=o(w,2),Se=o(a(ne),2),de=a(Se),le=a(de),He=o(a(le),2),pr=a(He,!0);r(He),r(le);var ce=o(le,2),Pe=o(a(ce),2),_r=a(Pe,!0);r(Pe),r(ce);var De=o(ce,2),fe=a(De),Ue=o(a(fe),2),ur=a(Ue);r(Ue),r(fe);var $e=o(fe,2),gr=a($e);r($e),r(De),r(de);var pe=o(de,2),_e=a(pe),Le=o(a(_e),2),mr=a(Le);r(Le),r(_e);var ue=o(_e,2),Re=o(a(ue),2),hr=a(Re);r(Re),r(ue);var je=o(ue,2),ge=a(je),Be=o(a(ge),2),xr=a(Be);r(Be),r(ge);var Oe=o(ge,2),yr=a(Oe);r(Oe),r(je),r(pe);var Fe=o(pe,2),me=a(Fe),Ge=o(a(me),2),br=a(Ge,!0);r(Ge),r(me);var qe=o(me,2),Ve=o(a(qe),2),wr=a(Ve,!0);r(Ve),r(qe),r(Fe),r(Se),r(ne);var Ye=o(ne,2);{var kr=T=>{var C=_a();sr(C,21,()=>Object.entries(f(d).proxy),tr,(D,K)=>{let he=()=>f(K)[0],E=()=>f(K)[1];var U=pa(),$=a(U),X=a($),z=a(X,!0);r(X);var j=o(X,2),J=a(j,!0);r(j),r($);var L=o($,2);{var xe=ye=>{var be=ca(),Ir=a(be,!0);r(be),F(()=>y(Ir,E().description)),M(ye,be)};re(L,ye=>{E().description&&ye(xe)})}var ee=o(L,2),B=a(ee),Q=o(a(B),2),O=a(Q),Er=a(O,!0);r(O);var Nr=o(O,2);Nr.__click=[fa,u,E],r(Q),r(B);var Ke=o(B,4),Xe=o(a(Ke),2),Ar=a(Xe,!0);r(Xe),r(Ke),r(ee),r(U),F(()=>{y(z,E().display_name||he()),y(J,E().mode),te(O,"href",`http://${window.location.hostname??""}:${E().from??""}`),y(Er,E().from),y(Ar,E().to)}),M(D,U)}),r(C),M(T,C)};re(Ye,T=>{f(d).proxy&&T(kr)})}var Tr=o(Ye,2);{var Cr=T=>{var C=ma();sr(C,21,()=>Object.entries(f(d).file),tr,(D,K)=>{let he=()=>f(K)[0],E=()=>f(K)[1];var U=ga(),$=a(U),X=a($,!0);r($);var z=o($,2),j=a(z),J=o(a(j),2),L=a(J),xe=a(L,!0);r(L);var ee=o(L,2);ee.__click=[ua,u,E],r(J),r(j);var B=o(j,2),Q=o(a(B),2),O=a(Q,!0);r(Q),r(B),r(z),r(U),F(()=>{y(X,E().display_name||he()),te(L,"href",`http://${window.location.hostname??""}:${E().from??""}`),y(xe,E().from),y(O,E().dir)}),M(D,U)}),r(C),M(T,C)};re(Tr,T=>{f(d).file&&T(Cr)})}r(p),ra(2),F((T,C,D)=>{y(n,f(d).hostname),y(Y,f(d).dir||"Not set"),y(oe,f(d).dashboard||"Not set"),y(fr,f(d).ephemeral?"Ephemeral":"Persistent"),y(pr,f(v).cpu_model),y(_r,f(v).cpu_cores),y(ur,`${T??""}%`),te(gr,"style",`width: ${f(v).cpu_usage_percent??""}%`),y(mr,`${C??""} GB`),y(hr,`${D??""} GB`),y(xr,`${f(v).mem_used_percent??""}%`),te(yr,"style",`width: ${f(v).mem_used_percent??""}%`),y(br,f(v).go_version),y(wr,f(v).num_goroutine)},[()=>f(v).cpu_usage_percent.toFixed(1),()=>(f(v).mem_total/1024/1024/1024).toFixed(2),()=>(f(v).mem_used/1024/1024/1024).toFixed(2)]),M(c,m)},(c,l)=>{var s=xa(),d=a(s),v=a(d);r(d),r(s),F(()=>y(v,`Failed to load configuration: ${f(l).message??""}`)),M(c,s)}),M(i,h),ea()}aa(["click"]);export{Ca as component};
