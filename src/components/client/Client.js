import './client.scss';
import './client-media.scss';

import quotes from '../../resources/img/icons/quotes.png';
import stars from '../../resources/img/icons/stars.png';
import client from '../../resources/img/images/client.png';

const Client = () => {
    return(
        <div className="client">
            <div className="container">
                <div className="client__subtitle">Our Happy Client</div>
                <div className="client__title title">Testimonials</div>
                <div className="client__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds. Lorem ipsum dolor sit am et, consec tetur adipi scing elit.
                    <div className="client__quotes"><img src={quotes} alt="quoutes" /></div>
                </div>
                <div className="client__stars"><img src={stars} alt="stars" /></div>
                <div className="client__name">Mr.John Doe</div>
            </div>
            <img src={client} alt="client" className="client__img" />
        </div>
    )
}

export default Client;