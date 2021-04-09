'use strict';

function inc(a) {
    return ++a;
}

const sum = function(a, b) {
    return a + b;
};

const max = (a, b) => (a > b ? a : b);

console.log('Names: ');
console.dir({
    inc: inc.name, // inc
    sum: sum.name, // sum
    max: max.name, // max
});

console.log('Arguments: ');
console.dir({
    inc: inc.length, // функция наследуеться от объекта в цепочке прототипов и там есть данные свойство
    sum: sum.length,
    max: max.length,
});

console.log('Anonymous function: ' + function(x) { return x; }.name);
console.log('Anonymous lambda: ' + (x => x).name);

console.log('toString: ');
console.dir({
    inc: inc.toString(),
    sum: sum.toString(),
    max: max.toString(),
});
