var currentSize = 16;
var currentColor = "rgba(0,0,0,";

var generateGrid = function(sideLength) {
	var pixels = sideLength * sideLength; 
	var size = (100 / sideLength) + "%"; 
	for (var i = 0; i < pixels; i++) {
	    $( "#container" ).append( '<div class="pixel"></div>' );
    }
    $( "div.pixel" ).css({
      "width": size,
      "padding-bottom": size
    });
};

var setColor = function() {
	$( "div.color" ).click(function(evt) {
		var id = $( this ).attr( "id" );
		if (id === "red") {
			currentColor = "rgba(255,0,0,";
		} else if (id === "blue") {
			currentColor = "rgba(0,0,255,";
		} else if (id === "yellow") {
			currentColor = "rgba(255,255,0,";
		} else if (id === "green") {
			currentColor = "rgba(0,255,0,";
		} else if (id === "orange") {
			currentColor = "rgba(255,130,45,";
		} else if (id === "purple") {
			currentColor = "rgba(255,0,255,";
		} else if (id === "black") {
			currentColor = "rgba(0,0,0,";
		}
	});
}

var changePixelColor = function() {
	$( "div.pixel" ).hover(function(evt) {
		var thisColor = $( this ).css("background-color");
		var colorArray = thisColor.split(",");
		var opacity;
        if (colorArray.length >= 4) {
		    opacity = Number(colorArray[3].slice(1, (colorArray[3].length - 1))); 
		} else {
            opacity = 1;
		}
        if (!(isNaN(opacity))) {
		    var newColor = currentColor + (opacity + 0.1) + ")"; 
		    $( this ).css({
			    "background-color": newColor,
		    });		
	    }
	});
}

$( document ).ready(function() {
	generateGrid(currentSize);
    changePixelColor();
    setColor();
	$( "#refresh" ).click(function(evt) {
		var gridWidth = Number($("input[name=size]").val());
		if (!(isNaN(gridWidth)) && (gridWidth > 0)) {
        	currentSize = gridWidth;
        }
		$( "#container" ).empty();
		generateGrid(currentSize);
		changePixelColor();
	});
});
