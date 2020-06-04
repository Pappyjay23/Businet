$(document).ready(function () {
    // FIXED NAVBAR
    $(".js--section-works").waypoint(function (direction) {
        if (direction == "down") {
            $(".js--nav").addClass("fixed")
        } else {
            $(".js--nav").removeClass("fixed")
        }
        
    },{
        offset:"60px"
    })




    // LINKING NAVS AND BUTTONS
    $(".link-home").click(function () {
        $("html, body").animate({scrollTop: $(".js--home").offset().top}, 1500)
    })
    $(".link-about").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-about").offset().top}, 1500)
    })
    $(".link-term").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-works").offset().top}, 1500)
    })
    $(".link-contact").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-contact").offset().top}, 1500)
    })

   
})