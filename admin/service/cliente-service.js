const listaClientes = () => { 
        return fetch(`http://localhost:3000/profile`) // Método global da interface (Fetch API) usando GET e devolvendo uma promise
        .then(resposta => {  
            return resposta.json()
        })
}

export const clienteService = {
    listaCliente
}

   

       