var nav = document.getElementById('nav');
var navToggle = document.getElementById('nav-toggle');
var contents = document.getElementsByClassName("content");
var navOpen = false;

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

for (var i = 0; i < contents.length; i++) {
    contents[i].addEventListener("click", () => {
        if (navOpen) {
            toggleNav();
        }
    });
}
