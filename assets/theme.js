const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

/* Update UI text/icon */
function updateToggleUI() {
  if (document.body.classList.contains("light")) {
    btn.textContent = "☀️ Light";
  } else {
    btn.textContent = "🌙 Dark";
  }
}

/* Apply saved mode */
if (saved === "light") {
  document.body.classList.add("light");
}
updateToggleUI();

/* Toggle mode */
btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const newMode = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", newMode);

  updateToggleUI();
});
