/* =====================================================================
   Sayfayı js/data.js içindeki içerikten kurar.
   İçerik değiştirmek için bu dosyaya dokunmanız gerekmez.
   ===================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) return;

  var L = S.labels || {};
  var B = S.brand || {};
  var projects = S.projects || [];
  var brandFull = [B.name, B.suffix].filter(Boolean).join(" ");
  var reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var PREFIX = "#proje-";

  /* ------------------------------------------------------------------
     Küçük yardımcılar
     ------------------------------------------------------------------ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function has(list) { return Array.isArray(list) && list.length > 0; }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function digits(v) { return String(v || "").replace(/[^\d]/g, ""); }
  // "#iletisim" gibi bir adres parçasının gösterdiği bölümü bulur.
  function byHash(hash) {
    if (!hash || hash.charAt(0) !== "#" || hash.length < 2) return null;
    try { return document.getElementById(decodeURIComponent(hash.slice(1))); } catch (e) { return null; }
  }
  function isRemote(url) { return /images\.unsplash\.com/.test(url); }
  // Unsplash görsellerinde istenen genişliği ayarlar; yerel dosyalara dokunmaz.
  function sized(url, w) { return isRemote(url) ? url.replace(/([?&]w=)\d+/, "$1" + w) : url; }

  function media(url, alt, cls, sizes, eager) {
    cls = cls ? " " + cls : "";
    if (!url) return '<span class="ph is-broken' + cls + '" data-ph="' + esc(L.noImage) + '"></span>';
    var srcset = "";
    if (isRemote(url)) {
      srcset = ' srcset="' + [700, 1100, 1600, 2200].map(function (w) {
        return esc(sized(url, w)) + " " + w + "w";
      }).join(", ") + '" sizes="' + (sizes || "100vw") + '"';
    }
    return '<span class="ph' + cls + '" data-ph="' + esc(L.noImage) + '">' +
      '<img src="' + esc(sized(url, 1600)) + '"' + srcset + ' alt="' + esc(alt || "") + '"' +
      (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async"></span>';
  }

  // Görsel yüklenince yumuşakça belirir; yüklenemezse yer tutucu yazı kalır.
  function watchImages(root) {
    $$(".ph img", root).forEach(function (img) {
      function ok() { img.classList.add("is-loaded"); }
      function bad() { img.parentNode.classList.add("is-broken"); }
      if (img.complete) { if (img.naturalWidth) ok(); else bad(); return; }
      img.addEventListener("load", ok);
      img.addEventListener("error", bad);
    });
  }

  function bySlug(slug) {
    for (var i = 0; i < projects.length; i++) if (projects[i].slug === slug) return projects[i];
    return null;
  }
  function projectHref(p) { return PREFIX + encodeURIComponent(p.slug); }
  function metaLine(p) { return [p.category, p.location, p.year].filter(Boolean).map(esc).join(" · "); }

  function whatsappUrl(text) {
    var c = S.contact || {};
    var n = digits(c.whatsapp);
    if (!n) return "";
    var msg = text || c.whatsappMessage || "";
    return "https://wa.me/" + n + (msg ? "?text=" + encodeURIComponent(msg) : "");
  }
  function mapUrl() {
    var c = S.contact || {};
    if (c.mapUrl) return c.mapUrl;
    return c.address ? "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(c.address) : "";
  }
  function logoHTML() {
    return "<b>" + esc(B.name) + "</b>" + (B.suffix ? " <span>" + esc(B.suffix) + "</span>" : "");
  }

  /* ------------------------------------------------------------------
     Bölümler
     ------------------------------------------------------------------ */
  function headerHTML() {
    return '<div class="wrap hd-in">' +
      '<a class="logo" href="#ust" aria-label="' + esc(brandFull) + '">' + logoHTML() + "</a>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">' + esc(L.menu) + ' <i aria-hidden="true">↓</i></button>' +
      '<nav class="nav" id="nav" aria-label="' + esc(L.menu) + '">' +
      (S.nav || []).map(function (n) { return '<a href="' + esc(n.href) + '">' + esc(n.label) + "</a>"; }).join("") +
      "</nav></div>";
  }

  function heroHTML() {
    var h = S.hero || {};
    var slides = (h.slides || []).filter(function (s) { return s && s.image; });
    var html = '<section class="hero" id="ust"><div class="wrap">';

    if (slides.length) {
      html += '<div class="slides">' + slides.map(function (s, i) {
        var p = s.project && bySlug(s.project);
        var open = p ? '<a href="' + projectHref(p) + '"' : "<div";
        return open + ' class="slide' + (i === 0 ? " is-on" : "") + '"' + (i ? ' aria-hidden="true" tabindex="-1"' : "") + ">" +
          media(s.image, s.caption, "", "100vw", i === 0) + (p ? "</a>" : "</div>");
      }).join("") + "</div>";

      html += '<div class="hero-bar"><p class="hero-cap">' + esc(slides[0].caption) + "</p>";
      if (slides.length > 1) {
        html += '<div class="dots">' + slides.map(function (s, i) {
          return '<button type="button" aria-label="' + esc(s.caption || "Fotoğraf " + (i + 1)) + '" aria-current="' + (i === 0) + '"></button>';
        }).join("") + "</div>";
      }
      html += "</div>";
    }

    if (h.intro) {
      html += '<div class="hero-intro"><p class="hero-kicker">' + esc(h.kicker) + "</p><div>" +
        '<h1 class="hero-lead">' + esc(h.intro) + "</h1>" +
        (h.note ? '<p class="hero-note">' + esc(h.note) + "</p>" : "") +
        (h.linkLabel ? '<a class="more" href="' + esc(h.linkHref || "#ofis") + '">' + esc(h.linkLabel) + "</a>" : "") +
        "</div></div>";
    }
    return html + "</div></section>";
  }

  function secHead(title, note) {
    return '<div class="sec-head"><h2>' + esc(title) + "</h2>" + (note ? "<p>" + esc(note) + "</p>" : "") + "</div>";
  }

  function projectsHTML() {
    if (!has(projects)) return "";
    return '<section class="sec" id="projeler"><div class="wrap">' +
      secHead(L.projects, projects.length + " " + (L.projectsNote || "")) +
      '<div class="grid">' + projects.map(function (p, i) {
        return '<a class="card rv" style="--d:' + (i % 2) * 0.08 + 's" href="' + projectHref(p) + '">' +
          media(p.cover, p.title, "", "(max-width: 760px) 100vw, 50vw") +
          "<h3>" + esc(p.title) + "</h3><p>" + metaLine(p) + "</p></a>";
      }).join("") + "</div></div></section>";
  }

  function officeHTML() {
    var o = S.office;
    if (!o || !(o.headline || has(o.text))) return "";
    var html = '<section class="sec" id="ofis"><div class="wrap">' + secHead(L.office) + '<div class="office">' +
      media(o.image, o.imageAlt || L.office, "rv", "(max-width: 760px) 100vw, 40vw") +
      '<div class="rv">' +
      (o.headline ? '<p class="office-lead">' + esc(o.headline) + "</p>" : "") +
      '<div class="office-text">' + (o.text || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>";

    if (has(o.stats)) {
      html += '<ul class="stats">' + o.stats.map(function (s) {
        return "<li><b>" + esc(s.value) + "</b><span>" + esc(s.label) + "</span></li>";
      }).join("") + "</ul>";
    }
    if (has(o.people)) {
      html += '<div class="people"><h3>' + esc(L.people) + "</h3><ul>" + o.people.map(function (p) {
        return "<li>" + esc(p.name) + "<span>" + esc(p.role) + "</span></li>";
      }).join("") + "</ul></div>";
    }
    return html + "</div></div></div></section>";
  }

  function servicesHTML() {
    if (!has(S.services) && !has(S.steps)) return "";
    var html = '<section class="sec" id="hizmetler"><div class="wrap">' + secHead(L.services);
    if (has(S.services)) {
      html += '<ul class="svc rv">' + S.services.map(function (s, i) {
        return '<li><span class="n">' + pad2(i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></li>";
      }).join("") + "</ul>";
    }
    if (has(S.steps)) {
      html += '<h3 class="steps-title">' + esc(L.steps) + '</h3><ol class="steps rv">' + S.steps.map(function (s, i) {
        return '<li><span class="n">' + pad2(i + 1) + "</span><h4>" + esc(s.title) + "</h4><p>" + esc(s.text) + "</p></li>";
      }).join("") + "</ol>";
    }
    return html + "</div></section>";
  }

  function fact(label, value) {
    return value ? "<div><dt>" + esc(label) + "</dt><dd>" + value + "</dd></div>" : "";
  }

  function contactHTML() {
    var c = S.contact;
    if (!c) return "";
    var wa = whatsappUrl();
    var map = mapUrl();
    var social = (c.social || []).filter(function (s) { return s.href; });

    return '<section class="contact" id="iletisim"><div class="wrap">' + secHead(L.contact) + '<div class="contact-grid">' +
      '<div class="rv"><p class="contact-lead">' + esc(c.headline) + "</p>" +
      (c.note ? '<p class="contact-note">' + esc(c.note) + "</p>" : "") +
      '<div class="contact-btns">' +
      (wa ? '<a class="btn btn-fill" href="' + esc(wa) + '" target="_blank" rel="noopener">' + esc(L.whatsapp) + "</a>" : "") +
      (c.phone ? '<a class="btn' + (wa ? "" : " btn-fill") + '" href="tel:+' + digits(c.phone) + '">' + esc(L.call) + "</a>" : "") +
      "</div></div>" +
      '<dl class="facts rv">' +
      fact(L.address, c.address ? esc(c.address) + (map ? '<br><a class="more dir" href="' + esc(map) + '" target="_blank" rel="noopener">' + esc(L.directions) + " →</a>" : "") : "") +
      fact(L.phone, c.phone ? '<a class="more" href="tel:+' + digits(c.phone) + '">' + esc(c.phone) + "</a>" : "") +
      fact(L.email, c.email ? '<a class="more" href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : "") +
      fact(L.hours, esc(c.hours)) +
      fact(L.social, social.map(function (s) {
        return '<a class="more" href="' + esc(s.href) + '"' + (/^https?:/.test(s.href) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(s.label) + "</a>";
      }).join(" &nbsp; ")) +
      "</dl></div></div></section>";
  }

  function footerHTML() {
    return '<div class="wrap"><div class="ft-in">' +
      "<p>© " + new Date().getFullYear() + " " + esc(brandFull) + (B.city ? " · " + esc(B.city) : "") + "</p>" +
      (S.demoNote ? '<p class="demo">' + esc(S.demoNote) + "</p>" : "") +
      '<a href="#ust">' + esc(L.top) + " ↑</a></div></div>";
  }

  /* ------------------------------------------------------------------
     Proje sayfası
     ------------------------------------------------------------------ */
  function sheetHTML(p) {
    var i = projects.indexOf(p);
    var prev = projects[(i - 1 + projects.length) % projects.length];
    var next = projects[(i + 1) % projects.length];
    var wa = whatsappUrl("Merhaba, sitenizdeki “" + p.title + "” projesini gördüm. Benzer bir iş için bilgi almak istiyorum.");

    var html = '<div class="sheet-bar"><div class="wrap hd-in">' +
      '<a class="logo" href="#ust" data-close aria-label="' + esc(brandFull) + '">' + logoHTML() + "</a>" +
      '<button class="sheet-close" type="button" data-close>' + esc(L.close) + '<i aria-hidden="true">×</i></button>' +
      "</div></div>" +
      '<article class="wrap">' +
      '<header class="sheet-head"><p>' + [p.category, p.location].filter(Boolean).map(esc).join(" · ") + "</p>" +
      '<h2 id="sheet-title">' + esc(p.title) + "</h2></header>" +
      media(p.cover, p.title, "sheet-cover", "100vw", true) +
      '<div class="sheet-cols"><dl class="facts">' +
      fact(L.factLocation, esc(p.location)) +
      fact(L.factYear, esc(p.year)) +
      fact(L.factArea, esc(p.area)) +
      fact(L.factType, esc(p.category)) +
      fact(L.factStatus, esc(p.status)) +
      '</dl><div class="prose">' + (p.text || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
      (wa ? '<a class="btn" href="' + esc(wa) + '" target="_blank" rel="noopener">' + esc(L.projectCta) + "</a>" : "") +
      "</div></div>";

    if (has(p.gallery)) {
      html += '<div class="sheet-gallery">' + p.gallery.map(function (g, k) {
        return media(g, p.title + " — " + (k + 2), "", "(max-width: 760px) 100vw, 50vw");
      }).join("") + "</div>";
    }

    html += '<nav class="sheet-nav" aria-label="' + esc(L.projects) + '">';
    if (projects.length > 1) {
      html += '<a class="pv" href="' + projectHref(prev) + '" data-swap><small>← ' + esc(L.prev) + "</small><b>" + esc(prev.title) + "</b></a>" +
        '<a class="all" href="#projeler" data-close>' + esc(L.allProjects) + "</a>" +
        '<a class="nx" href="' + projectHref(next) + '" data-swap><small>' + esc(L.next) + " →</small><b>" + esc(next.title) + "</b></a>";
    }
    return html + "</nav></article>";
  }

  var sheet = $("#sheet");
  var lastFocus = null;     // proje kapanınca odağın döneceği yer
  var openedHere = false;   // proje bu sayfadaki bir bağlantıdan mı açıldı?
  var baseTitle = "";

  function currentProject() {
    var h = "";
    try { h = decodeURIComponent(location.hash || ""); } catch (e) { h = location.hash || ""; }
    return h.indexOf(PREFIX) === 0 ? bySlug(h.slice(PREFIX.length)) : null;
  }
  function setInert(on) {
    ["#hd", "#main", "#ft"].forEach(function (sel) {
      var el = $(sel);
      if (el) el.inert = on;
    });
  }
  function isSheetOpen() { return sheet.classList.contains("is-open"); }

  function openSheet(p) {
    sheet.innerHTML = sheetHTML(p);
    sheet.setAttribute("aria-labelledby", "sheet-title");
    watchImages(sheet);
    sheet.scrollTop = 0;
    if (!isSheetOpen()) {
      // Arkadaki sayfanın kaydırma çubuğu gizlenirken içerik yana kaymasın
      document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + "px";
    }
    sheet.classList.add("is-open");
    sheet.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("sheet-open");
    setInert(true);
    document.title = p.title + " — " + brandFull;
    var btn = $(".sheet-close", sheet);
    if (btn) btn.focus({ preventScroll: true });
  }
  function closeSheet() {
    if (!isSheetOpen()) return;
    sheet.classList.remove("is-open");
    sheet.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("sheet-open");
    document.body.style.paddingRight = "";
    setInert(false);
    document.title = baseTitle;
    openedHere = false;
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    lastFocus = null;
  }
  function syncSheet() {
    var p = currentProject();
    if (p) openSheet(p); else closeSheet();
  }
  // Kapat: sayfadan açıldıysa "geri" ile (kaldığı yere döner), doğrudan adresle gelindiyse adresi temizleyerek.
  function requestClose(then) {
    if (openedHere) {
      if (then) window.addEventListener("hashchange", function once() {
        window.removeEventListener("hashchange", once);
        setTimeout(then, 0);
      });
      history.back();
      return;
    }
    history.replaceState(null, "", location.pathname + location.search);
    closeSheet();
    if (then) then();
  }

  /* ------------------------------------------------------------------
     Açılıştaki fotoğraf geçişi
     ------------------------------------------------------------------ */
  function initSlides() {
    var box = $(".slides");
    if (!box) return;
    var slides = $$(".slide", box);
    var dots = $$(".dots button");
    var cap = $(".hero-cap");
    var data = ((S.hero || {}).slides || []).filter(function (s) { return s && s.image; });
    if (slides.length < 2) return;

    var cur = 0, timer = null, DELAY = 6000;

    function show(n) {
      n = (n + slides.length) % slides.length;
      if (n === cur) return;
      slides[cur].classList.remove("is-on");
      slides[cur].setAttribute("aria-hidden", "true");
      slides[cur].setAttribute("tabindex", "-1");
      cur = n;
      slides[cur].classList.add("is-on");
      slides[cur].removeAttribute("aria-hidden");
      slides[cur].removeAttribute("tabindex");
      dots.forEach(function (d, k) { d.setAttribute("aria-current", String(k === cur)); });
      if (cap && data[cur]) cap.textContent = data[cur].caption || "";
    }
    function play() {
      clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(function () {
        if (!document.hidden && !isSheetOpen()) show(cur + 1);
      }, DELAY);
    }

    dots.forEach(function (d, k) {
      d.addEventListener("click", function () { show(k); play(); });
    });

    // Telefonda parmakla sağa/sola kaydırma
    var x0 = null, y0 = null;
    box.addEventListener("touchstart", function (e) {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.4) { show(cur + (dx < 0 ? 1 : -1)); play(); }
    }, { passive: true });

    play();
  }

  /* ------------------------------------------------------------------
     Menü, kaydırma ve tıklamalar
     ------------------------------------------------------------------ */
  function setMenu(open) {
    var hd = $("#hd"), btn = $(".menu-btn");
    hd.classList.toggle("is-open", open);
    if (btn) btn.setAttribute("aria-expanded", String(open));
  }

  function onClick(e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var t = e.target.closest ? e.target.closest("a, button") : null;
    if (!t) { setMenu(false); return; }

    if (t.classList.contains("menu-btn")) { setMenu(!$("#hd").classList.contains("is-open")); return; }

    var href = t.getAttribute("href") || "";

    // Açık proje sayfasının içindeki düğmeler
    if (t.hasAttribute("data-close")) {
      e.preventDefault();
      var target = byHash(href);
      requestClose(target ? function () { scrollToEl(target); } : null);
      return;
    }
    if (t.hasAttribute("data-swap")) {       // önceki / sonraki proje: geçmişe yeni kayıt eklemeden değiştir
      e.preventDefault();
      location.replace(href);
      return;
    }

    if (href.indexOf(PREFIX) === 0) {        // proje kartı: adres değişir, "geri" tuşu projeyi kapatır
      lastFocus = t;
      openedHere = true;
      setMenu(false);
      return;
    }

    var el = byHash(href);                   // sayfa içi bağlantı: yumuşak kaydır
    if (el) { e.preventDefault(); setMenu(false); scrollToEl(el); }
  }

  function scrollToEl(el) {
    if (el.id === "ust") { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); return; }
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function observeReveals() {
    var items = $$(".rv");
    if (!("IntersectionObserver" in window) || reduceMotion) return;
    document.documentElement.classList.add("js-rv");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------
     Başlat
     ------------------------------------------------------------------ */
  function boot() {
    baseTitle = brandFull + (B.city ? " — " + B.city : "");
    document.title = baseTitle;
    var desc = $('meta[name="description"]');
    if (desc && B.description) desc.setAttribute("content", B.description);

    $("#main").innerHTML = heroHTML() + projectsHTML() + officeHTML() + servicesHTML() + contactHTML();
    $("#hd").innerHTML = headerHTML();
    $("#ft").innerHTML = footerHTML();

    // Karşılığı olmayan menü bağlantılarını gizle
    $$("#nav a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.charAt(0) === "#" && !byHash(href)) a.remove();
    });

    watchImages(document);
    initSlides();
    observeReveals();

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (isSheetOpen()) requestClose(); else setMenu(false);
    });
    window.addEventListener("hashchange", syncSheet);

    var hd = $("#hd");
    function onScroll() { hd.classList.toggle("is-scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Adres bir projeyi ya da bölümü gösteriyorsa doğrudan oraya git
    syncSheet();
    var section = isSheetOpen() ? null : byHash(location.hash);
    if (section) section.scrollIntoView();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
