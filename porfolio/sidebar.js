// Toggle Sidebar
document.querySelector(".sidebar h2").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".main-content").classList.toggle("active");
});

// Page Scroll Animation
document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".page-section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            section.classList.add("visible");
        }
    });
});
