$(document).ready(function() {
    "use strict";

    PageScroll();
    setInterval(SysLoginEmp,60000);

    function SysLoginEmp(){
        var base_url = $("#base_url").val();
        $.ajax({
            url: base_url+"/admin/activitytracking/emp_logout",
            type: 'post',
            success: function(response){
            // Perform operation on the return value
            
            }
        });
    }

    

    // Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    function PageLoad() {
      $( window ).on( "load", function() {
            setInterval(function(){ 
                $('.preloader-wrap').fadeOut(300);
            }, 400);
            setInterval(function(){ 
                $('body').addClass('loaded');
            }, 600); 
      });
    }


    handlePreloader();
    PageLoad();

    // $('.carousel-card').owlCarousel({
    //     loop:false,
    //     margin:10,
    //     nav:false,
    //     autoplay:false,  
    //     dots:false,
    //     autoWidth:true
    // })



    //  $('.category-card').owlCarousel({
    //     loop:false,
    //     margin:7,
    //     nav:true,
    //     autoplay:false,  
    //     dots:false,
    //     navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    //     autoWidth:true
    // })

    //  $('.banner-slider').owlCarousel({
    //     loop:true,
    //     margin:15,
    //     nav:true,
    //     autoplay:false,  
    //     dots:true,
    //     navText: ["<i class='ti-angle-left icon-nav'></i>","<i class='ti-angle-right icon-nav'></i>"],
    //     responsive:{
    //         0:{
    //             items:1,
    //         },
    //         600:{
    //             items:1,
    //         },
    //         1200:{
    //             items:1,
    //         }
            
    //     }      
    // })

    //  $('.brand-slider').owlCarousel({
    //     loop:true,
    //     margin:15,
    //     nav:false,
    //     autoplay:false,  
    //     dots:false,
    //     items:5,
    //     responsive:{
    //         0:{
    //             items:2,
    //         },
    //         600:{
    //             items:3,
    //         },
    //         1200:{
    //             items:5,
    //         }
            
    //     }
    // })

    // $('.product-slider').owlCarousel({
    //     loop:true,
    //     margin:3,
    //     // nav:true,
    //     // navText: ["<i class='ti-angle-left icon-nav'></i>","<i class='ti-angle-right icon-nav'></i>"],
    //     autoplay:true,  
    //     dots:false,
    //     responsive:{
    //         0:{
    //             items:1,
    //         },
    //         600:{
    //             items:1,
    //         },
    //         1200:{
    //             items:2,
    //         }
            
    //     }      
    // })



    //  $('.feedback-slider').owlCarousel({
    //     loop:true,
    //     margin:15,
    //     nav:true,
    //     autoplay:false,  
    //     dots:false,
    //     items:5,
    //     navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:1,
    //         },
    //         600:{
    //             items:2,
    //         },
    //         1200:{
    //             items:3,
    //         }
            
    //     }
    // })
    //  $('.feedback-slider2').owlCarousel({
    //     loop:true,
    //     margin:15,
    //     nav:true,
    //     autoplay:false,  
    //     dots:false,
    //     items:5,
    //     navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:1,
    //         },
    //         600:{
    //             items:2,
    //         },
    //         1200:{
    //             items:2,
    //         }
            
    //     }
    // })

    // $('.story-slider').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     nav:true,
    //     autoplay:true,  
    //     dots:true,
    //     touchDrag:true,
    //     navText: ["<i class='ti-angle-left icon-nav'></i>","<i class='ti-angle-right icon-nav'></i>"],
    //     responsive:{
    //         0:{
    //             items:1,
    //         },
    //         600:{
    //             items:1,
    //         },
    //         1200:{
    //             items:1,
    //         }
            
    //     }      
    // })

    // $('.product-slider-6').owlCarousel({
    //     loop:true,
    //     margin:15,
    //     nav:false,
    //     autoplay:false,  
    //     dots:false,
    //     items:5,
    //     responsive:{
    //         0:{
    //             items:2,
    //         },
    //         600:{
    //             items:3,
    //         },
    //         1200:{
    //             items:6,
    //         }
            
    //     }
    // });

     

    
    
    // $('#lightbox').append('<div class="right-comment chat-left scroll-bar theme-dark-bg"><div class="card-body ps-2 pe-4 pb-0 d-flex"> <figure class="avatar me-3"><img src="images/user-8.png" alt="image" class="shadow-sm rounded-circle w45"></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1 text-left">Hurin Seary <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 hour ago</span></h4> <a href="#" class="ms-auto"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a></div><div class="card-body d-flex ps-2 pe-4 pt-0 mt-0"> <a href="#" class="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss me-3 text-dark"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a> <a href="#" class="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark"><i class="feather-message-circle text-grey-900 btn-round-sm font-lg text-dark"></i>22 Comment</a></div><div class="card w-100 border-0 shadow-none right-scroll-bar"><div class="card-body border-top-xs pt-4 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-6.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Victor Exrixon <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Surfiya Zakir <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Goria Coast <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Hurin Seary <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">David Goria <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Seary Victor <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Ana Seary <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/user-4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Studio Express <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div> </div></div></div>');


    $(window).on('load',function(){
        $('#Modalstories').modal('show');
    });
    

    $('.emoji-bttn').on('click', function() {
      $(this).parent().find('.emoji-wrap').toggleClass('active');
      return false;
    });

    $('.add-wishlist').on('click', function() {
        $(this).toggleClass('bg-greylight bg-danger');
        $(this).find('i').toggleClass('text-grey-900 text-white')
        return false;
    });

    $('.question-div .question-ans').on('click', function() {
        $('.question-ans').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.question-div .question-ans').on('click', function() {
        $('.question-ans').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.next-bttn').on('click', function() {
        var next_bttn_id =  $(this).attr('data-question');
        $('.question-div .card-body').fadeOut(0);
        $('.question-div #'+next_bttn_id ).fadeIn(500);
        // alert(next_bttn_id);
        // $(this).addClass('active');
        return false;
    });

    
    
    $('.dropdown-menu-icon').on('click', function() {
        $('.dropdown-menu-settings').toggleClass('active');
    });
    
    $('.menu-search-icon').on('click', function() {
        $('.app-header-search').addClass('show');
        $('#mobileMenuBtn').attr("disabled", true); 
        $("#global-search-bar-mobile").focus();
        $("#global-search-bar-mobile").click();

        // $("#main-content-emp-listing").append('<div class="app-header-search" style="width:100%; height:100%;z-index:200000;"><form class="search-form"><i class="feather-search font-sm text-grey-400 search-icon-mobile"></i><input type="text" name="fname" autofocus><a href="#" class="ms-1 mt-1 d-inline-block close searchbox-close" id="global-search-close-mobile"><i class="ti-close font-xs"></i></a></form></div>');

        // setTimeout(function() {
        //   $("#global-search-bar-mobile").focus();
        // }, 1500);
        // $('#mob-global-search-form').removeClass('display-none');
        // $('#mobileMenuBtn').attr("disabled", true);

        // $('.search-form').ready(function() {
        //     $("#global-search-bar-mobile").focus();
        // });
    
        // setTimeout(function() {
            
        //     $("#global-search-bar-mobile").focus();
        //     $("#global-search-bar-mobile").click();
        //     // $("#global-search-bar-mobile").keypress();
        //     // $("#global-search-bar-mobile").tabs();
        //     // //$("#global-search-bar-mobile").trigger("focus");
        //     // $("#global-search-bar-mobile").trigger("click");
            
        // }, 500);
        // alert(2);

        // alert(document.getElementById('global-search-bar-mobile'));
        // document.getElementById('global-search-bar-mobile').touchstart();

        
        //$("#mob-search-global").append('<input type="text" id="global-search-bar-mobile" class="form-control border-0" autofocus >')
        // $("#global-search-bar-mobile").keypress();
        // $("#global-search-bar-mobile").tabs();

        // document.getElementById("global-search-bar-mobile").focus(); 
        // document.getElementById("global-search-bar-mobile").attr("disabled", true); 
      
        //document.getElementById("global-search-bar-mobile").select(); 
        //$("#global-search-bar-mobile").click(); 
        //$("#global-search-bar-mobile").trigger("tap"); //jQuery Mobile
    });

    $('.searchbox-close').on('click', function() {
        $('.app-header-search').removeClass('show');
        $('#mobileMenuBtn').attr("disabled", false);
        // $('#mob-global-search-form').addClass('display-none');
        // $('#mobileMenuBtn').attr("disabled", false);
    }); 
    
    $('.switchcolor').on('click', function() {
        $(this).addClass('active');
        $('.backdrop').addClass('active');
        $('.switchcolor-wrap').addClass('active'); 
    });

    $('.sheet-close,.backdrop').on('click', function() {
        $('.switchcolor').removeClass('active');
        $('.backdrop').removeClass('active');
        $('.switchcolor-wrap').removeClass('active'); 
    });

    $('#darkmodeswitch').on('change', function () {
        if (this.checked) {
            $('body').addClass('theme-dark');
        } else {
            $('body').removeClass('theme-dark');
        }
    });


    

    $('.chat-active-btn').on('click', function() {
        $('.right-chat').toggleClass('active-sidebar');
        $('.main-content').toggleClass('right-chat-active');
        return false;
    });

    $(window).resize(function(){
        if($(this).width() < 1600){
            $('.right-chat').removeClass('active-sidebar');
        }
        else{
            $('.right-chat').addClass('active-sidebar');
        }
    })

    if($(window).width() < 1600){
        $('.right-chat').removeClass('active-sidebar');
    }
    else{
        $('.right-chat').addClass('active-sidebar');
    }

    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
           $('.scroll-header').addClass('bg-white shadow-xss');
        } else {
           $('.scroll-header').removeClass('bg-white shadow-xss');
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
           $('.middle-sidebar-header').addClass('scroll');
        } else {
           $('.middle-sidebar-header').removeClass('scroll');
        }
    });

    $('#mobileMenuBtn').on('click', function () {
        var base_url = $('#base_url').val();
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('#ggm-depart-selection').removeClass('display-none');
            $('#ggm-top-logo').addClass('display-none');
            $('#mobile-lang-seletor').addClass('display-none');
            $("#MobileBurgerMenu").attr("src",base_url+"/img/personal/cross-main.svg");
            
            //$('#mobile-lang-seletor').addClass('display-none');
        } else {
            $('#ggm-depart-selection').addClass('display-none');
            $('#ggm-top-logo').removeClass('display-none');
            $('#mobile-lang-seletor').removeClass('display-none');
            $("#MobileBurgerMenu").attr("src",base_url+"/img/personal/burger-main.svg");
            //$('#mobile-lang-seletor').removeClass('display-none');
        }
        $('.navigation').toggleClass('nav-active');
    });


    $('.model-popup-chat').on('click', function () {
        $('.modal-popup-chat').toggleClass('d-block');
        return false;
    });
    $('.modal-popup-chat a').on('click', function () {
        $('.modal-popup-chat').removeClass('d-block');
        return false;
    });

    
    $('.close-nav').on('click', function () {
        $('.navigation').removeClass('nav-active');
        return false;
    });

    
    $('.toggle-menu-color input').on('change', function () {
        if (this.checked) {
            $('.navigation').addClass('menu-current-color');
        } else {
            $('.navigation').removeClass('menu-current-color');
        }
    });

    $('.toggle-menu input').on('change', function () {
        if (this.checked) {
            $('.navigation,.main-content').addClass('menu-active');
        } else {
            $('.navigation,.main-content').removeClass('menu-active');
        }
    });
    
    $('.toggle-screen input').on('change', function () {
        if (this.checked) {
            $('body').addClass('theme-full');
        } else {
            $('body').removeClass('theme-full');
        }
    });
    
    
    $('.toggle-dark input').on('change', function () {
        if (this.checked) {
            $('body').addClass('theme-dark');
        } else {
            $('body').removeClass('theme-dark');
        }
    });

    $('input[name="color-radio"]').on('change', function () {
        if (this.checked) {
          $('body').removeClass('color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid');
          $('body').addClass('color-theme-' + $(this).val());
        }
    });

    

});





function PageScroll() {
   $(".scroll-tiger").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        $('.overlay-section').removeClass('active'); 
        e.preventDefault();

    });
}

