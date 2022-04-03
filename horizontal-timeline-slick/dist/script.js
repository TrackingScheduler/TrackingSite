$(".loading-bar").slick({
  centerMode: true,
  // centerPadding: "80px",
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  focusOnSelect: true,
  asNavFor: ".labels"
});

$(".labels").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: false,
  asNavFor: ".loading-bar"
});