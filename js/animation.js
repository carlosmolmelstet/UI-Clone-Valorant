$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if(scroll > 600) {
        $(".headerAbout h2").addClass("activeheaderAbout");
    }
});