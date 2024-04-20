DROP TABLE IF EXISTS TB_TAREFA;

CREATE TABLE TB_TAREFA (
    id BIGINT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE,
    prioridade VARCHAR(50) NOT NULL DEFAULT  'BAIXA',
    tipo VARCHAR(20) NOT NULL DEFAULT  'LIVRE',
    prazo_dias INT DEFAULT  null,
    local_date DATE DEFAULT  null
);

INSERT INTO TB_TAREFA (id, titulo, status, prioridade, tipo) VALUES (1, 'Estudar para o exame', false, 'BAIXA','LIVRE'),
                                                  (2, 'Fazer compras', true, 'BAIXA','LIVRE'),
                                                  (3, 'Ir ao médico', false, 'BAIXA','LIVRE'),
                                                  (4, 'Enviar relatório', true, 'BAIXA','LIVRE'),
                                                  (5, 'Consultar nota no sga', true, 'BAIXA','LIVRE');

INSERT INTO TB_TAREFA (id, titulo, status, prioridade, tipo, prazo_dias) VALUES(6, 'Limpar a casa', false, 'ALTA', 'PRAZO',10),
                                                                   (7, 'Preparar apresentação', true, 'MEDIA', 'PRAZO',1),
                                                                   (8, 'Fazer exercícios', false, 'ALTA', 'PRAZO',5),
                                                                   (9, 'Estudar para prova', true, 'MEDIA', 'PRAZO',45),
                                                                   (10, 'Resolver pendências', true, 'BAIXA', 'PRAZO',9);

INSERT INTO TB_TAREFA (id, titulo, status, prioridade, tipo, local_date) VALUES(11, 'Limpar a casa', false, 'ALTA', 'DATA', '2024-04-13'),
                                                                                (12, 'Preparar apresentação', true, 'MEDIA', 'DATA', '2024-04-11'),
                                                                                (13, 'Fazer exercícios', false, 'ALTA', 'DATA', '2024-09-01'),
                                                                                (14, 'Estudar para prova', true, 'MEDIA', 'DATA', '2024-12-15'),
                                                                                (15, 'Resolver pendências', true, 'BAIXA', 'DATA', '2024-10-20');


