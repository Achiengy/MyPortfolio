$(document).ready(function(){
   $(window).scroll(function(){

   if(this.scroll > 500){
    $('.scroll-up-button').addClass("show");
   }else{
    $('.scroll-up-button').addRemove("show");
   }
});

  // Slide-up 
  $('.scroll-up-button').click(function(){
     $('html').animated({scrollTop: 0});
  });

   
    // toggle menu/navbar 
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });

});