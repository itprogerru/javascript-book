// цепочка вызыва

// что бы организовать такое цепочку нужно возвращать объект
const hash = () => {
    const data = {};
    Object.defineProperty(data, 'add', {
        enumerable: false, // поле не видимое
        value(key, value) {
            data[key] = value;
            return data;
        }
    });
    return data;
};

// Usage

console.dir(
    hash()
        .add('name', 'Marcus')
        .add('city', 'Roma')
        .add('born', 121)
);

// { name: 'Marcus', city: 'Roma', born: 121 }



