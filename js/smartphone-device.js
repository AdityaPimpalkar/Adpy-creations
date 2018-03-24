 function mediaSize() {
if (window.matchMedia('(min-width : 320px) and (max-width : 480px)').matches) {
	$(".replace-text").css({"display":"block"});
	$(".back").attr("src","images/blk-back.png").css("width","67px");
	$(".img-wd").attr("src","images/develop-black.svg").css("width","120px");
    $(".img-wde").attr("src","images/design-black.svg").css("width","120px");
    $(".img-wds").attr("src","images/storage-black.svg").css("width","120px");
	$(".img-wdse").attr("src","images/security-black.svg").css("width","120px");
	$(".ig").attr("src","images/instagram-draw-logo.svg");
	$(".fb").attr("src","images/facebook-draw-logo.svg");
	$(".gh").attr("src","images/github-draw-logo.svg");

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
			"transition":"0.9s",
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
    $(".img-wd").attr("src","images/develop.svg").css("width","60px");
    $(".img-wde").attr("src","images/design.svg").css("width","60px");
    $(".img-wds").attr("src","images/storage.svg").css("width","60px");
	$(".img-wdse").attr("src","images/security.svg").css("width","60px");
	$(".ig").attr("src","images/instagram.svg");
	$(".fb").attr("src","images/facebook.svg");
	$(".gh").attr("src","images/github.svg");
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


if (window.matchMedia('(min-width:480px) and (max-width: 769px)').matches) {
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
		$(".wd-img,.wd-hd").css("animation","wdx-uplift 0.3s forwards");
		$(".wd-inText").css("animation","wdx-uplift-intext 0.3s forwards");
		$(".wd-fwd").hide();
		$(".wd-back").show();
	}
		$(".web-development").on("click",TabWebEx);
		$(".wd-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wd-img,.wd-hd").css("animation","wd-uplift 0.3s forwards");
				$(".wd-inText").css("animation","wdx-normlift-intext 0.3s forwards");
				$(".wd-fwd").show();
				$(".wd-back").hide();
				$(".web-development").on("click",TabWebEx);
			}
		);

	function TabDecEx(e) {
		e.stopPropagation();
		$(".wde-img,.wde-hd").css("animation","wdx-uplift 0.3s forwards");
		$(".wde-inText").css("animation","wdx-uplift-intext 0.3s forwards");
		$(".wde-fwd").hide();
		$(".wde-back").show();
	}
		$(".web-design").on("click",TabDecEx);
		$(".wde-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wde-img,.wde-hd").css("animation","wd-uplift 0.3s forwards");
				$(".wde-inText").css("animation","wdx-normlift-intext 0.3s forwards");
				$(".wde-back").hide();
				$(".wde-fwd").show();
			}
		);

	function TabStoEx(e) {
		e.stopPropagation();
		$(".wds-img,.wds-hd").css("animation","wdx-uplift 0.3s forwards");
		$(".wds-inText").css("animation","wdx-uplift-intext 0.3s forwards");
		$(".wds-fwd").hide();
		$(".wds-back").show();
	}
		$(".web-storage").on("click",TabStoEx);
		$(".wds-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wds-img,.wds-hd").css("animation","wd-uplift 0.3s forwards");
				$(".wds-inText").css("animation","wdx-normlift-intext 0.3s forwards");
				$(".wds-back").hide();
				$(".wds-fwd").show();
			}
		);

	function TabSecEx(e) {
		e.stopPropagation();
		$(".wdse-img,.wdse-hd").css("animation","wdx-uplift 0.3s forwards");
		$(".wdse-inText").css("animation","wdx-uplift-intext 0.3s forwards");
		$(".wdse-fwd").hide();
		$(".wdse-back").show();
	}
		$(".web-security").on("click",TabSecEx);
		$(".wdse-back").on( "click",
			function(e) {
				e.stopPropagation();
				$(".wdse-img,.wdse-hd").css("animation","wd-uplift 0.3s forwards");
				$(".wdse-inText").css("animation","wdx-normlift-intext 0.3s forwards");
				$(".wdse-back").hide();
				$(".wdse-fwd").show();
				$(".web-security").on("click",TabSecEx);
			}
		);
		

}else{
	$(".wd-back").hide();
	$(".wd-fwd").hide();
	$(".wde-back").hide();
	$(".wde-fwd").hide();
  $(".wds-back").hide();
  $(".wds-fwd").hide();
  $(".wdse-back").hide();
	$(".wdse-fwd").hide();
	$(".roc-fwd").hide();
	$(".biu-fwd").hide();
	$(".cr-fwd").hide();
	$(".sci-fwd").hide();
}

		if(window.matchMedia('(min-width : 1880px)').matches) {
			$(".img-wd").attr("src","images/develop.svg").css("width","100px");
			$(".img-wde").attr("src","images/design.svg").css("width","100px");
			$(".img-wds").attr("src","images/storage.svg").css("width","100px");
			$(".img-wdse").attr("src","images/security.svg").css("width","100px");
			$(".ig").attr("src","images/instagram.svg").css("width","150px");
			$(".fb").attr("src","images/facebook.svg").css("width","150px");
			$(".gh").attr("src","images/github.svg").css("width","150px");
			$(".back").attr("src","images/back.svg").css("width","67px");
		}else if(window.matchMedia('(min-width : 1680px)').matches) {
			$(".img-wd").attr("src","images/develop.svg").css("width","80px");
			$(".img-wde").attr("src","images/design.svg").css("width","80px");
			$(".img-wds").attr("src","images/storage.svg").css("width","80px");
			$(".img-wdse").attr("src","images/security.svg").css("width","80px");
			$(".ig").attr("src","images/instagram.svg").css("width","150px");
			$(".fb").attr("src","images/facebook.svg").css("width","150px");
			$(".gh").attr("src","images/github.svg").css("width","150px");
		}else if(window.matchMedia('(min-width : 480px) and (max-width : 1440px)').matches){
			$(".img-wd").attr("src","images/develop.svg").css("width","60px");
			$(".img-wde").attr("src","images/design.svg").css("width","60px");
			$(".img-wds").attr("src","images/storage.svg").css("width","60px");
			$(".img-wdse").attr("src","images/security.svg").css("width","60px");
		}
 
}
