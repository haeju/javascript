/**
 * Created by haeju.park on 2018-03-08.
 * hoisting 내리기 끌어올리기
 */
 console.log("hoisting");

foo();

function foo(){
    console.log(name);

    var name = 'foo';
    console.log(name);
}

/*
* 위 소스는 javascript에서는 아래와 같이 수행된다.
* */
foo1();
function foo1(){
    var name;
    console.log(name);
    name = 'foo1';
    console.log(name);
}

//함수 선언문( 호이스팅 됨 )
console.log('function hoisting');
foo2();
function foo2(){
    console.log(name);
    var name = 'foo2';
    console.log(name);
}

//함수 표현식( 호이스팅 x )
foo3();
var foo3 = function(){
    console.log(name1);
    var name1="foo3";
    console.log(name1);
}

//new Function 객체 생성( 호이스팅 X )
foo4();
var foo4 = new Function("", console.log('foo4'));
