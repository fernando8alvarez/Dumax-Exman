import {
    GET_REPORTS,
    ERROR
} from "./actions";

const initialState = {
    informesGeocercas: {},
    error: ""

}

export default function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case GET_REPORTS:
            return {
                ...state,
                informesGeocercas: actions.payload
            }
        case ERROR:
            return {
                ...state,
                error: actions.payload
            }

        default: return state;
    }
}