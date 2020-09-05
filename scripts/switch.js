const btnSwitch = document.querySelector("#switch");
const groot = document.querySelector(":root");

btnSwitch.addEventListener("click", () => {
  btnSwitch.classList.toggle("active");
  groot.classList.toggle("dark");
});
