   var percent = 1;
   $('body').loadie(percent);

   $(window).scroll(function() {
       if ($(this).scrollTop() > 100) {
           TweenMax.to(".navbarbg", .5, {
               delay: .3,
               backgroundColor: "rgba(0, 0, 0, 1)",
               y: 0
           })
           TweenMax.to('.w', .5, {
               alpha: 1
           })
       } else {
           TweenMax.to(".navbarbg", .5, {
               delay: .3,
               backgroundColor: "rgba(0, 0, 0, 1)",
               y: -100
           })
           TweenMax.to('.w', .5, {
               alpha: 0
           })
       }
   });

   //youtbue
   $('.youtube_lb').fadeOut(0);

   var tag = document.createElement('script');
   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   //API code載入後，取代id=player的div為帶有YouTube player的iframe tag
   var player1;
   var player2;
   var player3;
   var player4;

   function onYouTubeIframeAPIReady() { //此函數在IFrame Player API code 載入後將自動呼叫

       player1 = new YT.Player('player1', {
           videoId: 'EEdr-H2adkU', //Youtube ID TVC 30s正片
           playerVars: {
               'autoplay': 0,
               'controls': 0
           },
           events: {
               'onStateChange': onPlayerStateChange,
           }
       });

       player2 = new YT.Player('player2', {
           videoId: 'xHpfcLrrIJ4', //Youtube ID 廣告花絮影片
           playerVars: {
               'autoplay': 0,
               'controls': 1
           },
           events: {
               'onStateChange': onPlayerStateChange,
           }
       });

       player3 = new YT.Player('player3', {

           videoId: 'yfWQtz3C8Ps', //Youtube ID GPS衛星對時影片
           playerVars: {
               'autoplay': 0,
               'controls': 1
           },
           events: {
               'onStateChange': onPlayerStateChange,
           }

       });

       player4 = new YT.Player('player4', {

           videoId: 'PhQjnULbNUY', //Youtube ID 光動能影片
           playerVars: {
               'autoplay': 0,
               'controls': 1
           },
           events: {
               'onStateChange': onPlayerStateChange,
           }

       });
   }

   function onPlayerStateChange(event) {
       if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
           $('.youtube_lb').fadeOut(300);
       }
   }

   new Date();
   var today = new Date();
   var playtime12 = new Date(2018, 6, 27, 15, 00); //六月27日
   var playtime3 = new Date(2018, 7, 1, 12, 00); //GPS八月1日
   var playtime4 = new Date(2018, 6, 16, 12, 00); //光動能七月16日

   $('.youtube_lb').click(function() {
       player1.stopVideo();
   });

   TweenMax.to('.s1 .left-bottom span', 0, {
       opacity: 0,
       ease: Quart.easeOut
   });

   function open1() {

       $('.movieplay_1').fadeIn(300);
       player1.playVideo();
       //timer1 = setTimeout(stopVideo1, 120000); //再重設一個 

   }

   function open2() {

       $('.movieplay_2').fadeIn(300);
       player2.playVideo();

       //timer2 = setTimeout(stopVideo2, 30000); //再重設一個 
   }

   function open3() {
       if (playtime3 < today) {
           $('.movieplay_3').fadeIn(300);
           player3.playVideo();
//           TweenMax.to('.m-img', 0, {
//               opacity: 0.4,
//               ease: Quart.easeOut
//           });
       } else {
           alert('尚未開放，敬請期待');
       }

       //timer3 = setTimeout(stopVideo3, 235000); //再重設一個 
   }

   function open4() {

       $('.movieplay_4').fadeIn(300);
       player4.playVideo();

       //timer4 = setTimeout(stopVideo4, 235000); //再重設一個 
   }

   function stopVideo1() {
       //按下暫停按鈕
       clearTimeout(timer1);
       player1.stopVideo(-1);
       $('.youtube_lb').fadeOut(300);

   };

   function stopVideo2() {
       //按下暫停按鈕
       clearTimeout(timer2);
       player2.stopVideo(-1);
       $('.youtube_lb').fadeOut(300);

   };

   function stopVideo3() {
       //按下暫停按鈕
       clearTimeout(timer3);
       player3.stopVideo(-1);
       $('.youtube_lb').fadeOut(300);

   };

   function stopVideo4() {
       //按下暫停按鈕
       clearTimeout(timer4);
       player4stopVideo(-1);
       $('.youtube_lb').fadeOut(300);

   };

   TweenMax.to('#section0,.title,.movie', 0, {
       alpha: 0,
       ease: Quart.easeOut
   });
   TweenMax.to('#section0 .movie', 0, {
       alpha: 0,
       ease: Quart.easeOut
   });
   TweenMax.to('.people-l-1,.people-l-2,.watch-l', 0, {
       alpha: 0,
       x: -100,
       ease: Quart.easeOut
   });
   TweenMax.to('.people-r-1,.people-r-2,.watch-r', 0, {
       alpha: 0,
       x: 100,
       ease: Quart.easeOut
   });

   TweenMax.to('.header0,.header1,.header2,.header3', 0, {
       alpha: 0,
       ease: Quart.easeOut
   });
   TweenMax.to('.list0,.list1,.list2,.list3,.list4', 0, {
       alpha: 0,
       ease: Quart.easeOut
   });

   TweenMax.to('#section2,#section3,.all-ani', 0, {
       alpha: 0,
       ease: Quart.easeOut
   });
   //   TweenMax.to('.movie-play,.btn-other', 0, { alpha: 0, x: -50, ease: Quart.easeOut });

   function complete() {

       var controller = new ScrollMagic.Controller();
       var tween = new TimelineMax()
           .to('#section0,.people-l,.people-r', 1, {
               alpha: 1,
               x: 0
           })
           .to('.title', 1, {
               alpha: 1
           })
           .to('.watch-l,.movie,.watch-r', 1, {
               alpha: 1,
               x: 0
           })

       var scene = new ScrollMagic.Scene({
           triggerElement: "#section0",
           triggerHook: "onCenter",
           reverse: true
       })

       .setTween(tween)
           .addTo(controller);

       var tween1 = new TimelineMax()
           //.to(".navbarbg", 1, { backgroundColor: "rgba(0, 0, 0, 1)", y: 0 })
           //.to('.w', .5, { alpha: 1 })
           //.to('#section1', 1, { alpha: 1, x: 0 })
           .to('.header0,.list0,.list1', .5, {
               alpha: 1,
               x: 0
           })
           .to('.header1,.list2', .5, {
               alpha: 1,
               x: 0
           })
           .to('.header2,.list3', .5, {
               alpha: 1,
               x: 0
           })
           .to('.header3,.list4', .5, {
               alpha: 1,
               x: 0
           })

       var scene1 = new ScrollMagic.Scene({
           triggerElement: "#section1",
           triggerHook: "onCenter",
           reverse: true
       })

       .setTween(tween1)
           .addTo(controller);

       var tween2 = new TimelineMax()
           .to('#section2,.people-l,.people-r', 1, {
               alpha: 1,
               x: 0
           })
           .to('.all-ani', .5, {
               alpha: 1,
               x: 0
           })

       var scene2 = new ScrollMagic.Scene({
           triggerElement: "#section2",
           triggerHook: "onCenter",
           reverse: false
       })

       .setTween(tween2)
           .addTo(controller);

       var tween3 = new TimelineMax()
           .to("#section3", 1, {
               alpha: 1
           })
           .to(".movie-play", 1, {
               alpha: 1,
               x: 0
           })
           .to(".btn-other", 1, {
               alpha: 1,
               x: 0
           })

       var scene3 = new ScrollMagic.Scene({
           triggerElement: "#section3",
           triggerHook: "onCenter",
           reverse: false
       })

       .setTween(tween3)
           .addTo(controller);

   }

   $('.all-store ul li').fadeOut(0);
   $('.watch0_b').fadeIn();

   $('.all-txt li').eq(0).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch0_b').fadeIn();
   });

   $('.all-txt li').eq(1).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch1_b').fadeIn();
   });
   $('.all-txt li').eq(2).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch2_b').fadeIn();
   });
   $('.all-txt li').eq(3).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch3_b').fadeIn();
   });
   $('.all-txt li').eq(4).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch4_b').fadeIn();
   });
   $('.all-txt li').eq(6).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch5_b').fadeIn();
   });
   $('.all-txt li').eq(7).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch6_b').fadeIn();
   });
   $('.all-txt li').eq(8).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch7_b').fadeIn();
   });
   $('.all-txt li').eq(9).click(function() {
       $('.all-store ul li').fadeOut(0);
       $('.watch8_b').fadeIn();
   });
   $('.all-txt li img').mouseover(function() {
       TweenMax.to($(this), .5, {
           left: "-15%",
           ease: Quart.easeOut
       });

   });

   $('.all-txt li img').mouseout(function() {
       TweenMax.to($(this), .5, {
           left: "-40%",
           ease: Quart.easeOut
       });
   });