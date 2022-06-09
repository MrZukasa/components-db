import { useState } from "react";
import Modal from "../Modal";
import axios from "axios";
import { motion, AnimatePresence } from 'framer-motion';

const Details = () => {

    const [codice, setCodice] = useState('');
    const [codiceCostruttore, setCodiceCostruttre] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [costruttore, setCostruttore] = useState('');
    const [quantita,setQuantita] = useState('');
    const [posizione, setPosizione] = useState('');
    const [rivenditore1, setRivenditore1] = useState('');
    const [rivenditore2, setRivenditore2] = useState('');
    const [rivenditore3, setRivenditore3] = useState('');
    const [note,setNote] = useState('');
    const [response,setResponse] = useState('Checking status');
    const [showModal, setShowModal] = useState(false);

    const componente = {codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note};
        
    const insert = (e) => {
        e.preventDefault();                
        async function insertData(componente){
            return await axios.post("http://localhost:3001/Insert",{                
                    codice : componente.codice,
                    codiceCostruttore : componente.codiceCostruttore,
                    descrizione : componente.descrizione,
                    costruttore : componente.costruttore,
                    quantita : componente.quantita,
                    posizione : componente.posizione,
                    rivenditore1 : componente.rivenditore1,
                    rivenditore2 : componente.rivenditore2,
                    rivenditore3 : componente.rivenditore3,
                    note : componente.note
            })
        }
            
    insertData(componente)
        .then(result => {
            console.log(result);
            setResponse('Inserito con successo!');
        }).catch(e => {
            setResponse('Error: ' + e.response.data);            
        })
        setShowModal(true);
    }

    return (
        <AnimatePresence>
        <motion.div className="container" class="content" initial={{opacity: 0, x: -200, y: 0}} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: 0, y: -100 }} transition={{type: 'linear'}}>
            <form onSubmit={insert} autocomplete="off">
                <div class="grid grid-cols-4 gap-6">                    
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codice" class="peer" placeholder=" " value={codice} onChange={(e)=>setCodice(e.target.value)} required/>
                        <label for="codice">Codice</label>                        
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codiceCostruttore" class="peer" placeholder=" " value={codiceCostruttore} onChange={(e)=>setCodiceCostruttre(e.target.value)}/>
                        <label for="codiceCostruttore">Codice Costruttore</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="descrizione" class="peer" placeholder=" " value={descrizione} onChange={(e)=>setDescrizione(e.target.value)} required/>
                    <label for="descrizione">Descrizione</label>
                </div>
                <div class="grid grid-cols-5 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-3">
                        <input type="text" name="costruttore" class="peer" placeholder=" " value={costruttore} onChange={(e)=>setCostruttore(e.target.value)}/>
                        <label for="costruttore">Costruttore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantita" class="peer" required placeholder=" " value={quantita} onChange={(e)=>{
                            if ((!isNaN(e.target.value) && (e.target.value != " "))){
                                setQuantita(e.target.value)
                            }}}/>
                        <label for="quantita">Quantità</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="posizione" class="peer" placeholder=" " value={posizione} onChange={(e)=>setPosizione(e.target.value)}/>
                        <label for="posizione">Posizione</label>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore1" class="peer" placeholder=" " value={rivenditore1} onChange={(e)=>setRivenditore1(e.target.value)}/>
                        <label for="rivenditore1">Primo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore2" class="peer" placeholder=" " value={rivenditore2} onChange={(e)=>setRivenditore2(e.target.value)}/>
                        <label for="rivenditore2">Secondo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore3" class="peer" placeholder=" " value={rivenditore3} onChange={(e)=>setRivenditore3(e.target.value)}/>
                        <label for="rivenditore3">Terzo rivenditore</label>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6">
                <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="note" class="peer" placeholder=" " value={note} onChange={(e)=>setNote(e.target.value)}/>
                        <label for="note">Note</label>
                    </div>
                </div>
                <button type="submit" class="bottone">Aggiungi</button>
                <Modal showModal={showModal} onClose={()=> {
                    setShowModal(false);
                    setResponse('Checking status');
                    }} response={response} />                
            </form>            
        </motion.div>
        </AnimatePresence>
    );
}
 
export default Details;