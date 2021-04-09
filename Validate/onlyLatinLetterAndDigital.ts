export const onlyLatinLetterAndDigital = (value: any) =>
    value &&
    !/^[a-zA-Z0-9!@#$%^&*]+$/i
        .test(value)
        ? 'Должны быть латинские буквы в нижнем и верхнем регистре, и цифры'
        : undefined
