// Task storage (mock database)
let tasks = [];

// Function to add a task
function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

// Function to get all tasks
function getTasks() {
    return tasks;
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example usage
addTask(1, "Study", "Review JavaScript");
console.log(getTasks());
updateTask(1, "Study JS", "Review JavaScript and Express");
console.log(getTasks());
deleteTask(1);
console.log(getTasks());