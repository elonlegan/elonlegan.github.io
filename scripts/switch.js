const btnSwitch = document.querySelector("#switch");
const groot = document.querySelector(":root");

btnSwitch.addEventListener("click", () => {
  groot.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (groot.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  groot.classList.add("dark");
  btnSwitch.classList.add("active");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  groot.classList.add("dark");
  btnSwitch.classList.add("active");
}
