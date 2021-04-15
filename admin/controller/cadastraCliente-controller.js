import { clienteService } from '../service/cliente-service.js'
(async()=>{
    const formulario = document.querySelector('[data-form]')

    formulario.addEventListener('submit', async(evento) => {
        const nome = evento.target.querySelector('[data-nome]').value
        const email = evento.target.querySelector('[data-email]').value
        
        try{
            await clienteService.criaCliente(nome, email)
        .then(() => {
            window.location.href = '../telas/cadastro_concluido.html'
        })
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    })
})()
