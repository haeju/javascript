/**
 * Created by haeju.park on 2018-03-08.
 *
 * Lexical Scope & Dyanmaic Scope
 */

//Javascript witdh Dynamic Scope
console.log('Javascript witdh Dynamic Scope');
function foo(){
    console.log(x);
}

function bar(){
    var x = 15;
    foo();
}

var x = 10;
foo();
bar();

/*function scope
* function만이 자신의 SCOPE을 가진다.
* */
function foo1(){
    console.log("foo1");
    var y =1;
    console.log(y);

    if(true){
     var y = 2;
        console.log(y)
    }

    console.log(y);
}

foo1();

/*
* javascript scope 재 생성은..
* */
function foo_js_scope(){
    console.log("foo_js_scope");
    var x = 1;
    if ( true ){
        (
            function(){
                var x=2;
                console.log(x);
            }
        )();
    }
    console.log(x);
}

foo_js_scope();