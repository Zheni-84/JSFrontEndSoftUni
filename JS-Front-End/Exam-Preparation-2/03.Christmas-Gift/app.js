const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsButton = document.getElementById('load-presents');
const addPresentsButton = document.getElementById('add-present');
const editPresentsButton = document.getElementById('edit-present');
const giftListElement = document.getElementById('gift-list');

const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');
const formElement = document.getElementById('form');

loadPresentsButton.addEventListener("click", loadPresents);

addPresentsButton.addEventListener("click", addPresent);

editPresentsButton.addEventListener("click", editGift);

giftListElement.addEventListener("click", deleteGift);

async function loadPresents() {
    const response = await fetch(baseUrl);
    const presentsResult = await response.json();

    giftListElement.innerHTML = '';
    const giftListFragment = document.createDocumentFragment();

    Object.values(presentsResult)
        .forEach(present => giftListFragment.appendChild(createGiftSockElt(present)));

    giftListElement.appendChild(giftListFragment);
}

function addPresent() {
    const present = getInputData();
    //POST request
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(present)
    })
        .then(res => {
            if (!res.ok) {
                return
            }
            // clear input
            clearInputs()

            //fetch all presents
            return loadPresents();
        });
}

function createGiftSockElt(present) {
    const changeButtonElt = document.createElement('button');
    changeButtonElt.classList.add('change-btn');
    changeButtonElt.textContent = 'Change';
    changeButtonElt.addEventListener("click",(e)=> changeGift(e, present));

    const deleteButtonElt = document.createElement('button');
    deleteButtonElt.classList.add('delete-btn');
    deleteButtonElt.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElt);
    buttonsDivElement.appendChild(deleteButtonElt);

    const giftPElt = document.createElement('p');
    giftPElt.textContent = present.gift;
    const forPElt = document.createElement('p');
    forPElt.textContent = present.for;
    const pricePElt = document.createElement('p');
    pricePElt.textContent = present.price;

    const contentDivElt = document.createElement('div');
    contentDivElt.classList.add('content');
    contentDivElt.appendChild(giftPElt);
    contentDivElt.appendChild(forPElt);
    contentDivElt.appendChild(pricePElt);

    const giftSockDivElt = document.createElement('div');
    giftSockDivElt.classList.add('gift-sock');
    giftSockDivElt.appendChild(contentDivElt);
    giftSockDivElt.appendChild(buttonsDivElement);

    // Add custom atributos to be used in event listeners OR during event delegation
     giftSockDivElt.setAttribute('data-id', present._id);
    // giftSockDivElt.setAttribute('data-gift', present.gift);
    // giftSockDivElt.setAttribute('data-for', present.giftFor);
    // giftSockDivElt.setAttribute('data-price', present.price);

    return giftSockDivElt;
}

function changeGift(e, present) {
    // console.log(e.currentTarget);

    //remove present from list
    //const giftELement = e.curr.closest('.gift-sock');
    //console.log(giftELement);
    const giftElement = e.currentTarget.parentElement.parentElement; // don't do this, unless for "Soft-Uni Judge"
    giftElement.remove();

    //populate input fields
    giftInputElement.value = present.gift;
    forInputElement.value = present.for;
    priceInputElement.value = present.price;

    // add is as attribute
    formElement.setAttribute('data-id', present._id);

    //activate edit button
    editPresentsButton.removeAttribute('disabled');

    //deactivate create button
    addPresentsButton.setAttribute('disabled', 'disabled');
}

function editGift() {
    // Get data from inputs
    const present = getInputData();

    // Get gift id
    const giftId = formElement.getAttribute('data-id');
    //remove data-id attribute
    formElement.removeAttribute('data-id');
    //Send input request
    fetch(`${baseUrl}/${giftId}`,{
        method: 'PUT',
        body: JSON.stringify({...present, _id: giftId}),
        //body: JSON.stringify(Object.assign(present, {_id: giftId})),
    })
        .then(res => {
            if (!res.ok){
                return; // or log some error
            }
            // Fetch presents
            loadPresents();
            // Deactivate edit button
            editPresentsButton.setAttribute('disabled', 'disabled');
            // Activate add button
            addPresentsButton.removeAttribute('disabled');
            // Clear input
            clearInputs();
        })
}

// This is event delegation
function deleteGift(e) {
    if (e.target.tagName !== 'BUTTON' || !e.target.classList.contains('delete-btn')){
        return;
    }
    // Get gift element
    const giftElt = e.target.parentElement.parentElement;
    // Get id
    const giftId = giftElt.getAttribute('data-id');
    // Delete request
    fetch(`${baseUrl}/${giftId}`, {
        method: 'DELETE'
    })
        .then(res =>{
            if (!res.ok){
                return;
            }
            // Remove from Girt list
            giftElt.remove();
        })
}

function getInputData() {
    // get input data
    const gift = giftInputElement.value;
    const price = priceInputElement.value;
    return {gift, for: forInputElement.value, price};
}

function clearInputs() {
    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}
