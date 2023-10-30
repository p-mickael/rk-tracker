import {ButtonHTMLAttributes} from "react";
import {Button} from "@/components/ui/button.tsx";

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
        <section className={"flex flex-col items-center-center gap-3"}>
            <div className={"flex flex-row justify-center gap-3"}>
                <StyledButton onClick={removeToken}>-</StyledButton>
                <StyledButton onClick={addToken}>+</StyledButton>
            </div>
            <StyledButton onClick={resetToken}>Reset</StyledButton>
        </section>
    );
}

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const StyledButton = ({children, onClick}: StyledButtonProps) => {
    return (
        <Button
            className={"flex-1 h-"}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
export default TokensControls;