const rx = /[abc]/gi; // найдет символ и индекс

console.dir({
    rx,
    flags: rx.flags,
    global: rx.global,
    ignoreCase: rx.ignoreCase,
    multiline: rx.multiline,
    source: rx.source,
    sticky: rx.sticky,
    unicode: rx.unicode,
    lastIndex: rx.lastIndex,
});

/*
{
  rx: /[abc]/gi, - строка
  flags: 'gi', - флаги
  global: true,
  ignoreCase: true,
  multiline: false,
  source: '[abc]',
  sticky: false,
  unicode: false,
  lastIndex: 0 - состояние
}
 */

console.dir({
    xyz: rx.test('xyz'),
    abc: rx.test('abc')
});
// { xyz: false, abc: true }

const s = 'abcdefgabc';

let res;
do {
    res = rx.exec(s);
    console.log({ lastIndex: rx.lastIndex, res });
} while (res); // что то вернул не null, вернет null если дойдет до конца строки
