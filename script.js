// Make sure all sections are hidden on page load
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section");

  // Ensure all sections start hidden
  sections.forEach(sec => sec.classList.add("hidden"));

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove("active"));
      
      // Add active class to clicked button
      btn.classList.add("active");
      
      // Hide all sections
      sections.forEach(sec => sec.classList.add("hidden"));
      
      // Show target section
      document.getElementById(btn.dataset.target).classList.remove("hidden");
    });
  });
});