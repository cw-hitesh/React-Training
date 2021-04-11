import React from 'react';
const LocationTag = props => {
        return (
            
            <li key="{props.cityName}" className="popular-cities__list-item">
                <div className="popular-cities-icon-wrapper">
                    <img className="popular-cities__icon" height="50" width="88" src="https://imgd.aeplcdn.com/0x0/n/ergk3sa_1483598.jpg" alt="{props.cityName}" title="{props.cityName}"/>
                </div>
                <span className="popular-cities__city-name">{props.cityName}</span>
            </li>
        );
    }

export default LocationTag;