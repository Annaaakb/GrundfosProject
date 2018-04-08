/* ---  slider ---- */


function sliderClickRight1(){
	$('#hi .aaa').addClass('XXX').removeClass('aaa');
	$('#hi .bbb').addClass('aaa').removeClass('bbb');
	$('#hi .XXX:nth-child(3)').addClass('bbb').removeClass('XXX');
	$('#hi ul.slider_main').append($('#hi li.XXX:nth-child(1)'));
}
function sliderClickLeft1(){
	$('#hi .bbb').addClass('XXX').removeClass('bbb');
	$('#hi .aaa').addClass('bbb').removeClass('aaa');
	$('#hi ul.slider_main').prepend($('#hi li.XXX:last-child'));
	$('#hi .XXX:nth-child(1)').addClass('aaa').removeClass('XXX');
}


/* ---  filter overfaner ---- */


$(function() {
		var selectedClass = "";
		$("a").click(function() {
		selectedClass = $(this).attr("data-rel");
    $("#topics").fadeTo(100, 0.1);
		$("#topics div").not("." + selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#topics").fadeTo(500, 1);
    }, 500);
		
	});
});


/* ---  filter dropdowns ---- */

	// add an eventlistener to the .underfilter container element
	document.querySelector('.underfilter').addEventListener("click", function (e) {
	  
	  // make sure that we clicked on a button element
	  if(e.target.nodeName === "BUTTON") {
		console.log(e.target.nodeName);
		console.log(e.target.nextElementSibling);
		
		// The next element is the div we want to show
		let nextElement = e.target.nextElementSibling;

		// If it already has a show class, then remove all
		if(nextElement.className === "show") {
			removeAllShowClasses();
		} else {
			// remove all classes
			removeAllShowClasses();
			// and then add a "show" class on this element
			nextElement.className = "show";
		}
		e.stopPropagation();
	  }	
	});

	function removeAllShowClasses() {
		// remove all classes from the divs
		document.querySelectorAll(".underfilter div").forEach(
			function(elm) {
				console.log(elm.className = "");
			}
		);
	}

	document.querySelector("body").addEventListener("click", function () {
		console.log("clicked on body");
		removeAllShowClasses();
	});