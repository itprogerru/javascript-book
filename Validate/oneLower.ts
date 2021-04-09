export const oneLower = (value: any) => value && !/^.*[a-z]+.*$/g.test(value)
    ? 'Должна быть хотябы одна маленькая буква'
    : undefined
