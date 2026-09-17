const luz = document.getElementById("light");
function mudaCor() {
    luz.classList.toggle('ativo');
}

function mudaCorTrash() {
    const trash = document.querySelector('.trash');
    const att = document.querySelector('.atualizar');
    trash.classList.toggle('ativo');
    trash.innerHTML += `<span id="atualizar">Atualizando...</span>`;
    
    
    
    setTimeout(() => {
        trash.classList.remove('ativo');
        trash.innerHTML = trash.innerHTML.replace('<span id="atualizar">Atualizando...</span>', '');

    }, 2000);
}





/*-----------------Ambiente------------------------*/

const container = document.querySelector('.text-alert-bar');

function trocarAmbiente() {
    const valor = document.querySelector('#drop-select').value;


    if (valor === 'default') {
        container.innerHTML = ``;
    }

    if (valor === 'cozinha') {
        container.innerHTML = `
    <div class="alert-bar">
        <div class="space-opt">
            <span class="options-alert-bar">Geladeira:</span>
            <div class="saida-dados"><span>${Math.round(Math.random() * 5 + 1)} °C</span></div>
        </div>

        <div class="space-opt">
            <span class="options-alert-bar">Freezer:</span>
            <div class="saida-dados"><span>${Math.round(Math.random() * -14 - 10)} °C</span></div>
        </div>

    `;
    }

    if (valor === "banheiro") {
        container.innerHTML = `
        <div class="alert-bar">
            <div class="space-opt">
                <span class="options-alert-bar">Chuveiro:</span>
                <div class="saida-dados"><span>Desligado</span></div>
            </div>

            <div class="space-opt">
                <span class="options-alert-bar">Luz:</span>
                <div class="saida-dados"><span>Ligado</span></div>
            </div>

            <div class="space-opt">
                <span class="options-alert-bar">Secador:</span>
                <div class="saida-dados"><span>Desligado</span></div>
            </div>
        </div>
        `;
    }

    if (valor === "quarto") {
        container.innerHTML = `
        <div class="alert-bar">
            <div class="space-opt">
                <span class="options-alert-bar">Luz:</span>
                <div class="saida-dados"><span>Desligado</span></div>
            </div>

            <div class="space-opt">
                <span class="options-alert-bar">Temperatura:</span>
                <div class="saida-dados"><span ;>${Math.floor(Math.random() * 6) + 20} °C</span></div>
            </div>

            <div class="space-opt">
                <span class="options-alert-bar">PC:</span>
                <div class="saida-dados"><span>Ligado</span></div>
            </div>
        </div>
        `;



    }

    if (valor === "sala") {
        container.innerHTML = `
        <div class="alert-bar">
            <div class="space-opt">
                <span class="options-alert-bar">Luz:</span>
                <div class="saida-dados"><span>Ligado</span></div>
            </div>

            <div class="space-opt">
                <span class="options-alert-bar">Televisão:</span>
                <div class="saida-dados"><span>Ligado</span></div>
            </div>`;

          



    }


}


/*-----------------API------------------------*/

const select = document.querySelector('#city-name');
const cid = document.querySelector('#weather');
select.addEventListener('change', chamarApi);


window.addEventListener('load', () => {
    select.value = "São Paulo";
    chamarApi()
})

async function chamarApi() {

    const cityName = select.value


    const apiKey = "593db26469d5d91cc37489ad71cdcf44";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    console.log(results)
    console.log(json);

    if (results.status === 200) {
        cid.innerHTML = (`${Math.round(json.main.temp)}°C`);
    } else {        
        alert('Não foi possível localizar a cidade');
    }


};





