
const curry = (callback) => {
    const f = (...args) => {
        if (callback.length === args.length) {
            return callback(...args)
        }
        return (...newArg) => f(...args, ...newArg)
    }

    return f
}

const curry2 = fn => (...args) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry2(f);
    } else {
        return fn(...args);
    }
};

// Usage

const sum4 = (a, b, c, d) => (a + b + c + d);

const f = curry2(sum4);
const y1 = sum4(1, 2, 3, 4);
const y2 = f(1, 2, 3, 4);
const y3 = f(1, 2, 3)(4);
const y4 = f(1, 2)(3)(4);
const y5 = f(1)(2)(3)(4);
const y6 = f(1)(2, 3, 4);
const y7 = f(1)(2)(3, 4);
const y8 = f(1, 2)(3, 4);
console.log(y1, y2, y3, y4, y5, y6, y7, y8);

const sum = (a,b) => a+b

const sum3 = (a,b,c)=> a + b+ c

const sumEx = curry(sum)(2)
const sumEx3 = curry(sum3)(2)
const sumEx4 = sumEx3(2)
console.log(sumEx(2), sumEx(3), sumEx3(2)(2), sumEx4(3));

