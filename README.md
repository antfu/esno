<h1 align='center'>
<samp>esno</samp>
</h1>

<p align='center'>
  <samp>Node.js runtime enhanced with esbuild for loading TypeScript & ESM</samp>
<br>
<br>
<a href='https://www.npmjs.com/package/esno'>
<img src='https://img.shields.io/npm/v/esno?color=333&labelColor=555&style=flat-square' alt='version'/>
</a>
</p>

From v0.15, `esno` is essentially an alias of [`tsx`](https://github.com/esbuild-kit/tsx), with automated CJS/ESM mode and caching.

## Usage

```bash
npx esno hello.ts
```

## Watch mode
Run file and automatically re-run on changes:

```sh
npx esno watch hello.ts
```

All imported files are watched except from the following directories:
`node_modules`, `bower_components`, `vendor`, `dist`, and `.*` (hidden directories).

Press <kbd>Return</kbd> to manually re-run.

#### Install globally

```bash
npm i -g esno

esno index.ts
```

#### Install as dependency

```bash
npm i esno
```

```json
{
  "scripts": {
    "start": "esno index.ts"
  },
  "dependencies": {
    "esno": "*"
  }
}
```

Learn more at [`tsx`](https://github.com/esbuild-kit/tsx).
