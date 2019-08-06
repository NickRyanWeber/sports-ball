let team1Name = 'Team 1'
let team2Name = 'Team 2'
let team1Score = 0
let team2Score = 0
let timerStart = 20
let quarter = 1
let inning = 1
let interval

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

// Below here hasn't been refactored yet. Starting with the code above

// Quarter/Inning Counter

const gameTimeIncrement = () => {
  let gameQuarter = document.querySelector('.quarter > p').textContent
  let gameInning = document.querySelector('.inning > p').textContent
  // eslint-disable-next-line eqeqeq
  if (gameInning == 4) {
    gameInning = 1
    gameQuarter++
    document.querySelector('.quarter > p').textContent = gameQuarter
    document.querySelector('.inning > p').textContent = gameInning
  } else {
    gameInning++
    document.querySelector('.inning > p').textContent = gameInning
  }
}

document
  .querySelector('.new-inning')
  .addEventListener('click', gameTimeIncrement)

// Reset Game
const gameReset = () => {
  document.querySelector('.quarter > p').textContent = 1
  document.querySelector('.inning > p').textContent = 1
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
}

document.querySelector('.reset-game').addEventListener('click', gameReset)

// Countdown Timer
const countDown = () => {
  let startTime = document.querySelector('.timer > p').textContent
  interval = setInterval(() => {
    startTime--
    document.querySelector('.timer > p').textContent = startTime
    if (startTime === 0) {
      clearInterval(interval)
    }
  }, 1000)
}

document.querySelector('.count-down-start').addEventListener('click', countDown)

// Local Storage

const localStorageTest2 = () => {
  const gameState = {
    quarter: document.querySelector('.quarter > p').textContent,
    inning: document.querySelector('.inning > p').textContent,
    team1Score: document.querySelector('.team-1-score').textContent,
    team2Score: document.querySelector('.team-2-score').textContent,
    team1Name: document.querySelector('.team-1-name').textContent,
    team2Name: document.querySelector('.team-2-name').textContent
  }
  console.log({ gameState })
  window.localStorage.setItem('session', JSON.stringify(gameState))
}

document
  .querySelector('.local-storage-trigger')
  .addEventListener('click', localStorageTest2)
