
//var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#EB0243';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	new DnD(canvas, this);

// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(dnd) {
        if (document.getElementById("butRect").checked){
            this.currentShape  = new Rectangle(dnd.x_initial,dnd.y_initial,dnd.x_final-dnd.x_initial,dnd.y_final-dnd.y_initial,
                document.getElementById("spinnerWidth").value, document.getElementById("colour").value);

        }else{
            this.currentShape  = new Line(dnd.x_initial,dnd.y_initial,dnd.x_final,dnd.y_final,
                document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
        }


    }.bind(this)

    this.onInteractionUpdate = function(dnd) {
        if (this.currentShape != 0){
            this.currentShape.clear(this.ctx)
            this.currentShape.finalX = dnd.x_final;
            this.currentShape.finalY = dnd.y_final;
            drawing.paint(this.ctx);
            this.currentShape.paint(this.ctx);
        }
    }.bind(this) ;

    this.onInteractionEnd = function(dnd) {
        this.currentShape.finalX = dnd.x_final;
        this.currentShape.finalY = dnd.y_final;
        this.currentShape.paint(this.ctx);
        drawing.addForms(this.currentShape);
        drawing.paint(this.ctx);
    }.bind(this) ;

};


