$(function() 
{
    $(window).on("scroll", function() 
    {
        if($(window).scrollTop() > 100)
        {
        	$(".header-cont").hide();
            $(".header-cont-white").show();
        } 
        else 
        {
        	$(".header-cont-white").hide();
            $(".header-cont").show();
        }
    });
});

$('.owl-carousel').owlCarousel(
{
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})