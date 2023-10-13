const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const Month = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDay() + 8).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const miliSc = String(date.getMilliseconds()).padStart(2, "0");

  clock.innerText = `${years}.${Month}.${days}\n${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 10);
