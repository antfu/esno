#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')

let isModule = false
try {
  const { type } = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  isModule = type === 'module'
} catch {}

const argv = process.argv
  .slice(2)
  .map((i) => `"${i}"`)
  .join(' ')

const register = require.resolve('esbuild-register')

if (isModule) {
  execSync(`node -r ${register} ${argv}`, { stdio: 'inherit' })
} else {
  const esm = require.resolve('esm')
  execSync(`node -r ${esm} -r ${register} ${argv}`, { stdio: 'inherit' })
}
