const fs = require('fs')

const getCities = () => {
  let onDone = null
  const deferred = {
    data: callback => onDone = callback
  }
  
  // setTimeout(() => {
  //   if (onDone) onDone(['Berlin', 'Muenchen', 'Hamburg', 'Leipzig'])
  // }, 2000)
  fs.readFile('./cities.json', 'utf8', (err, data) => {
    if (err) throw new Error('File doesnt exists')
    if (onDone) onDone(JSON.parse(data).cities)
  })
  return deferred
}

// Usage

const cities = getCities()

cities.data(cityList => {
  cityList.forEach(element => {
    console.log(element);
  });
})

console.log('end');
