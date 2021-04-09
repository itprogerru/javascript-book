export const passwordsMustMatch = (value: any, allValues: any) =>
    value !== allValues.password ?
        'Пароли не совпадают' :
        undefined
