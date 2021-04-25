import { SET_CURRENT_CHANNEL } from '../../constants/ActionTypes';


export const setCurrentChannel = (channel) => {
    return {
        type: SET_CURRENT_CHANNEL,
        payload: channel
    }
}