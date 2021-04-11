import React from 'react';
import CitySelector from './CitySelector';
import './css/dropdownContainer.css';
import VersionSelector from './VersionSelector';
class DropdownContainer extends React.Component {
    render()
    {
        return (
            <div className="version-city__content">
                <VersionSelector/>
                    <CitySelector   cityName={this.props.cityName} areaName={this.props.areaName}/>              
            </div>
        );
    }
}

export default DropdownContainer;