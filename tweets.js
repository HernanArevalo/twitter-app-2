const Twit = require('twit')

require('dotenv').config
//console.log(process.env);

const T = new Twit({
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})



T.get('search/tweets', { q: 'codear -RT lang:es since:2022-12-01 -filter:links -filter:replies', count: 20 }, function(err, data, response) {

  const apiData = data.statuses
  console.log(apiData[0])
  const obtenerData= (data) => {

    var tweets = []
    
    for (var tweet of data) {

      var tweetData = {
        created_at: tweet.created_at,
        id: tweet.id,
        text: tweet.text,
        user: { name: tweet.user.name,
                  screen_name: tweet.user.screen_name,
                  profile_image_url: tweet.user.profile_image_url,
                  protected: tweet.user.protected,
                  verified: tweet.user.verified
                },
          retweet_count: tweet.retweet_count,
          favorite_count: tweet.favorite_count,
          
        }
        
        tweets.push(tweetData)
      }
      
      return tweets
    }
    
    
    
    const tweetsData = obtenerData(apiData)
    
    
    console.log( tweetsData );
    
    
  })