import { defaultTheme } from 'vuepress';
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { componentsPlugin } from "vuepress-plugin-components";

export default ({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: 'https://s2.loli.net/2023/03/25/5mi3T6gKcP2jNId.png' }]],
  base: '/vuepress-template/',
  shouldPrefetch: false,
  theme: defaultTheme({
    logo: 'https://s2.loli.net/2023/03/25/4LMZ37GRciPr8ha.png',
    repo: 'shanyan-wcx/vuepress-template',
    backToHome: '返回首页',
    notFound: ['页面不存在'],
    lastUpdatedText: '最近更新',
    editLink: false,
    contributors: false,
    navbar: [
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
    removeHtmlExtensionPlugin(),
    mdEnhancePlugin({
      tabs: true,
      codetabs: true,
      align: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      figure: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      obsidianImgSize: true,
      tasklist: {
        disabled: false,
        label: true,
      },
      chart: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
    }),
    componentsPlugin({
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "PDF",
        "Replit",
        "Share",
        "StackBlitz",
        "SiteInfo",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    }),
    mediumZoomPlugin({
    }),
    copyCodePlugin({
      locales: {
        "/": {
          copy: "复制",
        },
      }
    }),
    searchProPlugin({
      indexContent: true,
    }),
  ],
})