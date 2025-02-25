import { defineComponent as M, useCssVars as O, ref as a, computed as m, nextTick as k, openBlock as R, createBlock as z, Teleport as W, createElementVNode as r, createVNode as P, Transition as j, withCtx as q, withDirectives as G, vShow as J, normalizeClass as x, renderSlot as b, pushScopeId as K, popScopeId as Q } from "vue";
import l from "hammerjs";
const U = (n) => (K("data-v-eab68b00"), n = n(), Q(), n), X = ["aria-hidden"], Z = /* @__PURE__ */ U(() => /* @__PURE__ */ r("div", { class: "bottom-sheet__draggable-thumb" }, null, -1)), ee = [
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
    canSwipe: { type: Boolean, default: !0 },
    mainClassNames: { default: "" }
  },
  emits: ["opened", "closed", "dragging-up", "dragging-down"],
  setup(n, { expose: f, emit: i }) {
    const t = n;
    O((e) => ({
      "608f15ca": T.value,
      ec8ec9fe: t.overlayColor,
      d49abdf8: $.value,
      cafd0272: V.value,
      "01c7e7c3": N.value,
      "47ad134c": B.value
    }));
    const u = a(!1), h = a(0), s = a(100), p = a(!1), y = a(0), g = a(null), S = a(null), c = a(null), C = a(null), E = a(null), w = a(null), I = (e) => document.activeElement === e;
    window.addEventListener("keyup", (e) => {
      if (!g.value)
        return;
      const o = g.value.contains(e.target) && I(e.target);
      e.key === "Escape" && !o && v();
    });
    const D = m(() => [
      "bottom-sheet__content",
      {
        "bottom-sheet__content--fullscreen": h.value >= window.innerHeight,
        "bottom-sheet__content--dragging": p.value
      }
    ]), T = m(() => `${t.transitionDuration}s`), V = m(() => "auto"), B = m(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), $ = m(() => `${s.value}%`), N = m(() => `${t.maxWidth}px`), Y = async () => {
      await k(), h.value = S.value.offsetHeight + c.value.clientHeight + C.value.offsetHeight;
    }, H = (e, o) => {
      if (t.canSwipe) {
        p.value = !0;
        const d = (L) => {
          L.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (s.value = _(e.deltaY), e.cancelable && c.value.addEventListener("touchmove", d)), o === "main" && e.type === "pandown" && y.value === 0 && (s.value = _(e.deltaY)), o === "area" && (s.value = _(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (c.value.removeEventListener("touchmove", d), o === "main" && (y.value = c.value.scrollTop), p.value = !1, s.value >= 10 ? v() : s.value = 0);
      }
    };
    k(() => {
      Y();
      const e = new l(w.value, {
        inputClass: l.TouchMouseInput,
        recognizers: [[l.Pan, { direction: l.DIRECTION_VERTICAL }]]
      }), o = new l(c.value, {
        inputClass: l.TouchMouseInput,
        recognizers: [[l.Pan, { direction: l.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (d) => {
        H(d, "area");
      }), o.on("panstart panup pandown panend", (d) => {
        H(d, "main");
      });
    });
    const A = () => {
      s.value = 0, document.documentElement.style.overflowY = "hidden", document.documentElement.style.overscrollBehavior = "none", u.value = !0, i("opened");
    }, v = async () => {
      u.value = !1, s.value = 100, setTimeout(() => {
        document.documentElement.style.overflowY = "visible", document.documentElement.style.overscrollBehavior = "", i("closed");
      }, t.transitionDuration * 1e3);
    }, F = () => {
      t.overlayClickClose && v();
    }, _ = (e) => {
      const o = t.maxHeight && t.maxHeight <= h.value ? t.maxHeight : h.value;
      return e / o * 100;
    };
    return f({ open: A, close: v }), (e, o) => (R(), z(W, { to: "body" }, [
      r("div", {
        class: "bottom-sheet",
        ref_key: "bottomSheet",
        ref: g,
        "aria-hidden": !u.value,
        role: "dialog"
      }, [
        P(j, null, {
          default: q(() => [
            G(r("div", {
              onClick: F,
              class: "bottom-sheet__overlay"
            }, null, 512), [
              [J, e.overlay && u.value]
            ])
          ]),
          _: 1
        }),
        r("div", {
          ref_key: "bottomSheetContent",
          ref: E,
          class: x(D.value)
        }, [
          r("header", {
            ref_key: "bottomSheetHeader",
            ref: S,
            class: x(e.mainClassNames ? `bottom-sheet__header ${e.mainClassNames}` : "bottom-sheet__header")
          }, [
            r("div", {
              class: "bottom-sheet__draggable-area",
              ref_key: "bottomSheetDraggableArea",
              ref: w
            }, ee, 512),
            b(e.$slots, "header", {}, void 0, !0)
          ], 2),
          r("main", {
            ref_key: "bottomSheetMain",
            ref: c,
            class: "bottom-sheet__main"
          }, [
            b(e.$slots, "default", {}, void 0, !0)
          ], 512),
          r("footer", {
            ref_key: "bottomSheetFooter",
            ref: C,
            class: "bottom-sheet__footer"
          }, [
            b(e.$slots, "footer", {}, void 0, !0)
          ], 512)
        ], 2)
      ], 8, X)
    ]));
  }
});
const oe = (n, f) => {
  const i = n.__vccOpts || n;
  for (const [t, u] of f)
    i[t] = u;
  return i;
}, se = /* @__PURE__ */ oe(te, [["__scopeId", "data-v-eab68b00"]]);
export {
  se as default
};
