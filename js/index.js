function openNav() {
    if (window.matchMedia('(min-width : 325px)').matches) {
        $(".nav").css("width", "280px");
    }
    if(window.matchMedia('(min-width: 1440px)').matches){
        $(".nav").css("width", "300px");
    }
    if(window.matchMedia('(min-width: 1680px)').matches){
        $(".nav").css("width", "350px");
    }
    if(window.matchMedia('(min-width: 1880px)').matches){
        $(".nav").css("width", "380px");
    }
}

function closeNav() {
    if (window.matchMedia('(min-width : 480px)').matches) {
        $(".nav").css("width", "0px");
    } else {
        $(".nav").css("width", "0px");
    }
}
    var count = 0;
    function nextImg() {
        count++;
        if (window.matchMedia('(min-width : 1880px) and (max-width: 2650px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-1550px)"});
                $(".dev-img-two").css({"transform":"translateX(-1550px)"});
                $(".dev-img-three").css({"transform":"translateX(-1550px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-3105px)"});
                $(".dev-img-two").css({"transform":"translateX(-3105px)"});
                $(".dev-img-three").css({"transform":"translateX(-3105px)"});
            }
            else if (count >= 1) {
                count = 2;
            }
        }
        if (window.matchMedia('(min-width : 1680px) and (max-width: 1880px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-1410px)"});
                $(".dev-img-two").css({"transform":"translateX(-1410px)"});
                $(".dev-img-three").css({"transform":"translateX(-1410px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-2820px)"});
                $(".dev-img-two").css({"transform":"translateX(-2820px)"});
                $(".dev-img-three").css({"transform":"translateX(-2820px)"});
            }
            else if (count >= 1) {
                count = 2;
            }
        }
        if (window.matchMedia('(min-width : 1024px) and (max-width: 1680px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-1025px)"});
                $(".dev-img-two").css({"transform":"translateX(-1025px)"});
                $(".dev-img-three").css({"transform":"translateX(-1025px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-2050px)"});
                $(".dev-img-two").css({"transform":"translateX(-2050px)"});
                $(".dev-img-three").css({"transform":"translateX(-2050px)"});
            }
            else if (count >= 1) {
                count = 2;
            }
        }
        if (window.matchMedia('(min-width : 768px) and (max-width: 1024px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-752px)"});
                $(".dev-img-two").css({"transform":"translateX(-752px)"});
                $(".dev-img-three").css({"transform":"translateX(-752px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-1506px)"});
                $(".dev-img-two").css({"transform":"translateX(-1506px)"});
                $(".dev-img-three").css({"transform":"translateX(-1506px)"});
            }
            else if (count >= 1) {
                count = 2;
            }
        }
        if (window.matchMedia('(min-width : 480px) and (max-width : 768px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-640px)"});
                $(".dev-img-two").css({"transform":"translateX(-640px)"});
                $(".dev-img-three").css({"transform":"translateX(-640px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-1280px)"});
                $(".dev-img-two").css({"transform":"translateX(-1280px)"});
                $(".dev-img-three").css({"transform":"translateX(-1280px)"});
            }
            else if (count >= 1) {
                count = 2;
            }
        }    
        if (window.matchMedia('(min-device-width : 320px) and (max-device-width : 480px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-672px)"});
                $(".dev-img-two").css({"transform":"translateX(-672px)"});
                $(".dev-img-three").css({"transform":"translateX(-672px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-1343px)"});
                $(".dev-img-two").css({"transform":"translateX(-1343px)"});
                $(".dev-img-three").css({"transform":"translateX(-1343px)"});
            }
            else if (count >= 1) {
                count = 2;
            }
        }
    }
    function prevImg() {
        count--;
        if (window.matchMedia('(min-width : 1024px) and (max-width: 1680px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-1025px)"});
                $(".dev-img-two").css({"transform":"translateX(-1025px)"});
                $(".dev-img-three").css({"transform":"translateX(-1025px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-2050px)"});
                $(".dev-img-two").css({"transform":"translateX(-2050px)"});
                $(".dev-img-three").css({"transform":"translateX(-2050px)"});
            }
            else if (count <= 0) {
                count = 0;
            }
        }
        if (window.matchMedia('(min-width : 768px) and (max-width: 1024px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-752px)"});
                $(".dev-img-two").css({"transform":"translateX(-752px)"});
                $(".dev-img-three").css({"transform":"translateX(-752px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-1506px)"});
                $(".dev-img-two").css({"transform":"translateX(-1506px)"});
                $(".dev-img-three").css({"transform":"translateX(-1506px)"});
            }
            else if (count <= 0) {
                count = 0;
            }
        }
        if (window.matchMedia('(min-width : 480px) and (max-width : 768px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-640px)"});
                $(".dev-img-two").css({"transform":"translateX(-640px)"});
                $(".dev-img-three").css({"transform":"translateX(-640px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-1280px)"});
                $(".dev-img-two").css({"transform":"translateX(-1280px)"});
                $(".dev-img-three").css({"transform":"translateX(-1280px)"});
            }
            else if (count <= 0) {
                count = 0;
            }
        }
        if (window.matchMedia('(min-device-width : 320px) and (max-device-width : 480px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-672px)"});
                $(".dev-img-two").css({"transform":"translateX(-672px)"});
                $(".dev-img-three").css({"transform":"translateX(-672px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-1343px)"});
                $(".dev-img-two").css({"transform":"translateX(-1343px)"});
                $(".dev-img-three").css({"transform":"translateX(-1343px)"});
            }
            else if (count <= 0) {
                count = 0;
            }
        }
        if (window.matchMedia('(min-width : 1680px) and (max-width: 1880px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-1410px)"});
                $(".dev-img-two").css({"transform":"translateX(-1410px)"});
                $(".dev-img-three").css({"transform":"translateX(-1410px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-2820px)"});
                $(".dev-img-two").css({"transform":"translateX(-2820px)"});
                $(".dev-img-three").css({"transform":"translateX(-2820px)"});
            }
            else if (count <= 0) {
                count = 0;
            }
        }
        if (window.matchMedia('(min-width : 1880px) and (max-width: 2650px)').matches) {
            if(count ===0) {
                $(".dev-img-one").css({"transform":"translateX(0px)"});
                $(".dev-img-two").css({"transform":"translateX(0px)"});
                $(".dev-img-three").css({"transform":"translateX(0px)"});
            }
            if(count === 1) {
                $(".dev-img-one").css({"transform":"translateX(-1550px)"});
                $(".dev-img-two").css({"transform":"translateX(-1550px)"});
                $(".dev-img-three").css({"transform":"translateX(-1550px)"});
            }else if(count === 2) {
                $(".dev-img-one").css({"transform":"translateX(-3105px)"});
                $(".dev-img-two").css({"transform":"translateX(-3105px)"});
                $(".dev-img-three").css({"transform":"translateX(-3105px)"});
            }
            else if (count <= 0) {
                count = 0;
            }
        }
    }

$(document).ready(function() {
    $(window).resize(mediaSize);
    mediaSize();
    $(".welcome-message").mouseenter(
        function() {
            if (window.matchMedia('(min-width : 480px)').matches) {
                $(".wd,.wde,.wds,.wdse").css("display","block");
                $(".wd").css({"animation" : "leftslidewd 0.3s forwards"});
                $(".wde").css({"animation" : "leftslidewde 0.3s forwards"});
                $(".wds").css({"animation" : "leftslidewds 0.3s forwards"});
                $(".wdse").css({"animation" : "leftslidewdse 0.3s forwards"});
                $(".wd-flow-pointer,.wde-flow-pointer,.wds-flow-pointer,.wdse-flow-pointer")
                .css({"animation":"animateFlowWidthIn 0.3s forwards"});
                $(".wdm-pointer,.wdem-pointer,.wdsm-pointer,.wdsem-pointer").css({
                    "animation":"animatePointerIn 0.3s forwards"
                });
            }
        }
    ).mouseleave(
        function() {
            if (window.matchMedia('(min-width : 480px)').matches) {
                $(".wd,.wde,.wds,.wdse").css("display","block");
                $(".wd").css({"animation" : "rightslidewd 0.3s forwards"});
                $(".wde").css({"animation" : "rightslidewde 0.3s forwards"});
                $(".wds").css({"animation" : "rightslidewds 0.3s forwards"});
                $(".wdse").css({"animation" : "rightslidewdse 0.3s forwards"});
                $(".wd-flow-pointer,.wde-flow-pointer,.wds-flow-pointer,.wdse-flow-pointer")
                .css({"animation":"animateFlowWidthOut 0.3s forwards"});
                $(".wdm-pointer,.wdem-pointer,.wdsm-pointer,.wdsem-pointer").css({
                        "animation":"animatePointerOut 0.3s forwards"
                });
            }
        }
    );

    $(".web-development").mouseenter(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wd-img").removeClass("wd-img").addClass("wdx-IMG");
                $(".wd-hd").removeClass("wd-hd").addClass("wdh-HD");
                $(".wd-inText").css("display", "");
            }
        }
    ).mouseleave(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wdx-IMG").removeClass("wdx-IMG").addClass("wd-img");
                $(".wdh-HD").removeClass("wdh-HD").addClass("wd-hd");
                $(".wd-inText").css("display", "none");
            }
        }
    );

    $(".web-design").mouseenter(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wde-img").removeClass("wde-img").addClass("wdex-IMG");
                $(".wde-hd").removeClass("wde-hd").addClass("wdex-HD");
                $(".wde-inText").css("display", "");
            }
        }
    ).mouseleave(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wdex-IMG").removeClass("wdex-IMG").addClass("wde-img");
                $(".wdex-HD").removeClass("wdex-HD").addClass("wde-hd");
                $(".wde-inText").css("display", "none");
            }
        }
    );


    $(".web-storage").mouseenter(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wds-img").removeClass("wds-img").addClass("wdsx-IMG");
                $(".wds-hd").removeClass("wds-hd").addClass("wdsx-HD");
                $(".wds-inText").css("display", "");
            }
        }
    ).mouseleave(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wdsx-IMG").removeClass("wdsx-IMG").addClass("wds-img");
                $(".wdsx-HD").removeClass("wdsx-HD").addClass("wds-hd");
                $(".wds-inText").css("display", "none");
            }
        }
    );

    $(".web-security").mouseenter(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wdse-img").removeClass("wdse-img").addClass("wdsxe-IMG");
                $(".wdse-hd").removeClass("wdse-hd").addClass("wdsxe-HD");
                $(".wdse-inText").css("display", "");
            }
        }
    ).mouseleave(
        function() {
            if (window.matchMedia('(min-width : 768px) and (max-width : 2560px)').matches) {
                $(".wdsxe-IMG").removeClass("wdsxe-IMG").addClass("wdse-img");
                $(".wdsxe-HD").removeClass("wdsxe-HD").addClass("wdse-hd");
                $(".wdse-inText").css("display", "none");
            }
        }
    );

    if (window.matchMedia('(min-width : 480px)').matches) {
        function handlerIn() {
            $(".business-understanding").css({
                "animation": "biu-animate 0.5s forwards",
                "background-color": " #000",
                "color": "#fff",
                "opacity": "0.7",
                "cursor": "pointer"
            });
            $(".biu-head").css({
                "padding": "35px 0",
            });
        }
    }

    if (window.matchMedia('(min-width : 480px)').matches) {
        function handlerOut() {
            $(".business-understanding").css({
                "animation": "biu-norm 0.5s forwards",
                "background-color": "#000",
                "opacity": "0.7",
                "color": "#fff"
            });
            $(".biu-head").css({
                "padding": "25px 0"
            });
        }
    }

    if (window.matchMedia('(min-width : 1680px)').matches) {
        function handlerIn() {
            $(".business-understanding").css({
                "animation": "biu-animate 0.5s forwards",
                "background-color": " #000",
                "color": "#fff",
                "opacity": "0.7",
                "cursor": "pointer"
            });
            $(".biu-head").css({
                "padding": "50px 0",
            });
        }
    }  
    if (window.matchMedia('(min-width : 1680px)').matches) {
        function handlerOut() {
            $(".business-understanding").css({
                "animation": "biu-norm 0.5s forwards",
                "background-color": "#000",
                "opacity": "0.7",
                "color": "#fff"
            });
            $(".biu-head").css({
                "padding": "40px 0"
            });
        }
    }

    $(".business-understanding").hover(handlerIn, handlerOut);

    if (window.matchMedia('(min-width : 480px)').matches) {
        function mouseIn() {
            $(".creativity").css({
                "animation": "cr-animate 0.5s forwards",
                "cursor": "pointer"
            });
            $(".cr-head").css({
                "padding": "50px 0"
            });
        }

        function mouseOut() {
            $(".creativity").css({
                "animation": "cr-norm 0.5s forwards",
            });
            $(".cr-head").css({
                "padding": "45px 0"
            });
        }
    }

    if (window.matchMedia('(min-width : 1680px)').matches) {
        function mouseIn() {
            $(".creativity").css({
                "animation": "cr-animate 0.5s forwards",
                "cursor": "pointer"
            });
            $(".cr-head").css({
                "padding": "73px 0"
            });
        }

        function mouseOut() {
            $(".creativity").css({
                "animation": "cr-norm 0.5s forwards",
            });
            $(".cr-head").css({
                "padding": "63px 0"
            });
        }
    }

    $(".creativity").hover(mouseIn, mouseOut);

    if (window.matchMedia('(min-width : 480px)').matches) {
        function hoverIn() {
            $(".robust-coding").css({
                "animation": "roc-animate 0.5s forwards",
                "background-color": "#000",
                "opacity": "0.7",
                "cursor": "pointer"
            });
            $(".roc-head").css({
                "padding": "40px 0"
            });
        }

        function hoverOut() {
            $(".robust-coding").css({
                "animation": "roc-norm 0.5s forwards",
                "background-color": "#000",
                "opacity": "0.7"
            });
            $(".roc-head").css({
                "padding": "25px 0"
            });
        }
    }
    if (window.matchMedia('(min-width : 1680px)').matches) {
        function hoverIn() {
            $(".robust-coding").css({
                "animation": "roc-animate 0.5s forwards",
                "background-color": "#000",
                "opacity": "0.7",
                "cursor": "pointer"
            });
            $(".roc-head").css({
                "padding": "45px 0"
            });
        }

        function hoverOut() {
            $(".robust-coding").css({
                "animation": "roc-norm 0.5s forwards",
                "background-color": "#000",
                "opacity": "0.7"
            });
            $(".roc-head").css({
                "padding": "35px 0"
            });
        }
    }

    $(".robust-coding").hover(hoverIn, hoverOut);

    if (window.matchMedia('(min-width : 480px)').matches) {
        function entityIn() {
            $(".social-integration").css({
                "animation": "sci-animate 0.3s forwards",
                "background-color": " #000",
                "color": "#fff",
                "opacity": "0.7",
                "cursor": "pointer"
            });
            $(".sci-head").css({
                "padding": "35px 0"
            });
        }

        function entityOut() {
            $(".social-integration").css({
                "animation": "sci-norm 0.3s forwards",
                "background-color": "#000",
                "opacity": "0.7",
                "color": "#fff"
            });
            $(".sci-head").css({
                "padding": "25px 0"
            });
        }
    }
    if (window.matchMedia('(min-width : 1680px)').matches) {
        function entityIn() {
            $(".social-integration").css({
                "animation": "sci-animate 0.3s forwards",
                "background-color": " #000",
                "color": "#fff",
                "opacity": "0.7",
                "cursor": "pointer"
            });
            $(".sci-head").css({
                "padding": "50px 0"
            });
        }

        function entityOut() {
            $(".social-integration").css({
                "animation": "sci-norm 0.3s forwards",
                "background-color": "#000",
                "opacity": "0.7",
                "color": "#fff"
            });
            $(".sci-head").css({
                "padding": "40px 0"
            });
        }
    }

    $(".social-integration").hover(entityIn, entityOut);

    function BuiContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "bui-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".robust-coding,.creativity,.social-integration").css("display", "none");
        $(".biu-head").css({
            "padding": "20px 0",
            "border-bottom": "2px solid #fff",
            "font-size": "23px"
        });
        $(".more-biu-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".biu-back").show();
    }

    function BuiMediaContentEx(e) {
      e.stopPropagation();
      $(this).off("click").off("mouseenter mouseleave");
      $(this).off("mouseenter mouseleave");
      $(this).css({
        "animation":"bui-content-animate 0.3s",
        "height":"335px",
        "width":"610px",
        "left":"0",
        "top":"0"
      });
      $(".robust-coding,.creativity,.social-integration").css("display", "none");
      $(".biu-head").css({"float":"none","padding":"20px 0","border-bottom":"2px solid #fff"});
      $(".biu-fwd").hide();
      $(".more-biu-content").show().css("width","565px");
      $(".biu-back").show().css("float","none");
    }

    function BuiContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".robust-coding,.creativity,.social-integration").css("display", "block");
        $(".more-biu-content").hide();
        $(".biu-head").css({
            "padding": "25px 0",
            "border-bottom": "none",
            "font-size": "26px"
        });
        $(".business-understanding").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "bui-content-norm .5s forwards"
            })
            .on("mouseenter", handlerIn).on("mouseleave", handlerOut).on("click", BuiContentEx);
    }

    function BuiMediaContentNorm(e) {
      e.stopPropagation();
      $(".business-understanding").on("click", BuiMediaContentEx);
      $(".business-understanding").off("mouseenter mouseleave");
      $(".business-understanding").css({
        "animation":"none",
        "height":"120px",
        "width":"270px",
        "left": "0",
        "top": "200px"
      });
      $(".robust-coding,.creativity,.social-integration").css("display", "block");
      $(".biu-head").css({
        "float":"left",
        "padding-left":"30px",
        "border-bottom":"none"
      });
      $(".biu-fwd").show();
      $(".more-biu-content").hide().css("width","700px");
      $(".biu-back").hide().css("float","none");
    }

    function CrContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "cr-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".robust-coding,.business-understanding,.social-integration").css("display", "none");
        $(".cr-head").css({
            "padding": "30px 0",
            "border-bottom": "2px solid #fff",
            "font-size": "23px"
        });
        $(".more-cr-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".cr-back").show();
    }

    function CrMediaContentEx(e) {
      e.stopPropagation();
      $(this).off("click").off("mouseenter mouseleave");
      $(this).off("mouseenter mouseleave");
      $(this).css({
        "animation":"cr-content-animate 0.3s",
        "height":"335px",
        "width":"610px",
        "left":"0",
        "top":"0"
      });
      $(".robust-coding,.business-understanding,.social-integration").css("display", "none");
      $(".cr-head").css({"float":"none","padding":"20px 0","border-bottom":"2px solid #fff"});
      $(".cr-fwd").hide();
      $(".more-cr-content").show().css("width","565px");
      $(".cr-back").show().css("float","none");
    }

    function CrContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".robust-coding,.business-understanding,.social-integration").css("display", "block");
        $(".more-cr-content").hide();
        $(".cr-head").css({
            "padding": "45px 0",
            "border-bottom": "none",
            "font-size": "26px"
        });
        $(".creativity").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "cr-content-norm .5s forwards"
            })
            .on("mouseenter", mouseIn).on("mouseleave", mouseOut).on("click", CrContentEx);
    }

    function CrMediaContentNorm(e) {
      e.stopPropagation();
      $(".creativity").on("click", CrMediaContentEx);
      $(".creativity").off("mouseenter mouseleave").css({
        "animation":"none",
        "height":"120px",
        "width":"270px",
        "left": "345px",
        "top": "200px"
      });
      $(".robust-coding,.business-understanding,.social-integration").css("display", "block");
      $(".cr-head").css({
        "float":"left",
        "padding":"40px 0 40px 55px",
        "border-bottom":"none"
      });
      $(".cr-fwd").show();
      $(".more-cr-content").hide().css("width","700px");
      $(".cr-back").hide().css("float","none");
    }

    function RocContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "roc-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".creativity,.business-understanding,.social-integration").css("display", "none");
        $(".roc-head").css({
            "padding": "10px 0",
            "color": "#fff",
            "border-bottom": "2px solid #fff",
            "font-size": "23px"
        });
        $(".more-roc-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".roc-back").show();
    }

    function RocMediaContentEx(e) {
      e.stopPropagation();
      $(this).off("click").off("mouseenter mouseleave");
      $(this).off("mouseenter mouseleave");
      $(this).css({
        "animation":"roc-content-animate 0.3s",
        "float":"none",
        "height":"355px",
        "width":"610px"
      });
      $(".creativity,.business-understanding,.social-integration").css("display", "none");
      $(".roc-head").css({"float":"none","padding":"10px 0","border-bottom": "2px solid #fff"});
      $(".roc-fwd").hide();
      $(".more-roc-content").show().css("width","545px");
      $(".roc-back").show().css("float","none");
    }

    function RocContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".creativity,.business-understanding,.social-integration").css("display", "block");
        $(".more-roc-content").hide();
        $(".roc-head").css({
            "padding": "25px 0",
            "border-bottom": "none",
            "font-size": "26px"
        });
        $(".robust-coding").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "roc-content-norm .5s forwards"
            })
            .on("mouseenter", hoverIn).on("mouseleave", hoverOut).on("click", RocContentEx);
    }

    function RocMediaContentNorm(e) {
      e.stopPropagation();
      $(".robust-coding").on("click", RocMediaContentEx);
      $(".robust-coding").off("mouseenter mouseleave").css({
        "animation":"none",
        "height":"120px",
        "width":"270px",
        "left":"0px"
      });
      $(".roc-head").css({
        "float":"left",
        "padding":"25px 0 25px 70px",
        "border-bottom":"none"
      });
      $(".creativity,.business-understanding,.social-integration").css("display", "block");
      $(".roc-fwd").show();
      $(".more-roc-content").hide().css("width","700px");
      $(".roc-back").hide().css("float","none");
    }

    function SciContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "sci-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".creativity,.business-understanding,.robust-coding").css("display", "none");
        $(".sci-head").css({
            "padding": "20px 0",
            "border-bottom": "2px solid #fff",
            "font-size": "23px"
        });
        $(".more-sci-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".sci-back").show();
    }

    function SciMediaContentEx(e) {
      e.stopPropagation();
      $(this).off("click").off("mouseenter mouseleave");
      $(this).off("mouseenter mouseleave");
      $(this).css({
        "animation":"sci-content-animate 0.3s",
        "left":"0",
        "height":"355px",
        "width":"610px"
      });
      $(".creativity,.business-understanding,.robust-coding").css("display", "none");
      $(".sci-head").css({"float":"none","padding":"10px 0","border-bottom":"2px solid #fff"});
      $(".sci-fwd").hide();
      $(".more-sci-content").show().css("width","565px");
      $(".sci-back").show().css("float","none");
    }

    function SciContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".creativity,.business-understanding,.robust-coding").css("display", "block");
        $(".more-sci-content").hide();
        $(".sci-head").css({
            "padding": "25px 0",
            "border-bottom": "none",
            "font-size": "26px"
        });
        $(".social-integration").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "sci-content-norm .5s forwards"
            })
            .on("mouseenter", entityIn).on("mouseleave", entityOut).on("click", SciContentEx);
    }

    function SciMediaContentNorm(e) {
      e.stopPropagation();
      $(".social-integration").on("click", SciMediaContentEx);
      $(".social-integration").off("mouseenter mouseleave");
      $(".social-integration").css({
        "animation":"none",
        "height":"120px",
        "width":"270px",
        "left":"345px"
      });
      $(".sci-head").css({
        "float":"left",
        "padding":"25px 0 25px 45px",
        "border-bottom":"none"
      });
      $(".creativity,.business-understanding,.robust-coding").css("display", "block");
      $(".sci-fwd").show();
      $(".more-sci-content").hide().css("width","700px");
      $(".sci-back").hide().css("float","none");
    } 

    function RocLargeMediaContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "roc-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".creativity,.business-understanding,.social-integration").css("display", "none");
        $(".roc-head").css({
            "padding": "10px 0",
            "color": "#fff",
            "border-bottom": "5px solid #fff",
            "font-size": "40px"
        });
        $(".more-roc-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".roc-back").show();
    }

    function RocLargeMediaContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".creativity,.business-understanding,.social-integration").css("display", "block");
        $(".more-roc-content").hide();
        $(".roc-head").css({
            "padding": "35px 0",
            "border-bottom": "none",
            "font-size": "41px"
        });
        $(".robust-coding").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "roc-content-norm .5s forwards"
            })
            .on("mouseenter", hoverIn).on("mouseleave", hoverOut).on("click", RocLargeMediaContentEx);
    }
    function BuiLargeMediaContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "bui-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".robust-coding,.creativity,.social-integration").css("display", "none");
        $(".biu-head").css({
            "padding": "20px 0",
            "border-bottom": "2px solid #fff",
            "font-size": "41px"
        });
        $(".more-biu-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".biu-back").show();
    }

    function BuiLargeMediaContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".robust-coding,.creativity,.social-integration").css("display", "block");
        $(".more-biu-content").hide();
        $(".biu-head").css({
            "padding": "40px 0",
            "border-bottom": "none",
            "font-size": "37px"
        });
        $(".business-understanding").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "bui-content-norm .5s forwards"
            })
            .on("mouseenter", handlerIn).on("mouseleave", handlerOut).on("click",BuiLargeMediaContentEx);
    }

    function SciLargeMediaContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "sci-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".creativity,.business-understanding,.robust-coding").css("display", "none");
        $(".sci-head").css({
            "padding": "20px 0",
            "border-bottom": "5px solid #fff",
            "font-size": "38px"
        });
        $(".more-sci-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".sci-back").show();
    }

    function SciLargeMediaContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".creativity,.business-understanding,.robust-coding").css("display", "block");
        $(".more-sci-content").hide();
        $(".sci-head").css({
            "padding": "40px 0",
            "border-bottom": "none",
            "font-size": "37px"
        });
        $(".social-integration").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "sci-content-norm .5s forwards"
            })
            .on("mouseenter", entityIn).on("mouseleave", entityOut).on("click", SciLargeMediaContentEx);
    }

    function CrLargeMediaContentEx(e) {
        e.stopPropagation();
        $(this).css({
            "background-color": "#000",
            "color": "#fff",
            "animation": "cr-content-animate .5s forwards"
        }).off("mouseenter mouseleave");
        $(this).off("click");
        $(".robust-coding,.business-understanding,.social-integration").css("display", "none");
        $(".cr-head").css({
            "padding": "25px 0",
            "border-bottom": "5px solid #fff",
            "font-size": "40px"
        });
        $(".more-cr-content").show().css({
            "background-color": "#000",
            "color": "#fff"
        });
        $(".cr-back").show();
    }

    function CrLargeMediaContentNrm(e) {
        e.stopPropagation();
        $(this).hide();
        $(".robust-coding,.business-understanding,.social-integration").css("display", "block");
        $(".more-cr-content").hide();
        $(".cr-head").css({
            "padding": "63px 0",
            "border-bottom": "none",
            "font-size": "40px"
        });
        $(".creativity").css({
                "background-color": "#000",
                "color": "#fff",
                "animation": "cr-content-norm .5s forwards"
            })
            .on("mouseenter", mouseIn).on("mouseleave", mouseOut).on("click", CrLargeMediaContentEx);
    }

    if (window.matchMedia('(min-width : 768px) and (max-width: 1680px)').matches) {
        $(".business-understanding").on("click", BuiContentEx);
        $(".biu-back").on("click", BuiContentNrm);
        $(".creativity").on("click", CrContentEx);
        $(".cr-back").on("click", CrContentNrm);
        $(".robust-coding").on("click", RocContentEx);
        $(".roc-back").on("click", RocContentNrm);
        $(".social-integration").on("click", SciContentEx);
        $(".sci-back").on("click", SciContentNrm);
    }
     if (window.matchMedia('(min-width: 480px) and (max-width: 768px)').matches) {
        $(".business-understanding").on("click", BuiMediaContentEx);
        $(".biu-back").on("click", BuiMediaContentNorm);
        $(".creativity").on("click", CrMediaContentEx);
        $(".cr-back").on("click", CrMediaContentNorm);
        $(".robust-coding").on("click", RocMediaContentEx);
        $(".roc-back").on("click", RocMediaContentNorm);
        $(".social-integration").on("click", SciMediaContentEx);
        $(".sci-back").on("click", SciMediaContentNorm);
    }

    if (window.matchMedia('(min-width : 1680px) and (max-width : 2560px)').matches) {
        $(".business-understanding").on("click", BuiLargeMediaContentEx);
        $(".biu-back").on("click", BuiLargeMediaContentNrm);
        $(".creativity").on("click", CrLargeMediaContentEx);
        $(".cr-back").on("click", CrLargeMediaContentNrm);
        $(".robust-coding").on("click", RocLargeMediaContentEx);
        $(".roc-back").on("click", RocLargeMediaContentNrm);
        $(".social-integration").on("click", SciLargeMediaContentEx);
        $(".sci-back").on("click", SciLargeMediaContentNrm);
    }

    $(".more-cr-content").hide();
    $(".more-biu-content").hide();
    $(".more-roc-content").hide();
    $(".more-sci-content").hide();

    $(".biu-back").hide();
    $(".cr-back").hide();
    $(".roc-back").hide();
    $(".sci-back").hide();


});
