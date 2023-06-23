//*Navbar*//
let nav = document.querySelector(".navbar");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
}

//*Navbar -hide*//
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
navCollapse.classList.remove("show");
    })
})


//swiper
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: { el: ".swiper-pagination", 
    clickable: true
},
autoplay: {
    delay: 3500,
},
});
