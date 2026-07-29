# 使用 Chirpy 发布文章

## 首次部署设置

进入 GitHub 仓库的 **Settings → Pages**，在 **Build and deployment** 中将 **Source** 设为 **GitHub Actions**。这个设置只需要完成一次。

## 新建文章

复制 `_drafts/post-template.md` 到 `_posts`，文件名使用：

```text
年-月-日-英文名称.md
```

例如：

```text
_posts/2026-08-01-my-first-post.md
```

文章顶部信息示例：

```yaml
---
title: "我的第一篇文章"
date: 2026-08-01 00:00:00 +0800
categories: [技术, 博客]
tags: [jekyll, chirpy]
description: "显示在首页和文章标题下方的简介。"
toc: true
---
```

日期不能晚于当前时间。正文使用 Markdown 编写，提交后会自动出现在首页、分类、标签和归档中。

## 直接在 GitHub 网页发布

1. 打开仓库 <https://github.com/ForJ121/ForJ121.github.io>。
2. 进入 `_posts` 文件夹。
3. 点击 **Add file → Create new file**。
4. 在文件名位置填写 `年-月-日-英文名称.md`，例如 `2026-08-01-my-first-post.md`。
5. 复制 `_drafts/post-template.md` 的内容，修改标题、日期、分类、标签、简介和正文。
6. 点击右上角的 **Commit changes**。
7. 等待 GitHub Actions 完成，文章就会出现在博客首页。

如果文章需要图片，先进入 `assets/img/posts`，使用 **Add file → Upload files** 上传图片，再在 Markdown 中引用它。

## 插入图片

图片放入 `assets/img/posts`，在文章中引用：

```markdown
![图片说明](/assets/img/posts/example.jpg)
```

## 在电脑上提交文章

```powershell
git add .
git commit -m "新增文章：文章标题"
git push origin main
```

推送后，GitHub Actions 会自动构建并部署。

## 在当前电脑预览

项目已经在 Docker 卷 `forj-chirpy-bundle-ruby34-alpine` 中缓存好 Chirpy 依赖。在 CMD 的项目目录运行：

```cmd
docker run --rm -it -p 4000:4000 -v forj-chirpy-bundle-ruby34-alpine:/usr/local/bundle -v "%cd%:/srv/jekyll" -w /srv/jekyll ruby:3.4-alpine sh -lc "bundle exec jekyll serve --host 0.0.0.0 --port 4000 --drafts --force_polling"
```

然后打开 <http://localhost:4000>。按 `Ctrl + C` 停止预览。
