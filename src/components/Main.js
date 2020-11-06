import React from 'react';


import {Cell, Grid, Row, } from '@material/react-layout-grid'

import Selector from './Selector';
import ImageList from './ImageList';


const Main = () => {
    return (
        <div className="main-block">
            <Grid align="right">
                <Row className="header-row">
                    <Cell tabletColumns={3} phoneColumns={1} desktopColumns={5}/>
                    <Cell phoneColumns={3} desktopColumns={6}><h2>Nasa application</h2></Cell>
                </Row>
                <Selector />
                <ImageList />
            </Grid>
        </div>
    )
}

export default Main;