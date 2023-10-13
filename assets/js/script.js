//banner
$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // autoplay: true,
  fade: true,
});

//pricing 

const priceTile = document.querySelectorAll(".gh-pricetile");

if (priceTile) {
  priceTile.forEach((item) => {
    item.addEventListener("click", (e) => {
      priceTile.forEach((ele) => {
        ele.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}




