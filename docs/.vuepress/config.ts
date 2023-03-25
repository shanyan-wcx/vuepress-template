// 你的插件或主题入口
import { defaultTheme } from 'vuepress';
import { commentPlugin } from "vuepress-plugin-comment2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { feedPlugin } from "vuepress-plugin-feed2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';

export default ({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base: 'vuepress-test',
  shouldPrefetch: false,
  theme: defaultTheme({
    logo: 'https://s2.loli.net/2023/03/25/4LMZ37GRciPr8ha.png',
    repo: 'shanyan-wcx/vuepress-test',
    backToHome: '返回首页',
    notFound: ['页面不存在'],
    navbar: [
      // NavbarGroup
      {
        text: '起始页面',
        children: [
          {
            text: '一级页面',
            children: ['/一级页面1']
          },
          {
            text: '二级页面',
            children: ['/二级目录1/二级页面1']
          }
        ],
      },
      {
        text: '二级目录2',
        children: [
          {
            text: '二级页面',
            children: ['/二级目录2/二级页面2', '/二级目录2/二级页面3']
          },
          {
            text: '三级页面',
            children: ['/二级目录2/三级目录1/三级页面1', '/二级目录2/三级目录1/三级页面2']
          }
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: '一级目录1',
          collapsible: true,
          children: ['/一级页面1'],
        },
        {
          text: '二级目录1',
          collapsible: true,
          children: ['/二级目录1/二级页面1'],
        },
      ],
    }
  }),
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin({
      // 配置项
    }),
    commentPlugin({
      // 插件选项
    }),
    sitemapPlugin({
      hostname: "vuepress.shanyan.online",
    }),
    copyCodePlugin({
      locales: {
        "/": {
          // 覆盖复制按钮标签文字
          copy: "复制",
        },
      }
    }),
    seoPlugin({
      hostname: "vuepress.shanyan.online",
    }),
    pwaPlugin({
      // 你的选项
    }),
    feedPlugin({
      hostname: "vuepress.shanyan.online",
    }),
    searchProPlugin({
      indexContent: true,
    }),
  ],
})