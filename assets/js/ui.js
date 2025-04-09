$(function (){

    // 그레이스케일모드
    $(".btn_mode").on("click", function(){
        $("body").toggleClass("greyscale");
        $(this).toggleClass("grey");
        if($(this).hasClass("grey")){
            $(this).children("span").text("GREYSCALE");
            tl.scrollTrigger.enable();
            //tl2.scrollTrigger.enable();
        }else{
            $(this).children("span").text("RGB COLOR");
            tl.scrollTrigger.disable();
            tl2.scrollTrigger.disable();
        }
    });

    // 홈페이지 제작안내 button
    $(".btn_hp_making").on("click", function(e){
        $('html, body').animate({
            'scrollTop': $('#section_4').offset().top - $("#header").outerHeight()
        }, 300);
        e.preventDefault();
    });

    // 포트폴리오
    $(".btn_portfolio").on("click", function(){
        alert("준비중입니다.");
    });

    // 스크롤 시 해더 배경색 추가
    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $("#header").addClass("bg");
        }else{
            $("#header").removeClass("bg");
        }

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
            scrub: true,
            pin: true,
            toggleActions: "restart play none reset",
            //pinSpacing: false
            //markers: true
        }
    });
    tl.to(".txts_scroll", {
        y: "-60%"
    });        

    // core service 영역
/**/
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section_2",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            start: "bottom bottom",
            end: "+=100%"
        }
    });

    //HORIZONTAL SCROLLING
    // let slides = gsap.utils.toArray(".slide");
    // gsap.to(slides, {
    //     xPercent: -100 * (slides.length - 2),
    //     ease: "none",
    //     scrollTrigger: {
    //         id: "turnItOff",
    //         trigger: "#section_2",
    //         pin: true,
    //         pinSpacing: true,
    //         scrub: 1,
    //         start: "bottom bottom",
    //         end: "+=100%"
    //     }
    // });

    if($(window).width() <= 1023){
        //tl2.kill();
        tl2.scrollTrigger.disable();
    }

    // 메뉴 페이지 스크롤
    var windowsize = $(window).width();
    var sectionArray = [1, 2, 3, 4, 5];
    var headerHeight = $("#header").outerHeight();
    $.each(sectionArray, function(index, value){
        $('.navbar .click_scroll').eq(index).click(function(e){
            var offsetClick = $('#' + 'section_' + value).offset().top - headerHeight + 2;

            /* 
            if(windowsize <= 1023){
                //if ( docScroll1 >= offsetSection2 ){
                    $(".hamburger").removeClass("is_active");
                    $(".nav_side").removeClass("on");
                //}
                $('html, body').animate({
                    'scrollTop': offsetClick2
                }, 300);
            }else{
                $('html, body').animate({
                    'scrollTop': offsetClick
                }, 300);
            }*/

            $('html, body').animate({
                'scrollTop': offsetClick
            }, 300);
            
            e.preventDefault();
        });

        $(document).scroll(function(){
            var offsetSection = $('#' + 'section_' + value).offset().top - headerHeight;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;
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

    // core service 슬라이드 영역
    var serviceSwiper = new Swiper(".service_inner .r_cont .swiper-container", {
        loop:true,
        slidesPerGroup:1,
        loopAdditionalSlides:1,
        speed:1400,
        slidesPerView : "auto",
        spaceBetween : 28,
        mousewheelControl: true,
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


