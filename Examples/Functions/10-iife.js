'use strict';

// Immediately-invoked function expression

// IIFE (Immediately (немедленно) Invoked (вызываемая) Function Expression (выражение)) это JavaScript функция, которая выполняется сразу же после того, как она была определена.

(function f1() {
    console.log('f1');
})();

(function() {
    console.log('anonymous');
})();

(() => {
    console.log('lambda');
})();

{
    console.log('block');
}
