// multiplyM(2,3)
// multiplyM(2)(3)
// multiplyM(2)(4,3)

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return func.apply(this, args.concat(args2));
      }
    }
  };

}

function mul(a, b, c = 1, d = 1) {
  return a * b * c * d;
};

let multiplyM = curry(mul);
console.log(multiplyM(5)(4, 3, 2));
console.log(multiplyM(2, 4));
console.log(multiplyM(7)(7));

// [0,2,1,2,3,2,5,6,0,0,1,3]

// Without Curry 

multiply = (n, m) => (n*m);
multiply(2, 3)

// With Curry

curryMultiply = (n) => ((m) => multiply(n * m));
triple = curryMultiply(3)
triple(4)

// Uncurrying
unCurryMultiply = (n) => (m) => (n * m);
unCurryMultiply(3)(4)

unMultiple = (n, m) => unCurryMultiply(n)(m);
unMultiple(3, 4);