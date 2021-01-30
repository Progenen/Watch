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
            breakpoint: 768,
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
	const hiddenBlock = document.querySelector('.hidden-block');
	const hiddenBlockActivate = document.querySelector('.hidden-block-activate');
	const hiddenBlockClose = document.querySelector('.hidden-block-close');

	hiddenBlockActivate.addEventListener('click', ()=> {
		hiddenBlock.classList.add('active');
		hiddenBlockClose.addEventListener('click', ()=> {
			hiddenBlock.classList.remove('active');
		});
	});

	const productInfoItem = document.querySelectorAll('.product-info-menu__item');
	const productInfoSpoiler = document.querySelectorAll('.spoiler');
	const productInfoSpoilerHidden = document.querySelectorAll('.spoiler-hidden');
	
	function ds() {
		for (let i = 0; i < productInfoItem.length; i++) {
			productInfoItem[i].addEventListener('click', ()=> {
					for (let a = 0; a < productInfoItem.length; a++) {
						productInfoItem[a].classList.remove('active');
						productInfoSpoilerHidden[a].classList.remove('active');
					}
					productInfoItem[i].classList.add('active');
					productInfoSpoilerHidden[i].classList.add('active');
			});
		}
	}

	if (document.body.clientWidth < 660) {
		
		for (let i = 0; i < productInfoItem.length; i++) {
			productInfoSpoiler[i].before(productInfoItem[i])
			productInfoItem[i].addEventListener('click', ()=> {
				productInfoItem[i].classList.toggle('active');
				productInfoSpoilerHidden[i].classList.toggle('active');
			});
		}
	} else {
		ds();
	}
   
                      

});
