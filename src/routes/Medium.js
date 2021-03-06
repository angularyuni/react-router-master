import React, { Component } from 'react';

class Medium extends Component {
    render() {
        return (
           <div className="bg-3">
                <div className="pricing pricing--jinpa">
                    <div className="pricing__item second">
                    <h3 className="pricing__title">Medium</h3>
                    <div className="pricing__price"><span class="pricing__currency">$</span>29.90</div>
                    <p className="pricing__sentence">Medium business solution</p>
                    <ul className="pricing__feature-list">
                        <li className="pricing__feature">Unlimited calls</li>
                        <li className="pricing__feature">Free hosting</li>
                        <li className="pricing__feature">10 hours of support</li>
                        <li className="pricing__feature">Social media integration</li>
                        <li className="pricing__feature">1GB of storage space</li>
                    </ul>
                    <button className="pricing__action">Choose plan</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Medium;