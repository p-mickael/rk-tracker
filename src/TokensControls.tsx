
type Props = {
    numberOfTokens: number
    maxNumberOfTokens: number
    setNumberOfTokens: (numberOfTokens: number) => void
}

function TokensControls({numberOfTokens, maxNumberOfTokens, setNumberOfTokens}: Props) {

    function removeToken() {
        if (numberOfTokens > 0) {
            setNumberOfTokens(numberOfTokens - 1)
        }
    }

    function addToken() {
        if (numberOfTokens < maxNumberOfTokens) {
            setNumberOfTokens(numberOfTokens + 1)
        }
    }

    function resetToken() {
        setNumberOfTokens(0)
    }

    return (
        <section className={"max-w-sm flex flex-col items-center-center gap-3"}>
            <div className={"flex flex-row justify-center gap-3"}>
                <button className={"flex-1"} onClick={removeToken}>-</button>
                <button className={"flex-1"} onClick={addToken}>+</button>
            </div>
            <button onClick={resetToken}>Reset</button>
        </section>
    );
}

export default TokensControls;