/**
 * Created by haeju.park on 2018-03-08.
 */
//prototype에 주어진 function을 추가
Function.prototype.method = function( name, func){
  this.prototype[name] = func;
    return this;
};


Function.method('new',function(){
   //주어진 prototype을 사용하여 새로운 object를 생성한다.
    // var that = Object.create(this.prototype);

    var that={};
    //숨겨진 prototype link
    //__proto__는 표준이 아니므로 쓰지 않는 것이 좋다.
    that.prototype = this.prototype;

    //생성한 object를 바인딩하여 생성자를 호출한다.
    var other = this.apply(that,arguments);

    //other가 object가 아니면 that을 대신 돌려준다.
    return (typeof other === 'object' && other) || that;
});

function Point(x,y){
    this.x = x;
    this.y = y;
}

var p1  = Point.new(1,1);