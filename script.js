$(function(){

  $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top,

              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
              }else {
                $(this).removeClass('scrollin');
              }
          });
      });


  $('#top-btn').click(function(){
     $('html,body').animate({
       'scrollTop': 0
     },900);
   });


$('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop':position
  },1000);
});

setTimeout(function(){
		$('.start h1').fadeIn(1600);
	},500);
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); 

});
