export const price = (value: any): string | undefined =>
    value && !/(?<=^| )\d+(\.)?(\d){0,2}(?=$| )$/g.test(value)
        ? 'Возможен формат ddd и ddd.d ddd.dd'
        : undefined;

//(?<=^| )\d*(\.)?(?=\d| )(\d){0,2}(?=$| )$
