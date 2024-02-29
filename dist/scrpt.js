/**
 * CUSTOM CURSOR
 */

const bigCircleElement = document.querySelector('.big-circle');
const smallCircleElement = document.querySelector('.small-circle');

const mouse = {
		x: 0,
		y: 0
	},
	bigCircle = {
		x: 0,
		y: 0
	},
	smallCircle = {
		x: 0,
		y: 0
	};

window.addEventListener('mousemove', e => {
	mouse.x = e.x;
	mouse.y = e.y;
});

const smallCircleSpeed = 0.5;
const bigCircleSpeed = 0.15;

const tick = () => {
	// Move big circle
	bigCircle.x += (mouse.x - bigCircle.x) * bigCircleSpeed;
	bigCircle.y += (mouse.y - bigCircle.y) * bigCircleSpeed;
	bigCircleElement.style.transform = `translate(${bigCircle.x}px, ${bigCircle.y}px)`;

	// Move small circle
	smallCircle.x += (mouse.x - smallCircle.x) * smallCircleSpeed;
	smallCircle.y += (mouse.y - smallCircle.y) * smallCircleSpeed;
	smallCircleElement.style.transform = `translate(${smallCircle.x}px, ${smallCircle.y}px)`;

	window.requestAnimationFrame(tick);
}

tick();

/**
 * MAGNETIC BUTTON
 * https://codepen.io/gusevdigital/pen/QWoOZMV
 */
const button = document.querySelector('.button');
let boundingRect = button.getBoundingClientRect();
window.addEventListener('resize', () => {
	boundingRect = button.getBoundingClientRect();
});

button.addEventListener('mousemove', (e) => {
	const mousePosX = e.pageX - boundingRect.left;
	const mousePosY = e.pageY - boundingRect.top;

	gsap.to(button, {
		x: (mousePosX - boundingRect.width / 2) * 0.4,
		y: (mousePosY - boundingRect.height / 2) * 0.4,
		duration: 0.8,
		ease: 'power3.out',
	});
});

button.addEventListener('mouseleave', () => {
	gsap.to(button, {
		x: 0,
		y: 0,
		duration: 0.8,
		ease: 'elastic.out(1,0.3)'
	});
});
