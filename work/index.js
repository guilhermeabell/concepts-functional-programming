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

  // high order function

  const add = x => y => x + y

const increment = add(1)

console.log(
  add(2)(3),
  increment(665)
)

// curry

const R = require('ramda')

const add3 = R.curry((x, y, z) =>
x + y + z
)

console.log(
  add3(1, 2, 3),
  add3(1)(2)(3)

)

const curry = (fn, n) => {
  const arity = n || fn.lenght
  return (...params) =>
  params.lenght >= arity
  ? fn(...params)
  // eslint-disable-next-line no-unused-vars
  : curry(
    (...rest) => fn(...params, ...rest),
    arity - params.lenght
  )
}

const a3 = curry((x, y, z) =>
x + y + z
)

console.log(
  a3(1, 2, 3),
  a3(1)(2)(3),
  a3(1, 2) (3)
)

// composição

// h = f . g
// h(x) = f(g(x))
// const h = compose(f, g)

// f = f1 . f2 (...) . fm
// em pseudo-código: f(x) = f1( f2( ... fn(x) ...
// em pseudo-código: const f = compose(f1, f2) ...

const compose = (...fns) => x =>
fns.reduceRight((x, y) => f(y), x)

// algo que pode ser mais fácil de ler: pipe
// h = f |> g
// h(x) = g( f (x) )

const pipe = (...fns) =>
x => fns.reduce ((v, f) => f(v), x)

// - - -
// Problema
// Lista users:

/*
{
  admin: Boolean,
  age: Numberm
  // ... omitindo por simplicidade
}
*/

