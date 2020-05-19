const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);

logger.log('path', pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('free', freeMem);
logger.log('total',totalMem);

fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log(files);
})




