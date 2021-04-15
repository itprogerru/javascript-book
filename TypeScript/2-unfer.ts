
// статьи
// https://habr.com/ru/company/ruvds/blog/493716/
// https://habr.com/ru/company/alfa/blog/452620/ - для реакта реальное использование единственное что бы это корректно работало
// в actions допустим export const setEmail = () => ({ type: TYPE_CONST as const, payload: test}) нужно добавить as const или
// там где объявлены константы допустим const TYPES = { TYPE_CONST: TYPE_CONST,   TYPE_CONST2: TYPE_CONST2} as const нужно сказать что это константы
// и тогда функция будет такая  const setEmail = () => ({ type: TYPE_CONST, payload: test})

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
//
// Возвращает тип ввиде type1 | type2 | typ3
// где actions - это импортированные модули
// Использование
// type TAction = ReturnType<InferValueTypes<typeof actions>>


// преобразует объект с методами в типизацию ввида
// {
//   fun1: (params?) => void
//   fun2: ()=> void
// }
// читаеться так если T являеться функцией то возвращаем (...args: TParams) => void иначе any
//

export type ReturnTypeAction<T> =
    T extends (...args: infer TParams) => unknown
        ? (...args: TParams) => void
        : any;

// пробегаемся по объекту где K это ключ от T (Функции) и возвращаем тип
export type ReturnDispatchType<T> = {
    [K in keyof T]: ReturnTypeAction<T[K]>
};
