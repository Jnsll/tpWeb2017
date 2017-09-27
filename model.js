
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    var formes = new Array();
}

function Forme(epaisseur, couleur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

function Rectangle(largeur,hauteur, x_dep, y_dep, epaisseur, couleur ){
    this.x_dep = x_dep;
    this.y_dep = y_dep;
    this.largeur = largeur;
    this.hauteur = hauteur;
    Forme.call(this, epaisseur, couleur);
}
Rectangle.prototype = new Forme();


function Line(x_init, y_init, x_final, y_final, epaisseur, couleur){

    this.x_init = x_init;
    this.y_init = y_init;
    this.x_final = x_final;
    this.y_final = y_final;
    Forme.call(this, epaisseur, couleur);
}
Line.prototype = new Forme();
