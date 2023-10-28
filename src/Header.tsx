import React from "react";

type Props = {
    rkThreshold: number
    setRkThreshold: (newRkThreshold: number) => void
}

export default function Header({rkThreshold, setRkThreshold}: Props) {

    function handleRkThresholdChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newRkThreshold = Number(e.target.value)
        setRkThreshold(isNaN(newRkThreshold) ? 0 : Math.floor(newRkThreshold))
    }

    return <section className={"flex flex-col items-center gap-12"}>
        <h1 className={"font-kaushanScript"}>RK Tracker</h1>
        <div className={"flex flex-col items-center w-full gap-3"}>
            <h2>Seuil RK</h2>
            <input
                className={"text-center rounded-md border p-1 w-full text-2xl"}
                type="text"
                inputMode={"numeric"}
                value={rkThreshold}
                onChange={handleRkThresholdChange}/>
        </div>
    </section>;
}