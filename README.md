# Element Plus Template

An out-of-the-box Vue 3 + Element Plus development template, pre-configured with Vite, TypeScript, Pinia, Vue Router, UnoCSS, code linting, formatting, and Git commit validation.

## Features

- ![Vue](https://img.shields.io/badge/Vue-^3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=4FC08D&labelColor=fafafa) Progressive JavaScript framework
- ![Element Plus](https://img.shields.io/badge/Element_Plus-^2.13-409EFF?style=flat-square&logo=element&logoColor=409EFF&labelColor=fafafa) Vue 3 UI component library
- ![Vite](https://img.shields.io/badge/Vite-^7.3-646CFF?style=flat-square&logo=vite&logoColor=646CFF&labelColor=fafafa) Next Generation Frontend Tooling
- ![TypeScript](https://img.shields.io/badge/TypeScript-^5-3178C6?style=flat-square&logo=typescript&logoColor=3178C6&labelColor=fafafa) Strict type checking with modern configuration
- ![Pinia](https://img.shields.io/badge/Pinia-^3.0-F6D365?style=flat-square&logo=pinia&logoColor=F6D365&labelColor=fafafa) Intuitive, type safe, light and flexible Store for Vue
- ![Vue Router](https://img.shields.io/badge/Vue_Router-^5.0-4FC08D?style=flat-square&logo=vue.js&logoColor=4FC08D&labelColor=fafafa) The official router for Vue.js with file-based routing
- ![UnoCSS](https://img.shields.io/badge/UnoCSS-latest-333333?style=flat-square&logo=unocss&logoColor=333333&labelColor=fafafa) The instant on-demand atomic CSS engine
- ![ESLint](https://img.shields.io/badge/ESLint-latest-4B32C3?style=flat-square&logo=eslint&logoColor=4B32C3&labelColor=fafafa) Code linting with recommended rules
- ![Prettier](https://img.shields.io/badge/Prettier-latest-F7B93E?style=flat-square&logo=prettier&logoColor=F7B93E&labelColor=fafafa) Opinionated code formatting
- ![EditorConfig](https://img.shields.io/badge/EditorConfig-latest-E0EFEF?style=flat-square&logo=editorconfig&logoColor=E0EFEF&labelColor=fafafa) Consistent coding styles across different editors
- ![Husky](https://img.shields.io/badge/Husky-latest-42b983?style=flat-square&logo=git&logoColor=F05032&labelColor=fafafa) Git hooks for automated checks
- ![Commitlint](https://img.shields.io/badge/Commitlint-latest-000000?style=flat-square&logo=commitlint&logoColor=000000&labelColor=fafafa) Conventional commit message enforcement

## Requirements

- Node.js `^20.19.0 || >=22.13.0`
- A package manager ([bun](https://bun.sh/), [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/))

## Getting Started

Since I personally prefer Bun, this template uses it as the default package manager. Feel free to switch to npm, yarn, or pnpm if that's your thing.

### Installation

```bash
# Clone the repository
git clone https://github.com/xueelf/ElementPlus.git
cd ElementPlus

# Install dependencies
bun install
```

> **Note**: If you choose to use a different package manager, make sure to delete the `bun.lock` file before running the installation command.

### Available Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the development server |
| `build` | Type-check and build for production |
| `preview` | Locally preview production build |
| `build-only` | Build for production without type-checking |
| `type-check` | Run type checking via vue-tsc |
| `lint` | Run ESLint on all files |
| `format` | Format all files with Prettier |
| `prepare` | Set up Husky Git hooks |

## Project Structure

```
.
├─ .editorconfig         # Editor configuration
├─ .husky/               # Git hooks
│  ├─ commit-msg           # Commit message validation
│  └─ pre-commit           # Pre-commit linting
├─ build/                # Build scripts and plugins
├─ public/               # Static assets
├─ src/                  # Source code
│  ├─ assets/              # Global styles and assets
│  ├─ components/          # Vue components
│  ├─ config/              # App configuration (Element Plus, etc.)
│  ├─ hooks/               # Composables (useStorage, useKeepAlive)
│  ├─ layout/              # Layout components (Container, Header, Aside, Main)
│  ├─ router/              # Vue Router configuration with guards
│  ├─ stores/              # Pinia stores (app, etc.)
│  ├─ styles/              # Global styles and Element Plus theme overrides
│  ├─ utils/               # Utility modules (request, resolve, etc.)
│  ├─ views/               # Vue views/pages
│  ├─ App.vue              # Root component
│  └─ main.ts              # Entry point
├─ types/                # TypeScript type definitions
├─ commitlint.config.ts  # Commitlint configuration
├─ eslint.config.ts      # ESLint configuration
├─ index.html            # HTML entry point
├─ package.json          # Project manifest
├─ prettier.config.ts    # Prettier configuration
├─ tsconfig.json         # TypeScript configuration
├─ uno.config.ts         # UnoCSS configuration
└─ vite.config.ts        # Vite configuration
```

## Configuration

### ESLint

Uses the flat config format with:

- ESLint recommended rules
- Vue 3 recommended rules
- TypeScript ESLint recommended rules

### Prettier

Code style settings:

- 2 spaces indentation
- Single quotes
- Semicolons enabled
- LF line endings
- No parentheses for single arrow function parameters

### EditorConfig

Editor-level settings for consistent coding styles:

- UTF-8 charset
- LF line endings
- Final newline at end of file
- 2 spaces indentation for TypeScript and Vue files
- Trim trailing whitespace

### Git Hooks

- **pre-commit** — runs ESLint to catch issues before committing
- **commit-msg** — validates your commit message format

### Commitlint

Follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope?): subject

# Examples
feat: add new feature
fix(api): resolve endpoint issue
docs: update README
```

### Auto Imports

Configured with `unplugin-auto-import` and `unplugin-vue-components` to automatically import Vue APIs, Pinia, Vue Router, Element Plus components/APIs, Element Hooks composables, and icon components without manual `import` statements.

### File-based Routing

Routes are automatically generated from `src/views/` directory structure via Vue Router's built-in file-based routing (`vue-router/vite`). Use the `definePage()` macro to configure route meta (e.g., `title`, `noLayout`, `keepAlive`).

### Icons

Powered by `unplugin-icons` with `@iconify-json/ep` (Element Plus icon set). Icons are auto-imported as Vue components with the `IconEp` prefix (e.g., `<IconEpUser />`).

### Layout

The app uses a layout system based on Element Plus container components:

- **LayoutContainer** — Top-level layout with Header + Aside + Main structure
- **LayoutHeader** — App logo, title, and user dropdown with logout
- **LayoutAside** — Sidebar navigation menu with `ElMenu`
- **LayoutMain** — Page content area with KeepAlive support

Pages can opt out of the layout by setting `meta.noLayout: true` (e.g., login page).

### Route Guards

Router includes authentication guards:

- Unauthenticated users are redirected to `/login`
- Authenticated users accessing login are redirected to `/home`
- Whitelist support with prefix matching

### Dynamic Page Title

Automatically updates the browser tab title on route changes. If the route has `meta.title`, the tab displays `meta.title | appTitle`; otherwise, it falls back to the app title.

### KeepAlive

Dynamic component caching via `useKeepAlive` composable. Enable per-page by setting `meta.keepAlive: true` in `definePage()`. Uses dynamic wrapper components with route name injection — no need to manually define component names.

### HTTP Request

Axios-based HTTP client (`src/utils/request.ts`) with:

- Automatic token injection via request interceptor
- Unified response handling with error/success messages
- Support for blob and stream response types
- Type-safe response structure (`Result<T>`)

### UnoCSS

Instant on-demand atomic CSS engine, configured in `uno.config.ts`. Includes `transformerDirectives` for using `@screen` breakpoint directive in SCSS.

## License

[MIT](./LICENSE)
