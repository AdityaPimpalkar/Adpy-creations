 function mediaSize() { 
if (window.matchMedia('(max-width : 480px)').matches) {
	$(".replace-text").css({"display":"block"});

	//------WEB DEVELOPMENT---------//
	$(".web-development").click(function(){
		$(".wde-inText,.wde-back,.web-design,.web-storage,.web-security").css({"display": "none","animation":"service-fadeout-in 1s"});
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
		$(".web-design,.web-storage,.web-security").css({"display": "block","animation":"service-fadeout-in 1s"});
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
	$(".web-design").click(function(){
		$(".wd-inText,.wd-back,.web-development,.web-storage,.web-security").css({"display": "none","animation":"service-fadeout-in 1s"});
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
		$(".web-development,.web-storage,.web-security").css({"display": "block","animation":"service-fadeout-in 1s"});
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
	$(".web-storage").click(function(){
		$(".wdse-inText,.wdse-back,.web-security,.web-development,.web-design").css({"display": "none","animation":"service-fadeout-in 1s"});
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
		$(".web-development,.web-design,.web-security").css({"display": "block","animation":"service-fadeout-in 1s"});
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
	$(".web-security").click(function(){
		$(".wde-inText,.wde-back,.web-storage,.web-development,.web-design").css({"display": "none","animation":"service-fadeout-in 1s"});
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
		$(".web-development,.web-design,.web-storage").css({"display": "block","animation":"service-fadeout-in 1s"});
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

	}else {
		$(".replace-text").css({"display":"none"});
		$(".wd-inText").appendTo(".web-development");
		$(".wde-inText").appendTo(".web-design");
		$(".wds-inText").appendTo(".web-storage");
		$(".wdse-inText").appendTo(".web-security");
	}
}
