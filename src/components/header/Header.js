import { useState } from 'react';



import '../../style/button.scss'
import './header.scss';
import './header-media.scss'

import logo from '../../resources/img/logo/logo.png';
import human from '../../resources/img/images/human.png';


const Header = () => {


    const [burger, setBurger] = useState(false);

    const test = () => {
        setBurger(!burger);
    }


    return (
        <div className="header">
            <div className="header__head">
                <div className="header__head-logo">
                    <div className="header__head-logo-img"><img src={logo} alt="logo" /></div>
                    <div className="header__head-logo-text">BlueRex</div>
                </div>
                <div className="header__head-nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Product</li>
                        <li>Reviews</li>
                        <li>Faq</li>
                        <li>Contact</li>
                    </ul>
                    <div onClick={test} className={burger ? 'header__head-nav-burger header__head-nav-burger_active' : 'header__head-nav-burger'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="header__body">
                <div className="header__body-info">We are best and creative agency</div>
                <h2 className="header__body-title">We turn creative ideas into your business.</h2>
                <div className="header__body-descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>

                <div className="header__body-btns">
                    <button className="header__body-btns-btn btn">Our story</button>
                    <button className="header__body-btns-btn btn-purple">Read more</button>
                </div>
            </div>
            <img src={human} alt="human" className="header__img" />

            <div className={burger ? 'header__burger-block header__burger-block_active' : 'header__burger-block'}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Product</li>
                    <li>Reviews</li>
                    <li>Faq</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;  