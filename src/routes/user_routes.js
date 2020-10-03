import { Router } from 'express';
import firebase from '../config/db_config';
import admin from 'firebase-admin';


var serviceAccount = require("../config/duityourself-62482-firebase-adminsdk-b64m4-7ac3a8a6f5.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://duityourself-62482.firebaseio.com"
});

// function checkAuth(req, res, next) {
//     if (req.headers.authtoken) {
//         admin.auth().verifyIdToken(req.headers.authtoken)
//             .then(() => {
//                 next()
//             }).catch(() => {
//                 res.status(403).send('Unauthorized')
//             });
//     } else {
//         res.status(403).send('Unauthorized')
//     }
// }

let db = firebase.firestore();



export default Router().get('/get-user', async (req, res) => {
    let output = [];
    await db.collection('user')
        .get()
        .then(snapshot => {
            if (!snapshot.empty) {
                snapshot.docs.forEach(doc => output.push({
                    id: doc.id, data: doc.data()
                }))
            } else {
                console.log('data is empty')
            }
        }).catch(err => {
            console.log('error: ' + err)
        })

    res.send(output);
}).post('/create-user', async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    await db.collection('user')
        .doc(req.body.email).set(user).then(function (docRef) {
            console.log("Document written with ID: ", docRef);
            admin.auth().createUser(user).then(function (userRecord) {
                console.log('this is the user', userRecord);
            })
        }).catch((_) => console.log(`this is ${_}`))




    res.send({
        'statusCode': '201', 
        'message': 'User Has Been Created'
    })
})