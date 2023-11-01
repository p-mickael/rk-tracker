import {maxTrackingIntensity} from "@/TokenStateProvider.tsx";

export type State = {
    numberOfTokens: number
    rkThreshold: number
    maxNumberOfTokens: number
}

export type Action = { type: 'add_token' } |
    { type: 'remove_token' } |
    { type: 'reset_tokens' } |
    { type: 'set_rk_threshold', rkThreshold: number }

export default function tokenStateReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add_token': {
            if (state.numberOfTokens >= state.maxNumberOfTokens) {
                return state
            }

            return {...state, numberOfTokens: state.numberOfTokens + 1}
        }
        case 'remove_token': {
            if (state.numberOfTokens <= 0) {
                return state
            }

            return {...state, numberOfTokens: state.numberOfTokens - 1}
        }
        case 'reset_tokens':
            return {...state, numberOfTokens: 0}
        case 'set_rk_threshold':
            if (action.rkThreshold <= 0)
                return state

            return {
                ...state,
                numberOfTokens: 0,
                rkThreshold: action.rkThreshold,
                maxNumberOfTokens: maxTrackingIntensity * action.rkThreshold
            }
        default:
            throw new Error()
    }
}