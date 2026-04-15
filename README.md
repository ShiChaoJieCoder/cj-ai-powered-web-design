# cj-ai-powered-web-design

基于 [Studio — AI-Powered Web Design](https://ai-powered-web-design.step1.run/) 落地页的视觉还原实现，使用 **Vite + React 19 + TypeScript + SCSS（CSS Modules）+ Zustand**。  
仓库用于学习、演示与二次开发；内容与排版参考原站，不表示与原作存在商业关联。

---

## 功能概览

- 玻璃拟态导航（桌面端胶囊导航 + 小屏抽屉菜单）
- 全屏视频 Hero、多段视频背景区块
- 信任背书（Stripe / Vercel / Linear 等文案标识）
- How it works、Capabilities、实时性能卡片、AI 优化引擎任务列表
- Why us 四宫格、数据条带、客户证言、底部 CTA 与页脚

---

## 部署到 Vercel（推荐，和常见「一键上线」一样）

效果和体验最接近 **Vercel 默认流程**：连上 GitHub 仓库后，每次推代码自动构建，得到一个 **`https://你的项目名.vercel.app`** 这种外网地址，别人打开即可访问。

### 最快方式（浏览器里点几下）

1. 打开 **[在 Vercel 导入本仓库](https://vercel.com/new?import=https://github.com/ShiChaoJieCoder/cj-ai-powered-web-design)**（需先登录 Vercel，可用 GitHub 账号授权）。  
2. **Project Name** 可自定（会决定默认域名，例如 `cj-ai-web` → `cj-ai-web.vercel.app`）。  
3. **Framework Preset** 一般会识别为 **Vite**；若没有，手动选 **Vite** 或保持自动。  
4. **Build Command** 保持 `npm run build`，**Output Directory** 保持 **`dist`**（仓库根目录已有 [`vercel.json`](vercel.json) 写明，通常无需改）。  
5. 点 **Deploy**，约 1～2 分钟完成后页面会给出 **Visit** 链接，复制发给外网即可。

### 环境变量注意

本项目在 **GitHub Pages** 子路径下才需要设置 `VITE_BASE_PATH`。  
部署在 **Vercel 根路径** 时 **不要** 配置 `VITE_BASE_PATH`（留空即可），否则静态资源路径会错。

**若构建报「找不到 vite / typescript」等：** 检查 Vercel 项目 **Environment Variables** 里是否把 **`NODE_ENV=production`** 设成了全局；该变量会在 **`npm install` 阶段** 就生效，导致 **不安装 `devDependencies`**。解决办法：删掉该变量，或把 Install Command 改成 `npm install --production=false`（见 [Vercel 说明](https://vercel.com/guides/dependencies-from-package-json-missing-after-install)）。本仓库已将 **Vite / TypeScript / Sass 等放进 `dependencies`**，一般可避免因上述配置导致的安装失败。

### CLI（可选）

```bash
npm i -g vercel   # 或 npx vercel@latest
cd /path/to/this-repo
vercel            # 按提示链接 GitHub 或上传当前目录
vercel --prod     # 生产环境
```

---

## 在线演示（GitHub Pages，可选）

**预览地址（工作流跑通且 Pages 已开启后生效）：**  
[https://shichaojiecoder.github.io/cj-ai-powered-web-design/](https://shichaojiecoder.github.io/cj-ai-powered-web-design/)

部署工作流模板在 **[`docs/github-pages-deploy.yml`](docs/github-pages-deploy.yml)**。任选一种方式启用：

### 方式 A：在 GitHub 网页上新建工作流（约 1 分钟）

1. 打开仓库 → **Add file** → **Create new file**  
2. 文件名填：**`.github/workflows/deploy-github-pages.yml`**（含路径）  
3. 把本地 [`docs/github-pages-deploy.yml`](docs/github-pages-deploy.yml) 的**全部内容**粘贴进去（可删掉文件顶部的说明注释），**Commit to main**  
4. 按下面「首次开启 Pages」完成设置，等待 Actions 绿勾即可访问线上地址。

### 方式 B：本机有 `workflow` 权限后推送

```bash
gh auth refresh -h github.com -s workflow
cp docs/github-pages-deploy.yml .github/workflows/deploy-github-pages.yml
git add .github/workflows/deploy-github-pages.yml && git commit -m "ci: GitHub Pages" && git push
```

### 首次开启 Pages（只需做一次）

1. 仓库 **Settings** → **Pages**  
2. **Build and deployment** → **Source** 选 **GitHub Actions**  
3. **Actions** 里查看 **Deploy GitHub Pages** 是否成功；失败可 **Re-run**  
4. **Pages** 页会出现 **Visit site**（约 1～3 分钟）

CI 构建会设置 `VITE_BASE_PATH=/cj-ai-powered-web-design/`，与 `https://<用户>.github.io/<仓库名>/` 路径一致，静态资源才能正确加载。

---

## 技术栈

| 类别 | 选型 |
|------|------|
| 构建工具 | [Vite](https://vitejs.dev/) 6 |
| 框架 | [React](https://react.dev/) 19（Hooks） |
| 语言 | [TypeScript](https://www.typescriptlang.org/) 5.7（strict） |
| 样式 | [Sass](https://sass-lang.com/) + **CSS Modules**（`*.module.scss`） |
| 状态 | [Zustand](https://github.com/pmndrs/zustand) 5 |

字体通过 `index.html` 引入：**Instrument Serif**（标题）与 **DM Sans**（正文），与原站气质接近。

---

## 工程架构

### 分层思路

```
入口 (main.tsx)
  └── 根组件 (App.tsx)
        └── 页面聚合 (pages/HomePage.tsx)
              ├── 全局布局 / 区块样式引用 (pages/Page.module.scss)
              ├── 头部 (components/Header.tsx + Header.module.scss)
              ├── Hero (components/HeroSection.tsx + HeroSection.module.scss)
              └── 其余区块（内联于 HomePage，样式来自 Page.module.scss）
```

- **页面层**：`HomePage` 负责区块顺序与文案数据（常量数组），保持「一个落地页 = 一个路由」的清晰边界（后续可加 `react-router` 扩展多页）。
- **组件层**：可复用的 Header、Hero 独立成组件 + 模块样式；图标集中在 `Icons.tsx`。
- **样式层**：全局变量与 reset 在 `styles/global.scss`；玻璃效果 **Mixin** 在 `styles/_glass.scss`，供各模块 `@use` 复用，避免魔法数散落。
- **状态层**：仅将「与多组件共享或需驱动动画」的状态放入 Zustand，其余保持组件内局部状态（当前以 UI 壳层为主）。

### 目录结构

```
beauty/
├── index.html              # HTML 壳、字体预连接
├── vite.config.ts          # Vite + React 插件
├── tsconfig.json           # TS 严格模式、含 vite.config
├── package.json
├── public/
│   └── vite.svg
├── src/
│   ├── main.tsx            # ReactDOM createRoot、注入 global.scss
│   ├── App.tsx             # 挂载 HomePage
│   ├── constants.ts        # 如 Hero 视频 CDN 地址（与原站同源资源）
│   ├── vite-env.d.ts
│   ├── store/
│   │   └── uiStore.ts      # Zustand：移动端菜单、Hero 入场显隐
│   ├── styles/
│   │   ├── global.scss     # CSS 变量、reset、.liquidGlass 工具类
│   │   └── _glass.scss     # liquid-glass / liquid-glass-strong mixin
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.module.scss
│   │   ├── HeroSection.tsx
│   │   ├── HeroSection.module.scss
│   │   └── Icons.tsx       # 内联 SVG 图标
│   └── pages/
│       ├── HomePage.tsx    # 落地页各 Section 组合
│       └── Page.module.scss # 各 Section 布局与卡片样式
├── .cursor/
│   └── commands/
│       └── site-clone.md   # Cursor「站点克隆」工作流说明（可选）
└── README.md               # 本文件
```

### 状态管理（Zustand）

`src/store/uiStore.ts`：

| 字段 / 方法 | 用途 |
|-------------|------|
| `mobileNavOpen` | 移动端侧栏/抽屉是否打开 |
| `toggleMobileNav` / `setMobileNavOpen` | 切换或显式关闭菜单（点击链接后收起） |
| `heroReveal` | Hero 区标题、副标题、按钮的错峰入场动画开关 |
| `setHeroReveal` | 由 `HeroSection` 在 `useEffect` 中延时触发 |

后续可将「滚动后导航高亮」「主题切换」等继续收敛到该 store 或拆分为 `scrollStore`。

### 样式约定

- **全局**：`global.scss` 定义 `--font-heading`、`--font-body`、`--color-*` 等设计令牌。
- **局部**：组件/页面使用 `*.module.scss`，类名编译后带哈希，避免污染全局。
- **玻璃效果**：在模块中 `@use "../styles/glass" as *;` 后 `@include liquid-glass;`，与全局类 `.liquidGlass` 语义一致。

### 资源与外链

- Hero 及部分全宽背景使用原站公开的 **CloudFront MP4**（见 `src/constants.ts` 中 `HERO_VIDEO_URL`）。若链接失效或跨域策略变更，需替换为自有资源或本地 `public/` 视频。

---

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：<http://localhost:5173/>

---

## 构建与预览

```bash
npm run build    # tsc 类型检查 + vite build，产物在 dist/
npm run preview  # 本地预览生产构建
```

---

## 部署建议

- **首选**：上文 **[部署到 Vercel](#部署到-vercel推荐和常见一键上线一样)**，得到 `*.vercel.app` 固定外网地址。  
- **可选**：GitHub Pages（见「在线演示」）；子路径部署需在 CI 中设置 `VITE_BASE_PATH`。  
- **其他**：Cloudflare Pages、Netlify 等同理：`npm run build`，输出 **`dist`**；非根路径时设置 **`VITE_BASE_PATH`**。

---

## 与 One-Click Clone / site-clone 的关系

项目根目录下的 `.cursor/commands/site-clone.md` 来自 [One-Click-Clone](https://github.com/CloveSVG/One-Click-Clone)，用于在 Cursor 中按流程做「浏览器调研 → 资产与样式提取 → 分块实现」。  
本仓库实际栈为 **Vite + SCSS + Zustand**（非该技能默认的 Next.js + Tailwind），以 README 与目录为准。

---

## 许可证

MIT（若需与上游素材版权区分，商用前请自行确认字体、视频与文案授权。）
