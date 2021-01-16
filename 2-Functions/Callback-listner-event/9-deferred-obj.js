
const getCities = () => {
  let onDone = null
  const deferred = {
    data: callback => onDone = callback
  }
  
  setTimeout(() => {
    if (onDone) onDone(['Berlin', 'Muenchen', 'Hamburg', 'Leipzig'])
  }, 2000)
  return deferred
}

// Usage

const cities = getCities()

console.log(cities);

cities.data(cityList => {
  cityList.forEach(element => {
    console.log(element);
  });
})

console.log('end');
