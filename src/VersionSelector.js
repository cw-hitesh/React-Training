import React from 'react';
import './css/versionSelector.css';
class VersionSelector extends React.Component {

    render()
    {
        return (
            <div className="grid-6 version-city-content__tab dropdown-box__menu-tab"><p className="dropdown-box__menu-title">Version</p><span id="defversion" className="dropdown-box__menu-value">Standard - BS VI [2020]</span></div>
        );
    }
}

export default VersionSelector;