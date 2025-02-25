(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("hammerjs")):typeof define=="function"&&define.amd?define(["exports","vue","hammerjs"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.VueBottomSheet={},n.Vue,n.Hammer))})(this,function(n,e,l){"use strict";const w=s=>(e.pushScopeId("data-v-973bb1c4"),s=s(),e.popScopeId(),s),E=["aria-hidden"],V=[w(()=>e.createElementVNode("div",{class:"bottom-sheet__draggable-thumb"},null,-1))],x=e.defineComponent({__name:"VueBottomSheet",props:{overlay:{type:Boolean,default:!0},overlayColor:{default:"#0000004D"},maxWidth:{default:640},maxHeight:{},transitionDuration:{default:.5},overlayClickClose:{type:Boolean,default:!0},canSwipe:{type:Boolean,default:!0},mainClassName:{default:""},headerClassName:{default:""}},emits:["opened","closed","dragging-up","dragging-down"],setup(s,{expose:m,emit:i}){const o=s;e.useCssVars(t=>({"7ceec89d":D.value,"093fa814":o.overlayColor,"4faab557":$.value,"5fa9f958":H.value,"69a31354":M.value,a9cf51ce:B.value}));const c=e.ref(!1),f=e.ref(0),r=e.ref(100),p=e.ref(!1),b=e.ref(0),_=e.ref(null),S=e.ref(null),d=e.ref(null),y=e.ref(null),T=e.ref(null),C=e.ref(null),N=t=>document.activeElement===t;window.addEventListener("keyup",t=>{if(!_.value)return;const a=_.value.contains(t.target)&&N(t.target);t.key==="Escape"&&!a&&h()});const I=e.computed(()=>["bottom-sheet__content",{"bottom-sheet__content--fullscreen":f.value>=window.innerHeight,"bottom-sheet__content--dragging":p.value}]),D=e.computed(()=>`${o.transitionDuration}s`),H=e.computed(()=>"auto"),B=e.computed(()=>o.maxHeight?`${o.maxHeight}px`:"inherit"),$=e.computed(()=>`${r.value}%`),M=e.computed(()=>`${o.maxWidth}px`),O=async()=>{await e.nextTick(),f.value=S.value.offsetHeight+d.value.clientHeight+y.value.offsetHeight},v=(t,a)=>{if(o.canSwipe){p.value=!0;const u=A=>{A.preventDefault()};t.deltaY>0&&(a==="main"&&t.type==="panup"&&(r.value=g(t.deltaY),t.cancelable&&d.value.addEventListener("touchmove",u)),a==="main"&&t.type==="pandown"&&b.value===0&&(r.value=g(t.deltaY)),a==="area"&&(r.value=g(t.deltaY)),t.type==="panup"&&i("dragging-up"),t.type==="pandown"&&i("dragging-down")),t.isFinal&&(d.value.removeEventListener("touchmove",u),a==="main"&&(b.value=d.value.scrollTop),p.value=!1,r.value>=10?h():r.value=0)}};e.nextTick(()=>{O();const t=new l(C.value,{inputClass:l.TouchMouseInput,recognizers:[[l.Pan,{direction:l.DIRECTION_VERTICAL}]]}),a=new l(d.value,{inputClass:l.TouchMouseInput,recognizers:[[l.Pan,{direction:l.DIRECTION_VERTICAL}]]});t.on("panstart panup pandown panend",u=>{v(u,"area")}),a.on("panstart panup pandown panend",u=>{v(u,"main")})});const Y=()=>{r.value=0,document.documentElement.style.overflowY="hidden",document.documentElement.style.overscrollBehavior="none",c.value=!0,i("opened")},h=async()=>{c.value=!1,r.value=100,setTimeout(()=>{document.documentElement.style.overflowY="visible",document.documentElement.style.overscrollBehavior="",i("closed")},o.transitionDuration*1e3)},z=()=>{o.overlayClickClose&&h()},g=t=>{const a=o.maxHeight&&o.maxHeight<=f.value?o.maxHeight:f.value;return t/a*100};return m({open:Y,close:h}),(t,a)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",{class:"bottom-sheet",ref_key:"bottomSheet",ref:_,"aria-hidden":!c.value,role:"dialog"},[e.createVNode(e.Transition,null,{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{onClick:z,class:"bottom-sheet__overlay"},null,512),[[e.vShow,t.overlay&&c.value]])]),_:1}),e.createElementVNode("div",{ref_key:"bottomSheetContent",ref:T,class:e.normalizeClass(I.value)},[e.createElementVNode("header",{ref_key:"bottomSheetHeader",ref:S,class:e.normalizeClass(`bottom-sheet__header ${t.headerClassName}`)},[e.createElementVNode("div",{class:"bottom-sheet__draggable-area",ref_key:"bottomSheetDraggableArea",ref:C},V,512),e.renderSlot(t.$slots,"header",{},void 0,!0)],2),e.createElementVNode("main",{ref_key:"bottomSheetMain",ref:d,class:e.normalizeClass(`bottom-sheet__main ${t.mainClassName}`)},[e.renderSlot(t.$slots,"default",{},void 0,!0)],2),e.createElementVNode("footer",{ref_key:"bottomSheetFooter",ref:y,class:"bottom-sheet__footer"},[e.renderSlot(t.$slots,"footer",{},void 0,!0)],512)],2)],8,E)]))}}),L="",k=((s,m)=>{const i=s.__vccOpts||s;for(const[o,c]of m)i[o]=c;return i})(x,[["__scopeId","data-v-973bb1c4"]]);n.default=k,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
