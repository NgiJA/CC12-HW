// username === '' -> username is required
// password === '' -> password is required

// username === 'admin' && password === '1234' -> Hello, admin
// username === 'john' && password === 'qwerty' -> Heelo, john
// else --> invalid username or password

let username = prompt('Enter username');
let password = prompt('Enter password');

if (username === null || username.trim() === '') {
	// ไม่ใส่ username
	alert('username is required');
} else if (password === null || password.trim() === '') {
	// ไม่ใส่ password
	alert('password is required');
} else {
	if (
		(username === 'admin' && password === '1234') ||
		(username === 'john' && password === 'qwerty')
	) {
		alert('Hello' + ' ' + username);
	} else {
		alert('Invalid username or password');
	}
}
