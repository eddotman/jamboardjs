/* jamboardJS */

function Jamboard() {};
Jamboard.prototype = {
	nm: null,
	w: null,
	h: null,

	activate: function() {
		var freqCount = 300;

		for (var i=0 ; i < this.h; i++) { 
			for (var j=0; j < this.w; j++) {
				var freqCount = freqCount + ((i+1)+(j+1))*10;
				$("#" + this.nm).append("<button freq='" + freqCount + "' class='jmb-btn' id='" + this.nm + "-" + i + "-" + j + "' />");	
			}
			$("#" + this.nm).append("<br>");
		}
	
		$(".jmb-btn").click(function (event) {
			event.preventDefault();
			var id = event.target.id;
			$("#" + this.nm).append(id);
			var fq = parseFloat($("#" + id).attr("freq"));
			var sound = T("sin", {freq:fq, mul:0.5});

			T("perc", {r:500}, sound).on("ended", function() {
			  this.pause();
			}).bang().play();
		});
	 }
};