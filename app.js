let buttonOne = document.querySelector("#timer-button-one");
let buttonTwo = document.querySelector("#timer-button-two");
let buttonThree = document.querySelector("#timer-button-three");
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerText = document.getElementById("timer-text");
let timer;

let timeRefresh = function () {
  timer = setInterval(() => {
    seconds++;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    if (seconds > 60) {
      seconds = 0;
      minutes++;
    } else if (minutes > 60) {
      minutes = 0;
      hours++;
    }

    timerText.innerHTML = hours.toString().slice(-2) + " : " + minutes.toString().slice(-2) + " : " + seconds;
  }, 1000);
};

buttonOne.addEventListener("click", () => {
  clearInterval(timer);
  timeRefresh();
});

buttonTwo.addEventListener("click", () => {
  clearInterval(timer);
});

buttonThree.addEventListener("click", () => {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerText.innerHTML = "0" + hours.toString().slice(-2) + " : " + "0" + minutes.toString().slice(-2) + " : " + "0" + seconds;
});

function backgroundAnimation() {
  const count = 100;
  const body = document.querySelector("body");
  var i = 0;

  while (i < count) {
    const ball = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight * 2);

    const size = Math.random() * 4;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
    ball.style.width = 1 + size + "px";
    ball.style.height = 1 + size + "px";
    ball.className = "ball";
    ball.style.animationDelay = Math.random() * -20 + "s";
    ball.style.animationDuration = 20 + Math.random() + "s";

    body.appendChild(ball);
    i++;
  }
}

backgroundAnimation();
