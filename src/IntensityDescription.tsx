
const intensityDescription = [
    "Personne ne vous cherche",
    "Vous avez attiré l'attention",
    "Ils sont sur vos traces et cherchent à vous identifier",
    "Vous avez été identifié et ils cherchent à vous capturer, ou pire...",
    "A ce stade, seul un miracle peut vous sauver"
]

type Props = {
    trackingIntensity: number
}

function IntensityDescription({trackingIntensity}: Props) {
    return (
        <p className={"font-kaushanScript text-3xl"}>
            {intensityDescription[trackingIntensity - 1]}
        </p>
    );
}

export default IntensityDescription;