import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '35d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/ubuntu',
    component: ComponentCreator('/blog/tags/ubuntu', '479'),
    exact: true
  },
  {
    path: '/blog/tags/vscode',
    component: ComponentCreator('/blog/tags/vscode', '851'),
    exact: true
  },
  {
    path: '/blog/vscode 无法输入中文',
    component: ComponentCreator('/blog/vscode 无法输入中文', 'ce9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c0f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd80'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '36c'),
            routes: [
              {
                path: '/docs/about/me',
                component: ComponentCreator('/docs/about/me', 'c50'),
                exact: true,
                sidebar: "aboutSiderbar"
              },
              {
                path: '/docs/about/support',
                component: ComponentCreator('/docs/about/support', '19f'),
                exact: true,
                sidebar: "aboutSiderbar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/question/intro_ques',
                component: ComponentCreator('/docs/question/intro_ques', '1c1'),
                exact: true,
                sidebar: "bugSiderbar"
              },
              {
                path: '/docs/question/vsocde/ubuntu_cn_wrong',
                component: ComponentCreator('/docs/question/vsocde/ubuntu_cn_wrong', '9fe'),
                exact: true,
                sidebar: "bugSiderbar"
              },
              {
                path: '/docs/repo/intro_repo',
                component: ComponentCreator('/docs/repo/intro_repo', 'cf5'),
                exact: true,
                sidebar: "repoSiderbar"
              },
              {
                path: '/docs/resources/intro_res',
                component: ComponentCreator('/docs/resources/intro_res', 'f30'),
                exact: true,
                sidebar: "resSiderbar"
              },
              {
                path: '/docs/resources/robot',
                component: ComponentCreator('/docs/resources/robot', '255'),
                exact: true,
                sidebar: "resSiderbar"
              },
              {
                path: '/docs/tech/intro_tech',
                component: ComponentCreator('/docs/tech/intro_tech', '112'),
                exact: true,
                sidebar: "techSiderbar"
              },
              {
                path: '/docs/tech/ROS1/intro',
                component: ComponentCreator('/docs/tech/ROS1/intro', '056'),
                exact: true,
                sidebar: "techSiderbar"
              },
              {
                path: '/docs/tech/ROS2/intro',
                component: ComponentCreator('/docs/tech/ROS2/intro', '60e'),
                exact: true,
                sidebar: "techSiderbar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
