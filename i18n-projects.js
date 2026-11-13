/* i18n-projects — copy for the 2026-11 project pages (museum, marble, perfora, flatride, robot).
   Extends the global I18N dictionary; load after i18n.js. */
(function () {
  if (typeof I18N === 'undefined') return;

  Object.assign(I18N.tr.pageTitle, {
    museum: "Müze Vitrin Sistemi — Halil Utku Şimşek",
    marble: "Mermer Koleksiyonu — Halil Utku Şimşek",
    perfora: "Perfora — Halil Utku Şimşek",
    flatride: "Dönerli Aile Ünitesi — Halil Utku Şimşek",
    robot: "Havalimanı Karşılama Robotu — Halil Utku Şimşek"
  });
  Object.assign(I18N.en.pageTitle, {
    museum: "Museum Showcase System — Halil Utku Şimşek",
    marble: "Marble Collection — Halil Utku Şimşek",
    perfora: "Perfora — Halil Utku Şimşek",
    flatride: "Rotating Family Ride — Halil Utku Şimşek",
    robot: "Airport Greeting Robot — Halil Utku Şimşek"
  });

  I18N.tr.museum = {
    card: "Müze Vitrin Sistemi", cardMeta: "Sergileme tasarımı",
    breadcrumb: "Müze Vitrin Sistemi",
    badge: "Sergileme Tasarımı",
    year: "2026 · Sistem Tasarımı",
    title: "Müze Vitrin Sistemi<br/><em>Yedi tipten oluşan modüler sergileme ailesi</em>",
    overview: "<strong>Tek bir dil, yedi farklı vitrin</strong><br/><br/>Belge, tekstil, gemi modeli, saat, vazo ve kostüm gibi ölçeği ve hassasiyeti birbirinden çok farklı eserleri tek bir tasarım dili altında toplayan bir vitrin ailesi. Farklı sergileme ihtiyaçları ortak bir kaide ve profil sistemine indirgendi.<br/><br/>Ceviz kaide, ince çerçeveli temperli cam ve kaideye entegre lineer aydınlatma her tipte tekrar eder. Böylece galeri boyunca görsel süreklilik kurulurken eser her zaman kompozisyonun odağında kalır.",
    stat1: "Vitrin tipi", stat2: "Ortak kaide", stat3: "Entegre aydınlatma", stat4: "İnce çerçeveli cam",
    statNum2: "Ceviz", statNum4: "Temperli",
    capAxis: "Galeri aksı: vitrin ailesi birlikte",
    capWallDoc: "Büyük duvar vitrini: belge",
    capWallTextile: "Ayaklı duvar vitrini: tekstil",
    capTable: "Yatay masa vitrini: gemi modeli",
    capCostume: "Kostüm vitrini",
    capPlinthLow: "Kare kaide, alçak",
    capPlinthHigh: "Kare kaide, yüksek",
    capColumnHex: "Uzun sütun, altıgen kaide",
    capColumnSquare: "Uzun sütun, dörtgen kaide",
    capVisitorsTable: "Ziyaretçi ölçeğinde masa vitrini",
    capDocSlanted: "Belge vitrini: eğimli sergileme yüzeyi",
    capColumnSingle: "Tekil eser: çevresinden dolaşılan sütun",
    capVisitorsWall: "Duvar vitrini önünde izleme mesafesi",
    f1Title: "Ortak kaide ve profil", f1Desc: "Yedi tipin tamamı aynı ceviz kaide ve çerçeve profilinden türetildi. Üretimde parça çeşitliliği azalır, galeride aile kimliği okunur.",
    f2Title: "İzleme yüksekliğine göre tipoloji", f2Desc: "Her tip, eserin izlenme yüksekliği ve yaklaşma mesafesine göre kurgulandı: duvar vitrinleri belge ve tekstil için, masa vitrinleri model için, sütunlar çevresinden dolaşılan tekil eserler için.",
    f3Title: "Kaideye entegre lineer aydınlatma", f3Desc: "Işık kaynağı kaide ve üst profilin içinde gizlenir. Eser gölgesiz aydınlanırken ziyaretçi ışık kaynağını görmez.",
    f4Title: "Galeri boyunca süreklilik", f4Desc: "Malzeme, oran ve ışık her tipte tekrarlandığı için farklı boydaki vitrinler bir arada kullanıldığında tek bir sistem gibi okunur."
  };
  I18N.en.museum = {
    card: "Museum Showcase System", cardMeta: "Exhibition design",
    breadcrumb: "Museum Showcase System",
    badge: "Exhibition Design",
    year: "2026 · System Design",
    title: "Museum Showcase System<br/><em>A modular display family of seven types</em>",
    overview: "<strong>One language, seven showcases</strong><br/><br/>A showcase family that gathers objects of very different scale and sensitivity, from documents, textiles and ship models to clocks, vases and costumes, under a single design language. Their different display needs were reduced to one shared plinth and profile system.<br/><br/>A walnut plinth, slim-framed tempered glass and linear lighting built into the plinth repeat in every type, so the gallery reads as one continuous whole while the object always stays at the centre of the composition.",
    stat1: "Showcase types", stat2: "Shared plinth", stat3: "Integrated lighting", stat4: "Slim-framed glass",
    statNum2: "Walnut", statNum4: "Tempered",
    capAxis: "Gallery axis: the family together",
    capWallDoc: "Large wall case: documents",
    capWallTextile: "Standing wall case: textiles",
    capTable: "Horizontal table case: ship model",
    capCostume: "Costume case",
    capPlinthLow: "Square plinth, low",
    capPlinthHigh: "Square plinth, high",
    capColumnHex: "Tall column, hexagonal base",
    capColumnSquare: "Tall column, square base",
    capVisitorsTable: "Table case at visitor scale",
    capDocSlanted: "Document case: inclined display surface",
    capColumnSingle: "Single object: a column you walk around",
    capVisitorsWall: "Viewing distance in front of a wall case",
    f1Title: "Shared plinth and profile", f1Desc: "All seven types derive from the same walnut plinth and frame profile, which keeps part variety low in production and makes the family recognisable in the gallery.",
    f2Title: "Types set by viewing height", f2Desc: "Each type follows the object's viewing height and approach distance: wall cases for documents and textiles, table cases for models, columns for single objects seen in the round.",
    f3Title: "Linear lighting in the plinth", f3Desc: "The light source hides inside the plinth and top profile, so the object is lit without shadows and the visitor never sees the lamp.",
    f4Title: "Continuity across the gallery", f4Desc: "Material, proportion and light repeat in every type, so cases of different sizes read as one system when used together."
  };

  I18N.tr.marble = {
    card: "Mermer Banyo ve Şömine Koleksiyonu", cardMeta: "MEG Custom Marble",
    breadcrumb: "Mermer Koleksiyonu",
    badge: "İç Mekân Ürünü",
    year: "2025–2026 · MEG Custom Marble",
    title: "Mermer Koleksiyonu<br/><em>Ölçüye özel banyo, şömine ve mobilya</em>",
    overview: "<strong>Bloktan mimari bir öğeye</strong><br/><br/>MEG Custom Marble için New York ve Miami'deki konut projelerine yönelik geliştirdiğim ölçüye özel mermer ürünler: çift lavabolu banyo dolapları, basamaklı ve klasik şömine çerçeveleri, tek parça küvet, ayaklı lavabo, mutfak adası ve mermer kapaklı mobilyalar.<br/><br/>Her plaka farklı olduğu için tasarım damar dokusunu yerleştirmekle başlar. 3D modelleme ve görselleştirmenin yanında, atölyenin doğrudan kesime geçebileceği okunaklı üretim çizimlerini de hazırladım.",
    stat1: "Çift lavabolu dolap", stat2: "Ana taş", stat3: "Proje şehirleri", stat4: "Üretim çizimi",
    statNum2: "Calacatta Viola", statNum3: "NY · Miami", statNum4: "Ölçülü",
    capCover: "Basamaklı mermer şömine, oturma alanında",
    capVanity: "80 inç çift lavabo, ceviz gövde",
    capVanityDetail: "Entegre hazneler ve damar sürekliliği",
    capDrawingPowder: "Teknik çizim: powder bath lavabosu, honed Calacatta Vagli",
    capBathtub: "Tek parça mermer küvet",
    capPedestal: "Ayaklı mermer lavabo",
    capWorkshop: "Atölye: küvetin işlenmesi (görselleştirme)",
    capSideboard: "Mermer kapaklı konsol, kitap açılımı damar",
    capCoffeeTable: "Blok mermer orta sehpa",
    capFireplaceStepped: "Basamaklı şömine çerçevesi",
    capKitchen: "Mermer mutfak adası",
    capDrawingBath: "Teknik çizim: Bathroom 2 lavabo ve kesitler",
    f1Title: "Ölçüye özel üretim", f1Desc: "Her ürün projenin nişine, tesisat noktalarına ve kullanıcısına göre boyutlandırılır; standart katalog ölçüsü yerine mekâna göre çözülür.",
    f2Title: "Damar yerleşimi", f2Desc: "Plakadaki damarlar kesimden önce yerleştirilir; kapaklarda kitap açılımı, lavabo yüzeyinde kesintisiz akış hedeflenir.",
    f3Title: "Üretime hazır teknik çizim", f3Desc: "Görünüşler, kesitler ve hazne detayları atölyenin okuyabileceği sadelikte çizilir; tasarım ile kesim arasında yorum payı kalmaz.",
    f4Title: "Taş ve ahşap birlikte", f4Desc: "Mermer yüzeyler ceviz ve Avrupa meşesi gövdelerle eşleşir; yuvarlak kulp detayı ahşabın içine oyularak sıcak bir karşıtlık kurar."
  };
  I18N.en.marble = {
    card: "Marble Bath and Fireplace Collection", cardMeta: "MEG Custom Marble",
    breadcrumb: "Marble Collection",
    badge: "Interior Product",
    year: "2025–2026 · MEG Custom Marble",
    title: "Marble Collection<br/><em>Made-to-measure bath, fireplace and furniture</em>",
    overview: "<strong>From slab to architectural element</strong><br/><br/>Made-to-measure marble pieces I developed for MEG Custom Marble for residential projects in New York and Miami: double-sink vanities, stepped and classic fireplace surrounds, a one-piece bathtub, a pedestal basin, a kitchen island and marble-fronted furniture.<br/><br/>Every slab is different, so each design starts by placing the veining. Alongside 3D modelling and visualisation I prepared clear production drawings the workshop can cut from directly.",
    stat1: "Double-sink vanity", stat2: "Main stone", stat3: "Project cities", stat4: "Production drawings",
    statNum2: "Calacatta Viola", statNum3: "NY · Miami", statNum4: "Dimensioned",
    capCover: "Stepped marble fireplace in a living room",
    capVanity: "80-inch double vanity, walnut body",
    capVanityDetail: "Integrated basins and continuous veining",
    capDrawingPowder: "Technical drawing: powder bath vanity, honed Calacatta Vagli",
    capBathtub: "One-piece marble bathtub",
    capPedestal: "Pedestal marble basin",
    capWorkshop: "Workshop: carving the bathtub (visualisation)",
    capSideboard: "Marble-fronted sideboard, book-matched veining",
    capCoffeeTable: "Block marble coffee table",
    capFireplaceStepped: "Stepped fireplace surround",
    capKitchen: "Marble kitchen island",
    capDrawingBath: "Technical drawing: Bathroom 2 vanity and sections",
    f1Title: "Made to measure", f1Desc: "Each piece is sized to its niche, plumbing points and user, solved for the room rather than taken from a standard catalogue size.",
    f2Title: "Placing the veining", f2Desc: "Veins are laid out on the slab before cutting: book-matched across doors, flowing without a break across the basin surface.",
    f3Title: "Production-ready drawings", f3Desc: "Elevations, sections and basin details are drawn plainly enough for the workshop to read, leaving no room for interpretation between design and cut.",
    f4Title: "Stone with wood", f4Desc: "Marble surfaces pair with walnut and European oak bodies; the round pull carved into the wood sets up a warm contrast."
  };

  I18N.tr.perfora = {
    card: "Perfora", cardMeta: "Rhino eklentisi",
    breadcrumb: "Perfora",
    badge: "Hesaplamalı Tasarım",
    year: "2026 · Rhino 8 / 9 Eklentisi",
    title: "Perfora<br/><em>Desen, artık bir parametre</em>",
    overview: "<strong>Rhino için gradyan kontrollü desen eklentisi</strong><br/><br/>Ürün ve yüzey tasarımında tekrar tekrar elle çizdiğim delik, kafes ve faset desenlerini tek bir araca dönüştürmek için geliştirdiğim Rhino 8 ve 9 eklentisi. Desen tipi seçilir, tuval üzerindeki kontrolcüler sürüklenir; deliklerin boyutu ve derinliği bu noktalara yaklaştıkça yumuşakça değişir.<br/><br/>Desen düz panellerin yanında çift eğrilikli yüzeylere de sarılır; gövdeye gömülebilir ya da kabartılabilir. Arayüzü, geometri motorunu ve tanıtım filmini kendim tasarlayıp yazdım. Aynı çekirdek, tarayıcıda çalışan web sürümünün de temelini oluşturuyor.",
    stat1: "Rhino sürümü", stat2: "Boyut ve derinlik kanalı", stat3: "Çift eğrilikli sarma", stat4: "Arayüz ve motor",
    statNum2: "Gradyan", statNum3: "Yüzey", statNum4: "C# · .NET",
    capVideo: "Tanıtım filmi",
    capTexture: "Desen dikişi: önce ve sonra",
    capFacets: "Faset kütüphanesi: piramit, elmas, küp yığını",
    capLibrary: "Parametrik doku çizgileri",
    capCover: "Sarmal doku ve üçgen piramit panel",
    capBottle: "Aynı ayarlarla iki farklı ürün",
    capSlicing: "Dilimleme: dalgalı panel ve şezlong",
    capStudio: "Perfora Studio, Rhino içinde",
    f1Title: "Gradyan kontrolcüleri", f1Desc: "Nokta ve eğri kontrolcüleri desenin boyutunu ve derinliğini yönetir; ortası derin, kenarı sığ gibi kurallar tek hareketle kurulur.",
    f2Title: "Yüzeye sarma ve rölyef", f2Desc: "Kafes yüzeyin fiziksel ölçüsüne göre yerleşir; desen gövdeye gömülür, kabartılır ya da delik olarak kesilir, uçlar koni gibi daraltılabilir.",
    f3Title: "Desen kütüphanesi", f3Desc: "Delik, Voronoi kabuk, üçgen kafes, faset ve dilim desenleri aynı ayar sistemini paylaşır; kayıtlı ayarlar başka projelere taşınır.",
    f4Title: "Perfora Studio", f4Desc: "Rhino içinde açılan web tabanlı arayüz: solda desen kartları, ortada sürüklenebilir tuval, sağda parametreler ve tek tuşla uygulama."
  };
  I18N.en.perfora = {
    card: "Perfora", cardMeta: "Rhino plug-in",
    breadcrumb: "Perfora",
    badge: "Computational Design",
    year: "2026 · Rhino 8 / 9 Plug-in",
    title: "Perfora<br/><em>Pattern, now a parameter</em>",
    overview: "<strong>A gradient-driven pattern plug-in for Rhino</strong><br/><br/>A Rhino 8 and 9 plug-in I built to turn the perforation, lattice and facet patterns I kept drawing by hand in product and surface design into a single tool. You pick a pattern type and drag controllers on the canvas; hole size and depth change smoothly as they approach those points.<br/><br/>Patterns wrap onto double-curved surfaces as well as flat panels, and can be embossed, debossed or cut through. I designed and wrote the interface, the geometry engine and the launch film myself. The same core also powers the browser version.",
    stat1: "Rhino versions", stat2: "Size and depth channels", stat3: "Double-curved wrapping", stat4: "Interface and engine",
    statNum2: "Gradient", statNum3: "Surface", statNum4: "C# · .NET",
    capVideo: "Launch film",
    capTexture: "Pattern seam: before and after",
    capFacets: "Facet library: pyramid, diamond, tumbling blocks",
    capLibrary: "Parametric texture lines",
    capCover: "Twisted texture and triangular pyramid panel",
    capBottle: "Two products from the same settings",
    capSlicing: "Slicing: wave panel and lounger",
    capStudio: "Perfora Studio inside Rhino",
    f1Title: "Gradient controllers", f1Desc: "Point and curve controllers drive pattern size and depth; rules like deep in the middle, shallow at the edge are set in one move.",
    f2Title: "Surface wrapping and relief", f2Desc: "The lattice sits on the surface at its physical size; the pattern is debossed, embossed or cut through, and tips can taper like cones.",
    f3Title: "Pattern library", f3Desc: "Holes, Voronoi shells, triangle lattices, facets and slices share one settings system, and saved presets carry over to other projects.",
    f4Title: "Perfora Studio", f4Desc: "A web-based panel inside Rhino: pattern cards on the left, a draggable canvas in the middle, parameters on the right and one-click apply."
  };

  /* ── Dönerli Aile Ünitesi (flat ride) ── */
  I18N.tr.flatride = {
    card: "Dönerli Aile Ünitesi", cardMeta: "Lunapark aracı",
    breadcrumb: "Dönerli Aile Ünitesi",
    badge: "Lunapark Aracı",
    year: "Flat ride · 4 × 2 kişi",
    title: "Dönerli Aile Ünitesi<br/><em>Dört gondollu lunapark aracı</em>",
    overview: "<strong>Önce gövde, sonra şasi</strong><br/><br/>Lunapark araçlarında gövde tasarımı çoğu zaman şasi mühendisliğinin ardından gelir. Bu projede sıra tersine çevrildi: dört gondolun oranı, oturma ergonomisi ve ışık imzası önce kurgulandı; X şasi bu forma göre çözüldü.<br/><br/>Ünite tek bir tahrikle iki eksende hareket eder. Merkezî göbek X şasiyi döndürürken her gondol kendi kaidesinde eğimlenir; katmanlı hareket böylece ek bir motor gerektirmeden elde edilir.",
    stat1: "Gondol", stat2: "Kişi kapasite", stat3: "Cıvatalı çelik şasi", stat4: "Işık imzası",
    f1Title: "Tek tahrik, iki eksen", f1Desc: "Merkezî göbek X şasiyi döndürür, gondollar kendi kaidelerinde eğimlenir. Dönüş ve eğim tek bir motordan gelir.",
    f2Title: "Tek parça fiberglas kabuk", f2Desc: "Sırtlık, yan koruma ve ön maske sürekli bir yüzey olarak çözüldü; kabuk otomotiv boyasıyla kaplanır.",
    f3Title: "Kucak bariyeri ve yüksek sırtlık", f3Desc: "Kromaj borudan kucak bariyeri oturma pozisyonunda kilitlenir ve iki tarafta tutamak barındırır. Yüksek sırtlık iki kişilik oturma alanını yanal ivmeye karşı destekler.",
    f4Title: "LED imza", f4Desc: "Işık hattı ön maskede ve yan omuz çizgisinde yer alır; gece görünürlüğü ve marka kimliği aynı elemanla sağlanır."
  };
  I18N.en.flatride = {
    card: "Rotating Family Ride", cardMeta: "Amusement ride",
    breadcrumb: "Rotating Family Ride",
    badge: "Amusement Ride",
    year: "Flat ride · 4 × 2 riders",
    title: "Rotating Family Ride<br/><em>A four-gondola amusement ride</em>",
    overview: "<strong>Body first, chassis second</strong><br/><br/>In amusement rides the body design usually follows the chassis engineering. This project reversed the order: the proportions of the four gondolas, the seating ergonomics and the light signature were set first, and the X chassis was resolved around that form.<br/><br/>The unit moves on two axes from a single drive. The central hub rotates the X chassis while each gondola tilts on its own base, so the layered motion needs no additional motor.",
    stat1: "Gondolas", stat2: "Rider capacity", stat3: "Bolted steel chassis", stat4: "Light signature",
    f1Title: "One drive, two axes", f1Desc: "The central hub rotates the X chassis and the gondolas tilt on their own bases. Rotation and tilt come from a single motor.",
    f2Title: "One-piece fibreglass shell", f2Desc: "Backrest, side protection and front mask are resolved as one continuous surface, finished in automotive paint.",
    f3Title: "Lap bar and high backrest", f3Desc: "The chromed tubular lap bar locks in the seated position and carries a grab handle on each side. The high backrest supports the two-seat bench against lateral acceleration.",
    f4Title: "LED signature", f4Desc: "The light line runs across the front mask and the side shoulder line, so night visibility and brand identity come from the same element."
  };

  /* ── Havalimanı Karşılama Robotu ── */
  I18N.tr.robot = {
    card: "Havalimanı Karşılama Robotu", cardMeta: "Servis robotu",
    breadcrumb: "Karşılama Robotu",
    badge: "Servis Robotu",
    year: "2026 · Havalimanı Terminali",
    title: "Karşılama Robotu<br/><em>Havalimanı yolcu karşılama ve yönlendirme ünitesi</em>",
    overview: "<strong>Tabela yerine karşılayan bir ünite</strong><br/><br/>Büyük terminallerde yolcunun ilk teması bir tabela ya da kalabalık bir bankodur. Bu proje, gelen yolcuyu adım hizasında karşılayan, konuşan ve yönlendiren mobil bir karşılama ünitesi öneriyor.<br/><br/>Form dili bilinçli olarak yumuşak tutuldu: geniş tabanlı damla gövde, yuvarlatılmış omuz hattı ve küre başlık insansı ama tehditkâr olmayan bir siluet kuruyor. Göğüs ekranı yolcunun göz hizasının hemen altında, okunması kolay bir açıda konumlandı.",
    stat1: "Boy", stat2: "Dokunmatik ekran", stat3: "Li-ion çalışma süresi", stat4: "Omni-yönlü tahrik",
    statNum3: "~12 saat",
    f1Title: "Damla taban", f1Desc: "Geniş taban ağırlık merkezini yerde tutar ve üniteyi devrilmeye karşı güvenli kılar. Tahrik, omni-yönlü üç tekerlekle sağlanır.",
    f2Title: "Ayrık kol modülleri", f2Desc: "Kollar gövdeden ayrık modüller olarak çözüldü; işaret etme jesti ve bagaj yönlendirmesi için hareket serbestliği artarken sıkışma riski azaldı.",
    f3Title: "Küre başlık ve ışık hattı", f3Desc: "Başlık, bakış yönünü okunur kılan tek hareketli parçadır. Kol ve başlıktaki mavi ışık hattı hazır, meşgul ve şarj durumlarını gösterir.",
    f4Title: "Algılama ve etkileşim", f4Desc: "LiDAR, derinlik kamerası ve ultrasonik sensörler yaklaşan yolcuyu algılar. 15,6 inç öne eğimli ekran ve altı mikrofonlu dizi çok dilli karşılamayı taşır."
  };
  I18N.en.robot = {
    card: "Airport Greeting Robot", cardMeta: "Service robot",
    breadcrumb: "Greeting Robot",
    badge: "Service Robot",
    year: "2026 · Airport Terminal",
    title: "Greeting Robot<br/><em>A passenger greeting and wayfinding unit for airports</em>",
    overview: "<strong>A unit that greets, instead of a sign</strong><br/><br/>In large terminals a passenger's first contact is a sign or a crowded desk. This project proposes a mobile greeting unit that meets arriving passengers at walking pace, speaks to them and shows them the way.<br/><br/>The form language was kept deliberately soft: a wide teardrop body, a rounded shoulder line and a spherical head build a silhouette that is humanlike but not threatening. The chest display sits just below the passenger's eye level at an easy reading angle.",
    stat1: "Height", stat2: "Touch display", stat3: "Li-ion runtime", stat4: "Omnidirectional drive",
    statNum3: "~12 h",
    f1Title: "Teardrop base", f1Desc: "The wide base keeps the centre of gravity low and makes the unit safe against tipping. Drive comes from three omnidirectional wheels.",
    f2Title: "Separate arm modules", f2Desc: "The arms are resolved as modules set apart from the body, which gives more freedom for pointing gestures and luggage guidance while reducing pinch risk.",
    f3Title: "Spherical head and light line", f3Desc: "The head is the single moving part that makes the gaze direction readable. The blue light line on the arms and head shows ready, busy and charging states.",
    f4Title: "Sensing and interaction", f4Desc: "LiDAR, a depth camera and ultrasonic sensors detect an approaching passenger. A 15.6-inch forward-tilted display and a six-microphone array carry the multilingual greeting."
  };

  /* Gallery chapters and captions for the two pages above (same shape as i18n-gallery.js) */
  I18N.tr.g = I18N.tr.g || {};
  I18N.en.g = I18N.en.g || {};
  I18N.tr.g.flatride = {
    c0t: "Hareket ve düzen",
    c0x: "Dört gondol, merkezî bir göbeğe bağlanan X şasinin uçlarına yerleşir. Göbek şasiyi döndürürken gondollar kendi kaidelerinde eğimlenir.",
    i0t: "Dört gondollu düzen",
    i0d: "X şasi ve merkezî göbek; her kolun ucunda iki kişilik bir gondol kendi kaidesi üzerinde durur.",
    c1t: "Gondol ve kabin",
    c1x: "Gondol tek parça bir fiberglas kabuktur. Sırtlık, yan koruma ve ön maske aynı yüzeyin devamı olarak çözüldü; emniyet ve ışık bu kabuğa eklenir.",
    i1t: "İki kişilik kabin",
    i1d: "Yüksek sırtlıklı iki koltuk ve kromaj kucak bariyeri; ön maskedeki LED imza gondolun yüzünü kurar.",
    i2t: "Yan görünüş",
    i2d: "Kabuk kesiti ve LED imza hattı; sarı iç şerit kesiti vurgular ve kabinin derinliğini dışarıdan okunur kılar.",
    c2t: "Lunaparkta",
    c2x: "Ünite bir family flat ride olarak kurgulandı: bariyer çemberinin içinde döner, yolcular bariyer kapısından alınır.",
    i3t: "Lunapark yerleşimi",
    i3d: "Bariyer çemberi ve yükleme alanı; dört gondol aynı anda sekiz yolcu taşır.",
    i4t: "Dönüş sırasında eğim",
    i4d: "Gündüz kullanımı; şasi dönerken gondollar kendi kaidelerinde eğimlenir.",
    i5t: "Yükleme",
    i5d: "Araç durduğunda yolcular bariyer kapısından gondollara erişir."
  };
  I18N.en.g.flatride = {
    c0t: "Motion and layout",
    c0x: "Four gondolas sit at the ends of an X chassis joined to a central hub. As the hub rotates the chassis, each gondola tilts on its own base.",
    i0t: "Four-gondola layout",
    i0d: "The X chassis and central hub; a two-seat gondola stands on its own base at the end of each arm.",
    c1t: "Gondola and cabin",
    c1x: "The gondola is a one-piece fibreglass shell. Backrest, side protection and front mask continue as one surface; safety and lighting are added to that shell.",
    i1t: "Two-seat cabin",
    i1d: "Two high-backed seats and a chromed lap bar; the LED signature on the front mask gives the gondola its face.",
    i2t: "Side view",
    i2d: "The shell section and LED signature line; the yellow inner stripe marks the section and makes the cabin depth readable from outside.",
    c2t: "In the park",
    c2x: "The unit is planned as a family flat ride: it turns inside a ring of barriers and riders board through the barrier gate.",
    i3t: "Park layout",
    i3d: "The barrier ring and loading area; four gondolas carry eight riders at a time.",
    i4t: "Tilt during rotation",
    i4d: "Daytime use; the gondolas tilt on their own bases as the chassis turns.",
    i5t: "Loading",
    i5d: "When the ride stops, riders reach the gondolas through the barrier gate."
  };
  I18N.tr.g.robot = {
    c0t: "Geliş salonunda",
    c0x: "Robot, yaklaşan yolcuyu iki metre mesafeden algılar ve gövdesini ona döndürür. Ekranda çok dilli karşılama mesajı, sesle de uçuş ve kapı bilgisi verir; gerektiğinde yolcuya pasaport kontrolüne kadar eşlik eder.",
    i0t: "Yolcu akışında karşılama konumu",
    i0d: "Ünite geliş salonunun ortasında, yürüyen yolcuların arasında durur; göğüs ekranındaki karşılama mesajı uzaktan okunur.",
    c1t: "Form ve oran",
    c1x: "Gövde üç kütleye ayrıldı: dengeyi taşıyan damla taban, ekranı barındıran gövde ve iletişimi kuran küre başlık. ABS/PC kabuk mat gümüş, trimler siyahtır.",
    i1t: "Ön görünüş",
    i1d: "Ekran ve gövde hizası; kollar gövdenin iki yanında ayrık modüller olarak durur.",
    i2t: "Perspektif",
    i2d: "Omuz ve baş geçişi; yuvarlatılmış omuz hattı küre başlığa yumuşak bir boyunla bağlanır.",
    i3t: "Yan görünüş",
    i3d: "Öne eğimli duruş; ekran okuma açısına yatarken taban ağırlığı geride tutar."
  };
  I18N.en.g.robot = {
    c0t: "In the arrivals hall",
    c0x: "The robot detects an approaching passenger from two metres away and turns its body towards them. It shows a multilingual greeting on the display and gives flight and gate information by voice; when needed it accompanies the passenger as far as passport control.",
    i0t: "Greeting position in the passenger flow",
    i0d: "The unit stands in the middle of the arrivals hall among walking passengers; the greeting on its chest display reads from a distance.",
    c1t: "Form and proportion",
    c1x: "The body is split into three masses: the teardrop base that carries the balance, the torso that holds the display and the spherical head that makes contact. The ABS/PC shell is matt silver with black trim.",
    i1t: "Front view",
    i1d: "Display and body alignment; the arms sit as separate modules on either side of the torso.",
    i2t: "Perspective",
    i2d: "The shoulder-to-head transition; the rounded shoulder line meets the spherical head through a soft neck.",
    i3t: "Side view",
    i3d: "The forward-leaning stance; the display tilts to a reading angle while the base keeps the weight back."
  };

  if (I18N.tr.v2 && I18N.tr.v2.work) I18N.tr.v2.work.interior = "İç mekân";
  if (I18N.en.v2 && I18N.en.v2.work) I18N.en.v2.work.interior = "Interior";
})();
