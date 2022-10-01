import './world.scss';
import './world-media.scss';

import watch from '../../resources/img/images/watch.png'


const World = () => {
    return (
        <div className="world">
            <div className="container">
                <div className="world__wrapper">
                    <div className="world__subtitle">Dream Big Inspire the World</div>
                    <h2 className="world__title title">We turn creative ideas into your business.</h2>
                    <div className="world__nav">
                        <button className="world__nav-btn">Web Design</button>
                        <button className="world__nav-btn">Mobile App</button>
                        <button className="world__nav-btn">Branding</button>
                        <button className="world__nav-btn btn">Branding</button>
                    </div>
                    <div className="world__descr">
                        Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds. Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds.Lorem ipsum dolor sit am et, consec tetur adipi scing elit.
                    </div>

                    <button className="world__button btn-shadow">Read More</button>
                </div>
            </div>
            <img className='world__watch' src={watch} alt="watch" />
        </div>
    )
}

export default World;