const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const page = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let intervalOn = false;
stopBtn.disabled = true;

const handleStart = event => {
  const interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    page.style.backgroundColor = randomColor;

    intervalOn = true;
    stopBtn.disabled = false;
    startBtn.disabled = true;

    const handleStop = event => {
      clearInterval(interval);
      intervalOn = false;
      stopBtn.disabled = true;
      startBtn.disabled = false;
    };
    stopBtn.addEventListener('click', handleStop);
  }, 1000);
};

startBtn.addEventListener('click', handleStart);
