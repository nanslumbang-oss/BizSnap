// ==========================================
// [BLOK 1A] DATA CAFE - MALANG
// ==========================================
const cafeMalangData = [
  {
    id: 1,
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.9",
    ratingReviews: "(4.500+ ulasan)",
    address: "Jl. Mayjend Panjaitan No.75, Klojen, Kota Malang",
    desc: "Cafe modern-minimalis favorit mahasiswa Malang dengan kopi variatif & vibes nugas 24/7.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/AABkmLdAP9FaDyS38962i8R8aczHSHmHpJZDWK9Y-XLe9w5k3NuI_X54IHPn0sGWpmxj-xdP2uMWmAOKvWGPCshEH8hHq6rKb5P2jZ-iruiNnvDTyordHWusj6JDwuqW0eqEuPpOuQnqbhO_u7Y8=s1360-w720-h1360-rw",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nakoa+Cafe+Panjaitan+Malang",
    webUrl: "https://instagram.com/nakoa.id",
    likes: 452,
    reviews: [
      "Tempatnya luas banget, wifi kenceng cocok buat nugas.",
      "Kopi susunya pas dan ramah kantong mahasiswa.",
      "Area outdoor-nya adem pas sore hari.",
      "Pelayanan ramah walau suasana cafe lagi ramai.",
      "Banyak spot colokan di setiap meja indoor."
    ]
  },
  {
    id: 2,
    name: "Toko Kopi Kongca",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.5",
    ratingReviews: "(940+ ulasan)",
    address: "Jl. Trunojoyo No.23, Klojen, Kota Malang (Dekat Stasiun)",
    desc: "Kedai kopi peranakan klasik dekat Stasiun Malang dengan sajian kopi butter & roti bakar.",
    bgImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Toko+Kopi+Kongca+Malang",
    webUrl: "https://instagram.com/tokokopikongca",
    likes: 289,
    reviews: [
      "Nuansa jadul kopitiamnya dapet banget!",
      "Kopi butter & roti bakarnya juara.",
      "Cocok buat sarapan pagi sehabis turun dari stasiun.",
      "Harga terjangkau dan rasa otentik.",
      "Tempat nongkrong santai sama teman lama."
    ]
  },
  {
    id: 3,
    name: "AADK Coffee & Eatery",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.6",
    ratingReviews: "(2.600+ ulasan)",
    address: "Jl. Bandung No.28, Klojen, Kota Malang",
    desc: "Space nongkrong estetik di Jl. Bandung Malang dengan area outdoor luas & menu beragam.",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=AADK+Coffee+Eatery+Bandung+Malang",
    webUrl: "https://instagram.com/aadk.coffeeeatery",
    likes: 310,
    reviews: [
      "Desain interiornya sangat estetik buat foto-foto.",
      "Pilihan makanan berat dan makan ringannya lengkap.",
      "Area outdoor-nya sejuk dan lega.",
      "Minuman mocktail dan kopinya enak-enak.",
      "Fasilitas parkir luas dan toilet bersih."
    ]
  },
  {
    id: 4,
    name: "Bukit Delight Malang",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.5",
    ratingReviews: "(5.700+ ulasan)",
    address: "Jl. Joyo Agung No.1, Tlogomas, Lowokwaru, Kota Malang",
    desc: "Tempat nongkrong outdoor bernuansa romantis di dataran tinggi Malang dengan city light view.",
    bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", // Diganti gambar cafe
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bukit+Delight+Malang",
    webUrl: "https://instagram.com/bukitdelight",
    likes: 520,
    reviews: [
      "Pemandangan lampu kota pas malam hari syahdu banget.",
      "Tempat outdoor paling favorit kalau ke Malang.",
      "Cocok buat kumpul ramai-ramai atau nyantai malam.",
      "Suasana dingin pegunungan bikin betah nongkrong.",
      "Harga makanan terjangkau untuk view setingkat ini."
    ]
  },
  {
    id: 5,
    name: "Robucca Coffee",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.7",
    ratingReviews: "(1.800+ ulasan)",
    address: "Jl. Sunandar Priyo Sudarmo No.75, Blimbing, Kota Malang",
    desc: "Cafe ala Jepang industrial modern di kawasan tenang Malang dengan area indoor & outdoor estetik.",
    bgImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Robucca+Coffee+Malang",
    webUrl: "https://instagram.com/robucca.id",
    likes: 380,
    reviews: [
      "Konsep cafe ala Jepang yang simpel dan sangat estetik.",
      "Matcha latte dan kopi spesialitasnya mantap banget.",
      "Suasana tenang, pas buat yang cari ketenangan pas nugas.",
      "Spot outdoor-nya adem dan banyak pepohonan.",
      "Pelayanan cepat dan mas-mas baristanya ramah."
    ]
  },
  {
    id: 6,
    name: "Labore Coffee Eatery",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.6",
    ratingReviews: "(3.100+ ulasan)",
    address: "Jl. Soekarno Hatta No.25, Mojolangu, Lowokwaru, Kota Malang",
    desc: "Salah satu pioneer coffee eatery estetik di jalur pusat kuliner Soekarno Hatta Malang.",
    bgImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Labore+Coffee+Eatery+Malang",
    webUrl: "https://instagram.com/laborecoffeeeatery",
    likes: 410,
    reviews: [
      "Menu makanan beratnya enak-enak, gak cuma jualan tempat.",
      "Vibes cafe-nya mewah tapi harga tetep masuk akal.",
      "Kopi dan pastry-nya selalu fresh tiap hari.",
      "Lokasi strategis di tengah kota Malang.",
      "Tempatnya bersih dan nyaman buat meeting santai."
    ]
  },
  {
    id: 7,
    name: "DW Coffee Shop",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.6",
    ratingReviews: "(2.400+ ulasan)",
    address: "Jl. Bogor No.11, Sumbersari, Lowokwaru, Kota Malang",
    desc: "Kedai kopi legendaris favorit mahasiswa UM & UB dengan suasana homey dan rimbun.",
    bgImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=DW+Coffee+Shop+Malang",
    webUrl: "https://instagram.com/dwcoffeeshop",
    likes: 295,
    reviews: [
      "Vibes rumah tua yang adem dan penuh tanaman hijau.",
      "Harga kopi sangat mahasiswa, cocok buat kantong hemat.",
      "Tempat langganan nugas dari jaman maba.",
      "Wifi stabil dan colokan melimpah di setiap sudut.",
      "Manual brew-nya juara banget rasanya."
    ]
  },
  {
    id: 8,
    name: "Gartenhaus Co",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.6",
    ratingReviews: "(1.900+ ulasan)",
    address: "Jl. Kenanga Indah No.1, Jatimulyo, Lowokwaru, Kota Malang",
    desc: "Cafe tersembunyi bernuansa kebun tropis (hidden gem) yang super sejuk & asri.",
    bgImage: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gartenhaus+Co+Malang",
    webUrl: "https://instagram.com/gartenhausco",
    likes: 365,
    reviews: [
      "Bener-bener hidden gem di Malang, serasa di hutan kecil.",
      "Banyak hewan peliharaan lucu dan tanaman hias unik.",
      "Suasana dingin dan sepi, pas buat refreshing.",
      "Kopi dan camilannya enak-enak.",
      "Spot foto outdoor-nya bagus banget dari segala sisi."
    ]
  }
];

// ==========================================
// [BLOK 1B] DATA CAFE - BATU
// ==========================================
const cafeBatuData = [
  {
    id: 9,
    name: "Retrorika Coffee Bar & Resto",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    ratingScore: "4.6",
    ratingReviews: "(2.500+ ulasan)",
    address: "Jl. Srigading No.10, Kaliputih, Desa Tulungrejo, Bumiaji, Kota Batu",
    desc: "Cafe vintage unik berkonsep eco-friendly penuh tanaman hias & ornamen daur ulang di dataran tinggi Batu.",
    bgImage: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?auto=format&fit=crop&w=800&q=80", // Diganti gambar cafe
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Retrorika+Coffee+Bar+Resto+Batu",
    webUrl: "https://instagram.com/retrorika.id",
    likes: 412,
    reviews: [
      "Konsep barang antik dan tanaman hiasnya estetik parah!",
      "Suasana Bumiaji yang sejuk bikin betah ngopi berjam-jam.",
      "Sangat ramah lingkungan, tidak pakai sedotan plastik.",
      "Makanan tradisional dan kopinya enak banget.",
      "Banyak spot foto unik di setiap sudut cafe."
    ]
  },
  {
    id: 10,
    name: "Pupuk Bawang Cafe & Dining",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    ratingScore: "4.5",
    ratingReviews: "(6.000+ ulasan)",
    address: "Jl. Panglima Sudirman No.116, Pesanggrahan, Kota Batu",
    desc: "Cafe & resto outdoor legendaris di Batu dengan pemandangan langsung ke hamparan sawah & pegunungan.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80", // Diganti gambar cafe
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pupuk+Bawang+Cafe+Dining+Batu",
    webUrl: "https://instagram.com/pupukbawangbatu",
    likes: 580,
    reviews: [
      "View sawah dan gunungnya luar biasa indah pas sore hari.",
      "Cocok banget buat tempat makan bareng keluarga.",
      "Menu makanan Indonesian & Western-nya lezat.",
      "Udara dingin khas Batu makin dapet pas malam hari.",
      "Pelayanan cepat dan tempatnya sangat luas."
    ]
  },
  {
    id: 11,
    name: "Paolo Fest Batu",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    ratingScore: "4.6",
    ratingReviews: "(3.000+ ulasan)",
    address: "Jl. Gondorejo No.1, Oro-Oro Ombo, Kota Batu",
    desc: "Space nongkrong megah bernuansa tropis Mediterania dengan latar pemandangan Gunung Panderman.",
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", // Diganti gambar resto
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paolo+Fest+Batu",
    webUrl: "https://instagram.com/paolo.fest",
    likes: 490,
    reviews: [
      "Vibes cafe-nya serasa lagi liburan di Bali tapi udaranya dingin.",
      "Area outdoor-nya sangat luas dan megah.",
      "Banyak pilihan mocktail segar dan makanan enak.",
      "Live music-nya asik banget kalau malam minggu.",
      "Spot foto arsitekturnya estetik dan kekinian."
    ]
  },
  {
    id: 12,
    name: "Fifteen Celcius Skylounge",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    ratingScore: "4.5",
    ratingReviews: "(1.200+ ulasan)",
    address: "Amarta Hills Hotel, Jl. Lucerne No.51, Ngaglik, Kota Batu",
    desc: "Rooftop skylounge mewah di lereng gunung Batu dengan pemandangan panoramic city light yang spektakuler.",
    bgImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80", // Diganti gambar sky lounge
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fifteen+Celcius+Skylounge+Batu",
    webUrl: "https://instagram.com/15celcius",
    likes: 340,
    reviews: [
      "View pemandangan kota dari atas rooftop-nya terbaik di Batu!",
      "Suasana sangat romantis buat dinner atau nongkrong malam.",
      "Sesuai namanya, udaranya beneran dingin 15 derajat pas malam.",
      "Kopi dan steak-nya kualitas hotel berbintang.",
      "Pelayanan ramah dan tempatnya sangat eksklusif."
    ]
  }
];

const umkmData = [...cafeMalangData, ...cafeBatuData];

// State
let selectedCategory = 'all';
let selectedLocation = 'all';
let savedLikes = JSON.parse(localStorage.getItem('bizsnap_likes')) || {};

// Utility: Format Angka (1200 -> 1.2k)
const formatNumber = (num) => {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
};

// ==========================================
// [BLOK 2] RENDER KARTU (Anti-XSS & Cleaner)
// ==========================================
function renderCards(data) {
  const container = document.getElementById('umkmContainer');
  if (!container) return;
  
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #94a3b8; background: #1e293b; border-radius: 20px; border: 1px dashed #334155;">
        <i class="fa-solid fa-store-slash" style="font-size: 3rem; margin-bottom: 16px; color: #475569;"></i>
        <h3 style="color: #f8fafc; margin-bottom: 8px;">Tidak Ditemukan</h3>
        <p style="font-size: 0.9rem;">Tempat yang kamu cari tidak ada. Coba kata kunci lain.</p>
      </div>
    `;
    return;
  }

  data.forEach((item, index) => {
    const isLiked = savedLikes[item.id] || false;
    const totalLikes = item.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'umkm-card slide-in-left';
    card.style.animationDelay = `${index * 0.05}s`;

    // Menggunakan data-attribute alih-alih inline onclick
    card.innerHTML = `
      <div style="overflow: hidden;">
        <img src="${item.bgImage}" alt="${item.name}" class="card-banner" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';">
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
          <button class="btn btn-like btn-toggle-like ${isLiked ? 'liked' : ''}" data-id="${item.id}" aria-label="Suka tempat ini">
            <i class="fa-solid fa-heart"></i> <span>${formatNumber(totalLikes)}</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ==========================================
// [BLOK 3] INTERAKSI LIKE & MODAL
// ==========================================
function toggleLike(id) {
  if (savedLikes[id]) {
    delete savedLikes[id];
  } else {
    savedLikes[id] = true;
  }
  localStorage.setItem('bizsnap_likes', JSON.stringify(savedLikes));
  filterData();
}

function openModal(id) {
  const item = umkmData.find(x => x.id === id);
  if (!item) return;

  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  
  const reviewsHTML = item.reviews.map(r => `<li><i class="fa-solid fa-quote-left"></i> <span>"${r}"</span></li>`).join('');

  modalBody.innerHTML = `
    <img src="${item.bgImage}" alt="${item.name}" class="modal-banner" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';">
    <div class="modal-body-inner">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #f8fafc; margin-bottom: 8px; letter-spacing: -0.5px;">${item.name}</h2>
      
      <div style="display: flex; align-items: center; gap: 6px; font-size: 0.9rem; color: #fbbf24; margin-bottom: 12px; font-weight: 600;">
        <i class="fa-solid fa-star"></i>
        <strong>${item.ratingScore}</strong>
        <span style="color: #94a3b8; font-weight: 400;">${item.ratingReviews}</span>
      </div>

      <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.5;">
        <i class="fa-solid fa-map-pin" style="color: #38bdf8; margin-top: 3px;"></i>
        <span>${item.address}</span>
      </p>

      <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;">${item.desc}</p>
      
      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px;">
        <h4 style="font-size: 0.9rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-comments" style="color: #38bdf8;"></i> Ulasan Pengunjung
        </h4>
        <ul class="modal-reviews-list">${reviewsHTML}</ul>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <a href="${item.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn" style="flex:1; background: #0284c7; color: #fff; text-decoration: none;">
          <i class="fa-solid fa-map-location-dot"></i> Google Maps
        </a>
        <a href="${item.webUrl}" target="_blank" rel="noopener noreferrer" class="btn" style="flex:1; background: rgba(225, 48, 108, 0.15); color: #e1306c; border: 1px solid rgba(225, 48, 108, 0.3); text-decoration: none;">
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Mencegah background scroll
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Kembalikan scroll
  }
}

// ==========================================
// [BLOK 4] LOGIKA FILTER & DEBOUNCE
// ==========================================
function filterData() {
  const searchVal = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';

  const filtered = umkmData.filter(item => {
    const matchCategory = (selectedCategory === 'all') || (item.category.toLowerCase() === selectedCategory.toLowerCase());
    const matchLocation = (selectedLocation === 'all') || (item.location.toLowerCase() === selectedLocation.toLowerCase());
    const matchSearch = item.name.toLowerCase().includes(searchVal) || 
                        item.desc.toLowerCase().includes(searchVal) ||
                        item.address.toLowerCase().includes(searchVal);

    return matchCategory && matchLocation && matchSearch;
  });

  renderCards(filtered);
}

// Debounce Function (Optimasi Search)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ==========================================
// [BLOK 5] INITIALIZATION & EVENT LISTENERS
// ==========================================
function initApp() {
  renderCards(umkmData);
  setupCustomDropdowns();

  // Event Delegation untuk Like & Detail (Lebih efisien dari onclick HTML)
  document.getElementById('umkmContainer').addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.btn-detail');
    const likeBtn = e.target.closest('.btn-toggle-like');

    if (detailBtn) {
      openModal(parseInt(detailBtn.dataset.id));
    } else if (likeBtn) {
      toggleLike(parseInt(likeBtn.dataset.id));
    }
  });

  // Search dengan Debounce (tunggu 300ms setelah user berhenti ngetik)
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterData, 300));
  }

  // Tutup modal via klik background overlay
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('detailModal');
    if (e.target === modal) closeModal();
  });

  // Tutup modal via tombol Escap
