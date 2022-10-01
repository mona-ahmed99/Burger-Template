let bookingOffset = $("#booking").offset().top;


$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > bookingOffset - 100) {
        $("#main-nav").css("backgroundColor", "rgb(255, 255, 255)");
        $(".nav-link").css("color", "#666666 ");
    }
    else {
        $("#main-nav").css("backgroundColor", "transparent");
        $(".nav-link").css("color", "#fff");
    }
});
// -----------------------owl carasoul----------------
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})