$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
         }
        else
        {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500)
        {
         $('.scroll-up-button').addClass("show");
        }
        else{
          $('.scroll-up-button').removeClass("show");
        }
    });
//    typing animation
    var typed=new Typed(".typing",{
        strings: [" Web Developer","Python Developer","Back-end developing"],
        typeSpeed:100,
        backSpeed:50,
        loop:true
    });
     var typed=new Typed(".typing2",{
            strings: [" Web Developer","Python Developer","Back-end developing"],
            typeSpeed:100,
            backSpeed:50,
            loop:true
        });
//    slide up
         $('.scroll-up-button').click(function(){
             $('html').animate({scrollTop:0})
         });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")

    });

});