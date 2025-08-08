document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("form-message");
  
    if (name && email && message) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      document.getElementById("contact-form").reset();
    } else {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    }
  });
  function showContent(sectionId) {
    // Hide all content boxes
    document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
  
    // Show selected content
    document.getElementById(sectionId).classList.add('active');
  
    // Update sidebar active state
    document.querySelectorAll('.sidebar ul li').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
  document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".progress-circle");
  
    circles.forEach((circle) => {
      let percentage = circle.getAttribute("data-percentage");
      let canvas = circle.querySelector("canvas");
      let ctx = canvas.getContext("2d");
  
      canvas.width = 100;
      canvas.height = 100;
  
      let startAngle = -Math.PI / 2;
      let endAngle = (percentage / 100) * (Math.PI * 2) + startAngle;
  
      let radius = 40;
      let lineWidth = 6;
  
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
  
      // Background Circle
      ctx.strokeStyle = "#ddd";
      ctx.beginPath();
      ctx.arc(50, 50, radius, 0, Math.PI * 2);
      ctx.stroke();
  
      // Animated Progress
      let currentAngle = startAngle;
      let step = (endAngle - startAngle) / 50;
  
      function animate() {
        if (currentAngle < endAngle) {
          requestAnimationFrame(animate);
        }
  
        ctx.strokeStyle = "#007bff";
        ctx.beginPath();
        ctx.arc(50, 50, radius, startAngle, currentAngle);
        ctx.stroke();
  
        currentAngle += step;
      }
  
      animate();
    });
  });
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
  }
        