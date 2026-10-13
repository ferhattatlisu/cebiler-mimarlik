/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Yeni bir müşteri için yalnızca bu dosyayı ve "images" klasörünü
   değiştirmeniz yeterli. HTML, CSS ve diğer JS dosyasına dokunmayın.

   NASIL KULLANILIR
   1) Metinler: tırnak içindeki yazıları değiştirin. Tırnakları (" ")
      ve satır sonlarındaki virgülleri silmeyin.
   2) Fotoğraflar: fotoğrafı "images" klasörüne koyun ve
          foto("1602343168117-bb8ffe3e2e9f")
      yazan yeri
          "images/dosya-adi.jpg"
      ile değiştirin. foto(...) yalnızca geçici Unsplash görselleri
      içindir; müşteri fotoğrafları gelince hepsi kaldırılabilir.
      Önerilen boyut: geniş kenar 1600–2000 px, JPG.
   3) Proje eklemek: "projects" listesindeki bir bloğu { ... }, kopyalayıp
      yapıştırın. "slug" projenin adresini belirler: küçük harf, boşluksuz,
      Türkçe karaktersiz ve her projede farklı olmalı. Bu paket için
      önerilen proje sayısı 4–8'dir.
   4) Bir bölümü kaldırmak: listesini boş bırakın. Örneğin
          steps: [],
      yazarsanız "Nasıl çalışıyoruz" şeridi kendiliğinden kaybolur. Aynısı
      services, office.stats ve office.people için de geçerlidir.
   5) WhatsApp: "whatsapp" alanını boş ("") bırakırsanız WhatsApp düğmeleri
      görünmez.
   6) Bölüm başlıkları ve düğme yazıları dosyanın sonundaki "labels"
      bölümündedir.
   7) Yayına alırken en üstteki "demoNote" satırını boş ("") bırakın.
   8) Bu dosyanın dışında değişecek tek yer: index.html dosyasının başındaki
      başlık ve açıklama satırları (WhatsApp'ta ve Google'da görünen yazı).

   DİKKAT: Bu kopya Çebiler Mimarlık için özelleştirilmiştir (araclar/firma_demo.py).
   Ad, adres ve telefon gerçektir; projeler, görseller ve haberler ÖRNEKTİR.
   ===================================================================== */

(function () {
  // Geçici (yer tutucu) Unsplash görseli üretir.
  function foto(kimlik) {
    return "https://images.unsplash.com/photo-" + kimlik + "?auto=format&fit=crop&w=1600&q=70";
  }

  window.SITE = {

    // Sayfanın en altında görünen küçük not. Yayına alırken boş ("") bırakın.
    demoNote: "Bu sayfa tekTıkla tarafından Çebiler Mimarlık için hazırlanmış örnek tasarımdır. Projeler, metinler ve görseller temsilidir; yayına alınırken ofisin kendi proje ve fotoğraflarıyla değiştirilir.",

    /* ---------- MARKA ---------- */
    brand: {
      name: "ÇEBİLER",                // logonun kalın kısmı
      suffix: "Mimarlık",           // logonun ince kısmı
      city: "İzmit",
      // Google'da ve tarayıcı sekmesinde görünen kısa tanım
      description: "Çebiler Mimarlık; Kocaeli İzmit'te mimari proje, iç mimari ve uygulama hizmeti veren bir mimarlık ofisidir."
    },

    /* ---------- ÜST MENÜ ----------
       Karşılığı olan bölüm boşsa bağlantısı da kendiliğinden gizlenir.
    */
    nav: [
      { label: "Projeler",  href: "#projeler" },
      { label: "Ofis",      href: "#ofis" },
      { label: "Hizmetler", href: "#hizmetler" },
      { label: "İletişim",  href: "#iletisim" }
    ],

    /* ---------- AÇILIŞ ----------
       slides: sırayla değişen 1–4 fotoğraf. "project" alanına bir projenin
       slug'ını yazarsanız fotoğrafa tıklayınca o proje açılır.
    */
    hero: {
      slides: [
        { image: foto("1602343168117-bb8ffe3e2e9f"), caption: "Kartepe Evi — Kartepe, Kocaeli",           project: "kartepe-evi" },
        { image: foto("1622015663381-d2e05ae91b72"), caption: "Yamaç Evi — Başiskele, Kocaeli",   project: "yamac-evi" },
        { image: foto("1745429523617-0d837856ca35"), caption: "Daire 7 — Yahya Kaptan, İzmit",        project: "daire-7" }
      ],
      kicker: "İzmit · Kocaeli",
      intro: "İzmit'te mimari proje, iç mimari ve uygulama işleri yapan bir mimarlık ofisiyiz.",
      note: "Arsanın, bütçenin ve gündelik hayatın gerçeklerinden yola çıkar; sade, kullanışlı ve uzun ömürlü yapılar çizeriz.",
      linkLabel: "Ofisi tanıyın",
      linkHref: "#ofis"
    },

    /* ---------- PROJELER ---------- */
    projects: [
      {
        slug: "kartepe-evi",
        title: "Kartepe Evi",
        category: "Konut",
        location: "Kartepe, Kocaeli",
        year: 2024,
        area: "310 m²",
        status: "Tamamlandı",
        cover: foto("1602343168117-bb8ffe3e2e9f"),
        text: [
          "Dört kişilik bir aile için tasarlanan iki katlı bir ev. Yaşama alanı zemin katta tek bir açık mekân olarak kuruldu; sürgülü doğramalar açıldığında salon, teras ve havuz tek bir mekâna dönüşüyor.",
          "Yatak odaları üst katta ve her birinin kendi balkonu var. Cephede beyaz sıva ve ahşap, bahçe duvarlarında ise yörenin taşı kullanıldı."
        ],
        gallery: [
          foto("1660361338517-8c8fbb3ac264"),
          foto("1790276319523-66db7433ad78"),
          foto("1725257928373-dc6d2ac7b145")
        ]
      },
      {
        slug: "daire-7",
        title: "Daire 7",
        category: "İç Mekân",
        location: "Yahya Kaptan, İzmit",
        year: 2024,
        area: "135 m²",
        status: "Tamamlandı",
        cover: foto("1745429523617-0d837856ca35"),
        text: [
          "1980'lerden kalma bir apartman dairesinin baştan sona yenilenmesi. Koridor kaldırıldı, mutfak salona açıldı; daire aynı metrekarede çok daha ferah bir plana kavuştu.",
          "Açık renkli duvarlar, doğal ahşap ve az sayıda mobilya. Tesisat ve elektrik de tümüyle yenilendi."
        ],
        gallery: [
          foto("1705326701287-346fc37a2c86"),
          foto("1762544968153-b9b47435fefd"),
          foto("1643949915134-73a4c880f7c7")
        ]
      },
      {
        slug: "yamac-evi",
        title: "Yamaç Evi",
        category: "Konut",
        location: "Başiskele, Kocaeli",
        year: 2023,
        area: "240 m²",
        status: "Tamamlandı",
        cover: foto("1622015663381-d2e05ae91b72"),
        text: [
          "Eğimli bir parselde, yamaca basamaklanarak yerleşen bir ev. Eğim sorun olarak değil fırsat olarak ele alındı: her kat kendi terasına ve kendi manzarasına açılıyor.",
          "İstinat duvarlarında arazinin kendi taşı, girişte ahşap, üst katlarda beyaz sıva kullanıldı. Otopark yol kotunda, yaşama alanları üst kotlarda yer alıyor."
        ],
        gallery: [
          foto("1622015663319-e97e697503ee"),
          foto("1724582586458-a51791349977"),
          foto("1760072513457-651955c7074d")
        ]
      },
      {
        slug: "mahalle-kahvecisi",
        title: "Mahalle Kahvecisi",
        category: "Ticari",
        location: "İzmit, Kocaeli",
        year: 2023,
        area: "90 m²",
        status: "Tamamlandı",
        cover: foto("1565650839149-2c48a094196c"),
        text: [
          "Köşe başındaki eski bir dükkânın kahveciye dönüştürülmesi. Duvar boyunca uzanan sabit oturma ve ahşap çıtalı kaplama, dar mekânı olduğundan daha derin gösteriyor.",
          "Mobilyaların tamamı bu mekân için çizildi ve yerel bir atölyede üretildi. İş, tasarımdan açılışa on hafta sürdü."
        ],
        gallery: [
          foto("1511081692775-05d0f180a065"),
          foto("1579341560277-4dfaddaf6e98"),
          foto("1583354608715-177553a4035e")
        ]
      },
      {
        slug: "nar-sokak-apartmani",
        title: "Nar Sokak Apartmanı",
        category: "Konut",
        location: "Derince, Kocaeli",
        year: 2025,
        area: "2.650 m² · 14 daire",
        status: "Tamamlandı",
        cover: foto("1685514823717-7e1ff6ee0563"),
        text: [
          "Kentsel dönüşüm kapsamında yenilenen bir parselde on dört daireli bir apartman. Her dairenin iki cepheye açılması ve geniş bir balkonu olması planın çıkış noktası oldu.",
          "Cephe sade tutuldu; balkonlardaki sabit saksılar yapıya zamanla yeşil bir yüz kazandırıyor. Zemin katta bahçeye açılan iki daire yer alıyor."
        ],
        gallery: [
          foto("1614595737683-1740e41bfaac"),
          foto("1724582586529-62622e50c0b3"),
          foto("1671197244266-73129c97c096")
        ]
      },
      {
        // Henüz yapılmamış bir iş: fotoğraf yerine 3B görsellerle gösterilir.
        slug: "bahce-evi",
        title: "Bahçe Evi",
        category: "Konut",
        location: "Kandıra, Kocaeli",
        year: 2026,
        area: "280 m²",
        status: "Proje aşamasında (3B görsel)",
        cover: foto("1678575326996-a1bf09b86158"),
        text: [
          "Henüz proje aşamasında olan iki katlı bir aile evi. Buradaki görseller fotoğraf değil; inşaat başlamadan önce hazırladığımız 3B çalışmalar.",
          "Ev sahipleri malzemeyi, cephe rengini ve bahçe düzenini bu görseller üzerinden seçti. Ruhsat projesi tamamlandı; inşaatın 2027 baharında başlaması planlanıyor."
        ],
        gallery: [
          foto("1686164748261-33e13eef70b6"),
          foto("1706855203772-c249b75fe016")
        ]
      }
    ],

    /* ---------- OFİS (HAKKIMIZDA) ---------- */
    office: {
      headline: "Büyük laflar etmeyiz. İyi çalışan planların, doğru oranların ve zamanında biten işlerin peşindeyiz.",
      image: foto("1599420186946-7b6fb4e297f0"),
      imageAlt: "Çizim masasında plan üzerinde çalışan bir mimar",
      text: [
        "Çebiler Mimarlık, Kocaeli İzmit'te mimari proje, iç mimari ve uygulama alanlarında çalışan bir mimarlık ofisidir. Her işle baştan sona bizzat ilgileniriz.",
        "Salon ve yatak odası tasarımından müstakil eve, apartmandan iş yerine; işin yalnızca çizimini değil, 3B görsel ve animasyonlarını, şantiyedeki uygulamasını da üstleniyoruz."
      ],
      stats: [],
      people: [
        { name: "Muhammed Çebi", role: "Mimar" }
      ]
    },

    /* ---------- HİZMETLER ---------- */
    services: [
      { title: "Mimari Proje",                text: "Ön tasarım, ruhsat projesi ve uygulama projesi. Müstakil evden küçük apartmana; arsanıza ve imar durumunuza uygun çözüm." },
      { title: "İç Mimarlık",                 text: "Ev, ofis, kafe ve mağazalar için yerleşim planı, malzeme ve aydınlatma seçimi, özel üretim mobilya çizimleri." },
      { title: "3B Görselleştirme ve Animasyon",           text: "Yapı bitmeden nasıl görüneceğini gösteren gerçekçi görseller ve animasyonlar. Karar vermeyi de satışı da kolaylaştırır." },
      { title: "Uygulama ve Şantiye Takibi",  text: "Projenin çizildiği gibi yapılması için usta ve yüklenici koordinasyonu, yerinde düzenli kontrol." }
    ],

    /* ---------- NASIL ÇALIŞIYORUZ ---------- */
    steps: [
      { title: "Tanışma",    text: "Arsayı ya da mekânı yerinde görür; ihtiyacınızı, takviminizi ve bütçenizi dinleriz." },
      { title: "Ön tasarım", text: "Plan seçeneklerini eskiz ve 3B görsellerle sunar, kararı birlikte veririz." },
      { title: "Proje",      text: "Ruhsat ve uygulama projelerini hazırlar, belediye sürecini takip ederiz." },
      { title: "Uygulama",   text: "Şantiyeyi düzenli olarak denetler, işi çizildiği gibi teslim ederiz." }
    ],

    /* ---------- İLETİŞİM ----------
       whatsapp: ülke koduyla yazın (ör. "+90 532 000 00 00"). Boşsa düğme gizlenir.
       mapUrl: Google Haritalar'daki "Paylaş" bağlantısı. Boşsa adres aranır.
    */
    contact: {
      headline: "Projenizi konuşalım.",
      note: "Arsanız, daireniz ya da iş yeriniz için aklınızdakini anlatın; bir iş günü içinde dönelim.",
      phone: "+90 541 642 62 41",
      whatsapp: "+90 541 642 62 41",
      whatsappMessage: "Merhaba, bir proje için bilgi almak istiyorum.",
      email: "",
      address: "Ömerağa Mah. İnönü Cad. No: 184/47, İzmit / Kocaeli",
      mapUrl: "",
      hours: "",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/cebilermimarlik/" },
        { label: "Facebook", href: "https://www.facebook.com/cebiler.mimarlik" }
      ]
    },

    /* ---------- BÖLÜM BAŞLIKLARI ----------
       Sayfadaki başlıklar ve düğme yazıları. İstediğinizi değiştirin.
    */
    labels: {
      menu: "Menü",
      projects: "Projeler",
      projectsNote: "seçilmiş iş",                 // "6 seçilmiş iş" olarak görünür
      office: "Ofis",
      people: "Ekip",
      services: "Hizmetler",
      steps: "Nasıl çalışıyoruz",
      contact: "İletişim",
      whatsapp: "WhatsApp'tan yazın",
      call: "Arayın",
      directions: "Yol tarifi",
      address: "Adres",
      phone: "Telefon",
      email: "E-posta",
      hours: "Çalışma saatleri",
      social: "Sosyal medya",
      top: "Yukarı",
      close: "Kapat",
      prev: "Önceki",
      next: "Sonraki",
      allProjects: "Tüm projeler",
      projectCta: "Benzer bir iş için yazın",
      factLocation: "Yer",
      factYear: "Yıl",
      factArea: "Alan",
      factType: "Tür",
      factStatus: "Durum",
      noImage: "Görsel eklenecek"
    }
  };
})();
