$(document).ready(function(){
    if(navigator.userAgent.match("MSIE")){
        alert();
    }
    /* Slick */
    $('.slick-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
    });
    
    $(".movie-btn").on("mouseenter",function(){
        TweenMax.to(".navbar",0.5,{
            autoAlpha: 0, 
            display: 'none',
        });
    });
    $(".movie-btn").on("mouseleave",function(){
        TweenMax.to(".navbar",0.5,{
            autoAlpha: 1, 
            display: 'block',
        });
    });
    $(".spotlight-item").on("mouseenter",function(e){
        TweenMax.to(".spotlight",0.5,{
            x: $(this).index() * $(".spotlight-item").width(),
            ease: Power3.easeOut,
        });
    });
    $(".watch-left li").on("mouseenter",function(){
        let index = parseInt($(this).index()) + 1;
        TweenMax.set(".watch-right li.active",{
          className: '-=active',
        });
        TweenMax.set(".watch-right li:nth-child("+index+")",{
          className: '+=active',
        });    
    });
    
    TweenMax.to(".s0-movie",1,{
        opacity: 1,
        ease: Quart.easeOut,
    }).delay(1.5);
    
    TweenMax.to(".img-star",1,{
        opacity: 1,
        ease: Quart.easeOut,
    }).delay(1.5);
    
    TweenMax.to(".star-right , .star-left",1,{
        x: 0,
        ease: Quart.easeOut,
    }).delay(1.5);
    
    $(".preview").on("mouseenter",function(){
         TweenMax.to(".movie-bg",0.5,{
            autoAlpha: 1, 
            display: 'block',
         }); 
    });
    $(".preview").on("mouseleave",function(){
         TweenMax.to(".movie-bg",0.5,{
            autoAlpha: 0, 
            display: 'none',
         }); 
    });

});
 