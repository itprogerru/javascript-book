
// добавляет метода в объект
const scalable = image => {
    image.scale = () => console.log('Image scaled');
};

// сохраняет в замыкание и потом вызываеться и примешиваеться в setImmediate по факту данный метод у нас есть
// но мы его переиспользовали в setImmediate
const lazy = image => {
    const scale = image.scale;
    image.scale = () => setImmediate(() => scale()); // и враппер и миксин вместе
};

const image = {};

console.log('Mixin scalable() adds method: scale');
scalable(image);
console.log('Before scale');
image.scale();
console.log('After scale\n');

console.log('Mixin lazy() adds lazy behavior');
lazy(image);
console.log('Before scale');
image.scale();
console.log('After scale');
