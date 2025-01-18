import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    port: 5173,

    lang: "zh-CN",
    title: "等等不等等",
    description: "等等不等等的博客",

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
});
