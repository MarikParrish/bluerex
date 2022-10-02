import './companies.scss';
import './companies-media.scss';

import cisco from '../../resources/img/icons/cisco.png';
import adidas from '../../resources/img/icons/adidas.png';
import lenovo from '../../resources/img/icons/lenovo.png';
import disney from '../../resources/img/icons/disney.png';
import amazon from '../../resources/img/icons/amazon.png';
import puma from '../../resources/img/icons/puma.png';
import apple from '../../resources/img/icons/apple.png';
import mini from '../../resources/img/icons/mini.png';

const Companies = () => {
    return(
        <div className="companies">
            <div className="container">
                <div className="companies__wrapper">
                    <div className="companies__logo"><img src={cisco} alt="cisco" /></div>
                    <div className="companies__logo"><img src={adidas} alt="adidas" /></div>
                    <div className="companies__logo"><img src={lenovo} alt="lenovo" /></div>
                    <div className="companies__logo"><img src={disney} alt="disney" /></div>
                    <div className="companies__logo"><img src={amazon} alt="amazon" /></div>
                    <div className="companies__logo"><img src={puma} alt="puma" /></div>
                    <div className="companies__logo"><img src={apple} alt="apple" /></div>
                    <div className="companies__logo"><img src={mini} alt="mini" /></div>
                </div>
            </div>
        </div>
    )
}

export default Companies;