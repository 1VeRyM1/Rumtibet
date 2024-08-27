// const selectArrow = document.querySelectorAll(".form-search__select");

// selectArrow.forEach(function(elem) {
//     elem.addEventListener("click", ()=> {
//         elem.classList.toggle("change");
//     });
// });

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