// [START] Slick Slider Functionality //
$(document).ready(function()
{
    $('.slick-slider').slick(
    {
        //setting-name: setting-value
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});
// [END] //