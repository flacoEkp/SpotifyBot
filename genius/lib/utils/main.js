const getLyrics= require('../getLyrics');
const getSong = require('../getSong');


const options={
    apiKey: 'BgHkfmuimWN2drBNklsm-B-aCJNajZUMJ08tyr0DBMTeF6bSZCQudJ-9bs8_JRAW',
    title: 'Dystopia',
    artist: 'BB Jacques',
    optimizeQuery: true
}


getSong(options).then(lyrics => { 
    console.log(lyrics.url);
})