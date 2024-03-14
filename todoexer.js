document.addEventListener("DOMContentLoaded", function(){
    let addTodo = document.getElementById("addTodoForm");
    let todoList = document.getElementById("todoList");
    
    addTodo.addEventListener("submit", function(event) {
        event.preventDefault();
    
    let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
    
    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("newtodo").value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    addTodo.reset();
    });

    todoList.addEventListener("click", function(event){
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if(targetTagToLowerCase === "li"){
            event.target.style.textDecoration = "line-through";
        } else if (targetTagToLowerCase === "button"){
            event.target.parentNode.remove();
        };
    });
});

