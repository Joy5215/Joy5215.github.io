// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Joy's Blog",
  tagline: 'Share sth. in developing',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 修正1：移除 url 末尾的 /，避免路径拼接错误
  url: 'https://joy5215.github.io',
  // 保持 baseUrl 为 /（因为是用户名主页仓库）
  baseUrl: '/',

  // 修正2：替换为你的 GitHub 用户名和仓库名（核心！）
  organizationName: 'Joy5215', // 原：facebook
  projectName: 'Joy5215.github.io', // 原：docusaurus
  // 新增：明确部署分支（可选，但建议加）
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

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
          // 修正3：替换编辑链接为你的仓库地址（可选，移除则删除这行）
          editUrl:
            'https://github.com/Joy5215/Joy5215.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 修正4：替换博客编辑链接为你的仓库地址（可选，移除则删除这行）
          editUrl:
            'https://github.com/Joy5215/Joy5215.github.io/tree/main/',
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
            // 修正5：导航栏 GitHub 链接指向你的仓库（可选，保持原链接也可）
            href: 'https://github.com/Joy5215/Joy5215.github.io',
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
