# 量子力学档案馆 · 纯 GitHub Pages Jekyll 版

一个可直接发布的 Markdown 多页面科学史网站。保留深色档案馆风格、31 篇历史事件、四阶段时间轴、全站全文搜索、公式、响应式排版和五种交互式概念实验。

## 架构

- `events/*.md`：每个历史节点为一篇 Markdown，包含题目、年代、人物、正文等内容。
- `_layouts/default.html`：全站统一导航与页脚。
- `_layouts/event.html`：历史节点详情模板。
- `_layouts/stage.html`：历史阶段模板。
- `_data/stages.json`：四个历史阶段的名称、时间及颜色。
- `index.html`：首页，历史时间轴来自 Markdown 元数据，无需手动同步。
- `topics.html`：主题索引。
- `search-index.json`：由 Jekyll 将所有 Markdown 正文生成 JSON 搜索索引。
- `assets/style.css`：深色及暖纸阅读模式。
- `assets/site.js`：目录、搜索、时间轴筛选、交互实验等。
- `_config.yml`：GitHub Pages 网址和 Markdown 处理设置。

## 发布

阅读 `START_HERE.md`。只要 GitHub Pages 的 Source 设置为 **Deploy from a branch**、Branch 为 `main`、Folder 为 `/(root)` 即可。**无需**自建 `.github/workflows/deploy.yml`、`requirements.txt`、`tests` 或 Python 构建脚本。

## 编辑

修改 `events/<事件ID>.md`，保留文件开头 `---` 之间的 YAML 元信息。正文支持标题、列表、表格、引用、图片、代码块、LaTeX 公式。保存并提交后，Jekyll 将自动更新 HTML 与搜索索引。

## 网址

https://cyi1995.github.io/quantum-archive/

新增历史节点：复制一份 `events/*.md`，改成新的 slug、标题、年份、顺序、阶段（1–4），并设置唯一 `permalink: '/events/新文件名.html'`；Jekyll 会自动将它列入时间轴与搜索。前后导航可手动填写 `prev_slug/next_slug`。

注：此版本的历史背景与说明保留原始项目中的概述性材料，重要历史史实和论文细节请进一步人工核查。交互实验属于教学用示意模型，不应作为实验数据。
