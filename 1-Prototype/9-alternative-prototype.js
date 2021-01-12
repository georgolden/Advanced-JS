
// i can create methods inside constructor func
function Rect(x, y, width, height) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  // мы можем тут поставить условие
  // тем самым не все дети получат метод toStringer()
  this.toStringer = function() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`
  }
}

function Square(x, y, side) {
  Rect.call(this, x, y, side, side)
}
Object.setPrototypeOf(Square.prototype, Rect.prototype)

const p1 = new Square(1, 2, 10)
console.log(p1.toStringer());
