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


//*counter*//
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;

                obj.textContent = current;

                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 78, 1548, 3000);
    counter("count2", 26, 2144, 3000);
    counter("count3", 61, 2891, 3000);
    counter("count4", 49, 3211, 3000);
});
