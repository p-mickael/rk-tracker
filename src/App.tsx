import './App.css'
import {useMemo, useState} from "react";
import GaugeChart from "react-gauge-chart";

const numberOfTrackingIntensity = 5

function App() {
    const [numberOfTokens, setNumberOfTokens] = useState(0)
    const [rkThreshold, setRkThreshold] = useState(4)
    const maxNumberOfTokens = numberOfTrackingIntensity * rkThreshold
    const percent = numberOfTokens / maxNumberOfTokens
    const trackingIntensity = useMemo(() => {
        const intensity = Math.ceil((numberOfTokens + 1) / rkThreshold)
        return intensity > numberOfTrackingIntensity ? numberOfTrackingIntensity : intensity
    }, [numberOfTokens, rkThreshold, numberOfTrackingIntensity]);
    const currentIntensityTokenAmount = numberOfTokens % rkThreshold

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

    function resetToken() {
        setNumberOfTokens(0)
    }

    return (
        <main className={"flex flex-col gap-4"}>
            <section className={"grid grid-cols-2 grid-flow-row gap-1"}>
                <div className={"border p-2 align-middle"}>Seuil RK</div>
                <div className={"border p-2"}>
                    <input
                        className={"w-14 text-center rounded-md border p-1"}
                        type="number"
                        value={rkThreshold}
                        onChange={(e) => setRkThreshold(Number(e.target.value))}/></div>
                <div className={"border p-2"}>Nombre de jeton </div>
                <div className={"border p-2"}>{currentIntensityTokenAmount} / {rkThreshold}</div>
            </section>
            <section>
                <GaugeChart
                    id="rk-gauge"
                    nrOfLevels={numberOfTrackingIntensity}
                    arcWidth={0.3}
                    percent={percent}
                    needleColor={"#000000"}
                    animDelay={0}
                    formatTextValue={() => trackingIntensity.toString()}
                />
            </section>
            <section className={"max-w-sm flex flex-col items-center-center gap-3"}>
                <div className={"flex flex-row justify-center gap-3"}>
                    <button className={"flex-1"} onClick={removeToken}>-</button>
                    <button className={"flex-1"} onClick={addToken}>+</button>
                </div>
                <button onClick={resetToken}>Reset</button>
            </section>
        </main>
    )
}

export default App
