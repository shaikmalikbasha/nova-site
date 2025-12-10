document.addEventListener("DOMContentLoaded", function () {
  // Initialize Sidenav
  M.Sidenav.init(document.querySelectorAll(".sidenav"));
  M.Parallax.init(document.querySelectorAll(".parallax"));

  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");

  // Apply theme
  function setTheme(isDark) {
    if (isDark) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");

      // Update icon
      toggleButton.querySelector("i").textContent = "brightness_7";
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");

      // Update icon
      toggleButton.querySelector("i").textContent = "brightness_4";
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "dark");

  // Toggle button click
  toggleButton.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark-theme");
    setTheme(isDark);
  });
});
