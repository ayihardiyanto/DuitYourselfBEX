import { Router } from 'express';
import firebase from '../config/db_config';

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
}).post('/post-user', async (req, res)={
    
})