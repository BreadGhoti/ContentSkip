/**
 * YouTube Tutorial:
 * https://youtu.be/rbN2FzEZWs0
 */

/**
 * FAKE LOADER
 */
const tl = gsap.timeline();
const loader = document.querySelector('.loader');
const hero = document.querySelector('.hero');
const hero2 = document.querySelector('.hero2');
const title = document.querySelector('h1');
const splitTitle = new SplitType(title, {
	type: 'words'
});
const text = document.querySelector('.text');
const header = document.querySelector('header');
const spline = document.querySelector('spline-viewer');

tl
	.to(loader, {
		opacity: 0,
		duration: 0.3,
		ease: "power1.inOut",
		delay: 1.5
	})
	.to(hero, {
		width: 'calc(100vw - 4rem)',
		height: 'calc(100vh - 4rem)',
		borderRadius: '2rem',
		duration: 0.7,
		ease: "power1.inOut"
	})
	.to(hero2, {
		width: 'calc(100vw - 4rem)',
		height: 'calc(150vh - 4rem)',
		borderRadius: '2rem',
		duration: 0.7,
		ease: "power1.inOut"
	})
	.to(spline, {
		opacity: 1,
		duration: 1,
		ease: "power2.out",
	})
	.to(splitTitle.words, {
		y: 0,
		duration: 1,
		stagger: .15,
		ease: "power2.inOut",
	}, '<')
	.to(text, {
		opacity: 1,
		duration: 1,
		ease: "power2.out",
	}, '-=50%')
	.to(header, {
		opacity: 1,
		duration: 1,
		ease: "power2.out",
	}, '<')

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

const smallCircleSpeed = 1;
const bigCircleSpeed = 0.5;

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
