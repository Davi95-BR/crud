import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email) => {  // Template
    const linhaNovaCliente = document.createElement('tr')
    const conteudo = `  
            <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                    </td> `

    linhaNovaCliente.innerHTML = conteudo // Inserindo no html
    return linhaNovaCliente               // Retornando o conteudo para a tr
}

const tabela = document.querySelector('[data-tabela]')// Percorrer o DOM para o alvo  (data-tabela atributo)para criação do template

clienteService.listaClientes()
    .then(data => {//Acrescentando a listaClientes()|Execução e exibição da API 
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
        })
            .catch(resposta => listaClientes.innerHTML = "<p>Erro</p>") // Mostra um páragrafo caso der erro na listagemI
    })
