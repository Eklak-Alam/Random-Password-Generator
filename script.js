document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector("#input");
    const addTodo = document.querySelector("#add-todo");
    const todoList = document.querySelector("#todo-list");

    function todoApp() {
        // Check if input is empty
        if (input.value.trim() === "") {
            alert("Enter todo first");
            return; // Stop further execution if input is empty
        }

        // Create new list item
        const lielem = document.createElement('li');
        lielem.className = "todoLi";
        lielem.textContent = input.value;
        input.value = "";

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "deleteBtn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(lielem);
        });

        // Append delete button to list item
        lielem.appendChild(deleteBtn);

        // Append list item to the list
        todoList.appendChild(lielem);
    }

    // Add event listener to the Add button
    addTodo.addEventListener('click', todoApp);

    // Toggle "checked" class when clicking on a list item
    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
    });
});
