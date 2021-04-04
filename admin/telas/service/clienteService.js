 const criaNovaLinha = (nome, email) => {  // Criando uma função para guardar esse tempolate
    const linhaNovaCliente =  document.createElement('tr') // Criando a linha para cada conteúdo
    const conteudo = `  
            <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                    </td> ` // Template literals para criar um template html `` passa para o js que é uma string dentro da const conteudo e aceitando o conteudo

    linhaNovaCliente.innerHTML = conteudo // Inserindo no html a estrutura criada nesta função
    return linhaNovaCliente               // Retornando o conteudo que foi passado para linhaNovaCliente criando a tr
}

const tabela = document.querySelector('[data-tabela]')// Percorrer o DOM para o alvo  data-tabela atributo  para criação do template
 
const listaClientes = () => {
    const promise = new  Promise((resolve, reject) => {//Instanciada
        const http = new XMLHttpRequest()//Objeto responsável pela comunicação|Inicializar
        http.open('GET', 'http://localhost:3000/profile') // Abrir a comunicação entre API e a aplicação
        
        http.onload = () => {   // Ao carregar irá executar .......
            if(http.status >= 400){//Verificação se deu certo a chamada
                reject(JSON.parse(http.response))//De onde vem os dados em texto//JSON.parse p/ objeto
            }else {
                resolve(JSON.parse(http.response))//JSON.parse p/ objeto
            }
        }
        http.send()//Enviando
    })
    return promise; //Retornando a funçãoo promise
}

listaClientes()//Devolve promessa
.then(data => {//Acrescentando a listaClientes()|Então executo a exibição dos dados com a API 
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))// Colocar o elemento (template criaNovaLinha filho) para o (tbody Pai)
    })// Temos dados no array e agora precisa ser pego com o for each
})
   

       