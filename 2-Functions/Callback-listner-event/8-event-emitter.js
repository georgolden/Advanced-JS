const events = require('events')

const emitter = new events.EventEmitter()

emitter.on('new city', city => {
  console.log('Emitted city: ' + city);
})

emitter.on('new city', city => {
  console.log('Emitted city (2): ' + city);
})

emitter.on('new array', array => {
  console.log('Sum of an array = ' + array.reduce((acc, el) => acc + el));
})

emitter.emit('new city', 'Berlin')
emitter.emit('new city', 'Hamburg')
emitter.emit('new city', 'Leipzig')
emitter.emit('new array', [1, 2, 3, 4])
