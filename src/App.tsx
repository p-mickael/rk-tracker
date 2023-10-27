import './App.css'
import {useState} from "react";
import GaugeChart from "react-gauge-chart";

const numberOfTrackingIntensity = 5

function App() {
    const [numberOfTokens, setNumberOfTokens] = useState(0)
    const [rkThreshold, setRkThreshold] = useState(4)
    const maxNumberOfTokens = numberOfTrackingIntensity * rkThreshold
    const percent = numberOfTokens / maxNumberOfTokens
    const trackingIntensity = Math.ceil(numberOfTokens / rkThreshold) || 1

    function removeToken() {
        if (numberOfTokens > 0) {
            setNumberOfTokens(numberOfTokens - 1)
        }
    }

    function addToken() {
        if (numberOfTokens < maxNumberOfTokens) {
            setNumberOfTokens(numberOfTokens + 1)
        }
    }

    return (
        <main className={"flex flex-col gap-3"}>
            <section className={"grid grid-cols-2 grid-flow-row"}>
                <div className={"border p-2"}>Intensité de la traque</div>
                <div className={"border p-2"}>{trackingIntensity}</div>
                <div className={"border p-2"}>Intensité de la traque</div>
                <div className={"border p-2"}>{trackingIntensity}</div>
            </section>
            <section>
                <h2>Number of tokens</h2>
                <input
                    type="number"
                    value={rkThreshold}
                    onChange={(e) => setRkThreshold(Number(e.target.value))}/>
            </section>
            <section>
                <GaugeChart
                    id="rk-gauge"
                    nrOfLevels={numberOfTrackingIntensity}
                    arcWidth={0.3}
                    percent={percent}
                    needleColor={"#000000"}
                    hideText={true}
                    animDelay={0}
                />
            </section>
            <section className={"flex justify-center gap-3"}>
                <button onClick={removeToken}>-</button>
                <button onClick={addToken}>+</button>
            </section>
        </main>
    )
}

export default App
