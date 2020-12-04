function add(a: number): Function {
    return function(b: number): number {
        return a + b;
    }
}
const addWith5 = add(5);
console.log(addWith5(3));
console.log(addWith5(15));