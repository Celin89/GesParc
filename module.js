var monModule = ( function() {
    var compteur = 0 ;
    return{
        incrementCompteur: function () {
            return compteur++;
        }
    };
}) () ;

var i = monModule.incrementCompteur();
console.log(i) ;
i = monModule.incrementCompteur() ;
console.log(i) ;