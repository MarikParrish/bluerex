import './employee.scss';
import './employee-media.scss';

import firstworker from '../../resources/img/images/firstworker.png';
import secondworker from '../../resources/img/images/secondworker.png';
import thirdworker from '../../resources/img/images/thirdworker.png';
import fourthworker from '../../resources/img/images/fourthworker.png';

const Employee = () => {
    return (
        <div className="employee">
            <div className="container">
                <div className="employee__wrapper">
                    <div className="employee__block">
                        <div className="employee__subblock">
                            <div className="employee__title">Company</div>
                            <div className="employee__list">
                                <ul>
                                    <li><a href='/#'>About</a></li>
                                    <li><a href='/#'>Approach</a></li>
                                    <li><a href='/#'>Sustainability</a></li>
                                    <li><a href='/#'>Carees</a></li>
                                    <li><a href='/#'>News</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="employee__subblock">
                            <div className="employee__title">Company</div>
                            <div className="employee__list">
                                <ul>
                                    <li><a href='/#'>About</a></li>
                                    <li><a href='/#'>Approach</a></li>
                                    <li><a href='/#'>Sustainability</a></li>
                                    <li><a href='/#'>Carees</a></li>
                                    <li><a href='/#'>News</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="employee__subblock">
                            <div className="employee__title">Company</div>
                            <div className="employee__list">
                                <ul>
                                    <li><a href='/#'>About</a></li>
                                    <li><a href='/#'>Approach</a></li>
                                    <li><a href='/#'>Sustainability</a></li>
                                    <li><a href='/#'>Carees</a></li>
                                    <li><a href='/#'>News</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="employee__subblock">
                            <div className="employee__title">Company</div>
                            <div className="employee__list">
                                <ul>
                                    <li><a href='/#'>About</a></li>
                                    <li><a href='/#'>Approach</a></li>
                                    <li><a href='/#'>Sustainability</a></li>
                                    <li><a href='/#'>Carees</a></li>
                                    <li><a href='/#'>News</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="employee__block">
                        <div className="employee__subblock"><img src={firstworker} alt="firstworker" /></div>
                        <div className="employee__subblock"><img src={secondworker} alt="secondworker" /></div>
                        <div className="employee__subblock"><img src={thirdworker} alt="thirdworker" /></div>
                        <div className="employee__subblock"><img src={fourthworker} alt="fourthworker" /></div>
                    </div>
                </div>
            </div>
            
            <div className="employee__footer">
                <a href="/#" className="employee__footer-text">© 2022 Theme by psd.in.ua</a>
                <a href="/#" className="employee__footer-text">Privacy</a>
                <a href="/#" className="employee__footer-text">Terms of Use</a>
                <a href="/#" className="employee__footer-text">Site Map</a>
            </div>
        </div>
    )
}

export default Employee;