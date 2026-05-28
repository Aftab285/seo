const header = document.querySelector(".site-header");
const stickyCall = document.querySelector(".sticky-call");
const revealItems = document.querySelectorAll(".reveal");

const updateChrome = () => {
  const isScrolled = window.scrollY > 18;
  header.classList.toggle("is-scrolled", isScrolled);
  stickyCall.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.65);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));
window.addEventListener("scroll", updateChrome, { passive: true });
updateChrome();
