function changeBackgroundColor() {
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
}

const linksSocialMedia = {
  github: 'myllac'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //pegar oq o fetch pegou e transformar em JSON
    .then(data => {
      adress.textContent = data.location

      username.textContent = data.name //textContent é substiruir oq está no userName por data.name
      //eu sei que é data.name pq no API do git hub tem essa propriedade

      userImage.src = data.avatar_url

      followers.textContent = data.followers + ' Seguidores'

      following.textContent = data.following + ' Seguindo'

      repository.textContent = data.public_repos + ' Repositórios'

      company.textContent = data.company
    })
  //o fetch vai na url da API e pegar o que o API responder
  //Promese (then()) é um recurso do JS para poder pegar respostas de alguma coisa
  //Arrow function => é uma forma contraida da function
}

changeBackgroundColor()

getGitHubProfileInfos()
