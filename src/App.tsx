import './App.css'
import {PropsWithChildren, useMemo, useState} from "react";
import GaugeChart from "react-gauge-chart";
import TokensControl from "./TokensControls.tsx";

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

    const Label = ({children}: PropsWithChildren) => {
        return (
            <div className={" p-2 text-right"}>
                {children}
            </div>
        )
    }

    const Value = ({children}: PropsWithChildren) => {
        return (
            <div className={" p-2 text-left"}>
                {children}
            </div>
        )
    }

    return (
        <main className={"flex flex-col gap-4"}>
            <section className={"grid grid-cols-2 grid-flow-row gap-1"}>
                <Label>Seuil RK</Label>
                <Value>
                    <input
                        className={"w-14 text-center rounded-md border p-1"}
                        type="number"
                        value={rkThreshold}
                        onChange={(e) => setRkThreshold(Number(e.target.value))}/>
                </Value>
                <Label>Nombre de jeton </Label>
                <Value>{currentIntensityTokenAmount} / {rkThreshold}</Value>
            </section>
            <GaugeChart
                id="rk-gauge"
                nrOfLevels={numberOfTrackingIntensity}
                arcWidth={0.3}
                percent={percent}
                needleColor={"#000000"}
                animDelay={0}
                formatTextValue={() => trackingIntensity.toString()}
            />
            <TokensControl
                numberOfTokens={numberOfTokens}
                maxNumberOfTokens={maxNumberOfTokens}
                setNumberOfTokens={setNumberOfTokens}
            />
        </main>
    )
}

export default App
