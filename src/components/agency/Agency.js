import './agency.scss';
import './agency-media.scss';

import message from '../../resources/img/icons/rgb_message.png';
import speaker from '../../resources/img/icons/rgb_speaker.png';
import play from '../../resources/img/icons/play.png';
import creative from '../../resources/img/images/creative.jpg';

const Agency = () =>{
    return(
        <div className="agency">
            <div className="container">
                <div className="agency__wrapper">
                    <div className="agency__block">
                        <div className="agency__subtitle">We are best and creative agency</div>
                        <h2 className="agency__title title">We turn creative ideas into your business.</h2>
                        <div className="agency__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds. Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>
                        <div className="agency__design">
                            <div className="agency__graphic">
                                <div className="agency__graphic-img"><img src={message} alt="message" /></div>
                                <div className="agency__graphic-title">Graphic Design</div>
                                <div className="agency__graphic-descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>
                                <button className="agency__graphic-btn btn-shadow">Read more</button>
                            </div>

                            <div className="agency__graphic">
                                <div className="agency__graphic-img"><img src={speaker} alt="speaker" /></div>
                                <div className="agency__graphic-title">Graphic Design</div>
                                <div className="agency__graphic-descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>
                                <button className="agency__graphic-btn btn-shadow">Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="agency__block">
                        <div className="agency__img">
                            <img src={creative} alt="creative" />
                                <div className="agency__play"><img src={play} alt='play' /></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agency;