const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

function updateButton() {
  if (document.body.classList.contains("light")) {
    btn.innerHTML = "☀️ Light";
  } else {
    btn.innerHTML = "🌙 Dark";
  }
}

if (saved === "light") {
  document.body.classList.add("light");
}

updateButton();

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const mode = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", mode);

  updateButton();
});
