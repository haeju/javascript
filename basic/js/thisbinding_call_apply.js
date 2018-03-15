function Person(name, age, gender){

    this.name = name;
    this.age = age;
    this.gender = gender;

}

// foo 빈 객체 생성
var foo = {};


// apply() 메서드 호출
Person.apply(foo, ['foo','2','f']);

console.dir(foo);


function myFunction(){

    console.dir(arguments);

    //arguments.shift(); //에러 발생

    var args = Array.prototype.slice.apply(arguments);

    console.log(args);

}


myFunction(1,2,3);
