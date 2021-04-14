import {clienteService} from "../service/cliente-service.js"

const pegaUrl = new URL(window.location)

const id = pegaUrl.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})  