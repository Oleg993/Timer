const input = document.getElementById('input');
const outputBlock = document.querySelector('.time');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');

let interval;
const setIntervalTime = 1000;
outputBlock.innerHTML = 0;

btnStart.addEventListener('click', () => {
  if (input.value < 0) {
    input.value = null;
    outputBlock.innerHTML = null;
  }
  outputBlock.innerHTML = input.value;
  clearInterval(interval);
  interval = setInterval(substructTime, setIntervalTime * 1);
});

btnStop.addEventListener('click', () => {
  clearInterval(interval);
});

btnReset.addEventListener('click', () => {
  input.value = null;
  outputBlock.innerHTML = null;
});

const substructTime = () => {
  if (outputBlock.innerHTML > 0) {
    outputBlock.innerHTML--;
    input.value--;
    if (input.value < 0 || outputBlock.innerHTML === 0) {
      input.value = null;
      outputBlock.innerHTML = 0;
    }
  }
};
