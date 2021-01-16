
const summator = initialVal => {
  let acc = initialVal
  const add = delta => {
    acc += delta
    if (acc >= add.maxValue) {
      setImmediate(() => {
        add.maxEvent(new Error('max value reached', acc))
      })
    }
    return add
  }
  add.max = (max, event) => {
    add.maxValue = max
    add.maxEvent = event
    return add
  }
  return add
}

// Usage

const maxReached = (err, acc) => {
  if (err) throw err
  console.log('max value reached, value: ' + acc);
}

try {
  const acc1 = summator(10).max(100, maxReached)(-12)
  acc1(20)(25)(25)(25)(25)(-25)(25)(-25)(1000)(-1000)
} catch(err) {
  console.log('Never');
}

console.log('end');
