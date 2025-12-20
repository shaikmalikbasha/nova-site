function loadTags() {
  let icons_url =
    "https://shaikmalikbasha583.github.io/itz_me_mr_developer/icons.html";

  fetch(icons_url)
    .then((response) => response.text())
    .then((data) => {
      console.log("Icons loaded successfully");
      document.getElementById("icons-list").innerHTML = data;
      document.getElementById("icons-list-repeat").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading icons:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Sidenav
  M.Sidenav.init(document.querySelectorAll(".sidenav"));
  M.Parallax.init(document.querySelectorAll(".parallax"));
  loadTags();

  // const body = document.body;
  // const toggleButton = document.getElementById("theme-toggle");

  // // Apply theme
  // function setTheme(isDark) {
  //   if (isDark) {
  //     body.classList.add("dark-theme");
  //     localStorage.setItem("theme", "dark");

  //     // Update icon
  //     toggleButton.querySelector("i").textContent = "brightness_7";
  //   } else {
  //     body.classList.remove("dark-theme");
  //     localStorage.setItem("theme", "light");

  //     // Update icon
  //     toggleButton.querySelector("i").textContent = "brightness_4";
  //   }
  // }

  // // Load saved theme
  // const savedTheme = localStorage.getItem("theme");
  // setTheme(savedTheme === "dark");

  // // Toggle button click
  // toggleButton.addEventListener("click", () => {
  //   const isDark = !body.classList.contains("dark-theme");
  //   setTheme(isDark);
  // });
});
