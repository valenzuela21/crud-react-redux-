import {
    SHOW_ALERT,
    DISABLE_ALERT
} from "../types";


//Show Alert
export function showAlertAction(alert) {
    return (dispatch) => {
        dispatch(createAlertError(alert))
    }
}

const createAlertError = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

//Disabel Alert
export function disbleAlertAction(){
    return (dispatch) =>{
        dispatch(disableAlertError())
    }
}

const disableAlertError = () =>({
    type: DISABLE_ALERT,
})
