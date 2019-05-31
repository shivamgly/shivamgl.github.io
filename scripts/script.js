var navOpen = false;
var nav = document.getElementById('nav');
var navToggle = document.getElementById('nav-toggle');
var content = document.getElementById('content');

function toggleNav () {
    if (navOpen) {
        nav.style.left = "-300px";
        navToggle.style.left = "-1px";
        navOpen = false;
    }
    else {
        nav.style.left = "0px";
        navToggle.style.left = "299px";
        navOpen = true;
    }
}

content.addEventListener("click", () => {
    if (navOpen) {
        nav.style.left = "-300px";
        navToggle.style.left = "-1px";
        navOpen = false;
    }
});