// JavaScript for managing tasks
let tasks = [];

function addTask() {
    const taskInput = document.getElementById("new-task");
    const prioritySelect = document.getElementById("priority");
    const deadlineInput = document.getElementById("deadline");
    const taskLabelInput = document.getElementById("task-label");
    const urgencySelect = document.getElementById("urgency");
    const importanceSelect = document.getElementById("importance");
    const taskList = document.getElementById("task-list");

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const deadline = deadlineInput.value;
    const taskLabel = taskLabelInput.value.trim();
    const urgency = urgencySelect.value;
    const importance = importanceSelect.value;

    if (taskText !== "") {
        tasks.push({
            text: taskText,
            priority,
            deadline,
            label: taskLabel,
            urgency,
            importance
        });

        // Sort tasks based on deadline for all priorities
        tasks.sort((a, b) => {
            return new Date(a.deadline) - new Date(b.deadline);
        });

        // Clear the task list
        taskList.innerHTML = '';

        // Render sorted tasks
        tasks.forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task");
            taskItem.innerHTML = `
                <label>Task: ${task.text}</label>
                <span class="priority">Priority: ${task.priority}</span>
                <span class="deadline">Deadline: ${task.deadline}</span>
                <span class="task-label">Label: ${task.label}</span>
                <span class="urgency">Urgency: ${task.urgency}</span>
                <span class="importance">Importance: ${task.importance}</span>
                <button onclick="completeTask(this)">Complete</button>
            `;
            taskList.appendChild(taskItem);
        });

        taskInput.value = "";
        prioritySelect.value = "high";
        deadlineInput.value = "";
        taskLabelInput.value = "";
        urgencySelect.value = "urgent";
        importanceSelect.value = "important";
    }
}

function completeTask(button) {
    const taskItem = button.parentElement;
    const taskLabel = taskItem.querySelector("label");
    taskLabel.classList.add("completed");
    button.disabled = true;
    button.textContent = "Completed";
}
