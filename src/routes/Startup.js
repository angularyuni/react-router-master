import React, { Component } from 'react';
import './routes.css';

class Startup extends Component {
    render() {
        return (
            <div className="bg-3" classID="Startup">
                <div className="pricing pricing--jinpa">
                    <div className="pricing__item first">
                    <h3 className="pricing__title">Startup</h3>
                    <div className="pricing__price"><span class="pricing__currency">$</span>9.90</div>
                    <p className="pricing__sentence">Small business solution</p>
                    <ul className="pricing__feature-list">
                        <li className="pricing__feature">Unlimited calls</li>
                        <li className="pricing__feature">Free hosting</li>
                        <li className="pricing__feature">40MB of storage space</li>
                    </ul>
                    <button className="pricing__action">Choose plan</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Startup;