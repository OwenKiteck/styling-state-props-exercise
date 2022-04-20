import "./McuShows"

function McuShows({dates}) {
    return (
        <div className="McuShows">
            <h1>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            <p>Moon Knight: {dates.moonKnight}</p>
            <p>Ms. Marvel: {dates.msMarvel}</p>
        </div>
    )
}

export default McuShows;