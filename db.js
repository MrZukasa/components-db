const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const multer = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
const storage = multer.memoryStorage({
    // destination: (req, file, callback) => {
    //     callback(null, './img/components');
    // },
    // filename: (req, file, callback) => {
    //     callback(null, file.originalname);
    // },
})
const upload = multer({storage: storage});

const app = express();
dotenv.config({ path: './.env' });

const insert = process.env.ENDPOINT_INSERT;
const read = process.env.ENDPOINT_READ;
const deleteURL = process.env.ENDPOINT_DELETE;
const updateURL = process.env.ENDPOINT_UPDATE;
const readID = process.env.ENDPOINT_READ_ID;
const uploadIMG = process.env.ENDPOINT_UPLOAD;
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

app.post(insert,(req, res) => {
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
            res.status(400).send(err.message);
        } else {
            res.send(result);
        }
    })    
})

app.patch(uploadIMG, upload.single('dropzone-file'), (req, res)=>{
    const codice = req.params.codice;
    const image = req.file.buffer;    
    const sql = 'UPDATE ' + process.env.TABLE +' SET immagine = (?) WHERE codice = "' + codice + '";';
    db.query(sql,[image], (err,result)=>{
        if (err!==null){            
            res.status(400).send(err.message);
        } else {
            res.send(result);
        }
    })
})


app.get(read,(req, res)=>{
    const codice = '%'.concat(req.query.codice.concat('%'));
    const codiceCostruttore = '%'.concat(req.query.codiceCostruttore.concat('%'));
    const descrizione = '%'.concat(req.query.descrizione.concat('%'));
    const costruttore = '%'.concat(req.query.costruttore.concat('%'));
    const quantita = '%'.concat(req.query.quantita.concat('%'));
    const posizione = '%'.concat(req.query.posizione.concat('%'));
    const rivenditore1 = '%'.concat(req.query.rivenditore1.concat('%'));
    const rivenditore2 = '%'.concat(req.query.rivenditore2.concat('%'));
    const rivenditore3 = '%'.concat(req.query.rivenditore3.concat('%'));

    const sql = 'SELECT * FROM '+ process.env.TABLE +` WHERE codice LIKE (?) OR cod_costruttore LIKE (?) OR descrizione LIKE (?) OR costruttore LIKE (?) OR quantita LIKE (?) OR posizione LIKE (?) OR rivenditore1 LIKE (?) OR rivenditore2 LIKE (?) OR rivenditore3 LIKE (?);`
    db.query(sql, [codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3], (err, result) => {
        if (err!==null){                        
            res.status(400).send(err.message);
            console.log(sql)
            console.log(posizione)
        } else {            
            res.send(result);
            console.log(sql)
            console.log(posizione)
        }        
    })
})

app.delete(deleteURL,(req, res)=>{
    const sql = 'DELETE FROM '+ process.env.TABLE + ' WHERE ID = ' + req.params.ID + ';';
    db.query(sql, (err, result) => {
        if (err!==null){
            res.status(400).send(err.message);
        } else {
            res.send(result);
        }
    })
})

app.patch(updateURL,(req, res)=>{
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

    const sql = 'UPDATE '+ process.env.TABLE + ` SET codice = (?), 
                cod_costruttore = (?), descrizione = (?), costruttore = (?), quantita = (?), posizione = (?),
                rivenditore1 = (?), rivenditore2 = (?), rivenditore3 = (?), note = (?) WHERE ID = ` + req.params.ID + ';';

    db.query(sql, [codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note], (err, result) => {
        if (err!==null){
            res.status(400).send(err.message);
        } else {
            res.send(result);
        }
    })
})

app.get(readID,(req, res)=>{
    const sql = 'SELECT * FROM '+ process.env.TABLE +' WHERE ID = ' + req.params.ID + ';';
    db.query(sql, (err, result) => {
        if (err!==null){
            res.status(400).send(err.message);
        } else {
            res.send(result);
        }
    })
})

app.listen(port, ()=> {
    console.log('Running');
})

