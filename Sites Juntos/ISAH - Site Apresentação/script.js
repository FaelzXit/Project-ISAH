const mostrar = document.querySelector('.temp')
const status = document.querySelector('#status-clima')

const loc = document.querySelector('#loc')
const vento = document.querySelector('#velocidade-vento')
const umidade = document.querySelector('#umidade-ar')

const btn = document.querySelector('#clicar')

const nomeCidade = 'São Paulo'
const chave = '593db26469d5d91cc37489ad71cdcf44'



window.addEventListener('load', () => {
    chamarApi()
})


async function chamarApi() {

    const UrlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(nomeCidade)}&appid=${chave}&units=metric&lang=pt_br`

    const res = await fetch(UrlAPI)
    const json = await res.json()

    if (res.status === 200) {

        console.log(json)

        const Status = json.weather[0].description

        mostrar.innerHTML = `<strong>${Math.round(json.main.temp)}°C</strong>`

        status.innerHTML = `<p>${Status.charAt(0).toUpperCase() + Status.slice(1)}</p>`

        loc.innerHTML = json.name
        vento.innerHTML += `${Math.round(json.wind.speed)} KM/h`
        umidade.innerHTML += `${json.main.humidity}%`

    } else {

        alert('Cidade não encontrada')

    }

}

const site = document.getElementById('go-to-website')
const pagina = document.querySelector('body')
const Site = document.querySelector('#btn-primary')

 
site.addEventListener('click', ()=>{

    document.body.classList.add('carrega')

    setTimeout(() => {
        window.location.href = './Sites Juntos/ISAH 2.0/Login/index.html'
    }, 1000);
    
})

 Site.addEventListener('click', ()=>{

    document.body.classList.add('carrega')

    setTimeout(() => {
        window.location.href = './Sites Juntos/ISAH 2.0/Login/index.html'
    }, 1000);
    
})

const contatar = document.querySelector('.btn-secondary')
let link = 'https://mail.google.com/mail/?view=cm&fs=1&to=rafaeltosellimell@gmail.com&su=&body='

contatar.addEventListener('click', ()=>{
    window.open(link)
})






