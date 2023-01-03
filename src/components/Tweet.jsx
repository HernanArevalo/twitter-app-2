
import './Tweet.css'

export const Tweet = (tweet) => {

    var day = new Date(tweet.created_at);
    //console.log(day)

    return (
            <div className="tweet">
                <div className="centerTweetTop">
                    <div className="centerTweet1">
                        <img src={tweet.user.profile_image_url } alt="profile picture" />
                    </div>
                    <div className="centerTweet2">
                        <div className="userTweet">
                            <div className="user1">
                                <div className="user1-1">
                                    <a src=""><span>{tweet.user.name}</span></a>
                                </div>
                                <div className="user1-2">
                                    <a src=""><span>@{tweet.user.screen_name}</span></a>
                                </div>
                                <div className="user1-3">
                                    <span>•</span>
                                </div>
                                <div className="user1-4">
                                    <a src=""><span>25min</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="tweetContent">
                            <span>{ tweet.text }</span>
                            <span className="hashtag"><a src=""></a></span>
                        </div>

                    </div>
                </div>
                <div className="tweetIcons2">
                    <div className="tweetComment tweetIcon">
                        <div className="icon-tweet-container">
                            <img className="" src="./assets/chat.png" alt="" />
                        </div>
                        <div className="tweetIconsSpan"></div>
                    </div>
                    <div className="tweetRetweet tweetIcon">

                        <div className="icon-tweet-container">
                            <img className="" src="./assets/retweet-arrows.svg" alt="" />
                        </div>
                        <div className="tweetIconsSpan">
                            { tweet.retweet_count != 0 && tweet.retweet_count }
                        </div>

                    </div>
                    <div className="tweetFav tweetIcon">
                        <div className="icon-tweet-container">
                            <img className="" src="./assets/heart.png" alt="" />
                        </div>
                        <div className="tweetIconsSpan">
                            { tweet.favorite_count != 0 && tweet.favorite_count }
                        </div>
                    </div>
                    <div className="tweetShare tweetIcon">
                        <div className="icon-tweet-container">
                            <img className="" src="./assets/upload.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>  )
}
