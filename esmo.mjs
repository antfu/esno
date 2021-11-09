#!/usr/bin/env node

import spawn from 'cross-spawn'
import { resolve } from 'import-meta-resolve'
const spawnSync = spawn.sync

const argv = process.argv.slice(2)
resolve('esbuild-node-loader', import.meta.url).then((path) => {
    process.exit(spawnSync('node', ['--experimental-loader', path, ...argv], { stdio: 'inherit' }).status)
})
