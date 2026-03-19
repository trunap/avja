const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

function updateToggleUI() {
  if (document.body.classList.contains("light")) {
    btn.textContent = "☀️ Light";
  } else {
    btn.textContent = "🌙 Dark";
  }
}

if (saved === "light") document.body.classList.add("light");
updateToggleUI();

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
  updateToggleUI();
});
``
