import { useState } from 'react';

export function Createtodo({ onTodoCreated }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(async function(res) {
            const json = await res.json();
            alert("Todo added!");
            setTitle("");
            setDescription("");
            if(onTodoCreated) {
                onTodoCreated();
            }
        })
        .catch(error => {
            console.error("Error adding todo:", error);
            alert("Error adding todo");
        });
    };

    return <div>
        <input 
            style={{
                padding: 10,
                margin: 10
            }} 
            type="text" 
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        ></input> <br/>
        
        <input  
            style={{
                padding: 10,
                margin: 10
            }} 
            type="text" 
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        ></input><br/> 

        <button 
            style={{
                padding: 10,
                margin: 10
            }}
            onClick={handleAddTodo}
        > 
            Add a todo 
        </button>  
    </div>
}