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
    showcase: {
      title: "Hayal et.<br/><em>Tasarla.</em><br/>Gerçeğe dönüştür.",
      threeDActivate: "3D Sahneyi Aktif Et",
      threeDLoading: "3D Sahne Yükleniyor..."
    },
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
        desc: "Deniz ekosistemine zarar vermeden balık stoklarını koruyan sürdürülebilir bir trol gemisi. İnsansız su altı araçları dip trolünü hassas kontrol ederken, güneş panelleri enerji verimliliği sağlar; ölçü dışı balıklar canlı olarak doğaya kazandırılır."
      },
      salm: {
        meta1: "2021–2022", meta2: "Salmakis Yachts / Neta Marine",
        title: "42,5m Motor Yat & 45m Gulet",
        desc: "Salmakis Yachts bünyesinde Princess Melda 42,5m motor yat ve 45m Gulet projeleri kapsamında konsept geliştirme, 3D modelleme, iç mekân kurgusu ve render üretiminde aktif rol aldığım staj dönemi çalışmaları."
      },
      fold: {
        meta1: "2023", meta2: "Katlanabilir Aydınlatma",
        title: "Foldesk Lamp",
        desc: "Dar çalışma alanları için geliştirilen, katlanabilir mekanizmaya sahip kompakt bir masa aydınlatma çözümü. Lineer LED ışık barı, ayarlanabilir başlık ve çok eksenli menteşe sistemi ile mimar, mühendis ve tasarımcılar için ergonomik ve verimli bir çalışma deneyimi sunar."
      },
      beo: {
        meta1: "2022", meta2: "Bang & Olufsen",
        title: "Beo Minisaw",
        desc: "Bang & Olufsen'in premium tasarım diliyle yeniden yorumlanan, kompakt ve yüksek performanslı bir mini elektrikli testere konsepti. Modüler yapısı, entegre aydınlatma ve kontrol paneli ile bakım kolaylığı ve üst düzey kullanıcı deneyimi sunar."
      },
      crea: {
        meta1: "2022", meta2: "Çalışma Aydınlatması",
        title: "Crea Light",
        desc: "Uzun süreli bilgisayar kullanımında göz sağlığını korumak ve çalışma konforunu artırmak için tasarlanmış akıllı ve ergonomik masa aydınlatması. Uzayabilir form, 2700–6500K ayarlanabilir renk sıcaklığı, yüksek CRI LED ve entegre kamera kapatıcısı ile çalışma alanını sadeleştirir."
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
      },
      bumper: {
        meta1: "2024", meta2: "Eğlence Aracı",
        title: "Çarpışan Araç Tasarımı",
        desc: "Klasik lunapark deneyimini modern otomotiv tasarım diliyle yeniden yorumlayan çarpışan araç konsepti. İnce LED aydınlatma, darbe absorbe edici elastomer tampon ring ve tek parça ergonomik kabin yapısı ile fonksiyon ve estetiği bir araya getirir."
      }
    },
    about: {
      tag: "Hakkımda",
      title: "Tasarımın dili<br/><em>her yerde</em> konuşur",
      p1: "Yaşar Üniversitesi Endüstriyel Tasarım bölümünden mezun oldum. Disiplinlerarası çalışmaya ve kullanıcı merkezli tasarım ilkelerine olan inancım, her projenin temelini oluşturuyor.",
      p2: "Neta Marine, Salmakis Yachts ve SKY Naval Architects bünyesinde edindiğim deneyimlerle yat tasarımında güçlü bir uzmanlık geliştirdim. Rhino, V-Ray ve Twinmotion gibi araçlarla hem kavramsal hem de üretime yakın çözümler üretiyorum.",
      eduUni: "Yaşar Üniversitesi",
      eduDept: "Endüstriyel Tasarım · 2023",
      expNetaRole: "Tasarım Stajyeri · 42,5m Motor Yat iç mekân geliştirme",
      expSalmRole: "Tasarım Stajyeri · 45m Gulet eskiz ve konsept çalışmaları",
      expSkyRole: "Tasarım Stajyeri · Naval mimari ve teknik çizim",
      expMegRole: "Tasarım Desteği · Malzeme ve yüzey tasarımı",
      statProjects: "Tamamlanan Proje",
      statIntern: "Staj Deneyimi",
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
      submit: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      sent: "Gönderildi ✓",
      success: "Mesajınız iletildi. En kısa sürede dönüş yapacağım.",
      error: "Gönderilemedi. Lütfen tekrar deneyin veya doğrudan e-posta atın.",
      captchaRequired: 'Lütfen "Ben robot değilim" kutusunu işaretleyin.'
    },
    footer: {
      copy: "© 2026 Halil Utku Şimşek. Tüm hakları saklıdır.",
      legal: "Telif Hakkı"
    },
    legal: {
      pageTitle: "Telif Hakkı — Halil Utku Şimşek",
      label: "Yasal Bilgi",
      title: "Telif Hakkı &amp; Kullanım Koşulları",
      updated: "Son güncelleme: 3 Mayıs 2026",
      s1Title: "Telif Hakkı Bildirimi",
      s1P1: "<strong>utkusimsek.com</strong> sitesinde yer alan tüm görseller, render'lar, 3D modeller, metinler, tasarım çizimleri, videolar ve diğer tüm içerikler <strong>© 2026 Halil Utku Şimşek</strong>'e aittir ve <strong>5846 sayılı Fikir ve Sanat Eserleri Kanunu</strong> ile uluslararası telif hakkı sözleşmeleri kapsamında korunmaktadır.",
      s1P2: "Tüm hakları saklıdır. Eserlerin tamamı veya bir kısmı, yazılı izin alınmaksızın çoğaltılamaz, dağıtılamaz, türev eserlere konu edilemez, ticari veya ticari olmayan amaçlarla kullanılamaz.",
      s2Title: "Yasaklanan Kullanımlar",
      s2L1: "Görsellerin, render'ların veya 3D modellerin <strong>indirilmesi, kaydedilmesi veya kopyalanması</strong>",
      s2L2: "İçeriklerin <strong>başka web sitelerinde, sosyal medyada veya basılı yayınlarda</strong> kaynak gösterilse bile izinsiz yayımlanması",
      s2L3: "Tasarımların <strong>türev çalışmalara, eğitim materyallerine, portfolyolara</strong> dahil edilmesi",
      s2L4: "İçeriklerin <strong>yapay zekâ modeli eğitiminde</strong> kullanılması",
      s2L5: "<strong>Watermark, EXIF metadata veya telif bildirimlerinin</strong> kaldırılması, değiştirilmesi veya gizlenmesi",
      s2L6: "Tasarımların <strong>üretim, prototipleme veya ticari amaçlı</strong> kullanılması",
      s3Title: "İzin Verilen Kullanımlar",
      s3P1: "Aşağıdaki kullanımlar izinli sayılır:",
      s3L1: "Sitenin <strong>özgün URL'sinin</strong> (utkusimsek.com) sosyal medyada veya yazışmalarda paylaşılması",
      s3L2: "Tarayıcının <strong>dahili önbellek (cache) sistemi</strong> aracılığıyla teknik amaçlı geçici saklama",
      s3L3: "Akademik veya basın amaçlı <strong>tek bir görselin</strong>, açık kaynak gösterimiyle ve <strong>önceden alınan yazılı izinle</strong> kullanılması",
      s4Title: "Lisans ve İşbirliği Talepleri",
      s4P1: "Tasarımların kullanımı, basım, sergi, eğitim veya işbirliği talepleri için doğrudan iletişime geçin.",
      s4Callout: "<strong>İletişim:</strong> <a href=\"mailto:utkusimsek65@gmail.com\">utkusimsek65@gmail.com</a><br/>Talebinizi mümkün olduğunca detaylı yazın (kullanım amacı, mecra, süre, ölçek). Genellikle 48 saat içinde dönüş yapılır.",
      s5Title: "Koruma Tedbirleri",
      s5P1: "Bu sitedeki tüm görseller aşağıdaki tedbirlerle korunmaktadır:",
      s5L1: "<strong>Görünür filigran (watermark):</strong> Her görselde <code>©utkusimsekdesign</code> imzası bake edilmiştir",
      s5L2: "<strong>EXIF/IPTC/XMP metadata:</strong> Her dosyada yazar, telif sahibi ve kullanım koşulları gömülüdür (silmek hukuki suç sayılır)",
      s5L3: "<strong>Teknik koruma:</strong> Sağ tık, sürükle-bırak ve sayfa indirme engelleri aktiftir",
      s5L4: "<strong>Hukuki koruma:</strong> İhlaller 5846 sayılı Kanun ve TBK madde 49 vd. çerçevesinde takip edilmektedir",
      s6Title: "Hak İhlali Bildirimi",
      s6P1: "Eserlerimin izinsiz kullanıldığını fark ederseniz veya kendiniz bir kullanım yaptıysanız ve durumu düzeltmek istiyorsanız, lütfen <a href=\"mailto:utkusimsek65@gmail.com\">utkusimsek65@gmail.com</a> adresinden bildirin. İyi niyetli düzeltme talepleri her zaman yapıcı şekilde değerlendirilir.",
      back: "← Ana Sayfaya Dön"
    },

    /* ── Project detail pages ── */
    pageTitle: {
      home: "Halil Utku Şimşek — Endüstriyel Tasarımcı",
      legal: "Telif Hakkı — Halil Utku Şimşek",
      pb:   "45ft Multi Hardtop Powerboat — Halil Utku Şimşek",
      kmem: "KMEM Pop-up Mağaza — Halil Utku Şimşek",
      scoot:"Scooter Port — Halil Utku Şimşek",
      eko:  "Ekofish 200ft — Halil Utku Şimşek",
      crea: "Crea Light — Halil Utku Şimşek",
      beo:  "Beo Minisaw — Halil Utku Şimşek",
      fold: "Foldesk Lamp — Halil Utku Şimşek",
      bumper: "Çarpışan Araç Tasarımı — Halil Utku Şimşek",
      salm: "Salmakis Yachts — Princess Melda & 45m Gulet — Halil Utku Şimşek"
    },
    proj_detail: {
      breadcrumbHome: "Ana Sayfa",
      breadcrumbProjects: "Projeler",
      scroll: "Aşağı Kaydır",
      overviewLabel: "Proje Özeti",
      featuresTitle: "Tasarım Özellikleri",
      back: "← Tüm Projelere Dön",
      footer: "© 2026 Halil Utku Şimşek — Tüm hakları saklıdır."
    },
    pb: {
      breadcrumb: "45ft Powerboat",
      badge: "Diploma Projesi",
      year: "2023 · KLAN Studio",
      title: "45ft Multi<br/>Hardtop Powerboat",
      overview: "Klan Studio tarafından tasarlanan <strong>45ft Multi Hardtop</strong>, hafta sonlarını denizde geçirmeyi seven kullanıcılar için geliştirilmiş, yüksek performanslı ve konfor odaklı 14 metre uzunluğunda bir tender tipi powerboat konseptidir. Değişen hava koşullarına hızla uyum sağlamak amacıyla elektrikli lineer aktuatörler ile hareket eden bir hardtop ve yukarı kalkan yan camlar kullanılarak istendiğinde tamamen izole bir iç mekân yaratılabilmektedir. Tasarım bütünlüğünü korumak adına dıştan takma motorlar arka güneşlenme alanının altına gizlenmiş ve tekneye gizlenebilir bir çapa sistemi entegre edilmiştir. Ana güvertede hamak seçeneği sunan modüler kıç platform, sörf tahtası gibi eşyaların zahmetsizce yüklenmesini sağlayan hareketli rollbar ve yatağa dönüşebilen teleskobik masa gibi çok yönlü donanımlar yer alırken, alt güvertede yer alan master kabin, banyo ve mutfak alanı ile deniz üzerindeki konaklama ihtiyaçları eksiksiz bir şekilde karşılanmaktadır.",
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
      f3Desc: "Hamak, sörf tahtası bağlantısı ve hareketli rollbar ile donatılmış çok amaçlı kıç platform; her aktiviteye uyum sağlar.",
      f4Title: "Tam Donanımlı Alt Güverte",
      f4Desc: "Yatağa dönüşen teleskobik masa, master kabin, banyo ve mutfak alanı ile konaklamayı mümkün kılan kapsamlı iç mekân organizasyonu.",
      threeDLabel: "İnteraktif 3D Model",
      threeDTitle: "Modeli Kendi Açından İncele",
      threeDSubtitle: "Sürükle, döndür, yakınlaştır. Mobil cihazda <strong>AR modu</strong> ile tekneyi kendi mekânında ölçekli görüntüle.",
      threeDLoading: "3D Model Yükleniyor...",
      threeDError: "Model yüklenemedi. Sayfayı yenileyin veya bir süre sonra tekrar deneyin.",
      threeDAR: "AR'da Gör",
      threeDDrag: "Sürükle: Döndür",
      threeDPan: "Sağ tık: Kaydır",
      threeDZoom: "Tekerlek: Yakınlaştır"
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
      f3Desc: "QR/RFID ekranı ve uygulama entegrasyonu ile temassız kilit ve kullanıcı doğrulama; ödeme ve kullanım geçmişi mobil uygulama üzerinden takip edilir.",
      f4Title: "Reklam & Bilgi Paneli",
      f4Desc: "Tempered cam reklam yüzeyi ve çift yön bilgi LED'i; istasyonu sadece bir şarj noktası değil, kentsel iletişim ve yön bulma altyapısının parçası yapar."
    },
    eko: {
      breadcrumb: "Ekofish 200ft",
      badge: "Yarışma",
      year: "2022 · 12. Ulusal Gemi & Yat Tasarım Yarışması",
      title: "Ekofish 200ft<br/><em>Sürdürülebilir Trol</em>",
      overview: "<strong>Ekofish 200ft – Akıllı ve Sürdürülebilir Balıkçılık Sistemi</strong><br/><br/>Ekofish 200ft, deniz ekosistemini koruyarak verimli balıkçılık yapılmasını hedefleyen, ileri teknolojiyle donatılmış yenilikçi bir balıkçı gemisi konseptidir. Proje; su altı ve hava destekli insansız sistemler, akıllı avlanma mekanizmaları ve enerji verimliliği odaklı çözümleri bir araya getirerek sürdürülebilir denizcilik anlayışına yeni bir standart getirir.<br/><br/>Gemide konumlandırılan insansız su altı araçları (AUV), sonar, lidar ve hidrofon gibi sensörler aracılığıyla balık popülasyonlarını yüksek hassasiyetle analiz eder. Bu sayede hedef odaklı avlanma gerçekleştirilirken, gereksiz ağ kullanımı ve ekosistem üzerindeki baskı minimize edilir. Aynı zamanda dip trolü gibi zararlı yöntemlerin etkileri azaltılarak deniz tabanı korunur.<br/><br/>Geliştirilen akıllı ağ ve ayıklama sistemi, avlanan balıkları boyutlarına göre ayrıştırır. Avlanma kriterlerine uygun olmayan balıklar özel tahliye kanalları sayesinde zarar görmeden tekrar denize bırakılır. Bu mekanizma, biyolojik çeşitliliğin sürdürülebilirliğini desteklerken yasal avlanma standartlarına tam uyum sağlar.<br/><br/>Ekofish 200ft'in güverte tasarımında yer alan raylı havuz kapatma sistemi, operasyon sırasında alan optimizasyonu sağlayarak hem işlevselliği hem de güvenliği artırır. Bununla birlikte entegre güneş panelleri, geminin enerji ihtiyacını destekleyerek karbon ayak izini azaltır ve operasyon maliyetlerini düşürür.<br/><br/>Projede yer alan insansız hava araçları (UAV) ise deniz yüzeyi ve hava koşullarını anlık olarak analiz eder, navigasyon süreçlerini destekler ve acil durum senaryolarında hızlı müdahale imkânı sunar.<br/><br/>Ekofish 200ft, teknoloji, çevre ve verimliliği tek bir platformda buluşturarak geleceğin balıkçılık anlayışına yön veren sürdürülebilir bir çözüm sunar.",
      stat1: "Metre Boy", stat2: "Metre Genişlik", stat3: "Hassas Kontrol", stat4: "Solar Destek",
      capCover: "Genel Render — 60.9m Trol Gemisi",
      capTop: "Üstten Görünüm — Sistem Bileşenleri",
      capProcess: "Avlanma Süreci — Su Altı Operasyonu",
      capFeatures: "Sistem Özellikleri",
      capSorting: "Avlama & Ayıklama Sırası",
      capTech: "Teknik Çizim — Ölçek 1:300",
      f1Title: "İnsansız Su Altı Araçları (AUV)",
      f1Desc: "Sonar, lidar ve hidrofon sensörleriyle dip trolünü hassas şekilde kontrol eden AUV'lar; balıkları yüksek hassasiyetle tespit eder, biyolojik çeşitliliği korur.",
      f2Title: "Güneş Paneli Sistemi",
      f2Desc: "Üst güverteye entegre güneş panelleri, geminin enerji verimliliğini artırarak çevresel sürdürülebilirliği destekler ve işletme maliyetlerini düşürür.",
      f3Title: "Boyuta Göre Ayıklama",
      f3Desc: "Ayıklama düzeneği balıkları boyutlarına göre ayırır; ölçülere uymayan balıklar canlı olarak doğal ortamlarına geri bırakılır.",
      f4Title: "Ray Sistemli Havuz",
      f4Desc: "Güvertede ray sistemiyle kapatılabilen havuz, estetik ve fonksiyonelliği bir arada sunar; alanı koruma ve operasyona uygun şekilde optimize eder."
    },
    crea: {
      breadcrumb: "Crea Light",
      badge: "Çalışma Aydınlatması",
      year: "2022 · Ergonomi",
      title: "Crea Light<br/><em>Akıllı ve Ergonomik Çalışma Aydınlatması</em>",
      overview: "<strong>Crea Light – Akıllı ve Ergonomik Çalışma Aydınlatması</strong><br/><br/>Crea Light, uzun süreli bilgisayar kullanımında göz sağlığını korumak ve çalışma konforunu artırmak amacıyla tasarlanmış yenilikçi bir masa aydınlatma çözümüdür. Özellikle 40 yaş ve üzeri kullanıcıların yaşadığı odaklanma ve görme zorluklarını hedef alarak geliştirilmiş; ayarlanabilir yapısı sayesinde her kullanıcıya özel bir deneyim sunar.<br/><br/>Uzayabilir formu ile farklı ekran boyutlarına ve çalışma alanlarına kolayca adapte olan Crea Light; aydınlatma açısı, renk sıcaklığı ve parlaklık ayarları ile kişiselleştirilebilir bir kullanım sağlar. Bu sayede göz yorgunluğu azaltılır, ekran karşısında geçirilen süre daha verimli ve konforlu hale getirilir.<br/><br/>Üründe kullanılan dayanıklı alüminyum gövde, uzun ömürlü kullanım sunarken estetik ve modern bir görünüm sağlar. Yüksek renk doğruluğuna sahip LED aydınlatma sistemi, çalışma ortamında dengeli ve homojen bir ışık dağılımı oluşturarak göz sağlığını destekler.<br/><br/>Entegre kamera kapatıcısı ve modüler bağlantı yapısı sayesinde kullanıcı güvenliği ve pratiklik ön planda tutulmuştur. Type-C bağlantı altyapısı ile modern cihazlarla tam uyum sağlayan ürün, kompakt ve işlevsel tasarımıyla masa düzenini sadeleştirir.<br/><br/>Crea Light, teknoloji ve ergonomiyi bir araya getirerek çalışma alanlarını daha sağlıklı, daha verimli ve daha estetik hale getiren yeni nesil bir aydınlatma çözümüdür.",
      stat1: "Renk Sıcaklığı", stat2: "Bağlantı", stat3: "LED Renk Doğruluğu", stat4: "Gövde Malzemesi",
      capCover: "Çalışma Ortamı — Monitör Üstü Yerleşim",
      capRender: "3D Render — Genel Görünüm",
      capFront: "Önden Görünüm — Kontrol Düğmeleri",
      capSide: "Yandan — Modüler Bağlantı Mekanizması",
      capTop: "Üstten — Kamera Kapatıcı Detayı",
      capTech: "Patlak Görünüm — Bileşen Analizi",
      f1Title: "Uzayabilir & Ayarlanabilir Form",
      f1Desc: "Teleskobik kol farklı ekran boyutlarına ve çalışma alanlarına kolayca adapte olur; aydınlatma açısı kullanıcının ergonomisine göre kişiselleştirilebilir.",
      f2Title: "40+ Kullanıcıya Özel Aydınlatma",
      f2Desc: "2700–6500K renk sıcaklığı ve kademeli parlaklık kontrolü; özellikle 40 yaş üstü kullanıcıların odaklanma ve görme konforunu artıracak şekilde ayarlanır.",
      f3Title: "Yüksek CRI LED Sistemi",
      f3Desc: "Yüksek renk doğruluğuna sahip LED aydınlatma; çalışma yüzeyinde dengeli ve homojen ışık dağılımı oluşturarak göz yorgunluğunu azaltır.",
      f4Title: "Kamera Kapatıcı, Alüminyum Gövde & USB-C",
      f4Desc: "Entegre fiziksel kamera kapatıcı kullanıcı gizliliğini güvence altına alır; dayanıklı alüminyum gövde ve Type-C modüler bağlantı, modern cihazlarla tam uyumlu kompakt bir tasarım sunar."
    },
    beo: {
      breadcrumb: "Beo Minisaw",
      badge: "Alet Tasarımı",
      year: "2022 · Bang & Olufsen",
      title: "Beo Minisaw<br/><em>Premium Mini Elektrikli Testere</em>",
      overview: "<strong>Beo Minisaw — Bang & Olufsen Premium Mini Elektrikli Testere</strong><br/><br/>Beo Minisaw, Bang & Olufsen'in premium tasarım diliyle yeniden yorumlanan, kompakt ve yüksek performanslı bir mini elektrikli testere konseptidir. Minimal formu, ergonomik tutuşu ve rafine malzeme kullanımıyla hem profesyonel hem de bireysel kullanıcılar için konforlu ve güvenli bir kullanım sunar.<br/><br/>Modüler yapısı sayesinde bakım ve parça değişimi kolaylaştırılırken, entegre aydınlatma ve kontrol paneli ile kullanıcı deneyimi üst seviyeye taşınır.<br/><br/>Güç, estetik ve fonksiyonelliği bir araya getiren Beo Minisaw, modern yaşamın ihtiyaçlarına şık ve yenilikçi bir çözüm getirir.",
      stat1: "Marka Kimliği", stat2: "Bakım & Parça", stat3: "Aydınlatma & Panel", stat4: "Malzeme & Form",
      capDock: "Şarj İstasyonunda — Premium Yerleşim",
      capRender: "Kontrol Paneli — Entegre Arayüz",
      capSide: "Yandan — Zincir Mekanizması Açık",
      capTop: "Üstten — Tutuş Detayı",
      capControls: "Kontrol Yüzeyi — Hız & Mod Seçimi",
      capTech: "Patlak Görünüm — Modüler Bileşen Analizi",
      f1Title: "Premium B&O Estetik",
      f1Desc: "Bang & Olufsen'in minimal form dili, alüminyum ve cam dokunuşu, sade renk paleti ile premium bir el aleti deneyimi; ürün, yerleştirildiği her ortama doğal biçimde dahil olur.",
      f2Title: "Modüler Yapı",
      f2Desc: "Sökülebilir gövde grupları ve hızlı değişim noktaları ile bakım, batarya ve testere zinciri değişimi kullanıcı tarafından kolayca yapılabilir; ürün ömrü uzar, atık azalır.",
      f3Title: "Entegre Aydınlatma & Panel",
      f3Desc: "Kesim hattını aydınlatan LED ön ışık ve dokunmatik kontrol paneli; hız, mod ve durum bilgileri ergonomik bir ara yüzde toplanarak güvenli, hassas kullanım sağlar.",
      f4Title: "Ergonomik & Güvenli Tutuş",
      f4Desc: "Yumuşak grip dokusu, dengeli ağırlık dağılımı ve parmak koruyucu yapı; uzun süreli kullanımda yorulmayı azaltır ve hem profesyonel hem bireysel kullanıcılar için güvenli operasyon sunar."
    },
    fold: {
      breadcrumb: "Foldesk Lamp",
      badge: "Aydınlatma",
      year: "2023 · Katlanabilir Form",
      title: "Foldesk Lamp<br/><em>Katlanabilir Çalışma Aydınlatması</em>",
      overview: "<strong>Foldesk Lamp — Katlanabilir Kompakt Çalışma Aydınlatması</strong><br/><br/>Foldesk Lamp, dar çalışma alanları için geliştirilen, katlanabilir mekanizmaya sahip kompakt bir masa aydınlatma çözümüdür. Lineer LED ışık barı ve ayarlanabilir başlık yapısı sayesinde homojen ve odaklı ışık dağılımı sunarken, çok eksenli menteşe sistemi ile farklı çalışma senaryolarına kolayca uyum sağlar.<br/><br/>Metal gövde ve hassas ray mekanizması, hem dayanıklılığı hem de akıcı hareket kabiliyetini destekler. Katlandığında minimum yer kaplayan tasarım, açıldığında geniş bir aydınlatma yüzeyi oluşturarak özellikle mimar, mühendis ve tasarımcılar için ergonomik ve verimli bir çalışma deneyimi sağlar.",
      stat1: "LED Işık Barı", stat2: "Kompakt Form", stat3: "Menteşe Sistemi", stat4: "Gövde & Ray",
      capLifestyle: "Çalışma Alanı — Açık Konfigürasyon",
      capRender: "3D Render — Çift Kollu Konfigürasyon",
      capSide: "Yandan — Katlanmış Kompakt Pozisyon",
      capControls: "Kontrol Yüzeyi — LED Bar & Düğmeler",
      capFront: "Önden Görünüm — LED Bar & Mengene",
      capTop: "Üstten — Katlanmış Form",
      capTech: "Menteşe Mekanizması — Çok Eksenli Eklem Sistemi",
      f1Title: "Lineer LED Işık Barı",
      f1Desc: "Çalışma yüzeyi boyunca uzanan lineer LED dizgesi, gölgesiz ve homojen bir aydınlatma alanı yaratır; ek başlık yapısıyla odaklanmış ışığa geçişi mümkün kılar.",
      f2Title: "Çok Eksenli Menteşe Sistemi",
      f2Desc: "Birden fazla eksende dönen menteşe yapısı, lambanın okuma, çizim ve detay çalışması gibi farklı senaryolara saniyeler içinde uyum sağlamasını sağlar.",
      f3Title: "Katlanabilir Kompakt Form",
      f3Desc: "Katlandığında masada minimum yer kaplayan ince profil; açıldığında geniş bir aydınlatma yüzeyine dönüşerek dar çalışma alanlarında bile esneklik sunar.",
      f4Title: "Metal Gövde & Hassas Ray",
      f4Desc: "Metal gövde uzun ömürlü kullanım sunarken, hassas ray mekanizması başlık konumunun yumuşak ve titreşimsiz şekilde değiştirilmesine olanak tanır."
    },
    salm: {
      breadcrumb: "Salmakis Yachts",
      badge: "Yat Tasarımı",
      year: "2021–2022 · Salmakis Yachts / Neta Marine",
      heroTitle: "42,5m Motor Yat &amp; 45m Gulet<br/><em>Princess Melda</em>",
      overview: "<strong>Salmakis Yachts — 42,5 Metre Motor Yat | Princess Melda</strong><br/><br/>Staj sürecimde, lüks yat tasarımı ve üretim süreçlerini bütüncül bir bakış açısıyla deneyimleme fırsatı buldum. 42,5 metre motor yat projesi kapsamında; konsept geliştirme, 3D modelleme, iç mekân kurgusu ve görselleştirme aşamalarında aktif rol aldım.<br/><br/>Projede, modern yat tasarımının gerektirdiği estetik ve fonksiyonelliği bir araya getirerek; dış form dilinden iç mekân detaylarına kadar kullanıcı deneyimini ön planda tutan çözümler geliştirdim. Güverte planlaması, yaşam alanlarının organizasyonu ve malzeme seçimleri gibi kritik konularda tasarım kararlarına katkı sağladım.<br/><br/>Aynı zamanda yüksek kaliteli render ve sunum görselleri üreterek projenin görsel anlatımını güçlendirdim. Bu süreç, teknik bilgi ile tasarım estetiğini birleştirme ve gerçek üretim koşullarına uygun çözümler geliştirme açısından önemli bir deneyim kazandırdı.",
      stat1: "Motor Yat Boyu", stat2: "Gulet Konsepti", stat3: "Modelleme & Render", stat4: "İç Mekân Kurgusu",
      divMelda: "Princess Melda · 42,5m Motor Yat",
      divGulet: "Salmakis · 45m Gulet",
      divConcept: "Konsept &amp; Eskiz Çalışmaları",
      capYanAci: "Princess Melda — Yan Açı",
      capMeldaTop: "Üstten — Güverte Planlaması",
      capMelda8: "Ön 3/4 — Form Çalışması",
      capInterior: "İç Mekân Kurgusu — Kabinler, Salon &amp; Köprü",
      capGuletSunset: "45m Gulet — Gün Batımında Direkler",
      capGuletTop: "Üstten — Direk &amp; Güverte Hatları",
      capConcept1: "Konsept Varyasyonu — 3/4 Görünüm",
      capConcept2: "Konsept Varyasyonu — Yandan",
      capSketchMotor: "Eskiz — Motor Yat Form Arayışı",
      capSketchGulet: "Eskiz — Gulet Silüet Çalışması",
      f1Title: "Konsept &amp; 3D Modelleme",
      f1Desc: "Form arayışından detaylı 3D modele kadar tüm geliştirme aşamalarında aktif rol; Rhino tabanlı yüzey çalışmaları ile üretime uygun, rafine bir dış form dili.",
      f2Title: "İç Mekân Kurgusu",
      f2Desc: "Kabinler, salon, köprü ve teknik hacimlerin organizasyonu; yaşam alanlarının ergonomik dizilimi, sirkülasyon ve doğal ışık dengesinin gözetildiği iç plan.",
      f3Title: "Malzeme &amp; Dekor Planlaması",
      f3Desc: "Doğal ahşap, açık tonlu döşemeler ve metal aksamların ölçülü buluşması; lüks yat estetiğinin gerçek üretim koşullarıyla uyumlu, dayanıklı ve şık bir paletle yorumlanması.",
      f4Title: "Render &amp; Sunum Görselleri",
      f4Desc: "KeyShot ve Figma ile üretilmiş yüksek kaliteli render ve sunum görselleri; projenin görsel anlatımını güçlendirerek karar süreçlerini hızlandıran sinematik kareler."
    },
    bumper: {
      breadcrumb: "Çarpışan Araç Tasarımı",
      badge: "Eğlence Aracı",
      year: "2024 · Otomotiv İlhamlı",
      title: "Çarpışan Araç Tasarımı<br/><em>Modern Lunapark Konsepti</em>",
      overview: "<strong>Çarpışan Araç Tasarımı — Modern Lunapark Konsepti</strong><br/><br/>Bu proje, klasik lunapark deneyimini modern tasarım diliyle yeniden yorumlamayı amaçlayan bir çarpışan araç konseptidir. Tasarım sürecinde kullanıcı deneyimi, güvenlik, üretilebilirlik ve estetik dengesi birlikte ele alınmış; eğlence ekipmanlarının çoğunda göz ardı edilen rafine form dili bu projenin omurgasını oluşturmuştur.<br/><br/><strong>Form &amp; Estetik —</strong> Form dili, akıcı yüzey geçişleri ve minimal detay kullanımı ile çağdaş otomotiv tasarım trendlerinden ilham alırken, eğlence parklarının dinamik ve renkli atmosferine uyum sağlayacak şekilde kurgulanmıştır. Karakter çizgileri, ön ve arka tampon hatlarıyla diyalog kurarak araca tutarlı bir kimlik kazandırır. Ön yüzde yer alan ince LED aydınlatma detayları, araca karakteristik bir kimlik kazandırırken aynı zamanda düşük enerji tüketimi ve uzun ömürlü kullanım avantajı sunar; gece operasyonlarında parkur içindeki görünürlüğü artırarak güvenliğe de katkı sağlar.<br/><br/><strong>Güvenlik &amp; Çarpışma Yönetimi —</strong> Gövde yapısı, darbe absorbe edici tampon sistemi ile desteklenmiş olup, çarpışma anında enerjiyi dağıtarak kullanıcı güvenliğini artıracak şekilde tasarlanmıştır. Alt kısımda kullanılan geniş elastomer tampon ring, hem temas yüzeyini artırarak çarpışma etkisini azaltır hem de parkur üzerindeki sürüş stabilitesini destekler. Elastomer malzeme seçimi, tekrarlanan çarpmalarda formunu koruyarak bakım ve değişim aralığını uzatır; kalıcı deformasyon yerine elastik geri dönüşle uzun ömür sağlar.<br/><br/><strong>Ergonomi &amp; İç Mekan —</strong> İç mekanda ergonomi ön planda tutulmuş, kullanıcı oturma pozisyonu ve direksiyon açısı optimum sürüş kontrolü sağlayacak şekilde konumlandırılmıştır. Geniş giriş açıklığı ve düşük eşik, farklı yaş gruplarına ve fiziksel profillere konforlu erişim imkânı verir. Tek parça kabin yapısı, üretim sürecinde maliyet avantajı sağlarken aynı zamanda dayanıklılığı artırır; daha az birleşim, daha az zayıf nokta anlamına gelir.<br/><br/><strong>Modelleme &amp; Üretim Yaklaşımı —</strong> Modelleme süreci dijital ortamda gerçekleştirilmiş olup, yüzey kalitesi ve form doğruluğu yüksek hassasiyetle optimize edilmiştir. Yüzeyler, otomotiv standartlarındaki eğrilik analizi (zebra/curvature) gözetilerek temizlenmiş, kalıp çıkışına uygun açılar ve birleşim hatları erken aşamada planlanmıştır. Tasarım, konsept aşamasından üretime uygun hale getirilebilecek şekilde teknik olarak kurgulanmıştır.<br/><br/>Bu çalışma, eğlence ekipmanlarında fonksiyon ve estetiğin birlikte nasıl geliştirilebileceğine dair bir araştırma ve uygulama örneğidir; basit bir parkur aracının, marka kimliği ve kullanıcı deneyimi taşıyan bir ürün haline nasıl getirilebileceğine dair bir öneri sunar.",
      stat1: "Ön Aydınlatma", stat2: "Tampon Ring", stat3: "Kabin Yapısı", stat4: "Sürüş Kontrolü",
      capCover: "Genel Görünüm — Lunapark Atmosferi",
      capFront: "Ön Cephe — LED Aydınlatma Detayı",
      capSide: "Yandan — Akıcı Yüzey Geçişleri & Karakter Çizgisi",
      capTop: "Üstten — Tek Parça Kabin & Geniş Giriş Açıklığı",
      capDetail: "Detay Çalışması — Form, Yüzey &amp; Birleşim Hatları",
      capGrid: "Ön Izgara — Karakteristik Marka Detayı",
      capTech: "Teknik Görünüm — Elastomer Tampon Ring Sistemi",
      f1Title: "Çağdaş Otomotiv Form Dili",
      f1Desc: "Akıcı yüzey geçişleri ve minimal detay kullanımı ile modern otomotiv tasarımından ilham alan rafine bir form dili. Karakter çizgileri ön/arka tampon hatlarıyla tutarlı bir bütün oluşturur; eğrilik analizi gözetilerek üretilen yüzeyler, eğlence parklarının dinamik atmosferine premium bir hissiyat taşır.",
      f2Title: "İnce LED Aydınlatma",
      f2Desc: "Ön yüzde yer alan ince LED aydınlatma detayları araca karakteristik bir kimlik kazandırır. Düşük enerji tüketimi ve uzun ömürlü kullanım avantajı sunarken, gece operasyonlarında parkur içindeki görünürlüğü artırarak güvenliğe katkı sağlar.",
      f3Title: "Elastomer Tampon Ring",
      f3Desc: "Alt kısımda yer alan geniş elastomer tampon ring, çarpışma enerjisini dağıtarak kullanıcı güvenliğini artırır. Tekrarlanan darbelerde formunu koruyan elastik malzeme; bakım aralığını uzatır, parkur üzerindeki sürüş stabilitesini ve temas yüzeyini birlikte iyileştirir.",
      f4Title: "Tek Parça Ergonomik Kabin",
      f4Desc: "Tek parça kabin yapısı üretimde maliyet avantajı ve dayanıklılık sağlar — daha az birleşim, daha az zayıf nokta. Geniş giriş açıklığı, düşük eşik ve optimize oturma pozisyonu farklı yaş gruplarına konforlu erişim ve sürüş kontrolü sunar.",
      threeDLabel: "İnteraktif 3D Model",
      threeDTitle: "Modeli Kendi Açından İncele",
      threeDSubtitle: "Sürükle, döndür, yakınlaştır. Mobil cihazda <strong>AR modu</strong> ile aracı kendi mekânında ölçekli görüntüle.",
      threeDLoading: "3D Model Yükleniyor...",
      threeDError: "Model yüklenemedi. Sayfayı yenileyin veya bir süre sonra tekrar deneyin.",
      threeDAR: "AR'da Gör",
      threeDDrag: "Sürükle: Döndür",
      threeDPan: "Sağ tık: Kaydır",
      threeDZoom: "Tekerlek: Yakınlaştır"
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
    showcase: {
      title: "Imagine.<br/><em>Design.</em><br/>Bring it to life.",
      threeDActivate: "Activate 3D Scene",
      threeDLoading: "Loading 3D scene..."
    },
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
        desc: "A sustainable trawler that preserves fish stocks without harming the marine ecosystem. Underwater autonomous vehicles steer the bottom trawl with precision while integrated solar panels deliver energy efficiency — undersized fish are returned to the wild alive."
      },
      salm: {
        meta1: "2021–2022", meta2: "Salmakis Yachts / Neta Marine",
        title: "42.5m Motor Yacht & 45m Gulet",
        desc: "Internship work at Salmakis Yachts on the Princess Melda 42.5m motor yacht and a 45m Gulet — active involvement in concept development, 3D modelling, interior design and render production."
      },
      fold: {
        meta1: "2023", meta2: "Foldable Lighting",
        title: "Foldesk Lamp",
        desc: "A compact desk-lighting solution with a foldable mechanism, developed for narrow workspaces. A linear LED bar, adjustable head and multi-axis hinge system deliver an ergonomic, productive experience tailored to architects, engineers and designers."
      },
      beo: {
        meta1: "2022", meta2: "Bang & Olufsen",
        title: "Beo Minisaw",
        desc: "A compact, high-performance mini electric saw concept reinterpreted through Bang & Olufsen's premium design language. Its modular structure, integrated lighting and control panel deliver effortless maintenance and an elevated user experience."
      },
      crea: {
        meta1: "2022", meta2: "Workstation Lighting",
        title: "Crea Light",
        desc: "A smart, ergonomic desk light designed to protect eye health during long computer sessions and improve working comfort. An extendable form, 2700–6500K adjustable colour temperature, high-CRI LED and an integrated camera cover keep the workspace clean and functional."
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
      },
      bumper: {
        meta1: "2024", meta2: "Amusement Vehicle",
        title: "Bumper Car Design",
        desc: "A bumper car concept that reinterprets the classic amusement-park experience through a contemporary automotive design language. Slim LED lighting, an impact-absorbing elastomer bumper ring and a single-piece ergonomic cabin bring function and aesthetics together."
      }
    },
    about: {
      tag: "About",
      title: "The language of design<br/>speaks <em>everywhere</em>",
      p1: "I graduated from Yaşar University's Industrial Design programme. My belief in interdisciplinary work and user-centred design principles forms the foundation of every project.",
      p2: "Through my time at Neta Marine, Salmakis Yachts and SKY Naval Architects I built a strong specialisation in yacht design. With tools like Rhino, V-Ray and Twinmotion I produce both conceptual and production-ready solutions.",
      eduUni: "Yaşar University",
      eduDept: "Industrial Design · 2023",
      expNetaRole: "Design Intern · 42.5m motor yacht interior development",
      expSalmRole: "Design Intern · 45m Gulet sketch and concept work",
      expSkyRole: "Design Intern · Naval architecture & technical drafting",
      expMegRole: "Design Support · Material and surface design",
      statProjects: "Completed Projects",
      statIntern: "Internships",
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
      submit: "Send Message",
      sending: "Sending...",
      sent: "Sent ✓",
      success: "Your message has been delivered. I'll get back to you shortly.",
      error: "Couldn't send. Please try again or email me directly.",
      captchaRequired: 'Please tick the "I\'m not a robot" box.'
    },
    footer: {
      copy: "© 2026 Halil Utku Şimşek. All rights reserved.",
      legal: "Copyright"
    },
    legal: {
      pageTitle: "Copyright — Halil Utku Şimşek",
      label: "Legal Information",
      title: "Copyright &amp; Terms of Use",
      updated: "Last updated: 3 May 2026",
      s1Title: "Copyright Notice",
      s1P1: "All images, renderings, 3D models, texts, design drawings, videos and other content on <strong>utkusimsek.com</strong> are <strong>© 2026 Halil Utku Şimşek</strong> and are protected under the <strong>Turkish Law on Intellectual and Artistic Works (Law No. 5846)</strong> as well as international copyright treaties.",
      s1P2: "All rights reserved. No part of these works may be reproduced, distributed, used in derivative works, or used for commercial or non-commercial purposes without prior written permission.",
      s2Title: "Prohibited Uses",
      s2L1: "<strong>Downloading, saving or copying</strong> any image, render, or 3D model",
      s2L2: "<strong>Republishing on other websites, social media or print</strong> — even with attribution — without permission",
      s2L3: "Including the designs in <strong>derivative works, educational materials, or portfolios</strong>",
      s2L4: "Using the content for <strong>training AI models</strong>",
      s2L5: "<strong>Removing, altering or hiding watermarks, EXIF metadata or copyright notices</strong>",
      s2L6: "Using the designs for <strong>manufacturing, prototyping or commercial purposes</strong>",
      s3Title: "Permitted Uses",
      s3P1: "The following uses are permitted:",
      s3L1: "Sharing the <strong>original site URL</strong> (utkusimsek.com) on social media or correspondence",
      s3L2: "Temporary technical caching by the <strong>browser's built-in cache system</strong>",
      s3L3: "Use of <strong>a single image</strong> for academic or press purposes, with explicit attribution and <strong>prior written permission</strong>",
      s4Title: "Licensing &amp; Collaboration Inquiries",
      s4P1: "For permission to use the designs, or for printing, exhibition, education or collaboration requests, please contact directly.",
      s4Callout: "<strong>Contact:</strong> <a href=\"mailto:utkusimsek65@gmail.com\">utkusimsek65@gmail.com</a><br/>Please describe your request in as much detail as possible (intended use, medium, duration, scale). Replies typically within 48 hours.",
      s5Title: "Protection Measures",
      s5P1: "All images on this site are protected by the following measures:",
      s5L1: "<strong>Visible watermark:</strong> Each image carries the baked-in <code>©utkusimsekdesign</code> signature",
      s5L2: "<strong>EXIF/IPTC/XMP metadata:</strong> Each file embeds author, copyright holder and usage terms (removal is a legal offence)",
      s5L3: "<strong>Technical protection:</strong> Right-click, drag-and-drop and page-save are disabled",
      s5L4: "<strong>Legal protection:</strong> Infringements are pursued under Law No. 5846 and the Turkish Code of Obligations",
      s6Title: "Reporting Infringement",
      s6P1: "If you notice unauthorised use of my work — or if you yourself have used something and would like to put it right — please get in touch at <a href=\"mailto:utkusimsek65@gmail.com\">utkusimsek65@gmail.com</a>. Good-faith corrections are always handled constructively.",
      back: "← Back to Home"
    },

    pageTitle: {
      home: "Halil Utku Şimşek — Industrial Designer",
      legal: "Copyright — Halil Utku Şimşek",
      pb:   "45ft Multi Hardtop Powerboat — Halil Utku Şimşek",
      kmem: "KMEM Pop-up Store — Halil Utku Şimşek",
      scoot:"Scooter Port — Halil Utku Şimşek",
      eko:  "Ekofish 200ft — Halil Utku Şimşek",
      crea: "Crea Light — Halil Utku Şimşek",
      beo:  "Beo Minisaw — Halil Utku Şimşek",
      fold: "Foldesk Lamp — Halil Utku Şimşek",
      bumper: "Bumper Car Design — Halil Utku Şimşek",
      salm: "Salmakis Yachts — Princess Melda & 45m Gulet — Halil Utku Şimşek"
    },
    proj_detail: {
      breadcrumbHome: "Home",
      breadcrumbProjects: "Work",
      scroll: "Scroll down",
      overviewLabel: "Project Overview",
      featuresTitle: "Design Features",
      back: "← Back to all projects",
      footer: "© 2026 Halil Utku Şimşek — All rights reserved."
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
      f4Desc: "A telescopic table that converts into a bed, a master cabin, bathroom and galley — comprehensive interior organisation that makes overnight stays effortless.",
      threeDLabel: "Interactive 3D Model",
      threeDTitle: "Inspect From Any Angle",
      threeDSubtitle: "Drag, rotate, zoom. On mobile, use <strong>AR mode</strong> to view the boat in your own space at full scale.",
      threeDLoading: "Loading 3D Model...",
      threeDError: "Model couldn't be loaded. Please refresh the page or try again later.",
      threeDAR: "View in AR",
      threeDDrag: "Drag: Rotate",
      threeDPan: "Right-click: Pan",
      threeDZoom: "Wheel: Zoom"
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
      f3Desc: "QR/RFID display and app integration provide contactless locking and user verification; payment and usage history are tracked through the mobile app.",
      f4Title: "Advertising & Info Panel",
      f4Desc: "A tempered glass advertising surface and dual-sided info LEDs make the station not just a charging point but part of the city's communication and wayfinding infrastructure."
    },
    eko: {
      breadcrumb: "Ekofish 200ft",
      badge: "Competition",
      year: "2022 · 12th National Ship & Yacht Design Competition",
      title: "Ekofish 200ft<br/><em>Sustainable Trawler</em>",
      overview: "<strong>Ekofish 200ft — Smart and Sustainable Fishing System</strong><br/><br/>Ekofish 200ft is an innovative fishing-vessel concept equipped with advanced technology, aiming to enable productive fishing while protecting the marine ecosystem. By bringing underwater and aerial unmanned systems, smart fishing mechanisms and energy-efficiency-focused solutions together on a single platform, the project sets a new standard for sustainable seafaring.<br/><br/>On-board autonomous underwater vehicles (AUVs) analyse fish populations with high precision through sonar, lidar and hydrophone sensors. This enables targeted fishing while minimising unnecessary net deployment and pressure on the ecosystem. The impact of damaging methods such as bottom trawling is also reduced, protecting the seabed.<br/><br/>The smart net and sorting system separates the catch by size. Fish that do not meet the legal criteria are returned to the sea unharmed through dedicated discharge channels. This mechanism supports biodiversity sustainability while ensuring full compliance with legal fishing standards.<br/><br/>The rail-driven pool-cover system on Ekofish 200ft's deck optimises space during operations, increasing both functionality and safety. Integrated solar panels support the vessel's energy needs, reducing its carbon footprint and lowering operational costs.<br/><br/>Unmanned aerial vehicles (UAVs) deployed by the project continuously analyse sea-surface and weather conditions, support navigation processes and provide rapid response capability in emergency scenarios.<br/><br/>Ekofish 200ft brings technology, environment and efficiency together on one platform — offering a sustainable solution that helps shape the future of fishing.",
      stat1: "Length (m)", stat2: "Beam (m)", stat3: "Precision Control", stat4: "Solar Support",
      capCover: "General Render — 60.9m Trawler",
      capTop: "Top View — System Components",
      capProcess: "Fishing Process — Underwater Operation",
      capFeatures: "System Features",
      capSorting: "Fishing & Sorting Sequence",
      capTech: "Technical Drawing — Scale 1:300",
      f1Title: "Autonomous Underwater Vehicles (AUVs)",
      f1Desc: "AUVs equipped with sonar, lidar and hydrophone sensors steer the bottom trawl with precision — detecting fish accurately and protecting biodiversity.",
      f2Title: "Solar Panel System",
      f2Desc: "Solar panels integrated into the upper deck improve the vessel's energy efficiency, supporting environmental sustainability and lowering operating costs.",
      f3Title: "Size-Based Sorting",
      f3Desc: "An on-board sorting mechanism separates fish by size; specimens below the legal threshold are returned alive to their natural habitat.",
      f4Title: "Rail-System Pool",
      f4Desc: "A deck pool that can be sealed by a rail system blends aesthetics with functionality — preserving the area and optimising it for operations."
    },
    crea: {
      breadcrumb: "Crea Light",
      badge: "Workstation Lighting",
      year: "2022 · Ergonomics",
      title: "Crea Light<br/><em>Smart & Ergonomic Workstation Lighting</em>",
      overview: "<strong>Crea Light — Smart and Ergonomic Workstation Lighting</strong><br/><br/>Crea Light is an innovative desk-lighting solution designed to protect eye health during long computer sessions and improve working comfort. Developed with users aged 40 and above — and the focus and vision difficulties they often experience — in mind, its adjustable structure offers a tailored experience for every user.<br/><br/>With its extendable form, Crea Light easily adapts to different screen sizes and work areas. Customisable lighting angle, colour temperature and brightness make screen time more efficient and comfortable, reducing eye strain throughout the day.<br/><br/>The durable aluminium body delivers long-term use while providing a clean, modern look. A high-CRI LED lighting system creates balanced, even light distribution across the workspace and supports eye health.<br/><br/>An integrated camera cover and modular connection structure prioritise user privacy and practicality. Full Type-C compatibility brings the product in line with modern devices, while its compact, functional design declutters the desk.<br/><br/>By bringing technology and ergonomics together, Crea Light is a next-generation lighting solution that makes workspaces healthier, more productive and more refined.",
      stat1: "Colour Temp.", stat2: "Connector", stat3: "LED Colour Accuracy", stat4: "Body Material",
      capCover: "Workspace — Above the Monitor",
      capRender: "3D Render — General View",
      capFront: "Front View — Control Buttons",
      capSide: "Side View — Modular Connection Mechanism",
      capTop: "Top View — Camera Cover Detail",
      capTech: "Exploded View — Component Analysis",
      f1Title: "Extendable & Adjustable Form",
      f1Desc: "The telescopic arm adapts to different screen sizes and work areas; the lighting angle can be personalised to suit each user's ergonomic setup.",
      f2Title: "Tailored Light for 40+ Users",
      f2Desc: "2700–6500K colour temperature and stepped brightness — calibrated to ease the focus and vision challenges most often reported by users aged 40 and above.",
      f3Title: "High-CRI LED System",
      f3Desc: "A high colour-rendering LED engine creates balanced, even light across the work surface, reducing eye strain over long sessions.",
      f4Title: "Camera Cover, Aluminium Body & USB-C",
      f4Desc: "An integrated physical camera cover safeguards user privacy; the durable aluminium body and Type-C modular connection deliver a compact design that pairs cleanly with modern devices."
    },
    beo: {
      breadcrumb: "Beo Minisaw",
      badge: "Tool Design",
      year: "2022 · Bang & Olufsen",
      title: "Beo Minisaw<br/><em>Premium Mini Electric Saw</em>",
      overview: "<strong>Beo Minisaw — Bang & Olufsen Premium Mini Electric Saw</strong><br/><br/>Beo Minisaw is a compact, high-performance mini electric saw concept reinterpreted through Bang & Olufsen's premium design language. Its minimal form, ergonomic grip and refined material palette deliver a comfortable, safe experience for both professional and individual users.<br/><br/>A modular architecture simplifies maintenance and part replacement, while integrated lighting and a control panel elevate the user experience to a new level.<br/><br/>Bringing power, aesthetics and functionality together, Beo Minisaw offers a refined, innovative answer to the needs of modern life.",
      stat1: "Brand Identity", stat2: "Maintenance & Parts", stat3: "Lighting & Panel", stat4: "Material & Form",
      capDock: "Docked — Premium Charging Stand",
      capRender: "Control Panel — Integrated Interface",
      capSide: "Side View — Chain Extended",
      capTop: "Top View — Grip Detail",
      capControls: "Control Surface — Speed & Mode Selection",
      capTech: "Exploded View — Modular Component Analysis",
      f1Title: "Premium B&O Aesthetic",
      f1Desc: "Bang & Olufsen's minimal form language, aluminium and glass detailing and a restrained palette deliver a premium hand-tool experience that feels at home in any setting.",
      f2Title: "Modular Architecture",
      f2Desc: "Demountable body groups and fast-swap points make maintenance, battery and chain replacement effortless for the user — extending product life and reducing waste.",
      f3Title: "Integrated Lighting & Panel",
      f3Desc: "An LED front light illuminates the cutting line while a touch control panel consolidates speed, mode and status information into a single ergonomic interface for safe, precise operation.",
      f4Title: "Ergonomic & Safe Grip",
      f4Desc: "A soft grip texture, balanced weight distribution and finger-guard structure reduce fatigue over long sessions and deliver safe operation for both professional and individual users."
    },
    fold: {
      breadcrumb: "Foldesk Lamp",
      badge: "Lighting",
      year: "2023 · Foldable Form",
      title: "Foldesk Lamp<br/><em>Foldable Workstation Light</em>",
      overview: "<strong>Foldesk Lamp — Foldable Compact Workstation Lighting</strong><br/><br/>Foldesk Lamp is a compact desk-lighting solution with a foldable mechanism, developed for narrow workspaces. Its linear LED light bar and adjustable head deliver even, focused light distribution, while a multi-axis hinge system adapts effortlessly to different working scenarios.<br/><br/>A metal body and precision rail mechanism support both durability and fluid motion. The design takes minimal space when folded and opens up to a wide lighting surface — providing an ergonomic, productive experience tailored to architects, engineers and designers.",
      stat1: "LED Light Bar", stat2: "Compact Form", stat3: "Hinge System", stat4: "Body & Rail",
      capLifestyle: "Workspace — Open Configuration",
      capRender: "3D Render — Dual-Arm Configuration",
      capSide: "Side View — Folded Compact Position",
      capControls: "Control Surface — LED Bar & Buttons",
      capFront: "Front View — LED Bar & Clamp",
      capTop: "Top View — Folded Form",
      capTech: "Hinge Mechanism — Multi-Axis Joint System",
      f1Title: "Linear LED Light Bar",
      f1Desc: "A linear LED array running along the work surface produces a shadow-free, even lighting field; the auxiliary head allows quick switching to focused, task-oriented light.",
      f2Title: "Multi-Axis Hinge System",
      f2Desc: "Hinges that rotate on multiple axes let the lamp adapt within seconds to reading, drafting and detail-work scenarios.",
      f3Title: "Foldable Compact Form",
      f3Desc: "A slim profile that takes minimal desk space when folded opens out into a wide lighting surface — offering flexibility even in narrow workspaces.",
      f4Title: "Metal Body & Precision Rail",
      f4Desc: "The metal body delivers long-term durability, while the precision rail mechanism allows the head position to be adjusted smoothly and without vibration."
    },
    salm: {
      breadcrumb: "Salmakis Yachts",
      badge: "Yacht Design",
      year: "2021–2022 · Salmakis Yachts / Neta Marine",
      heroTitle: "42.5m Motor Yacht &amp; 45m Gulet<br/><em>Princess Melda</em>",
      overview: "<strong>Salmakis Yachts — 42.5 Metre Motor Yacht | Princess Melda</strong><br/><br/>During my internship I had the opportunity to experience luxury yacht design and production processes from a holistic perspective. As part of the 42.5-metre motor yacht project, I took an active role in concept development, 3D modelling, interior design and visualisation.<br/><br/>Bringing together the aesthetics and functionality demanded by modern yacht design, I developed solutions that placed user experience at the centre — from the exterior form language to interior details. I contributed to design decisions on critical topics such as deck planning, the organisation of living spaces, and material selection.<br/><br/>I also produced high-quality render and presentation imagery to strengthen the project's visual narrative. The process was a valuable experience in combining technical knowledge with design aesthetics and developing solutions suited to real production conditions.",
      stat1: "Motor Yacht Length", stat2: "Gulet Concept", stat3: "Modelling & Render", stat4: "Interior Design",
      divMelda: "Princess Melda · 42.5m Motor Yacht",
      divGulet: "Salmakis · 45m Gulet",
      divConcept: "Concept &amp; Sketch Studies",
      capYanAci: "Princess Melda — 3/4 Side Angle",
      capMeldaTop: "Top View — Deck Planning",
      capMelda8: "Front 3/4 — Form Study",
      capInterior: "Interior Design — Cabins, Salon &amp; Bridge",
      capGuletSunset: "45m Gulet — Masts at Sunset",
      capGuletTop: "Top View — Mast &amp; Deck Lines",
      capConcept1: "Concept Variant — 3/4 View",
      capConcept2: "Concept Variant — Side Profile",
      capSketchMotor: "Sketch — Motor Yacht Form Exploration",
      capSketchGulet: "Sketch — Gulet Silhouette Study",
      f1Title: "Concept &amp; 3D Modelling",
      f1Desc: "Active involvement across every development stage from form exploration to detailed 3D models; Rhino-based surface work delivering a refined exterior language ready for production.",
      f2Title: "Interior Design",
      f2Desc: "Organisation of cabins, salon, bridge and technical volumes; an interior plan attentive to ergonomic flow, circulation and the balance of natural light.",
      f3Title: "Material &amp; Decor Planning",
      f3Desc: "Measured pairing of natural wood, light-toned upholstery and metal hardware — interpreting luxury yacht aesthetics through a durable, refined palette aligned with real production conditions.",
      f4Title: "Render &amp; Presentation Imagery",
      f4Desc: "High-quality renders and presentation visuals produced in KeyShot and Figma; cinematic frames that strengthen the project's visual narrative and accelerate decision-making."
    },
    bumper: {
      breadcrumb: "Bumper Car Design",
      badge: "Amusement Vehicle",
      year: "2024 · Automotive-Inspired",
      title: "Bumper Car Design<br/><em>A Modern Amusement-Park Concept</em>",
      overview: "<strong>Bumper Car Design — A Modern Amusement-Park Concept</strong><br/><br/>This project is a bumper car concept that reinterprets the classic amusement-park experience through a contemporary design language. User experience, safety, manufacturability and aesthetic balance were addressed together throughout the design process — bringing a refined form language, often overlooked in entertainment equipment, to the centre of the project.<br/><br/><strong>Form &amp; Aesthetics —</strong> The form language draws inspiration from current automotive trends with its flowing surface transitions and minimal detailing, while staying tuned to the dynamic, colourful atmosphere of theme parks. Character lines maintain a coherent dialogue with the front and rear bumper geometry, giving the vehicle a consistent identity. Slim LED lighting elements at the front fascia provide a distinctive signature while offering low energy consumption and long service life; they also improve in-track visibility during night-time operation, contributing to safety.<br/><br/><strong>Safety &amp; Impact Management —</strong> The body structure is reinforced by an impact-absorbing bumper system designed to dissipate energy on contact and protect the user. The wide elastomer bumper ring at the base increases the contact surface to soften collisions and supports stability on the track. The elastomer material maintains its shape under repeated impacts, extending maintenance intervals and avoiding permanent deformation through elastic recovery.<br/><br/><strong>Ergonomics &amp; Interior —</strong> Inside, ergonomics take priority — seating position and steering angle are placed to deliver optimal driving control. A wide entry opening and a low threshold provide comfortable access for users across different age groups and physical profiles. The single-piece cabin structure offers a cost advantage in production while increasing durability — fewer joints means fewer weak points.<br/><br/><strong>Modelling &amp; Production —</strong> The modelling process was carried out digitally, with surface quality and form accuracy optimised at high precision. Surfaces were cleaned with automotive-grade curvature analysis (zebra/curvature) in mind, and draft angles plus parting lines were planned at an early stage to keep the design mould-friendly. The design has been technically structured so it can be carried from concept to production-ready form.<br/><br/>This work is a research and application study on how function and aesthetics can be developed together in entertainment equipment — a proposal for how a simple track vehicle can become a product carrying brand identity and user experience.",
      stat1: "Front Lighting", stat2: "Bumper Ring", stat3: "Cabin Structure", stat4: "Driving Control",
      capCover: "General View — Amusement-Park Atmosphere",
      capFront: "Front Fascia — LED Lighting Detail",
      capSide: "Side View — Flowing Surfaces &amp; Character Line",
      capTop: "Top View — Single-Piece Cabin &amp; Wide Entry",
      capDetail: "Detail Study — Form, Surface &amp; Parting Lines",
      capGrid: "Front Grille — Signature Brand Detail",
      capTech: "Technical View — Elastomer Bumper Ring System",
      f1Title: "Contemporary Automotive Form Language",
      f1Desc: "A refined form language inspired by modern automotive design with flowing surface transitions and minimal detailing. Character lines stay in dialogue with front/rear bumper geometry, and surfaces produced under curvature-analysis discipline bring a premium feel to the dynamic atmosphere of theme parks.",
      f2Title: "Slim LED Lighting",
      f2Desc: "Slim LED elements on the front fascia give the vehicle a distinctive identity. They offer low energy consumption and long service life while improving in-track visibility during night-time operation, contributing to safety.",
      f3Title: "Elastomer Bumper Ring",
      f3Desc: "The wide elastomer bumper ring at the base dissipates impact energy to protect the user. The elastic material holds its shape under repeated hits — extending maintenance intervals while improving both contact surface and on-track stability.",
      f4Title: "Single-Piece Ergonomic Cabin",
      f4Desc: "The single-piece cabin offers a production cost advantage and durability — fewer joints means fewer weak points. A wide entry opening, low threshold and optimised seating position deliver comfortable access and driving control for different age groups.",
      threeDLabel: "Interactive 3D Model",
      threeDTitle: "Explore the Model from Your Angle",
      threeDSubtitle: "Drag, rotate, zoom. On mobile, view the vehicle to scale in your own space with <strong>AR mode</strong>.",
      threeDLoading: "Loading 3D Model...",
      threeDError: "The model could not be loaded. Refresh the page or try again later.",
      threeDAR: "View in AR",
      threeDDrag: "Drag: Rotate",
      threeDPan: "Right click: Pan",
      threeDZoom: "Wheel: Zoom"
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

  // toggle button label — flip animation when text changes
  const newLabel = lang === 'tr' ? 'EN' : 'TR';
  document.querySelectorAll('.lang-toggle .lang-current').forEach(el => {
    if (el.textContent === newLabel) return;
    el.classList.add('flipping');
    setTimeout(() => {
      el.textContent = newLabel;
      // Force reflow so the reverse transition kicks in cleanly
      void el.offsetWidth;
      el.classList.remove('flipping');
    }, 240);
  });

  // Vapor canvas (slogan animasyonu) için explicit hook — i18n DOM mutation
  // observer'a bağımlı kalmadan anında yeni metinlere geçer.
  if (typeof window.__vaporRefreshLang === 'function') {
    window.__vaporRefreshLang();
  }

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'tr';
  // First paint: set label without animation
  document.querySelectorAll('.lang-toggle .lang-current').forEach(el => {
    el.textContent = saved === 'tr' ? 'EN' : 'TR';
  });
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'tr';
      applyLang(current === 'tr' ? 'en' : 'tr');
    });
  });
});
