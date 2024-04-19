const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadGamesButton = document.getElementById('load-games');
const addGamesButton = document.getElementById('add-game');
const editGamesButton = document.getElementById('edit-game');
const gamesListElement = document.getElementById('games-list');

const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
const formElement = document.getElementById('form');

loadGamesButton.addEventListener("click", loadGames);

addGamesButton.addEventListener("click", addGame);

editGamesButton.addEventListener("click", editGame);

gamesListElement.addEventListener("click", deleteGame);

async function loadGames() {
    const response = await fetch(baseUrl);
    const gamesResult = await response.json();

    gamesListElement.innerHTML = '';
    const gameListFragment = document.createDocumentFragment();

    Object.values(gamesResult)
        .forEach(game => gameListFragment.appendChild(createGameElt(game)));

    gamesListElement.appendChild(gameListFragment);
}

function createGameElt(game) {
    const changeButtonElt = document.createElement('button');
    changeButtonElt.classList.add('change-btn');
    changeButtonElt.textContent = 'Change';
    changeButtonElt.addEventListener("click", (e) => changeGame(e, game));

    const deleteButtonElt = document.createElement('button');
    deleteButtonElt.classList.add('delete-btn');
    deleteButtonElt.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElt);
    buttonsDivElement.appendChild(deleteButtonElt);

    const namePElt = document.createElement('p');
    namePElt.textContent = game.name;
    const playersPElt = document.createElement('p');
    playersPElt.textContent = game.players;
    const typePElt = document.createElement('p');
    typePElt.textContent = game.type;

    const contentDivElt = document.createElement('div');
    contentDivElt.classList.add('content');
    contentDivElt.appendChild(namePElt);
    contentDivElt.appendChild(playersPElt);
    contentDivElt.appendChild(typePElt);

    const gameDivElt = document.createElement('div');
    gameDivElt.classList.add('board-game');
    gameDivElt.appendChild(contentDivElt);
    gameDivElt.appendChild(buttonsDivElement);

    // Add custom attributes to be used in event listeners OR during event delegation
    gameDivElt.setAttribute('data-id', game._id);

    return gameDivElt;
}

function addGame() {
    const game = getInputData();
    //POST request
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(game)
    })
        .then(res => {
            if (!res.ok) {
                return
            }
            // clear input
            clearInputs()

            //fetch all games
            return loadGames();
        });
}

function changeGame(e, game) {
    const gameElement = e.currentTarget.parentElement.parentElement;
    gameElement.remove();

    //populate input fields
    nameInputElement.value = game.name;
    typeInputElement.value = game.type;
    playersInputElement.value = game.players;

    // add id as attribute
    formElement.setAttribute('data-id', game._id);

    //activate edit button
    editGamesButton.removeAttribute('disabled');

    //deactivate create button
    addGamesButton.setAttribute('disabled', 'disabled');
}

function editGame() {
    // Get data from inputs
    const game = getInputData();

    // Get game id
    const gameId = formElement.getAttribute('data-id');

    //remove data-id attribute
    formElement.removeAttribute('data-id');

    // Create PUT request
    const request = new Request(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        body: JSON.stringify({...game, _id: gameId}),
    });
    //Send input request
    fetch(request)
        .then(res => {
            if (!res.ok) {
                return; // or log some error
            }
            // Fetch games
            loadGames();
            // Deactivate edit button
            editGamesButton.setAttribute('disabled', 'disabled');
            // Activate add button
            addGamesButton.removeAttribute('disabled');
            // Clear input
            clearInputs();
        })
}

function deleteGame(e) {
    if (!e.target.classList.contains('delete-btn')) {
        return;
    }
    // Get game element
    const gameElt = e.target.parentElement.parentElement;
    // Get id
    const gameId = gameElt.getAttribute('data-id');
    // Delete request
    fetch(`${baseUrl}/${gameId}`, {method: 'DELETE'})
        .then(res => {
            if (!res.ok) {
                return;
            }
            // Remove from Game list
            gameElt.remove();
        })
}

function getInputData() {
    // get input data
    const name = nameInputElement.value;
    const type = typeInputElement.value;
    const players = playersInputElement.value;
    return {name, type, players};
}

function clearInputs() {
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}