function newObjType()
{
  this.val=3 ; 
  newObjType.myObjCounter++;
}

newObjType.myObjCounter = 4 ;
obj1=newObjType();
obj2=newObjType();
obj3=newObjType();
newObjType.myObjCounter--;

//=========Struture conditionnelle #2 =============
const num = 30;
let number= 25;

if (number < num) {
    console.log('autoriser les invités');
} else {
    console.log('ne pas autoriser de nouveaux invités'); 
}





