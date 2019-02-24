let hour = document.querySelector(".hour");
let minut = document.querySelector(".minut");
let second = document.querySelector(".second");
let timer = document.querySelector("p");

function setDate() {
  let time = new Date();
  let timer1 = time.toLocaleTimeString();

  timer.textContent = timer1;

  let hourNow = time.getHours();

  let hourDegrees = (hourNow / 60) * 360 + 235;

  hour.style.transform = `rotate(${hourDegrees}deg)`;
  let minutNow = time.getMinutes();

  let minuteDegrees = (minutNow / 60) * 360 + 90;
  minut.style.transform = `rotate(${minuteDegrees}deg)`;

  let secondNow = time.getSeconds();
  let secondDegrees = (secondNow / 60) * 360 + 90;

  second.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);
