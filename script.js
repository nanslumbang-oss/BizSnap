// ==========================================
// BLOK 1: DATA CAFE (SILAKAN EDIT DI SINI)
// ==========================================
const umkmData = [
  {
    id: 1, // HARUS BEDA TIAP CAFE (1, 2, 3, dst)
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    province: "Jawa Timur", // ISI PROVINSI
    location: "Malang",     // ISI KOTA
    ratingScore: "4.9",
    ratingReviews: "(4.500+ ulasan)",
    address: "Jl. Mayjend Panjaitan No.75, Malang",
    desc: "Cafe modern-minimalis favorit mahasiswa Malang.",
    bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800", // LINK GAMBAR
    mapsUrl: "https://maps.google.com",
    webUrl: "https://instagram.com",
    likes: 452,
    reviews: ["Tempatnya luas banget!", "Kopinya enak."]
  },
  {
    id: 2,
    name: "Pupuk Bawang Cafe",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    ratingScore: "4.5",
    ratingReviews: "(6.000+ ulasan)",
    address: "Jl. Panglima Sudirman, Batu",
    desc: "Cafe legendaris di Batu dengan pemandangan sawah.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
    mapsUrl: "https://maps.google.com",
    webUrl: "https://instagram.com",
    likes: 580,
    reviews: ["View-nya indah banget.", "Cocok buat keluarga."]
  },
  {
    id: 3,
    name: "Semarang Kopi Kita",
    category: "Cafe",
    province: "Jawa Tengah",
    location: "Semarang",
    ratingScore: "4.7",
    ratingReviews: "(1.200+ ulasan)",
    address: "Jl. Pandanaran, Semarang",
    desc: "Kopi legendaris di jantung kota Semarang.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    mapsUrl: "https://maps.google.com",
    webUrl: "https://instagram.com",
    likes: 150,
    reviews: ["Kopinya mantap!"]
  }
];


// ==========================================
// BLOK 2: MESIN PENGATUR WEB (JANGAN DIUBAH)
// ==========================================
let selectedCategory = 'all';
let selectedProvince = 'all';
let selectedCity = 'all';
let savedLikes = JSON.parse(localStorage.getItem('bizsnap_likes')) || {};
let observer;

const formatNumber = (num) => num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;

function renderCards(data) {
  const container = document.getElementById('umkmContainer');
  if (!container) return;
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #94a3b8;"><p>Tempat tidak ditemukan.</p></div>`;
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
      <div style="overflow: hidden;"><img src="${item.bgImage}" class="card-banner"></div>
      <div class="card-body">
        <div class="card-badge-group">
          <span class="badge category"><i class="fa-solid fa-mug-saucer"></i> ${item.category}</span>
          <span class="badge location"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <div class="card-rating-row"><i class="fa-solid fa-star"></i> <strong>${item.ratingScore}</strong> <span>${item.ratingReviews}</span></div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-actions">
          <button class="btn btn-primary btn-detail" data-id="${item.id}"><i class="fa-solid fa-eye"></i> Detail</button>
          <button class="btn btn-like btn-toggle-like ${isLiked ? 'liked' : ''}" data-id="${item.id}"><i class="fa-solid fa-heart"></i> <span>${formatNumber(totalLikes)}</span></button>
        </div>
      </div>
    `;
    container.appendChild(card);
    if (observer) observer.observe(card);
  });
}

function toggleLike(id) {
  if (savedLikes[id]) delete savedLikes[id]; else savedLikes[id] = true;
  localStorage.setItem('bizsnap_likes', JSON.stringify(savedLikes));
  filterData();
}

function filterData() {
  const searchVal = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
  const filtered = umkmData.filter(item => {
    const matchCategory = (selectedCategory === 'all') || (item.category.toLowerCase() === selectedCategory.toLowerCase());
    let matchLocation = false;
    if (selectedCity !== 'all') { matchLocation = item.location.toLowerCase() === selectedCity.toLowerCase(); } 
    else if (selectedProvince !== 'all') { matchLocation = item.province.toLowerCase() === selectedProvince.toLowerCase(); } 
    else { matchLocation = true; }
    const matchSearch = item.name.toLowerCase().includes(searchVal) || item.desc.toLowerCase().includes(searchVal);
    return matchCategory && matchLocation && matchSearch;
  });
  renderCards(filtered);
}

function debounce(func, wait) {
  let timeout;
  return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func(...args), wait); };
}

// ==========================================
// BLOK 3: DROPDOWN PROVINSI -> KOTA
// ==========================================
function setupLocationDropdown() {
  const dropdown = document.getElementById('dropdownLocation');
  const trigger = dropdown?.querySelector('.dropdown-trigger');
  const label = document.getElementById('locationLabel');
  const menu = document.getElementById('locationMenu');

  function renderProvinces() {
    const provinces = ['all', ...new Set(umkmData.map(item => item.province))];
    menu.innerHTML = '';
    provinces.forEach(prov => {
      const div = document.createElement('div');
      div.className = `dropdown-item ${selectedProvince === prov ? 'active' : ''}`;
      div.textContent = prov === 'all' ? 'Semua Lokasi' : prov;
      div.onclick = (e) => {
        e.stopPropagation();
        if (prov === 'all') {
          selectedProvince = 'all'; selectedCity = 'all'; label.textContent = 'Semua Lokasi';
          dropdown.classList.remove('open'); filterData();
        } else { selectedProvince = prov; selectedCity = 'all'; renderCities(prov); }
      };
      menu.appendChild(div);
    });
  }

  function renderCities(provinceName) {
    const cities = umkmData.filter(item => item.province === provinceName).map(item => item.location);
    const uniqueCities = ['all', ...new Set(cities)];
    menu.innerHTML = '';
    
    const backBtn = document.createElement('div');
    backBtn.className = 'dropdown-item';
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Kembali';
    backBtn.style.color = '#f43f5e';
    backBtn.onclick = (e) => { e.stopPropagation(); renderProvinces(); };
    menu.appendChild(backBtn);

    uniqueCities.forEach(city => {
      const div = document.createElement('div');
      div.className = `dropdown-item ${selectedCity === city ? 'active' : ''}`;
      div.textContent = city === 'all' ? `Semua di ${provinceName}` : city;
      div.onclick = (e) => {
        e.stopPropagation(); selectedCity = city;
        label.textContent = city === 'all' ? provinceName : city;
        dropdown.classList.remove('open'); filterData();
      };
      menu.appendChild(div);
    });
  }

  trigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.custom-dropdown').forEach(d => { if (d !== dropdown) d.classList.remove('open'); });
    if (!dropdown.classList.contains('open')) renderProvinces(); 
    dropdown.classList.toggle('open');
  });
}

function setupCategoryDropdown() {
  const dropdown = document.getElementById('dropdownCategory');
  const trigger = dropdown?.querySelector('.dropdown-trigger');
  const label = document.getElementById('categoryLabel');
  const items = dropdown?.querySelectorAll('.dropdown-item');

  trigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.custom-dropdown').forEach(d => { if (d !== dropdown) d.classList.remove('open'); });
    dropdown.classList.toggle('open');
  });

  items?.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation(); items.forEach(i => i.classList.remove('active')); item.classList.add('active');
      if (label) label.textContent = item.textContent;
      selectedCategory = item.getAttribute('data-value');
      dropdown.classList.remove('open'); filterData();
    });
  });
}

// ==========================================
// BLOK 4: POPUP DETAIL (MODAL)
// ==========================================
function openModal(id) {
  const item = umkmData.find(x => x.id === id);
  if (!item) return;
  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  const reviewsHTML = item.reviews.map(r => `<li><i class="fa-solid fa-quote-left"></i> <span>"${r}"</span></li>`).join('');

  modalBody.innerHTML = `
    <img src="${item.bgImage}" class="modal-banner">
    <div class="modal-body-inner">
      <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 8px;">${item.name}</h2>
      <div style="color: #fbbf24; margin-bottom: 12px; font-weight: 600;"><i class="fa-solid fa-star"></i> ${item.ratingScore} <span style="color: #94a3b8;">${item.ratingReviews}</span></div>
      <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;"><i class="fa-solid fa-map-pin" style="color: #38bdf8;"></i> ${item.address} (${item.province})</p>
      <p style="font-size: 0.9rem; color: #cbd5e1; margin-bottom: 20px;">${item.desc}</p>
      <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px;"><i class="fa-solid fa-comments" style="color: #38bdf8;"></i> Ulasan</h4>
      <ul class="modal-reviews-list">${reviewsHTML}</ul>
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <a href="${item.mapsUrl}" target="_blank" class="btn" style="flex:1; background: #0284c7; color: #fff; text-decoration: none;">Maps</a>
        <a href="${item.webUrl}" target="_blank" class="btn" style="flex:1; background: rgba(225, 48, 108, 0.15); color: #e1306c; text-decoration: none;">Instagram</a>
      </div>
    </div>
  `;
  modal.classList.add('active'); document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

// ==========================================
// BLOK 5: FUNGSI UTAMA (MENYALAKAN WEB)
// ==========================================
function initApp() {
  renderCards(umkmData); 
  setupCategoryDropdown(); 
  setupLocationDropdown(); 

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
  if (searchInput) searchInput.addEventListener('input', debounce(filterData, 300));

  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailModal')) closeModal();
    document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
  });

  // --- LOGIKA MENU GARIS 3 (BURGER) ---
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';
  }

  if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
  if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu);
  // ------------------------------------

  // JALANKAN WEB
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
      }
