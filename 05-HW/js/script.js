window.addEventListener('load', function () {



	class Slider {
		constructor(selector) {
			this.selector = document.querySelector(selector);
			this.btnPrev = this.selector.querySelector('.prev');
			this.btnNext = this.selector.querySelector('.next');
			this.images = this.selector.querySelectorAll('.photos img');
			this.i = 0;

			this.btnNext.addEventListener('click', () => {
				clearInterval(inverval);
				this.next();
			});

			this.btnPrev.addEventListener('click', () => {
				clearInterval(inverval);
				this.prev();
			});

		}

		next() {
			this.images[this.i].classList.remove('showed');
			this.i++;
			if (this.i >= this.images.length) {
				this.i = 0;
			}
			this.images[this.i].classList.add('showed');
			console.log(this.images, this.i);
		}

		prev() {
			this.images[this.i].classList.remove('showed');
			this.i--;
			if (this.i < 0) {
				this.i = this.images.length - 1;
			}
			this.images[this.i].classList.add('showed');
			console.log(this.images, this.i);
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