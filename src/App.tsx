import './App.css'
import {useMemo, useState} from "react";
import GaugeChart from "react-gauge-chart";
import TokensControl from "./TokensControls.tsx";

const numberOfTrackingIntensity = 5

const intensityDescription = [
    "Personne ne vous cherche",
    "Vous avez attiré l'attention",
    "Ils sont sur vos traces et cherchent à vous identifier",
    "Vous avez été identifié et ils cherchent à vous capturer, ou pire...",
    "A ce stade, seul un miracle peut vous sauver"
]

function App() {
    const [numberOfTokens, setNumberOfTokens] = useState(0)
    const [rkThresholdInputValue, setRkThresholdInputValue] = useState("5")
    const rkThreshold = Number(rkThresholdInputValue) || 0
    const maxNumberOfTokens = numberOfTrackingIntensity * rkThreshold
    const percent = numberOfTokens / maxNumberOfTokens
    const trackingIntensity = useMemo(() => {
        const intensity = Math.ceil((numberOfTokens + 1) / rkThreshold)
        return intensity > numberOfTrackingIntensity ? numberOfTrackingIntensity : intensity
    }, [numberOfTokens, rkThreshold]);
    const currentIntensityTokenAmount = numberOfTokens % rkThreshold

    return (
        <main className={"max-h-screen h-full flex flex-col justify-between"}>
            <section className={"flex flex-col items-center gap-12"}>
                <h1>RK Tracker</h1>
                <div className={"flex gap-3"}>
                    <h2>Seuil RK</h2>
                    <input
                        className={" text-center rounded-md border p-1 text-xl"}
                        type="text"
                        value={rkThresholdInputValue}
                        onChange={(e) => setRkThresholdInputValue(e.target.value)}/>
                </div>
            </section>
            <p className={"text-2xl"}>
                {intensityDescription[trackingIntensity - 1]}
            </p>
            <section className={"flex flex-col gap-4"}>
                <GaugeChart
                    id="rk-gauge"
                    nrOfLevels={numberOfTrackingIntensity}
                    arcWidth={0.3}
                    percent={percent}
                    needleColor={"#000000"}
                    animDelay={0}
                    formatTextValue={() => trackingIntensity.toString()}
                />
                <div className={"grid grid-cols-2 grid-flow-row gap-1"}>
                    <h2>Jetons</h2>
                    <p className={"text-2xl"}>
                        {(isNaN(currentIntensityTokenAmount) ? 0 : currentIntensityTokenAmount)} / {rkThreshold}
                    </p>
                </div>
                <TokensControl
                    numberOfTokens={numberOfTokens}
                    maxNumberOfTokens={maxNumberOfTokens}
                    setNumberOfTokens={setNumberOfTokens}
                />
            </section>
        </main>
    )
}

export default App
