let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil2 = document.querySelector(".nouvil2");
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.3 + 'px';
    mountains4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 1.5 + 'px';
    nouvil2.style.fontSize = value + 'px';
    if (scrollY >= 64) {
        nouvil2.style.fontSize = 64 + 'px';
        nouvil2.style.position = 'fixed';
        if (scrollY >= 144) {
            document.querySelector(".h-cont").style.background = 'linear-gradient(rgb(31 133 165), rgb(32, 2, 49))';
        } else {
            document.querySelector(".h-cont").style.background = 'linear-gradient(rgb(48, 1, 24), rgb(32, 2, 49))'
        }
        if (scrollY >= 516) {
            nouvil2.style.display = 'none';
        } else {
            nouvil2.style.display = 'block';
        }
    }

}