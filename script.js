
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function () {
            toggleTask(this);
        };
        var label = document.createElement("label");
        label.textContent = taskText;
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = function () {
            removeTask(this);
        };

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    var label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add("completed");
    } else {
        label.classList.remove("completed");
    }
}

function removeTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}