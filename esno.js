#!/usr/bin/env node

const { spawnSync } = require('child_process')

const register = require.resolve('esbuild-register')

const argv = process.argv.slice(2)

spawnSync('node', ['-r', register, ...argv], { stdio: 'inherit' })
