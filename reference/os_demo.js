// Dependecies
const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem() / 1e9);

// Total memory
console.log(os.totalmem() / 1e9);

// Home dir
console.log(os.homedir());

// Uptime
const date = new Date(os.uptime());
console.log(date);
