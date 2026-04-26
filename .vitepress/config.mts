import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import { giscusPlugin } from 'vitepress-plugin-giscus'
import { back2topPlugin } from 'vitepress-plugin-back2top'
import { La51Plugin } from 'vitepress-plugin-51la'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { artalkPlugin } from 'vitepress-plugin-artalk'

const base = process.env.GITHUB_ACTIONS === 'true'
  ? '/vitepress-plugins-tests/'
  : '/'

const baseUrl = 'https://atqq.github.io/vitepress-plugins-tests'
const RSS: RSSOptions = {
  title: '粥里有勺糖',
  baseUrl,
  copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base,
  vite: {
    plugins: [
      pagefindPlugin(),
      RssPlugin(RSS),
      // artalkPlugin({
      //   site: '粥里有勺糖的博客',
      //   server: 'http://localhost:8080',
      //   // ...其他配置
      // }),
      giscusPlugin({
        repo: 'atqq/vitepress-plugins-tests',
        repoId: 'R_kgDOSMM3jg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOSMM3js4C7tBC',
        mapping: 'pathname',
      }),
      back2topPlugin(),
      La51Plugin({
        id: "LAoc7M63APFkEl6m",
        ck: "LAoc7M63APFkEl6m"
      }),
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '👇公众号👇 ---👇 赞赏 👇' },
          {
            type: 'image',
            src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033',
            style: 'display: inline-block;width:46%;padding-right:6px'
          },
          {
            type: 'image',
            src: 'https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea',
            style: 'display: inline-block;width:46%;padding-left:6px'
          }
        ],
        footer: [
          {
            type: 'text',
            content: 'footer content'
          },
          {
            type: 'button',
            content: '作者博客',
            link: 'https://sugarat.top'
          },
          {
            type: 'button',
            content: '博客主题',
            link: 'https://theme.sugarat.top',
            props: {
              type: 'success'
            }
          },
        ],
      })
    ],
  },
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
