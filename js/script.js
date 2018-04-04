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

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("donateSlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 15000); // Change image every 15 seconds
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var filter, p, ul, li, a, i;
  div = document.getElementById("myDropdown");
  btn = div.getElementsByClassName("btn");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      btn[i].style.display = "";
    } else {
      btn [i].style.display = "none";
    }
  }
}




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
	
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// Range slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}