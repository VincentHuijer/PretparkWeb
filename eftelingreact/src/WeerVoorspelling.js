import React, { useState, useEffect } from 'react'

export default function WeerVoorspelling() {

    const [temperatuur, setTemperatuur] = useState()

    useEffect(() => {
        let getData = async function () {
            await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.65&longitude=5.05&current_weather=true") //Dit zijn de coordinaten van de Efteling
            .then(response => response.json())
                .then(data => {
                    setTemperatuur(data.current_weather.temperature)
                })
        }

        getData()
    }, [])


    return (
        <div className="infoblok">
            <p>Het weer in de Efteling: <span id="graden">{temperatuur}</span>°C</p>
        </div>
    )
}
