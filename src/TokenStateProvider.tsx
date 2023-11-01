import {PropsWithChildren, useReducer} from "react";
import tokenStateReducer from "@/TokenStateReducer.tsx";
import TokenContext from "@/TokenContext";

export const maxTrackingIntensity = 5
const defaultRkThreshold = 5

export default function TokenStateProvider({children}: PropsWithChildren) {
    const [
        state,
        dispatch
    ] = useReducer(
        tokenStateReducer,
        {
            numberOfTokens: 0,
            rkThreshold: defaultRkThreshold,
            maxNumberOfTokens: defaultRkThreshold * maxTrackingIntensity
        })

    return (
        <TokenContext.Provider value={[state, dispatch]}>
            {children}
        </TokenContext.Provider>
    )
}

