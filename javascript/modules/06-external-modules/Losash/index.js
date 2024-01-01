const lodash  = require('lodash');

const nums = [1, 2, 3, 5, 32, 32, 1, 2, 13, 0,3, 12];

console.log(lodash.uniq(nums));

console.log(lodash.concat(nums, [123, 12324, 1232]));

lodash.fill(nums, 1001);
console.log(nums);

lodash.fill(nums, '*', 2, 5 );
console.log(nums);