let startingMinutes = 25;
const stopButton = document.getElementById('stop-button');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const fiveMinButton = document.getElementById('five-min');
const twentyfiveMinButton = document.getElementById('twentyfive-min');
const countdownInfo = document.getElementById('countdown-info');
let myVar;
let time = startingMinutes * 60; //in seconds
let initialTime = time;

const countdownElement = document.getElementById('countdown-content');

function updateCountdown(){
  if(time<=0){
      clearInterval(time=0);
  }
  
  const minutes = Math.floor(time / 60);
  let seconds = time % 60 ;
  seconds = seconds < 10 ? '0'+ seconds : seconds;
  countdownElement.innerHTML = `${minutes}:${seconds}`;
  document.title = `${minutes}:${seconds}` + " - Pomodoro Timer";

  time--;
}

function updateCounterElement(){
  const minutes = Math.floor(time / 60);
  let seconds = time % 60 ;
  seconds = seconds < 10 ? '0'+ seconds : seconds;
  countdownElement.innerHTML = `${minutes}:${seconds}`;
}

function myStartFunction(){
  myVar = setInterval(updateCountdown,1000);  
  startButton.style.opacity = 0.5;
  startButton.style.cursor = "none";  
}

function myStopFunction() {
  clearInterval(myVar);
  startButton.style.opacity = 1;
  startButton.style.cursor = "pointer";
}

function myResetFunction(){
  myStopFunction();
  time = initialTime;
  updateCounterElement();
}

function updateTimer(inputTime){
  myStopFunction();
  updateTime(inputTime);
  updateCounterElement();
}

function updateTime(inputTime){
  time = inputTime * 60;
  initialTime = time;
}

startButton.addEventListener('click',myStartFunction);

stopButton.addEventListener('click',myStopFunction);

resetButton.addEventListener('click',myResetFunction);

fiveMinButton.addEventListener('click',function(){
  updateTimer(5);
  countdownInfo.innerText = "Time for a break";
});

twentyfiveMinButton.addEventListener('click',function(){
  updateTimer(25);
  countdownInfo.innerText = "Time to work";
});