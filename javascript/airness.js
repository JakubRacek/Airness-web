$(document).ready(function() {
$('.arrow, [class^=arrow-]').bootstrapArrows();
});    


$( "#navkont" ).click(function() {
  // $( "#target" ).click();
  // alert( "Handler for .click() called." );
  // $(" #contact ").css("visibility", "visible");
  // $(" #contact ").css("transform", `translateX(50%)`);
  // $(" #contact ").css("transform", `translateY(50%)`);

  if ($(window).width() >= 576) {
  		$(" #contact ").css({transform:'translateX(-50%) translateY(-50%)'});
  		$(" #contact ").css("left", "50%");
  		$( "main" ).css("filter", "brightness(10%)");
  		$(" #contact ").css("box-shadow", '0 0 7px 3px rgba(22, 158, 212, 0.82)');
	}
  // .css('-webkit-transform',  "translateX(" + pos+ "px)");
});

$( "main" ).click(function() {
	if ($(window).width() >= 576) {
		$(" #contact ").css({transform:'translateX(-101%) translateY(-50%)'});
	  	$(" #contact ").css("left", "0%");
	  	$( "main" ).css("filter", "brightness(100%)");
	  	$(" #contact ").css("box-shadow", 'none');
	}

  // $( "#target" ).click();
  // alert( "Handler for .click() called." );
  // $(" #contact ").css("visibility", "visible");
  // $(" #contact ").css("transform", `translateX(50%)`);
  // $(" #contact ").css("transform", `translateY(50%)`);
  
  // .css('-webkit-transform',  "translateX(" + pos+ "px)");
});


