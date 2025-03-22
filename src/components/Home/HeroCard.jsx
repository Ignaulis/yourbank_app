import plius from '../../assets/hero/plius.svg'
import ex from '../../assets/hero/exange.svg'
import india from '../../assets/hero/india.svg'
import usa from '../../assets/hero/usa.svg'
import eur from '../../assets/hero/eur.svg'
import eth from '../../assets/hero/eth.svg'
import bit from '../../assets/hero/bit.svg'
import dolla from '../../assets/hero/dolla.svg'
import arrows from '../../assets/hero/arrows.svg'

export default function HeroCard() {

    return (
        <div className="hero-card-wrap">
            <div className='arrows'>
            <img  src={arrows} alt="arrows" />
            </div>

            <div className="money">
                <img src={plius} alt="plius" />
                <div>
                    <span>+ $5000,00</span>
                    <span className='income'>Monthly Income</span>
                </div>
            </div>
            <div className="card">
                <p>Your Transactions</p>
                <div className='CARDS'>
                    <div className='card1'>
                        <div>
                            <img src={ex} alt="" />
                            <div className='name'>
                                <span className='trans'>Transaction</span>
                                <span>Joel Kenley</span>
                            </div>
                        </div>
                        <span>-$68.00</span>
                    </div>
                    <div className='card1 card2'>
                        <div>
                            <img src={ex} alt="" />
                            <div className='name'>
                                <span>Transaction</span>
                                <p>Mark Smith</p>
                            </div>
                        </div>
                        <span>-$68.00</span>
                    </div>
                    <div className='card1 card3'>
                        <div>
                            <img src={ex} alt="" />
                            <div className='name'>
                                <span>Transaction</span>
                                <p>Lenen Roy</p>
                            </div>
                        </div>
                        <span>-$68.00</span>
                    </div>
                </div>
                <p>Money Exchange</p>
                <div className='salys'>
                    <div className='top'>
                        <div className='top-top ind'>
                            <div>
                                <img src={india} alt="" />
                                <span>INR</span>
                            </div>
                            <span>Indian Rupees</span>
                        </div>
                        <div className='top-top usa'>
                            <div>
                                <img src={usa} alt="" />
                                <span>USD</span>
                            </div>
                            <span>United States Dollar</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className='fif'>5,0000</span>
                        <span className='twel'>12.00</span>
                    </div>
                </div>
                <div className='button'>
                <button>Exchange</button>
                </div>
            </div>

            <div className="currency">
                <div>
                    <span>Supported Currency</span>
                </div>
                <div className='currecies'>
                    <img src={dolla} alt="dolla" />
                    <img src={eur} alt="eur" />
                    <img src={bit} alt="bit" />
                    <img src={eth} alt="eth" />
                </div>
            </div>
        </div>
    );
}