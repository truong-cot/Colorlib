const cartDropdown = document.querySelector(".cart-dropdown");
const cart = document.querySelector(".cart");
const navMenu = document.querySelectorAll(".nav-item");
const sectionNav = document.querySelectorAll(".section-nav-item");
const sectionNav2 = document.querySelectorAll(".section-nav-item2");

// Ẩn hiện giở hàng
cart.onclick = function() {
    if(cartDropdown.style.display == "block") {
        cartDropdown.style.display = "none";
    }
    else {
        cartDropdown.style.display = "block";
    }
}


// Active navigation
// Lặp qua các phần tử của nav
navMenu.forEach((navItem, index) => {
    navItem.onclick = function() {
        document.querySelector(".nav-item.active").classList.remove("active");
        navItem.classList.add("active");
    }
});

//active section nav
sectionNav.forEach((sectionItem, index) => {
  sectionItem.onclick = function() {
    document.querySelector(".section-nav-item.active").classList.remove("active");
    sectionItem.classList.add("active");
  }
})

// section nav 2
sectionNav2.forEach((sectionItem, index) => {
  sectionItem.onclick = function() {
    document.querySelector(".section-nav-item2.active").classList.remove("active");
    sectionItem.classList.add("active");
  }
})


// Slick slider
$(document).ready(function(){
    $('.section-slider-container').slick({
        slidesToShow: 4, // Số slider hiển thị
        //slidesToScroll: 3, //Số slider 1 lần di chuyển
        // dots: true, Hiện dấu chấm      
        infinite: true, // vô tận đến điểm cuối
        arrow: true, // lướt slider
        autoplay: true,
        autoplaySpeed: 1000, //Tự dộng dịch chuyển trong 1 khaonr thời gian
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
              }
            }
          ],        
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});

// Slider 3

$(document).ready(function(){
  $('.slider-three-1').slick({
      slidesToShow: 1, // Số slider hiển thị
      slidesToScroll: 1, //Số slider 1 lần di chuyển
      // dots: true, Hiện dấu chấm      
      infinite: true, // vô tận đến điểm cuối
      arrow: true, // lướt slider
      autoplay: true,
      autoplaySpeed: 3000, //Tự dộng dịch chuyển trong 1 khaonr thời gian
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              // centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              // centerPadding: '40px',
              // slidesToShow: 1,
            }
          }
        ],        
      prevArrow:"<button type='button' class='slick-prev-slider3 pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next-slider3 pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});
});

