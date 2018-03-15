var a = 10;
foo();
function foo() {
    debugger
    console.log('a :', a);
    innerFunc1();
    function innerFunc1() {
        console.log('a :', a);
        innerFunc2();
    }
    function innerFunc2() {
        var a = 2;
        console.log('a :', a);
    }
}