import { defineComponent as M, useCssVars as O, ref as a, computed as h, nextTick as x, openBlock as N, createBlock as R, Teleport as z, createElementVNode as r, createVNode as W, Transition as P, withCtx as j, withDirectives as q, vShow as G, normalizeClass as J, renderSlot as b, pushScopeId as K, popScopeId as Q } from "vue";
import s from "hammerjs";
const U = (n) => (K("data-v-43ee0a37"), n = n(), Q(), n), X = ["aria-hidden"], Z = /* @__PURE__ */ U(() => /* @__PURE__ */ r("div", { class: "bottom-sheet__draggable-thumb" }, null, -1)), ee = [
  Z
], te = /* @__PURE__ */ M({
  __name: "VueBottomSheet",
  props: {
    overlay: { type: Boolean, default: !0 },
    overlayColor: { default: "#0000004D" },
    maxWidth: { default: 640 },
    maxHeight: {},
    transitionDuration: { default: 0.5 },
    overlayClickClose: { type: Boolean, default: !0 },
    canSwipe: { type: Boolean, default: !0 }
  },
  emits: ["opened", "closed", "dragging-up", "dragging-down"],
  setup(n, { expose: p, emit: i }) {
    const t = n;
    O((e) => ({
      "08349fa4": D.value,
      "1759105b": t.overlayColor,
      "3d0b27de": B.value,
      "12aff62d": T.value,
      "1c5d1a1d": $.value,
      "7fbe2c32": V.value
    }));
    const u = a(!1), m = a(0), l = a(100), f = a(!1), y = a(0), g = a(null), S = a(null), c = a(null), w = a(null), k = a(null), C = a(null), E = (e) => document.activeElement === e;
    window.addEventListener("keyup", (e) => {
      if (!g.value)
        return;
      const o = g.value.contains(e.target) && E(e.target);
      e.key === "Escape" && !o && v();
    });
    const I = h(() => [
      "bottom-sheet__content",
      {
        "bottom-sheet__content--fullscreen": m.value >= window.innerHeight,
        "bottom-sheet__content--dragging": f.value
      }
    ]), D = h(() => `${t.transitionDuration}s`), T = h(() => "auto"), V = h(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), B = h(() => `${l.value}%`), $ = h(() => `${t.maxWidth}px`), Y = async () => {
      await x(), m.value = S.value.offsetHeight + c.value.clientHeight + w.value.offsetHeight;
    }, H = (e, o) => {
      if (t.canSwipe) {
        f.value = !0;
        const d = (L) => {
          L.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (l.value = _(e.deltaY), e.cancelable && c.value.addEventListener("touchmove", d)), o === "main" && e.type === "pandown" && y.value === 0 && (l.value = _(e.deltaY)), o === "area" && (l.value = _(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (c.value.removeEventListener("touchmove", d), o === "main" && (y.value = c.value.scrollTop), f.value = !1, l.value >= 10 ? v() : l.value = 0);
      }
    };
    x(() => {
      Y();
      const e = new s(C.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      }), o = new s(c.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (d) => {
        H(d, "area");
      }), o.on("panstart panup pandown panend", (d) => {
        H(d, "main");
      });
    });
    const A = () => {
      l.value = 0, document.documentElement.style.overflowY = "hidden", document.documentElement.style.overscrollBehavior = "none", u.value = !0, i("opened");
    }, v = async () => {
      u.value = !1, l.value = 100, setTimeout(() => {
        document.documentElement.style.overflowY = "visible", document.documentElement.style.overscrollBehavior = "", i("closed");
      }, t.transitionDuration * 1e3);
    }, F = () => {
      t.overlayClickClose && v();
    }, _ = (e) => {
      const o = t.maxHeight && t.maxHeight <= m.value ? t.maxHeight : m.value;
      return e / o * 100;
    };
    return p({ open: A, close: v }), (e, o) => (N(), R(z, { to: "body" }, [
      r("div", {
        class: "bottom-sheet",
        ref_key: "bottomSheet",
        ref: g,
        "aria-hidden": !u.value,
        role: "dialog"
      }, [
        W(P, null, {
          default: j(() => [
            q(r("div", {
              onClick: F,
              class: "bottom-sheet__overlay"
            }, null, 512), [
              [G, e.overlay && u.value]
            ])
          ]),
          _: 1
        }),
        r("div", {
          ref_key: "bottomSheetContent",
          ref: k,
          class: J(I.value)
        }, [
          r("header", {
            ref_key: "bottomSheetHeader",
            ref: S,
            class: "bottom-sheet__header"
          }, [
            r("div", {
              class: "bottom-sheet__draggable-area",
              ref_key: "bottomSheetDraggableArea",
              ref: C
            }, ee, 512),
            b(e.$slots, "header", {}, void 0, !0)
          ], 512),
          r("main", {
            ref_key: "bottomSheetMain",
            ref: c,
            class: "bottom-sheet__main"
          }, [
            b(e.$slots, "default", {}, void 0, !0)
          ], 512),
          r("footer", {
            ref_key: "bottomSheetFooter",
            ref: w,
            class: "bottom-sheet__footer"
          }, [
            b(e.$slots, "footer", {}, void 0, !0)
          ], 512)
        ], 2)
      ], 8, X)
    ]));
  }
});
const oe = (n, p) => {
  const i = n.__vccOpts || n;
  for (const [t, u] of p)
    i[t] = u;
  return i;
}, le = /* @__PURE__ */ oe(te, [["__scopeId", "data-v-43ee0a37"]]);
export {
  le as default
};
