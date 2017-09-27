
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    var formes = new Array();
}

function Forme(){
    var couleur;
    var epaisseur;
}


function Rectangle(){
    var x_dep;
    var y_dep;
    var largeur;
    var hauteur;
    Forme.call(this, couleur, epaisseur);
}

function Line(){

    var x_init;
    var y_init;
    var x_final;
    var y_final;
    Forme.call(this, couleur, epaisseur);
}