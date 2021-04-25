import { SET_CURRENT_CHANNEL } from '../../constants/ActionTypes';


const initialState = {
    currentChannel: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            }

        default:
            return {
                ...state
            }
    }
}
