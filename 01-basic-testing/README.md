# React: Jest + React Testing Library

[Config](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177) simple React project with Jest and React Testing Library.

## Initial setup with typescript

React Testing Library

For the initial setup we can use [Doc](https://testing-library.com/docs/react-testing-library/intro)

```bash
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Jest v29

For the initial setup we can use [ts-jest's install documentation](https://github.com/Swizec/jest-db-mock-example)

```bash
yarn add -D jest typescript ts-jest @types/jest ts-node
yarn ts-jest config:init
```

We'll get there with `ts-jest`, a Jest transformer that enables Jest to understand TypeScript.

You'll need `ts-node` to support TypeScript-based configuration later.

---

## Configuration

`yarn config:init` gives you a default config file like this:

```ts
// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node", // jsdom for browser
  ...moreOptions,
};
```

Improved Jest config

```ts
// jest.config.ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.build.json" }],
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // optional path aliases
  },
  // verbose: true,
  // automock: true,
};
export default config;
```

Optional: `whatwg-fetch`, support for `fetch` in Node.js

```ts
// jest.setup.ts
import "whatwg-fetch";
import "@testing-library/jest-dom";
```

---

## Configure TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2017", // ESNext
    "types": ["node", "jest"], // add jest
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true, // allow default imports from modules with no default export
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true, // ensure consistent casing for imports
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "baseUrl": ".",
    "noFallthroughCasesInSwitch": true,
    "outDir": "./dist"
  },
  // "compileOnSave": true,
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

The key parts are:

- `"types": ["node", "jest"]`, tells TypeScript to assume node and jest types are globally available. Make sure you include jest.
- `"outDir": "./dist"` I like to put compiled files in /dist. Best add dist this to .gitignore so you don't add compiled files to git
- `"forceConsistentCasingInFileNames": true` if you work on a Mac and deploy to anything but a Mac, this is going to save you lots of frustration. Ask me how I know 😖

---

## Tell TypeScript to ignore Jest files

Let's agree colocating tests and code is better.

Solution: a special config for builds:

```json
// tsconfig.build.json
{
  "extends": "./tsconfig",
  "exclude": ["**/*.test.*", "**/__mocks__/*", "**/__tests__/*"]
}
```

## Make tests runnable

```json
// package.json
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
```

You can now run `yarn test` to fire up Jest and run all your tests.
