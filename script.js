// ==========================================
// [DATA CAFE] SILAKAN TAMBAH DATA DI SINI
// ==========================================
const umkmData = [
  // --- DATA JAWA TIMUR (MALANG) ---
  {
    id: 1,
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    province: "Jawa Timur", // PASTIKAN PROVINSI DIISI
    location: "Malang",     // PASTIKAN KOTA DIISI
    ratingScore: "4.9",
    ratingReviews: "(4.500+ ulasan)",
    address: "Jl. Mayjend Panjaitan No.75, Klojen, Kota Malang",
    desc: "Cafe modern-minimalis favorit mahasiswa Malang dengan kopi variatif & vibes nugas 24/7.",
    bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps",
    webUrl: "https://instagram.com",
    likes: 452,
    reviews: ["Tempatnya luas banget, wifi kenceng.", "Kopi susunya pas."]
  },
  {
    id: 2,
    name: "Toko Kopi Kongca",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.5",
    ratingReviews: "(940+ ulasan)",
    address: "Jl. Trunojoyo No.23, Klojen, Kota Malang",
    desc: "Kedai kopi peranakan klasik dekat Stasiun Malang dengan sajian kopi butter & roti bakar.",
    bgImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps",
    webUrl: "https://instagram.com",
    likes: 289,
    reviews: ["Nuansa jadul kopitiamnya dapet banget!"]
  },
  // --- DATA JAWA TIMUR (BATU) ---
  {
    id: 3,
    name: "Pupuk Bawang Cafe & Dining",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    ratingScore: "4.5",
    ratingReviews: "(6.000+ ulasan)",
    address: "Jl. Panglima Sudirman No.116, Batu",
    desc: "Cafe & resto outdoor legendaris di Batu dengan pemandangan langsung ke hamparan sawah.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps",
    webUrl: "https://instagram.com",
    likes: 580,
    reviews: ["View sawah dan gunungnya luar biasa indah.", "Cocok buat keluarga."]
  },
  // --- DUMMY DATA JAWA TENGAH ---
  {
    id: 4,
    name: "Cafe Semarang Kopi",
    category: "Cafe",
    province: "Jawa Tengah", // PROVINSI BARU
    location: "Semarang",    // KOTA BARU
    ratingScore: "4.7",
    ratingReviews: "(1.200+ ulasan)",
    address: "Jl. Pandanaran, Semarang",
    desc: "Kopi legendaris di jantung kota Semarang dengan nuansa kolonial.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps",
    webUrl: "https://instagram.com",
    likes: 150,
    reviews: ["Kopinya mantap!", "Tempatnya bersih."]
  },
  {
    id: 5,
    name: "Solo Cafe Santai",
    category: "Cafe",
    province: "Jawa Tengah",
    location: "Solo",
    ratingScore: "4.6",
    ratingReviews: "(800+ ulasan)",
    address: "Jl. Slamet Riyadi, Solo",
    desc: "Nongkrong asik di Solo dengan harga mahasiswa.",
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps",
    webUrl: "https://instagram.com",
    likes: 200,
    reviews: ["Murah dan enak."]
  },
  // --- DUMMY DATA JAWA BARAT ---
  {
    id: 6,
    name: "Bandung Coffee Art",
    category: "Cafe",
    province: "Jawa Barat", // PROVINSI BARU
    location: "Bandung",    // KOTA BARU
    ratingScore: "4.8",
    ratingReviews: "(5.000+ ulasan)",
    address: "Jl. Braga, Bandung",
    desc: "Cafe estetik di jalan Braga dengan arsitektur Art Deco.",
    bgImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps",
    webUrl: "https://instagram.com",
    likes: 890,
    reviews: ["Sangat estetik!", "Wajib mampir kalau ke Braga."]
  }
];

// ==========================================
// [SISTEM WEB] JANGAN UBAH KECUALI PAHAM
// ==========================================
let selectedCategory = 'all';
let selectedProvince = 'all'; // Menyimpan Provinsi yg dipilih
let selectedCity = 'all';     // Menyimpan Kota yg dipilih
let savedLikes = JSON.parse(localStorage.getItem('bizsnap_likes')) || {};
let observer;

// Format angka
const formatNumber = (num) => num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;

// ==========================================
// FUNGSI MENAMPILKAN KARTU
// ==========================================
function renderCards(data) {
  const container = document.getElementById('umkmContainer');
  if (!container) return;
  
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #94a3b8; background: #1e293b; border-radius: 20px;">
        <p style="font-size: 1rem;">Tempat yang kamu cari tidak ditemukan.</p>
      </div>
    `;
    return;
  }

  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  data.forEach((item, index) => {
    const isLiked = savedLikes[item.id] || false;
    const totalLikes = item.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'umkm-card reveal';
    card.style.transitionDelay = `${(index % 10) * 0.05}s`;

    card.innerHTML = `
      <div style="overflow: hidden;">
        <img src="${item.bgImage}" alt="${item.name}" class="card-banner" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-badge-group">
          <span class="badge category"><i class="fa-solid fa-mug-saucer"></i> ${item.category.toUpperCase()}</span>
          <!-- TAMPILKAN PROVINSI & KOTA DI BADGE -->
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

// ==========================================
// FUNGSI LIKE & FILTER DATA
// ==========================================
function toggleLike(id) {
  if (savedLikes[id]) delete savedLikes[id];
  else savedLikes[id] = true;
  localStorage.setItem('bizsnap_likes', JSON.stringify(savedLikes));
  filterData();
}

function filterData() {
  const searchVal = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
  
  const filtered = umkmData.filter(item => {
    // 1. Filter Kategori
    const matchCategory = (selectedCategory === 'all') || (item.category.toLowerCase() === selectedCategory.toLowerCase());
    
    // 2. Filter Lokasi (Logika Bertingkat)
    let matchLocation = false;
    if (selectedCity !== 'all') {
      // Kalau kota sudah dipilih (misal: Malang), filter berdasarkan kota
      matchLocation = item.location.toLowerCase() === selectedCity.toLowerCase();
    } else if (selectedProvince !== 'all') {
      // Kalau cuma provinsi yang dipilih (misal: Jawa Timur), tampilkan semua kota di provinsi itu
      matchLocation = item.province.toLowerCase() === selectedProvince.toLowerCase();
    } else {
      // Kalau 'Semua Lokasi' dipilih, tampilkan semuanya
      matchLocation = true;
    }

    // 3. Filter Pencarian
    const matchSearch = item.name.toLowerCase().includes(searchVal) || item.desc.toLowerCase().includes(searchVal);
    
    return matchCategory && matchLocation && matchSearch;
  });

  renderCards(filtered);
}

// Jeda saat ngetik
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// ==========================================
// FUNGSI DROPDOWN BERTINGKAT (PROVINSI -> KOTA)
// ==========================================
function setupLocationDropdown() {
  const dropdown = document.getElementById('dropdownLocation');
  const trigger = dropdown?.querySelector('.dropdown-trigger');
  const label = document.getElementById('locationLabel');
  const menu = document.getElementById('locationMenu');

  // Fungsi untuk menampilkan daftar Provinsi
  function renderProvinces() {
    // Ambil daftar provinsi unik dari data
    const provinces = ['all', ...new Set(umkmData.map(item => item.province))];
    
    menu.innerHTML = '';
    provinces.forEach(prov => {
      const text = prov === 'all' ? 'Semua Lokasi' : prov;
      const div = document.createElement('div');
      div.className = `dropdown-item ${selectedProvince === prov ? 'active' : ''}`;
      div.textContent = text;
      div.onclick = (e) => {
        e.stopPropagation();
        if (prov === 'all') {
          selectedProvince = 'all';
          selectedCity = 'all';
          label.textContent = 'Semua Lokasi';
          dropdown.classList.remove('open');
          filterData();
        } else {
          // Jika Provinsi diklik, ganti menu jadi daftar Kota
          selectedProvince = prov;
          selectedCity = 'all';
          renderCities(prov);
        }
      };
      menu.appendChild(div);
    });
  }

  // Fungsi untuk menampilkan daftar Kota berdasarkan Provinsi
  function renderCities(provinceName) {
    // Ambil daftar kota unik HANYA dari provinsi yang dipilih
    const cities = umkmData
      .filter(item => item.province === provinceName)
      .map(item => item.location);
    
    const uniqueCities = ['all', ...new Set(cities)];
    
    menu.innerHTML = '';
    
    // Tambahkan tombol "Kembali"
    const backBtn = document.createElement('div');
    backBtn.className = 'dropdown-item';
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Kembali';
    backBtn.style.color = '#f43f5e'; // Warna merah
    backBtn.onclick = (e) => {
      e.stopPropagation();
      renderProvinces(); // Balikin ke menu provinsi
    };
    menu.appendChild(backBtn);

    // Tampilkan Kota
    uniqueCities.forEach(city => {
      const text = city === 'all' ? `Semua di ${provinceName}` : city;
      const div = document.createElement('div');
      div.className = `dropdown-item ${selectedCity === city ? 'active' : ''}`;
      div.textContent = text;
      div.onclick = (e) => {
        e.stopPropagation();
        selectedCity = city;
        
        // Ubah label tombol utama
        label.textContent = city === 'all' ? provinceName : city;
        
        dropdown.classList.remove('open');
        filterData();
      };
      menu.appendChild(div);
    });
  }

  // Buka tutup dropdown
  trigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.custom-dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    
    // Setiap kali dibuka, pastikan mulai dari menu Provinsi
    if (!dropdown.classList.contains('open')) {
      renderProvinces(); 
    }
    dropdown.classList.toggle('open');
  });
}

// ==========================================
// FUNGSI SETUP KATEGORI (TETAP SEPERTI BIASA)
// ==========================================
function setupCategoryDropdown() {
  const dropdown = document.getElementById('dropdownCategory');
  const trigger = dropdown?.querySelector('.dropdown-trigger');
  const label = document.getElementById('categoryLabel');
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
      selectedCategory = item.getAttribute('data-value');
      dropdown.classList.remove('open');
      filterData();
    });
  });
}

// ==========================================
// FUNGSI MODAL POPUP DETAIL
// ==========================================
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
      <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;"><i class="fa-solid fa-map-pin" style="color: #38bdf8;"></i> ${item.address} (${item.province})</p>
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
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// FUNGSI UTAMA SAAT WEB DIBUKA
// ==========================================
function initApp() {
  renderCards(umkmData); 
  setupCategoryDropdown(); 
  setupLocationDropdown(); // Panggil fungsi dropdown bertingkat

  const container = document.getElementById('umkmContainer');
  if (container) {
    container.addEventListener('click', (e) => {
      const detailBtn = e.target.closest('.btn-detail');
      const likeBtn = e.target.closest('.btn-toggle-like');

      if (detailBtn) openModal(parseInt(detailBtn.dataset.id));
      else if (likeBtn) toggleLike(parseInt(likeBtn.dataset.id));
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterData, 300));
  }

  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailModal')) closeModal();
    
    // Tutup semua dropdown jika klik di luar
    document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
  });
}

    // --- LOGIKA MENU BURGER ---
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');

    function toggleMenu() {
      menuToggle.classList.toggle('active');
      sideMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      
      if (sideMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu);
  }
}

// JALANKAN WEB
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
