const bar = document.querySelector(".bar");
const progressBar = document.querySelector(".bar .bar_progress");

let startValue = 0,
  endValue = 100;

let timer = setInterval(() => {
  startValue++;
  bar.style.background = `conic-gradient(blueviolet ${startValue}%, #eee  1% ${endValue}%)`;
  progressBar.innerText = startValue + "%";
  startValue === endValue ? clearInterval(timer) : "";
}, 50);
