/**
 * OrthodoxKids - Content Loader
 * Fetches JSON content and renders it based on current language
 */

(function () {
  'use strict';

  var cachedData = {};

  function fetchJSON(url) {
    if (cachedData[url]) {
      return Promise.resolve(cachedData[url]);
    }
    return fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        cachedData[url] = data;
        return data;
      });
  }

  function getLang() {
    return window.OrthodoxKids ? window.OrthodoxKids.getLanguage() : 'en';
  }

  function t(obj, field) {
    var lang = getLang();
    return obj[field + '_' + lang] || obj[field + '_en'] || '';
  }

  function tArr(obj, field) {
    var lang = getLang();
    return obj[field + '_' + lang] || obj[field + '_en'] || [];
  }

  // ========================================
  // FATHERS PAGE
  // ========================================

  function renderFathers() {
    var container = document.getElementById('fathers-container');
    if (!container) return;

    fetchJSON('content/fathers.json').then(function (data) {
      buildFathersHTML(data.fathers, container);
    });
  }

  function buildFathersHTML(fathers, container) {
    var lang = getLang();
    var html = '';

    fathers.forEach(function (f) {
      var name = t(f, 'name');
      var nameAlt = lang === 'en' ? (f.name_am || '') : (f.name_en || '');
      var title = t(f, 'title');
      var bio = t(f, 'bio');
      var teaching = t(f, 'key_teaching');
      var funFact = t(f, 'fun_fact');
      var teachingLabel = lang === 'am' ? 'ዋና ትምህርት' : 'Key Teaching';
      var funFactLabel = lang === 'am' ? 'አስደሳች እውነት' : 'Fun Fact';
      var readMore = lang === 'am' ? 'ተጨማሪ ያንብቡ' : 'Read more...';
      var readLess = lang === 'am' ? 'ያሳጥሩ' : 'Read less';

      html += '<div class="father-card" data-id="' + f.id + '">';
      html += '  <div class="father-icon" aria-hidden="true">' + f.icon + '</div>';
      html += '  <div class="father-info">';
      html += '    <h3>' + name + '</h3>';
      html += '    <span class="father-name-am">' + nameAlt + '</span>';
      html += '    <div class="father-title">' + title + '</div>';
      html += '    <div class="father-years">' + f.years + '</div>';
      html += '    <div class="father-bio">';
      html += '      <div class="father-bio-short">' + bio + '</div>';
      html += '      <div class="father-bio-full">' + bio + '</div>';
      html += '    </div>';
      html += '    <button class="read-more-btn" data-more="' + readMore + '" data-less="' + readLess + '">' + readMore + '</button>';
      html += '    <div class="father-extra">';
      html += '      <h4>' + teachingLabel + '</h4>';
      html += '      <p>' + teaching + '</p>';
      html += '      <h4>' + funFactLabel + '</h4>';
      html += '      <div class="father-fun-fact"><p>' + funFact + '</p></div>';
      html += '    </div>';
      html += '  </div>';
      html += '</div>';
    });

    container.innerHTML = html;

    // Attach expand/collapse handlers
    container.querySelectorAll('.read-more-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var card = this.closest('.father-card');
        card.classList.toggle('expanded');
        if (card.classList.contains('expanded')) {
          this.textContent = this.dataset.less;
        } else {
          this.textContent = this.dataset.more;
        }
      });
    });
  }

  // ========================================
  // HISTORY TIMELINE
  // ========================================

  function renderTimeline() {
    var container = document.getElementById('timeline-container');
    if (!container) return;

    fetchJSON('content/history.json').then(function (data) {
      buildTimelineHTML(data.timeline, container);
      // Re-init scroll animations
      if (window.OrthodoxKids && window.OrthodoxKids.initScrollAnimations) {
        window.OrthodoxKids.initScrollAnimations();
      }
      initTimelineAnimations();
    });
  }

  function buildTimelineHTML(events, container) {
    var lang = getLang();
    var html = '';
    var adLabel = lang === 'am' ? 'ዓ.ም.' : 'AD';

    events.forEach(function (ev) {
      html += '<div class="timeline-item">';
      html += '  <div class="timeline-marker"></div>';
      html += '  <div class="timeline-card">';
      html += '    <span class="timeline-date">' + ev.year + ' ' + adLabel + '</span>';
      html += '    <h3>' + t(ev, 'title') + '</h3>';
      html += '    <p>' + t(ev, 'description') + '</p>';
      html += '  </div>';
      html += '</div>';
    });

    container.innerHTML = html;
  }

  function initTimelineAnimations() {
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
  // TEACHINGS (HOMEPAGE)
  // ========================================

  function renderTeachings() {
    var container = document.getElementById('teachings-container');
    if (!container) return;

    fetchJSON('content/teachings.json').then(function (data) {
      buildTeachingsHTML(data.teachings, container);
    });
  }

  function buildTeachingsHTML(teachings, container) {
    var lang = getLang();
    var html = '';

    teachings.forEach(function (teach) {
      var points = tArr(teach, 'key_points');
      html += '<div class="teaching-card">';
      html += '  <h3>' + t(teach, 'title') + '</h3>';
      html += '  <p>' + t(teach, 'summary') + '</p>';
      html += '  <ul class="teaching-points">';
      points.forEach(function (pt) {
        html += '<li>' + pt + '</li>';
      });
      html += '  </ul>';
      html += '  <p class="scripture-ref">' + teach.scripture_reference + '</p>';
      html += '</div>';
    });

    container.innerHTML = html;
  }

  // ========================================
  // HOMEPAGE HERO & NAV CARDS
  // ========================================

  function renderHomeContent() {
    var lang = getLang();

    // Hero content
    var heroTitle = document.getElementById('hero-title');
    var heroSub = document.getElementById('hero-subtitle');
    var heroSubAm = document.getElementById('hero-subtitle-am');
    var heroCta = document.getElementById('hero-cta');

    if (heroTitle) {
      if (lang === 'am') {
        heroTitle.textContent = 'ኦርቶዶክስ ኪድስ';
        if (heroSub) heroSub.textContent = 'ለልጆች ስለ ኦርቶዶክስ ክርስትና መማር';
        if (heroSubAm) heroSubAm.textContent = 'OrthodoxKids - Learning Orthodox Christianity';
        if (heroCta) heroCta.textContent = 'መማር ጀምር';
      } else {
        heroTitle.textContent = 'OrthodoxKids';
        if (heroSub) heroSub.textContent = 'Discover the Beauty of Orthodox Christianity';
        if (heroSubAm) heroSubAm.textContent = 'የኦርቶዶክስ ክርስትናን ውበት ያግኙ';
        if (heroCta) heroCta.textContent = 'Start Learning';
      }
    }

    // Nav cards
    var cards = [
      {
        en: { title: 'Church Fathers', desc: 'Meet the holy teachers who shaped our faith' },
        am: { title: 'የቤተ ክርስቲያን አባቶች', desc: 'ሃይማኖታችንን የቀረጹትን ቅዱሳን መምህራን ይወቁ' }
      },
      {
        en: { title: 'History', desc: 'Journey through 2000 years of Orthodox history' },
        am: { title: 'ታሪክ', desc: 'በ2000 ዓመታት የኦርቶዶክስ ታሪክ ውስጥ ይጓዙ' }
      },
      {
        en: { title: 'Quiz', desc: 'Test your knowledge and learn new things' },
        am: { title: 'ፈተና', desc: 'እውቀትዎን ይፈትሹ አዳዲስ ነገሮችንም ይማሩ' }
      }
    ];

    cards.forEach(function (card, i) {
      var titleEl = document.getElementById('nav-card-title-' + i);
      var descEl = document.getElementById('nav-card-desc-' + i);
      if (titleEl) titleEl.textContent = lang === 'am' ? card.am.title : card.en.title;
      if (descEl) descEl.textContent = lang === 'am' ? card.am.desc : card.en.desc;
    });

    // Section heading for teachings
    var teachingsTitle = document.getElementById('teachings-section-title');
    var teachingsDesc = document.getElementById('teachings-section-desc');
    if (teachingsTitle) {
      teachingsTitle.textContent = lang === 'am' ? 'ዋና ትምህርቶች' : 'Core Teachings';
    }
    if (teachingsDesc) {
      teachingsDesc.textContent = lang === 'am'
        ? 'የኦርቶዶክስ ሃይማኖት መሠረታዊ ትምህርቶች'
        : 'Fundamental teachings of the Orthodox faith';
    }
  }

  // ========================================
  // PAGE TITLES & HEADERS
  // ========================================

  function renderPageHeaders() {
    var lang = getLang();

    // Fathers page
    var fathersTitle = document.getElementById('page-title-fathers');
    var fathersDesc = document.getElementById('page-desc-fathers');
    if (fathersTitle) {
      fathersTitle.textContent = lang === 'am' ? 'የቤተ ክርስቲያን አባቶች' : 'Church Fathers';
    }
    if (fathersDesc) {
      fathersDesc.textContent = lang === 'am'
        ? 'ሃይማኖታችንን የቀረጹትን ቅዱሳን መምህራን ይወቁ'
        : 'Meet the holy teachers who shaped our faith';
    }

    // History page
    var historyTitle = document.getElementById('page-title-history');
    var historyDesc = document.getElementById('page-desc-history');
    if (historyTitle) {
      historyTitle.textContent = lang === 'am' ? 'የኦርቶዶክስ ታሪክ ዝርዝር' : 'Timeline of Orthodox History';
    }
    if (historyDesc) {
      historyDesc.textContent = lang === 'am'
        ? 'ከጴንጤቆስጤ እስከ ዛሬ ያለው ጉዞ'
        : 'A journey from Pentecost to the present day';
    }

    // Quiz page
    var quizTitle = document.getElementById('page-title-quiz');
    var quizDesc = document.getElementById('page-desc-quiz');
    if (quizTitle) {
      quizTitle.textContent = lang === 'am' ? 'እውቀትዎን ይፈትሹ' : 'Test Your Knowledge';
    }
    if (quizDesc) {
      quizDesc.textContent = lang === 'am'
        ? 'ምድብ ይምረጡ እና ይጀምሩ!'
        : 'Choose a category and start the quiz!';
    }

    // Nav links
    var navLinks = document.querySelectorAll('.main-nav a');
    var navLabels = [
      { en: 'Home', am: 'መነሻ' },
      { en: 'Fathers', am: 'አባቶች' },
      { en: 'History', am: 'ታሪክ' },
      { en: 'Quiz', am: 'ፈተና' }
    ];
    navLinks.forEach(function (link, i) {
      if (navLabels[i]) {
        link.textContent = lang === 'am' ? navLabels[i].am : navLabels[i].en;
      }
    });

    // Footer
    var footerText = document.getElementById('footer-tagline');
    if (footerText) {
      footerText.textContent = lang === 'am'
        ? 'ለወጣት ተማሪዎች በእምነት የተሠራ'
        : 'Built with faith for young learners';
    }

    // Footer links
    var footerLinks = document.querySelectorAll('.footer-links a');
    var footerLabels = [
      { en: 'Home', am: 'መነሻ' },
      { en: 'Fathers', am: 'አባቶች' },
      { en: 'History', am: 'ታሪክ' },
      { en: 'Quiz', am: 'ፈተና' }
    ];
    footerLinks.forEach(function (link, i) {
      if (footerLabels[i]) {
        link.textContent = lang === 'am' ? footerLabels[i].am : footerLabels[i].en;
      }
    });
  }

  // ========================================
  // INIT & LANGUAGE CHANGE HANDLER
  // ========================================

  function renderAll() {
    renderPageHeaders();
    renderHomeContent();
    renderFathers();
    renderTimeline();
    renderTeachings();
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderAll();
  });

  window.addEventListener('languageChange', function () {
    renderAll();
  });

})();
