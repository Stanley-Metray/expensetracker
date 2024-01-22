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
    expenses.push("<span>" + e1.amount + " - " + e1.description + " - " + e1.category + "</span>" + '<button onClick="editEvent(event)" type="button" class="btn-edit btn btn-secondary me-2">Edit</button><button onClick="deleteEvent(event)" type="button" class="btn-delete btn btn-danger">Delete</button>');

    expenseList.innerHTML = "";
    expenses.forEach((item, index) => {
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
        for (i = 0; i < expenses.length; i++) {
            let span = event.target.parentElement.children[0];
            if (expenses[i].indexOf(span.innerText) != -1) {
                index = i;
                let values = span.innerText.split(" - ");
                document.getElementById("expenseAmount").value = values[0];
                document.getElementById("description").value = values[1];
                document.getElementById("category").value = values[2];
                break;
            }
        }
    }
    
    if (index != -1) {
        expenses.splice(index, 1);
    }

    // list UL elements after removing
    let expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";
    expenses.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = item;
        listItem.classList.add("my-3");
        expenseList.appendChild(listItem);
    });
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function deleteEvent(event) {
    let expenses = JSON.parse(localStorage.getItem("expenses") || '[]');
    let index = -1;

    if (expenses) {
        for (i = 0; i < expenses.length; i++) {
            let span = event.target.parentElement.children[0];
            if (expenses[i].indexOf(span.innerText) != -1) {
                index = i;
                break;
            }
        }
    }
    
    if (index != -1) {
        expenses.splice(index, 1);
    }

    // list UL elements after removing
    let expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";
    expenses.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = item;
        listItem.classList.add("my-3");
        expenseList.appendChild(listItem);
    });
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
