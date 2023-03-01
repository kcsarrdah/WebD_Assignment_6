const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let intervalId;
let startTime = null;
let elapsedTime = 0;

const updateTimer = () => {
  const ms = elapsedTime % 1000;
  const sec = Math.floor(elapsedTime / 1000) % 60;
  const min = Math.floor(elapsedTime / 1000 / 60) % 60;
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

  timer.innerHTML = formattedTime;
};

const startTimer = async () => {
  if (startTime !== null) {
    return;
  }

  startTime = new Date().getTime() - elapsedTime;

  intervalId = setInterval(() => {
    elapsedTime = new Date().getTime() - startTime;
    updateTimer();
  }, 10);
};

const stopTimer = () => {
  clearInterval(intervalId);
  startTime = null;
};

const resetTimer = () => {
  clearInterval(intervalId);
  startTime = null;
  elapsedTime = 0;
  updateTimer();
};

startBtn.addEventListener('click', () => {
  startTimer();
});

stopBtn.addEventListener('click', () => {
  stopTimer();
});

resetBtn.addEventListener('click', () => {
  resetTimer();
});
