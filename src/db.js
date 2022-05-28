const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')

const app = express();
dotenv.config({ path: './.env' });

const insert = process.env.ENDPOINT_INSERT;
const port = process.env.PORT;
const host = process.env.HOSTNAME;
const user = process.env.USER;
const pw = process.env.PASSWORD;
const database = process.env.DATABASE;

const db = mysql.createConnection({
    host: host,
    user: user,
    password: pw,
    database: database,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post(insert,(req,res) => {
    const codice = req.body.codice;
    const descrizione = req.body.descrizione;
    const sql = 'INSERT INTO componenti (codice, descrizione) VALUES (?, ?);';
    db.query(sql,[codice, descrizione], (err, result) => {
        res.send(result);
    })
})


app.listen(port, ()=> {
    console.log('sembra girare!');
})

