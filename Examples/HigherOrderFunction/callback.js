const fn = (par, callback) => {
    if (!par) {
        callback(new Error('Parameter needed'));
        return;
    }
    callback(null, `Data ${par}`);
    return 'Value';
};
// вызываем функция о передает ей функцию
const res = fn('example', (err, data) => {
    if (err) throw err;
    console.dir({ data });
});

console.dir({ res });
