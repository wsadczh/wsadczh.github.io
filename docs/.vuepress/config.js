const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
  theme: require.resolve('./theme'), // 使用本地主题
  title: "wsadczh's blog",
  description:
    "web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github等技术文章。",
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: false, // 代码行号
  },
  head,
  plugins,
  themeConfig,
};
