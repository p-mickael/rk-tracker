import React from "react";

type Props = {
    rkThreshold: number
    setRkThreshold: (newRkThreshold: number) => void
}

export function RKThresholdInput({rkThreshold, setRkThreshold}: Props) {
    const [inputValue, setInputValue] = React.useState(rkThreshold.toString())

    function handleRkThresholdChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
        const newRkThreshold = Number(e.target.value)

        if (!isNaN(newRkThreshold) && newRkThreshold > 0) {
            setRkThreshold(newRkThreshold)
        }
    }

    return <div className={"flex flex-col items-center w-full gap-3"}>
        <h2>Seuil RK</h2>
        <input
            className={"text-center rounded-md border p-1 w-full text-2xl"}
            type="text"
            inputMode={"numeric"}
            value={inputValue}
            onChange={handleRkThresholdChange}/>
    </div>;
}