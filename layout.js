// Shared header (nav) and footer markup, sourced from index.html.
// Injected into placeholder elements so every page stays in sync.

var FH_NAV_HTML = `
  <div class="fh-nav-row">
    <a href="index.html" class="fh-brand">
      <div class="fh-mark">f<span class="fh-mark-dot"></span></div>
      <span class="fh-brand-name">Fynn</span>
    </a>
    <div class="fh-nav-links">
      <a href="projekte.html" class="fh-nav-link">Projekte</a>
      <a href="erfahrung.html" class="fh-nav-link">Erfahrung</a>
      <a href="kontakt.html" class="fh-nav-cta">Kontakt</a>
    </div>
  </div>
`;

var FH_FOOTER_HTML = `
  <div style="display: flex; align-items: center; gap: 10px;">
    <div style="position: relative; width: 26px; height: 26px; border-radius: 8px; background: #2563EB; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; font-family: 'Helvetica Neue', Arial; line-height: 1; padding-bottom: 2px; overflow: hidden;">f<span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #FFD400; border-top-left-radius: 5px;"></span></div>
    <span style="font-size: 14px; color: #c5c2bb;">2026 Fynn Hofmann</span>
  </div>
  <div class="fh-footer-links">
    <a href="erfahrung.html">Erfahrung</a>
    <a href="projekte.html">Projekte</a>
    <a href="impressum.html">Impressum</a>
  </div>
`;

var FH_FOOTER_STYLE = "max-width: 1200px; margin: 0 auto; padding: 40px 28px 56px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;";

document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("site-nav");
  if (nav) {
    nav.className = "fh-nav";
    nav.innerHTML = FH_NAV_HTML;
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.style.cssText = FH_FOOTER_STYLE;
    footer.innerHTML = FH_FOOTER_HTML;
  }
});
