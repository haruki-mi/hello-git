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
    
    // レスポンシブ対応
            $(window.resize(function() {
                if(window.matchMedia("(max-width:1200px)").matches) {
                    $(".global-nav").css("display","none");
                } else {
                    $(".global-nav").css("display","block");
            }
          }
       )
    )
  }
)