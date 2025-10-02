document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

//   Ambil nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

//   Validasi sederhana
    if(username === 'admin' && password === 'admin123') {
        alert('Login berhasil!');
    } else {
        alert('Login gagal');
    }
});
