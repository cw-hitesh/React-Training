import React from 'react';
import './css/navigator.css';
class Navigator extends React.Component {

    render()
    {
        return (
            <div className="navigator">
                <ul className="tags">
                    <li className="tag first-tag">Overview</li>
                    <li className="tag other-tags">Price</li>
                    <li className="tag other-tags">Expert Opinion</li>
                    <li className="tag other-tags">Similar Bikes</li>
                </ul>
            </div>
        );
    }
}

export default Navigator;