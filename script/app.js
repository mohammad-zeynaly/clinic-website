"use strict"

// menu Navbar 
const overlayContainer = document.querySelector('#overlay')
const menuContainer = document.querySelector('.menu')
const menuBtn = document.querySelector('.navbar__btn')
const menuIcon = document.querySelector('.menu__icon')

// navBarMenu Show & Close 
function navBarMenuShow () {

    if(menuIcon.classList.contains('fa-bars')){
        menuContainer.classList.add('menu-show')
        menuIcon.classList = "fa fa-times menu__icon";
        overlayContainer.classList.add('overlay')
        menuIcon.style.color='#fff'
    }else{
        menuContainer.classList.remove('menu-show')
        menuIcon.classList = "fa fa-bars menu__icon";
        overlayContainer.classList.remove('overlay')
        menuIcon.style.color='#000'
    }
}


// overlay Close All 
function overlayClose () {

    // close menu 
    overlayContainer.classList.remove('overlay')
    menuContainer.classList.remove('menu-show')
    menuIcon.classList = "fa fa-bars menu__icon";
    menuIcon.style.color='#000'
}

menuBtn.addEventListener('click' , navBarMenuShow)
overlayContainer.addEventListener('click' , overlayClose)






// setting slider OwlCarSoul 

$(".header-carousel").owlCarousel({
    autoplay: true,
    animateOut: 'fadeOutLeft',
    items: 1,
    dots: true,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa-solid fa-chevron-left header-chevron"></i>',
        '<i class="fa-solid fa-chevron-right header-chevron"></i>'
    ]
});


// setting testimonial slider 

$(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-arrow-left testimonial-arrow"></i>',
        '<i class="fa fa-arrow-right testimonial-arrow"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
});
(jQuery);


