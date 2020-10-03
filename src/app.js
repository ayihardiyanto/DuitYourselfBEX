
import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import routes from './routes/user_routes';
// import { auth as admin } from 'firebase-admin';


// var serviceAccount = require("../config/duityourself-62482-firebase-adminsdk-b64m4-7ac3a8a6f5.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://duityourself-62482.firebaseio.com"
// });

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

let app = express()
app.use(cors())
app.use(parser.urlencoded({
    extended : false
}))
app.use(routes)

const port = 3210;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})