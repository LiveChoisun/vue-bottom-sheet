import { defineComponent as M, useCssVars as O, ref as a, computed as m, nextTick as x, openBlock as R, createBlock as z, Teleport as W, createElementVNode as r, createVNode as P, Transition as j, withCtx as q, withDirectives as G, vShow as J, normalizeClass as b, renderSlot as y, pushScopeId as K, popScopeId as Q } from "vue";
import s from "hammerjs";
const U = (n) => (K("data-v-973bb1c4"), n = n(), Q(), n), X = ["aria-hidden"], Z = /* @__PURE__ */ U(() => /* @__PURE__ */ r("div", { class: "bottom-sheet__draggable-thumb" }, null, -1)), ee = [
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
    mainClassName: { default: "" },
    headerClassName: { default: "" }
  },
  emits: ["opened", "closed", "dragging-up", "dragging-down"],
  setup(n, { expose: f, emit: i }) {
    const t = n;
    O((e) => ({
      "7ceec89d": T.value,
      "093fa814": t.overlayColor,
      "4faab557": $.value,
      "5fa9f958": V.value,
      "69a31354": N.value,
      a9cf51ce: B.value
    }));
    const u = a(!1), h = a(0), l = a(100), p = a(!1), S = a(0), g = a(null), C = a(null), c = a(null), w = a(null), E = a(null), H = a(null), I = (e) => document.activeElement === e;
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
    ]), T = m(() => `${t.transitionDuration}s`), V = m(() => "auto"), B = m(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), $ = m(() => `${l.value}%`), N = m(() => `${t.maxWidth}px`), Y = async () => {
      await x(), h.value = C.value.offsetHeight + c.value.clientHeight + w.value.offsetHeight;
    }, k = (e, o) => {
      if (t.canSwipe) {
        p.value = !0;
        const d = (L) => {
          L.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (l.value = _(e.deltaY), e.cancelable && c.value.addEventListener("touchmove", d)), o === "main" && e.type === "pandown" && S.value === 0 && (l.value = _(e.deltaY)), o === "area" && (l.value = _(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (c.value.removeEventListener("touchmove", d), o === "main" && (S.value = c.value.scrollTop), p.value = !1, l.value >= 10 ? v() : l.value = 0);
      }
    };
    x(() => {
      Y();
      const e = new s(H.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      }), o = new s(c.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (d) => {
        k(d, "area");
      }), o.on("panstart panup pandown panend", (d) => {
        k(d, "main");
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
          class: b(D.value)
        }, [
          r("header", {
            ref_key: "bottomSheetHeader",
            ref: C,
            class: b(`bottom-sheet__header ${e.headerClassName}`)
          }, [
            r("div", {
              class: "bottom-sheet__draggable-area",
              ref_key: "bottomSheetDraggableArea",
              ref: H
            }, ee, 512),
            y(e.$slots, "header", {}, void 0, !0)
          ], 2),
          r("main", {
            ref_key: "bottomSheetMain",
            ref: c,
            class: b(`bottom-sheet__main ${e.mainClassName}`)
          }, [
            y(e.$slots, "default", {}, void 0, !0)
          ], 2),
          r("footer", {
            ref_key: "bottomSheetFooter",
            ref: w,
            class: "bottom-sheet__footer"
          }, [
            y(e.$slots, "footer", {}, void 0, !0)
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
}, le = /* @__PURE__ */ oe(te, [["__scopeId", "data-v-973bb1c4"]]);
export {
  le as default
};
