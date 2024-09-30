class Tarefa
{
    constructor(nome, descricao)
    {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'Pendente';
    }

    concluir()
    {
        this.status = 'Concluído';
    }

    detalhes()
    {
        return {
            nome: this.nome,
            descricao: this.descricao,
            status: this.status
        };
    }
}


class GerenciadorDeTarefas
{
    #tarefas = [];

    adicionarTarefa(tarefa)
    {
        this.#tarefas.push(tarefa);
        this.listarTarefas();
    }

    listarTarefas()
    {
        const listaTarefas = document.getElementById('listaTarefas');
        const cardListaTarefas = document.getElementById('cardListaTarefas');

        if (this.#tarefas.length > 0)
        {
            cardListaTarefas.style.display = 'block';
        } 
        else 
        {
            cardListaTarefas.style.display = 'none';
        }

        listaTarefas.innerHTML = '';

        this.#tarefas.forEach((tarefa, index) => {
            const item = document.createElement('div');
            item.className = `task-item card mb-2 ${tarefa.status === 'Concluído' ? 'text-muted' : ''}`;
            item.innerHTML = `
                                <div class="card-body d-flex justify-content-between align-items-center text-light bg-secondary">
                                    <span>${tarefa.nome}</span>
                                    <div>
                                        <button class="btn btn-success btn-sm mr-2" onclick="visualizarDetalhes(${index})">Detalhes</button>
                                        <button class="btn btn-warning btn-sm mr-2" onclick="marcarComoConcluida(${index})">Concluir</button>
                                        <button class="btn btn-danger btn-sm mr-2" onclick="removerTarefa(${index})">Remover</button>
                                    </div>
                                </div>

                            `;
                            listaTarefas.appendChild(item);
        });
    }

    marcarComoConcluida(index)
    {
        this.#tarefas[index].concluir();
        this.listarTarefas();
    }

    removerTarefa(index)
    {
        this.#tarefas.splice(index, 1);
        this.listarTarefas();
    }

    visualizarDetalhes(index)
    {
        const tarefa = this.#tarefas[index].detalhes();
        const conteudoModal= document.getElementById('conteudoModal');
        conteudoModal.innerHTML = `
                                    <p><strong>Nome:</strong> ${tarefa.nome}</p>
                                    <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
                                    <p><strong>Status:</strong> ${tarefa.status}</p>
                                `;
        $('#detalhesModal').modal('show');
    }
}

const gerenciador = new GerenciadorDeTarefas();

function adicionarTarefa() 
{
    const nome = document.getElementById('nomeTarefa').value;
    const descricao = document.getElementById('descricaoTarefa').value;

    if (nome && descricao) 
    {
        const novaTarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(novaTarefa);
        document.getElementById('nomeTarefa').value = '';
        document.getElementById('descricaoTarefa'). value = '';
    }
}

function marcarComoConcluida(index)
{
    gerenciador.marcarComoConcluida(index);
}

function removerTarefa(index)
{
    gerenciador.removerTarefa(index);
}

function visualizarDetalhes(index)
{
    gerenciador.visualizarDetalhes(index);
}