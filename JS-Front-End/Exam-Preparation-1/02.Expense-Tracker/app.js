window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expensesListElement = document.getElementById('expenses-list');
    const deleteButtonElt = document.querySelector('.btn.delete');

    addButtonElement.addEventListener('click', () => {
        ///Get input information
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        //Check empty element
        if (!expense || !amount || !date) {
            return;
        }
        //Add to preview list
        const expenseLiElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseLiElement);
        //Disable Add button
        addButtonElement.setAttribute('disabled', 'disabled');
        //Clear inputs
        clearInputs();

        //Get button elements
        const editButtonElt = expenseLiElement.querySelector('.btn.edit');
        const okButtonElt = expenseLiElement.querySelector('.btn.ok');

        //Attach event listeners
        editButtonElt.addEventListener('click', () => {
            // send data to inputs
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            // Clear preview (should remove event listeners also)
            expenseLiElement.remove();

            // Enable add button
            addButtonElement.removeAttribute('disabled');
        });

        // Attach ok event listener
        okButtonElt.addEventListener('click', () => {
            // remove buttons from Expense item
            const expenseButtonsElt = expenseLiElement.querySelector('.buttons');
            expenseButtonsElt.remove();
            //move expense item to expense list
            expensesListElement.appendChild(expenseLiElement);

            // enable add button
            addButtonElement.removeAttribute('disabled');
        });

        de
    });

    deleteButtonElt.addEventListener("click", () => {
        expensesListElement.innerHTML = '';
    })

    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement
    }

    function clearInputs() {
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
    }
}