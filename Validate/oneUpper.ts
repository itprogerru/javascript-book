export const oneUpper = (value: any) => value && !/^.*[A-Z]+.*$/g.test(value)
    ? 'Должна быть хотябы одна большая буква'
    : undefined
