const words = ["Web Developer", "Programmer", "Designer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  const currentWord = words[index];
  
  typingElement.textContent = currentWord.substring(0, charIndex);
  
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    charIndex += isDeleting ? -1 : 1;
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
