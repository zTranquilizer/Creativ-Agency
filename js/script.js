function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu-header").toggleClass("active-menu");
    $("body").toggleClass("lock");
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 115) {
    $(".header").addClass("fixed-header");
    $(".full-main__body").addClass("margin");
    //console.log(123);
  } else {
    $(".header").removeClass("fixed-header");
    $(".full-main__body").removeClass("margin");
  }
});
