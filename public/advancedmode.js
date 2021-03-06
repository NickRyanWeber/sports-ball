let team1Name = 'Team 1'
let team2Name = 'Team 2'
let team1Score = 0
let team2Score = 0
let timerStart = 20
let quarter = 1
let inning = 1
let inningsInQuarters = 4
let interval

const setupGame = (
  setupTeam1Name,
  setupTeam2Name,
  setupTeam1Score,
  setupTeam2Score,
  setupQuarter,
  setupInning,
  setupInningsInQuarters,
  setupTimerStart
) => {
  team1Name = setupTeam1Name
  team2Name = setupTeam2Name
  team1Score = setupTeam1Score
  team2Score = setupTeam2Score
  timerStart = setupTimerStart
  quarter = setupQuarter
  inning = setupInning
  inningsInQuarters = setupInningsInQuarters
  document.querySelector('.quarter-counter').textContent = setupQuarter
  document.querySelector('.inning-counter').textContent = setupInning
  document.querySelector('.team-1-score').textContent = setupTeam1Score
  document.querySelector('.team-2-score').textContent = setupTeam2Score
  document.querySelector('.team-1-name').textContent = setupTeam1Name
  document.querySelector('.team-2-name').textContent = setupTeam2Name
  document.querySelector('.timer-counter').textContent = setupTimerStart
}

document.addEventListener('DOMContentLoaded', () => {
  setupGame(
    team1Name,
    team2Name,
    team1Score,
    team2Score,
    quarter,
    inning,
    inningsInQuarters,
    timerStart
  )
})

// Global Update Name Function
const updateName = team => {
  let cssSelector = '.team-' + team + '-input'
  let cssWriter = '.team-' + team + '-name'
  team2Name = document.querySelector(cssSelector).value
  document.querySelector(cssWriter).textContent = team2Name
}

document.querySelector('.update-team-1-name').addEventListener('click', () => {
  updateName('1')
})

document.querySelector('.update-team-2-name').addEventListener('click', () => {
  updateName('2')
})

// Global Score Update Function
const updateScore = (team, points) => {
  let point = parseFloat(points)
  let teamSelector = '.team-' + team + '-score'
  let score = parseFloat(document.querySelector(teamSelector).innerHTML)
  score = score + point
  document.querySelector(teamSelector).textContent = score
}

// Dry this up?
document.querySelector('.team-1.score-1').addEventListener('click', () => {
  updateScore('1', 1)
})
document
  .querySelector('.team-1.score-minus-1')
  .addEventListener('click', () => {
    updateScore('1', -1)
  })
document.querySelector('.team-2.score-1').addEventListener('click', () => {
  updateScore('2', 1)
})
document
  .querySelector('.team-2.score-minus-1')
  .addEventListener('click', () => {
    updateScore('2', -1)
  })

const newInning = () => {
  clearInterval(interval)
  document.querySelector('.timer-counter').textContent = timerStart
  if (inning == inningsInQuarters) {
    inning = 1
    quarter++
    document.querySelector('.quarter-counter').textContent = quarter
    document.querySelector('.inning-counter').textContent = inning
  } else {
    inning++
    document.querySelector('.inning-counter').textContent = inning
  }
}

document.querySelector('.new-inning').addEventListener('click', newInning)

// Reset Game
const gameReset = () => {
  quarter = 1
  inning = 1
  team1Score = 0
  team2Score = 0
  document.querySelector('.quarter-counter').textContent = quarter
  document.querySelector('.inning-counter').textContent = inning
  document.querySelector('.team-1-score').textContent = team1Score
  document.querySelector('.team-2-score').textContent = team2Score
  clearInterval(interval)
  document.querySelector('.timer-counter').textContent = timerStart
}

document.querySelector('.reset-game').addEventListener('click', gameReset)

// Countdown Timer
const countDown = () => {
  let startTime = document.querySelector('.timer-counter').textContent
  interval = setInterval(() => {
    startTime--
    document.querySelector('.timer-counter').textContent = startTime
    if (startTime === 0) {
      clearInterval(interval)
      newInning()
    }
  }, 1000)
}

document
  .querySelector('.inning-controller')
  .addEventListener('click', countDown)

// Local Storage
const saveGame = () => {
  let sessionName = document.querySelector('.save-game-input').value
  const gameState = {
    quarter: document.querySelector('.quarter-counter').textContent,
    inning: document.querySelector('.inning-counter').textContent,
    team1Score: document.querySelector('.team-1-score').textContent,
    team2Score: document.querySelector('.team-2-score').textContent,
    team1Name: document.querySelector('.team-1-name').textContent,
    team2Name: document.querySelector('.team-2-name').textContent,
    inningsPerQuarter: inningsInQuarters,
    startTimer: timerStart
  }
  window.localStorage.setItem(sessionName, JSON.stringify(gameState))
}

document.querySelector('.save-game-btn').addEventListener('click', saveGame)

const loadGame = () => {
  let savedGameName = document.querySelector('.load-game-input').value
  let savedGameData = window.localStorage.getItem(savedGameName)
  let gameData = JSON.parse(savedGameData)
  setupGame(
    gameData.team1Name,
    gameData.team2Name,
    gameData.team1Score,
    gameData.team2Score,
    gameData.quarter,
    gameData.inning,
    gameData.inningsInQuarters,
    gameData.startTimer
  )
}

document.querySelector('.load-game-btn').addEventListener('click', loadGame)

// Modal

const modalSwitch = () => {
  const modal = document.querySelector('#modal')

  if (modal.classList.contains('modal-hide')) {
    modal.classList.remove('modal-hide')
    modal.classList.add('modal-show')
  } else {
    modal.classList.remove('modal-show')
    modal.classList.add('modal-hide')
  }
}

document.querySelector('.modal-open').addEventListener('click', modalSwitch)
document.querySelector('.modal-close').addEventListener('click', modalSwitch)
