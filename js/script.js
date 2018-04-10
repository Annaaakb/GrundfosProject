/* ---  slider ---- */


function sliderClickRight1(){
	$('#Jumpbox .aaa').addClass('XXX').removeClass('aaa');
	$('#Jumpbox .bbb').addClass('aaa').removeClass('bbb');
	$('#Jumpbox .XXX:nth-child(3)').addClass('bbb').removeClass('XXX');
	$('#Jumpbox ul.slider_main').append($('#Jumpbox li.XXX:nth-child(1)'));
}
function sliderClickLeft1(){
	$('#Jumpbox .bbb').addClass('XXX').removeClass('bbb');
	$('#Jumpbox .aaa').addClass('bbb').removeClass('aaa');
	$('#Jumpbox ul.slider_main').prepend($('#Jumpbox li.XXX:last-child'));
	$('#Jumpbox .XXX:nth-child(1)').addClass('aaa').removeClass('XXX');
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