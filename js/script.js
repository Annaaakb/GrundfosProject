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


