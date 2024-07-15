# SNTC Induction Website 2024

## Installation

- Fork this repo & Clone it
- Run `bun install` to install all the dependencies (or you can use `npm install` or `yarn install` or `pnpm install` as desired)
- Start the development server using `bun dev` (or `npm run dev` or `yarn dev` or `pnpm dev` as desired)

## File Structure

```bash
.
├── README.md
├── bun.lockb
├── index.html
├── package.json
├── postcss.config.js
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   ├── index.css
│   ├── main.tsx
│   ├── routes
│   │   ├── error-page.tsx
│   │   ├── home-page.tsx
│   │   ├── root.tsx
│   │   └── verify-attendance.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

<!-- ## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
