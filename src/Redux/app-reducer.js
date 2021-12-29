import { checkAutorization } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    inicialized: false,
}

const setInicialized = () => ({type: SET_INITIALIZED})
export const initialize = () => (dispatch) => {
    dispatch(checkAutorization()).then(()=>{
        dispatch(setInicialized)
    })
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true};
        default:
            return state;
    }
}

export default appReducer;