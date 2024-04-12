#!/usr/bin/env node

const fs = require('fs')
const Preprocessor = require('./Preprocessor')
const { argv } = require('process')
const folder = 'node_modules/zeppos-cross-api/'

/**
 * @param {string} source
 * @param {string} target
 * @param {string} apiLevel
 */
function preprocess (source, target, apiLevel) {
  if (fs.lstatSync(source).isDirectory()) {
    if (!fs.existsSync(target)) fs.mkdirSync(target)

    fs.readdirSync(source).forEach(child => {
      preprocess(source + '/' + child, target + '/' + child, apiLevel)
    })

    if (fs.readdirSync(target).length === 0) {
      fs.rmdirSync(target)
    }
  } else {
    const contents = fs.readFileSync(source).toString()
    const pp = new Preprocessor(contents, source, false)
    const output = pp.process({ API: apiLevel })
    if (output.trim().length !== 0) fs.writeFileSync(target, output)
  }
}

if (!argv[2].startsWith('--api-level=')) {
  console.log('No value specified for api-level')
  console.log('must specify api-level using --api-level=X where X is 1.0, 2.0 or 3.0')
} else {
  const apiLevel = Number(argv[2].substring('--api-level='.length))
  if (apiLevel !== 1 && apiLevel !== 2 && apiLevel !== 3) {
    console.log('No valid api-level specified')
    console.log('valid api-level are 1.0, 2.0 or 3.0')
  } else {
    if (fs.existsSync(folder + 'processed')) fs.rmSync(folder + 'processed', { recursive: true, force: true })
    fs.mkdirSync(folder + 'processed')
    preprocess(folder + 'lib', folder + 'processed/lib', apiLevel + '.0')
  }
}
