const main = document.querySelectorAll(".menu");
const item = Array.prototype.slice.call(main,0);
item.forEach(function (element) {
    element.addEventListener("mouseover",function() {
        element.querySelector(".sub-menu").classList.add("open");
        element.querySelector(".sub-menu").style.display="block";
    },false);
    element.addEventListener("mouseout",function() {
        element.querySelector(".sub-menu").classList.remove("open");
        element.querySelector(".sub-menu").style.display="none";
    },false);
});

const Globalnav = document.querySelector(".global-nav");
const navbtn = document.querySelector(".nav-btn");
navbtn.addEventListener("click", () => {
    Globalnav.classList.toggle("closed");
})