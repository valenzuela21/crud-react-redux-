import{
    SHOW_ALERT,
    DISABLE_ALERT
} from "../types";

//Initial State Reduce
const initialState = {
    alert: null
}

export default function alertReducer( state = initialState, action) {

    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case DISABLE_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state
    }

}
