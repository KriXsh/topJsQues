import express, { json } from "express";
const app = express();
app.use(json());

let tasks = []; // In-memory storage
let taskId = 1;

// Create a Task (POST)
app.post("/tasks", (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: taskId++, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Read All Tasks (GET)
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Read a Single Task by ID (GET)
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    task ? res.json(task) : res.status(404).json({ message: "Task not found" });
});

// Update a Task (PUT)
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });

    const { title, description } = req.body;
    task.title = title || task.title;
    task.description = description || task.description;
    res.json(task);
});

// Delete a Task (DELETE)
app.delete("/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

    tasks.splice(taskIndex, 1);
    res.json({ message: "Task deleted successfully" });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
