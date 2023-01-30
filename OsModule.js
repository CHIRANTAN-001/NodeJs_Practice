const os = require('os');

// console.log(os.freemem())
// console.log(os.homedir());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.platform());

console.log("The machine is on for the last" ,(os.uptime())/3600, "hours");
