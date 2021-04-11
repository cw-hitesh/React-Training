import React from 'react';
import './css/citySelector.css';
import LocationPopup from './Locationpopup.js';
class CitySelector extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isPopupShown : false
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    render()
    {  

        if(this.state.isPopupShown)
        { 
            return (
                <div>
                    <div className="grid-6 version-city-content__tab" onClick={this.handleOnClick}><p className="font12 text-light-grey">Location:</p>
                    <div className="font14 text-bold"><a className="location--active" rel="nofollow">
                            <span className="inline-block text-default text-truncate">{this.props.cityName}</span><span className="location-map-icon"></span></a>
                    </div>
                    </div>
                    <LocationPopup cityName={this.props.cityName} areaName={this.props.areaName} clickFunction={this.handleCloseClick}/>
                </div>
            );
        }
        else 
        {
            return (

                <div className="grid-6 version-city-content__tab"  onClick={this.handleOnClick}><p className="font12 text-light-grey">Location:</p>
                <div className="font14 text-bold"><a className="location--active" rel="nofollow">
                        <span className="inline-block text-default text-truncate">{this.props.cityName}</span><span className="location-map-icon"></span></a>
                </div>
            </div>
            );
        }
    }
    handleOnClick() 
    {  
        this.setState({
            isPopupShown : true
        });
    }
    handleCloseClick() 
    {
        this.setState({
            isPopupShown : false
        });
    }
}

export default CitySelector;