const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = s => s.length;

function f1() {
    const cities = ['Athens', 'Roma'];
    const f = s => s.toUpperCase(); // ссылаеться сюда из 2 блока
    console.dir({ cities });
    console.dir(cities.map(f));

    { // переопределение области видимости block scope
        const f = s => s.toLowerCase(); // попадет в функцию в этом блоке
        console.dir({ cities });
        console.dir(cities.map(f)); // сылаеться на функцию выше
    }

    {   // переопределение области видимости block scope
        const cities = ['London', 'Beijing', 'Kiev'];
        console.dir({ cities });
        console.dir(cities.map(f)); // f будет ссылаться на 6 строку
    }

}

f1();

console.dir({ cities });
console.dir(cities.map(f));
