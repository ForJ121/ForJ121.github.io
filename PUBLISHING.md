# 发布文章

博客使用 GitHub Pages 和 Jekyll。每次发布文章，只需要新增一个 Markdown 文件，不需要修改首页。

## 方法一：直接在 GitHub 网页发布

1. 打开仓库 `ForJ121/ForJ121.github.io`。
2. 进入 `_posts` 文件夹；如果它还不存在，创建文章时直接在文件名中填写 `_posts/文件名.md`。
3. 点击 **Add file → Create new file**。
4. 文件名使用 `年-月-日-英文名称.md`，例如 `2026-08-01-my-first-post.md`。
5. 复制 `_drafts/post-template.md` 的内容，修改标题、日期、分类、简介和正文。
6. 点击 **Commit changes**。GitHub Pages 会自动构建并发布。

## 方法二：在电脑上发布

复制 `_drafts/post-template.md` 到 `_posts`，修改文件名和内容，然后在项目目录执行：

```powershell
git add .
git commit -m "新增文章：文章标题"
git push origin main
```

## 文章格式

每篇文章顶部必须保留这一段信息：

```yaml
---
title: "文章标题"
date: 2026-08-01 00:00:00 +0800
category: 编程随笔
description: "显示在首页的文章简介。"
---
```

下面的内容使用 Markdown 编写。文章会自动出现在首页，日期较新的排在前面。日期和时间不要填写成未来时间，否则文章要等到对应时间后才会发布。

## 插入图片

将图片放入 `assets/images`，例如 `assets/images/sunset.jpg`，然后在文章中写：

```markdown
![晚霞](/assets/images/sunset.jpg)
```

图片文件名建议只使用英文、数字和短横线，避免空格。
