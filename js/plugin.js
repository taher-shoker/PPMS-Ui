        


$(function()
{
    $(window).scroll(function(){
      
       if($(this).scrollTop()>=2950)
       {
           $(".count").countTo();
       }
        else
        {
             $(".count").countTo('restart');
        }
    });
  

});

$(function()
{
    $('body').niceScroll({
   
        cursorwidth: "2px",
        mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
        cursorcolor: "#44ce6f",
     
       
    }); 
  
  $('#slider-thumbs').niceScroll({
   
    cursorwidth: "0px",
    mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
    cursorcolor: "#f8f8f8",
    emulatetouch: false, // enable cursor-drag scrolling like touch devices in desktop computer
    hwacceleration: true, // use hardware accelerated scroll when supported
    grabcursorenabled: true ,// (only when touchbehavior=true) display "grab" icon
    autohidemode: scroll, // how hide the scrollbar works, possible values: 
   
}); 
    var scrollButton =$(".Scroll-up");
    $(window).scroll(function(){
      
       if($(this).scrollTop()>=500)
       {
           scrollButton.show();
       }
        else
        {
            scrollButton.hide();
        }
    });
  scrollButton.click(function(){
  $("html,body").animate({scrollTop:0},3000);
  });

});

$(window).load(function()
{ 
    $(".loading-page .sk-folding-cube").fadeOut(300,
    function(){
        $(".loading-page").fadeOut(500);
    });
    // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.startp-nav').addClass("is-sticky");
            }
            else{
                $('.startp-nav').removeClass("is-sticky");
            }
		});

      // WOW JS
      if ($(".wow").length) { 
        var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       20,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
});
/**********Plugin For Offers Section ************ */
$(document).ready(function($) {
 


  
    //Handles the carousel thumbnails
    $('#slider-thumbs a').click(function () {
    var id_selector = $(this).data("id");
   
 
    $('#carouselExampleIndicators').carousel(parseInt(id_selector));
  
});
    // When the carousel slides, auto update the text
    $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
             var id = $('.item.active').data('slide-number');
            $('#carousel-text').html($('#slide-content-'+id).html());
    });
});

$('.carousel .vertical .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=1;i<2;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
        }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });

  