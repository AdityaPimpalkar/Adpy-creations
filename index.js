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
).mouseout(
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
).mouseout(
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
).mouseout(
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
).mouseout(
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
).mouseout(
	function() {
		$(".wdsxe-IMG").removeClass("wdsxe-IMG").addClass("wdse-img");
		$(".wdsxe-HD").removeClass("wdsxe-HD").addClass("wdse-hd");
		$(".wdse-inText").css("display","none");
	}
);

 function mediaSize() { 
if (window.matchMedia('(max-width : 480px)').matches) {
	$(".web-development").unbind('mouseover mouseout')
	$(".web-design").unbind('mouseover mouseout')
	$(".web-storage").unbind('mouseover mouseout')
	$(".web-security").unbind('mouseover mouseout');

	//------WEB DEVELOPMENT---------//
	$(".wd-more").click(function(){
		$(".wde-inText,.wde-back,.web-storage,.web-security").css({"display": "none","animation":"service-fadeout-in 1s"});
		$(".wd-more").css({
			"background-color": "#000",
			"color": "#fff"
		});
		$(".wd-inText").css({
			"display":"block",
			"font-size":"32px",
			"transition":"0.9s",
			"width":"19em",
			"padding":"75px 0"
		}).appendTo(".services-two");
		$(".wd-back").css({
			"display":"block",
			"transition":"0.9s"
		}).appendTo(".services-two");
	});

	$(".wd-back").click(function(){
		$(".web-storage,.web-security").css({"display": "block","animation":"service-fadeout-in 1s"});
		$(".wd-more").css({
			"background-color": "",
			"color": ""
		});
		$(".wd-inText").css({
			"display":"none",
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

	//------WEB DESIGN---------//
	$(".wde-more").click(function(){
		$(".wd-inText,.wd-back,.web-storage,.web-security").css({"display": "none","animation":"service-fadeout-in 1s"});
		$(".wde-more").css({
			"background-color": "#000",
			"color": "#fff"
		});
		$(".wde-inText").css({
			"display":"block",
			"font-size":"32px",
			"width":"19em",
			"padding":"75px 0"
		}).appendTo(".services-two");
		$(".wde-back").css({
			"display":"block"
		}).appendTo(".services-two");
	});

	$(".wde-back").click(function(){
		$(".web-storage,.web-security").css({"display": "block","animation":"service-fadeout-in 1s"});
		$(".wde-more").css({
			"background-color": "",
			"color": ""
		});
		$(".wde-inText").css({
			"display":"none",
			"font-size":"15px",
			"width":"240px",
			"padding":""
		});
		$(".wde-back").css({
			"background-color":"#fff",
			"color":"#000",
			"display":"none"
		});
	});

	//------WEB STORAGE---------//
	$(".wds-more").click(function(){
		$(".wdse-inText,.wdse-back,.web-development,.web-design").css({"display": "none","animation":"service-fadeout-in 1s"});
		$(".wds-more").css({
			"background-color": "#000",
			"color": "#fff"
		});
		$(".wds-inText").css({
			"display":"block",
			"font-size":"32px",
			"transition":"0.9s",
			"width":"19em",
			"padding":"105px 0"
		}).appendTo(".services");
		$(".wds-back").css({
			"display":"block",
			"transition":"0.9s"
		}).appendTo(".services");
	});

	$(".wds-back").click(function(){
		$(".web-development,.web-design").css({"display": "block","animation":"service-fadeout-in 1s"});
		$(".wds-more").css({
			"background-color": "",
			"color": ""
		});
		$(".wds-inText").css({
			"display":"none",
			"font-size":"15px",
			"width":"240px",
			"padding":""
		});
		$(".wds-back").css({
			"background-color":"#fff",
			"color":"#000",
			"display":"none"
		});
	});

	//------WEB SECURITY---------//
	$(".wdse-more").click(function(){
		$(".wde-inText,.wde-back,.web-development,.web-design").css({"display": "none","animation":"service-fadeout-in 1s"});
		$(".wdse-more").css({
			"background-color": "#000",
			"color": "#fff"
		});
		$(".wdse-inText").css({
			"display":"block",
			"font-size":"32px",
			"transition":"0.9s",
			"width":"19em",
			"padding":"105px 0"
		}).appendTo(".services");
		$(".wdse-back").css({
			"display":"block",
			"transition":"0.9s"
		}).appendTo(".services");
	});

	$(".wdse-back").click(function(){
		$(".web-development,.web-design").css({"display": "block","animation":"service-fadeout-in 1s"});
		$(".wdse-more").css({
			"background-color": "",
			"color": ""
		});
		$(".wdse-inText").css({
			"display":"none",
			"font-size":"15px",
			"width":"240px",
			"padding":""
		});
		$(".wdse-back").css({
			"background-color":"#fff",
			"color":"#000",
			"display":"none"
		});
	});

	}
}
window.addEventListener('resize', mediaSize, false);
});



