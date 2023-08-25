import { Link } from 'react-router-dom';
import './PricingCard.css'

const PricingCard = () => {
    return (
        <div className='pricing' style={{backgroundColor: "rgb(0, 0, 0, 0.8)"}}>
            <div className='card-container'>
                <div className='card' style={{background: '#000'}}>
                    <h3>Basic</h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 100</p>
                    <p>- 3 Days-</p>
                    <p>- 3 Pages</p>
                    <p> Featured</p>
                    <p>Responsive Design</p>
                    <Link to={'/contact'} className='btn'> PURCHASE NOW</Link>
                    <p></p>
                </div>

                <div className='card' style={{background: '#000'}}>
                    <h3>Premium</h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 200</p>
                    <p>- 5 Days-</p>
                    <p>- 5 Pages</p>
                    <p> Featured</p>
                    <p>Responsive Design</p>
                    <Link to={'/contact'} className='btn'> PURCHASE NOW</Link>
                    <p></p>
                </div>

                <div className='card' style={{background: '#000'}}>
                    <h3>Business</h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 500</p>
                    <p>- 5 Days-</p>
                    <p>- 8 Pages</p>
                    <p> Featured</p>
                    <p>Responsive Design</p>
                    <Link to={'/contact'} className='btn'> PURCHASE NOW</Link>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;