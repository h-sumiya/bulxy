import{c as Er,b as M,t as L}from"../chunks/CVPF5q56.js";import{a8 as Nr,p as vr,m as A,n as or,a9 as Ar,aa as ae,w as q,ab as Ir,U as Ke,y as G,s as se,ac as Ee,B as Xe,A as Qe,ad as We,v as Q,x as te,ae as Mr,c as Sr,q as ye,F as Hr,Q as Pr,f as _,H as Dr,r as Ze,t as be,K as Ur,af as we,O as nr,h as ze,ag as $r,N as Lr,ah as Rr,W as jr,ai as Br,aj as Or,k as Fr,ak as Gr,al as qr,I as Vr,j as Yr,am as Kr,an as Xr,R as Qr,X as Je,T as Wr,a5 as a,a6 as r,a4 as F,a7 as o,ao as Zr,a2 as ke}from"../chunks/BMGgzkJ0.js";import{d as zr,s as y}from"../chunks/DadYOdSd.js";import{p as er,i as rr}from"../chunks/DVqXGqto.js";const Te=0,ee=1,Ce=2;function Jr(i,e,t,f,g){A&&or();var u=i,h=Nr(),b=Sr,c=Ke,d,s,l,v=(h?se:Ee)(void 0),m=(h?se:Ee)(void 0),p=!1;function w(n,x){p=!0,x&&(Xe(k),Qe(k),We(b));try{n===Te&&t&&(d?Q(d):d=q(()=>t(u))),n===ee&&f&&(s?Q(s):s=q(()=>f(u,v))),n===Ce&&g&&(l?Q(l):l=q(()=>g(u,m))),n!==Te&&d&&te(d,()=>d=null),n!==ee&&s&&te(s,()=>s=null),n!==Ce&&l&&te(l,()=>l=null)}finally{x&&(We(null),Qe(null),Xe(null),Mr())}}var k=vr(()=>{if(c!==(c=e())){if(Ar(c)){var n=c;p=!1,n.then(x=>{n===c&&(ae(v,x),w(ee,!0))},x=>{if(n===c&&(ae(m,x),w(Ce,!0),!g))throw m.v}),A?d=q(()=>t(u)):Ir(()=>{p||w(Te,!0)})}else ae(v,c),w(ee,!1);return()=>c=Ke}});A&&(u=G)}function ar(i,e){return e}function ea(i,e,t,f){for(var g=[],u=e.length,h=0;h<u;h++)$r(e[h].e,g,!0);var b=u>0&&g.length===0&&t!==null;if(b){var c=t.parentNode;Lr(c),c.append(t),f.clear(),S(i,e[0].prev,e[u-1].next)}Rr(g,()=>{for(var d=0;d<u;d++){var s=e[d];b||(f.delete(s.k),S(i,s.prev,s.next)),jr(s.e,!b)}})}function tr(i,e,t,f,g,u=null){var h=i,b={flags:e,items:new Map,first:null};{var c=i;h=A?ye(Hr(c)):c.appendChild(Pr())}A&&or();var d=null,s=!1,l=Br(()=>{var v=t();return Fr(v)?v:v==null?[]:nr(v)});vr(()=>{var v=_(l),m=v.length;if(s&&m===0)return;s=m===0;let p=!1;if(A){var w=h.data===Dr;w!==(m===0)&&(h=Ze(),ye(h),be(!1),p=!0)}if(A){for(var k=null,n,x=0;x<m;x++){if(G.nodeType===8&&G.data===Ur){h=G,p=!0,be(!1);break}var R=v[x],I=f(R,x);n=lr(G,b,k,null,R,I,x,g,e,t),b.items.set(I,n),k=n}m>0&&ye(Ze())}A||ra(v,b,h,g,e,f,t),u!==null&&(m===0?d?Q(d):d=q(()=>u(h)):d!==null&&te(d,()=>{d=null})),p&&be(!0),_(l)}),A&&(h=G)}function ra(i,e,t,f,g,u,h){var b=i.length,c=e.items,d=e.first,s=d,l,v=null,m=[],p=[],w,k,n,x;for(x=0;x<b;x+=1){if(w=i[x],k=u(w,x),n=c.get(k),n===void 0){var R=s?s.e.nodes_start:t;v=lr(R,e,v,v===null?e.first:v.next,w,k,x,f,g,h),c.set(k,v),m=[],p=[],s=v.next;continue}if(aa(n,w,x),n.e.f&we&&Q(n.e),n!==s){if(l!==void 0&&l.has(n)){if(m.length<p.length){var I=p[0],E;v=I.prev;var V=m[0],Y=m[m.length-1];for(E=0;E<m.length;E+=1)sr(m[E],I,t);for(E=0;E<p.length;E+=1)l.delete(p[E]);S(e,V.prev,Y.next),S(e,v,V),S(e,Y,I),s=I,v=Y,x-=1,m=[],p=[]}else l.delete(n),sr(n,s,t),S(e,n.prev,n.next),S(e,n,v===null?e.first:v.next),S(e,v,n),v=n;continue}for(m=[],p=[];s!==null&&s.k!==k;)s.e.f&we||(l??(l=new Set)).add(s),p.push(s),s=s.next;if(s===null)continue;n=s}m.push(n),v=n,s=n.next}if(s!==null||l!==void 0){for(var H=l===void 0?[]:nr(l);s!==null;)s.e.f&we||H.push(s),s=s.next;var W=H.length;if(W>0){var ie=b===0?t:null;ea(e,H,ie,c)}}ze.first=e.first&&e.first.e,ze.last=v&&v.e}function aa(i,e,t,f){ae(i.v,e),i.i=t}function lr(i,e,t,f,g,u,h,b,c,d){var s=(c&Gr)!==0,l=(c&qr)===0,v=s?l?Ee(g):se(g):g,m=c&Or?se(h):h,p={i:m,v,k:u,a:null,e:null,prev:t,next:f};try{return p.e=q(()=>b(i,v,m,d),A),p.e.prev=t&&t.e,p.e.next=f&&f.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),f!==null&&(f.prev=p,f.e.prev=p.e),p}finally{}}function sr(i,e,t){for(var f=i.next?i.next.e.nodes_start:t,g=e?e.e.nodes_start:t,u=i.e.nodes_start;u!==f;){var h=Vr(u);g.before(u),u=h}}function S(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function re(i,e,t,f){var g=i.__attributes??(i.__attributes={});A&&(g[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||g[e]!==(g[e]=t)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Kr]=t),t==null?i.removeAttribute(e):typeof t!="string"&&ta(i).includes(e)?i[e]=t:i.setAttribute(e,t))}var ir=new Map;function ta(i){var e=ir.get(i.nodeName);if(e)return e;ir.set(i.nodeName,e=[]);for(var t,f=i,g=Element.prototype;g!==f;){t=Xr(f);for(var u in t)t[u].set&&e.push(u);f=Yr(f)}return e}const dr="api/",sa=async()=>(await fetch(dr+"config")).json(),ia=async()=>(await fetch(dr+"state")).json();var va=L('<p class="mb-4 text-gray-600"> </p>'),oa=L('<p class="mb-4 text-sm text-gray-600"> </p>'),na=(i,e,t)=>e(t().from.toString()),la=L('<div class="rounded-lg bg-white p-6 shadow-lg"><div class="mb-4 flex items-center justify-between"><h2 class="text-xl font-semibold text-gray-800"> </h2> <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"> </span></div> <!> <div class="flex justify-between text-sm"><div><p class="text-gray-500">From Port</p> <div class="flex items-center gap-2"><a target="_blank" rel="noopener noreferrer" class="font-mono text-blue-600 hover:text-blue-800"> </a> <button class="rounded p-1 hover:bg-gray-100" title="Copy port number" aria-label="Copy port number"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button></div></div> <div class="text-center"><p class="text-gray-500">↔</p></div> <div><p class="text-gray-500">To Port</p> <p class="font-mono"> </p></div></div></div>'),da=(i,e,t)=>e(t().from.toString()),ca=L('<div class="rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-xl font-semibold text-gray-800"> </h2> <div class="space-y-2"><div><p class="text-sm text-gray-500">Port</p> <div class="flex items-center gap-2"><a target="_blank" rel="noopener noreferrer" class="font-mono text-blue-600 hover:text-blue-800"> </a> <button class="rounded p-1 hover:bg-gray-100" title="Copy port number" aria-label="Copy port number"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button></div></div> <div><p class="text-sm text-gray-500">Directory</p> <p class="truncate font-mono text-sm"> </p></div></div></div>'),pa=L('<div class="min-h-screen bg-gray-100 p-8"><div class="mb-8 rounded-lg bg-white p-6 shadow-lg"><h1 class="mb-4 text-2xl font-bold text-gray-800"> </h1> <!> <div class="grid grid-cols-2 gap-4 md:grid-cols-4"><div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Directory</p> <p class="truncate font-mono text-sm"> </p></div> <div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Dashboard Port</p> <p class="font-semibold"> </p></div> <div class="rounded-lg bg-gray-50 p-4"><p class="text-sm text-gray-500">Mode</p> <p class="font-semibold"> </p></div></div></div> <div class="mb-8 rounded-lg bg-white p-6 shadow-lg"><h2 class="mb-4 text-xl font-bold text-gray-800">System Information</h2> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"><div class="space-y-4"><div><p class="text-gray-500">CPU Model</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">CPU Cores</p> <p class="font-semibold"> </p></div> <div><div class="mb-1 flex justify-between"><p class="text-gray-500">CPU Usage</p> <span class="text-gray-700"> </span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div class="h-2 rounded-full bg-blue-600"></div></div></div></div> <div class="space-y-4"><div><p class="text-gray-500">Total Memory</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">Used Memory</p> <p class="font-semibold"> </p></div> <div><div class="mb-1 flex justify-between"><p class="text-gray-500">Memory Usage</p> <span class="text-gray-700"> </span></div> <div class="h-2 w-full rounded-full bg-gray-200"><div class="h-2 rounded-full bg-blue-600"></div></div></div></div> <div class="space-y-4"><div><p class="text-gray-500">Go Version</p> <p class="font-semibold"> </p></div> <div><p class="text-gray-500">Active Goroutines</p> <p class="font-semibold"> </p></div></div></div></div> <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div></div> <div class="copied-message fixed bottom-4 right-4 hidden rounded bg-gray-800 px-4 py-2 text-white shadow-lg">Copied to clipboard!</div>',1),fa=L('<div class="flex min-h-screen items-center justify-center"><div class="rounded-lg bg-red-100 p-4 text-red-700"> </div></div>'),ua=L('<div class="flex min-h-screen items-center justify-center"><div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div></div>');function xa(i,e){Qr(e,!0);let t=er(sa()),f=er(ia()),g;const u=c=>{var d;navigator.clipboard.writeText(c),clearTimeout(g),g=setTimeout(()=>{var s;(s=document.querySelector(".copied-message"))==null||s.classList.add("hidden")},2e3),(d=document.querySelector(".copied-message"))==null||d.classList.remove("hidden")};var h=Er(),b=Je(h);Jr(b,()=>Promise.all([t,f]),c=>{var d=ua();M(c,d)},(c,d)=>{var s=ke(()=>{var[N,C]=_(d);return{config:N,systemState:C}}),l=ke(()=>_(s).config),v=ke(()=>_(s).systemState),m=pa(),p=Je(m),w=a(p),k=a(w),n=a(k,!0);r(k);var x=o(k,2);{var R=N=>{var C=va(),P=a(C,!0);r(C),F(()=>y(P,_(l).description)),M(N,C)};rr(x,N=>{_(l).description&&N(R)})}var I=o(x,2),E=a(I),V=o(a(E),2),Y=a(V,!0);r(V),r(E);var H=o(E,2),W=o(a(H),2),ie=a(W,!0);r(W),r(H);var Ne=o(H,2),Ae=o(a(Ne),2),cr=a(Ae,!0);r(Ae),r(Ne),r(I),r(w);var ve=o(w,2),Ie=o(a(ve),2),oe=a(Ie),ne=a(oe),Me=o(a(ne),2),pr=a(Me,!0);r(Me),r(ne);var le=o(ne,2),Se=o(a(le),2),fr=a(Se,!0);r(Se),r(le);var He=o(le,2),de=a(He),Pe=o(a(de),2),ur=a(Pe);r(Pe),r(de);var De=o(de,2),_r=a(De);r(De),r(He),r(oe);var ce=o(oe,2),pe=a(ce),Ue=o(a(pe),2),gr=a(Ue);r(Ue),r(pe);var fe=o(pe,2),$e=o(a(fe),2),mr=a($e);r($e),r(fe);var Le=o(fe,2),ue=a(Le),Re=o(a(ue),2),hr=a(Re);r(Re),r(ue);var je=o(ue,2),xr=a(je);r(je),r(Le),r(ce);var Be=o(ce,2),_e=a(Be),Oe=o(a(_e),2),yr=a(Oe,!0);r(Oe),r(_e);var Fe=o(_e,2),Ge=o(a(Fe),2),br=a(Ge,!0);r(Ge),r(Fe),r(Be),r(Ie),r(ve);var ge=o(ve,2);tr(ge,21,()=>Object.entries(_(l).proxy),ar,(N,C)=>{let P=()=>_(C)[0],T=()=>_(C)[1];var D=la(),U=a(D),K=a(U),Z=a(K,!0);r(K);var j=o(K,2),z=a(j,!0);r(j),r(U);var $=o(U,2);{var me=he=>{var xe=oa(),Cr=a(xe,!0);r(xe),F(()=>y(Cr,T().description)),M(he,xe)};rr($,he=>{T().description&&he(me)})}var J=o($,2),B=a(J),X=o(a(B),2),O=a(X),wr=a(O,!0);r(O);var kr=o(O,2);kr.__click=[na,u,T],r(X),r(B);var Ve=o(B,4),Ye=o(a(Ve),2),Tr=a(Ye,!0);r(Ye),r(Ve),r(J),r(D),F(()=>{y(Z,T().display_name||P()),y(z,T().mode),re(O,"href",`http://${window.location.hostname??""}:${T().from??""}`),y(wr,T().from),y(Tr,T().to)}),M(N,D)}),r(ge);var qe=o(ge,2);tr(qe,21,()=>Object.entries(_(l).file),ar,(N,C)=>{let P=()=>_(C)[0],T=()=>_(C)[1];var D=ca(),U=a(D),K=a(U,!0);r(U);var Z=o(U,2),j=a(Z),z=o(a(j),2),$=a(z),me=a($,!0);r($);var J=o($,2);J.__click=[da,u,T],r(z),r(j);var B=o(j,2),X=o(a(B),2),O=a(X,!0);r(X),r(B),r(Z),r(D),F(()=>{y(K,T().display_name||P()),re($,"href",`http://${window.location.hostname??""}:${T().from??""}`),y(me,T().from),y(O,T().dir)}),M(N,D)}),r(qe),r(p),Zr(2),F((N,C,P)=>{y(n,_(l).hostname),y(Y,_(l).dir||"Not set"),y(ie,_(l).dashboard||"Not set"),y(cr,_(l).ephemeral?"Ephemeral":"Persistent"),y(pr,_(v).cpu_model),y(fr,_(v).cpu_cores),y(ur,`${N??""}%`),re(_r,"style",`width: ${_(v).cpu_usage_percent??""}%`),y(gr,`${C??""} GB`),y(mr,`${P??""} GB`),y(hr,`${_(v).mem_used_percent??""}%`),re(xr,"style",`width: ${_(v).mem_used_percent??""}%`),y(yr,_(v).go_version),y(br,_(v).num_goroutine)},[()=>_(v).cpu_usage_percent.toFixed(1),()=>(_(v).mem_total/1024/1024/1024).toFixed(2),()=>(_(v).mem_used/1024/1024/1024).toFixed(2)]),M(c,m)},(c,d)=>{var s=fa(),l=a(s),v=a(l);r(l),r(s),F(()=>y(v,`Failed to load configuration: ${_(d).message??""}`)),M(c,s)}),M(i,h),Wr()}zr(["click"]);export{xa as component};
