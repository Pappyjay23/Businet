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

    // RESPONSIVE MENU
    $(".js--nav-icon").click(function () {
       var menu = $(".js--main-nav")
       var icon = $(".js--nav-icon i")

       menu.slideToggle(200)

       if (icon.hasClass("ti-menu")) {
           icon.addClass("ti-close")
           icon.removeClass("ti-menu")
       } else {
           icon.addClass("ti-menu")
           icon.removeClass("ti-close")
       }

       
    })


})