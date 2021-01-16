// listener calls multiple times, callback calls ones

// на большом количестве городов будут проблемы оптимизации

const iterate = (array, listener) => {
  for (const item of array) {
    listener(item)
  }
}

const cities = ['London', 'Haburg', 'Berlin']

const print = city => {
  console.log('City: ' + city);
}

iterate(cities, print)
