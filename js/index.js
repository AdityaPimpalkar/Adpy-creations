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


$(".robust-coding").mouseenter(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".roc-img").css({"display":"block"});
		$(".roc-head").removeClass("roc-head").addClass("roc-hover");
		}
	}
).mouseleave(
	function() {
		if (window.matchMedia('(min-width : 480px)').matches) {
		$(".robust-coding").css({"border-right":"none"});
		$(".roc-img").css({"display":"none"});
		$(".roc-hover").removeClass("roc-hover").addClass("roc-head");
		}
	}
);

$(".roc-img").click(
	function() {
		$(".robust-coding").unbind("mouseenter mouseleave").css({"background-color":"#000","color":"#fff"});
		$(".roc-head").removeClass("roc-head").addClass("roc-hover");
		$(".ro-more").toggle("slide");
	}
);

});



