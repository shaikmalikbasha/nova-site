// Initialize Materialize Components
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Sidenav (Mobile Menu)
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  // Theme Toggle Functionality
  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");
  const toggleButtonMobile = document.getElementById("theme-toggle-mobile");

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
    }
  }

  // Check for saved theme preference on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setTheme(true);
  } else {
    // Ensure initial light theme setting is applied (for icon)
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
