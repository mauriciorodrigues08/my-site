// Smooth scrolling para links do menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animação de entrada dos elementos
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Executar animação no scroll
window.addEventListener("scroll", animateOnScroll);

// Executar animação no carregamento da página
window.addEventListener("load", animateOnScroll);

// Header com efeito de transparência
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(26, 26, 46, 0.98)";
  } else {
    header.style.background = "rgba(26, 26, 46, 0.95)";
  }
});

// Efeito parallax no hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero && heroContent) {
    const scrolled = window.pageYOffset;
    let parallax = scrolled * 0.5;

    const bottomMargin = 100;
    const heroHeight = hero.offsetHeight;
    const contentHeight = heroContent.offsetHeight;
    const maxTranslateY = (heroHeight - contentHeight) / 2 - bottomMargin;

    const finalTranslateY = Math.max(0, Math.min(parallax, maxTranslateY));

    heroContent.style.transform = `translateY(${finalTranslateY}px)`;
  }
});
