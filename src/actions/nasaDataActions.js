import axios from 'axios';

import {
    GET_IMAGE_LIST,
    GET_CAMERAS_BY_SOL,
    GET_SOL_BY_ROVER
} from '../constants/ActionTypes'

export const getSolByRover = (rover) => (dispatch) => {
    axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=PuxnlZUrs7Mjzg4lHTwm4JEg9xrcO0XNrX3vB9C6`)
        .then(response => {
            dispatch({
                type: GET_SOL_BY_ROVER,
                payload: response.data.photo_manifest.max_sol
            })
        })
}

export const getCamerasBySol = (rover, sol) => (dispatch) => {
    axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=PuxnlZUrs7Mjzg4lHTwm4JEg9xrcO0XNrX3vB9C6`)
        .then(response => {

            let cameras = response.data.photo_manifest.photos.find(element => element.sol === parseInt(sol)).cameras;
            cameras.unshift("") // add space item for select

            dispatch({
                type: GET_CAMERAS_BY_SOL,
                payload: cameras
            })
        })
}

export const getImagesExpedition = (rover, camera, sol) => (dispatch) => {
    axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=PuxnlZUrs7Mjzg4lHTwm4JEg9xrcO0XNrX3vB9C6`)
        .then(response => {
            dispatch({
                type: GET_IMAGE_LIST,
                payload: response.data.photos
            })
        })
} 