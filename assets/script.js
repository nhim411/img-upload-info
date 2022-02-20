/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json');

// Main
const fileUpload = document.querySelector('#mypicture');
const preview = document.querySelector('.preview');
const container = document.querySelector('.container');

const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const modalContent = document.querySelector('#modal-content');

const toastType = new bootstrap.Toast(document.querySelector('#toast-type'), { delay: 3000 });
const toastSize = new bootstrap.Toast(document.querySelector('#toast-size'), { delay: 3000 });

fileUpload.addEventListener('change', () => {
	const file = fileUpload.files[0];
	console.log(file);
	if (!file) return;
	if (!file.name.endsWith('.jpg')) {
		toastType.show();
		return;
	}

	if (!file.size / (1024 * 1024) > 5) {
		toastSize.show();
		return;
	}
	const img = document.createElement('img');
	img.classList.add('img-fluid');
	img.src = URL.createObjectURL(file);
	modalContent.appendChild(img);
	myModal.show();
});
