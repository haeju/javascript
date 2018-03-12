// JavaScript
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// Point.prototype이 자동으로 생성

Point.prototype.print = function () {
  console.log('(' + this.x + ',' + this.y +')');
}

// new instances
var p1 = new Point(0, 0);

Point.prototype.save = function(){
    console.log('save');
}

p1.print();
p1.save();

var p2 = new Point(5, 6);


p2.print();
p2.save();

