import './work.scss';
import './work-media.scss';

import firstwork from '../../resources/img/work/first_work.jpg';
import secondwork from '../../resources/img/work/second_work.jpg';
import thirdwork from '../../resources/img/work/third_work.jpg';
import fourthwork from '../../resources/img/work/fourth_work.jpg';
import fifthwork from '../../resources/img/work/fifth_work.jpg';
import sixthfwork from '../../resources/img/work/sixth_work.jpg';
import seventhwork from '../../resources/img/work/seventh_work.jpg';
import eighthwork from '../../resources/img/work/eigth_work.jpg';
import ninthwork from '../../resources/img/work/ninth_work.jpg';


const Work = () => {
    return(
        <div className="work">
            <div className="container">
                <h2 className="work__title title">Our Recent Work</h2>
                <div className="work__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds. Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.Lorem ipsum dolor sit am et, consec tetur adipi scing elit.</div>
                <div className="work__nav">
                    <button className="work__nav-btn">Web Design</button>
                    <button className="work__nav-btn">Mobile App</button>
                    <button className="work__nav-btn">Branding</button>
                    <button className="work__nav-btn btn">Branding</button>
                </div>

                <div className="work__wrapper">
                    <div className="work__img"><img src={firstwork} alt="work" /></div>
                    <div className="work__img"><img src={secondwork} alt="work" /></div>
                    <div className="work__img"><img src={thirdwork} alt="work" /></div>
                    <div className="work__img"><img src={fourthwork} alt="work" /></div>
                    <div className="work__img"><img src={fifthwork} alt="work" /></div>
                    <div className="work__img"><img src={sixthfwork} alt="work" /></div>
                    <div className="work__img"><img src={seventhwork} alt="work" /></div>
                    <div className="work__img"><img src={eighthwork} alt="work" /></div>
                    <div className="work__img"><img src={ninthwork} alt="work" /></div>
                </div>

                <button className="work__btn btn-shadow">Read more</button>
            </div>
        </div>
    )
}

export default Work;