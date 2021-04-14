'use strict';

const s = 'Hello <User1@domain.com> and user2@domain.com ...User1.User1@domain.com.';

// [a-z0-9\.]+ - любое количество символов и точка хотябы один
// потом собачка
// потом людое количество символо и точка
const rx = /[a-z0-9\.]+@[a-z0-9\.]+/gi;

const m = s.match(rx);

console.dir(m);
