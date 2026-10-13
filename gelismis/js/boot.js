/* Sayfa çizilmeden önce çalışır: açılış ekranı mı, sayfa geçişi mi gösterileceğine karar verir. */
(function () {
  var html = document.documentElement;
  var GRADS = [
    "linear-gradient(90deg,#c5e5e5,#ebf0f0)",
    "linear-gradient(90deg,#dfeea8,#fff2e0)",
    "linear-gradient(90deg,#d0d0f0,#f1eae0)"
  ];
  window.__GRADS = GRADS;
  html.classList.add("js");

  var flag = null;
  try {
    flag = sessionStorage.getItem("site:gecis");
    sessionStorage.removeItem("site:gecis");
  } catch (e) {}

  var parts = flag ? flag.split("|") : [];
  var index = parseInt(parts[0], 10);
  var fresh = Date.now() - parseInt(parts[1], 10) < 10000;

  if (flag && !isNaN(index) && fresh) {
    // Önceki sayfadan geçişle gelindi: panel ekranı kaplamış halde başla.
    html.style.setProperty("--panel", GRADS[index % GRADS.length]);
    html.classList.add("mid-transition");
  } else {
    // Doğrudan açılış: siyah ekran + dönen halka.
    html.classList.add("is-loading");
  }
})();
