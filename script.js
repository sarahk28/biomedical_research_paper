// Collapsible abstract section
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(section => {
  const header = section.querySelector('h2');
  header.addEventListener('click', () => {
    section.classList.toggle('active');
  });
});