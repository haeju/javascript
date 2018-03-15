//noReturnFunc() 함수
var noReturnFunc = function(){

    console.log('This  function has no  return statement. ');

};

var result = noReturnFunc();

console.log(result); //일반 함수나 메소드는 return문을 지정하지 않을 경우 undefined값이 리턴된다.

//Person() 생성자 함수
function Person1(name, age, gender){

    this.name = name;
    this.age = age;
    this.gender = gender;


    return {name:'bar', age:20, gender:'woman'};
}


var foo = new Person1('foo',30,'man');
console.dir(foo);



