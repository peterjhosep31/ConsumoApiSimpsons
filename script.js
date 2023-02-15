const generateCart = document.getElementById('generateCharater');
generateCart.addEventListener('click', requestFetch);

const containerCart = document.getElementById('container-card');

function generateCartCharater(data) {
    console.log(data);
    containerCart.innerHTML = '';
    const image = document.createElement('img');
    image.classList.add('img-character');
    image.src = data[0].image;
    image.alt = data[0].character;
    const characterName = document.createElement('h2')
    characterName.classList.add('character-name');
    characterName.innerText = data[0].character;
    const characterQuote = document.createElement('p');
    characterQuote.classList.add('quote-character');
    characterQuote.innerText = data[0].quote;

    containerCart.appendChild(image)
    containerCart.appendChild(characterName)
    containerCart.appendChild(characterQuote)

}

function requestFetch() {
    const method = { method: 'GET' };
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    fetch(url, method)
        .then(res => res.json())
        .then(res => generateCartCharater(res))
        .catch(err => console.error(err));
}