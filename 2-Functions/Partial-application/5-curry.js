// recursive partial application - Currying

// wrong Implementation
// const curry = fn => (...args) => (
//   fn.length > args.length ? curry(
//     ((fn, ...args1) => (...args2) => (
//       fn(...args1.concat(args2))
//     ))(fn, ...args)
//   ) : fn(...args)
// )

// good Implementation
// const curry = fn => (...args) => {
//   if (fn.length > args.length) {
//     const f = fn.bind(null, ...args)
//     return curry(f)
//   } else {
//     return fn(...args)
//   }
// }

// optimized Implementation -1 recursive step
const curry = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length ?
      curry(fn.bind(null, ...args))
     : fn(...args)
  )
  return par.length ? curried(...par) : curried
}

// Usage

const sum4 = (a, b, c, d) => (a + b + c + d)

const f = curry(sum4)
const y1 = sum4(1, 2, 3, 4)
const y2 = f(1, 2, 3, 4)
const y3 = f(1, 2, 3)(4)
const y4 = f(1, 2)(3)(4)
const y5 = f(1)(2)(3)(4)
const y6 = f(1)(2, 3, 4)
const y7 = f(1)(2)(3, 4)
const y8 = f(1, 2)(3, 4)
console.log(y1, y2, y3, y4, y5, y6, y7, y8);
