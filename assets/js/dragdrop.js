
var targets = $(".snapbox"),
    snapwidth = $(".dragbox-item").outerWidth(),
    snapheight = $(".dragbox-item").outerHeight(),
    randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16),
    gridRows = 12,
    gridColumns = 12,
    gridHeight = 100,
    gridWidth = $("body").width() / 5,
    snap = 50;

for (i = 0; i < gridRows * gridColumns; i++) {
    y = Math.floor(i / gridColumns) * snapheight;
    x = (i * snapwidth) % (gridColumns * snapwidth);
    $("<div/>").css({ position: "absolute", border: "1px solid #454545", width: snapwidth, height: snapheight, top: y, left: x }).prependTo($(".dragbox-container"));
}

$(document).ready(function () {
    $(".snapbox").css({ width: snapwidth * 3, height: snapheight, background: randomcolor });

    var dragable = Draggable.create($(".dragbox-inner"), {
        bounds: $(".dragbox-container"),
        edgeResistance: 1,
        type: "y,x",
        onDrag: onDrag
    });
});

function onDrag() {
    TweenMax.to($(".dragbox-inner"), 0.5, {
        x: Math.round(this.x / snap) * snap,
        y: Math.round(this.y / snap) * snap,
        ease: Back.easeOut.config(2)
    });
}
