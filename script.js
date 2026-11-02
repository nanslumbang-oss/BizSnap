// ==========================================
// [BLOK 1] DATA UMKM & STATE UTAMA
// ==========================================
const umkmData = [
  {
    id: 1,
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    location: "Malang",
    desc: "Cafe modern-minimalis favorit mahasiswa Malang dengan kopi variatif & vibes nugas 24/7.",
    bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    whatsapp: "6282223451237",
    likes: 452
  },
  {
    id: 2,
    name: "Toko Kopi Kongca",
    category: "Cafe",
    location: "Malang",
    desc: "Kedai kopi peranakan klasik dekat Stasiun Malang dengan sajian kopi butter & roti bakar.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    whatsapp: "6285291115758",
    likes: 289
  },
  {
    id: 3,
    name: "AADK Coffee & Eatery",
    category: "Cafe",
    location: "Malang",
    desc: "Space nongkrong estetik di Jl. Bandung Malang dengan area outdoor luas & menu beragam.",
    bgImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628989739939",
    likes: 310
  },
  {
    id: 4,
    name: "Bukit Delight Malang",
    category: "Cafe",
    location: "Malang",
    desc: "Tempat nongkrong outdoor bernuansa romantis di dataran tinggi Malang dengan city light view.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628113039817",
    likes: 520
  }
];

let currentCategory = 'all';
let currentCity = 'all'; // State filter kota baru
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
