import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from "@mui/material";
import axios from 'axios';

const TaskDialog = ({ open, task, confirmDelete, onClose, onTaskUpdate }) => {
    const handleConfirm = () => {
        if (task) {
            const endpoint = task.status
                ? `http://localhost:8080/tarefas/${task.id}/status/desconcluir`
                : `http://localhost:8080/tarefas/${task.id}/status/concluir`;

            axios.post(endpoint)
                .then(response => {
                    onTaskUpdate(tasks => tasks.map(t => {
                        if (t.id === task.id) {
                            return { ...t, completed: !t.completed };
                        }
                        return t;
                    }));
                    onClose();
                })
                .catch(error => console.error('Erro ao mudar status da tarefa!', error));
        }
    };

    const handleDelete = () => {
        if (task) {
            axios.delete(`http://localhost:8080/tarefas/${task.id}`)
                .then(response => {
                    onTaskUpdate(tasks => tasks.filter(t => t.id !== task.id));
                    onClose();
                })
                .catch(error => console.error('Erro ao excluir tarefa!', error));
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {confirmDelete ? "Confirmar Exclusão de Tarefa" : "Confirmar Conclusão de Tarefa"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {confirmDelete
                        ? `Você tem certeza que deseja excluir a tarefa "${task?.titulo}"?`
                        : `Você tem certeza que deseja marcar a tarefa "${task?.titulo}" como ${task?.status ? 'desconcluída' : 'concluída'}?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={confirmDelete ? handleDelete : handleConfirm} autoFocus>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDialog;
