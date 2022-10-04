import './network.scss';
import './network-media.scss';

const Network = () => {
    return(
        <div className="network">
            <div className="container">
                <div className="network__wrapper">
                    <a href="/" className="network__social">facebook</a>
                    <a href="/" className="network__social">twitter</a>
                    <a href="/" className="network__social">linkedin</a>
                    <a href="/" className="network__social">instagram</a>
                    <a href="/" className="network__social">behance</a>
                </div>
            </div>
        </div>
    )
}

export default Network;