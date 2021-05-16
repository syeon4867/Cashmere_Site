$(document).ready(function(){
	$(".menu ul li:nth-child(1) a").click(function(){
		$("html, body").animate({scrollTop: $("#cont_01 article:nth-child(1)").offset().top}, 1000);
		 return false;  //href="" 속성에 의한 새로고침 되는 것을 막는다.
	});

	$(".menu ul li:nth-child(2) a").click(function(){
		$("html, body").animate({scrollTop: $("#cont_01 article:nth-child(2)").offset().top}, 1000);
		 return false;  //href="" 속성에 의한 새로고침 되는 것을 막는다.
	});

	$(".menu ul li:nth-child(3) a").click(function(){
		$("html, body").animate({scrollTop: $("#cont_02 article:nth-child(1)").offset().top}, 1000);
		 return false;  //href="" 속성에 의한 새로고침 되는 것을 막는다.
	});

	$(".menu ul li:nth-child(4) a").click(function(){
		$("html, body").animate({scrollTop: $("#cont_02 article:nth-child(2)").offset().top}, 1000);
		 return false;  //href="" 속성에 의한 새로고침 되는 것을 막는다.
	});

});