
var a = {} ;
var b = a ;

a.v = 1 ;
b.v = 2 ;

console.log(a.v);

//======Les objets en javascript ====================================

var personne = {

    nom: "DURAND",
    prenom: "Robert",
       direBonjour : function(){
    console.log('Bonjour');
   }
}
personne.direBonjour();                                           

//======Les objets en javascript #02 ====================================
var personne = {};
personne.nom = "DURAND";
personne.prenom = "Robert";
personne.direBonjour = function()
{
  console.log('Bonjour');
}

//======Les objets en javascript #03 ====================================
function personne ()
 {
   this.nom = "DURAND";
   this.prenom = "Robert"
   this.afficheNom = function ()
   {
       console.log('') ;
   }

 }

 //======Les objets en javascript ====================================

 var personne = {
    nom : "DURAND",
    prenom : "Robert",
    afficheNom : function()
    {
      console.log('nom: '+this.nom );
    }
     
    }; 

  personne.afficheNom();