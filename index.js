// const main = document.querySelectorAll(".menu");
// const item = Array.prototype.slice.call(main,0);
// item.forEach(function (element) {
//     element.addEventListener("mouseover",function() {
//         element.querySelector(".sub-menu").classList.add("open");
//         element.querySelector(".sub-menu").style.display="block";
//     },false);
//     element.addEventListener("mouseout",function() {
//         element.querySelector(".sub-menu").classList.remove("open");
//         element.querySelector(".sub-menu").style.display="none";
//     },false);
// });

// Javascriptのコード

// $(function() {
//     $(".menu-a").hover(
//         function() {
//             $(this).next().slideDown();
//         },
//         function() {
//             $(this).next().slideUp();
//         }
//     );
// })


const Globalnav = document.querySelector(".global-nav");
const navbtn = document.querySelector(".nav-btn");
navbtn.addEventListener("click", () => {
    Globalnav.classList.toggle("closed");
    navbtn.classList.toggle("btn-open");
})

// $(function() {
//     $(".menu-a").hover(
//         function() {
//             $(this).next("ul").addClass("open").slideDown().css("display","block");
//             // alert("ホバーされたよ！");
//         },
//         function() {
//             $(this).next("ul").removeClass("open");
//             // alert("ホバーアウトされたよ！");
//         }
//     )
// })

$(function() {
    $(".menu").hover(
        function() {
            $(".sub-menu:not(:animated)",this).slideDown("fast");
        },
        function() {
            $(".sub-menu",this).css("display","none");
        }
    )
})