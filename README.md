# ForJ's Blog

基于 [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 7.6 构建的个人博客。

发布文章的方法请查看 [PUBLISHING.md](PUBLISHING.md)。

## 本地启动

Docker CMD 预览命令：

```cmd
docker run --rm -it -p 4000:4000 -v forj-chirpy-bundle-ruby34-alpine:/usr/local/bundle -v "%cd%:/srv/jekyll" -w /srv/jekyll ruby:3.4-alpine sh -lc "bundle exec jekyll serve --host 0.0.0.0 --port 4000 --drafts --force_polling"
```

或者在本机安装 Ruby 与依赖后运行：

```shell
bundle install
bundle exec jekyll serve --drafts
```

然后访问 <http://127.0.0.1:4000>。
