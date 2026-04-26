# 测试 VitePress 插件项目

## 测试的插件
* [vitepress-plugin-pagefind](https://www.npmjs.com/package/vitepress-plugin-pagefind)：基于 pagefind 实现的 `VitePress` 离线全文搜索支持插件
* [vitepress-plugin-rss](https://www.npmjs.com/package/vitepress-plugin-rss)：基于 feed 实现的 `VitePress` RSS 支持插件
* [vitepress-plugin-giscus](https://www.npmjs.com/package/vitepress-plugin-giscus)：为 `VitePress` 站点引入 [Giscus](https://giscus.app/) 的评论系统。

## 使用
```sh
npm i -g pnpm

pnpm install

# 开发启动
pnpm docs:dev

# 构建
pnpm docs:build
# 预览构建
pnpm docs:preview
```