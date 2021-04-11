import React from 'react';
import './css/locationpopup.css';
import LocationTag from './Locationtag';


var cityList = ['Mumbai','Delhi','Karnal','Navi Mumbai','Bangalore','Kolkata','Chennai'];

class LocationPopup extends React.Component {
    render()
    {   
        return (
            <div className="location-popup--oxygen">
            <div className="popup-container popup-active">
                <div className="popup-overlay"></div>
                <div className="popup">
                    <div className="popup-head">
                        <span role="button" className="popup-close-button" onClick={this.handleCloseClick.bind(this)}></span>
                        <div className="popup-head__content">
                            <p className="location-popup__title">Please Tell Us Your Location</p>
                            <p className="location-popup__subtitle">This allows us to provide relevant content for you.</p>
                        </div>
                    </div>
                    <div className="popup-body">
                        <div className="location-popup__autocomplete-wrapper" tabIndex="0">
                            <div className="location-popup__tag-wrapper">
                                <span className="location-popup__tag">{this.props.cityName}
                                <span className="location-tag__delete-button"></span></span>
                                <span className="location-popup__tag"> {this.props.areaName}
                                <span className="location-tag__delete-button"></span></span>
                            </div>
                        </div>
                <div className="location-popup-popular-cities-wrapper">
                    <p className="popular-cities__title">Popular Cities</p>
                    <ul className="popular-cities__list">
                        {
                            cityList.map(cityName => {
                               return (<LocationTag key={cityName} cityName={cityName}/>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
        );
    }
    handleCloseClick() 
    {
        this.props.clickFunction();
    }
}

export default LocationPopup;