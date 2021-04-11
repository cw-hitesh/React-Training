import React from 'react';
import LinkContainer from './Linkcontainer';
import './css/swiper.css';
class Swiper extends React.Component {

    render()
    {
        return (
            <div className="swiper">
            <div>
                <img src="https://imgd.aeplcdn.com/360x202/bw/models/yamaha-fz-s-v3-single-channel-abs--bs-vi20191111114812.jpg?q=85" alt="Yamaha FZ S FI Model Image" title="Yamaha FZ S FI Model" border="0"/>
            </div>
            <LinkContainer/>
            </div>
        );
    }
}

export default Swiper;