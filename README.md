<h2 align='center'>
<samp>esno</samp>
</h2>

<p align='center'>
  <samp>TS/JS node runtime powered by <a href='https://github.com/evanw/esbuild'>esbuild</a></samp>
<br>
<br>
<a href='https://www.npmjs.com/package/esno'>
<img src='https://img.shields.io/npm/v/esno?color=333&labelColor=555&style=flat-square' alt='version'/>
</a>
</p>

## Usage

```bash
npx esno hello.ts
```

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

```bash
npm run start
```
