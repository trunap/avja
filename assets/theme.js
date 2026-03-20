const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

/* Update UI icon/text */
function updateUI() {
  if (document.body.classList.contains("light")) {
    btn.textContent = "☀️ Light";
  } else {
    btn.textContent = "🌙 Dark";
  }
}

/* Load saved mode (if any) */
if (saved === "light") {
  document.body.classList.add("light");
}
updateUI();

/* Toggle theme */
btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
  updateUI();
});
