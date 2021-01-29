document.addEventListener('DOMContentLoaded', function() {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-for',
        infinite: false,
        vertical: true,
        prevArrow: '<div class="slick-arrow-prev"><img src="images/slider/arrow.png"></div>',
        nextArrow: '<div class="slick-arrow-next"><img src="images/slider/arrow.png"></div>',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              vertical: false,
              slidesToShow: 5,
              slidesToScroll: 5,
              arrows: false
            }
          },
        ]
      });
      $('.slider-nav .slider-nav__slide').on('click', function (event) {
        $('.slider-for').slick('slickGoTo', $(this).data('slickIndex'));
     });
     $('.slider-nav__slide').on("click", function() {
        $('.slider-nav__slide').removeClass("slider-nav__active");
        $(this).addClass("slider-nav__active");
	  });
	
	if (document.body.clientWidth < 1100) {
		$('.product-similiar__slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			swipe: true,
			prevArrow: '<div class="product-similiar-arrow product-similiar-arrow-prev"><img src="images/slider/arrow.png"></div>',
			nextArrow: '<div class="product-similiar-arrow product-similiar-arrow-next"><img src="images/slider/arrow.png"></div>',
			responsive: [
				{
				  breakpoint: 900,
				  settings: {
					slidesToShow:3,
				  },
				  
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow:2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow:1,
					}
				}
			  ]
		});
	}
    
    const productMenuItem = document.querySelectorAll('.product-info-menu__item');
    const productMenuArrow = document.querySelector('.product-info-menu__item-arrow');

    productMenuItem.forEach(element => {
      element.addEventListener('click', ()=> {
        productMenuItem.forEach(element => {
          element.classList.remove('active');
          if (element.classList.contains('show')) {
            element.classList.toggle('show');
          };
        });
        
        element.classList.add('active');
        
      })
    });
    productMenuArrow.addEventListener('click', ()=> {
      productMenuItem.forEach(element => {
        element.classList.toggle('show');
      });
    })
   
                      

});
