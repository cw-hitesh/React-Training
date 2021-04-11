import React from 'react';
import './css/priceContainer.css';
class PriceContainer extends React.Component {

    render()
    {
        return (
        <div className="padding-10-20 location-container">
            <p className="price-span font12 text-light-grey">On-road price in Bangalore</p>
                <div>
                    <span>
                        <span className="font24">₹</span>     
                        <span className="font24 text-bold padding-right5">&nbsp;1,33,233</span>
                    </span>
                    <a href="bikewale.com/" style={{'width':'100%'}} className="font14 text-bold padding-left5">View dealer price</a>
                </div>
        </div>
        );
    }
}

export default PriceContainer;