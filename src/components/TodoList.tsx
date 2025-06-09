// src/components/TodoList.tsx

"use client"
import React, { useState } from "react";
import { TextField, Button, List, ListItem, Typography, Box } from '@mui/material';

export default function TodoList() { 

  type Todo = { 
    text: string; 
    done: boolean;
  }; 

  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => { 
    if (input.trim() === "") return; 
    setTodos([...todos, { text: input.trim(), done: false }]);
    setInput(""); 

  };

  const toggleDone = (index: number) => { 
    const newTodos = [...todos]; 
    newTodos[index].done = !newTodos[index].done; 
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => { 
    setTodos(todos.filter((_, i) => i !== index));
  };

  return ( 
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Todo-lista
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2, backgroundColor: "#F5F5DC"}}>
        <TextField
        fullWidth 
        label="Skriv en uppgift"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={addTodo}>
          Lägg till 
        </Button>
      </Box>
      <List>
        {todos.map((todo, i) => ( 

          <ListItem key={i}>{todo.text}
          <Button variant="outlined" size="small" onClick={() => removeTodo(i)} sx={{ ml: 2}}>
            Ta bort 
          </Button>
          </ListItem>
        ))}
      </List>
    </Box>
    
  );
}