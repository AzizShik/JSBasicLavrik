window.addEventListener('load', function () {



	class Slider {
		constructor(selector) {
			this.selector = document.querySelector(selector);
			this.btnPrev = this.selector.querySelector('.prev');
			this.btnNext = this.selector.querySelector('.next');
			this.images = this.selector.querySelectorAll('.photos img');
			this.i = 0;
			this.animated = false;

			this.btnNext.addEventListener('click', () => {
				this.next();
			});

			this.btnPrev.addEventListener('click', () => {
				this.prev();
			});

		}

		next() {
			if (!this.animated) {
				let imgHide = this.images[this.i];
				this.i >= this.images.length - 1 ? this.i = 0 : this.i++;
				this.toggleSlide(imgHide, this.images[this.i], 'next')
			}
		}

		prev() {
			if (!this.animated) {
				let imgHide = this.images[this.i];
				this.i <= 0 ? this.i = this.images.length - 1 : this.i--;
				this.toggleSlide(imgHide, this.images[this.i], 'prev')
			}
		}

		toggleSlide(imgHide, showImg, direction) {
			this.animated = true;
			let animate = imgHide.animate([{
				transform: direction === 'prev' ? 'translateX(25%)' : 'translateX(-25%)',
				borderRadius: '25%'
			}, {
				transform: 'translateX(0%)',
				borderRadius: '10px'
			}], {
				duration: 500,
			})
			animate.addEventListener('finish', () => {
				imgHide.classList.remove('showed');
				this.animated = false;
			});
			showImg.classList.add('showed');
		}

	}


	const slider = new Slider('.gallery-1');
	const slider2 = new Slider('.gallery-2');



	const inverval = setInterval(() => {
		slider2.next();
	}, 1000);



});

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
	this.next()
}) */