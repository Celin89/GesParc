var monSingleton = ( function() {
    var instance ;
function init() {

  var hello = " Hello"+Math.random() ;
  return {
    sayHello: function(){
      console.log(hello);  

    }
  };
} 

 return {
     getInstance: function () {
         if( !instance ){
             instance = init() ;
         }
       return instance ;  
     }
 } ;

} )();

var S = monSingleton.getInstance() ;
var S2 = monSingleton.getInstance() ;
S.sayHello();
S2.sayHello();