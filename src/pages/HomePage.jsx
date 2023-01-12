import { Tweet } from '../components/Tweet';
import { Link } from 'react-router-dom'
import { tweets } from '../data/tweetsData.json'
import { SoonMessage } from '../components/SoonMessage'
import './styles/HomePage.css'


export const HomePage = () => {




  return (
    <>

    <div className="center">
        <div className="topCenter">
            <h3>Tweets más Recientes</h3>
        </div>

        <div className="centerTweet">
            <div className="centerTweet1">
                <img src="./assets/profile.png" alt="profile picture" />
            </div>

            <div className="centerTwittear2">
                <div>
                    <input className="tweetInput" type="text" placeholder="¿Qué está pasando?" />
                </div>
                <div className="centerTwittear22">
                    <Link to="">
                        <div onClick={ SoonMessage }>
                            <i className='bx bx-world'></i>
                            <span>Cualquier persona puede responder</span>

                        </div>
                    </Link>
                </div>
                <div className="centerTwittear23">
                    <div className="centerTwittear23icons">

                        <Link to="" onClick={ SoonMessage }>
                            <div className="centerTwittear23icon">
                                <i className='bx bx-image-alt'></i>
                            </div>
                        </Link>
                        <Link to="" onClick={ SoonMessage }>
                            <div className="centerTwittear23icon">
                                <i className='bx bxs-file-gif'></i>
                            </div>
                        </Link>
                        <Link to="" onClick={ SoonMessage }>
                            <div className="centerTwittear23icon">
                                <i className='bx bx-bar-chart-alt-2 bx-rotate-90'></i>
                            </div>
                        </Link>
                        <Link to="" onClick={ SoonMessage }>
                            <div className="centerTwittear23icon">
                                <i className='bx bx-smile'></i>
                            </div>
                        </Link>
                        <Link to="" onClick={ SoonMessage }>
                            <div className="centerTwittear23icon">
                                <i className='bx bx-calendar-event'></i>
                            </div>
                        </Link>

                    </div>
                    <div id="centerTwittear23TwittearDiv">
                        <button id="center-twittear-btn" onClick={ SoonMessage }>Twittear</button>
                    </div>
                </div>

            </div>

        </div>

        <div id="centerTweets">
            
            {   tweets.map( (tweet, idx) => (
                <Tweet key={ idx } {...tweet }/>
            ))

            }

        </div>
    </div>


    </>
  )
}
