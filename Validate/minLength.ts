export const minLength = (min:number) => (value?: any) =>
    value && value.length < min ? `Должно быть не менее ${min} символов` : undefined
