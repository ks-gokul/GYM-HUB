//banner
$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  // fade: true,
});

//pricing
const arrows = document.querySelectorAll(".gh-pricing__arrow");
const lists = document.querySelectorAll(".hide");
const tiles = document.querySelectorAll(".gh-pricetile");

if (arrows) {
  arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
      lists[i].classList.toggle("show");
      arrow.classList.toggle("up");
      tiles[i].classList.toggle("active");
    });
  });
}


document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");

    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
  }
});
// onload accordion collapse
const accordionButton = document.querySelectorAll(
  ".gh-footer__sec-2 .accordion-button"
);
const accordionCnt = document.querySelectorAll(
  ".gh-footer__sec-2 .accordion-collapse"
);
window.addEventListener("load", () => {
  if (window.innerWidth < 767) {
    accordionButton.forEach((e) => {
      e.classList.add("collapsed");
    });
    accordionCnt.forEach((e) => {
      e.classList.remove("show");
    });
  } else {
    accordionButton.forEach((e) => {
      e.classList.remove("collapsed");
    });
    accordionCnt.forEach((e) => {
      e.classList.add("show");
    });
  }
});


