const score_parse = require('.');
const [,, homeName, awayName] = process.argv;

score_parse(homeName, awayName).then(console.log);
