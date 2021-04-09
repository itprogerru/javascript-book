export const maxLength = (max: number) => (value?:any) =>
    value && value.length > max ? `Должно быть не более ${max} символов` : undefined
