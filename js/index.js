 function openNav() {
 	if (window.matchMedia('(min-width : 480px)').matches) {
    $(".nav").css("width","250px");
}else {
	 $(".nav").css("width","300px");
}
}

function closeNav() {
	if (window.matchMedia('(min-width : 480px)').matches) {
    $(".nav").css("width","0px");
}else {
	 $(".nav").css("width","0px");
}
}


 $(document).ready(function() { 
 $(window).resize(mediaSize);
    mediaSize();
$(".welcome-message").mouseenter(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".welcome-text").hide();
		$(".replace-text").css("display","block");
		$(".wd").css("display","");
		$(".wde").css("display","");
		$(".wds").css("display","");
		$(".wdse").css("display","");
	}
	}
).mouseleave(	
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".welcome-text").show();
		$(".replace-text").css("display","none");
		$(".wd").css("display","none");
		$(".wde").css("display","none");
		$(".wds").css("display","none");
		$(".wdse").css("display","none");
	}
	}
);

$(".web-development").mouseenter(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wd-img").removeClass("wd-img").addClass("wdx-IMG");
		$(".wd-hd").removeClass("wd-hd").addClass("wdh-HD");
		$(".wd-inText").css("display","");
		}
	}
).mouseleave(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wdx-IMG").removeClass("wdx-IMG").addClass("wd-img");
		$(".wdh-HD").removeClass("wdh-HD").addClass("wd-hd");
		$(".wd-inText").css("display","none");
		}
	}
);

$(".web-design").mouseenter(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wde-img").removeClass("wde-img").addClass("wdex-IMG");
		$(".wde-hd").removeClass("wde-hd").addClass("wdex-HD");
		$(".wde-inText").css("display","");
		}
	}
).mouseleave(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wdex-IMG").removeClass("wdex-IMG").addClass("wde-img");
		$(".wdex-HD").removeClass("wdex-HD").addClass("wde-hd");
		$(".wde-inText").css("display","none");
		}
	}
);


$(".web-storage").mouseenter(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wds-img").removeClass("wds-img").addClass("wdsx-IMG");
		$(".wds-hd").removeClass("wds-hd").addClass("wdsx-HD");
		$(".wds-inText").css("display","");
		}
	}
).mouseleave(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wdsx-IMG").removeClass("wdsx-IMG").addClass("wds-img");
		$(".wdsx-HD").removeClass("wdsx-HD").addClass("wds-hd");
		$(".wds-inText").css("display","none");
		}
	}
);

$(".web-security").mouseenter(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wdse-img").removeClass("wdse-img").addClass("wdsxe-IMG");
		$(".wdse-hd").removeClass("wdse-hd").addClass("wdsxe-HD");
		$(".wdse-inText").css("display","");
		}
	}
).mouseleave(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".wdsxe-IMG").removeClass("wdsxe-IMG").addClass("wdse-img");
		$(".wdsxe-HD").removeClass("wdsxe-HD").addClass("wdse-hd");
		$(".wdse-inText").css("display","none");
		}
	}
);

function handlerInout() {
		$(".biu-head").css({"padding":"135px 0"});
}

$(".business-understanding").hover(handlerInout);

$(".robust-coding").hover(
	function() {
		$(".roc-head").css({"padding":"135px 0"});
	},function() {
		$(".roc-head").css({"padding":"95px 0"});
	}
);

$(".creativity").hover(
	function() {
		$(".cr-head").css({"padding":"150px 0"});
	},function() {
		$(".cr-head").css({"padding":"95px 0"});
	}
);

$(".social-integration").hover(
	function() {
		$(".sci-head").css({"padding":"135px 0"});
	},function() {
		$(".sci-head").css({"padding":"95px 0"});
	}
);

$(".business-understanding").on("click", function abc () {
		$(".robust-coding,.creativity,.social-integration").css("display","none");
		$(".business-understanding").css({"background-color":"#000","color":"#fff","animation":"biu-content-animate 0.5s forwards"}).off("mouseenter mouseleave");
		$(".biu-head").css({"padding":"30px 0 10px 0","border-bottom":"2px solid #fff","font-size":"23px"});
		$(".more-biu-content").show().css({"background-color":"#000","color":"#fff"});
		$(".biu-back").show();
});

$(".biu-back").on("click", ac);
	function ac(event) {
		$(".business-understanding").css({"background-color":"#fff","color":"#000"});
		
	}


$(".ro-more").hide();
$(".more-biu-content").hide();
$(".roc-img-fwd").hide();
$(".biu-back").hide();

});



