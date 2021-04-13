const memoize = (fn) => {
    const cache = {}
    return (...args) => {
        const key = args.join("")
        const value = cache[key];
        if (value) {
            console.log("cache")
            console.dir(cache)
            return value
        }
        console.log("new result")
        cache[key] = fn(...args);
        console.dir(cache)
        return cache[key]
    }
}

const fn = (a,b)=> a * b;
const memo = memoize(fn)
memo(4,5)
memo(10,5)
memo(4,5)
