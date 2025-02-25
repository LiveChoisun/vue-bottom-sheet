"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("hammerjs"),$=n=>(e.pushScopeId("data-v-973bb1c4"),n=n(),e.popScopeId(),n),M=["aria-hidden"],O=$(()=>e.createElementVNode("div",{class:"bottom-sheet__draggable-thumb"},null,-1)),Y=[O],z=e.defineComponent({__name:"VueBottomSheet",props:{overlay:{type:Boolean,default:!0},overlayColor:{default:"#0000004D"},maxWidth:{default:640},maxHeight:{},transitionDuration:{default:.5},overlayClickClose:{type:Boolean,default:!0},canSwipe:{type:Boolean,default:!0},mainClassName:{default:""},headerClassName:{default:""}},emits:["opened","closed","dragging-up","dragging-down"],setup(n,{expose:h,emit:s}){const o=n;e.useCssVars(t=>({"7ceec89d":H.value,"093fa814":o.overlayColor,"4faab557":x.value,"5fa9f958":V.value,"69a31354":N.value,a9cf51ce:k.value}));const i=e.ref(!1),d=e.ref(0),l=e.ref(100),f=e.ref(!1),g=e.ref(0),v=e.ref(null),_=e.ref(null),u=e.ref(null),b=e.ref(null),C=e.ref(null),S=e.ref(null),w=t=>document.activeElement===t;window.addEventListener("keyup",t=>{if(!v.value)return;const a=v.value.contains(t.target)&&w(t.target);t.key==="Escape"&&!a&&m()});const E=e.computed(()=>["bottom-sheet__content",{"bottom-sheet__content--fullscreen":d.value>=window.innerHeight,"bottom-sheet__content--dragging":f.value}]),H=e.computed(()=>`${o.transitionDuration}s`),V=e.computed(()=>"auto"),k=e.computed(()=>o.maxHeight?`${o.maxHeight}px`:"inherit"),x=e.computed(()=>`${l.value}%`),N=e.computed(()=>`${o.maxWidth}px`),I=async()=>{await e.nextTick(),d.value=_.value.offsetHeight+u.value.clientHeight+b.value.offsetHeight},y=(t,a)=>{if(o.canSwipe){f.value=!0;const c=B=>{B.preventDefault()};t.deltaY>0&&(a==="main"&&t.type==="panup"&&(l.value=p(t.deltaY),t.cancelable&&u.value.addEventListener("touchmove",c)),a==="main"&&t.type==="pandown"&&g.value===0&&(l.value=p(t.deltaY)),a==="area"&&(l.value=p(t.deltaY)),t.type==="panup"&&s("dragging-up"),t.type==="pandown"&&s("dragging-down")),t.isFinal&&(u.value.removeEventListener("touchmove",c),a==="main"&&(g.value=u.value.scrollTop),f.value=!1,l.value>=10?m():l.value=0)}};e.nextTick(()=>{I();const t=new r(S.value,{inputClass:r.TouchMouseInput,recognizers:[[r.Pan,{direction:r.DIRECTION_VERTICAL}]]}),a=new r(u.value,{inputClass:r.TouchMouseInput,recognizers:[[r.Pan,{direction:r.DIRECTION_VERTICAL}]]});t.on("panstart panup pandown panend",c=>{y(c,"area")}),a.on("panstart panup pandown panend",c=>{y(c,"main")})});const T=()=>{l.value=0,document.documentElement.style.overflowY="hidden",document.documentElement.style.overscrollBehavior="none",i.value=!0,s("opened")},m=async()=>{i.value=!1,l.value=100,setTimeout(()=>{document.documentElement.style.overflowY="visible",document.documentElement.style.overscrollBehavior="",s("closed")},o.transitionDuration*1e3)},D=()=>{o.overlayClickClose&&m()},p=t=>{const a=o.maxHeight&&o.maxHeight<=d.value?o.maxHeight:d.value;return t/a*100};return h({open:T,close:m}),(t,a)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",{class:"bottom-sheet",ref_key:"bottomSheet",ref:v,"aria-hidden":!i.value,role:"dialog"},[e.createVNode(e.Transition,null,{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{onClick:D,class:"bottom-sheet__overlay"},null,512),[[e.vShow,t.overlay&&i.value]])]),_:1}),e.createElementVNode("div",{ref_key:"bottomSheetContent",ref:C,class:e.normalizeClass(E.value)},[e.createElementVNode("header",{ref_key:"bottomSheetHeader",ref:_,class:e.normalizeClass(`bottom-sheet__header ${t.headerClassName}`)},[e.createElementVNode("div",{class:"bottom-sheet__draggable-area",ref_key:"bottomSheetDraggableArea",ref:S},Y,512),e.renderSlot(t.$slots,"header",{},void 0,!0)],2),e.createElementVNode("main",{ref_key:"bottomSheetMain",ref:u,class:e.normalizeClass(`bottom-sheet__main ${t.mainClassName}`)},[e.renderSlot(t.$slots,"default",{},void 0,!0)],2),e.createElementVNode("footer",{ref_key:"bottomSheetFooter",ref:b,class:"bottom-sheet__footer"},[e.renderSlot(t.$slots,"footer",{},void 0,!0)],512)],2)],8,M)]))}});const A=(n,h)=>{const s=n.__vccOpts||n;for(const[o,i]of h)s[o]=i;return s},F=A(z,[["__scopeId","data-v-973bb1c4"]]);exports.default=F;
