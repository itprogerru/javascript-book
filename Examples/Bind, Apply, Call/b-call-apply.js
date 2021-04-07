'use strict';

/*
* Простой пример call и apply
*
*  */

// объявляем функцию с аргументами
function f1(a, b) {
    console.log('f1(' + a + ', ' + b + ')');
}

f1(2, 3);

// вызываем функцию с передаем агрументы a и b 2,3
f1.call(null, 2, 3);

const arr = [2, 3];
f1(...arr);
f1.apply(null, arr);
