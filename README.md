# Ling Yue — Academic Homepage

纯静态网站（HTML + CSS + 原生 JS），没有构建步骤、没有依赖，可直接部署到 GitHub Pages。

## 目录结构

```
index.html            页面骨架 + SEO meta（一般不用改，换名字/简介时改 <title> 和 description）
data/content.js       ★ 所有内容都在这里，日常只改这个文件
assets/css/style.css  样式（颜色变量在文件顶部 :root）
assets/js/main.js     渲染逻辑
assets/img/           头像 profile.jpg、favicon
files/                可公开的研究资料等 PDF（不放私人 CV）
.nojekyll             告诉 GitHub Pages 不要跑 Jekyll
```

## 日常更新（只改 `data/content.js`）

| 想做的事 | 改哪里 |
|---|---|
| 加新闻 | `news` 数组最上面加一条 `{ date: "2026.11", text: "..." }`（可写 HTML） |
| 加论文 | `publications` 里按展示优先级插入一个对象；全部论文按数组顺序展示，优先排列与研究主线和本人贡献最相关的论文，综合考虑发表场所，其次是其他已接收论文、预印本及专利申请；展示题目、作者、发表信息、每项一句英文说明 `tldr`，以及可选的 `note`，保留搜索，不展示分类标签、IF、徽章或资源外链 |
| 论文归入研究方向 | 在 `research[].papers` 里写论文的 `id` |
| 加荣誉 / 媒体报道 | 在 `honors` / `media` 里填写，页面会合并到 “Honors & Media” 的同一个列表 |
| 加 talk / 教学 / 指导学生 / Former Research Mentees | `talks` / `teaching` / `mentees` / `alumni` 里填写；学生姓名用 `name`，学校或去向用 `note` |
| 换头像 | 覆盖 `assets/img/profile.jpg`（当前是 Google Scholar 头像，256px，建议换 600px 以上的方形照片更清晰） |
| CV | 仅供参考，不公开；不要把 CV 文件放入网站仓库，`profile.cv` 保持为空 |
| 加研究/教学陈述 | PDF 放进 `files/`，在 `jobMarket.materials` 里填 `url` |
| 找到工作后 | `jobMarket.enabled: false` |
| 引用数 | `profile.metrics` |

**空数组的模块会自动隐藏**（连同导航里的链接），所以 Talks、Teaching 现在不显示，填了就出现。

作者列表里自己的名字会自动加粗；名字后加 `*` 表示共同一作。

每项 publication 使用一句英文 `tldr` 概述研究问题和主要方法；综述、观点文章、数据集与专利申请分别按其实际贡献表述，避免没有范围限定的效果承诺。

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

- [x] `profile.links.linkedin`：用户已确认 `linkedin.com/in/lingyue666` 正确
- [x] RPI News 报道链接与日期（2026.02.18）
- [x] BioMamba：采用 Health Data Science 正式发表版本的九位作者；接收日 2026-05-12，保留 2026.05 的接收新闻
- [x] FoamGPT：Workshop 官网列有接收论文；官方通知日为 2025-09-22，九月月份与该轮日程一致（没有推断个人通知的具体日）
- [x] TrialDura：以 ACM BCB 2024 正式出版信息为主，校正作者顺序；保留 NeurIPS Workshop 展示备注；新闻改用已核实的 2024.12 正式上线月份
- [x] COLM Travel Grant：用户已确认，日期为 2026.09；已替换 News 与 Honors 中的 RPI CS 差旅支持记录


## 内容核对依据（2026-10-20）

- [BioMamba 期刊官网](https://spj.science.org/doi/10.34133/hds.0454)及[期刊目录](https://spj.science.org/toc/hds/6)：九位作者，Health Data Science 6, 0454。接收日期采用[出版商提交的 Crossref 记录](https://api.crossref.org/works/10.34133/hds.0454)中 `assertion` 的 `accepted`（2026-05-12）；2026-10-05 为正式上线日，不作为接收日，也不重复添加一条新闻。
- [FoamGPT Workshop 官网](https://ml4physicalsciences.github.io/2025/)：论文 271 的题名、作者和接收状态；Important dates 中通知日为 2025-09-22。
- [TrialDura ACM 官网](https://dl.acm.org/doi/10.1145/3698587.3701434)及[出版商提交的 Crossref 记录](https://api.crossref.org/works/10.1145/3698587.3701434)：正式出版作者末两位依次为 Jintai Chen、Tianfan Fu。`published-print` 为 2024-11-22，`published-online` 与出版历史中的 Published 为 2024-12-16；未公布接收日期，新闻使用上线月份。
- [RelEns 正式 PDF](https://aclanthology.org/2023.emnlp-main.1034.pdf)：Ling Yue 与 Yongqi Zhang 共同一作。
- [RPI Student Spotlight](https://graduate.rpi.edu/people/ling-yue-computer-science)：人物专访及清华 Visiting Researcher 身份；Spotlight 表述为报道，不作为获奖。
- Digital Twin Review 保留 [2024 年 v1](https://www.preprints.org/manuscript/202408.2063/v1) 的书目信息，并明确版本。

导航仅显示 About、Research、Publications、Experience；其他模块保留在页面中。Contact 区块已删除，联系方式保留在侧边栏。所有论文直接展示，论文题目及期刊标签保持为纯文本。CV 保持不公开。
