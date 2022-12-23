$(function() {
    
    // ドロップダウンメニューをホバーした時の処理
    $(".menu").hover(
        function() {
            $(".sub-menu:not(:animated)",this).slideDown("fast");
        },
        function() {
            $(".sub-menu",this).css("display","none");
        }
    )

    // クリック時のボタンの挙動
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
        $(window).resize(function() {
            if(window.matchMedia("(max-width:1200px)").matches) // 1200ピクセル以下の処理
            {
                if($(".nav-btn").hasClass("btn-open")) //その時にドロップダウンメニューが開いていたら
                    {  $(".global-nav").slideUp();
                       $(".nav-btn").removeClass("btn-open");
                    }
                 else {$(".global-nav").css("display","none");
                }
            } else {
                $(".global-nav").css("display","block");
        }
      }
    )
  }
)