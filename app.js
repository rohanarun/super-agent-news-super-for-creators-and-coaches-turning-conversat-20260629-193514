// Super landing page interactions
(function () {
  if (typeof window === 'undefined') return;

  // GSAP animations (guarded)
  if (window.gsap) {
    gsap.from('.hero h1', { opacity: 0, y: 40, duration: 1.2, ease: 'power3.out' });
    gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 1, delay: 0.4, ease: 'power3.out' });
  }

  // Subtle hover parallax on media frames
  const frames = document.querySelectorAll('.media-frame');
  frames.forEach(frame => {
    frame.addEventListener('mousemove', e => {
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `translateY(-2px) rotateX(${y * 3}deg) rotateY(${x * 3}deg)`;
    });
    frame.addEventListener('mouseleave', () => {
      frame.style.transform = 'none';
    });
  });
})();