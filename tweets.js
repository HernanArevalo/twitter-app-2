var Twit = require('twit')

const T = new Twit({
  consumer_key:         'tinHetOF3sa64zVqCUsNmXXJY',
  consumer_secret:      '1TBz0k7Lzwyt3lwjGplBqGKfE8fxxS94MM5Y3MJC7oar64eRAp',
  access_token:         '180469512-oYp3DRcPRwjoknrJL1LDZBASJxDC4xiI5Xi1uH4h',
  access_token_secret:  'JrMs3UtQVSv4GMH6UyIyPkcODqtwHEBOhCDnRV5TOahPZ',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

console.log('asdsad')

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })