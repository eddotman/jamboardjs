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

		for (var i=0 ; i < this.h; i++) { 
			for (var j=0; j < this.w; j++) {
				$(".jamboard").append("<button/>");	
			}
			$(".jamboard").append("<br>");
		}

		$(".jamboard").append("<br><p>Click jamboard buttons for beats. Use your keyboard to jam.</p>");
		$(".jamboard").append("<p><em>(jamboard currently not functional)</em></p>");
	}		
};


//Generate Jamboard
$(document).ready(function() {
	var jmb1 = new Jamboard();
	jmb1.key = true;
	jmb1.genGrid();
});