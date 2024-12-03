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
var cssBundleHref = "/build/css-bundle-H333GRT2.css";

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

// app/routes/analytics.jsx
var analytics_exports = {};
__export(analytics_exports, {
  default: () => Analytics,
  meta: () => meta
});

// app/components/dashboard/nav-bar.tsx
import { Link as Link2 } from "@remix-run/react";

// app/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/button.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/navigation-menu.tsx
import * as React2 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva2 } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var NavigationMenu = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV4(NavigationMenuViewport, {}, void 0, !1, {
        fileName: "app/components/ui/navigation-menu.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 30,
    columnNumber: 3
  },
  this
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item, navigationMenuTriggerStyle = cva2(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), NavigationMenuTrigger = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxDEV4(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/navigation-menu.tsx",
          lineNumber: 57,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 69,
    columnNumber: 3
  },
  this
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuViewport = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxDEV4(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 87,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 86,
  columnNumber: 3
}, this));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

// app/components/dashboard/nav-bar.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var NavBar = () => /* @__PURE__ */ jsxDEV5("nav", { className: "border-b", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between h-16", children: [
  /* @__PURE__ */ jsxDEV5("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV5("span", { className: "text-xl font-bold", children: "Dashboard" }, void 0, !1, {
      fileName: "app/components/dashboard/nav-bar.tsx",
      lineNumber: 18,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/nav-bar.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5(NavigationMenu, { className: "ml-6", children: /* @__PURE__ */ jsxDEV5(NavigationMenuList, { children: [
      /* @__PURE__ */ jsxDEV5(NavigationMenuItem, { children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/", className: "px-3 py-2 rounded-md text-sm font-medium", children: "Overview" }, void 0, !1, {
        fileName: "app/components/dashboard/nav-bar.tsx",
        lineNumber: 23,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/nav-bar.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(NavigationMenuItem, { children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/analytics", className: "px-3 py-2 rounded-md text-sm font-medium", children: "Analytics" }, void 0, !1, {
        fileName: "app/components/dashboard/nav-bar.tsx",
        lineNumber: 28,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/nav-bar.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(NavigationMenuItem, { children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/settings", className: "px-3 py-2 rounded-md text-sm font-medium", children: "Settings" }, void 0, !1, {
        fileName: "app/components/dashboard/nav-bar.tsx",
        lineNumber: 33,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/nav-bar.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/nav-bar.tsx",
      lineNumber: 21,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/nav-bar.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/nav-bar.tsx",
    lineNumber: 16,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV5(Button, { variant: "outline", children: "Profile" }, void 0, !1, {
    fileName: "app/components/dashboard/nav-bar.tsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/nav-bar.tsx",
    lineNumber: 40,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/dashboard/nav-bar.tsx",
  lineNumber: 15,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/dashboard/nav-bar.tsx",
  lineNumber: 14,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/dashboard/nav-bar.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this);

// app/components/dashboard/dashboard-layout.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var DashboardLayout = ({ children }) => /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsxDEV6(NavBar, {}, void 0, !1, {
    fileName: "app/components/dashboard/dashboard-layout.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV6("main", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8", children }, void 0, !1, {
    fileName: "app/components/dashboard/dashboard-layout.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/dashboard/dashboard-layout.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this);

// app/components/ui/card.tsx
import * as React3 from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Card = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 23,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 35,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 50,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 62,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 70,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/routes/analytics.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Analytics | Dashboard" },
  { name: "description", content: "Analytics dashboard" }
], data = [
  { name: "Jan", users: 4e3, revenue: 2400 },
  { name: "Feb", users: 3e3, revenue: 1398 },
  { name: "Mar", users: 2e3, revenue: 9800 },
  { name: "Apr", users: 2780, revenue: 3908 },
  { name: "May", users: 1890, revenue: 4800 },
  { name: "Jun", users: 2390, revenue: 3800 }
];
function Analytics() {
  return /* @__PURE__ */ jsxDEV8(DashboardLayout, { children: /* @__PURE__ */ jsxDEV8("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDEV8("h1", { className: "text-3xl font-bold", children: "Analytics" }, void 0, !1, {
      fileName: "app/routes/analytics.jsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV8(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxDEV8("h2", { className: "text-lg font-semibold mb-4", children: "User Growth" }, void 0, !1, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV8(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV8(LineChart, { data, children: [
          /* @__PURE__ */ jsxDEV8(CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 42,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(XAxis, { dataKey: "name" }, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 43,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(YAxis, {}, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 44,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(Tooltip, {}, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 45,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(Legend, {}, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 46,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(Line, { type: "monotone", dataKey: "users", stroke: "#8884d8" }, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 47,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 41,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 40,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/analytics.jsx",
        lineNumber: 37,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV8(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxDEV8("h2", { className: "text-lg font-semibold mb-4", children: "Revenue" }, void 0, !1, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "h-[300px]", children: /* @__PURE__ */ jsxDEV8(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV8(LineChart, { data, children: [
          /* @__PURE__ */ jsxDEV8(CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 58,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(XAxis, { dataKey: "name" }, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 59,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(YAxis, {}, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 60,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(Tooltip, {}, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 61,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(Legend, {}, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 62,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8(Line, { type: "monotone", dataKey: "revenue", stroke: "#82ca9d" }, void 0, !1, {
            fileName: "app/routes/analytics.jsx",
            lineNumber: 63,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 56,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/routes/analytics.jsx",
          lineNumber: 55,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/analytics.jsx",
        lineNumber: 53,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/analytics.jsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/analytics.jsx",
    lineNumber: 33,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/analytics.jsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

// app/components/dashboard/stat-card.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var StatCard = ({
  title,
  value,
  icon,
  description
}) => /* @__PURE__ */ jsxDEV9(Card, { className: "p-6", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ jsxDEV9("div", { children: [
    /* @__PURE__ */ jsxDEV9("p", { className: "text-sm font-medium text-gray-500", children: title }, void 0, !1, {
      fileName: "app/components/dashboard/stat-card.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV9("h3", { className: "text-2xl font-bold mt-1", children: value }, void 0, !1, {
      fileName: "app/components/dashboard/stat-card.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    description && /* @__PURE__ */ jsxDEV9("p", { className: "text-sm text-gray-500 mt-1", children: description }, void 0, !1, {
      fileName: "app/components/dashboard/stat-card.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/stat-card.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV9("div", { className: "text-primary", children: icon }, void 0, !1, {
    fileName: "app/components/dashboard/stat-card.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/dashboard/stat-card.tsx",
  lineNumber: 20,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/dashboard/stat-card.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this);

// app/routes/_index.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Dashboard" },
  { name: "description", content: "Welcome to the dashboard" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV10(DashboardLayout, { children: /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
    /* @__PURE__ */ jsxDEV10(
      StatCard,
      {
        title: "Total Users",
        value: "1,234",
        icon: /* @__PURE__ */ jsxDEV10(Users, { className: "h-6 w-6" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this),
        description: "+12% from last month"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 20,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      StatCard,
      {
        title: "Revenue",
        value: "$45,231",
        icon: /* @__PURE__ */ jsxDEV10(DollarSign, { className: "h-6 w-6" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        description: "+8% from last month"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      StatCard,
      {
        title: "Orders",
        value: "456",
        icon: /* @__PURE__ */ jsxDEV10(ShoppingCart, { className: "h-6 w-6" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this),
        description: "+23% from last month"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      StatCard,
      {
        title: "Growth",
        value: "+15%",
        icon: /* @__PURE__ */ jsxDEV10(TrendingUp, { className: "h-6 w-6" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        description: "Compared to last year"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 38,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BYKISWCJ.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-DXPQB5FH.js", "/build/_shared/chunk-ZHDSOX3L.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AT6N2GNR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DZBWQYSP.js", imports: ["/build/_shared/chunk-QM6OJ7FG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/analytics": { id: "routes/analytics", parentId: "root", path: "analytics", index: void 0, caseSensitive: void 0, module: "/build/routes/analytics-2GMPFYUY.js", imports: ["/build/_shared/chunk-QM6OJ7FG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "479d7bd5", hmr: { runtime: "/build/_shared\\chunk-ZHDSOX3L.js", timestamp: 1733191460180 }, url: "/build/manifest-479D7BD5.js" };

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
  "routes/analytics": {
    id: "routes/analytics",
    parentId: "root",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: analytics_exports
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
