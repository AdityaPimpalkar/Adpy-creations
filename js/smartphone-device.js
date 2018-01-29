 function mediaSize() {
if (window.matchMedia('(max-width : 480px)').matches) {
	$(".replace-text").css({"display":"block"});
	$(".img-wd").attr("src","images/develop-black.svg").css("width","120px");
  $(".img-wde").attr("src","images/design-black.svg").css("width","120px");
  $(".img-wds").attr("src","images/storage-black.svg").css("width","120px");
  $(".img-wdse").attr("src","images/security-black.svg").css("width","120px");

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

	$(".more-cr-content").show();
	$(".more-biu-content").show();
	$(".more-roc-content").show();
	$(".more-sci-content").show();

	}else {
		$(".more-cr-content").hide();
		$(".more-biu-content").hide();
		$(".more-roc-content").hide();
		$(".more-sci-content").hide();
		$(".replace-text").css({"display":"none"});
		$(".wd-inText").appendTo(".web-development");
		$(".wde-inText").appendTo(".web-design");
		$(".wds-inText").appendTo(".web-storage");
		$(".wdse-inText").appendTo(".web-security");
	}

if (window.matchMedia('(min-width:482px) and (max-width: 770px)').matches) {
	$(".replace-text").show();
	$(".wd-back").hide();
	$(".wd-fwd").show();
	$(".wde-back").hide();
	$(".wde-fwd").show();
	$(".wds-back").hide();
	$(".wds-fwd").show();
	$(".wdse-back").hide();
	$(".wdse-fwd").show();
	$(".roc-fwd").show();
	$(".biu-fwd").show();
	$(".cr-fwd").show();
	$(".sci-fwd").show();
	function TabWebEx(e) {
		e.stopPropagation();
		$(".wdx-IMG").removeClass("wdx-IMG").addClass("wd-img");
		$(".wdh-HD").removeClass("wdh-HD").addClass("wd-hd");
		$(".wd-img,.wd-hd,.wd-fwd").hide();
		$(".wd-back").show();
		$(".web-development").off("click");
	}
		$(".web-development").on("click",TabWebEx);
		$(".wd-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wd-img,.wd-hd,.wd-fwd").show();
				$(".wd-back").hide();
				$(".web-development").on("click",TabWebEx);
			}
		);

	function TabDecEx(e) {
		e.stopPropagation();
		$(".wdex-IMG").removeClass("wdex-IMG").addClass("wde-img");
		$(".wdex-HD").removeClass("wdex-HD").addClass("wde-hd");
		$(".wde-img,.wde-hd,.wde-fwd").hide();
		$(".wde-back").show();
		$(".web-design").off("click");
	}
		$(".web-design").on("click",TabDecEx);
		$(".wde-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wde-img,.wde-hd,.wde-fwd").show();
				$(".wde-back").hide();
				$(".web-design").on("click",TabDecEx);
			}
		);

	function TabStoEx(e) {
		e.stopPropagation();
		$(".wdsx-IMG").removeClass("wdsx-IMG").addClass("wds-img");
		$(".wdsx-HD").removeClass("wdsx-HD").addClass("wds-hd");
		$(".wds-img,.wds-hd,.wds-fwd").hide();
		$(".wds-back").show();
		$(".web-storage").off("click");
	}
		$(".web-storage").on("click",TabStoEx);
		$(".wds-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wds-img,.wds-hd,.wds-fwd").show();
				$(".wds-back").hide();
				$(".web-storage").on("click",TabStoEx);
			}
		);

	function TabSecEx(e) {
		e.stopPropagation();
		$(".wdsxe-IMG").removeClass("wdsxe-IMG").addClass("wdse-img");
		$(".wdsxe-HD").removeClass("wdsxe-HD").addClass("wdse-hd");
		$(".wdse-img,.wdse-hd,.wdse-fwd").hide();
		$(".wdse-back").show();
		$(".web-security").off("click");
	}
		$(".web-security").on("click",TabSecEx);
		$(".wdse-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wdse-img,.wdse-hd,.wdse-fwd").show();
				$(".wdse-back").hide();
				$(".web-security").on("click",TabSecEx);
			}
		);

}else{
	$(".wd-back").hide();
	$(".wd-fwd").hide();
	$(".wde-back").hide();
	$(".wde-fwd").hide();
	$(".roc-fwd").hide();
	$(".biu-fwd").hide();
	$(".cr-fwd").hide();
	$(".sci-fwd").hide();
}
}
