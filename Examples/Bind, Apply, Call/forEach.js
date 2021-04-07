// функция foreach
function forEach(list, callback) {
    for (let n =0; n < list.length; n++) {
        callback.call(list[n],n);
    }
}
const weapons = [ { type: 'test1'}, { type: 'test2'}, { type: 'test3'}]

forEach(weapons, function (index) {
    console.log(index);
    assert (this === weapons[index], "got the expected value of "+ weapons[index].type)
})

/*
* forEach своими руками
Теперь, когда вы знаете, как работает forEach, настало время написать функцию, которая делает всё тоже самое. При создании функции each будем руководствоваться тремя правилами:
Функция принимает три аргумента: массив, по которому будет происходить итерация, callback фунцию, которая будет выполнена для каждого элемента массива, и значение, которое будет использовано callback функцией в качестве this.
callback функция, в свою очередь, также работает с тремя аргументами: текущий элемент массива, индекс элемента, ссылка на сам массив.
Функция ничего не возвращает.
Самое очевидное решение: используя цикл for перебрать каждый элемент массива и выполнить передаваемую callback функцию с каждым. Сделать это очень просто:
* */



const each = function(arr, callback, thisArg) {
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        callback.call(thisArg, arr[i], i, arr);
    }
};
