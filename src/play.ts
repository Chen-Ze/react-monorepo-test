function foo(x: number): number {
    console.log('test called');
    return x + 1;
}

export default foo;

console.log(foo(2));
console.log(1);
