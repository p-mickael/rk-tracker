import './App.css'
import {RKThresholdInput} from "@/components/RKThresholdInput.tsx";
import {useEffect, useMemo, useState} from "react";
import IntensityDescription from "@/components/IntensityDescription.tsx";
import GaugeChart from "react-gauge-chart";
import TokensControls from "@/components/TokensControls.tsx";

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
      <main className={"flex flex-col flex-1 justify-between w-96 p-5"}>
          <section className={"flex flex-col justify-center gap-10"}>
        <h1 className={"font-kaushanScript text-4xl"}>RK Tracker</h1>
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
                <p>
                    {(isNaN(currentIntensityTokenAmount) ? 0 : currentIntensityTokenAmount)} / {rkThreshold}
                </p>
            </div>
            <TokensControls
                numberOfTokens={numberOfTokens}
                maxNumberOfTokens={maxNumberOfTokens}
                setNumberOfTokens={setNumberOfTokens}
            />
        </section>
      </main>
  )
}

export default App
