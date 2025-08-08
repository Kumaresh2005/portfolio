document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for contacting me! I'll reach out soon.");
    form.reset();
  });
});

