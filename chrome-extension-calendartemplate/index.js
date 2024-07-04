let time;
let interval;

const startBtn = document.createElement("button");
const pauseBtn = document.createElement("button");
const stopBtn = document.createElement("button");
const res = document.createElement("div");
res.id = "res";

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

startBtn.innerHTML = "▶️";
pauseBtn.innerHTML = "⏸️";
stopBtn.innerHTML = "⏹️";
res.innerHTML = "00:00";

document.body.appendChild(startBtn);
document.body.appendChild(pauseBtn);
document.body.appendChild(stopBtn);
document.body.appendChild(res);

function start() {
  let value = time || 1;
  getRes().innerHTML = getString(value);
  interval = setInterval(() => {
    time = value++;
    getRes().innerHTML = getString(time);
  }, 1000);
}

function pause() {
  chrome.runtime.sendMessage({}, () => {});
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  time = undefined;
  getRes().innerHTML = "00:00";
}

function getRes() {
  return document.getElementById("res");
}

function getString(value) {
  const min = (value / 60).toFixed(0).padStart(2, "0");
  const seg = (value % 60).toFixed(0).padStart(2, "0");
  return `${min}:${seg}`;
}
