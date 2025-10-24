let timerDucation = 25 * 60
let currentTime = timerDucation

const timeDisplay = document.querySelector('.time-display')
timeDisplay.textContent = '25 : 00'
const allButtons = document.querySelectorAll('button')

let isRunning = false
let timerIntervel = null

const startBtn = document.querySelector('.start-btn')
const pauseBtn = document.querySelector('.pause-btn')
const resetBtn = document.querySelector('.reset-btn')

startBtn.addEventListener('click', countDownTimer)
pauseBtn.addEventListener('click', pausingRunningTime)
resetBtn.addEventListener('click', resetTimer)

// stop the counter and reset the timer
function resetTimer() {
  clearInterval(timerIntervel)
  isRunning = false
  currentTime = timerDucation
  updateTimer(currentTime)  
}

// pause the timer and updating
function pausingRunningTime() {
  console.log('pause button clicked')
  clearInterval(timerIntervel)
  updateTimer(currentTime)
  isRunning = false
}

// running counter
function countDownTimer() {
  // stop running unwanted clicks 
  console.log(isRunning)
  if (isRunning) {
    return
  }
  console.log('button clicked or not')
  isRunning = true
  timerIntervel = setInterval(() => {
    if (currentTime > 0) {
      currentTime--
      updateTimer(currentTime)
    } else {
      clearInterval(timerIntervel)
      isRunning = false
      currentTime = timerDucation
      tracker = false
    }
  }, 600)
}

// converting the time seconds and minutes
function convertTime(second) {
  let mins = Math.floor(second / 60)
  let secs = second % 60
  console.log(secs)
  console.log(`${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`)
  return `${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`
}

// update every time in display
function updateTimer(time) {
  timeDisplay.textContent = convertTime(time)
}