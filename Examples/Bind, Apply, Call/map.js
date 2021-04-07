/*
* Map своими руками

Функция возвращает новый массив, оставляя исходный без изменений.
Всё, что возвращает callback функция добавляется в новый массив.
Функция принимает три аргумента: массив, по которому будет происходить итерация, callback фунцию, которая будет выполнена для каждого элемента массива, и значение, которое будет использовано callback функцией в качестве this.
callback функция, в свою очередь, также работает с тремя аргументами: текущий элемент массива, индекс элемента, ссылка на сам массив.
*
*
* */
const map = function(arr, callback, thisArg) {
    let i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};
const objMap = {};

const pows = map([10, 20, 30], Math.pow, objMap);
const frameworks = map(['Knockout', 'Backbone', 'Angular'], function(framework) {
    return framework.slice(0, 5);
});

console.log(pows, objMap); // [1,20,900]
console.log(frameworks); // ["Knock","Backb","Angul"]
