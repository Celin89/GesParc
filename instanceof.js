function Personne(p_nom , p_prenom){
    this.nom = p_nom ;
    this.prenom = p_prenom ;

}

var nom_personne = "DURAND" ;
var prenom_personne = "Robert" ;
var personne = new Personne (nom_personne , prenom_personne);
console.log(personne.nom);

console.log(personne instanceof Personne ? "oui":"non");