// ==========================================
// [BLOK 1A] DATA CAFE - MALANG (FOTO GMAPS)
// ==========================================
const cafeMalangData = [
  {
    id: 1,
    name: "Nakoa Cafe Panjaitan",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Malang",
    rating: "⭐ 4.9 (4.500+ Ulasan)",
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
    rating: "⭐ 4.5 (940+ Ulasan)",
    address: "Jl. Trunojoyo No.23, Klojen, Kota Malang (Dekat Stasiun)",
    desc: "Kedai kopi peranakan klasik dekat Stasiun Malang dengan sajian kopi butter & roti bakar.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipM5x9K8w2J1v0C3m4L5k6J7H8g9F0d1e2S3a4B5=s800-w800",
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
    rating: "⭐ 4.6 (2.600+ Ulasan)",
    address: "Jl. Bandung No.28, Klojen, Kota Malang",
    desc: "Space nongkrong estetik di Jl. Bandung Malang dengan area outdoor luas & menu beragam.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipP3o8R1k6N9m2K5J4L7f8G9d0E1s2A3b4C5d6E7=s800-w800",
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
    rating: "⭐ 4.5 (5.700+ Ulasan)",
    address: "Jl. Joyo Agung No.1, Tlogomas, Lowokwaru, Kota Malang",
    desc: "Tempat nongkrong outdoor bernuansa romantis di dataran tinggi Malang dengan city light view.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipO9m2K5J4L7f8G9d0E1s2A3b4C5d6E7f8G9h0I1=s800-w800",
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
    rating: "⭐ 4.7 (1.800+ Ulasan)",
    address: "Jl. Sunandar Priyo Sudarmo No.75, Blimbing, Kota Malang",
    desc: "Cafe ala Jepang industrial modern di kawasan tenang Malang dengan area indoor & outdoor estetik.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipQ1x2Y3z4A5b6C7d8E9f0G1h2I3j4K5l6M7n8O9=s800-w800",
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
    rating: "⭐ 4.6 (3.100+ Ulasan)",
    address: "Jl. Soekarno Hatta No.25, Mojolangu, Lowokwaru, Kota Malang",
    desc: "Salah satu pioneer coffee eatery estetik di jalur pusat kuliner Soekarno Hatta Malang.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipR8S9T0u1V2w3X4y5Z6a7B8c9D0e1F2g3H4i5J6=s800-w800",
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
    rating: "⭐ 4.6 (2.400+ Ulasan)",
    address: "Jl. Bogor No.11, Sumbersari, Lowokwaru, Kota Malang",
    desc: "Kedai kopi legendaris favorit mahasiswa UM & UB dengan suasana homey dan rimbun.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipT2u3V4w5X6y7Z8a9B0c1D2e3F4g5H6i7J8k9L0=s800-w800",
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
    rating: "⭐ 4.6 (1.900+ Ulasan)",
    address: "Jl. Kenanga Indah No.1, Jatimulyo, Lowokwaru, Kota Malang",
    desc: "Cafe tersembunyi bernuansa kebun tropis (hidden gem) yang super sejuk & asri.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipV6w7X8y9Z0a1B2c3D4e5F6g7H8i9J0k1L2m3N4=s800-w800",
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
// [BLOK 1B] DATA CAFE - BATU (FOTO GMAPS)
// ==========================================
const cafeBatuData = [
  {
    id: 9,
    name: "Retrorika Coffee Bar & Resto",
    category: "Cafe",
    province: "Jawa Timur",
    location: "Batu",
    rating: "⭐ 4.6 (2.500+ Ulasan)",
    address: "Jl. Srigading No.10, Kaliputih, Desa Tulungrejo, Bumiaji, Kota Batu",
    desc: "Cafe vintage unik berkonsep eco-friendly penuh tanaman hias & ornamen daur ulang di dataran tinggi Batu.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipX8y9Z0a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6=s800-w800",
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
    rating: "⭐ 4.5 (6.000+ Ulasan)",
    address: "Jl. Panglima Sudirman No.116, Pesanggrahan, Kota Batu",
    desc: "Cafe & resto outdoor legendaris di Batu dengan pemandangan langsung ke hamparan sawah & pegunungan.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipZ0a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8=s800-w800",
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
    rating: "⭐ 4.6 (3.000+ Ulasan)",
    address: "Jl. Gondorejo No.1, Oro-Oro Ombo, Kota Batu",
    desc: "Space nongkrong megah bernuansa tropis Mediterania dengan latar pemandangan Gunung Panderman.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipB2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0=s800-w800",
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
    rating: "⭐ 4.5 (1.200+ Ulasan)",
    address: "Amarta Hills Hotel, Jl. Lucerne No.51, Ngaglik, Kota Batu",
    desc: "Rooftop skylounge mewah di lereng gunung Batu dengan pemandangan panoramic city light yang spektakuler.",
    bgImage: "https://lh3.googleusercontent.com/p/AF1QipD4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0u1V2=s800-w800",
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


// ==========================================
// [BLOK 1C] GABUNGAN DATA & STATE UTAMA
// ==========================================
const umkmData = [
  ...cafeMalangData,
  ...cafeBatuData
];

let currentCategory = 'all';
let currentProvince = 'all';
let currentCity = 'all';
let searchQuery = '';

// ==========================================
// [BLOK 2] RENDER KARTU KE LAYAR GRID
// ==========================================
function renderCards() {
  const gridContainer = document.getElementById('gridContainer');
  if (!gridContainer) return;

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
    gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#94a3b8; padding: 40px 0;">Tidak ada tempat yang ditemukan.</p>`;
    return;
  }

      filtered.forEach(item => {
    const isLiked = savedLikes[item.id] || false;
    const totalLikes = item.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'umkm-card animated';
    card.innerHTML = `
      <img src="${item.bgImage}" id="img-card-${item.id}" alt="${item.name}" class="card-banner">
      <div class="card-body">
        <div class="card-badge-group">
          <span class="card-badge">${item.category}</span>
          <span class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <button class="btn-detail" onclick="openModal(${item.id})">
            <i class="fa-solid fa-eye"></i> Lihat Detail
          </button>
          <button class="btn-like ${isLiked ? 'liked' : ''}" onclick="toggleLike(${item.id})">
            <i class="fa-solid fa-heart"></i> ${totalLikes}
          </button>
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

// ==========================================
// [BLOK 3] INTERAKSI & MODAL POP-UP
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

function toggleMenu(id, event) {
  if (event) event.stopPropagation();
  const target = document.getElementById(id);
  const allMenus = document.querySelectorAll('.dropdown-pop');
  
  allMenus.forEach(m => {
    if (m !== target) m.classList.remove('show');
  });
  
  if (target) target.classList.toggle('show');
}

function selectCategory(catKey, labelText, iconClass, btn) {
  currentCategory = catKey;
  document.getElementById('labelCategory').innerText = labelText;
  if (iconClass) {
    document.getElementById('iconCategory').className = iconClass + ' icon-left';
  }
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

function selectLocation(provKey, cityKey, labelText, iconClass, btn) {
  currentProvince = provKey;
  currentCity = cityKey;
  document.getElementById('labelLocation').innerText = labelText;
  if (iconClass) {
    document.getElementById('iconLocation').className = iconClass + ' icon-left';
  }
  toggleMenu('locMenu');
  backToProv();
  renderCards();
}

// Modal Detail Tempat
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
      <h2 style="font-size: 1.3rem; font-weight: 900; color:#fff;">${item.name}</h2>
      <p class="modal-address"><i class="fa-solid fa-location-dot"></i> ${item.address}</p>
      <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">${item.desc}</p>
      
      <div class="review-section">
        <div class="review-title"><i class="fa-solid fa-comments"></i> 5 Ulasan Pengunjung:</div>
        <div class="review-list">
          ${reviewHTML}
        </div>
      </div>

      <div class="modal-actions">
        <a href="${item.mapsUrl}" target="_blank" class="btn-action-maps">
          <i class="fa-solid fa-map-location-dot"></i> Google Maps
        </a>
        <a href="${item.webUrl}" target="_blank" class="btn-action-web">
          <i class="fa-solid fa-globe"></i> Sosmed / Web
        </a>
      </div>
    </div>
  `;

  document.getElementById('detailModal').classList.add('show');
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('show');
}

// Inisialisasi Event Listener setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderCards();
    });
  }

  const detailModal = document.getElementById('detailModal');
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target.id === 'detailModal') closeModal();
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-wrapper')) {
      document.querySelectorAll('.dropdown-pop').forEach(m => m.classList.remove('show'));
    }
  });

  // Render kartu awal
  renderCards();
});
