import firebase from 'firebase';


var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: 'duityourself-62482',
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MSENDER,
    appId: process.env.APP_ID
};

var fire = firebase.initializeApp(config);
module.exports = fire