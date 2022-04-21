import "./McuShows.css"

function McuShows({dates, randomChar, nextChar}){

    return (
        <div className="McuShows">
            <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            <p>Moon Knight: {dates.moonKnight}</p>
            <p>Ms. Marvel: {dates.msMarvel}</p>

            <button onClick={randomChar}>RANDOM MCU CHARACTER</button>
            <button onClick={nextChar}>NEXT MCU CHARACTER</button>
        </div>
    )
}

export default McuShows;