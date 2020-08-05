#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

execSync(
  `node -r ${path.join(
    __dirname,
    'node_modules',
    'esm',
    'index.js'
  )} -r ${path.join(
    __dirname,
    'node_modules',
    'esbuild-register',
    'register.js'
  )} ${process.argv
    .slice(2)
    .map((i) => `"${i}"`)
    .join(' ')}`,
  { stdio: 'inherit' }
)
