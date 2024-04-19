window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById("add-btn");
    const checkList = document.getElementById("check-list");
    const contactList = document.getElementById("contact-list");

    addBtn.addEventListener("click", () => {
        const nameInput = document.getElementById("name").value.trim();
        const phoneInput = document.getElementById("phone").value.trim();
        const categoryInput = document.getElementById("category").value;

        if (!nameInput || !phoneInput || !categoryInput) return;

        const li = document.createElement("li");
        const articleElement = document.createElement('article');

        const namePElt = document.createElement("p");
        namePElt.textContent = `name:${nameInput}`;
        const phonePElt = document.createElement("p");
        phonePElt.textContent = `phone:${phoneInput}`;
        const categoryPElt = document.createElement("p");
        categoryPElt.textContent = `category:${categoryInput}`;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => {
            document.getElementById("name").value = nameInput;
            document.getElementById("phone").value = phoneInput;
            document.getElementById("category").value = categoryInput;
            li.remove();
        });

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-btn");
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(saveBtn);
        articleElement.appendChild(namePElt);
        articleElement.appendChild(phonePElt);
        articleElement.appendChild(categoryPElt);

        li.appendChild(articleElement);
        li.appendChild(buttonsDiv);

        saveBtn.addEventListener("click", () => {
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("del-btn");
            deleteBtn.addEventListener("click", deleteContact);

            li.removeChild(buttonsDiv);
            li.appendChild(deleteBtn);

            contactList.appendChild(li);
        });

        checkList.appendChild(li);

        clearInputs();
    });

    function deleteContact(event) {
        const li = event.target.parentElement;
        console.log('li delete = ' + li);
        li.remove();
    }

    function clearInputs() {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("category").selectedIndex = 0;
    }
}
