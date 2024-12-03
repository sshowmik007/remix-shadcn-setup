import {
  Card,
  DashboardLayout,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Users
} from "/build/_shared/chunk-7F57IT66.js";
import "/build/_shared/chunk-B43JI2TA.js";
import "/build/_shared/chunk-DXPQB5FH.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZHDSOX3L.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/dashboard/stat-card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\dashboard\\\\stat-card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\dashboard\\stat-card.tsx"
  );
  import.meta.hot.lastModified = "1733189258728.1772";
}
var StatCard = ({
  title,
  value,
  icon,
  description
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: title }, void 0, false, {
        fileName: "app/components/dashboard/stat-card.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold mt-1", children: value }, void 0, false, {
        fileName: "app/components/dashboard/stat-card.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1", children: description }, void 0, false, {
        fileName: "app/components/dashboard/stat-card.tsx",
        lineNumber: 34,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/stat-card.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-primary", children: icon }, void 0, false, {
      fileName: "app/components/dashboard/stat-card.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/stat-card.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/dashboard/stat-card.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = StatCard;
var _c;
$RefreshReg$(_c, "StatCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1733189289081.8245";
}
var meta = () => {
  return [{
    title: "Dashboard"
  }, {
    name: "description",
    content: "Welcome to the dashboard"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DashboardLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatCard, { title: "Total Users", value: "1,234", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Users, { className: "h-6 w-6" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 59
    }, this), description: "+12% from last month" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatCard, { title: "Revenue", value: "$45,231", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DollarSign, { className: "h-6 w-6" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 57
    }, this), description: "+8% from last month" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatCard, { title: "Orders", value: "456", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShoppingCart, { className: "h-6 w-6" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 52
    }, this), description: "+23% from last month" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatCard, { title: "Growth", value: "+15%", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TrendingUp, { className: "h-6 w-6" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 53
    }, this), description: "Compared to last year" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-34B34ZT6.js.map
