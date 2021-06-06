#!/usr/bin/env node

const spawn = require('cross-spawn')
const spawnSync = spawn.sync

const register = require.resolve('esbuild-node-loader')

const argv = process.argv.slice(2)

spawnSync('node', ['--experimental-loader', register, ...argv], { stdio: 'inherit' })
