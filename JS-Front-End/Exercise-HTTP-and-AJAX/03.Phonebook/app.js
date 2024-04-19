function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');
    const phoneBookElement = document.getElementById('phonebook');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadButtonElement.addEventListener("click", () => {
        phoneBookElement.innerHTML = '';

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(entry => {
                        phoneBookElement.appendChild(createEntryElement(entry));
                    })
            })
    });
    createButtonElement.addEventListener("click", () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personElement.value,
                phone: phoneElement.value,
            })
        })
            .then(res => res.json())
            .then(entry => {
                const liElement = createEntryElement(entry);
                phoneBookElement.appendChild(liElement);
                personElement.value = '';
                phoneElement.value = '';
            });
    });

    function createEntryElement({_id, person, phone}) {
        const liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener("click", () => {
            fetch(`${baseUrl}/${_id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    liElement.remove();
                })
        });

        liElement.appendChild(deleteButton);

        return liElement;
    }
}

attachEvents();