const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')

const app = express();
dotenv.config({ path: './.env' });

const insert = process.env.ENDPOINT_INSERT;
const read = process.env.ENDPOINT_READ;
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
    const codiceCostruttore = req.body.codiceCostruttore;
    const descrizione = req.body.descrizione;
    const costruttore = req.body.costruttore;
    const quantita = req.body.quantita;
    const posizione = req.body.posizione;
    const rivenditore1 = req.body.rivenditore1;
    const rivenditore2 = req.body.rivenditore2;
    const rivenditore3 = req.body.rivenditore3;
    const note = req.body.note;
    
    const sql = 'INSERT INTO '+ process.env.TABLE +' (codice, cod_costruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    db.query(sql,[codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note], (err, result) => {
        if (err!==null){
            console.log(err.message);
            res.send(err);
        } else {
            console.log(JSON.stringify(result));
            res.send(result);
        }
    })
})

app.get(read,(req, res)=>{
    const sql = 'SELECT * FROM '+ process.env.TABLE +';';
    db.query(sql, (err, result) => {
        if (err!==null){
            console.log(err.message);
            res.send(err);
        } else {
            console.log(result);            
            res.send(result);
        }        
    })
})

app.listen(port, ()=> {
    console.log('Running');
})

