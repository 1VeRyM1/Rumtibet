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
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blog__swiper", {
    slidesPerView: "auto",
    grid: {
        rows: 1,
    },
    breakpoints: {
        767: {
            slidesPerView: 4,
            
        },
        991: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
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
