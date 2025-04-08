$(function (){

    // greyscale mode
    $(".btn_mode").on("click", function(){
        $("body").toggleClass("greyscale");
        $(this).toggleClass("grey");
        if($(this).hasClass("grey")){
            $(this).children("span").text("GREYSCALE");
        }else{
            $(this).children("span").text("RGB COLOR");
        }
    });



    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $("#header").addClass("bg");
        }else{
            $("#header").removeClass("bg");
        }
    });

    $(".hamburger").click(function(){
        $(this).toggleClass("is_active");
        if( $(this).hasClass("is_active") ){
            $(".nav_side").addClass("on");
        }else{
            $(".nav_side").removeClass("on");
        }
    });






    var windowsize = $(window).width();
    var sectionArray = [1, 2, 3, 4, 5];
    var headerHeight =$("#header").outerHeight();
    $.each(sectionArray, function(index, value){
        $('.navbar .click_scroll').eq(index).click(function(e){
            var offsetClick = $('#' + 'section_' + value).offset().top - headerHeight;
            var offsetClick2 = $('#' + 'section_' + value).offset().top - (headerHeight*headerHeight);
            
            $('html, body').animate({
                'scrollTop': offsetClick
            }, 300);
        
            e.preventDefault();
        });


        $(document).scroll(function(){
            var offsetSection = $('#' + 'section_' + value).offset().top - headerHeight;
            var offsetSection2 = $('#' + 'section_' + value).offset().top - (headerHeight*headerHeight);
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;
            /* 
            if(windowsize <= 1023){
                if ( docScroll1 >= offsetSection2 ){
                    $(".hamburger").removeClass("is_active");
                    $(".nav_side").removeClass("on");
                }
            }
            */


            if ( docScroll1 >= offsetSection ){
                $('.navbar .nav_item .nav_link').removeClass('active');
                $('.navbar .nav_item .nav_link:link').addClass('inactive');  
                $('.navbar .nav_item .nav_link').eq(index).addClass('active');
                $('.navbar .nav_item .nav_link').eq(index).removeClass('inactive');
            }
            
            
        });

    });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section_1",
            start: "top top",
            end: "+=120%",
            scrub: true,
            pin: true,
            //markers: true
        }
    });

    tl.to(".txts_scroll", {
        y: "-100%"
    });




    // feather.replace();
    // AOS.init();
    var tab= ['ESG', 'ESG', 'ECO Web', 'Social', 'Solution'];
    var inc02Swiper = new Swiper(".service_inner .r_cont .swiper-container", {
        loop: true,
        speed:1400,
        slidesPerView : "auto",
        spaceBetween : 28,
        slideActiveClass: 'on',
        pagination: {
            el: '.service_inner .pager_txt',
            clickable: true,
            bulletActiveClass : 'on',
            renderBullet: function (index, className) {
                return '<p class="' + className + '"><span>' + (tab[index]) + '</span></p>';
            },
        },
        navigation: {
            prevEl: '.service_inner .nav_arrow .prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

/*
    var pinAmount = $(".sec1_txt").outerHeight;
    var horizontal_scroll_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sec1_txt",
        scrub: 0.5,
        pin: ".section_1",
        start: "top top",
        end: () => `${pinAmount}`
    }})

    var pinAmount = $("#section_1").outerHeight;
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section_1",
            start: "top top",
            end: "+=120%",
            //end: () => `${pinAmount}*10`,
            scrub: true,
            pin: true,
            //markers: true
        }
    });

    tl.to(".txts_scroll", {
        y: "-100%"
    });

*/


    /* AOS EFFECT */
    //AOS.init();


    
   
/* */
    /* HEAGER SHOW, HIDE EFFECT */
    /*
    let preScrollTop = 0;
    window.addEventListener('scroll',() => {
        let nextScrollTop = window.scrollY;
        if(preScrollTop < nextScrollTop) {//console.log('Down');
            $("#header").addClass("down");
        } else { //console.log('Up');
            $("#header").addClass("bg");
            $("#header").removeClass("down");
        }
        if(nextScrollTop === 0){
            $("#header").removeClass("bg");
            $("#header").removeClass("down");
        }
        preScrollTop = nextScrollTop;
    });
    */
    /* SCROLL CHECK */
    /*
    const $counters = $(".scroll_on");
    const exposurePercentage = 100;
    const loop = true;

    $(window).on('scroll', function() { 
        $counters.each(function() {
            const $el = $(this);
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 110) && rect.bottom >= (contentHeight * exposurePercentage / 110)) {
                $el.addClass('active');
            }
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
    */
    /* MO -> AOS SCROLL ELEMENT OPTION REMOVE */
    /*
    function mo_aos_delay(){
        if( $(window).width() < 1024){
            $(".aspiration_box_inner ul li").removeAttr("data-aos-delay"); // team page
            $(".history_tit_box_inner h2 p").removeAttr("data-aos-delay"); // company page
        }
    }
    mo_aos_delay();
    */
    /* MO -> height 100vh */
    /*
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    */
    /* RESIZE FUNCTION */
    /*
    $(window).resize(function() {
        setScreenSize();
    }); 
    */
});


