const deck = generateDeck()
function generateDeck() {
    let deck = []
    let suits = ['&hearts;', '&clubs;', '&diams;', '&spades;']
    for (let suit of suits) {
        for (let i = 2; i <= 14; i++) {
            let val = `${i}`
            if (i === 11) {
                val = 'J'
            }
            if (i === 12) {
                val = 'D'
            }
            if (i === 13) {
                val = 'K'
            }
            if (i === 14) {
                val = 'A'
            }
            let color = suit === '&hearts;' || suit === '&diams;' ? 'red' : 'black'
            let card = {
                suit: suit,
                rank: i,
                value: val,
                color: color
            }
            deck.push(card)
        }
    }
    return deck
}
function updateUI() {
    const rand = Math.floor(Math.random() * deck.length)
    const card = deck.splice(rand, 1)[0]
    const el = `
    <article class="${card.color}">
        <header>
            <p class="suit">${card.suit}</p>
            <p>${card.value}</p>
        </header>
        <h1 class="suit">${card.suit}</h1>
        <footer>
            <p class="suit">${card.suit}</p>
            <p>${card.value}</p>
        </footer>
    </article>`
    let target = document.querySelector('main')
    target.innerHTML = ''
    target.insertAdjacentHTML('beforeend', el)
}
updateUI()
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    if (deck.length) {
        updateUI()
        document.querySelector('.counter').innerHTML = `${deck.length}`
    } else {
          alert('What was the first card?')
    }
})
