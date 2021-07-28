export const pipeValidate = (...fns: any) => (x: any, ...args: any): string | undefined =>
    fns.reduceRight((error: any, fn: any) => error || fn(x, ...args), undefined);
