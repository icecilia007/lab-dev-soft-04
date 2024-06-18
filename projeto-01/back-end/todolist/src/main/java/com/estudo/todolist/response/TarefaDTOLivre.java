package com.estudo.todolist.response;

import com.estudo.todolist.enums.Prioridade;
import com.estudo.todolist.enums.TipoTarefa;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TarefaDTOLivre extends TarefaDTO {
    public TarefaDTOLivre() {
    }
    public TarefaDTOLivre(String titulo, Prioridade prioridade, TipoTarefa tipo, Boolean status) {
        super(titulo, prioridade, tipo, status);
    }

    public TarefaDTOLivre(Long id, String titulo, Prioridade prioridade, TipoTarefa tarefa, Boolean status) {
        super(id, titulo, prioridade, tarefa, status);
    }
}
