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
	const card = document.querySelector('.card');
	const container = document.querySelector('.container');

	// Mouse moving event
	container.addEventListener('mousemove', (e) => {
		let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
		let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
		card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
	});

	// Mouse in container
	container.addEventListener('mouseenter', (e) => {
		card.style.transition = 'none';
	});

	// Mouse out container
	container.addEventListener('mouseleave', (e) => {
		card.style.transition = 'all 0.75s easy-in-out';
		card.style.transform = 'rotateY(0deg) rotateX(0deg)';
	});
});