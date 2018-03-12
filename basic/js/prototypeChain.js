/**
 * Created by haeju.park on 2018-03-08.
 * http://bestalign.github.io/2015/07/28/Prototype-Chain/
* */
var A_prototype = {
    x:1, y:2
};

var A = Object.create(A_prototype);
A.z = 3;


//////////////////////////////////
// {z:3} => {x:1, y:2} => {...} = > null
// A        A_prototype     Object.prototye
////////////////////

console.log(A.z);
console.log(A.x);
console.log(A.y);

console.log(A.a);


