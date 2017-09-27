
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.rect(this.x_dep, this.y_dep, this.x_dep + this.largeur,  this.y_dep + this.hauteur);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.moveTo(this.x_init, this.y_init);
    ctx.lineTo(this.x_final, this.y_final);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
