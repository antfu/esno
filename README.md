<h1 align='center'>
<samp>esno</samp> / <samp>esmo</samp>
</h1>

<p align='center'>
  <samp>TypeScript / ESNext node runtime powered by esbuild</samp>
<br>
<br>
<a href='https://www.npmjs.com/package/esno'>
<img src='https://img.shields.io/npm/v/esno?color=333&labelColor=555&style=flat-square' alt='version'/>
</a>
</p>

- `esno` - Node in CJS mode - by <a href='https://github.com/egoist/esbuild-register'>esbuild-register</a> 
- `esmo` - Node in ESM mode - by <a href='https://github.com/antfu/esbuild-node-loader'>esbuild-node-loader</a>

## Usage

```bash
npx esno hello.ts

# use with `type: module`
npx esmo hello.ts
```

#### Install globally

```bash
npm i -g esno

esno index.ts
esmo index.ts
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

```bash
npm run start
```

```json
{
  "type": "module",
  "scripts": {
    "start": "esmo index.ts"
  },
  "dependencies": {
    "esno": "*"
  }
}
```
