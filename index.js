const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db"); // Correctly importing Todo model

app.use(express.json());

// Create a new todo
app.post("/todo", async function (req, res) {
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);

        if (!parsedPayload.success) {
            res.status(411).json({
                msg: "You sent the wrong inputs",
            });
            return;
        }

        // Create a new todo document
        const todo = await Todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false,
        });

        res.json({
            msg: "Todo created",
            todo: todo // Show the created todo
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({
            msg: "db error",
            error: error.message
        });
    }
});

// Retrieve all todos
app.get("/todo", async function (req, res) {
    try {
        const todos = await Todo.find({});
        res.json({
            todos
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({
            msg: "db error",
            error: error.message
        });
    }
});

// Mark a todo as completed
app.put("/completed", async function (req, res) {
    try {
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);

        if (!parsedPayload.success) {
            res.status(411).json({
                msg: "You sent wrong inputs",
            });
            return;
        }

        await Todo.updateOne({
            _id: req.body.id
        }, {
            completed: true
        });

        res.json({
            msg: "Todo marked as completed"
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
