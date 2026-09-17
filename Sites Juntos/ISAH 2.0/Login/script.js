window.addEventListener('load', ()=>{
    
    var usuario = [
        email_banco = prompt('Digite um email para acessar'),
        senha_banco = prompt('Digite uma senha para seu email')
    ]



const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const site = document.querySelector('#botao')


site.addEventListener('click', ()=>{

switch (true) {

        case (email.value !== usuario[0] || senha.value !== usuario[1]):
            alert('Dados incorretos');
            break;

        default:

        document.body.classList.add('sumir')

            setTimeout(() => {
               window.location.href = "../Principal/index.html"; 
            }, 1000);
            
            break;
    }

})
})
