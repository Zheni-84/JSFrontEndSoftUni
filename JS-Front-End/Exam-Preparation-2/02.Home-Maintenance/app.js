window.addEventListener("load", solve);

function solve() {
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const addButtonElement = document.getElementById('add-btn');
    const taskListElement = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addButtonElement.addEventListener("click", () => {
        //Get input inf
        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;
        //Create task element
        const taskLiElt = createTaskElement(place, action, person);
        //Add to task list
        taskListElement.appendChild(taskLiElt)

        //Clear input fields
        clearInputs()
    });

    function createTaskElement(place, action, person) {
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';

        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const buttonsDivEl = document.createElement('div');
        buttonsDivEl.classList.add('buttons');
        buttonsDivEl.appendChild(editButtonElement);
        buttonsDivEl.appendChild(doneButtonElement);

        const placeElt = document.createElement('p');
        placeElt.textContent = `Place:${place}`;
        const actionElt = document.createElement('p');
        actionElt.textContent = `Action:${action}`;
        const personElt = document.createElement('p');
        personElt.textContent = `Person:${person}`;

        const articleElt = document.createElement('li');
        articleElt.appendChild(placeElt)
        articleElt.appendChild(actionElt)
        articleElt.appendChild(personElt)

        const taskLiElt = document.createElement('li');
        taskLiElt.classList.add('clean-task');
        taskLiElt.appendChild(articleElt);
        taskLiElt.appendChild(buttonsDivEl);

        //Event Listeners
        editButtonElement.addEventListener("click", () => {
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            taskLiElt.remove();
        });

        doneButtonElement.addEventListener("click", () => {
            //Remove from task list - automatically done because every node has only one parent, so we add it to new place
            //remove buttons
            buttonsDivEl.remove();
            //Add delete button
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';
            taskLiElt.appendChild(deleteButtonElement);
            // Add to Done list
            doneListElement.appendChild(taskLiElt);

            deleteButtonElement.addEventListener("click", (e) => {
                //e.currentTarget.parentElement.remove();
                taskLiElt.remove();
            })
        });

        return taskLiElt;
    }

    function clearInputs() {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }
}