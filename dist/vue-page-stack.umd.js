(function(d,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(d=typeof globalThis<"u"?globalThis:d||self,o(d.VuePageStack={},d.Vue))})(this,function(d,o){"use strict";const r={componentName:"VuePageStack",pushName:"push",goName:"go",replaceName:"replace",backName:"back",forwardName:"forward"},c={action:r.pushName,n:1};/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const m=(e,s)=>{for(let i=0;i<e.length;i++)e[i](s)},O={ELEMENT:1,1:"ELEMENT",FUNCTIONAL_COMPONENT:2,2:"FUNCTIONAL_COMPONENT",STATEFUL_COMPONENT:4,4:"STATEFUL_COMPONENT",TEXT_CHILDREN:8,8:"TEXT_CHILDREN",ARRAY_CHILDREN:16,16:"ARRAY_CHILDREN",SLOTS_CHILDREN:32,32:"SLOTS_CHILDREN",TELEPORT:64,64:"TELEPORT",SUSPENSE:128,128:"SUSPENSE",COMPONENT_SHOULD_KEEP_ALIVE:256,256:"COMPONENT_SHOULD_KEEP_ALIVE",COMPONENT_KEPT_ALIVE:512,512:"COMPONENT_KEPT_ALIVE",COMPONENT:6,6:"COMPONENT"};function _(e,s,i,E){o.callWithAsyncErrorHandling(e,s,o.ErrorCodes.VNODE_HOOK,[i,E])}const M=e=>e.__isSuspense,b={ENTER:0,LEAVE:1,REORDER:2};function k(e){e.shapeFlag&=~O.COMPONENT_SHOULD_KEEP_ALIVE,e.shapeFlag&=~O.COMPONENT_KEPT_ALIVE}function S(e){return e.shapeFlag&O.SUSPENSE?e.ssContent:e}const l=[],L=o.defineComponent({name:r.componentName,__isKeepAlive:!0,emits:["back","forward"],setup(e,{slots:s,emit:i}){const E=o.getCurrentInstance(),N=E.ctx,f=E.suspense,{renderer:{p:u,m:h,um:D,o:{createElement:H}}}=N,y=H("div");N.activate=(n,a,t,T,P)=>{const p=n.component;h(n,a,t,b.ENTER,f),u(p.vnode,n,a,t,p,f,T,n.slotScopeIds,P),o.queuePostFlushCb(()=>{p.isDeactivated=!1,p.a&&m(p.a);const A=n.props&&n.props.onVnodeMounted;A&&_(A,p.parent,n)},f)},N.deactivate=n=>{const a=n.component;h(n,y,null,b.LEAVE,f),o.queuePostFlushCb(()=>{a.da&&m(a.da);const t=n.props&&n.props.onVnodeUnmounted;t&&_(t,a.parent,n),a.isDeactivated=!0},f)};function K(n){k(n),D(n,E,f,!0)}let C=!1,g=!1;const V=()=>{C&&(g?l[l.length-1]=S(E.subTree):c.action!=r.replaceName&&l.push(S(E.subTree)))};return o.onMounted(V),o.onUpdated(V),o.onBeforeUnmount(()=>{for(const n of l)K(n)}),()=>{if(C=!1,g=!1,!s.default)return null;const n=s.default(),a=n[0];if(n.length>1)return n;if(!o.isVNode(a)||!(a.shapeFlag&O.STATEFUL_COMPONENT)&&!(a.shapeFlag&O.SUSPENSE))return a;let t=S(a);if(t.el&&(t=o.cloneVNode(t),a.shapeFlag&O.SUSPENSE&&(a.ssContent=t)),C=!0,c.action===r.backName){i("back");const T=-c.n,P=l[l.length-T-1];t.el=P.el,t.component=P.component,t.transition&&o.setTransitionHooks(t,t.transition),t.shapeFlag|=O.COMPONENT_KEPT_ALIVE;for(let p=l.length-T;p<l.length;p++)k(l[p]),l[p]=null;l.splice(l.length-T),g=!0}else i("forward");return t.shapeFlag|=O.COMPONENT_SHOULD_KEEP_ALIVE,M(a.type)?a:t}}}),w=e=>{const s=e.push.bind(e),i=e.go.bind(e),E=e.replace.bind(e),N=e.back.bind(e),f=e.forward.bind(e);e.push=u=>(c.action=r.pushName,s(u)),e.go=u=>{c.action=r.goName,u<0&&(c.action=r.backName,c.n=u),i(u)},e.replace=u=>(c.action=r.replaceName,E(u)),e.back=()=>{c.action=r.backName,c.n=-1,N()},e.forward=()=>{c.action=r.forwardName,f()}},F={install(e,{router:s,backCallback:i,forwardCallback:E}={router:null,backCallback:null,forwardCallback:null}){if(!s)throw Error("router is required");let N=null;s.options.history.listen((f,u,h)=>{N=h}),s.beforeEach(()=>{N&&(N.direction==="back"&&i?i():N.direction==="forward"&&E&&E(),N=null)})}},I=()=>{c.n=-1,c.action=r.backName,console.log("browser back")},R=()=>{c.action=r.forwardName,console.log("browser forward")},U={install(e,{router:s}){if(!s)throw Error(`
 vue-router is necessary. 

`);e.component(r.componentName,L),e.use(F,{router:s,backCallback:I,forwardCallback:R}),w(s)}};d.VuePageStack=L,d.VuePageStackPlugin=U,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
