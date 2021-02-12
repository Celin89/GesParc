function Personne(p_nom, p_prenom){

    this.nom = p_nom ;
    this.prenom = p_prenom ;
}

Personne.prototype.age = 30 ;
Personne.prototype.age.getAge = function (){
    return this.age ;
}

var personne = new Personne("DURAND", "Robert");
console.log(personne.getAge());



function Personne(p_nom , p_prenom){

    this.nom = p_nom ;
    this.prenom = p_prenom ;

}
Personne.prototype.age = 30 ;
var personne = new Personne("DURAND", "Robert") ;
console.log(personne.age);
console.log(personne.constructor.prototype.age);


Array.prototype.showAll = function(){

    for ( var i=0 ; i<this.length ; i++){
        console.log(this[i]);
    }
} ;

var arr=['un', 'deux', 'trois'] ; 
arr.showAll() ;