let timerDucation = 25 * 60
let currentTime = timerDucation

const timeDisplay = document.querySelector('.time-display')
timeDisplay.textContent = '25 : 00'
const startBtn = document.querySelector('.start-btn')

let isRunning = false
let timerIntervel = null


startBtn.addEventListener('click', (e) => {
  countDownTimer()
})

// running counter
function countDownTimer() {
  // stop running unwanted clicks 
  if (isRunning) return 
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