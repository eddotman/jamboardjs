/* jamboardJS */

function Jamboard() {};
Jamboard.prototype = {
	key: false,
	name: null,
	w: null,
	h: null,

	genGrid: function() {
		if (this.key == true) {
			this.w = 10;
			this.h = 3;		
		}

		for (var i=0 ; i < this.h; i++) { 
			for (var j=0; j < this.w; j++) {
				$(".jamboard").append("<button class='jmb-btn' id='" + i + "-" + j + "' />");	
			}
			$(".jamboard").append("<br>");
		}

		$(".jamboard").append("<br><p>Click jamboard buttons for beats. Use your keyboard to jam.</p>");
		$(".jamboard").append("<p><em>(jamboard currently not functional)</em></p>");
	},

	activate: function () {
		$(".jmb-btn").click(function (event) {
			event.preventDefault();
			var id = event.target.id;
			//$("#" + id).css("background-color", "#ff5555");
			$("#" + id).toggleClass("active");
		});
	} 
};


//Generate Jamboard
$(document).ready(function() {
	var jmb1 = new Jamboard();
	jmb1.name = "jmb1";
	jmb1.key = true;
	jmb1.genGrid();
	jmb1.activate();
});