const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => 
  menuOpenButton.click() // simulate click on open button to close the menu  
);

// close menu when the closse button is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});


// initializer swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: false,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true ,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
      slidesPerView:1
    },
    768: {
      slidesPerView:2
    },
    1024: {
      slidesPerView:3
    }

  }  
  
});

