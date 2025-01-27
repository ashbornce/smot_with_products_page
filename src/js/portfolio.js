const portfolio = [
    {
        id: 1,
        title: 'Project 1',
        image: 'brosur.png',
    },
    {
        id: 2,
        title: 'Project 2',
        image: 'logo.png',
    },
    {
        id: 3,
        title: 'Project 3',
        image: 'stiker.png',
    },
];

// Referensi ke kontainer card
const cardContainer = document.getElementById('card-container');

// Fungsi untuk mengisi kontainer dengan card
function populateCards(data) {
    data.forEach((item) => {
        // Buat elemen card
        const card = document.createElement('div');
        card.className = 'card w-full h-52 bg-white shadow-lg border border-slate-200 rounded-lg overflow-hidden';

        // Isi konten card dengan gambar
        card.innerHTML = `
            <img src="./img/portfolio/${item.image}" alt="${item.title}" class="object-cover w-full h-full">
        `;

        // Tambahkan card ke dalam kontainer
        cardContainer.appendChild(card);
    });
}

// Panggil fungsi untuk mengisi card
populateCards(portfolio);
