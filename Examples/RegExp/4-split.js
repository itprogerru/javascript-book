const words = s => [...new Set(s
    .toLowerCase()
    .replace(/\W+/g, ' ') // все последовательности меняем на один пробел
    .trim() // режем все пробелы справа и слева
    .split(/\s/) // сплит по символом режем по словам по пробелу тоесть
)];

const s = 'Hello World, here we are!';

console.dir(words(s)); // [ 'hello', 'world', 'here', 'we', 'are' ]

console.dir(words(s + s)); // [ 'hello', 'world', 'here', 'we', 'are' ] - так как уникальные значения поэтому остальные уберуться

