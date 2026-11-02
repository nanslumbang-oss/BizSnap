// ==========================================
// [BLOK 1] DATA UMKM & STATE UTAMA
// ==========================================
const umkmData = [
  {
    id: 1,
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    province: "Jawa Timur",
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
    province: "Jawa Timur",
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
    province: "Jawa Timur",
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
    province: "Jawa Timur",
    location: "Malang",
    desc: "Tempat nongkrong outdoor bernuansa romantis di dataran tinggi Malang dengan city light view.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628113039817",
    likes: 520
  }
];

let currentCategory = 'all';
let currentProvince = 'all';
let currentCity = 'all';
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

  const filtered = umkmData.filter(item => {
    const matchCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchProv = currentProvince === 'all' || item.province === currentProvince;
    const matchCity = currentCity === 'all' || item.location === currentCity;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) || 
                        item.desc.toLowerCase().includes(searchQuery) ||
                        item.location.toLowerCase().includes(searchQuery);
    return matchCategory && matchProv && matchCity && matchSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#94a3b8; padding: 40px 0;">Tidak ada Cafe/UMKM yang ditemukan.</p>`;
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
        <div class="card-badge-group">
          <span class="card-badge">${item.category}</span>
          <span class="card-location">📍 ${item.location}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
        <button class="btn-detail" onclick="openModal(${item.id})">👉🏻Lihat Detail👈🏻</button>
        <button class="btn-like ${isLiked ? 'liked' : ''}" onclick="toggleLike(${item.id})">
          ❤️ ${totalLikes}
      </button>
    </div>
    
    `;
    gridContainer.appendChild(card);
  });

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
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}


// ==========================================
// [BLOK 5] FITUR INTERAKSI & DROPDOWN MENU
// ==========================================
function getSavedLikes() {
  return JSON.parse(localStorage.getItem('bizsnap_grid_likes')) || {};
}

function toggleLike(id) {
  const savedLikes = getSavedLikes();
  savedLikes[id] = !savedLikes[id];
  localStorage.setItem('bizsnap_grid_likes', JSON.stringify(savedLikes));
  renderCards();
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderCards();
  });
}

function toggleMenu(id, event) {
  if (event) event.stopPropagation();
  const target = document.getElementById(id);
  const allMenus = document.querySelectorAll('.dropdown-pop');
  
  allMenus.forEach(m => {
    if (m !== target) m.classList.remove('show');
  });
  
  target.classList.toggle('show');
}

function selectCategory(catKey, labelText, btn) {
  currentCategory = catKey;
  document.getElementById('labelCategory').innerText = labelText;
  document.querySelectorAll('#catMenu .pop-item').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  toggleMenu('catMenu');
  renderCards();
}

function openCities(provName) {
  document.getElementById('provView').style.display = 'none';
  document.getElementById('cityView-Jatim').style.display = 'block';
}

function backToProv() {
  document.getElementById('provView').style.display = 'block';
  document.getElementById('cityView-Jatim').style.display = 'none';
}

function selectLocation(provKey, cityKey, labelText, btn) {
  currentProvince = provKey;
  currentCity = cityKey;
  document.getElementById('labelLocation').innerText = labelText;
  toggleMenu('locMenu');
  backToProv();
  renderCards();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown-wrapper')) {
    document.querySelectorAll('.dropdown-pop').forEach(m => m.classList.remove('show'));
  }
});

// Buka Modal Detail Tempat
function openModal(id) {
  const item = umkmData.find(d => d.id === id);
  if (!item) return;

  const modalBody = document.getElementById('modalBody');
  const reviewHTML = item.reviews.map(r => `<div class="review-item">"${r}"</div>`).join('');

  modalBody.innerHTML = ` 
    <img src="${item.bgImage}" class="modal-banner" alt="${item.name}">
    <div class="modal-details">
      <div class="modal-meta">
        <span class="card-badge">${item.category}</span>
        <span class="rating-badge">${item.rating}</span>
      </div>
      <h2 style="font-size: 1.4rem; font-weight: 900;">${item.name}</h2>
      <p class="modal-address">📍 ${item.address}</p>
      <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">${item.desc}</p>
      
      <div class="review-section">
        <div class="review-title">💬 5 Ulasan Pengunjung:</div>
        <div class="review-list">
          ${reviewHTML}
        </div>
      </div>

      <div class="modal-actions">
        <a href="${item.mapsUrl}" target="_blank" class="btn-action-maps">🗺️ Google Maps</a>
        <a href="${item.webUrl}" target="_blank" class="btn-action-web">🌐 Sosmed / Web</a>
      </div>
    </div>
  `;

  document.getElementById('detailModal').classList.add('show');
}

// Tutup Modal
function closeModal() {
  document.getElementById('detailModal').classList.remove('show');
}

// Tutup modal jika klik di luar box
document.getElementById('detailModal').addEventListener('click', (e) => {
  if (e.target.id === 'detailModal') closeModal();
});


// ==========================================
// [BLOK 6] JALANKAN SAAT AWAL BUKA WEB
// ==========================================
renderCards();
