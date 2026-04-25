/* ─────────────────────────────────────────────────────────────────────────
   i18n — TR / EN translation system
   Apply with data-i18n="key" on any element. Key uses dot notation.
   Special attribute helpers:
     data-i18n-placeholder, data-i18n-aria, data-i18n-title, data-i18n-alt
   Page <title> via document.body[data-i18n-title]
   ───────────────────────────────────────────────────────────────────────── */

const I18N = {
  tr: {
    nav: {
      projects: "Projeler",
      about: "Hakkımda",
      skills: "Yetkinlikler",
      contact: "İletişim",
      themeAria: "Tema değiştir",
      themeLight: "Açık Mod",
      themeDark: "Koyu Mod",
      langAria: "Dil değiştir"
    },
    showcase: { title: "Hayal et.<br/><em>Tasarla.</em><br/>Gerçeğe dönüştür." },
    hero: {
      tag: "Endüstriyel Tasarımcı · İzmir",
      title: "Halil Utku<br/><em>Şimşek</em>",
      sub: "Yat tasarımından endüstriyel ürünlere, kentsel mobilyadan kamusal mekâna — teknik çizim ve ileri görselleştirme uzmanlığıyla yenilikçi, estetik ve kullanıcı odaklı tasarımlar yaratıyorum.",
      ctaWork: "Projeleri Gör",
      ctaContact: "İletişime Geç",
      scroll: "Aşağı kaydır"
    },
    work: {
      tag: "Seçili Çalışmalar",
      title: "Projeler",
      catYacht: "Yat Tasarımı",
      catIndustrial: "Endüstriyel Ürün Tasarımı",
      catUrban: "Kentsel & Kamusal Tasarım",
      detail: "Detayları Gör →",
      badgeDiploma: "Diploma Projesi",
      badgeCompetition: "Yarışma"
    },
    proj: {
      pb: {
        meta1: "2023", meta2: "KLAN Studio",
        title: "45ft Multi Hardtop Powerboat",
        desc: "Klan Studio tarafından tasarlanan 14 metre uzunluğunda tender tipi powerboat konsepti. Elektrikli hardtop, modüler güverte düzeni ve tam donanımlı alt kabin ile hafta sonu kullanıcılarına yönelik yüksek performanslı konfor çözümü."
      },
      eko: {
        meta1: "2022", meta2: "12. Ulusal Gemi & Yat Tasarım Yarışması",
        title: "Ekofish 200ft",
        desc: "Sürdürülebilir balıkçılık için tasarlanmış teknoloji odaklı 200ft araştırma ve üretim gemisi. Atık azaltımı, enerji verimliliği ve modernize edilmiş operasyon alanları."
      },
      salm: {
        meta1: "2021–2022", meta2: "Salmakis Yachts / Neta Marine",
        title: "42,5m Motor Yat & 45m Gulet",
        desc: "Salmakis Yachts için 45m Gulet eskizleri ve iç mekân kavramları. Neta Marine bünyesinde 42,5m motor yat iç mekân geliştirme çalışmaları; malzeme seçimi ve dekor planlaması."
      },
      fold: {
        meta1: "2023", meta2: "Aydınlatma",
        title: "Foldesk Lamp",
        desc: "Profesyoneller için tasarlanmış katlanabilir masa lambası. Taşınabilirlik ve ergonomi önceliklendirilerek geliştirilen minimalist form dili, ayarlanabilir ışık açısı ve kompakt depolama."
      },
      beo: {
        meta1: "2022", meta2: "Alet Tasarımı",
        title: "Beo Minisaw",
        desc: "Bang & Olufsen marka kimliğine uygun lüks mini el testeresi. Skandinavya estetiği ile yüksek performanslı mühendislik çözümlerini birleştiren premium el aleti konsepti."
      },
      crea: {
        meta1: "2022", meta2: "Çalışma Ekipmanı",
        title: "Crea Light",
        desc: "Uzatılabilir bilgisayar çalışma aydınlatması. Esnek kol mekanizması, farklı çalışma yüzeylerinde konumlandırılabilir tutucu sistemi ve göz yorgunluğunu azaltan difüz ışık dağılımıyla uzun süreli çalışma konforunu hedefler."
      },
      scoot: {
        meta1: "2023", meta2: "Ulaşım / Kentsel",
        title: "Scooter Port",
        desc: "Şehir içi mikromobiliteyi daha erişilebilir ve sürdürülebilir hale getirmek için tasarlanmış akıllı bir scooter istasyonu. Mobil uygulama ve QR/RFID entegrasyonu sayesinde hızlı kiralama, güneş enerjisi destekli altyapı ile çevre dostu bir çözüm."
      },
      kmem: {
        meta1: "2022", meta2: "Perakende / Kamusal Alan",
        title: "KMEM Pop-up Mağaza",
        desc: "Kurukahveci Mehmet Efendi için tasarlanan bu pop-up mağaza, markanın geleneksel kahve kültürünü modern ve deneyim odaklı bir perakende anlayışıyla yeniden yorumlar. Dairesel formu sayesinde farklı yönlerden erişim sağlayarak açık hava AVM'lerde maksimum görünürlük sunar. Sıcak malzeme paleti, güçlü marka dili ve sürdürülebilir detaylarla desteklenen tasarım; kullanıcıya sadece bir ürün değil, etkileşimli ve akılda kalıcı bir kahve deneyimi sunmayı hedefler."
      }
    },
    about: {
      tag: "Hakkımda",
      title: "Tasarımın dili<br/><em>her yerde</em> konuşur",
      p1: "Yaşar Üniversitesi Endüstriyel Tasarım bölümünden 3.11 ortalama ile mezun oldum. Disiplinlerarası çalışmaya ve kullanıcı merkezli tasarım ilkelerine olan inancım, her projenin temelini oluşturuyor.",
      p2: "Neta Marine, Salmakis Yachts ve SKY Naval Architects bünyesinde edindiğim deneyimlerle yat tasarımında güçlü bir uzmanlık geliştirdim. Rhino, V-Ray ve Twinmotion gibi araçlarla hem kavramsal hem de üretime yakın çözümler üretiyorum.",
      eduUni: "Yaşar Üniversitesi",
      eduDept: "Endüstriyel Tasarım · 2023",
      eduGpa: "GPA: 3.11 / 4.00",
      expNetaRole: "Tasarım Stajyeri · 42,5m Motor Yat iç mekân geliştirme",
      expSalmRole: "Tasarım Stajyeri · 45m Gulet eskiz ve konsept çalışmaları",
      expSkyRole: "Tasarım Stajyeri · Naval mimari ve teknik çizim",
      expMegRole: "Tasarım Desteği · Malzeme ve yüzey tasarımı",
      statProjects: "Tamamlanan Proje",
      statIntern: "Staj Deneyimi",
      statGpa: "Mezuniyet GPA",
      statCert: "Sertifika"
    },
    skills: {
      tag: "Yetkinlikler",
      title: "Araçlar & Uzmanlık",
      modeling: "3D Modelleme",
      viz: "Görselleştirme & Render",
      ui: "UI & Sunum",
      certs: "Sertifikalar & Lisanslar",
      certYacht: "Yat Tasarımı Sertifikası",
      certInterior: "İç Mekân Tasarımı Sertifikası",
      certGh: "Grasshopper Sertifikası",
      certVray: "V-Ray Uzmanlık Sertifikası",
      certBoat: "Amatör Kaptan Ehliyeti",
      certDriver: "B Sınıfı Sürücü Belgesi"
    },
    testimonial: {
      text: "Yat tasarımı ile endüstriyel ürün tasarımını aynı titizlikle ele alan, teknik derinliği ile estetik duyarlılığını her projede dengeleyen bir tasarımcı olarak çalışmalarımda kullanıcı deneyimini her zaman merkeze alıyorum.",
      role: "Endüstriyel Tasarımcı · Yaşar Üniversitesi, 2023"
    },
    contact: {
      tag: "İletişim",
      title: "Birlikte bir şey<br/><em>tasarlayalım</em>",
      desc: "Yeni bir proje fikriniz mi var? Yat iç mekânından ürün tasarımına, kentsel mobilyadan marka kimliğine — sevinçle konuşalım.",
      location: "İzmir — Bodrum",
      labelName: "Ad Soyad",
      labelEmail: "E-posta",
      labelSubject: "Konu",
      labelMessage: "Mesaj",
      phName: "Adınız",
      phEmail: "email@domain.com",
      phSubject: "Proje veya iş birliği hakkında...",
      phMessage: "Projenizi anlatın...",
      submit: "Mesaj Gönder"
    },
    footer: { copy: "© 2024 Halil Utku Şimşek. Tüm hakları saklıdır." },

    /* ── Project detail pages ── */
    pageTitle: {
      home: "Halil Utku Şimşek — Endüstriyel Tasarımcı",
      pb:   "45ft Multi Hardtop Powerboat — Halil Utku Şimşek",
      kmem: "KMEM Pop-up Mağaza — Halil Utku Şimşek",
      scoot:"Scooter Port — Halil Utku Şimşek"
    },
    proj_detail: {
      breadcrumbHome: "Ana Sayfa",
      breadcrumbProjects: "Projeler",
      scroll: "Aşağı Kaydır",
      overviewLabel: "Proje Özeti",
      featuresTitle: "Tasarım Özellikleri",
      back: "← Tüm Projelere Dön",
      footer: "© 2024 Halil Utku Şimşek — Tüm hakları saklıdır."
    },
    pb: {
      breadcrumb: "45ft Powerboat",
      badge: "Diploma Projesi",
      year: "2023 · KLAN Studio",
      title: "45ft Multi<br/>Hardtop Powerboat",
      overview: "Klan Studio tarafından tasarlanan <strong>45ft Multi Hardtop</strong>, hafta sonlarını denizde geçirmeyi seven kullanıcılar için geliştirilmiş, yüksek performanslı ve konfor odaklı 14 metre uzunluğunda bir tender tipi powerboat konseptidir. Değişen hava koşullarına hızla uyum sağlamak amacıyla elektrikli lineer aktuatörler ile hareket eden bir hardtop ve yukarı kalkan yan camlar kullanılarak istendiğinde tamamen izole bir iç mekan yaratılabilmektedir. Tasarım bütünlüğünü korumak adına dıştan takma motorlar arka güneşlenme alanının altına gizlenmiş ve tekneye gizlenebilir bir çapa sistemi entegre edilmiştir. Ana güvertede hamak seçeneği sunan modüler kıç platform, sörf tahtası gibi eşyaların zahmetsizce yüklenmesini sağlayan hareketli rollbar ve yatağa dönüşebilen teleskobik masa gibi çok yönlü donanımlar yer alırken, alt güvertede yer alan master kabin, banyo ve mutfak alanı ile deniz üzerindeki konaklama ihtiyaçları eksiksiz bir şekilde karşılanmaktadır.",
      stat1: "Feet / 14m", stat2: "Güverte", stat3: "Kişi Kapasitesi", stat4: "Knot Hız",
      capExploded: "Patlak Görünüm — Bileşen Analizi",
      capSide1: "Yan Profil — Cam Kapalı",
      capSide2: "Yan Profil — Spor Konfigürasyon",
      capDeckOpen: "Ana Güverte — Açık Konfigürasyon",
      capDeckCabin: "Alt Güverte — Kabin",
      f1Title: "Elektrikli Hardtop",
      f1Desc: "Lineer aktuatörlerle çalışan hareketli çatı ve yukarı kalkan yan camlar; hava koşullarına göre saniyeler içinde tam kapalı veya tam açık konfigürasyon.",
      f2Title: "Gizli Motor & Çapa",
      f2Desc: "Dıştan takma motorlar arka güneşlenme alanı altına entegre edilmiş; temiz silüet korunurken operasyonel yetkinlik tam olarak sağlanmıştır.",
      f3Title: "Modüler Kıç Platform",
      f3Desc: "Hamak, sörf tahtası bağlantısı ve hareketli rollbar ile donatılmış çok amaçlı aft platform; her aktiviteye uyum sağlar.",
      f4Title: "Tam Donanımlı Alt Güverte",
      f4Desc: "Yatağa dönüşen teleskobik masa, master kabin, banyo ve mutfak alanı ile konaklamayı mümkün kılan kapsamlı iç mekan organizasyonu."
    },
    kmem: {
      breadcrumb: "KMEM Pop-up Mağaza",
      badge: "Perakende Tasarımı",
      year: "2022 · Kamusal Alan",
      title: "Kurukahveci Mehmet Efendi<br/>Pop-up Mağaza",
      overview: "<strong>Kurukahveci Mehmet Efendi</strong> için tasarlanan bu pop-up mağaza, markanın geleneksel kahve kültürünü modern ve deneyim odaklı bir perakende anlayışıyla yeniden yorumlar. Dairesel formu sayesinde farklı yönlerden erişim sağlayarak açık hava AVM'lerde maksimum görünürlük sunar. Sıcak malzeme paleti, güçlü marka dili ve sürdürülebilir detaylarla desteklenen tasarım; kullanıcıya sadece bir ürün değil, etkileşimli ve akılda kalıcı bir kahve deneyimi sunmayı hedefler.",
      stat1: "Dairesel Erişim", stat2: "Yön / Cephe", stat3: "Konsept Yılı", stat4: "Modüler Kurulum",
      capCover: "Tarihi Doku İçinde — Taksim",
      capUrban: "Açık Hava AVM — Kullanıcı Deneyimi",
      capTech: "Teknik Görünümler — Cephe ve Kesit",
      f1Title: "Dairesel Form",
      f1Desc: "360° erişilebilir geometri, açık hava AVM'lerde her yönden eşit görünürlük ve akış sağlayan dinamik bir sirkülasyon üretir.",
      f2Title: "Deneyim Odaklı Perakende",
      f2Desc: "Merkezdeki barista istasyonu, müşteriyi hazırlık sürecine dahil ederek markayla etkileşimli, akılda kalıcı bir buluşma noktası kurgular.",
      f3Title: "Güçlü Marka Dili",
      f3Desc: "Geleneksel Kurukahveci kimliği; sıcak ahşap tonları, altın aksanlar ve özel tipografi ile çağdaş perakende diline yeniden aktarılır.",
      f4Title: "Sürdürülebilir Detaylar",
      f4Desc: "Modüler yapı, söküp taşınabilir kurulum ve geri dönüştürülebilir malzeme seçimleri; pop-up formatına uygun düşük izli bir üretim önerir."
    },
    scoot: {
      breadcrumb: "Scooter Port",
      badge: "Ulaşım / Kentsel",
      year: "2023 · Akıllı Şehir",
      title: "Scooter Port<br/><em>Şarj İstasyonu</em>",
      overview: "<strong>Scooter Port</strong>, şehir içi mikromobiliteyi daha erişilebilir ve sürdürülebilir hale getirmek için tasarlanmış akıllı bir scooter istasyonudur. Mobil uygulama ve QR/RFID entegrasyonu sayesinde kullanıcılar hızlıca scooter kiralayabilirken, güneş enerjisi destekli altyapısı ile çevre dostu bir çözüm sunar. Modüler yapısı, reklam panosu entegrasyonu ve dayanıklı malzeme seçimi ile hem işlevsel hem de kentsel mekâna değer katan yenilikçi bir tasarım yaklaşımı sunar.",
      stat1: "Güneş Enerjili", stat2: "Akıllı Kilit", stat3: "Konsept Yılı", stat4: "Yerleşim",
      capSite: "Sahil Yerleşimi — Akıllı Şehir Bağlamı",
      capRender: "Şarj İstasyonu — Genel Render",
      capFront: "Önden Görünüm — Çift Yön Şarj",
      capTech: "Teknik Görünüm — Sistem Bileşenleri",
      f1Title: "Güneş Enerjili",
      f1Desc: "Üst panele entegre monokristal güneş hücreleri, istasyonun kendi kendine yetebilmesini sağlar; şehir şebekesine yük bindirmeden temiz enerji üretir.",
      f2Title: "Modüler Yerleşim",
      f2Desc: "Çift yönlü şarj yuvası ve modüler taşıyıcı kolon yapısı sayesinde farklı kentsel mekânlara — sahil, park, AVM çevresi — kolayca uyarlanabilir.",
      f3Title: "Akıllı Kilit & RFID",
      f3Desc: "OK/RFID ekranı ve uygulama entegrasyonu ile temassız kilit ve kullanıcı doğrulama; ödeme ve kullanım geçmişi mobil uygulama üzerinden takip edilir.",
      f4Title: "Reklam & Bilgi Paneli",
      f4Desc: "Tempered cam reklam yüzeyi ve çift yön bilgi LED'i; istasyonu sadece bir şarj noktası değil, kentsel iletişim ve yön bulma altyapısının parçası yapar."
    }
  },

  en: {
    nav: {
      projects: "Work",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      themeAria: "Toggle theme",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      langAria: "Switch language"
    },
    showcase: { title: "Imagine.<br/><em>Design.</em><br/>Bring it to life." },
    hero: {
      tag: "Industrial Designer · İzmir",
      title: "Halil Utku<br/><em>Şimşek</em>",
      sub: "From yacht design to industrial products, urban furniture to public spaces — I create innovative, refined and user-focused designs through technical drafting and advanced visualisation.",
      ctaWork: "View Work",
      ctaContact: "Get in Touch",
      scroll: "Scroll down"
    },
    work: {
      tag: "Selected Work",
      title: "Projects",
      catYacht: "Yacht Design",
      catIndustrial: "Industrial Product Design",
      catUrban: "Urban & Public Design",
      detail: "View details →",
      badgeDiploma: "Thesis Project",
      badgeCompetition: "Competition"
    },
    proj: {
      pb: {
        meta1: "2023", meta2: "KLAN Studio",
        title: "45ft Multi Hardtop Powerboat",
        desc: "A 14-metre tender-style powerboat concept designed at Klan Studio. With its electric hardtop, modular deck layout and fully-equipped lower cabin, it's a high-performance comfort solution for weekend cruising."
      },
      eko: {
        meta1: "2022", meta2: "12th National Ship & Yacht Design Competition",
        title: "Ekofish 200ft",
        desc: "A technology-focused 200ft research and production vessel designed for sustainable fishing — emphasising waste reduction, energy efficiency and modernised operational areas."
      },
      salm: {
        meta1: "2021–2022", meta2: "Salmakis Yachts / Neta Marine",
        title: "42.5m Motor Yacht & 45m Gulet",
        desc: "Sketches and interior concepts for a 45m Gulet at Salmakis Yachts. Interior development for a 42.5m motor yacht at Neta Marine — material selection and decor planning."
      },
      fold: {
        meta1: "2023", meta2: "Lighting",
        title: "Foldesk Lamp",
        desc: "A foldable desk lamp designed for professionals. Portability and ergonomics drive a minimalist form language, with adjustable light angle and compact storage."
      },
      beo: {
        meta1: "2022", meta2: "Tool Design",
        title: "Beo Minisaw",
        desc: "A premium mini handsaw aligned with Bang & Olufsen brand identity. Scandinavian aesthetics meet high-performance engineering in a refined hand-tool concept."
      },
      crea: {
        meta1: "2022", meta2: "Workspace Equipment",
        title: "Crea Light",
        desc: "An extendable computer workstation light. A flexible arm mechanism, repositionable holder system for different surfaces and a diffused light distribution that reduces eye strain support long working sessions."
      },
      scoot: {
        meta1: "2023", meta2: "Mobility / Urban",
        title: "Scooter Port",
        desc: "A smart scooter station designed to make urban micro-mobility more accessible and sustainable. Mobile app and QR/RFID integration enable fast rental, while solar-supported infrastructure delivers an eco-friendly solution."
      },
      kmem: {
        meta1: "2022", meta2: "Retail / Public Space",
        title: "KMEM Pop-up Store",
        desc: "Designed for Kurukahveci Mehmet Efendi, this pop-up store reinterprets the brand's traditional coffee culture through a modern, experience-driven retail approach. Its circular form provides multi-directional access for maximum visibility in open-air malls. A warm material palette, strong brand language and sustainable details aim to deliver not just a product but an interactive, memorable coffee experience."
      }
    },
    about: {
      tag: "About",
      title: "The language of design<br/>speaks <em>everywhere</em>",
      p1: "I graduated from Yaşar University's Industrial Design programme with a 3.11 GPA. My belief in interdisciplinary work and user-centred design principles forms the foundation of every project.",
      p2: "Through my time at Neta Marine, Salmakis Yachts and SKY Naval Architects I built a strong specialisation in yacht design. With tools like Rhino, V-Ray and Twinmotion I produce both conceptual and production-ready solutions.",
      eduUni: "Yaşar University",
      eduDept: "Industrial Design · 2023",
      eduGpa: "GPA: 3.11 / 4.00",
      expNetaRole: "Design Intern · 42.5m motor yacht interior development",
      expSalmRole: "Design Intern · 45m Gulet sketch and concept work",
      expSkyRole: "Design Intern · Naval architecture & technical drafting",
      expMegRole: "Design Support · Material and surface design",
      statProjects: "Completed Projects",
      statIntern: "Internships",
      statGpa: "Graduation GPA",
      statCert: "Certificates"
    },
    skills: {
      tag: "Skills",
      title: "Tools & Expertise",
      modeling: "3D Modelling",
      viz: "Visualisation & Render",
      ui: "UI & Presentation",
      certs: "Certificates & Licences",
      certYacht: "Yacht Design Certificate",
      certInterior: "Interior Design Certificate",
      certGh: "Grasshopper Certificate",
      certVray: "V-Ray Specialist Certificate",
      certBoat: "Amateur Skipper Licence",
      certDriver: "Class B Driving Licence"
    },
    testimonial: {
      text: "As a designer who treats yacht and industrial product design with equal rigour, balancing technical depth with aesthetic sensibility on every project, I keep the user experience at the centre of everything I make.",
      role: "Industrial Designer · Yaşar University, 2023"
    },
    contact: {
      tag: "Contact",
      title: "Let's design<br/><em>something together</em>",
      desc: "Have a new project in mind? From yacht interiors to product design, urban furniture to brand identity — I'd love to hear about it.",
      location: "İzmir — Bodrum",
      labelName: "Full Name",
      labelEmail: "Email",
      labelSubject: "Subject",
      labelMessage: "Message",
      phName: "Your name",
      phEmail: "email@domain.com",
      phSubject: "About a project or collaboration...",
      phMessage: "Tell me about your project...",
      submit: "Send Message"
    },
    footer: { copy: "© 2024 Halil Utku Şimşek. All rights reserved." },

    pageTitle: {
      home: "Halil Utku Şimşek — Industrial Designer",
      pb:   "45ft Multi Hardtop Powerboat — Halil Utku Şimşek",
      kmem: "KMEM Pop-up Store — Halil Utku Şimşek",
      scoot:"Scooter Port — Halil Utku Şimşek"
    },
    proj_detail: {
      breadcrumbHome: "Home",
      breadcrumbProjects: "Work",
      scroll: "Scroll down",
      overviewLabel: "Project Overview",
      featuresTitle: "Design Features",
      back: "← Back to all projects",
      footer: "© 2024 Halil Utku Şimşek — All rights reserved."
    },
    pb: {
      breadcrumb: "45ft Powerboat",
      badge: "Thesis Project",
      year: "2023 · KLAN Studio",
      title: "45ft Multi<br/>Hardtop Powerboat",
      overview: "Designed at Klan Studio, the <strong>45ft Multi Hardtop</strong> is a 14-metre tender-style powerboat concept developed for users who love spending weekends at sea — high-performance and comfort-focused. To adapt quickly to changing weather, an electric hardtop driven by linear actuators and rising side windows allow the cabin to become fully enclosed when needed. To preserve design integrity, the outboard motors are tucked beneath the aft sun deck and a retractable anchor system is integrated into the hull. The main deck offers a modular aft platform with a hammock option, a movable rollbar that lets surfboards and gear load effortlessly, and a telescopic table that converts into a bed. The lower deck features a master cabin, bathroom and galley, fully covering on-board accommodation needs.",
      stat1: "Feet / 14m", stat2: "Decks", stat3: "Capacity", stat4: "Knot Speed",
      capExploded: "Exploded View — Component Analysis",
      capSide1: "Side Profile — Glass Closed",
      capSide2: "Side Profile — Sport Configuration",
      capDeckOpen: "Main Deck — Open Configuration",
      capDeckCabin: "Lower Deck — Cabin",
      f1Title: "Electric Hardtop",
      f1Desc: "Linear-actuator-driven movable roof and rising side windows; switches between fully closed and fully open in seconds depending on weather.",
      f2Title: "Hidden Motor & Anchor",
      f2Desc: "Outboard motors are integrated under the aft sun deck; a clean silhouette is maintained while operational capability is preserved.",
      f3Title: "Modular Aft Platform",
      f3Desc: "A multi-purpose aft platform with hammock support, surfboard mount and movable rollbar — adapts to every activity.",
      f4Title: "Fully-Equipped Lower Deck",
      f4Desc: "A telescopic table that converts into a bed, a master cabin, bathroom and galley — comprehensive interior organisation that makes overnight stays effortless."
    },
    kmem: {
      breadcrumb: "KMEM Pop-up Store",
      badge: "Retail Design",
      year: "2022 · Public Space",
      title: "Kurukahveci Mehmet Efendi<br/>Pop-up Store",
      overview: "Designed for <strong>Kurukahveci Mehmet Efendi</strong>, this pop-up store reinterprets the brand's traditional coffee culture through a modern, experience-driven retail approach. Its circular form provides multi-directional access for maximum visibility in open-air malls. A warm material palette, strong brand language and sustainable details aim to deliver not just a product but an interactive, memorable coffee experience.",
      stat1: "Circular Access", stat2: "Facades", stat3: "Concept Year", stat4: "Modular Build",
      capCover: "Inside the Historical Fabric — Taksim",
      capUrban: "Open-Air Mall — User Experience",
      capTech: "Technical Views — Façade and Section",
      f1Title: "Circular Form",
      f1Desc: "360° accessible geometry creates equal visibility from every direction in open-air malls and produces a dynamic, flowing circulation.",
      f2Title: "Experience-Driven Retail",
      f2Desc: "The central barista station brings the customer into the preparation process, framing an interactive, memorable touchpoint with the brand.",
      f3Title: "Strong Brand Language",
      f3Desc: "The traditional Kurukahveci identity is carried into a contemporary retail vocabulary through warm wood tones, gold accents and custom typography.",
      f4Title: "Sustainable Details",
      f4Desc: "Modular construction, demountable installation and recyclable material choices propose a low-footprint build suited to the pop-up format."
    },
    scoot: {
      breadcrumb: "Scooter Port",
      badge: "Mobility / Urban",
      year: "2023 · Smart City",
      title: "Scooter Port<br/><em>Charging Station</em>",
      overview: "<strong>Scooter Port</strong> is a smart scooter station designed to make urban micro-mobility more accessible and sustainable. Mobile app and QR/RFID integration enable fast rentals, while solar-supported infrastructure delivers an eco-friendly solution. Its modular construction, integrated advertising panel and durable material choices propose an innovative design approach that is both functional and adds value to the urban context.",
      stat1: "Solar Powered", stat2: "Smart Lock", stat3: "Concept Year", stat4: "Layout",
      capSite: "Seafront Layout — Smart City Context",
      capRender: "Charging Station — General Render",
      capFront: "Front View — Dual-Sided Charging",
      capTech: "Technical View — System Components",
      f1Title: "Solar Powered",
      f1Desc: "Monocrystalline solar cells integrated into the top panel allow the station to be self-sufficient — generating clean energy without burdening the grid.",
      f2Title: "Modular Layout",
      f2Desc: "Dual-sided charging bays and a modular load-bearing column adapt the unit to different urban contexts — seafront, park, mall surroundings.",
      f3Title: "Smart Lock & RFID",
      f3Desc: "OK/RFID display and app integration provide contactless locking and user verification; payment and usage history are tracked through the mobile app.",
      f4Title: "Advertising & Info Panel",
      f4Desc: "A tempered glass advertising surface and dual-sided info LEDs make the station not just a charging point but part of the city's communication and wayfinding infrastructure."
    }
  }
};

function t(key, lang) {
  return key.split('.').reduce((o, k) => (o == null ? null : o[k]), I18N[lang]) ?? key;
}

function applyLang(lang) {
  const dict = I18N[lang]; if (!dict) return;
  document.documentElement.lang = lang;

  // text content (allow simple inline HTML in dictionary)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n, lang);
  });
  // attribute helpers
  const attrMap = {
    'data-i18n-placeholder': 'placeholder',
    'data-i18n-aria': 'aria-label',
    'data-i18n-title': 'title',
    'data-i18n-alt': 'alt'
  };
  Object.entries(attrMap).forEach(([dataAttr, htmlAttr]) => {
    document.querySelectorAll('[' + dataAttr + ']').forEach(el => {
      el.setAttribute(htmlAttr, t(el.getAttribute(dataAttr), lang));
    });
  });
  // page title
  const pageTitleKey = document.body.getAttribute('data-i18n-pagetitle');
  if (pageTitleKey) document.title = t(pageTitleKey, lang);

  // toggle button label
  document.querySelectorAll('.lang-toggle .lang-current').forEach(el => {
    el.textContent = lang === 'tr' ? 'EN' : 'TR';
  });

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'tr';
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'tr';
      applyLang(current === 'tr' ? 'en' : 'tr');
    });
  });
});
