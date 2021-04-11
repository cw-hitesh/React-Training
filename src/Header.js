import React from 'react';
import './css/header.css';
class Header extends React.Component {

    render()
    {
        return (
            <div className="header-fixed">
                <div className="white-header-wrapper">
                    <div className="white-header-wrapper__content">
                        <span className="hamburger-logo">
                            </span>
                            <a className="bw-link" href="/m/" title="BikeWale"/>
                </div>
                <div className="white-header-wrapper__content">
                    <span className="search-wrapper__global-search"></span>
                    <div className="global-location--oxygen">
                        <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/location.svg" height="23" width="17" title="Location Icon" alt="Location Icon"/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Header;