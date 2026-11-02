// Data UMKM
const umkmData = [
  {
    id: 1,
    name: "Laundry God",
    category: "Jasa & Care",
    desc: "Layanan cuci sepatu & baju premium 24 jam kilat, wangi, & terpercaya.",
    bgImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    website: "https://laundry-god.github.io",
    likes: 124
  },
  {
    id: 2,
    name: "Kopi Ndeso Bromo",
    category: "Kuliner",
    desc: "Racikan kopi robusta lokal khas pegunungan Bromo dengan cita rasa otentik.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    website: "#",
    likes: 89
  },
  {
    id: 3,
    name: "Sultan Studio 3D",
    category: "Kreatif & IT",
    desc: "Jasa pembuatan aset visual 3D, desain logo, dan pengembangan web interaktif.",
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    website: "#",
    likes: 210
  }
];

let currentFilter = 'all';
const container = document.getElementById('snapContainer');
const counter = document.getElementById('cardCounter');

// Ambil data like tersimpan di HP
function getSavedLikes() {
  return JSON.parse(localStorage.getItem('bizsnap_likes')) || {};
}

// Render Kartu ke Layar
function renderCards() {
  container.innerHTML = '';
  const savedLikes = getSavedLikes();

  const filteredData = currentFilter === 'all' 
    ? umkmData 
    : umkmData.filter(item => item.category === currentFilter);

  if (filteredData.length === 0) {
    container.innerHTML = `<div style="height:100vh; display:flex; align-items:center; justify-content:center; color:#94a3b8;">Belum ada UMKM di kategori ini</div>`;
    return;
  }

  filteredData.forEach((item) => {
    const isLiked = savedLikes[item.id] || false;
    const totalLikes = item.likes + (isLiked ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'snap-card';
    card.style.backgroundImage = `url('${item.bgImage}')`;
    
    card.innerHTML = `
      <div class="card-overlay"></div>
      
      <!-- Tombol Samping (Like & Share) -->
      <div class="side-actions">
        <button class="action-icon-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${item.id})">
          ❤️ <span class="count-label" id="like-count-${item.id}">${totalLikes}</span>
        </button>
        <button class="action-icon-btn" onclick="shareCard('${item.name}', '${item.desc}')">
          🔗 <span class="count-label">Share</span>
        </button>
      </div>

      <div class="card-content">
        <span class="badge-cat">${item.category}</span>
        <h2 class="company-name">${item.name}</h2>
        <p class="company-desc">${item.desc}</p>
        <div class="action-buttons">
          <a href="https://wa.me/${item.whatsapp}" target="_blank" class="btn-action btn-wa">💬 WhatsApp</a>
          ${item.website !== '#' ? `<a href="${item.website}" target="_blank" class="btn-action btn-web">🌐 Website</a>` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  initCardObserver();
  updateCounter(filteredData.length);
}

// Fitur Filter Kategori
function filterCategory(cat) {
  currentFilter = cat;
  document.querySelectorAll('.pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderCards();
  container.scrollTop = 0; // Scroll balik ke kartu pertama
}

// Fitur Like (LocalStorage)
function toggleLike(id) {
  const savedLikes = getSavedLikes();
  savedLikes[id] = !savedLikes[id];
  localStorage.setItem('bizsnap_likes', JSON.stringify(savedLikes));
  renderCards(); // Refresh UI
}

// Fitur Share
function shareCard(title, text) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `${title} - ${text}`,
      url: window.location.href,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin ke papan klip!");
  }
}

// Observer untuk Animasi Fade In
function initCardObserver() {
  const cards = document.querySelectorAll('.snap-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.6 });

  cards.forEach(card => observer.observe(card));
}

// Counter Kartu (1 / N)
function updateCounter(total) {
  counter.innerText = `1 / ${total}`;
}

container.addEventListener('scroll', () => {
  const cardHeight = container.clientHeight;
  const filteredCount = currentFilter === 'all' 
    ? umkmData.length 
    : umkmData.filter(item => item.category === currentFilter).length;

  const currentIndex = Math.round(container.scrollTop / cardHeight) + 1;
  counter.innerText = `${currentIndex} / ${filteredCount}`;
});

renderCards();
