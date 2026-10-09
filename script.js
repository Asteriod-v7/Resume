document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pageSections = document.querySelectorAll(".page-section");
  const printBtn = document.getElementById("print-btn");

  // Section switcher
  function navigateTo(targetId) {
    pageSections.forEach((section) => {
      section.classList.remove("active");
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.page === targetId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle sidebar navigation clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.dataset.page;
      if (targetPage) {
        navigateTo(targetPage);
      }
    });
  });

  // Handle print / save to PDF button
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
});