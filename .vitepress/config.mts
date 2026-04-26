import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

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
    plugins: [pagefindPlugin(), RssPlugin(RSS)],
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
