$(function() {
    $(".menu").hover(
        function() {
            $(".sub-menu:not(:animated)",this).slideDown("fast");
        },
        function() {
            $(".sub-menu",this).css("display","none");
        }
    )

    $(".nav-btn").click(function() {
        $(".global-nav").slideToggle("fast");
        $(".nav-btn").toggleClass("btn-open");
    })

    $(".menu").hover(
        function() {
            $(".toggle",this).addClass("toggle-open");
        },
        function() {
            $(".toggle",this).removeClass("toggle-open");
        }
    )
})