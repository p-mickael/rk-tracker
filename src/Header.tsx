import {RKThresholdInput} from "./RKThresholdInput.tsx";

type Props = {
    rkThreshold: number
    setRkThreshold: (newRkThreshold: number) => void
}

export default function Header({rkThreshold, setRkThreshold}: Props) {

    return <section className={"flex flex-col items-center gap-12"}>
        <h1 className={"font-kaushanScript"}>RK Tracker</h1>
        <RKThresholdInput setRkThreshold={setRkThreshold} rkThreshold={rkThreshold} />
    </section>;
}
