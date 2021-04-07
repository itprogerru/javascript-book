/**reduce своими руками

 Функция принимает три аргумента: массив, callback функцию, начальное значение.
 После каждой итерации в промежуточное значение перезаписывается значением, полученным в результате выполнения callback функции. 3.callback функция принимает четыре аргумента: промежуточное значение, текущий элемент массива, индекс элемента, ссылка на сам массив.
 Явно указать значение this нельзя.
 */
const reduce = function(arr, callback, startValue) {
    let i, length = arr.length, result = startValue;
    for (i = 0; i < length; i = i + 1) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};
