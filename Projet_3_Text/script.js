function breakText() {
    var h1 = document.querySelector('h1');
    var h1Text = h1.textContent;

    var splitText = h1Text.split('');

    var values = splitText.length/2;

    var clutters = "";

    splitText.forEach(function(elem, idx) {
        if (idx < values) {
            clutters += `<span class="a">${elem}</span>`;
        } else {
            clutters += `<span class="b">${elem}</span>`;
        }
    });

    h1.innerHTML = clutters;
}

breakText();

gsap.from('.a', {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
});

gsap.from('.b', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: -0.05,
});