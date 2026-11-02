// ==========================================
// [BLOK 1] DATA UMKM & STATE UTAMA
// Tambah/edit data bisnis kamu di sini
// ==========================================
const umkmData = [
  {
    id: 1,
    name: "Laundry God",
    category: "Jasa & Care",
    desc: "Layanan cuci sepatu & baju premium 24 jam kilat, wangi, & terpercaya.",
    bgImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    likes: 124
  },
  {
    id: 2,
    name: "Kopi Ndeso Bromo",
    category: "Kuliner",
    desc: "Racikan kopi robusta lokal khas pegunungan Bromo dengan cita rasa otentik.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    likes: 89
  },
  {
    id: 3,
    name: "Sultan Studio 3D",
    category: "Kreatif & IT",
    desc: "Jasa pembuatan aset visual 3D, desain logo, dan pengembangan web interaktif.",
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    likes: 210
  },
  {
    id: 4,
    name: "Batik Modern Co",
    category: "Fashion",
    desc: "Pakaian batik kasual pria dan wanita bahan adem cocok buat harian.",
    bgImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    likes: 56
  }
];

let currentCategory = 'all';
let searchQuery = '';


// ==========================================
// [BLOK 2] PENGAMBILAN ELEMEN DOM
// ==========================================
const gridContainer = document.getElementById('gridContainer');
const searchInput = document.getElementById('searchInput');


// ==========================================
// [BLOK 3] RENDER KARTU KE LAYAR GRID
// ==========================================
function renderCards() {
  gridContainer.innerHTML = '';
  const savedLikes = getSavedLikes();

  // Filter Kategori + Search Keyword
  const filtered = umkmData.filter(item => {
    const matchCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#94a3b8; padding: 40px 0;">Tidak ada UMKM yang ditemukan.</p>`;
    return;
  }

  filtered.forEach(item => {
    const isLiked = savedLikes[item.id] || false;
    const totalLikes = item.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'umkm-card';
    card.innerHTML = `
      <img src="${item.bgImage}" alt="${item.name}" class="card-banner">
      <div class="card-body">
        <span class="card-badge">${item.category}</span>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <a href="https://wa.me/${item.whatsapp}" target="_blank" class="btn-wa">💬 WhatsApp</a>
          <button class="btn-like ${isLiked ? 'liked' : ''}" onclick="toggleLike(${item.id})">
            ❤️ ${totalLikes}
          </button>
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
  });

  // Panggil pendeteksi animasi scroll
  initScrollAnimation();
}


// ==========================================
// [BLOK 4] ANIMASI SCROLL (OBSERVER EFEK MUNCUL)
// ==========================================
function initScrollAnimation() {
  const cards = document.querySelectorAll('.umkm-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Hapus class biar animasinya main lagi tiap kali di-scroll bolak-balik
        entry.target.classList.remove('visible'); 
      }
    });
  }, { threshold: 0.1 }); // Turunkan ke 0.1 biar langsung dapet trigger di HP

  cards.forEach(card => observer.observe(card));
}

// ==========================================
// [BLOK 5] FITUR INTERAKSI (FILTER, SEARCH, LIKE)
// ==========================================
function filterCategory(category, btnElement) {
  currentCategory = category;
  document.querySelectorAll('.pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderCards();
}

function getSavedLikes() {
  return JSON.parse(localStorage.getItem('bizsnap_grid_likes')) || {};
}

function toggleLike(id) {
  const savedLikes = getSavedLikes();
  savedLikes[id] = !savedLikes[id];
  localStorage.setItem('bizsnap_grid_likes', JSON.stringify(savedLikes));
  renderCards();
}

// Pencarian Live
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase();
  renderCards();
});


// ==========================================
// [BLOK 6] JALANKAN PERTAMA KALI
// ==========================================
renderCards();
