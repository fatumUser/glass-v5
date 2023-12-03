function burgerMenu() {
    document.getElementById("header__nav").classList.toggle("header__nav-show");
}
function fullImgShow() {
    document.getElementById("full-img").classList.add("full-img-show");
    document.getElementById("body").classList.add("body-no-scroll");
}
function fullImgClose() {
    document.getElementById("full-img").classList.remove("full-img-show");
    document.getElementById("body").classList.remove("body-no-scroll");
}
function fullImgDeliveryShow() {
    document.getElementById("full-img-delivery").classList.add("full-img-show");
    document.getElementById("body").classList.add("body-no-scroll");
}
function fullImgDeliveryClose() {
    document.getElementById("full-img-delivery").classList.remove("full-img-show");
    document.getElementById("body").classList.remove("body-no-scroll");
}
setTimeout(screenSaver, 1800);
setTimeout(screenSaverZindex, 2800);
setTimeout(screenSaverMargin, 50);
function screenSaver() {
  document.getElementById("screen-saver").classList.add("hidden-screen-saver");
}
function screenSaverZindex() {
    document.getElementById("screen-saver").classList.add("z-index-screen-saver");
  }
  function screenSaverMargin() {
    document.getElementById("screen-saver-logo").classList.add("margin-screen-saver-logo");
  }
  
