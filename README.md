# ESG Dashboard

一个基于 Next.js、React 和 Chakra UI 构建的现代化 ESG（环境、社会和公司治理）数据看板。

## 功能特点

- 实时 ESG 数据可视化
- 使用 ECharts 的交互式图表
- 基于 Chakra UI 的响应式设计
- 使用 Redux Toolkit 进行状态管理
- 基于 TypeScript 的类型安全开发

## 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

## 快速开始

1. 克隆仓库：
```bash
git clone [your-repository-url]
cd esg-dashboard
```

2. 安装依赖：
```bash
npm install
# or
yarn install
```

3. 在根目录创建 `.env.local` 文件并添加环境变量：
```env
# 在此添加您的环境变量
```

4. 启动开发服务器：
```bash
npm run dev
# or
yarn dev
```

5. 在浏览器中访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目架构

### 目录结构

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Dashboard 路由组
│   │   └── api/                # API 路由
│   ├── components/             # 业务组件
│   │   ├── company-risk-overview/  # 公司风险概览组件
│   │   ├── counter/            # 计数器组件
│   │   ├── critical-incidents/ # 重大事件组件
│   │   ├── esg-categories/     # ESG 分类组件
│   │   ├── incidents/          # 事件组件
│   │   ├── risk-score-history/ # 风险评分历史组件
│   │   └── severity-levels/    # 严重程度级别组件
│   ├── lib/                    # 工具函数
│   ├── repositories/           # 数据访问层
│   ├── services/               # 业务逻辑层
│   ├── store/                  # Redux 状态管理
│   └── types/                  # TypeScript 类型定义
├── public/                     # 静态资源
├── .env.local                  # 环境变量
└── package.json                # 项目依赖
```

### 核心技术栈

- **前端框架**: Next.js 15.3.0
- **UI 组件库**: Chakra UI
- **状态管理**: Redux Toolkit
- **图表库**: ECharts
- **样式方案**: Tailwind CSS
- **类型系统**: TypeScript

### 关键设计决策

#### 1. 现代化路由架构
- 采用 Next.js App Router 架构，充分利用其文件系统路由特性
- 使用路由组（Route Groups）组织相关页面，如 `(dashboard)` 路由组
- 通过 `layout.tsx` 实现页面布局复用，减少代码重复

#### 2. 模块化与可扩展性
- 按功能模块组织代码，每个模块独立封装（如 `esg-categories`、`risk-score-history`）
- 清晰的目录分层：视图层（components）、业务层（services）、数据层（repositories）
- 统一的类型定义（types）和工具函数（lib），提高代码复用性

#### 3. 性能优化策略
- 首屏关键组件采用服务端渲染（SSR），提升加载性能
- 使用 Redux Toolkit 进行状态管理，实现服务端数据与客户端组件的无缝衔接
- 实现数据缓存机制，减少重复请求
- 图表组件（ECharts）采用客户端渲染，确保交互性能

#### 4. 组件设计原则
- 基于功能和性能需求决定组件类型（服务端/客户端）
- 静态内容优先使用服务端组件
- 交互密集型组件（如图表、计数器）采用客户端组件
- 通过文件名清晰标识组件类型和用途

#### 5. 错误处理与容错
- 统一的错误处理机制，确保用户体验
- 关键数据加载失败时提供优雅降级方案
- 实现数据加载状态管理，提供友好的加载提示
- 服务端和客户端双重数据验证，确保数据可靠性

#### 6. 状态管理策略
- 使用 Redux Toolkit 管理全局状态
- 服务端获取的数据统一存储在 Redux store 中
- 实现状态持久化，提升用户体验
- 通过 Redux 中间件处理异步操作和副作用

#### 7. 开发体验优化
- 使用 TypeScript 确保类型安全
- 统一的代码规范（ESLint）和格式化规则
- 模块化的项目结构，便于团队协作
- 完善的开发工具链支持（Turbopack、Hot Reload）

### 状态管理方法

#### 1. 前端状态管理（Redux Toolkit）
- **全局状态管理**
  - 使用 Redux Toolkit 管理应用全局状态
  - 通过 `createSlice` 创建状态切片，实现状态逻辑的模块化
  - 使用 `configureStore` 配置 Redux store，集成中间件和开发工具

- **数据流转机制**
  - 服务端组件获取数据后，通过 Redux action 更新 store
  - 客户端组件通过 `useSelector` 订阅所需状态
  - 使用 `useDispatch` 触发状态更新，保持单向数据流

- **异步状态处理**
  - 使用 Redux Toolkit 的 `createAsyncThunk` 处理异步操作
  - 实现标准的加载、成功、失败状态管理
  - 通过中间件处理异步操作的副作用

#### 2. 服务端状态管理
- **数据获取策略**
  - 使用 Next.js 的 Server Components 获取初始数据
  - 通过 API 路由处理服务端数据请求

- **缓存策略**
  - 实现服务端数据缓存，减少重复请求
  - 使用适当的缓存过期策略，确保数据新鲜度
  - 支持按需刷新缓存数据

#### 3. 状态同步机制
- **前后端状态同步**
  - 服务端组件通过 Server Components 获取初始数据，直接注入到页面
  - 使用 Redux Toolkit 的 `createAsyncThunk` 处理客户端数据更新请求
  - 通过 Next.js API 路由处理服务端数据更新，确保数据一致性

### 性能考虑

#### 1. 组件渲染策略
- **服务端渲染（SSR）**
  - 首屏关键数据（如公司风险概览、ESG 分类）采用服务端渲染
  - 使用 Server Components 获取初始数据，减少客户端数据请求
  - 通过 `layout.tsx` 实现服务端布局，优化首屏加载性能

- **客户端渲染（CSR）**
  - 交互密集型组件（如图表、计数器）采用客户端渲染

- **混合渲染**
  - 静态内容使用服务端渲染，动态内容使用客户端渲染

#### 2. 数据管理优化
- **服务端数据缓存**
  - 实现服务端数据缓存，减少数据库查询

- **客户端状态管理**
  - 使用 Redux Toolkit 管理全局状态，减少重复请求

### 数据处理方法

#### 1. 数据流架构
```
[数据源] → [服务端] → [客户端] → [视图层]
   │          │          │          │
   │          │          │          │
   ▼          ▼          ▼          ▼
[外部API] → [Server Components] → [Redux Store] → [React Components]
   │          │          │          │
   │          │          │          │
   ▼          ▼          ▼          ▼
[数据库] → [API Routes] → [Client Components] → [UI渲染]
```

#### 2. 服务端数据处理
- **数据获取层**
  - 使用 Server Components 直接获取初始数据
  - 通过 API Routes 处理数据查询和更新请求
  - 实现数据验证和转换逻辑

- **数据缓存层**
  - 使用内存缓存存储频繁访问的数据

#### 3. 客户端数据处理
- **状态管理层**
  - 使用 Redux Toolkit 管理全局状态
  - 实现状态切片（Slices）组织不同类型数据
  - 通过中间件处理异步数据操作

- **数据流转层**
  - 服务端数据注入到 Redux Store
  - 客户端组件通过 Selectors 订阅数据
  - 实现数据更新和同步机制

- **数据展示层**
  - 组件级别的数据转换和格式化
  - 实现数据过滤和排序功能
  - 图表数据的处理和可视化

#### 4. 数据流示例
```
1. 初始加载
[外部API] → [Server Component] → [Redux Store] → [页面渲染]
   │            │                  │
   │            │                  │
   ▼            ▼                  ▼
[获取数据] → [数据处理] → [状态更新] → [UI更新]

2. 数据更新
[用户交互] → [Client Component] → [Redux Action] → [API Route] → [外部API]
   │              │                  │              │
   │              │                  │              │
   ▼              ▼                  ▼              ▼
[触发更新] → [准备数据] → [发送请求] → [处理请求] → [更新数据]

```

## 开发指南

### 可用脚本

- `npm run dev` - 使用 Turbopack 启动开发服务器
- `npm run build` - 构建生产环境应用
- `npm run start` - 启动生产环境服务器
- `npm run lint` - 运行 ESLint 代码检查

### 代码规范

本项目使用 ESLint 进行代码检查，遵循 Next.js 推荐的配置规范。运行 `npm run lint` 检查代码规范问题。

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m '添加新特性'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 开源协议

本项目采用 MIT 协议 - 详见 LICENSE 文件。