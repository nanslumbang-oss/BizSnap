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
    bgImage: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80",
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
  },
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
    bgImage: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?auto=format&fit=crop&w=800&q=80",
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
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
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
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
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
    bgImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
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
  },
  {
    id: 13,
    name: "House of Danar Hadi",
    category: "Fashion",
    province: "Jawa Tengah",
    location: "Solo",
    ratingScore: "4.7",
    ratingReviews: "(2.100+ ulasan)",
    address: "Jl. Slamet Riyadi No.261, Sriwedari, Laweyan, Kota Surakarta",
    desc: "Galeri batik eksklusif dan museum seni batik legendaris dengan koleksi kain tradisional berkualitas tinggi.",
    bgImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=House+of+Danar+Hadi+Solo",
    webUrl: "https://instagram.com/danarhadi_id",
    likes: 320,
    reviews: [
      "Koleksi batiknya sangat lengkap dan pameran museumnya sangat edukatif.",
      "Pelayanan ramah dan tempatnya bersih bernuansa klasik Jawa."
    ]
  },
  {
    id: 14,
    name: "Toko Mas Semar Nusantara Semarang",
    category: "Toko Perhiasan",
    province: "Jawa Tengah",
    location: "Semarang",
    ratingScore: "4.8",
    ratingReviews: "(3.400+ ulasan)",
    address: "Jl. Kranggan No.21, Kranggan, Semarang Tengah, Kota Semarang",
    desc: "Pusat jual beli perhiasan emas, kalung, cincin, dan berlian terpercaya dengan model modern.",
    bgImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Semar+Nusantara+Semarang",
    webUrl: "https://instagram.com/semarnusantara",
    likes: 410,
    reviews: [
      "Pilihan perhiasannya banyak banget dan potongan jual kembali transparan.",
      "Pelayanannya cepat walau antrean ramai."
    ]
  },
  {
    id: 15,
    name: "Lawang Sewu",
    category: "Wisata",
    province: "Jawa Tengah",
    location: "Semarang",
    ratingScore: "4.6",
    ratingReviews: "(35.000+ ulasan)",
    address: "Jl. Pemuda, Sekayu, Semarang Tengah, Kota Semarang",
    desc: "Bangunan bersejarah peninggalan era kolonial dengan arsitektur megah dan kaca patri otentik.",
    bgImage: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lawang+Sewu+Semarang",
    webUrl: "https://instagram.com/wisatalawangsewu",
    likes: 850,
    reviews: [
      "Spot foto arsitektur klasik terbaik di tengah Kota Semarang.",
      "Area bersih dan pemandu wisatanya sangat informatif."
    ]
  },
  {
    id: 16,
    name: "Brodo Store Bandung",
    category: "Fashion",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.7",
    ratingReviews: "(1.800+ ulasan)",
    address: "Jl. Ganesa No.3, Lb. Siliwangi, Coblong, Kota Bandung",
    desc: "Store resmi brand sepatu lokal pria, pakaian casual, dan aksesori kulit berkualitas tinggi.",
    bgImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brodo+Store+Bandung",
    webUrl: "https://instagram.com/bro.do",
    likes: 290,
    reviews: [
      "Kualitas sepatu kulit lokalnya tidak kalah sama brand luar.",
      "Toko bersih, rapi, dan pelayanannya sangat membantu."
    ]
  },
  {
    id: 17,
    name: "Frank & co. Tunjungan Plaza",
    category: "Toko Perhiasan",
    province: "Jawa Timur",
    location: "Surabaya",
    ratingScore: "4.9",
    ratingReviews: "(850+ ulasan)",
    address: "Tunjungan Plaza 3 Lt.1, Jl. Basuki Rahmat No.8-12, Surabaya",
    desc: "Gerai perhiasan mewah penyedia cincin nikah, berlian berkualitas sertifikat internasional, dan emas premium.",
    bgImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Frank+co+Tunjungan+Plaza+Surabaya",
    webUrl: "https://instagram.com/franknco_id",
    likes: 380,
    reviews: [
      "Pelayanan sangat eksklusif dan koleksi cincin nikahnya indah.",
      "Penjelasan detail mengenai sertifikasi berlian sangat jelas."
    ]
  },
  {
    id: 18,
    name: "Saung Angklung Udjo",
    category: "Wisata",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.7",
    ratingReviews: "(14.000+ ulasan)",
    address: "Jl. Soekarno Hatta No.735A, Cicaheum, Kiaracondong, Kota Bandung",
    desc: "Pusat pelestarian kebudayaan Sunda dengan pertunjukan musik angklung interaktif dan kerajinan bambu.",
    bgImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Saung+Angklung+Udjo+Bandung",
    webUrl: "https://instagram.com/angklungudjo",
    likes: 620,
    reviews: [
      "Pertunjukan seni yang sangat memukau dan mengajak penonton bermain bersama.",
      "Sangat cocok untuk tempat edukasi budaya keluarga."
    ]
  },
  {
    id: 19,
    name: "Pixelate Design Studio",
    category: "Jasa Desain",
    province: "Jawa Timur",
    location: "Surabaya",
    ratingScore: "4.9",
    ratingReviews: "(120+ ulasan)",
    address: "Jl. Raya Darmo Permai II No.36, Pradahkalikidal, Dukuhpakis, Surabaya",
    desc: "Studio kreatif penyedia jasa branding identitas visual, desain kemasan produk UMKM, dan pembuatan UI/UX website.",
    bgImage: "https://images.unsplash.com/photo-1542744094-3a31b272c390?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pixelate+Design+Studio+Surabaya",
    webUrl: "https://instagram.com/pixelatedesign.id",
    likes: 195,
    reviews: [
      "Hasil konsep branding bisnis kami sangat modern dan tepat sasaran.",
      "Pengerjaan tepat waktu dan komunikasi dengan desainer sangat lancar."
    ]
  },
  {
    id: 20,
    name: "Eiger Adventure Store Sumatera",
    category: "Fashion",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.8",
    ratingReviews: "(5.200+ ulasan)",
    address: "Jl. Sumatera No.23, Braga, Sumur Bandung, Kota Bandung",
    desc: "Store flaghsip penyedia perlengkapan outdoor, jaket gunung, tas kerir, dan perlengkapan petualangan.",
    bgImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eiger+Sumatera+Bandung",
    webUrl: "https://instagram.com/eigeradventure",
    likes: 540,
    reviews: [
      "Toko paling lengkap untuk perlengkapan mendaki gunung di Bandung.",
      "Tempatnya luas dan fasilitas garansi produknya memuaskan."
    ]
  },
  {
    id: 21,
    name: "House of Sampoerna",
    category: "Wisata",
    province: "Jawa Timur",
    location: "Surabaya",
    ratingScore: "4.7",
    ratingReviews: "(11.000+ ulasan)",
    address: "Taman Sampoerna No.6, Krembangan Utara, Pabean Cantian, Surabaya",
    desc: "Museum sejarah industri rokok kretek dan bangunan bersejarah bergaya kolonial Belanda di Surabaya Utara.",
    bgImage: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=House+of+Sampoerna+Surabaya",
    webUrl: "https://instagram.com/houseofsampoerna",
    likes: 710,
    reviews: [
      "Museum dengan penataan sangat rapi, harum, dan bebas biaya masuk.",
      "Ada fasilitas bus tur gratis Surabaya Heritage Track."
    ]
  },
  {
    id: 22,
    name: "Toko Perhiasan Lotus Gold",
    category: "Toko Perhiasan",
    province: "Jawa Tengah",
    location: "Solo",
    ratingScore: "4.6",
    ratingReviews: "(1.100+ ulasan)",
    address: "Jl. Dr. Rajiman No.120, Jayengan, Serengan, Kota Surakarta",
    desc: "Pusat perhiasan emas muda dan tua dengan koleksi gelang, liontin, dan perhiasan kekinian.",
    bgImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lotus+Gold+Solo",
    webUrl: "https://instagram.com/lotusgold_official",
    likes: 275,
    reviews: [
      "Desain perhiasannya mengikuti tren anak muda.",
      "Harga bersaing dan pelayanan pegawainya cekatan."
    ]
  },
  {
    id: 23,
    name: "Screamous Clothing Store",
    category: "Fashion",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.7",
    ratingReviews: "(1.500+ ulasan)",
    address: "Jl. Trunojoyo No.23, Citarum, Bandung Wetan, Kota Bandung",
    desc: "Brand clothing distro ternama Bandung yang menyediakan kaos, hoodie, dan streetwear anak muda.",
    bgImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Screamous+Trunojoyo+Bandung",
    webUrl: "https://instagram.com/screamous_55",
    likes: 310,
    reviews: [
      "Bahan kain kaosnya adem dan desain sablonnya awet.",
      "Banyak promo diskon di store fisiknya."
    ]
  },
  {
    id: 24,
    name: "Kawah Putih Ciwidey",
    category: "Wisata",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.6",
    ratingReviews: "(28.000+ ulasan)",
    address: "Sugihmukti, Pasirjambu, Kabupaten Bandung, Jawa Barat",
    desc: "Danau kawah vulkanik alami dengan air berwarna putih kehijauan yang dikelilingi kabut pegunungan sejuk.",
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kawah+Putih+Ciwidey+Bandung",
    webUrl: "https://instagram.com/kawahputih_official",
    likes: 920,
    reviews: [
      "Pemandangan alamnya luar biasa indah dan udaranya dingin.",
      "Banyak spot foto jembatan kayu yang Instagramable."
    ]
  },
  {
    id: 25,
    name: "Kreatifnesia Studio Desain",
    category: "Jasa Desain",
    province: "Jawa Tengah",
    location: "Semarang",
    ratingScore: "4.8",
    ratingReviews: "(90+ ulasan)",
    address: "Jl. Majapahit No.182, Palebon, Pedurungan, Kota Semarang",
    desc: "Jasa profesional pembuatan logo perusahaan, animasi promosi media sosial, dan materi pemasaran visual.",
    bgImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kreatifnesia+Studio+Semarang",
    webUrl: "https://instagram.com/kreatifnesia.id",
    likes: 160,
    reviews: [
      "Desain logo bisnis saya terlihat sangat elegan dan pengerjaannya cepat.",
      "Revisi cepat dilayani dengan sangat sabar."
    ]
  },
  {
    id: 26,
    name: "Toko Emas Gajah Semarang",
    category: "Toko Perhiasan",
    province: "Jawa Tengah",
    location: "Semarang",
    ratingScore: "4.7",
    ratingReviews: "(1.900+ ulasan)",
    address: "Jl. Pemuda No.32, Pandansari, Semarang Tengah, Kota Semarang",
    desc: "Toko perhiasan emas legendaris Semarang yang melayani pembelian emas batangan Antam dan perhiasan kadar tua.",
    bgImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Toko+Emas+Gajah+Semarang",
    webUrl: "https://instagram.com/tokoemasgajah",
    likes: 330,
    reviews: [
      "Toko emas kepercayaan keluarga dari zaman dulu.",
      "Kadar emas terjamin jujur dan hitungannya tepat."
    ]
  },
  {
    id: 27,
    name: "Tebing Keraton",
    category: "Wisata",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.5",
    ratingReviews: "(9.800+ ulasan)",
    address: "Ciburial, Cimenyan, Kabupaten Bandung, Jawa Barat",
    desc: "Area tebing di kawasan Taman Hutan Raya dengan pemandangan pemandangan lautan pepohonan pinus dan matahari terbit.",
    bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tebing+Keraton+Bandung",
    webUrl: "https://instagram.com/tebingkeraton",
    likes: 680,
    reviews: [
      "Spot sunrise paling spektakuler di Bandung Utara.",
      "Udara sangat segar dan lanskap pemandangannya hijau membendung mata."
    ]
  },
  {
    id: 28,
    name: "Sentra Kerajinan Kulit Tanggulangin",
    category: "Fashion",
    province: "Jawa Timur",
    location: "Sidoarjo",
    ratingScore: "4.5",
    ratingReviews: "(4.300+ ulasan)",
    address: "Jl. Kludan, Kedensari, Tanggulangin, Kabupaten Sidoarjo",
    desc: "Pusat industri pengrajin tas, sabuk, jaket, dan sepatu berbahan kulit asli lokal bermutu tinggi.",
    bgImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tanggulangin+Sidoarjo",
    webUrl: "https://instagram.com/tanggulangin_leather",
    likes: 420,
    reviews: [
      "Produk kulit aslinya tahan lama dan harganya jauh lebih murah dari mall.",
      "Pilihan dompet dan tas kulitnya sangat melimpah."
    ]
  },
  {
    id: 29,
    name: "Jatim Park 2 (Batu Secret Zoo)",
    category: "Wisata",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.8",
    ratingReviews: "(32.000+ ulasan)",
    address: "Jl. Oro-Oro Ombo No.9, Temas, Kota Malang",
    desc: "Taman konservasi satwa modern bertaraf internasional dengan koleksi satwa lengkap dan wahana edukasi.",
    bgImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jatim+Park+2+Malang",
    webUrl: "https://instagram.com/jtp2official",
    likes: 1100,
    reviews: [
      "Kebun binatang paling bersih dan tertata rapi di Indonesia.",
      "Sangat edukatif untuk membawa anak-anak belajar mengenal satwa."
    ]
  },
  {
    id: 30,
    name: "Toko Perhiasan Emas Sejahtera Atom",
    category: "Toko Perhiasan",
    province: "Jawa Timur",
    location: "Surabaya",
    ratingScore: "4.7",
    ratingReviews: "(1.400+ ulasan)",
    address: "Pasar Atom Tahap 1 Lt.1, Bongkaran, Pabean Cantian, Surabaya",
    desc: "Pusat jual beli perhiasan emas murni dan cincin kawin di kawasan belanja legendaris Pasar Atom.",
    bgImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Toko+Emas+Sejahtera+Pasar+Atom+Surabaya",
    webUrl: "https://instagram.com/sejahteragold",
    likes: 290,
    reviews: [
      "Koleksi emas kadar tuanya sangat berkilau dan terjamin kualitasnya.",
      "Pelayanan ramah walau pengunjung pasar atom ramai."
    ]
  },
  {
    id: 31,
    name: "Visora Branding Agency",
    category: "Jasa Desain",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.9",
    ratingReviews: "(110+ ulasan)",
    address: "Jl. Riau No.114, Cihapit, Bandung Wetan, Kota Bandung",
    desc: "Agency desain komunikasi visual yang fokus pada pembuatan identitas merek, desain kemasan, dan strategi visual.",
    bgImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Visora+Branding+Agency+Bandung",
    webUrl: "https://instagram.com/visoradesign",
    likes: 210,
    reviews: [
      "Tim kreatifnya sangat adaptif memahami kebutuhan identitas brand kami.",
      "Hasil desain kado visualnya sangat elegan."
    ]
  },
  {
    id: 32,
    name: "3Second Family Store",
    category: "Fashion",
    province: "Jawa Barat",
    location: "Bandung",
    ratingScore: "4.6",
    ratingReviews: "(2.800+ ulasan)",
    address: "Jl. Riau No.102, Cihapit, Bandung Wetan, Kota Bandung",
    desc: "Superstore apparel lokal yang menyediakan baju casual, jaket, dan celana untuk pria, wanita, hingga anak-anak.",
    bgImage: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=3Second+Store+Riau+Bandung",
    webUrl: "https://instagram.com/3second-ltd",
    likes: 380,
    reviews: [
      "Tempat belanja baju keluarga paling nyaman di Bandung.",
      "Varian produknya banyak dan sering ada diskon menarik."
    ]
  },
  {
    id: 33,
    name: "Wisata Kampung Warna Warni Jodipan",
    category: "Wisata",
    province: "Jawa Timur",
    location: "Malang",
    ratingScore: "4.4",
    ratingReviews: "(7.200+ ulasan)",
    address: "Jodipan, Blimbing, Kota Malang, Jawa Timur",
    desc: "Kawasan pemukiman tepi sungai bernuansa tematik unik dengan cat warna-warni memikat dan jembatan kaca.",
    bgImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kampung+Warna+Warni+Jodipan+Malang",
    webUrl: "https://instagram.com/jodipan.malang",
    likes: 530,
    reviews: [
      "Hasil revitalisasi desa kreatif yang sangat Instagramable.",
      "Biaya tiket masuk sangat murah dan langsung membantu warga lokal."
    ]
  },
  {
    id: 34,
    name: "Batik Keris Solo Grand Mall",
    category: "Fashion",
    province: "Jawa Tengah",
    location: "Solo",
    ratingScore: "4.6",
    ratingReviews: "(1.200+ ulasan)",
    address: "Solo Grand Mall Lt. Dasar, Jl. Slamet Riyadi No.273, Surakarta",
    desc: "Outlet kemeja batik premium, gaun batik modern, dan suvenir kerajinan tangan khas Jawa.",
    bgImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Batik+Keris+Solo+Grand+Mall",
    webUrl: "https://instagram.com/batikkerisindo",
    likes: 260,
    reviews: [
      "Jahitan baju batiknya rapi dan kainya halus tidak panas.",
      "Banyak pilihan kemeja batik formal untuk kerja."
    ]
  },
  {
    id: 35,
    name: "Mirota Batik (Hamzah Batik)",
    category: "Fashion",
    province: "DI Yogyakarta",
    location: "Yogyakarta",
    ratingScore: "4.7",
    ratingReviews: "(21.000+ ulasan)",
    address: "Jl. Margo Mulyo No.9, Ngupasan, Gondomanan, Kota Yogyakarta",
    desc: "Pusat perbelanjaan kain batik, suvenir budaya Jawa, pakaian tradisional, dan kerajinan perak ikonik Malioboro.",
    bgImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hamzah+Batik+Yogyakarta",
    webUrl: "https://instagram.com/hamzahbatikofficial",
    likes: 890,
    reviews: [
      "Suasana toko beraroma dupa khas Jawa dan koleksi oleh-olehnya paling lengkap.",
      "Harga terjangkau dengan kualitas batik yang beragam."
    ]
  },
  {
    id: 36,
    name: "Goldmart Tunjungan Plaza 3",
    category: "Toko Perhiasan",
    province: "Jawa Timur",
    location: "Surabaya",
    ratingScore: "4.8",
    ratingReviews: "(420+ ulasan)",
    address: "Tunjungan Plaza 3 Lt. 2, Jl. Basuki Rahmat, Surabaya",
    desc: "Butik perhiasan penyedia koleksi perhiasan emas putih, perhiasan mutiara, dan liontin eksklusif.",
    bgImage: "https://images.unsplash.com/photo-1611591475155-4282faa7c2e7?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Goldmart+Tunjungan+Plaza+Surabaya",
    webUrl: "https://instagram.com/goldmartid",
    likes: 210,
    reviews: [
      "Desain perhiasannya sangat elegan dan pengerjaannya sangat detail.",
      "Sales mewakilinya informatif dan profesional."
    ]
  },
  {
    id: 37,
    name: "Wisata Candi Prambanan",
    category: "Wisata",
    province: "DI Yogyakarta",
    location: "Yogyakarta",
    ratingScore: "4.7",
    ratingReviews: "(65.000+ ulasan)",
    address: "Jl. Raya Jogja - Solo Km.16, Bokoharjo, Prambanan, Sleman",
    desc: "Kompleks candi Hindu terbesar di Indonesia dengan seni relief ukiran Ramayana dan arsitektur batu berdiri megah.",
    bgImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Candi+Prambanan+Yogyakarta",
    webUrl: "https://instagram.com/prambananpark",
    likes: 1250,
    reviews: [
      "Warisan budaya dunia yang sangat megah dan terawat dengan amat baik.",
      "Sangat indah ketika disaksikan pada waktu matahari terbenam."
    ]
  },
  {
    id: 38,
    name: "SeniVisu Digital Studio",
    category: "Jasa Desain",
    province: "DI Yogyakarta",
    location: "Yogyakarta",
    ratingScore: "4.9",
    ratingReviews: "(80+ ulasan)",
    address: "Jl. Malioboro No.45, Sosromenduran, Gedong Tengen, Yogyakarta",
    desc: "Jasa profesional ilustrasi digital, desain spanduk UMKM, dan pembuatan aset media visual kreatif.",
    bgImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=SeniVisu+Studio+Yogyakarta",
    webUrl: "https://instagram.com/senivisu_studio",
    likes: 175,
    reviews: [
      "Gaya ilustrasinya sangat unik dan sesuai dengan permintaan brand kami.",
      "Pengerjaan tepat waktu dan purna jualnya sangat responsif."
    ]
  },
  {
    id: 39,
    name: "Kebun Raya Bogor",
    category: "Wisata",
    province: "Jawa Barat",
    location: "Bogor",
    ratingScore: "4.6",
    ratingReviews: "(45.000+ ulasan)",
    address: "Jl. Ir. H. Juanda No.13, Paledang, Bogor Tengah, Kota Bogor",
    desc: "Taman botani luas di pusat Kota Bogor dengan ribuan koleksi pohon langka dan area hijau sejuk.",
    bgImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kebun+Raya+Bogor",
    webUrl: "https://instagram.com/kebunraya_id",
    likes: 980,
    reviews: [
      "Tempat piknik terbaik bersama keluarga di bawah pepohonan rindang.",
      "Udaranya sangat sejuk dan kawasannya sangat bersih."
    ]
  },
  {
    id: 40,
    name: "Wholesale Gold Store Kranggan",
    category: "Toko Perhiasan",
    province: "Jawa Tengah",
    location: "Semarang",
    ratingScore: "4.6",
    ratingReviews: "(780+ ulasan)",
    address: "Jl. Kranggan No.88, Miroto, Semarang Tengah, Kota Semarang",
    desc: "Toko emas grosir penyedia liontin, rantai emas, dan perhiasan kadar terjamin dengan potongan terjangkau.",
    bgImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Wholesale+Gold+Store+Kranggan+Semarang",
    webUrl: "https://instagram.com/goldkranggan_smg",
    likes: 230,
    reviews: [
      "Harga emasnya kompetitif dan transparan.",
      "Staf melayani dengan cepat dan informatif."
    ]
  },
  {
    id: 41,
    name: "Dagadu Djokdja Store",
    category: "Fashion",
    province: "DI Yogyakarta",
    location: "Yogyakarta",
    ratingScore: "4.6",
    ratingReviews: "(4.100+ ulasan)",
    address: "Jl. Gedongkuning No.128, Rejowinangun, Kotagede, Yogyakarta",
    desc: "Brand clothing plesetan khas Jogja penyedia kaos unik, cenderamata, dan merchandise kreatif lokal.",
    bgImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dagadu+Djokdja+Gedongkuning",
    webUrl: "https://instagram.com/dagadudjokdja",
    likes: 490,
    reviews: [
      "Kaos khas Jogja yang otentik dan desain kata-katanya selalu lucu.",
      "Bahan kaos halus dan tidak mudah melar."
    ]
  },
  {
    id: 42,
    name: "Kawasan Wisata Bromo Tengger",
    category: "Wisata",
    province: "Jawa Timur",
    location: "Probolinggo",
    ratingScore: "4.8",
    ratingReviews: "(42.000+ ulasan)",
    address: "Kawasan Taman Nasional Bromo Tengger Semeru, Jawa Timur",
    desc: "Kawasan lautan pasir dan gunung berapi aktif dengan pemandangan matahari terbit spektakuler.",
    bgImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bromo+Tengger+Semeru",
    webUrl: "https://instagram.com/broman_official",
    likes: 1400,
    reviews: [
      "Pengalaman menyaksikan sunrise dari Penanjakan yang tiada tandingannya.",
      "Lautan pasir dan kawahnya sangat memesona."
    ]
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
} // <--- INI KURUNG KURAWAL YANG KELUPAAN TADI BANG! UDAH DIBENERIN.

// JALANKAN WEB
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
    }
