package com.estudo.ToDoList.service;

import com.estudo.ToDoList.model.Tarefa;
import com.estudo.ToDoList.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaServiceImpl implements TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    @Override
    public Tarefa criarTarefa(String titulo) {
        Tarefa tarefa = new Tarefa(titulo, false);
        return tarefaRepository.save(tarefa);
    }

    @Override
    public Tarefa concluirTarefa(long id) {
        Tarefa tarefa = tarefaRepository.findById(id).orElse(null);
        if (tarefa != null) {
            tarefa.setStatus(true);
            return tarefaRepository.save(tarefa);
        }
        return null;
    }

    @Override
    public void excluirTarefa(long id) {
        tarefaRepository.deleteById(id);
    }

    @Override
    public List<Tarefa> retornarTodasTarefas() {
        return tarefaRepository.findAll();
    }
}
