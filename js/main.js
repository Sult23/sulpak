let menus = [...document.querySelectorAll('.about__inner--2')];
menus.map((menu) => {
	let items = menu.querySelectorAll('.circular-menu__item');
	let active = false;
	const length = items.length;
	const arc = 2 * Math.PI * (1 / length);
	const radius = 40;
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 1100) {
			active = !active;
			if (active) {
				for (let i = 0; i < length; i++) {
					const angle = i * arc;
					const x = radius * Math.cos(angle);
					const y = radius * Math.sin(angle);
					items[i].style.left = 50 + x + '%';
					items[i].style.top = 50 + y + '%';
				}
			}
		}
	});
});
$(function () {
	$('.carousel__inner').slick({
		dots: true,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
	})
})