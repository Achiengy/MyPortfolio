$(document).ready(function(){
  $(window).scroll(function(){
     
 // scroll-up button show/hide 
      if(this.scrollY > 500){
          $('.scroll-up-button').addClass("show");
      }else{
          $('.scroll-up-button').removeClass("show");
      }
  });

  // slide-up 
  $('.scroll-up-button').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      //smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

// typing text animation
    var typed = new Typed(".typing", {
        strings: ["Full Stack Web Developer"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });
});