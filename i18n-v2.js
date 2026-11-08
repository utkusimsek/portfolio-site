/* i18n-v2 — redesign copy. Extends the global I18N dictionary from i18n.js.
   Must load after i18n.js (both deferred, order preserved). */
(function () {
  if (typeof I18N === 'undefined') return;

  I18N.tr.v2 = {
    nav: { work: "İşler", about: "Hakkımda", skills: "Araçlar", contact: "İletişim", cta: "Yazın" },
    hero: {
      intro: "Yat, ürün ve kent mobilyası tasarlıyorum. İlk eskizden üretime hazır modele kadar formun nedenini çizgiyle anlatıyorum.",
      featured: "Diploma projesi",
      featuredMeta: "KLAN Studio için, 2023",
      open: "Projeyi aç",
      status: "Yeni projelere açığım",
      place: "İzmir ve Bodrum"
    },
    tools: "Her gün çalıştığım araçlar",
    work: {
      title: "Seçili işler",
      intro: "Denizde, masada ve sokakta kullanılan on bir proje.",
      all: "Tümü", yacht: "Yat", product: "Ürün", urban: "Kentsel",
      filterAria: "Projeleri kategoriye göre süz"
    },
    reel: { title: "Renderdan harekete", pause: "Duraklat", play: "Oynat", clip: "Klip" },
    about: {
      lead: "Bir teknenin gövdesine de bir masa lambasının menteşesine de aynı soruyu soruyorum: bu form neden böyle?",
      p1: "Yaşar Üniversitesi Endüstriyel Tasarım bölümünden 2023'te mezun oldum. Disiplinler arası çalışmayı ve kullanıcıyı merkeze alan tasarımı her projenin başlangıç noktası sayıyorum.",
      p2: "Neta Marine, Salmakis Yachts ve SKY Naval Architects'te yat tasarımı üzerine çalıştım. Rhino, V-Ray ve Twinmotion ile hem kavramsal hem üretime yakın çözümler üretiyorum.",
      expTitle: "Çalıştığım yerler",
      portraitCaption: "Endüstriyel Tasarım lisansı, 2023",
      statProjects: "tamamlanan proje",
      statIntern: "staj",
      statCert: "sertifika"
    },
    skills: {
      title: "Araçlar ve yetkinlik",
      intro: "Her çubuk on parçalı; doluluk, aracı ne kadar rahat kullandığımı gösteriyor.",
      modeling: "3D modelleme",
      render: "Görselleştirme",
      present: "Sunum ve arayüz",
      certs: "Sertifikalar",
      licenses: "Ehliyetler"
    },
    contact: {
      title: "Birlikte bir şey tasarlayalım",
      desc: "Yeni bir proje, staj ya da iş birliği fikriniz varsa yazın. Genellikle iki gün içinde dönüyorum.",
      formTitle: "Mesaj gönderin"
    },
    mc: { title: "Mobilchef Ekobox L220", meta: "Mobil ünite tasarımı" },
    footer: { top: "Başa dön" }
  };

  I18N.en.v2 = {
    nav: { work: "Work", about: "About", skills: "Tools", contact: "Contact", cta: "Write to me" },
    hero: {
      intro: "I design yachts, products and street furniture, explaining why every form is the way it is, from the first sketch to a production-ready model.",
      featured: "Diploma project",
      featuredMeta: "For KLAN Studio, 2023",
      open: "Open project",
      status: "Open to new projects",
      place: "İzmir and Bodrum"
    },
    tools: "Tools I use every day",
    work: {
      title: "Selected work",
      intro: "Eleven projects used at sea, on the desk and in the street.",
      all: "All", yacht: "Yacht", product: "Product", urban: "Urban",
      filterAria: "Filter projects by category"
    },
    reel: { title: "From render to motion", pause: "Pause", play: "Play", clip: "Clip" },
    about: {
      lead: "I ask a yacht hull and a desk lamp hinge the same question: why is this form the way it is?",
      p1: "I graduated in Industrial Design from Yaşar University in 2023. Interdisciplinary work and user-centred design are where every project starts for me.",
      p2: "I have worked on yacht design at Neta Marine, Salmakis Yachts and SKY Naval Architects. With Rhino, V-Ray and Twinmotion I produce both conceptual and production-ready solutions.",
      expTitle: "Where I've worked",
      portraitCaption: "BA in Industrial Design, 2023",
      statProjects: "projects completed",
      statIntern: "internships",
      statCert: "certificates"
    },
    skills: {
      title: "Tools and craft",
      intro: "Each bar has ten segments; how full it is shows how fluent I am with the tool.",
      modeling: "3D modelling",
      render: "Visualisation",
      present: "Presentation and UI",
      certs: "Certificates",
      licenses: "Licences"
    },
    contact: {
      title: "Let's design something together",
      desc: "If you have a new project, an internship or a collaboration in mind, write to me. I usually reply within two days.",
      formTitle: "Send a message"
    },
    mc: { title: "Mobilchef Ekobox L220", meta: "Mobile unit design" },
    footer: { top: "Back to top" }
  };
})();
