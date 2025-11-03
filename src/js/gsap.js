import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // =======================
  // === HERO SECTION ===
  // =======================
  gsap.from('.hero .title', {
    scrollTrigger: {
      trigger: '.hero .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.from('.hero .text', {
    scrollTrigger: {
      trigger: '.hero .text',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 30,
    delay: 0.2,
    ease: 'power2.out',
  });

  gsap.from('.hero .tag', {
    scrollTrigger: {
      trigger: '.hero .tag',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.4,
    ease: 'power2.out',
  });

  // =======================
  // === ABOUT AUTHOR ===
  // =======================
  gsap.from('.about-author .title', {
    scrollTrigger: {
      trigger: '.about-author .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.from('.about-author .name', {
    scrollTrigger: {
      trigger: '.about-author .name',
      start: 'top 90%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.2,
    ease: 'power2.out',
  });

  gsap.from('.about-author .desc', {
    scrollTrigger: {
      trigger: '.about-author .desc',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1.2,
    opacity: 0,
    y: 20,
    delay: 0.4,
    ease: 'power2.out',
  });

  gsap.from('.about-author .img-text', {
    scrollTrigger: {
      trigger: '.about-author .img-text',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1.2,
    opacity: 0,
    x: -30,
    ease: 'power2.out',
  });

  // =======================
  // === PROGRAM SECTION ===
  // =======================
  gsap.from('.program .title', {
    scrollTrigger: {
      trigger: '.program .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.utils.toArray('.program .list-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power1.out',
      delay: i * 0.05,
    });
  });

  gsap.utils.toArray('.program .program-icon').forEach(icon => {
    gsap.from(icon, {
      scrollTrigger: {
        trigger: icon,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.6,
      scale: 0.8,
      opacity: 0,
      ease: 'back.out(1.7)',
    });
  });

  // =======================
  // === PRACTICE SECTION ===
  // =======================
  gsap.from('.practice .title', {
    scrollTrigger: {
      trigger: '.practice .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.from('.practice .desc', {
    scrollTrigger: {
      trigger: '.practice .desc',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.3,
    ease: 'power2.out',
  });

  gsap.from('.practice .practice-img', {
    scrollTrigger: {
      trigger: '.practice .swiper',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1.2,
    opacity: 0,
    scale: 0.9,
    stagger: 0.05,
    ease: 'power2.out',
  });

  // =======================
  // === TARIFFS SECTION ===
  // =======================
  gsap.from('.tariffs .title', {
    scrollTrigger: {
      trigger: '.tariffs .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.utils.toArray('.tariffs .tariffs-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.9,
      opacity: 0,
      y: 30,
      ease: 'power2.out',
      delay: i * 0.1,
    });
  });

  // =======================
  // === BEFORE-AFTER SECTION ===
  // =======================
  gsap.from('.before-after .ba-title', {
    scrollTrigger: {
      trigger: '.before-after .ba-title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.utils.toArray('.before-after .ba-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.7,
      opacity: 0,
      y: 20,
      ease: 'power2.out',
      delay: i * 0.05,
    });
  });

  // =======================
  // === CASES SECTION ===
  // =======================
  gsap.from('.cases .title', {
    scrollTrigger: {
      trigger: '.cases .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.from('.cases .review-img', {
    scrollTrigger: {
      trigger: '.cases .swiper',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1.2,
    opacity: 0,
    scale: 0.9,
    stagger: 0.05,
    ease: 'power2.out',
  });

  // =======================
  // === FAQ SECTION ===
  // =======================
  gsap.from('.faq .title', {
    scrollTrigger: {
      trigger: '.faq .title',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
  });

  gsap.utils.toArray('.faq .questions-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      duration: 0.7,
      opacity: 0,
      y: 25,
      ease: 'power1.out',
      delay: i * 0.08,
    });
  });
  const refreshOnResizeOrDomChange = () => {
    let resizeTimeout;

    // Обновление при ресайзе окна
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300); // небольшая задержка для стабильности
    });

    // Обновление при изменении DOM (например, аккордеон, модалка, контент)
    const observer = new MutationObserver(() => {
      ScrollTrigger.refresh();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  };

  // Вызов после загрузки страницы
  document.addEventListener('DOMContentLoaded', refreshOnResizeOrDomChange);
});
