let team1Name = 'Team 1'
let team2Name = 'Team 2'
let team1Score = 0
let team2Score = 0
let timerStart = 20
let quarter = 1
let inning = 1
let interval
let inningsInQuarters = 4

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
    team2Name: document.querySelector('.team-2-name').textContent
  }
  console.log({ gameState })
  window.localStorage.setItem(sessionName, JSON.stringify(gameState))
}

document.querySelector('.save-game-btn').addEventListener('click', saveGame)
