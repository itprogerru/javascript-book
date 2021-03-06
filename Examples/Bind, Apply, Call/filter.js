/**
 * filter своими руками
 Функция возвращает новый массив, оставляя исходный без изменений.
 Данные исходного массива передаются в callback функцию. Результат выполнения callback функции решает будет ли добавлен данный элемент в новый массив.
 Функция принимает три аргумента: массив, по которому будет происходить итерация, callback фунцию, которая будет выполнена для каждого элемента массива, и значение, которое будет использовано callback функцией в качестве this.
 callback функция, в свою очередь, также работает с тремя аргументами: текущий элемент массива, индекс элемента, ссылка на сам массив.
 *
 */

const filter = function(arr, callback, thisArg) {
    let i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};
