// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Joy's Blog",
  tagline: 'Share sth. in developing',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://joy5215.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
plugins: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      indexDocs: true,
      indexBlog: true,
      indexPages: true,
      language: ["zh","en"]
    },
  ],
],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Joy's Blog",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tech/intro_tech',
            position: 'left',
            label: '学习记录',
          },
          {
            type: 'doc',
            docId: 'repo/intro_repo',
            position: 'left',
            label: '项目记录',
          },
          {
            type: 'doc',
            docId: 'resources/intro_res',
            position: 'left',
            label: '资源分享',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'question/intro_ques',
            position: 'left',
            label: 'Bug',
          },
          {
            type: 'doc',
            docId: 'about/me',
            position: 'left',
            label: '关于',
          },
          {
            href: 'https://github.com/Joy5215',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://space.bilibili.com/35407046?spm_id_from=333.1007.0.0',
            label: 'Bilibili',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
               {
            html:` <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
            <span id="busuanzi_container_site_pv" style='display:none'>本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>`,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joy's Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
