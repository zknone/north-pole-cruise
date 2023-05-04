function switchClass(el, activator) {
  const elements = document.querySelectorAll(el);
  elements.forEach((element) => element.classList.toggle(activator));
}

function removeClass(el, activator) {
  const elements = document.querySelectorAll(el);
  elements.forEach((element) => element.classList.remove(activator));
}

function onOverlayOrLinkClick() {
  removeClass("[data-menu]", "is-activate");
}

function onClickMenu() {
  switchClass("[data-menu]", "is-activate");
  const overlay = document.querySelector('[data-menu="overlay"]');
  overlay.addEventListener("click", onOverlayOrLinkClick, { once: true });
  const linkItems = document.querySelectorAll("[data-item-link]");
  linkItems.forEach((el) =>
    el.addEventListener("click", onOverlayOrLinkClick, { once: true })
  );
  const logo = document.querySelector('[data-nav-logo]');
  logo.addEventListener("click", onOverlayOrLinkClick, { once: true });
}

export { onClickMenu };
