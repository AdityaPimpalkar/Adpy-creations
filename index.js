 function openNav() {
    $(".nav").css("width","250px");
}

function closeNav() {
    $(".nav").css("width","0px");
}

 $(document).ready(function() { 

$(".welcome-message").mouseover(
	function() {
		$(".welcome-text").replaceWith(
		'<div class="replace-text">I believe that<br> internet is an ever evolving,'+
		 'competitive and a very innovative medium for brand awareness.</div>');
		$(".wd").css("display","");
		$(".wde").css("display","");
		$(".wds").css("display","");
		$(".wdse").css("display","");
	}
);

$(".welcome-message").mouseout(
	function() {
		$(".replace-text").replaceWith('<div class="welcome-text">Welcome!<br>to<br>Adpi Creations</div>');
		$(".wd").css("display","none");
		$(".wde").css("display","none");
		$(".wds").css("display","none");
		$(".wdse").css("display","none");
	}
);

$(".web-development").mouseover(
	function() {
		$(".wd-img").removeClass("wd-img").addClass("wdx-IMG");
		$(".wd-hd").removeClass("wd-hd").addClass("wdh-HD");
		$(".wd-inText").css("display","");
	}
);

$(".web-development").mouseout(
	function() {
		$(".wdx-IMG").removeClass("wdx-IMG").addClass("wd-img");
		$(".wdh-HD").removeClass("wdh-HD").addClass("wd-hd");
		$(".wd-inText").css("display","none");
	}
);

$(".web-design").mouseover(
	function() {
		$(".wde-img").removeClass("wde-img").addClass("wdex-IMG");
		$(".wde-hd").removeClass("wde-hd").addClass("wdex-HD");
		$(".wde-inText").css("display","");
	}
);

$(".web-design").mouseout(
	function() {
		$(".wdex-IMG").removeClass("wdex-IMG").addClass("wde-img");
		$(".wdex-HD").removeClass("wdex-HD").addClass("wde-hd");
		$(".wde-inText").css("display","none");
	}
);

$(".web-storage").mouseover(
	function() {
		$(".wds-img").removeClass("wds-img").addClass("wdsx-IMG");
		$(".wds-hd").removeClass("wds-hd").addClass("wdsx-HD");
		$(".wds-inText").css("display","");
	}
);

$(".web-storage").mouseout(
	function() {
		$(".wdsx-IMG").removeClass("wdsx-IMG").addClass("wds-img");
		$(".wdsx-HD").removeClass("wdsx-HD").addClass("wds-hd");
		$(".wds-inText").css("display","none");
	}
);

$(".web-security").mouseover(
	function() {
		$(".wdse-img").removeClass("wdse-img").addClass("wdsxe-IMG");
		$(".wdse-hd").removeClass("wdse-hd").addClass("wdsxe-HD");
		$(".wdse-inText").css("display","");
	}
);

$(".web-security").mouseout(
	function() {
		$(".wdsxe-IMG").removeClass("wdsxe-IMG").addClass("wdse-img");
		$(".wdsxe-HD").removeClass("wdsxe-HD").addClass("wdse-hd");
		$(".wdse-inText").css("display","none");
	}
);

});

function mediaSize() { 
if (window.matchMedia('(max-width : 480px)').matches) {
	$(".web-development").unbind('mouseover mouseout')
	$(".web-design").unbind('mouseover mouseout')
	$(".web-storage").unbind('mouseover mouseout')
	$(".web-security").unbind('mouseover mouseout');

	$(".wd-more").click(function(){
		$(".web-design,.web-storage,.web-security").css({"display": "none","animation":"service-fadeout-in 0.9s"});
		$(".web-development").css({
			"width":"47em",
			"height":"650px",
			"padding":"0"
		});
		$(".wd-more").css({
			"background-color": "#000",
			"color": "#fff"
		});
		$(".wd-inText").css({
			"font-size":"32px",
			"width":"19em",
			"padding":"50px 0"
		});
		$(".wd-back").css({
			"display":"block"
		});
	});

	$(".wd-back").click(function(){
		$(".web-design,.web-storage,.web-security").css({"display": "block","animation":"service-fadeout-in 9s"});
		$(".web-development").css({
			"width":"16.25em",
			"height":"350px",
			"padding":"0 55px"
		});
		$(".wd-more").css({
			"background-color": "",
			"color": ""
		});
		$(".wd-inText").css({
			"font-size":"15px",
			"width":"240px",
			"padding":""
		});
		$(".wd-back").css({
			"background-color":"#fff",
			"color":"#000",
			"display":"none"
		});
	});

	}
}
window.addEventListener('resize', mediaSize, false);
});
var images = ['1.jpg','2.jpg','3.jpg'];
var i=0;
function plusSlides() {
	if (i <= images.length) {
		i++;
   document.getElementById('switch').src =  images[i];
} 
	if(document.getElementById('switch').getAttribute('src') == "undefined") {
  		document.getElementById('switch').src = images[images.length-1];
  		i=2;
  }
}

function minusSlides() {
	if (i <= images.length) {
		i--;
   document.getElementById('switch').src =  images[i];
} 
	if(document.getElementById('switch').getAttribute('src') == "undefined") {
  		document.getElementById('switch').src = images[0];
  		i=0;
  }
}

		
