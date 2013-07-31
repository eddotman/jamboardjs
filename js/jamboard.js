/* jamboardJS */

function Jamboard() {};
Jamboard.prototype = {
	key: false,
	w: null,
	h: null,

	genGrid: function() {
		if (this.key == true) {
			this.w = 10;
			this.h = 3;		
		}

		$(".jamboard").html("[JAMBOARD RENDERED HERE] <br>");
		$(".jamboard").append("Grid size: " + this.w + "x" + this.h);
	}		
};


//Generate Jamboard
$(document).ready(function() {
	var jmb1 = new Jamboard();
	jmb1.key = true;
	jmb1.genGrid();
});