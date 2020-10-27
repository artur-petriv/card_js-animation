document.addEventListener('DOMContentLoaded', function(){

	// Size options
	const sizesBtns = document.querySelectorAll('.card__size');

	function changeActiveSize(e) {
		if(e.target.classList.contains('active')){
			return;
		}
		sizesBtns.forEach(btn => {
			if(btn.classList.contains('active')) {
				btn.classList.remove('active');
			}
		});
		e.target.classList.add('active');
	}

	sizesBtns.forEach(function(btn) {
		btn.addEventListener('click', changeActiveSize);
	});

	// Animation
	const card = document.querySelector('.card'),
		container = document.querySelector('.container'),
		title = document.querySelector('.card__title'),
		image = document.querySelector('.card__img'),
		desc = document.querySelector('.card__desc'),
		sizes = document.querySelector('.card__sizes'),
		purchase = document.querySelector('.card__purchase');

	// Mouse moving event
	container.addEventListener('mousemove', (e) => {
		let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
		let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
		card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

	});

	// Mouse in container
	container.addEventListener('mouseenter', (e) => {
		setTimeout(() => {
			card.style.transition = 'none';
		}, 600);
		title.style.transform = 'translateZ(100px)';
		desc.style.transform = 'translateZ(100px)';
		sizes.style.transform = 'translateZ(100px)';
		purchase.style.transform = 'translateZ(100px)';
		image.style.transform = 'translateZ(140px) rotateZ(45deg)';
	});
	
	// Mouse out container
	container.addEventListener('mouseleave', (e) => {
		card.style.transform = 'rotateY(0deg) rotateX(0deg)';
		card.style.transition = "all 0.60s ease";
		title.style.transform = "translateZ(0px)";
		desc.style.transform = 'translateZ(0px)';
		sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
		image.style.transform = 'translateZ(0px) rotateZ(0deg)';
	});
});