
setTimeout(function(){
    document.getElementById('cep').addEventListener('blur', pesquisaCep)
}, 500)



function pesquisaCep(){
    const formFields = document.querySelector("form").elements
    const url = `https://viacep.com.br/ws/${formFields[0].value}/json/`    
    console.log(formFields)

    fetch(url)
        .then((resultRequest) => {
            return resultRequest.json()
        })
        .then((jsonRequest) => {
            formFields[1].value = jsonRequest.logradouro
            formFields[2].value = jsonRequest.complemento
            formFields[3].value = jsonRequest.bairro
            formFields[4].value = jsonRequest.localidade
            formFields[5].value = jsonRequest.uf
        })
    
}