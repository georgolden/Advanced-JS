// обертка функции другой функцией

const logable = fn => (...args) => {
  const result = fn(...args)
  console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${result}`);
  return result
}

// Usage

const sum = (...args) => args.reduce((acc, value) => {
  return acc + value
}, 0)

const wrapped = logable(sum)
wrapped(1, 2, 3, 4, 5)
