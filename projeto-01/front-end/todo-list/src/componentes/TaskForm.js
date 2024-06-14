import React, { useState } from 'react';
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    TextField,
    Select
} from "@mui/material";
import axios from 'axios';

const TaskForm = ({ tasks, onTaskUpdate }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [taskType, setTaskType] = useState('LIVRE');
    const [dataEsperada, setDataEsperada] = useState('');
    const [diasPrevisto, setDiasPrevisto] = useState('');

    const handleAddTarefa = () => {
        let endpoint = 'http://localhost:8080/tarefas/v2/livre';
        const newTask = { titulo: title, tarefa: taskType, prioridade: priority, status: false };

        if (taskType === 'DATA') {
            endpoint = 'http://localhost:8080/tarefas/v2/data';
            newTask.dataEsperada = dataEsperada;
        } else if (taskType === 'PRAZO') {
            endpoint = 'http://localhost:8080/tarefas/v2/prazo';
            newTask.diasPrevisto = diasPrevisto;
        }

        axios.post(endpoint, newTask)
            .then(response => {
                onTaskUpdate([...tasks, response.data]);
                setTitle('');
                setTaskType('LIVRE');
                setPriority('');
                setDataEsperada('');
                setDiasPrevisto('');
            })
            .catch(error => console.error('Erro ao adicionar tarefa!', error));
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <TextField
                    label="Título"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>

            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel>Prioridade</InputLabel>
                    <Select
                        value={priority}
                        size="small"
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <MenuItem value="BAIXA">Baixa</MenuItem>
                        <MenuItem value="MEDIA">Média</MenuItem>
                        <MenuItem value="ALTA">Alta</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel>Data tarefa</InputLabel>
                    <Select
                        value={taskType}
                        size="small"
                        onChange={(e) => setTaskType(e.target.value)}
                    >
                        <MenuItem value="LIVRE">Livre</MenuItem>
                        <MenuItem value="DATA">Data</MenuItem>
                        <MenuItem value="PRAZO">Prazo em dias</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Button variant="contained" onClick={handleAddTarefa}>+</Button>
            </Grid>

            {taskType === 'DATA' && (
                <Grid item xs={4}>
                    <TextField
                        label="Data Esperada"
                        type="date"
                        size='small'
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={dataEsperada}
                        onChange={(e) => setDataEsperada(e.target.value)}
                    />
                </Grid>
            )}

            {taskType === 'PRAZO' && (
                <Grid item xs={4}>
                    <TextField
                        label="Dias Previsto"
                        fullWidth
                        size='small'
                        type="number"
                        value={diasPrevisto}
                        onChange={(e) => setDiasPrevisto(e.target.value)}
                    />
                </Grid>
            )}
        </Grid>
    );
};

export default TaskForm;
