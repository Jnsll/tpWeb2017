
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'
    var x_initial = 0;
    var y_initial = 0;
    var x_final = 0;
    var y_final = 0;
    var pression = false;
};
// Developper les 3 fonctions gérant les événements
DnD.prototype.press = function(evt){
    var res = getMousePosition(canvas, evt);

    this.x_initial = res.x;
    this.y_initial = res.y;
    this.pression = true;
    console.log(res.x);
    console.log(res.y);
};

DnD.prototype.move = function(evt){
    if (this.pression){
        var res = getMousePosition(canvas, evt);

        console.log(res.x);
        console.log(res.y);

    }
};
DnD.prototype.release = function(evt){
    if (this.pression){
        var res = getMousePosition(canvas, evt);
        this.x_final = res.x;
        this.y_final = res.y;
        this.pression = false;

        console.log(res.x);
        console.log(res.y);
    }

};
// Associer les fonctions précédentes aux évènements du canvas.
canvas.addEventListener('mousedown', this.press, false);
canvas.addEventListener('mousemove', this.move, false);
canvas.addEventListener('mouseup', this.release, false);


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



