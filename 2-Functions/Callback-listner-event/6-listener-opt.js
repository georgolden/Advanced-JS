// one way to optimize listener with big data on it
// is to add timer which send time to eventLoop(OS) before iterate

const iterate = (array, listener) => {
  let counter = 0
  // setImmediate or setTimeout(0) or process.nextTick
  setInterval(() => {
    listener(array[counter++])
    if (counter >= array.length) {
      counter = 0
    }
  }, 1000)
}

const cities = ['London', 'Berlin', 'Hamburg']

const print = city => console.log('Next city: ' + city);

iterate(cities, print)
