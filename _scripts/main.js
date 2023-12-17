const header = document.querySelector(".site-header");
const headerOffset = header.offsetTop + header.offsetHeight;

const addClassIf = (element, condition, className) => {
  if (condition) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};

const stickyHeader = () => {
  addClassIf(header, window.scrollY > headerOffset, "sticky");
};

window.addEventListener("scroll", stickyHeader);

document.documentElement.style.scrollBehavior = "smooth";

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.hash);
    if (targetSection) {
      targetSection.scrollIntoView();
    }
  });
});

const pageLinks = Array.from(document.querySelectorAll(".site-nav__link"));
const sections = pageLinks.map((link) => document.querySelector(link.hash));

const scrollSpy = () => {
  pageLinks.forEach((link) => link.classList.remove("active"));

  sections.some((section, i) => {
    const { top, bottom } = section.getBoundingClientRect();

    if (top <= window.innerHeight * 0.5 && bottom >= window.innerHeight * 0.5) {
      pageLinks[i].classList.add("active");
      return true;
    }
  });
};

window.addEventListener("scroll", scrollSpy);

const mobileMenuContainer = document.querySelector(".site-nav");
const mobileMenuToggle = document.querySelector(".site-nav__menu-button");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("open");
});

const formGroups = Array.from(document.querySelectorAll(".form-group"));

formGroups.forEach((formGroup) => {
  const input = formGroup.querySelector("input, textarea");
  const validationMessage = input.title;
  formGroup.classList.add("off");

  const onFocus = () => formGroup.classList.remove("off");
  const onBlur = () => !input.value && formGroup.classList.add("off");
  const onInvalid = () => input.setCustomValidity(validationMessage);
  const onInput = () => input.setCustomValidity("");

  input.addEventListener("focus", onFocus);
  input.addEventListener("blur", onBlur);
  input.addEventListener("invalid", onInvalid);
  input.addEventListener("input", onInput);
});
