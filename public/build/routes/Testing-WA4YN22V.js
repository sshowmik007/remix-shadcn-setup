import {
  ButtonIcon,
  chevron_right_default
} from "/build/_shared/chunk-4BRL4X2O.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZHDSOX3L.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/Testing.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\Testing.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\Testing.jsx"
  );
  import.meta.hot.lastModified = "1733245345211.9539";
}
var Testing = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonIcon, { alt: "Chevron Right", colorScheme: "dark", iconSrc: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_right_default, {}, void 0, false, {
    fileName: "app/routes/Testing.jsx",
    lineNumber: 26,
    columnNumber: 64
  }, this), size: "medium" }, void 0, false, {
    fileName: "app/routes/Testing.jsx",
    lineNumber: 26,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/Testing.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = Testing;
var Testing_default = Testing;
var _c;
$RefreshReg$(_c, "Testing");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Testing_default as default
};
//# sourceMappingURL=/build/routes/Testing-WA4YN22V.js.map
