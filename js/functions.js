function printMessage(msg, result) {
  const div = document.createElement('div')
  div.innerHTML = msg

  switch (result) {
    case 'win':
      div.style.color = '#6ab04c'
      break
    case 'lose':
      div.style.color = '#eb4d4b'
      break
    case 'draw':
      div.style.color = '#f0932b'
      break
  }

  document.getElementById('messages').appendChild(div)
}

function clearMessages() {
  document.getElementById('messages').innerHTML = ''
}
