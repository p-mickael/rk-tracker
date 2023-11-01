import React from "react";
import type {Action, State} from "@/TokenStateReducer.tsx";

const TokenContext =
    React.createContext<[State, React.Dispatch<Action>] | undefined>(undefined)

export default TokenContext