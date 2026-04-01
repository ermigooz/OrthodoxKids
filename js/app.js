/**
 * OrthodoxKids - Shared Application JavaScript
 * Language toggle, navigation, localStorage preferences
 */

(function () {
  'use strict';

  // ========================================
  // LANGUAGE MANAGEMENT
  // ========================================

  const LANG_KEY = 'orthodoxkids_lang';

  function getLanguage() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    document.body.setAttribute('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update toggle buttons
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-checked', btn.dataset.lang === lang ? 'true' : 'false');
    });

    // Fire custom event so content-loader and quiz can respond
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: lang } }));
  }

  function initLanguageToggle() {
    var lang = getLanguage();
    applyLanguage(lang);

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(this.dataset.lang);
      });
    });
  }

  // ========================================
  // MOBILE NAVIGATION
  // ========================================

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });

    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ========================================
  // ACTIVE NAV LINK
  // ========================================

  function highlightActiveNav() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    document.querySelectorAll('.main-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === page || (page === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ========================================
  // SCROLL ANIMATIONS (for timeline)
  // ========================================

  function initScrollAnimations() {
    var items = document.querySelectorAll('.timeline-item');
    if (items.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  // ========================================
  // INIT
  // ========================================

  document.addEventListener('DOMContentLoaded', function () {
    initLanguageToggle();
    initMobileNav();
    highlightActiveNav();
    initScrollAnimations();
  });

  // Expose getLanguage globally for other scripts
  window.OrthodoxKids = {
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    initScrollAnimations: initScrollAnimations
  };

})();
