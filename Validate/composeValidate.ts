export const composeValidate = (...fns) => x => fns.reduceRight((error, fn) => error || fn(x), undefined)
