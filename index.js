$(function() {
    
    // ドロップダウンメニュー
    $(".menu").hover(
        function() {
            $(".sub-menu:not(:animated)",this).slideDown("fast");
        },
        function() {
            $(".sub-menu",this).css("display","none");
        }
    )

    // ボタンの挙動
    $(".nav-btn").click(function() {
        $(".global-nav").slideToggle("fast");
        $(".nav-btn").toggleClass("btn-open");
    })

    // ナビゲーションメニュー内の+-入れ替わり
    $(".menu").hover(
        function() {
            $(".toggle",this).addClass("toggle-open");
        },
        function() {
            $(".toggle",this).removeClass("toggle-open");
        }
    )

    // let windowWidth = $(window).width();
    // const windowbreak = 1200;
    // if (windowWidth >= windowbreak) {
    //     $(".global-nav").css("display","block");
    //     console.log("large");
    // } else {
    //     $(".global-nav").css("display","none");
    //     console.log("small")
    // }
})