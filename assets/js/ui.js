$(function (){

    /* MO -> height 100vh */
    function setScreenSize() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();

    // 그레이스케일모드
    $(".btn_mode").on("click", function(){
        $(".stic_box").toggleClass("greyscale");
        $(".video_section").toggleClass("greyscale");
        $(".ourway_section_inner").toggleClass("greyscale");
        $(".service_section_inner").toggleClass("greyscale");
        $(".green_section").toggleClass("greyscale");
        $(".web_section").toggleClass("greyscale");
        $(".contact_section").toggleClass("greyscale");
        $("#footer").toggleClass("greyscale");
        $("#header").toggleClass("greyscale");
        
        $(this).toggleClass("grey");
        if($(this).hasClass("grey")){
            $(this).children("span").text("GREYSCALE");
        }else{
            $(this).children("span").text("RGB COLOR");
        }
    });

    // 홈페이지 제작안내 button
    $(".btn_hp_making").on("click", function(e){
        $('html, body').animate({
            'scrollTop': $('#section_4').offset().top,
        }, 900);
        e.preventDefault();
    });

    // 포트폴리오
    $(".btn_portfolio").on("click", function(){
        alert("준비중입니다.");
    });

    // 스크롤 시 해더 배경색 추가
    $(window).on("scroll", function(){
        serviceSwiper.update();
    });

    // 모바일 햄버거 메뉴
    $(".hamburger").click(function(){
        $(this).toggleClass("is_active");
        if( $(this).hasClass("is_active") ){
            $(".nav_side").addClass("on");
        }else{
            $(".nav_side").removeClass("on");
        }
    });


    // our way 영역
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section_1",
            start: "top top",
            end: "+=40%",
            scrub: 2,
            pin: true,
            //toggleActions: "restart play none reset",
            //pinSpacing: false
            //markers: true
        }
    });
    tl.to(".txts_scroll", {
        y: "-60%"
    });        

    // core service 영역
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section_2",
            pin: true,
            pinSpacing: true,
            scrub: 2,
            start: "bottom bottom",
            end: "+=50%"
        }
    });

    /* 
    if($(window).width() <= 1023){
        tl2.scrollTrigger.disable();
    }
    */

    // 메뉴 페이지 스크롤
    var windowsize = $(window).width();
    var sectionArray = [1, 2, 3, 4, 5];
    var headerHeight = $("#header").outerHeight();

    $.each(sectionArray, function(index, value){

        if(windowsize <= 1023){
            $('.nav_side .click_scroll').eq(index).click(function(e){
                //var offsetClick_mo = $('#' + 'section_' + value).offset().top - headerHeight + 10;
                var offsetClick_mo = $('#' + 'section_' + value).offset().top;
                $('html, body').animate({
                    'scrollTop': offsetClick_mo
                }, 600);
                e.preventDefault();
            });
        }

        $('.navbar .click_scroll').eq(index).click(function(e){
            // var offsetClick = $('#' + 'section_' + value).offset().top - headerHeight + 2;
            var offsetClick = $('#' + 'section_' + value).offset().top + 1;
            var our_section = $("#section_1").offset().top;
            var core_section =  $("#section_2").offset().top - ($(window).outerHeight() - $("#section_2").outerHeight() );

            // if(value == 1){
            //     $("body").css({"overflow":"hidden"});
            // }else{
            //     $("body").css({"overflow":"initial"});
            // }

            if(value == 2){
                $('html, body').animate({
                    'scrollTop': core_section
                }, 600);
                //$('.navbar .nav_item:nth-child(2) .nav_link').removeClass('active');
                $('.navbar .nav_item:first-child .nav_link').removeClass('active');
                $('.navbar .nav_item .nav_link').addClass('inactive');  
                $('.navbar .nav_item:nth-child(2) .nav_link').removeClass('inactive');  
                $('.navbar .nav_item:nth-child(2) .nav_link').addClass('active'); 
            }else{
                $('html, body').animate({
                    'scrollTop': offsetClick
                }, 600);
            }
            
            e.preventDefault();
        });
        
        $(document).scroll(function(){
            // var offsetSection = $('#' + 'section_' + value).offset().top - headerHeight;
            var offsetSection = $('#' + 'section_' + value).offset().top;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;

            var core_section =  $("#section_2").offset().top - ($(window).outerHeight() - $("#section_2").outerHeight() );

            // if(docScroll == sec1){
            //     console.log(1)
            //     $("#section_1").addClass("sticky");
            // }

            if(docScroll <= core_section && docScroll > $("#section_1").offset().top + $(".ourway_section").outerHeight() - 100){
                $('.navbar .nav_item:first-child .nav_link').removeClass('active');
                $('.navbar .nav_item .nav_link').addClass('inactive');  
                $('.navbar .nav_item:nth-child(2) .nav_link').removeClass('inactive');  
                $('.navbar .nav_item:nth-child(2) .nav_link').addClass('active'); 
            }
            // if(docScroll1 >= $("#section_2").offset().top + 50 && docScroll1 < $("#section_2").offset().top +  $("#section_2").outerHeight()){
            //     $("#header").css({ "background-color": "#17211E"});
            // }

            if(windowsize <= 1023){
                $(".hamburger").removeClass("is_active");
                $(".nav_side").removeClass("on");
            }
            if( docScroll < $(".video_section").outerHeight() - 180 ){
                $('.navbar .nav_item:first-child .nav_link').removeClass('active');
                $('.navbar .nav_item:first-child .nav_link').addClass('inactive');  
            }else if( docScroll1 >= offsetSection ){
                $('.navbar .nav_item .nav_link').removeClass('active');
                $('.navbar .nav_item .nav_link:link').addClass('inactive');  
                $('.navbar .nav_item .nav_link').eq(index).addClass('active');
                $('.navbar .nav_item .nav_link').eq(index).removeClass('inactive');
            }
        });

    });

    /* 
    if(windowsize <= 1023){
        $('.nav_side .navbar .click_scroll').click(function(e){
            var offsetClick_mo = $('#' + 'section_' + value).offset().top - headerHeight * 2;
            $('html, body').animate({
                'scrollTop': offsetClick_mo
            }, 300);
            e.preventDefault();
        });
    }
    */

    // core service 슬라이드 영역
    var serviceSwiper = new Swiper(".service_inner .r_cont .swiper-container", {
        loop:true,
        slidesPerGroup:1,
        loopAdditionalSlides:1,
        speed:1400,
        slidesPerView : "auto",
        spaceBetween : 28,
        allowTouchMove: false,
        mousewheelControl: false,
        autoplay : { 
            delay : 3000, 
            disableOnInteraction : true, 
        },
        pagination: {
            el: '.page_scroll',
            type: 'bullets'
        },
        navigation: {
            nextEl: '.service_inner .nav_arrow',
        },
        breakpoints: {
            468: {
                spaceBetween: 10,
            },
            1280: {
                spaceBetween : 28,
            },
        },
        on : {
            init : function () { },
            slideChange : function() {
                //console.log(this.realIndex);
                if(this.realIndex == 0){
                    $(".slide_menu").removeClass("on");
                    $(".menu01").addClass("on");
                }else if(this.realIndex == 1){
                    $(".slide_menu").removeClass("on");
                    $(".menu01").addClass("on");
                }else if(this.realIndex == 2){
                    $(".slide_menu").removeClass("on");
                    $(".menu02").addClass("on");
                }else if(this.realIndex == 3){
                    $(".slide_menu").removeClass("on");
                    $(".menu03").addClass("on");
                }else if(this.realIndex == 4){
                    $(".slide_menu").removeClass("on");
                    $(".menu04").addClass("on");
                }
            },
        },
    });

    $(".slide_menu.menu01").on("click", function(){
        serviceSwiper.slideTo(0);
    });
    $(".slide_menu.menu02").on("click", function(){
        serviceSwiper.slideTo(2);
    });
    $(".slide_menu.menu03").on("click", function(){
        serviceSwiper.slideTo(3);
    });
    $(".slide_menu.menu04").on("click", function(){
        serviceSwiper.slideTo(4);
    });

    var $dotList = $(".r_cont .swiper-pagination-bullet"); /* indicator width */
    var dotCnt = $dotList.length;
    $dotList.each(function(){
        $(this).attr("style", "width:"+(100/dotCnt).toFixed(3)+"%;");
    });


    // 페이지 모션
    AOS.init();

});


