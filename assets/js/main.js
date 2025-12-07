document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Sidenav (Mobile Menu)
  var sidenav_elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav_elems);

  // 2. Initialize Materialize Select Dropdowns (Crucial for Contact Form)
  var select_elems = document.querySelectorAll("select");
  M.FormSelect.init(select_elems);

  // 3. Theme Toggle Functionality
  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");
  const toggleButtonMobile = document.getElementById("theme-toggle-mobile");
  const servicesSection = document.querySelector(".services-section");
  const trainingSection = document.querySelector(".training-section");

  // Function to set the theme
  function setTheme(isDark) {
    if (isDark) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      // Update icons
      document
        .querySelectorAll("#theme-toggle i, #theme-toggle-mobile i")
        .forEach((icon) => {
          icon.textContent = "brightness_7";
        });
      if (toggleButtonMobile) {
        toggleButtonMobile.lastChild.textContent = " Light Theme";
      }
      // Add dark theme background class to sections
      if (servicesSection) servicesSection.classList.add("steps-section-bg");
      if (trainingSection) trainingSection.classList.add("steps-section-bg");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
      // Update icons
      document
        .querySelectorAll("#theme-toggle i, #theme-toggle-mobile i")
        .forEach((icon) => {
          icon.textContent = "brightness_4";
        });
      if (toggleButtonMobile) {
        toggleButtonMobile.lastChild.textContent = " Dark Theme";
      }
      // Add light theme background class to sections (using the shared class)
      if (servicesSection) servicesSection.classList.add("steps-section-bg");
      if (trainingSection) trainingSection.classList.add("steps-section-bg");
    }
  }

  // Check for saved theme preference on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setTheme(true);
  } else {
    // Ensure initial light theme setting is applied (for icon and backgrounds)
    setTheme(false);
  }

  // Event listener for the desktop toggle button
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isDark = !body.classList.contains("dark-theme");
      setTheme(isDark);
    });
  }

  // Event listener for the mobile toggle button
  if (toggleButtonMobile) {
    toggleButtonMobile.addEventListener("click", () => {
      const isDark = !body.classList.contains("dark-theme");
      setTheme(isDark);
      // Close sidenav after toggling
      M.Sidenav.getInstance(document.querySelector(".sidenav")).close();
    });
  }
});
