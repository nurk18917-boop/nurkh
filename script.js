document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    // Menampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.style.backgroundColor = '#d4edda';
    resultDiv.innerHTML = `<strong>Data Diterima!</strong><br>Nama: ${nama}<br>Email: ${email}`;
    
    // Reset form
    document.getElementById('contactForm').reset();
});
