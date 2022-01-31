let colors = [
  'black',
  'pink',
  'orange',
  'red',
  'green',
  'yellow',
  'brown',
  'violet',
  'purple',
  'white',
  'blue',
  'lightblue',
  'aqua',
  'crimson',
  'Darkblue',
  'DarkSalmon'
]

let button = document.getElementById('getBackground')

button.addEventListener('click', function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  let bgCard = document.getElementById('bgCard')

  bgCard.style.background = randomColor
})
