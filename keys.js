console.log('this is loaded');

var twitterKeys = {
  consumer_key: '	MoxzqyA8Cn0vyK0jr9ZKOfF95',
  consumer_secret: 'pdJyfU4teDAuzPH6DCWm6ElS6VxuPgCXLB91gRwCnvoxomV7Sp',
  access_token_key: '908142528620138496-Q0IMy2gYfZ3VcQc2M4cO4Z5SfZslJ97',
  access_token_secret: 'opOi03M8qJf3uBE0gJIfJTeJZLdxmU5tNvmEfYSUGvprH',
}

module.exports = twitterKeys;

var SpotifyWebApi = require('spotify-web-api-node');
 

var spotifyApi = new SpotifyWebApi({
  clientId : 'b0bf7f1ba03041e28dfe41d03e28f949',
  clientSecret : 'ffa8add1f5a64e829c61a5b0d5f37341',
  redirectUri : 'http://www.example.com/callback'
});