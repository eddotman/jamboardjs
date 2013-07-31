/* jamboardJS */

function Jamboard() {};
Jamboard.prototype = {
	type: null,

	genGrid: function() {
		$(".jamboard").html("[Jamboard will be rendered here.]");
	}
};


//Generate Jamboard
$(document).ready(function() {
	var jmb1 = new Jamboard();
	jmb1.genGrid();
});