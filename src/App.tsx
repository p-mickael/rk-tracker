import './App.css'
import {RKThresholdInput} from "@/components/RKThresholdInput.tsx";
import {useMemo} from "react";
import IntensityDescription from "@/components/IntensityDescription.tsx";
import GaugeChart from "react-gauge-chart";
import TokensControls from "@/components/TokensControls.tsx";
import useTokenState from "@/useTokenState.tsx";
import {maxTrackingIntensity} from "@/contexts/TokenContext.tsx";

function App() {
    const [
        {numberOfTokens, rkThreshold, maxNumberOfTokens},
        dispatch
    ] = useTokenState()

    const trackingIntensity = useMemo(() => {
        const calculatedIntensity = Math.ceil((numberOfTokens + 1) / rkThreshold)
        return calculatedIntensity > maxTrackingIntensity ? maxTrackingIntensity : calculatedIntensity
    }, [numberOfTokens, rkThreshold]);

    const currentIntensityTokenAmount = numberOfTokens % rkThreshold

    return (
        <main className={"flex flex-col flex-1 justify-between w-96 p-5"}>
            <section className={"flex flex-col justify-center gap-10"}>
                <h1 className={"font-kaushanScript text-4xl"}>RK Tracker</h1>
                <RKThresholdInput setRkThreshold={(newRkThreshold) => dispatch({
                    type: 'set_rk_threshold',
                    rkThreshold: newRkThreshold
                })} rkThreshold={rkThreshold}/>
            </section>
            <IntensityDescription trackingIntensity={trackingIntensity}/>
            <section className={"flex flex-col gap-4"}>
                <GaugeChart
                    id="rk-gauge"
                    nrOfLevels={maxTrackingIntensity}
                    arcWidth={0.3}
                    percent={numberOfTokens / maxNumberOfTokens}
                    animDelay={0}
                    formatTextValue={() => trackingIntensity.toString()}
                />
                <div className={"grid grid-cols-2 grid-flow-row gap-1"}>
                    <h2>Jetons</h2>
                    <p>
                        {currentIntensityTokenAmount} / {rkThreshold}
                    </p>
                </div>
                <TokensControls/>
            </section>
        </main>
    )
}

export default App
