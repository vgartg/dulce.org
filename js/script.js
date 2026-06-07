(function () {
  'use strict';

  var currentLang = 'ru';

  var T = {
    ru: {
      'nav.about': 'Обо мне',
      'nav.skills': 'Навыки',
      'nav.contact': 'Контакт',
      'hero.name': 'Иван<br>Горбанёв',
      'initials': 'ИГ',
      'hero.badge': 'Открыт к предложениям',
      'hero.sub': 'Помогаю бизнесу расти — через честные переговоры, системную работу с клиентами и желание побеждать.',
      'hero.cta': 'Написать мне',
      'hero.ghost': 'Узнать больше',
      'stat.age': 'лет',
      'stat.city.val': 'Таганрог',
      'stat.city.label': '→ везде',
      'about.label': 'Обо мне',
      'about.title': 'Начинающий<br>менеджер по продажам',
      'card.location': 'Таганрог, Ростовская обл.',
      'card.role': 'Менеджер по продажам · Начало карьеры',
      'card.grad': 'Молодой специалист · 2025',
      'about.p1': 'Мне 20 лет, я из Таганрога. Выбрал продажи осознанно — меня привлекает живое общение с людьми, умение слышать и убеждать. В этой сфере результат зависит напрямую от тебя, и это мотивирует.',
      'about.p2': 'Сейчас ищу первую позицию в B2B или B2C продажах, где можно расти и учиться у сильной команды. Готов к холодным звонкам, работе с возражениями, CRM.',
      'about.p3': 'Умею слушать собеседника, быстро нахожу контакт, не боюсь отказов — воспринимаю их как точку роста.',
      'quality.1': 'Коммуникабельность',
      'quality.2': 'Ориентация на результат',
      'quality.3': 'Быстрое обучение',
      'quality.4': 'Устойчивость к стрессу',
      'tag.cold': 'Холодные звонки',
      'tag.obj': 'Работа с возражениями',
      'tag.crm': 'CRM системы',
      'tag.nego': 'Переговоры',
      'tag.needs': 'Выявление потребностей',
      'tag.funnel': 'Воронка продаж',
      'tag.email': 'Email-рассылки',
      'tag.team': 'Работа в команде',
      'tag.time': 'Тайм-менеджмент',
      'tag.res': 'Устойчивость к отказам',
      'tag.listen': 'Активное слушание',
      'tag.analytics': 'Аналитика',
      'tag.service': 'Клиентский сервис',
      'about.btn': 'Написать напрямую',
      'skills.label': 'Что я уже умею',
      'skills.title': 'Фундамент карьеры',
      'skills.desc': 'Опыта работы ещё нет — но есть база, на которой строится всё остальное.',
      'c1.title': 'Переговоры<br>и убеждение',
      'c1.desc': 'Умею вести диалог, не давить — слушать и предлагать решения. Практиковал в учебных кейсах и повседневном общении.',
      'c1.footer': 'Ключевой навык продаж',
      'c2.title': 'Системный<br>подход',
      'c2.desc': 'Понимаю структуру воронки продаж, изучаю CRM-системы (AmoCRM, Bitrix24). Слежу за метриками — конверсия, средний чек, LTV.',
      'c2.footer': 'Аналитика и цифры',
      'c3.title': 'Работа<br>с клиентами',
      'c3.desc': 'Быстро устанавливаю контакт, хорошо слышу потребности. Не боюсь холодного контакта — нахожу подход к разным людям.',
      'c3.footer': 'Клиентоориентированность',
      'banner.label': 'Подход к работе',
      'banner.quote': '«Продажи — это не давить, а помогать. Нахожу боль клиента и предлагаю решение. Честно, без манипуляций.»',
      'contact.label': 'Контакт',
      'contact.title': 'Давайте<br>познакомимся',
      'contact.desc': 'Ищу возможности в продажах. Открыт к предложениям — напишите мне, и я отвечу быстро.',
      'vk.label': 'ВКонтакте',
      'callout.h3': 'Готов выйти на связь',
      'callout.p': 'Рассматриваю позиции менеджера по продажам — B2B, B2C, телемаркетинг, клиентский сервис. Обучаем, мотивирован, готов стартовать.',
      'callout.t1': 'Full-time',
      'callout.t2': 'Таганрог / Удалённо',
      'callout.t3': 'Entry level',
      'footer.copy': '© 2026 Иван Горбанёв · Таганрог'
    },
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'hero.name': 'Ivan<br>Gorbanev',
      'initials': 'IG',
      'hero.badge': 'Open to opportunities',
      'hero.sub': 'I help businesses grow — through honest negotiations, systematic client work, and a winning mindset.',
      'hero.cta': 'Contact me',
      'hero.ghost': 'Learn more',
      'stat.age': 'y.o.',
      'stat.city.val': 'Taganrog',
      'stat.city.label': '→ anywhere',
      'about.label': 'About me',
      'about.title': 'Entry-Level<br>Sales Manager',
      'card.location': 'Taganrog, Rostov region',
      'card.role': 'Sales Manager · Entry level',
      'card.grad': 'Young professional · 2025',
      'about.p1': 'I\'m 20, from Taganrog. I chose sales deliberately — I\'m drawn to live communication, the ability to listen and persuade. In this field, results depend directly on you, and that motivates me.',
      'about.p2': 'I\'m looking for my first position in B2B or B2C sales, where I can grow and learn from a strong team. Ready for cold calls, objection handling, and CRM work.',
      'about.p3': 'I know how to listen, build rapport quickly, and I\'m not afraid of rejection — I see it as a growth point.',
      'quality.1': 'Communication',
      'quality.2': 'Results-driven',
      'quality.3': 'Fast learner',
      'quality.4': 'Stress resilience',
      'tag.cold': 'Cold calling',
      'tag.obj': 'Objection handling',
      'tag.crm': 'CRM systems',
      'tag.nego': 'Negotiations',
      'tag.needs': 'Needs identification',
      'tag.funnel': 'Sales funnel',
      'tag.email': 'Email campaigns',
      'tag.team': 'Teamwork',
      'tag.time': 'Time management',
      'tag.res': 'Rejection resilience',
      'tag.listen': 'Active listening',
      'tag.analytics': 'Analytics',
      'tag.service': 'Customer service',
      'about.btn': 'Message directly',
      'skills.label': 'What I can do',
      'skills.title': 'Career Foundation',
      'skills.desc': 'No work experience yet — but there\'s a solid base to build everything on.',
      'c1.title': 'Negotiation<br>& Persuasion',
      'c1.desc': 'I know how to lead a dialogue without pressure — listen and offer solutions. Practiced in case studies and everyday communication.',
      'c1.footer': 'Core sales skill',
      'c2.title': 'Systematic<br>Approach',
      'c2.desc': 'I understand sales funnel structure, studying CRM systems (AmoCRM, Bitrix24). Tracking metrics — conversion, average check, LTV.',
      'c2.footer': 'Analytics & numbers',
      'c3.title': 'Client<br>Relations',
      'c3.desc': 'I build rapport fast and listen to needs carefully. Not afraid of cold contact — I find an approach to different people.',
      'c3.footer': 'Client-first mindset',
      'banner.label': 'Work approach',
      'banner.quote': '"Sales is not about pushing, it\'s about helping. I find the client\'s pain and offer a solution. Honest, no manipulation."',
      'contact.label': 'Contact',
      'contact.title': 'Let\'s<br>Connect',
      'contact.desc': 'Looking for opportunities in sales. Open to offers — write to me and I\'ll respond quickly.',
      'vk.label': 'VKontakte',
      'callout.h3': 'Ready to connect',
      'callout.p': 'Considering sales manager positions — B2B, B2C, telemarketing, customer service. A quick learner, motivated, ready to start.',
      'callout.t1': 'Full-time',
      'callout.t2': 'Taganrog / Remote',
      'callout.t3': 'Entry level',
      'footer.copy': '© 2026 Ivan Gorbanev · Taganrog'
    }
  };

  var phrasesRu = ['Менеджер по продажам', 'Выстраиваю отношения с клиентами', 'Нацелен на результат', 'Таганрог → везде'];
  var phrasesEn = ['Sales Manager', 'Building client relationships', 'Results-oriented', 'Taganrog → anywhere'];

  function applyLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) {
        el.textContent = T[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (T[lang][key] !== undefined) {
        el.innerHTML = T[lang][key];
      }
    });
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-l') === lang);
    });
    if (lang === 'en') {
      document.documentElement.lang = 'en';
      currentPhrases = phrasesEn;
    } else {
      document.documentElement.lang = 'ru';
      currentPhrases = phrasesRu;
    }
    restartTyping();
  }

  document.getElementById('lang-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-opt');
    if (!btn) return;
    var l = btn.getAttribute('data-l');
    if (l && l !== currentLang) applyLang(l);
  });

  var currentPhrases = phrasesRu;
  var phraseIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var isPaused = false;
  var typingTimer = null;
  var typingEl = document.getElementById('typing-text');

  function restartTyping() {
    clearTimeout(typingTimer);
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    isPaused = false;
    typingEl.textContent = '';
    typingTimer = setTimeout(typeLoop, 200);
  }

  function typeLoop() {
    if (isPaused) return;
    var current = currentPhrases[phraseIndex];
    if (!isDeleting) {
      typingEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isPaused = true;
        typingTimer = setTimeout(function () {
          isPaused = false;
          isDeleting = true;
          typeLoop();
        }, 2400);
        return;
      }
      typingTimer = setTimeout(typeLoop, 62);
    } else {
      typingEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % currentPhrases.length;
        typingTimer = setTimeout(typeLoop, 380);
        return;
      }
      typingTimer = setTimeout(typeLoop, 32);
    }
  }

  setTimeout(typeLoop, 900);

  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  var cursorCircle = document.getElementById('cursor-circle');
  var cursorDot = document.getElementById('cursor-dot');

  if (cursorCircle && cursorDot && window.innerWidth > 768) {
    var cx = 0, cy = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
      cursorDot.style.left = tx + 'px';
      cursorDot.style.top = ty + 'px';
    });

    (function animateCursor() {
      cx += (tx - cx) * 0.11;
      cy += (ty - cy) * 0.11;
      cursorCircle.style.left = cx + 'px';
      cursorCircle.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    })();

    document.querySelectorAll('a, button, .card, .tag, .quality').forEach(function (el) {
      el.addEventListener('mouseenter', function () { document.body.classList.add('cursor-hover'); });
      el.addEventListener('mouseleave', function () { document.body.classList.remove('cursor-hover'); });
    });
  }

  var fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.from(el.parentElement.querySelectorAll('.fade-up:not(.visible)'));
        var idx = siblings.indexOf(el);
        setTimeout(function () { el.classList.add('visible'); }, Math.max(0, idx) * 75);
        obs.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { obs.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.hero-badge',          { opacity: 0, y: 16, duration: 0.7, delay: 0.1 })
      .from('.hero-brandmark',      { opacity: 0, y: 12, duration: 0.6 }, '-=0.4')
      .from('.hero-name',           { opacity: 0, y: 50, duration: 1.0 }, '-=0.45')
      .from('.hero-typing-wrapper', { opacity: 0, y: 20, duration: 0.7 }, '-=0.55')
      .from('.hero-sub',            { opacity: 0, y: 18, duration: 0.7 }, '-=0.5')
      .from('.hero-actions',        { opacity: 0, y: 16, duration: 0.6 }, '-=0.45')
      .from('.hero-stats',          { opacity: 0, y: 12, duration: 0.6 }, '-=0.4')
      .from('.hero-scroll-hint',    { opacity: 0, duration: 0.8 },        '-=0.2');


    gsap.utils.toArray('.card').forEach(function (card, i) {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
        opacity: 0,
        y: 36,
        duration: 0.65,
        delay: i * 0.12,
        ease: 'power3.out',
        onStart: function () {
          var delay = 550 + i * 180;
          setTimeout(function () { card.dataset.loaded = 'true'; }, delay);
        }
      });
    });

    gsap.from('.skills-banner', {
      scrollTrigger: { trigger: '.skills-banner', start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, y: 24, duration: 0.7, ease: 'power3.out'
    });

    gsap.from('.callout-inner', {
      scrollTrigger: { trigger: '.callout-inner', start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, x: 30, duration: 0.7, ease: 'power3.out'
    });
  } else {
    document.querySelectorAll('.card').forEach(function (card, i) {
      setTimeout(function () { card.dataset.loaded = 'true'; }, 300 + i * 150);
    });
  }

})();
