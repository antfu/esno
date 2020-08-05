#!/usr/bin/env node

const { execSync } = require('child_process')
const { existsSync } = require('fs')
const path = require('path')

const esm = existsSync(path.join(__dirname, 'node_modules', 'esm'))
  ? path.join(__dirname, 'node_modules', 'esm', 'index.js')
  : path.join(__dirname, '..', 'esm', 'index.js')

const register = existsSync(path.join(__dirname, 'node_modules', 'esbuild-register'))
  ? path.join(__dirname, 'node_modules', 'esm', 'index.js')
  : path.join(__dirname, '..', 'esbuild-register', 'register.js')

const argv = process.argv
  .slice(2)
  .map((i) => `"${i}"`)
  .join(' ')

execSync(`node -r ${esm} -r ${register} ${argv}`, { stdio: 'inherit' })
