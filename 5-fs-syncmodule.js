const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

const first = readFileSync('./content/otherfolder/1.txt', 'utf8');

writeFileSync(
    './content/otherfolder/result.txt',
    first, { flag: 'a' }
);