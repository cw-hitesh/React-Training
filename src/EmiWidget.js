import React from 'react';
import './css/emiWidget.css';
class EmiWidget extends React.Component {

    render()
    {
        return (
            <div className="padding-left20 padding-right20 padding-bottom15 emi-link--active ">
            <div className="card__price-wrapper">
                    <div className="card__price-content"><span className="card-price__label"><span className="text-bold">EMI <span>₹</span> </span>
                            <span id="emiValue">4,530</span><span className="text-light-grey">
                                        / month
                            </span>
                        </span>
                            <span className="emi-calculator__label emi-slug__link" title="EMI Calculator">EMI Calculator</span>
                    </div>
                        <span className="emi-calculator__link oxygen-btn oxygen-btn-secondary-ghost oxygen-btn-sm">Get EMI Offers</span>
            </div>
            </div>

        );
    }
}

export default EmiWidget;