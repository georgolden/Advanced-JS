const { sin } = Math;

// вычисляет обратную функцию у которой результат 1/x
const inverse = func => x => 1/func(x)
const cosecant = inverse(sin)

const a = cosecant(5)
console.log(a);
