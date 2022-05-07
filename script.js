let order = []
let clickedOrder = []
let score = 0

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
//cria order aleatoria
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}
//acender a proxima cor
let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  })
}
//checka botoes click na mesma order do jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose()
      break
    }
  }

  if (clickedOrder.length == order.length) {
    alert('Pontuação: ${score}\nVocê acertou! Iniciando o próximo nivel!')
    nextLevel()
  }
}

//function for click do user
let click = color => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

// criar function que retorna a cor
let createColorElement = color => {
  if (color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if (color == 2) {
    return yellow
  } else if (color == 3) {
    return blue
  }
}

//function nevel
let nextLevel = () => {
  score++
  shuffleOrder()
}

//function game Over

let lose = () => {
  alert(
    'Pontuação: ${score}\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo'
  )
  order = []
  clickedOrder = []

  playGame()
}

//iniciar jogo
let playGame = () => {
  alert('Bem vindo ao Genesis! Iniciando novo jogo!')
  score = 0
  nextLevel()
}
//eventos clicks
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

// init
playGame()
