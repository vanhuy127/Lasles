var $$ = document.querySelectorAll.bind(document);
$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      
    ]
  });

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const activeClass = "is-show";
  toggle.addEventListener("click", function () {
    menu.classList.toggle(activeClass);
  });

var planButton = document.querySelectorAll('.plan-item .button-rounded');
planButton.forEach(function (btn) {
  btn.addEventListener('click', function () {
    $$('.plan-item.plan-selected').forEach(function (item) {
      item.classList.remove('plan-selected');
    });
    btn.parentElement.classList.add('plan-selected')
  });
})
