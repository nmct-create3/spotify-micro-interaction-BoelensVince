document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.js-toggle');

  toggleButton.addEventListener('click', () => {
    const isPressed = toggleButton.getAttribute('aria-pressed') === 'true';
    toggleButton.setAttribute('aria-pressed', !isPressed);
  });
});
