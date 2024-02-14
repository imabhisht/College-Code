// const os = require('os');
// const util = require("node:util") 
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("Total Memory: " + os.totalmem());
// console.log("Free Memory: " + os.freemem());
// console.log("Ocuppied Memory: " + (os.totalmem() - os.freemem()));



// util.log("Platform: " + os.platform());
// util.format('%s:%s', 'foo');
// util.format('%s:%s', 'foo', 'bar', 'baz');
// util

const url = require('url');
const adr = "http://123.4.5.6:8080/hello.html?year=2021&month=february";
const q = url.parse(adr, true);
const util = require("node:util")

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

console.log(util.isDate(new Date()));

// Print the Date with UTIL
console.log(util.inspect(new Date()));






