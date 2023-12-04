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
setTimeout(screenSaver, 3800);
setTimeout(screenSaverZindex, 4800);
setTimeout(screenSaverLogo1Transform, 1000);
setTimeout(screenSaverLogo2Show, 1400);
function screenSaver() {
  document.getElementById("screen-saver").classList.add("hidden-screen-saver");
}
function screenSaverZindex() {
    document.getElementById("screen-saver").classList.add("z-index-screen-saver");
  }
  function screenSaverLogo1Transform() {
    document.getElementById("logo-1").classList.add("screen-saver-logo-1-hidden");
  }
  function screenSaverLogo2Show() {
    document.getElementById("logo-2").classList.add("screen-saver-logo-2-show");
  }
