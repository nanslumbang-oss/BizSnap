// Array Data Puluhan UMKM / Perusahaan
const umkmData = [
  {
    id: 1,
    name: "Laundry God",
    category: "Jasa & Care",
    desc: "Layanan cuci sepatu & baju premium 24 jam kilat, wangi, & terpercaya.",
    bgImage: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    website: "https://laundry-god.github.io"
  },
  {
    id: 2,
    name: "Kopi Ndeso Bromo",
    category: "Kuliner",
    desc: "Racikan kopi robusta lokal khas pegunungan Bromo dengan cita rasa otentik.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    website: "#"
  },
  {
    id: 3,
    name: "Sultan Studio 3D",
    category: "Kreatif & IT",
    desc: "Jasa pembuatan aset visual 3D, desain logo, dan pengembangan web interaktif.",
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    whatsapp: "628123456789",
    website: "#"
  }
];

const container = document.getElementById('snapContainer');
const counter = document.getElementById('cardCounter');

// Render Kartu ke Layar
function renderCards() {
  container.innerHTML = '';
  umkmData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'snap-card';
    card.style.backgroundImage = `url('${item.bgImage}')`;
    
    card.innerHTML = `
      <div class="card-overlay"></div>
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

  // Jalankan pendeteksi animasi setelah kartu selesai dimasukkan
  initCardObserver();
}

// Deteksi kartu mana yang lagi nge-snap di tengah layar
function initCardObserver() {
  const cards = document.querySelectorAll('.snap-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Tambahkan class .active saat kartu masuk layar
        entry.target.classList.add('active');
      } else {
        // Hapus class .active saat lewat biar kalau di-scroll ulang animasinya main lagi
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.6 }); // Trigger kalau 60% kartu udah kelihatan

  cards.forEach(card => observer.observe(card));
}

// Update angka indikator (1 / 3) saat di-scroll
container.addEventListener('scroll', () => {
  const cardHeight = container.clientHeight;
  const currentIndex = Math.round(container.scrollTop / cardHeight) + 1;
  counter.innerText = `${currentIndex} / ${umkmData.length}`;
});

renderCards();
