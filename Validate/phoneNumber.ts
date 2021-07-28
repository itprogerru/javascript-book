export const phoneNumber = (value: any): string | undefined =>
    value &&
    String(value).length > 1 &&
    !/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g.test(value)
        ? 'Длина должна быть 11 символов'
        : undefined;
