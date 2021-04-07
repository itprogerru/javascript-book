
const curry = (callback) => {
    const f = (...args) => {
        if (callback.length === args.length) {
            return callback(...args)
        }
        return (...newArg) => f(...args, ...newArg)
    }

    return f
}

const sum = (a,b) => a+b

const sum3 = (a,b,c)=> a + b+ c

const sumEx = curry(sum)(2)
const sumEx3 = curry(sum3)(2)
const sumEx4 = sumEx3(2)
console.log(sumEx(2), sumEx(3), sumEx3(2)(2), sumEx4(3));

