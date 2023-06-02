var VuePageStack=function(E,H){"use strict";const a={componentName:"VuePageStack",keyName:"stack-key",pushName:"push",goName:"go",replaceName:"replace",backName:"back",forwardName:"forward"};var u;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE",e[e.COMPONENT=6]="COMPONENT"})(u||(u={}));const A=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)};function V(e,n,s,o){E.callWithAsyncErrorHandling(e,n,U.VNODE_HOOK,[s,o])}const M=e=>e.__isSuspense,R={ENTER:0,LEAVE:1,REORDER:2},U={SETUP_FUNCTION:0,RENDER_FUNCTION:1,WATCH_GETTER:2,WATCH_CALLBACK:3,WATCH_CLEANUP:4,NATIVE_EVENT_HANDLER:5,COMPONENT_EVENT_HANDLER:6,VNODE_HOOK:7};function S(e){e.shapeFlag&=~u.COMPONENT_SHOULD_KEEP_ALIVE,e.shapeFlag&=~u.COMPONENT_KEPT_ALIVE}function P(e){return e.shapeFlag&u.SUSPENSE?e.ssContent:e}const l=[],h=e=>{for(let n=0;n<l.length;n++)if(l[n].key===e)return n;return-1},x=e=>E.defineComponent({name:a.componentName,__isKeepAlive:!0,setup(n,{slots:s}){const o=E.getCurrentInstance(),c=o.ctx,T=o.suspense,{renderer:{p:O,m:I,um:D,o:{createElement:K}}}=c,w=K("div");c.activate=(t,p,_,i,r)=>{const N=t.component;I(t,p,_,R.ENTER,T),O(N.vnode,t,p,_,N,T,i,t.slotScopeIds,r),E.queuePostFlushCb(()=>{N.isDeactivated=!1,N.a&&A(N.a);const f=t.props&&t.props.onVnodeMounted;f&&V(f,N.parent,t)},T)},c.deactivate=t=>{const p=t.component;I(t,w,null,R.LEAVE,T),E.queuePostFlushCb(()=>{p.da&&A(p.da);const _=t.props&&t.props.onVnodeUnmounted;_&&V(_,p.parent,t),p.isDeactivated=!0},T)};function q(t){S(t),D(t,o,T,!0)}let C=null,m=!1;const k=()=>{C!=null&&(m?l[l.length-1].vnode=P(o.subTree):l.push({key:C,vnode:P(o.subTree)}))};return E.onMounted(k),E.onUpdated(k),E.onBeforeUnmount(()=>{for(const t of l)q(t.vnode)}),()=>{C=null,m=!1;const p=H.useRoute().query[e];if(!s.default)return null;const _=s.default(),i=_[0];if(_.length>1)return _;if(!E.isVNode(i)||!(i.shapeFlag&u.STATEFUL_COMPONENT)&&!(i.shapeFlag&u.SUSPENSE))return i;let r=P(i);r.el&&(r=E.cloneVNode(r),i.shapeFlag&u.SUSPENSE&&(i.ssContent=r)),C=p;let N=h(p);if(N!==-1){const f=l[N].vnode;r.el=f.el,r.component=f.component,r.transition&&E.setTransitionHooks(r,r.transition),r.shapeFlag|=u.COMPONENT_KEPT_ALIVE;for(let L=N+1;L<l.length;L++)l[L]=null;l.splice(N+1),m=!0}return r.shapeFlag|=u.COMPONENT_SHOULD_KEEP_ALIVE,M(i.type)?i:r}}}),d={action:a.pushName},y=e=>{const n=e.push.bind(e),s=e.go.bind(e),o=e.replace.bind(e),c=e.back.bind(e),T=e.forward.bind(e);e.push=O=>(d.action=a.pushName,console.log("push"),n(O)),e.go=O=>{d.action=a.goName,console.log("go"),s(O)},e.replace=O=>(d.action=a.replaceName,console.log("replace"),o(O)),e.back=()=>{d.action=a.backName,console.log("back"),c()},e.forward=()=>{d.action=a.forwardName,console.log("forward"),T()}};function g(e,n){return!!e[n]}function b(e){return e.replace(/[xy]/g,n=>{const s=Math.random()*16|0;return(n==="x"?s:s&3|8).toString(16)})}return{install(e,{router:n,name:s=a.componentName,keyName:o=a.keyName}){if(!n)throw Error(`
 vue-router is necessary. 

`);e.component(s,x(o)),y(n),n.beforeEach((c,T)=>{if(g(c.query,o))h(c.query[o])===-1?c.params[o+"-dir"]=a.forwardName:c.params[o+"-dir"]=a.backName;else{c.query[o]=b("xxxxxxxx");const O=d.action===a.replaceName||!g(T.query,o);return{hash:c.hash,path:c.path,name:c.name,params:c.params,query:c.query,meta:c.meta,replace:O}}})}}}(Vue,vueRouter);
//# sourceMappingURL=vue-page-stack.iife.js.map
