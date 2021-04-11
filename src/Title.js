import React from 'react';
import './css/title.css';
class Title extends React.Component {

    render()
    {
        return (
            <div className="title-container">
                <h1 className="page-header">{this.props.modelName}</h1>
                <div>
                <div className="inline-block"><span className="rate-count-4"><span className="bwmsprite star-icon"></span><span className="text-bold">4.3</span></span></div>
                <div className="model-top__review-list">
                    <span className="model-top-review-list__item">
                            <a href="/m/yamaha-bikes/fz-s/reviews/" title="Yamaha FZ S FI reviews"><span>277</span><span>&nbsp;Reviews</span></a>
                    </span>
                </div></div>
            </div>
        );
    }
}

export default Title;