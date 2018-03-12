/**
 * Created by haeju.park on 2018-03-08.
 *
 * ProtoType Chain 으로 진행하다가 이름이 겹치는 propery가 있을떄
 * 최초 발견된 property로 가져옴 이를 ProtoTypeShadowin이라 함
 *
 */

var A_prototype = {
    x:1, y:2
};

var A = Object.create(A_prototype);
A.z =3;
A.x =4;

console.log(A.z); // 3

console.log(A.x); // 4
console.log(A.y); // 2

console.log(A.a); // undefined
