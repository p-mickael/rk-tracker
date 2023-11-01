import {TokenContext} from "@/contexts/TokenContext.tsx";
import React from "react";


export default function useTokenState() {
    const context = React.useContext(TokenContext)

    if (context === undefined) {
        throw new Error('useToken must be used within a TokenProvider')
    }

    return context
}