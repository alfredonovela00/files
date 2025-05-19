const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("loaded"); // Para carregar a primeira seção sem scroll
  observer.observe(section);
});