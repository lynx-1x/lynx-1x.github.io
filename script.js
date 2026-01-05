document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const phone = "62881036509254"; 
            
            // Format URL WhatsApp
            const waUrl = `https://wa.me/${phone}?text=Halo%20TechTeam,%20nama%20saya%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;
            
            // Buka di tab baru
            window.open(waUrl, '_blank');
            
            alert('Membuka WhatsApp... Silakan kirim pesan yang telah kami siapkan.');
            
            // Reset form setelah kirim
            this.reset();
        });
    }
});