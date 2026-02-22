import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
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
    component: ComponentCreator('/docs', '720'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9f4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '61b'),
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
                path: '/docs/tech/Docker/quickstart',
                component: ComponentCreator('/docs/tech/Docker/quickstart', '223'),
                exact: true,
                sidebar: "techSiderbar"
              },
              {
                path: '/docs/tech/Docusaurus/qiuckstart',
                component: ComponentCreator('/docs/tech/Docusaurus/qiuckstart', '8b2'),
                exact: true,
                sidebar: "techSiderbar"
              },
              {
                path: '/docs/tech/English/short sentecnce/diary',
                component: ComponentCreator('/docs/tech/English/short sentecnce/diary', '5b1'),
                exact: true,
                sidebar: "techSiderbar"
              },
              {
                path: '/docs/tech/English/short sentecnce/practise',
                component: ComponentCreator('/docs/tech/English/short sentecnce/practise', 'a56'),
                exact: true,
                sidebar: "techSiderbar"
              },
              {
                path: '/docs/tech/Git/qiuckstart',
                component: ComponentCreator('/docs/tech/Git/qiuckstart', 'd15'),
                exact: true,
                sidebar: "techSiderbar"
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
              },
              {
                path: '/docs/tech/ROS2/ros2zhaoxuzuo/quickstart',
                component: ComponentCreator('/docs/tech/ROS2/ros2zhaoxuzuo/quickstart', 'a55'),
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
