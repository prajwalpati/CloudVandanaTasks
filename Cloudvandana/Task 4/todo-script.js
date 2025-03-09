function addNewTask() {
    let input = document.getElementById("newTask");
    let task = input.value.trim();
    
    if (task) {
        let ul = document.getElementById("tasks");
        let li = document.createElement("li");
        
        li.textContent = task;
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.background = "#e74c3c";
        removeBtn.onclick = () => li.remove();
        
        li.appendChild(removeBtn);
        ul.appendChild(li);
        
        input.value = "";
    }
}

