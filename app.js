const secondHand = document.querySelector(".second-hand"),
  minuteHand = document.querySelector(".min-hand"),
  hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(),
    seconds = now.getSeconds(),
    secondDegrees = (seconds / 60) * 360 + 90,
    minutes = now.getMinutes(),
    minuteDegrees = (minutes / 60) * 360 + 90,
    hour = now.getHours(),
    hourDegrees = (hour / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
