const getLyrics= require('../getLyrics');
const getSong = require('../getSong');
var Spotify = require('../../../spotify/src/spotify-web-api');
var s = new Spotify();

var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('5f99addff81d4ca4ba9b11f55e59432d');

// const options={
//     apiKey: 'BgHkfmuimWN2drBNklsm-B-aCJNajZUMJ08tyr0DBMTeF6bSZCQudJ-9bs8_JRAW',
//     title: 'Dystopia',
//     artist: 'BB Jacques',
//     optimizeQuery: true
// }

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );


// getSong(options).then(lyrics => { 
//     console.log(lyrics.url);
// })