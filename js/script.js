var argButtonName,
  buttonRock = document.getElementById('button-rock'),
  buttonPaper = document.getElementById('button-paper'),
  buttonScissors = document.getElementById('button-scissors')

let playerScore = 0
let computerScore = 0

function getMoveName(argMoveId) {
  switch (argMoveId) {
    case 1:
      return 'kamień'
    case 2:
      return 'papier'
    case 3:
      return 'nożyce'
    default:
      printMessage(
        'Nie znam ruchu o id ' +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      )
      return 'kamień'
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  if (
    (argPlayerMove === 'papier' && argComputerMove === 'kamień') ||
    (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') ||
    (argPlayerMove === 'nożyce' && argComputerMove === 'papier')
  ) {
    printMessage('Wygrywasz :)', 'win')
    playerScore++
  } else if (argPlayerMove === argComputerMove) {
    printMessage('Remis :|', 'draw')
  } else {
    printMessage('Przegrałeś :(', 'lose')
    computerScore++
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove)
  document.getElementById('scoreboard').innerHTML =
    playerScore + ':' + computerScore
}

function buttonClicked(argButtonName) {
  clearMessages()
  var argMoveId,
    argPlayerMove,
    argComputerMove,
    computerMove,
    playerMove,
    randomNumber,
    playerInput

  playerMove = argButtonName
  randomNumber = Math.floor(Math.random() * 3 + 1)
  computerMove = getMoveName(randomNumber)
  displayResult(playerMove, computerMove)
}

buttonRock.addEventListener('click', function () {
  buttonClicked('kamień')
})
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier')
})
buttonScissors.addEventListener('click', function () {
  buttonClicked('nożyce')
})
