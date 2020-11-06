import {
    GET_IMAGE_LIST,
    GET_CAMERAS_BY_SOL,
    GET_SOL_BY_ROVER
} from '../constants/ActionTypes';

const initialState = {
    maximumSol: 0,
    camerasByRoverAndSol : [],
    imagesFromExpeditions: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SOL_BY_ROVER :
            return {
                ...state,
                maximumSol: action.payload
            }
        case GET_CAMERAS_BY_SOL:
            return {
                ...state,
                camerasByRoverAndSol: action.payload
            }
        case GET_IMAGE_LIST:
            return {
                ...state,
                imagesFromExpeditions: action.payload
            }
        default: {
            return {
                ...state
            }
        }
    }
}