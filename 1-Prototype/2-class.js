class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  move(x, y) {
    this.x += x
    this.y += y
  }

  toString(){
    return `[${this.x}, ${this.y}]`
  }

  static from(obj) {
    const { x, y } = obj
    return new Point(x, y)
  }
}

// const object1 = { x: 10, y: 20, z: 322}
// const point = Point.from(object1)
// console.log(point.toString());

// console.log(Point.prototype.move.prototype);
// console.log(Point.constructor.prototype);
// console.log(Point.prototype.constructor.prototype);

const p1 = new Point(10, 20)
console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
