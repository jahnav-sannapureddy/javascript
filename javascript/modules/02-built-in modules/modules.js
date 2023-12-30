// fs - file system module
//    - async and sync

// os - operating system module
const os = require('os');

console.log("\nOS module: ");
console.log('Hostname', os.hostname());
console.log('System has ', os.cpus().length, ' CPUs');
console.log('homedir is ', os.homedir());
console.log('System architecture is ', os.arch());

// events - module

// http - module

// path - module
const path = require('node:path')
// - dirname(), - extname(), - isAbsolute(), - parse()
console.log("\nPATH module: ");
console.log(path.dirname('modules\\02-built-in modules\modules.js'));
console.log(path.basename('modules\\02-built-in modules\modules.js'));
console.log(path.extname('modules\\02-built-in modules\modules.js'));
console.log(path.parse('modules\\02-built-in modules\modules.js'))