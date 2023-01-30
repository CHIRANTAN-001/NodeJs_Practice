const EventEmitter = require('events');
const { eventNames } = require('process');

class Myemitter extends EventEmitter { }

const myEmitter = new Myemitter();

myEmitter.on('WaterFull', () => {
    console.log("please turn off the motor");
    setTimeout(() => {
        console.log("please turn on the motor, its a gentle reminder");
    }, 4000);
});

console.log("script is running");
console.log("script is still running");

myEmitter.emit('WaterFull'); 