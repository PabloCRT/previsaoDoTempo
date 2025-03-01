const key = "4d7638833bee20d5fa657680e2f6120f"

function dataDisplay(data) {
    
    document.getElementById('tempoEm').innerHTML = "Tempo em " + data.name
    document.getElementById('textoTemperatura').innerHTML = Math.floor(data.main.temp) + "ºC"
    document.getElementById('textoTempo').innerHTML = data.weather[0].description
    document.getElementById('textoUmidade').innerHTML = "Umidade " + data.main.humidity + "%"
    document.getElementById('imgTempo').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`


}

async function getCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dataDisplay(data)
    console.log(data)

}

function clickButton(){

    const city = document.getElementById("pesquisa").value

    getCity(city)

}