Array.prototype.showAll = function(){

    for ( var i=0 ; i<this.length ; i++){
        console.log(this[i]);
    }
} ;

var arr=['un', 'deux', 'trois'] ; 
arr.showAll() ;


//===Structure conditionnelle switch===

let firstUser = {
    name: "will Alexandre",
    age: 33,
    accountLevel:"normal"
} ; 

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
} ;

let thirdUser = {
    name:"Audrey Simon",
    age: 27,
    accountLevel:"mega-premium"
};

switch(firstUser.accountLevel){
 case'normal':
 console.log('You have a normal account');
 break;

 case'premium':
 console.log('You have a premium account');
 break;


 case 'mega-premium':
 console.log('You have a mega premium account ');
 break;

 default:
     console.log('Unknown account type');

}

//===Structure conditionnelle if ===
let userIsLoggedIn = false ;

if(userIsLoggedIn ){
    console.log('User bien connecté') ;
}
else
{
   console.log('User non connecté');
}
