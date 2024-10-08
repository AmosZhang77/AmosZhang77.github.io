// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Amos love frontend",
  tagline: "just for love, how long? I don't know..",
  url: "https://amoszhang77.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AmosZhang77", // Usually your GitHub org/user name.
  // organizationName: '', // Usually your GitHub org/user name.
  projectName: "AmosZhang77.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages", // 用于发布的分支，每次发布会被打包后的文件替代
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    // defaultLocale: "en",
    // locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // 设置为undefined全局禁用编辑链接
          editUrl: undefined,
          showLastUpdateTime: true,
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "amos-love-frontend",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.jpg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/AmosZhang77/AmosZhang77.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Document",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "github",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              /* {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },*/
            ],
          },
          /*{
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },*/
        ],
        copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()}-present 张君歆 （Amos Zhang）.`,
      },
      prism: {
        theme: lightCodeTheme,
        // theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ['scss'],
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],

  // 安装支持sass插件：yarn add --save docusaurus-plugin-sass sass
  // 安装支持less插件：yarn add docusaurus-plugin-less
  // 支持less sass 都需要文件名加. 例如lightRing.module.scss
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-less"],

  // 其定义运行js
  scripts: [
    {
      src: '/js/custom.js',
      async: false,
      defer: false,
    },
   /* {
      src: 'src/js/custom.js',
      async: false,
      defer: false,
    },*/
  ],
};

module.exports = config;
