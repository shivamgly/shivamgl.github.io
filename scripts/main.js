// Remove PreLoader
window.onload = function () {
  var loader = document.getElementById("preloader");
  loader.style.display = "none";
  loader.innerHTML = " ";
};
