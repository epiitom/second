const mongoose = require("mongoose");

// Connect to the MongoDB cluster
mongoose.connect("mongodb+srv://prathmesh18:FWGAGN8iu7nBY9z0@cluster1.pmfqlsq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully"))
.catch((err) => console.error("Database connection error:", err));

// Define the schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Create the model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo
};
