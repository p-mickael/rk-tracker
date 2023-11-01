import {ButtonHTMLAttributes} from "react";
import {Button} from "@/components/ui/button.tsx";
import useTokenState from "@/useTokenState.tsx";

function TokensControls() {
    const [, dispatch] = useTokenState()

    function removeToken() {
        dispatch({type: 'remove_token'})
    }

    function addToken() {
        dispatch({type: 'add_token'})
    }

    function resetToken() {
        dispatch({type: 'reset_tokens'})
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