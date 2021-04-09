export const oneDigital = (value: any) => value && !/^.*[0-9]+.*$/g.test(value)
    ? 'Должна быть хотябы одна цифра'
    : undefined
