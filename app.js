const circleProgress = document.querySelector(".circle-progress");
const numberofBreaths = document.querySelector("#input");
const startBtn = document.querySelector(".start");
const instruction = document.querySelector(".instructions");
const breaths = document.querySelector(".breaths-text");
const audio = document.querySelector("#myAudio");

let breathsleft = 5;

numberofBreaths.addEventListener("change", () => {
  breathsleft = numberofBreaths.value;
  breaths.innerHTML = breathsleft;
  console.log(breathsleft);
});

// adding circle feature

const growingcircle = function () {
  circleProgress.classList.add("circle-grow");
  setTimeout(function () {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

//start breathing

startBtn.addEventListener("click", function () {
  startBtn.classList.add("button-inactive");
  instruction.innerText = "Get Relax for breathing";
  setTimeout(() => {
    instruction.innerText = "Get Ready";
    setTimeout(() => {
      breathingapp();
      growingcircle();
      breathtext();
      audio.play();
    }, 2000);
  }, 2000);
});

// breathing instructions

const breathtext = function () {
  breathsleft--;
  breaths.innerHTML = breathsleft;
  instruction.innerText = "Breath In";
  setTimeout(function () {
    instruction.innerText = "Hold";
    setTimeout(function () {
      instruction.innerText = "Breath Out";
    }, 4000);
  }, 4000);
};

//add functionality

const breathingapp = function () {
  const animation = setInterval(() => {
    if (breathsleft === 0) {
      clearInterval(animation);
      startBtn.classList.remove("button-inactive");
      breathsleft = numberofBreaths.value;
      breaths.innerText = breathsleft;
      audio.pause();
      return;
    } else {
      growingcircle();
      breathtext();
    }
  }, 12000);
};
