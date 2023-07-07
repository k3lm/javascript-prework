const buttonRock = document.getElementById('button-rock')
const buttonPaper = document.getElementById('button-paper')
const buttonScissors = document.getElementById('button-scissors')

let playerScore = 0
let computerScore = 0

function getMoveName(argMoveId) {
  switch (argMoveId) {
    case 1:
      return 'rock'
    case 2:
      return 'paper'
    case 3:
      return 'scissors'
    default:
      printMessage(
        'Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "rock".'
      )
      return 'rock'
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  if (
    (argPlayerMove === 'paper' && argComputerMove === 'rock') ||
    (argPlayerMove === 'rock' && argComputerMove === 'scissors') ||
    (argPlayerMove === 'scissors' && argComputerMove === 'paper')
  ) {
    printMessage('You won :)', 'win')
    playerScore++
  } else if (argPlayerMove === argComputerMove) {
    printMessage("It's a draw :|", 'draw')
  } else {
    printMessage('You lost :(', 'lose')
    computerScore++
  }
  printMessage('I played ' + argComputerMove + ', you played ' + argPlayerMove)
  document.getElementById('scoreboard').innerHTML =
    playerScore + ':' + computerScore
}

function buttonClicked(argButtonName) {
  clearMessages()
  const playerMove = argButtonName
  const randomNumber = Math.floor(Math.random() * 3 + 1)
  const computerMove = getMoveName(randomNumber)
  displayResult(playerMove, computerMove)
}

buttonRock.addEventListener('click', function () {
  buttonClicked('rock')
})
buttonPaper.addEventListener('click', function () {
  buttonClicked('paper')
})
buttonScissors.addEventListener('click', function () {
  buttonClicked('scissors')
})
