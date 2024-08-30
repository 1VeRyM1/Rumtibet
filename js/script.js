const play = document.querySelector("#video-play");
const close = document.querySelector("#video-close");
const overlay = document.querySelector(".modal-video");
const body = document.querySelector("body");

play.addEventListener("click", ()=> {
    overlay.classList.add("modal-visible");
    body.style.overflow = "hidden";
});

close.addEventListener("click", ()=> {
    overlay.classList.remove("modal-visible");
    body.style.overflow = "visible";
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
    },
});