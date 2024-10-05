// Const for modal-video
const play = document.querySelector("#video-play");
const close = document.querySelector("#video-close");
const overlay = document.querySelector(".modal-video");
const body = document.querySelector("body");

// Open video modal
play.addEventListener("click", ()=> {
    overlay.classList.add("modal-visible");
    body.style.overflow = "hidden";
});

// Close video modal
close.addEventListener("click", ()=> {
    overlay.classList.remove("modal-visible");
    body.style.overflow = "visible";
});

var swiper = new Swiper(".popular__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});

var swiper = new Swiper(".blog__swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    grid: {
        rows: 1,
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
            spaceBetween: 0,
            grid: {
                rows: 2,
            },
        },
        autoplay: false,
        loop: false,
    },
});


// Const for Accordion
const galleryOpen = document.querySelectorAll(".gallery__item");
const galleryClose = document.querySelector("#gallery-close");
const galleryModal = document.querySelector(".modal-gallery");
const galleryContent = document.querySelectorAll(".modal-gallery__content-var");
const galleryTabs = document.querySelectorAll(".modal-gallery__tabs-var");

// Open gallery modal
galleryOpen.forEach( e => {
    e.addEventListener("click", ()=> {
        galleryModal.classList.add("modal-gallery-visible");
        body.style.overflow = "hidden";
    })
})
// Close gallery modal
galleryClose.addEventListener("click", ()=> {
    galleryModal.classList.remove("modal-gallery-visible");
    body.style.overflow = "visible";
});

// Choice gallery tab & content
galleryTabs.forEach(e => {
    e.addEventListener("click", ()=> {
        let indexTab = Array.prototype.indexOf.call(galleryTabs, e);
        galleryContent.forEach(element => {
            element.classList.remove("active-content-var");
        })
        galleryTabs.forEach(element => {
            element.classList.remove("active-tabs-var");
        })
        galleryContent[indexTab].classList.add("active-content-var");
        galleryTabs[indexTab].classList.add("active-tabs-var");
    })
})

const burger = document.querySelector(".navigation");
const open = document.querySelector(".header__open");
const html = document.querySelector("html");
const listMenu = document.querySelectorAll(".navigation__link");


// Menu burger
open.addEventListener("click", (e)=> {
    burger.classList.toggle("burger-active");
    open.classList.toggle("but-active");
    html.classList.toggle("html-active");
})

listMenu.forEach(item => {
    item.addEventListener("click", (e)=> {
        burger.classList.remove("burger-active");
        open.classList.remove("but-active");
        html.classList.remove("html-active");
    })
})

