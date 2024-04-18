// ——————————————————————————————————————————————————
// Navigation
// ——————————————————————————————————————————————————

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('#hamburger');
	const nav = document.querySelector('#nav');
	const navLi = document.querySelectorAll('#nav > li');
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('mobile-hamburger');
		nav.classList.toggle('show-nav');
	});
	navLi.forEach((li) => {
		li.addEventListener('click', () => {
			nav.classList.remove('show-nav');
			hamburger.classList.remove('mobile-hamburger');
		});
	});
});

// ——————————————————————————————————————————————————
// Console Text
// ——————————————————————————————————————————————————

consoleText(
	['Web applications', 'Mobile applications', 'Cloud technologies'],
	'heading',
);

function consoleText(words, id) {
	let visible = true;
	let console = document.getElementById('console');
	let container = document.getElementById('console-container');
	let letterCount = 1;
	let x = 1;
	let waiting = false;
	let target = document.getElementById(id);

	let btns = document.querySelectorAll('.btn-service');

	let i = 0;
	const maxLoop = words.length;
	window.setInterval(() => {
		if (letterCount === 0 && !waiting) {
			i++;
			if (i >= maxLoop) i = 0;

			waiting = true;
			target.innerHTML = words[i].substring(0, letterCount);
			window.setTimeout(function () {
				x = 1;
				letterCount += x;
				waiting = false;
				btns.forEach((btn, btnIndex) => {
					btn.classList.remove('btn-white');
					btn.classList.remove('btn-blue');
					if (btnIndex === i) {
						btn.classList.add('btn-blue');
					} else {
						btn.classList.add('btn-white');
					}
				});
			}, 1000);
		} else if (letterCount === words[i].length + 1 && !waiting) {
			waiting = true;
			window.setTimeout(function () {
				x = -1;
				letterCount += x;
				waiting = false;
			}, 5000);
		} else if (!waiting) {
			target.innerHTML = words[i].substring(0, letterCount);
			letterCount += x;
		}
	}, 120);

	window.setInterval(function () {
		console.classList.remove('opacity-0');
		if (visible) console.classList.add('opacity-0');

		visible = !visible;
	}, 500);
}

// ——————————————————————————————————————————————————
// Dev Icons
// ——————————————————————————————————————————————————

const SCROLL_SPEED = 0.3;
const CANVAS_WIDTH = 2800;

const NOISE_SPEED = 0.004;
const NOISE_AMOUNT = 5;

const deviconsImgs = document.querySelector('.devicons');
const deviconSpecs = [
	{
		s: 0.6,
		x: 1134,
		y: 45,
		src: '/assets/img/devicons/jest-plain.svg',
	},
	{
		s: 0.6,
		x: 1620,
		y: 271,
		src: '/assets/img/devicons/apple-original.svg',
	},
	{
		s: 0.6,
		x: 1761,
		y: 372,
		src: '/assets/img/devicons/github-original.svg',
	},
	{
		s: 0.6,
		x: 2499,
		y: 79,
		src: '/assets/img/devicons/googlecloud-original.svg',
	},
	{
		s: 0.6,
		x: 2704,
		y: 334,
		src: '/assets/img/devicons/linux-original.svg',
	},
	{
		s: 0.6,
		x: 2271,
		y: 356,
		src: '/assets/img/devicons/materialui-plain.svg',
	},
	{
		s: 0.6,
		x: 795,
		y: 226,
		src: '/assets/img/devicons/cypress.svg',
	},
	{
		s: 0.6,
		x: 276,
		y: 256,
		src: '/assets/img/devicons/redux-original.svg',
	},
	{
		s: 0.6,
		x: 1210,
		y: 365,
		src: '/assets/img/devicons/sass-original.svg',
	},
	{
		s: 0.6,
		x: 444,
		y: 193,
		src: '/assets/img/devicons/socketio-original.svg',
	},
	{
		s: 0.6,
		x: 2545,
		y: 387,
		src: '/assets/img/devicons/tensorflow-original.svg',
	},
	{
		s: 0.8,
		x: 1303,
		y: 193,
		src: '/assets/img/devicons/amazonwebservices-original.svg',
	},
	{ s: 0.8, x: 907, y: 88, src: '/assets/img/devicons/dart-original.svg' },
	{
		s: 0.8,
		x: 633,
		y: 320,
		src: '/assets/img/devicons/docker-original.svg',
	},
	{ s: 0.8, x: 323, y: 60, src: '/assets/img/devicons/electron-original.svg' },
	{
		s: 0.8,
		x: 129,
		y: 357,
		src: '/assets/img/devicons/firebase-plain.svg',
	},
	{
		s: 0.8,
		x: 1440,
		y: 342,
		src: '/assets/img/devicons/git-original.svg',
	},
	{
		s: 0.8,
		x: 1929,
		y: 293,
		src: '/assets/img/devicons/jamstack-original.svg',
	},
	{
		s: 0.8,
		x: 2135,
		y: 198,
		src: '/assets/img/devicons/laravel-plain.svg',
	},
	{
		s: 0.8,
		x: 2276,
		y: 82,
		src: '/assets/img/devicons/php-original.svg',
	},
	{
		s: 0.8,
		x: 2654,
		y: 182,
		src: '/assets/img/devicons/redis-original.svg',
	},
	{
		s: 0.8,
		x: 2783,
		y: 60,
		src: '/assets/img/devicons/tailwindcss-plain.svg',
	},
	{ x: 1519, y: 118, src: '/assets/img/devicons/angularjs-original.svg' },
	{ x: 1071, y: 233, src: '/assets/img/devicons/html5-original.svg' },
	{ x: 1773, y: 148, src: '/assets/img/devicons/css3-original-wordmark.svg' },
	{ x: 2098, y: 385, src: '/assets/img/devicons/javascript-original.svg' },
	{ x: 2423, y: 244, src: '/assets/img/devicons/nestjs-plain.svg' },
	{ x: 901, y: 385, src: '/assets/img/devicons/flutter-original.svg' },
	{ x: 624, y: 111, src: '/assets/img/devicons/nodejs-original-wordmark.svg' },
	{ x: 75, y: 103, src: '/assets/img/devicons/postgresql-original.svg' },
	{ x: 413, y: 367, src: '/assets/img/devicons/typescript-original.svg' },
	{ x: 2895, y: 271, src: '/assets/img/devicons/express-original.svg' },
	{ x: 1990, y: 75, src: '/assets/img/devicons/ionic-original.svg' },
];

class Devicons {
	constructor(specs) {
		this.devicons = [];

		specs.forEach((spec, index) => {
			this.devicons.push(new Devicon(index, spec));
		});

		requestAnimationFrame(this.update.bind(this));
	}

	update() {
		this.devicons.forEach((devicon) => devicon.update());
		this.raf = requestAnimationFrame(this.update.bind(this));
	}
}

class Devicon {
	constructor(index, { x, y, s = 1, src }) {
		this.index = index;
		this.x = x;
		this.y = y;
		this.scale = s;
		this.src = src;

		this.noiseSeedX = Math.floor(Math.random() * 64000);
		this.noiseSeedY = Math.floor(Math.random() * 64000);

		this.img = document.createElement('img');
		this.img.src = this.src;
		this.img.loading = 'lazy';
		this.img.className = `devicon devicon${this.index + 1}`;

		this.img.style.transform = `scale(${this.scale})`;
		this.img.style.top = `${(this.y / 608) * 100}%`;

		deviconsImgs.appendChild(this.img);
	}

	update() {
		this.noiseSeedX += NOISE_SPEED;
		this.noiseSeedY += NOISE_SPEED;
		let randomX = noise.simplex2(this.noiseSeedX, 0);
		let randomY = noise.simplex2(this.noiseSeedY, 0);

		this.x -= SCROLL_SPEED;
		this.xWithNoise = this.x + randomX * NOISE_AMOUNT;
		this.yWithNoise = this.y + randomY * NOISE_AMOUNT;

		if (this.x < -200) {
			this.x = CANVAS_WIDTH;
		}

		// this.x = this.x < -200 ? CANVAS_WIDTH : this.x - SCROLL_SPEED;
		this.img.style.left = `${this.xWithNoise}px`;
		this.img.style.top = `${(this.yWithNoise / 608) * 100}%`;
	}
}

// For perlin noise
noise.seed(Math.floor(Math.random() * 64000));

const devicons = new Devicons(deviconSpecs);

// ——————————————————————————————————————————————————
// Send email
// ——————————————————————————————————————————————————
const URL =
	'https://0lb5gvw6pi.execute-api.us-east-1.amazonaws.com/TheAppHub/submit';
let erorros = [];

document.addEventListener('DOMContentLoaded', () => {
	const submit = document.querySelector('#submit');
	const sending = document.querySelector('#sending');
	const form = document.querySelector('#contactForm');
	const formOverlay = document.querySelector('#formOverlay');

	submit.addEventListener('click', (event) => {
		event.preventDefault();

		// Check mobile
		const mobile = document.querySelector('input[name="mobileNo"]').value;
		if (mobile !== '') return;

		showSendingBtn(submit, sending);

		const name = document.querySelector('input[name="name"]').value;
		const email = document.querySelector('input[name="email"]').value;
		const message = document.querySelector('textarea[name="message"]').value;

		fetch(URL, {
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			method: 'POST',
			body: JSON.stringify({
				name,
				email,
				message,
			}),
		}).then(() => {
			showSubmitBtn(submit, sending);

			setTimeout(() => {
				form.reset();
				formOverlay.classList.add('puff-out');
			}, 3500);
		});

		setTimeout(() => {
			showSubmitBtn(submit, sending);

			formOverlay.classList.add('scale-in-center');
		}, 2000);

		setTimeout(() => {
			form.reset();
			formOverlay.classList.add('puff-out');
		}, 7000);
	});
});

function showSendingBtn(submit, send) {
	submit.classList.add('hidden');

	sending.classList.remove('hidden');
	sending.classList.add('inline-flex');
}

function showSubmitBtn(submit, send) {
	submit.classList.remove('hidden');

	sending.classList.remove('inline-flex');
	sending.classList.add('hidden');
}

// function ValidateEmail(mail) {
// 	if (
// 		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
// 	) {
// 		return true;
// 	}
// 	alert('You have entered an invalid email address!');
// 	return false;
// }
