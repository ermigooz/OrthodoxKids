/**
 * OrthodoxKids - Quiz Logic
 * Loads questions from JSON, tracks score, provides feedback
 */

(function () {
  'use strict';

  var allQuestions = [];
  var currentQuestions = [];
  var currentIndex = 0;
  var score = 0;
  var answered = false;
  var selectedCategory = null;

  var categoryMeta = {
    trinity:     { icon: '\u2734',  en: 'The Holy Trinity',   am: 'ቅድስት ሥላሴ' },
    incarnation: { icon: '\u2720',  en: 'The Incarnation',    am: 'የክርስቶስ ሥጋዌ' },
    fasting:     { icon: '\u2663',  en: 'Fasting',            am: 'ጾም' },
    prayer:      { icon: '\u2606',  en: 'Prayer',             am: 'ጸሎት' },
    sacraments:  { icon: '\u26EA',  en: 'Holy Sacraments',    am: 'ቅዱሳት ምሥጢራት' },
    history:     { icon: '\u231B',  en: 'History',            am: 'ታሪክ' },
    fathers:     { icon: '\u270E',  en: 'Church Fathers',     am: 'የቤተ ክርስቲያን አባቶች' }
  };

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
  // CATEGORY VIEW
  // ========================================

  function renderCategories() {
    var container = document.getElementById('quiz-categories');
    if (!container) return;

    var lang = getLang();
    var cats = {};

    // Group questions by category
    allQuestions.forEach(function (q) {
      if (!cats[q.category]) cats[q.category] = 0;
      cats[q.category]++;
    });

    var html = '';

    // "All" button
    var allLabel = lang === 'am' ? '\u1201\u1209\u121D' : 'All Questions';
    html += '<button class="category-btn" data-category="all">';
    html += '  <span class="category-icon" aria-hidden="true">\u2728</span>';
    html += '  <span>' + allLabel + '</span>';
    html += '  <span style="display:block;font-size:var(--text-caption);color:var(--color-text-500);margin-top:4px">' + allQuestions.length + ' ' + (lang === 'am' ? '\u1325\u12EB\u1244\u12CE\u127D' : 'questions') + '</span>';
    html += '</button>';

    Object.keys(cats).forEach(function (cat) {
      var meta = categoryMeta[cat] || { icon: '\u2753', en: cat, am: cat };
      var label = lang === 'am' ? meta.am : meta.en;
      html += '<button class="category-btn" data-category="' + cat + '">';
      html += '  <span class="category-icon" aria-hidden="true">' + meta.icon + '</span>';
      html += '  <span>' + label + '</span>';
      html += '  <span style="display:block;font-size:var(--text-caption);color:var(--color-text-500);margin-top:4px">' + cats[cat] + ' ' + (lang === 'am' ? '\u1325\u12EB\u1244\u12CE\u127D' : 'questions') + '</span>';
      html += '</button>';
    });

    container.innerHTML = html;

    container.querySelectorAll('.category-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = this.dataset.category;
        startQuiz(cat === 'all' ? null : cat);
      });
    });
  }

  // ========================================
  // START QUIZ
  // ========================================

  function startQuiz(category) {
    selectedCategory = category;
    currentIndex = 0;
    score = 0;
    answered = false;

    if (category) {
      currentQuestions = allQuestions.filter(function (q) { return q.category === category; });
    } else {
      currentQuestions = allQuestions.slice();
    }

    // Shuffle
    for (var i = currentQuestions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = currentQuestions[i];
      currentQuestions[i] = currentQuestions[j];
      currentQuestions[j] = temp;
    }

    showView('quiz-question-view');
    renderQuestion();
  }

  // ========================================
  // RENDER QUESTION
  // ========================================

  function renderQuestion() {
    var lang = getLang();
    var q = currentQuestions[currentIndex];
    var total = currentQuestions.length;

    // Progress
    var progressLabel = document.getElementById('progress-label');
    var progressCount = document.getElementById('progress-count');
    var progressFill = document.getElementById('progress-fill');

    if (progressLabel) {
      progressLabel.textContent = lang === 'am' ? '\u130D\u1235\u130B\u1234' : 'Progress';
    }
    if (progressCount) {
      progressCount.textContent = (currentIndex + 1) + '/' + total;
    }
    if (progressFill) {
      progressFill.style.width = ((currentIndex / total) * 100) + '%';
    }

    // Question number
    var qNum = document.getElementById('question-number');
    if (qNum) {
      if (lang === 'am') {
        qNum.textContent = '\u1325\u12EB\u1244 ' + (currentIndex + 1) + ' \u12A8 ' + total;
      } else {
        qNum.textContent = 'Question ' + (currentIndex + 1) + ' of ' + total;
      }
    }

    // Question text
    var qText = document.getElementById('question-text');
    if (qText) {
      qText.textContent = t(q, 'question');
    }

    // Options
    var optContainer = document.getElementById('answer-options');
    if (optContainer) {
      var options = tArr(q, 'options');
      var labels = ['A', 'B', 'C', 'D'];
      var html = '';

      options.forEach(function (opt, idx) {
        html += '<button class="answer-btn" data-index="' + idx + '">';
        html += '  <span class="option-label">' + labels[idx] + ')</span>';
        html += '  <span>' + opt + '</span>';
        html += '</button>';
      });

      optContainer.innerHTML = html;

      optContainer.querySelectorAll('.answer-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (answered) return;
          selectAnswer(parseInt(this.dataset.index));
        });
      });
    }

    // Clear feedback
    var fb = document.getElementById('quiz-feedback');
    if (fb) fb.innerHTML = '';

    // Hide next button
    var actions = document.getElementById('quiz-actions');
    if (actions) actions.innerHTML = '';

    answered = false;
  }

  // ========================================
  // SELECT ANSWER
  // ========================================

  function selectAnswer(index) {
    if (answered) return;
    answered = true;

    var lang = getLang();
    var q = currentQuestions[currentIndex];
    var correct = q.correct_answer;
    var isCorrect = index === correct;

    if (isCorrect) score++;

    // Mark buttons
    var buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(function (btn) {
      btn.disabled = true;
      var btnIdx = parseInt(btn.dataset.index);
      if (btnIdx === correct) {
        btn.classList.add('correct');
      }
      if (btnIdx === index && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Show feedback
    var fb = document.getElementById('quiz-feedback');
    if (fb) {
      var html = '';
      if (isCorrect) {
        html += '<div class="quiz-feedback correct" role="alert" aria-live="polite">';
        html += '<strong>' + (lang === 'am' ? '\u2705 \u1275\u12AD\u12AD\u120D! \u1308\u1260\u12DD!' : '\u2705 Correct! Well done.') + '</strong>';
      } else {
        var correctText = tArr(q, 'options')[correct];
        html += '<div class="quiz-feedback wrong" role="alert" aria-live="polite">';
        if (lang === 'am') {
          html += '<strong>\u274C \u1275\u12AD\u12AD\u120D \u12A0\u12ED\u12F0\u1208\u121D\u1362 \u1275\u12AD\u12AD\u1208\u129B\u12CD \u1218\u120D\u1235 ' + correctText + ' \u1290\u12CD\u1362</strong>';
        } else {
          html += '<strong>\u274C Not quite. The correct answer is ' + correctText + '.</strong>';
        }
      }
      html += '<span class="explanation">' + t(q, 'explanation') + '</span>';
      html += '</div>';
      fb.innerHTML = html;
    }

    // Show next / finish button
    var actions = document.getElementById('quiz-actions');
    if (actions) {
      var isLast = currentIndex >= currentQuestions.length - 1;
      var btnText;
      if (isLast) {
        btnText = lang === 'am' ? '\u12CD\u1324\u1275 \u12ED\u1218\u120D\u12A8\u1271' : 'See Results \u27A1';
      } else {
        btnText = lang === 'am' ? '\u1240\u1323\u12ED \u1325\u12EB\u1244 \u27A1' : 'Next Question \u27A1';
      }
      actions.innerHTML = '<button class="btn-primary" id="next-btn">' + btnText + '</button>';
      document.getElementById('next-btn').addEventListener('click', function () {
        if (isLast) {
          showResults();
        } else {
          currentIndex++;
          renderQuestion();
        }
      });
    }

    // Update progress fill
    var progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.width = (((currentIndex + 1) / currentQuestions.length) * 100) + '%';
    }
  }

  // ========================================
  // RESULTS
  // ========================================

  function showResults() {
    showView('quiz-score-view');

    var lang = getLang();
    var total = currentQuestions.length;
    var pct = Math.round((score / total) * 100);

    // Score ring
    var scoreNum = document.getElementById('score-number');
    if (scoreNum) scoreNum.textContent = score + '/' + total;

    var fillCircle = document.getElementById('score-fill');
    if (fillCircle) {
      var radius = 60;
      var circumference = 2 * Math.PI * radius;
      fillCircle.style.strokeDasharray = circumference;
      fillCircle.style.strokeDashoffset = circumference;

      var color;
      if (pct >= 90) color = 'var(--color-success)';
      else if (pct >= 70) color = 'var(--color-gold-500)';
      else color = 'var(--color-blue-500)';
      fillCircle.style.stroke = color;

      // Animate
      setTimeout(function () {
        var offset = circumference - (pct / 100) * circumference;
        fillCircle.style.strokeDashoffset = offset;
      }, 100);
    }

    // Message
    var msgEl = document.getElementById('score-message');
    var msgAmEl = document.getElementById('score-message-am');

    if (msgEl && msgAmEl) {
      if (pct >= 90) {
        msgEl.textContent = lang === 'en' ? 'Excellent! Blessed be your knowledge!' : '\u12A5\u1305\u130D \u1260\u1323\u121D! \u12A5\u12CD\u1240\u1275\u12CE \u12E8\u1270\u1263\u1228\u12A8 \u12ED\u1201\u1295!';
        msgAmEl.textContent = lang === 'en' ? '\u12A5\u1305\u130D \u1260\u1323\u121D! \u12A5\u12CD\u1240\u1275\u12CE \u12E8\u1270\u1263\u1228\u12A8 \u12ED\u1201\u1295!' : 'Excellent! Blessed be your knowledge!';
        msgEl.style.color = 'var(--color-success)';
      } else if (pct >= 70) {
        msgEl.textContent = lang === 'en' ? 'Well done! Keep learning!' : '\u1308\u1260\u12DD! \u1218\u121B\u122D\u12CE\u1295 \u12ED\u1240\u1325\u1209!';
        msgAmEl.textContent = lang === 'en' ? '\u1308\u1260\u12DD! \u1218\u121B\u122D\u12CE\u1295 \u12ED\u1240\u1325\u1209!' : 'Well done! Keep learning!';
        msgEl.style.color = 'var(--color-gold-500)';
      } else {
        msgEl.textContent = lang === 'en' ? 'Good effort! Try again to improve.' : 'ጥሩ ጥረት! ለማሻሻል እንደገና ሞክሩ።';
        msgAmEl.textContent = lang === 'en' ? 'ጥሩ ጥረት! ለማሻሻል እንደገና ሞክሩ።' : 'Good effort! Try again to improve.';
        msgEl.style.color = 'var(--color-blue-500)';
      }
    }

    // Actions
    var scoreActions = document.getElementById('score-actions');
    if (scoreActions) {
      var retryText = lang === 'am' ? '\u12A5\u1295\u12F0\u1308\u1293 \u121E\u12AD\u122D' : 'Try Again';
      var homeText = lang === 'am' ? '\u121D\u12F5\u1266\u127D\u1295 \u12ED\u121D\u1228\u1321' : 'Choose Category';
      scoreActions.innerHTML =
        '<button class="btn-primary" id="retry-btn">' + retryText + '</button>' +
        '<button class="btn-secondary" id="back-categories-btn">' + homeText + '</button>';

      document.getElementById('retry-btn').addEventListener('click', function () {
        startQuiz(selectedCategory);
      });
      document.getElementById('back-categories-btn').addEventListener('click', function () {
        showView('quiz-category-view');
        renderCategories();
      });
    }
  }

  // ========================================
  // VIEW MANAGEMENT
  // ========================================

  function showView(id) {
    document.querySelectorAll('.quiz-view').forEach(function (v) {
      v.classList.remove('active');
    });
    var el = document.getElementById(id);
    if (el) el.classList.add('active');
  }

  // ========================================
  // INIT
  // ========================================

  function initQuiz() {
    var container = document.getElementById('quiz-categories');
    if (!container) return; // not on quiz page

    fetch('content/quiz.json')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        allQuestions = data.questions;
        renderCategories();
        showView('quiz-category-view');
      });
  }

  document.addEventListener('DOMContentLoaded', initQuiz);

  window.addEventListener('languageChange', function () {
    var activeView = document.querySelector('.quiz-view.active');
    if (!activeView) return;

    if (activeView.id === 'quiz-category-view') {
      renderCategories();
    } else if (activeView.id === 'quiz-question-view' && !answered) {
      renderQuestion();
    }
    // If mid-answer or on results, don't disrupt
  });

})();
