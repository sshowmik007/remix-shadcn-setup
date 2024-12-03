import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";
 
addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "BetAnything",
    brandUrl: "",
    brandImage: "/public/bas-logo.svg",
    brandTarget: "_self", 
    appBg: "#3C1053",
    appContentBg: "#3C1053",
    appBorderColor: "#3C1053",
    textColor: "#FFFFFF",
    barBg: "#3C1053",
    barTextColor: "#FFFFFF",
    barSelectedColor: "#6F2B90",
    barHoverColor: "#6F2B90",
    inputBg: "#230832",
    inputBorder: "#49FF87",
    inputTextColor: "#FFFFFF",
    colorSecondary: "#6F2B90",
  })
});