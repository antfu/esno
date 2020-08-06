<h2 align='center'>esno</h2>

<samp align='center'>TS/JS node runtime powered by esbuild</samp>

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
