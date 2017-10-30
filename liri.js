var keys = require("./keys.js");

var request = require('request');
var Twitter = require('twitterKeys');
var Spotify = require('node-spotify-api');
var input = process.argv[3];
var setModule = process.argv[2];
var setNode = process.argv;
var spotify = new Spotify(keys.spotifyKeys);
var client = new Twitter(keys.twitterKeys);
var fs = require('fs');

function twitter(input) {
    var params = { screen_name: input, count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
        	console.log(error);
        }
        for (i = 0; i < tweets.length; i++) {
                console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
            }
    });
}

function spotify(input) {

spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
       if (!input) { 
       	input = 'The Sign';
   	}
   		console.log("Artist: " + data.artist.name);
   		console.log("Song name: " + data.song.name);
   		console.log("Preview link: " + data.preview_url);
   		console.log("Album: " + data.album.name);   
});
}

var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece";
var movieName = "";

function movie-this (input) {
	for (var i = 3; i < input.length; i++) {

  if (i > 3 && i < input.length) {

    movieName = movieName + "+" + input[i];

  }
  else {

    movieName += input[i];

  }
}

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {
    console.log("Title: " + JSON.parse(body).title + "Release Year: " + JSON.parse(body).Year) + "Rating: " + JSON.parse(body.Rating);
  }

  if (!input){
  	input = 'Mr. Nobody';
  }
});

}

function do-what-it-says (input) {
	fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			console.log(error);
		}

		console.log(data);

		var dataArr = data.split(",");

		console.log(dataArr);
	});
}


