// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.classList.remove("fa-moon");
    toggle.classList.add("fa-sun");
  } else {
    toggle.classList.remove("fa-sun");
    toggle.classList.add("fa-moon");
  }
});

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
// Typing Animation
const typingText = document.getElementById("typing");

const words = ["Frontend Developer", "React Learner", "Web Designer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
