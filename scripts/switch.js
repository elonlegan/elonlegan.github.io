const btnSwitch = document.querySelector("#switch");
const groot = document.querySelector(":root");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  groot.classList.toggle("dark");
});
