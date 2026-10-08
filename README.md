# kerthans.github.io · 网站迁移入口

岳一扬 / Clint Yue 的个人网站已迁移至 **[www.airyyy.tech](https://www.airyyy.tech/)**。

My personal website has moved to **[www.airyyy.tech](https://www.airyyy.tech/)**. This repository only maintains the legacy GitHub Pages entry.

[中文首页](https://www.airyyy.tech/zh) · [English](https://www.airyyy.tech/en) · [作品与经历](https://www.airyyy.tech/zh/work) · [博客](https://www.airyyy.tech/zh/blog)

## 这个仓库现在做什么

保留 `kerthans.github.io` 的旧入口，将访问者引导到当前个人网站。网站内容与工程维护在独立的 `airyyy` 仓库，生产站点由 Vercel 部署。

旧 Astro 网站、组件、文章副本、设计稿与依赖配置已从当前分支移除。旧版代码仍保留在 Git 提交历史中。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `README.md` | 网站迁移说明 |
| `CNAME` | GitHub Pages 的目标域名：`www.airyyy.tech` |
| `index.html` | 静态迁移页，提供自动跳转与可点击的新站链接 |
| `.nojekyll` | 直接发布静态文件，无需 Jekyll 构建 |

## 发布方式

启用 GitHub Pages 时，选择 **Deploy from a branch**，发布分支设为 `main`、目录设为 `/ (root)`，自定义域名设为 `www.airyyy.tech`。静态文件无需安装 Node.js、Astro 或任何应用依赖，也无需自定义 Actions 工作流。

GitHub Pages 启用后，旧入口通过自定义域名机制跳转；目标域名的 DNS、HTTPS 与网站托管继续由 Vercel 管理。

如需更新文章、项目案例或简历，请在当前网站工程中维护；这个仓库只维护迁移入口。
