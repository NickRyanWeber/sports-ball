const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

// My Stuff

// Update Team One Name
const teamOneNameUpdater = () => {
  let teamOneName = document.querySelector('.team-1-input').value
  console.log(teamOneName)
  document.querySelector('.team-1-name').textContent = teamOneName
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneNameUpdater)

// Update Team Two name
const teamTwoNameUpdater = () => {
  let teamTwoName = document.querySelector('.team-2-input').value
  console.log(teamTwoName)
  document.querySelector('.team-2-name').textContent = teamTwoName
}

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoNameUpdater)

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

  if (gameInning == 4) {
    gameInning = 1
    gameQuarter = ++gameQuarter
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
