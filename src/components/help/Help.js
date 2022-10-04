import './help.scss';
import './help-media.scss';


const Help = () => {
    return(
        <div className="help">
            <div className="container">
                <h2 className="help__title title">Need help?</h2>
                <div className="help__subtitle">Don't Forget to Contact With Us</div>
                <div className="help__descr">Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus lorem ipsum ese terds. Lorem ipsum dolor sit am et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus .</div>
                <form className='help__form'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <button className='help__btn btn-shadow'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Help;
