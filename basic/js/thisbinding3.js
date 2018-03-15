// Person 생성자 함수

var Person = function (name){
    this.name = name;
}

// foo 객체 생성
var foo = new Person('foo');

console.log(foo.name);


// 객체 리터럴 방식
var foo1 = {

    name :"foo",
    age:35,
    gender:'man'
}


console.dir(foo1);

// 생성사 함수 방식
function Person1(name, age, gender, position){

    this.name = name;
    this.age = age;
    this.gender = gender;

}


//생성자 함수 방식
var bar = new Person('bar', 33 , 'woman');

console.dir(bar);


var baz = new Person('baz', 25,'woman');
console.dir(baz);


//new를 붙이지 않고 생성자 호출시 
var qux= Person1('qux',20,'man');
console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);




//위 내용 처럼 위험성을 피하려고 널리 사용되는 패턴이 있다.
function patternTest(arg){
    if ( !(this instanceof patternTest))
        return new  patternTest(arg);
    this.value = arg? arg:0;
}

var a = new patternTest(100);
var b = patternTest(10);


console.log(a.value);
console.log(b.value);
console.log(window.value);
