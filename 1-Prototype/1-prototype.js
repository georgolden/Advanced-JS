function Point(x, y) {
  this.x = x
  this.y = y
}
// This method implemented to Point
Point.from = function(obj) {
  const { x, y } = obj
  return new Point(x, y)
}
// This method implemented to all children of Point
Point.prototype.move = function(x, y) {
  this.x += x
  this.y += y
}
// This method implemented to all children of Point
Point.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`
}

// const point = new Point(10, 20)
// console.log(Point.prototype);
// console.log(Point.prototype.move.prototype);

const p1 = new Point(10, 20)
console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
