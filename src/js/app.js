const dataProduct = [
    {
        id: 1,
        namaProduk: 'komputer',
        gambarProduk: 'komputer.jpg',
        harga: '2000000',
        deskripsi:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorem necessitatibus? Quasi molestiae officia illo at, expedita fugiat sapiente aspernatur saepe omnis voluptas nostrum earum consequuntur vitae maiores, voluptatibus sed?',
    },
    {
        id: 2,
        namaProduk: 'laptop',
        gambarProduk: 'laptop.jpg',
        harga: '6000000',
        deskripsi:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorem necessitatibus? Quasi molestiae officia illo at, expedita fugiat sapiente?',
    },
];

// Ambil elemen dengan ID 'data-loop'
const dataLoopContainer = document.getElementById('data-loop');

// Variabel untuk menyimpan semua elemen HTML produk
let allProductsHTML = '';

// Iterasi dataProduct dan buat elemen HTML
dataProduct.forEach((product) => {
    const productHTML = `
        <div class="rounded-lg border border-gray-400 bg-gray-50 p-6 shadow-xl">
            <div class="h-44 md:h-56 w-full">
                <a href="#">
                    <img class="mx-auto h-full" src="./img/product/${product.gambarProduk}" alt="${product.namaProduk}" />
                </a>
            </div>
            <div class="pt-6">
                <a href="#">
                    <h2 class="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                        ${product.namaProduk}
                    </h2>
                </a>
                <ul class="mt-2 flex items-center gap-4">
                    <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>
                        <p class="text-sm font-medium text-gray-500">Pelayanan Cepat</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        <p class="text-sm font-medium text-gray-500">Harga Terjangkau</p>
                    </li>
                </ul>
                <div class="flex flex-col md:flex-row items-start md:items-center justify-start gap-1 md:gap-4">
                    <p class="text-2xl font-extrabold leading-tight text-gray-900 text-left w-full md:w-auto">
                        Rp ${parseInt(product.harga).toLocaleString('id-ID')}
                    </p>
                    <div class="button-group flex justify-center items-center w-full md:w-auto">
                        <button id="detail-button" class="px-4 py-2 text-black rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>
                        <button id="cart-item" type="button"
                            class="cart-item text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    allProductsHTML += productHTML;
});

// Tambahkan semua elemen ke dalam container sekaligus
dataLoopContainer.innerHTML = allProductsHTML;
console.log(dataProduct); // Pastikan data benar
console.log(allProductsHTML); // Periksa HTML yang dihasilkan .

// Tangkap elemen modal detail produk
const detailProductModal = document.getElementById('detail-product');
const detailTitle = detailProductModal.querySelector('h2');
const detailImage = detailProductModal.querySelector('img');
const detailDescription = detailProductModal.querySelector('p[x-text]');
const detailPrice = detailProductModal.querySelector('p:nth-of-type(2) span');
const detailPriceBeforeDiscount = detailProductModal.querySelector('p:nth-of-type(3) span');

// Fungsi untuk menampilkan modal dengan detail produk
function showProductDetail(product) {
    detailTitle.textContent = product.namaProduk;
    detailImage.src = `./img/product/${product.gambarProduk}`;
    detailImage.alt = product.namaProduk;
    detailDescription.textContent = product.deskripsi;
    detailPrice.textContent = `Rp ${parseInt(product.harga).toLocaleString('id-ID')}`;
    detailPriceBeforeDiscount.textContent = `Rp ${(parseInt(product.harga) * 1.2).toLocaleString('id-ID')}`; // Contoh: Tambahkan 20% untuk harga sebelum diskon
    detailProductModal.style.display = 'flex'; // Tampilkan modal
}

// Fungsi untuk menutup modal
function closeModal() {
    detailProductModal.style.display = 'none';
}

// Tambahkan event listener ke tombol "Detail"
document.querySelectorAll('#detail-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = dataProduct[index]; // Ambil data produk berdasarkan index
        showProductDetail(product);
    });
});

// Tambahkan event listener untuk tombol "Close" di dalam modal
detailProductModal.querySelector('button:last-child').addEventListener('click', closeModal);


// ? Shopping Cart Functionality

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantity();
});
// Variabel untuk menyimpan data cart
let cart = [];

const cartContainer = document.querySelector('.cart-container');
console.log(cartContainer); // Apakah ini null?

// * Fungsi format currency (Rupiah)
function formatCurrency(value) {
    return `Rp. ${parseInt(value).toLocaleString('id-ID')}`;
}

// * Fungsi untuk menambahkan item ke dalam cart
function addToCart(productId) {
    const product = dataProduct.find(item => item.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.quantity * parseInt(existingItem.harga);
    } else {
        cart.push({
            ...product,
            quantity: 1,
            subtotal: parseInt(product.harga),
        });
    }

    renderCart();
    updateCartQuantity(); // Perbarui jumlah di span
}


// * Fungsi untuk merender cart ke halaman
function renderCart() {
    const cartContainer = document.querySelector('.cart-container'); // Pastikan ini adalah elemen HTML yang benar
    if (!cartContainer) {
        console.error("Elemen .cart-container tidak ditemukan di halaman.");
        return;
    }

    // Kosongkan kontainer
    cartContainer.innerHTML = '';

    let totalPesanan = 0;

    // Loop melalui item di cart dan tambahkan ke DOM
    cart.forEach(item => {
        totalPesanan += item.subtotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add(
            'list', 'bg-white', 'w-full', 'px-4', 'py-2', 'sm:px-8', 'sm:py-4', 'flex',
            'flex-col', 'sm:flex-row', 'gap-4', 'sm:gap-8', 'justify-start', 'items-start'
        );

        cartItem.innerHTML = `
            <img src="./img/product/${item.gambarProduk}" alt="${item.namaProduk}" class="w-16 h-16 sm:w-24 sm:h-24 rounded-full">
            <div class="block">
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-5">
                    <h2 class="text-xl sm:text-3xl font-bold">Harga barang: <span class="text-lg sm:text-2xl">${formatCurrency(item.harga)}</span></h2>
                    <div class="action flex justify-start items-start gap-4 text-4xl">
                        <span class="cart-action-button" onclick="updateQuantity(${item.id}, 1)">&plus;</span>
                        <p class="text-base sm:text-2xl font-semibold">${item.quantity}</p>
                        <span class="cart-action-button" onclick="updateQuantity(${item.id}, -1)">&minus;</span>
                    </div>
                </div>
                <p class="text-base sm:text-xl font-semibold">Subtotal :</p>
                <span class="font-extrabold text-xl sm:text-3xl">${formatCurrency(item.subtotal)}</span>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Tambahkan total pesanan
    const totalElement = document.createElement('h2');
    totalElement.classList.add('text-3xl', 'font-bold');
    totalElement.innerHTML = `Total: <span>${formatCurrency(totalPesanan)}</span>`;
    cartContainer.appendChild(totalElement);
}

// * Fungsi untuk mengupdate jumlah barang di cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    } else {
        item.subtotal = item.quantity * parseInt(item.harga);
    }

    renderCart();
    updateCartQuantity(); // Perbarui jumlah di span
}


// * Tambahkan event listener untuk tombol "Add to Cart"
document.querySelectorAll('.cart-item').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(dataProduct[index].id);
    });
});


// *Tambahkan fungsi berikut untuk menghitung total jumlah produk di dalam keranjang:
function getTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// * Tambahkan fungsi untuk memperbarui isi elemen <span>:
function updateCartQuantity() {
    const totalQuantity = getTotalQuantity();
    const cartQuantityElement = document.getElementById('cart-quantity');

    if (cartQuantityElement) {
        // Jika jumlah produk 0, sembunyikan elemen
        cartQuantityElement.textContent = totalQuantity > 0 ? totalQuantity : '';
    }
}
