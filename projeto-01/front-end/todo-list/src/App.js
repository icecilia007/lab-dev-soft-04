import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container } from "@mui/material";
import TaskTable from "./componentes/TaskTable";
import TaskForm from "./componentes/TaskForm";
import TaskDialog from "./componentes/TaskDialog";

function App() {
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/tarefas')
            .then(response => setTasks(response.data))
            .catch(error => console.error('There was an error fetching the data!', error));
    }, []);

    const handleTaskUpdate = (updatedTasks) => {
        setTasks(updatedTasks);
    };

    const handleDialogOpen = (task, isDelete) => {
        setSelectedTask(task);
        setConfirmDelete(isDelete);
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
        setSelectedTask(null);
        setConfirmDelete(false);
    };

    return (
        <div className="App" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1>Lista de Tarefas</h1>
            <Grid container md={12} spacing={1} sx={{ width: "80%", display: "flex", marginLeft: "auto", marginRight: "auto", marginTop: "auto" }}>
                <TaskForm tasks={tasks} onTaskUpdate={handleTaskUpdate} />
            </Grid>
            <Container sx={{ marginTop: "2rem" }}>
                <TaskTable tasks={tasks} onTaskUpdate={handleTaskUpdate} onDialogOpen={handleDialogOpen} />
            </Container>
            <TaskDialog
                open={open}
                task={selectedTask}
                confirmDelete={confirmDelete}
                onClose={handleDialogClose}
                onTaskUpdate={handleTaskUpdate}
            />
        </div>
    );
}

export default App;
