const rx1 = /def/g;
const s1 = 'abcdefgabc';
const res1 = s1.search(rx1);
console.log(res1); // 3

const rx2 = /cba/g;
const s2 = 'abcdefgabc';
const res2 = s2.search(rx2); // -1
console.log(res2);
