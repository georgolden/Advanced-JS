function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const bind = (context, fn) => {
  return (...args) => {
    fn.apply(context, args)
  }
}

const person1 = {name: 'Michael', age: 22, job: 'Frontend'}
const person2 = {name: 'Elena', age: 19, job:'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()
