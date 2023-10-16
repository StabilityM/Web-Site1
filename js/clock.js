const clock = document.querySelector("div#clock");
const day = document.querySelector("#clock span:first-child");
const time = document.querySelector("#clock span:last-child");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const Month = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDay() + 15).padStart(2, "0");
  let hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const miliSc = String(date.getMilliseconds()).padStart(2, "0");

  // let num1 = hours;
  let ampm = "";
  if (hours < 12) {
    ampm = "AM";
  } else if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  } else if (hours === 12) {
    ampm = "PM";
  }

  day.innerText = `${years}년 ${Month}월 ${days}일\n`;
  time.innerText = `${hours} : ${minutes} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);
