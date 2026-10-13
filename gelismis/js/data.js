/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Yeni bir müşteri için yalnızca bu dosyayı ve "images" klasörünü
   değiştirmeniz yeterli. HTML, CSS ve diğer JS dosyalarına dokunmayın.

   NASIL KULLANILIR
   1) Metinler: tırnak içindeki yazıları değiştirin. Tırnakları (" ")
      ve satır sonlarındaki virgülleri silmeyin.
   2) Fotoğraflar: fotoğrafı "images" klasörüne koyun ve
          foto("1488972685288-c3fd157d7c7a")
      yazan yeri
          "images/dosya-adi.jpg"
      ile değiştirin. foto(...) yalnızca geçici Unsplash görselleri
      içindir; müşteri fotoğrafları gelince hepsi kaldırılabilir.
      Önerilen boyut: geniş kenar 1600–2400 px, JPG.
   3) Proje eklemek: "projects" listesindeki bir bloğu { ... }, kopyalayıp
      yapıştırın. "slug" adresi belirler (proje.html?id=slug): küçük harf,
      boşluksuz, Türkçe karaktersiz ve her projede farklı olmalı.
   4) Video: "heroVideo" alanına bir .mp4 yolu yazarsanız (ör.
      "images/tanitim.mp4") açılışta fotoğraf slaytı yerine video oynar.
      Boş ("") bırakırsanız fotoğraf slaytı çalışır.
   5) Altı çizili kelime: manifesto cümlesinde [köşeli parantez] içine
      aldığınız kelimelerin altı çizilir.
   6) Bir bölümü kaldırmak: listesini boş bırakın. Örneğin haber yoksa
          news: [],
      yazın; ana sayfadaki haber bölümü kendiliğinden kaybolur. Aynısı
      split, services, team ve offices için de geçerlidir.
   7) Bölüm başlıkları ("Öne Çıkan Projeler", "Hizmetler" vb.) dosyanın
      sonundaki "labels" bölümündedir.

   DİKKAT: Bu kopya Çebiler Mimarlık için özelleştirilmiştir (araclar/firma_demo.py).
   Ad, adres ve telefon gerçektir; projeler, görseller ve haberler ÖRNEKTİR.
   ===================================================================== */

(function () {
  // Geçici (yer tutucu) Unsplash görseli üretir.
  function foto(kimlik) {
    return "https://images.unsplash.com/photo-" + kimlik + "?auto=format&fit=crop&w=1600&q=70";
  }

  window.SITE = {

    /* ---------- MARKA ---------- */
    brand: {
      name: "ÇEBİLER",                 // logonun kalın kısmı
      suffix: "Mimarlık",           // logonun ince kısmı (kaydırınca gizlenir)
      description: "Çebiler Mimarlık; Kocaeli İzmit'te mimari proje, iç mimari ve uygulama hizmeti veren bir mimarlık ofisidir.",
      founded: 2009
    },

    /* ---------- ÜST MENÜ ---------- */
    nav: [
      { label: "Projeler", href: "projeler.html" },
      { label: "Stüdyo",   href: "studyo.html" },
      { label: "İletişim", href: "studyo.html#iletisim" }
    ],

    /* ---------- AÇILIŞ (HERO) ---------- */
    // Sırayla dönen başlıklar. Her başlık iki satırdır; satırları kısa tutun (en çok ~14 harf).
    headlines: [
      ["YERİ DİNLER",  "YAPIYI KURARIZ"],
      ["IŞIKLA",       "TASARLARIZ"],
      ["AZ MALZEME",   "ÇOK ANLAM"],
      ["KENTE",        "NEFES AÇARIZ"],
      ["KALICI OLANI", "ARARIZ"]
    ],
    // Video yolu (ör. "images/tanitim.mp4"). Boşsa aşağıdaki fotoğraf slaytı çalışır.
    heroVideo: "",
    heroVideoCaption: "",
    heroSlides: [
      { image: foto("1488972685288-c3fd157d7c7a"), caption: "Liman Ofisleri — cephe ayrıntısı, Derince" },
      { image: foto("1670589953882-b94c9cb380f5"), caption: "Kıyı Evi — Karamürsel, Kocaeli" },
      { image: foto("1523274158540-2aa98c15ec26"), caption: "Sessiz Kütüphane — Kartepe" },
      { image: foto("1615406020658-6c4b805f1f30"), caption: "Kuzey Kampüsü — Gebze" },
      { image: foto("1614595737476-42487331b8a1"), caption: "Taş Avlu Kültür Merkezi — İzmit" }
    ],

    /* ---------- MANİFESTO ---------- */
    // [Köşeli parantez] içindeki kelimelerin altı çizilir.
    manifesto: "Bir yapıyı çizmeden önce [yeri] dinleriz. [Işığın] nereden geldiğine, rüzgârın nereden estiğine ve [insanların] orada nasıl yaşadığına bakar; geriye yalnızca [gerekli olanı] bırakırız.",
    manifestoNote: "Konuttan iç mekâna, ilk eskizden şantiyedeki uygulamaya kadar her işte aynı soruyu soruyoruz: Bu yer, bu yapıdan ne istiyor?",

    /* ---------- BÖLÜNMÜŞ SABİT BÖLÜM (fotoğraflar akar, metin sabit kalır) ---------- */
    split: [
      {
        label: "Yaklaşım",
        title: "Önce yer, sonra biçim.",
        text: "Her projeye arazide başlarız. Eğimi, komşu yapıları, gölgeyi ve yerel malzemeyi anlamadan tek çizgi çizmeyiz. Biçim, bu gözlemlerin sonucudur; başlangıcı değil.",
        linkLabel: "Stüdyoyu tanıyın",
        linkHref: "studyo.html",
        images: [
          foto("1717477660140-8709f24e2894"),
          foto("1730170787463-53a7074137fa"),
          foto("1730170788248-c64b24c1bbb1")
        ]
      },
      {
        label: "Malzeme",
        title: "Yaşlandıkça güzelleşen yapılar.",
        text: "Beton, taş, ahşap ve ışık. Az sayıda, dürüst malzemeyle çalışır; onları saklamak yerine görünür kılarız. İyi bir yapı ilk gününden çok, otuzuncu yılında değerlendirilmelidir.",
        linkLabel: "Projeleri inceleyin",
        linkHref: "projeler.html",
        images: [
          foto("1730170787482-2c9e1f4b360a"),
          foto("1601993957728-1e56ab70c5a8"),
          foto("1520529890308-f503006340b4")
        ]
      }
    ],

    /* ---------- PROJELER ----------
       featured: true  -> ana sayfadaki "Öne Çıkan Projeler" listesinde görünür
       showcase: true  -> ana sayfadaki büyük kartlı vitrinde görünür
    */
    projects: [
      {
        slug: "kiyi-evi",
        title: "Kıyı Evi",
        tagline: "Denize paralel uzanan, tek katlı bir beton ve cam ev.",
        location: "Karamürsel, Kocaeli",
        year: 2024,
        area: "420 m²",
        category: "Konut",
        status: "Tamamlandı",
        client: "Özel",
        featured: true,
        showcase: true,
        cover: foto("1670589953882-b94c9cb380f5"),
        text: [
          "Kıyı Evi, zeytinlikle deniz arasındaki dar bir şeride yerleşir. Yapı araziyi bölmek yerine onu izler; uzun ve alçak kütlesi ufuk çizgisini kapatmadan manzarayı çerçeveler.",
          "Yaşama alanları tek bir kotta, kesintisiz bir saçağın altında sıralanır. Kuzey cephesi rüzgâra karşı kapalı ve ağırdır; güney cephesi ise tümüyle açılarak iç mekânı terasa ve bahçeye bağlar.",
          "Brüt beton, yerel taş ve meşe dışında malzeme kullanılmadı. Evin ısıtma ve soğutma ihtiyacının büyük bölümü doğal havalandırma ve derin saçaklarla karşılanıyor."
        ],
        gallery: [
          foto("1730170787463-53a7074137fa"),
          foto("1724582586495-d050726cf354"),
          foto("1717477660140-8709f24e2894"),
          foto("1724582586458-a51791349977"),
          foto("1730170788248-c64b24c1bbb1")
        ]
      },
      {
        slug: "tas-avlu-kultur-merkezi",
        title: "Taş Avlu Kültür Merkezi",
        tagline: "Eski bir hanın avlusu çevresinde kurulan sergi ve gösteri mekânı.",
        location: "İzmit, Kocaeli",
        year: 2023,
        area: "6.800 m²",
        category: "Kültür",
        status: "Tamamlandı",
        client: "Belediye",
        featured: true,
        showcase: true,
        cover: foto("1614595737476-42487331b8a1"),
        text: [
          "Proje, uzun yıllar boş kalmış bir hanın onarılması ve yanına eklenen yeni bir yapıyla kentin kültür hayatına kazandırılmasını kapsar.",
          "Yeni yapı, hanın avlusunu tamamlayan dördüncü kenar olarak tasarlandı. Eski ve yeni arasındaki fark gizlenmedi: yerel kalker taşının yanında yalın beton ve çelik kullanıldı.",
          "Avlu gündüz gölgeli bir kent meydanı, akşam ise açık hava sahnesi olarak kullanılıyor."
        ],
        gallery: [
          foto("1716467278688-5b7fc38e3ca7"),
          foto("1730170787482-2c9e1f4b360a"),
          foto("1601993957728-1e56ab70c5a8"),
          foto("1650233323933-53e20427e277"),
          foto("1520529890308-f503006340b4")
        ]
      },
      {
        slug: "kuzey-kampusu",
        title: "Kuzey Kampüsü",
        tagline: "Dört fakülteyi tek bir yaya omurgasında buluşturan üniversite yerleşkesi.",
        location: "Gebze, Kocaeli",
        year: 2025,
        area: "24.000 m²",
        category: "Eğitim",
        status: "Yapım aşamasında",
        client: "Vakıf Üniversitesi",
        featured: true,
        showcase: true,
        cover: foto("1615406020658-6c4b805f1f30"),
        text: [
          "Kampüs, araç trafiğini çepere alarak merkezde 400 metrelik kesintisiz bir yaya omurgası kurar. Derslikler, kütüphane ve yemekhane bu omurgaya açılan avlular çevresinde dizilir.",
          "Sert kış koşullarına karşı yapılar kuzeye kapalı, güneye açık tasarlandı. Kış bahçeleri ısı tamponu olarak çalışırken öğrencilere yıl boyu kullanılabilen ortak alanlar sunuyor."
        ],
        gallery: [
          foto("1614595737683-1740e41bfaac"),
          foto("1711873316332-acb6930211e1"),
          foto("1554793000-245d3a3c2a51"),
          foto("1654722439127-0645ad92650b")
        ]
      },
      {
        slug: "liman-ofisleri",
        title: "Liman Ofisleri",
        tagline: "Bir antreponun yeniden işlevlendirilmesiyle oluşan çalışma alanları.",
        location: "Derince, Kocaeli",
        year: 2022,
        area: "11.500 m²",
        category: "Ofis",
        status: "Tamamlandı",
        client: "Özel",
        featured: true,
        showcase: true,
        cover: foto("1574848296471-28f79a036f79"),
        text: [
          "1950'lerden kalma bir liman antreposu, taşıyıcı sistemi korunarak esnek ofis katlarına dönüştürüldü.",
          "Çatıya açılan üç ışıklık, derin planın ortasına gün ışığı taşıyor. Zemin kat kamuya açık bırakıldı; kafe, sergi alanı ve atölyeler sokağın devamı gibi çalışıyor."
        ],
        gallery: [
          foto("1488972685288-c3fd157d7c7a"),
          foto("1625390711106-3728815ebcd9"),
          foto("1560419450-a53fe3b90211"),
          foto("1554671557-0def73b2e67e")
        ]
      },
      {
        slug: "sessiz-kutuphane",
        title: "Sessiz Kütüphane",
        tagline: "Park içinde, gün ışığıyla aydınlanan bir mahalle kütüphanesi.",
        location: "Kartepe, Kocaeli",
        year: 2021,
        area: "3.200 m²",
        category: "Kültür",
        status: "Tamamlandı",
        client: "Belediye",
        featured: true,
        showcase: false,
        cover: foto("1523274158540-2aa98c15ec26"),
        text: [
          "Kütüphane, mevcut ağaçların hiçbiri kesilmeden parkın açıklığına yerleştirildi. Okuma salonları ağaçlara bakan büyük pencerelerle, raflar ise üstten gelen yumuşak ışıkla aydınlanıyor.",
          "Yapının çevresini dolanan saçak altı, kütüphane kapalıyken de kullanılabilen bir açık okuma alanı."
        ],
        gallery: [
          foto("1711873316332-acb6930211e1"),
          foto("1654722439127-0645ad92650b"),
          foto("1582045253062-f63cfbd45bcb"),
          foto("1567943183748-3a7542120c90")
        ]
      },
      {
        slug: "bag-oteli",
        title: "Bağ Oteli",
        tagline: "Üzüm bağlarının arasına dağılan yirmi dört odalı butik otel.",
        location: "Şirince, İzmir",
        year: 2024,
        area: "5.400 m²",
        category: "Konaklama",
        status: "Tamamlandı",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: foto("1543071293-d91175a68672"),
        text: [
          "Otel tek bir büyük kütle yerine, bağ teraslarını izleyen küçük yapılar olarak tasarlandı. Böylece her oda kendi manzarasına ve kendi sessizliğine sahip.",
          "Duvarlarda arazinin kendi taşı, çatılarda ise yörenin geleneksel kiremidi kullanıldı."
        ],
        gallery: [
          foto("1724582586458-a51791349977"),
          foto("1554671557-0def73b2e67e"),
          foto("1627141234469-24711efb373c"),
          foto("1601993957728-1e56ab70c5a8")
        ]
      },
      {
        slug: "yamac-konutlari",
        title: "Yamaç Konutları",
        tagline: "Eğime basamaklanarak yerleşen kırk iki teras ev.",
        location: "Başiskele, Kocaeli",
        year: 2023,
        area: "9.800 m²",
        category: "Konut",
        status: "Tamamlandı",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: foto("1614595737683-1740e41bfaac"),
        text: [
          "Konutlar yamaca basamaklanarak yerleşir; her evin çatısı, bir üsttekinin bahçesidir. Bu sayede hiçbir ev diğerinin manzarasını kesmez.",
          "Ortak yollar araçsız tasarlandı; otopark yamacın altına gizlendi."
        ],
        gallery: [
          foto("1627141234469-24711efb373c"),
          foto("1724582586495-d050726cf354"),
          foto("1582045253062-f63cfbd45bcb"),
          foto("1520529890308-f503006340b4")
        ]
      },
      {
        slug: "kopru-pavyonu",
        title: "Köprü Pavyonu",
        tagline: "Nehir kıyısında, kente açık bir etkinlik ve dinlenme yapısı.",
        location: "Adapazarı, Sakarya",
        year: 2022,
        area: "650 m²",
        category: "Kamusal",
        status: "Tamamlandı",
        client: "Belediye",
        featured: false,
        showcase: false,
        cover: foto("1567943183748-3a7542120c90"),
        text: [
          "Pavyon, nehir kıyısındaki yürüyüş yolunun genişleyerek çatıya dönüştüğü bir duraktır. Kapısı ve duvarı yoktur; yalnızca gölge verir.",
          "Yaz akşamlarında konserlere, hafta sonlarında üretici pazarına ev sahipliği yapıyor."
        ],
        gallery: [
          foto("1582045253062-f63cfbd45bcb"),
          foto("1730170787482-2c9e1f4b360a"),
          foto("1654722439127-0645ad92650b")
        ]
      }
    ],

    /* ---------- HİZMETLER ---------- */
    services: [
      { title: "Mimari Tasarım", short: "Fikir aşamasından uygulama projesine.", text: "Konsept tasarım, ruhsat ve uygulama projeleri, detay çözümleri ve şantiye süresince mesleki kontrollük. Her ölçekte yapıyı ilk eskizden anahtar teslimine kadar izliyoruz." },
      { title: "İç Mimarlık", short: "Yapıyla aynı dili konuşan iç mekânlar.", text: "Mekân kurgusu, malzeme ve aydınlatma tasarımı, özel üretim mobilya. İç mekânı yapıdan ayrı bir iş olarak değil, aynı düşüncenin devamı olarak ele alıyoruz." },
      { title: "Kentsel Tasarım", short: "Meydanlar, kıyılar, kampüsler.", text: "Master plan, kamusal alan ve peyzaj kurgusu. Yapıların arasında kalan boşluğu, en az yapılar kadar özenle tasarlıyoruz." },
      { title: "Restorasyon ve Yeniden İşlevlendirme", short: "Eski yapılara yeni bir hayat.", text: "Rölöve, restitüsyon ve restorasyon projeleri; tescilli ve endüstriyel yapıların güncel kullanımlara uyarlanması." },
      { title: "Sürdürülebilirlik Danışmanlığı", short: "Daha az enerji, daha uzun ömür.", text: "İklime duyarlı tasarım, gün ışığı ve enerji analizleri, yeşil bina sertifikasyon süreçlerinde danışmanlık." },
      { title: "Proje Yönetimi", short: "Bütçe, takvim ve kalite kontrolü.", text: "İşveren adına ihale dosyalarının hazırlanması, yüklenici seçimi, bütçe ve iş programı takibi." }
    ],

    /* ---------- HABERLER ---------- */
    // link boş ("") bırakılırsa kart tıklanamaz olur.
    news: [
      { tag: "Örnek · Açılış", date: "Eylül 2026",  title: "Taş Avlu Kültür Merkezi ilk sergisiyle kapılarını açtı", image: foto("1716467278688-5b7fc38e3ca7"), link: "proje.html?id=tas-avlu-kultur-merkezi" },
      { tag: "Örnek · Ödül",   date: "Haziran 2026", title: "Kıyı Evi, yılın konut yapısı seçkisinde yer aldı",        image: foto("1730170787463-53a7074137fa"), link: "proje.html?id=kiyi-evi" },
      { tag: "Örnek · Şantiye", date: "Mayıs 2026",  title: "Kuzey Kampüsü'nde kaba inşaat tamamlandı",                image: foto("1554793000-245d3a3c2a51"), link: "proje.html?id=kuzey-kampusu" },
      { tag: "Örnek · Söyleşi", date: "Mart 2026",   title: "“Az malzeme, çok anlam”: stüdyomuzda açık söyleşi",       image: foto("1554671557-0def73b2e67e"), link: "" }
    ],

    /* ---------- STÜDYO SAYFASI ---------- */
    studio: {
      headline: "Yeri dinleyen, sade ve kalıcı yapılar tasarlayan bir mimarlık stüdyosuyuz.",
      image: foto("1625390711106-3728815ebcd9"),
      text: [
        "Çebiler Mimarlık, Kocaeli İzmit'te mimari proje, iç mimari ve uygulama alanlarında çalışan bir mimarlık ofisidir. Her işle baştan sona bizzat ilgileniriz.",
        "Salon ve yatak odası tasarımından müstakil eve, apartmandan iş yerine; işin yalnızca çizimini değil, 3B görsel ve animasyonlarını, şantiyedeki uygulamasını da üstleniyoruz.",
        "Tasarım kararlarımızı maketlerle, bire bir örneklerle ve şantiyede sınarız. Çizdiğimiz her detayın nasıl üretileceğini bilmek isteriz."
      ],
      stats: []
    },

    /* ---------- EKİP ---------- */
    // image boş ("") bırakılırsa ad-soyadın baş harfleri gösterilir.
    team: [
      { name: "Muhammed Çebi", role: "Mimar", image: "" }
    ],

    /* ---------- OFİSLER ----------
       İlk iki ofisin saati açılış ekranının sağ altında görünür.
       timeZone: saat dilimi (ör. Europe/Istanbul, Europe/London, Asia/Dubai, America/New_York)
    */
    offices: [
      { city: "İzmit", code: "IZT", timeZone: "Europe/Istanbul", address: "Ömerağa Mah. İnönü Cad. No: 184/47, İzmit / Kocaeli", phone: "+90 541 642 62 41" }
    ],

    /* ---------- BÖLÜM BAŞLIKLARI ----------
       Sayfalardaki küçük başlıklar ve düğme yazıları. İstediğinizi değiştirin.
    */
    labels: {
      featured: "Öne Çıkan Projeler",              // ana sayfa: satır satır proje listesinin başlığı
      showcaseLabel: "Seçilmiş işler",             // ana sayfa: büyük kartların üstündeki küçük yazı
      showcaseTitle: "Projeler",                   // dev başlık (ana sayfa vitrini ve Projeler sayfası)
      allProjects: "Tüm projeleri gör",            // düğme yazısı
      services: "Hizmetler",
      servicesTitle: "Fikirden anahtar teslimine.",
      news: "Haberler",
      newsTitle: "Stüdyodan",
      offices: "Ofislerimiz",
      team: "Ekip",
      teamTitle: "Stüdyonun arkasındaki ekip.",
      studio: "Stüdyo",
      contact: "İletişim",
      view: "İNCELE",                              // proje kartının üstünde imleci izleyen yuvarlak
      next: "SONRAKİ",
      nextProject: "Sonraki proje",
      more: "İncele"
    },

    /* ---------- İLETİŞİM ---------- */
    contact: {
      headline: "Birlikte bir yer tasarlayalım.",
      email: "",
      phone: "+90 541 642 62 41",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/cebilermimarlik/" },
        { label: "Facebook", href: "https://www.facebook.com/cebiler.mimarlik" }
      ]
    }
  };
})();
