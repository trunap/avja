const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

if (saved === "light") {
  document.body.classList.add("light");
  btn.textContent = "Light";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  btn.textContent = isLight ? "Light" : "Dark";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
