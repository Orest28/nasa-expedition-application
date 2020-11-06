import React from 'react';
import { useSelector } from 'react-redux';

import {Row, Cell} from '@material/react-layout-grid';

import Slider from 'react-slick';

const ImageList = () => {
    
    const images = useSelector(state => state.nasaDataReducer.imagesFromExpeditions);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return ( 
            <Slider {...settings}>
            {
                images.map((element, key) => {
                    return (
                        <div key={key}>
                            <img src={element.img_src} className="expedition-image" alt={element.id} />
                        </div>
                    ) 
                })
            }
            </Slider>

)
}

export default ImageList;