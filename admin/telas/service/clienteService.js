const http = new XMLHttpRequest()  // Objeto responsável pela comunicação
    
http.open('GET', 'http://localhost:3000/profile') // Abrir a comunicação entre API e a aplicação

http.send()  // Enviando

http.onload = () => {   // Ao carregar irá executar .......
    const data = http.response  // crie a const caso precise mudar, mudará apenas em um lugar
    console.log(data)   // objeto

}      