var menu = document.querySelector("#nav i");
var nav = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.8,
})

tl.from("#full h4", {
    x: 100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3
})

tl.from("#full i", {
    opacity: 0,
    duration: 0.7
})

tl.pause()

menu.addEventListener("click", function () {
    tl.play()
})

nav.addEventListener("click", function () {
    tl.reverse()
}) 