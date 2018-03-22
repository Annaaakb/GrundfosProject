$(function() {
		var selectedClass = "";
		$("p").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#topics").fadeTo(100, 0.1);
		$("#topics div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#topics").fadeTo(500, 1);
    }, 500);
		
	});
});