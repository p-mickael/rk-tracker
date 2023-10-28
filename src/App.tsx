import './App.css'
import {useMemo, useState} from "react";
import GaugeChart from "react-gauge-chart";
import TokensControl from "./TokensControls.tsx";
import Header from "./Header.tsx";
import IntensityDescription from "./IntensityDescription.tsx";

const numberOfTrackingIntensity = 5

function App() {
    const [numberOfTokens, setNumberOfTokens] = useState(0)
    const [rkThreshold, setRkThreshold] = useState(5)
    const maxNumberOfTokens = numberOfTrackingIntensity * rkThreshold
    const percent = numberOfTokens / maxNumberOfTokens
    const trackingIntensity = useMemo(() => {
        const intensity = Math.ceil((numberOfTokens + 1) / rkThreshold)
        return intensity > numberOfTrackingIntensity ? numberOfTrackingIntensity : intensity
    }, [numberOfTokens, rkThreshold]);
    const currentIntensityTokenAmount = numberOfTokens % rkThreshold

    return (
        <main className={"max-h-screen h-full w-80 flex flex-col justify-between"}>
            <Header rkThreshold={rkThreshold} setRkThreshold={setRkThreshold} />
            <IntensityDescription trackingIntensity={trackingIntensity} />
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
