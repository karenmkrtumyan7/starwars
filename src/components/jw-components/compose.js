export const compose = (...functions) => (View) => {
    return functions.reduceRight((calc, value) => {
        return value(calc);
    },View)
}
