document.addEventListener("DOMContentLoaded", async () => {
    await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.65&longitude=5.05&current_weather=true") //Dit zijn de coordinaten van de Efteling
        .then(response => response.json())
        .then(data => {
            let temp = data.current_weather.temperature
            document.getElementById("graden").innerText = temp
        })
})