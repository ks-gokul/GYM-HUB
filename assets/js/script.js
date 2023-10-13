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
    item.classList.remove("active")
    item.addEventListener("click", (e)=> {
      item.classList.add("active")
    })
  });
}




