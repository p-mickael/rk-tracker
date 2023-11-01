import React from "react";
import TokenContext from "@/TokenContext.tsx";

export default function useTokenState() {
    const context = React.useContext(TokenContext)

    if (context === undefined) {
        throw new Error('useToken must be used within a TokenProvider')
    }

    return context
}