/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: 1, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){


			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				
			}, 700);
		})		
	});
	

	if ($('.at-spon1-slider').length > 0 ) {
		var slider = new Swiper('.at-spon1-slider', {
			spaceBetween: 150,
			slidesPerView: 7,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 7,
				},
				'1200': {
					slidesPerView: 6,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'576': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	};
	var quick_view = new Swiper(".at-ser1-thumb", {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 5,
		speed: 1000,
		direction: 'vertical',
		navigation: {
			prevEl: ".at-ser1-prev",
			nextEl: ".at-ser1-next",
		},
		breakpoints: {  
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'1199': {
				slidesPerView: 3,
				direction: 'horizontal',
			},
			'480': {
				slidesPerView: 2,
				direction: 'horizontal',
			},
			'0': {
				slidesPerView: 2,
				direction: 'horizontal',
			},
		},
	});

	var swiper2 = new Swiper(".at-ser1-slider", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,
		effect: "fade",
		navigation: {
			prevEl: ".at-ser1-prev",
			nextEl: ".at-ser1-next",
		},
		thumbs: {
			swiper: quick_view,
		},
	});

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var ATTEAM = gsap.timeline({
			scrollTrigger: {
				trigger: '.at-tm1-sec',
				start: "top 0%",
				end: "top -100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				markers: false,
			}

		});
		ATTEAM
		.from( ".at-tm1-content .at-tm1-bgclr" , { width: 0,  duration: 1, ease: "power2.out"})
		.from( ".at-tm1-item-wrap" , { yPercent: 100, duration: 1, ease: "power2.out"},"<= .1")
		.from( ".at-tm1-item:nth-child(1)" , { yPercent: 100, duration: 1, ease: "power2.out"},"<= .4")
		.from( ".at-tm1-item:nth-child(4)" , { yPercent: 100, duration: 1, ease: "power2.out"},"<")
	};

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var ATTEAM = gsap.timeline({
			scrollTrigger: {
				trigger: '.at-case-sec',
				start: "top 80%",
				end: "bottom 100%",
				scrub: 1,
				markers: false,
			}

		});
		ATTEAM
		.from( ".at-case-title h3" , {  color: "#6C1AFC" ,  letterSpacing: "200px", y: 500,  duration: 1, ease: "power2.out"})
	};

	const all_btns = gsap.utils.toArray(".bi-btn-hover");
	const all_btn_circles = gsap.utils.toArray(".bi-btn-item");

	if (all_btns.length > 0) {
		all_btns.forEach((btn, i) => {
			$(btn).mousemove(function (e) {
				const rect = btn.getBoundingClientRect();
				const relX = e.clientX - rect.left;
				const relY = e.clientY - rect.top;

				gsap.to(all_btn_circles[i], {
					duration: 0.5,
					x: relX - rect.width / 2,
					y: relY - rect.height / 2,
					ease: "power2.out",
				});
			});

			$(btn).mouseleave(function () {
				gsap.to(all_btn_circles[i], {
					duration: 0.5,
					x: 0,
					y: 0,
					ease: "power2.out",
				});
			});
		});
	}

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var ATWORKPROCESS = gsap.timeline({
			scrollTrigger: {
				trigger: '.at-step1-sec',
				start: "top 0%",
				end: "top -100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				markers: false,
			}

		});
		ATWORKPROCESS
		.to( ".at_step_type_1" , { rotate: "18deg",  y: -120,   duration: 1, ease: "power2.out"})
		.to( ".at_step_type_2" , { rotate: "-18deg",  y: -640,   duration: 1, ease: "power2.out"},"<=.15")
		.to( ".at_step_type_3" , { rotate: "6deg",  y: -620,   duration: 1, ease: "power2.out"},"<=.6")
		.to( ".at_step_type_4" , { rotate: "0",  y: -610,   duration: 1, ease: "power2.out"},"<=.6")
	};

	if ($('.at-testi2-slider').length > 0 ) {
		var slider = new Swiper('.at-testi2-slider', {
			spaceBetween: 32,
			slidesPerView: 4,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 1000,
			pagination: {
				el: ".at-testi2-pagi",
				clickable: true,
			},
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'992': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'992': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};
})(jQuery);