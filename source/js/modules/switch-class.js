function switchClass(el, activator) {
  const element = document.querySelector(el);
  element.classList.toggle(activator);
}

function onClickMenu() {
  switchClass('[data-menu]', 'is-activate');
}

export {onClickMenu};
