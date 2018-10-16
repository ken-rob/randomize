const btn = document.getElementById('randomize');
btn.onclick = generatePassword;

const password = document.getElementById('password');

function generatePassword() {
	var passwd = '';
	var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

	for (i = 0; i < 9; i++) {
		let n = Math.floor(Math.random() * charset.length + 1);
		passwd += charset.charAt(n)
	}
	password.textContent = passwd;
}

