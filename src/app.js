
import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import routes from './routes/user_routes';

let app = express()
app.use(cors())
app.use(parser.json())
app.use(routes)

// app.get('/', (req, res)=>{
//     res.send('COMIN')
// })
const port = 3210;
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})