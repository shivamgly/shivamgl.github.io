const hideLoader = () => {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";
  loader.innerHTML = " ";
  document.body.style.overflowY = "auto"
}

const setFeather = () => {
  feather.replace({
    height: "16px",
    width: "16px",
    class: "icon"
  });
}

window.onload = function () {
  setTimeout(() => {
    hideLoader();
    hideLoader();
    hideLoader();
    setFeather();
    contutus();
  }, 500);
};
