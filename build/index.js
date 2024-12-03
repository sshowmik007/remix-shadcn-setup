var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-KXM7PZR2.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/Testing.jsx
var Testing_exports = {};
__export(Testing_exports, {
  default: () => Testing_default
});
import "react";

// app/components/shared/ButtonIcon.jsx
import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/shared/ButtonIcon.jsx
import PropTypes from "prop-types";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var buttonIconVariants = cva(
  "rounded-full flex items-center justify-center transition-colors duration-200 p-[4px] m-0",
  {
    variants: {
      size: {
        small: "w-6 h-6",
        medium: "w-8 h-8",
        large: "w-10 h-10"
      },
      colorScheme: {
        dark: "bg-[#100416]/30 text-white border-[1px] border-white/10 hover:bg-white hover:text-gray-900",
        light: "bg-white text-gray-900 border-0 hover:bg-[#100416]/30 hover:border-[1px] hover:border-white/10"
      }
    },
    defaultVariants: {
      size: "medium",
      colorScheme: "dark"
    }
  }
), ButtonIcon = React.forwardRef(
  ({
    className,
    size = "medium",
    iconSize,
    // Optional custom icon size
    colorScheme = "dark",
    iconSrc,
    alt = "Icon",
    asChild = !1,
    ...props
  }, ref) => {
    let Comp = asChild ? Slot : "button", [isHovered, setIsHovered] = useState(!1), defaultIconSize = {
      small: "16px",
      medium: "24px",
      large: "32px"
    }[size], finalIconSize = iconSize || defaultIconSize, iconTheme = isHovered ? colorScheme === "dark" ? "light" : "dark" : colorScheme, iconColorFilter = colorScheme === "dark" ? "invert(1) brightness(0%) contrast(100%)" : "invert(0%) brightness(100%) contrast(100%)";
    return /* @__PURE__ */ jsxDEV3(
      Comp,
      {
        className: cn(buttonIconVariants({ size, colorScheme, className })),
        ref,
        onMouseEnter: () => setIsHovered(!0),
        onMouseLeave: () => setIsHovered(!1),
        ...props,
        children: typeof iconSrc == "string" ? /* @__PURE__ */ jsxDEV3(
          "img",
          {
            src: iconSrc,
            alt,
            width: finalIconSize,
            height: finalIconSize,
            style: { filter: iconColorFilter }
          },
          void 0,
          !1,
          {
            fileName: "app/components/shared/ButtonIcon.jsx",
            lineNumber: 78,
            columnNumber: 6
          },
          this
        ) : (
          // Apply the dynamic theme with width and height to JSX icons
          React.cloneElement(iconSrc, {
            theme: iconTheme,
            width: finalIconSize,
            // Use finalIconSize
            height: finalIconSize
            // Use finalIconSize
          })
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/shared/ButtonIcon.jsx",
        lineNumber: 70,
        columnNumber: 4
      },
      this
    );
  }
);
ButtonIcon.displayName = "ButtonIcon";
ButtonIcon.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  iconSize: PropTypes.string,
  // Custom size prop for icon width/height
  colorScheme: PropTypes.oneOf(["dark", "light"]),
  iconSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  alt: PropTypes.string
};

// public/assets/jsxicons/chevron-right.jsx
import "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var ChevronRightIcon = ({
  theme = "dark",
  fill,
  strokeOpacity,
  ...props
}) => /* @__PURE__ */ jsxDEV4(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    fill: fill || "none",
    stroke: theme === "light" ? "#000" : "#fff",
    strokeOpacity: strokeOpacity !== void 0 ? strokeOpacity : theme === "muted" ? 0.5 : 1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    className: "lucide lucide-badge-check",
    ...props,
    children: /* @__PURE__ */ jsxDEV4(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 4 8 8-8 8"
      },
      void 0,
      !1,
      {
        fileName: "public/assets/jsxicons/chevron-right.jsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "public/assets/jsxicons/chevron-right.jsx",
    lineNumber: 11,
    columnNumber: 5
  },
  this
), chevron_right_default = ChevronRightIcon;

// app/routes/Testing.jsx
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Testing = () => /* @__PURE__ */ jsxDEV5(Fragment, { children: /* @__PURE__ */ jsxDEV5(
  ButtonIcon,
  {
    alt: "Chevron Right",
    colorScheme: "dark",
    iconSrc: /* @__PURE__ */ jsxDEV5(chevron_right_default, {}, void 0, !1, {
      fileName: "app/routes/Testing.jsx",
      lineNumber: 10,
      columnNumber: 14
    }, this),
    size: "medium"
  },
  void 0,
  !1,
  {
    fileName: "app/routes/Testing.jsx",
    lineNumber: 7,
    columnNumber: 4
  },
  this
) }, void 0, !1, {
  fileName: "app/routes/Testing.jsx",
  lineNumber: 6,
  columnNumber: 3
}, this), Testing_default = Testing;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import "@remix-run/node";
import "lucide-react";
import "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "BAS" }, { name: "description", content: "" }];
function Index() {
  return /* @__PURE__ */ jsxDEV6(Fragment2, { children: /* @__PURE__ */ jsxDEV6("div", { children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-4xl font-aeonik", children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque odit debitis repellendus a. Eligendi, soluta ea. Dolore ullam quos dolorem recusandae totam iste sapiente id, commodi mollitia aut vero nesciunt." }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-4xl", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga eligendi quasi deserunt culpa alias veritatis numquam fugiat debitis dolore, saepe ab molestias soluta autem deleniti officiis sequi aliquid atque?" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV6(
      ButtonIcon,
      {
        alt: "Chevron Right",
        colorScheme: "dark",
        iconSrc: /* @__PURE__ */ jsxDEV6(chevron_right_default, {}, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        size: "medium"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 27,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BYKISWCJ.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-DXPQB5FH.js", "/build/_shared/chunk-ZHDSOX3L.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MBPBX7EE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Testing": { id: "routes/Testing", parentId: "root", path: "Testing", index: void 0, caseSensitive: void 0, module: "/build/routes/Testing-WA4YN22V.js", imports: ["/build/_shared/chunk-4BRL4X2O.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IJJJ7SKG.js", imports: ["/build/_shared/chunk-4BRL4X2O.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "da076ed2", hmr: { runtime: "/build/_shared\\chunk-ZHDSOX3L.js", timestamp: 1733246040323 }, url: "/build/manifest-DA076ED2.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Testing": {
    id: "routes/Testing",
    parentId: "root",
    path: "Testing",
    index: void 0,
    caseSensitive: void 0,
    module: Testing_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
