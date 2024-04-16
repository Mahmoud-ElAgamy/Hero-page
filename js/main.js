const skillsSection = document.getElementById("skills");
const progressSpans = document.querySelectorAll(".prog span");

onscroll = () => {
  if (scrollY >= skillsSection.offsetTop - 100) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

let countDownDate = new Date().setSeconds(new Date().getSeconds() + 10000);
let timerInterval;

const daysElem = document.querySelector(".days"),
  hoursElem = document.querySelector(".hours"),
  minutesElem = document.querySelector(".minutes"),
  secondsElem = document.querySelector(".seconds");

const startCountdown = () => {
  const now = new Date().getTime();
  const countDown = new Date(countDownDate).getTime();
  const difference = (countDown - now) / 1000;

  if (difference < 1) endCountDown();

  let days = Math.trunc(difference / (60 * 60 * 24));
  let hours = Math.trunc((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.trunc((difference % (60 * 60)) / 60);
  let seconds = Math.trunc(difference % 60);

  daysElem.textContent = days;
  hoursElem.textContent = hours;
  minutesElem.textContent = minutes;
  secondsElem.textContent = seconds;
};

const endCountDown = () => {
  clearInterval(timerInterval);
};

startCountdown();
timerInterval = setInterval(() => {
  startCountdown();
}, 1000);
