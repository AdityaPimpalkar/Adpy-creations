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

function handlerIn() {
	$(".business-understanding").css({
		"animation":"biu-animate 0.5s forwards",
		"background-color":" #000",
		"color": "#fff",
		"opacity":"0.7",
		"cursor": "pointer"
	});
		$(".biu-head").css({
			"padding":"35px 0",
	});
}
function handlerOut() {
	$(".business-understanding").css({
		"animation":"biu-norm 0.5s forwards",
		"background-color":"#000",
		"opacity":"0.7",
		"color": "#fff"
	});
		$(".biu-head").css({
			"padding":"25px 0"
		});
}

$(".business-understanding").hover(handlerIn,handlerOut);

function mouseIn() {
		$(".creativity").css({
		"animation":"cr-animate 0.5s forwards",
		"cursor": "pointer"
	});
		$(".cr-head").css({"padding":"50px 0"});
}

function mouseOut() {
		$(".creativity").css({
		"animation":"cr-norm 0.5s forwards",
	});
		$(".cr-head").css({"padding":"45px 0"});
}

$(".creativity").hover(mouseIn,mouseOut);

function hoverIn() {
	$(".robust-coding").css({
		"animation":"roc-animate 0.5s forwards",
		"background-color":"#000",
		"opacity":"0.7",
		"cursor": "pointer"
	});
		$(".roc-head").css({"padding":"40px 0"});
}
function hoverOut() {
		$(".robust-coding").css({
		"animation":"roc-norm 0.5s forwards",
		"background-color":"#000",
		"opacity":"0.7"
	});
		$(".roc-head").css({"padding":"25px 0"});
}

$(".robust-coding").hover(hoverIn,hoverOut);

function entityIn() {
	$(".social-integration").css({
		"animation":"sci-animate 0.3s forwards",
		"background-color":" #000",
		"color": "#fff",
		"opacity":"0.7",
		"cursor": "pointer"
	});
		$(".sci-head").css({"padding":"35px 0"});
}
function entityOut() {
		$(".social-integration").css({
		"animation":"sci-norm 0.3s forwards",
		"background-color":"#000",
		"opacity":"0.7",
		"color": "#fff"
	});
		$(".sci-head").css({"padding":"25px 0"});
}

$(".social-integration").hover(entityIn,entityOut);

function BuiContentEx(e) {
	e.stopPropagation();
	$(this).css({"background-color":"#000","color":"#fff","animation":"bui-content-animate .5s forwards"}).off("mouseenter mouseleave");
	$(this).off("click");
	$(".robust-coding,.creativity,.social-integration").css("display","none");
	$(".biu-head").css({"padding":"20px 0","border-bottom":"2px solid #fff","font-size":"23px"});
	$(".more-biu-content").show().css({"background-color":"#000","color":"#fff"});
	$(".biu-back").show();
}

$(".business-understanding").on("click", BuiContentEx);

$(".biu-back").on("click",function BuiContentNrm(e) {
	e.stopPropagation();
	$(this).hide();
	$(".robust-coding,.creativity,.social-integration").css("display","block");
	$(".more-biu-content").hide();
	$(".biu-head").css({"padding":"25px 0","border-bottom":"none","font-size":"26px"});
	$(".business-understanding").css({"background-color":"#000","color":"#fff","animation":"bui-content-norm .5s forwards"})
	.on("mouseenter",handlerIn).on("mouseleave",handlerOut).on("click", BuiContentEx);
});


function CrContentEx(e) {
	e.stopPropagation();
	$(this).css({"background-color":"#000","color":"#fff","animation":"cr-content-animate .5s forwards"}).off("mouseenter mouseleave");
	$(this).off("click");
	$(".robust-coding,.business-understanding,.social-integration").css("display","none");
	$(".cr-head").css({"padding":"30px 0","border-bottom":"2px solid #fff","font-size":"23px"});
	$(".more-cr-content").show().css({"background-color":"#000","color":"#fff"});
	$(".cr-back").show();
}

$(".creativity").on("click", CrContentEx);

$(".cr-back").on("click",function CrContentNrm(e) {
	e.stopPropagation();
	$(this).hide();
	$(".robust-coding,.business-understanding,.social-integration").css("display","block");
	$(".more-cr-content").hide();
	$(".cr-head").css({"padding":"45px 0","border-bottom":"none","font-size":"26px"});
	$(".creativity").css({"background-color":"#000","color":"#fff","animation":"cr-content-norm .5s forwards"})
	.on("mouseenter",mouseIn).on("mouseleave",mouseOut).on("click", CrContentEx);
});

function RocContentEx(e) {
	e.stopPropagation();
	$(this).css({"background-color":"#000","color":"#fff","animation":"roc-content-animate .5s forwards"}).off("mouseenter mouseleave");
	$(this).off("click");
	$(".creativity,.business-understanding,.social-integration").css("display","none");
	$(".roc-head").css({"padding":"10px 0","color":"#fff","border-bottom":"2px solid #fff","font-size":"23px"});
	$(".more-roc-content").show().css({"background-color":"#000","color":"#fff"});
	$(".roc-back").show();
}

$(".robust-coding").on("click", RocContentEx);

$(".roc-back").on("click",function RocContentNrm(e) {
	e.stopPropagation();
	$(this).hide();
	$(".creativity,.business-understanding,.social-integration").css("display","block");
	$(".more-roc-content").hide();
	$(".roc-head").css({"padding":"35px 0","border-bottom":"none","font-size":"26px"});
	$(".robust-coding").css({"background-color":"#000","color":"#fff","animation":"roc-content-norm .5s forwards"})
	.on("mouseenter",hoverIn).on("mouseleave",hoverOut).on("click", RocContentEx);
});

function SciContentEx(e) {
	e.stopPropagation();
	$(this).css({"background-color":"#000","color":"#fff","animation":"sci-content-animate .5s forwards"}).off("mouseenter mouseleave");
	$(this).off("click");
	$(".creativity,.business-understanding,.robust-coding").css("display","none");
	$(".sci-head").css({"padding":"20px 0","border-bottom":"2px solid #fff","font-size":"23px"});
	$(".more-sci-content").show().css({"background-color":"#000","color":"#fff"});
	$(".sci-back").show();
}

$(".social-integration").on("click", SciContentEx);

$(".sci-back").on("click",function SciContentNrm(e) {
	e.stopPropagation();
	$(this).hide();
	$(".creativity,.business-understanding,.robust-coding").css("display","block");
	$(".more-sci-content").hide();
	$(".sci-head").css({"padding":"25px 0","border-bottom":"none","font-size":"26px"});
	$(".social-integration").css({"background-color":"#000","color":"#fff","animation":"sci-content-norm .5s forwards"})
	.on("mouseenter",entityIn).on("mouseleave",entityOut).on("click", SciContentEx);
});

$(".more-cr-content").hide();
$(".more-biu-content").hide();
$(".more-roc-content").hide();
$(".more-sci-content").hide();
$(".biu-back").hide();
$(".cr-back").hide();
$(".roc-back").hide();
$(".sci-back").hide();

});



