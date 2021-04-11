import React from 'react';
import './css/linkcontainer.css';
class LinkContainer extends React.Component {

    render()
    {
        return (
            <ul className="model-media-list text-center padding-right20 padding-left20 padding-bottom15">
            <li><a title="Yamaha FZ S FI Images" href="/m/yamaha-bikes/fz-s/images/" ><span className="bwmsprite photos-sm"></span><span className="inline-block"><span className="font12">176</span>&nbsp;<span className="font11">images</span></span></a></li>
            <li><a title="Yamaha FZ S FI Colors" href="/m/yamaha-bikes/fz-s/colours/"><span className="bwmsprite colors-sm"></span><span className="inline-block"><span className="font12">7</span>&nbsp;<span className="font11">colours</span></span></a></li>
            </ul>
        );
    }
}

export default LinkContainer;