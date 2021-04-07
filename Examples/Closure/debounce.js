
function debounce(f, ms) {

    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}
let log = '';

function f(a) {
    log += a;
    console.log(log)
}

const dEx = debounce(f, 400)
dEx(1); // выполниться только это условие
dEx(2);
dEx(3);
