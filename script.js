const latInput = document.getElementById('lat')
const lonInput = document.getElementById('lon')
const submit = document.getElementById('submit')
const key = 'af471dfcaa914e2b9dd71913241612'
const condition = document.getElementById('condition')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const humid = document.getElementById('humid')

const getData = async () => {
    var lat = latInput.value
    var lon = lonInput.value
    req = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}`
    fetch(req).then(result => result.json())
    .then(result => {
        console.log(result);
        condition.innerHTML = result.current.condition.text;
        temp.innerHTML = `${result.current.temp_c} °C`;
        wind.innerHTML = `${result.current.wind_kph} km/hr`;
        humid.innerHTML = `${result.current.humidity}%`;
    })
}

submit.addEventListener("click", () => getData())

