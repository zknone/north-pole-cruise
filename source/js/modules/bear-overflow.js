const resizeObject = new ResizeObserver((elements) => {
  function bearOverflow() {
    if (height >= 180) {
      const heroSection = document.querySelector('[data-hero-section]');
      const additionalPadding = 120 + height;
      heroSection.style.paddingTop = `${additionalPadding}px`;
    }
  }
  const rect = elements[0].contentRect;
  const height = rect.height;

  bearOverflow();
});

export {resizeObject};
