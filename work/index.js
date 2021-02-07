// functional programming curry and composition of functions in practice

const numbers = [1, 2, 3, 4, 5]

const double = x => x * 2

const isEven = x => x % 2 === 0

const add = (x, y) => x + y

console.log(
  numbers.map(double),
  numbers.filter(isEven),
  numbers.reduce(add, 0)
)

const asyncComputing = () => Promise.resolve(1)

asyncComputing()
  .then (x => x + 1)
  .then (console.log)

  // use decorators

  const withLog = fn =>
  (...args) => {
    console.log('arguments:', args)
    const result = fn(...args)
    console.log('result:', result)
    return result

  }

  const mult = (x, y) => x * y

  const audiMult = withLog(mult)

  audiMult(2, 4)
