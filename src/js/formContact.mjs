export default function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form inputs
    const numberInput = document.getElementById('yourNumber').value;
    const number = `+62${numberInput}`; // Prefix with +62
    const name = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation checks
    if (!number || !name || !message) {
        alert('Semua field harus diisi.');
        return;
    }

    // Prepare WhatsApp message
    const whatsappMessage = `Nomor: ${number}\nNama: ${name}\nPesan: ${message}`;

    // Replace with the recipient's WhatsApp number, including country code
    const whatsappNumber = '6285703910062';

    // Build WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp URL
    window.open(whatsappURL, '_blank'); // Open in a new tab
}

document.getElementById('contactForm').addEventListener('submit', sendToWhatsApp);
