// Docs: https://developer.mozilla.org/en-US/docs/Web
//       /JavaScript/Reference/Global_Objects/RegExp

/*
    .  - single char - один символ
    x? - optional or non-greedy - может быть в строке может не быть, переключение выражения из жадного режима в нежадный
    x+ - 1 or more times - до него 1 или больше раз
    x* - 0 or more times - до него 0 или боле раз
    () - group $1...$9 - группа
    [] - chars - перечислять набор символов
    \x - escape x - эскейпеть экранирование спец символы которые имеют значение в регулярке
    ^x - line begin or negated expr - должна начинаться
    x$ - line end - заканчиваться
    x|y - either x or y - или
*/

const rx1 = /abc/;
console.log('Do you know abc?'.match(rx1)); // поиск abc в страке

const rx2 = new RegExp('abc');
console.log('Do you know abc?'.match(rx2)); // поиск abc в страке [ 'abc', index: 12, input: 'Do you know abc?', groups: undefined ]

// маленькая буква от a-z любая буква
// + относиться к [a-z]+ - хотябы одна буква должна быть потом
// должна быть a и
// [a-z]+ последня тоже должны быть буква
const rx3 = /[a-z]+a[a-z]+/g; // g- флаги - говорит что глобальный найдет все вхождения
const st3 = 'A man can die but once';
console.log(st3.match(rx3));


// \s - спейсы пробелы должно быть пробел
// потом буква g
// \w любой символ или подчеркивание
// \w* - любой символ множество раз
const rx4 = /\sg\w*/g;
const st4 = 'Some are born great, ' +
    'some achieve greatness, ' +
    'and some have greatness thrust upon them.';
console.log(st4.match(rx4)); //[ ' great', ' greatness', ' greatness' ]

// .- символ
// u
// . символ
// . символ
// найдем слово которая состоит из 4 символов где 2 символ это "u" остальные 3 символа любые
const rx5 = /.u../g;
const st5 = '— Such much? — For whom how';
console.log(st5.match(rx5)); // much

// \w найти буквы
// {3,5} - что бы 3 или 5 букв
const rx6 = /\w{3,5}/g;
const st6 = '— MGIMO finished? — Ask?!';
console.log(st6.match(rx6)); //[ 'MGIMO', 'finis', 'hed', 'Ask' ]

// ищем любой которая не начинает с l и заканчиваеться пробелом

const rx7 = /[^l] /g;
const st7 = 'Nothing will come of nothing';
console.log(st7.match(rx7)); // [ 'g ', 'e ', 'f ' ]

// ^ - должна начинаться с
// \+ - экранируем символ + начинаеться с символа который может быть или не быть
// ? может быть а может не быть как раз этот + тоесть выражение \+? говорит что символ + может быть а может не быть
// \d{12} 12 чисел
const rx8 = /^\+?\d{12}$/;
const st8 = '+380661234567';
console.log(st8.match(rx8)); // найдет всю строку

const st8_2 = '380661234567';
console.log(st8_2.match(rx8)); // найдет всю строку

// [0-9]+ - должен быть хотябы 1 и более символ (в данном случае цифра) потом пробел и потом должно быть слово hours|days
const rx9 = /[0-9]+ (hours|days)/g;
const st9 = '5 days';
console.log(st9.match(rx9));

const st9_2 = '55 days'; // [ '5 days' ]
console.log(st9_2.match(rx9)); // ['55 days']
