let team1Name = 'Team 1'
let team2Name = 'Team 2'
let team1Score = 0
let team2Score = 0
let timerStart = 20
let quarter = 1
let inning = 1

// Update Team One Name
const teamOneNameUpdater = () => {
  team1Name = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = team1Name
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateName('1'))

// Update Team Two name
const teamTwoNameUpdater = () => {
  team2Name = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = team2Name
}

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateName(2))

// Test name function
const updateName = x => {
  let cssSelector = '.team-' + x + '-input'
  let cssWriter = '.team-' + x + '-name'
  team2Name = document.querySelector(cssSelector).value
  document.querySelector(cssWriter).textContent = team2Name
}

// Team One Score Add
const addScoreTeamOne = () => {
  let teamOneScore = document.querySelector('.team-1-score').innerHTML
  teamOneScore++
  document.querySelector('.team-1-score').textContent = teamOneScore
}

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addScoreTeamOne)

// Team One Score Subtract
const subtractScoreTeamOne = () => {
  let teamOneScore = document.querySelector('.team-1-score').innerHTML
  teamOneScore--
  document.querySelector('.team-1-score').textContent = teamOneScore
}

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractScoreTeamOne)

// Team Two Score Add
const addScoreTeamTwo = () => {
  let teamTwoScore = document.querySelector('.team-2-score').innerHTML
  teamTwoScore++
  document.querySelector('.team-2-score').textContent = teamTwoScore
}

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addScoreTeamTwo)

// Team Two Score Subtract
const subtractScoreTeamTwo = () => {
  let teamTwoScore = document.querySelector('.team-2-score').innerHTML
  teamTwoScore--
  document.querySelector('.team-2-score').textContent = teamTwoScore
}

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractScoreTeamTwo)

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

// Button to start an inning
//  - counts down the inning timer to 0 then increments the inning
//
// Button to pause an inning
//  - When paused turns into a "resume" button
//
// Button to immediately start a new inning
//  - Ignores the timer and starts a new inning
//  - Re-sets timer to start time
//
// When a new inning is reached, re-set timer

let interval

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
