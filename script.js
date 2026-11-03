// ==========================================
// [DATA CAFE] SILAKAN TAMBAH DATA DI SINI
// ==========================================
const umkmData = [
  {
    id: 1, // ID harus unik (beda setiap cafe)
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    location: "Malang",
    ratingScore: "4.9",
    ratingReviews: "(4.500+ ulasan)",
    address: "Jl. Mayjend Panjaitan No.75, Klojen, Kota Malang",
    desc: "Cafe modern-minimalis favorit mahasiswa Malang dengan kopi variatif & vibes nugas 24/7.",
    // GANTI LINK GAMBAR DI BAWAH INI (Pastikan link berakhiran .jpg / .png)
    bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nakoa+Cafe+Panjaitan+Malang",
    webUrl: "https://instagram.com/nakoa.id",
    likes: 452, // Angka awal like
    reviews: [
      "Tempatnya luas banget, wifi kenceng.",
      "Kopi susunya pas dan ramah kantong."
    ]
  },
  {
    id: 2,
    name: "Toko Kopi Kongca",
    category: "Cafe",
    location: "Malang",
    ratingScore: "4.5",
    ratingReviews: "(940+ ulasan)",
    address: "Jl. Trunojoyo No.23, Klojen, Kota Malang",
    desc: "Kedai kopi peranakan klasik dekat Stasiun Malang dengan sajian kopi butter & roti bakar.",
    bgImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Toko+Kopi+Kongca+Malang",
    webUrl: "https://instagram.com/tokokopikongca",
    likes: 289,
    reviews: ["Nuansa jadul kopitiamnya dapet banget!", "Kopi butter juara."]
  },
  {
    id: 3,
    name: "Bukit Delight Malang",
    category: "Cafe",
    location: "Malang",
    ratingScore: "4.5",
    ratingReviews: "(5.700+ ulasan)",
    address: "Jl. Joyo Agung No.1, Tlogomas, Malang",
    desc: "Tempat nongkrong outdoor bernuansa romantis di dataran tinggi dengan city light view.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bukit+Delight+Malang",
    webUrl: "https://instagram.com/bukitdelight",
    likes: 520,
    reviews: ["Pemandangan lampu kota malam hari syahdu.", "Cocok buat nyantai malam."]
  },
  {
    id: 4,
    name: "Pupuk Bawang Cafe & Dining",
    category: "Cafe",
    location: "Batu",
    ratingScore: "4.5",
    ratingReviews: "(6.000+ ulasan)",
    address: "Jl. Panglima Sudirman No.116, Batu",
    desc: "Cafe & resto outdoor legendaris di Batu dengan pemandangan langsung ke hamparan sawah.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pupuk+Bawang+Batu",
    webUrl: "https://instagram.com/pupukbawangbatu",
    likes: 580,
    reviews: ["View sawah dan gunungnya luar biasa indah.", "Cocok buat keluarga."]
  },
  {
    id: 5,
    name: "Paolo Fest Batu",
    category: "Cafe",
    location: "Batu",
    ratingScore: "4.6",
    ratingReviews: "(3.000+ ulasan)",
    address: "Jl. Gondorejo No.1, Oro-Oro Ombo, Batu",
    desc: "Space nongkrong megah bernuansa tropis Mediterania dengan latar Gunung Panderman.",
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paolo+Fest+Batu",
    webUrl: "https://instagram.com/paolo.fest",
    likes: 490,
    reviews: ["Vibes cafe-nya serasa di Bali.", "Area outdoor luas dan megah."]
  }
];

// ==========================================
// [SISTEM WEB] JANGAN UBAH KECUALI PAHAM
// ==========================================
let selectedCategory = 'all';
let selectedLocation = 'all';
let savedLikes = JSON.parse(localStorage.getItem('bizsnap_likes')) || {};
let observer;

// Format angka (1000 jadi 1k)
const formatNumber = (num) => num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;

// FUNGSI UNTUK MENAMPILKAN KARTU
function renderCards(data) {
  const container = document.getElementById('umkmContainer');
  if (!container) return;
  
  container.innerHTML = '';

  // Tampilan jika data kosong (tidak ketemu)
  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #94a3b8; background: #1e293b; border-radius: 20px;">
        <p style="font-size: 1rem;">Tempat yang kamu cari tidak ditemukan.</p>
      </div>
    `;
    return;
  }

  if (observer) observer.disconnect();

  // Animasi muncul saat di-scroll
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  // LOOPING UNTUK BIKIN KARTU
  data.forEach((item, index) => {
    const isLiked = savedLikes[item.id] || false;
    const totalLikes = item.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'umkm-card reveal'; // class 'reveal' buat animasi
    card.style.transitionDelay = `${(index % 10) * 0.05}s`; // Munculnya bergantian

    // HTML DI DALAM KARTU
    card.innerHTML = `
      <div style="overflow: hidden;">
        <img src="${item.bgImage}" alt="${item.name}" class="card-banner" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-badge-group">
          <span class="badge category"><i class="fa-solid fa-mug-saucer"></i> ${item.category.toUpperCase()}</span>
          <span class="badge location"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <div class="card-rating-row">
          <i class="fa-solid fa-star"></i>
          <strong>${item.ratingScore}</strong>
          <span>${item.ratingReviews}</span>
        </div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-detail" data-id="${item.id}">
            <i class="fa-solid fa-eye"></i> Detail
          </button>
          <button class="btn btn-like btn-toggle-like ${isLiked ? 'liked' : ''}" data-id="${item.id}">
            <i class="fa-solid fa-heart"></i> <span>${formatNumber(totalLikes)}</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
    
    if (observer) observer.observe(card);
  });
}

// FUNGSI LIKE
function toggleLike(id) {
  if (savedLikes[id]) delete savedLikes[id];
  else savedLikes[id] = true;
  localStorage.setItem('bizsnap_likes', JSON.stringify(savedLikes));
  filterData();
}

// FUNGSI PENCARIAN & FILTER
function filterData() {
  const searchVal = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
  const filtered = umkmData.filter(item => {
    const matchCategory = (selectedCategory === 'all') || (item.category.toLowerCase() === selectedCategory.toLowerCase());
    const matchLocation = (selectedLocation === 'all') || (item.location.toLowerCase() === selectedLocation.toLowerCase());
    const matchSearch = item.name.toLowerCase().includes(searchVal) || item.desc.toLowerCase().includes(searchVal);
    return matchCategory && matchLocation && matchSearch;
  });
  renderCards(filtered);
}

// FUNGSI JEDA SAAT NGETIK (BIAR GAK LAG)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// FUNGSI BUKA POPUP DETAIL
function openModal(id) {
  const item = umkmData.find(x => x.id === id);
  if (!item) return;

  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  const reviewsHTML = item.reviews.map(r => `<li><i class="fa-solid fa-quote-left"></i> <span>"${r}"</span></li>`).join('');

  modalBody.innerHTML = `
    <img src="${item.bgImage}" alt="${item.name}" class="modal-banner">
    <div class="modal-body-inner">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #f8fafc; margin-bottom: 8px;">${item.name}</h2>
      <div style="display: flex; align-items: center; gap: 6px; font-size: 0.9rem; color: #fbbf24; margin-bottom: 12px; font-weight: 600;">
        <i class="fa-solid fa-star"></i> <strong>${item.ratingScore}</strong> <span style="color: #94a3b8;">${item.ratingReviews}</span>
      </div>
      <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;"><i class="fa-solid fa-map-pin" style="color: #38bdf8;"></i> ${item.address}</p>
      <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;">${item.desc}</p>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px;">
        <h4 style="font-size: 0.9rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;"><i class="fa-solid fa-comments" style="color: #38bdf8;"></i> Ulasan Pengunjung</h4>
        <ul class="modal-reviews-list">${reviewsHTML}</ul>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <a href="${item.mapsUrl}" target="_blank" class="btn" style="flex:1; background: #0284c7; color: #fff; text-decoration: none;">
          <i class="fa-solid fa-map-location-dot"></i> Google Maps
        </a>
        <a href="${item.webUrl}" target="_blank" class="btn" style="flex:1; background: rgba(225, 48, 108, 0.15); color: #e1306c; text-decoration: none;">
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Biar background ga bisa di scroll
}

// FUNGSI TUTUP POPUP
function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Balikin scroll
  }
}

// FUNGSI SETUP FILTER DROPDOWN
function setupCustomDropdowns() {
  const setup = (dropdownId, labelId, onSelect) => {
    const dropdown = document.getElementById(dropdownId);
    const trigger = dropdown?.querySelector('.dropdown-trigger');
    const label = document.getElementById(labelId);
    const items = dropdown?.querySelectorAll('.dropdown-item');

    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.custom-dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });

    items?.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        if (label) label.textContent = item.textContent;
        onSelect(item.getAttribute('data-value'));
        dropdown.classList.remove('open');
        filterData();
      });
    });
  };

  setup('dropdownCategory', 'categoryLabel', (val) => selectedCategory = val);
  setup('dropdownLocation', 'locationLabel', (val) => selectedLocation = val);

  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
  });
}

// FUNGSI UTAMA SAAT WEB DIBUKA
function initApp() {
  renderCards(umkmData); // Tampilkan kartu pertama kali
  setupCustomDropdowns(); // Nyalakan filter

  // Deteksi klik pada tombol Detail & Like
  const container = document.getElementById('umkmContainer');
  if (container) {
    container.addEventListener('click', (e) => {
      const detailBtn = e.target.closest('.btn-detail');
      const likeBtn = e.target.closest('.btn-toggle-like');

      if (detailBtn) openModal(parseInt(detailBtn.dataset.id));
      else if (likeBtn) toggleLike(parseInt(likeBtn.dataset.id));
    });
  }

  // Deteksi ketik di kolom pencarian
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterData, 300));
  }

  // Tutup modal jika klik area gelap di luar kotak
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailModal')) closeModal();
  });
}

// JALANKAN WEB
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
    }
