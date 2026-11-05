# 从零开始：把量子力学档案馆发布到 GitHub

这一版使用 **GitHub Pages 内建 Jekyll**，不需要你创建 `.github`、`deploy.yml`、`requirements.txt`、`tests/` 或运行 Python。

## 最推荐：新建一个干净仓库

> 本压缩包的“新仓库版”默认对应仓库名 **`quantum-archive`**。如果改名，需要修改 `_config.yml` 的 `baseurl`。

1. 前往 <https://github.com/new>，Repository name 填写 `quantum-archive`，选择 **Public**，点击 Create repository。
2. 在仓库首页找到 `uploading an existing file`（或者 Code → Add file → Upload files）。
3. **先解压 ZIP**，上传解压后**里面的全部文件和文件夹**，而不是把 ZIP 本身上传。确认 `_config.yml`、`_layouts/`、`_data/`、`_includes/`、`events/`、`assets/` 和 `index.html` 位于根目录；不能多套一层文件夹。文件数量在 GitHub 网页单次上传支持的范围内。
4. 点击底部 **Commit changes**。
5. 打开 **Settings → Pages → Build and deployment → Source**，选择 **Deploy from a branch**。
6. Branch 选择 **main**，Folder 选择 **/(root)**，点击 **Save**。
7. 网站网址通常是 <https://CYI1995.github.io/quantum-archive/>（如使用 CYI1995 账号）。在 Settings → Pages 也可找到真实链接。

GitHub 在后台仍会生成一个名为 `pages build and deployment` 的标准发布记录。这是 GitHub 内建的机制，不是你之前手写的 Python 工作流。通常几分钟可用；如发布失败，检查 Pages 构建记录，避免再建立新的 `deploy.yml`。

## 如果沿用原来的 `QMHistroy` 仓库

下载名字中包含 `existing-QMHistroy` 的 ZIP。由于旧仓库可能含有原来的 `.github/workflows/deploy.yml`，**仅仅上传新版文件不会删除旧工作流**。请先在 Code 页面删除旧的 `.github/workflows/deploy.yml`；随后把新版所有文件上传到仓库根目录，并在 Settings → Pages 切换为 **Deploy from a branch**，Branch `main`，Folder `/(root)`。

## 如何新增大段内容

1. Code → `events/`，选择需要编辑的 `*.md` 文件，例如 `schrodinger-1926.md`。
2. 点击铅笔图标，按 Markdown 格式编写章节；保留文件顶部两行 `---` 之间的事件信息。
3. 选择 **Commit changes**。GitHub Pages 会重新生成该事件的 HTML 和全文搜索索引。

可用写法：

```markdown
## 研究背景

这里可以写非常长的科学史文章。

## 数学推导

$$
i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle=H|\psi(t)\rangle.
$$

## 历史照片

![实验装置说明]({{ '/assets/images/experiment.png' | relative_url }})

## 参考文献

- [文献标题](https://doi.org/xxx)
```

注意：上述图片链接中的 `{{ ... }}` 是 Jekyll 模板表达式，插入文章时会自动适配你的仓库网址；需要将真实图片上传到 `assets/images/experiment.png`。

## 常见错误

- **显示 GitHub Actions / Get started**：不用点击模板，请前往 `Settings → Pages` 选择 **Deploy from a branch**。
- **404**：检查 `index.html` 是否在仓库根目录、`_config.yml` 的 `baseurl` 是否等于 `/<仓库名>`。
- **文章改了但网页没变**：确认提交到 `main`，Pages 已选择 `main / (root)`，必要时刷新缓存。
- **出现旧 Python 报错**：旧仓库仍保留 `.github/workflows/deploy.yml`，需要删除旧工作流或者使用全新仓库。
- **公式没出现**：MathJax 由在线 CDN 加载，浏览器需要能够访问它。

## GitHub 官方说明

- <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- <https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll>
