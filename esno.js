#!/usr/bin/env node

const spawn = require('cross-spawn')
const spawnSync = spawn.sync

const register = require.resolve('esbuild-register')

const argv = process.argv.slice(2)

spawnSync('node', ['-r', register, ...argv], { stdio: 'inherit' })
