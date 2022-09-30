import './achieve.scss';
import './achieve-media.scss';

import speaker from '../../resources/img/icons/speaker.png'

const Achieve = () => {
    return (
        <div className="achieve">
            <div className="achieve__block">
                <div className="achieve__speaker"><img src={speaker} alt="speaker" /></div>
                <div className="achieve__number">500+</div>
                <div className="achieve__title"><span>Successfully</span> completed projects</div>
                <div className="achieve__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>
            </div>


            <div className="achieve__block">
                <div className="achieve__speaker"><img src={speaker} alt="speaker" /></div>
                <div className="achieve__number">254+</div>
                <div className="achieve__title"><span>Highly</span> specialised employees</div>
                <div className="achieve__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>
            </div>


            <div className="achieve__block">
                <div className="achieve__speaker"><img src={speaker} alt="speaker" /></div>
                <div className="achieve__number">45+</div>
                <div className="achieve__title"><span>Awards</span> around the world</div>
                <div className="achieve__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.</div>
            </div>
        </div>
    )
}

export default Achieve;