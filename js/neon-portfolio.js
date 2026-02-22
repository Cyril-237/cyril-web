/**
 * Neon Portfolio - Interactions & Animations
 */

(function() {
   'use strict';

   // Year in footer
   if (document.getElementById('year')) {
      document.getElementById('year').textContent = new Date().getFullYear();
   }

   // Nav scroll behavior
   const nav = document.getElementById('nav');
   if (nav) {
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
         const scroll = window.scrollY;
         nav.classList.toggle('scrolled', scroll > 80);

         // Highlight active section
         const sections = document.querySelectorAll('section[id], header[id]');
         let current = '';
         sections.forEach(s => {
            const top = s.offsetTop;
            const height = s.offsetHeight;
            if (scroll >= top - 150) current = s.getAttribute('id');
         });
         document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + current);
         });

         lastScroll = scroll;
      });
   }

   // Mobile nav toggle
   const navToggle = document.getElementById('navToggle');
   if (navToggle) {
      navToggle.addEventListener('click', () => {
         nav.classList.toggle('open');
         navToggle.classList.toggle('active');
         document.body.classList.toggle('nav-open', nav.classList.contains('open'));
      });
   }

   // Smooth scroll for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
         const href = this.getAttribute('href');
         if (href === '#') return;
         e.preventDefault();
         const target = document.querySelector(href);
         if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            nav.classList.remove('open');
            if (navToggle) navToggle.classList.remove('active');
         }
      });
   });

   // Reveal on scroll
   const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('visible');
         }
      });
   }, observerOptions);

   document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

   // Portfolio modals
   const modalOverlay = document.getElementById('modalOverlay');
   const modalSlot = document.getElementById('modalSlot');
   const modalClose = document.getElementById('modalClose');

   function openModal(content) {
      if (!modalOverlay || !modalSlot) return;
      modalSlot.innerHTML = '';
      if (content) modalSlot.appendChild(content.cloneNode(true));
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
   }

   function closeModal() {
      if (modalOverlay) modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
   }

   document.querySelectorAll('.portfolio-card').forEach(card => {
      const modal = card.querySelector('.portfolio-modal');
      if (!modal) return;

      card.addEventListener('click', (e) => {
         if (e.target.closest('a') || e.target.closest('button')) return;
         openModal(modal.querySelector('.modal-content'));
      });
   });

   if (modalClose) modalClose.addEventListener('click', closeModal);
   if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
   });

   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
   });
})();
