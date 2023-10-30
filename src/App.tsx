import './App.css'
import {useEffect, useMemo, useState} from "react";
import GaugeChart from "react-gauge-chart";
import TokensControl from "./TokensControls.tsx";
import IntensityDescription from "./IntensityDescription.tsx";
import {RKThresholdInput} from "./RKThresholdInput.tsx";

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

    useEffect(() => {
        setNumberOfTokens(0)
    }, [rkThreshold]);

    return (
        <main className={"max-h-screen h-full w-80 flex flex-col justify-between"}>
            <section className={"flex flex-col items-center gap-12"}>
                <h1 className={"font-kaushanScript"}>RK Tracker</h1>
                <RKThresholdInput setRkThreshold={setRkThreshold} rkThreshold={rkThreshold} />
            </section>
            <IntensityDescription trackingIntensity={trackingIntensity} />
            <section className={"flex flex-col gap-4"}>
                <GaugeChart
                    id="rk-gauge"
                    nrOfLevels={numberOfTrackingIntensity}
                    arcWidth={0.3}
                    percent={percent}
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
