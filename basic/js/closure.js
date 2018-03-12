/**
 * Created by haeju.park on 2018-03-08.
 */

console.log('closure x')
function foo() {
    var color = 'blue';

    function bar() {
        console.log(color);
    }

    bar();
}

foo();

console.log('closure')
var color2 = 'red';
function foo2() {

    var color = 'blue';

    function bar() {
        console.log(color);
    }

    return bar;
}
var baz = foo2();
baz();

/*
 1.bar는 color를 찾아 출력하는 함수로 정의되었다.
 2.그리고 bar는 outer environment 참조로 foo의 environment를 저장하였다.
 3.bar를 global의 baz란 이름으로 데려왔다.
 4.global에서 baz(=bar)를 호출했다.
 5.bar는 자신의 스코프에서 color를 찾는다.
 6.없다. 자신의 outer environment 참조를 찾아간다.
 7.ter environment인 foo의 스코프를 뒤진다. color를 찾았다. 값은 blue이다.
 때문에 당연히 blue가 출력된다.*/

/*일단 중요한 부분은 2~4번, 그리고 7번이다.
 bar는 자신이 생성된 렉시컬 스코프에서 벗어나 global에서 baz라는 이름으로 호출이 되었고,
 스코프 탐색은 현재 실행 스택과 관련 없는 foo를 거쳐 갔다. baz를 bar로 초기화할 때는
 이미 bar의 outer lexical environment를 foo로 결정한 이후이다. 때문에, bar의 생성과
 직접적인 관련이 없는 global에서 아무리 호출하더라도 여전히 foo에서 color를 찾는 것이다.
 이런 bar(또는 baz)와 같은 함수를 우리는 클로저라고 부른다.*/

function count() {
    var i;
    for (i = 1; i < 10; i++) {
        setTimeout(function timer() {
          //  console.log('count ' + i);
        }, i * 100)
    }
}

count();

function count2() {
    var i;
    for (i = 1; i < 10; i++) {
        (function (numbering) {
            setTimeout(function timer() {
             //   console.log('count2 ' + numbering);
            }, i * 100);
        })(i);
    }
}

count2();


function count3() {
   // 'use strict';
    for (let i = 1; i < 10; i += 1) {
        setTimeout(function timer() {
          //  console.log('count3 ' + i);
        }, i * 100);
    }
}

count3();

console.log("=========lexical scope======="); // ?

function ex1() {
console.log(a); // ?
var a;
}
function ex2() {
var a = 10;
if (true) {
var a = 20;
}
console.log(a); // ?
}
function ex3() {
for(var i = 0; i < 2; i ++){}
console.log(i); // ?
}
ex1();
ex2();
ex3();