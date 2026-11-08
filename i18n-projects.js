/* i18n-projects — copy for the 2026-11 project pages (museum, marble, perfora).
   Extends the global I18N dictionary; load after i18n.js. */
(function () {
  if (typeof I18N === 'undefined') return;

  Object.assign(I18N.tr.pageTitle, {
    museum: "Müze Vitrin Sistemi — Halil Utku Şimşek",
    marble: "Mermer Koleksiyonu — Halil Utku Şimşek",
    perfora: "Perfora — Halil Utku Şimşek"
  });
  Object.assign(I18N.en.pageTitle, {
    museum: "Museum Showcase System — Halil Utku Şimşek",
    marble: "Marble Collection — Halil Utku Şimşek",
    perfora: "Perfora — Halil Utku Şimşek"
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

  if (I18N.tr.v2 && I18N.tr.v2.work) I18N.tr.v2.work.interior = "İç mekân";
  if (I18N.en.v2 && I18N.en.v2.work) I18N.en.v2.work.interior = "Interior";
})();
