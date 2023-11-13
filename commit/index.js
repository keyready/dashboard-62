const { execSync } = require('child_process');

const msg = `"${process.argv.slice(2).join(' ')}"`;
execSync(`git add . && git commit -m ${msg} && git push`);
