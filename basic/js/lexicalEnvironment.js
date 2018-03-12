/**
 * Created by haeju.park on 2018-03-09.
 * Outer Lexical Environment
 */

var a = 10;

fe();

function fe(){
    console.log('a :',a);
    innerFunc1();

    function innerFunc1(){
        console.log('a :',a);
        innerFunc2();
    }

    function innerFunc2(){
        var a =2;
        console.log('a:',a);
    }
}

/*
  global
* LexicalEnvironment{
*   ER{
*     declareEnvRe{
*       a:10,
        fe : function reference
*     }
*   } ,
*   OLE : null
* }
 *
 *
* fe
* LexicalEnvironment{
*   ER{
*     declareEnvRe{
*       innerFunc1:function reference
        innerFunc2:function reference
*     }
*   } ,
*   OLE : global Lexical Environment
* }
 *
* */

