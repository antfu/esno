<h2 align='center'>
<samp>esno</samp>
</h2>

<p align='center'>
<samp>TS/JS node runtime powered by esbuild</samp>
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
