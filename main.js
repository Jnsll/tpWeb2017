
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

// Code temporaire pour tester le DnD

    new DnD(canvas);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

/////

// Code temporaire pour tester l'affiche de la vue
var drawing = new Drawing();
var rec = new Rectangle(10, 20, 50, 100, 5, '#EB0243');
rec.paint(ctx, canvas);
var ligne = new Line(30, 30, 60, 70, 5, '#00CCC0');
ligne.paint(ctx, canvas);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

