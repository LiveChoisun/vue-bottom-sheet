"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),l=require("hammerjs"),M=n=>(e.pushScopeId("data-v-0a0eb29a"),n=n(),e.popScopeId(),n),$=["aria-hidden"],O=M(()=>e.createElementVNode("div",{class:"bottom-sheet__draggable-thumb"},null,-1)),Y=[O],A=e.defineComponent({__name:"VueBottomSheet",props:{overlay:{type:Boolean,default:!0},overlayColor:{default:"#0000004D"},maxWidth:{default:640},maxHeight:{},transitionDuration:{default:.5},overlayClickClose:{type:Boolean,default:!0},canSwipe:{type:Boolean,default:!0}},emits:["opened","closed","dragging-up","dragging-down"],setup(n,{expose:h,emit:s}){const o=n;e.useCssVars(t=>({"7903f424":H.value,"73d113b6":o.overlayColor,"35c74328":x.value,"21eea1ba":V.value,"240c1632":I.value,"3c86aab0":k.value}));const u=e.ref(!1),d=e.ref(0),r=e.ref(100),f=e.ref(!1),g=e.ref(0),v=e.ref(null),_=e.ref(null),i=e.ref(null),b=e.ref(null),w=e.ref(null),S=e.ref(null),E=t=>document.activeElement===t;window.addEventListener("keyup",t=>{if(!v.value)return;const a=v.value.contains(t.target)&&E(t.target);t.key==="Escape"&&!a&&m()});const C=e.computed(()=>["bottom-sheet__content",{"bottom-sheet__content--fullscreen":d.value>=window.innerHeight,"bottom-sheet__content--dragging":f.value}]),H=e.computed(()=>`${o.transitionDuration}s`),V=e.computed(()=>"auto"),k=e.computed(()=>o.maxHeight?`${o.maxHeight}px`:"inherit"),x=e.computed(()=>`${r.value}%`),I=e.computed(()=>`${o.maxWidth}px`),T=async()=>{await e.nextTick(),d.value=_.value.offsetHeight+i.value.clientHeight+b.value.offsetHeight},y=(t,a)=>{if(o.canSwipe){f.value=!0;const c=B=>{B.preventDefault()};t.deltaY>0&&(a==="main"&&t.type==="panup"&&(r.value=p(t.deltaY),t.cancelable&&i.value.addEventListener("touchmove",c)),a==="main"&&t.type==="pandown"&&g.value===0&&(r.value=p(t.deltaY)),a==="area"&&(r.value=p(t.deltaY)),t.type==="panup"&&s("dragging-up"),t.type==="pandown"&&s("dragging-down")),t.isFinal&&(i.value.removeEventListener("touchmove",c),a==="main"&&(g.value=i.value.scrollTop),f.value=!1,r.value>=10?m():r.value=0)}};e.nextTick(()=>{T();const t=new l(S.value,{inputClass:l.TouchMouseInput,recognizers:[[l.Pan,{direction:l.DIRECTION_VERTICAL}]]}),a=new l(i.value,{inputClass:l.TouchMouseInput,recognizers:[[l.Pan,{direction:l.DIRECTION_VERTICAL}]]});t.on("panstart panup pandown panend",c=>{y(c,"area")}),a.on("panstart panup pandown panend",c=>{y(c,"main")})});const D=()=>{r.value=0,document.documentElement.style.overflowY="hidden",document.documentElement.style.overscrollBehavior="none",u.value=!0,s("opened")},m=async()=>{u.value=!1,r.value=100,setTimeout(()=>{document.documentElement.style.overflowY="auto",document.documentElement.style.overscrollBehavior="",s("closed")},o.transitionDuration*1e3)},N=()=>{o.overlayClickClose&&m()},p=t=>{const a=o.maxHeight&&o.maxHeight<=d.value?o.maxHeight:d.value;return t/a*100};return h({open:D,close:m}),(t,a)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",{class:"bottom-sheet",ref_key:"bottomSheet",ref:v,"aria-hidden":!u.value,role:"dialog"},[e.createVNode(e.Transition,null,{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{onClick:N,class:"bottom-sheet__overlay"},null,512),[[e.vShow,t.overlay&&u.value]])]),_:1}),e.createElementVNode("div",{ref_key:"bottomSheetContent",ref:w,class:e.normalizeClass(C.value)},[e.createElementVNode("header",{ref_key:"bottomSheetHeader",ref:_,class:"bottom-sheet__header"},[e.createElementVNode("div",{class:"bottom-sheet__draggable-area",ref_key:"bottomSheetDraggableArea",ref:S},Y,512),e.renderSlot(t.$slots,"header",{},void 0,!0)],512),e.createElementVNode("main",{ref_key:"bottomSheetMain",ref:i,class:"bottom-sheet__main"},[e.renderSlot(t.$slots,"default",{},void 0,!0)],512),e.createElementVNode("footer",{ref_key:"bottomSheetFooter",ref:b,class:"bottom-sheet__footer"},[e.renderSlot(t.$slots,"footer",{},void 0,!0)],512)],2)],8,$)]))}});const F=(n,h)=>{const s=n.__vccOpts||n;for(const[o,u]of h)s[o]=u;return s},L=F(A,[["__scopeId","data-v-0a0eb29a"]]);exports.default=L;
