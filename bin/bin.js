#!/usr/bin/env node

const fs = require('fs');
const { argv } = require('process');
const folder = 'node_modules/zeppos-cross-api/dist/';
// Const folder = './dist/';

if (argv.length > 2 && argv[2].startsWith('--api-level=')) {
  const apiLevel = Number(argv[2].substring('--api-level='.length));
  if (apiLevel !== 1 && apiLevel !== 2 && apiLevel !== 3) {
    console.log('No valid api-level specified');
    console.log('valid api-level are 1.0, 2.0 or 3.0');
  } else {
    if (fs.existsSync(folder + 'current')) {
      fs.rmSync(folder + 'current', { recursive: true, force: true });
    }

    fs.cpSync(folder + apiLevel + '.0/', folder + 'current', { recursive: true });
  }
} else {
  console.log('No value specified for api-level');
  console.log('must specify api-level using --api-level=X where X is 1.0, 2.0 or 3.0');
}
