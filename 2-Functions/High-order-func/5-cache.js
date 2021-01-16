
const fn = () => {
  console.log('Generate cache');
  const cache = {}
  return key => {
    let result = cache[key]
    if (result) {
      console.log('From cache');
      return result
    } else {
      console.log('Calculated and save to cache');
      // calculations logic 
      result = 'value' + key
      cache[key] = result
      return result
    }
  }
}

const f1 = fn()
f1('name')
f1('name')
console.log(f1('name'));
