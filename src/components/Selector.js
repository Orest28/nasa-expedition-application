import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TextField, {HelperText, Input} from '@material/react-text-field'
import { Button } from '@material/react-button';
import Select from '@material/react-select';
import {Cell, Row, } from '@material/react-layout-grid'

import { getSolByRover,getCamerasBySol, getImagesExpedition } from '../actions/nasaDataActions';

const Selector = () => {

    const rovers = [
        {
            label: '',
            value: ''
        },
        {
            label: 'Curiosity',
            value: 'Curiosity'
        },
        {
            label: 'Opportunity',
            value: 'Opportunity'
        },
        {
            label: 'Spirit',
            value: 'Spirit'
        },
    ]

    const [disabledSol, setDisabledSol] = useState(true);
    const [disabledCamera, setDisabledCamera] = useState(true);

    const [selectedRover,setSelectedRover] = useState('');
    const [selectedCamera,setSelectedCamera] = useState('');
    const [selectedSol, setSelectedSol] = useState(0);

    const maximumSol = useSelector(state => state.nasaDataReducer.maximumSol);
    const cameras = useSelector(state => state.nasaDataReducer.camerasByRoverAndSol);

    const dispatch = useDispatch();

    const handleChangeRovers = (e) => {
        setDisabledSol(false);
        dispatch(getSolByRover(e.target.value));
        setSelectedRover(e.target.value);
    }

    const handleChangeCameras = (e) => {
        setSelectedCamera(e.target.value);
    }

    const handleBlurCamerasBox = (e) => {
        setDisabledCamera(false);
        if(selectedSol !== "") dispatch(getCamerasBySol(selectedRover, selectedSol))
    }

    const handleChangeSol = (e) => {
        setSelectedSol(e.currentTarget.value);
    }

    const findExpedition = (e) => {
        dispatch(getImagesExpedition(selectedRover, selectedCamera, selectedSol));
    }

    return (
                <Row>
                    <Cell tabletColumns={4} phoneColumns={4} desktopColumns={3}>
                        <Select
                            label="Rovers"
                            className="rovers-filter"
                            onChange={handleChangeRovers}
                            value={selectedRover}
                            options={rovers}
                        />
                        </Cell>
                        <Cell tabletColumns={4} phoneColumns={4} desktopColumns={2}>
                        <TextField
                            label="Sol"
                            className="sol-filter"
                            helperText={<HelperText>Sol - is a day on the Mars,
                                for your request rovers max value of sol is - {maximumSol}</HelperText>}
                        ><Input
                            value={selectedSol}
                            onChange={handleChangeSol}
                            onBlur={handleBlurCamerasBox}
                            disabled={disabledSol}
                            />
                            </TextField>
                        </Cell>
                        <Cell tabletColumns={4} phoneColumns={4} desktopColumns={3}>
                            <Select
                                label="Camera"
                                className="camera-filter"
                                onChange={handleChangeCameras}
                                value={selectedCamera}
                                options={cameras}
                                disabled={disabledCamera}
                            />
                        </Cell>
                        <Cell tabletColumns={4} desktopColumns={4}>
                            <Button
                                className="button-alternate"
                                onClick={findExpedition}
                            >
                                Find expedition!
                            </Button>
                    </Cell>
            </Row>
    )
}

export default Selector;