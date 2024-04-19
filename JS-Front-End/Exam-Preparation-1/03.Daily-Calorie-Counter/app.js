const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadBtnElt = document.getElementById('load-meals');
const addBtnElt = document.getElementById('add-meal');
const editBtnElt = document.getElementById('edit-meal');
const mealListElt = document.getElementById('list');
const foodInputElt = document.getElementById('food');
const timeInputElt = document.getElementById('time');
const caloriesInputElt = document.getElementById('calories');
let currentMealId = null;

async function loadMeals() {
    //Fetch all meals
    const response = await fetch(baseUrl);
    const data = await response.json();
    //console.log(Object.values(data));

    // clear mela list element
    mealListElt.innerHTML = '';

    // Create meal element for each
    for (const meal of Object.values(data)) {
        const changeButtonElt = document.createElement('button');
        changeButtonElt.classList.add('change-meal');
        changeButtonElt.textContent = 'Change';

        const deleteButtonElt = document.createElement('button');
        deleteButtonElt.classList.add('delete-meal');
        deleteButtonElt.textContent = 'Delete';

        const buttonContainerElt = document.createElement('div');
        buttonContainerElt.id = 'meal-buttons';
        buttonContainerElt.appendChild(changeButtonElt)
        buttonContainerElt.appendChild(deleteButtonElt);

        const foodH3Elt = document.createElement('h2');
        foodH3Elt.textContent = meal.food;

        const timeH3Elt = document.createElement('h3');
        timeH3Elt.textContent = meal.time;

        const calorieH3Elt = document.createElement('h3');
        calorieH3Elt.textContent = meal.calories;

        const mealElt = document.createElement('div');
        mealElt.classList.add('meal');
        mealElt.appendChild(foodH3Elt);
        mealElt.appendChild(timeH3Elt);
        mealElt.appendChild(calorieH3Elt);
        mealElt.appendChild(buttonContainerElt);

        // attache meal to dom
        mealListElt.appendChild(mealElt);
        //attach meals to dom
        mealListElt.appendChild(mealElt);

        // attach Change button
        changeButtonElt.addEventListener("click", async () => {
            // save current meal id
            currentMealId = meal._id;
            //get data => we hav eit in meal
            //populate input
            foodInputElt.value = meal.food;
            timeInputElt.value = meal.time;
            caloriesInputElt.value = meal.calories;

            //activate edit button
            editBtnElt.removeAttribute('disabled')
            //deactivate add button
            addBtnElt.setAttribute('disabled', 'disabled');
            //remove from meal list
            mealElt.remove();
        });
        // attach Delete button
        deleteButtonElt.addEventListener("click", async () => {
            // delete request
            await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });
            //remove from list
            mealElt.remove();
        });
        //delete button element
    }
}

loadBtnElt.addEventListener("click", loadMeals);

editBtnElt.addEventListener("click", async () => {
    // get data inputs
    const meal = getInputData();
    //make a put request
    const response = await fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        body: JSON.stringify({...meal, _id: currentMealId})
    });
    if (!response.ok) {
        return;
    }
    //load meals
    await loadMeals();
    //deactivate edit
    editBtnElt.setAttribute('disabled', 'disabled');
    //activate add
    addBtnElt.removeAttribute('disabled');
    //clear current meal id
    currentMealId = null;
    // clear inputs
    clearInputs();
})

addBtnElt.addEventListener("click", async () => {
    // get input data
    const meal = getInputData();
    // create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(meal)
    });
    if (!response.ok) {
        return;
    }
    //clear input fields
    clearInputs();
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NB !!!!!!!!!!!!!!
    // this loading should be last, otherwise test does not see the cleared inputs
    // load all meals
    await loadMeals();
});

editBtnElt.addEventListener("click", async () => {

});

function getInputData() {
    const food = foodInputElt.value;
    const time = timeInputElt.value;
    const calories = caloriesInputElt.value;
    return {food, time, calories};
}

function clearInputs() {
    foodInputElt.value = '';
    timeInputElt.value = '';
    caloriesInputElt.value = '';
}
