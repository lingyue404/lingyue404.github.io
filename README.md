# Ling Yue — Academic Homepage

纯静态网站（HTML + CSS + 原生 JS），没有构建步骤、没有依赖，可直接部署到 GitHub Pages。

## 目录结构

```
index.html            页面骨架 + SEO meta（一般不用改，换名字/简介时改 <title> 和 description）
data/content.js       ★ 所有内容都在这里，日常只改这个文件
assets/css/style.css  样式（颜色变量在文件顶部 :root）
assets/js/main.js     渲染逻辑
assets/img/           头像 profile.jpg、favicon
files/                CV、研究陈述等 PDF
.nojekyll             告诉 GitHub Pages 不要跑 Jekyll
```

## 日常更新（只改 `data/content.js`）

| 想做的事 | 改哪里 |
|---|---|
| 加新闻 | `news` 数组最上面加一条 `{ date: "2026.11", text: "..." }`（可写 HTML） |
| 加论文 | `publications` 里加一个对象；`selected: true` 会进 “Selected” 列表；`links` 里填 `arxiv / pdf / code / project / slides / video / bibtex` 等，空着的按钮不显示 |
| 论文归入研究方向 | 在 `research[].papers` 里写论文的 `id` |
| 加 talk / 教学 / 指导学生 | `talks` / `teaching` / `mentees` 里按注释示例填写 |
| 换头像 | 覆盖 `assets/img/profile.jpg`（当前是 Google Scholar 头像，256px，建议换 600px 以上的方形照片更清晰） |
| 加 CV 下载 | 目前不放 CV。需要时把 PDF 放进 `files/`，在 `profile.cv` 填路径（侧栏出现 Download CV 按钮） |
| 加研究/教学陈述 | PDF 放进 `files/`，在 `jobMarket.materials` 里填 `url` |
| 找到工作后 | `jobMarket.enabled: false` |
| 引用数 | `profile.metrics` |

**空数组的模块会自动隐藏**（连同导航里的链接），所以 Talks、Teaching 现在不显示，填了就出现。

作者列表里自己的名字会自动加粗；名字后加 `*` 表示共同一作。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 http://localhost:8000 。

## 部署（已上线）

网站已部署在 **https://lingyue404.github.io** ，源码仓库是 `lingyue404/lingyue404.github.io` 的 `main` 分支。

更新方法：改完文件后提交并推送，GitHub Pages 会在一两分钟内自动重新发布。

```bash
git add . && git commit -m "Update homepage" && git push
```

自定义域名：仓库 Settings → Pages → Custom domain，并在 DNS 加 CNAME 记录。

## 上线前待确认（TODO）

- [ ] `profile.links.linkedin`：目前填的是 `linkedin.com/in/lingyue666`（CV 里的另一个 handle），请确认
- [ ] 各论文的 PDF / 代码 / 项目页链接（目前只填了能确认的 arXiv 和 GitHub）。没有链接的论文会显示 “Find paper”（跳 Google Scholar 搜索）；把 PDF 放到 `files/papers/xxx.pdf` 并在 `links.pdf` 填路径即可直接下载
- [ ] `media` 里 RPI News 文章的链接
- [ ] 研究陈述、教学陈述 PDF（找教职时很常用）
