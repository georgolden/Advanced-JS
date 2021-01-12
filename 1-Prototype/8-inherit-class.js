class Rect {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  toStringer() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`
  }

  get area() {
    return this.width * this.height
  }
  
  set side(l) {
    this.width = l
    this.height = l
  }

  get side() {
    if (this.width !== this.height) throw new Error('Not a Square')
    return this.width
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side)
  }
}

const p1 = new Square(10, 20, 50)
console.log(p1.toStringer());

const obj1 = { x: 1, y: 1, width: 10, height: 10 }

// мы кидаем методы Rect к обьекту obj1
// Object.setPrototypeOf(obj1, Rect.prototype) 
// equal to obj1.__proto__ = Rect.prototype

console.log(p1.side);
console.log(p1.area);
p1.side = 150
console.log(p1.side);
