import express from 'express';
import dotenv from 'dotenv';
import accountContriller from './controllers/accountContriller.js'
import database from './services/databaes.js'

dotenv.config();
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('./api/account', accountContriller);

const port = process.env.PORT;

datase
.sync()
.then(results => {
    app.listen(port, () => {
        console.log(`Server is running via port ${port}`);
})
})
.catch( error => {
    console.log(error);
})

