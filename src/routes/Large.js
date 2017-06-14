import React, { Component } from 'react';



class Large extends Component {
    render() {
        return (
         <div className="bg-3">
                <div className="pricing pricing--jinpa">
                    <div className="pricing__item">
                    <h3 className="pricing__title">Large</h3>
                    <div className="pricing__price"><span class="pricing__currency">$</span>59,90</div>
                    <p className="pricing__sentence">Gigantic business solution</p>
                    <ul className="pricing__feature-list">
                        <li className="pricing__feature">Unlimited calls</li>
                        <li className="pricing__feature">Free hosting</li>
                        <li className="pricing__feature">Unlimited hours of support</li>
                        <li className="pricing__feature">Social media integration</li>
                        <li className="pricing__feature">Anaylitcs integration</li>
                        <li className="pricing__feature">Unlimited storage space</li>
                    </ul>
                    <button className="pricing__action">Choose plan</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Large;