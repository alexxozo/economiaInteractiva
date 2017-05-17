$(document).ready(function() {
  $("#toggle").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("isDown") ) {
        $( ".navbar-fixed-top" ).animate({ "margin-top": "-62px" }, "fast" );
        $( "#content" ).animate({ "margin-top": "5px" }, "fast" );
        $(this).removeClass("isDown");
    } else {
        $( ".navbar-fixed-top" ).animate({ "margin-top": "0px" }, "fast" );
        $( "#content" ).animate({ "margin-top": "80px" }, "fast" );
        $(this).addClass("isDown");
    }
    return false;
  });





    //-------FLIPPING CARDS-------//
    $('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});
    //----------------------------//



    /*---LIGHTBULB----*/
    $(function(){
      $(".power").click(function(){
        $("body").toggleClass("active");
        $("#d").removeClass("invisible");
      });
    });


    $(".Modern-Slider").slick({
      autoplay:false,
      //autoplaySpeed:10000,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      pauseOnFocus:true,
      dots:true,
      pauseOnDotsHover:true,
      //cssEase:'linear',
      //fade:true,
      draggable:true,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>',
      dots:true,

    });


});
