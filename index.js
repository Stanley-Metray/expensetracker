class Expense {
    constructor(amount, description, category) {
        this.amount = amount; this.description = description; this.category = category;
    }
}

console.clear();
const myForm = document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let expenseList = document.getElementById("expenseList");
    const e1 = new Expense(document.getElementById("expenseAmount").value, document.getElementById("description").value, document.getElementById("category").value);
    let expenses = JSON.parse(localStorage.getItem("expenses") || '[]');
    expenses.push(e1.amount + " - " + e1.description + " - " + e1.category + " " + '<button onClick="editEvent(event)" type="button" class="btn-edit btn btn-secondary me-2">Edit</button><button onClick="deleteEvent(event)" type="button" class="btn-delete btn btn-danger">Delete</button>');

    expenseList.innerHTML = "";
    expenses.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = item;
        listItem.classList.add("my-3");
        expenseList.appendChild(listItem);
    });
    localStorage.setItem("expenses", JSON.stringify(expenses));

});


// I am creating these function to add event on edit button and delete 

function editEvent(event) {
    let expenses = JSON.parse(localStorage.getItem("expenses") || '[]');
    let index = -1;
    if (expenses) {
        expenses.forEach((item) => {
            let arr1 = item.split(" - ");
            let arr2 = event.target.parentElement.innerHTML.split(" - ")
            if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
                document.getElementById("expenseAmount").value=arr1[0];
                document.getElementById("description").value=arr1[1];
                index++;
            }
        });
    }

    if (index != -1) {
        expenses.splice(index, 1);
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function deleteEvent(event) {
    let expenses = JSON.parse(localStorage.getItem("expenses") || '[]');
    let index = -1;
    if (expenses) {
        expenses.forEach((item) => {
            let arr1 = item.split(" - ");
            let arr2 = event.target.parentElement.innerHTML.split(" - ")
            if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
                event.target.parentElement.remove();
                index++;
            }
        });
    }

    if (index != -1) {
        expenses.splice(index, 1);
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
