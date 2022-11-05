// funcão e (argumento da função)
function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>
  `
}

// funcão e (argumento da função)
function createCard(date, day, games) {
  return `
 <div class="card">
    <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
 </div>
`
}

// documento e (o documento a procurar)
document.querySelector('#app').innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="logo">
</header>

<main id="cards">
  ${createCard('24/11', 'quinta',
  createGame('switzerland','07:00','camaron') + createGame('uruguay','10:00','southkorea') + createGame('portugal','13:00','ghana') + createGame('brazil','16:00','serbia'))
  }

  ${createCard('28/11', 'segunda',
  createGame('camaron','07:00','serbia') + createGame('southkorea','10:00','ghana') + createGame('switzerland','13:00','brazil') + createGame('portugal','16:00','uruguay'))
  }

  ${createCard('02/12', 'sexta',
 createGame('ghana','12:00','uruguay') + createGame('southkorea','12:00','portugal') + createGame('serbia','16:00','switzerland') + createGame('brazil','16:00','camaron'))
  }
</main>
`