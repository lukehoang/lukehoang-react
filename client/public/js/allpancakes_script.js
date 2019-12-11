	//Call custom requests function


    $(document).ready(function(){


        /*
    
        GTM
    
        */
    
            $("[data-event='GAEvent']").click(function() {
                var evCat = $(this).attr('data-category') ? $(this).attr('data-category') : '',
                    evAct = $(this).attr('data-action') ? $(this).attr('data-action') : '',
                    evLab = $(this).attr('data-label') ? $(this).attr('data-label') : '',
                    evVal = $(this).attr('data-value') ? $(this).attr('data-value') : '';
    
                    try {
    
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'GAEvent',
                            'eventCategory': evCat,
                            'eventAction': evAct,
                            'eventLabel': evLab,
                            'eventValue': evVal,
                        });
                        //console.log(evCat);
    
    
                    } catch (e) {
                        //console.log(e);
                    }
            });
    
    
        /*
    
        Blog
    
        */
            //Listing
            if($('#blog_form_search')) {
                var page = 1;
                $('.blog_get_results').click(function(e) {
                    e.preventDefault();
                    $('.blog_loading').show();
    
                    $.ajax({
                        type: "GET",
                        url: "/blog/"+(page_blog_results_category!=''?page_blog_results_category+"/":"")+"?page="+page+"&ajax=1&search="+page_blog_results_search
                    })
                    .done(function(data) {
                        $('.blog_loading').hide();
                        $(data).appendTo($('#results'));
                        page=page+1;
                        if($('.blog_no_more_results').length) {
                            $('.blog_get_results').hide();
                        }
                    });
                });
            }
    
            //Search
            if($('#blog_form_search')) {
                $('#blog_form_search').submit(function(e) {
                    e.preventDefault();
                    location.href='/blog/?search='+$(this).find('input[type="text"]').val();
                });
            }
    
    
    
        /**************************
    
        General
    
        ******************************/
       $(".navigation_mobile a").on('click', function(event) { 
           $('.navigation_mobile').slideToggle("slow");
       });
       
        // Add smooth scrolling to all links
        $("a").on('click', function(event) { 
            var href = $(this).attr('href');

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "" && href.startsWith('#')) {
            // Prevent default anchor click behavior
            event.preventDefault();
        
            // Store hash
            var hash = this.hash;
        
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
            } // End if
        });
        
        
        /* Back to top */
        // hide #back-top first
        $(".back_to_top").hide();
        
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.back_to_top').fadeIn();
                } else {
                    $('.back_to_top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('.back_to_top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    
    

        /* Set .overlay_login_modal height value */
        var overlay_hero_height = $('.overlay_hero').height();

        //Check click of buttons
        
        /* login modal */
        $('.btn-login').click( function() {
            $('.login_modal').toggleClass('hidden');
            $('.overlay_login_modal').height(overlay_hero_height);
            $('.overlay_login_modal').toggleClass('hidden');
            
            return false;
        });

        $('.overlay_login_modal').click( function() {
            $('.overlay_login_modal').toggleClass('hidden');
            $('.overlay_login_modal').height(0);
            $('.login_modal').toggleClass('hidden');
        });

        $('.login_close').click( function() {
            $('.login_modal').toggleClass('hidden');
            $('.overlay_login_modal').toggleClass('hidden');
            $('.overlay_login_modal').height(0);
        });

        /* Modal */

        // Get the modal
        var modal = document.getElementById('modal_id');

        // When the user clicks on <span> (x), close the modal
        $(".btn_modal_close").click(function() {
            $('#thankyou_modal').css('display', 'none');
        });
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                $('#thankyou_modal').css('display', 'none');
            }
        };


    
        /* Mobile Menu */
        $('.btn_close').click( function() {
            $('.navigation_mobile').slideToggle("slow");
        });
        $('.menu_icon').click( function() {
            $('.navigation_mobile').slideToggle("slow");
        });
        $('.dropdown_mobile').click( function() { 
            $('.dropdown_content_mobile').slideToggle("slow");
        });
        
    
        /* SLIDE -swiper */

        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 1000,

            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
            el: '.swiper-scrollbar',
            },

            //autoplay
            autoplay: {
                delay: 5000,
            }
        });

        /* Headroom js */
        // grab an element
        var myElement = document.getElementsByClassName("navigation_desktop");
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement, {
            "offset": 205,
            "tolerance": 5,
            "classes": {
              "initial": "animated",
              "pinned": "slideDown",
              "unpinned": "slideUp"
            }
          });
        // initialise
        headroom.init(); 

        /* 
        
        forms 
        
        */


        //Subscribe form

        $('#form').on('submit', function(e){
            e.preventDefault();
            grecaptcha.execute();
        });          
    
    });
    
    
    /* re-captcha data callback function */
    function onSubmitSubscribe_form() {
        document.getElementById("form").submit();
    }
    
    /* on_resize screen width */
    function on_resize() {
        if(window.innerWidth <= 579){
            $('.hero_image').height(window.innerHeight + 'px');
            $('.hero_image .overlay').height(window.innerHeight + 'px');
        }
        else if(window.innerWidth > 579 && window.innerWidth <= 769) {
            $('.hero_image').height(400 + 'px');
            $('.hero_image .overlay').height(400 + 'px');
        }
        else {
            $('.hero_image').height(500 + 'px');
            $('.hero_image .overlay').height(500 + 'px');
            $('.hero_style_2 .hero_image').height(100 + 'vh');
            $('.hero_style_2 .hero_image .overlay').height(100 + '%');
            $('.navigation_mobile').css("display", "none");
        }
    }