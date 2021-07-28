export const correctPhoneOperatorCode = (value: string): string | undefined =>
  value && value[0].search(/[3-6]|8|9/g) === -1
    ? 'Код оператора должен начинаться с цифры 3, 4, 5, 6, 8, 9'
    : undefined;
